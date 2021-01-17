<template>
  <div style="height: 10vh"
      class="sticky py-3 m-0 text-4xl bg-gradient-to-r from-gray-800 to-gray-600 w-full text-blue-50 z-99">
    <h1 class="text-center mx-2">Wrocław Przystępnie - poznaj lepiej stolicę Dolnego Śląska</h1>
    <section class="py-5 mx-4" v-for="link in sites" :key="link">
<!--      <router-link :to=link.to>{{ link.name }}</router-link>-->
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
name: "Navbar",
  setup() {
    const sites = ref([
      {name: 'Home', to: '/'},
      {name: 'O nas', to: '/onas'}
    ])
    return {
      sites
    }
  }
}
</script>

<style scoped>

</style>