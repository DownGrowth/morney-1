<template>
  <Layout>
  
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
      <!-- 点击后跳转到对应的路由 -->
        <span>{{tag.name}}</span>  <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
    </Layout> 
    
</template>

<script lang="ts">

import {Component, Mixins} from 'vue-property-decorator';
import Button from '../components/Button.vue';
import tagHelper from '../mixins/TagHelper';

@Component({components:{Button},
mixins:[tagHelper],
})
export default class Labels extends Mixins(tagHelper){
  get tags(){
return this.$store.state.tagList;
  }
  beforeCreate(){
    this.$store.commit('fetchTags')
  }
}
</script>

<style lang="scss" scoped>
  .tags {
   background: white;
   font-size:16px;
   padding-left:16px ;
   > .tag{
       min-height: 44px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       border-bottom:1px solid #e6e6e6;
  svg{
    width:24px;
    height: 24px;
    margin-right:18px ;
  }
   }
  }
  .createTag{
    // background: #929292;
    // color:white;
    // border-radius:4px;
    // border:none;
    // height: 40px;
    // padding: 0 16px;
    &-wrapper{
      text-align: center;
      padding: 16px;
      margin-top:44-16px ;
    }

  }
   
</style>