<template>
  <div>

    <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
      <p class="font-sans text-white error-text text-9xl">404</p>
    </div>

    <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
      <router-link to="/"><span class="opacity-50"> Back</span></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageNotFound',
}
</script>