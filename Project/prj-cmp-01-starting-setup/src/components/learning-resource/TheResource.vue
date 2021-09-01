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
  <!-- Dynamic Component -->
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
      // provide data resource cho Stored Resouce 
      resources: this.storedResource,
      // Provide method addResource cho component AddResource key: submitResource
      submitResource: this.addResource, 
      // Provide method deleteResource cho component LearningResource key: deleteResource
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
      this.storedResource.unshift(newResource); // Thêm dữ liệu vào đầu mảng 
      this.selectedTab = 'stored-resource'; // Chuyển lại tab  store resource sau khi add resource 
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
      // Nếu tab được bấm là stored resource thì nút bấm sẽ ko có màu, ngược lại thì set mode 
      //là flat như ở trên template
      return this.selectedTab === 'stored-resource' ? null : 'flat'; 
    },
    addResButtonMode() {
      // Dưới đây cũng thế 
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  }
};
</script>
