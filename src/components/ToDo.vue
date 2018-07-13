<template>
  <div class="hello">
    <h2>To Do:</h2>
    <ul>
      <li>Pick a colour scheme</li>
      <ul>
        <li><a href="https://pigment.shapefactory.co/?a=DB3536&b=39393A">Colour scheme 1</a></li>
        <li><a href="https://pigment.shapefactory.co/?a=F6100E&b=3E3B38">Colour scheme 2</a></li>
      </ul>
      <li>implement colour scheme</li>
      <li>Complete home page</li>
      <li>Complete events page</li>
      <li>Complete karate page</li>
      <li>add page for instructors and exec</li>
      <li>Add icons for FB and IG</li>
      <li>Add a logo</li>
    </ul>  
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
