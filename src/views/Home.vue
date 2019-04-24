<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MainPage msg="How is your climate today?"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainPage from "@/components/MainPage.vue"; // @ is an alias to /src

@Component({
  components: {
    MainPage,
  },
})
export default class Home extends Vue {}
</script>
