<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\BasicCountryInfoService;

class BasicCountryInfoController extends AbstractController
{
    private BasicCountryInfoService $basicCountryInfoService;

    public function __construct(BasicCountryInfoService $basicCountryInfoService)
    {
        $this->basicCountryInfoService = $basicCountryInfoService;
    }

    /**
     * @Route("/test", name="country")
     */
    public function index(Request $request): Response
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/country", name="countr_m")
     */
    public function getData(): Response
    {
        $basicCountryInfoService = $this->basicCountryInfoService->infoData();
      //  return new Response(json_encode($basicCountryInfoService[0]));
         return $this->json($basicCountryInfoService);
    }
}
