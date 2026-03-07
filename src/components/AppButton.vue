<template>
  <button
    :type="type"
    :disabled="disabled"
    :style="{ width }"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  inheritAttrs: false,
  emits: ["click"],
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "240px",
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }

      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 15px;
  border: 1px solid var(--persian-red-dark);
  color: var(--persian-red-light);
  font-size: 14px;
  background: none;
  transition: all 200ms ease-out;
  cursor: pointer;
  margin: 0 auto;
}

button:hover {
  border: 1px solid var(--persian-red-light);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
