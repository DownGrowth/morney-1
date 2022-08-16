<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
      </div>
    </Layout>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import tagListModel from '../models/tagListModel';
import Icon from '@/components/Icon.vue';

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