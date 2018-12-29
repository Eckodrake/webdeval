<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Notifications\ContactNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/", name="portfolio.index")
     * @param Request $request
     * @param ContactNotification $notification
     * @return Response
     */
    public function index(Request $request, ContactNotification $notification): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) :
            $notification->notify($contact);
            $this->addFlash('success', 'Votre contact a bien été pris en compte');

            return $this->redirectToRoute('portfolio.index');
        endif;

        return $this->render('portfolio/index.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
