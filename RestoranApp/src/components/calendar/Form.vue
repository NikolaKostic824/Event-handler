<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card width="100%">
          <!-- Datum izdavanja -->
          <v-flex style="text-align: center; justify-content: center;">
            <h2 style="color: #ffdc73; padding-top: 10px"> Datum: {{picker}} </h2>
          </v-flex>
          <!-- Ime Klijenta -->
          <v-flex>
            <v-text-field
              box
              name="Ime"
              label="Ime"
              v-model="events.name"
              background-color="white">
            </v-text-field>
          </v-flex>
          <!-- Mesto -->
          <v-flex>
            <v-text-field
              box
              label="Mesto"
              v-model="events.mesto"
              background-color="white"
              required>
            </v-text-field>
          </v-flex>
          <!-- Namena Eventa -->
          <v-flex>
            <v-text-field
              box
              v-model="events.namena"
              label="Namena"
              background-color="white">
            </v-text-field>
          </v-flex>
          <!-- Telefon -->
          <v-flex>
            <v-text-field
              box
              label="Telefon"
              v-model="events.telefon"
              background-color="white"
              mask="phone">
            </v-text-field>
          </v-flex>
          <!-- Broj Gostiju na Eventu -->
          <v-flex>
            <v-text-field
              box
              background-color="white"
              label="Br. Gostiju"
              v-model="events.brGostiju"
              type="number"></v-text-field>
          </v-flex>
          <!-- CheckBox items -->
          <v-container>
            <v-layout row wrap style="background-color: white">
              <v-flex xs3>
                <v-checkbox v-model="events.predjelo" :label="`Predjelo`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.corba" :label="`Čorba`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.supa" :label="`Supa`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.kuvanje" :label="`Kuvanje`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.pecenje" :label="`Pečenje`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.torta" :label="`Torta`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.pice" :label="`Piće`"></v-checkbox>
              </v-flex>
              <v-flex xs3>
                <v-checkbox v-model="events.dekoracija" :label="`Dekoracija`"></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- Cena po gostu -->
          <v-flex>
            <v-text-field
              box
              background-color="white"
              label="Cena po gostu/euro"
              v-model="events.cenaGost"
              type="number">
            </v-text-field>
          </v-flex>
          <!-- Kapara field -->
          <v-flex>
            <v-text-field
              box
              background-color="white"
              label="Kapara/euro"
              v-model="events.kapara"
              type="number">
            </v-text-field>
          </v-flex>
          <v-textarea
            box
            label="Dodatne Info"
            v-model="events.dodatneInfo"
            background-color="white"
            required>
          </v-textarea>
          <!-- Submit Dugme -->
          <v-flex class="text-xs-center">
            <v-btn style="background-color: #ffdc73" @click="colectForm">Potvrdi</v-btn>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import json from '../../data/data.json'
  export default {
    props: ['picker'],
    data() {
      return {
        event:json,
        events: {
          name: '',
          mesto: '',
          telefon: '',
          brGostiju: '',
          predjelo: false,
          corba: false,
          supa: false,
          kuvanje: false,
          pecenje: false,
          torta: false,
          pice: false,
          dekoracija: false,
          cenaGost: '',
          kapara: '',
          namena: '',
          dodatneInfo: ''
        }
      }
    },

    methods: {
      colectForm() {
        const objekat = {
          datum: this.picker,
          name: this.events.name,
          mesto: this.events.mesto,
          telefon: this.events.telefon,
          brGostiju: this.events.brGostiju,
          predjelo: this.events.predjelo,
          corba: this.events.corba,
          supa: this.events.supa,
          kuvanje: this.events.kuvanje,
          pecenje: this.events.pecenje,
          torta: this.events.torta,
          pice: this.events.pice,
          dekoracija: this.events.dekoracija,
          cenaGost: this.events.cenaGost,
          kapara: this.events.kapara,
          namena: this.events.namena,
          dodatneInfo: this.events.dodatneInfo,
        };
        //Posting new Event to local JSON data obj
        this.event.push(objekat);

      }
    }
  }
</script>

<style scoped>
</style>
