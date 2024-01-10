<template>
  <div class="project-wrapper card" @click="goToUrl(project.link)">
    <div class="project-top">
      <icon class="folder-icon" icon="fa-solid fa-folder-open" />
      <div class="links">
          <icon v-if="project.source !== undefined" class="icon" icon="fa-brands fa-github" @click="goToUrl(project.source)" />
          <icon class="icon" icon="fa-solid fa-arrow-up-right-from-square" />
      </div>
    </div>
    <section class="project-text">
      <h3 class="text-header-secondary prj-name"> {{ project.name }} </h3>
      <p class="text-paragraph prj-desc"> {{ project.desc }} </p>
    </section>
    <div class="project-skills">
      <ul>
        <li class="text-bgr" v-for="skill in project.skills" :key="skill"> {{ skill }} </li>
      </ul>
      <p v-if="project.downloads !== undefined" class="text-bgr prj-dl"> {{ this.getDownloadShorthand() }} <icon class="icon" icon="fa-solid fa-arrow-down" /></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    project: {
      name: String,
      desc: String,
      downloads: Number,
      link: String,
      source: String,
      skills: Array
    }
  },
  methods: {
    getDownloadShorthand() {
      let shorthand;
      shorthand = this.project.downloads > 1000 ? Math.floor(this.project.downloads / 100) / 10 + 'K+' : this.project.downloads
      return shorthand
    },
    goToUrl(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="sass" scoped>
.project-wrapper
  background-color: $theme-bgr-secondary
  color: $text-color
  width: 250px
  height: 270px
  padding: 30px
  display: flex
  flex-direction: column
  border-radius: 5px
  transition: 0.2s

  &:hover
    cursor: pointer
    box-shadow: $shadow

.project-top
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 30px

.folder-icon
  color: $theme-primary-color
  font-size: 40px

.links
  display: flex
  gap: 20px

  .icon
    font-size: 22px
    transition: 0.2s

    &:hover
      color: $theme-primary-color
      cursor: pointer

.prj-dl
  .icon
    font-size: 14px
    margin-left: 3px

.project-skills
  display: flex
  align-items: flex-end
  justify-content: space-between
  flex-grow: 1

  ul
    list-style: none
</style>
