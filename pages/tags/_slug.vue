<template>
  <div>
    <h1>Tag slug {{ post.fields.title }}</h1>
    <Posts :filter="{ tag: post.sys.id }"/>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import client from '~/plugins/contentful.js'
export default {
  name: 'Main',
  components: {
    Posts,
  },
  data() {
    return {
      title: '',
      filter: {
        tag: ''
      }
    };
  },
  async asyncData({ params, payload }) {
    const entry = await client.getEntry(params.slug)
    return {
      post: entry
    }
  },
}
</script>

<style scoped>
</style>
