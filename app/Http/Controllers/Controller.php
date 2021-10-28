<?php

$dados = $_POST['data'];
$localiza = json_decode($dados, true);

var_dump($localiza);