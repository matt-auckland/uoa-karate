<template>
  <div class="about-container">
    <div class="header">

      <h1>Knowledge Tester</h1>
      <form action="">

      <label for="difficulty">Difficulty Level</label>
      <select name="difficulty" id="" v-model="difficultyLevel" v-on:change="filterQuestions(difficultyLevel)">
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
      </select>
      </form>

      <div>Diff: {{ difficultyLevel }} </div>
      <br>

      <button v-on:click="randomQuestion()" class="new-question-button">New question -></button>

      <div class="question-container">
        <div  class="question-image-container">
          <img :src="currentQuestion.image" alt="" v-if="currentQuestion.image" class="question-image">
        </div>
        <h3 class="question-text">Question: {{ currentQuestion.question }}</h3>
        <button v-on:click="toggleAnswer()" class="question-button">Show answer</button>
        <div v-if="showAnswer" class="question-answer">Answer: {{ currentQuestion.answer }}</div>
      </div>
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
      difficultyLevel: 'nine',
      questions: questions[0],
      filteredQuestions: questions[0].nine,
      showAnswer: false,
      currentQuestion: false
    }
  },
  methods: {
    filterQuestions: function (diff) {
      this.filteredQuestions = this.questions[diff]
      this.randomQuestion()
    },
    randomQuestion: function () {
      const randomNum = Math.floor(Math.random() * this.filteredQuestions.length)
      if ( !this.currentQuestion || this.currentQuestion !== this.filteredQuestions[randomNum]) {
        this.currentQuestion = this.filteredQuestions[randomNum]
      } else {
        this.randomQuestion()
      }
    },
    toggleAnswer: function () {
      this.showAnswer = !this.showAnswer
    },
    randomise:  (arr) => arr.map(a => [Math.random(), a])
                            .sort((a, b) => a[0] - b[0])
  }
}
</script>


<style scoped>
.about-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 30px;
  justify-content: center;
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
