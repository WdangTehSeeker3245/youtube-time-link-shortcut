function n77Ok() {
    var Youtube = document.getElementById("tfYtlink").value;
    var Second = parseInt(document.getElementById("tfSecond").value);
    var Minute = parseInt(document.getElementById("tfMinute").value);
    var Hours = parseInt(document.getElementById("tfHours").value);
    
    var jumlah = Second+(Minute*60)+((Hours*60)*60);
    var append = Youtube+'&t='+jumlah+'s';
    document.getElementById("tfYtlink").value = append;
    document.getElementById("link").innerHTML = append;
}
   
function fowardvisit() {
    var visit = document.getElementById("tfYtlink").value;
    window.open(visit);
}