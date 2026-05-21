
function inputfunc1(){
    let inp = document.getElementById("inp1").value;
    if(inp=="v" ||inp=="V" ){
        document.getElementById("img1").src="https://tse3.mm.bing.net/th?id=OIP.SZxWQGAVz3KXVDPlpkvpSAHaHa&pid=Api&P=0&h=180";
    }
    else{
        document.getElementById("img1").src="http://pngimg.com/uploads/pacman/pacman_PNG28.png";
    }
        document.getElementById("inp2").focus();
    
}
function inputfunc2(){
    let inp = document.getElementById("inp2").value;
    if(inp=="I" || inp=="i" ){
        document.getElementById("img2").src="https://tse3.mm.bing.net/th?id=OIP.SZxWQGAVz3KXVDPlpkvpSAHaHa&pid=Api&P=0&h=180";
    }
    else{
        document.getElementById("img2").src="http://pngimg.com/uploads/pacman/pacman_PNG28.png";
    }
    document.getElementById("inp3").focus();
}

function inputfunc3(){
    let inp = document.getElementById("inp3").value;
    if(inp=="R" || inp=="r" ){
        document.getElementById("img3").src="https://tse3.mm.bing.net/th?id=OIP.SZxWQGAVz3KXVDPlpkvpSAHaHa&pid=Api&P=0&h=180";
    }
    else{
        document.getElementById("img3").src="http://pngimg.com/uploads/pacman/pacman_PNG28.png";
    }
        document.getElementById("inp4").focus();
    
}

function inputfunc4(){
    let inp = document.getElementById("inp4").value;
    if(inp=="A" ||inp=="a" ){
        document.getElementById("img4").src="https://tse3.mm.bing.net/th?id=OIP.SZxWQGAVz3KXVDPlpkvpSAHaHa&pid=Api&P=0&h=180";
    }
    else{
        document.getElementById("img4").src="http://pngimg.com/uploads/pacman/pacman_PNG28.png";
    }
        document.getElementById("inp5").focus();
    
}

function inputfunc5(){
    let inp = document.getElementById("inp5").value;
    if(inp=="T" ||inp=="t" ){
        document.getElementById("img5").src="https://tse3.mm.bing.net/th?id=OIP.SZxWQGAVz3KXVDPlpkvpSAHaHa&pid=Api&P=0&h=180";
    }
    else{
        document.getElementById("img5").src="http://pngimg.com/uploads/pacman/pacman_PNG28.png";
    }
        document.getElementById("inp1").focus();
    
}

var val1 = document.getElementbyId("inp1").innerText;
var val2 = document.getElementbyId("inp2").innerText;
var val3 = document.getElementbyId("inp3").innerText;
var val4 = document.getElementbyId("inp4").innerText;
var val5 = document.getElementbyId("inp5").innerText;

var concat = val1+val2+val3+val4+val5;
if (concat.toUpper() == "VIRAT"){
    console.log("you won!);
}
