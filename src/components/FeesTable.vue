<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>
    <table>
      <thead>
        <tr>
          <th class="text">Fee Type</th>
          <th class="number">Student&nbsp;Cost</th>
          <th class="number">Non&nbsp;Student&nbsp;Cost</th>
          <th class="text">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text">Yearly Membership</td>
          <td class="number">$5</td>
          <td class="number">$5</td>
          <td class="text">Paid once per year in addition to the training fees</td>
        </tr>
        <tr>
          <td class="text">First Semester's Training</td>
          <td class="number">$35</td>
          <td class="number">N/A</td>
          <td class="text">Only applies to students joining the club for the first time.</td>
        </tr>
        <tr>
          <td class="text">Standard Semester's Training</td>
          <td class="number">$70</td>
          <td class="number">$36 Per Month</td>
          <td class="text">Students pay per semester, non&nbsp;students pay per month.</td>
        </tr>
        <tr>
          <td class="text">Grading</td>
          <td class="number">$35</td>
          <td class="number">$35</td>
          <td class="text">Gradings occur near the end of each semester</td>
        </tr>
      </tbody>
    </table>  
  </div>
</template>

<script>

export default {
  name: 'FeesTable',
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

.text {
  text-align: left;
}

.number {
  text-align: right;
}

</style>
