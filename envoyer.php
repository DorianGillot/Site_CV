<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $sujet = $_POST["sujet"];
    $message = $_POST["message"];

    // Remplacez les lignes suivantes par vos propres informations SMTP
    $smtp_server = "votre-serveur-smtp.com";
    $smtp_username = "votre-adresse-email@gmail.com";
    $smtp_password = "votre-mot-de-passe";

    $headers = "From: $email";

    if (mail("votre-adresse-email-de-destination@example.com", $sujet, $message, $headers)) {
        echo "L'e-mail a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi de l'e-mail.";
    }
}
?>
