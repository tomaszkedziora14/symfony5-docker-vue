<?php

namespace App\Service;

use App\Service\BasicCountryInfoInterface;
use App\Service\ApiCountryService;
use App\Helpers\CountryBasicInfoArrayHelper;

class BasicCountryInfoService
{
	private ApiCountryService $countryService;
	private CountryBasicInfoArrayHelper $countryBasicInfoArrayHelper;

	private array $basicInfoData = [];

	public function __construct(
	    ApiCountryService $countryService,
        CountryBasicInfoArrayHelper $countryBasicInfoArrayHelper
    ){
			$this->countryService = $countryService;
			$this->countryBasicInfoArrayHelper = $countryBasicInfoArrayHelper;
	}

	public function infoData(): array
	{
        $listOfCountryNamesByName = $this->countryService->listOfCountryNamesByName();
		$fullCountryInfoAllCountries = $this->countryService->fullCountryInfoAllCountries();
		$listOfContinentsByCode = $this->countryService->listOfContinentsByCode();
		$listOfCurrenciesByCode = $this->countryService->listOfCurrenciesByCode();

		$data = [$fullCountryInfoAllCountries ,$listOfContinentsByCode , $listOfCurrenciesByCode ];

        $basicInfo = $this->countryBasicInfoArrayHelper->setArray($data);
        $result = $basicInfo->createArray();

        return $result;

	}
}
