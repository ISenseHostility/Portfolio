<template>
  <footer>
    <figure>
      <router-link to="/" @click="scrollToTop()">
        <img class="logo clickable" src="@/assets/img/jvdm.png" alt="Let Him Cook Logo" />
      </router-link>
    </figure>
    <section class="details">
      <ul class="detail-list">
        <li class="text-header-secondary text-shadow"> Contact </li>
        <a href="https://www.linkedin.com/in/jarno-van-der-meer-917753222/" target="_blank"> <li class="text-paragraph clickable"> <icon class="icon" icon="fa-brands fa-linkedin" /> LinkedIn </li> </a>
        <a href="mailto:jarno@jarnovdmeer.nl" target="_blank"> <li class="text-paragraph clickable"> <icon class="icon" icon="fa-solid fa-envelope" /> E-mail </li> </a>
      </ul>
      <ul class="detail-list">
        <li class="text-header-secondary text-shadow"> Personal </li>
        <a class="clickable" href="#about"><li class="text-paragraph">  <icon class="icon" icon="fa-solid fa-circle-info" /> About Me </li></a>
        <a class="clickable" href="https://ko-fi.com/isensehostility" target="_blank"> <li class="text-paragraph"> <icon class="icon" icon="fa-solid fa-heart" /> Support Me </li></a>
        <a class="clickable" href="#projects"> <li class="text-paragraph"> <icon class="icon" icon="fa-solid fa-diagram-project" /> Projects </li></a>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {
  name: "FooterDesktop",
  methods: {
    async delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async scrollToTop() {
      this.delay(0).then(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      })
    }
  }
}
</script>

<style scoped lang="sass">

ul
  list-style-type: none

a
  all: unset

footer
  display: flex
  justify-content: space-between
  padding-bottom: 30px

.logo
  height: 60px

.icon
  color: $text-color-highlight

.details
  display: flex
  gap: 120px

.detail-list
  display: flex
  flex-direction: column
  gap: 15px

.item-title
  margin-bottom: 10px
</style>
