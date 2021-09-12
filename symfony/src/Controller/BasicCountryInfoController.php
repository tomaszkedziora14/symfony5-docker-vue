<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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
     * @Route("/country", name="country")
     */
    public function index(): Response
    {
        $basicCountryInfoService = $this->basicCountryInfoService->infoData();
        $words = ['sky', 'cloud', 'wood', 'rock', 'forest',
     'mountain', 'breeze'];

        return $this->render('base.html.twig', [
           'basicCountryInfoService' => $words
       ]);
    }
}
