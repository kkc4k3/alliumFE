<template>
  <div class="index_page">
    <PostComponent />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

import PostComponent from '~/components/PostComponent.vue'

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: {
    PostComponent,
  },
}

export default Vue.extend(options)
</script>
<style lang="scss" scoped>
.index_page {
  background: #cfd8dc; // 仮
  padding: size.$l;
}
</style>
