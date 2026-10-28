<script setup>
defineProps({
  text: {
    type: String,
    default: '카드 뽑기'
  }
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <button class="gold-button" @click="handleClick">
    <span>{{ text }}</span>
    <span class="arrow">→</span>
  </button>
</template>

<style scoped>
.gold-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  padding: 18px 38px;
  border: none;
  border-radius: 50px;

  background: linear-gradient(
    120deg,
    #93724C,
    #D1AE84
  );

  color: #E3CAA9;
  font-family: 'BookkMyungjo', serif;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.gold-button:hover {
  background: linear-gradient(
    120deg,
    #D1AE84,
    #E3CAA9
  );

  color: #654A32;
  transform: translateY(-3px);

  box-shadow: 0 8px 24px rgba(209, 174, 132, 0.35);
}

.arrow {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.gold-button:hover .arrow {
  transform: translateX(5px);
}
</style>