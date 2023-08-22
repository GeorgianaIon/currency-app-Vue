<template>
    <div class="input-wrap">
        <label v-if="label">{{ label }}</label>
        <input @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :type="type" class="input" />
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue';

defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    modelValue: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    }
});
</script>

<style>
input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.63rem;
    height: 3.5rem;
    width: 30.4rem;
    border: 1px solid var(--light-blue);
    margin-top: 0.5rem;
}

.input-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>