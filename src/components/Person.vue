<template>
  <div class="person">
    <img :src="person.pic" />
    <div class="name">{{person.name}}</div>
    <div class="position">{{person.position}}</div>
    <div class="bio">{{person.bio}}</div>

  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 10px;
  text-align: center;
}

img {
  width: 80px;
  height: 80px;
  border-radius: 60px;
  background-color: #fff;
  margin-bottom: 10px;
}

.name {
  color: var(--tuatara-lighter);
  font-size: 20px;
  margin-bottom: 5px;
}

.position {
  color: var(--tuatara-light);
  font-size: 18px;
  margin-bottom: 5px;
}

.bio {
  color: var(--tuatara-light);
  font-size: 15px;
  margin-bottom: 5px;
}
</style>
