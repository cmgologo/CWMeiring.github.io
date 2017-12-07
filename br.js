//carone variables 
var a = 0;
var b = "";
var c = "";

//cartwo variables
var d = 0;
var e = "";
var f = "";

//go button functions
function go(){
    showGo()
    carone()
    caronemove()
    cartwo()
    cartwomove()
    hideshowbuttons()
    goplusminis()
    nomorecoins()
var butdisplay = document.getElementById("go");
butdisplay.style.display = "none"
var chargeblock =
document.getElementById("charge");
chargeblock.style.display ="block"
var pcharge =
document.getElementById("pcharge");
pcharge.style.display ="block"
}

function showGo(){
var butdisplay =
document.getElementById("go");
butdisplay.style.display = "block"
var chargeblock =
document.getElementById("charge");
chargeblock.style.display ="none"
var pcharge =
document.getElementById("pcharge");
pcharge.style.display ="none"
};

//carone functions
function carone(){
var c = document.getElementById("carone");
    if(a === 298){
        clearInterval(b);
        clearInterval(e);
        a = 0;
        d = 0;
        alert("Blue Wins!");
        bluewins()
        showGo()
        zerocoins()
        hideshowbuttons()
        hsbuttonsgreen()
        minbluesh();
    }
    else{
       ++a 
c.style.marginLeft = a + "px" 
    }
};

function caronemove(){
var z = Math.floor((Math.random()*10)+1);
    b = setInterval(carone,z)
};

//cartwo functions
function cartwo(){
var f = document.getElementById("cartwo");
    if(d === 298){
        clearInterval(e);
        clearInterval(b);
        d =0;
        a =0;
        alert("Green Wins!");
        greenwins()
        showGo()
        zerocoinsgreen()
        hsbuttonsgreen()
        hideshowbuttons()
        mingreensh();
    }
    else{
       ++d 
f.style.marginLeft = d + "px" 
    }
};

function cartwomove(){
var y = Math.floor((Math.random()*10)+1);
    e = setInterval(cartwo,y)
};

//betting variables
var coins = 10;
var blue = 0;
var green = 0;
var bwin = "";
var gwin = "";

//betting blue button functions
function bpbutton(){
    blueplus()
    zerocoins()
    zerocoinsgreen()
    minbluehs()
};

function blueplus(){
    --coins
    ++blue
document.getElementById("pcoins")
.innerHTML = +coins

document.getElementById("bluebetp")
.innerHTML = +blue
return;
}

function blueminis(){
    ++coins
    --blue
document.getElementById("pcoins")
.innerHTML = +coins

document.getElementById("bluebetp")
.innerHTML = +blue
return;
}

function bluewins(){
    bwin = blue*2;
document.getElementById("pcoins")
.innerHTML = coins += bwin
    blue = 0;
    green = 0;
document.getElementById("bluebetp")
.innerHTML = +blue
                    document.getElementById("greenbetp")
.innerHTML = +green
return ;
}

//betting green button functions
function gpbutton(){
    greenplus()
    zerocoinsgreen()
    zerocoins()
    mingreenhs()
};

function greenplus(){
    --coins
    ++green
document.getElementById("pcoins")
.innerHTML = +coins

document.getElementById("greenbetp")
.innerHTML = +green
return;
}

function greenminis(){
    ++coins
    --green
document.getElementById("pcoins")
.innerHTML = +coins

document.getElementById("greenbetp")
.innerHTML = +green
return;
}

function greenwins(){
    gwin = green*2;
document.getElementById("pcoins")
.innerHTML = coins += gwin
    green = 0;   
    blue = 0;
        document.getElementById("greenbetp")
.innerHTML = +green

document.getElementById("bluebetp")
.innerHTML = +blue
return ;
};

//no coins functions hide show
function nomorecoins(){
    if(coins === 0 && blue ===0 && green === 0){
        alert("You Have No More Coins");
    }
};

function hideshowbuttons(){
    if(coins >= 1){
    var nocoinsblue = 
document.getElementById("blueplus");
nocoinsblue.style.display = "block"
    }
}

function hsbuttonsgreen(){
    if(coins >= 1){
    var nocoinsgreen =
document.getElementById("greenplus");
nocoinsgreen.style.display = "block"
}
};

function zerocoins(){
    if(coins <= 0 || blue === 99){
    var nocoinsblue = 
document.getElementById("blueplus");
nocoinsblue.style.display = "none"
    }
};

function zerocoinsgreen(){
    if(coins <= 0 || green === 99){
    var nocoinsgreen =
document.getElementById("greenplus");
nocoinsgreen.style.display = "none"
}   
};

//blue minis functions hide show
function minbluehs(){
    if(blue >= 1){
    var showminblue =
document.getElementById("blueminis");
showminblue.style.display = "block"
    }
}

function minbluesh(){
    if(blue <= 0){
    var showminblue =
document.getElementById("blueminis");
showminblue.style.display = "none"}
hideshowbuttons()
hsbuttonsgreen()
};

//green minis functions hide show
function mingreenhs(){
    if(green >= 1){
    var showmingreen =
document.getElementById("greenminis");
showmingreen.style.display = "block"
    }
}

function mingreensh(){
    if(green <= 0){
    var showmingreen =
document.getElementById("greenminis");
showmingreen.style.display = "none"}
hsbuttonsgreen()
hideshowbuttons()
};

function goplusminis(){
    var nocoinsblue = 
document.getElementById("blueplus");
nocoinsblue.style.display = "none"
    var nocoinsgreen =
document.getElementById("greenplus");
nocoinsgreen.style.display = "none"
    var showmingreen =
document.getElementById("greenminis");
showmingreen.style.display = "none"
    var showminblue =
document.getElementById("blueminis");
showminblue.style.display = "none"
}

//start page
function start(){
    var startbutton =
document.getElementById("articletwo");
startbutton.style.display ="none"
    var startbuttonon =
document.getElementById("articleone");
startbuttonon.style.display ="block"
}

