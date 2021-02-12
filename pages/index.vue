<template>
  <div>
    <h1>Nuxt Contentful Page</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <p>{{ post.fields.title }}</p>
        <div v-html="$md.render(post.fields.contents)"></div>
      </li>
      <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
    </ul>
  </div>
</template>

<script>
import client from '~/plugins/contentful.js'
var page = 1
var posts_per_page = 2
export default {
  name: "Posts",
  data() {
    return {
      page: 1,
      posts: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      // const response = await axios.get(this.url);
      // this.titles = response.data;
      return client.getEntries({
        content_type: 'post',
        skip: (page - 1) * posts_per_page,
        limit: posts_per_page
      })
      .then(entries => {
        this.posts = entries.items
      })
    },
    infiniteScroll($state) {
      console.log(page)
      setTimeout(() => {
        page++
        return client.getEntries({
          content_type: 'post',
          skip: (page - 1) * posts_per_page,
          limit: posts_per_page
        })
        .then(entries => {
          if (entries.items.length) {
            console.log(entries.items.length)
            for(let i in entries.items) {
              this.posts.push(entries.items[i])
            }
            console.log(this.posts)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      }, 500)
    }
  }
}
</script>

<style scoped>
.theme--light.v-card {
  background-color: #f5f5f5;
}
</style>
