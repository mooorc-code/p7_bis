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
            <div v-if="this.token === ''">
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
                <li class="nav-item nav-link ">
                  <a @click="logout($event)" class="nav-link ">Déconnexion</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>


<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Header",


  computed: {
    ...mapState( ["user", "status", "userInfos"] ),
    token(){
      return  localStorage.getItem('token') || ''
    }
  },
  mounted() {

    if (this.user.token) {
      this.getUserInfosById()
    }

  },


  methods: {
    ...mapActions( ["getUserInfosById"] ),

    logout: (event) => {
      event.preventDefault()
      localStorage.clear()
      window.location = "/"
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
