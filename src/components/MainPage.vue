<template>
  <div class="container m-3 mx-auto">
    <h1>{{ msg }}</h1>
    <div v-if="climateProvinces">
       <b-form-select v-model="climateId" :options="climateProvinces"/>
    </div>
    <div class="mx-auto pt-3" v-if="climateId !== 0">
      <ClimateDataView :climateData="climateProvinceData"/>
    </div>
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
import { ClimateProvincesDto, ClimateDataDto } from "../models/ClimateDataDto";
import ClimateDataView from "./ClimateDataView.vue";
@Component({
  components: {
    ClimateDataView,
  },
})
export default class MainPage extends Vue {
  @Prop() public msg!: string;
  public climateId: number = 0;
  public climateProvinces: Array<{value: number, text: string}> = [];
  public climateProvinceData?: ClimateDataDto = { province_id: 0, data: [] };

  private climateService?: IClimateService;

  private mounted() {
    this.climateService = Container.get(ClimateService);
    this.climateService
      .getProvinces()
      .then((data) => {
        this.climateProvinces = data.provinces.map((item) => ({value: item.pid, text: `${item.pid} ${item.name}`}));
        this.climateProvinces.unshift({ value: 0, text: "Please select an option" });
      });
  }

  @Watch("climateId")
  private onClimateIdChanged(value: number, oldValue: number) {
    if (this.climateId !== 0 && this.climateService) {
      this.climateService.getProvincesClimate(this.climateId).then((data) => this.climateProvinceData = data);
    }
  }
}
</script>