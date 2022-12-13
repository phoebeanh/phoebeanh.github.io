const {createApp} = Vue
import NavigationBar from './components/NavigationBar.js'
import ArticleItem from './components/ArticleItem.js'
import ArticleData from './data/ArticleData.js'

//navigation bar
createApp({
  components: {
    NavigationBar
  }
}).mount('#app')

//articles
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