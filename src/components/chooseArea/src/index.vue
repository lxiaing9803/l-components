<template>
    <div>
        <el-select clearable v-model="province" placeholder="请选择省份">
            <el-option v-for="item in areas" :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
        <el-select clearable :disabled="!province" v-model="city" style="margin: 0 20px;" placeholder="请选择城市">
            <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
        <el-select clearable :disabled="!province || !city" v-model="area" placeholder="请选择区域">
            <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code" />
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

export interface AreaItem {
    name: string;
    code: string;
    children?: AreaItem[]
}

export interface Data {
    name: string;
    code: string;
}

const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')

const areas = ref(allAreas)

const selectCity = ref<AreaItem[]>([])

const selectArea = ref<AreaItem[]>([])

const emits = defineEmits(['change'])

watch(() => province.value, val => {
    if (val) {
        selectCity.value = areas.value.find(item => item.code === province.value)!.children
    }
    city.value = ''
    area.value = ''
})

watch(() => city.value, val => {
    if (val) {
        selectArea.value = selectCity.value.find(item => item.code === city.value)!.children!
    }
    area.value = ''
})

watch(() => area.value, val => {
    if (val) {
        const provinceData: Data = { code: province.value, name: province.value && allAreas.find(item => item.code === province.value)!.name }
        const cityData: Data = { code: city.value, name: city.value && selectCity.value.find(item => item.code === city.value)!.name }
        const areaData: Data = { code: val, name: val && selectArea.value.find(item => item.code === val)!.name }
        emits('change', {
            province: provinceData,
            city: cityData,
            area: areaData
        })
    }
})

</script>

<style lang="scss" scoped>
</style>