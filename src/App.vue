<template>
  <html>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
    </head>
    <div id="app">
      <Header></Header>
      <div class="mon-culte-body">
        <Banniere></Banniere>
        <div class="evenements">
          <caroussel-evenements :evenements="evenementsVendredi" jour="vendredi"></caroussel-evenements>
          <caroussel-evenements :evenements="evenementsDimanche" jour="dimanche"></caroussel-evenements>
        </div>
      </div>
    </div>
  </html>
</template>

<script>
import dateMixin from "@/components/dateMixin";

import Banniere from './components/banniere';
import CarousselEvenements from "@/components/CarousselEvenements";
import Header from './components/Header.vue'

export default {
  name: 'App',
  mixins: [dateMixin],
  components: { Banniere, CarousselEvenements, Header },

  data() {
    return {
      evenementsVendredi : [
        {htmlId: 'vendredi-0', date: new Date('2020-10-23'), titre: "Culte d'Adoration - Atmosphère de Gloire", horaire: "19h00 - 20h15", places: 7},
        {htmlId: 'vendredi-1', date: new Date('2020-10-30'), titre: "Culte d'Adoration - Atmosphère de Gloire", horaire: "19h00 - 20h15", places: 12},
        {htmlId: 'vendredi-2', date: new Date('2020-11-06'), titre: "Culte d'Adoration - Atmosphère de Gloire", horaire: "19h00 - 20h15", places: 20},
        {htmlId: 'vendredi-3', date: new Date('2020-11-13'), titre: "Culte d'Adoration - Atmosphère de Gloire", horaire: "19h00 - 20h15", places: 40},
        {htmlId: 'vendredi-4', date: new Date('2020-11-20'), titre: "Culte d'Adoration - Atmosphère de Gloire", horaire: "19h00 - 20h15", places: 100},
      ],
      evenementsDimanche : [
        {htmlId: 'dimanche-0', date: new Date('2020-10-25'), titre: "Culte de célébration", horaire: "10h00 - 12h30", places: 0},
        {htmlId: 'dimanche-1', date: new Date('2020-11-01'), titre: "Culte de célébration", horaire: "10h00 - 12h30", places: 14},
        {htmlId: 'dimanche-2', date: new Date('2020-11-08'), titre: "Culte de célébration", horaire: "10h00 - 12h30", places: 50},
        {htmlId: 'dimanche-3', date: new Date('2020-11-15'), titre: "Culte de célébration", horaire: "10h00 - 12h30", places: 80},
        {htmlId: 'dimanche-4', date: new Date('2020-11-22'), titre: "Culte de célébration", horaire: "10h00 - 12h30", places: 100},
      ]
    }
  },
}
</script>

<style lang="scss">
@import "app-variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .mon-culte-body {
    display: flex;
    flex-direction: column;
    width: $mainWidth;
    margin: auto;

    .evenements {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 100px;
    }
  }
}
</style>
