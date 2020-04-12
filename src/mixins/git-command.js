export default {
  data () {
    return {
      command: [],
      step: [],
      next: () => this.step.push(true)
    }
  },
  methods: {
    startCommand () {
      this._.delay(() => {
        this.step.push(true)
      }, 1000)
    },
    restartCommand (delay = 1000) {
      this._.delay(() => {
        this.step.splice(0, this.step.length)
        this.startCommand()
      }, delay)
    }
  },
  computed: {
    complete () {
      return this.step[1] === true
    }
  },
  mounted () {
    this.startCommand()
  }
}
