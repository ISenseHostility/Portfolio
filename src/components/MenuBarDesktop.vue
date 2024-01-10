<template>
 <nav class="nav-wrapper">
   <figure>
     <router-link to="/">
       <img class="logo clickable" src="@/assets/img/jvdm.png" alt="Jarno van der Meer Logo" />
     </router-link>
   </figure>

   <ul class="menu-items">
     <a class="text-paragraph clickable" href="#about"><li> <span class="menu-item"><icon class="icon-item" icon="fa-solid fa-info-circle"></icon> About </span></li></a>
     <a class="text-paragraph clickable" href="#skills"><li> <span class="menu-item"><icon class="icon-item" icon="fa-solid fa-bars-progress"></icon> Skills </span></li></a>
     <a class="text-paragraph clickable" href="#experience"><li> <span class="menu-item"><icon class="icon-item" icon="fa-solid fa-list-check"></icon> Experience </span></li></a>
     <a class="text-paragraph clickable" href="#projects"><li> <span class="menu-item"><icon class="icon-item" icon="fa-solid fa-diagram-project"></icon> Projects </span></li></a>
     <a class="text-paragraph clickable" href="#contact"><li> <span class="menu-item"><icon class="icon-item" icon="fa-solid fa-phone"></icon> Contact </span></li></a>
   </ul>
 </nav>
</template>

<script>
export default {
  name: "MenuBar",
  methods: {
    slideInTitle(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0%)'
        }
      })
    }
  },
  mounted() {
    const observer = new IntersectionObserver(this.slideInTitle)

    const sliders = document.querySelectorAll('.nav-wrapper')
    sliders.forEach(slider => {
      observer.observe(slider)
    })
  },
}
</script>

<style lang="sass" scoped>

a
  all: unset

.nav-wrapper
  padding: 10px 0
  display: flex
  transition: .5s
  transform: translateY(-100%)
  transition-timing-function: cubic-bezier(.5, .35, .5, 1.1)

.logo
  height: 60px

.icon-item
  font-size: 15px
  color: $text-color-highlight

ul
  all: unset
  flex-grow: 1
  display: flex
  justify-content: right

  li
    all: unset

.menu-items
  height: auto
  display: flex
  align-items: center
  gap: 30px

.menu-item
  display: flex
  gap: 5px
  align-items: center

</style>
