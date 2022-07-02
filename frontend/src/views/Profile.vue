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


}
</script>

<style lang='scss'>
.card {
  margin-bottom: 15px;
}

.img-profile {
  border: none;
  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid black;
    max-width: 200px;
  }
}
</style>
