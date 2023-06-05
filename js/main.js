$(document).ready(function()
{
    var imgitems = $ (".slider li") .length;
    var positionimg = 1;


    for (i = 1; i <= imgitems; i++) {
        $(".pagination").append('<li><span class="fa fa-circle"></span></li>');
    }

    $(".slider li").hide();
    $(".slider li:first").show();
    $(".pagination li:first").css ({'color': '#ff8000'});
   
    $('.pagination li').click (pagination);
    $('.right span').click(nextslider);
    $('.left span').click(prevslider);

    /*setInterval (function () {
        nextslider();
    }, 4000); Por si lo quiero usar*/

    function pagination(){

        var paginationpos = $(this).index() + 1;
        console.log(paginationpos);

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationpos +')').fadeIn();

        $('.pagination li').css({'color':'#858585'})
        $(this).css({'color': '#ff8000'});

        positionimg = paginationpos
    }

    function nextslider(){
       
        if(positionimg >= imgitems){
            positionimg = 1;
        } else {positionimg++;}

       $('.pagination li').css({'color':'#858585'})
       $('.pagination li:nth-child('+ positionimg +')').css({'color': '#ff8000'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ positionimg + ')').fadeIn();
    }

    function prevslider()
    {
        if(positionimg <= 1){positionimg = imgitems;}
        else {positionimg--;}

       $('.pagination li').css({'color':'#858585'})
       $('.pagination li:nth-child('+ positionimg +')').css({'color': '#ff8000'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ positionimg + ')').fadeIn();
    }
   
});