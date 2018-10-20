<template>
  <div class="tester-container">
    <div class="header">

      <h1>Karate Knowledge Tester</h1>
      <fieldset class="category-container">
          <legend>Categories</legend>
            <div class="checkbox-div">
              <input type="checkbox" id="nine" value="nine" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)" checked>
              <label for="nine">9th  Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="eight" value="eight" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="eight">8th Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="seven" value="seven" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="seven">7th Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="six" value="six" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="six">6th Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="five" value="five" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="five">5th Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="four" value="four" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="four">4th Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="three" value="three" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="three">3rd Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="two" value="two" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="two">2nd Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="one" value="one" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="one">1st Kyu</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="shodan" value="shodan" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="shodan">Shodan</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="nidan" value="nidan" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="nidan">Nidan and above</label>
            </div>
            <div class="checkbox-div">
              <input type="checkbox" id="other" value="other" v-model="questionCategories" v-on:click="filterQuestions(questionCategories)">
              <label for="other">Non-Goju Ryu related questions</label>
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
  beforeMount() {
      this.randomQuestion()
    },
  data: function() {
    return {
      scoreObj: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        total: () => this.scoreObj.correctAnswers + this.scoreObj.incorrectAnswers
      },
      questionCategories: ['nine'],
      questions: questions[0],
      filteredQuestions: questions[0].nine,
      answeredQuestions: [],
      answerVisible: false,
      currentQuestion: false,
      placeholderQuestion: {
        question: "No questions found for this difficulty",
        answer: "Practise daily! 👊"
      }
    }
  },
  methods: {
    filterQuestions: function (questionCategories) {
      this.$nextTick(function(questionCategories) {
        const questions = this.questions
        this.filteredQuestions = questionCategories.map(function (category) {
          return questions[category]
        })
        
        this.filteredQuestions = [].concat.apply([], this.filteredQuestions)
        this.randomQuestion()
      })
    },
    randomQuestion: function () {
      
      if (this.filteredQuestions.length === 0) {
        this.currentQuestion = this.placeholderQuestion
        this.answerVisible = false
        return
      } else if (this.filteredQuestions.length === 1) {
        this.currentQuestion = this.filteredQuestions[0]
        this.answerVisible = false
        return
      }
      const randomNum = Math.floor(Math.random() * this.filteredQuestions.length)
      if ( !this.currentQuestion || this.currentQuestion !== this.filteredQuestions[randomNum]) {
        this.currentQuestion = this.filteredQuestions[randomNum]
        this.answerVisible = false
      } else {
        this.randomQuestion()
      }
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
}

.checkbox-div:hover, .checkbox-div:active, .checkbox-div:checked {
  border: 1px solid var(--persian-red-darker);
}

.checkbox-div label, .checkbox-div input {
	cursor: pointer;

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
