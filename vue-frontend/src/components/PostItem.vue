<template>
  <div class="post-bar">
    <div class="title-sec">
      <img
        class="thumb"
        v-bind:src="post.post_thumbnail.URL"
        v-bind:alt="post.title"
        width="50px"
        height="50px"
      />
      <h2 class="title">{{ post.title }}</h2>
    </div>
    <p v-html="post.excerpt"></p>
    <span style="float:right; padding-right: 17px; color: #164adb;">
        {{ daysElapsed }}
    </span>
    <router-link :to="{ name: 'post', params: { post_Id: post.ID }}">
      <b>Continue Reading...</b>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: ["post"],
  computed: {
    daysElapsed: function() {
      let timeDiff = Date.now() - new Date(this.post.date);
      if (Math.floor(timeDiff / (1000 * 3600 * 24))) {
        return `${Math.floor(timeDiff / (1000 * 3600 * 24))} Days ago`;
      } else if (Math.floor(timeDiff / (1000 * 3600))) {
        return `${Math.floor(timeDiff / (1000 * 3600))} Hours ago`;
      } else {
        return `${Math.floor(timeDiff / (1000 * 60))} Minutes ago`;
      }
    }
  }
};
</script>

<style scoped>
.post-bar {
  width: 60 vw;
  min-height: 300px;
  margin-bottom: 5%;
  border: 2px solid #164adb !important;
  color: black;
}
.thumb {
  border-radius: 50px;
  float: left;
  margin-left: 2%;
}
.title-sec {
  margin-top: 2%;
}
.title {
  color: #164adb;
  text-align: center;
}
p {
  margin: 5% 0;
  clear: both;
  text-align: start;
  padding: 0 5%;
}
a {
  text-decoration: none;
  color: #fff;
  padding: 1.5%;
  background: #164adb;
  border-radius: 5px;
}
</style>