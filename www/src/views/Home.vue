<template>
  <div class="container mx-auto py-40 flex-col  justify-center max-w-5xl h-screen">
    <div class="m-auto shadow-lg p-5">
      <div class="text-center">
        <router-link to="/create"><button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Добавить Документ
        </button>
        </router-link>
      </div>
      <template v-for="(item,idx) in docList">
        <div class="flex border-2 flex-col   border-gray-200 border-opacity-50 p-3 my-3" :key="idx">
          <div class="flex">
            <div class="w-10/12 md:w-10/12">
              <p class="text-xl my-3 ">{{ item.title }}</p>
            </div>
            <div class="w-2/12 my-3 md:w-2/12">
              <router-link :to="`/edit/${item.id}`">
              <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border  inline-flex items-center border-blue-500 hover:border-transparent rounded">
                  <icon name="pencil" class="w-4 h-4"/>
              </button>
              </router-link>
              <button
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border  inline-flex items-center border-blue-500 hover:border-transparent rounded"
                  @click.stop="removeItem(item.id)">
                <icon name="trash" class="w-4 h-4"/>
              </button>
            </div>
          </div>
          <div class="w-full">
            <p class="text-l my-1 ">{{ item.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  computed: {
    docList() {
      return this.$store.state.docList;
    }
  },
  methods: {
    removeItem(id) {
      this.$store.commit('removeDoc', id);
    }
  }
}
</script>
