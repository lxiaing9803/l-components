<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOption"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisable"
        v-bind="$attrs.endOption"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  startTimeStart: {
    type: String,
    default: "08:00",
  },
  startStep: {
    type: String,
    default: "00:30",
  },
  startTimeEnd: {
    type: String,
    default: "24:00",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束时间",
  },
  endTimeStart: {
    type: String,
    default: "08:00",
  },
  endStep: {
    type: String,
    default: "00:30",
  },
  endTimeEnd: {
    type: String,
    default: "24:00",
  },
})

const startTime = ref<string>("")
const endTime = ref<string>("")
const endTimeDisable = ref<boolean>(true)

const emits = defineEmits(["startChange", "endChange"])

watch(
  () => startTime.value,
  (val) => {
    if (val === "") {
      endTime.value === ""
      endTimeDisable.value = true
    } else {
      endTimeDisable.value = false
      emits("startChange", val)
    }
  }
)

watch(
  () => endTime.value,
  (val) => {
    if (val !== "") {
      emits("endChange", {
        startTime: startTime.value,
        endTime: val,
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>
