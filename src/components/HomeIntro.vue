<template>
  <div class="home-intro-container">
    <h1>Welcome to the University of Auckland Goju Ryu Karate Club</h1>
    <p>
      We are open to members with any level of experience and from any style, both students and non-students alike.
      We take new members all year round so feel free to drop in for a trial at any time.
      Training typically runs all year round, from mid-January till mid-Decemeber.
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeIntro"
};
</script>

<style scoped>
.home-intro-container {
  width: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1,
p {
  max-width: 600px;
  margin: 10px 0;
}
p {
  text-align: justify;
}
</style>
