<template lang="pug">
    .container
          .content {{ caption }}
          .content-title {{ title }}
</template>
<script>
import global from '~/mixins/global'

export default {
  name: 'Screen',
  mixins: [global],
}
</script>
<style scoped>
.container {
  height: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: var(--padding-total);
}
.content-title {
  font-size: 3.5rem;
  font-weight: 500;
  text-align: right;
}
.content {
  height: 30px;
  color: #535353;
  font-size: 1.1rem;
}
</style>
