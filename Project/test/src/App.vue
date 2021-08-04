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
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
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

  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],
    };
  },
  methods:{
      toggleFavoriteStatus: function(val){
        // Nhận id từ cha sau đó chỉnh sửa theo ý
        const changeStatusFriend = this.friends.find(friend => friend.id === val)        
        changeStatusFriend.isFavorite = !changeStatusFriend.isFavorite;
      }
    }
};
</script>
