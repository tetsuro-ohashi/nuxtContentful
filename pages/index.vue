<template>
  <div>
    <h1>Nuxt Contentful Page</h1>
    <Posts :filter="filter" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
export default {
  name: 'Main',
  components: { Posts },
  data () {
    return {
      filter: {
        tag: '',
        posts_per_page: 10
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
