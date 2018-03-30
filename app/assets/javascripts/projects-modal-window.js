$(function() {
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
