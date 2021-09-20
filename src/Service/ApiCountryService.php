<?php

namespace App\Service;

use App\Service\CountryInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpClient\CachingHttpClient;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpKernel\HttpCache\Store;

class ApiCountryService implements CountryInterface
{
    
	const METHOD_GET = 'GET';

	private $url = [
						'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON/debug?',
						'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/FullCountryInfo/JSON/debug?sCountryISOCode=',
						'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/FullCountryInfoAllCountries/JSON/debug?',
						'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByCode/JSON/debug?',
						'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCurrenciesByCode/JSON/debug?'
					];

	public function __construct()
	{
            $store = new Store('../var/cache/storage/');
            $client = HttpClient::create();
            $client = new CachingHttpClient($client, $store);
	        $this->client =  $client;
	}

	/**
	 * @return array
	 */
	public function listOfCountryNamesByName(): array
	{
			$response = $this->client->request(
            self::METHOD_GET,
            $this->url[0]
      );
			$json = $response->getContent();
			$data = json_decode($json, TRUE);

			return $data;
	}

	/**
	 * @return array
	 */
	public function fullCountryInfo($countryISOCode): array
	{
			$response = $this->client->request(
						self::METHOD_GET,
						$this->url[1].$countryISOCode
			);
			$json = $response->getContent();
			$data = json_decode($json, TRUE);

			return $data;
	}

	/**
	 * @return array
	 */
	public function fullCountryInfoAllCountries(): array
	{
			$response = $this->client->request(
						self::METHOD_GET,
						$this->url[2]
			);
			$json = $response->getContent();
			$data = json_decode($json, TRUE);

			return $data;
	}

	/**
	 * @return array
	 */
	public function listOfContinentsByCode(): array
	{
			$response = $this->client->request(
						self::METHOD_GET,
						$this->url[3]
			);
			$json = $response->getContent();
			$data = json_decode($json, TRUE);

			return $data;
	}

	/**
	 * @return array
	 */
	public function listOfCurrenciesByCode(): array
	{
			$response = $this->client->request(
						self::METHOD_GET,
						$this->url[4]
			);
			$json = $response->getContent();
			$data = json_decode($json, TRUE);

			return $data;
	}
}
