<template>
  <div class="container">
    
    <HomeIntro msg="Practise Daily" class="home-intro"/>
    <TrainingSchedule class="schedule" />
    <FeesTable class="fees" />
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />
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
    grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
    grid-auto-rows: minmax(200px, auto);
    grid-column-gap: 30px;
    grid-row-gap: 40px;
    grid-auto-flow: dense;
    justify-content: center;
  }

  .home-intro {
    /* grid-area: helloworld; */
    /* grid-area: 1/1/3/2; */
  }

  .clubmap {
    /* grid-area: map; */
    margin: 30px 0 10px 0;
  }

  .schedule {
    /* grid-area: schedule; */
  }

  .todo {
    /* grid-area: todo; */
  }


</style>

