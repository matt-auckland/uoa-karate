<template>
  <div class="container">
    <div>
      <h1>Goju Ryu</h1>   
      <p>
        Goju Ryu is a form of Karate that originated in Okinawa, a small island south of Japan. 
        It was formalised as a system in the early 1930s (?) by a man called Chojun Miyagi.
        Goju Ryu has 12 kata (fixed forms) in total. For more information see <a href="https://wiki.uoa-karate.club/wiki/Kata">this page</a>.
      </p>
    </div>
    <div>
        <h1>Karate</h1>
        <p>
          Karate is a martial art for self defense originating from Okinawa, a small island south of Japan. It features techniques including: Striking with the hands and feet, grappling and throwing.
          It also features kata (fixed movement patterns with self defence applications), which tend to vary depending on which style of karate you are learning. 
        </p>
    </div>
    <div>
        <h1>More Info</h1>
        <p>
          For more information about Goju-Ryu and Karate in general (including kata, vocabulary, grading requirements, and more), see the <a href="https://wiki.uoa-karate.club">Club's Karate Wiki</a>.
        </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Karate',
  components: {
  }
}
</script>

<style scoped>
  .container {
    text-align: left;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, minmax(300px, 1fr)) ;
  }

  .container p {
    max-width: 600px;
    align-self: flex-start;
  }

  h1 {
    text-align: center;
  }
</style>

