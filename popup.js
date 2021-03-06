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

var limit=0;

chrome.tabs.getSelected(null,function(tab){
    var link=document.createElement('a');
    link.href=tab.url;
    var url=link.hostname;
    $('#host').html(url);
    var tot=parseInt(localStorage.getItem(url));
    $('#total').text(tm(tot));
    var today=JSON.parse(localStorage.getItem("today"));
    var today_time=JSON.parse(localStorage.getItem("today_time"));
    $('#t').text(tm(parseInt(today_time[today.indexOf(url)])));
});

var TODAY=JSON.parse(localStorage.getItem("today"));
var TODAY_TIME=JSON.parse(localStorage.getItem("today_time"));

var i;
var text;
for(i=0;i<TODAY.length;i++)
{
    text=TODAY[i]+": "+tm(TODAY_TIME[i]);
    document.write(text+"<br>");
}



       
