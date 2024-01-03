<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kullanıcı adı ve şifre değerlerini alın
    $kullaniciAdi = $_POST["kullaniciAdi"];
    $sifre = $_POST["sifre"];

    // Kullanıcı adı ve şifre alanının boş geçilmemesini kontrol edin
    if (empty($kullaniciAdi) || empty($sifre)) {
        header("Location: index.html");
        exit;
    }

    // Kullanıcı adının mail adresi olup olmadığını kontrol edin
    if (!filter_var($kullaniciAdi, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html");
        exit;
    }

    // Kullanıcı adınızı kontrol edin
    $dogruKullaniciAdi = "g221210572@sakarya.edu.tr";
    $dogruSifre = "g221210572";

    if ($kullaniciAdi === $dogruKullaniciAdi && $sifre === $dogruSifre) {
        // Login işlemi başarılı ise hoş geldiniz mesajını gösterin
        echo "Hoşgeldiniz: " . $kullaniciAdi;
        exit;
    } else {
        // Login işlemi başarısız ise kullanıcıyı login sayfasına yönlendirin
        header("Location: index.html");
        exit;
    }
}
?>

