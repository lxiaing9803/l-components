<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom-start"
    :width="500"
    trigger="click"
  >
    <template #reference>
      <div class="result" @click="visible = !visible">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="16"></el-col>
      </el-row>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const result = ref<string>("请选择")

const visible = ref<boolean>(false)

const radioValue = ref<string>("按城市")
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
svg {
  width: 1em;
  height: 1em;
}
.rotate {
  transform: rotate(180deg);
}
.container {
  padding: 6px;
}
</style>
