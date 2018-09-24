<?php

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

setlocale(LC_ALL, 'pt_BR.UTF-8');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     //The request is using the POST method
     die();
}
/* as configuracoes a baixo sao para desenvolvimento */
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
/* as configuracoes a acima sao para desenvolvimento */

/* Configuracoes globais para a aplicacao */

$auth = ['user' => 'lojinhadoze', 'pass' => 'W7$sOSSpFs$xe7U!K6RZ$XYXiH5dme'];
$pattern_path = __DIR__ . '/' . 'view/pattern';
define('CONSOLE', __DIR__ . '/tmp');