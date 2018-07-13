<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is soon to be the official website of the University of Auckland Goju Ryu Karate Club. We're currently under contruction 👷‍♂️
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.hello {
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
