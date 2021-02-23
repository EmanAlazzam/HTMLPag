confirm("WELLCOME TO OUR FLOWER MARKET!");

 confirm("Don't just check the prices enjoy your journy");
 
 var flowerChar =prompt("Please choose a charecter[A B C]!");
 if( flowerChar=="A"){
     alert("congratulations!! you earned a DISCOUNT! It's 50%")
 } else if(flowerChar=="B"){
    alert("congratulations!! you earned a DISCOUNT! It's 30%")

 }else if(flowerChar=="C"){
    alert("congratulations!! you earned a DISCOUNT! It's 20%")

 }
 else{
    alert("congratulations!! you earned a DISCOUNT! It's 15%")
 
 }
 
var flwType=prompt("Which Type Of flowers Do You Preferred? Winter or Summer!");
var flType=flwType.toLowerCase();
if (flType=="winter"){
    alert("Welcome to Winter Page!");
    location.replace("https://emanalazzam.github.io/HTMLPag/")

} 
else if (flType=="summer"){
    alert("Welcome to Summer Page!");
    location.replace("https://halakhamayseh.github.io/HTML_SCC/")
}

