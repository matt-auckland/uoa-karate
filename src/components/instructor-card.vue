<template>
  <div class="instructor">
    <div class="picture top" :style="style" alt=""></div>
    <div class="details">
      <h2 class="name">{{ name }}</h2>
      <h3 class="title">{{ danGrade }} Degree Blackbelt</h3>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rank: {
      default: 1
    },
    name: {
      default: 1
    },
    imgSrc: { default: "" },
    desc: {
      default: 1
    }
  },
  computed: {
    danGrade() {
      switch (this.rank) {
        case 1:
          return "First";
        case 2:
          return "Second";
        case 3:
          return "Third";
        case 4:
          return "Fourth";
        case 5:
          return "Fifth";
      }
    },
    style() {
      return `background-image: url(${this.imgSrc});`;
    }
  }
};
</script>

<style>
.instructor {
  border: 1px var(--tuatara-dark) solid;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;
  width: 350px;
  height: 386px;
  white-space: normal;
}

.instructor .name {
  margin-top: 8px;
  margin-bottom: 0px;
}

.instructor .title {
  margin-top: 3px;
  margin-bottom: 5px;
}

.instructor .desc {
  margin-top: 8px;
  margin-bottom: 0px;
}

.instructor .picture {
  min-height: 200px;
  max-width: 100%;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
}
.instructor .picture.top {
  background-position-y: top;
}

.instructor .details {
  padding: 0 20px 20px 20px;
}
</style>
