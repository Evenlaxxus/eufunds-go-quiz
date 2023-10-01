<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-select
          v-model="selectedRegion"
          placeholder="Wybierz województwo"
          :items="getRegions"
          item-text="name"
        ></v-select>
      </v-col>
      <v-col
        v-if="selectedRegion"
        cols="12"
        md="6"
      >
        <v-select
          v-model="selectedCounty"
          placeholder="Wybierz powiat"
          :items="getCounties(selectedRegion)"
        ></v-select>
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
  watch: {
    selectedCounty(value) {
      if (value) {
        this.$router.push('/' + value);
      }
    }
  }
}
</script>
