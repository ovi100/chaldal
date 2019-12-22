/*------------------------------------
 *Author:Abu Sayed
 *Template:Matalan Store
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function() {

  // $(window).scroll(function(){
  //   if ($(this).scrollTop()>150){
  //     $('.main-nav').addClass('fixed-nav');
  //   } 
  //   else {
  //     $('.main-nav').removeClass('fixed-nav');
  //   }
  // });

    $('.sidenav').click(function() {
        /* Act on the event */
        $('#menu-sidenav').toggleClass('show-sidemenu');
    });

    /*
        * ----------------------------------------------
        *----------Accordion with Toggle Icon-----------
        * ----------------------------------------------
    */

    function toggleIcon(e){
        $(e.target)
            .prev('li a')
            .find(".rotate-icon")
            .toggleClass('icofont-thin-right icofont-thin-down');
    }

    $('.sidenav-menu-link').on('hidden.bs.collapse', toggleIcon);
    $('.sidenav-menu-link').on('shown.bs.collapse', toggleIcon);

    /*
        * ----------------------------------------------
        *----------Filter Toggle Icon-----------
        * ----------------------------------------------
    */

    $('.mobile-filter').click(function() {
        /* Act on the event */
        $('.filters').fadeIn('slow');
    });

    $('.filter-close-icon').click(function() {
        /* Act on the event */
        $('.filters').fadeOut('slow');
    });

    /*
        * ----------------------------------------------
        *--------------Home Product Slider--------------
        * ----------------------------------------------
    */

    $('.hp-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
        responsive:{
            0:{
              items:2
            },
            600:{
              items:2
            },
            768:{
              items:4
            },
            1000:{
              items:6
            }
        }
    });

    /*
        * ----------------------------------------------
        *------------Product Details Slider-------------
        * ----------------------------------------------
    */

    $('.pd-slider').owlCarousel({
        center: true,
        loop:true,
        items:1,
        margin:10,
        nav:true,
        navText: ['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>']
    });

    /*
        * ----------------------------------------------
        *------------Related Product Slider-------------
        * ----------------------------------------------
    */

    $('.rp-slider').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        nav:true,
        navText: ['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
        responsive:{
            0:{
              items:2
            },
            600:{
              items:2
            },
            768:{
              items:3
            },
            1000:{
              items:4
            }
        }
    });

    /*
    * -----------------------------------------------------------------
    *---------------------------ElevateZoom----------------------------
    * -----------------------------------------------------------------
    */


    $(".pdd-img").elevateZoom({
        gallery:'controls',
        galleryActiveClass: 'active',
        responsive:true,
        lensSize:50
    });  

});




  
$(".filter-collapse").on("hide.bs.collapse", function(){
    $(this).find(".fo-icon-change")
        .removeClass('icofont-minus')
        .addClass('icofont-plus');
});
$(".filter-collapse").on("show.bs.collapse", function(){
    $(this).find(".fo-icon-change")
        .removeClass('icofont-plus')
        .addClass('icofont-minus');
});