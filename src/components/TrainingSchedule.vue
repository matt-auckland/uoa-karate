<template>
  <div class="schedule-data-container">
    <h2>Training Schedule:</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th><th>Time</th><th>Location</th><th>Notes</th>
        </tr>
      </thead>
      <tr v-for="session in scheduleData" :key="session.index">
        <td> {{session.day}} </td> <td> {{session.startTime}} - {{session.finishTime}}</td> <td> {{session.location}}</td> <td> {{session.notes}}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import scheduleData from './schedule-data.json'

export default {
  name: 'TrainingSchedule',
  data: function() {
    return {
      scheduleData: scheduleData
  }
  }
}
</script>

<style scoped>

table {
  text-align: left;  
  border-spacing: 0px;
  width: 100%;
  max-width: 880px;
  min-width: 300px;
}
table, td, th{
  border: var(--tuatara-light) solid 1px;
}

td, th {
  padding: 3px 5px;
}

</style>
