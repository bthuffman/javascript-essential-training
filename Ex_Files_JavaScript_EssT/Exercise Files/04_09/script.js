//Objects are used to create a cluster of related data and may want to do something with it using properties and methods.
//This course is like an object, and should be able to get any of the data. If we had multiple courses would hve to use a multideminsional array which would be difficult.
//Using an object, we can set up a model for the course data and then use custom methods to be used on any defined course obejct.

// var course = newObject();

//The following are object properties (variables associated witht he object).
// course.title = "JavaScript Essential Training";
// course.instructor = "Morten Rand-Hendriksen";
// course.level = 1;
// course.published = true;
// course.views = 0;

//Shorthand below:

var course = {
	title: "JavaScript Essential Training",
	instructor: "Morten Rand-Hendriksen",
	level: 1,
	published: true,
	views: 0,
	updateViews: function(){ //This is a method.
		return ++course.views;
	}
}

//Can retrieve the course objects by calling it...
console.log(course);
course.updateViews();
console.log(course);