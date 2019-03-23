<template>
  <div class="schedule-data-container">
    <h2>Training Schedule:</h2>

    <div class="grid-container">
      <div
        class="day"
        v-for="session in scheduleData"
        :key="session.index"
      >
        <h3>{{session.day}}</h3>
        <p class="date">{{session.startTime}} - {{session.finishTime}} </p>
        <p>{{session.location}} </p>
        <hr v-if="session.notes" />
        <p
          class="notes"
          v-if="session.notes"
        >{{session.notes}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import scheduleData from "../assets/schedule-data.json";

export default {
  name: "TrainingSchedule",
  data: function() {
    return {
      scheduleData: scheduleData
    };
  }
};
</script>

<style scoped>
.schedule-data-container {
  padding: 0 10px;
}

h3 {
  color: var(--base-font-color);
  margin: 0;
}

p {
  color: var(--base-font-color);
  font-size: 14px;
  margin: 5px 0;
}

.date {
  font-weight: bold;
}

hr {
  border: none;
  margin: 8px 30%;
  border-bottom: 2px solid var(--persian-red-light);
}

.notes {
  font-weight: bold;
}

.grid-container {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 -20px;
}

.day {
  margin: 20px;
  border: 2px solid var(--persian-red-darker);
  flex: 122px 1 1;
  max-width: 180px;
  padding: 10px 5px;
  text-align: center;
  border-radius: 15px;
  transform: rotate(-5deg);
  transition: all ease 500ms;
  background-color: var(--tuatara);
  background-color: black;
}
.day:nth-child(odd) {
  transform: rotate(5deg);
}

.day:hover,
.day:active,
.day:nth-child(odd):hover,
.day:nth-child(odd):active {
  transform: rotate(0deg);
}

@media (max-width: 759px) {
  .day,
  .day:nth-child(odd) {
    transform: rotate(0deg);
    transition: none;
    max-width: unset;
  }
}
</style>
