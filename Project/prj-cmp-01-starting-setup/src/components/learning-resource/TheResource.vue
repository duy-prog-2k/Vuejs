<template>
  <base-card>
    <base-button
      @click="setSelectTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button @click="setSelectTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab" />
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResource,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resource'
    };
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab;
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  }
};
</script>
