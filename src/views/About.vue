<template>
  <div class="about-container">
    <div class="header">

      <h1>About the Club</h1>
      <div class="history">

        <p>The club was founded in 2003 by Ewan Tempero Sensei and Tom Davies Sensei. The two met in 2002 when Ewan Sensei ran some beginners' classes in order to create a club. At the time Ewan Sensei had a Nidan in Goju Ryu and Tom Sensei had Shodan ranks in Zen Do Kai Karate Kickboxing, Shin Do Kempo Karate and a Nidan in Yoshukai Karate.</p>

        <p>The club is affiliated with the <a
            href="https://iogkf.com"
            target="_blank"
            rel="noopener noreferrer"
          >International Okinawan Goju Ryu Federation (IOGKF)</a>, an international body dedicated to preserving the art of the Okinawan Goju-Ryu Karate, as well as the New Zealand IOGKF affiliate, the <a
            href="https://karate.org.nz"
            target="_blank"
            rel="noopener noreferrer"
          >IOGKFNZ</a>. This gives club members access to expert instructions both nationally and internationally. </p>
      </div>
    </div>
    <TrainingSchedule class="schedule" />
    <FeesTable class="fees" />
    <div class="people-container">
      <h2>Instructors</h2>
      <div class="person-container">
        <Person
          v-for="instructor in ClubMembers.filter(person => person.role === 'instructor')"
          :key="instructor.name"
          :person="instructor"
        />
      </div>
      <h2>Exec Team</h2>
      <div class="person-container">
        <Person
          v-for="execMember in Utils.randomiseArr(ClubMembers.filter(person => person.role === 'exec'))"
          :key="execMember.name"
          :person="execMember"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
import ClubMembers from "../assets/club-members.json";
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesTable from "@/components/FeesTable.vue";

import Utils from "@/libs/utils";

export default {
  components: {
    Person,
    TrainingSchedule,
    FeesTable
  },
  data() {
    return {
      ClubMembers: ClubMembers
    };
  }
};
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
  flex-flow: wrap;
  justify-content: space-between;
}

.history p {
  max-width: 600px;
  min-width: 300px;
  text-align: justify;
}

.header,
.people-container {
  grid-column-start: 1;
  grid-column-end: -1;
  width: 100%;
}

.header h1 {
  text-align: center;
}
.person-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>
