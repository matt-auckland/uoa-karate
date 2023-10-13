<template>
  <div>
    <h1>A collection of useful forms and websites</h1>
    <div class="container">
      <ul>
        <h2>Forms</h2>

        <li>
          <a
            href="https://docs.google.com/forms/d/1bPMtgUDXCPMpEReijFP0tMrvCISVmKgATd3AHZP2PDY/viewform?edit_requested=true"
            target="_blank"
          >Beginner's Training Sign Up Sheet (Semester 2 2023)</a>
      </li>
      <li>
          <a
            href="https://goo.gl/forms/sTq5WHgxXTOSmMx42"
            target="_blank"
          >Club Sign Up Sheet</a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/1DgZ-10ExX6ZXGagtK34vMOSmHut1G8t4-RwNVmbkffE/viewform?edit_requested=true"
            target="_blank"
          >Club Reimbursement Form (2023)</a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHBeXrR8Q2QspvBtOa-f1KHbievYbtwaunhlxusSXC5lGpVg/viewform"
            target="_blank"
          >Injury Record Submission Form (2023)</a>
        </li>
      </ul>
      <ul>
        <h2>Tools and Info</h2>
        <li>
          <router-link :to="'/grading-info/'">
            What do I need to know for Grading?
          </router-link>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLjmMUBeoZL9eM-TUV8YFDd0w0IIfQ2lLc"
            target="_blank"
          >Club Video Playlist</a>
        </li>

        <li>
          <a
            href="https://drive.google.com/file/d/1ej27e0nkSEZgCooaJor7WsK9nIFzJx7Y/view?usp=sharing"
            target="_blank"
          >Health and Safety Guidelines</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/open?id=0B-VdjkUccnFtQUIxM0tJUnNvSzg"
            target="_blank"
          >Beginner's Guide to Goju Ryu</a>
        </li>
      </ul>
      <ul>
        <h2>Other Links</h2>
        <li>
          <a
            href="http://karate.org.nz/"
            target="_blank"
          >Website for IOGKF's New Zealand Branch</a>
        </li>
        <li>
          <a
            href="http://karate.org.nz/"
            target="_blank"
          >Website for IOGKF</a>
        </li>
        <li>
          <a
            href="https://auckland.campuslabs.com/engage/organization/goju-ryu-karate-club"
            target="_blank"
          >UoA Karate Club on Engage</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkDirectory",
  components: {}
};
</script>

<style scoped>
.container {
  text-align: left;
  display: grid;
  align-items: flex-start;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.container p {
  max-width: 600px;
  align-self: flex-start;
}

h1 {
  text-align: center;
}
</style>
