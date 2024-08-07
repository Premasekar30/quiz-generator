
var answer =document.getElementById("task1-answer")
var btn1 =document.getElementById("task1-btn1")



//random number generator
const updateRandomNumber =() => {
    answer.innerHTML =Math.floor(Math.random()*100);

}

btn1.addEventListener('click', () =>
updateRandomNumber());

updateRandomNumber();

//counter

var counteranswer =document.getElementById("task2-answer")
var btn2 =document.getElementById("task2-btn1")
var btn3 =document.getElementById("task2-btn2")

let a=1;

btn2.addEventListener("click",() => {
    a++;
    a=(a<100)?"0" +a:a;
    counteranswer.innerText=a;
    console.log(a);
});

btn3.addEventListener("click",() => {
    a--;
    a=(a<100)?"0" +a:a;
    counteranswer.innerText=a;
    console.log(a);
});



