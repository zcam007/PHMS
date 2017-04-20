var sensorvalue;
var sensor_avg_value;
var ageShuffleFlag=false;
var underAgeActivities;
function loginRedirect() {
    console.log("hello");
    var k=document.getElementById("signinbtn").innerText;
    if(k=="SignIn")
    {
        console.log("signin");
        window.location.href="signin.php";
    }
    else
    {
        logout();
    }
}
function logout() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function()
    {
        document.location = 'logout.php';
    }
    xhr.open('GET', 'logoutajax.php', true);
    xhr.send();
}
function signUpRedirect() {
    window.location="signup.php";
}


function fetchdata(){
    console.log("asd");
    getJSON("https://api.thingspeak.com/channels/258210/feeds.json?api_key=RAH5AK4OKTMV3Y3F",
        function(err, data) {
            if (err != null) {
                alert("Something went wrong: " + err);
            } 
            else
             {
                var len=data.feeds.length;
                //alert(len);
                var i;
                var text="";
                console.log(len);
                for( i=0;i<len;i++)
                {
                   // text += data.feeds[i].field1 + "<br>";
                }
               // document.getElementById("tester").innerHTML = text;
               sensorprevvalue=data.feeds[len-2].field1;
                sensorvalue=data.feeds[len-1].field1;
               
                document.getElementById("bpmskeleton").innerHTML = "Heart Beats Per Minute:"+sensorvalue;
                sensor_avg_value=( parseInt(sensorprevvalue)+parseInt(sensorvalue))/2.0;
                // console.log(sensorprevvalue,sensorvalue,sensor_avg_value);
                setCookie("c_sensor_avg_value",sensor_avg_value,30);
                returnStatus();
            }
        });
        repeater = setTimeout(fetchdata, 2000);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var getJSON = function(url, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function()
    {
        var status = xhr.status;
        if (status == 200)
        {
            callback(null, xhr.response);
        }
        else
        {
            callback(status);
        }
    };
    xhr.send();
};
function stop_fetchdata() {
    clearTimeout(repeater);
    
}
function startgif()
{
   var k= document.getElementById('heartbeat');
   k.src='img/h_b1.gif';
}
function stopgif()
{
 var k= document.getElementById('heartbeat');
   k.src='img/h_b_stop.jpg';   
}

function btnctrlfunc()
{
    var flag=document.getElementById('ctrlbutton').checked;
    var graph=document.getElementById('switch_control');
    var status=document.getElementById('statusbar');
    var status_table=document.getElementById('statustable');
    var blnk=document.getElementById('live_blink');
    if(flag)
    {
        startgif();
        fetchdata();
        graph.style.display='block';
        status.style.display='block';
        status_table.style.display='block';
        blnk.style.display='block';
        $("#switch_control").removeClass("animated fadeOutDown");
        $("#switch_control").addClass("animated fadeInUp");
        ageShuffleFlag=false; //For shuffling
        $("#statustable").removeClass("animated fadeOutDown");
        $("#statustable").addClass("animated flipInY");
        
    }
    else
    {
        console.log(flag);
        stopgif();
        stop_fetchdata();
        $("#switch_control").removeClass("animated fadeInUp");
        $("#switch_control").addClass("animated fadeOutDown");
        
        $("#statustable").removeClass("animated flipInY");
        $("#statustable").addClass("animated fadeOutDown");
        
        //graph.style.display='none';
        //statustable.style.display='none';
        blnk.style.display='none';
        //status_table.style.display='none';
        
        document.getElementById("bpmskeleton").innerHTML = "Heart Beats Per Minute: Not Loaded!";
    }
    
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++)
     {
        var c = ca[i];
        while (c.charAt(0) == ' ')
         {
            c = c.substring(1);
         }
        if (c.indexOf(name) == 0)
         {
            return c.substring(name.length, c.length);
         }
    }
    return "";
}

function returnStatus()
{
   // console.log("return status trigerred");
    var gender=getCookie("c_gender");
    var age=getCookie("c_age");
    var statusmsg=document.getElementById('statusmsg');
    console.log(gender,age);
    sensor_avg_value=parseInt(sensor_avg_value);
    var colors=["green","#7EC0EE","red"];
    var tags=["Athelete","Excellent","Good","Above Average","Average","Below Average","Poor"];
    if(gender=="Male")
    {
       male(age,colors,tags);
    }
    else if(gender=="Female")
    {
        female(age,colors,tags);
    }
}

function ajaxEMAIL()
{
    console.log("Email Triggered");
    $.ajax({
  url: "email.php",
  context: document.body
}).done(function() {
  //alert('sent');
}).fail(function() {
    alert( "Error sending E-Mail" );
  });
}

