<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/", name="portfolio.index")
     * @Route("/portfolio", name="portfolio.index")
     */
    public function index()
    {
        return $this->render('portfolio/index.html.twig');
    }
}
