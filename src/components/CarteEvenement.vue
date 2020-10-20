<template>
  <md-card md-with-hover :class="classEvenement">
    <md-ripple>
      <md-card-header>
        <div class="md-title">{{ evenementDuJour.jour }}</div>
        <div class="md-subhead">{{ dateEvenement }}</div>
      </md-card-header>

      <md-card-content class="contenu-evenement">
        <h2 class="titre-evenement">{{ evenementDuJour.titre }}</h2>
        <div class="horaire-evenement">{{ evenementDuJour.horaire }}</div>
      </md-card-content>

      <md-card-actions>
        <md-button class="inscrire-evenement" v-if="!complet">
          <div>
          <span>
            <md-icon class="icon-places-disponibles">event_seat</md-icon>
            {{ evenementDuJour.places }} places disponibles
          </span>
          </div>
        </md-button>
        <md-button v-else disabled class="bouton-evenement-complet"> complet </md-button>
      </md-card-actions>
    </md-ripple>
  </md-card>
</template>

<script>
import dateMixin from "@/components/dateMixin";

export default {
  name: "CarteEvenement",
  mixins: [dateMixin],
  props: {
    evenement : {
      required: true
    }
  },

  data() {
    return {
      evenementDuJour: {
        jour: 'Inconnu',
        date: new Date(),
        titre: 'Inconnu',
        horaire: 'Inconnu',
        places: 0
      }
    }
  },

  mounted() {
    this.chargerEvenement();
  },

  methods: {
    chargerEvenement() {
        const aDay = this.evenement.date;
        this.evenementDuJour.jour = this.jourCorrespondant(aDay.getDay());
        this.evenementDuJour.date = aDay;
        this.evenementDuJour.titre = this.evenement.titre;
        this.evenementDuJour.horaire = this.evenement.horaire;
        this.evenementDuJour.places = this.evenement.places;
    }
  },

  computed: {
    classEvenement() {
      return "carte-evenement" + (this.evenementDuJour ? " " + this.evenementDuJour.jour.toLowerCase() : "");
    },

    dateEvenement() {
      return this.formatFrench(this.evenementDuJour.date);
    },

    complet() {
      return this.evenementDuJour.places < 1;
    }
  }
}
</script>

<style scoped lang="scss">
.carte-evenement {
  width: 450px;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;

  .md-ripple:hover {
    cursor: default;
  }

  .md-title {
    text-transform: capitalize;
    font-weight: bold;
  }

  .contenu-evenement {
    padding: 0;

    .titre-evenement {
      font-weight: normal;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }

  .md-card-actions {
    justify-content: space-around;
    margin-bottom: 10px;

    .inscrire-evenement {
      width: 220px;
      font-weight: bold;
      background-color: #C8FFFF;

      &:hover div span{
        display: none;
      }
      &:hover div:after {
        content: 'S\'inscrire';
      }

      .icon-places-disponibles {
        color: antiquewhite;
      }
    }

    .bouton-evenement-complet {
      color: gray;
    }
  }

  &.vendredi {
    color: white;
    background-color: #7846B4;

    .inscrire-evenement {
      background-color: #6446B4;
    }
  }

  &.dimanche {
    color: white;
    background-color: #7bb648;

    .inscrire-evenement {
      background-color: #5AA046;
    }
  }
}
</style>
