<?php
class MonException extends Exception
{
  //on rend le message obligatoire
  public function __construct($message, $code = 0)
  {
    parent::__construct($message, $code);
  }

  public function __toString()
  {
    return $this->message;
  }
}


function additionner($a, $b)
{
  if (!is_numeric($a) || !is_numeric($b))
  {
    throw new MonException('Les deux paramètres doivent être des nombres'); // On lance une nouvelle exception si l'un des deux paramètres n'est pas un nombre.
  }

  return $a + $b;
}

try // On va essayer d'effectuer les instructions situées dans ce bloc.
{
  echo additionner(12, 3), '<br />';
  echo additionner('azerty', 54), '<br />';
  echo additionner(4, 8);
}

catch (MonException $e) // On va attraper les exceptions "Exception" s'il y en a une qui est levée.
{
  echo $e; //grâce à la méthode magique __toString,  le message va s'afficher automatiquement
}

echo 'Fin du script';
