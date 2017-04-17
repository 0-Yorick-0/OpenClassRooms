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
 
        if (isset($_POST['auteur']) AND isset($_POST['commentaires']) AND isset($_POST['id_billet']))
 
        {
            $req = $bdd->prepare('INSERT INTO commentaires (id_billet, auteur, commentaires, date_commentaire) VALUES(:id_billet, :auteur, :commentaires, NOW())');
            $req->execute(array(
                ':id_billet' => $_POST['id_billet'],
                ':auteur' => $_POST['auteur'],
                ':commentaires' => $_POST['commentaires']
                ));
        }
		header('Location: commentaires.php?ID=' . $_POST['id_billet']);
		exit();
		

?>
