<template lang="pug">
    .container
        .wrapper
          Header(v-model="isHistory")
          transition(name="slide")
              div(v-if="isHistory")
                  span(v-if="!history.length").title There's no history yet
                  div(v-else).data-container
                    transition-group(name="list")
                      Item(v-for="(item, index) in history" :key="`${index}-${item.content}`" :content="item.content" :result="item.result")
          transition(name="slide")
              div(v-if="!isHistory")
                  span.title There's nothing saved in memory
        .footer 
            button(@click="$store.dispatch('clear')").btn.clear
                font-awesome-icon(:icon="['fas', 'trash-alt']"  color="#5B5B5B").icon
</template>
<script>
import Header from './Header'
import Item from './Item'

export default {
  name: 'History',
  components: {
    Header,
    Item,
  },
  data() {
    return {
      isHistory: true,
    }
  },
  computed: {
    history() {
      return this.$store.state.history.map(({ calculation: c, result: r }) => ({
        content: c,
        result: r,
      }))
    },
  },
  mounted() {
    this.$store.dispatch('getAll')
  },
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (max-width: 500px) {
  .container {
    display: none;
  }
}

.title {
  margin-left: var(--padding-total);
}

.slide-enter {
  transform: translateX(200px);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-enter-active {
  transition: all 0.2s;
}

.slide-live {
  transform: translateX(0);
  opacity: 1;
}

.slide-live-to {
  transform: translateX(200px);
  opacity: 0;
}

.slide-live-active {
  transition: all 0.2s;
}
.icon {
  font-size: 1.2rem;
  background: transparent;
}
.footer {
  width: 100%;
  background: #f1f1f1;
}
.clear {
  padding: 15px;
  float: right;
}
.clear:hover {
  background: var(--hovered-color);
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 500ms;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
