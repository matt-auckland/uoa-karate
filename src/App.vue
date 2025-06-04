<template>
    <SitewideBanner />
    <SiteHeader />
    <RouterView />
    <footer>
      <QuoteDisplay class="quote-display" />
      <div class="github">
        This site's sourcecode is hosted on
        <a href="https://github.com/matt-auckland/uoa-karate" target="_blank">Github</a>
      </div>
    </footer>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import QuoteDisplay from "@/components/QuoteDisplay.vue";
import SitewideBanner from "@/components/SitewideBanner.vue";
import { RouterView } from "vue-router";

const pageTitle = "UoA Karate Club";
const pageDescription =
  "University of Auckland Karate Club. Find info on training times, locations and more.";

export default {
  name: "App",
  components: {
    SiteHeader,
    QuoteDisplay,
    SitewideBanner,
    RouterView
  },
  head: {
    title: pageTitle,
    meta: [
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uoa-karate.club" },
      { property: "og:image", content: "/group-photo.jpg" },
    ],
  },
};
</script>

<style>
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

::selection {
  background-color: var(--persian-red);
  color: var(--tuatara-dark);
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: left;
  background-color: #070707;
  color: var(--base-font-color);
  padding: 0 5vw;
  margin: 0;
}

a {
  color: var(--persian-red-light);
  text-decoration: none;
}

a:hover {
  color: var(--persian-red);
  text-decoration: underline;
}

.quote-display {
  margin-top: 50px;
}

button {
  border: 3px solid var(--tuatara-dark);
  border-radius: 30px;
  padding: 8px 12px;
  font-size: 16px;
  text-transform: uppercase;
  background: #f0f0f0;
}

button:hover {
  background: #ccc;
}

button:disabled:hover {
  background: #f0f0f0;
}

button.active {
  text-decoration: underline;
}

.github {
  margin: 0 auto 20px auto;
  text-align: center;
}

.bold {
  font-weight: bold;
}

.center-txt {
  text-align: center;
}
</style>
