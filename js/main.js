const USD = 9433.34;
const EUR = 10354.03;

var sum = prompt("Pulingiz miqdorini kirgazing: ");
var yol = USD * 500;
var hotel = USD * 250;
var enjoy = EUR * 120;
var allSum = yol + hotel + enjoy;

document.querySelector(".result").innerHTML = allSum;
document.querySelector(".result2").innerHTML = sum;
document.querySelector(".result5").innerHTML = allSum - sum;

if(allSum > sum){
    var words = document.querySelector(".result3");
    words.textContent = "Alisher, ozgina sabr qilish kerak bo’lar ekan.";
}else{
    var words = document.querySelector(".result4");
    words.textContent = "Oq yo’l, Alisher!";
}