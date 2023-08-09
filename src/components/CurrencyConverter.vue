<template>
    <div class="form">
        <label for="from-currency">From:</label>
        <select v-model="fromCurrency" id="from-currency">
            <option v-for="currency in currencies" :value="currency.value" :key="currency.value">
                {{ currency.label }} {{ currency.value }}
            </option>
        </select>

        <label for="to-currency">To:</label>
        <select v-model="toCurrency" id="to-currency">
            <option v-for="currency in currencies" :value="currency.value" :key="currency.value">
                {{ currency.label }} {{ currency.value }}
            </option>
        </select>

        <label for="amount">Amount:</label>
        <input v-model="amount" type="number" id="amount" />

        <button @click="convert">Convert</button>

        <div v-if="convertedAmount">
            <p>{{ amount }} {{ fromCurrency }} =</p>
            <h2>{{ convertedAmount }} {{ toCurrency }}</h2>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const fromCurrency = ref('USD');
const toCurrency = ref('EUR');
const amount = ref('');
const convertedAmount = ref(null);

const apiKey = 'duBkTtQCuHMXG3gmbxeli7pxKIGfvufM'

const currencies = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'GBP', label: '£' },
    { value: 'JPY', label: '¥' },
];

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
  
<style>
.container {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
     */
    justify-content: center;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.form label,
.form select,
.form input {
    margin-bottom: 1rem;
}

.form button {
    margin-top: 1rem;
}

.form div {
    margin-top: 1rem;
}
</style>
  