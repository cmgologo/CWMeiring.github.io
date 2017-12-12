var width = screen.width;
var fsiz = document.getElementById("aboutp"); 

if(width <= 900){
	alert("mobile");
	fsiz.style.fontSize = 10 + "px";
};

function one(){
	var amoverone =
document.getElementById("pAbout");
amoverone.style.fontSize = "120%";
}

function two(){
	var amoveout =
document.getElementById("pAbout");
amoveout.style.fontSize = "100%";	
}

function onep(){
	var amovertwo =
document.getElementById("pcode");
amovertwo.style.fontSize = "120%";
}

function twop(){
	var amoveouttwo =
document.getElementById("pcode");
amoveouttwo.style.fontSize = "100%";	
}

function threep(){
	var amovepBlog =
document.getElementById("pBlog");
amovepBlog.style.fontSize = "120%";
}

function fourp(){
	var amovepBlogtwo =
document.getElementById("pBlog");
amovepBlogtwo.style.fontSize = "100%";
}

function fivep(){
	var amovepFollow =
document.getElementById("pFollow");
amovepFollow.style.fontSize = "120%";
}

function sixp(){
	var amovepFollowtwo =
document.getElementById("pFollow");
amovepFollowtwo.style.fontSize = "100%";
}

function aboutOn(){
	var artabouton =
document.getElementById("artAbout");
artabouton.style.display = "block";
	var artcodeOff =
document.getElementById("artCode");
artcodeOff.style.display = "none";
	var artblogOff =
document.getElementById("artblog");
artblogOff.style.display = "none";
	var followon =
document.getElementById("artFollw");
followon.style.display = "none";	
}

function codeOn(){
	var codeon =
document.getElementById("artCode");
codeon.style.display = "block";
	var artaboutOff =
document.getElementById("artAbout");
artaboutOff.style.display = "none";
	var artblogOff =
document.getElementById("artblog");
artblogOff.style.display = "none";
	var followon =
document.getElementById("artFollw");
followon.style.display = "none";
}

function blogOn(){
	var blogon =
document.getElementById("artblog");
blogon.style.display ="block";
	var artaboutOff =
document.getElementById("artAbout");
artaboutOff.style.display = "none";
	var artcodeOff =
document.getElementById("artCode");
artcodeOff.style.display = "none";
	var followon =
document.getElementById("artFollw");
followon.style.display = "none";
}

function followOn(){
	var followon =
document.getElementById("artFollw");
followon.style.display = "block";
	var artaboutOff =
document.getElementById("artAbout");
artaboutOff.style.display = "none";
	var artcodeOff =
document.getElementById("artCode");
artcodeOff.style.display = "none";
	var artblogOff =
document.getElementById("artblog");
artblogOff.style.display = "none";
}































