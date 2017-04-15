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
                var te=data.feeds[len-1].field1;
                document.getElementById("bpmskeleton").innerHTML = "Heart Beats Per Minute:"+te;

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
    if(flag)
    {
        startgif();
        fetchdata();
        graph.style.display='block';
    }
    else
    {
        console.log(flag);
        stopgif();
        stop_fetchdata();
        graph.style.display='none';
        document.getElementById("bpmskeleton").innerHTML = "Heart Beats Per Minute: Not Loaded!";
    }
    
}