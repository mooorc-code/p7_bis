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

}

nav ul {
  display: flex;
  align-items: center;
}

nav li {
  list-style: none;
}

.right_place {
  margin-left: auto;
}

nav li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 20px;
}

nav a:hover {
  color: yellow;
  text-decoration: none;
}

nav .router-link-exact-active {
  color: #FF4924;
}

.logo-header {
  height: 45px;
}
</style>
