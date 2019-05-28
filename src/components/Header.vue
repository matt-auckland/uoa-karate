<template>
  <div class="header">
    <router-link to="/"><img
        id="logo"
        src="/logo.png"
        alt="IOGKF Logo"
      ></router-link>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About the club</router-link> |
      <a
        href="https://en.wikipedia.org/wiki/G%C5%8Dj%C5%AB-ry%C5%AB"
        target="_blank"
      >About&nbsp;Goju&nbsp;Ryu&nbsp;Karate</a> |
      <router-link to="/events">Club&nbsp;Events</router-link> |
      <router-link to="/tester">Knowledge&nbsp;Tester</router-link> |
      <a
        href="https://wiki.uoa-karate.club/"
        target="_blank"
        rel="noopener noreferrer"
      >Karate&nbsp;Wiki</a> |
      <router-link to="/useful-links">Useful&nbsp;Links</router-link> |
      <a
        href="https://www.facebook.com/UoAKarate/"
        target="_blank"
        rel="noopener noreferrer"
      ><img
          src="/facebook.svg"
          alt="[FB]"
          class="social"
        ></a> |
      <a
        href="https://www.instagram.com/uoa_karate/"
        target="_blank"
        rel="noopener noreferrer"
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
.header {
  text-align: center;
  padding: 0 5vw;
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
  width: 150px;
  margin: 20px 0;
  vertical-align: middle;
  filter: saturate(70%);
  transition: all 200ms ease-out;
}
#logo:hover {
  width: 160px;
  margin: 15px 0;
  filter: saturate(100%);
}

.social:hover {
  filter: saturate(100%);
}

.social {
  width: 32px;
  transition: all 200ms ease-out;
  vertical-align: middle;
  filter: saturate(70%);
}

@media (max-width: 500px) {
  .social {
    width: calc(32px * 0.875);
  }
}

@media (max-width: 350px) {
  .social {
    width: calc(32px * 0.75);
  }
}
</style>
