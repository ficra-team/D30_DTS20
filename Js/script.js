

// ini awal page scroll
$('.page-scroll').on('click', function(e){
	// console.log('ok');
	// ambil isi href
	var tujuan = $(this).attr('href');
	// console.log(tujuan);


 //tangkap element ybs 
	var elementTujuan = $(tujuan);
	// console.log(elementTujuan.offset().top);
	// console.log($('html,body').scrollTop());

//pindahkan scroll
	$('html,body').animate({
		scrollTop: elementTujuan.offset().top-70
	}, 1000,'easeInOutExpo'); //ada dua effek swing dan linier dari jquery..kalau bosan kita bisa pake transisi yang lain buka aa website query easig link: gsgd.com
	e.preventDefault();
});

// ini akhir page scroll
// $(window).load(function(){

// });
$(document).ready(function(){
	$(".slide-toggle").click(function(){
		$(".header-right").slideToggle("slow");
	});
});
// ini awal untuk


// ini awal windows scroll
$(window).scroll(function(){
	var wScroll=$(this).scrollTop();
	$('.copy-container h1').css({
		'transform':'translate(0px,'+wScroll/4.5+'%)'
	});
	$('.copy-container h2').css({
		'transform':'translate(0px,'+wScroll/6+'%)'
	});
	



});
// ini akhir windows scroll





