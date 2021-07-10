
var maxi=0;
let today=[];
today_time=[];
var max_vis="max time site",max_spent="max time spent";
setInterval(function(){
    var d=new Date();
    if(localStorage.getItem("date")===null){
        localStorage.setItem("date",parseInt(d.getDate()));
    }
    var x=parseInt(localStorage.getItem("date"));
    if(d.getDate()!=x||localStorage.getItem("today")===null){
        a=[];
        localStorage.setItem("today",JSON.stringify(a));
        localStorage.setItem("today_time",JSON.stringify(a));
        localStorage.setItem("date",d.getDate());
    }
    if(localStorage.getItem(max_vis)===null){
        localStorage.setItem(max_vis,"newtab");
        localStorage.setItem(max_spent,maxi);
    }
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var link=document.createElement('a');
        link.href=tabs[0].url;
        var add=link.hostname;
        if(localStorage.getItem(add)===null){
            localStorage.setItem(add,0);
        }
        Today=JSON.parse(localStorage.getItem("today"));
        Today_time=JSON.parse(localStorage.getItem("today_time"));
        if(Today.indexOf(add)==-1){
            Today.push(add);
            Today_time.push(parseInt(1));
        }
        else{
            var x=parseInt(Today_time[Today.indexOf(add)]);
            x++;
            Today_time[Today.indexOf(add)]=x;
            if(x%3600==0){
                alert(parseInt(x/3600) + " hours spent");
            }
        }
        localStorage.setItem("today",JSON.stringify(Today));
        localStorage.setItem("today_time",JSON.stringify(Today_time));
        var check=parseInt(localStorage.getItem(add));
        check++;
        localStorage.setItem(add,check);
        var maxi=parseInt(localStorage.getItem(max_spent));
        if(maxi<check){
            maxi=check;
            localStorage.setItem(max_spent,maxi);
            localStorage.setItem(max_vis,add);
        }
    });
},1000);
