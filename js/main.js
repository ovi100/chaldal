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

    $('.sidenav-toggle-btn').click(function() {
        /* Act on the event */
        $('.sideNav').toggleClass('show-sidemenu');
        $('.left-content').toggleClass('col-sm-2');
        $('.right-content').toggleClass('col-sm-10');
        $('.back-link').toggleClass('container');
        $('.collection').toggleClass('container');
        $('.footer-content').toggleClass('container');
    });

    $('.sideNav-overlay').click(function() {
        /* Act on the event */
        $('#sideNav').removeClass('show-sidemenu');
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
        margin:12,
        dots:false,
        nav:true,
        navText: [
            '<i class="icofont-thin-left"></i>',
            '<i class="icofont-thin-right"></i>'
        ],
        responsive:{
            0:{
              items:1
            },
            767:{
              items:2
            },
            1920:{
              items:3
            }
        }
    });

    /*
        * ----------------------------------------------
        *--------------Home Product Slider--------------
        * ----------------------------------------------
    */

    $('.collection-slider').owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        dots:false,
        //nav:true,
        /*navText: [
            '<i class="icofont-thin-left"></i>',
            '<i class="icofont-thin-right"></i>'
        ],*/
        responsive:{
            0:{
              items:2
            },
            770:{
              items:3
            },
            1200:{
              items:4
            }
        }
    });

    /*
        * ----------------------------------------------
        *--------------Product Details Slider--------------
        * ----------------------------------------------
    */

    $('.pd-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        items: 1,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });

    

    /*
        * ----------------------------------------------
        *------------Related Product Slider-------------
        * ----------------------------------------------
    */

    $('.rp-slider').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:true,
        navText: [
            '<i class="icofont-thin-left"></i>',
            '<i class="icofont-thin-right"></i>'
        ],
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


    $(".pimg-zoom").elevateZoom({
        cursor: "pointer",
        borderSize: 1,
        //gallery:'thumbnails',
        //galleryActiveClass: 'active',
        responsive: true,
        zoomWindowWidth: 845,
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750,
        responsive:true,
        lensSize:0
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