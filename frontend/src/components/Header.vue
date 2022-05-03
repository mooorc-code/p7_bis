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
            <div>
              <ul class="navbar-nav ms-auto  text-center">

                <li class="nav-link">
                  <router-link to="/home" class="nav-link">Acceuil</router-link>
                </li>
                <li class="nav-link">
                  <router-link to="/profile" class="nav-link">Profil</router-link>
                </li>
                <li @click="logout()" class="nav-item nav-link ">Déconnexion</li>
              </ul>
            </div>

            <div >
              <!--                <li class="nav-link">-->
              <!--                  <router-link to="/Login" class="nav-link">Connexion</router-link>-->
              <!--                </li>-->
              <!--                <li class="nav-link">-->
              <!--                  <router-link to="/Signup" class="nav-link">Inscription</router-link>-->
              <!--                </li>-->

            </div>
            <div>
              <ul>
                <li v-if="token">
                  <router-link to="/Profile" exact>Profile</router-link>
                </li>
                <li>
                  <router-link to="/" exact>Connexion</router-link>
                </li>

                <li @click="logout()">Déconnexion</li>
                <li>
                  <router-link to="/Signup" exact>Inscription</router-link>
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
export default {
  name: "Header",
  mounted() {
    let userTmp = JSON.parse( localStorage.getItem( 'user' ) );
    this.user = userTmp.userId
  },
  methods: {

    logout() {
      this.$store.commit( 'logout' );
      this.$router.push( '/' );
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
