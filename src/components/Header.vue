<template>
  <header class="header">
    <router-link to="/" id="logo-link"
      ><img id="logo" loading="lazy" width="80" src="/logo.png" alt="IOGKF Logo"
    /></router-link>

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/tester">Quiz</router-link>
    <a href="https://wiki.uoa-karate.club/" target="_blank" rel="noopener noreferrer"
      >Wiki</a
    >
    <router-link to="/useful-links">Useful&nbsp;Links</router-link>
    <!-- <a
        href="https://en.wikipedia.org/wiki/G%C5%8Dj%C5%AB-ry%C5%AB"
        target="_blank"
        class="external-link col-5"
      >About&nbsp;Goju&nbsp;Ryu</a> -->
    <a
      href="https://www.facebook.com/UoAKarate/"
      target="_blank"
      rel="noopener noreferrer"
      ><img loading="lazy" src="/facebook.svg" alt="[FB]" class="social" width="24"
    /></a>

    <a
      href="https://www.instagram.com/uoa_karate/"
      target="_blank"
      rel="noopener noreferrer"
      ><img loading="lazy" src="/instagram.svg" alt="[IG]" class="social" width="24"
    /></a>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
.external-link:after {
  content: "";
  background-image: linear-gradient(transparent, transparent),
    url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E");
}

.header {
  text-align: left;
  align-items: flex-end;
  margin: 20px 0 40px;
  display: flex;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.header > * {
  margin: 0 5px;
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
  height: 78.8px;

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

@media (max-width: 574px) {
  #logo-link {
    width: 100%;
    text-align: center;
  }
}
</style>
