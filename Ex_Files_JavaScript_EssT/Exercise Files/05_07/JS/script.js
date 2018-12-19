//Javascript writes to the inline of the element(HTML not CSS file).
/*
.hasAttribute("style"); //Does the element have style?
.getAttribute("style"); //Get the inline styles
.getAttribute("style", "color: red"); //Add css property.
.removeAttribute("style"); //Remove inline styles.
***********************************************************/
//Like previous sections of this "chapter", a significant portion of this is being done in the console using document.querySelector("").
//For example...
document.querySelector(".cta a").setAttribute("style","padding: 2em")
// Note this overrides whatever CSS is applied to an element. If your using Javascript to apply inline styles, CSS is likely more effective especially for small things (managed with classes etc).
//Inline styles make sense when styles are dynamically updated on the fly by the browser. Just see if a class (CSS) can do the job of an inline style(JavaS)