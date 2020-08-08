<template lang="pug">
  div
    Header
    .parent
      .container-parent
        Toolbar
        Screen
        Keys
        Keyboards
      History
</template>

<script>
import global from '~/mixins/global'
import Header from '~/components/Header'
import Toolbar from '~/components/Toolbar'
import Screen from '~/components/Screen'
import Keys from '~/components/Keys'
import Keyboards from '~/components/Keyboards'
import History from '~/components/History'

export default {
  components: {
    Header,
    Toolbar,
    Screen,
    Keys,
    Keyboards,
    History,
  },
  mixins: [global],
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
    window.addEventListener('keypress', (event) => {
      this.setValue(event.key)
    })
  },
  methods: {
    resize() {
      this.$store.commit('setWidth', document.documentElement.clientWidth)
    },
  },
}
</script>
<style scoped>
.parent {
  display: grid;
  grid-template-columns: 60% 40%;
}

@media only screen and (max-width: 250px) {
  .parent {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  .parent {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
