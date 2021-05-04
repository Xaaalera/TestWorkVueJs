<template>
  <div class="container mx-auto py-40 flex-col  justify-center max-w-5xl h-screen">
    <div class="m-auto shadow-lg p-5">
      <p class="text-xl my-5">Создание Документа</p>
      <hr>
      <form action="#" v-on:submit.prevent="save">
        <InputCustom v-bind:label-name="'Название'" v-bind:required="true" v-bind:value.sync="title"/>
        <TextAreaCustom v-bind:label-name="'Описание'" v-bind:required="true" v-bind:value.sync="description"/>
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
      this.$store.commit('addDoc', {title: this.title, description: this.description});
      this.$router.push('/');
    }
  },
  data() {
    return {
      title: null,
      description: null
    }
  }
}
</script>
