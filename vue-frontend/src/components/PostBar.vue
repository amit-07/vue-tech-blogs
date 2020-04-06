<template>
  <div>
      <PostItem 
        v-for="post in posts"
        v-bind:key="post.ID"
        v-bind:post="post"
      /> 
  </div>
</template>

<script>
import PostItem from './PostItem'

export default {
  name: 'PostBar',
  props:['posts'],
  components:{
      PostItem
  }
}
</script>

<style scoped>
</style>