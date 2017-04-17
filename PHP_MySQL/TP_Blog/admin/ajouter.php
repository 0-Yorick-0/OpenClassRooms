<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="commentaires.css" />
        <title>Ajouter billet</title>
    </head>
    <body>



    	<h1>Ajoutez votre commentaire :</h1>

    	<form method="post" action="ajouter_post.php">
    		<label for="titre">Titre :</label><br /><input type="text" name="titre" id="titre" /><br />
    		<label for="contenu">Contenu :</label><br /><textarea type="textarea" name="contenu" id="contenu" rows="6" cols="70"></textarea><br />
    		<input type="submit" name="Envoyer" />
    	</form>

    	

		<p>
			<a href="index_admin.php">Retour vers l'affichage des billets</a>
		</p>

    </body>
    </html>