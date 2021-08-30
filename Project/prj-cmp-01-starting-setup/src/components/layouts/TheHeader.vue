<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  header{
    background-color: #0c7753;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
  }
  h1{
    margin: 0;
    color: white;
  }
</style>