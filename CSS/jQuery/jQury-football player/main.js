
var $div = $('div');
var $player = $('img');
var $stopMoving = $('input');


$div.on("click", function (event) {
    $player.offset({ top: (event.clientY - 75), left: (event.clientX - 75) });


})

$stopMoving.click(function () {
    $div.off("click");
});

