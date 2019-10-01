import Vue from 'vue'
import Icon from '../components/global/icon/icon'
import Loader from '../components/global/loader/loader'

const components = () => {
  Vue.component('AppIcon', Icon)
  Vue.component('AppLoader', Loader)
}

export default components()
