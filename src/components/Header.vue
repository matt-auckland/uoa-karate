<template>
  <div class="header">
    <router-link to="/"><img
        id="logo"
        src="/logo.png"
        alt="IOGKF Logo"
      ></router-link>
    <div id="nav">
      <router-link
        to="/about"
        class="col-2"
      >About</router-link>
      <router-link
        to="/events"
        class="col-2"
      >Events</router-link>
      <router-link
        to="/tester"
        class="col-2"
      >Quiz</router-link>
      <a
        href="https://wiki.uoa-karate.club/"
        target="_blank"
        rel="noopener noreferrer"
        class="col-2"
      >Wiki</a>
      <router-link
        to="/useful-links"
        class="col-4"
      >Useful&nbsp;Links</router-link>
      <!-- <a
        href="https://en.wikipedia.org/wiki/G%C5%8Dj%C5%AB-ry%C5%AB"
        target="_blank"
        class="external-link col-5"
      >About&nbsp;Goju&nbsp;Ryu</a> -->
      <a
        href="https://www.facebook.com/UoAKarate/"
        target="_blank"
        rel="noopener noreferrer"
        class="col-2"
      ><img
          src="/facebook.svg"
          alt="[FB]"
          class="social"
        ></a>
      <a
        href="https://www.instagram.com/uoa_karate/"
        target="_blank"
        rel="noopener noreferrer"
        class="col-2"
      ><img
          src="/instagram.svg"
          alt="[IG]"
          class="social"
        ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>


<style scoped>
.external-link:after {
  content: "";
  background-image: linear-gradient(transparent, transparent),
    url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E");
}

#nav {
  max-width: 500px;
  margin: 30px 0 0 0;
  width: 100%;
  min-width: 320px;
  display: grid;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 20px);
}

#nav > * {
  /* margin: 0 15px; */
}

.header {
  text-align: left;
  align-items: center;
  margin: 20px 0 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
}

.col-1 {
  grid-column: auto / span 1;
}
.col-2 {
  grid-column: auto / span 2;
}

.col-4 {
  grid-column: auto / span 4;
}

.col-5 {
  grid-column: auto / span 5;
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

a {
  transition: font-size 300ms ease-out;
}

#logo {
  width: 80px;
  vertical-align: middle;
  filter: saturate(70%);
  transition: all 200ms ease-out;
}

#logo:hover {
  filter: saturate(90%);
}

.social {
  width: 24px;
  vertical-align: middle;
  margin-bottom: 4px;
  filter: saturate(70%);
  border: 1px solid transparent;
  border-radius: 5px;
}

.social:hover {
  border: 1px solid var(--persian-red);
}
</style>
