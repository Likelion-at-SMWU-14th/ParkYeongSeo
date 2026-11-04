<script setup>
import { ref, computed } from 'vue'
import GoldButton from '../components/GoldButton.vue'
import starImage from '../assets/star.png'

const emit = defineEmits(['start'])

const category = ref('')

const categories = [
  { value: 'general', label: '종합운' },
  { value: 'love', label: '연애운' },
  { value: 'money', label: '금전운' }
]

const isButtonDisabled = computed(() => category.value === '')

function startTarot() {
  if (isButtonDisabled.value) return

  emit('start', category.value)
}
</script>

<template>
  <main class="home-page">
    <div class="home-content">

      <img
        :src="starImage"
        alt=""
        class="home-star"
      />

      <h1 class="home-title">오늘의 타로</h1>

      <div class="category-group" role="group" aria-label="운세 종류 선택">
        <label
          v-for="item in categories"
          :key="item.value"
          class="category-option"
          :class="{ active: category === item.value }"
        >
          <input
            v-model="category"
            type="radio"
            name="fortune-category"
            :value="item.value"
          />
          <span>{{ item.label }}</span>
        </label>
      </div>

      <GoldButton
        text="카드 뽑기"
        :disabled="isButtonDisabled"
        @click="startTarot"
      />

    </div>
  </main>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  transform: translateY(-20px);
}

.home-star {
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-bottom: 35px;
}

.home-title {
  font-family: 'Stellar', serif;
  font-size: clamp(65px, 9vw, 110px);
  font-weight: 700;
  color: #E3CAA9;

  margin-bottom: 160px;
}

/* 운세 종류 선택 */
.category-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;

  margin-bottom: 45px;
}

.category-option {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 115px;
  padding: 14px 25px;

  border: 1px solid #D1AE84;
  border-radius: 40px;

  background: rgba(28, 14, 38, 0.55);
  color: #E3CAA9;

  font-family: 'BookkMyungjo', serif;
  font-size: 17px;

  cursor: pointer;

  transition: all 0.3s ease;
}

.category-option input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.category-option:hover {
  background: rgba(209, 174, 132, 0.2);
}

.category-option.active {
  background: #D1AE84;
  color: #3A2444;
  box-shadow: 0 0 20px rgba(209, 174, 132, 0.25);
}

.category-option:focus-within {
  outline: 2px solid #E3CAA9;
  outline-offset: 3px;
}

@media (max-width: 768px) {
  .home-star {
    width: 65px;
    height: 65px;
    margin-bottom: 25px;
  }

  .home-title {
    font-size: clamp(50px, 12vw, 65px);
    margin-bottom: 200px;
  }

  .category-group {
    gap: 8px;
    margin-bottom: 35px;
  }

  .category-option {
    min-width: 90px;
    padding: 12px 16px;
    font-size: 14px;
  }
}
</style>