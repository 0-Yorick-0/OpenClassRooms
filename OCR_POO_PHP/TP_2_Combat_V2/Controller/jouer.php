<?php //si le joueur a cliqué sur créer perso, on affiche le formulaire de création
if (isset($_POST['creer'])) {
  $template = 'creer_perso';
  include '../layout.phtml';
//sinon on affiche le choix d'un adversaire
}else{
  require 'function.php';
  $manager = new PersonnageManager;
  session_start();

  //si l'on vient de la page de création de perso, on l'insère en bdd
  if (isset($_POST['inserer'])) {
    if ($_POST['type'] == 'magicien') {
      $perso = new Magicien($_POST);
      $manager->insertPerso($perso);
      $_SESSION['joueur'] = $perso;
    }else{
      $perso = new Guerrier($_POST);
      $manager->insertPerso($perso);
      $_SESSION['joueur'] = $perso;
    }

  //si l'on vient de la page d'accueil
  }elseif (isset($_POST['joueur'])){
    $perso = $manager->getPerso($_POST['joueur']);
    $_SESSION['joueur'] = $perso;
  //si l'on vient de cliquer sur frapper, on récupère le perso
  }else{
    $perso = $_SESSION['joueur'];
    $adversaire = $manager->getPerso($_POST['adversaire']);
    //on permet au tableau d'adversaire de s'afficher
    $template_module = true;

    //le joueur frappe un adversaire
    $resultat = $perso->frapper($adversaire);

    if ($resultat == 1) {
      //on met à jour les combattants dans la bdd, on supprimant l'adversaire mort
      $manager->updatePerso($perso);
      $manager->deletePerso($adversaire);
      print_r($adversaire->getNom() . ' est mort');
    }else{
      //on met à jour les combattants dans la bdd
      $manager->updatePerso($perso);
      $manager->updatePerso($adversaire);
    }

  }

  $list = $manager->getList();
  $template = 'jouer';
  include '../layout.phtml';
}
