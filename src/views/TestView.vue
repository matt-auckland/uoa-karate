<template>
  <div class="tester-container">
    <div class="header">

      <h1>Karate Knowledge Tester</h1>
      <h3 class="warn">This page is still under development</h3>
      <fieldset class="category-fieldset">
        <legend>Categories</legend>
        <div class="category-container">
          <div
            class="checkbox-div"
            v-for="category in questionCategories"
            v-bind:key="category"
          >
            <input
              type="checkbox"
              :id="category"
              :value="category"
              v-model="selectedCategories"
              v-on:click="filterQuestions()"
            >
            <label :for="category">{{ category }}</label>
          </div>
        </div>
      </fieldset>

      <div class="new-question-container">
        <span>
          Available questions for this current selection: {{ unansweredQuestions.length }}
        </span>
        <button
          v-on:click="randomQuestion()"
          v-if="unansweredQuestions.length > 1"
          class="new-question-button"
        >New question</button>
      </div>

      <QuestionComponent
        :randomQuestion="randomQuestion"
        :recordAnswer="recordAnswer"
        :questionProp="currentQuestion"
        :allQuestionsAnswered="unansweredQuestions.length === 0 && answeredQuestions.length !== 0"
      >
      </QuestionComponent>

    </div>
    <div class="answer-tracker">
      <h2>Score</h2>
      <hr>
      <span class="">Correct: {{ scoreObj.correctAnswers }}/{{ scoreObj.total()}}</span>
      <span>Incorrect: {{ scoreObj.incorrectAnswers }}/{{ scoreObj.total()}}</span>
    </div>

    <div>
      <h3>To do:</h3>
      <ul>
        <li>Make the page pretty ❌</li>
        <li>Add more questions ❌</li>
        <li>Link to relevent Karate Wiki pages/other resources? ❌</li>
        <li>Add a way to report incorrect questions/answers ❌</li>
        <li>Add a way to suggest questions ❌</li>
      </ul>
    </div>
  </div>
</template>

<script>
import questions from "../assets/mcq.json";
import QuestionComponent from "@/components/QuestionComponent.vue";
import Utils from "../libs/utils.js";

export default {
  components: {
    QuestionComponent
  },
  computed: {
    questionCategories: function() {
      let categories = this.questions
        .map(question => {
          return question.tags.join(); // flatten array of tags into a string
        })
        .join() //flatten our array of flattened arrays into a string
        .split(",") // split our super string back into an array
        .filter(function(elem, index, self) {
          // filter out any duplicates
          return index == self.indexOf(elem);
        });
      return categories;
    }
  },
  data: function() {
    return {
      scoreObj: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        total: () =>
          this.scoreObj.correctAnswers + this.scoreObj.incorrectAnswers
      },
      selectedCategories: [],
      questions: questions,
      unansweredQuestions: [],
      answeredQuestions: [],
      currentQuestion: undefined
    };
  },
  methods: {
    filterQuestions: function() {
      const answeredQuestions = this.answeredQuestions;
      this.$nextTick(function() {
        const questions = this.questions;
        const filteredQuestions = [];
        this.selectedCategories.map(function(category) {
          filteredQuestions.push(
            ...questions
              .filter(q => {
                if (q.tags.includes(category)) return q;
              })
              .filter(q => !answeredQuestions.includes(q))
              .filter(q => !filteredQuestions.includes(q))
          );
        });
        this.unansweredQuestions = filteredQuestions.filter(
          q => !answeredQuestions.includes(q)
        );
        if (!this.currentQuestion) {
          this.randomQuestion();
        }
      });
    },
    randomQuestion: function() {
      const previousQuestion = this.currentQuestion;
      if (this.unansweredQuestions.length === 0)
        this.currentQuestion = undefined;
      const newQuestionPool = this.unansweredQuestions.filter(
        q => q !== this.currentQuestion
      );

      if (newQuestionPool.length === 1) {
        this.currentQuestion = newQuestionPool[0];
      } else if (newQuestionPool.length > 1) {
        const randomNum = Math.floor(Math.random() * newQuestionPool.length);
        this.currentQuestion = this.unansweredQuestions[randomNum];
      }

      if (this.currentQuestion) {
        this.currentQuestion.answers = Utils.randomiseArr(
          this.currentQuestion.answers
        );
      }
    },
    revealAnswer: function(showAnswer) {},
    recordAnswer: function(isAnswerCorrect) {
      if (isAnswerCorrect) {
        this.scoreObj.correctAnswers++;
        this.answeredQuestions.push(this.currentQuestion);
        this.filterQuestions();
      } else {
        this.scoreObj.incorrectAnswers++;
      }
    }
  }
};
</script>


<style scoped>
.warn {
  color: crimson;
  text-transform: capitalize;
}

.new-question-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50px;
  margin: 15px 0;
}

.new-question-container span {
  margin-right: 10px;
}

.tester-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  min-width: 320px;
}

.checkbox-div {
  margin: 3px 3px;
  border: 1px solid;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  align-items: center;
}

.checkbox-div:hover,
.checkbox-div:active,
.checkbox-div:checked {
  border: 1px solid var(--persian-red-darker);
}

.checkbox-div label,
.checkbox-div input {
  cursor: pointer;
}

.checkbox-div label {
  padding: 2px;
}

.category-container {
  display: flex;
  flex-wrap: wrap;
}

.question-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
