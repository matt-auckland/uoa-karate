<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>
    <div class="tab-container">
      <a class="tab" :class="{ active: showStudents }" @click="showStudents = true">Uni Student Membership Fees
        <div class="underline"></div>
      </a>
      <a class="tab" :class="{ active: !showStudents }" @click="showStudents = false">Regular Membership Fees
        <div class="underline"></div>
      </a>
    </div>

    <FeesTable v-if="showStudents" :feeTableData="studentFeeData" :showTitle="false" />
    <FeesTable v-else :feeTableData="regularFeeData" :showTitle="false" />
  </div>
</template>

<script setup>
import FeesTable from '@/components/fees-table/FeesTable.vue';
import { ref } from 'vue';

const membershipFee =
{
  type: 'Club Membership Fee',
  cost: 'FREE',
  notes: 'Club membership is free for everyone, and includes access to training and events',

}
// const baseFeeData = [
//   {
//     type: 'Grading Fee',
//     cost: '$35',
//     notes: 'Gradings occur near the end of each university semester',
//   },
// ]

const regularFeeData = [
  membershipFee,
  {
    type: 'Training Fee',
    cost: '$40 Per Month',
    notes:
      'Non-students pay per month',
  },
]

const studentFeeData = [
  membershipFee,
  {
    type: 'Training Fee',
    cost: 'FREE your first sem, then $70 Per Semester',
    notes:
      'Students pay per semester, your first sem is free',
  },
]

const showStudents = ref(true)
</script>

<style scoped>
.tab-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px auto;
}

.tab {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 10px;
}

.underline {
  --animation-length: 350ms;
  content: ' ';
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
