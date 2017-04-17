<?php
abstract class Personnage
{
  protected $_id;
  protected $_nom;
  protected $_degats;
  protected $_timeEndormi;
  protected $_type = 1;
  protected $_atout;

  const PERSO_TUE = 1;
  const PAS_DE_MAGIE = 2;
  const PERSO_ENDORMI = 3;

  public static $_nb_persos_crees;

  public function __construct($donnees){
    $this->hydrate($donnees);
    $this->_type = strtolower(static::class);
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

  public function getDegats(){
    return $this->_degats;
  }

  public function getType(){
    return $this->_type;
  }

  public function estEndormi(){
    return $this->timeEndormi > time();
  }

  public function getAtout(){
    return $this->_atout;
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

  public function setDegats($degats){
    $degats = (int) $degats;
      $this->_degats = $degats;
  }

  public function setTimeEndormi($time){
    $this->timeEndormi = (int) $time;
  }

  public function setAtout($atout){
    $atout = (int) $atout;
    $this->_atout = $atout;
  }


  public function frapper(Personnage $adversaire){
    if ($adversaire->getId() == $this->getId())
    {
      trigger_error('Sérieux, on ne peut pas se frapper soi-même....');
    }
    elseif ($this->estEndormi())
    {
      return self::PERSO_ENDORMI;
    }else{
      $this->setXP(10);
      return $adversaire->recevoirDegats($this);
    }
  }

  public function recevoirDegats(Personnage $adversaire){
    $this->_degats -= 5;
    if ($this->_degats <= 0) {
      return self::PERSO_TUE;
    }
  }

  public function reveil(){
    $secondes = $this->timeEndormi;
    $secondes -= time();

    $heures = floor($secondes / 3600);
    $secondes -= $heures * 3600;
    $minutes = floor($secondes / 60);
    $secondes -= $minutes * 60;

    $heures .= $heures <= 1 ? ' heure' : ' heures';
    $minutes .= $minutes <= 1 ? ' minute' : ' minutes';
    $secondes .= $secondes <= 1 ? ' seconde' : ' secondes';

    return $heures . ', ' . $minutes . ' et ' . $secondes;
  }

}
