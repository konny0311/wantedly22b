$(function() {
  // 保存ボタン
  var checkBtnRight = $('.contents--right__interests--top--centered__check--later__btn')[0];
  var checkBtnBottom = $('.later__btn--bottom')[0];
  var check = "<span class='check'>保存しました</span>";
  $([checkBtnRight, checkBtnBottom]).on('click', function(){
    checkBtnRight.innerHTML= check;
    checkBtnBottom.innerHTML= check;
  })
  // modalWindow
  var modalWindowEntry = $('#overlay, #modal-window__projects__entry');
  var modalWindowSupport = $('#overlay,  #modal-window__projects__support');
  $('.entry__detail').on('click', function(){
    modalWindowEntry.fadeIn();
  })
  $('#overlay').on('click', function(){
    modalWindowEntry.fadeOut();
  })
  $('.support__detail').on('click', function(){
    modalWindowSupport.fadeIn();
  })
  $('#overlay').on('click', function(){
    modalWindowSupport.fadeOut();
  })
})
