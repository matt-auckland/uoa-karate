<template>
  <div class="about">
      <div class="container">

      <h1>About the Club</h1>
    
      <p>The club was founded in 2003 by Ewan Tempero Sensei and Tom Davies Sensei. The two met in 2002 when Ewan Sensei ran some beginners' classes in order to create a club. At the time Ewan Sensei had a Nidan in Goju Ryu and Tom Sensei had Shodan ranks in Zen Do Kai Karate Kickboxing, Shin Do Kempo Karate and a Nidan in Yoshukai Karate.</p>

      <p>The club is affiliated with the International Okinawan Goju Ryu Federation (IOGKF), an international body dedicated to preserving the art of the Okinawan Goju-Ryu Karate, as well as the New Zealand IOGKF affiliate, the IOGKFNZ. This gives club members access to expert instructions both nationally and internationally. </p>

      <h2>Instructors</h2>
      <div class="person-container">
        <Person v-for="person in instructors" :key="person.name" :person="person"/>
      </div>
      <h2>Exec Team</h2>
      <div class="person-container">
        <Person v-for="person in execTeam" :key="person.name" :person="person"/>
      </div>
    </div>
  </div>
</template>

<script>
import Person from "@/components/Person.vue"

export default {
  components: {
    Person
  },
  data: function() {
    return {
      instructors: [
        {
          name: 'Ewan Tempero',
          pic: '/logo.png',
          position: 'Head Instructor',
          bio: 'Ewan Sensei holds a fourth degree black belt in Goju Ryu.',
        },
        {
          name: 'Tom Davies',
          pic: '',
          position: '',
          bio: 'Tom Sensei holds a third degree black belt in Goju Ryu, second degree black belt in Yoshukai Karate and first degree black belts in Zen Do Kai Karate Kickboxing and Shin Do Kempo.',
        },
        {
          name: 'Johannes Reynisson',
          pic: '',
          position: 'Instructor',
          bio: 'Johannes Sensei holds a third degree black belt in Goju Ryu.',
        },
        {
          name: 'Greg Shanahan',
          pic: '',
          position: 'Instructor',
          bio: 'Greg Sensei holds a third degree black belt in Goju Ryu.',
        },
      ],
      execTeam: [
        {
          name: 'Mathew Paul',
          pic: '',
          position: 'Social Director',
          bio: '',
        },
        {
          name: 'Wendy Yao',
          pic: '',
          position: 'Vice President',
          bio: '',
        },
        {
          name: 'Jane Yang',
          pic: '',
          position: 'Secretary',
          bio: '',
        },
        {
          name: 'Marcus Hong',
          pic: '',
          position: 'Health & Safety Officer',
          bio: '',
        },
        {
          name: 'Rimal Prasad',
          pic: '',
          position: 'Financial Officer',
          bio: '',
        },
        {
          name: 'Abhishek Makker',
          pic: '',
          position: 'Social Director',
          bio: '',
        },
        {
          name: 'Zehra Hamid',
          pic: '',
          position: 'Financial Officer',
          bio: '',
        },
        {
          name: 'Vera Meng',
          pic: '',
          position: 'Vice President',
          bio: '',
        },
        {
          name: 'Emma Huang O\'Keefe',
          pic: '',
          position: 'President',
          bio: '',
        },
        {
          name: 'Jessica Cee',
          pic: '',
          position: 'Health & Safety Officer',
          bio: '',
        },
      ],
    }
  }
}
</script>


<style scoped>
.about {
  display: grid;
  /* grid-template-columns: 1fr 2fr 1fr; */
  /* grid-template-areas: ". container ." */
}

.container {
  grid-area: container;
  width: 80vw;
}

.person-container {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
  /* grid-template-rows:  */
}
</style>
