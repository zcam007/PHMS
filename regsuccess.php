<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 16-Mar-17
 * Time: 4:05 PM
 */
include ('master/header.php');
include ('master.php');

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";

// Create connection
$conn = mysqli_connect($servername, $dbusername, $dbpassword,"patienthealthmonitoringsystem");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset( $_POST['signup']))
{
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $ssn = $_POST['ssn'];
    $mobile = $_POST['mob'];
    $age=$_POST['age'];
    $blood = $_POST['blood'];
    

    $sql = "INSERT INTO users (firstname, lastname, username,email,password,ssn,mobile,age,blood)VALUES ('$fname','$lname','$username','$email','$password',$ssn,$mobile,$age,'$blood')";

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
mysqli_close($conn);
echo "Connected successfully";
?>


