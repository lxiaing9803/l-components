<template>
  <div class="trendPage">
    <div class="flex">
      <div>
        <l-trend text="营业额" upIcon="CaretTop"></l-trend>
      </div>
      <div>
        <l-trend text="销售额" type="down" downIcon="CaretBottom"></l-trend>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.trendPage {
  .flex {
    display: flex;
    div {
      margin-right: 10px;
    }
  }
}
</style>
