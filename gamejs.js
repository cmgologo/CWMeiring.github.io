var playerone = prompt("Player One Please Enter Your Name")
var playertwo = prompt("Player Two Please Enter Your Name")
var hpbottom = 20;
var hptop = 20;
var ophpbot = 20;
var ophptop = 20;

function fighttop(){
	var top = Math.floor((Math.random()*6)+1);
	document.getElementsByTagName('p')
	[4].innerHTML = top;

	if (top==1){
	z()
	o()
	hideone()
	showtwo();}
	if (top==2){
	y()
	p()
	hideone()
	showtwo();}
	if (top==3){
	x()
	q()
	hideone()
	showtwo();}
	if (top==4){
	w()
	r()
	hideone()
	showtwo();}
	if (top==5){
	v()
	s()
	hideone()
	showtwo();}
	if (top==6){
	u()
	t()
	hideone()
	showtwo();}
	if (hptop <= 0){
	showendtop()
	showend()
	ptwowin()
	ponewintwo()
	hidetwo()
	hideone();
}}

function z(){
	--hptop;
	document.getElementsByTagName('p')
	[6].innerHTML = +hptop;
}

function y(){
	--hptop;
	document.getElementsByTagName('p')
	[6].innerHTML = hptop-=1;
}

function x(){
	--hptop;
	document.getElementsByTagName('p')
	[6].innerHTML = hptop-=2;
}

function w(){
	--hptop;
	document.getElementsByTagName('p')
	[6].innerHTML = hptop-=3;
}

function v(){
	--hptop;
	document.getElementsByTagName('p')
	[6].innerHTML = hptop-=4;
}

function u(){
	--hptop;
	document.getElementsByTagName('p')
	[6].innerHTML = hptop-=5;
}

function t(){
	--ophptop;
	document.getElementsByTagName('p')
	[2].innerHTML = ophptop-=5;
}

function s(){
	--ophptop;
	document.getElementsByTagName('p')
	[2].innerHTML = ophptop-=4;
}

function r(){
	--ophptop;
	document.getElementsByTagName('p')
	[2].innerHTML = ophptop-=3;
}

function q(){
	--ophptop;
	document.getElementsByTagName('p')
	[2].innerHTML = ophptop-=2;
}

function p(){
	--ophptop;
	document.getElementsByTagName('p')
	[2].innerHTML = ophptop-=1;
}

function o(){
	--ophptop;
	document.getElementsByTagName('p')
	[2].innerHTML = +ophptop;
}

function fightbottom(){
	var bot = Math.floor((Math.random()*6)+1);
	document.getElementsByTagName('p')
	[9].innerHTML = bot;
	
	if (bot==1){
	a()
	g()
	hidetwo()
	showone();}
	if (bot==2){
	b()
	h()
	hidetwo()
	showone();}
	if (bot==3){
	c()
	i()
	hidetwo()
	showone();}
	if (bot==4){
	d()
	j()
	hidetwo()
	showone();}
	if (bot==5){
	e()
	k()
	hidetwo()
	showone();}
	if (bot==6){
	f()
	l()
	hidetwo()
	showone();}
	if (hpbottom <= 0){
	showendtop()
	showend()
	hidetwo()
	hideone()
	ptwowintwo()
	ponewin();
	
}}

function a(){
	--hpbottom;
	document.getElementsByTagName('p')
	[1].innerHTML = +hpbottom;
}

function b(){
	--hpbottom;
	document.getElementsByTagName('p')
	[1].innerHTML = hpbottom-=1;
}

function c(){
	--hpbottom;
	document.getElementsByTagName('p')
	[1].innerHTML = hpbottom-=2;
}

function d(){
	--hpbottom;
	document.getElementsByTagName('p')
	[1].innerHTML = hpbottom-=3;
}

function e(){
	--hpbottom;
	document.getElementsByTagName('p')
	[1].innerHTML = hpbottom-=4;
}

function f(){
	--hpbottom;
	document.getElementsByTagName('p')
	[1].innerHTML = hpbottom-=5;
}

function g(){
	--ophpbot;
	document.getElementsByTagName('p')
	[7].innerHTML = +ophpbot;
}
function h(){
	--ophpbot;
	document.getElementsByTagName('p')
	[7].innerHTML = ophpbot-=1;
}
function i(){
	--ophpbot;
	document.getElementsByTagName('p')
	[7].innerHTML = ophpbot-=2;
}
function j(){
	--ophpbot;
	document.getElementsByTagName('p')
	[7].innerHTML = ophpbot-=3;
}
function k(){
	--ophpbot;
	document.getElementsByTagName('p')
	[7].innerHTML = ophpbot-=4;
}
function l(){
	--ophpbot;
	document.getElementsByTagName('p')
	[7].innerHTML = ophpbot-=5;
}

function re(){
	location.reload();
}	

function hideone(){
	document.getElementById("btwo").style.display="none";
}

function hidetwo(){
	document.getElementById("bone").style.display="none";
}

function showone(){
	document.getElementById("btwo").style.display="inline";
}

function showtwo(){
	document.getElementById("bone").style.display="inline";
}

function showend(){
	document.getElementById				  		("endone").style.display="block";
}

function showendtop(){
	document.getElementById				  		("endtwo").style.display="block";
}

function ponewin(){
	document.getElementById("ponewin").innerHTML 		 = ponewin = playerone + (" Wins!!");	
}

function ptwowin(){
	document.getElementById("ptwowin").innerHTML 		 = ptwowin = playertwo + (" Wins!!");	
}

function ptwowintwo(){
	document.getElementById("ptwowin").innerHTML 		 = ptwowin = playerone + (" Wins!!");	
}

function ponewintwo(){
	document.getElementById("ponewin").innerHTML 		 = ponewin = playertwo + (" Wins!!");	
}
