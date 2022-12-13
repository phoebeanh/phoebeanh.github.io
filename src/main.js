const {createApp} = Vue
import NavigationBar from './components/NavigationBar.js'
import ArticleItem from './components/ArticleItem.js'
import ArticleData from './data/ArticleData.js'
import PictureModal from './components/PictureModal.js'

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

//picture modal
createApp({
  components: {
    PictureModal
  }, 
  data() {
    return {
      showModal: false,
      src: '',
      caption: ''
    }
  },
  methods: {
      openModal(element) {
          this.showModal = !this.showModal;
          this.src = element.srcElement.src;
          this.caption = element.srcElement.alt;
      }
    }
}).mount('#picture-modal')