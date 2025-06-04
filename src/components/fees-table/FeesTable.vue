<template>
  <div class="fee-data-container">
    <h2 v-if="showTitle">
      Training Fees:
    </h2>
    <table>
      <thead>
        <tr>
          <th class="text">
            Fee Type
          </th>
          <th class="number">
            Cost
          </th>
          <th class="text">
            Notes
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in feeTableData"
          :key="row.type"
        >
          <td class="text">
            {{ row.type }}
          </td>
          <td class="number">
            {{ row.cost }}
          </td>
          <td class="text">
            {{ row.notes }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FeesTable",
  props: {
    showTitle: {
      type: Boolean,
      default() { return true },
    },
    feeTableData: {
      type: Array,
      required: true,
    }
  }
};
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
