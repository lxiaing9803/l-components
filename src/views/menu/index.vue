<template>
  <div style="width: 200px">
    <l-menu :data="data1" defaultActive="1"></l-menu>
  </div>
</template>

<script lang="ts" setup>
import { MenuItem } from "../../components/menu/src/types"

const data1: MenuItem[] = [
  {
    name: "导航1",
    index: "1",
    icon: "document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "document",
      },
      {
        name: "导航3-2",
        index: "3-2",
        icon: "document",
      },
      {
        name: "导航3-3",
        index: "3-3",
        icon: "document",
      },
    ],
  },
]
</script>

<style lang="scss" scoped></style>
