<?php
class MaClass implements SeekableIterator, ArrayAccess, Countable
{
  private $position = 0;
  private $tableau = ['Premier', 'Deuxième', 'Troisième', 'Quatrième', 'Cinquième'];

//Interface SeekableIterator
  public function seek($position){
    if (array_key_exists($position, $this->tableau)) {
      $this->position = $position;
    }else{
      trigger_error('position invalide');
    }
  }

  public function current(){
    return $this->tableau[$this->position];
  }

  public function key(){
    return $this->position;
  }

  public function next(){
    $this->position++;
  }

  public function rewind(){
    $this->position = 0;
  }

  public function valid(){
    return isset($this->tableau[$this->position]);
  }

  //Interface ArrayAccess
  public function offsetExists($key){
    return isset($this->tableau[$key]);
  }

  public function offsetGet($key){
    if ($this->offsetExists($key)) {
      return $this->tableau[$key];
    }
  }

  public function offsetSet($key, $value){
    if ($this->offsetExists($key)) {
      $this->tableau[$key] = $value;
    }
  }

  public function offsetUnset($key){
    if ($this->offsetExists($key)) {
      unset($this->tableau[$key]);
    }
  }

  //Interface Countable
  public function count(){
    return count($this->tableau);
  }
}

$obj = new MaClass();

$obj->seek(67);
echo $obj->current() . '<br />';

foreach ($obj as $key => $value) {
  if ($obj->valid()) {
    echo 'key = ' . $key . ' value = ' . $value . '<br />' ;
  }
}

echo 'Affichage du troisième élément du tableau : ' . $obj[2] . '<br />';
echo 'Il y a ' . $obj->count() . ' éléments dans ce tableau. ';

$instance = new ArrayIterator(['un', 'deux']);
echo $instance->count();
echo $instance->key();
