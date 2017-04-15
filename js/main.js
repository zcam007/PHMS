var sensorvalue;
var sensor_avg_value;
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
                sensor_avg_value=(sensorprevvalue+sensorvalue)/2;

            }
        });
        repeater = setTimeout(fetchdata, 2000);
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
    if(flag)
    {
        startgif();
        fetchdata();
        graph.style.display='block';
        status.style.display='block';
        returnStatus();
    }
    else
    {
        console.log(flag);
        stopgif();
        stop_fetchdata();
        graph.style.display='none';
        status.style.display='none';
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
    console.log("return status trigerred");
    var gender=getCookie("c_gender");
    var age=getCookie("c_age");
    console.log(gender,age);
    if(gender=="Male")
    {
        if(age<=25)
        {
            if(sensor_avg_value>=49 && sensor_avg_value<=55)
            {
                console.log("Athelete");
            }
            else if(sensor_avg_value>=56 && sensor_avg_value<=61)
            {
                console.log("Excellent");
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=65)
            {
                console.log("Good");
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=69)
            {
                console.log("Abve avg");
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Avg");
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=81)
            {
                console.log("Below Avg");
            }
             else if(sensor_avg_value>=82)
            {
                console.log("Poor");
            }
        }
        if(age>=26 && age<=35)
        {
            if(sensor_avg_value>=49 && sensor_avg_value<=54)
            {
                console.log("Athelete");
            }
            else if(sensor_avg_value>=55 && sensor_avg_value<=61)
            {
                console.log("Excellent");
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=65)
            {
                console.log("Good");
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=70)
            {
                console.log("Abve avg");
            }
             else if(sensor_avg_value>=71 && sensor_avg_value<=74)
            {
                console.log("Avg");
            }
             else if(sensor_avg_value>=75 && sensor_avg_value<=81)
            {
                console.log("Below Avg");
            }
             else if(sensor_avg_value>=82)
            {
                console.log("Poor");
            }
        }
        if(age>=36 && age<=45)
        {
            if(sensor_avg_value>=50 && sensor_avg_value<=56)
            {
                console.log("Athelete");
            }
            else if(sensor_avg_value>=57 && sensor_avg_value<=62)
            {
                console.log("Excellent");
            }
             else if(sensor_avg_value>=63 && sensor_avg_value<=66)
            {
                console.log("Good");
            }
             else if(sensor_avg_value>=67 && sensor_avg_value<=70)
            {
                console.log("Abve avg");
            }
             else if(sensor_avg_value>=71 && sensor_avg_value<=75)
            {
                console.log("Avg");
            }
             else if(sensor_avg_value>=76 && sensor_avg_value<=82)
            {
                console.log("Below Avg");
            }
             else if(sensor_avg_value>=83)
            {
                console.log("Poor");
            }
        }
        if(age>=46 && age<=55)
        {
            if(sensor_avg_value>=50 && sensor_avg_value<=57)
            {
                console.log("Athelete");
            }
            else if(sensor_avg_value>=58 && sensor_avg_value<=63)
            {
                console.log("Excellent");
            }
             else if(sensor_avg_value>=64 && sensor_avg_value<=67)
            {
                console.log("Good");
            }
             else if(sensor_avg_value>=68 && sensor_avg_value<=71)
            {
                console.log("Abve avg");
            }
             else if(sensor_avg_value>=72 && sensor_avg_value<=76)
            {
                console.log("Avg");
            }
             else if(sensor_avg_value>=77 && sensor_avg_value<=83)
            {
                console.log("Below Avg");
            }
             else if(sensor_avg_value>=84)
            {
                console.log("Poor");
            }
        }
        if(age>=56 && age<=65)
        {
            if(sensor_avg_value>=51 && sensor_avg_value<=56)
            {
                console.log("Athelete");
            }
            else if(sensor_avg_value>=57 && sensor_avg_value<=61)
            {
                console.log("Excellent");
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=67)
            {
                console.log("Good");
            }
             else if(sensor_avg_value>=68 && sensor_avg_value<=71)
            {
                console.log("Abve avg");
            }
             else if(sensor_avg_value>=72 && sensor_avg_value<=75)
            {
                console.log("Avg");
            }
             else if(sensor_avg_value>=76 && sensor_avg_value<=81)
            {
                console.log("Below Avg");
            }
             else if(sensor_avg_value>=82)
            {
                console.log("Poor");
            }
        }
        if(age>65)
        {
            if(sensor_avg_value>=50 && sensor_avg_value<=55)
            {
                console.log("Athelete");
            }
            else if(sensor_avg_value>=56 && sensor_avg_value<=61)
            {
                console.log("Excellent");
            }
             else if(sensor_avg_value>=62 && sensor_avg_value<=65)
            {
                console.log("Good");
            }
             else if(sensor_avg_value>=66 && sensor_avg_value<=69)
            {
                console.log("Abve avg");
            }
             else if(sensor_avg_value>=70 && sensor_avg_value<=73)
            {
                console.log("Avg");
            }
             else if(sensor_avg_value>=74 && sensor_avg_value<=79)
            {
                console.log("Below Avg");
            }
             else if(sensor_avg_value>=80)
            {
                console.log("Poor");
            }
        }
    }
}