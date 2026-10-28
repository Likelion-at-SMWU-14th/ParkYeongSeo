<script setup>
import { ref } from 'vue'

import HomeView from './views/HomeView.vue'
import SelectView from './views/SelectView.vue'
import ResultView from './views/ResultView.vue'

const currentPage = ref('home')
const selectedCard = ref(null)

function goSelect() {
  currentPage.value = 'select'
}

function showResult(card) {
  selectedCard.value = card
  currentPage.value = 'result'
}

function goHome() {
  selectedCard.value = null
  currentPage.value = 'home'
}
</script>

<template>
  <HomeView
    v-if="currentPage === 'home'"
    @start="goSelect"
  />

  <SelectView
    v-else-if="currentPage === 'select'"
    @select="showResult"
  />

  <ResultView
    v-else-if="currentPage === 'result'"
    :card="selectedCard"
    @home="goHome"
  />
</template>