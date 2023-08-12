<template>
    <input v-model="value" :type="type" :placeholder="placeholder" class="" />
</template>
  
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { value, type, placeholder } = defineProps(['value', 'type', 'placeholder']);
const { emit } = defineEmits();

return {
    value,
    type,
    placeholder,
    emit,
};
</script>

<style></style>