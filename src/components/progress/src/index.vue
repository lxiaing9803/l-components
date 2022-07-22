<template>
  <el-progress :percentage="p" v-bind="$attrs"></el-progress>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'

const props = defineProps({
  /**进度条进度 */
  percentage: {
    type: Number,
    default: 0
  },
  /**是否有动画效果 */
  isAnimation: {
    type: Boolean,
    default: false
  },
  /**动画时长 */
  time: {
    type: Number,
    default: 3000
  }
})

const p = ref<number>(0)

onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage)
    let timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval((timer))
      }
    }, t)
  }
})

</script>

<style lang="scss" scoped>
svg {
  width: 126px;
  height: 126px;
}
</style>