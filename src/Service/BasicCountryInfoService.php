<?php

namespace App\Service;

use App\Service\BasicCountryInfoInterface;
use App\Service\ApiCountryService;

class BasicCountryInfoService
{
	private ApiCountryService $countryService;

	private array $basicInfoData = [];

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

		$basicInfoCountrydata = [];

		foreach($fullCountryInfoAllCountries as $key=> $basicInfo){

			$count = count($listOfContinentsByCode);
			for($i=0; $i<$count; $i++){
				$fullCountryInfoAllCountries[$key]['sContinentCode'] = $listOfContinentsByCode[$i]['sCode'] == $fullCountryInfoAllCountries[$key]['sContinentCode'] ? $listOfContinentsByCode[$i]['sName'] : $fullCountryInfoAllCountries[$key]['sContinentCode'];
			}

			$count = count($listOfCurrenciesByCode);
			for($i=0; $i<$count; $i++){
				 $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'] = $listOfCurrenciesByCode[$i]['sISOCode'] == $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'] ? 	$listOfCurrenciesByCode[$i]['sName'] : $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'];
			}

            $languages = $this->removeKey($fullCountryInfoAllCountries[$key]);

			$basicInfoCountrydata[$key]['countryName'] = $fullCountryInfoAllCountries[$key]['sName'];
            $basicInfoCountrydata[$key]['countryCode'] = $fullCountryInfoAllCountries[$key]['sISOCode'];
			$basicInfoCountrydata[$key]['capitalName'] = $fullCountryInfoAllCountries[$key]['sCapitalCity'];
			$basicInfoCountrydata[$key]['continentName'] = $fullCountryInfoAllCountries[$key]['sContinentCode'];
			$basicInfoCountrydata[$key]['currency'] = $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'];
		    $basicInfoCountrydata[$key]['languages'] = $languages;
			$basicInfoCountrydata[$key]['flag'] = $fullCountryInfoAllCountries[$key]['sCountryFlag'];

		}

			return $basicInfoCountrydata;
	}

    function removeKey(array $data)
    {
        $arr= [];
        foreach($data as $key=>$info){
            foreach($data['Languages'] as $key2=>$value){
                $arr = $data['Languages'][$key2];
                unset($data['Languages'][$key2]);
            }
        }
        return $arr;
    }
}
