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
  async setup() {
    await this.fetchRegions();
  },
  computed: {
    ...mapGetters(['getRegions'])
  },
  methods: {
    ...mapActions(['fetchRegions'])
  }
}
</script>
