<template>
  <section class="container">
    <div class="card-body">
      <form @submit="createComment($event)" class="panel panel-default">
        <div class="d-flex align-items-start flex-column form-group">
          <label class="panel-heading form-label">Écrire commentaire</label>
          <textarea v-model="commentaire" class="panel-body container-fluid form-control" placeholder="nouveau commentaire"
                    rows="3"></textarea>
        </div>
        <div class="d-flex panel-footer form-group">
          <button class="btn w-35" type="submit" value="Publier">
            Publier
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>

import {mapState} from 'vuex';

export default {
  name: "formComment",
  props:{postId: {type: Number}},
  data() {
    return {
      commentaire: '',
    }
  },
  computed: {
    ...mapState( ["userInfos", "user"] )
  },

  methods: {
    createComment(event) {
      event.preventDefault();
      let user = JSON.parse( localStorage.getItem( 'user' ) );
      let data = {
        comment: this.commentaire,
        userId: user.userId.id,
        postId: this.postId,
      }
      this.$store.dispatch("createComment", data).then(() => {

        this.$store.dispatch("getAllPosts");
      })
    },
  }
}
</script>
<style scoped>

</style>
