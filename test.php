<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 16-Mar-17
 * Time: 7:59 PM
 */
//https://plot.ly/javascript/line-charts/

?>
<script src="js/main.js"></script>
<div id="tester" onclick="fetch1()" style="width:600px;height:250px;">dff</div>

<script>

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
                    text += data.feeds[i].field1 + "<br>";
                }
               // document.getElementById("tester").innerHTML = text;
                var te=data.feeds[len-1].field1;
                document.getElementById("tester").innerHTML = te;

            }
        });
        repeater = setTimeout(fetch, 1000);
}
function fetch1()
{
    fetch();
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
</script>
