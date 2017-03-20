<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 16-Mar-17
 * Time: 7:59 PM
 */
//https://plot.ly/javascript/line-charts/

?>
<script src="https://cdn.plot.ly/plotly-1.2.0.min.js"></script>
<script src="js/main.js"></script>
<div id="tester" onclick="fetchdataa()" style="width:600px;height:250px;">dff</div>
<iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/244497/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

<script>
    function fetchdataa(){
        console.log("ahihihihsd");
        var text=[];

        getJSON("https://api.thingspeak.com/channels/244497/feeds.json?api_key=JWLSXR4C439LN1WD",
            function(err, data) {
                if (err != null) {
                    alert("Something went wrong: " + err);
                } else {
                    var len=data.feeds.length;
                    //alert(len);
                    var i;
                    for( i=0;i<len;i++)
                    {
                        text[i]= data.feeds[i].field1;


                    }
                    console.log(text);
                    var trace1 = {
                        x: [10, 15, 13, 17,19,20,50],
                        y: text,
                        mode: 'lines+markers',
                        marker: {
                            color: 'rgb(219, 64, 82)',
                            size: 12
                        }
                    };
                    var data = [trace1];

                    var layout = {
                        title: 'Line and Scatter Styling'
                    };

                    Plotly.newPlot('tester', data, layout);
                }
            });
        //console.log(text[0]);

    }


</script>
