<template>
  <div id="app">

    <div id="nav">
      <header-top></header-top>
    </div>


    <div id="page">
      <router-view></router-view>
    </div>


    <div id="footer">
      <footer-bottom></footer-bottom>
    </div>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "App",
  components: {
    "header-top": Header,
    "footer-bottom": Footer,

  },
  computed: {
    isLog: () => {
      return this.$store.getters.isLog;
    }
  },
  methods: {
    logout: () => {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("login");
      });
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f1f1f1;
}

#app {
  max-width: 100%;
}
nav {
  background-color: rgb(17, 37, 65);
  color: #fff;
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        padding: 5px 20px;
      }
      a:hover {
        color: yellow;
        text-decoration: none;
      }
    }
  }
  .router-link-exact-active {
    color: #FF4924;
  }
}

.right_place {
  margin-left: auto;
}



.logo-header {
  height: 45px;
}
</style>
