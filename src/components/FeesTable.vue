<template>
  <div class="fee-data-container">
    <h2>Training Fees:</h2>
    <table>
      <thead>
        <tr>
          <th >Name</th>
          <th> Student Fee</th>
          <th> Non&nbsp;Student Fee</th>
          <th> Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Yearly Membership fee</td>
          <td> $5</td>
          <td> $5</td>
          <td> This is paid once per year in addition to the training fees</td>
        </tr>
        <tr>
          <td> First Semester's Training Fee</td>
          <td> $35</td>
          <td> N/A</td>
          <td> This only applies for students when they join the club for the first time.</td>
        </tr>
        <tr>
          <td> Standard Semester's Training Fee</td>
          <td> $70 Per Semester</td>
          <td> $36 Per Month</td>
          <td>
          </td>
        </tr>
        <tr>
          <td> Grading Fee</td>
          <td> $35</td>
          <td> $35</td>
          <td> Gradings generally occur once a semester</td>
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

</style>
