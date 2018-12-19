//This isn't great at dealing with multiple objects because have to define the properties for each.
/*
var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);
**********************************************************/
//Using object constructors, templates used to create objects, we can define once and create new objects easily.
function Course(title, instructor, level, published, views) {
    this.title = title;    //this refers to the current object, title is the object and = title is the argument
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
}

//using constructor we can create an array for holding all the courses.
var courses = [
	new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0 ),
    new Course("Up and Running with ECMASCript 6", "Eve Porcello", 1, true, 123456),
]

console.log(courses);
//With both courses as independent entities inside the array we can call on any property in any of these course objects. See next line...
console.log(courses[1].updateViews()); //increased the views by 1.



// var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0 );

// var course02 = new Course("Up and Running with ECMASCript 6", "Eve Porcello", 1, true, 123456);

// console.log(course01);
// console.log(course02);

//So far dot notation has been used to access properties.
//object.property
//ex. course.title
//In bracket notation this would be:
//course["title"]
//The bracket notation is for properties with wierd name sthat would mess up the code such as WP:image. The colon (:) would be recognized as a operator without the bracket notation which recognizes this property as a string.
//The dot notation is more for properly named properties wheras bracket notation often occurs when wierd name such as those produced form another program.
//example course.WP:image would break the code, course["WP:image"] would work.
