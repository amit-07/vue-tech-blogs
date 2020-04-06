const express = require('express');
const axios = require('axios');
const CircularJSON = require('flatted');
const app = express();

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.get("/*", (req, res, next) =>  {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "Link");
    res.header("Access-Control-Allow-Methods", "HEAD,GET");
    next();
});

app.get('/', async(req, res) => {
    res.redirect('/posts');
});

queryUrl = (query) => {
    const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/truecaller.blog/posts?number=25&order_by=date`
    if(query.category && query.category !== "undefined"){
        return `${BASE_URL}&category=${query.category}`
    }else if(query.page){
        const pageNum = parseInt(query.page);
        return `${BASE_URL}&page=${pageNum}`;
    }else{
        return BASE_URL;
    }
};

app.get('/posts', async(req, res) => {
    const query = req.query;
    try{
        // const WPAPI = await require('wpapi')
        // const url = new WPAPI({ endpoint : 'truecaller.blog' });
        const url = queryUrl(query);
        try{
            const posts = await axios.get(url);
            if(posts.data){
                return res.json(posts.data.posts);
            }
            res.status(404);
            res.json("Not Found");
        }catch(e){
            res.status(500);
            return res.json(e);
        }
    }catch (e) {
        res.status(500);
        return res.json(e);
    }
});

app.get(`/posts/:postId/related`, async(req, res) => {
            let postId = req.params.postId;
            try{
                    const relatedUrl = `https://public-api.wordpress.com/rest/v1.1/sites/truecaller.blog/posts/${postId}/related?http_envelope=false`;
                    const relatedPosts = await axios.get(relatedUrl);
                    if(relatedPosts){
                        return res.json(relatedPosts);
                    }
                    res.status(404);
                    res.json("Not Found");
            }catch(e){
                res.status(500);
                return res.json(e);
            }
});

app.get(`/posts/:post_Id`, async (req, res) => {
    let post_Id = req.params.post_Id
    try{
        const postUrl = `https://public-api.wordpress.com/rest/v1.1/sites/truecaller.blog/posts/${post_Id}`;
        const postDetails = await axios.get(postUrl);
        if(postDetails){
            return res.json(postDetails.data);
        }
        res.status(404);
        res.json("Not Found");
    }catch(e){
        res.status(500);
        res.json(e);
    }
})

const server = app.listen(8087, () => {
    console.log("Started at http://localhost:%d\n", server.address().port);
});

