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

            //var_dump($_POST);    

		    $reponse = $bdd->prepare('UPDATE billets SET titre = :nvtitre, contenu = :nvcontenu, date_creation = NOW() WHERE ID = :ID');
            $reponse->execute(array(
                'ID' => $_POST['id_billet'],
                'nvtitre' => $_POST['titre'],
                'nvcontenu' => $_POST['contenu'],
                ));
        
        
        header('Location: index_admin.php');
        exit();
?>