$(document).ready(function () {

  'use strict';

  //add classes

  $('ul.root_menu > li:first-child').addClass('first first_item');
  $('ul.root_menu > li:last-child').addClass('last last_item');

  /* remove sub menus from Home   */

  $('ul.root_menu > li.has_sub_menu:first-child > ul.sub_menu').remove();

  /* remove 1st item in dropdown menu re-instate my area>my details.
   set background color on ul where no groups below top-level item   */


  $('.menu_item_level_2.first').each(function() {
    if($(this).find('a[href=\'/MyArea/MyDetails.aspx\']').length === 0) {
      if($(this).siblings().length === 0) {
        $(this).parent().remove();
      } else {
        $(this).remove();
      }
    }
  });

  /* mobile menu */

  $('.root_menu').slicknav({
    prependTo: '#mobile_nav',
    allowParentLinks: true,
    label: 'Menu',
    closedSymbol: '&#9660;',
    openedSymbol: '&#9654;',
    'afterOpen': function() {
      $('.slice_header .slicknav_menu').css({'margin-bottom':'50px'});

    },
    'afterClose': function() {
      $('.slice_header .slicknav_menu').css({'margin-bottom':'0'});

    }
  });


  $('.slice_slideshow_mini  .bannerSlides .gallery_ul').show().bxSlider({
    mode: 'horizontal',
    auto: true,
    pause: 6000,
    speed: 500,
    pager: true,
    controls: true,
    preloadImages: 'all'
  });


  // regular events

  $('.slice_cal_4 .articleListTitle a').each(function (index) {
    var titleLink = $(this).attr("href");
    $(this).parent().parent().find('.articleListLink').wrapInner('<a  href="' + titleLink + '">');
  });

    $('.slice_cal_4 .articleListImage img').each(function (index) {
        var imagePath = $(this).attr('src');
        $(this).attr('src', imagePath.replace("/Publisher/GetResizedImage.aspx?w=262&h=156&url=", "/"));
    });

  // Gallery 6

  $( ".slice_gallery_6 .gallery_6_cards .gallery_li img" ).each(function( index ) {
    var cardGridAlt = $(this).attr('alt');
    var cardGridData = $.parseHTML( cardGridAlt );
    var cardGridTitle = '<div class="gallery_6_title">' + ($(cardGridData).text().split('*')[ 0 ] || '') + '</div>';
    var cardGridSubtitle = '<div class="gallery_6_subtitle">' + ($(cardGridData).text().split('*')[ 1 ] || '') + '</div>';
    var cardGridCaption = '<div class="gallery_6_caption">' + cardGridTitle + cardGridSubtitle + '</div>';
    $(cardGridCaption).insertAfter( this );
  });

});