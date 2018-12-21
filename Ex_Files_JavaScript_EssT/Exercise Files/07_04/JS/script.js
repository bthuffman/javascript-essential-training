const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

//Event handlers are fine for DOM level events with a single function...
// CTA.onclick = reveal;
//This second event would take precedence and the one above would no longer cause the pop up message to occur or stop the jumping up to the top of the page when "Book Now" is clicked.
// CTA.onclick = console.log("The button has been clicked"); //This would normally take precendence over the other one above it, thus breaking what we fixed. We need an event listener to do multiple things to happen on a single event. Also necessary for a browser level event.

//event listener to replace
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){console.log("the button was clicked");},false);

