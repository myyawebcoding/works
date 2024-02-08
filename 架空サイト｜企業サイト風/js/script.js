$(function() {



  //drawer js
  $( '.drawer' ).drawer ()
  jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
        {
            scrollTop: position - $('#js-header').outerHeight()
        },
        speed
    );
    return false;
  });



    
  // swiper-js
  const swiper = new Swiper('.swiper-container', {
      // Optional parameters

      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 'auto',
      spaceBetween: 40,
      initialSlide: 1,
      loop: true, 
    });




  // Q &Aのアコーディオン
  jQuery('.qa-box__q').on('click',function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-box__icon').toggleClass('is-open');
  });




    // formの入力確認（全て入力されたら送信ボタンの色を変える）
    let $submit = $('#js-submit')
    $( '#js-form input, #js-form textarea').on( 'change', function() {
      if(
        $( '#js-form input[type="text"]' ).val() !=="" &&
        $( '#js-form input[type="email"]' ).val() !=="" &&
        $( '#js-form input[name="entry.120697731"]' ).prop( 'checked' ) === true
      ) {
        // 全て入力された時
        $submit.prop( 'disabled', false )
        $submit.addClass( '-active' )
      } else {
        // 入力されていない時
        $submit.prop( 'disabled', true )
        $submit.removeClass( '-active' )
      }
    })


    // トップへ戻るボタン
    jQuery(window).on('scroll',function() {
      if ( 100 < jQuery(this).scrollTop()) {
        jQuery('.to-top').addClass('is-show');
      } else {
        jQuery('.to-top').removeClass('is-show');
      }
    });




  // wow js
  new WOW().init()


});