<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, ['attr' => ['placeholder' => 'Your name', 'class' => 'contact-input']])
            ->add('email', EmailType::class, ['attr' => ['placeholder' => 'Your email', 'class' => 'contact-input']])
            ->add('subject', TextType::class, ['attr' => ['placeholder' => 'Your subject', 'class' => 'contact-input']])
            ->add('message', TextareaType::class, ['attr' => ['placeholder' => 'Insert your message', 'class' => 'contact-area']]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
            'translation_domain' => 'forms'
        ]);
    }
}
