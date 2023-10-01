<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
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
}
</script>
