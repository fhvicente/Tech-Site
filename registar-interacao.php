<?php
// Verifica se a solicitação é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtem os dados enviados pela solicitação
  $funcionalidade = $_POST['funcionalidade'];
  $ui = $_POST['ui'];

  $mensagem = "Funcionalidade: " . $funcionalidade . ", UI: " . $ui;
  echo $mensagem;
}
?>
