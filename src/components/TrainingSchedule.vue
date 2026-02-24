<template>
  <div class="schedule-data-container">
    <h2>Training Schedule:</h2>

    <div class="grid-container">
      <div class="day" v-for="session in scheduleData" :key="session.index">
        <h3>{{ session.day }}</h3>
        <p class="date" v-if="session.timing">{{ session.timing }}</p>
        <p class="location">{{ session.location }} </p>
        <hr v-if="session.notes" />
        <p class="notes" v-if="session.notes">{{ session.notes }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/assets/config.js";
import { TRAINING_STATUS } from "../assets/config";

export default {
  name: "TrainingSchedule",
  props: {
    schedule: {
      default: null
    }
  },
  computed: {
    scheduleData() {
      if (!this.schedule) return this.getSessions(config.schedule)

      return this.getSessions(this.schedule)
    },
  },
  methods: {
    getSessions(sessions) {
      return sessions
        .filter(session => session.status !== TRAINING_STATUS.HIDDEN)
        .map(session => {
          session.timing = `${session.startTime} - ${session.finishTime}`

          if (session.status === TRAINING_STATUS.POSTPONED) {
            session.notes = session.tempNotes || "Postponed until further notice"
            session.location = session.tempLocation || session.location
          }

          return session
        })
    }
  }
};
</script>

<style scoped>
h3 {
  color: var(--base-font-color);
  margin: 0;
  font-size: 20px;
}

p {
  color: var(--base-font-color);
  font-size: 16px;
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
