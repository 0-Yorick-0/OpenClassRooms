<?php

try

{
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', 'root');
}

catch (Exception $e)

{
        die('Erreur : ' . $e->getMessage());
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Ceci est une page HTML de test</title>
    </head>
    <body>

    <?php 

    $compteur = fopen('compteur.rtf', 'r+');

    $pages_vues = fgets($compteur); // On lit la première ligne
    $pages_vues = $pages_vues + 1; // On incrémente le nombre de vus
    fseek($compteur, 0); // on se place à la première lgne du fichier compteur.txr
    fputs($compteur, $pages_vues); //On inscrit la nouvelle valeur de $pages_vues


    fclose($compteur);

    echo '<p>Cette page a été vues ' . $pages_vues . ' fois</p>'; 

    ?>


        <h2>Page de test</h2>
        
        <h2> Test Formulaire</h2>

        <p> Tu t'appelles <?php echo $_POST['prenom']; ?> </p>

        <p>Et tu as écrit ce genre de conneries : <?php echo $_POST['message']; ?></p>

        <p>Et tu as coché la case numéro <?php echo $_POST['case']; ?></p>

        <p>
            Cette page contient <strong>uniquement</strong> du code HTML.<br />
            <?php echo "A part cette ligne en PHP"; ?><br />

            Voici quelques petits tests :
        </p>
        
        <ul>
        <li style="color: blue;">Texte en bleu</li>
        <li style="color: red;">Texte en rouge</li>
        <li style="color: green;">Texte en vert</li>
        </ul>

        <p>Voici un test Php des conditions "switch"</p>

        <?php

        function calcul_cone($rayon, $hauteur){
            $volume = $rayon * $rayon * 3.14 * $hauteur * (1/3);
            return $volume;
        }

        $volume = calcul_cone('6', '8');

        echo $volume .'<br />';

        $prenoms = array('Bob', 'Robert', 'Georges' );

        foreach ($prenoms as $temp) {
            echo $temp . '<br />';
        }

        $tableau = array('nom' => 'L\'éponge', 'prenom' => 'Bob', 'age' => '99' );

        foreach ($tableau as $cle => $temp)
        {
            echo '[' .$cle. '] vaut ' . $temp . '<br />';
        }
        if(isset($_GET['nom']) AND isset($_GET['prenom']) AND isset($_GET['repeter']))
        {
            for($i = 0; $i < $_GET['repeter']; $i++)
            {
        echo '<p>' . $_GET['prenom'] . ' ' . $_GET['nom'] . '</p>';
            }
        }else
        {
            echo 'Tu fous ma gueule ?!';
        }
        ?>

        <a href="index.php">retour</a>
    </body>
</html>