function ajaxSMS()
{
    console.log("SMS Triggered");
    $.ajax({
  url: "sendsms/index.php",
  context: document.body
}).done(function() {
  //alert('sent');
}).fail(function() {
    alert( "Error sending SMS" );
  });
}

function triggerAlerts()
{
    ajaxEMAIL();
    ajaxSMS();
}
function male(age,colors,tags)
{
    console.log("Male triggered");
     if(age<=25)
        {
            if(sensor_avg_value>=49 && sensor_avg_value<=55)
            {
                console.log(tags[0]);
                statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
                recommendation(age, statusmsg.innerHTML,tags);
            }
            else if(sensor_avg_value>=56 && sensor_avg_value<=61)
            {
                console.log(tags[1]);
                statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
                recommendation(age, statusmsg.innerHTML,tags);
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=65)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
                recommendation(age, statusmsg.innerHTML,tags);
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=69)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
                /*********/
                recommendation(age, statusmsg.innerHTML,tags);
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
                recommendation(age, statusmsg.innerHTML,tags);
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=81)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
                recommendation(age, statusmsg.innerHTML,tags);
            }
             else if(sensor_avg_value>=82)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
                recommendation(age, statusmsg.innerHTML,tags);
                
            }
        }
        if(age>=26 && age<=35)
        {
            if(sensor_avg_value>=49 && sensor_avg_value<=54)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=55 && sensor_avg_value<=61)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=65)
            {
                console.log(tags[2]);
                 statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=70)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=71 && sensor_avg_value<=74)
            {
                console.log("Avg");
                 statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=75 && sensor_avg_value<=81)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=82)
            {
                console.log(tags[6]);
                 statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
                
            }
            recommendation(age, statusmsg.innerHTML,tags);
        }
        if(age>=36 && age<=45)
        {
            if(sensor_avg_value>=50 && sensor_avg_value<=56)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=57 && sensor_avg_value<=62)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=63 && sensor_avg_value<=66)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=67 && sensor_avg_value<=70)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=71 && sensor_avg_value<=75)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=76 && sensor_avg_value<=82)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=83)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
             recommendation(age, statusmsg.innerHTML,tags);
        }
        if(age>=46 && age<=55)
        {
            if(sensor_avg_value>=50 && sensor_avg_value<=57)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=58 && sensor_avg_value<=63)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=64 && sensor_avg_value<=67)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=68 && sensor_avg_value<=71)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=72 && sensor_avg_value<=76)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=77 && sensor_avg_value<=83)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=84)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
             recommendation(age, statusmsg.innerHTML,tags);
        }
        if(age>=56 && age<=65)
        {
            if(sensor_avg_value>=51 && sensor_avg_value<=56)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=57 && sensor_avg_value<=61)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=67)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=68 && sensor_avg_value<=71)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=72 && sensor_avg_value<=75)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=76 && sensor_avg_value<=81)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=82)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
             recommendation(age, statusmsg.innerHTML,tags);
        }
        if(age>65)
        {
            if(sensor_avg_value>=50 && sensor_avg_value<=55)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=56 && sensor_avg_value<=61)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=65)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=69)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=79)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=80)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
             recommendation(age, statusmsg.innerHTML,tags);
        }
}
function female(age,colors,tags)
{
    console.log("female Triggered");
    if(age<=25)
        {
            if(sensor_avg_value>=54 && sensor_avg_value<=60)
            {
                console.log(tags[0]);
                statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=61 && sensor_avg_value<=65)
            {
                console.log(tags[1]);
                statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=69)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=78)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=79 && sensor_avg_value<=84)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=85)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
        }
        if(age>=26 && age<=35)
        {
            if(sensor_avg_value>=54 && sensor_avg_value<=59)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=60 && sensor_avg_value<=64)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=65 && sensor_avg_value<=68)
            {
                console.log(tags[2]);
                 statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=69 && sensor_avg_value<=72)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=73 && sensor_avg_value<=76)
            {
                console.log("Avg");
                 statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=77 && sensor_avg_value<=82)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=83)
            {
                console.log(tags[6]);
                 statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
                console.log("saddd");
                sms();
            }
        }
        if(age>=36 && age<=45)
        {
            if(sensor_avg_value>=54 && sensor_avg_value<=59)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=60 && sensor_avg_value<=64)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=65 && sensor_avg_value<=69)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=78)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=79 && sensor_avg_value<=84)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=85)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
        }
        if(age>=46 && age<=55)
        {
            if(sensor_avg_value>=54 && sensor_avg_value<=60)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=61 && sensor_avg_value<=65)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=65 && sensor_avg_value<=69)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=77)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=78 && sensor_avg_value<=83)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=84)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
        }
        if(age>=56 && age<=65)
        {
            if(sensor_avg_value>=54 && sensor_avg_value<=59)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=60 && sensor_avg_value<=64)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=65 && sensor_avg_value<=68)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=69 && sensor_avg_value<=73)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=77)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=78 && sensor_avg_value<=83)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=84)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
        }
        if(age>65)
        {
            if(sensor_avg_value>=54 && sensor_avg_value<=59)
            {
                console.log(tags[0]);
                 statusmsg.innerHTML=tags[0];
                statusmsg.style.color=colors[0];
            }
            else if(sensor_avg_value>=60 && sensor_avg_value<=64)
            {
                console.log(tags[1]);
                 statusmsg.innerHTML=tags[1];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=65 && sensor_avg_value<=68)
            {
                console.log(tags[2]);
                statusmsg.innerHTML=tags[2];
                statusmsg.style.color=colors[0];
            }
             else if(sensor_avg_value>=69 && sensor_avg_value<=72)
            {
                console.log("Abve avg");
                statusmsg.innerHTML=tags[3];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=73 && sensor_avg_value<=76)
            {
                console.log("Avg");
                statusmsg.innerHTML=tags[4];
                statusmsg.style.color=colors[1];
            }
             else if(sensor_avg_value>=77 && sensor_avg_value<=84)
            {
                console.log("Below Avg");
                statusmsg.innerHTML=tags[5];
                statusmsg.style.color=colors[2];
            }
             else if(sensor_avg_value>=84)
            {
                console.log(tags[6]);
                statusmsg.innerHTML=tags[6];
                statusmsg.style.color=colors[2];
            }
        }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function recommendation(age,msg,tags)
{
    /*    --TAGS--
        0-"Athelete",
        1-"Excellent",
        2-"Good",
        3-"Above Average",
        4-"Average",
        5-"Below Average",
        6-"Poor"
    */
   
    console.log("recommendation triggered");
   // $('#recommendationDIV p').html('');
  //  $('#recommendationDIV ul').html('');
    $('#recommendationDIV').html('');
    if(msg==tags[0]||msg==tags[1]||msg==tags[2])
    {
    $('#recommendationDIV').append('<p class="_recResults">Your Heart Rate is Perfect.. Keep up the Good work!</p>');
    }
    else if(msg==tags[3]||msg==tags[4])//abv_avg && Average
    { 
    $('#recommendationDIV').append('<p class="_recResults">Your Heart Rate is Average.. Please follow below things to Maintain good health!</p>');
    $('#recommendationDIV').append('<br/><ul id="recSubTree" "><li class="_recResultsListitems">Based on your Age</li></ul>');
    ageRecommendation(age);

    }
    else //Below Average && Poor
    {
       $('#recommendationDIV').append('<p class="_recResults">Your Heart Rate is Poor.. Please be Cautious about your health!</p>');
       $('#recommendationDIV').append('<br/><ul id="recSubTree" "><li class="_recResultsListitems">Based on your Age</li></ul>');
       ageRecommendation(age);
       $('#recommendationDIV').append('<br/><ul id="recSubTree" "><li class="_recResultsListitems">Based on your Food Habits</li></ul>');
      
    }
    console.log(age,msg);
}

