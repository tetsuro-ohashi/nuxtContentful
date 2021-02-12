<template>
  <div>
    <h1>Nuxt Contentful Page</h1>
    <nuxt-link to="/contact/">Contact</nuxt-link>
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
