<template>
  <div>
    <div>
    <v-layout row wrap >
      <v-flex xs12 sm3>
        <v-checkbox color="#ffdc73" v-model="landscape" hide-details label="Landscape"></v-checkbox>
      </v-flex>
      <v-flex xs12 sm3>
        <v-checkbox color="#ffdc73" v-model="reactive" hide-details label="Reactive"></v-checkbox>
      </v-flex>
    </v-layout>
    <v-date-picker full-width  color="#ffdc73" v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
    </div>
    <v-flex style="text-align: center; justify-content: center; margin-top: 10px; margin-bottom: 10px">
      <v-btn @click="dialog = true" color="#ffdc73">Zakazi</v-btn>
    </v-flex>

    <v-dialog v-model="dialog" width="50%" slot="activator">
      <app-form :picker="picker"></app-form>
    </v-dialog>
  </div>
</template>

<script>
  import Form from '../calendar/Form.vue'

  export default {
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: true,
        reactive: true,
        dialog: false
      }
    },
    components: {
      appForm: Form
    }
  }
</script>

<style scoped>

</style>
