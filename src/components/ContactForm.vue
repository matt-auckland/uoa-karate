<template>
  <div class="hello">
    <form
      method="POST"
      action="https://formspree.io/au.gojuryu.karate@gmail.com"
    >
      <h1>Contact Us</h1>
      <input
        name="email"
        placeholder="Your email"
        type="email"
        required="true"
        class="email"
      >
      <input
        name="name"
        placeholder="Your name"
        type="name"
        required="true"
        class="name"
      >
      <textarea
        name="message"
        placeholder="Your message"
        spellcheck="true"
        maxlength="1500"
        required="true"
        class="message"
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    msg: String
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto repeat(2, 40px) 1fr 40px;
  grid-row-gap: 20px;
  grid-template-areas:
    "header header header"
    "email email email"
    "name name name"
    "message message message"
    "button . .";
  width: 100%;
  height: 400px;
}

@media (max-width: 981px) {
  form {
    grid-template-areas:
      "header header header"
      "email email email"
      "name name name"
      "message message message"
      ". button .";
  }
}

input,
textarea {
  display: block;
  max-width: calc(100% - 12px);
  width: 100%;
  border-radius: 7px;
  padding: 0 0 0 10px;
  border: 0px;
  outline: none;
  border: 2px solid var(--tuatara-light);
  background: none;
  color: var(--base-font-color);
  font-size: 16px;
  font-family: inherit;
}

textarea {
  resize: none;
  padding-top: 5px;
}

::placeholder {
  color: var(--base-font-color);
  opacity: initial;
}

h1 {
  margin: 0;
  grid-area: header;
}

.email {
  grid-area: email;
}
.name {
  grid-area: name;
}
.message {
  grid-area: message;
}
button {
  grid-area: button;
  border-radius: 15px;
  border: 1px solid var(--persian-red-dark);
  color: var(--persian-red);
  font-size: 14px;
  background: none;
  transition: all 200ms ease-out;
  width: 240px;
  margin: 0 auto;
}

button:hover {
  border: 1px solid var(--persian-red);
  color: var(--persian-red-light);
}
</style>
