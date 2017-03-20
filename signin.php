<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 14-Mar-17
 * Time: 4:17 PM
 */
include ('master/header.php');
include('master.php');
?>
<section class="hero is-dark is-large">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">

    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
       <!-- <div class="container has-text-centered">
            <h1 class="title">Patient Health Monitoring System</h1>
            <h2 class="subtitle">Your Health is our health!</h2>
        </div>-->

        <div class="column column is-half is-offset-one-quarter"">
        <form method="post" action=<?php $_SERVER['PHP_SELF']?>>
        <div class="box">
            <div class="column is-offset-3 is-6">
                 <p class="control has-icon">
                    <input class="input" type="text" name="username" required placeholder="Username">
                    <span class="icon is-small"><i class="fa fa-user"></i></span>
                 </p>
            </div>

            <div class="column is-offset-3 is-6">

                <p class="control has-icon">
                    <input class="input" type="password" name="password" required placeholder="Password">
                    <span class="icon is-small"><i class="fa fa-lock"></i></span>
                </p>
            </div>

            <div class="column is-offset-7">
                <p class="control">
                    <input type="button" name="signup" class="button is-small is-info" onclick="signUpRedirect()" value="Signup!">
                    <input type="submit" name="Submit" class="button is-success" value="Login">
                </p>



        </div>
        </form>
        </div>
    </div>
</section>
<script src="js/toast/toast.js"></script>
<link href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
<script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<script>

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "600",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
</script>
<?php
include ('master/footer.php');


if ( isset( $_POST['Submit'] ) ) {
    // Do processing here.
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";

// Create connection
    $conn = mysqli_connect($servername, $dbusername, $dbpassword,"patienthealthmonitoringsystem");

// Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $username = $_POST['username'];
    //$email = $_POST['email'];
    $password = $_POST['password'];
    $query = "SELECT * FROM users WHERE username='$username' and password='$password'";

    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
    $count = mysqli_num_rows($result);
    if ($count == 1)
    {
        //echo "<script>alert('ss');</script>";
        $_SESSION['username'] = $username;
        echo"<script>window.location='profile.php';</script>";
    }
    else
        {
            echo "<script>Command: toastr[\"error\"](\"Please try again!\", \"Wrong Username or password\");</script>";
        }
}

?>
