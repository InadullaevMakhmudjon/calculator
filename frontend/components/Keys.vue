<template lang="pug">
    .container
        button(disabled).btn.key MC
        button(disabled).btn.key MR
        button.btn.key M+
        button.btn.key M-
        button.btn.key MS
        .mkey
          button(disabled).btn.key
            .key-content M
                font-awesome-icon(:icon="['fas', 'caret-down']").icon
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

.mkey {
  display: none;
}

@media only screen and (max-width: 500px) {
  .mkey {
    display: inherit;
  }
  .container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
  }
}

.key {
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
  background: transparent;
}
.key:enabled:hover {
  background: var(--hovered-color);
}
.key-content {
  display: flex;
  align-items: flex-start;
}
.icon {
  font-size: 8px;
  margin-top: 2px;
}
</style>
