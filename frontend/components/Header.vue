<template lang="pug">
    .header-container
      .header-title Calculator
      .header-actions
        button.btn.header-btn.action
          font-awesome-icon(:icon="['fas', 'window-minimize']").icon
        button.btn.header-btn.action
          font-awesome-icon(:icon="['fas', 'window-maximize']").icon
        button.btn.header-btn.close
          font-awesome-icon(:icon="['fas', 'times']").icon
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.header-title {
  font-size: 1rem;
  color: black;
  font-weight: 400;
  margin-left: var(--padding-total);
  margin-top: var(--padding-total);
}
.header-actions {
  display: flex;
  align-items: center;
}
.header-btn {
  width: 45px;
  height: 30px;
}
.close:hover {
  background: #e81123;
  color: white;
}
.action:hover {
  background: var(--hovered-color);
  color: black;
}
.icon {
  font-size: 14px;
  background: transparent;
  font-weight: 100;
}
</style>
