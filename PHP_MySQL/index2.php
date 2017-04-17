<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>index</title>
    </head>




    <body>
    <a href="test.php?nom=L'eponge&amp;prenom=Bob&amp;repeter=8">Clique ici</a>

    <form action="test.php" method="post">

    <p>
    	<input type="text" name="prenom" />
    	<input type="submit" name="Valider"><br />

    	<textarea name="message" rows="8" cols="45">
    		Votre message ici
    	</textarea><br />

    	<input type="checkbox" name="case" id="case1" value="1" /> 
    		<label for="case1">1</label>
    		<input type="checkbox" name="case" id="case2" value="2" /> 
    		<label for="case2">2</label>
    		<input type="checkbox" name="case" id="case3" value="3" /> 
    		<label for="case3">3</label>
    </p>

    </form>

    <?php
        
        echo 'Bonjour;
    ?>
    </body>
</html>