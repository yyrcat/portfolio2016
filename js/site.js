$(window).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    

});

/*"MoreAboutMe"draggable effect*/
function endMove() {
    $(this).removeClass('movable');
}
function startMove() {
    $('.movable').on('mousemove', function(event) {
        var thisX = event.pageX - $(this).width() / 2,
            thisY = event.pageY - $(this).height() / 2;

        $('.movable').offset({
            left: thisX,
            top: thisY
        });
    });
}
$(document).ready(function() {
    $(".draggable").on('mousedown', function() {
        $(this).addClass('movable');
        startMove();
    }).on('mouseup', function() {
        $(this).removeClass('movable');
        endMove();
    });


});

/*bootstrap tooltip initialization*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*toggle search box*/
var searchIcon=document.querySelector("#search-icon");
searchIcon.addEventListener('click',function (){ 
    if(this.nextSibling.className==="nav-search")
    {
        this.nextSibling.className="search--active";
    }
    else {
        this.nextSibling.className="nav-search";
    }
    
});

/*toggle modal*/
var searchRes=document.querySelector(".search-modal--default");
var searchClose=document.querySelector(".search-close-button");
function toggleModal(event){
    if(event.keyCode===13) {
       searchRes.className="search-modal--visible"; 
    }
    
   
    searchClose.addEventListener('click',function(){
        this.parentNode.parentNode.className="search-modal--default";
    });
    
}