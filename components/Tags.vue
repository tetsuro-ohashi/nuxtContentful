<template>
  <div>
    <ul v-if="tags.length" class="tags">
      <li v-for="(tag, index) in tags" :key="index">
        <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.fields.slug, tag: tag }}">
          {{ tag.fields.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Object,
      default: () => ({ tags: '' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags {
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
</style>
