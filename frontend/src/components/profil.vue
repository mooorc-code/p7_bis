<template>
  <div class="container-fluid">
    <h1>Informations personnelles</h1>
    <div class="container">
      <div class="card-body">
        <div class="card img-profile"><img :src="userInfos.avatar" alt="avatar"></div>
        <div class="card"><p>{{ userInfos.nom }} {{ userInfos.prenom }}</p></div>
        <div class="card"><p>{{ userInfos.email }}</p></div>
        <div class="card"><p>{{ userInfos.poste }}</p></div>
        <div>
          <router-link to="editProfil" class=" text-decoration-none text-black-50">Modifier le profile
        </router-link>

        </div>


      </div>
    </div>
  </div>
</template>

<script>

import { mapState} from 'vuex'

export default {
  name: "profil",

  computed:
      {
        ...mapState( ["user", "status","userInfos"] )
      },

  methods: {


  }
}
</script>

<style lang='scss'>
.card {
  margin-bottom: 15px;
}


</style>
