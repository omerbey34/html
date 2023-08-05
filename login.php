<?php
  $email = $_POST['email'];
  $password = $_POST['password'];

  $correct_email = "g211210089@sakarya.edu.tr";
  $correct_password = "g211210089";

  if ($email == $correct_email && $password == $correct_password) {
    echo "Hoşgeldiniz g211210089";
    exit;
  }
  
  else {
    echo "E-mail veya şifre yanlış. Lütfen tekrar deneyiniz. Giriş sayfasına yönlendiriliyorsunuz...";
    header("Refresh: 3; url=login.html");
    exit;
  }
?>