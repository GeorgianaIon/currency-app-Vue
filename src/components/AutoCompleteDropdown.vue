<template>
    <div class="currencies-list-wrapper" v-show="inputValue">
        <ul class="currencies-list">
            <li v-for="([code, name]) in filteredCurrencies" :key="code">
                {{ code }} - {{ name }}
                {{ inputValue }}
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { computed, defineProps, ref, onMounted, watchEffect, watch } from 'vue';
import { fetchCurrencies } from '../api/api';


const currencies = ref({
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    RON: "Romanian Leu",
    DKK: "Danish Krone",
});

const { inputValue } = defineProps({
    inputValue: String,
});

const filteredCurrencies = ref([]);

const updateFilteredCurrencies = () => {
    const query = inputValue.toLowerCase();
    filteredCurrencies.value = Object.entries(currencies.value).filter(([code, name]) => {
        return code.toLowerCase().includes(query) || name.toLowerCase().includes(query);
    });
};

onMounted(() => {
    // Initial update
    updateFilteredCurrencies();

    // Watch for changes in inputValue
    watch(() => inputValue, () => {
        updateFilteredCurrencies();
    });
});

watchEffect(() => {
    console.log(inputValue.value);
});

const loadCurrencies = async () => {
    try {
        currencies.value = await fetchCurrencies();
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
};

// onMounted(() => {
//     loadCurrencies();
// });

</script>
  
<style scoped>
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
  