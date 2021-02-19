<template>
  <div class="main_wrapper" :style="color">
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import color from '~/assets/data/color.json'
export type ColorType = typeof color.allium

type Data = {
  color: ColorType
}
type Methods = {}
type Computed = {}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  data() {
    return {
      color: color.allium,
    }
  },
}
export default Vue.extend(options)
</script>
<style lang="scss" scoped>
* {
  color: var(--text-color);
}
</style>
