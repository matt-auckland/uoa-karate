<template>
  <div class="tester-container">
    <div class="header">

      <h1>Karate Knowledge Tester</h1>
      <h3 class="warn">This page is still under development</h3>
      <fieldset class="category-fieldset">
          <legend>Categories</legend>
          <div class="category-container">
            <div class="checkbox-div" v-for="category in questionCategories" v-bind:key="category">
              <input type="checkbox" :id="category" :value="category" v-model="selectedQuestionCategories" v-on:click="filterQuestions()">
              <label :for="category">{{ category }}</label>
            </div>
          </div>
      </fieldset>

      <div>Available questions for this current selction: {{ filteredQuestions.length }}</div>
      <br>

      <button v-on:click="randomQuestion()" v-if="filteredQuestions.length > 1" class="new-question-button">New question</button>
      
      <QuestionComponent 
        :questionProp="currentQuestion" 
        :answerVisibleProp="answerVisible"
        v-on:revealAnswer="revealAnswer($event)"
        v-on:answered="markAnswer($event)">
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
        <li>Add actual questions ❌</li>
        <li>Don't show questions that have be answered correct again (when correct through q in and array and filter these out everytime we recreate the `filteredQuestions`) ❌</li>
        <li>Link to relevent Karate Wiki pages? ❌</li>
        <li>Add a way to report incorrect questions/answers ❌</li>
        <li>Add a way to suggest questions ❌</li>
        <li>Update question data format and filter logic so questions can have multiple tags (example categories: rank, kata, etc) ✅</li>
        <li>Refactor the question display out into it's own component ✅</li>
        <li>Allow the selection of more than one category ✅</li>
        <li>Randomise question order ✅</li>
        <li>Allow user to mark their answer as correct or incorrect ✅</li>
        <li>Keep track of the user's score ✅</li>
        <li>Fetch new question after answering ✅</li>
        <li>Hide or show answers with a boolean arugment instead of toggling ✅</li>
        <li>Handle the error case in which there are no questions for a level ✅</li>
      </ul>
    </div>
  </div>
</template>

<script>

import questions from '../assets/questions.json'
import QuestionComponent from '@/components/QuestionComponent.vue'

export default {
  components: {
    QuestionComponent
  },
  computed: {
    questionCategories: function () {
      let categories = this.questions.map((question) => {
        return question.tags.join() // flatten array of tags into a string
      })
      .join() //flatten our array of flattened arrays into a string
      .split(',') // split our super string back into an array
      .filter(function(elem, index, self) { // filter out any duplicates
        return index == self.indexOf(elem); 
      })
      return categories
    }
  },
  data: function() {
    return {
      scoreObj: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        total: () => this.scoreObj.correctAnswers + this.scoreObj.incorrectAnswers
      },
      selectedQuestionCategories: [],
      questions: questions,
      filteredQuestions: [],
      answeredQuestions: [],
      answerVisible: false,
      currentQuestion: undefined,
    }
  },
  methods: {
    filterQuestions: function () {
      this.$nextTick(function() {
        const questions = this.questions
        this.filteredQuestions = this.selectedQuestionCategories.map(function (category) {
          return questions.filter((question) => {
            if (question.tags.includes(category))
              return question
          })
        })
        
        this.filteredQuestions = [].concat.apply([], this.filteredQuestions)
        this.randomQuestion()
      })
    },
    randomQuestion: function () {
      
      if (this.filteredQuestions.length === 0) {
        this.currentQuestion = undefined
      } else if (this.filteredQuestions.length === 1) {
        this.currentQuestion = this.filteredQuestions[0]
      } else {
        const randomNum = Math.floor(Math.random() * this.filteredQuestions.length)
        if ( !this.currentQuestion || this.currentQuestion !== this.filteredQuestions[randomNum]) {
          this.currentQuestion = this.filteredQuestions[randomNum]
        } else {
          this.randomQuestion()
        }
      }
      this.answerVisible = false
    },
    revealAnswer: function (showAnswer) {
      this.answerVisible = showAnswer
    },
    markAnswer: function (answerCorrect) {
      if (answerCorrect) 
        this.scoreObj.correctAnswers++
      else
        this.scoreObj.incorrectAnswers++

      this.randomQuestion()
    },
    randomise:  (arr) => arr.map(a => [Math.random(), a])
                            .sort((a, b) => a[0] - b[0])
  }
}
</script>


<style scoped>
.warn {
  color: crimson;
  text-transform: capitalize;
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

.checkbox-div:hover, .checkbox-div:active, .checkbox-div:checked {
  border: 1px solid var(--persian-red-darker);
}

.checkbox-div label, .checkbox-div input {
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
