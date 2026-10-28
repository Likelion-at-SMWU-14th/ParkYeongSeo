<script setup>
import { ref, nextTick, onUnmounted } from 'vue'
import tarotData from '../data/tarot.json'

// 카드 뒷면 이미지 3개
import cardBack1 from '../assets/card-back-1.png'
import cardBack2 from '../assets/card-back-2.png'
import cardBack3 from '../assets/card-back-3.png'

const cardBacks = [
  cardBack1,
  cardBack2,
  cardBack3
]

// 부모 컴포넌트에 카드 선택 결과 전달
const emit = defineEmits(['select'])

// 카드 앞면 이미지 불러오기
const imageModules = import.meta.glob(
  '../assets/cards/*.png',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

function getCardImage(card) {
  return imageModules[`../assets/cards/${card.image}`] || ''
}

// 카드 8장 중 무작위로 3장 선택
const cards = ref(
  [...tarotData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
)

// 선택 상태
const selectedIndex = ref(null)
const isAnimating = ref(false)
const isMoving = ref(false)

// 카드 DOM 요소
const cardElements = ref([])

// 이동 거리
const moveDistance = ref(0)

// 타이머
let flipTimer = null
let resultTimer = null

// 카드 선택
function selectCard(index) {
  if (isAnimating.value) return

  isAnimating.value = true
  selectedIndex.value = index

  // 선택된 카드가 왼쪽 첫 번째 카드 위치로 이동할 거리
  const selectedElement = cardElements.value[index]
  const firstElement = cardElements.value[0]

  if (selectedElement && firstElement) {
    const selectedRect = selectedElement.getBoundingClientRect()
    const firstRect = firstElement.getBoundingClientRect()

    moveDistance.value = firstRect.left - selectedRect.left
  }

  // 카드 회전 완료 후 이동
  flipTimer = setTimeout(async () => {
    await nextTick()
    isMoving.value = true

    // 이동 완료 후 결과 페이지 전환
    resultTimer = setTimeout(() => {
      emit('select', cards.value[index])
    }, 750)
  }, 900)
}

// 컴포넌트 제거 시 타이머 정리
onUnmounted(() => {
  clearTimeout(flipTimer)
  clearTimeout(resultTimer)
})
</script>

<template>
  <main class="select-page">

    <div class="card-container">

      <div
        v-for="(card, index) in cards"
        :key="card.id"
        :ref="el => { cardElements[index] = el }"
        class="card-wrapper"
        :class="{
          selected: selectedIndex === index,
          hidden: selectedIndex !== null && selectedIndex !== index,
          moving: isMoving && selectedIndex === index
        }"
        :style="{
          '--move-x': `${moveDistance}px`
        }"
        @click="selectCard(index)"
      >

        <div class="card-inner">

          <!-- 카드 뒷면 -->
          <div class="card-face card-back">
            <img
              :src="cardBacks[index]"
              alt="타로카드 뒷면"
            />
          </div>

          <!-- 카드 앞면 -->
          <div class="card-face card-front">
            <img
              :src="getCardImage(card)"
              :alt="card.nameEn"
            />
          </div>

        </div>

      </div>

    </div>

    <!-- 카드 선택 안내 -->
    <p
      v-if="selectedIndex === null"
      class="select-guide"
    >
      마음이 이끄는 카드를 선택하세요.
    </p>

  </main>
</template>

<style scoped>
.select-page {
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

/* 카드 3장 배치 */
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: clamp(20px, 4vw, 60px);

  width: 100%;

  perspective: 1200px;
}

/* 개별 카드 */
.card-wrapper {
  position: relative;

  width: clamp(150px, 19vw, 240px);
  aspect-ratio: 2 / 3;

  flex-shrink: 0;

  cursor: pointer;
  perspective: 1200px;

  transition:
    transform 0.7s ease-in-out,
    opacity 0.5s ease;
}

/* 카드 호버 */
.card-wrapper:hover:not(.selected):not(.hidden) {
  transform: translateY(-15px);
}

/* 카드 내부 */
.card-inner {
  position: relative;

  width: 100%;
  height: 100%;

  transform-style: preserve-3d;

  transition: transform 0.9s ease-in-out;
}

/* 선택 시 180도 회전 */
.card-wrapper.selected .card-inner {
  transform: rotateY(180deg);
}

/* 카드 앞면 / 뒷면 */
.card-face {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

.card-face img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;
}

/* 카드 앞면 */
.card-front {
  transform: rotateY(180deg);
}

/* 선택하지 않은 카드 */
.card-wrapper.hidden {
  opacity: 0;
  pointer-events: none;
}

/* 선택한 카드 왼쪽 이동 */
.card-wrapper.moving {
  transform: translateX(var(--move-x));
  z-index: 10;
}

/* 안내 문구 */
.select-guide {
  position: absolute;
  bottom: 10%;

  font-family: 'BookkMyungjo', serif;
  font-size: 20px;

  color: #E3CAA9;
  text-align: center;
}

/* 모바일 */
@media (max-width: 600px) {
  .card-container {
    gap: 12px;
  }

  .card-wrapper {
    width: 28vw;
  }

  .select-guide {
    font-size: 15px;
    bottom: 15%;
  }
}
</style>