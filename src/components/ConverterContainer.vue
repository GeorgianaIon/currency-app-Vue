<template>
    <div class="currency-converter-container">
        <div class="tabs">
            <Tab @onClick="handleTabClick" :class="{ active: activeTab === 'Convert', radiusLeft: true }" label="Convert"
                iconClass="fas fa-exchange-alt" />
            <Tab @onClick="handleTabClick" :class="{ active: activeTab === 'Charts', radiusRight: true }" label="Charts"
                iconClass="fas fa-chart-line" />
        </div>
        <div v-if="activeTab === 'Convert'" class="convert-tab">
            <div class="container + from-to-inputs">
                <Input type="text" v-model="fromCurrency" label="From" />
                <i class="fa-solid fa-repeat reverse-icon" @click="reverseCurrencies"></i>
                <Input type="text" v-model="toCurrency" label="To" />
            </div>
            <div class="container + amount-button">
                <Input type="number" v-model="amount" label="Amount" />
                <Button @onClick="convert" type="contained" text="Convert" />
            </div>
            <p>{{ convertedAmount }}</p>
        </div>
        <div v-else-if="activeTab === 'Charts'">
            <!-- Place your Charts component or code here -->
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import Input from './Input.vue';
import Tab from './Tab.vue';
import Button from './Button.vue';

const activeTab = ref('Convert');


const fromCurrency = ref('');
const toCurrency = ref('');
const amount = ref('');
const convertedAmount = ref(null);

const apiKey = 'duBkTtQCuHMXG3gmbxeli7pxKIGfvufM'

const currencies = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'GBP', label: '£' },
    { value: 'JPY', label: '¥' },
];

const reverseCurrencies = () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
};

const handleTabClick = (tabLabel) => {
    activeTab.value = tabLabel;
};

const convert = () => {
    const url = `https://api.apilayer.com/fixer/convert?from=${fromCurrency.value}&to=${toCurrency.value}&amount=${amount.value}&apikey=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            convertedAmount.value = data.result;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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

.container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.from-to-inputs {
    align-items: center;
}

.amount-button {
    align-items: end;
}

.reverse-icon {
    margin: 1rem 1rem 0rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>
  