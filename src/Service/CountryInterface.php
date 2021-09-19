<?php

namespace App\Service;

interface CountryInterface
{
    /**
     * @return array
     */
    public function listOfCountryNamesByName(): array;

    /**
     * @return array
     */
    public function fullCountryInfo($countryISOCode): array;

    /**
     * @return array
     */
    public function fullCountryInfoAllCountries(): array;

    /**
     * @return array
     */
    public function listOfContinentsByCode(): array;

    /**
     * @return array
     */
    public function listOfCurrenciesByCode(): array;
}
