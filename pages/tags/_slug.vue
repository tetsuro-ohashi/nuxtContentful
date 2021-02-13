<template>
  <div>
    <h1>Tag slug {{ post.fields.title }}</h1>
    <Posts :filter="{ tag: post.sys.id }" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import client from '~/plugins/contentful.js'
export default {
  name: 'Main',
  components: { Posts },
  async asyncData ({ params, payload }) {
    const entry = await client.getEntry(params.slug)
    return { post: entry }
  },
  data () {
    return {
      title: '',
      filter: { tag: '' }
    }
  }
}
</script>

<style scoped>
</style>
