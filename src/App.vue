<template>

  <div id="app">
    <app-header></app-header>
    <div class="container">
      <portfolio></portfolio>
      <!-- About Section-->
      <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
          <!-- About Section Heading-->
          <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
          <!-- Icon Divider-->
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <!-- About Section Content-->
          <div class="row">
            <div class="col-lg-4 ml-auto"><p class="lead">Freelancer is a free bootstrap theme created by Start
              Bootstrap.
              The download includes the complete source files including HTML, CSS, and JavaScript as well as optional
              SASS
              stylesheets for easy customization.</p></div>
            <div class="col-lg-4 mr-auto"><p class="lead">You can create your own custom avatar for the masthead, change
              the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
          <!-- About Section Button-->
          <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/"><i
              class="fas fa-download mr-2"></i>Free Download!</a>
          </div>
        </div>
      </section>
      <!-- Contact Section-->
      <section class="page-section" id="contact">
        <div class="container">
          <!-- Contact Section Heading-->
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          <!-- Icon Divider-->
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <!-- Contact Section Form-->
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-->
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label><input class="form-control" id="name" type="text" placeholder="Name"
                                              required="required"
                                              data-validation-required-message="Please enter your name."/>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label><input class="form-control" id="email" type="email"
                                                       placeholder="Email Address" required="required"
                                                       data-validation-required-message="Please enter your email address."/>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label><input class="form-control" id="phone" type="tel"
                                                      placeholder="Phone Number" required="required"
                                                      data-validation-required-message="Please enter your phone number."/>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label><textarea class="form-control" id="message" rows="5" placeholder="Message"
                                                    required="required"
                                                    data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <br/>
                <div id="success"></div>
                <div class="form-group">
                  <button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader'
import AppFooter from './layout/AppFooter'
import Portfolio from './layout/section/Portfolio'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: { AppHeader, AppFooter, Portfolio },
  data () {
    return {}
  },
  methods: {
    /**
     * docuement scroll event handler
     */
    onScroll (event) {
      // 스크롤이 생기면 Top 으로 스크롤 시키는 버튼을 보여준다.
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      this.showScrollTop(scrollTop > 300)

      // 스크롤이 생기면 네비게이션바 높이를 줄여준다.
      if (scrollTop > 100) {
        this.shrinkNavbar()
      } else {
        this.expandNavbar()
      }
    },
    ...mapMutations(['shrinkNavbar', 'expandNavbar', 'showScrollTop'])
  },
  mounted () {
    window.addEventListener('scroll', this._.debounce(this.onScroll, 300))
  }
}
</script>

<style>
  @import './assets/css/styles.css';
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
