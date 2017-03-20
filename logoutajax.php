<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 16-Mar-17
 * Time: 2:48 PM
 */
//include('master\header.php');
include('master.php');
//echo $_SESSION['username'];
$_SESSION['username']=null;
session_destroy();
