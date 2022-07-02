<template>
  <section class=" gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <form class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Connexion</h2>
                <div class="form-group">
                  <input  v-model="email" type="email" id="typeEmailX" class="form-control form-control-lg"
                         placeholder="Enter email"/>
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>
                <div class="form-group">
                  <input v-model="password" type="password" placeholder="Enter password" id="typePasswordX"
                         class="form-control form-control-lg">
                  <label class="form-label" for="typePasswordX">Mot de passe</label>
                </div>
                <button @click="login($event)" class="button btn btn-outline-light" >Connexion
                </button>
              </form>

              <div>
                <p class="m-0">Tu n'as pas encore de compte ?
                  <router-link to="/Signup" class="text-decoration-none text-white-50 fw-bold">S'inscrire</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'Login',

  computed: {
    ...mapState( ['status'] )
  },

  methods: {
    login(e) {
      e.preventDefault()
      this.$store.dispatch( 'login', {
        email: this.email,
        password: this.password,
      } ).then( () => {
        window.location ="/home"

      }, (error) => {
        console.log( error );
      } )
    },
  }
}

</script>

<style lang="scss">


</style>>
