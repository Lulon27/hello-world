var counterValue = 0;

const counter_display = document.getElementById("counter1");
const button1 = document.getElementById("button1");

console.log("hello");

button1.addEventListener("click", function() {
    console.log("click");
    counterValue++;
    counter_display.innerHTML = counterValue;
});