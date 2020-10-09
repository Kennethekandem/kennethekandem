<?php
$name = $_POST['name'];
$email = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['subject'];
$message = $_POST['message'];

$to = "lilkenzy02@gmail.com";
$subject = "RIA Emails";
$body = "Name: ".$name."\nEmail: ".$email."\nMessage: ".$message;
$headers = "From: " . $email;

//send email
mail($to, $subject, $body, $headers);
?>
