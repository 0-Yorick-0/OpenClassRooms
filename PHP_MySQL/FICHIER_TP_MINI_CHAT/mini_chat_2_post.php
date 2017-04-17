<?php
//_________________________________Tente connexion à la BDD


if(isset($_POST['pseudo']) && isset($_POST['message'])){
	
	if($_POST['pseudo'] != '' && $_POST['message'] != ''){
		
		include('connexion_bdd.php');
		
		$req = $bdd->prepare('INSERT INTO mini_chat_2(auteur, message, date)VALUES(?, ?, NOW())');
		$req->execute(array(
		htmlspecialchars($_POST['pseudo']), 
		htmlspecialchars($_POST['message'])
		));
		

		$req->closeCursor();

		//echo 'requete effectuez avec succès';

		$verif = true;	// _______VARIABLE POUR VERIFIER SI LES CHAMPS SONT REMPLIS! (true si rempli!)
		header('Location: mini_chat_2.php?pseudo='.htmlspecialchars($_POST['pseudo']).'&champRempli='.$verif.'');		// ______________Puis rediriger vers mini_chat_2.php // REDIRECTION HTTP

	}else{
	
		$verif = false;		// _______VARIABLE POUR VERIFIER SI LES CHAMPS SONT REMPLIS!
		header('Location: mini_chat_2.php?champRempli='.$verif.'');
		
	
	}
}


?>