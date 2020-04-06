<template>
  <div class="bubble-wrapper">
    <div ref="bubble" class="bubble">
      <img class="bubble-image"
           src="@/assets/img/slack-white.svg"/>
    </div>
    <div ref="bubblePulse" class="bubble-pulse"></div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from 'gsap'

export default {
  name: 'Bubble',
  data () {
    return {
      timeline: null
    }
  },
  mounted () {
    const { bubble, bubblePulse } = this.$refs
    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    })

    this.timeline.to(bubble, 0.4, {
      scale: 0.8,
      rotation: 16,
      ease: Back.easeOut.config(1.7)
    })
    this.timeline.to(
      bubblePulse,
      0.5,
      {
        scale: 0.9,
        opacity: 1
      },
      '-=0.6'
    )
    this.timeline.to(bubble, 1.2, {
      scale: 1,
      rotation: '-=16',
      ease: Elastic.easeOut.config(2.5, 0.5)
    })
    this.timeline.to(
      bubblePulse,
      1.1,
      {
        scale: 3,
        opacity: 0,
        ease: Expo.easeOut
      },
      '-=1.2'
    )
  }
}
</script>

<style scoped>
  .bubble-wrapper {
    position: relative;
    margin: auto;
  }

  .bubble {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background: #272727;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  .bubble-pulse {
    position: absolute;
    z-index: 1;
    height: 120px;
    width: 120px;
    top: 50%;
    left: 50%;
    margin-top: -60px;
    margin-left: -60px;
    background: #272727;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0);
  }

  .bubble-image {
    height: 50%;
  }
</style>
