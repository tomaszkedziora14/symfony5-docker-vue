<template>
	<div>
<div class="panel panel-default">
<div class="panel-heading">
	<strong> All Resources</strong>
</div>
				 <div class="row">
							<div class="search-wrapper panel-heading col-sm-12">
									<input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
						 </div>
				 </div>

			 <table  class="table" id="query">
										 <thead>
										 <tr>
											 <th>Country</th>
									 <th >Capital</th>
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

			 <table  class="table" id="sort">
				 <thead>
				 <tr>
					 <th :class="sortedClass('countryName')" @click="sortBy('countryName')">Country</th>
					 <th :class="sortedClass('capitalName')" @click="sortBy('capitalName')">Capital</th>
					 <th :class="sortedClass('continentName')" @click="sortBy('continentName')">Continent</th>
					 <th :class="sortedClass('currency')" @click="sortBy('currency')">Currency</th>
					 <th :class="sortedClass('flag')" @click="sortBy('flag')">Flag</th>
					 <th>Languages</th>
				 </tr>
				 </thead>
				 <tbody>
				 <tr v-for="item in sortedItems">
					 <td>{{item.countryName}}</td>
					 <td>{{item.capitalName}}</td>
					 <td>{{item.continentName}}</td>
					 <td>{{item.currency}}</td>
					 <td>
						 <img v-bind:src="item.flag" alt="" width="100" height="50">
					 </td>
					 <td v-for="lang in item">
						 {{lang.sName}}
					 </td>
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
	  table: true
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
		this.getBasicCountryInfo(),
		this.showHideTable()
	},
	methods: {
		getBasicCountryInfo() {
			axios.get('/country').then(response => (
					this.resources = response.data
			)) 
		},
		sortedClass(key) {
			return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
		},
		sortBy(key) {
			this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
			this.sort.key = key;
		},
		showHideTable(){
			if(this.searchQuery.length > 0){
				alert(1);
				document.getElementById('sort').style.display = 'none'
			}
		}

	}
}
</script>
