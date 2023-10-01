<template>
  <v-container>
    <v-row
      v-if="getRegions.length"
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <BaseRegion></BaseRegion>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getRegions'])
  },
  mounted() {
    const fetchData = async () => {
      await this.fetchRegions();
    }

    fetchData();
  },
  methods: {
    ...mapActions(['fetchRegions'])
  }
}
</script>
