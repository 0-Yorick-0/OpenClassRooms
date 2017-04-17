<?php
try 	{$bdd = new PDO('mysql:host=localhost;dbname=tp_openclassrooms;charset=utf8', 'root','root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));}
catch (Exception $e)	{die('Erreur : ' . $e->getMessage());}
$req = $bdd->prepare('INSERT INTO minichat (pseudo, message, date_ajout) VALUES(?, ?, NOW())');
$req->execute(array(strip_tags($_POST['pseudo']), strip_tags($_POST['message'])));
setcookie('pseudo',$_POST['pseudo'],time() + 365*24*3600, null, null, false, true);
header('Location: minichat.php');
?>