$(document).ready(function()
{
    var imgitems = $ (".slider2 li") .length;
    var positionimg = 1;


    for (i = 1; i <= imgitems; i++) {
        $(".pagination2").append('<li><span class="fa fa-circle"></span></li>');
    }

    $(".slider2 li").hide();
    $(".slider2 li:first").show();
    $(".pagination2 li:first").css ({'color': '#ff8000'});
   
    $('.pagination2 li').click (pagination);
    $('.right2 span').click(nextslider);
    $('.left2 span').click(prevslider);

    /*setInterval (function () {
        nextslider();
    }, 4000); Por si lo quiero usar*/

    function pagination(){

        var paginationpos = $(this).index() + 1;
        console.log(paginationpos);

        $('.slider2 li').hide();
        $('.slider2 li:nth-child('+ paginationpos +')').fadeIn();

        $('.pagination2 li').css({'color':'#858585'})
        $(this).css({'color': '#ff8000'});

        positionimg = paginationpos
    }

    function nextslider(){
       
        if(positionimg >= imgitems){
            positionimg = 1;
        } else {positionimg++;}

       $('.pagination2 li').css({'color':'#858585'})
       $('.pagination2 li:nth-child('+ positionimg +')').css({'color': '#ff8000'});

        $('.slider2 li').hide();
        $('.slider2 li:nth-child('+ positionimg + ')').fadeIn();
    }

    function prevslider()
    {
        if(positionimg <= 1){positionimg = imgitems;}
        else {positionimg--;}

       $('.pagination2 li').css({'color':'#858585'})
       $('.pagination2 li:nth-child('+ positionimg +')').css({'color': '#ff8000'});

        $('.slider2 li').hide();
        $('.slider2 li:nth-child('+ positionimg + ')').fadeIn();
    }
   
});