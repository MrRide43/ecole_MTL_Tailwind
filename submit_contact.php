<?php 
$getData = $_GET; 

if (
    !isset($getData['email'])
    || !filter_var($getData['email'], FILTER_VALIDATE_EMAIL)
    || empty($getData['message'])
    || trim($getData['message']) === ''
) {
    echo('il faut un Email valide pour soumettre le formulaires.');
    return;
}
?>
