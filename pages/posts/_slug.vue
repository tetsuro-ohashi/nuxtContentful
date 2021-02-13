<template>
  <section class="container">
    <h1>{{ post.fields.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="posts__contents" v-html="toHtmlString(post.fields.contents).replace(/\n/g, `</br>`)" />
    <ul class="posts-tags">
      <li v-for="(tag, tagindex) in post.fields.tags" :key="tagindex">
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.sys.id , tag: tag }}">
          {{ tag.fields.title }}
        </nuxt-link>
      </li>
    </ul>
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

<style lang="scss" scoped>
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

