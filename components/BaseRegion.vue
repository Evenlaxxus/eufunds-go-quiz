<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          Wybierz województwo
        </v-row>
        <v-row
          v-for="(region, index) in getRegions"
          :key="index"
          @click="setRegion(region)"
        >
          {{ region.name }}
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          Wybierz powiat
        </v-row>
        <v-row
          v-for="(county, index) in getCounties"
          :key="index"
          @click="setCounty(county)"
        >
          {{ county }}
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'BaseRegion',
  data: () => ({
    selectedRegion: '',
    selectedCounty: ''
  }),
  computed: {
    ...mapGetters(['getRegions', 'getCounties'])
  },
  methods: {
    setRegion(region) {
      this.selectedRegion = region;
    },

    setCounty(county) {
      this.selectedCounty = county;
    }
  }
}
</script>
