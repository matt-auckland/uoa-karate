<template>
  <div class="header">                                                
    <div id="nav">
      <router-link to="/"><img src="/logo.png" alt="IOGKF Logo"></router-link> |
      <router-link to="/about">About the club</router-link> |
      <router-link to="/goju-ryu">About&nbsp;Goju&nbsp;Ryu&nbsp;Karate</router-link> |
      <router-link to="/events">Club&nbsp;Events</router-link> |
      <a href="http://uoa-karate.club/wiki" target="_blank" rel="noopener noreferrer">Karate&nbsp;Wiki</a> |
      <a href="https://www.facebook.com/UoAKarate/" target="_blank" rel="noopener noreferrer">[FB]</a> |
      <a href="https://www.instagram.com/uoa_karate/" target="_blank" rel="noopener noreferrer">[IG]</a>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>


<style scoped>
.header {
  text-align: center;
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

a:hover {
  font-size: 18px;
}

img {
  width: 45px;
  vertical-align: middle;
  filter: saturate(30%);
  transition: all 200ms ease-out;
}

img:hover {
  filter: saturate(100%);
}
</style>
