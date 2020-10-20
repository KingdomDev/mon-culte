<template>
  <md-card class="banniere">
    <md-card-header>
      <div class="md-title">{{ titre }}</div>
      <div class="md-subhead">{{ sousTitre }}</div>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: "banniere",

  data() {
    return {
      titre: "Nos cultes reprennent en présentiel,",
      sousTitre: "Pour y assiter..."
    }
  }
}
</script>

<style scoped lang="scss">
.md-card.banniere {
  margin-top: 80px;
  box-shadow: none;
  background-color: rgb(30, 110, 190);
  opacity: 50%;

  .md-card-header {
    color: white;

    .md-title {
      text-transform: uppercase;
    }

    .md-subhead {
      font-size: x-large;
      opacity: 80%;
    }
  }
}
</style>
