<template>
    <button @click="$emit('onClick')" :class="[type === 'contained' ? 'contained' : 'text']">
        <i v-if="iconClass" :class="[iconClass, 'icon']" />
        {{ text }}
    </button>
</template>
  
<script setup>
import { defineProps } from 'vue';

defineProps({
    type: {
        type: String,
        default: "text",
    },
    text: {
        type: String,
        default: "",
    },
    iconClass: {
        type: String,
        default: false,
    },
});
</script>
  
<style scoped>
button {
    padding: 1rem 2.1rem;
    font-size: 1.8rem;
    border: none;
    cursor: pointer;
    border-radius: 0.6rem;
}

.contained {
    background-color: #FFC93C;
    color: black;
}

.text {
    background-color: transparent;
    color: #FFC93C;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 0.5rem;
    font-size: 2.5rem;
    color: #FFC93C;
}
</style>
  