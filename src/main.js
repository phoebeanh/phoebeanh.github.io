const {createApp} = Vue
import NavigationBar from './components/NavigationBar.js'

//navigation bar
createApp({
  components: {
    NavigationBar
  }
}).mount('#app')