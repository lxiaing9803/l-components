<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="item in data" :key="item.index">
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :index="item.index"
      >
        <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`" />
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.index"
      >
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`" />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(item1, index1) in item.children"
          :key="index1"
          :index="item1.index"
        >
          <component v-if="item1.icon" :is="`el-icon-${toLine(item1.icon)}`" />
          <span>{{ item1.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { MenuItem } from "./types"
import { toLine } from "../../../utils/index"
import { PropType } from "vue"
const props = defineProps({
  /**导航数据 */
  data: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
  /**默认激活的导航项 */
  defaultActive: {
    type: String,
    default: "",
  },
  /**是否是路由模式 */
  router: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
}
</style>
