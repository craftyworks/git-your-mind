export default {
  install (Vue) {
    const constants = Object.freeze({
      SCREEN: {
        SQUARE_BOX_WIDTH: 60
      },
      MOBILE: {
        SQUARE_BOX_WIDTH: 40
      },
      MOBILE_WIDTH: 480
    })
    Vue.prototype.CONST = constants
  }
}
