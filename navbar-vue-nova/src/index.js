import { load, Vue, renderVuex, renderVue } from 'hypernova-vue'
import Example from './components/Example.vue'
import { createStore } from './store'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const Ex = Vue.extend(Example)

document.addEventListener('NovaMount', (event) => {
  const { detail: { name, id } } = event
  if (name === 'Example') {
    return renderVuex('Example', Example, createStore)
  }
})
