<template lang="pug">
    .container
        .content {{ content }}
        .result {{ result }}
</template>
<script>
export default {
  props: {
    content: { type: String, default: '' },
    result: { type: String, default: '' },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: var(--padding-total);
  margin-top: 15px;
  margin-bottom: 15px;
}
.container:hover {
  background: var(--hovered-color);
}
.content {
  color: #535353;
  background: transparent;
}
.result {
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  background: transparent;
}
</style>
