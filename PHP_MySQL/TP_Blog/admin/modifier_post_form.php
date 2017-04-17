<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="commentaires.css" />
        <title>Ajouter billet</title>
    </head>
    <body>

<?php
     try // ouverture du dialogue avec mySQL et récupération d'erreurs
            {
                $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
            $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            }
            catch (Exception $e)
            {
                die('Erreur : ' . $e->getMessage());
            }
            
            $reponse = $bdd->prepare('SELECT ID, titre, contenu FROM billets WHERE ID = ?');
            $reponse->execute(array($_GET['ID'])); //récupération de l'ID du billet

            $donnees = $reponse->fetch();

?>

    	<h1>Ajoutez votre commentaire :</h1>

    	<form method="post" action="modifier_post.php">
    		<label for="titre">Titre :</label><br /><input type="text" name="titre" id="titre" value="<?php echo $donnees['titre']; ?>" /><br />
    		<label for="contenu">Contenu :</label><br /><textarea type="textarea" name="contenu" id="contenu" rows="6" cols="70"><?php echo $donnees['contenu'];?></textarea><br />
            <input type="hidden" name="id_billet" value="<?php echo $_GET['ID']; ?>" />
    		<input type="submit" name="Envoyer" />
    	</form>

    	

		<p>
			<a href="index_admin.php">Retour vers l'affichage des billets</a>
		</p>

    </body>
    </html>