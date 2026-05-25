<template>
  <label class="bf">
    <span class="bf__label">
      {{ label }}
      <span v-if="hint" class="bf__hint">{{ hint }}</span>
    </span>

    <textarea
      v-if="type === 'textarea'"
      :value="modelValue"
      :rows="rows || 3"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>

    <div v-else-if="type === 'color'" class="bf__color">
      <input
        type="color"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>

    <input
      v-else-if="type === 'range'"
      type="range"
      :min="min"
      :max="max"
      :value="modelValue"
      @input="$emit('update:modelValue', Number($event.target.value))"
    />

    <select
      v-else-if="type === 'select'"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>

    <input
      v-else
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps({
  label: String,
  hint: String,
  type: { type: String, default: 'text' },
  modelValue: [String, Number],
  placeholder: String,
  options: Array,
  min: Number,
  max: Number,
  rows: Number,
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.bf { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.85rem; }
.bf__label {
  font-size: 0.78rem; font-weight: 600; color: var(--vp-c-text-2);
  display: flex; justify-content: space-between; align-items: baseline;
}
.bf__hint { font-weight: 400; color: var(--vp-c-text-3); font-size: 0.72rem; }
.bf input[type="text"],
.bf input[type="email"],
.bf input[type="url"],
.bf input[type="number"],
.bf textarea,
.bf select {
  width: 100%; padding: 0.55rem 0.75rem; font-size: 0.88rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
  font-family: inherit; outline: none;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.bf input:focus, .bf textarea:focus, .bf select:focus {
  border-color: var(--rk-accent-1);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--rk-accent-1) 25%, transparent);
}
.bf textarea { resize: vertical; min-height: 60px; line-height: 1.5; }
.bf__color { display: flex; gap: 0.5rem; align-items: center; }
.bf__color input[type="color"] {
  width: 38px; height: 38px; padding: 2px; border: 1px solid var(--vp-c-divider);
  border-radius: 8px; background: var(--vp-c-bg-soft); cursor: pointer;
}
.bf input[type="range"] { width: 100%; accent-color: var(--rk-accent-1); }
</style>
