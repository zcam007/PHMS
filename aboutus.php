<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 15-Mar-17
 * Time: 11:25 AM
 */
//session_start();
include ('master/header.php');
include('master.php');
if(isset($_SESSION))
{
    echo"yes";
}
