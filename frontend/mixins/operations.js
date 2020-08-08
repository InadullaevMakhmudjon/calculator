export default {
  methods: {
    calculate(operation) {
      if (!isNaN(this.title)) {
        this.$store.commit('calculate', { operation })
      }
    },
    equal() {
      if (this.caption) {
        this.$store.commit('equal')
        this.$store.dispatch('create')
      }
    },
    negativePosative() {
      if (this.title) {
        this.$store.commit('negativePosotive')
      }
    },
    deleteChar() {
      this.$store.commit('deleteCharacter')
    },
    squared() {
      this.$store.commit('squared')
    },
    dotChar() {
      this.$store.commit('dotCharacter')
    },
    clear() {
      this.$store.commit('clear')
    },
    oneOver() {
      this.$store.commit('oneOver')
    },
    rooted() {
      this.$store.commit('rooted')
    },
    percent() {
      this.$store.commit('percent')
    },
  },
}
