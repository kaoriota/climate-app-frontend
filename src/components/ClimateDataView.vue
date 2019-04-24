<template>
  <div class="container">
    <b-card-group column>
      <div class="col-md-3 col-sm-6 pb-3" v-for="data in climateData.data" :key="data.date">
        <b-card
          style="width: 220px; height: 230px"
          :header="data.date"
          header-tag="header"
          :title="data.mintemp_c + ' °C - ' + data.maxtemp_c + '°C'"
        >
          <b-card-text>
            <img :src="data.icon">
            <br>
            {{ data.climate_type }}
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ClimateService, IClimateService } from "../services/IClimateService";
import Container from "typedi";
import {
  ClimateProvincesDto,
  ClimateDateDto,
  ClimateDataDto,
} from "../models/ClimateDataDto";
@Component
export default class ClimateDataView extends Vue {
  @Prop() private climateData!: ClimateDataDto;
}
</script>