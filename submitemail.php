<?php

$departamento = "comercial@mobiview.com.br";
$nome = $_POST['nome'];
$assunto = $_POST['assunto'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$texto = $_POST['mensagem'];

/*A variável $mensagem recebe os dados da array.  */
$mensagem = "Nome: ".$nome." <br \>";
$mensagem .= "Assunto: ".$assunto." <br \>";
$mensagem .= "Email: ".$email."  <br \>";
$mensagem .= "Telefone: ".$telefone."  <br \>";
$mensagem .= "Mensagem:". $mensagem."  <br \>";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: \"$nome\" <$email>\r\n";

/*
Função Mail:
1: Coloque o email que vai receber os dados do formulário;
2: Coloque o titulo do email;
3: Os dados do formulário.
*/
mail($departamento, "Contato - Site", $mensagem, $headers);

/*
Mensagem que será impressa 
*/

echo "<meta HTTP-EQUIV='Refresh' CONTENT='0;URL=http://www.mobiview.com.br'>";
?>

