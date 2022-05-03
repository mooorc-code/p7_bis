<template>
  <div class="container-fluid">
    <h1>Modifications du profile</h1>
    <div class="card">
      <div class="card-body form-white mb-4">
        <label for="avatar" class="form-label d-flex align-items-start">Modifiez votre photo de profile</label>
        <input class="form-control form-control-sm" type="file" id="file" ref="fileInput" v-on:change="upload">
        <button @click="editUser($event)" type="submit" class="btn w-35" value="Valider">Valider
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-start flex-column form">
          <h4>Votre poste</h4>
          <label class="form-label" for="poste">Modifiez votre poste:</label>
          <input v-model="currentUser.poste" type="text" id="poste" name="Poste" class="form-control form-control-lg"/>
          <button @click="editUser($event)" type="submit" class="btn w-35" >Valider</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body form-white mb-4">
        <label class="form-label" for="password">Mot de passe</label>
        <input v-model="currentUser.password" type="password" id="password" class="form-control form-control-lg"/>
        <button @click="editUser($event)" type="submit" class="btn w-35" >Valider</button>
      </div>
    </div>
    <div class="card">
      <div class="card-body form-white mb-4">
        <label class="form-label" for="email">Modifiez votre email:</label>
        <input v-model="currentUser.email" type="text" id="email" class="form-control form-control-lg"/>
        <button @click="editUser($event)" type="submit" class="btn w-35" >Valider</button>
      </div>
    </div>


  </div>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "editProfil",
  data() {
    return {
      currentUser: {},
      selectedFile: null,
      file: '',
      response: [],
    }
  },
  mounted() {
    let user = JSON.parse( localStorage.getItem( 'user' ) );
    this.currentUser = {
      email: user.userId.email,
      poste: user.userId.poste,
      avatar: user.userId.avatar,
      id: user.userId.id
    }
  },
  computed:
      {...mapState( ["user"] )},
  methods: {
    upload(event) {
      this.selectedFile = event.target.files[0];
      this.currentUser = event;
    },
    editUser(event){
      event.preventDefault();

      this.$store.dispatch( 'editUser', this.currentUser);

      let user = JSON.parse( localStorage.getItem( 'user' ) );
      user.userId.email = this.currentUser.email;
      user.userId.poste = this.currentUser.poste;
      user.userId.avatar = this.currentUser.avatar

      localStorage.setItem('user', JSON.stringify(user));

    },

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
  width: 150px;
  max-width: border-box;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid darkcyan;
}
</style>
