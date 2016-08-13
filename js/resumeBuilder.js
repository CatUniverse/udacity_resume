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
	"welcomeMessage" : "oh hai, welcome. Testing resume builder!",
	"skills" : [
		"Project Management", "HTML", "CSS", "Python",
		"Javascript"
	],
	"biopic" : "images/fry.jpg",
	"display": function () {
		// header
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
		$("#footerContacts").prepend(formattedMobile);
		$("#footerContacts").prepend(formattedEmail);
		$("#footerContacts").prepend(formattedGithub);
		$("#footerContacts").prepend(formattedLocation);
		// skills
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(skill) {
				var formattedSkill = HTMLskills.replace("%data%", skill);
				$("#skills:last").append(formattedSkill);
			});
		}
	}
};

bio.display();


// EDUCATION INFO
var education = {
	"schools": [
		{
			"name": "Portland State University",
			"location": "Portland, OR",
			"degree": "MBA",
			"majors": ["Marketing", " Operational Management"],
			"dates": "2008 - 2010",
			"url": "https://www.pdx.edu/"

		},
		{
			"name": "Oregon State University",
			"location": "Corvallis, OR",
			"degree": "M.S.",
			"majors": ["Food Science & Technology"],
			"dates": "2005 - 2007",
			"url": "http://oregonstate.edu/"
		},
		{
			"name": "Oregon State University",
			"location": "Corvallis, OR",
			"degree": "B.S.",
			"majors": ["Biology", " Chemistry (Minor)"],
			"dates": "2002 - 2005",
			"url": "http://oregonstate.edu/"
		}
	],
	"onlineCourses": [
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
	],
	"display": function() {
		// schools
		$("#education").append(HTMLschoolStart);
		education.schools.forEach(function(school) {
			var formattedSchool = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
			$(".education-entry:last").append(formattedSchool + formattedDegree, formattedSchoolLocation, formattedSchoolDates, formattedSchoolMajor);
		});
		// online classes
		$(".education-entry").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(online) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title).replace("#", online.url);
			var formattedOnlineSchool = HTMLschoolDegree.replace("%data%", online.school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.school).replace("#", online.url);
			$(".education-entry").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);	
		})
	}
};

education.display();


// WORK INFO
var work = {
	"jobs": [
		{
			"employer": "Facebook, Inc",
			"title": "Technical Program Manager",
			"location": "Menlo Park, CA",
			"dates": "October 2014 - Present",

			"url": "https://www.facebook.com/",
			"description": "Support for facebook code release, specifically www (web, desktop) experience.",
			"url": "https://www.facebook.com/"
		},
		{
			"employer": "Facebook, Inc",
			"title": "Stability Manager",
			"location": "Menlo Park, CA",
			"dates": "July 2013 - October 2014",
			"url": "https://www.facebook.com/",
			"description": "I managed a team and stuff",
			"url": "https://www.facebook.com/"
		}
	],
	"display": function() {
		work.jobs.forEach(function(work) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer).replace("#", work.url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);
			$(".work-entry:last").append(formattedEmployer + formattedTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
		})
	}
};

work.display();


// PROJECTS
var projects = {
	"projects": [
		{
			"title": "GIF Making Party",
			"dates": "Everyday on the Internet",
			"description": "We make GIFs and go nuts",
			"images": ["images/partyhard.gif"],
			"url": "images/partyhard.gif"
		},
		{
			"title": "Ramen Party",
			"dates": "Sunday Every Week",
			"description": "Ramen is for champions",
			"images": ["images/ramen.jpg"],
			"url": "images/ramen.jpg"
		}
	],
	"display": function() {
		projects.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
			$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
		})
	}
};

projects.display();



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


