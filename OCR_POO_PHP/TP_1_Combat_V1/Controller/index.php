<?php
require 'function.php';
  $manager = new PersonnageManager;
  //on a besoin d'une liste des personnages pour afficher le choix des joueurs
  $list = $manager->getList();

$template = 'index';
include '../layout.phtml';
