<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <nav class="col navbar navbar-expand-lg navbar-dark">
          <div v-if="token">
            <router-link to="/Home" class="navbar-brand">
              <img class="logo mx-1 mx-sm-4" src="../assets/icon-left-font-monochrome-white.svg" alt="logo Groupomania blanc">
            </router-link>
          </div>
          <div v-else>
            <router-link to="/login" class="navbar-brand">
              <img class="logo mx-1 mx-sm-4" src="../assets/icon-left-font-monochrome-white.svg" alt="logo Groupomania blanc">
            </router-link>
          </div>



          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto  text-center">
              <div v-if="isLog">
                <li class="nav-link">
                  <router-link to="/home" class="nav-link">Acceuil</router-link>
                </li>
                <li class="nav-link">
                  <router-link to="/profile" class="nav-link">Profil</router-link>
                </li>
                <li @click="logout" class="nav-item">
                  <p class="nav-link logout">Déconnexion</p>
                </li>
              </div>

              <div v-else>
<!--                <li class="nav-link">-->
<!--                  <router-link to="/Login" class="nav-link">Connexion</router-link>-->
<!--                </li>-->
<!--                <li class="nav-link">-->
<!--                  <router-link to="/Signup" class="nav-link">Inscription</router-link>-->
<!--                </li>-->

              </div>

              <li v-if="token">
                <router-link to="/Profile" exact>Profile</router-link>
              </li>
              <li v-else>
                <router-link to="/Login" exact>Connexion</router-link>
              </li>

              <li v-if="token" v-on:click="logout">
                <router-link to="/Login" exact>Déconnexion</router-link>
              </li>
              <li v-else>
                <router-link to="/Signup" exact>Inscription</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </div>

  </header>
</template>


<script>
export default {
  name: "Header"
}

</script>

<style lang="scss">
.logo{
  width: 10vw;
  color: #cd515a;
}

</style>
