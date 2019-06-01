<?php
$mailto = "David24122002@hotmail.com";
$titulo = "Sugerencia";

if (!isset($_POST["inputName"]) || !isset($_POST["inputEmail"]) || !isset($_POST["inputNumber"]) || !isset($_POST["message-suggest"])) {
  die("No se ha rellenado el formulario.");
}

$nombre = $_POST["inputName"];
$correo = $_POST["inputEmail"];
$telefono = $_POST["inputNumber"];
$sugerencia = $_POST["message-suggest"];

$envio_correcto = mail($mailto, $titulo, $sugerencia, $nombre, $telefono);
if ($envio_correcto) {
  include 'confirm.html';
} else {
  echo "Ha habido un error enviando el mensaje. Por favor, inténtalo de nuevo.";
}
?>