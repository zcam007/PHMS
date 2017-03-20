
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
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/244497/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

<section class="hero is-dark is-large">
    <div class="hero-head">


    <div class="column is-offset-10 ">

        <p>Welcome <?php echo $loggedinuser?>!</p>

    </div>
    </div>
    <div class="hero-body">

    </div>
</section>
<script src="js/main.js"></script>
<p style="color: red;" id="decoy" onclick="fetchdata();">hee</p>

<?php
include ('master/footer.php');
?>
