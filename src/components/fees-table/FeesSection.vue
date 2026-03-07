<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>

    <div class="grid-container">
      <div class="fee" v-for="fee in selectedFees" :key="fee.type">
        <h3>{{ fee.type }}</h3>
        <p class="cost">{{ fee.cost }}</p>
        <hr v-if="fee.notes" />
        <p class="notes" v-if="fee.notes">{{ fee.notes }}</p>
      </div>
    </div>

    <AppButton v-if="showStudents" @click="showStudents = false">
      I'm not a University Student
    </AppButton>
    <AppButton v-else @click="showStudents = true">
      I'm a University Student
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import { ref, computed } from "vue";

const membershipFee = {
  type: "Club Membership",
  cost: "FREE",
  notes:
    "Club membership is free for everyone, and includes access to free trial sessions and club events",
};

const regularFeeData = [
  membershipFee,
  {
    type: "Training Fee",
    cost: "$40 Per Month",
    notes: "Non-university students pay once per month",
  },
];

const studentFeeData = [
  membershipFee,
  {
    type: "Training Fee",
    cost: "FREE your first sem, then $70 per semester",
    notes:
      "University students pay once per University semester, your first semester is free",
  },
];

const showStudents = ref(true);

const selectedFees = computed(() =>
  showStudents.value ? studentFeeData : regularFeeData,
);
</script>

<style scoped>
.fee-data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2 {
    width: 100%;
    margin: 0;
  }
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

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

  .cost {
    font-weight: bold;
  }

  .fee {
    display: flex;
    flex-direction: column;

    flex: 150px 1 1;

    border: 2px solid var(--persian-red-darker);
    padding: 10px 12px;
    text-align: center;
    border-radius: 15px;
    background-color: var(--website-bg-color);
    ;
    transition: transform 500ms;
  }

  .fee:hover {
    transform: translateY(-5px);
  }

  .fee .location {
    flex: 1;
  }
}
</style>
