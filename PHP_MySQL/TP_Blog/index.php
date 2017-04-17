<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="commentaires.css" />
        <title>Index</title>
    </head>
    <body>

    <h1>Mon super blog !</h1>




    <h2>Derniers billets du blog :</h2>

    	<?php

	    try // ouverture du dialogue avec mySQL et récupération d'erreurs
		{
	    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch (Exception $e)
		{
	        die('Erreur : ' . $e->getMessage());
		}

		if(isset($_GET['page']))
		{
			$pagecourante = intval($_GET['page']);
		}else{
			$pagecourante = 1;
		}

		$debut = ($pagecourante - 1) * 5;

		$reponse = $bdd->query('SELECT ID, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation FROM billets ORDER BY ID DESC LIMIT ' . $debut . ',5');// on récupère les contenus nécessaires classés et limités

		while ($donnees = $reponse->fetch()) //on lance la boucle de lecture et d'affichage
		{
			?>	<div class="news">

					<?php include('billet.php'); ?>	
					
					<p>
						<em><a href="commentaires.php?ID=<?php echo $donnees['ID'];?>">Commentaires</a></em> <!-- on prévoit d'envoyer l'ID du billet concerné afin que la page commentaires.php sache quel billet afficher -->
					</p>

				</div>
		<?php
		}
		$reponse->closeCursor();

		$reponse = $bdd->query('SELECT COUNT(*) AS nb_billets FROM billets');
		
		$donnees = $reponse->fetch();

		?>

		<p>Page : 	<?php

		for($i = 1; $i <= ceil($donnees['nb_billets']/5); $i++)//Utilisation de la fonction 'ceil' pour arrondir au supérieur
			{
				echo '<a href="index.php?page=' . $i . '">' . $i . ' </a>';
			}
		$reponse->closeCursor();
		?>
		</p>


    	
    </body>
</html>
