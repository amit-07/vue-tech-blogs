<template>
  <div class="home">
    <h1>Truecaller.Blog Posts</h1>
    <div>
      <img v-if="loading" src="../assets/loader.gif"/>
      <div class="content" v-else>
        <SideBar class="sidebar" v-bind:categories="categories" />
        <PostBar class="posts" v-bind:posts="posts" />
        <button v-on:click="getPrev(pageCount)" class="loadMore">Previous Page</button>
        <button v-on:click="getNext(pageCount)" class="loadMore">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import PostBar from "./PostBar";
import SideBar from "./SideBar";
import _ from "lodash";
import { ServiceFactory } from "../services/serviceFactory";
const postService = ServiceFactory.get("posts");

export default {
  name: "Home",
  data() {
    return {
      posts: [],
      loading: false,
      categories: null,
      pageCount: 1
    };
  },

  created() {
    this.fetch();
  },
  components: {
    PostBar,
    SideBar
  },
  computed: {
    unique: function() {
      let cats = _.uniq(Object.values(_.uniq(this.categories)));
      // return [...new Set(cats.reduce((acc, curr) => acc.push(curr), []))];
      return cats;
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    this.getPostsByCategory(to.query.category);
    next();
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    async fetch() {
      this.loading = true;
      try {
        const { data } = await postService.get();
        this.loading = false;
        this.posts = data;
        // let cats = data.map(item => item.categories);
        this.categories = data.map(item => item.categories);
      } catch (e) {
        console.log(e);
      }
    },
    async getPostsByCategory(category) {
      this.isLoading = true;
      try {
        const { data } = await postService.get(category);
        this.loading = false;
        this.posts = data;
      } catch (e) {
        console.log(e);
      }
    },
    async getNext(pageCount) {
      pageCount += 1;
      this.isLoading = true;
      try {
        const { data } = await postService.getNextPage(pageCount);
        this.loading = false;
        this.pageCount = pageCount;
        this.posts = data;
      } catch (e) {
        console.log(e);
      }
    },
    async getPrev(pageCount) {
      if(pageCount === 1){
        pageCount = 1;
      }else{
        pageCount -= 1;
      }
      this.isLoading = true;
      try {
        const { data } = await postService.getNextPage(pageCount);
        this.loading = false;
        this.pageCount = pageCount;
        this.posts = data;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
  color: #164adb;
}
/* .home{
  
} */
.loadMore {
  padding: 15px;
  border: 2px solid #164adb;
  background-color: azure;
  color: #164adb;
  font-weight: bold;
  cursor: pointer;
  clear: both;
  align-self: center;
  margin: 0 2% 0 35%;
}

.sidebar {
  flex-basis: 25%;
}
.posts {
  flex-basis: 75%;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
