<?php

/*
 * Aplicacao dinamica para qualquer tipo de base de dados
 * Nesta aplicacao voce podera criar sua api apenas criando patterns de exibição
 * Não necessitando conhecimento de desenvolvimento de software
 * A aplicacao é totalmente dinamica e automatica.
 * Para solicitar novos drivers de conexao contate-me guilhermecamacho.com
 * */

session_start();

$time_start = microtime(true);


/* Arquivos necessarios base para o funcionamento */
require 'config.php';
require 'controller/helpers/helpers.function.php';
require 'controller/urlservices/urlservice.php';
require 'controller/security/security.php';
require 'controller/pattern/pattern.php';
require 'controller/DriverConnection/DriverConnection.php';
require 'controller/CustomResponse/CustomResponse.php';
require 'controller/ProcessResult/ProcessResultClass.php';
/* Arquivos necessarios base para o funcionamento */

/*Inicio o controle de rota*/
$url = new urlService($_SERVER['REQUEST_URI']);
$route = $url->getPages();
/*Inicio a base de seguranca*/
$secure = new security('GET', $auth);

if ($secure->basicauth()) {
    $pattern = new pattern($route, $pattern_path);
    $pattern = $pattern->start();
    $result = $pattern;
    if (!in_array_r_like_key('error', $pattern)) {
        $driver = new DriverConnection($pattern);
        $result = $driver->start();
    }
    $ProcessResult = new ProcessResultClass($result);
    echo $ProcessResult->json();
} else {
    header('Content-Type: application/json');
    http_set_code(403);
    echo json_encode(['error' => 'Forbidden']);
}

$time_end = microtime(true);
$execution_time = round(($time_end - $time_start) * 1000);
