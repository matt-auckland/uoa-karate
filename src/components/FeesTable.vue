<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>
    <div class="tab-container">
      <a
        :class="{active: showStudents, tab:true}"
        @click="showStudents = true"
      >Student Fees</a>
      <a
        :class="{active: !showStudents, tab:true}"
        @click="showStudents = false"
      >Non&nbsp;Student Fees</a>
    </div>

    <table>
      <thead>
        <tr>
          <th class="text">Fee Type</th>
          <th class="number">Cost</th>
          <th class="text">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text">Annual Club Fee</td>
          <td class="number">$5 Annually</td>
          <td class="text">Paid once per year in addition to the training fees</td>
        </tr>
        <tr v-if="showStudents">
          <td class="text">New Member's Training Fee</td>
          <td class="number">$35 Per Semester</td>
          <td class="text">Only applies to students joining the club for the first time.</td>
        </tr>
        <tr>
          <td class="text">Standard Training Fee</td>
          <td
            class="number"
            v-if="showStudents"
          >$70 Per Semester</td>
          <td
            class="number"
            v-if="!showStudents"
          >$35 Per Month</td>
          <td class="text">Students pay per semester, non-students pay per month.</td>
        </tr>
        <tr>
          <td class="text">Grading Fee</td>
          <td class="number">$35</td>
          <td class="text">Gradings occur near the end of each semester</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FeesTable",
  data: function() {
    return {
      showStudents: true
    };
  }
};
</script>

<style scoped>
.tab-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 300px;
}

.tab {
  cursor: pointer;
}

.tab.active {
  border-bottom: 1px solid var(--persian-red);
  cursor: not-allowed;
  color: var(--persian-red);
}

.tab:hover {
  border-bottom: 1px solid var(--persian-red);
}

table {
  text-align: left;
  border-spacing: 0px;
  width: 100%;
  max-width: 880px;
}

table,
td,
th {
  border: var(--tuatara-light) solid 1px;
}

td,
th {
  padding: 3px 5px;
}

.text {
  text-align: left;
}

.number {
  text-align: right;
}
</style>
