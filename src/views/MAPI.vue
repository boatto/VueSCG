<template >
  <div id="MAPI">
    <h1>MAPI</h1>
    <ul v-if="posts && posts.length">
    <li v-for="post of posts" :key="post.userId">
      <p><strong>{{post.id}} : {{post.title}}</strong></p>
     
      <p>{{post.body}}</p>
    </li>
  </ul>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    
  }
}
</script>


<style>
</style>
