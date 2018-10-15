<template>
  <div class="container">
    
    <HomeIntro msg="Practise Daily" class="home-intro"/>
    <UpcomingEvents class="upcoming-events" />
    <TrainingSchedule class="schedule" />
    <FeesTable class="fees" />
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />
    <QuoteDisplay class="quote-display"/>
    <!-- <Gallery class="gallery" /> -->
    <!-- <ToDo class="todo" /> -->

  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue'
import ToDo from '@/components/ToDo.vue'
import TrainingSchedule from '@/components/TrainingSchedule.vue'
import FeesTable from '@/components/FeesTable.vue'
import ClubMap from '@/components/ClubMap.vue'
import Gallery from '@/components/Gallery.vue'
import ContactForm from '@/components/ContactForm.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import QuoteDisplay from '@/components/QuoteDisplay.vue'

export default {
  name: 'home',
  components: {
    HomeIntro,
    ToDo,
    ClubMap,
    TrainingSchedule,
    FeesTable,
    Gallery,
    ContactForm,
    UpcomingEvents,
    QuoteDisplay,

},
  data: function()  { 
    return {
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 700px));
    grid-auto-rows: minmax(150px, auto);
  
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    /* grid-auto-rows: minmax(100px, 200px); */

    grid-column-gap: 30px;
    grid-row-gap: 40px;
    grid-auto-flow: dense;
    justify-content: center;
  }

  .home-intro {
  }

  .upcoming-events {
    grid-row-end: span 2;
  }

  .schedule {
  }

  .fees {
  }
  .clubmap {
  }

  .contact-form {
  }
  .quote-display {
    grid-area: auto / 1/ auto/ -1;
  }


</style>

