$(document).ready(function(){
    function boardMove(){
        $('#mainBoard').animate({
            top: -30,
        },800, function(){
            $('#mainBoard').css('top', '0px').find('ul:first-child').appendTo('#mainBoard');
        });
    }
    function boardMoveAuto(){
        auto = setInterval(function(){
            boardMove();
        },2000);
    }
    boardMoveAuto();
    $('#mainBoard ul').on({
        mouseenter: function () {
            clearInterval(auto);
        },
        mouseleave: function () {
            boardMoveAuto();
        }
    });
    console.log('1');
});