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
									 <th @click="sort('countryName')">Country</th>
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
	  currentSort:'countryName',
	  currentSortDir:'asc',
	  info:[]
  }
},
	computed: {
		resultQuery(){
			if(this.searchQuery){

				let country = this.resources.filter((item)=>{
					return item.countryName.includes(this.searchQuery)
				})

				let code = this.resources.filter((item)=>{
					return item.countryCode.includes(this.searchQuery)
				})

				let lang = this.resources.filter((item)=>{
					if(item.languages.sName === this.searchQuery){
						return item.languages.sName
					}
				})
				return country.concat(code)
			}else{
				return this.resources;
			}
		},
		sortedInfo:function() {
			return this.info.sort((a,b) => {
				let modifier = 1;
				if(this.currentSortDir === 'desc') modifier = -1;
				if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
				if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
				return 0;
			});
		},
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
		sort:function(s) {
			//if s == current sort, reverse
			if(s === this.currentSort) {
				this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
			}
			this.currentSort = s;
		},
	}
}
</script>
