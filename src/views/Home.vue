<template>
  <div class="container">
    
    <HelloWorld msg="Practise Daily" class="helloworld"/>
    <Schedule class="schedule" :scheduleData="scheduleData" />
    <ClubMap class="clubmap" />
    <ContactForm class="contact-form" />
    <Gallery class="gallery" />
    <ToDo class="todo" />


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ToDo from '@/components/ToDo.vue'
import Schedule from '@/components/Schedule.vue'
import ClubMap from '@/components/ClubMap.vue'
import Gallery from '@/components/Gallery.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ToDo,
    ClubMap,
    Schedule,
    Gallery,
    ContactForm,
},
  data: function()  { 
    return {
      scheduleData: [
        {
          index: 1,
          day: 'Tuesday',
          startTime: '6pm',
          finishTime: '8pm',
          location: 'Cap and Gown Lounge, UoA',
          notes: 'Student run'
        },
        {
          index: 2,
          day: 'Wednesday',
          startTime: '5.30pm',
          finishTime: '7pm',
          location: 'Dance Studio, UoA Recreation Center',
          notes: ''
        },
        {
          index: 3,
          day: 'Friday',
          startTime: '6pm',
          finishTime: '7.30pm',
          location: 'Dance Studio, UoA Recreation Center',
          notes: 'Advanced class'
        },
        {
          index: 4,
          day: 'Sunday',
          startTime: '10am',
          finishTime: '12pm',
          location: 'Dance Studio, UoA Recreation Center',
          notes: ''
        },
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 30px;
    grid-auto-flow: dense;
    /* align-items: center; */
    justify-content: center;
  }

  .helloworld {
    /* grid-area: helloworld; */
    /* grid-area: 1/1/3/2; */
  }

  .clubmap {
    /* grid-area: map; */
  }

  .schedule {
    /* grid-area: schedule; */
  }

  .todo {
    /* grid-area: todo; */
  }


</style>

