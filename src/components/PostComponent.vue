<template>
  <div class="post_component" :style="color">
    <div class="icon">
      <img
        src="https://d1rv60vthn4ial.cloudfront.net/misskey/fe952cc5-fecd-40b3-bb72-48e9ef1a29cb.png"
        alt="kkcake's icon"
        class="img"
      />
    </div>
    <div class="content">
      <div class="top">
        <div class="name">kkcake</div>
        <div class="status">
          <div class="time">1分前</div>
          <fa class="level" :icon="levelIcon" />
        </div>
      </div>
      <div class="data">
        <img src="https://ms.kvche.ch/favicon.ico" alt="" class="ico" />
        <span class="id">@kkcake</span>
        <span class="instance">@p.kvche.ch</span>
      </div>
      <div class="content">
        <div class="cwDesc">cwでコンテンツ隠すやつが思い浮かばねぇ〜</div>
        <div class="cw" @click="cwToggle">
          <div class="icon">
            <fa class="fa" :icon="cwCaret" />
          </div>
          <span class="text">{{ cwText }}</span>
        </div>
        <div class="content" v-show="isContentShow">
          みにゃさん、数取りゲームしましょう！ <br />
          0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめですよ～<br />
          制限時間は10分です。数字はこの投稿にリプライで送ってくださいね！
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import color from '~/assets/data/color.json'
export type basicColor = typeof color.allium

import {
  faGlobe,
  faHome,
  faLock,
  faEnvelope,
  faPlusCircle,
  faMinusCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

type Data = {
  color: basicColor
  isContentShow: boolean
}
type Methods = {
  cwToggle: () => void
}
type Computed = {
  levelIcon: IconDefinition
  cwCaret: IconDefinition
  cwText: string
}
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
      isContentShow: true,
    }
  },
  methods: {
    cwToggle() {
      this.isContentShow = !this.isContentShow
    },
  },
  computed: {
    levelIcon() {
      // 公開範囲アイコン 現状は仮
      const level: number = 1

      // TODO:実際のAPI仕様見て書き換えます
      switch (level) {
        case 0:
          return faGlobe
        case 1:
          return faHome
        case 2:
          return faLock
        default:
          return faEnvelope
      }
    },
    cwCaret() {
      if (this.isContentShow) {
        return faMinusCircle
      } else {
        return faPlusCircle
      }
    },
    cwText() {
      if (this.isContentShow) {
        return '非表示にする'
      } else {
        return '内容を表示する（256文字）'
      }
    },
  },
}
export default Vue.extend(options)
</script>
<style lang="scss" scoped>
.post_component {
  background: var(--bg-color);
  padding: size.$m;
  border-radius: radius.$m;
  display: flex;
  > .icon {
    width: 100px;
    height: 100px;
    border-radius: radius.$m;
    overflow: hidden;
    > .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > .content {
    margin-left: size.$m;
    flex-grow: 1;
    > .top {
      @include centerY;
      justify-content: space-between;
      > .name {
        font-weight: bold;
      }
      > .status {
        @include centerY;
        > .level {
          margin-left: size.$s;
        }
      }
    }
    > .data {
      @include centerY;
      font-size: font.$s;
      margin-top: size.$ss;
      > .ico {
        width: 20px;
        height: 20px;
      }
      > .id {
        margin-left: size.$ss;
      }
    }

    > .content {
      border-top: 3px solid var(--main-color);
      margin-top: size.$s;
      padding-top: size.$s;
      line-height: 1.5;
      > .cw {
        display: flex;
        align-items: center;
        //font-size: font.$s;
        color: var(--main-color);
        font-weight: bold;
        margin-top: size.$ss;
        margin-bottom: size.$ss;
        cursor: pointer;
        user-select: none;
        > .icon {
          font-size: 1.8rem;
        }
        > .text {
          margin-left: size.$ss;
        }
      }
    }
  }
}
</style>
