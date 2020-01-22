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

    $name=$_POST['firstName'];
    $lastname=$_POST['lastName'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    $choix=$_POST['choix'];
    $sexe=$_POST['sexe'];
    
    $options = array(
        'name' 	=> FILTER_SANITIZE_STRING,
        'lastname' 	=> FILTER_SANITIZE_STRING,
        'email' 		=> FILTER_VALIDATE_EMAIL,
        'subject' 		=> FILTER_SANITIZE_STRING,
        'message' 		=> FILTER_SANITIZE_STRING
    );
        
    $result = filter_input_array(INPUT_POST, $options);  
        ;
    if ($result != null || $result != FALSE) {
        
        if ($name|| $lastname||$email||$subject|$message != FALSE) {

            $bdd= new PDO('mysql:host=localhost;dbname=Formulaire','root','root');
            $requete= $bdd->prepare('INSERT INTO `Formulair`(firstName, lastName, email, subject, message, choix, sexe) VALUES (:firstName, :lastName, :email, :subject, :message, :choix, :sexe)');
            
            $requete->execute(array(
                'firstName'=>$name,
                'lastName'=>$lastname,
                'email'=>$email,
                'subject'=>$subject,
                'message'=>$message,
                'choix'=>$choix,
                'sexe'=>$sexe
            ));

            
            $EmailTo = "v1996.vincent@gmail.com";
            $Subject = $subject;
            // prepare email body text
            $Body = "";
            $Body .= "\n";
            $Body .= "Prénom: ";
            $Body .= $name;
            $Body .= "\n";
            $Body .= "Nom: ";
            $Body .= $lastname;
            $Body .= "\n";
            $Body .= "sexe: ";
            $Body .= $sexe;
            $Body .= "\n";
            $Body .= "Pays: ";
            $Body .= $choix;
            $Body .= "\n";
            $Body .= "Email: ";
            $Body .= $email;
            $Body .= "\n";
            $Body .= "Message: ";
            $Body .= $message;
            $Body .= "\n";
            // send email
            $success = mail($EmailTo, $Subject, $Body, "From:".$email);
            // redirect to success page
            if ($success){
                echo "<h1>Merci !</h1>
                <p>Formulaire completer, il a bien été envoyé.</p>";
            }else{
                echo "Something went wrong :(";
            }

        }

        else{
            
            echo "<h1><strong>Oups !</strong></h1>
            <p>Le formulaire n'as pas pu etre envoyer. </p>
            <p>Veuillez ré-éssayé</p>";
            
        }
    }

    
?>
<div class='but'> <a href='index.html' class='button is-link'> Revenir a l'acceuille</a> </div>
</body>

</html>