<template>
  <div>
    <l-notification :value="40" :max="20">
      <l-list
        @clickItem="clickItem"
        @clickAction="clickAction"
        :list="list"
        :actions="actions"
      ></l-list>
    </l-notification>
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from "./data"

const clickItem = (val: any) => {
  console.log(val)
}
const clickAction = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
