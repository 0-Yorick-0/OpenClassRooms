<?php

if(isset($_POST['pseudo']) AND $_POST['pseudo'] != '')
{
setcookie('pseudo', $_POST['pseudo'], time() + 365*26*3600, null, null, false, true);//on utlise un cookie pour mémoriser le pseudo de l'utilisateur
}

try
{
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}



if(isset($_POST['pseudo']) AND isset($_POST['message']) AND $_POST['pseudo'] != '' AND $_POST['message'] != '')//on vérifie que les formulaires ne sont pas vides
{
$req = $bdd->prepare('INSERT INTO minichat(pseudo, message, date) VALUES(:pseudo, :message, NOW())');
$req->execute(array(
	'pseudo' => $_POST['pseudo'],
	'message' => $_POST['message'],
	));
}

header('Location: minichat.php'); //on renvoie à la page micnichat.php
?>