<template>
  <div class="home-wrapper">
    <DesktopLayout>
      <section id="about">
        <div class="part-title-wrapper">
          <hr class="hr-shrink" /><h2><span class="part-title text-header"><icon class="icon-item" icon="fa-solid fa-info-circle"></icon> About </span></h2><hr class="hr-grow" />
        </div>
      </section>
      <section id="skills">
        <div class="part-title-wrapper">
          <hr class="hr-shrink" /><h2><span class="part-title text-header"><icon class="icon-item" icon="fa-solid fa-bars-progress"></icon> Skills </span></h2><hr class="hr-grow" />
        </div>
      </section>
      <section id="experience">
        <div class="part-title-wrapper">
          <hr class="hr-shrink" /><h2><span class="part-title text-header"><icon class="icon-item" icon="fa-solid fa-list-check"></icon> Experience </span></h2><hr class="hr-grow" />
        </div>
        <div class="featured-job">

        </div>
        <div class="work-showcase">
          <WorkItem v-for="job in experience" :job="job" :key="job.name" />
        </div>
      </section>
      <section id="projects">
        <div class="part-title-wrapper">
          <hr class="hr-shrink" /><h2><span class="part-title text-header"><icon class="icon-item" icon="fa-solid fa-diagram-project"></icon> Projects </span></h2><hr class="hr-grow" />
        </div>
        <div class="featured-project">

        </div>
        <div class="projects-showcase">
          <ProjectItem v-for="project in projects" :project="project" :key="project.name" />
          </div>
      </section>
      <section id="contact">
        <div class="part-title-wrapper">
          <hr class="hr-shrink" /><h2><span class="part-title text-header"><icon class="icon-item" icon="fa-solid fa-phone"></icon> Contact </span></h2><hr class="hr-grow" />
        </div>
      </section>
      <section class="loading">
        <LoadingCircle />
      </section>
    </DesktopLayout>
  </div>
</template>

<script>
import DesktopLayout from "@/layouts/DesktopLayout";
import LoadingCircle from "@/components/LoadingCircle";
import ProjectItem from "@/components/ProjectItem";
import WorkItem from "@/components/WorkItem";

