<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Réponse</title>
        <link rel="stylesheet" href="./styles/portfolio.css">
        <link rel="stylesheet" href="./styles/contact.css">
    </head>
    <body>
        <ul>
            <li>Nom : <?php echo $_POST["nom"] ?></li>
            <li>Prénom : <?php echo $_POST["prenom"] ?></li>
            <li>Adresse mail : <?php echo $_POST["adresse-mail"] ?></li>
            <li>Message : <?php echo $_POST["avis"] ?></li>
        </ul>
        <a href="./contact.html"><i>retour au formulaire</i></a>
    </body>
</html>