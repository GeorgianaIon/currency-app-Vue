<template>
    <div class="input-wrap">
        <label v-if="label">{{ label }}</label>
        <input @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :type="type" class="input" />
        <div class="currencies-list-wrapper" v-show="modelValue">
            <ul class="currencies-list">
                <li v-for="([code, name]) in filteredCurrencies" :key="code">
                    {{ code }} - {{ name }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, ref, computed } from 'vue';

const { label, modelValue, type } = defineProps({
    label: [String, Boolean],
    modelValue: String,
    type: {
        type: String,
        default: "text",
    },
});

const currencies = ref({
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    RON: "Romanian Leu",
    DKK: "Danish Krone",
});

const filteredCurrencies = computed(() => {
    if (modelValue) {
        const query = modelValue.value.toLowerCase();
        return Object.entries(currencies.value).filter(([code, name]) => {
            return code.toLowerCase().includes(query) || name.toLowerCase().includes(query);
        });
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

.currencies-list-wrapper {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    width: 31.4rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
}

.currencies-list {
    list-style: none;
}

.currencies-list li {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
}
</style>