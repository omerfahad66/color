function red(){
    document.body.style.backgroundImage="linear-gradient(to bottom, red, crimson)"
    document.getElementById("title").style.color="white"
    document.getElementById("msg").style.fontSize="30px"
    document.getElementById("red").style.backgroundImage="linear-gradient(to bottom, white, white)"
    document.getElementById("green").style.backgroundImage="linear-gradient(to bottom, green, #00b712)"
    document.getElementById("default").style.backgroundImage="linear-gradient(to bottom, blue, cyan)"
    document.getElementById("yellow").style.backgroundImage="linear-gradient(to bottom, yellow, orange)"
}

function green(){
    document.body.style.backgroundImage="linear-gradient(to bottom, green, #00b712)"
    document.getElementById("title").style.color="crimson"
    document.getElementById("msg").style.fontSize="40px"
    document.getElementById("red").style.backgroundImage="linear-gradient(to bottom, red, crimson)"
    document.getElementById("green").style.backgroundImage="linear-gradient(to bottom, white, white)"
    document.getElementById("yellow").style.backgroundImage="linear-gradient(to bottom, yellow, orange)"
    document.getElementById("default").style.backgroundImage="linear-gradient(to bottom, blue, cyan)"
}

function yellow(){
    document.body.style.backgroundImage="linear-gradient(to bottom, yellow, orange)"
    document.getElementById("title").style.color="cyan"
    document.getElementById("msg").style.fontSize="50px"
    document.getElementById("red").style.backgroundImage="linear-gradient(to bottom, red, crimson)"
    document.getElementById("green").style.backgroundImage="linear-gradient(to bottom, green, #00b712)"
    document.getElementById("yellow").style.backgroundImage="linear-gradient(to bottom, white, white)"
    document.getElementById("default").style.backgroundImage="linear-gradient(to bottom, blue, cyan)"
}

function def(){
    document.body.style.backgroundImage="linear-gradient(to bottom, blue, cyan)"
    document.getElementById("title").style.color="black"
    document.getElementById("msg").style.fontSize="20px"
    document.getElementById("red").style.backgroundImage="linear-gradient(to bottom, red, crimson)"
    document.getElementById("green").style.backgroundImage="linear-gradient(to bottom, green, #00b712)"
    document.getElementById("yellow").style.backgroundImage="linear-gradient(to bottom, yellow, orange)"
    document.getElementById("default").style.backgroundImage="linear-gradient(to bottom, white, white)"
}

function decrease(){
    var value=document.getElementById("value")
    if(value.value>0){
     return value.value--
    }
    value=value
}

function increase(){
    var value=document.getElementById("value")
     return value.value++
    value=value
}