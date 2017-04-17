<?php
class PersonnageManager extends Connexionbdd
{

  public function __construct(){
    $this->connexion();
  }

  //CREATE
  public function insertPerso(Personnage $perso){
    //si le nom du perso existe déjà dans la bdd, on ne le réinscrit pas
    if(empty($this->exists($perso))){
      $req = $this->_bdd->prepare('INSERT INTO
        Personnages(nom, forcePerso, degats, niveau, experience)
        VALUES(:nom, :forcePerso, :degats, :niveau, :experience)');

      $req->bindValue(':nom', $perso->getNom(), PDO::PARAM_STR);
      $req->bindValue(':forcePerso', $perso->getForcePerso(), PDO::PARAM_INT);
      $req->bindValue(':degats', $perso->getDegats(), PDO::PARAM_INT);
      $req->bindValue(':niveau', $perso->getNiveau(), PDO::PARAM_INT);
      $req->bindValue(':experience', $perso->getExperience(), PDO::PARAM_INT);

      $req->execute();

      //au passage on set l'id du perso, en vue d'une réutilisation future (CRUD)
      $perso->hydrate([
        'id' => $this->_bdd->lastinsertId()
      ]);

      echo 'perso bien inséré';
    }else{
      print_r('Ce perso existe déjà');
    }
  }

  //READ
  public function getPerso($info){
    //si $info est une id
    if (is_int($info)) {
      $req = $this->_bdd->query('SELECT * FROM Personnages WHERE id =\'' . $info . '\'');
      //on renvoie alors un objet qui est une instance de la classe Personnage
      return new Personnage($req->fetch());
    }else{
      $req = $this->_bdd->query('SELECT * FROM Personnages WHERE nom =\'' . $info . '\'');
      //on renvoie alors un objet qui est une instance de la classe Personnage
      return new Personnage($req->fetch());
    }
  }

  //UPDATE
  public function updatePerso(Personnage $perso){
    $req = $this->_bdd->prepare('UPDATE Personnages SET nom = :nom, forcePerso = :forcePerso, degats = :degats, niveau = :niveau, experience = :experience WHERE id = :id');

    $req->bindValue(':id', $perso->getId(), PDO::PARAM_INT);
    $req->bindValue(':nom', $perso->getNom(), PDO::PARAM_STR);
    $req->bindValue(':forcePerso', $perso->getForcePerso(), PDO::PARAM_INT);
    $req->bindValue(':degats', $perso->getDegats(), PDO::PARAM_INT);
    $req->bindValue(':niveau', $perso->getNiveau(), PDO::PARAM_INT);
    $req->bindValue(':experience', $perso->getExperience(), PDO::PARAM_INT);

    $req->execute();
  }

  //DELETE
  public function deletePerso(Personnage $perso){
    $req = $this->_bdd->prepare('DELETE FROM Personnages WHERE id = :id');

    $req->bindValue(':id', $perso->getId(), PDO::PARAM_INT);

    $req->execute();
  }

  public function count(){
    return $req = $this->_bdd->query('SELECT COUNT(*) FROM Personnages')->fetchColumn();
  }

  public function exists($info){
    if (is_int($info)) {
      return $this->_bdd->query('SELECT COUNT(*) FROM Personnages WHERE id =\'' . $info . '\'')->fetchColumn();
    }else{
      return $this->_bdd->query('SELECT COUNT(*) FROM Personnages WHERE nom =\'' . $info->getNom() . '\'')->fetchColumn();
    }
  }

  public function getList(){
    $list = array();

    $req = $this->_bdd->query('SELECT * FROM Personnages');

    while ($donnees = $req->fetch()) {
      $list[] = new Personnage($donnees);
    }

    return $list;
  }
}

?>
