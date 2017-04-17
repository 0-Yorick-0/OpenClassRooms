<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Minichat</title>
    </head>
    <style>
    form
    {
        text-align:center;
    }
    a{
        text-decoration: none;
    }
    </style>
    <body>

    	<form method="post" action="minichat_post.php" > <!-- Le formulaire dans lequel on entre son pseudo et ses messages -->
    		<p>
    			<label for="pseudo">Pseudo : </label><input type="text" name="pseudo" id="pseudo" value="<?php echo $_COOKIE['pseudo'] ?>" required/><br />
    			<label for="message">Votre message : </label><textarea name="message" id="message" rows="1" cols="20" required></textarea><br />
    			<input type="submit" value="Envoyer" />    		
    		</p> 

    	</form>

    	<p><a href="minichat.php">Rafraichir</a></p>

    	<?php

        if(isset($_GET['page']))
        {
            $pagecourante = intval($_GET['page']);
        }else{
            $pagecourante = 1;
        }

        $debut = ($pagecourante - 1) * 5;

	    

	    try // ouverture du dialogue avec mySQL et récupération d'erreurs
		{
	    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch (Exception $e)
		{
	        die('Erreur : ' . $e->getMessage());
		}
		
	    $reponse = $bdd->query('SELECT ID, pseudo, message, DATE_FORMAT(date, \'%d/%m/%Y à %Hh%imin%ss\') AS date 
                                FROM minichat 
                                ORDER BY ID 
                                DESC LIMIT ' . $debut . ',5'); //récupération des données dans une variable

	    while ($donnees = $reponse->fetch()) //boucle d'affichage des messages
	    	{
	    ?>
	    	<p>
	    		<strong><?php echo htmlspecialchars($donnees['pseudo']) . ' (' .  $donnees['date'] . ')';?></strong> : <?php echo htmlspecialchars($donnees['message']);?>
	    	</p>
	    <?php }

	     
	    $reponse->closeCursor();

        $reponse = $bdd->query('SELECT COUNT(*) AS nb_messages FROM minichat'); // Pour effectuer une pagination, on compte le nombre total de messages pour savoir combien de pages on va afficher
        
        $donnees = $reponse->fetch();

        ?>

        <p>Page :   <?php

        for($i = 1; $i <= ceil($donnees['nb_messages']/5); $i++)// On boucle l'affichage des numéros de pages avec utilisation de la fonction 'ceil' pour arrondir au supérieur
            {
                echo '<a href="minichat.php?page=' . htmlspecialchars($i) . '">' . $i . '  </a>';
            }
        $reponse->closeCursor();
        ?>
        </p>
	    	


    	
    </body>
  </html>