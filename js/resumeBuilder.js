/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Resources:
// - http://jsonlint.com/
// - https://discussions.udacity.com/t/header-section-not-displaying-properly/162763/11
// 	- ^ A lot of good info in the discussion forum
// - http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array


// BASIC BIO AND CONTACT
var bio = {
	"name" : "Takeshi Kunimune",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "650-798-4478",
		"email" : "takeshi.kunimune@gmail.com",
		"github" : "CatUniverse",
		"location" : "Alameda, CA"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMsg" : "oh hai, welcome. Testing resume builder!",
	"skills" : [
		"Project Management", "HTML", "CSS", "Python",
		"Javascript"
	]
};

// header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPhoto = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMsg);
$("#header").append(formattedPhoto);

// contact
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedLocation);

// skills
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (index in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
		$("#skills:last").append(formattedSkill);
	} 
}


// WORK INFO
var work = {
	"jobs": [
		{
			"employer": "Facebook, Inc",
			"title": "Technical Program Manager",
			"dates": "October 2014 - Present",
			"location": "Menlo Park, CA",
			"url": "https://www.facebook.com/",
			"description": [
				"Support for facebook code release, specifically www (web, desktop) experience."
			]
		},
		{
			"employer": "Facebook, Inc",
			"title": "Stability Manager",
			"dates": "July 2013 - October 2014",
			"location": "Menlo Park, CA",
			"url": "https://www.facebook.com/",
			"description": [
				"i do stuff here too"
			]
		}
	]
};

// function makeUL(array) {
//     // Create list element and its contents
//     // Awesome example in stackoverflow: http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
// 	var list = document.createElement('ul');
// 	for (var i = 0; i < array.length; i++) {
// 		var item = document.createElement('li');
// 		item.appendChild(document.createTextNode(array[i]));
// 		list.appendChild(item);
// 	}
// 	return list;
// }

// console.log(makeUL(work.jobs[0].description)); 
// ^ w0000t it worked
// BUT, when you try to append the entire list, it simply says [object HTMLUListElement]
// Unsure why this is happening here... :\


work.display = function() {
	for (index in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer).replace("#", work.jobs[index].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
	}
}

work.display();


// PROJECTS
var projects = {
	"projects": [
		{
			"title": "GIF Making Party",
			"dates": "Everyday on the Internet",
			"description": "We make GIFs and go nuts",
			"url": "images/partyhard.gif",
			"image": "images/partyhard.gif"
		},
		{
			"title": "Ramen Party",
			"dates": "Sunday Every Week",
			"description": "Ramen is for champions",
			"url": "images/ramen.jpg",
			"image": "images/ramen.jpg"
		}
	]
}

projects.display = function() {
	for (index in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title).replace("#", projects.projects[index].url);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].image);
		$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
	}
}

projects.display();


// EDUCATION INFO
var education = {
	"schools": [
		{
			"name": "Portland State University",
			"url": "https://www.pdx.edu/",
			"degree": "MBA",
			"dates": "2008 - 2010",
			"location": "Portland, OR",
			"major": ["Marketing", " Operational Management"]
		},
		{
			"name": "Oregon State University",
			"url": "http://oregonstate.edu/",
			"degree": "M.S.",
			"dates": "2005 - 2007",
			"location": "Corvallis, OR",
			"major": ["Food Science & Technology"]
		},
		{
			"name": "Oregon State University",
			"url": "http://oregonstate.edu/",
			"degree": "B.S.",
			"dates": "2002 - 2005",
			"location": "Corvallis, OR",
			"major": ["Biology", " Chemistry (Minor)"]
		}
	],
	"online": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com"
		},
		{
			"title": "Intro to SQL (CQ775L)",
			"school": "City College of San Francisco",
			"dates": "2011",
			"url": "https://www.ccsf.edu/"
		}
	]
}

$("#education").append(HTMLschoolStart);
for (index in education.schools) {
	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[index].name).replace("#", education.schools[index].url);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
	$(".education-entry:last").append(formattedSchool + formattedDegree, formattedSchoolLocation, formattedSchoolDates, formattedSchoolMajor);
};


$(".education-entry").append(HTMLonlineClasses);
for (index in education.online) {
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[index].title).replace("#", education.online[index].url);
	var formattedOnlineSchool = HTMLschoolDegree.replace("%data%", education.online[index].school);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[index].dates);
	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[index].school).replace("#", education.online[index].url);
	$(".education-entry").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
};


// INTERNATIONALIZATION
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


// MAPS
$("#mapDiv").append(googleMap);




// // // // // // // // // // notes // // // // // // // // // // //
// Modified h3 syling in style.css to align "Online Classes" better
// See line 57 on style.css for padding and color modification

// Added a class "online-url-text" in helper
// Adjusted the top margin to be zero rather than 10px (line 99, style.css)
// // // // // // // // // // notes // // // // // // // // // // //


