<template>
  <div>
    <router-link to="profile" class=" text-decoration-none text-black-50">retour
    </router-link>
  </div>
  <div class="container-fluid">
    <h1>Modifications du profile</h1>
    <div class="card">
      <div class="card-body form-white mb-4">
        <label for="file" class="form-label d-flex align-items-start">Modifiez votre photo de profile</label>
        <input class="form-control form-control-sm" type="file" id="file" ref="fileInput" v-on:change="upload">
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-start flex-column form">
          <h4>Votre poste</h4>
          <label class="form-label" for="poste">Modifiez votre poste:</label>
          <input v-model="userInfos.poste" type="text" id="poste" name="Poste" class="form-control form-control-lg"/>

        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body form-white mb-4">
        <label class="form-label" for="email">Modifiez votre email:</label>
        <input v-model="userInfos.email" type="text" id="email" class="form-control form-control-lg"/>

      </div>
    </div>

    <button @click="editProfil($event)" type="submit" class="btn w-35">Valider</button>

    <div>
      <router-link to="/editPassword" class=" text-decoration-none text-black-50">Modifier le mot de passe</router-link>
    </div>

      <button @click="deleteProfil($event)"  class="btn text-decoration-none">supprimer le profil</button>


  </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "editProfil",
  data() {
    return {
      selectedFile: null,
      file: '',
      response: [],
    }
  },

  computed:
      {...mapState( ["userInfos", "user"] )},
  methods: {
    deleteProfil(e){
      e.preventDefault();
      this.$store.dispatch("deleteUser",{
        id: this.userInfos.id
      }).then(()=>{
        confirm("Confirmer la suppression")
        localStorage.clear()
        window.location = "/"
      })
    },
    ...mapActions( ["editUser", "getUserInfosById", "deleteUser"] ),

    upload(event) {
      this.selectedFile = event.target.files[0];
    },
    editProfil(event) {
      event.preventDefault();
      let formData = new FormData()
      formData.append( 'image', this.selectedFile )
      formData.append( 'poste', this.userInfos.poste )
      formData.append( 'email', this.userInfos.email )
      this.editUser(
          formData
      )
      alert( "Mise à jour du profil" )
      window.location = "/profile"

    },



  }
}
</script>

<style lang='scss'>
.card {
  margin-bottom: 15px;
}


</style>
