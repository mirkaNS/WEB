var $superMario=document.querySelector("#mario");
var $bacground=document.querySelector(".bg");
var $body=document.querySelector("body");

$body.addEventListener("keydown",goMario);

$body.addEventListener("keyup",oldImg);
var left=0;

function goMario(e){
   // console.log("which",e)

    var x =e.keyCode;
    if(x==39){
        left+=500;
       $bacground.style.backgroundPosition=left+"px";
       $superMario.src="./images/mario_running.gif";
       
    }

}
function oldImg(){
    $superMario.src="./images/mario.png";
}
