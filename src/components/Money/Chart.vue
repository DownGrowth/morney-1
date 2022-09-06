<template>
    <div class="wrapper" ref="wrapper">chart</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as echarts from 'echarts';
@Component
export default class Chart extends Vue{
    @Prop() options?: echarts.EChartsOption
    mounted() {
        if (this.options === undefined) {
            return console.error('options为空')
        }
        const chart = echarts.init(this.$refs.wrapper as HTMLDivElement)
        chart.setOption(this.options)
}
}
</script>

<style scoped lang="scss">
    .wrapper{
        height: 400px;
    }
</style>