export default {
  name: "HomeDesktop",
  components: {
    WorkItem,
    DesktopLayout,
    LoadingCircle,
    ProjectItem
  },
  methods: {
    slideInTitle(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = '50px'
        }
      })
    },
    async slideInCard(entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          if (i >= entries.length / 2) {
            await this.waitSlide(200)
          }
          entries[i].target.style.transform = 'unset'
          entries[i].target.style.opacity = '1'
        }
      }
    },
    async waitSlide(delay) {
      return await new Promise(resolve => setTimeout(resolve, delay))
    }
  },
  mounted() {
    const observerTitles = new IntersectionObserver(this.slideInTitle)
    const observerCards = new IntersectionObserver(this.slideInCard)

    const sliders = document.querySelectorAll('.hr-shrink')
    const cards = document.querySelectorAll('.card')
    sliders.forEach(slider => {
      observerTitles.observe(slider)
    })
    cards.forEach(card => {
      observerCards.observe(card)
    })
  },
  data() {
    return {
      projects: [
        {
          name: 'SENSE.',
          desc: 'SENSE is a website dedicated to my game modification projects.',
          link: 'https://sense.jarnovdmeer.nl',
          skills: ['Vue.js', 'Express.js', 'Node.js', 'SASS']
        },
        {
          name: 'Portfolio Website',
          desc: 'The site you\'re currently viewing.',
          link: 'https://jarnovdmeer.nl',
          skills: ['Vue.js', 'SASS']
        },
        {
          name: 'Primitive Start',
          desc: 'Minecraft mod to make the early game last longer.',
          link: 'https://www.curseforge.com/minecraft/mc-mods/primitive-start',
          source: 'https://github.com/ISenseHostility/PrimitiveStart',
          downloads: 23219,
          skills: ['Java', 'Minecraft Forge']
        },
        {
          name: 'Food Enhancements',
          desc: 'Minecraft mod that adds foods to the game.',
          link: 'https://www.curseforge.com/minecraft/mc-mods/food-enhancements',
          source: 'https://github.com/ISenseHostility/Food-Enhancements',
          downloads: 50921,
          skills: ['Java', 'Minecraft Forge']
        },
        {
          name: 'Enchantment Enhancements',
          desc: 'Minecraft mod that adds enchantments to the game.',
          link: 'https://www.curseforge.com/minecraft/mc-mods/enchantment-enhancements',
          downloads: 26309,
          skills: ['Java', 'Minecraft Forge']
        },
        {
          name: 'Enchantable Staffs',
          desc: 'Minecraft mod that adds staffs to the game that can be enchanted for various uses.',
          link: 'https://www.curseforge.com/minecraft/mc-mods/enchantable-staffs',
          source: 'https://github.com/ISenseHostility/EnchantableStaffs',
          downloads: 30604,
          skills: ['Java', 'Minecraft Forge']
        },
        {
          name: 'Simple Spikes',
          desc: 'Minecraft mod that adds spike blocks to the game.',
          link: 'https://www.curseforge.com/minecraft/mc-mods/simple-spikes',
          source: 'https://github.com/ISenseHostility/SimpleSpikes',
          downloads: 10665,
          skills: ['Java', 'Minecraft Forge']
        },
        {
          name: 'Crustaceans',
          desc: 'Minecraft mod that adds crabs and lobsters to the game.',
          link: 'https://www.curseforge.com/minecraft/mc-mods/crustaceans',
          source: 'https://github.com/ISenseHostility/Crustaceans',
          downloads: 6374,
          skills: ['Java', 'Minecraft Forge']
        },
        {
          name: 'Night\'s Conversion',
          desc: 'Terraria mod that adds specialised variants of the Night\'s Edge to the game.',
          link: 'https://legacy.curseforge.com/terraria/mods/nights-conversion',
          source: 'https://github.com/ISenseHostility/NightsConversion',
          downloads: 1928,
          skills: ['C#', 'tModLoader']
        },
      ],
      experience: [
        {
          name: 'CKM REST API',
          client: 'Hogeschool Leiden',
          date: 'September 2021 - November 2021',
          url: 'https://www.hetckm.nl/',
          work: [
            'Built a REST API to serve user-made requests to a front-end.',
            'Designed and built a simple JavaFX front-end to display any user requests to moderators.',
            'Worked with team members using Agile techniques to optimize the workflow.'
          ],
          skills: ['Java', 'Spring Boot', 'JavaFX']
        },
        {
          name: 'Website',
          client: 'Tuin & Meer',
          date: 'August 2022 - September 2022',
          url: 'https://tuinenmeer.com/',
          work: [
            'Designed, maintained, and shipped production code for the client\'s website using Vue.js and SASS.',
            'Performed quality assurance tests to ensure cross-browser compatibility and mobile responsiveness.'
          ],
          skills: ['Vue.js', 'SASS']
        },
        {
          name: 'IPOHBO',
          client: 'Hogeschool Leiden',
          date: 'September 2020 - November 2020',
          url: 'https://www.hsleiden.nl/',
          work: [
            'Created an application to sort the user into one of the Computer Science Major\'s specialisations using Python and the tkinter library.'
          ],
          skills: ['Python', 'tkinter']
        },
        {
          name: 'CKM Web Application',
          client: 'Hogeschool Leiden',
          date: 'November 2021 - January 2022',
          url: 'https://www.hetckm.nl/',
          work: [
            'Designed and built a web-based front-end for our previously made REST API using Angular.',
            'Improved and added to the aforementioned REST API using Java and Spring Boot.'
          ],
          skills: ['Angular', 'Spring Boot']
        },
        {
          name: 'Smart File Upload',
          client: 'Hogeschool Leiden',
          date: 'April 2022 - June 2022',
          url: '',
          work: [
            'Created a plug-in style solution to take photos on your phone and display them on your desktop using a QR-code based websocket connection.',
            'Added built-in functionality to send all photos from your desktop to a specified S3 bucket for long-term storage.',
            'Encrypted all user data for privacy and security.'
          ],
          skills: ['Angular', 'Express.js', 'Amazon S3']
        },
        {
          name: 'IPOSE',
          client: 'Hogeschool Leiden',
          date: 'April 2021',
          url: 'https://www.hsleiden.nl/',
          work: [
            'Created a small video game in a week with a random group of people using Java and the FXGL library.'
          ],
          skills: ['Java', 'JavaFX', 'FXGL']
        },
        {
          name: 'Risk it for the Biscuit',
          client: 'Hogeschool Leiden',
          date: 'April 2021 - July 2021',
          url: 'https://www.hsleiden.nl/',
          work: [
            'Designed and built a digital version of the board game Risk using Java, JavaFX, and Firebase.',
            'Added multiplayer functionality, including a group system with invite codes.'
          ],
          skills: ['Java', 'JavaFX', 'Firebase']
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.loading
  width: 100%
  display: flex
  align-items: center
  justify-content: center

.part-title
  display: flex
  gap: 5px
  align-items: center
  margin-left: 30px

.icon-item
  font-size: 25px
  margin-right: 15px
  color: $theme-primary-color

.part-title-wrapper
  display: flex
  align-items: center

hr
  color: $text-color
  transition: 1s
  transition-timing-function: cubic-bezier(.5, .35, .5, 1.1)

.hr-shrink
  width: 80%

.hr-grow
  margin-left: 30px
  flex-grow: 1

.projects-showcase
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  margin: 30px 0
  align-self: center
  gap: 20px

.work-showcase
  display: grid
  grid-template-columns: 1fr 1fr
  margin: 30px 0
  align-self: center
  gap: 20px

.card
  opacity: 0
  transform: translateY(-20%)
  transition: .2s, opacity .7s, transform .8s
  transition-timing-function: cubic-bezier(.5, .35, .5, 1.1)

#projects
  display: flex
  flex-direction: column

#experience
  display: flex
  flex-direction: column
</style>
