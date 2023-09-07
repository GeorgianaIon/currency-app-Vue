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
                <Input type="text" v-model="fromCurrency" label="From" :show-autocomplete=true />
                {{ fromCurrency }}
                <i class="fa-solid fa-repeat reverse-icon" @click="reverseCurrencies"></i>
                <Input type="text" v-model="toCurrency" label="To" :show-autocomplete=true />
            </div>
            <div class="container + amount-button">
                <Input type="number" v-model="amount" label="Amount" :show-autocomplete=false />
                <Button @onClick="convert" type="contained" text="Convert" />
            </div>
            <div v-if="convertedAmount">
                <h3 class="text-part">{{ amount }} {{ fromCurrency }} = </h3>
                <h1 class="text-part">{{ convertedAmount }} {{ toCurrency }}</h1>
            </div>
        </div>
        <div v-else-if="activeTab === 'Charts'">
            <h1>Work in progress!</h1>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import Input from './Input.vue';
import Tab from './Tab.vue';
import Button from './Button.vue';
import { fetchCurrencies, convertCurrency } from '../api/api.js';

const activeTab = ref('Convert');


const fromCurrency = ref('');
const toCurrency = ref('');
const amount = ref('');
const convertedAmount = ref('');

const currencies = ref({
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    RON: "Romanian Leu",
    DKK: "Danish Krone",
});

const reverseCurrencies = () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
};

const handleTabClick = (tabLabel) => {
    activeTab.value = tabLabel;
};

const convert = async () => {
    // try {
    //     const result = await convertCurrency(fromCurrency.value, toCurrency.value, amount.value);
    //     convertedAmount.value = result;
    // } catch (error) {
    //     console.error('Error converting currency:', error);
    // }

    convertedAmount.value = 10.79;
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
    margin-bottom: 2.5rem;
}

.reverse-icon {
    margin: 1rem 1rem 0rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
}

.text-part {
    margin-top: 0;
    display: inline;
    font-weight: normal;
}
</style>
  