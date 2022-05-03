<template>
  <div v-for="post in posts" :key="post" class="card">
    <p>ici</p>
    <div class="card-body card-post">
      <div class="card post">
        <p>{{ post.publication }}</p>
        <button @click="deletePost($event, post.id)" v-if="post.userId == user.userId.id" type="submit" class="btn btn-close"></button>
      </div>
      <img :src="post.image" alt="image utilisateur" class="card-img">
      <div class="card-footer">
        <formComment :post-id="post.id"></formComment>
        <Comment :post="post"></Comment>
      </div>
    </div>

  </div>
</template>

<script>


import {mapState} from "vuex";
import formComment from "@/components/formComment";
import Comment from "@/components/Comment";


export default {
  name: "posts",
  components: {formComment: formComment, Comment},
  props:{id: {type: Number}},

  data() {
    return {
      user: {
        userId: {}
      }
    }
  },
  computed: {
    ...mapState( ["posts" ] )
  },
  created() {
    this.user = JSON.parse( localStorage.getItem( 'user' ) );
  },
  methods: {
    deletePost(event, postId) {
      event.preventDefault();
      this.$store.dispatch( "deletePost", {id: postId} ).then(() => {
        this.$store.dispatch("getAllPosts");
      });
    }
  },
}
</script>

<style scoped>


</style>
