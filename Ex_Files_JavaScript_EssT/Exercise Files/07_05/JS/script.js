const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e,current) {
    e.preventDefault();
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}
//in the first event listener below we create an anonymous funtion, call reveal and pass "this" (the object we just clicked, i.e. the link) as the argument.
CTA.addEventListener('click', function(e){reveal(e,this );}, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
// to keep the e.preventDefault see where put e. Successfully passing the event object and a custom arguement passed by the event listener.