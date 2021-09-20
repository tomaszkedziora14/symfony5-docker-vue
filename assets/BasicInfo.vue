<template>
<div class="panel panel-default">
<div class="panel-heading">
			<strong> All Resources</strong></div>
				 <div class="row">
							<div class="search-wrapper panel-heading col-sm-12">
									<input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
						 </div>
				 </div>
<!--		 <div class="table-responsive">-->
<!--									 <table v-if="resources.length" class="table">-->
<!--										 <thead>-->
<!--										 <tr>-->
<!--											 <th>Country</th>-->
<!--									 <th>Capital</th>-->
<!--									 <th>Continent</th>-->
<!--									 <th>Currency</th>-->
<!--									 <th>Languages</th>-->
<!--									 <th>Flag</th>-->
<!--								 </tr>-->
<!--						 </thead>-->
<!--						 <tbody>-->
<!--								 <tr v-for="item in resultQuery">-->
<!--									 <td>{{item.countryName}}</td>-->
<!--									 <td>{{item.capitalName}}</td>-->
<!--									 <td>{{item.continentName}}</td>-->
<!--									 <td>{{item.currency}}</td>-->
<!--									 <td v-for="lang in item">-->
<!--										 {{lang.sName}}-->
<!--									 </td>-->
<!--									 <td><img v-bind:src="item.flag" alt="" width="100" height="50"></td>-->
<!--								 </tr>-->
<!--						 </tbody>-->
<!--				 </table>-->

			 <table  class="table">
				 <thead>
				 <tr>
					 <th  @click="sortBy('countryName')">Country</th>
					 <th>Capital</th>
					 <th>Continent</th>
					 <th>Currency</th>
					 <th>Languages</th>
					 <th>Flag</th>
				 </tr>
				 </thead>
				 <tbody>
				 <tr v-for="item in sortedItems">
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
	  sort: {
		  key: '',
		  isAsc: false
	  },
  }
},
	computed: {
		sortedItems () {
			const list = this.resources.slice();
			if (!!this.sort.key) {
				list.sort((a, b) => {
					a = a[this.sort.key]
					b = b[this.sort.key]

					return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
				});
			}

			return list;
		},
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
				return country.concat(code,lang)
			}else{
				return this.resources;
			}
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
		sortBy(key) {
			this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
			this.sort.key = key;
		}

	}
}
</script>
