const {createApp} = Vue
import NavigationBar from './components/NavigationBar.js'
import ArticleItem from './components/ArticleItem.js'
import ArticleData from './data/ArticleData.js'

createApp({
  components: {
    NavigationBar
  }
}).mount('#app')


createApp({
  components: {
    ArticleItem
  },
  data() {
    return {
      ArticleData
    }
  }
}).mount('#articles')