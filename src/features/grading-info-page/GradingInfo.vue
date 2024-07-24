<template>
  <div id="main">
    <h1>What do I need to know for grading again??</h1>
    <h2 class="subheading">(Sourced from the IOGKFNZ Instructors Manual)</h2>
    <hr />
    <label class="dropdown-label" for="grade-select">
      Select the grade you want to grade to:
    </label>
    <select name="grade-select" id="grade-select" v-model="selectedGrade">
      <option :key="grade.name" :value="grade" v-for="grade in grades">
        {{ grade.name }}
      </option>
    </select>

    <h2>What you need to know:</h2>

    <div class="flex">
      <ul class="list">
        <transition-group name="fade">
          <li v-for="skill in needToKnow" :key="skill.name">{{ skill.name }}</li>
        </transition-group>
      </ul>
      <div class="bold center-txt">
        <p>Remember to check with Sensei to see if you can grade 🥋</p>
        <p>Now go train 👊</p>
      </div>
    </div>

    <footer>
      <nav>
        <a href="https://wiki.uoa-karate.club/wiki/Kata">Kata Reference Material</a>
        <a href="https://wiki.uoa-karate.club/wiki/Bunkai">Bunkai Reference Material</a>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "GradingInfo",
  head: {
    title: "What do I need to know for grading again??",
    meta: [
      {
        name: "description",
        content: "Figure out what the heck you need to know to grade.",
      },
    ],
  },

  data() {
    return {
      selectedGrade: { name: "Blue belt - 9th Kyu", value: 1 },
      grades: [
        { name: "Blue belt - 9th Kyu", value: 1 },
        { name: "Blue belt with one tab - 8th Kyu", value: 2 },
        { name: "Yellow belt - 7th Kyu", value: 3 },
        { name: "Yellow belt with one tab - 6th Kyu", value: 4 },
        { name: "Green belt - 5th Kyu", value: 5 },
        { name: "Green belt with one tab - 4th Kyu", value: 6 },
        { name: "Brown belt - 3rd Kyu", value: 7 },
        { name: "Brown belt with one tab - 2nd Kyu", value: 8 },
        { name: "Brown belt with two tabs - 1st Kyu", value: 9 },
      ],
      syllabus: [
        { name: "Gekisai Dai Ichi", value: 1 },
        { name: "Gekisai Dai Ichi Bunkai", value: 2 },
        { name: "Gekisai Dai Ni", value: 2 },
        { name: "Gekisai Dai Ni Bunkai", value: 3 },
        { name: "Saifa", value: 3 },
        { name: "Saifa Bunkai", value: 4 },
        { name: "Seiyunchin", value: 5 },
        { name: "Seiyunchin Bunkai", value: 6 },
        { name: "Shisochin", value: 7 },
        { name: "Shisochin Bunkai", value: 8 },
      ],
    };
  },
  computed: {
    needToKnow() {
      return this.syllabus.filter((skill) => skill.value <= this.selectedGrade.value);
    },
  },
};
</script>

<style scoped>
.subheading {
  font-size: 1em;
}
#main {
  margin: 0 auto;
  max-width: 500px;
}

h2,
h3,
h4 {
  margin: 10px 0;
}

footer nav {
  display: flex;
  justify-content: center;
  text-align: center;
}
footer nav a {
  margin: 10px;
}

.dropdown-label {
  display: block;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.list {
  height: 220px;
}
</style>
