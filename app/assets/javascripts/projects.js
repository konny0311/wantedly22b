$(function() {
  // 保存ボタン
  var c1 = $('.contents--right__interests--top--centered__check--later__btn')[0];
  var c2 = $('.later__btn--bottom')[0];
  $([c1, c2]).on('click', function(){
    c1.innerHTML= "<span class='check'>保存しました</span>"
    c2.innerHTML= "<span class='check'>保存しました</span>"
  })
  // エントリーボタン
  var e1 = $('.contents--right__interests--top--centered__entry__btn')[0];
  var e2 = $('.entry__btn--bottom')[0];
  $([e1, e2]).on('click', function(){
    e1.innerHTML= "<span class='entry'>エントリーしました</span>"
    e2.innerHTML= "<span class='entry'>エントリーしました</span>"
  })
  // 応援ボタン
  var s1 = $('.contents--right__interests--bottom__cheer__btn')[0];
  var s2 = $('.support__btn--bottom')[0];
  $([s1, s2]).on('click', function(){
    s1.innerHTML= "<span class='support'>応援しました</span>"
    s2.innerHTML= "<span class='support'>応援しました</span>"
  })
  // modal_window
  $('.entry__detail').on('click', function(){
    $('#overlay, #modal_window__projects__entry').fadeIn();
  })
  $('#overlay').on('click', function(){
    $('#overlay, #modal_window__projects__entry').fadeOut();
  })
  $('.support__detail').on('click', function(){
    $('#overlay,  #modal_window__projects__support').fadeIn();
  })
  $('#overlay').on('click', function(){
    $('#overlay, #modal_window__projects__support').fadeOut();
  })

})
