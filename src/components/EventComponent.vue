
<template>
  <div class="event-container">
    <h2 class="event-title">{{event.name}}</h2>
    <img
      :src="event.img"
      alt="Event image"
      v-if="event.img"
      class="event-img"
    >
    <img
      src="/logo.png"
      alt="Event image"
      v-if="!event.img"
      class="event-img"
    >
    <div class="event-date"><b>Date:</b> {{event.date}}</div>
    <div class="event-text"><b>Location:</b> {{event.location}}</div>
    <div class="event-text">{{event.description}}</div>
    <div
      class="event-text"
      v-if="event.signUpURL"
    >To sign up, follow <a
        :href="event.signUpURL"
        target="_blank"
        rel="noopener noreferrer"
      >this link</a></div>

    <div
      class="event-text"
      v-if="!event.offSitelink && event.extendedDescription"
    >For more information follow <router-link :to="'/events/' + event.name.replace(/\ /gi, '-')">this link</router-link>
    </div>
    <div
      class="event-text"
      v-if="event.offSitelink"
    >For more information follow <a
        :href="event.offSitelink"
        target="_blank"
        rel="noopener noreferrer"
      >this link</a></div>
  </div>
</template>

<script>
export default {
  name: "EventComponent",
  components: {},
  props: {
    event: Object
  }
};
</script>

<style scoped>
.event-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  grid-auto-flow: dense;
  /* align-items: center; */
}

.event-title {
  grid-area: 1/1/2/3;
  justify-self: center;
  text-align: center;
}

.event-img {
  justify-self: center;
  align-self: center;
  grid-area: 2/2/6/3;
  max-height: 150px;
  /* max-width: 150px; */
}

@media (max-width: 500px) {
  .event-img {
    max-width: 45vw;
  }
}

@media (max-width: 350px) {
  .event-img {
    display: none;
  }
}

.event-text,
.event-date {
  padding-left: 20px;
}

.event-date {
  grid-column: span 2;
}
</style>
