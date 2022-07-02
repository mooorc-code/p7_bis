<template>
  <section class=" container col-md-8 offset-md-2 col-lg-8 offset-lg-2">

    <div class="card">
      <div class="card-body">

        <form @submit="createPost($event)" class="panel panel-default">
          <div class="mb-3 align-items-start">
            <label class="form-label d-flex align-items-start">Ajoutez une image</label>
            <input class="form-control form-control-sm" type="file" id="file" ref="fileInput" v-on:change="upload">
          </div>
          <div class="d-flex align-items-start flex-column form-group">
            <label class="panel-heading form-label">Nouveau message</label>
            <textarea v-model="message" class="panel-body container-fluid form-control" placeholder="nouveau message"
                      rows="3"></textarea>
          </div>

          <div class="d-flex panel-footer form-group">
            <button class="btn w-35" type="submit" value="Publier">
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
import {mapState} from 'vuex';


export default {
  name: "formPost",
  data() {
    return {
      selectedFile: null,
      message: '',
      file: '',
      response: [],
    }
  },
  computed: {
    ...mapState( ["user"] )
  },

  methods: {
    upload(event) {
      this.selectedFile = event.target.files[0];
    },

    createPost(event) {
      event.preventDefault();
      let formData = new FormData()
      formData.append( 'image', this.selectedFile )
      formData.append( 'publication', this.message )

      this.$store.dispatch("createPost", formData).then(() => {
        this.message = null
        this.selectedFile = null
        this.$store.dispatch("getAllPosts");
      });


    }
  }
 }
</script>

<style scoped>

</style>
