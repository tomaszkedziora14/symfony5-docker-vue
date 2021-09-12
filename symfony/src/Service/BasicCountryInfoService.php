<?php

namespace App\Service;

use App\Service\BasicCountryInfoInterface;
use App\Service\ApiCountryService;
use App\Helpers\BasicCountryInfoArrayHelper;

class BasicCountryInfoService 
{
	private ApiCountryService $countryService;

	public function __construct(ApiCountryService $countryService)
	{
			$this->countryService = $countryService;
	}

	public function infoData(): array
	{
		$listOfCountryNamesByName = $this->countryService->listOfCountryNamesByName();
		$fullCountryInfoAllCountries = $this->countryService->fullCountryInfoAllCountries();
		$listOfContinentsByCode = $this->countryService->listOfContinentsByCode();
		$listOfCurrenciesByCode = $this->countryService->listOfCurrenciesByCode();

		$basicCountryInfo = [];
		$basicCountryInfoMainArray = [];
		$count = count($fullCountryInfoAllCountries);
			for($i=0; $i<$count; $i++){
				foreach(	$listOfContinentsByCode  as $key=>	$listOfContinentsByCod){
						$count2 = count($listOfCurrenciesByCode);
							for($ix=0; $ix<$count2; $ix++) {
								$basicCountryInfoMainArray[$i] = [
						  	$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sName'],
							  $basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sCapitalCity'],
							  $basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sContinentCode'] = $listOfContinentsByCode[$key]['sCode'] == $fullCountryInfoAllCountries[$i]['sContinentCode'] ? $listOfContinentsByCode[$key]['sName'] : $fullCountryInfoAllCountries[$i]['sContinentCode'] ,
								$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sCurrencyISOCode'] = 	$listOfCurrenciesByCode[$ix]['sISOCode'] == $fullCountryInfoAllCountries[$i]['sCurrencyISOCode'] ? 	$listOfCurrenciesByCode[$ix]['sName'] : $fullCountryInfoAllCountries[$i]['sCurrencyISOCode'],
								$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['Languages'],
								$basicCountryInfo[] = $fullCountryInfoAllCountries[$i]['sCountryFlag']
			 			];
		 			}
	 			}
			}
			return $basicCountryInfoMainArray;
	}
}
