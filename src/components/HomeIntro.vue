<template>
  <div class="home-intro-container">
    <h1>{{ msg }}</h1>
    <p>
      This is the official website of the University of Auckland Goju Ryu Karate Club. 
      Founded in 2003, the club welcomes students and non-students alike. Feel free to drop in for a trial at any time, we accept members all year round. 
      Training runs from mid-January till mid-Decemeber.
      We're currently under contruction 👷‍♂️
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeIntro',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.home-intro-container {
  width: 100%;
  max-width: 600px;
  min-width: 300px;

}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
