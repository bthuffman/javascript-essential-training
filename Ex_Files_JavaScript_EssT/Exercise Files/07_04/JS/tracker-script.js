const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE1 = document.querySelector('.circle1');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 260;
    var verticalPosition= windowHeight - e.clientY - 260;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function mouseCoordinates1(e) {
    var horizontalPosition = windowWidth - e.clientX +  260;
    var verticalPosition = windowHeight - e.clientY + 260;

	CIRCLE1.style.left = horizontalPosition + 'px';
	CIRCLE1.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

function changeColorOnTouch1() {
	CIRCLE1.style.backgroundColor = "blue";
	CIRCLE1.style.borderColor = "yellow";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREA.addEventListener('mousemove', mouseCoordinates1, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE1.addEventListener('mouseenter', changeColorOnTouch1, false);
// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLE1.addEventListener('mouseleave', function(){CIRCLE1.removeAttribute("style");},false);
