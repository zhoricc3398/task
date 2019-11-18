<template>
  <div id="app">
    <all-games-bar />
  </div>
</template>

<script>
import AllGamesBar from "./components/AllGamesBar";

export default {
  components: {
    AllGamesBar
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #262930;
  padding: 4.5rem 2rem;
}
</style>
