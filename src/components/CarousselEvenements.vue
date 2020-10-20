<template>
  <div class="caroussel-evenements">
    <div class="carte-evenement__fleche-haut" @click="navigateToPreviousEvent">
      <a :href="previousIdText">
        <md-icon class="md-size-2x">play_arrow</md-icon>
      </a>
    </div>
    <div class="evenements-box">
      <carte-evenement v-for="evenement in evenements" :key="evenement.date.getTime()"
                       :id="evenement.htmlId"
                       :evenement="evenement">
      </carte-evenement>
    </div>
    <div class="carte-evenement__fleche-bas" @click="navigateToNextEvent">
      <a :href="nextEventIdText">
        <md-icon class="md-size-2x">play_arrow</md-icon>
      </a>
    </div>
  </div>
</template>

<script>
import CarteEvenement from './CarteEvenement.vue'

export default {
  name: "CarousselEvenements",
  components: { CarteEvenement },
  props: {
    evenements: {
      type: Array,
      required: true
    },
    jour: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      eventId: 0,
      nextEventIdText: "#",
      previousIdText: "#"
    }
  },

  mounted() {
    this.setNextIdText();
    this.setPreviousIdText();
  },

  methods: {
    navigateToNextEvent() {
      if (this.eventId < this.evenements.length-1) {
        this.eventId++;
      }
    },
    navigateToPreviousEvent() {
      if (this.eventId > 0) {
        this.eventId--;
      }
    },

    setNextIdText() {
      this.nextEventIdText = "#" + this.jour + "-" + this.eventId;
    },
    setPreviousIdText() {
      this.previousIdText = "#" + this.jour + "-" + this.eventId;
    }
  },

  watch: {
    eventId() {
      if (this.eventId < this.evenements.length) {
        this.setNextIdText();
      }
      if (this.eventId >= 0) {
        this.setPreviousIdText();
      }
    }
  }
}
</script>

<style scoped lang="scss">
.caroussel-evenements {
  display: flex;
  flex-direction: column;
  align-items: center;

  .carte-evenement__fleche-haut {
    background-color: ghostwhite;
    transform: rotate(-90deg);

    .md-icon {
      height: 36px;
    }
  }

  .carte-evenement__fleche-bas {
    transform: rotate(90deg);
    background-color: ghostwhite;

    .md-icon {
      height: 36px;
    }
  }

  .evenements-box {
    display: flex;
    flex-direction: column;
    height: 198px;

    overflow: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    div.md-card {
      -webkit-transition-duration: 4s;
      transition-duration: 4s;
      scroll-snap-align: start;
    }
  }
}
</style>
