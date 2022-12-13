const {createApp} = Vue
import NavigationBar from './NavigationBar.js'

createApp({
  components: {
    NavigationBar
  },
  data() {
    return {}
  }
}).mount('#app')