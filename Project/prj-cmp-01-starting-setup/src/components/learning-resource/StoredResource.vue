<template>
  <ul>
    <learning-resource v-for="res in resources" :key="res.id" 
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components:{
    LearningResource
  },
  // Nhận resources data từ component TheResource để làm props cho component learning-resource
  inject: ['resources'],
}
</script>

<style>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 40em;
    margin: auto;
  }
</style>