var barod_left;
var board_right;

$(document).ready(function(){
    var ds = ["#d1", "#d2", "#d3"];
    var i = 0;
    $("#next_btn").click(function() {
        next_problem(ds, i);
        if (i == ds.length - 1) {
            i = 0;
        } else {
            i++;
        }
    });

    $("#btn1").click(leftkid_fadein);
    $("#btn4").click(function() {
        var board_width = $("#board").width();
        rightkid_fadein(board_left + board_width/2);
    });

    $(window).on('resize', function(event){
        board_left = $("#board").position().left;
        board_right = $("#board").position().right;
        change_fruit(ds, board_left);
    });
    board_left = $("#board").position().left;
    board_right = $("#board").position().right;
    change_fruit(ds, board_left);

});

function change_fruit(ds, board_left) {
    var board_top = $("#board").position().top;
    var board_width = $("#board").width();
    var board_height = $("#board").height();
    $.each(ds, function( index, value ) {
        $(ds[index]).css({ top: board_top, left:board_left, width:board_width, height:board_height});
    });
    $("#leftkid").css({ top: board_top, left:board_left, width:board_width/2, height:board_height});
    $("#rightkid").css({ top: board_top, left: board_left + board_width/2 ,width:board_width/2, height:board_height});
}

function leftkid_fadein() {
    $(".background").css("opacity", ".4");
    var cur = $("#leftkid").position().left; //current left
    $("#leftkid").css({ left: cur - 200 });
    $("#leftkid").show().animate({ left:cur }, {duration: 1000, easing: 'easeOutElastic'});
    //run after a while
    setTimeout(function() {
        $( "#leftkid" ).fadeOut();
        $(".background").css("opacity", "1");
    }, 2000 );
}

function rightkid_fadein(kid_left) {
    $(".background").css("opacity", ".4");
    $("#rightkid").css({ left: kid_left + 200 });
    $("#rightkid").hide().show().animate({left: kid_left}, {duration: 1000, easing: 'easeOutElastic'});
    //run after a while
    setTimeout(function() {
        $( "#rightkid" ).fadeOut();
        $(".background").css("opacity", "1");
    }, 2000 );
}

function next_problem(ds, i){
    $(ds[i]).fadeOut('fast').animate({
        'left': '100%'
        }, {duration: 'slow', queue: false}, function() {
        // Animation complete.
    });

    if (i == ds.length - 1) {
        i = 0;
    } else {
        i++;
    }

    $(ds[i]).css({ left:-200 });
    $(ds[i]).show().animate({ left:board_left }, {duration: 1200, easing: 'easeOutBounce'});
}
