<template>
  <v-app>
    <!-- <v-app-bar>
    </v-app-bar> -->
    <v-main>
      <v-banner single-line color="#04aa6d">
        My Friend
      </v-banner>
      <friend-contact 
      v-for="friend in friends" 
      :key="friend.id" 
      :name="friend.name"
      :phone-number="friend.phone"

      />
    </v-main>
  </v-app>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  name: "App",

  components: {
    FriendContact,
  },

  data(){
    return{
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    }
  }
};
</script>
