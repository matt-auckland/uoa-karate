
<template>
  <div class="event-container">
    <div class="">
      <h2 class="event-title">Coming soon:</h2>
      <p class="page-desc">
        This page lists upcoming club events. There is no gurauntee it is up to date.
        This page was last updated on 28/06/2018. If you have any questions about upcoming events contact us.
        </p>
      </div>
    <div v-for="event in eventList" :key="event.name" class="event">
      <h2 class="event-title">{{event.name}}</h2>
      <img :src="event.img" alt="Event image" v-if="event.img" class="event-img">
      <div class="event-text"><b>Date:</b> {{event.date}}</div>
      <div class="event-text"><b>Location:</b> {{event.location}}</div>
      <div class="event-text">{{event.description}}</div>
      <div class="event-text">For more information follow <a :href="event.link">this link</a></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Events',
  components: {
  },
  data: function() {
    return {
      eventList: [
        {
          name: 'Karate Kamp 2018',
          img: '/logo.png',
          date: 'Sem 2 Mid Semester Break',
          location: 'Undecided',
          description: 'The third annual UoA Karate Kamp. Fun, games and Daily Practice.',
          link: ''
        },
        {
          name: 'Courses & Careers Day 2018',
          date: 'August 25',
          location: 'UoA Campus',
          description: 'The club will be performing at Courses and Careers Day',
          link: ''
        },
        {
          name: '2018 National Gasshuku',
          img: '/logo.png',
          date: 'October 20th-21st',
          location: 'Wellington',
          description: 'Ernie Sensei, 8th dan from England, will be coming to Wellington to train.',
          link: 'www.karate.org.nz'
        },
        {
          name: '2018 Taira Sensei Seminar',
          date: 'October 27th-28th',
          location: 'Auckland',
          description: 'Taira Masaji Sensei, 9th dan from Okinawa, will be coming to Auckland to host a seminar.',
          link: ''
        },
      ]
    }
  }
}
</script>

<style scoped>
.event-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 30px;
  grid-auto-flow: dense;
  justify-content: center;
}

.event {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  grid-auto-flow: dense;
}

.event-title {
  grid-area: 1/1/2/3;
  justify-self: center;
  text-align: center;
}

.event-img {
  justify-self: center;
  grid-area: 2/2/6/3;
  max-height: 100%;
  max-width: 150px;
}

.event-text, .page-desc {
  padding-left: 20px;
}

.page-desc {

}
</style>
