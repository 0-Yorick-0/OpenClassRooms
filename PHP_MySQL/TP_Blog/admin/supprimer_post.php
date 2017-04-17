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

		
		
			$reponse = $bdd->prepare('DELETE FROM billets WHERE ID = :ID');
			$reponse->execute(array(
				'ID' => $_GET['ID'],
				));
		

		header('Location: index_admin.php');
		exit();
?>