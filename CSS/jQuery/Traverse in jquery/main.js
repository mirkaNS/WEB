function removeBorder() {

    var $imgRed = $(".selected");

    $imgRed
        .removeClass("selected")
        .parent()
        .next()
        .children()
        .eq(1)
        .addClass('selected');
}
removeBorder();