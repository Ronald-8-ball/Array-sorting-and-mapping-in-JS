//array
var numbers = [1,5,2,78,4,3,8,99]
document.getElementById("p1").innerHTML = numbers.sort(function(a,b){return a-b})
document.getElementById("p2").innerHTML = numbers.reverse(function(a,b) {return a-b})