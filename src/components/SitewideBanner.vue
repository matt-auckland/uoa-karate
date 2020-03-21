<template>
  <div
    v-if="bannerText"
    id="sitewide-banner"
  >
    <div id="banner-text">
      {{bannerText}}
    </div>
  </div>
</template>


<script>
import config from "@/assets/config.json";

export default {
  name: "SitewideBanner",
  data() {
    return {
      bannerText: config.bannerText.text
    };
  }
};
</script>

<style>
#sitewide-banner {
  position: sticky;
  text-align: center;
  background: var(--tuatara);
  color: var(--persian-red);
  width: 100vw;
  margin: 0 -5vw;
  z-index: 1;
  top: 0;
  left: 0;
}
#banner-text {
  padding: 10px 5vw;
}
</style>
