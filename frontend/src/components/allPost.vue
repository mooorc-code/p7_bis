<template>
  <section>
    <div class="container">
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
      'user',
      "posts"
    ] )
  },
  mounted() {
    this.$store.dispatch("getAllPosts");
  },

}
</script>

<style lang="scss" scoped>

.container{

  .card{
    border: none;
  }

}

</style>
