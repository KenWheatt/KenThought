(function(){
	var app = angular.module('profilePage',['ngRoute','ngAnimate','ui.bootstrap']);
	
	app.controller('TechnicalSkills', function() {
		this.sklist = list;
	});
	app.controller('ExperienceTabs', function($scope){
		this.tabs = [
		              { title:'Dynamic Title 1', content:'Dynamic content 1' },
                      { title:'Dynamic Title 2', content:'Dynamic content 2' },
                      { title:'Dynamic Title 3', content:'Dynamic content 3' },
		             ];
	});
	app.controller('MyCarousel',function($scope){
			  $scope.myInterval = 3000;
			  $scope.noWrapSlides = false;
			  $scope.slides = [
			                   {
			                	   image:'lib/familypic.jpg',
			                   },
			                   {
			                	   image:'lib/fishingpic.jpg',
			                   },
			                   {
			                	   image:'lib/profilepic.jpg',
			                   }
			                   ];
			});			 
	var list = 
		[{ 
		name:'Languages', 
		skill:["Java","Javascript","Swift","JSON","HTML","XML","Ajax","Nodejs","Bootstrap"], 
		systms:["Windows","MacOS","Android","IOS","Linux","Eclipse","IntelliJ","AndroidStudio","Xcode"],
		tools:["GIT","JIRA","Selenium","Mockito","NightwatchJS","Jquery","Rest-assured","Maven","Gradle",]
	    }];
})();