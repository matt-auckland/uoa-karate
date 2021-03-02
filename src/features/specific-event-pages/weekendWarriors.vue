<template>
  <div class="wrapper">
    <img
      src=""
      alt=""
      id="event-image"

      loading="lazy"
    >
    <h1>Weekend Warriors 2020</h1>
    <p>A 2-day weekend training seminar on the Saturday the 18th and Sunday the 19th of April. Hosted at <a href="http://www.karateremuera.com/">Karate Remuera's</a> well equipped and generously sized dojo, this event promises to be a great one.
      <p>
        The idea is simple: to get you exposed to knowledge and experience that you wouldn't normally have access to during regular trainings.
      </p>
      <p>
        For this purpose we will be have a variety of instructors, click for more info.
        <ul>
          <li
            class="guest-instructor"
            @click="viewInstructor($event, 'sennen')"
          >Sensei Harry Sennen, 5th Dan Goju Ryu</li>
          <li
            class="guest-instructor"
            @click="viewInstructor($event, 'murray')"
          >Sensei Murray Simpson, 5th Dan Goju Ryu</li>
          <li
            class="guest-instructor"
            @click="viewInstructor($event, 'victor')"
          >Victor Ng, owner of The Hawk's Nest</li>
          <li
            class="guest-instructor"
            @click="viewInstructor($event, 'tom')"
          >Sensei Tom Davies, Fourth Dan Goju Ryu</li>
        </ul>
      </p>
      <button>Register Now!&nbsp;
        <span class="icon-wrap">
          <span class="fist">👊</span><span class="hand">👋</span>
        </span>
      </button>
      <h2>The boring stuff</h2>
      <p>Fees are set at $30 per person</p>
      <p>Dates: April 18th-19th, 10am-3pm</p>
      <p>The event location is <a
          href="https://g.page/karateremuera?share"
          target="_blank"
        >6 Papahia Street, Parnell</a> </p>
      <p>Training starts at 10am and runs till 3pm. There will be regular water breaks and a break for lunch.</p>
      <p>Registration closes on April __th at Midnight</p>
      <p></p>

      <div
        id="modal"
        :style="{
          top: `${modalYPos}px`, 
        }"
        v-if="selectedInstructor"
      >
        <div class="modal-content">
          <h2>
            {{selectedInstructor.name}}
          </h2>
          <p>
            {{selectedInstructor.desc}}
          </p>
          <p v-if="selectedInstructor.externalLink">Learn more about {{selectedInstructor.firstName}}

            <a :href="selectedInstructor.externalLink">
              here
            </a>
          </p>
          <button @click="clearInstructor">Close</button>
        </div>

      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hover: false,
      selectedInstructor: null,
      modalYPos: 0,
      modalXPos: 0,
      instructors: {
        sennen: {
          name: "Sensei Harry Sennen",
          firstName: "Sensei Harry",
          desc:
            "Sensei Tom is one of ur clubs best and brightest he has a lot of experience with da streetz and he will teach us how to give an ass whooping",
          externalLink:
            "https://www.facebook.com/pg/PakurangaGojuRyuKarateDojo/"
        },
        victor: {
          name: "Victor Ng",
          firstName: "Victor",
          desc:
            "Victor is the owner of The Hawks Nest, and teaches Muay Thai there. He's extremely passionite about Muay Thai and has a wealth of knowledge to share with us.",
          externalLink: "https://hawksnestgym.co.nz/meet-the-team/"
        },
        tom: {
          name: "Sensei Tom Davies",
          firstName: "Sensei Tom",
          desc:
            "Sensei Tom is one of our clubs best and brightest he has a lot of experience with da streetz and he will teach you how to give an ass whooping",
          externalLink: null
        },
        murray: {
          name: "Sensei Murray Simpson",
          firstName: "Sensei Murray",
          desc:
            "Sensei Tom is one of ur clubs best and brightest he has a lot of experience with da streetz and he will teach us how to give an ass whooping",
          externalLink: "http://www.karateremuera.com/OGKR_Instructors.html"
        }
      }
    };
  },
  created() {
    const ctrl = this;
    this.modalXPos = this.getXPos();
    window.addEventListener("resize", function() {
      ctrl.modalXPos = ctrl.getXPos();
    });
  },
  methods: {
    getXPos() {
      // const position = (- 500) / 2
      // if (screen.width < 550) return undefined;

      return screen.width / 2 - 250;
    },
    viewInstructor(event, name) {
      this.modalYPos = window.scrollY + 75;
      this.selectedInstructor = this.instructors[name];
    },
    clearInstructor() {
      this.selectedInstructor = null;
    }
  }
};
</script>

<style scoped>
.guest-instructor {
  padding: 5px 0;
  margin: 8px 0;
  cursor: pointer;
  text-decoration: underline;
  transition: 200ms;
}

.guest-instructor:hover {
  transform: translateX(10px);
}

#event-image {
  background-color: grey;
  /* height: 600px; */
  max-width: 400px;
}
.wrapper {
  margin: auto;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
}

button {
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid var(--persian-red-dark);
  color: var(--persian-red);
  font-size: 20px;
  background: none;
  transition: all 200ms ease-out;
  height: 47px;
}

button:hover,
button:active {
  font-size: 22px;
}

.fist,
.hand {
  position: absolute;
  left: 0;
}

.icon-wrap {
  position: relative;
}

.fist {
  visibility: hidden;
}
button:hover .hand,
button:active .hand {
  visibility: hidden;
}
button:hover .fist,
button:active .fist {
  visibility: initial;
}

#modal {
  min-height: 150px;
  width: 500px;
  max-width: 80vw;
  border-radius: 30px;
  background: #070707;
  border: 1px solid var(--tuatara);
  position: absolute;
  padding: 0 16px 16px 16px;
  left: 0;
  right: 0;
  margin: auto;
}
.modal-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  list-style-type: "🥋 ";
}
</style>