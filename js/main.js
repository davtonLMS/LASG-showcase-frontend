$(document).ready(function(){
	$('.callMap').select2();
	$('.gm-style-iw-c .button').html('jvhvj');
    $('.pgwSlideshow').pgwSlideshow({
    	maxHeight: 600
    });

    $("a").on('click' ,function(e){
    	if($(this).attr('href')=="#"){
    		e.preventDefault();
    	}
    })
})


$(document).on('scroll', function () {
	if ($(window).scrollTop() > 30) {
		$('header').addClass('bg-white');
	} else {
		$('header').removeClass('bg-white');
	}
});