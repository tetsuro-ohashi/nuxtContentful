<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.sys.id  }}">{{ post.fields.title }}</nuxt-link>
        <div v-html="toHtmlString(post.fields.contents).replace(/\n/g, `</br>`)" />
        <ul>
          <li v-for="(tag, index) in post.fields.tags" :key="index">
            <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.sys.id , tag: tag }}">{{ tag.fields.title }}</nuxt-link>
          </li>
        </ul>
      </li>
      <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
    </ul>
    </div>
</template>

<script>
import client from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export default {
  props: ['filter'],
  name: "Posts",
  data() {
    return {
      posts: [],
      page: 0,
      posts_per_page: 2,
      order: '-fields.date'
    };
  },
  created() {
    this.page = 0
    if(this.filter.page){
      this.page = this.filter.page
    }
    if(this.filter.posts_per_page){
      this.posts_per_page = this.filter.posts_per_page
    }
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    },
    infiniteScroll($state) {
      return client.getEntries({
        content_type: 'post',
        skip: this.page * this.posts_per_page,
        limit: this.posts_per_page,
        'fields.tags.sys.id': this.filter.tag,
      })
      .then(entries => {
        if (entries.items.length) {
          for(let i in entries.items) {
            this.posts.push(entries.items[i])
          }
          $state.loaded()
        } else {
          $state.complete()
        }
        this.page++
      })
    }
  }
}
</script>

<style scoped>
.theme--light.v-card {
  background-color: #f5f5f5;
}
</style>
