<template>
    <div class="currency-converter-container">
        <div class="tabs">
            <button @click="activeTab = 'convert'" :class="{ active: activeTab === 'convert', radiusLeft: true }"><i
                    class="fas fa-exchange-alt"></i>Convert</button>
            <button @click="activeTab = 'charts'" :class="{ active: activeTab === 'charts', radiusRight: true }"><i
                    class="fas fa-chart-line"></i>Charts</button>
        </div>
        <div v-if="activeTab === 'convert'" class="convert-tab">
            <div class="converter-inputs">
                <Input type="text" v-model="fromCurrency" label="From" />
                <i class="fa-solid fa-repeat reverse-icon" @click="reverseCurrencies"></i>
                <Input type="text" v-model="toCurrency" label="To" />
            </div>
            <div class="converter-inputs">
                <Input type="number" v-model="amount" label="Amount" />
                <button>Convert</button>
            </div>
        </div>
        <div v-else-if="activeTab === 'charts'">
            <!-- Place your Charts component or code here -->
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import Input from './Input.vue';

const activeTab = ref('convert');

const fromCurrency = ref('');
const toCurrency = ref('');
const amount = ref('');

const reverseCurrencies = () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
};
</script>
  
<style scoped>
.currency-converter-container {
    background-color: var(--white-blue);
    width: 75rem;
    margin: auto;
    border-radius: 1.25rem;
    border: 1px solid var(--light-blue);

}

.tabs {
    display: flex;
    justify-content: center;
    border-radius: 1.25rem 1.25rem 0 0;

}

.tabs button {
    flex: 1;
    padding: 1.75rem 0;
    border: 1px solid var(--light-blue);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    background-color: var(--lighter-blue);
    font-size: 1.8rem;
    color: var(--blue);
}

.tabs button.active {
    background-color: var(--white-blue);
    color: black !important;
}

.radiusLeft {
    border-radius: 1.25rem 0 0 0;
}

.radiusRight {
    border-radius: 0 1.25rem 0 0;
}

.tabs button i {
    margin-right: 0.5rem;
    font-size: 1.25rem;
}

.convert-tab {
    padding: 4rem;
}

.converter-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.reverse-icon {
    margin: 1rem 1rem 0rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>
  