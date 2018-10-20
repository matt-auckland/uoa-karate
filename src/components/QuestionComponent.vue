<template>
  <div class="question-container">
    <img :src="questionProp.image" alt="" v-if="questionProp.image" class="question-image">
    <h3 class="question-text">Question: {{ questionProp.question }}</h3>
    <button v-on:click="answerVisibleProp ? revealAnswer(false) : revealAnswer(true)" class="question-button show-answer-button">Show answer</button>
    <div v-if="answerVisibleProp" class="question-answer">
      <div class="answer-text">Answer: {{ questionProp.answer }}</div>
      <div class="answer-buttons-container">
        <button v-on:click="markAnswer(true)">Correct 👊</button>  
        <button v-on:click="markAnswer(false)">Incorrect 🙅‍</button>  
      </div>
    </div>
  </div>
</template>


<script>

export default {
  components: {
  },
  props: {
    questionProp: Object,
    answerVisibleProp: Boolean
  },
  data: function() {
    return {
    }
  },
  methods: {
    revealAnswer: function (showAnswer) {
      this.$emit('revealAnswer', showAnswer)
    },
    markAnswer: function (answerCorrect) {
      if (answerCorrect) 
        this.$emit('answered', true)
      else 
        this.$emit('answered', false)
    },
  }
}
</script>


<style scoped>
.question-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--persian-red-darker);
  border-radius: 5px;
  padding: 30px;
  margin: 30px 0px;
}

.question-image {
  max-width: 300px;
}

.show-answer-button {
  margin: 0 0 15px 0;
}

.question-answer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
.answer-text {
  margin: 0 0 15px 0;
}

.answer-buttons-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.answer-tracker {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;

  margin: 0 auto;
  width: 200px;

  border: 1px solid var(--persian-red-darker);
  border-radius: 5px;
  padding: 10px 15px;
}

.answer-tracker h2 {
  margin: 0;
  text-align: center;
  width: 100%;
}

.answer-tracker hr {
	border: none;
	border-bottom: 2px solid var(--persian-red);
	width: 100%;
	margin: 10px 30px;
}

button {
	border: 3px solid var(--tuatara-dark);
	border-radius: 30px;
	padding: 8px 12px;
	font-size: 16px;
	text-transform: uppercase;
}
</style>
