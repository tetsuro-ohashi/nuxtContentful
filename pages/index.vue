<template>
  <div>
    <h1>Nuxt Contentful Page</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
export default {
  name: 'Main',
  components: {
    Posts,
  }
}
</script>

<style scoped>
</style>
