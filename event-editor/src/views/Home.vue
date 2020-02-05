<template>
  <div class="home">
    <h2>Events</h2>
    <router-link
      to="/event/new"
      class="action"
    >
      New Event</router-link>
    <ul>
      <li
        v-for="event in events"
        :key="event.id"
        class="event"
      >
        <span>{{event.title}}
          <span v-if="event.startDate">- {{event.startDate}}</span>
        </span>
        <span>

          <router-link
            :to="`/event/${event.id}`"
            class="action"
          >Edit</router-link>
          <router-link
            :to="`/event/dupe/${event.id}`"
            class="action"
          >Duplicate</router-link>
          <button
            disabled
            @click.prevent=""
            class="action"
          >Delete</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import eventList from "../../../src/assets/events.json";

export default {
  name: "home",
  components: {},
  data: function() {
    return {
      events: eventList
    };
  }
};
</script>

<style>
.event {
  margin: 10px 0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}
</style>