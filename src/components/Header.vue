<template>
  <div class="mon-culte-header">
    <div class="menu">
      <div class="logo">
        <img alt="accueil" src="../assets/logo-icc.png">
      </div>
      <!--md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>BOUTON</md-button>
      </md-menu-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
@import "../app-variables.scss";

.mon-culte-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #c8c8c8;

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: $mainWidth;
    height: 166px;

    .logo {
      width: 100px;
    }
  }
}
</style>
