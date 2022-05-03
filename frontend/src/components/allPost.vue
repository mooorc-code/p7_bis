<template>
  <section>
    <div class="container">
      <button class="btn" @click="reload($event)">recharger</button>
      <div class="card">
        <div class="card-body">
          <posts>
          </posts>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import Posts from "@/components/Posts";



export default {
  name: "allPost",
  components: { Posts},
  computed: {
    ...mapState( [
      'userInfos',
      'user',
      "posts"
    ] )
  },
  methods: {

    reload(event){
      event.preventDefault();
      this.$store.dispatch("getAllPosts");
    }
  }
}
</script>

<style scoped>

</style>
