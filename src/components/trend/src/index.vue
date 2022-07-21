<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        v-if="type === 'up'"
        :style="{ color: reverseColor ? '#52c41a' : upIconColor }"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        v-else
        :style="{ color: reverseColor ? '#f5222d' : downIconColor }"
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from "vue"
import { toLine } from "../../../utils/index"
const props = defineProps({
  type: {
    type: String,
    default: "up",
  },
  /**趋势显示的文字 */
  text: {
    type: String,
    // 可以是父组件传递过来的文字，也可以是插槽
    default: "文字",
  },
  /**上升趋势显示的图标 */
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  /**下降趋势显示的图标 */
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
  /**上升趋势图标颜色 */
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  /**下降趋势图标颜色 */
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
  /**颜色翻转 —— 只对默认颜色生效 */
  reverseColor: {
    type: Boolean,
    default: false,
  },
  /**上升趋势文字颜色 */
  upTextColor: {
    type: String,
    default: "#000",
  },
  /**下降趋势文字颜色 */
  downTextColor: {
    type: String,
    default: "#000",
  },
})

const textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor
})

const slots = useSlots()
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
