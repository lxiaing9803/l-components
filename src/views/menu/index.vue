<template>
  <div style="display: flex;">
    <div style="flex:1;">
      <l-menu :data="data1" defaultActive="1" name="a" index="b" icon="c" children="d" ></l-menu>
    </div>
    <div style="flex:1;">
      <l-infinite-menu :data="data2" defaultActive="1" ></l-infinite-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>

const data1 = [
  {
    a: "导航1",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
      },
      {
        a: "导航3-2",
        b: "3-2",
        c: "Document",
      },
      {
        a: "导航3-3",
        b: "3-3",
        c: "Document",
      },
    ],
  },
]

const data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
                children: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'Document',
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
