<template>
  <router-link to="editProfil" class=" text-decoration-none text-black-50">retour
  </router-link>
  <div class="container-fluid">

    <h1>Modifications du mot de passe</h1>
    <div class="card">
      <div class="card-body form-white mb-4">
        <label class="form-label" for="password">Nouveau mot de passe</label>
        <input v-model="password" type="password" id="password" class="form-control form-control-lg"/>
      </div>
    </div>
    <div class="card">
      <div class="card-body form-white mb-4">
        <label class="form-label" for="confirmPassword">Confirmez le mot de passe</label>
        <input v-model="confirmPassword" type="password" id="confirmPassword" class="form-control form-control-lg"/>
      </div>
    </div>

    <button @click="editPasswordForm($event)" type="submit" class="btn w-35">Valider</button>
  </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "editPassword",
  data() {
    return {
      token:"",
      password: "",
      confirmPassword:"",
      }
    },



  computed:
      {...mapState( [""] )},
  methods: {
    ...mapActions(["editPassword"]),
    editPasswordForm(event) {


      if (this.password === this.confirmPassword ){
        this.editPassword(
            {
              password: this.password,
            }

        )
        this.password = null
        this.confirmPassword = null
        alert("Mot de passe modifié")
        window.location = "/profile"
      }else {
        alert("attention ! Mot de passe non identique")
      }
      event.preventDefault();


    }

  }
  ,


}
</script>

<style scoped>

</style>
