<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>
    <div class="tab-container">
      <a
        class="tab"
        :class="{ active: showStudents }"
        @click="showStudents = true"
      >Student Fees
        <div class="underline"></div>
      </a>
      <a
        class="tab"
        :class="{ active: !showStudents }"
        @click="showStudents = false"
      >Non&nbsp;Student Fees
        <div class="underline"></div>
      </a>
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
        </tr>
        <tr>
          <td class="text">Training Fee</td>
          <td
            class="number"
            v-if="showStudents"
          >$70 Per Semester, $35 for your first sem</td>
          <td
            class="number"
            v-if="!showStudents"
          >$36 Per Month</td>
          <td
            v-if="showStudents"
            class="text"
          >Students pay per semester, your first sem is half-price</td>
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
  display: flex;
  justify-content: center;
}

.underline {
  --animation-length: 350ms;
  content: " ";
  background: var(--persian-red);
  height: 2px;
  opacity: 1;
  width: 0px;
  transition: width var(--animation-length);
  position: absolute;
  bottom: -3px;
}

.tab.active .underline {
  width: 100%;
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
}

table,
td,
th {
  border: var(--tuatara-light) solid 1px;
}

td,
th {
  padding: 16px 10px;
}

.text {
  text-align: left;
}
</style>
