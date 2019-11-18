<template>
  <div class="all-games-bar">
    <div class="all-games-bar__search-container">
      <label>
        <input type="text" placeholder="Search Events...." />
      </label>
      <i class="material-icons">search</i>
    </div>
    <div class="all-games-bar__top">
      <h6 class="all-games-bar__title">All Games<span>2328</span></h6>
      <div class="all-games-bar__list-wrap">
        <p
          class="all-games-bar__list-item"
          v-for="(item, index) in sportService.EN.Sports"
          v-bind:key="index"
        >
          {{ item.Name }}<span>{{ item.Regions }}</span>
        </p>
      </div>
    </div>
    <div class="all-games-bar__bottom"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getSportService");
  },
  computed: {
    ...mapState(["sportService"])
  }
};
</script>
