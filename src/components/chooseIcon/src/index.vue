<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>
  <div class="l-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"
import * as ElIcons from "@element-plus/icons-vue"
import { toLine } from "../../../utils"
import { useCopy } from "../../../hooks/useCopy"

interface Props {
  /**弹出框标题 */
  title: string
  /**弹出框显示隐藏 */
  visible: boolean
}
const props = defineProps<Props>()

const dialogVisible = ref<boolean>(props.visible)

const emits = defineEmits(["update:visible"])

const handleClick = () => {
  emits("update:visible", !props.visible)
}

const clickItem = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  dialogVisible.value = false
}

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val)
  }
)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    height: 70px;
    font-size: 14px;
  }

  svg {
    width: 2em;
    height: 2em;
  }
}
</style>
