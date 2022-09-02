<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_form = 'info@yourwebsite.com';

$email_subject = 'New Form submission';

$email_body = "User Name: $name.\n".
              "User email: $visitor_email.\n".
              "Subject: $subject.\n".
              "Message: $message.\n";

$to = 'mdresad704@gmail.com';

$headers = "Form: $email_form \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers)

header("Location: contact.html");
?>
