<template>
  <div>
    <h1>Posts</h1>
    <Posts :filter="filter" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
export default {
  name: 'Main',
  components: { Posts },
  data () {
    return { filter: { tag: '' } }
  }
}
</script>

<style scoped>
</style>
