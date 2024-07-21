<?php
$recaptcha_secret = "6LceDhUqAAAAABV9Hbfp_IktcARnT_GDAcEEVKgu";
$recaptcha_response = $_POST['g-recaptcha-response'];
$remoteip = $_SERVER['REMOTE_ADDR'];

$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response&remoteip=$remoteip");
$responseKeys = json_decode($response, true);

if(intval($responseKeys["success"]) !== 1) {
    echo "reCAPTCHA verification failed. Please try again.";
} else {
    echo "reCAPTCHA verification successful. Your form was submitted.";
}
?>
