<?php

namespace App\Notifications;


use App\Entity\Contact;
use Swift_Mailer;
use Swift_Message;
use Twig\Environment;

class ContactNotification
{

    /**
     * @var Swift_Mailer
     */
    private $mailer;
    /**
     * @var Environment
     */
    private $environment;

    /**
     * ContactNotification constructor.
     * @param Swift_Mailer $mailer
     * @param Environment $environment
     */
    public function __construct(Swift_Mailer $mailer, Environment $environment)
    {
        $this->mailer = $mailer;
        $this->environment = $environment;
    }

    public function notify(Contact $contact)
    {
        try {
            $message = (new Swift_Message())
                ->setFrom($contact->getEmail())
                ->setTo('contact@webdeval.be')
                ->addReplyTo($contact->getEmail())
                ->setBody($this->environment->render('contact/index.html.twig', [
                    'contact' => $contact
                ]), 'text/html');
            $this->mailer->send($message);
        } catch (\Twig_Error_Loader $e) {
            die('TWIG LOADER ERROR : ' . $e->getMessage());
        } catch (\Twig_Error_Runtime $e) {
            die('TWIG RUNTIME ERROR : ' . $e->getMessage());
        } catch (\Twig_Error_Syntax $e) {
            die('TWIG SYNTAX ERROR : ' . $e->getMessage());
        }
    }

}