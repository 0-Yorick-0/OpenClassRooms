<?php
class Magicien extends Personnage
{

  public function lancerUnSort(Personnage $adversaire){
    if ($this->_degats < 25) {
      $this->_atout = 4;
    }elseif ($this->_degats < 50 && $this->_degats >= 25) {
      $this->_atout = 3;
    }elseif ($this->_degats < 75 && $this->_degats >= 50) {
        $this->_atout = 2;
    }elseif ($this->_degats < 90 && $this->_degats >= 75) {
        $this->_atout = 1;
    }else{
      $this->_atout = 0;
    }

    if ($this->_atout == 0) {
      return self::PAS_DE_MAGIE;
    }

    if ($this->estEndormi()) {
      return self::PERSO_ENDORMI;
    }

    $adversaire->_timeEndormi = time() + ($this->atout * 6) * 3600;
  }

}
