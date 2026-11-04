<script setup>
import { computed } from 'vue'
import GoldButton from '../components/GoldButton.vue'

// 부모 컴포넌트에서 데이터 받기
const props = defineProps({
  card: {
    type: Object,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

// 홈으로 돌아가기 이벤트
const emit = defineEmits(['home'])

// 카드 이미지 불러오기
const imageModules = import.meta.glob(
  '../assets/cards/*.png',
  {
    eager: true,
    import: 'default'
  }
)

// 선택한 카드 이미지
const cardImage = computed(() => {
  return imageModules[
    `../assets/cards/${props.card.image}`
  ] || ''
})

// 운세 종류 이름
const categoryNames = {
  general: '종합운',
  love: '연애운',
  money: '금전운'
}

const categoryName = computed(() => {
  return categoryNames[props.category] || '종합운'
})

// 선택한 카테고리에 맞는 운세
const fortuneText = computed(() => {
  return props.card.fortune[props.category] || ''
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

        <!-- 운세 종류 + 키워드 -->
        <div class="fortune-info">

          <span class="category-badge">
            {{ categoryName }}
          </span>

          <span class="keyword-badge">
            {{ card.point }}
          </span>

        </div>

        <!-- 운세 설명 -->
        <p class="fortune">
          {{ fortuneText }}
        </p>

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

/* 전체 결과 페이지 */
.result-page {
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px 8%;
  background: transparent;
}

/* 카드 + 결과 가로 배치 */
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
  display: block;

  width: 100%;
  height: auto;

  border-radius: 12px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* 오른쪽 결과 */
.result-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1;
  min-width: 0;

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
  font-family: 'Stellar', serif;
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 700;

  margin-bottom: 25px;
}

/* 운세 종류 + 키워드 가로 정렬 */
.fortune-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 12px;
  width: 100%;

  margin-bottom: 30px;
}

/* 종합운 / 연애운 / 금전운 */
.category-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 18px;

  border: 1px solid #D1AE84;
  border-radius: 30px;

  background: transparent;
  color: #E3CAA9;

  font-family: 'BookkMyungjo', serif;
  font-size: 15px;

  white-space: nowrap;
  flex-shrink: 0;
}

/* 운세 키워드 */
.keyword-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 18px;

  border: 1px solid #D1AE84;
  border-radius: 30px;

  background: transparent;
  color: #E3CAA9;

  font-family: 'BookkMyungjo', serif;
  font-size: 15px;

  white-space: nowrap;
  flex-shrink: 0;
}

/* 운세 설명 */
.fortune {
  font-family: 'BookkMyungjo', serif;
  font-size: clamp(18px, 2vw, 25px);
  font-weight: 700;

  line-height: 1.8;
  max-width: 550px;

  margin-bottom: 40px;

  word-break: keep-all;
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

/* 결과 내용 등장 애니메이션 */
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

/* 태블릿 및 모바일 */
@media (max-width: 768px) {

  .result-page {
    padding: 50px 6%;
  }

  .result-container {
    flex-direction: column;
    gap: 30px;
  }

  .result-card {
    width: 200px;
  }

  .result-content {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .card-name-ko {
    margin-bottom: 20px;
  }

  .fortune-info {
    justify-content: center;
    gap: 10px;
    margin-bottom: 25px;
  }

  .category-badge,
  .keyword-badge {
    font-size: 13px;
    padding: 8px 14px;
  }

  .fortune {
    font-size: 18px;
    margin-bottom: 30px;
  }
}

</style>