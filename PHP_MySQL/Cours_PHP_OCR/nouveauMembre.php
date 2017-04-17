<?php

include_once('Membre.class.php');

$membre = new Membre();
$membre->setPseudo('iLaChevre');
echo $membre->getPseudo() . ', je vais te bannir !';
$membre->setMail('yorickferlin@gmail.com');
echo $membre->getMail();
$membre->envoyerEMail('Salut', 'Coucou');

?>