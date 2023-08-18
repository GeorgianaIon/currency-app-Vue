<template>
    <h1 class="title">Currency Converter</h1>
    <ConverterContainer />
</template>
  
<script setup>
import ConverterContainer from './ConverterContainer.vue';
import { ref } from 'vue';

const fromCurrency = ref('USD');
const toCurrency = ref('EUR');
const amount = ref('');
const convertedAmount = ref(null);
const activeTab = ref('convert');

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
.title {
    text-align: center;
    color: var(--white);
}
</style>
  