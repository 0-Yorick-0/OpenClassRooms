<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Ceci est une page PH de test regex</title>
    </head>
    <body>

    <?php

    $texte = $_POST['texte'];

    $texte = stripslashes($texte); // On enlève les slashs qui se seraient ajoutés automatiquement

    $texte = htmlspecialchars($texte, ENT_NOQUOTES, ENT_HTML5); // On rend inoffensives les balises HTML que le visiteur a pu rentrer

    $texte = nl2br($texte); // On crée des <br /> pour conserver les retours à la ligne

    $texte = preg_replace('#\[b\](.+)\[/b\]#isU', '<strong>$1</strong>', $texte);
    $texte = preg_replace('#\[i\](.+)\[/i\]#isU', '<em>$1</em>', $texte);
    $texte = preg_replace('#\[u\](.+)\[/u\]#isU', '<u>$1</u>', $texte);
    $texte = preg_replace('#\[color=(red|green|blue|yellow|purple|olive)\](.+)\[/color\]#isU', '<span style="color:$1">$2</span>', $texte);
    $texte = preg_replace('#https://[a-z0-9._/-\?\&]+#i', '<a href=$0>$0</a>', $texte);
    $texte = preg_replace('#mailto:[a-z0-9._@]+#i', '<a href=$0>$0</a>', $texte);
 //   $texte = preg_replace('#(&lt;.+&gt;)|(&lt;/.+&gt);#isU', '<font color="blue">$1$2</font>', $texte); //balises
    $texte = preg_replace('#(&lt;/?([a-z1-6]+)|/?&gt;)#', '<span style="font-weight:bold;color:blue;">$1</span>', $texte); //balises plus concentrée
    $texte = preg_replace('#([a-z]+=)("([a-z0-9-_/\.]+)")#i', '<span style="color:green">$1</span><span style="color:crimson"><em>$2</em></span>', $texte); // valeur

    

    echo $texte ;

    ?>


        <p>
            <form method="post">
                <label for="texte">Votre message ?</label><br />
                <textarea id="texte" name="texte" cols="50" rows="8"></textarea><br/>
                <input type="submit" name="Envoyer" />

            </form>
            
        </p>
</body>
</html>