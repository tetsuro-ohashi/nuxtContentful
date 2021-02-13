<template>
  <section class="container">
    <h1>{{ post.fields.title }}</h1>
    <div>{{ toHtmlString(post.fields.contents) }}</div>
  </section>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful.js'

export default {
  async asyncData ({ params, payload }) {
    const entry = await client.getEntry(params.slug)
    return { post: entry }
  },
  data () {
    return { }
  },
  methods: {
    toHtmlString (obj) {
      return documentToHtmlString(obj)
    }
  }
}
</script>
