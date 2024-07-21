$secret = "6LceDhUqAAAAABV9Hbfp_IktcARnT_GDAcEEVKgu";
$response = $_POST['g-recaptcha-response'];
$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response");
$captcha_success = json_decode($verify);
if ($captcha_success->success == true) {
    echo "Капча прошла успешно. Действие можно продолжать.";
} else {
    echo "Капча не прошла. Попробуйте еще раз.";
}
?>
