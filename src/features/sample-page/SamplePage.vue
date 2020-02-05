
<template>
  <div class="events-container">
    <div class="person">
      <div
        class="picture"
        style="background-image: url(/img/sensei_yin_2.png);"
        alt=""
      ></div>
      <div class="details">
        <h2 class="name">Sensei Yin</h2>
        <h3 class="title">Third Degree Blackbelt</h3>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolor deserunt architecto quo adipisci laudantium,
          laborum beatae porro culpa maxime veritatis cum minima
          consectetur consequatur qui illum sapiente reiciendis expedita nisi.</p>
      </div>
    </div>
    <div class="person">
      <div
        class="picture top"
        style="background-image: url(/img/sensei_tom.jpg);"
        alt=""
      ></div>
      <div class="details">
        <h2 class="name">Sensei Tom</h2>
        <h3 class="title">Forth Degree Blackbelt</h3>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolor deserunt architecto quo adipisci laudantium,
          laborum beatae porro culpa maxime veritatis cum minima
          consectetur consequatur qui illum sapiente reiciendis expedita nisi.</p>
      </div>
    </div>
    <div class="person">
      <div
        class="picture top"
        style="background-image: url(/img/sensei_ewan.jpg);"
        alt=""
      ></div>
      <div class="details">
        <h2 class="name">Sensei Ewan</h2>
        <h3 class="title">Fourth Degree Blackbelt</h3>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolor deserunt architecto quo adipisci laudantium,
          laborum beatae porro culpa maxime veritatis cum minima
          consectetur consequatur qui illum sapiente reiciendis expedita nisi.</p>
      </div>
    </div>
    <div class="person">
      <div
        class="picture"
        style="background-image: url(/img/sensei_richard.png);"
        alt=""
      ></div>
      <div class="details">
        <h2 class="name">Sensei Richard</h2>
        <h3 class="title">Third Degree Blackbelt</h3>
        <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolor deserunt architecto quo adipisci laudantium,
          laborum beatae porro culpa maxime veritatis cum minima
          consectetur consequatur qui illum sapiente reiciendis expedita nisi.</p>
      </div>
    </div>
  </div>
</template>

<script>
import eventList from "@/assets/events.json";

export default {
  name: "SampleView"
};
</script>

<style scoped>
.person {
  border: 1px red solid;
  max-width: 500px;
  flex: 1 1 300px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;
}

.person .name {
  margin-top: 8px;
  margin-bottom: 0px;
}

.person .title {
  margin-top: 3px;
  margin-bottom: 5px;
}

.person .desc {
  margin-top: 8px;
  margin-bottom: 0px;
}

.person .picture {
  min-height: 250px;
  max-width: 100%;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
}
.person .picture.top {
  background-position-y: top;
}

.person .details {
  padding: 0 20px 20px 20px;
}

.events-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  min-height: 100vh;
  max-width: 1010px;
  margin: 0 auto;
  text-align: justify;
}

.events-container > * {
  margin-bottom: 32px;
}
</style>
