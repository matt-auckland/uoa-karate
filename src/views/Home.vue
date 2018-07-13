<template>
  <div class="home">
    
    <HelloWorld msg="Practise Daily"/>

    <ToDo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ToDo
  }
}
</script>
