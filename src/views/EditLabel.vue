<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
      </div>
       <Notes field-name="备注" 
   placeholder="在这里输入备注"
  />
    </Layout>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import tagListModel from '../models/tagListModel';
import Notes from '../components/Money/Notes.vue';



@Component
export default class EditLabel extends Vue{
    created(){
      const id=this.$route.params.id
      tagListModel.fetch()
      const tags=tagListModel.data;
      const tag=tags.filter(t=> t.id ===id)[0]
      if(tag){
        console.log(tag)
      }else{
        this.$router.replace('/404')
      }
    }
}
</script>

<style>

</style>