<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $assunto = $_POST["assunto"];
    $mensagem = $_POST["mensagem"];
    
    // Destinatário do e-mail
    $destinatario = "kaiquelopes980@gmail.com";
    
    // Montando o corpo do e-mail
    $corpo_email = "Nome: " . $nome . "\n";
    $corpo_email .= "E-mail: " . $email . "\n";
    $corpo_email .= "Assunto: " . $assunto . "\n";
    $corpo_email .= "Mensagem: \n" . $mensagem;
    
    // Enviando o e-mail
    if (mail($destinatario, "Contato pelo formulário do site", $corpo_email)) {
        // Exibindo a mensagem de confirmação após o envio do e-mail
        echo "<p class='confirmation-message'>Obrigado! Sua mensagem foi enviada com sucesso.</p>";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.";
    }
}
?>