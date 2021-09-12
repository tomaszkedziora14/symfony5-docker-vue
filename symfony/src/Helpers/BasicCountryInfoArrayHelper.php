<?php

namespace App\Helpers;

class BasicCountryInfoArrayHelper
{
	private array $array =[];

	public function createArray(array $array1, $array2)
	{
		$basicCountryInfo = [];
		$basicCountryInfoMainArray = [];
		$count = count($fullCountryInfoAllCountries);
		for($i=0; $i<$count; $i++){
			foreach(	$listOfContinentsByCode  as $key=>	$listOfContinentsByCod){
			$basicCountryInfoMainArray[$i] =[
					$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sName'],
					$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sCapitalCity'],
					$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sContinentCode'] = $listOfContinentsByCode[$key]['sCode'] == $fullCountryInfoAllCountries[$i]['sContinentCode'] ? $listOfContinentsByCode[$key]['sName'] : $fullCountryInfoAllCountries[$i]['sContinentCode']  ,
					$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['Languages'],
					$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sCountryFlag']
			 ];
		 }
		}
			return $this;
	}

	public function getArray()
	{
		return $this->array;
	}

	public function setName()
	{

	}
}
