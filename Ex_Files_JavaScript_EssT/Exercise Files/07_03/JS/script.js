//button
const CTA = document.querySelector(".cta a");
//booking alert area
const ALERT = document.querySelector("#booking-alert");

//removing the hide class and adding hide class to the alert.
CTA.classList.remove("hide");
ALERT.classList.add("hide");

//To toggle the hide class on and off
function reveal(e){
	e.preventDefault();
	CTA.classList.toggle("hide");
	ALERT.classList.toggle("hide");
}

//Get button to trigger the reveal script
CTA.onclick = reveal;

//Catch the event object as a attribute in the function that is triggered by in not so many words via e.preventDefault();. To get it to work you add e as an object the the function reveal qed/function reveal(e)/ You can always play around with this, but this fixes the clicking of the minimized blank "book now!" button so that it doesn't jump to the top of the page when it's clicked. [the reason that happens is it's href = # reffering to the same page.]
