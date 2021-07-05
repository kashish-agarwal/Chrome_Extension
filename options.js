function tm(tot){
    var days=parseInt(tot/86400);
    tot-=days*86400;
    var hours=parseInt(tot/3600);
    tot-=hours*3600;
    var mins=parseInt(tot/60);
    tot-=mins*60;
    var secs=tot;
    var str=days+" days "+hours+" hours "+mins+" mins "+secs+" secs ";
    return str;
}

var TODAY=JSON.parse(localStorage.getItem("today"));
var TODAY_TIME=JSON.parse(localStorage.getItem("today_time"));

var i;

function generate(){
    arr = [];
    for(i=0;i<TODAY.length;i++){
        arr.push({label : TODAY[i] , y : TODAY_TIME[i]/60});
    }
    return arr;
}


window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title:{
            text: "Today's Activity"              
        },
        data: [              
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints : generate()
        }
        ]
    });
    chart.render();
}
