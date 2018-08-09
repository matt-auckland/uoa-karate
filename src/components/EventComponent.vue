
<template>
  <div class="event-container">
    <h2 class="event-title">{{event.name}}</h2>
    <img :src="event.img" alt="Event image" v-if="event.img" class="event-img">
    <div class="event-text"><b>Date:</b> {{event.date}}</div>
    <div class="event-text"><b>Location:</b> {{event.location}}</div>
    <div class="event-text">{{event.description}}</div>
    <div class="event-text" v-if="!event.offSitelink">For more information follow <router-link :to="'/events/' + event.name.replace(/\ /gi, '-')">this link</router-link></div>
    <div class="event-text" v-if="event.offSitelink">For more information follow <a :href="event.offSitelink" target="_blank" rel="noopener noreferrer">this link</a></div>
  </div>
</template>

<script>

export default {
  name: 'EventComponent',
  components: {
  },
  props: {
    event: Object
  }
}
</script>

<style scoped>

.event-container {
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

@media (max-width: 500px) {
  .event-img {
    max-width: calc(150px * 0.875);
  }
}

@media (max-width: 350px) {
  .event-img {
    max-width: calc(150px * 0.75);
  }
}


.event-text, .page-desc {
  padding-left: 20px;
}

.page-desc {

}
</style>
