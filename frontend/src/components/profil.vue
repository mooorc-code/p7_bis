<template>
  <div class="container-fluid">
    <h1>Informations personnelles</h1>
    <div class="container">
      <div class="card-body">
        <div class="card img-profile"><p>{{user.avatar}}</p></div>
        <div class="card"><p>{{user.nom}} {{user.prenom}}</p></div>
        <div class="card"><p>{{user.email}}</p></div>
        <div class="card"><p>{{user.poste}}</p></div>
        <div>
          <p class="m-0 ">
            <router-link to="editProfil" replace class="text-decoration-none text-black-50">Modifier le profile</router-link>
          </p>
        </div>
        <button class="btn text-decoration-none">supprimer le profil</button>
      </div>
    </div>
  </div>

</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "profil",
  data() {
    return {
      user: [],
      poste: '',
      avatar: '',
      email: '',
      password: '',
    }
  },
  mounted() {
    let userTmp = JSON.parse( localStorage.getItem( 'user' ) );
    this.user = userTmp.userId
  },
  computed:
      {    ...mapState( ["user"] )
      },
  methods: {
    logout() {
      this.$store.commit( 'logout' );
      this.$router.push( '/Login' );
    }
  }
}
</script>

<style lang='scss'>
.card {
  margin-bottom: 15px;
}


.img-profile {
  width: 200px;
  height: 200px;
  max-width: 200px;
  border-radius: 50%;
  border: 1px solid darkcyan;
}
</style>
