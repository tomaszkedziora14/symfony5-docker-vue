<?php

namespace App\Service;

Interface CountryInterface
{
    /**
     * @return array
     */
    public function listOfCountryNamesByName(): array;

    /**
     * @return array
     */
    public function fullCountryInfo(): array;

    /**
     * @return array
     */
    public function FullCountryInfoAllCountries(): array;

    /**
     * @return array
     */
    public function listOfContinentsByCode(): array;

    /**
     * @return array
     */
    public function listOfCurrenciesByCode(): array;
}
