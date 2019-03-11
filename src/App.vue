<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>


<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
:root {
  --tuatara: #39393a;
  --tuatara-dark: #2e2e2f;
  --tuatara-light: #4a4a4b;
  --tuatara-lighter: #606062;
  --persian-red: #db3536;
  --persian-red-dark: #c41b1c;
  --persian-red-darker: #a90708;
  --persian-red-light: #f55354;
  --base-font-color: #aaa;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: left;
  color: var(--base-font-color);
}

@media (max-width: 699px) {
  h1,
  h2,
  h3,
  h4,
  p {
    text-align: center;
  }
}

@media (max-width: 500px) {
  #app,
  body {
    font-size: 14px;
  }
}

@media (max-width: 350px) {
  #app,
  body {
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

a {
  color: var(--persian-red-light);
}
</style>
