<?php
class Personnage
{
  private $_id;
  private $_nom;
  private $_forcePerso;
  private $_degats;
  private $_niveau = 1;
  private $_experience = 0;


  const FORCE_PETITE = 20;
  const FORCE_MOYENNE = 50;
  const FORCE_GRANDE = 80;

  const PERSO_TUE = 1;

  public static $_nb_persos_crees;

  public function __construct($donnees){
    $this->hydrate($donnees);
    $this->compterInstances();
  }

  public function hydrate(array $donnees){
    foreach ($donnees as $key => $value) {
      $method = 'set' . ucfirst($key);

      if (method_exists($this, $method)) {
        $this->$method($value);
      }
    }
  }

  public function compterInstances(){
    self::$_nb_persos_crees++;
  }

  function getAll(){
    $properties = [];
    foreach ($this as $key => $value) {
      $key = substr($key, 1);
      $method = 'get' . ucfirst($key);

      if (method_exists($this, $method)) {
        $properties[$key] = $this->$method();
      }
    }
    return $properties;
  }

  public function getId(){
    return $this->_id;
  }

  public function getNom(){
    return $this->_nom;
  }

  public function getForcePerso(){
    return $this->_forcePerso;
  }

  public function getDegats(){
    return $this->_degats;
  }

  public function getNiveau(){
    return $this->_niveau;
  }

  public function getExperience(){
    return $this->_experience;
  }

  public function setId($id){
    //on ne mettra à jour l'id que si cette dernière est vide(interdiction de la modifier une fois qu'elle a été assignée par le manager)
    if (empty($this->_id)) {
      $id = (int) $id;
      if ($id > 0) {
        $this->_id = $id;
      }
    }
  }

  public function setNom($nom){
    if (is_string($nom) && preg_match('#^[\w\d]+$#', $nom)) {
      $this->_nom = $nom;
    }else{
      trigger_error('Merci de rentrer une chaîne de caractères pour le nom', E_USER_WARNING);
    }
  }

  public function setForcePerso($force){
    if (in_array($force, [self::FORCE_PETITE, self::FORCE_MOYENNE, self::FORCE_GRANDE])) {
      $this->_forcePerso = (int) $force;
    }else{
      trigger_error('La force doit être égale à 20, 50 ou 80', E_USER_WARNING);
      return;
    }
  }

  public function setDegats($degats){
    $degats = (int) $degats;
      $this->_degats = $degats;
  }

  public function setNiveau($niveau){
    $niveau = (int) $niveau;
    if ($niveau > 0) {
      $this->_niveau = $niveau;
    }else{
      trigger_error('Le niveau doît être un entier', E_USER_WARNING);
      return;
    }
  }

  public function setXP($xp){
    if (is_int($xp)) {
          $this->_experience += $xp;
    }else{
      trigger_error('L\'xp doit être un entier', E_USER_WARNING);
      return;
    }
  }

  public function frapper(Personnage $adversaire){
    if ($adversaire->getId() == $this->getId()) {
      trigger_error('Sérieux, on ne peut pas se frapper soi-même....');
    }else{
      $this->setXP(10);
      return $adversaire->recevoirDegats($this);
    }
  }

  public function recevoirDegats(Personnage $adversaire){
    $this->_degats -= $adversaire->_forcePerso;
    if ($this->_degats <= 0) {
      return self::PERSO_TUE;
    }
  }

}
