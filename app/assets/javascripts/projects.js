$(function() {
  $('.contents--right__interests--top--centered__check--later__btn').on('click', function(e){
    this.innerHTML= "<span class='check'>保存しました</span>"
  })
  $('.later__btn--bottom').on('click', function(e){
    this.innerHTML= "<span class='check'>保存しました</span>"
  })

  $('#entry__detail').on('click', function(){
    $('#overlay, #modal_window--close, #modal_window__projects__entry').fadeIn();
  })
  $('#overlay, #modal_window--close').on('click', function(){
    $('#overlay, #modal_window--close, #modal_window__projects__entry').fadeOut();
  })

})
