var OFFER_LINK = $("#OFFER_LINK").val();
var EMPTY_LINK = $("#EMPTY_LINK").val();
var EXIT_LINK = $("#EXIT_LINK").val();
var FRM = $("#FRM").val();
var METRIKA_UID = $("#METRIKA_USER_ID").val();
var SRC = $("#SRC").val();
var CID = $("#CID").val();
var SID = $("#SID").val();
var TID = $("#TID").val();
var phone_max_length = 20
  , kmacb_manager_class = "kmacb__manager-woman3"
  , kmacb_form_selector = ".call-form";
$(function() {
    var KMAText = {
        'validation_name': 'Укажите корректные ФИО.',
        'validation_phone1': 'Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы.',
        'validation_phone2': 'В вашем телефоне слишком мало цифр.',
        'validation_phone3': 'В вашем телефоне слишком много цифр.',
        'comebacker_text': 'ВНИМАНИЕ'
    };
    KMA.initCallback(20000);
    KMA.initComebacker(7000);
});
$(document).ready(function() {
    $("input[type=submit],button[type=submit]").click(function() {
        console.log("order_click");
    });
    var scrolled = false;
    var hscrolled = false;
    var fullscroll = false;
    $(window).scroll(function() {
        if ($(window).scrollTop() > 6000 && !scrolled) {
            scrolled = true;
            addGoal('land_scroll');
        }
        if ($(window).scrollTop() > 500 && !hscrolled) {
            hscrolled = true;
            addGoal('land_halfscroll');
        }
        if ($(window).scrollTop() > 9500 && !fullscroll) {
            fullscroll = true;
            addGoal('land_fullscroll');
        }
    });
    $(".goods_left_num").fadeOut().html(38).fadeIn();
    setInterval(function() {
        var num = parseInt($(".goods_left_num:first").html());
        var buy = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
        num -= buy;
        if (num <= 7) {
            num = 7;
        }
        if (Math.random() < 0.5) {
            $(".goods_left_num").fadeOut().html(num).fadeIn();
        } else {
            $(".goods_left_num").fadeOut().fadeIn();
        }
        console.log(num + "; " + buy);
    }, 5000);
});
function date() {
    d = new Date();
    p = new Date(d.getTime());
    monthA = 'Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря'.split(',');
    $('.date_b').html('' + p.getDate() + ' ' + monthA[p.getMonth()]);
}
$(document).ready(function() {
    date();
});
