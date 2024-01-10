<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
*
  padding: 0
  margin: 0
  font-family: Calibri, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

html
  background-color: $theme-bgr-primary
  scroll-behavior: smooth
</style>
