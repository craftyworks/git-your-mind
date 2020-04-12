export default {
  shrinkNavbar: (store) => {
    store.shrinkNavbar = true
  },
  expandNavbar: (store) => {
    store.shrinkNavbar = false
  },
  showScrollTop: (store, payload) => {
    store.showScrollTop = payload
  },
  openModalStatus: (store, payload) => {
    const model = store.openModalStatus
    if (payload.opened) {
      model.opened = true
      model.paddingRight = payload.paddingRight
    } else {
      model.opened = false
      model.paddingRight = 0
    }
  },
  mutate: (store, payload) => {
    store[payload.name] = payload.value
  }
}
