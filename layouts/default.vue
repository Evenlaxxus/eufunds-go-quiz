<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Hello there',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'Score',
          to: '/score',
        },
        {
          icon: 'mdi-apps',
          title: 'Questions',
          to: '/:county',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'EU funds quiz',
    }
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
