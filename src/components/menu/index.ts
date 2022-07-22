import { App } from "vue"
import menu from "./src/index.vue"
import infiniteMenu from './src/menu'

export default {
  install(app: App) {
    app.component("l-menu", menu)
    app.component("l-infinite-menu",infiniteMenu)
  },
}
