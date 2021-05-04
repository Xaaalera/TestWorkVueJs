<template>
  <div class="my-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      {{labelName}}
    </label>
    <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :value="value" :required="required"
        v-on:change="$emit('update:value', $event.target.value)" type="text" placeholder="Документ">
  </div>
</template>
<script>
  export  default {
    name:'InputCustom',
    props:{
      labelName:{
        type: String,
      },
      value:{
        type:String,
      },
      required:{
        type: Boolean,
      }
    },
    emits:['update:value']
  }
</script>