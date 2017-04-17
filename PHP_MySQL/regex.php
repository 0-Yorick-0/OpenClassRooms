<?php

if (preg_match("#^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$#", "yorickferlin@gmail.com"))
{
	echo 'VRAI';
}
else
{
	echo 'FAUX';
}
?>

<p>
<?php
if (isset($_POST['telephone']))
{
    $_POST['telephone'] = htmlspecialchars($_POST['telephone']); // On rend inoffensives les balises HTML que le visiteur a pu entrer

    if (preg_match("#^0[1-68]([-. ]?[0-9]{2}){4}$#", $_POST['telephone']))
    {
        echo 'Le ' . $_POST['telephone'] . ' est un numéro <strong>valide</strong> !';
    }
    else
    {
        echo 'Le ' . $_POST['telephone'] . ' n\'est pas valide, recommencez !';
    }
}
?>
</p>

<form method="post">
<p>
    <label for="telephone">Votre téléphone ?</label> <input id="telephone" name="telephone" /><br />
    <input type="submit" value="Vérifier le numéro" />
</p>
</form>


<?php

$texte = preg_replace('#\[b\](.+)\[/b\]#isU', <strong>$1</strong>, $texte);
$texte = preg_replace('#\[i\](.+)\[/i\]#isU', <em>$1</em>, $texte);
$texte = preg_replace('#\[color=(red|green|blue|yellow|purple|olive)\](.+)\[/color\]#isU', <span style="color:$1">$2</span>, $texte);
$texte = preg_replace('#https://[a-z0-9._/-&\?]+#i', <a href=$0>$0</a>, $texte);
?>