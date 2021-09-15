<template>
<div class="panel panel-default">
<div class="panel-heading">
			<strong> All Resources</strong></div>
				 <div class="row">
							<div class="search-wrapper panel-heading col-sm-12">
									<input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
						 </div>
				 </div>
		 <div class="table-responsive">
				 <table v-if="resources.length" class="table">
						 <thead>
								 <tr>
									 <th>City</th>
									 <th>Capital</th>
									 <th>Continent</th>
									 <th>Currency</th>
									 <th>Languages</th>
									 <th>Flag</th>
								 </tr>
						 </thead>
						 <tbody>
								 <tr v-for="item in resultQuery">
									 <td>{{item.cityName}}</td>
									 <td>{{item.capitalName}}</td>
									 <td>{{item.continentName}}</td>
									 <td>{{item.currency}}</td>
									 <td v-for="lang in item.languages">
										 {{lang.sName}}
									 </td>
									 <td><img v-bind:src="item.flag" alt=""></td>
								 </tr>
						 </tbody>
				 </table>
		 </div>
</div>
</template>

<script>



export default {
components: {
},
data () {
  return {
  	searchQuery: null,
	  resources: [],
  }
},
	computed: {
		resultQuery(){
			if(this.searchQuery){
				return this.resources.filter((item)=>{
					return this.searchQuery.toLowerCase().split(' ').every(v => item.cityName.toLowerCase().includes(v)) ||
							this.searchQuery.toLowerCase().split(' ').every(v => item.capitalName.toLowerCase().includes(v))
				})
			}else{
				return this.resources;
			}
		}
	},
	created() {
		this.getBasicCountryInfo();
	},
	methods: {
		getBasicCountryInfo() {
			axios.get('/country').then(response => (
					this.resources = response.data
			))
		},
	}
}
</script>
