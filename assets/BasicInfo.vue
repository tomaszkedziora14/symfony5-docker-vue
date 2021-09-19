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
				 <table class="table">
						 <thead>
								 <tr>
									 <th>Country</th>
									 <th>Capital</th>
									 <th>Continent</th>
									 <th>Currency</th>
									 <th>Languages</th>
									 <th>Flag</th>
								 </tr>
						 </thead>
						 <tbody>
								 <tr v-for="item in resultQuery">
									 <td>{{item.countryName}}</td>
									 <td>{{item.capitalName}}</td>
									 <td>{{item.continentName}}</td>
									 <td>{{item.currency}}</td>
									 <td v-for="lang in item">
										 {{lang.sName}}
									 </td>
									 <td><img v-bind:src="item.flag" alt="" width="100" height="50"></td>
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
  	searchQuery: "",
	  resources: [],
  }
},
	computed: {
		resultQuery(){
			if(this.searchQuery){
			let country = this.resources.filter((item)=>{
					return item.countryName.toLowerCase().includes(this.searchQuery.toLowerCase())
				})
				
				let lang = this.resources.filter((item)=>{
					if(item.languages.sName === this.searchQuery){
						return item.languages.sName
					}
				})
				return country.concat(lang)
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
