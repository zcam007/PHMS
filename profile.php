
<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 15-Mar-17
 * Time: 11:15 AM
 */
//session_start();
//header("Refresh:0");


require ('master/header.php');
require ('master.php');
/*
if(isset($_POST['Submit'])) {
    $username = $_POST['username'];
    $_SESSION['username']=$username;
    header("Refresh:0");
}
*/

if(isset($_SESSION['username'])!=null)
{
     $loggedinuser= $_SESSION['username'];
}
else
    {
 }

?>

<style>

</style>
<section class="hero is-black is-large" style="color:black !important;">

    <div class="hero-head">
        
<p class="column is-offset-5 dashboard"">Dashboard </p>

    <div class="column is-offset-10 ">

        <p>Welcome <?php echo $loggedinuser?>!</p>

    </div>
    </div>
    <div class="hero-body" >
        <div class="container overridebody">
        
        <div class=" columns">
        <div class="column is-3">
    <img src="img/h_b1.gif" alt="Heart" height="202" width="602">
    
        </div>
        <div class="column is-offset-6">
        <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/253471/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=5&title=Beats+Per+Minute%28BPM%29&type=spline"></iframe> 
        <br/><br/><br/>
         <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/253471/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&title=Pulse&type=spline"></iframe>
        </div>
        </div>
        </div>

    </div>
</section>
<script src="js/main.js"></script>
<p style="color: red;" id="decoy" onclick="fetchdata();">hee</p>

<?php
include ('master/footer.php');
?>
