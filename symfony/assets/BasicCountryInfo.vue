<template>
    <div>
      <label class="typo__label">Groups</label>
          <multiselect
          v-model="value"
          :options="options"
          :multiple="true"
          group-values="libs"
          group-label="title"
          :group-select="true"
          placeholder="Type to search"
          track-by="name"
          label="name"
          :preselect-first="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          >
          <span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
      <pre class="language-json"><code>{{ value  }}</code></pre>
      <button @click="exportPDF">Export PDF</button>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
components: {
  Multiselect
},
data () {
  return {
    options: [],
    basicCountryInfoService: [],
  }
},
created() {
  this.getDoc();
  this.checData();
},
methods: {
  getDoc() {
    axios.get('/country').then((response) => {
     this.options = response.data;
      console.log(options);
    }).catch((err) => {})
  },
checData()
{
},
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
