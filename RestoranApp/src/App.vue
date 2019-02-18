<template>
  <v-app id="inspire">
    <div id="app">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </v-app>

</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue'
export default {
  components: {
    appHeader:Header,
    appFooter:Footer
  }
}
</script>

<style lang="scss">
  body {
    margin: 0 auto;
    width: 90%;
    height: 600px;
  }
</style>
