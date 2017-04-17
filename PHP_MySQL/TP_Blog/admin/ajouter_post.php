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

		
		if(isset($_POST['titre']) AND isset($_POST['contenu']))
		{
			$reponse = $bdd->prepare('INSERT INTO billets (titre, contenu, date_creation) VALUES(:titre, :contenu, NOW())');
			$reponse->execute(array(
				':titre' => $_POST['titre'],
				':contenu' => $_POST['contenu']
				));
		}

		header('Location: ajouter.php');
		exit();
?>