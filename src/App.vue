<template class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
  <div id="app">
    <router-view/>
    <div>
      <Home/>
      <Footer/>
    </div>
  </div>
</template>

<script>


import Footer from "@/components/Footer";
import Home from "@/pages/Home";
export default {
  name: 'App',
  components: {
    Home,
    Footer,
  }
}
</script>

<style>


</style>
