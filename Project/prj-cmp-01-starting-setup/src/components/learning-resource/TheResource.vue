<template>
  <base-card>
    <base-button
      @click="setSelectTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resource
    </base-button>

    <base-button @click="setSelectTab('add-resource')" :mode="addResButtonMode"
      >Add Resource
    </base-button>
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
      selectedTab: 'stored-resource',
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
  provide() {
    return {
      resources: this.storedResource,
      submitResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link
      };
      this.storedResource.unshift(newResource);
      this.selectedTab = 'stored-resource';
    },
    deleteResource(idDelete) {
      var index = this.storedResource
        .map(function(item) {
          return item.id;
        })
        .indexOf(idDelete);

      this.storedResource.splice(index, 1);
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
