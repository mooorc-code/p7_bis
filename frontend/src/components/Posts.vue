<template>
  <div v-for="post in posts" :key="post" class="card col-md-8 offset-md-2 col-lg-8 offset-lg-2 formCard" >
    <div class="card-body card-post">
      <div class="contentUser">
        <div class="describeUser">
          <img :src="post.user.avatar" alt="image-profil">
          <div class="nameUser">
            <div class="nom">{{ post.user.nom }}</div>
            <div>{{ post.user.prenom }}</div>
          </div>
        </div>

        <div v-if="post.userId === userInfos.id || user.admin === 1" class="container my-2 upUser">
          <Modale :revele="revele"  :toggleModale="toggleModale">
          </Modale>
          <div v-on:click="toggleModale(post)" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
          </svg>
          </div>
        </div>
      </div>

    </div>
    <div class="card post bloc2">
      <div>
        <p >{{ post.publication }}</p>
      </div>

    </div>
    <img :src="post.image" alt="image utilisateur" class="card-img ">
    <div id="like">
      <button class="btn" @click="Like(post)"> {{ post.likes.length }} J'aime</button>
    </div>
    <div class="card-footer">
      <formComment :postId="post.id"></formComment>
      <Comment :post="post"></Comment>
    </div>
  </div>

</template>

<script>


import {mapState, mapActions} from "vuex";
import formComment from "@/components/formComment";
import Comment from "@/components/Comment";
import Modale from "@/components/Modale";


export default {
  name: "posts",
  data() {
    return {
      revele: false,
      currentPost: {


      }
    };
  },

  components: {formComment, Comment, Modale},
  props: {id: {type: Number}},



  computed: {
    ...mapState( ["posts", "user", "likes", "userInfos", "currentPost"] )
  },

  methods: {
    toggleModale: function (post) {
      this.revele = !this.revele
      if (this.revele === true){
        document.documentElement.style.overflow ='hidden'
        this.createCurrentPost(post)
      }else {
        document.documentElement.style.overflow = 'auto'
        this.getAllPosts()



      }
    },
    ...mapActions( ["getAllPosts", "getUserInfosById", "createCurrentPost"] ),



    Like(post) {


      if (post.myLikes.length === 0) {

        this.$store.dispatch( "liked", {
          postId: post.id
        } ).then( () => {
          this.getAllPosts();
        } )
      } else {
        this.$store.dispatch( "disliked", {
          postId: post.id
        } ).then( () => {
          this.getAllPosts();
        } )
      }
    },


  },
}
</script>

<style lang="scss" scoped>
.formCard{
  margin-bottom: 50px;
}

.contentUser{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  .describeUser{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    .nom{
      margin-right: 10px;
      margin-left: 10px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .nameUser{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

  }
  .upUser{
    display: flex;
    flex-direction: row;
    justify-content: right;
    .bloc2{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

}



</style>
