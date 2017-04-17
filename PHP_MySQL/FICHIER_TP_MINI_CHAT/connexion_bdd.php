<?php
	try{
				
			$bdd = new PDO('mysql:host=localhost;dbname=tuto_mysql_openclassroom;charset=utf8', 'root', '',
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

		}
		catch(Exception $e){
				
				die('Erreur : ' . $e->getMessage());	// ______________ARRETE CHARGEMENT PAGE ET DONNE L'ERREUR!	
		}
		
?>