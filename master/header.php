<!--suppress JSUnresolvedLibraryURL -->
<script src="js/main.js"></script>
<style>
    .header{
background-color: black !important;
    }
    .header1
    {
background-color: #006699 !important;
    }
</style>
<!--//prev color -#006699-->
<header class="nav is-mobile" id="header">
    <div class="container">
        <div class="nav-left">
            <a class="nav-item">
                <!--<img src="images/bulma-type-white.png" alt="Logo">-->
                <p class="header_color"  >Patient Health</p>
            </a>
        </div>
        <span class="nav-toggle"></span>
        <div class="nav-right nav-menu">
            <a class="nav-item header_color" href="home.php">Home</a>
            <a class="nav-item header_color" href="aboutus.php">About</a>
            <a class="nav-item header_color" id="profile_tab" href="profile.php">Profile</a>
            <span class="nav-item">
                <a class="button is-primary is-inverted"  onclick="loginRedirect()"  style="color: black !important; ">
                    <span id="signinbtn">SignIn</span><span class="icon"><i class="fa fa-sign-in"></i></span></a>
            </span>
        </div>
    </div>
</header>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script>
$(window).on('load', function()
{ 
     console.log( "header");
     var pathname = window.location.pathname; // Returns path only
     //var url  = window.location.href;
    // var pathname=$(location).attr('href');
     if(pathname=='/PatientHealthMonitoringSystem/home.php')
     {
         console.log("yes");
          $("#header").addClass("header");
           $("#header").removeClass("header1");
     }
     else{
     console.log("hhsd"); 
     $("#header").removeClass("header");
    $("#header").addClass("header1");
     }
});
</script>
