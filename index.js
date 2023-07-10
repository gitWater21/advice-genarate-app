let advice_text = document.getElementById("advice_text");
let advice_btn = document.getElementById("advice_btn");
let advice_id = document.getElementById("advice_id");
let advice_url = "https://api.adviceslip.com/advice";


async function genarateAdvice(){
 let res = await fetch(advice_url);
 let advice_data = await res.json();
 // console.log(advice_data);
 advice_id.innerText= advice_data.slip.id;
 advice_text.innerText= advice_data.slip.advice;
 
}

genarateAdvice();

advice_btn.addEventListener("click", genarateAdvice);


