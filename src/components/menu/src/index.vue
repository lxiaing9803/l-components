<template>
  <el-menu :default-active="defaultActive" :router="router" class="el-menu-vertical-demo"
           v-bind="$attrs">
    <template v-for="item in data" :key="item[index]">
      <el-menu-item
          v-if="!item[children] || !item[children].length"
          :index="item[index]"
      >
        <component :is="`el-icon-${toLine(item[icon])}`" v-if="item[icon]"/>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu
          v-if="item[children] && item[children].length"
          :index="item[index]"
      >
        <template #title>
          <component :is="`el-icon-${toLine(item[icon])}`" v-if="item[icon]"/>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item
            v-for="(item1, index1) in item[children]"
            :key="index1"
            :index="item1[index]"
        >
          <component :is="`el-icon-${toLine(item1[icon])}`" v-if="item1[icon]"/>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {toLine} from "../../../utils/index"
import {PropType} from "vue"
import './styles/index.scss'

const props = defineProps({
  /**导航数据 */
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  /**默认激活的导航项 */
  defaultActive: {
    type: String,
    default: "",
  },
  /**是否是路由模式 */
  router: {type: Boolean, default: false},
  /**菜单标题键名 */
  name: {
    type: String,
    default: 'name'
  },
  /**菜单标识键名 */
  index: {
    type: String,
    default: 'index'
  },
  /**菜单图标键名 */
  icon: {
    type: String,
    default: 'icon'
  },
  /**菜单子菜单键名 */
  children: {
    type: String,
    default: 'children'
  },
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
