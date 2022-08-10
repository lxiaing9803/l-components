<template>
  <div>
    <l-choose-time
      @startChange="startChange"
      @endChange="endChange"
    ></l-choose-time>
  </div>
</template>

<script lang="ts" setup>
interface EndValue {
  startTime: string
  endTime: string
}

// interface EndDateValue {
//   startDate: Date
//   endDate: Date
// }

const startChange = (val: string) => {
  console.log(val)
}

const endChange = (val: EndValue) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
