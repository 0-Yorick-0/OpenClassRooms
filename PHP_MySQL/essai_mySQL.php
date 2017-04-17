

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Ceci est une page HTML de test</title>
    </head>
    <body>
    	
    	<h1>Ici on va tester un peu mySQL</h1>
<?php 
try
{
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}

catch (Exception $e)

{
        die('Erreur : ' . $e->getMessage());
}


//ici on insere une entrée
//$bdd->exec('INSERT INTO jeux_video(nom,possesseur,console,prix,nbre_joueurs_max,commentaires) VALUES(\'Battlefields 1942\', \'Patrick\', \'PC\', 45, 50, \'2nde guerre mondiale\')');

//echo 'Le jeu a bien été ajouté';

//ici on supprime une entrée
if($_GET['nom'] AND isset($_GET['nom'])){


$req= $bdd->prepare('DELETE FROM jeux_video WHERE nom = :nom_jeu');
$req->execute(array(
	'nom_jeu' => $_GET['nom'],
	));
echo 'Le jeu à bien été supprimé';
}

//ici on affiche la BDD
$requete = $bdd->prepare('SELECT * FROM jeux_video WHERE console = ?');
$requete->execute(array($_GET['console']));

while ($donnees = $requete->fetch()) 
{
?>

	<p>
	<?php echo $donnees['nom'] . ' se joue sur ' . $donnees['console'] . ' et coûte ' . $donnees['prix'] . '€'; ?>
	
	</p>
<?php
}

$requete->closeCursor();

?>





    </body>