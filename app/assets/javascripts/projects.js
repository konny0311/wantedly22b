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
  var supportBtnTop = $('.company--under--bar__support--box__support--btn')[0];
  var supportBtnRight = $('.contents--right__interests--bottom__cheer__btn')[0];
  var supportBtnBottom = $('.support__btn--bottom')[0];
  var support = "<span class='support'>応援しました</span>";
  $([supportBtnTop, supportBtnRight, supportBtnBottom]).on('click', function(){
    supportBtnTop.innerHTML= support;
    supportBtnRight.innerHTML= support;
    supportBtnBottom.innerHTML= support;
    // 応援された数を保存
    var path = location.pathname + "/supports"
    $.ajax({
      url: path,
      type: "POST",
      data: {project_id: 1, user_id: 1},
      dataType: 'json',
      processData: false,
      contentType: false,
      cache: false
    })
    .done(function(){
      var sumSupport = $('.company--under--bar__support--box__support--num')[0].innerHTML
      var num = Number(sumSupport)
      console.log(num+1)
      $('.company--under--bar__support--box__support--num')[0].innerHTML =
      num+1
    })
    .fail(function(){
      alert('応援できませんでした')
    })
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
