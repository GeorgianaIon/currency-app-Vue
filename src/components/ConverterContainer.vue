<template>
    <div class="currency-converter-container">
        <div class="tabs">
            <button @click="activeTab = 'convert'"
                :class="{ active: activeTab === 'convert', radiusLeft: true }">Convert</button>
            <button @click="activeTab = 'charts'"
                :class="{ active: activeTab === 'charts', radiusRight: true }">Charts</button>
        </div>
        <div v-if="activeTab === 'convert'">
            <!-- Place your Convert component or code here -->
        </div>
        <div v-else-if="activeTab === 'charts'">
            <!-- Place your Charts component or code here -->
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const activeTab = ref('convert');
</script>
  
<style scoped>
.currency-converter-container {
    background-color: #f0f0f0;
    width: 75rem;
    margin: auto;
    border-radius: 1.25rem;
}

.tabs {
    display: flex;
    justify-content: center;
    border-radius: 1.25rem 1.25rem 0 0;

}

.tabs button {
    flex: 1;
    padding: 1.75rem 0;
    border: 1px solid #5BC0F8;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    background-color: #D2EFFF;
    font-size: 1.8rem;
    color: #0081C9;
}

.tabs button.active {
    background-color: #f0f0f0;
    color: black !important;
}

.radiusLeft {
    border-radius: 1.25rem 0 0 0;
}

.radiusRight {
    border-radius: 0 1.25rem 0 0;
}
</style>
  