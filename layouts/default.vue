<template>
  <div class="wrap">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default { components: { Header } }
</script>

<style lang="scss" scoped>
.wrap {
  padding: 40px;
  line-height: 1.4;
}
</style>
