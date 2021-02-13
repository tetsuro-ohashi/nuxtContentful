<template>
  <div>
    <!-- <pre>{{posts}}</pre> -->
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <!-- <pre>{{ post }}</pre> -->
        <!-- <nuxt-link :to="`/posts/${post.sys.id}`">{{ post.fields.title }}</nuxt-link> -->
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.sys.id  }}">{{ post.fields.title }}</nuxt-link>
        <!-- <div v-html="$md.render(post.fields.contents)"></div> -->
        <div v-html="toHtmlString(post.fields.contents).replace(/\n/g, `</br>`)" />
        <ul>
          <li v-for="(tag, index) in post.fields.tags" :key="index">
            <!-- <p>{{ tag.sys.id }}</p> -->
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
var page = 0
var posts_per_page = 2
console.log(page)
export default {
  props: ['filter'],
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    page = 0
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    },
    infiniteScroll($state) {
      return client.getEntries({
        content_type: 'post',
        skip: page * posts_per_page,
        limit: posts_per_page,
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
        page++
        console.log($state)
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
