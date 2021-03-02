<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> <img
          id="logo"
          alt="UoA Karate logo"
          src="../../public/logo.png"
          loading="lazy"
        ></router-link>

      <h1>👊 Karate Event Editor 📆</h1>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2c3e50;
  color: #dbe9f8;
  margin: 0 auto;
  width: 80vw;
  padding-top: 20px;
}
#nav {
  text-align: center;
}

#logo {
  height: 100px;
}

.action {
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 5px;
  padding: 3px 7px;
  background: rgb(47, 120, 209);
  border-radius: 3px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  border: none;
  text-align: center;
}

.action:hover {
  filter: brightness(1.1);
  cursor: pointer;
}

textarea {
  border-radius: 5px;
  padding: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border: none;
}
</style>
