<template>
  <header class="header">
    <router-link to="/" id="logo-link">
      <img id="logo" loading="lazy" width="80" src="/logo.png" alt="IOGKF Logo" />
    </router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/training">Training Schedule</router-link> -->
      <router-link to="/events">Events</router-link>
      <router-link to="/auckland-north">Auckland North</router-link>
      <!-- <router-link to="/tester">Quiz</router-link> -->
      <a href="https://wiki.uoa-karate.club/" target="_blank" rel="noopener noreferrer">Wiki</a>
      <router-link to="/useful-links">Useful&nbsp;Links</router-link>
      <a class="social-media" href="https://www.facebook.com/UoAKarate/" target="_blank" rel="noopener noreferrer">
        <img loading="lazy" src="/facebook.svg" alt="[FB]" class="icon" width="24" />
      </a>

      <a class="social-media" href="https://www.instagram.com/uoa_karate/" target="_blank" rel="noopener noreferrer">
        <img loading="lazy" src="/instagram.svg" alt="[IG]" class="icon" width="24" />
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Site-Header",
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
  margin: 20px 0 40px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 1rem 2rem;
}

header nav {
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem 1rem;
}

.header nav> :not(.social-media) {
  border: 1px solid var(--persian-red);
  border-radius: 0 0 24px 0;
  padding: 0 8px 8px;
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

.icon {
  padding-inline: 2px;
  height: 32px;
  vertical-align: middle;
  filter: saturate(70%);
  border: 1px solid transparent;
  border-radius: 5px;
}

.icon:hover {
  border: 1px solid var(--persian-red);
}

@media (max-width: 574px) {
  #logo-link {
    width: 100%;
    text-align: center;
  }
}
</style>
