<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="commentaires.css" />
        <title>Commentaires</title>
    </head>
    <body>
    	<h1>Mon super blog !</h1>

    	<a href="index.php">Retour à la liste des billets</a>

    	<?php
    	try // ouverture du dialogue avec mySQL et récupération d'erreurs (une seule fois par page)
		{
	    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch (Exception $e)
		{
	        die('Erreur : ' . $e->getMessage());
		}


			$reponse = $bdd->prepare('SELECT ID, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation FROM billets WHERE ID = ?');
			$reponse->execute(array($_GET['ID'])); //récupération de l'ID du billet

			$donnees = $reponse->fetch();

				if(empty($donnees['ID']))//on vérifie que le billet existe
				{
					
					echo '<p>Numero de billet non valide</p>';
				}else{?>
					<div class="news">

						<?php include('billet.php');?>
							
					</div>
				<?php	
				}

				$reponse->closeCursor(); ?>
		<h2>Commentaires</h2>

		<?php

		if(isset($_GET['page']))// Si c'est la première fois qu'on arrive sur la page, et qu'aucun numéro de page n'est défini, on attribue la valeur 1 à $pagecourante.
		{
			$pagecourante = intval($_GET['page']);
		}else{
			$pagecourante = 1;
		}

		$debut = ($pagecourante - 1) * 5;



		if(isset($_GET['ID']))
		{
			$reponse = $bdd->prepare('SELECT id_billet, auteur,commentaires, DATE_FORMAT(date_commentaire, \'%d/%m/%Y à %Hh%imin%ss\') AS date_commentaire FROM commentaires WHERE id_billet = ? ORDER BY ID DESC LIMIT ' . $debut . ', 5');

			$reponse->execute(array($_GET['ID']));

			while ($donnees = $reponse->fetch()) 
			{
				?><div>
					<strong><?php echo htmlspecialchars($donnees['auteur']);?></strong> <em>le <?php echo htmlspecialchars($donnees['date_commentaire'])?> :</em>
						<p>
							<?php echo htmlspecialchars($donnees['commentaires']);?><br />
						
						</p>

				</div>
			<?php
			}
			$reponse->closeCursor();
		}
			

		$reponse = $bdd->query('SELECT COUNT(*) AS nb_com FROM commentaires WHERE id_billet = ' . $_GET['ID'] .'');

		$donnees = $reponse->fetch();

		?>

		<p>Page : <?php

		for ($i=1; $i <= ceil($donnees['nb_com']/5); $i++) 
			{ 
					echo '<a href="commentaires.php?ID=' . $_GET['ID'] . '&page=' . $i . '">' . $i . ' </a>';
			}		
		$reponse->closeCursor();
		?></p>

		

		<h2>Postez votre commentaire :</h2>

		    <form method="post" action="commentaires_post.php">



	    <p>
	    	<label for="auteur">Votre pseudo :</label><input type="text" name="auteur" id="auteur" /><br />
	    	<label for="commentaires">Votre commentaire :</label><br /><textarea type="textarea" name="commentaires" id="commentaires"  rows="6" cols="50"></textarea><br />
	    	<input type="hidden" name="id_billet" value="<?php echo $_GET['ID']; ?>" />
	    	<input type="submit" value="Envoyer" /> 

	    </p>

	   </form>

		
		
    </body>
    </html>