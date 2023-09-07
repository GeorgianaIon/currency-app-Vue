<template>
    <div class="input-wrap">
        <label v-if="label">{{ label }}</label>
        <input @input="$emit('updateValue', search)" v-model="search" :type="type" class="input" />
        <div class="currencies-list-wrapper" v-show="modelValue && showAutocompleteDropdown">
            <ul class="currencies-list">
                <li v-for="([code, name]) in filteredCurrencies" :key="code" @click="selectCurrency(code)">
                    {{ code }} - {{ name }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, ref, computed, defineEmits } from 'vue';

defineEmits(['updateValue']);

const { label, modelValue, type, showAutocomplete } = defineProps({
    label: [String, Boolean],
    modelValue: String,
    type: {
        type: String,
        default: "text",
    },
    showAutocomplete: {
        type: Boolean,
        default: false,
    },
});

const search = ref('');
const showAutocompleteDropdown = ref(showAutocomplete);


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
    if (search && showAutocompleteDropdown) {
        const query = search.value.toLowerCase();
        return Object.entries(currencies.value).filter(([code, name]) => {
            return code.toLowerCase().includes(query) || name.toLowerCase().includes(query);
        });
    }
});

const selectCurrency = (code) => {
    search.value = code;
    showAutocompleteDropdown.value = false;
    $emit('updateValue', code)
};
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
    position: relative;
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
    z-index: 1;
    margin-top: 0.5rem;
}

.currencies-list {
    list-style: none;
}

.currencies-list li {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
}
</style>