<template>
  <div class="job-wrapper card" @click="goToUrl(job.url)">
    <div class="job-top">
      <icon class="folder-icon" icon="fa-solid fa-briefcase" />
      <div class="links">
        <icon class="icon" icon="fa-solid fa-arrow-up-right-from-square" />
      </div>
    </div>
    <section class="job-text">
      <h3> <span class="job-name text-header-secondary">{{ job.name }}</span> <span class="circle">&#9679;</span> <span class="job-client text-paragraph">{{ job.client }}</span> </h3>
      <p class="text-bgr"> {{ job.date }} </p>
      <ul class="job-work">
        <li class="text-paragraph" v-for="experience in job.work" :key="experience"> <span class="triangle">&#9656;</span> {{ experience }}</li>
      </ul>
    </section>
    <div class="job-skills">
      <ul>
        <li class="text-bgr" v-for="skill in job.skills" :key="skill"> {{ skill }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  props: {
    job: {
      name: String,
      client: String,
      work: Array,
      date: String,
      url: String,
      skills: Array
    }
  },
  methods: {
    goToUrl(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="sass" scoped>
.job-wrapper
  background-color: $theme-bgr-secondary
  color: $text-color
  width: 415px
  height: 340px
  padding: 30px
  display: flex
  flex-direction: column
  border-radius: 5px
  transition: 0.2s

  &:hover
    cursor: pointer
    box-shadow: $shadow

.job-top
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

.job-text
  ul
    list-style: none

.job-skills
  display: flex
  align-items: flex-end
  flex-grow: 1

  ul
    list-style: none
    display: flex
    gap: 15px

.job-work
  margin-top: 15px

.job-name
  color: $text-color-highlight

.job-client
  color: $theme-primary-color

.circle
  font-size: 12px
  color: $theme-primary-color

.triangle
  color: $theme-primary-color

h3
  display: flex
  align-items: center
  gap: 7px
</style>
