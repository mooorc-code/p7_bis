<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <nav class="col navbar navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                  aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarContent" class="collapse navbar-collapse">
            <div v-if="user.token == null">
              <li class="nav-link">
                <router-link to="/" class="nav-link">Connexion</router-link>
              </li>
              <li class="nav-link">
                <router-link to="/Signup" class="nav-link">Inscription</router-link>
              </li>
            </div>
            <div v-else>
              <ul class="navbar-nav ms-auto  text-center">

                <li class="nav-link">
                  <router-link to="/home" class="nav-link">Acceuil</router-link>
                </li>
                <li class="nav-link">
                  <router-link to="/profile" class="nav-link">Profil</router-link>
                </li>
                <li @click="logout($event)" class="nav-item nav-link ">Déconnexion</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>


<script>
import {mapState} from "vuex";

export default {
  name: "Header",
  mounted() {
    let userTmp = JSON.parse( localStorage.getItem( 'user' ) );
    this.user = userTmp.userId
  },
  computed: {
    ...mapState( ["user"] )
  },

  methods: {
    isLog: () => {
    },

    logout: (event) => {
      event.preventDefault()
      localStorage.clear()
      this.$router.push( '/' )
    }
  },

}

</script>

<style lang="scss">
.logo {
  width: 10vw;
  color: #cd515a;
}

</style>
