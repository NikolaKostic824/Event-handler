<template>
 <v-treeview :items="items">
 </v-treeview>
</template>

<script>
	export default {
    data() {
      return {
        items:[
          {
            name:'Konobari',
            children:[
              {name : "Dejan : Br-telefona: 064555555"},
              {name: "Sima : Br-telefona: 064444444"}
            ]
          },
          {
            name:'Kuhinja',
            children: [
              {name: "Ana : Br-telefona: 0645232322", },
              {name: "Jelena : Br-telefona: 064321321"},
              {name: "Ivan : Br-telefona : 064512323"},
              {name: "Milan : Br-telefona : 06419919"},
              {name: "Suzana : Br-telefona : 06339823"},
              {name: "Stefan : Br-telefona : 062222222"}
            ]
          },
          {
            name:'Dobavljavci',
            children: [
              {name: "Dunja : Br-telefona : 064511111"},
              {name: "Prodavnica : Br-telefona : 06422222"},
              {name: "Hrana : Br-telefona : 064333333"}
            ]
          }
        ]
      }
    }
	}
</script>

<style scoped>

</style>
