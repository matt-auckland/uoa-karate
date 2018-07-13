<template>
  <div class="hello">                                                
    <div id="nav">
      <router-link to="/">(logo)</router-link> |
      <router-link to="/about">About the club</router-link> |
      <router-link to="/goju-ryu">What is Goju Ryu Karate</router-link> |
      <router-link to="/events">Upcoming Events</router-link> |
      <a href="https://uoa-karate.club/wiki">Karate Wiki</a> |
      <a href="https://www.facebook.com/UoAKarate/">[FB]</a> |
      <a href="https://www.instagram.com/uoa_karate/">[IG]</a>  
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
