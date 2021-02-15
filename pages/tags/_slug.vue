<template>
  <div>
    <h1>Tag {{ post.fields.title }}</h1>
    <Posts :filter="{ tag: post.sys.id }" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import client from '~/plugins/contentful.js'
export default {
  name: 'Main',
  components: { Posts },
  async asyncData ({ params }) {
    return await client.getEntries({
      content_type: 'tag',
      limit: 1,
      'fields.slug': params.slug
    }).then((entries) => { return { post: entries.items[0] } })
  },
  data () {
    return {
      title: '',
      filter: { tag: '' }
    }
  },
  head () {
    return { titleTemplate: `${this.post.fields.title} | %s` }
  }
}
</script>

<style scoped>
</style>
