<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {mapActions} from 'vuex'

  export default {
    components: {
      FooterGuide
    },
    mounted() {
      // this.$store.dispatch('getCategorys')
      this.getAddress()
    },
    methods: {
      ...mapActions(['getAddress'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background aqua

</style>
