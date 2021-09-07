<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>

      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No experiences found
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';
export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  provide: [],
  methods: {
    getData() {
      this.isLoading = true;
      // fetch(
      //   'https://vue-http-demo-a4c89-default-rtdb.firebaseio.com/survey.json'
      // )
      //   .then(res => {
      //     if (res.ok) {
      //       return res.json();
      //     }
      //   })
      //   .then(data => {
      //     this.isLoading = false;
      //     const results = [];
      //     for (const id in data) {
      //       results.push({
      //         id: id,
      //         name: data[id].name,
      //         rating: data[id].rating
      //       });
      //     }
      //     this.results = results;
      //   });
      axios
        .get('https://vue-http-demo-a4c89-default-rtdb.firebaseio.com/survey.json')
        .then(res => {
          this.isLoading = false;
          this.error = null;
          const results = [];
          const data = res.data;
          console.log(data);
          for (const id in data) {
            results.unshift({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          this.results = results;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Fail to fetch data';
        });
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    SurveyResult
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
