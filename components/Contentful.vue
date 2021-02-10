<template>
  <div>
    <pre>{{ posts }}</pre>
    <ul>
      <li v-for="post in posts">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import client from '~/plugins/contentful.js'
  var page = 1
  var posts_per_page = 2
  export default {
    name: "Contentful",
    data() {
      return {
        titles: [],
        posts_per_page: 2,
        page: 1
      };
    },
    asyncData() {
      page = 2
      return client.getEntries({
        content_type: 'post',
        skip: (page - 1) * posts_per_page,
        limit: posts_per_page
      })
      .then(entries => {
        return {
          posts: entries.items
        }
      })
    }
  }
</script>
