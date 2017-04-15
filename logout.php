<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 15-Mar-17
 * Time: 3:10 PM
 */
include('master\header.php');
include('master.php');

echo"You are successfully logged out";
include ('master\footer.php');
if (isset($_SERVER['HTTP_COOKIE'])) {
    $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
    foreach($cookies as $cookie) {
        $parts = explode('=', $cookie);
        $name = trim($parts[0]);
        setcookie($name, '', time()-1000);
        setcookie($name, '', time()-1000, '/');
    }
}