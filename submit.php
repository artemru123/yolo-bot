<?php
  $recaptcha_secret = "YOUR_SECRET_KEY";

  if(isset($_POST['g-recaptcha-response'])) {
    $recaptcha_response = $_POST['g-recaptcha-response'];
    
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_data = [
      'secret' => $recaptcha_secret,
      'response' => $recaptcha_response
    ];
    
    $recaptcha_options = [
      'http' => [
        'method' => 'POST',
        'content' => http_build_query($recaptcha_data)
      ]
    ];
    
    $recaptcha_context = stream_context_create($recaptcha_options);
    $recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
    $recaptcha_result = json_decode($recaptcha_result);
    
    if($recaptcha_result->success) {
      echo "reCAPTCHA verification successful!";
    } else {
      echo "reCAPTCHA verification failed!";
    }
  } else {
    echo "reCAPTCHA verification failed!";
  }
?>
