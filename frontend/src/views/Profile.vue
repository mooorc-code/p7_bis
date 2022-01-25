<template>
  <div class="card">
    <h1 class="card-title">Espace Perso</h1>
    <p class="card-subtitle">Voilà donc qui je suis...</p>
    <p>{{ user.prenom }} {{ user.nom }} {{ user.email }} {{ user.poste }}</p>
    <img :src="user.avatar"/>
    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Profile",
  mounted: function () {
    console.log( this.$store.state.user );
    if (this.$store.state.user.userId === -1) {
      this.$router.push( '/Login' );
      return;
    }
    // this.$store.dispatch( 'getUserInfos'  );
  },
  computed: {
    ...mapState( {
      user: 'userInfos',
    } )
  },
  methods: {
    logout() {
      this.$store.commit( 'logout' );
      this.$router.push( '/Login' );
    }
  }
}
</script>

<style scoped>

</style>
