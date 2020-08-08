<template lang="pug">
    .toolbar-action-container
        .toolbar-title-container
          .toolbar-action
              .toolbar-action-line
              .toolbar-action-line
              .toolbar-action-line
          .toolbar-title Standard
        button.btn.toolbar-history
          font-awesome-icon(:icon="['fas', 'history']" color="#5B5B5B").icon
</template>
<style scoped>
.toolbar-action-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.toolbar-title-container {
  display: flex;
  direction: row;
  align-items: center;
}
.toolbar-action {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: var(--toolbar-height);
  padding: 12px calc(var(--padding-total) * 2);
}

.toolbar-action:hover {
  background: var(--hovered-color);
}
.toolbar-action-line {
  border: 0.5px solid black;
  width: 20px;
}
.toolbar-title {
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 8px;
}
.toolbar-history {
  height: var(--toolbar-height);
  width: calc(var(--toolbar-height) * 1.2);
}
.toolbar-history:hover {
  background: var(--hovered-color);
}
.icon {
  font-size: 1.1rem;
  background: transparent;
  font-weight: 100;
}
</style>
