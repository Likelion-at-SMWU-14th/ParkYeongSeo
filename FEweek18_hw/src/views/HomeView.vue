<script setup>
import { ref } from 'vue'
import GoldButton from '../components/GoldButton.vue'
import starImage from '../assets/star.png'

const emit = defineEmits(['start'])
const question = ref('')

function startTarot() {
  emit('start', question.value)
}
</script>

<template>
  <main class="home-page">
    <div class="home-content">

      <!-- 별 이미지 -->
      <img
        :src="starImage"
        alt=""
        class="home-star"
      />

      <!-- 제목 -->
      <h1 class="home-title">
        오늘의 타로
      </h1>

      <!-- 버튼 -->
      <GoldButton
        text="카드 뽑기"
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

  transform: translateY(-30px);
}

/* 별 이미지 */
.home-star {
  width: 90px;
  height: 90px;
  object-fit: contain;

  margin-bottom: 45px;
}

/* 제목 */
.home-title {
  font-family: 'Stellar', serif;
  font-size: clamp(65px, 9vw, 110px);
  font-weight: 700;

  color: #E3CAA9;

  margin-bottom: 120px;
}

/* 모바일 */
@media (max-width: 768px) {
  .home-star {
    width: 65px;
    height: 65px;
    margin-bottom: 30px;
  }

  .home-title {
    font-size: 65px;
    margin-bottom: 80px;
  }
}
</style>