<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>TP sql php</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	<body>
		<main>
			<header></header>
			
			<section id="formulaire">
				<form action="minichat_post.php" method="post" >
				    <?php
                    if (isset($_COOKIE['pseudo']))
                        {echo '<label for="pseudo" >Pseudo : </label><br /><input type="text" name="pseudo" id="pseudo" value="'.$_COOKIE['pseudo'].'" required /><br />';}
                    else {echo '<label for="pseudo" >Pseudo : </label><br /><input type="text" name="pseudo" id="pseudo" required/><br />';}
                    ?>
					<label for="message">Message : </label><br /><input class="champsmessage" type="text" name="message" id="message" required/><br />
					<input type="submit" value="Envoyer" />
				</form>
			</section>
			<section id="chat">
                <?php
            // connection MySQL
                try 	{$bdd = new PDO('mysql:host=localhost;dbname=tp_openclassrooms;charset=utf8', 'root','root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));}
				catch (Exception $e)	{die('Erreur : ' . $e->getMessage());}
            // requette
				$reponse = $bdd->query('SELECT pseudo, message, DATE_FORMAT(date_ajout, "%d %m %Y à %Hh%imin%ss") AS date_creation FROM minichat ORDER BY ID DESC LIMIT 0, 10');
                while ($donnees = $reponse->fetch())
					{
				    ?>
				    <p>
                        <em>à <?php echo $donnees['date_creation']?></em><br />
				        <strong><?php echo htmlspecialchars($donnees['pseudo'])?></strong> dit :<br />
				        <?php echo nl2br(htmlspecialchars($donnees['message']))?>
				    </p>
				    <?php
					}
				$reponse->closeCursor();
				?>
				<a href="minichat-full.php">Afficher plus de messages</a>
			</section>
			<footer></footer>
		</main>
	</body>
</html>