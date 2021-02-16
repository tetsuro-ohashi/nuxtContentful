<template>
  <div>
    <ul class="posts">
      <li v-for="(post, index) in posts" :key="index" class="posts__item">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }" class="posts__title">
          {{ post.fields.title }}
        </nuxt-link>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <!-- <div class="posts__contents" v-html="toHtmlString(post.fields.contents).replace(/\n/g, `</br>`)" /> -->
        <ul v-if="post.fields.tags" class="posts-tags">
          <li v-for="(tag, tagindex) in post.fields.tags" :key="tagindex">
            <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.fields.slug, tag: tag }}">
              {{ tag.fields.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <infinite-loading v-if="page>0" spinner="spiral" @infinite="infiniteScroll" />
    </ul>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful.js'
export default {
  name: 'Posts',
  props: {
    filter: {
      type: Object,
      default: () => ({ tag: '' })
    }
  },
  data () {
    return {
      posts: [],
      page: 0,
      posts_per_page: 10,
      order: '-fields.date'
    }
  },
  created () {
    this.page = 0
    this.getPosts()
    if (this.filter.page) {
      this.page = this.filter.page
    }
    if (this.filter.posts_per_page) {
      this.posts_per_page = this.filter.posts_per_page
    }
  },
  methods: {
    toHtmlString (obj) {
      return documentToHtmlString(obj)
    },
    infiniteScroll ($state) { this.getPosts($state) },
    getPosts ($state) {
      return client.getEntries({
        content_type: 'post',
        skip: this.page * this.posts_per_page,
        limit: this.posts_per_page,
        'fields.tags.sys.id': this.filter.tag,
        order: this.order
      }).then((entries) => {
        if (entries.items.length) {
          for (const i in entries.items) {
            this.posts.push(entries.items[i])
          }
          if ($state) {
            $state.loaded()
          }
        } else if ($state) {
          $state.complete()
        }
        this.page++
      })
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
          content: "#";
        }
      }
    }
  }
}
</style>
