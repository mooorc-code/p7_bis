<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class=" btn-modale btn btn-danger">X</div>

      <form class="panel panel-default">
        <div class="mb-3  modalPostImg">
          <img :src="currentPost.image" alt="image-post">
        </div>

        <div class="mb-3 align-items-start">

          <label class="form-label d-flex align-items-start">Ajoutez une image</label>
          <input class="form-control form-control-sm" type="file" id="file" ref="fileInput"
                 placeholder="Nouvelle image" v-on:change="upload">
        </div>
        <div class="d-flex align-items-start flex-column form-group">
          <label class="panel-heading form-label">Nouveau message</label>
          <textarea v-model="currentPost.publication" class="panel-body container-fluid form-control"
                    rows="3"></textarea>
        </div>

        <div class="d-flex panel-footer form-group">
          <button @click="updatePost($event)" class="btn w-35" type="submit" value="Publier">
            Publier
          </button>
        </div>
        <div class="delete mt-5">
          <button @click="deletePost($event)"
                  type="submit" class="btn fw-bold ">Supprimer le post
          </button>
        </div>
      </form>

    </div>


  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";


export default {
  name: "Modale",

  props: ["revele", "toggleModale"],

  computed: {
    ...mapState( ["posts", "user", "likes", "userInfos", "currentPost"] )
  },

  methods: {
    ...mapActions( ["modifyPost", "getAllPosts"] ),
    upload(event) {
      this.selectedFile = event.target.files[0];
    },

    updatePost(event) {
      event.preventDefault();
      let formData = new FormData()
      formData.append( 'image', this.selectedFile )
      formData.append( 'publication', this.currentPost.publication )
      formData.append( 'id', this.currentPost.id )
      console.log( this.currentPost )

      this.$store.dispatch( "modifyPost", formData ).then(
      )
    },
    deletePost(event) {
      event.preventDefault();
      this.$store.dispatch( "deletePost", this.currentPost.id ).then( () => {
        this.$store.dispatch( "getAllPosts" );
      } );
    }
  }

}
</script>

<style lang="scss" scoped>
.bloc-modale {
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .modale {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
    top: 30%;
    .btn-modale {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .modalPostImg {
      display: flex;
      justify-content: center;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}







</style>
