$(function() {
  // エントリーボタン
  var entryBtnRight = $('.contents--right__interests--top--centered__entry__btn')[0];
  var entryBtnBottom = $('.entry__btn--bottom')[0];
  var entry = "<span class='entry'>エントリーしました</span>";
  $([entryBtnRight, entryBtnBottom]).on('click', function(){
    entryBtnRight.innerHTML= entry;
    entryBtnBottom.innerHTML= entry;
    // エントリーを保存
    var path = location.pathname + "/entries"
    var id = location.href.split("/projects/")[1]
    var button = $('.contents--right__interests--top--centered__entry__btn')
    if (!button.hasClass('pressed'))
    // エントリーボタンが押されるとbuttonのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
    {
      $.ajax({
        url: path,
        type: "POST",
        data: {project_id: id},
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false
      })
      .done(function(){
        button.addClass('pressed')
      })
      .fail(function(){
        alert('エントリーできませんでした')
      })
    }
  })
})
