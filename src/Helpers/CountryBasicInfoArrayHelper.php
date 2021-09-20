<?php


namespace App\Helpers;


class CountryBasicInfoArrayHelper
{
    private  $fullCountryInfoAllCountries;
    private  $listOfContinentsByCode;
    private  $listOfCurrenciesByCode;

    public function setArray($data)
    {
        $this->fullCountryInfoAllCountries = $data[0];
        $this->listOfContinentsByCode = $data[1];
        $this->listOfCurrenciesByCode = $data[2];
        return $this;
    }

    public function createArray(): array
    {

        $fullCountryInfoAllCountries = $this->fullCountryInfoAllCountries;
        $listOfContinentsByCode = $this->listOfContinentsByCode;
        $listOfCurrenciesByCode = $this->listOfCurrenciesByCode;

        $basicInfoCountrydata = [];

        foreach($fullCountryInfoAllCountries as $key=> $basicInfo){

            $this->changeContinentCodeToName($listOfContinentsByCode, $fullCountryInfoAllCountries,$key);

            $this->changeCurrencyCodeToName( $listOfCurrenciesByCode, $fullCountryInfoAllCountries, $key);

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


    public function changeContinentCodeToName(
        $listOfContinentsByCode,
        $fullCountryInfoAllCountries,
        $key
    ): void {

        $count = count($listOfContinentsByCode);
        for($i=0; $i<$count; $i++){
            $fullCountryInfoAllCountries[$key]['sContinentCode'] = $listOfContinentsByCode[$i]['sCode'] == $fullCountryInfoAllCountries[$key]['sContinentCode'] ? $listOfContinentsByCode[$i]['sName'] : $fullCountryInfoAllCountries[$key]['sContinentCode'];
        }
    }

    public function changeCurrencyCodeToName(
        $listOfCurrenciesByCode,
        $fullCountryInfoAllCountries,
        $key
    ): void {

        $count = count($listOfCurrenciesByCode);
        for($i=0; $i<$count; $i++){
            $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'] = $listOfCurrenciesByCode[$i]['sISOCode'] == $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'] ? 	$listOfCurrenciesByCode[$i]['sName'] : $fullCountryInfoAllCountries[$key]['sCurrencyISOCode'];
        }
    }

    function removeKey(array $data): array
    {
        $arr = [];
        foreach($data as $key=>$info){
            foreach($data['Languages'] as $key2=>$value){
                $arr = $data['Languages'][$key2];
                unset($data['Languages'][$key2]);
            }
        }
        return $arr;
    }

}
