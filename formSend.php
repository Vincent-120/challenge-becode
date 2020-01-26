<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <link rel="stylesheet" href="assets/css/style_formSend.css">
    <title>Envoie du formulaire</title>
</head>

<body>


<?php 
echo"step1 ";
// !donner email
$EmailTo = "v1996.vincent@gmail.com";
$Subject = $_POST['subject'];
// prepare email body text
$Body = "";
$Body .= "\n";
$Body .= "Prénom: ";
$Body .= $_POST['firstName'];
$Body .= "\n";
$Body .= "Nom: ";
$Body .= $_POST['lastName'];
$Body .= "\n";
$Body .= "sexe: ";
$Body .= $_POST['sexe'];
$Body .= "\n";
$Body .= "Pays: ";
$Body .= $_POST['choix'];
$Body .= "\n";
$Body .= "Email: ";
$Body .= $_POST['email'];
$Body .= "\n";
$Body .= "Message: ";
$Body .= $_POST['message'];
$Body .= "\n";
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
// !teste 2
if ($success){
    echo"step2 ";

    $dbh = new PDO("mysql:host=localhost;dbname=formulaire;charset=utf8", 'root','root');

    echo"step3 ";

    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo"step4 ";

    $stmt = $dbh->prepare(`INSERT INTO 'Formulair' (email,  name, company, country, comments) VALUES (:name,:lastname, :email)`);

    echo"step5 ";

    $stmt -> bindParam(':name', $_POST["firstName"]);
    $stmt -> bindParam(':lastname', $_POST["lastName"]);
    $stmt -> bindParam(':email', $_POST["email"]);

    echo"step6 ";

    if($stmt){
        echo "<h1>Merci !</h1>
    <p>Formulaire completer, il a bien été envoyé.</p>";
    }
}
else{        
    echo "<h1><strong>Oups !</strong></h1>
        <p>Le formulaire n'as pas pu etre envoyer. </p>
        <p>Veuillez ré-éssayé</p>";
}
?>
<div class='but'> <a href='index.html' class='button is-link'> Revenir a l'acceuille</a> </div>
</body>

</html>