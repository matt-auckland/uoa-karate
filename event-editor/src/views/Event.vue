<template>
  <div class="about">
    <form
      id="editor"
      action=""
    >
      <label for="title">Title</label>
      <input
        type="text"
        name="title"
        v-model="form.title"
      >
      <label for="offsitelink">Offsite Link</label>
      <input
        type="text"
        name="offsitelink"
        v-model="form.offsiteLink"
      >
      <label for="signup">Sign Up Url</label>
      <input
        type="text"
        name="signup"
        v-model="form.signUpURL"
      >
      <label for="location">Location</label>
      <input
        type="text"
        name="location"
        v-model="form.location"
      >
      <div class="dates">
        <div class="date">
          <label for="startdate">Start Date</label>
          <input
            type="date"
            name="startdate"
            v-model="form.startDate"
            id=""
          >
        </div>
        <div class="date">
          <label for="endDate">End Date</label>
          <input
            type="date"
            name="enddate"
            v-model="form.enddate"
            id=""
          >
        </div>
      </div>
      <label for="description">Description</label>
      <textarea
        name="description"
        v-model="form.description"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div class="grid-row">
        <button
          class="action"
          @click="copyDesc"
        >Clone Description ⬇️</button>
        <button
          class="action"
          @click="copyExDesc"
        >Clone Extended Description ⬆️</button>
      </div>
      <label for="extendeddescription">Extended Description</label>
      <textarea
        name="extendeddescription"
        v-model="form.extendedDescription"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div class="grid-row">
        <button
          class="action"
          @click="saveEvent"
        >Generate JSON</button>
        <router-link
          class="action"
          to="/"
        >Cancel</router-link>
      </div>
    </form>
    <a
      id="file"
      class="action"
    >Download JSON</a>
  </div>
</template>

<script>
import eventList from "../../../src/assets/events.json";

export default {
  mounted() {
    const id = this.$route.params.id;
    if (id === "new") {
      this.generateEventId();
    } else {
      this.loadEvent(id);
    }
  },
  data() {
    return {
      event: null,
      form: {
        id: null,
        title: null,
        date: null,
        startDate: null,
        endDate: null,
        location: null,
        description: null,
        offsiteLink: null,
        signUpURL: null,
        extendedDescription: null
      },
      today: (function() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        return `${year}-${month}-${day}`;
      })()
    };
  },
  computed: {},
  methods: {
    copyDesc(ev) {
      ev.preventDefault();
      this.form.extendedDescription = this.form.description;
    },
    copyExDesc(ev) {
      ev.preventDefault();
      this.form.description = this.form.extendedDescription;
    },
    generateEventId() {
      let id = Date.now();
      while (eventList.find(ev => ev.id == id)) {
        id++;
      }
      this.$router.push(`/event/${id}`);
    },
    loadEvent(id) {
      console.log(eventList);
      this.event = eventList.find(ev => ev.id == id);
      if (this.event) this.fillForm();
    },
    fillForm() {
      this.form.id = this.event.id;
      this.form.title = this.event.title;
      this.form.date = this.event.date;
      this.form.startDate = this.event.startDate;
      this.form.endDate = this.event.endDate;
      this.form.location = this.event.location;
      this.form.description = this.event.description;
      this.form.offsiteLink = this.event.offsiteLink;
      this.form.signUpURL = this.event.signUpURL;
      this.form.extendedDescription = this.event.extendedDescription;
    },
    saveEvent(ev) {
      ev.preventDefault();
      const newList = eventList.filter(ev => ev.id != this.form.id);
      newList.push(this.form);
      console.log(newList);
      this.downloadJSON(newList);
    },
    downloadJSON(events) {
      var blob = new Blob([JSON.stringify(events)], {
        type: "application/json"
      });
      var a = document.getElementById("file");

      a.href = URL.createObjectURL(blob);
      a.download = "events.json";
    }
  }
};
</script>

<style>
#editor {
  display: flex;
  flex-direction: column;
}

.grid-row {
  margin: 20px 0;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.dates {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
}

.date {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 18px;
  margin: 16px 0 5px 0;
}

input {
  border-radius: 3px;
  border: none;
  padding: 8px;
  font-size: 15px;
}

.about {
  margin-bottom: 250px;
}
</style>