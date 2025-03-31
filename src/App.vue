<template>
  <div id="app" v-if="this.$route.path === '/login'">
    <router-view></router-view>
  </div>
  <div id="app" v-else>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header/index.vue"
import Footer from "@/components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
}
</script>
<style>
#app{
  width: 100%;
  margin: 0 auto;
}
</style>
