<template lang="pug">
    .header-container
        button(:active="value" @click="$emit('input', true)").btn.title History
        button(:active="!value" @click="$emit('input', false)").btn.title Memory
</template>
<script>
export default {
  props: {
    value: { type: Boolean },
  },
}
</script>
<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
}
.title {
  color: black;
  margin: var(--padding-total);
  font-size: 1rem;
  font-weight: bold;
  line-height: 28px;
}
.title[active] {
  border-bottom: 3px solid #0078d7;
}
</style>
