$(function() {
  // 保存ボタン
  var c1 = $('.contents--right__interests--top--centered__check--later__btn')[0];
  var c2 = $('.later__btn--bottom')[0];
  var check = "<span class='check'>保存しました</span>";
  $([c1, c2]).on('click', function(){
    // console.log(span-check)
    c1.innerHTML= check;
    c2.innerHTML= check;
  })
  // エントリーボタン
  var e1 = $('.contents--right__interests--top--centered__entry__btn')[0];
  var e2 = $('.entry__btn--bottom')[0];
  var entry = "<span class='entry'>エントリーしました</span>";
  $([e1, e2]).on('click', function(){
    e1.innerHTML= entry;
    e2.innerHTML= entry;
  })
  // 応援ボタン
  var s1 = $('.contents--right__interests--bottom__cheer__btn')[0];
  var s2 = $('.support__btn--bottom')[0];
  var support = "<span class='support'>応援しました</span>";
  $([s1, s2]).on('click', function(){
    s1.innerHTML= support;
    s2.innerHTML= support;
  })
  // modal_window
  var modal_window_entry = $('#overlay, #modal_window__projects__entry');
  var modal_window_support = $('#overlay,  #modal_window__projects__support');
  $('.entry__detail').on('click', function(){
    modal_window_entry.fadeIn();
  })
  $('#overlay').on('click', function(){
    modal_window_entry.fadeOut();
  })
  $('.support__detail').on('click', function(){
    modal_window_support.fadeIn();
  })
  $('#overlay').on('click', function(){
    modal_window_support.fadeOut();
  })
})
