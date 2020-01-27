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
$email=$_POST['email'];
$options = array(
    'firstName' 	=> FILTER_SANITIZE_STRING,
    'lastName' 	=> FILTER_SANITIZE_STRING,
    'email' 		=> FILTER_VALIDATE_EMAIL,
    'subject' 		=> FILTER_SANITIZE_STRING,
    'message' 		=> FILTER_SANITIZE_STRING);
try {
    echo"step2 ";
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
    echo"step3 ";
    // insert into db
    if ($success){
        echo"step4 ";
        $dbh = new PDO("mysql:host=localhost;dbname=id12378607_formulaire;charset=utf8", 'id12378607_root','vincent');
        $stmt = $dbh->prepare('INSERT INTO Formulair (firstName, lastName, email) VALUES (:name,:lastname, :email)');
        $stmt->execute(array(
            'name'=>$_POST["firstName"],
            'lastname'=>$_POST["lastName"],
            'email'=>$_POST["email"]
        ));
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
} 
catch (Exception $e) {
    die('Erreur : ' .$e->getMessage());
}
?>
<div class='but'> <a href='index.html' class='button is-link'> Revenir a l'acceuille</a> </div>
</body>

</html>