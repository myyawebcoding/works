// ==================================================
// ドロワーアイコン・コンテンツの設定
// ==================================================
// jQuery('#js-drawer').on('click',function(e) {
//     e.preventDefault();

//     jQuery('.drawer__icon').toggleClass('is-active');
//     jQuery('.drawer__content').toggleClass('is-active');
//     jQuery('.drawer__background').toggleClass('is-active');

//     return false;
// });

jQuery('#js-drawer-icon').on('click',function(e) {
    e.preventDefault();

    jQuery('#js-drawer-icon').toggleClass('is-checked');
    jQuery('#js-drawer-content').toggleClass('is-checked');
    // jQuery('.drawer__background').toggleClass('is-checked');

    return false;
});


// ==================================================
// ドロワーアイコン・コンテンツの設定
// ==================================================
jQuery('.js-accordion').on("click",function(e) {
    e.preventDefault();

    // is-openが当たっているかどうか確認する
    if (jQuery(this).parent().hasClass("is-open")) {
        // あたっている時、外す
        jQuery(this).parent().removeClass("is-open");
        jQuery(this).next().slideUp();
    } else {
        // あたっていない時、付与する
        jQuery(this).parent().addClass("is-open");
        jQuery(this).next().slideDown();
    }
});

// ==================================================
// モーダル
// ==================================================
jQuery(document).ready(function($) {
    // モーダルを開く
    $('.js-modal-open').on('click', function(e) {
        e.preventDefault(); // デフォルトのイベントを防止
        $('#js-about-modal').show(); // モーダルを表示
    });

    // モーダルを閉じる
    $('.js-modal-close').on('click', function(e) {
        e.preventDefault(); // デフォルトのイベントを防止
        $('#js-about-modal').hide(); // モーダルを非表示
    });
});

// ==================================================
// スムーススクロール
// ==================================================

// PCの時
jQuery('a[href^="#"]').on("click",function(e){
    
    const speed =  300;
    const id = jQuery(this).attr("href");
    const target = jQuery("#" == id ? "html" : id );
    const position = jQuery(target).offset().top;

    jQuery("html, body").animate(
        {
            scrollTop: position,
        },
        speed,
        "swing"
    );
});

// SPの時（ドロワーのaタグを押した時）
jQuery('#js-drawer-content a[href^="#"]').on("click",function(e){

    jQuery('#js-drawer-icon').removeClass('is-checked');
    jQuery('#js-drawer-content').removeClass('is-checked');

});


// ページトップはスクロールしたら表示する
jQuery(window).on("scroll",function(){

    if(100 < jQuery(window).scrollTop()) {
        jQuery("#js-pagetop").addClass("is-show");
    } else {
        jQuery("#js-pagetop").removeClass("is-show");
    }

});



// ==================================================
// スライダー
// ==================================================
const swiper = new Swiper('#js-gallery-swiper', {

    spaceBetween: 70,
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '#js-gallery-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#js-gallery-next',
        prevEl: '#js-gallery-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});