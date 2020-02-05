<template>
  <div class="about-container">
    <hero-image
      class="hero"
      source="img/group_saifa.JPG"
      heading="About the Club"
      :paragraph="
        `The Auckland University Goju Ryu Karate Club welcomes both university students and non-students, with any level of experience, and with any martial arts background.`
      "
    ></hero-image>
    <div class="imageOne">
      <app-image
        source="img/two_sensei.jpg"
        caption="Sensei Ewan Tempero and Sensei Tom Davies"
      >
      </app-image>
    </div>

    <div class="paraOne">
      <h2>About the Club</h2>
      <p>
        {{
          `Founded in 2003 by Sensei Ewan Tempero (4th degree Black Belt) and Sensei Tom Davies (4th degree Black Belt), The University of Auckland Goju Ryu Karate Club has been running for over ${new Date().getFullYear() -
            2003} years.`
        }}
      </p>
      <p>
        The club is affiliated with the
        <a href="https://iogkf.com" target="_blank" rel="noopener noreferrer">
          International Okinawan Goju Ryu Federation (IOGKF)</a
        >, an international body dedicated to preserving the art of the Okinawan
        Goju-Ryu Karate, as well as the New Zealand branch organization,
        <a
          href="https://karate.org.nz"
          target="_blank"
          rel="noopener noreferrer"
          >IOGKFNZ</a
        >. This gives club members access to expert intructors and the ability
        to attend training camps/seminars around the country and the world.
      </p>
    </div>
    <div class="paraTwo">
      <h2>Club Events</h2>
      <p>
        We try to create a warm and welcoming atmosphere at the club and as part
        of this we regularly hold all kinds of social events. Some examples: Our
        own 'Karate Camp', weekend training seminars, dinner/lunches after
        training, group movie viewings, trainings at the beach, and other group
        outings around Auckland. We also participate in tournaments multiple
        times a year and attend training camps around New Zealand (and
        occassionally overseas!).
      </p>
    </div>
    <div class="club-event-sect">
      <div class="swipe-container">
        <app-image
          v-for="i in eventImages"
          :key="i.source"
          class="event-image"
          :source="i.source"
          :caption="i.caption"
        />
      </div>
    </div>

    <div class="instructors-sect">
      <h2>Meet the Instructors</h2>
      <div>
        <div class="swipe-container">
          <div v-for="i in instructors" :key="i.name">
            <InstructorCard
              :name="i.name"
              :rank="i.rank"
              :imgSrc="i.imgSrc"
              :desc="i.desc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
import ClubMembers from "@/assets/club-members.json";
import InstructorCard from "@/components/instructor-card.vue";

export default {
  components: {
    Person,
    InstructorCard
  },
  data() {
    return {
      ClubMembers: ClubMembers,
      instructors: [
        {
          name: "Sensei Ewan Tempero",
          rank: 4,
          desc:
            "Sensei Ewan has over 30 years of Goju Ryu experience. He is the chief instructor of the club, which he co-founded with Sensei Tom in 2003.",
          imgSrc: "/img/sensei_ewan.jpg"
        },
        {
          name: "Sensei Tom Davies",
          rank: 4,
          desc:
            "Sensei Tom has over 20 years experience in the martial arts, with black belts in Goju Ryu and several other Karate styles. He co-founded the club with Sensei Ewan.",
          imgSrc: "/img/sensei_tom.jpg"
        },
        {
          name: "Sensei Greg Shanahan",
          rank: 3,
          desc: "Sensei Greg has over 25 years experience in Goju Ryu.",
          imgSrc: "/img/sensei_greg.jpg"
        },
        {
          name: "Sensei Yin Tung Ho",
          rank: 3,
          desc: "Sensei Yin has over 15 years experience in Goju Ryu.",
          imgSrc: "/img/sensei_yin_2.png"
        },
        {
          name: "Sensei Richard Ly",
          rank: 3,
          desc: "Sensei Richard has over 10 years of Goju Ryu experience.",
          imgSrc: "/img/sensei_richard.png"
        }
      ],
      eventImages: [
        {
          source: "img/gishiki_group.jpg",
          caption:
            "Club members with their fellow New ZEalanders at a international training camp."
        },
        {
          source: "img/camp_2019.png",
          caption: "Fun at the 2019 Club Karate Camp"
        },
        {
          source: "img/tournament.jpg",
          caption: "Smiles after placing at the Bi-Annual Pukekohe Tournament"
        }
      ]
    };
  }
};
</script>

<style scoped>
.hero {
  grid-area: hero;
}
.imageOne {
  grid-area: imageOne;
}
.imageTwo {
  grid-area: imageTwo;
}
.imageThree {
  grid-area: imageThree;
}
.paraOne {
  grid-area: paraOne;
}
.paraTwo {
  grid-area: paraTwo;
}
.imageThree {
  grid-area: imageThree;
}

.instructors-sect {
  width: 100%;
  grid-area: instructors;
}

.club-event-sect {
  max-width: 600px;
  grid-area: events;
  overflow: hidden;
}

.swipe-container {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
}

.swipe-container > * {
  display: inline-block;
}

.event-image {
  margin: 0 10px;
  white-space: normal;
}

.event-image:first-of-type {
  margin-left: 0;
}

.event-image:last-of-type {
  margin-right: 0;
}

.about-container {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "hero hero"
    "imageOne paraOne"
    "paraTwo events"
    "instructors instructors";
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  grid-gap: 15px;
  justify-content: center;
  padding: 0 15px;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 800px) {
  .about-container {
    grid-template-areas:
      "hero hero"
      "imageOne imageOne"
      "paraOne paraOne"
      "paraTwo paraTwo"
      "events events"
      "instructors instructors";
  }
}

p {
  padding: 0 10px;

  max-width: 600px;
  min-width: 300px;
}

.header,
.people-container {
  grid-column-start: 1;
  grid-column-end: -1;
  width: 100%;
}

.header h1 {
  text-align: center;
  margin: 20px 0 0 0;
}

.person-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.flex-center {
  display: flex;
  justify-content: center;
}
</style>
