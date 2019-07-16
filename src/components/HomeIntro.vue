<template>
  <div class="home-intro-container">
    <h1>Welcome to the University of Auckland Goju Ryu Karate Club</h1>
    <p>
      We welcome people with any level of experience and from any martial arts background, both students and non-students alike.
      We have beginner specific training at the beginning of every UoA semseter, but welcome new members all year round.
      Our regular training typically runs from mid-January till mid-December.
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
