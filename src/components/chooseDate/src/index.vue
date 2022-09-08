<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisable"
        :disabledDate="endDisabledDate"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue"

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  disableToday: {
    type: Boolean,
    default: true,
  },
})

const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)
const endDateDisable = ref<boolean>(true)

const emits = defineEmits(["startChange", "endChange"])

const startDisabledDate = (time: Date) => {
  if (props.disableToday)
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}

const endDisabledDate = (time: Date) => {
  if (startDate.value)
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
}

watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDateDisable.value = true
      endDate.value = null
    } else {
      endDateDisable.value = false
      emits("startChange", val)
    }
  }
)

watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits("endChange", {
        startDate: startDate.value,
        endDate: val,
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>
