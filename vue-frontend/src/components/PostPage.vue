<template>
  <div>
    <img v-if="loading" src="../assets/loader.gif">
    <div v-else class="page">
      <img
        v-bind:src="postDetails.post_thumbnail.URL"
        v-bind:alt="postDetails.title"
        width="672px"
        height="372px"
      />
      <h1>{{ postDetails.title }}</h1>
      <span>
        <b>Date: {{ datePublished }}</b>
      </span>
      <article v-html="postDetails.content"></article>
    </div>
  </div>
</template>

<script>
import { ServiceFactory } from "../services/serviceFactory";
const postService = ServiceFactory.get("posts");

export default {
  name: "PostPage",
  props: ["post_Id"],
  data() {
    return {
      loading: false,
      postDetails: null
    };
  },
  components: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    async fetchPostDetails(postId) {
      this.loading = true;
      try {
        const { data } = await postService.getPost(postId);
        this.loading = false;
        this.postDetails = data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.fetchPostDetails(this.post_Id);
  },
  computed: {
    datePublished: function() {
      let current_datetime = new Date(this.postDetails.date);
      let formatted_date =
        current_datetime.getDate() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getFullYear();
      return formatted_date;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  text-align: left;
  width: 55vw;
  margin-left: 20vw;
}
article {
  width: 672px;
  overflow: hidden;
}
</style>
