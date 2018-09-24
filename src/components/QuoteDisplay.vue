
<template>
  <div class="quote-container">
    <div class="quote-text">
      "{{quote.text}}" - {{quote.authour}}
    </div>
    <div v-if="quote.textUntranslated" class="quote-text">
        {{quote.textUntranslated}} - {{quote.authourUntranslated}}
    </div>
  </div>
</template>

<script>
import quoteList from '../assets/quotes.json'


export default {
  name: 'QuoteDisplay',
  components: {
  },
  data: function() {
    return {
      quote:  quoteList[Math.round(quoteList.length * Math.random())]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.quote-container {
  display: flex; 
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.quote-text {
  font-size: 14px;
}

</style>