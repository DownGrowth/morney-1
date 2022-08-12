<template>
  <div class="nav-wrapper">
   <div class="content">
   <slot/> 
   <!-- 传入进来的内容放到slot渲染 -->
    </div> 
    <Nav />
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/labels.svg'
export default{
    name:'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
    border:1px solid blue;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    border:1px solid green;
    overflow: auto;
    flex-grow:1 ;
}
</style>