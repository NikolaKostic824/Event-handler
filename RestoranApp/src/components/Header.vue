<template>
  <v-toolbar id="head">
    <v-toolbar-title>Restoran Kostić</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" flat>Naredni Dogadjaji</v-btn>
      <v-btn to="/calendar" flat>Kalendar</v-btn>
      <v-btn to="/contacts" flat>Kontakti</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
	export default {

	}
</script>

<style scoped>
  #head {
    background-color: #ffdc73;
  }
</style>
