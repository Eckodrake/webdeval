<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Work;
use App\Form\ContactType;
use App\Notifications\ContactNotification;
use App\Repository\WorkRepository;
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
     * @param WorkRepository $repository
     * @return Response
     */
    public function index(Request $request, ContactNotification $notification, WorkRepository $repository): Response
    {
        $development = $repository->findBy(['type' => 'développement']);
        $design = $repository->findBy(['type' => 'design']);

        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) :
            $notification->notify($contact);
            $this->addFlash('success', 'Votre contact a bien été pris en compte');

            return $this->redirectToRoute('portfolio.index');
        endif;

        return $this->render('portfolio/index.html.twig', [
            'developments' => $development,
            'designs' => $design,
            'form' => $form->createView()
        ]);
    }
}
