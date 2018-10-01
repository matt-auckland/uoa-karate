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
:root {
  --tuatara: #39393A;
  --tuatara-dark: #2E2E2F;
  --tuatara-light: #4A4A4B;
  --tuatara-lighter :#606062;
  --persian-red: #DB3536;
  --persian-red-dark: #C41B1C;
  --persian-red-darker: #A90708;
  --persian-red-light: #F55354;
  --base-font-color: #aaa;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: left;
  color: var(--base-font-color);
}

@media (max-width: 500px) {
  #app, body {
    font-size: 14px;
  }
}

@media (max-width: 350px) {
  #app, body {
    font-size: 12px;
  }
}

body {
  background-color: var(--tuatara-dark);
  color: var(--base-font-color);
}

::selection {
  background-color: var(--persian-red);
  color: var(--tuatara-dark);
}

a  {
  color:var(--persian-red-light);
}
</style>
