<script setup>
import { computed } from 'vue'
import GoldButton from '../components/GoldButton.vue'

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

const emit = defineEmits(['home'])

const imageModules = import.meta.glob(
  '../assets/cards/*.png',
  {
    eager: true,
    import: 'default'
  }
)

const cardImage = computed(() => {
  return imageModules[`../assets/cards/${props.card.image}`] || ''
})

const categoryNames = {
  general: '종합운',
  love: '연애운',
  money: '금전운'
}

const categoryName = computed(() => {
  return categoryNames[props.category] || '종합운'
})

const fortuneText = computed(() => {
  return props.card.fortune[props.category] || ''
})

function goHome() {
  emit('home')
}
</script>

<template>
  <main class="result-page">
    <div class="result-container">

      <div class="result-card">
        <img
          :src="cardImage"
          :alt="card.nameEn"
        />
      </div>

      <div class="result-content">

        <h2 class="card-name-en">
          {{ card.nameEn }}
        </h2>

        <h3 class="card-name-ko">
          {{ card.nameKo }}
        </h3>

        <span class="category-badge">
          {{ categoryName }}
        </span>

        <p class="fortune">
          {{ fortuneText }}
        </p>

        <div class="fortune-point">
          {{ card.point }}
        </div>

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

.result-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(50px, 8vw, 120px);

  width: 100%;
  max-width: 1200px;
}

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

.result-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #E3CAA9;
  animation: contentAppear 0.8s ease forwards;
}

.card-name-en {
  font-family: 'Stellar', serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;

  margin-bottom: 8px;
}

.card-name-ko {
  font-family: 'BookkMyungjo', serif;
  font-size: clamp(28px, 3vw, 42px);

  margin-bottom: 25px;
}

.category-badge {
  padding: 8px 18px;
  margin-bottom: 25px;

  border: 1px solid #D1AE84;
  border-radius: 30px;

  color: #E3CAA9;
  font-family: 'BookkMyungjo', serif;
  font-size: 15px;
}

.fortune {
  font-family: 'BookkMyungjo', serif;
  font-size: clamp(18px, 2vw, 25px);
  line-height: 1.8;

  max-width: 550px;
  margin-bottom: 35px;

  word-break: keep-all;
}

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
    margin-bottom: 20px;
  }

  .fortune {
    margin-bottom: 25px;
  }
}
</style>