<template>
  <the-header title="Resource"></the-header>
  <the-resource></the-resource>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/learning-resource/TheResource';
export default {
  components: {
    TheHeader,
    TheResource
  },
  data() {
    return {
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJS documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn on Google',
          link: 'https://www.google.com'
        }
      ]
    };
  },
  provide(){
    return{
      resources: this.storedResource
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
</style>
