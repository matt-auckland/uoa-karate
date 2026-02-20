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
          <li v-for="skill in needToKnow" :key="skill.name">{{ skill.name }}: <a :href="skill.wikiURL"
               target="_blank">Wiki Reference</a></li>
        </transition-group>
      </ul>
      <div class="bold center-txt">
        <p>Remember to check with Sensei to see if you can grade 🥋</p>
        <p>Now go train 👊</p>
      </div>
    </div>

    <footer>
      <nav>
        <a href="https://wiki.uoa-karate.club/kata">Kata Reference Material</a>
        <a href="https://wiki.uoa-karate.club/bunkai">Bunkai Reference Material</a>
      </nav>
    </footer>
  </div>
</template>

<script>
const pageTitle = "What do I need to know for grading again??";
const pageDescription = "Figure out what the heck you need to know to grade.";

export default {
  name: "GradingInfo",
  head: {
    title: pageTitle,
    meta: [
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uoa-karate.club/#/grading-info" },
      { property: "og:image", content: "/logo-wide.png" },
    ],
  },

  data() {
    return {
      selectedGrade: { name: "Blue belt - 9th Kyu", value: 9 },
      grades: [
        { name: "Blue belt - 9th Kyu", value: 9 },
        { name: "Blue belt with one tab - 8th Kyu", value: 8 },
        { name: "Yellow belt - 7th Kyu", value: 7 },
        { name: "Yellow belt with one tab - 6th Kyu", value: 6 },
        { name: "Green belt - 5th Kyu", value: 5 },
        { name: "Green belt with one tab - 4th Kyu", value: 4 },
        { name: "Brown belt - 3rd Kyu", value: 3 },
        { name: "Brown belt with one tab - 2nd Kyu", value: 2 },
        { name: "Brown belt with two tabs - 1st Kyu", value: 1 },
        { name: "Shodan - 1st Dan", value: -1 },
        { name: "Nidan - 2nd Dan", value: -2 },
      ],
      syllabus: [
        {
          name: "Gekisai Dai Ichi", value: 9,
          wikiURL: "https://wiki.uoa-karate.club/kata/Gekisai-Dai-Ichi"
        },
        {
          name: "Gekisai Dai Ichi Bunkai", value: 8,
          wikiURL: "https://wiki.uoa-karate.club/bunkai/Gekisai-Dai-Ichi"
        },
        {
          name: "Gekisai Dai Ni", value: 8,
          wikiURL: "https://wiki.uoa-karate.club/kata/Gekisai-Dai-Ni"
        },
        {
          name: "Gekisai Dai Ni Bunkai", value: 7,
          wikiURL: "https://wiki.uoa-karate.club/bunkai/Gekisai-Dai-Ni"
        },
        {
          name: "Saifa", value: 7,
          wikiURL: "https://wiki.uoa-karate.club/kata/Saifa"
        },
        {
          name: "Saifa Bunkai", value: 6,
          wikiURL: "https://wiki.uoa-karate.club/bunkai/Saifa"
        },
        {
          name: "Seiyunchin", value: 5,
          wikiURL: "https://wiki.uoa-karate.club/kata/Seiyunchin"
        },
        {
          name: "Seiyunchin Bunkai", value: 4,
          wikiURL: "https://wiki.uoa-karate.club/bunkai/Seiyunchin"
        },
        {
          name: "Shisochin", value: 3,
          wikiURL: "https://wiki.uoa-karate.club/kata/Shisochin"
        },
        {
          name: "Shisochin Bunkai", value: 2,
          wikiURL: "https://wiki.uoa-karate.club/bunkai/Shisochin"
        },
        {
          name: "Sanchin", value: -1,
          wikiURL: "https://wiki.uoa-karate.club/kata/Sanchin"
        },
        {
          name: "Sanseiru", value: -2,
          wikiURL: "https://wiki.uoa-karate.club/kata/Sanseiru"
        },
        {
          name: "Sanseiru Bunkai", value: -2,
          wikiURL: "https://wiki.uoa-karate.club/bunkai/Sanseiru"
        },

      ],
    };
  },
  computed: {
    needToKnow() {
      return this.syllabus.filter((skill) => skill.value >= this.selectedGrade.value);
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
  min-height: 230px;
}
</style>
