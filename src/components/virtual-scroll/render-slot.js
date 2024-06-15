export default {
  props: {
    data: Object,
    height: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    renderItem: Function
  },
  created () {
    this.style = {
      height: `${this.height}px`,
      top: `${this.top}px`,
      left: `${this.left}px`
    }
  },
  render (h) {
    return h('li', {
      style: this.style
    }, this.renderItem(this.data))
  }
}
