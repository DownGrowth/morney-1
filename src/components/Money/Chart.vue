<template>
    <div class="wrapper" ref="wrapper">chart</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import * as echarts from 'echarts';
@Component
export default class Chart extends Vue{
    @Prop() options?: echarts.EChartsOption
    chart?:echarts.ECharts
    mounted() {
        if (this.options === undefined) {
            return console.error('options为空')
        }
        this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement)
        this.chart.setOption(this.options)
    }

    @Watch('options') 
    onOptionsChange(newValue: echarts.EChartsOption){
        this.chart!.setOption(newValue)
    }
}
</script>

<style scoped lang="scss">
    .wrapper{
        height: 400px;
    }
</style>