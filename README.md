# vue-tech-blogs

## A simple Vue.js to fetch Wordpress REST API

### Contents

- A proxy node server built with `express` where wordpress apis are handled within folder `node_server`
- A front end application `vue-frontend` built with `vue.js` which consumes the proxy rest apis provided by the `node_server`

### Running the application

- Clone the repo to your local system/download the zip folder into your local system
- Move into the cloned repository directory `vue-tech-blog` or the folder where you have unzipped it.
- Now move into the `node_server` directory and run `npm install`
- Once the installation is complete run `node index.js`
- You should see on the `cmd/terminal` a message `Started at http://localhost:8087`
- So your Node Server is running on : http://localhost:8087

- Now Open another `terminal/cmd` window in the `vue-frontend` folder
- Run `npm-install` and wait till all the dependancies are installed
- Once the installation is complete run `npm run serve`
- You should see App running at:
  - Local:   http://localhost:8080/

### Application Playbook

- Once your application is loaded and running in browser you can see list of posts for the `Truecaller.blog` site of wordpress
- It consists of all the Blog posts by truecaller personnel ordered according to the `date` of publish of each post
- The page shows `top 25` results for the page you can click on `Next Page` to see the next set of 25 posts
- Similarly you can move to previous 25 posts using the `Previous Page` button
- Click on `Continue Reading...' button to get into each post to Read the details about the post
- On the `Sidebar` there are categories according to which you can fetch blog posts based on the categories selected
