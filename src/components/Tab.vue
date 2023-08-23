<template>
    <button @click="$emit('onClick', label)">
        <i :class="[iconClass, 'icon']"></i>{{ label }}
    </button>
</template>
  
<script setup>
import { defineProps } from 'vue';

defineProps({
    label: {
        type: String,
        default: "Tab",
    },
    iconClass: {
        type: String,
        default: "",
    }
});
</script>

<style scoped>
.icon {
    margin: 0 1rem;
    font-size: 1.5rem;
}
</style>
  