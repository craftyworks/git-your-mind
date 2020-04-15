<template>
  <slide-y-up-transition :duration="500">
    <div :class="{show:show, 'd-block': show}"
         :aria-hidden="!show"
         :id="id"
         @click.self="closeModal"
         v-show="show"
         class="app-modal modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <button @click="closeModal" class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <h2 class="app-modal-title text-secondary text-uppercase mb-0">{{title}}</h2>
                  <slot></slot>
                  <button v-show="closeButton" class="btn btn-primary" href="#" data-dismiss="modal" @click="closeModal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </slide-y-up-transition>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import { mapMutations } from 'vuex'

export default {
  name: 'modal',
  components: { SlideYUpTransition },
  props: {
    show: {
      type: Boolean,
      description: 'show/hide modal'
    },
    closeButton: {
      default: true
    },
    id: String,
    title: String
  },
  methods: {
    closeModal () {
      this.$emit('update:show', false)
      this.$emit('close')
    },
    ...mapMutations(['openModalStatus'])
  },
  watch: {
    show (val) {
      const docClasses = document.body.classList
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      this.openModalStatus({ opened: val, paddingRight: scrollbarWidth })
      if (val) {
        docClasses.add('modal-open')
        document.body.style.paddingRight = scrollbarWidth + 'px'
      } else {
        docClasses.remove('modal-open')
        document.body.style.paddingRight = null
      }
    }
  }
}
</script>

<style scoped>
  .modal.show {
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
