$(function(){
 $('.search-box').click(function(){
     $('.search-overlay').show().delay(2000);
 });
    
 $('.cancel-btn').click(function(){
     $('.search-overlay').hide();
 });


// slidebar part start 

 $('.slidebar').click(function(){
   $('.slidebar-page').addClass('slidebar-page2');
 }); 

 $('.slidebar-icon').click(function(){
 	$('.slidebar-page').removeClass('slidebar-page2');
 }); 


 // back-top part start

$('.back-top').click(function(){
 $('html,body').animate({scrollTop:0},1000);
});

$(window).on('scroll', function(){
 var scroll=$(this).scrollTop();

 if(scroll>200){
 	$('.back-top').fadeIn();
 }
 else{
 	$('.back-top').fadeOut();
 	
 }
});




    
    
// banner-venobox
$(document).ready(function(){
    $('.venobox').venobox(); 
});



   
    
   
//team part start
   
$('.team-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 autoplay: true, 
 arrows:false,
 autoplaySpeed: 2000,
 autoplayHoverPause:true,
 responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },



    ]
});
  

  //testimonial part start
   
$('.test-slider').slick({
 slidesToShow: 2,
 slidesToScroll: 1,
 autoplay: true, 
 arrows:false,
 autoplaySpeed: 2000,
 autoplayHoverPause:true,
 responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
      
    ]
});
    
    
//    counterup part start
        
$('.counter').counterUp({
        delay: 20,
        time: 1500,
});
    
    
//details part start
   jQuery(".player").YTPlayer();


// project part start

  var containerEl = document.querySelector('.project-top');

   var mixer = mixitup(containerEl);




  //partner part start
   
$('.client-slider').slick({
 slidesToShow: 6,
 slidesToScroll: 1,
 autoplay: true, 
 arrows:false,
 autoplaySpeed: 2000,
 autoplayHoverPause:true,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      }
    },
      
    ]
});
    


    
});


var fnam = document.getElementById('fname');
var fnam_err = document.getElementById('fname_err');

var email = document.getElementById('email');
var email_err = document.getElementById('email_err');

var phone = document.getElementById('phone');
var phone_err = document.getElementById('phone_err');

function sub(){
	if(fnam.value==''){
	   fnam_err.innerHTML='Please Input Your Name';
	   fnam.style.border='1px solid red';
	   fnam.focus();
		return false;
	}

	if(email.value==''){
	   email_err.innerHTML='please Input your Email';
	   email.style.border='1px solid red';
	   email.focus();
		return false;
	}

	if(phone.value==''){
	   phone_err.innerHTML=' Input your phone number';
	   phone.style.border='1px solid red';
	   phone.focus();
		return false;
	}

}

function err_valid(){
   if(fnam.value!=''){
	   fnam_err.innerHTML='';
	   fnam.style.border='1px solid #666';
	 
	}
	if(email.value!=''){
	   email_err.innerHTML='';
	   email.style.border='1px solid #666';
	}
	if(phone.value!=''){
	   phone_err.innerHTML='';
	   phone.style.border='1px solid #666';
	}
}

fnam.addEventListener('blur', err_valid);
email.addEventListener('blur', err_valid);
phone.addEventListener('blur', err_valid);