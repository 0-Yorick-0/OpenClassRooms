<?php
abstract class Connexionbdd
{
  const HOST = 'mysql:host=localhost;dbname=OCR_PHP_POO';
  const USER = 'root';
  const PASSWORD = 'root';
  protected $_bdd;

  protected function connexion(){

    try{
      $this->_bdd = new PDO(self::HOST, self::USER, self::PASSWORD, [
    	    	// PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    	      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    	    ]);

      $this->_bdd->exec('SET NAMES utf8');

    }catch(PDOException $e){
      die('Erreur : ' . $e->getMessage());
    }
  }
}
