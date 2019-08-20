<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>
    <div class="tab-container">
      <a
        class="tab"
        :class="{ active: showStudents }"
        @click="showStudents = true"
      >Student Fees</a>
      <a
        class="tab"
        :class="{ active: !showStudents }"
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
          <td class="text">Membership Fee</td>
          <td class="number">$5 Annually</td>
          <td class="text">Paid once per year in addition to the training fees</td>
        </tr>
        <tr v-if="showStudents">
          <td class="text">New Member's Training Fee</td>
          <td class="number">$35 Per Semester</td>
          <td class="text">Students pay half-price for the first semester</td>
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
          >$36 Per Month</td>
          <td
            v-if="showStudents"
            class="text"
          >Students pay per semester</td>
          <td
            v-if="!showStudents"
            class="text"
          >Non-students pay per month</td>
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
  data() {
    return {
      showStudents: true
    };
  }
};
</script>

<style scoped>
.tab-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 280px;
  margin: 0 auto 20px auto;
}

.tab {
  cursor: pointer;
  position: relative;
}

.tab::after {
  --animation-length: 800ms;
  content: " ";
  background: var(--persian-red);
  height: 2px;
  opacity: 1;
  width: 0px;
  transition: width var(--animation-length), left var(--animation-length);
  position: absolute;
  bottom: -3px;
  left: 50%;
}

.tab.active::after {
  width: 100%;
  left: 0%;
}

.tab.active {
  cursor: default;
  color: var(--persian-red);
}

table {
  text-align: left;
  border-spacing: 0px;
  width: 100%;
  max-width: 880px;
  /* min-width: 300px; */
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
