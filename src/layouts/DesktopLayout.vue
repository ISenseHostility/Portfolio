<template>
  <div class="desktop-wrapper">
    <MenuBar />

    <div class="content">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBarDesktop";
import Footer from "@/components/FooterDesktop";

export default {
  name: "DesktopLayout",
  components: {
    MenuBar,
    Footer
  }

}
</script>

<style lang="sass" scoped>
.desktop-wrapper
  display: flex
  flex-direction: column
  margin: auto
  width: 97vw

.content
  width: 1000px
  margin: auto
</style>
