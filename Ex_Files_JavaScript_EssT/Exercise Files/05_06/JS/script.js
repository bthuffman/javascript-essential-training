// .createElement();   // Create an element
// .createTextNode(); //Create a text node
// .appendChild();  //Plae on child node inside of another
/*
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
//The second constant bypasses all the layers on the DOM tree by referencing featured.

//get image alt attribute
var altText = THEIMAGE.getAttribute("alt");

//creates a figcaption that is not placed anywhere in the document just flaoting in teh browser
var captionElement = document.createElement("figcaption");

//create text node to hold alt text
var captionText = document.createTextNode(altText);

//append the caption text node inside the caption element
captionElement.appendChild(captionText);

console.log(captionElement);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");

***********************************************************/
//New method to do the same thing, append.
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
//The second constant bypasses all the layers on the DOM tree by referencing featured.

//get image alt attribute
var altText = THEIMAGE.getAttribute("alt");

//creates a figcaption that is not placed anywhere in the document just flaoting in teh browser
var captionElement = document.createElement("figcaption");

captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "");

//if use this append method vs create text node and append child then you will want to check out the mozilla network for polyfill and have back up plans.