<template>
  <section class="gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <form class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Inscription</h2>

                <div class="form-groupe form-white mb-4">
                  <input v-model="email" type="email" id="typeEmailX" class="form-control form-control-lg"/>
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-model="nom" type="text" id="typeLastNameX" class="form-control form-control-lg"/>
                  <label class="form-label" for="typeLastNameX">Nom</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-model="prenom" type="text" id="typeNameX" class="form-control form-control-lg"/>
                  <label class="form-label" for="typeNameX">Prénom</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg"/>
                  <label class="form-label" for="typePasswordX">Mot de passe</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-model="poste" type="text" id="typePosteX" class="form-control form-control-lg"/>
                  <label class="form-label" for="typePosteX">Poste</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-on:change="upload" id="typeAvatarX" type="file" ref="fileInput"
                         class="form-control form-control-lg"/>
                  <label class="form-label" for="typeAvatarX">Avatar</label>
                </div>

                <button @click="createUser($event)" class="button btn btn-outline-light btn-lg px-5" type="submit">Créer
                  un
                  compte
                </button>
              </form>
              <div>
                <p class="m-0">Tu as déjà un compte ?
                  <router-link to="/Login" class="text-decoration-none text-white-50 fw-bold">Se connecter</router-link>
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
import {mapActions, mapState} from 'vuex'

export default {
  name: "Signup",
  data: () => {
    return {
      selectedFile: null,
      file: '',
      response: [],
    }
  },
  computed: {

    ...mapState( ['status'] )
  },
  methods: {
    ...mapActions( ["signup"] ),

    upload(event) {
      this.selectedFile = event.target.files[0];
    },

    createUser(event) {
      event.preventDefault();
      let formData = new FormData()
      formData.append( 'image', this.selectedFile )
      formData.append( 'poste', this.poste )
      formData.append( 'email', this.email )
      formData.append( 'password', this.password )
      formData.append( 'prenom', this.prenom )
      formData.append( 'nom', this.nom )


      this.$store.dispatch( 'signup', formData ).then( () => {
        this.$store.dispatch( 'login', {
          email: this.email,
          password: this.password,
        } ).then( () => {
          window.location ="/home"
        }, (error) => {
          console.log( error );
        } )

      } )
    }
  }
}
</script>

<style lang="scss">

</style>