function ageRecommendation(age)
{
    var activities=["Reduce Stress🙆‍","Regular Excersize&#x1f3cb;","Sleep Better🛌","Eat Chocolates🍫","Avoid Smoking&#x1f6ad;","Reduce Intake of Caffeine&#x2615;","Do Regular Yoga🤸","Loose Weight🛴","Regular Walking&#x1f6b6;"];
    if(age<=25)
    {
        if(!ageShuffleFlag){
        underAgeActivities=[activities[0],activities[1],activities[2],activities[3],activities[4]];
        underAgeActivities = shuffle(underAgeActivities);
        ageShuffleFlag=true;
        }
        for(i=0;i<5;i++)
        {
         $('#recSubTree').append('<li class="_subtreeItems">'+underAgeActivities[i]+'</li>');
        }
    }
    else if(age>=26 && age<=55)
    {
        if(!ageShuffleFlag){
        underAgeActivities=[activities[0],activities[1],activities[4],activities[5],activities[6]];
        underAgeActivities = shuffle(underAgeActivities);
        ageShuffleFlag=true;
        }
        for(i=0;i<5;i++)
        {
         $('#recSubTree').append('<li class="_subtreeItems">'+underAgeActivities[i]+'</li>');
        }
    }
    else //age>65
    {
        if(!ageShuffleFlag){
        underAgeActivities=[activities[4],activities[5],activities[6],activities[7],activities[8]];
        underAgeActivities = shuffle(underAgeActivities);
        ageShuffleFlag=true;
        }
        for(i=0;i<5;i++)
        {
         $('#recSubTree').append('<li class="_subtreeItems">'+underAgeActivities[i]+'</li>');
        }
    }
}