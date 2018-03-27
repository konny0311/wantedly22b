$(function() {
  // 保存ボタン
  var checkBtnRight = $('.contents--right__interests--top--centered__check--later__btn')[0];
  var checkBtnBottom = $('.later__btn--bottom')[0];
  var check = "<span class='check'>保存しました</span>";
  $([checkBtnRight, checkBtnBottom]).on('click', function(){
    checkBtnRight.innerHTML= check;
    checkBtnBottom.innerHTML= check;
  })
  // エントリーボタン
  var entryBtnRight = $('.contents--right__interests--top--centered__entry__btn')[0];
  var entryBtnBottom = $('.entry__btn--bottom')[0];
  var entry = "<span class='entry'>エントリーしました</span>";
  $([entryBtnRight, entryBtnBottom]).on('click', function(){
    entryBtnRight.innerHTML= entry;
    entryBtnBottom.innerHTML= entry;
  })
  // 応援ボタン
  var supportBtnRight = $('.contents--right__interests--bottom__cheer__btn')[0];
  var supportBtnBottom = $('.support__btn--bottom')[0];
  var support = "<span class='support'>応援しました</span>";
  $([supportBtnRight, supportBtnBottom]).on('click', function(){
    supportBtnRight.innerHTML= support;
    supportBtnBottom.innerHTML= support;
  })
  // modal_window
  var modal_window_entry = $('#overlay, #modal-window__projects__entry');
  var modal_window_support = $('#overlay,  #modal-window__projects__support');
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
