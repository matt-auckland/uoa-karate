<template>
  <div class="hello">
    <h2>To Do:</h2>
    <ul>
      <li class="done">Pick a colour scheme 🌈</li>
      <li class="done">implement colour scheme 🖌</li>
      <li class="">Complete home page 🏠</li>
      <li class="done">Complete events page 👯‍♂️</li>
      <li class="">Complete karate page 🥋</li>
      <li class="done">Add page for instructors and exec 🧘</li>
      <li class="">Add icons for FB and IG 🤳</li>
      <li class="done">Add a logo 🎨</li>
      <li class="done">Add map 🗺️</li>
      <li class="done">Add contact form 💌</li>
      <li class="">Add gallery 🖼️</li>
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


<style scoped>
.done {
  text-decoration: line-through;
}


</style>
