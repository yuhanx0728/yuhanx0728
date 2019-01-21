$(function() {
    showDiv();
});
function showDiv() {
    if($('.card:hidden').length) {
        $('.card:hidden:first').fadeIn();
        setTimeout(showDiv, 500);
    }
}