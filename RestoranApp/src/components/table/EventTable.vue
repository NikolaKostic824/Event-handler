<template>
  <div>
    <v-toolbar color="white">
      <v-toolbar-title>Naredni Dogadjaji</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-dialog v-model="dialog" max-width="700px">
        <v-card>
          <v-card-title :editItem="editItem">
            <span class="headline">Pogledaj/Uredi</span>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-flex>
              <v-card width="100%">
                <!-- Datum izdavanja -->
                <v-flex style="text-align: center; justify-content: center;">
                  <h2 style="color: #ffdc73; padding-top: 10px"> Datum: {{editedItem.datum}} </h2>
                </v-flex>
                <!-- Ime Klijenta -->
                <v-flex>
                  <v-text-field
                    box
                    name="Ime"
                    label="Ime"
                    v-model="editedItem.name"
                    background-color="white">
                  </v-text-field>
                </v-flex>
                <!-- Mesto -->
                <v-flex>
                  <v-text-field
                    box
                    label="Mesto"
                    v-model="editedItem.mesto"
                    background-color="white"
                    required>
                  </v-text-field>
                </v-flex>
                <!-- Namena Eventa -->
                <v-flex>
                  <v-text-field
                    box
                    v-model="editedItem.namena"
                    label="Namena"
                    background-color="white">
                  </v-text-field>
                </v-flex>
                <!-- Telefon -->
                <v-flex>
                  <v-text-field
                    box
                    label="Telefon"
                    v-model="editedItem.telefon"
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
                    v-model="editedItem.brGostiju"
                    type="number"></v-text-field>
                </v-flex>
                <!-- CheckBox items -->
                <v-container>
                  <v-layout row wrap style="background-color: white">
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.predjelo" :label="`Predjelo`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.corba" :label="`Čorba`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.supa" :label="`Supa`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.kuvanje" :label="`Kuvanje`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.pecenje" :label="`Pečenje`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.torta" :label="`Torta`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.pice" :label="`Piće`"></v-checkbox>
                    </v-flex>
                    <v-flex xs3>
                      <v-checkbox v-model="editedItem.dekoracija" :label="`Dekoracija`"></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-container>
                <!-- Cena po gostu -->
                <v-flex>
                  <v-text-field
                    box
                    background-color="white"
                    label="Cena po gostu/euro"
                    v-model="editedItem.cenaGost"
                    type="number">
                  </v-text-field>
                </v-flex>
                <!-- Kapara field -->
                <v-flex>
                  <v-text-field
                    box
                    background-color="white"
                    label="Kapara/euro"
                    v-model="editedItem.kapara"
                    type="number">
                  </v-text-field>
                </v-flex>
                <v-textarea
                  box
                  label="Dodatne Info"
                  v-model="editedItem.dodatneInfo"
                  background-color="white"
                  required>
                </v-textarea>
                <!-- Submit Dugme -->
                <v-flex class="text-xs-center">
                  <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                </v-flex>
              </v-card>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="elevation-10"
    >
      <!-- Noraml -->
      <template slot="items" slot-scope="props">
        <td> Event </td>
        <td >{{ props.item.datum }}</td>
        <td >{{ props.item.namena }}</td>

        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import json from '../../data/data.json'
  export default {
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'Events',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {text: 'Datum', value: 'datum'},
          {text: 'Namena', value: 'namena'},
        ],
        items: json,
        dialog: false,
        editedIndex: -1,
        editedItem: {
          datum: "",
          name: "",
          mesto: "",
          telefon: "",
          brGostiju: "",
          predjelo: false,
          corba: false,
          supa: false,
          kuvanje: false,
          pecenje: false,
          torta: false,
          pice: false,
          dekoracija: false,
          cenaGost: "",
          kapara: "",
          namena: "",
          dodatneInfo: ""
        },
        defaultItem: {
          datum: "",
          name: "",
          mesto: "",
          telefon: "",
          brGostiju: "",
          predjelo: false,
          corba: false,
          supa: false,
          kuvanje: false,
          pecenje: false,
          torta: false,
          pice: false,
          dekoracija: false,
          cenaGost: "",
          kapara: "",
          namena: "",
          dodatneInfo: ""
        }
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    methods: {
      deleteItem (item) {
        const index = this.items.indexOf(item);
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },
      editItem (item) {
        this.editedIndex = this.items.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
        console.log(this.editedItem);
      },

      close () {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      }
    },

  }
</script>

<style scoped>

</style>
