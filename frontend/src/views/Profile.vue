<template>
  <div class="container">
    <profil></profil>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import profil from "@/components/profil";

export default {
  name: "Profile",

  components:{
    profil,
  },
  computed:
      {    ...mapState( ["user"] )
  },
  methods: {


  }
}
</script>

<style lang='scss'>
.card {
  margin-bottom: 15px;
}

.img-profile {
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid darkcyan;
}
</style>
