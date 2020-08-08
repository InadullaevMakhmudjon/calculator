<template lang="pug">
    .container
        button(
            v-for="btn in keys"
            :id="btn"
            :number="numbers.concat(actions).includes(btn)"
            :equal="btn === '='"
            @click="setValue(btn)"
        ).btn.key {{ btn === 'delete' ? '' : btn }}
            font-awesome-icon(v-if="btn === 'delete'" :icon="['fas', 'backspace']").icon
</template>
<script>
import global from '~/mixins/global'

export default {
  name: 'Keyboards',
  mixins: [global],
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.icon {
  background: transparent;
}
.key {
  color: black;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  margin: 1.5px;
  font-size: 1.3rem;
}
.key[number] {
  background: #fdfdfd;
  font-weight: bold;
}
.key[equal] {
  background: #83bbe7;
  font-size: 2rem;
  font-weight: 100;
  padding: 0;
}
.key:hover {
  background: var(--hovered-color);
}
.key[equal]:hover {
  background: #4599db;
}
.key[clicked] {
  background: var(--hovered-color);
}
.key:active {
  background-color: #c9c9c9;
}
</style>
