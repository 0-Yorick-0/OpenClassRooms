<?php
    	try // ouverture du dialogue avec mySQL et récupération d'erreurs (une seule fois par page)
		{
	    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch (Exception $e)
		{
	        die('Erreur : ' . $e->getMessage());
		}