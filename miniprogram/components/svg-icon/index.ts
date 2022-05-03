// components/svg-icon/index.js
// svg-icon
import { getIconifySVG, getLocalSVG } from '../../utils/svgIcon'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    size: {
      type: String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    width: '1em',
    height: '1em',
    iconUrl: '',
    class: '',
  },

  lifetimes: {
    attached() {
      this.getDataUri(this.data.name, this.data.color)
      if (this.data.size) {
        this.setData({
          width: this.data.size,
          height: this.data.size,
        })
      }
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getDataUri(name: string, color: string) {
      const that = this
      const url = getLocalSVG(name)
      if (url) {
        this.setData({
          iconUrl: url,
          class: color ? 'icon' : 'default-icon',
        })
      } else {
        getIconifySVG(name).then(res => {
          that.setData({
            iconUrl: res,
            class: color ? 'icon' : 'default-icon',
          })
        }).catch(e => {
          console.log(e)
        })
      }
    },
  }
})
