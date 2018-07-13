<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>


<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Header,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  /* color: #2c3e50; */
  margin-top: 60px;
}

:root {
  --tuatara: #39393A;
  --tuatara-dark: #2E2E2F;
  --tuatara-light: #4A4A4B;
  --tuatara-lighter :#606062;
  --persian-red: #DB3536;
  --persian-red-dark: #C41B1C;
  --persian-red-darker: #A90708;
  --persian-red-light: #F55354;
}

body {
  background-color: var(--tuatara-dark);
  color: var(--tuatara-lighter);
}
::selection {
  background-color: var(--persian-red);
  color: var(--tuatara-dark);
}
a  {
  color:var(--persian-red-light);
}
</style>
