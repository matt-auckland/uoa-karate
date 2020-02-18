<template>
  <div class="member">
    <div
      class="picture top"
      :style="style"
      alt=""
    ></div>
    <div class="details">
      <h2 class="name">{{ name }}</h2>
      <h3 class="title">{{ grade }}</h3>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    danGrade: {
      default: false
    },
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
    grade() {
      return this.danGrade
        ? `${this.numToStr(this.rank)} Degree Blackbelt`
        : `${this.numToStr(this.rank)} Kyu`;
    },
    style() {
      return `background-image: url(${this.imgSrc});`;
    }
  },
  methods: {
    numToStr(num) {
      switch (num) {
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
        case 6:
          return "Sixth";
        case 7:
          return "Seventh";
        case 8:
          return "Eighth";
        case 9:
          return "Ninth";
        case 10:
          return "Tenth";
      }
    }
  }
};
</script>

<style>
.member {
  border: 1px var(--tuatara-dark) solid;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;
  width: 350px;
  height: 386px;
  white-space: normal;
}

.member .name {
  margin-top: 8px;
  margin-bottom: 0px;
}

.member .title {
  margin-top: 3px;
  margin-bottom: 5px;
}

.member .desc {
  margin-top: 8px;
  margin-bottom: 0px;
}

.member .picture {
  min-height: 200px;
  max-width: 100%;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
}
.member .picture.top {
  background-position-y: top;
}

.member .details {
  padding: 0 20px 20px 20px;
}
</style>
