<template class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
  <div id="app">
    <router-view/>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>


import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>

<style>


</style>
