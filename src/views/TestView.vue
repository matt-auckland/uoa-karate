<template>
  <div class="tester-container">
    <div class="header">

      <h1>Karate Knowledge Tester</h1>
      <form action="">
        <label for="difficulty">Difficulty Level
          <select name="difficulty" id="" v-model="questionCategory" v-on:change="filterQuestions(questionCategory)">
            <option value="nine">9th  Kyu</option>
            <option value="eight">8th Kyu</option>
            <option value="seven">7th Kyu</option>
            <option value="six">6th Kyu</option>
            <option value="five">5th Kyu</option>
            <option value="four">4th Kyu</option>
            <option value="three">3rd Kyu</option>
            <option value="two">2nd Kyu</option>
            <option value="one">1st Kyu</option>
            <option value="shodan">Shodan</option>
            <option value="nidan">Nidan and above</option>
            <option value="other">Non-Goju Ryu related questions</option>
          </select>
        </label>
      </form>

      <div>Selected category: {{ questionCategory }}</div>
      <div>Questions for this level: {{ filteredQuestions.length }}</div>
      <br>

      <button v-on:click="randomQuestion()" v-if="filteredQuestions.length > 1" class="new-question-button">New question -></button>

      <div class="question-container">
        <div  class="question-image-container">
          <img :src="currentQuestion.image" alt="" v-if="currentQuestion.image" class="question-image">
        </div>
        <h3 class="question-text">Question: {{ currentQuestion.question }}</h3>
        <button v-on:click="toggleAnswer()" class="question-button">Show answer</button>
        <div v-if="showAnswer" class="question-answer">
          <div>Answer: {{ currentQuestion.answer }}</div>
          <button v-on:click="markAnswer(true)">Correct 👊</button>  
          <button v-on:click="markAnswer(false)">Incorrect 🙅‍</button>  
        </div>
      </div>
    </div>
    <div>Correct Answers: {{ correctAnswers }}/{{ correctAnswers + incorrectAnswers}}</div>
    <div>Incorrect Answers: {{ incorrectAnswers }}/{{ correctAnswers + incorrectAnswers}}</div>

    <div>
      <h3>To do:</h3>
      <ul>
        <li>Make the page pretty ❌</li>
        <li>Allow the selection of more than one category ❌</li>
        <li>Add actual questions ❌</li>
        <li>Randomise question order ❌</li>
        <li>Allow user to mark their answer as correct or incorrect ❌</li>
        <li>Keep track of the user's score ❌</li>
        <li>Link to relevent Karate Wiki pages? ❌</li>
        <li>Fetch new question after answering ✅</li>
        <li>Hide or show answers with a boolean arugment instead of toggling ❌</li>
        <li>Add a way to report incorrect questions/answers ✅</li>
        <li>Add a way to suggest questions ❌</li>
        <li>Handle the error case in which there are no questions for a level ✅</li>
      </ul>
    </div>
  </div>
</template>

<script>

import questions from '../assets/questions.json'

export default {
  components: {
  },
  beforeMount() {
      this.randomQuestion()
    },
  data: function() {
    return {
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionCategory: 'nine',
      questions: questions[0],
      filteredQuestions: questions[0].nine,
      showAnswer: false,
      currentQuestion: false,
      placeholderQuestion: {
        question: "No questions found for this difficulty",
        answer: "Practise daily! 👊"
      }
    }
  },
  methods: {
    filterQuestions: function (diff) {
      this.filteredQuestions = this.questions[diff]
      this.randomQuestion()
    },
    randomQuestion: function () {
      if (this.filteredQuestions.length === 0) {
        this.currentQuestion = this.placeholderQuestion
        this.toggleAnswer()
        return
      }
      const randomNum = Math.floor(Math.random() * this.filteredQuestions.length)
      if ( !this.currentQuestion || this.currentQuestion !== this.filteredQuestions[randomNum]) {
        this.currentQuestion = this.filteredQuestions[randomNum]
        this.toggleAnswer()
      } else {
        this.randomQuestion()
      }
    },
    toggleAnswer: function () {
      this.showAnswer = !this.showAnswer
    },
    markAnswer: function (answerCorrect) {
      if (answerCorrect) 
        this.correctAnswers++
      else
        this.incorrectAnswers++

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

.history {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.question-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
