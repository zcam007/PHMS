<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 15-Mar-17
 * Time: 11:15 AM
 */
require ('master/header.php');
require ('master.php');


if(isset($_SESSION['username'])!=null)
{
     $loggedinuser= $_SESSION['username'];
}
else
    {
 }


$servername = "localhost";
$dbusername = "root";
$dbpassword = "";

// Create connection
$conn = mysqli_connect($servername, $dbusername, $dbpassword,"patienthealthmonitoringsystem");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT gender, age FROM users where username='$loggedinuser'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      //  echo $row['gender'].$row["age"];
        $cookie_name_1 = "c_gender";
        $cookie_value_1 = $row['gender'];
        setcookie($cookie_name_1, $cookie_value_1, time() + (86400 * 30), "/");

        $cookie_name_2 = "c_age";
        $cookie_value_2 = $row['age'];
        setcookie($cookie_name_2, $cookie_value_2, time() + (86400 * 30), "/");

    }
} 
else {
//    echo "0 results";
}

mysqli_close($conn);


?>
<link rel="stylesheet" href="css/switch.css">

    <section class="hero is-black is-large" style="color:black !important;">

        <div class="hero-head">

            <p class="column is-offset-5 dashboard" ">Dashboard </p>

    <div class="column is-offset-10 ">

        <p>Welcome <?php echo $loggedinuser?>!</p>

    </div>
    </div>
    <div class="hero-body " >
        <div class="container overridebody ">
        
        <div class=" columns ">
                <div class="column is-3 "><img src="img/h_b_stop.jpg " alt="Heart " height="202 " width="602 " onclick="checkCookie() " id="heartbeat"></div>
                
                <div class="column is-3 ">
                    <p  class="sensor_reading " id="bpmskeleton">Heart Beats Per Minute: <span style="color:red;">Not Loaded!</span></p>
                    <table class="_statustable" id="statustable"><tr><td><div class="_statusbar" id="statusbar"> Status: </div></td><td class="_statusmsg" ID="statusmsg">None</td></tr></table>
                    
                </div>
                
                <div class="column is-1" >
                <span class="toggle">
                    <input type="checkbox" ID="ctrlbutton" onclick="btnctrlfunc();">
                    <label data-off="Stop" data-on="Start"></label>
                </span>
                </div>
                
                <div class="column is-offset-2" id="switch_control" style="display:none;" >
                    <iframe width="450 " height="260 " style="border: 1px solid #cccccc; " src="https://thingspeak.com/channels/253471/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=5&title=Beats+Per+Minute%28BPM%29&type=spline "></iframe> 
                    <br/><br/><br/>
                    <iframe width="450 " height="260 " style="border: 1px solid #cccccc; " src="https://thingspeak.com/channels/253471/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&title=Pulse&type=spline "></iframe>
                </div>
        </div>
    </div>

    </div>
</section>
<script src="js/main.js "></script>
<p style="color: red; " id="decoy " onclick="fetchdata(); ">hee</p>

<?php
include ('master/footer.php');
?>
<script>
$( window ).load(function() {
  // Run code
 
});

</script>