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
    $('#max').text(localStorage.getItem("max time site"));
    $('#time').text(tm(parseInt(localStorage.getItem("max time spent"))));
});