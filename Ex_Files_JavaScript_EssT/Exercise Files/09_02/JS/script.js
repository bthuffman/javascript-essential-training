var extLinks = document.querySelectorAll('a[href^="http"]');
// console.log(extLinks);

//loop to run through each item in array
for( var i = 0; i < extLinks.length; i++) {
	// console.log(extLinks[i]);
	//conditional statement to see if has target attribute and if not then to apply it.
	if (!extLinks[i].hasAttribute("target")) {
		extLinks[i].setAttribute("target", "_blank");
	}
}
