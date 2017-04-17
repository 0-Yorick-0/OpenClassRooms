<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8" />				<!-- charset(jeu de caractere) UTF-8(international)-->
	<title> Exercices Mini Chat </title> 				<!-- titre de la page -->
	<link href="mini_chat_2.css" type="text/css" rel="stylesheet" /> <!-- lier la page css à cette page (rel(relation), type(de type text)-->
</head>

<body>

<?php

	//___________________FORMULAIRE

?>	
	<form method="post" action="mini_chat_2_post.php">
		
		<p>Pseudo : <input type="text" name="pseudo" <?php if(isset($_GET['pseudo'])){?> value="<?php echo htmlspecialchars($_GET['pseudo']); }?>"/></p>	
		<p>Message : <input type="text" name="message"/></p>

		<input type="submit" value="Envoyez message"/>
	
	</form>

				
		<?php if(isset($_GET['champRempli'])){		//__________________CONTROLE DES MESSAGES D'ERREUR
			
				if($_GET['champRempli'] == false){	//_________VARIABLE DANS 'mini_chat_2_post' QUI  VERIFIE QUE TOUS LES CHAMPS SONT REMPLI
				
					echo '<p id="message_erreur"> veuillez remplir tous les champs pour poster votre message! </p>';
					
				}else if($_GET['champRempli'] == true) {
			
					echo '<p id="message_envoye"> message envoyé avec succès! </p>';
				}
		}				
		?>
		
<?php

include('connexion_bdd.php');		//__________CONNEXION A LA BDD
	
//_________________________REQUETE POUR RECUPERER auteur, message, et la date 
$req = $bdd->query('SELECT UPPER(auteur) auteur_maj, message, DATE_FORMAT(date, \'%d/%m/%Y à %Hh%i\') AS date FROM mini_chat_2 ORDER BY ID DESC LIMIT 0,5');

while($données = $req->fetch()){ //_____________CREER LA BOUCLE POUR AFFICHER LES MESSAGES
	
	echo '<p> </br> <strong>'.htmlspecialchars($données['auteur_maj']).' :</strong>  '.htmlspecialchars(nl2br($données['message'])).'</br> Message posté le  : '.htmlspecialchars($données['date']).'</p>';
}

$req->closeCursor();	// FERMER LA REQUETE

//echo 'requete effectuez avec succès!';

?>


</body>


</html>

