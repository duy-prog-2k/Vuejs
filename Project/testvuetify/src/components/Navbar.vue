<template>
  <v-app>
    <nav>
      <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <img class="mr-3" :src="require('../assets/hehe.png')" />
          <span class="font-weight-light"
            >Ứng dụng giám sát vườn thông minh</span
          >
          <span></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Dropdown Menu -->
        <div class="text-center">

          <v-menu offset-y>
            <!-- expand button -->
            <template v-slot:activator="{ on, attrs }">
              <v-btn text flat color="grey" v-on="on" v-bind="attrs">
                <v-icon left>expand_more</v-icon>
                <span>Menu</span>
              </v-btn>
            </template>
            <!-- List Dropdown menu when click on expand button -->
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>
                  <v-icon left>{{ item.icon }}</v-icon>
                  <span>{{ item.text }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>

          </v-menu>
        </div>

        <v-btn text flat color="grey">
          <span>Sign out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>
  </v-app>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      items: [
        { icon: "dashboard", text: "Dashboard" },
        { icon: "folder", text: "Project" },
        { title: "person", text: "Team" },
      ],
      group: null,
    };
  },
};
</script>

<style></style>
