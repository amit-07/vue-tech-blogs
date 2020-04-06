import Service from './service';

const resource = "/posts";

export default {
    get(category=undefined){
        return Service.get(`${resource}?category=${category}`);
    },
    getNextPage(pageCount){
        return Service.get(`${resource}?page=${pageCount}`);
    },
    getPost(post_Id){
        return Service.get(`${resource}/${post_Id}`)
    }
};