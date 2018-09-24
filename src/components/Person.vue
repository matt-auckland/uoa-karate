<template>
  <div class="person">
    <img :src="person.pic || '/logo.png'" />
    <div class="name">{{person.name}}</div>
    <div class="position">{{person.position}}</div>
    <div class="bio">
      {{person.bio}} {{person.name | firstName | sensei(person.role)}} holds 
      <span v-for="style in person.styles" :key="style.name">
        {{ style.grade | grade(style.name, true)}}{{(person.styles.indexOf(style) === person.styles.length - 1) ? '.' : (person.styles.indexOf(style) === person.styles.length - 2) ? ' and ' : ', '}}
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: Object
  },
  filters: {
    grade: function (grade, style = '', prefix) {
      let determiner = 'a '
      let danGrade = false
      let suffix = 'th '
      if (style)
        style = ' in ' + style
      if( grade < 0 ) {
        danGrade = true
        grade *= -1
      } else if (grade === 0 || !grade) {
        return 'ungraded' + style
      }
      switch (grade) {
        case 1: suffix = 'st '
                break
        case 2: suffix = 'nd '
                break
        case 3: suffix = 'rd '
                break
        case 8: determiner = 'an '
                break
      }
      if (!prefix)
        determiner = ''
      return determiner + grade + suffix + (danGrade ? 'Dan ' : 'Kyu ') + style
    },
    firstName: function (name) {
      return name.substr(0, name.indexOf(' ')) || name
    },
    sensei: function (name, role = 'instructor') {
      if (role === 'instructor')
        return name + ' Sensei'
      return name
    }
  }
}
</script>


<style scoped>
.person {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 10px;
  text-align: center;
}

img {
  width: 80px;
  height: 80px;
  border-radius: 60px;
  margin-bottom: 10px;
  filter: saturate(0%);
  transition: all 300ms ease-out;
}

img:hover {
  filter: saturate(100%);
}
.name {
  /* color: var(--tuatara-lighter); */
  /* filter: brightness(110%); */
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}

.position {
  /* color: var(--tuatara-lighter); */
  /* filter: brightness(110%); */
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.bio {
  /* color: var(--tuatara-lighter); */
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
