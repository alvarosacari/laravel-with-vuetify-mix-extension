<template>
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-btn color="success" class="text-none mb-2">My button</v-btn>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolor quam, voluptas nobis ipsa doloremque quas nostrum iure repellendus culpa sint minus minima, laboriosam inventore pariatur laudantium nihil a illum!</p>

        <Carousel class="mb-3"></Carousel>

        <AustralianCard></AustralianCard>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    Carousel,
    AustralianCard: () => import('@/components/AustralianCard.vue')
  },
  data() {
    return {
      title: 'Laravel with vuetify mix extension',
      drawer: null
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
