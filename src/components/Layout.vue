<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
   <div class="content" :class="classPrefix && `${classPrefix}-content` ">
   <slot/> 
   <!-- 传入进来的内容放到slot渲染 -->
    </div> 
    <Nav />
  </div>
</template>

<script lang="ts">
export default{
  props:['classPrefix'],
    name:'Layout'
}
</script>

<style lang="scss" scoped>
.layout-wrapper{

    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content{

    overflow: auto;
    flex-grow:1 ;
}
</style>