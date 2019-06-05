
<template>
  <div class="about-container">
    <div class="header">
      <h1>About the Club</h1>
    </div>
    <p>
      <span>
        Since being founded in 2002 by Ewan Tempero and Tom Davies, The University of Auckland Goju Ryu Karate Club has been running for over {{new Date().getFullYear() - 2002}} years.
        The club welcomes adults (both students and non-students) of any experince level, and from any style of martial arts.
      </span>

      <span>The club is affiliated with the <a
          href="https://iogkf.com"
          target="_blank"
          rel="noopener noreferrer"
        >International Okinawan Goju Ryu Federation (IOGKF)</a>, an international body dedicated to preserving the art of the Okinawan Goju-Ryu Karate, as well as the New Zealand branch organization, <a
          href="https://karate.org.nz"
          target="_blank"
          rel="noopener noreferrer"
        >IOGKFNZ</a>. This gives club members access to expert intructors and the ability to attend training camps/seminars around the country and the world. </span>
    </p>
    <app-image
      source="img/group_saifa.JPG"
      caption="Club members performing Saifa kata at the beach"
    >
    </app-image>

    <app-image
      source="img/camp_group.jpg"
      caption="Club members at Karate Camp"
    >
    </app-image>

    <p>
      We try to create a warm and welcoming atmosphere at the club and as part of this we regularly hold all kinds of social events, including: Our own 'Karate Camp', weekend training camps, dinner/lunches after training, group movie viewings, trainings at the beach, and other group outings around Auckland.
    </p>

    <p>

      We also participate in tournaments multiple times a year and attend training camps in Wellington (and occassionally overseas!).

    </p>

    <app-image
      source="img/camp_group.jpg"
      caption="Club members at Karate Camp"
    >
    </app-image>
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
import ClubMembers from "@/assets/club-members.json";
import TrainingSchedule from "@/components/TrainingSchedule.vue";
import FeesTable from "@/components/FeesTable.vue";

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
  grid-gap: 15px;
  justify-content: center;
  padding: 0 15px;
}

p {
  padding: 0 10px;

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
  margin: 20px 0 0 0;
}

.person-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>
