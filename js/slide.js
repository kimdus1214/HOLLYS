$(document).ready(function(){
    // 메뉴 슬라이드 Start
    // ============================================================
    var menuImg = $('#hollysMenuWrap .imgWrap li').width();
    // console.log(menuImg);
    $('#menuSlideRightBtn').click(function(){
        $('#hollysMenuWrap .imgWrap').animate({
            left: -menuImg,
        },'slow', function(){
            $('#hollysMenuWrap .imgWrap').css('left', '0px').find('li:first-child').appendTo('#hollysMenuWrap .imgWrap');
        });
    });
    $('#menuSlideleftBtn').click(function(){
        $('#hollysMenuWrap .imgWrap').animate({
            left: 0,
        },'slow', function(){
            $('#hollysMenuWrap .imgWrap').css('left', -menuImg).find('li:last-child').prependTo('#hollysMenuWrap .imgWrap');
        });
    });
    // ============================================================
    // 메뉴 슬라이드 End
    


    // MD 슬라이드
     // ============================================================
    var mdImg = $('#hollysMdPickWrap .imgWrap li').width();
    // console.log(menuImg);
    $('#mdSlideRightBtn').click(function(){
        $('#hollysMdPickWrap .imgWrap').animate({
            left: -mdImg,
        },'slow', function(){
            $('#hollysMdPickWrap .imgWrap').css('left', '0px').find('li:first-child').appendTo('#hollysMdPickWrap .imgWrap');
        });
    });
    $('#mdSlideleftBtn').click(function(){
        $('#hollysMdPickWrap .imgWrap').animate({
            left: 0,
        },'slow', function(){
            $('#hollysMdPickWrap .imgWrap').css('left', -mdImg).find('li:last-child').prependTo('#hollysMdPickWrap .imgWrap');
        });
    });
    // ============================================================
    // MD 슬라이드 End 


})