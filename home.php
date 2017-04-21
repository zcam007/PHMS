
<?php
include('master\header.php');
include('master.php');?>
<style>
.title_shadow
{
text-shadow: 0px 0px 30px white !important;
   }
</style>
<script src="js/typed.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.js"></script>
<script src="typed.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function(){
        Typed.new(".subtitle", {
            strings: ["Live Monitoring.","Recommendations.","Real Time Data.","Alerts."],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 0,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // shuffle the strings
            shuffle: false,
            // time before backspacing
            backDelay: 1000,
            // loop
            loop: true,
            // null = infinite
            loopCount: null,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });
</script>
<script src="js/conn.js"></script>
<section class="hero is-black is-large">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head"></div>

    <!-- Hero content: will be in the middle -->
    <canvas style="position:absolute;z-index:1;"></canvas>
    <div class="hero-body" style="height:800px;">
        
        <div class="container has-text-centered" style=";z-index:100;">
            <h1 class=" title title_shadow">Patient Health Monitoring System</h1>
            <h2 class="subtitle">Your Health is our health!</h2>

        </div>
    </div>
    
</section>
<?php
include('master\footer.php');
?>



