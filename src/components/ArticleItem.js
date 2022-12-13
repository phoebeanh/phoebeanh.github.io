export default {
    name: 'ArticleItem', // necessary for self-reference
    props: {
      model: Object
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      currentOpen() {
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle() {
        if (this.currentOpen) {
          this.isOpen = !this.isOpen
        }
      },
      changeType() {
        if (!this.currentOpen) {
          this.model.children = []
          this.currentOpen = this
          this.isOpen = true
        }
      },
    },
    template: `
    <li>
      <div
        :class="{ bold: currentOpen }"
        @click="toggle"
        @dblclick="changeType">
        {{ model.name }}
        <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
      </div>
      <ul v-show="isOpen" v-if="currentOpen">
        <!--
          A component can recursively render itself using its
          "name" option (inferred from filename if using SFC)
        -->
        <tree-item
          class="item"
          v-for="model in model.children"
          :model="model">
        </tree-item>
      </ul>
    </li>
    `
  }
  