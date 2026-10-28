<script setup>
import { computed } from 'vue'
import GoldButton from '../components/GoldButton.vue'

// 부모에게서 선택된 카드 데이터 받기
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})

// 홈으로 돌아가는 이벤트
const emit = defineEmits(['home'])

// 카드 앞면 이미지 불러오기
const imageModules = import.meta.glob(
  '../assets/cards/*.png',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

// 선택된 카드 이미지
const cardImage = computed(() => {
  return imageModules[
    `../assets/cards/${props.card.image}`
  ] || ''
})

// 홈으로 돌아가기
function goHome() {
  emit('home')
}
</script>

<template>
  <main class="result-page">

    <div class="result-container">

      <!-- 왼쪽 카드 이미지 -->
      <div class="result-card">
        <img
          :src="cardImage"
          :alt="card.nameEn"
        />
      </div>

      <!-- 오른쪽 결과 내용 -->
      <div class="result-content">

        <!-- 영문 카드명 -->
        <h2 class="card-name-en">
          {{ card.nameEn }}
        </h2>

        <!-- 한글 카드명 -->
        <h3 class="card-name-ko">
          {{ card.nameKo }}
        </h3>

        <!-- 오늘의 운세 -->
        <p class="fortune">
          {{ card.fortune }}
        </p>

        <!-- 운세 포인트 -->
        <div class="fortune-point">
          {{ card.point }}
        </div>

        <!-- 홈으로 돌아가기 -->
        <GoldButton
          text="처음으로 돌아가기"
          @click="goHome"
        />

      </div>

    </div>

  </main>
</template>

<style scoped>
.result-page {
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px 8%;
}

/* 전체 결과 레이아웃 */
.result-container {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(50px, 8vw, 120px);

  width: 100%;
  max-width: 1200px;
}

/* 왼쪽 카드 */
.result-card {
  width: clamp(220px, 27vw, 340px);
  flex-shrink: 0;

  animation: cardAppear 0.7s ease forwards;
}

.result-card img {
  width: 100%;
  height: auto;

  display: block;
  border-radius: 12px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* 오른쪽 운세 내용 */
.result-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #E3CAA9;

  animation: contentAppear 0.8s ease forwards;
}

/* 영문 카드명 */
.card-name-en {
  font-family: 'Stellar', serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 700;

  line-height: 1.1;
  margin-bottom: 8px;
}

/* 한글 카드명 */
.card-name-ko {
  font-family: 'BookkMyungjo', serif;
  font-size: clamp(28px, 3vw, 42px);

  margin-bottom: 50px;
}

/* 오늘의 운세 */
.fortune {
  font-family: 'BookkMyungjo', serif;
  font-size: clamp(18px, 2vw, 25px);

  line-height: 1.8;
  max-width: 550px;

  margin-bottom: 45px;

  word-break: keep-all;
}

/* 운세 포인트 */
.fortune-point {
  display: inline-block;

  background: #93724C;
  color: #E3CAA9;

  padding: 12px 24px;
  border-radius: 40px;

  font-family: 'BookkMyungjo', serif;
  font-size: 16px;

  margin-bottom: 35px;
}

/* 카드 등장 애니메이션 */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 운세 내용 등장 애니메이션 */
@keyframes contentAppear {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .result-container {
    flex-direction: column;
    gap: 30px;
  }

  .result-card {
    width: 200px;
  }

  .result-content {
    align-items: center;
    text-align: center;
  }

  .card-name-ko {
    margin-bottom: 25px;
  }

  .fortune {
    margin-bottom: 25px;
  }
}
</style>