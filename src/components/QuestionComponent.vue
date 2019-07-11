<template>
  <section>
    <div
      v-if="!questionProp"
      class="question-container"
    >
      <h3>
        <span v-if="!allQuestionsAnswered">Please select a category above</span>
        <span v-if="allQuestionsAnswered">You have answered all questions correctly, please select another category</span>
      </h3>
    </div>
    <div
      v-if="questionProp"
      class="question-container"
    >
      <img
        :src="questionProp.image"
        v-if="questionProp.image"
        class="question-image"
        alt=""
      >
      <h3 class="question-text">{{ questionProp.question }}</h3>
      <form class="question-form">
        <div
          class="form-option"
          v-for="answer in questionProp.answers"
          :key="answer.text"
          :class="{ correct: answerVisible && answer.correct, bold: selectedAnswer && answer.text == selectedAnswer.text }"
        >
          <input
            type="radio"
            name="answer"
            v-model="selectedAnswer"
            :disabled="answerVisible"
            :value="answer"
          >
          <span>{{answer.text}}</span>
        </div>
        <button
          v-on:click="markAnswer(selectedAnswer)"
          :disabled="selectedAnswer === undefined"
          :class="{ 'hidden': answerVisible}"
          type="button"
          class="question-button show-answer-button"
        >Show answer</button>
      </form>
      <div
        v-if="answerVisible"
        class="question-answer"
      >
        <div class="answer-text">
          <span
            v-if="this.selectedAnswer.correct"
            class="correct"
          >
            Correct!
          </span>
          <span
            v-else
            class="incorrect"
          >
            Incorrect
          </span>
        </div>
        <div
          v-if="questionProp.referenceLink"
          class="reference-link"
        >
          Reference: <a
            :href="questionProp.referenceLink"
            target="_blank"
          >
            {{questionProp.referenceLink}}
          </a>
        </div>

        <div class="answer-buttons-container">
          <button v-on:click="nextQuestion()">Next Question</button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  components: {},
  props: {
    questionProp: Object,
    allQuestionsAnswered: Boolean,
    randomQuestion: Function,
    recordAnswer: Function
  },

  data() {
    return {
      selectedAnswer: undefined,
      answerVisible: false
    };
  },
  watch: {
    questionProp: function(val, oldVal) {
      if (!val || (oldVal && val.question !== oldVal.question)) {
        this.answerVisible = false;
        this.selectedAnswer = undefined;
      }
    }
  },
  computed: {
    correctAnswer() {
      return this.questionProp.answers.filter(a => a.correct)[0];
    }
  },
  methods: {
    nextQuestion() {
      this.selectedAnswer = undefined;
      this.answerVisible = false;
      this.randomQuestion();
    },
    revealAnswer: function(showAnswer) {
      this.answerVisible = showAnswer;
      if (this.allQuestionsAnswered) {
        this.selectedAnswer = undefined;
        this.answerVisible = true;
      }
    },
    markAnswer: function(answerObj) {
      this.revealAnswer(true);
      this.recordAnswer(answerObj.correct);
    }
  }
};
</script>


<style scoped>
.question-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 1px solid var(--persian-red-darker);
  border-radius: 5px;
  padding: 30px;
  margin: 30px 0px;
}

.question-image {
  max-width: 300px;
}

.question-form {
  margin: 0 0 30px 0;
  text-align: center;
  width: 100%;
}

.form-option {
  width: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  margin: 10px 0;
}

.form-option span {
  margin-left: 10px;
}

.show-answer-button {
  margin: 30px 0 15px 0;
}

.question-answer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}

.answer-text {
  margin: 0 0 20px 0;
  font-size: 20px;
}

.reference-link {
  margin: 0 0 15px 0;
}

.hidden {
  display: none;
}

.form-option.correct {
  color: #5bd547;
  filter: grayscale(0.3);
}

.form-option.incorrect {
  color: var(--persian-red);
  filter: grayscale(0.3);
}

.correct {
  color: #5bd547;
}

.incorrect {
  color: var(--persian-red);
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
</style>
