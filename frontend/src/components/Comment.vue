<template>
  <section class="card-body">
    <div class="card-text">
      <div v-if="post.comments">
        <div v-for="comment in post.comments" :key="comment" class="comment">
          <p>{{ comment.comment }}</p>
          <button v-if="comment.userId === userInfos.id || user.admin === 1" @click="deleteComment($event, comment.id)" type="submit" class="btn btn-close"></button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {mapState, mapActions} from "vuex";


export default {
  name: "Comment",
  computed: {
    ...mapState( ["user","posts", "comment", "userInfos"] ),
    ...mapActions(["getAllPosts"]),
  },

  props: {
    post: {}
  },

  methods: {
    deleteComment(event, commentId) {
      event.preventDefault();
      this.$store.dispatch( "deleteComment", {id: commentId} ).then(() => {
        this.$store.dispatch("getAllPosts");
      });

    }

  },
}
</script>

<style scoped>
.comment {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;

}

</style>
