import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import Home from "@/pages/Home";

library.add(faBriefcase, faShirt, faBasketShopping, faArrowDown, faArrowUp, faArrowUpRightFromSquare, faCircleInfo, faGears, faEnvelope, faLinkedin, faFireFlameCurved, faHammer, faSeedling, faHeart, faDiagramProject, faBarsProgress, faPhone, faListCheck, faFolderOpen, faGithub)

const routes = [
    { path:'/', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .component('icon', FontAwesomeIcon)
    .mount('#app')
