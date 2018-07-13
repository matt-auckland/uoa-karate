<template>
  <div class="hello">
    <h2>To Do:</h2>
    <ul>
      <li class="done">Pick a colour scheme</li>
      <li class="done">implement colour scheme</li>
      <li>Complete home page</li>
      <li>Complete events page</li>
      <li>Complete karate page</li>
      <li>add page for instructors and exec</li>
      <li>Add icons for FB and IG</li>
      <li>Add a logo</li>
    </ul>  
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
}


</style>
