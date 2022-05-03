<template>
  <section>
    <div class="container">
      <h2 class="titre text-center">actualité</h2>
      <formPost></formPost>
      <allPost>
      </allPost>
    </div>
  </section>
</template>
<script>

import allPost from "@/components/allPost";
import formPost from "@/components/formPost";


export default {
  name: "Home",
  components: {
    formPost,
    allPost,

  }


}
</script>

<style scoped>

</style>
