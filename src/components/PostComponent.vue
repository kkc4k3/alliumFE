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
        <div class="name">
          <div class="text">kkcake</div>
          <div class="isAdmin" v-if="isAdmin">
            <fa class="icon" :icon="faTree" />
          </div>
          <div class="isModelator" v-if="!isAdmin && isModelator">
            <fa class="icon" :icon="faSeedling" />
          </div>
        </div>
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
      <div class="images _quad">
        <transition name="nsfw">
          <div class="nsfw" v-show="!isImageShow" @click="showImage">
            <div class="head">NSFW</div>
            <div class="note">クリックで画像を表示</div>
          </div>
        </transition>
        <div class="hide" @click="hideImage">
          <fa class="icon" :icon="faEyeSlash" />
          <div class="text">画像を隠す</div>
        </div>
        <div class="list">
          <div class="item">
            <img
              src="https://d1rv60vthn4ial.cloudfront.net/misskey/5277cb91-513a-4b29-b757-8c038d90dc11.png"
              alt=""
              class="img"
            />
          </div>
          <div class="item">
            <img
              src="https://d1rv60vthn4ial.cloudfront.net/misskey/a425d5c9-ef7a-4e63-a027-4577645fdb91.png"
              alt=""
              class="img"
            />
          </div>
          <div class="item">
            <img
              src="https://d1rv60vthn4ial.cloudfront.net/misskey/99d5e925-0db7-4d7c-b6b6-93cacabb37e2.jpg"
              alt=""
              class="img"
            />
          </div>
          <div class="item">
            <img
              src="https://d1rv60vthn4ial.cloudfront.net/misskey/dcb204d4-742c-4647-a62c-5e23fd976f58.jpg"
              alt=""
              class="img"
            />
          </div>
        </div>
      </div>
      <div class="tool">
        <div class="item">
          <div class="icon"><fa class="fa" :icon="faReply" /></div>
          <div class="num">2</div>
        </div>
        <div class="item">
          <div class="icon"><fa class="fa" :icon="faRetweet" /></div>
          <div class="num">2</div>
        </div>
        <div class="item _active">
          <div class="icon"><fa class="fa" :icon="faIcons" /></div>
        </div>
        <div class="item">
          <div class="icon"><fa class="fa" :icon="faHeart" /></div>
        </div>
        <div class="item">
          <div class="icon"><fa class="fa" :icon="faEllipsisV" /></div>
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
  faReply,
  faRetweet,
  faHeart,
  faIcons,
  faEllipsisV,
  faTree,
  faSeedling,
  faEyeSlash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

type Data = {
  color: basicColor
  isContentShow: boolean
  isImageShow: boolean
  isAdmin: boolean
  isModelator: boolean
}
type Methods = {
  cwToggle: () => void
  showImage: () => void
  hideImage: () => void
}
type Computed = {
  levelIcon: IconDefinition
  cwCaret: IconDefinition
  cwText: string
  faReply: IconDefinition
  faRetweet: IconDefinition
  faHeart: IconDefinition
  faIcons: IconDefinition
  faEllipsisV: IconDefinition
  faTree: IconDefinition
  faSeedling: IconDefinition
  faEyeSlash: IconDefinition
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
      isContentShow: false,
      isImageShow: false,
      isAdmin: true,
      isModelator: true,
    }
  },
  methods: {
    cwToggle() {
      this.isContentShow = !this.isContentShow
    },
    showImage() {
      this.isImageShow = true
    },
    hideImage() {
      this.isImageShow = false
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
    faReply() {
      return faReply
    },
    faRetweet() {
      return faRetweet
    },
    faHeart() {
      return faHeart
    },
    faIcons() {
      return faIcons
    },
    faEllipsisV() {
      return faEllipsisV
    },
    faTree() {
      return faTree
    },
    faSeedling() {
      return faSeedling
    },
    faEyeSlash() {
      return faEyeSlash
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
        @include centerY;
        > .text {
          font-weight: bold;
        }
        > .isAdmin,
        > .isModelator {
          margin-left: size.$ss;
          > .icon {
            color: var(--main-color);
            font-size: fa.$m;
          }
        }
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
          font-size: fa.$m;
        }
        > .text {
          margin-left: size.$ss;
        }
      }
    }
    > .images {
      margin-top: size.$m;
      position: relative;
      width: 100%;
      padding-bottom: calc(1 / 2 * 100%);
      > .list {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -(size.$s);
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        > .item {
          width: 100%;
          height: 100%;
          padding-left: size.$s;
          overflow: hidden;
          > .img {
            border-radius: radius.$m;
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
            border: 1px dotted var(--main-color);

            @include hover {
              border: 1px solid var(--main-color);
            }
          }
        }
      }
      > .nsfw {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: rgba(#000, 0.3);
        backdrop-filter: blur(50px);
        border-radius: radius.$m;
        cursor: pointer;
        @include center;
        text-align: center;
        color: var(--alt-color);
        user-select: none;

        > .head {
          font-weight: bold;
          padding: size.$ss size.$s;
          border: 2px solid var(--alt-color);
          border-radius: radius.$s;
        }
        > .note {
          margin-top: size.$s;
        }
      }

      > .hide {
        user-select: none;
        position: absolute;
        top: size.$s;
        right: size.$s;
        z-index: 1;
        @include centerY;
        padding: size.$ss;
        filter: opacity(0.7);
        background: rgba(#000, 0.3);
        border-radius: radius.$s;
        font-size: font.$s;
        cursor: pointer;
        color: var(--bg-color);

        @include hover {
          filter: opacity(1);
        }

        > .icon {
          font-size: fa.$s;
        }
        > .text {
          margin-left: size.$ss;
        }
      }

      &._double {
        > .list > .item {
          width: 50%;
        }
      }

      &._triple {
        > .list > .item {
          width: 33.333%;
        }
      }

      &._quad {
        > .list > .item {
          width: 25%;
        }
      }
    }

    > .tool {
      @include centerY;
      justify-content: flex-end;
      margin-top: size.$m;
      > .item {
        margin-left: size.$l;
        width: 45px;
        cursor: pointer;
        @include centerY;
        justify-content: center;
        color: var(--light-color);
        user-select: none;
        > .icon {
          font-size: fa.$m;
        }

        > .num {
          margin-left: size.$ss;
        }

        &._active {
          color: var(--main-color);
        }
      }
    }
  }
}

.nsfw-enter-active,
.nsfw-leave-active {
  transition: 0.15s;
}

.nsfw-enter,
.nsfw-leave-to {
  opacity: 0;
}

.nsfw-enter-to,
.nsfw-leave {
  opacity: 1;
}
</style>
