<template>
  <div class="container mx-auto py-40 flex-col  justify-center max-w-5xl h-screen">
    <div class="m-auto shadow-lg p-5">
      <p class="text-xl my-5">Редактирование документа {{ card.title }}</p>
      <hr>
      <form action="#" @submit.prevent="save">
        <InputCustom v-bind:label-name="'Название'"  v-bind:required="true" v-bind:value.sync="title"/>
        <TextAreaCustom v-bind:label-name="'Описание'" v-bind:required="true"  v-bind:value.sync="description"/>
        <div class="text-center">
          <button type="submit"
              class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputCustom from "../components/inputs/input";
import TextAreaCustom from "../components/inputs/textarea";

export default {
  name: 'Create',
  components: {TextAreaCustom, InputCustom},
  methods: {
    save() {
      this.$store.commit('updateDoc', {title: this.title, description: this.description, id: this.id});
      this.$router.push('/');
    }
  },
  data() {
    return {
      title: null,
      description: null,
      id: null,
      card: {},
    }
  },
  computed: {
    docList() {
      return this.$store.state.docList;
    }
  },
  mounted() {
    let card = this.$store.getters.getDocById(this.$route.params.id);
    if (!card) {
      this.$router.push('/404');
    }
    this.card = card;
    this.description = card.description;
    this.title = card.title;
    this.id = card.id;
  },
}
</script>
