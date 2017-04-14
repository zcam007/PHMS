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
    getJSON("https://api.thingspeak.com/channels/216291/feeds.json?api_key=V6IXK0RWVMUB5AZ0",
        function(err, data) {
            if (err != null) {
                alert("Something went wrong: " + err);
            } else {
                var len=data.feeds.length;
                //alert(len);
                var i;
                var text="";
                for( i=0;i<len;i++)
                {
                    text += data.feeds[i].field1 + "<br>";
                }
                document.getElementById("decoy").innerHTML = text;
            }
        });
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

function test()
{
    console.log("asd");
   var k= document.getElementById('heartbeat');
   k.src='img/h_b1.gif';
}