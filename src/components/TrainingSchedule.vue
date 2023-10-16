<template>
  <div class="schedule-data-container">
    <h2>Training Schedule:</h2>

    <div class="grid-container">
      <div class="day" v-for="session in scheduleData" :key="session.index">
        <h3>{{ session.day }}</h3>
        <p class="date">{{ session.startTime }} - {{ session.finishTime }} </p>
        <p class="location">{{ session.location }} </p>
        <hr v-if="session.notes" />
        <p class="notes" v-if="session.notes">{{ session.notes }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../assets/config.json";

export default {
  name: "TrainingSchedule",
  props: {
    schedule: {
      default: null
    }
  },
  computed: {
    scheduleData() {
      if (!this.schedule) return config.schedule.filter(training => training.canDisplay)

      return this.schedule.filter(training => training.canDisplay)
    }
  }
};
</script>

<style scoped>
h3 {
  color: var(--base-font-color);
  margin: 0;
  font-size: 22px;
}

p {
  color: var(--base-font-color);
  font-size: 18px;
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
  justify-content: center;
}

.day {
  display: flex;
  flex-direction: column;

  flex: 150px 1 1;
  margin: 15px;
  border: 2px solid var(--persian-red-darker);
  padding: 10px 12px;
  text-align: center;
  border-radius: 15px;
  background-color: black;
  transition: transform 500ms;
}

.day:hover {
  transform: translateY(-5px);
}

.day .location {
  flex: 1;
}
</style>
