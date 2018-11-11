var $superMario=document.querySelector("#mario");
var $bacground=document.querySelector(".bg");
var $body=document.querySelector("body");
var $superRunningMario=document.querySelector("#runningMario");

$body.addEventListener("keydown",goMario);

$body.addEventListener("keyup",oldImg);
var left=0;

function goMario(e){
   // console.log("which",e)

    var x =e.keyCode;
    if(x==39){
        left+=500;
       $bacground.style.backgroundPosition=left+"px";
       $superMario.style.visibility="hidden";
       $superRunningMario.style.visibility="visible";
       
    }

}
function oldImg(){
    $superMario.style.visibility="visible";
    $superRunningMario.style.visibility="hidden";
}
