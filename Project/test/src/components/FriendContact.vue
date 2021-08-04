<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-card-title>{{ name }}</v-card-title>
    <v-btn depressed class="ma-3" @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</v-btn>
    <v-list v-if="detailsAreVisible">
      <v-list-item>
        {{ name }}
      </v-list-item>
      <v-list-item>
        {{ phoneNumber }}
      </v-list-item>
      <v-list-item>
        {{ emailAddress }}
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "friend-contact",
  // props: [
  //   'name', 
  //   'phoneNumber',
  //   'emailAddress'
  // ],
  // Props validation 
  props:{
    name:{
      type: String, 
      require: true
    },
    phoneNumber:{
      type:String,
      require: true,
    },
    emailAddress:{
      type: String, 
      require: false,
      default: 'Chua nhap email'
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods:{
    toggleDetails: function(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>

<style></style>
