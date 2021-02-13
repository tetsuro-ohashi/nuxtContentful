<template>
  <div>
    <h1>Tag</h1>
    <Posts :filter="filter" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
export default {
  name: 'Tags',
  components: { Posts },
  data () {
    return { filter: { tag: '' } }
  }
}
</script>

<style lang="scss" scoped>
</style>

