<template>
  <div id="app">
    <NavPublic></NavPublic>
    <router-view></router-view>
  </div>
</template>

<script>
import NavPublic from  '@/components/NavPublic'
export default {
  components: {
    NavPublic
  }
}
</script>

<style lang="scss" scoped>
  * {
    font-size: 16px;
  }
</style>
