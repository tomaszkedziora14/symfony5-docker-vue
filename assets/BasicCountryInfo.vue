<template>
<div>
  <b-container fluid class="p-0">
     <b-row align-h="between">
       <b-col sm="3">
         <b-form-input v-model="filterContest" type="search" placeholder="Search a contest..."></b-form-input>
       </b-col>
       <b-col sm="4">


       </b-col>
     </b-row>
   </b-container>

   <b-table hover
      :items="items"
      :fields="fields">
      :filter="filterItems"
    </b-table>

 </div>
</template>

<script>



export default {
components: {
},
data () {
  return {
    filterItems: "",
    items: [],
    fields: [
         {
           key: 'cityName',
           sortable: true
         },
         {
           key: 'capitalName',
           sortable: true
         },
         {
           key: 'continentName',
           sortable: true
         },
         {
           key: 'currency',
           sortable: true
         },
         {
           key: 'flag',
           sortable: true
         },
       ],
  }
},
created() {
  this.getBasicCountryInfo();
},
methods: {
  getBasicCountryInfo() {
    axios.get('/country').then(response => (
       this.items = response.data
    ))
  },
  }
}
</script>
