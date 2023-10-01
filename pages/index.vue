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
import { mapGetters } from 'vuex';
export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters(['getRegions'])
  },
}
</script>
