<template>
  <section class="container">
    <h1>{{ post.fields.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="posts__contents" v-html="toHtmlString(post.fields.contents).replace(/\n/g, `</br>`)" />
    <Tags :tags="post.fields.tags" />
  </section>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Tags from '@/components/Tags.vue'
import client from '~/plugins/contentful.js'

export default {
  components: { Tags },
  async asyncData ({ params }) {
    return await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      limit: 1,
      'fields.slug': params.slug
    }).then((entries) => { return { post: entries.items[0] } })
  },
  data () {
    return { }
  },
  head () {
    return { titleTemplate: `${this.post.fields.title} | %s` }
  },
  methods: {
    toHtmlString (obj) {
      return documentToHtmlString(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 40px 0 40px;
}

.posts {
  &__item {
    margin: 0 0 60px 0;
  }

  &__title {
    font-size: 3rem;

    &:hover {
      color: #4169e1;
    }
  }

  &__contents {
    margin: 20px 0 0;
  }

  &-tags {
    display: flex;
    margin: 20px 0 0;

    li {
      margin: 0 20px 0 0;

      a {
        color: #4169e1;

        &::before {
          content: '#';
        }
      }
    }
  }
}
</style>

