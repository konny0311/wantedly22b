$(function() {
  // 保存ボタン
  var checkBtnRight = $('.contents--right__interests--top--centered__check--later__btn')[0];
  var checkBtnBottom = $('.later__btn--bottom')[0];
  var check = "<span class='check'>保存しました</span>";
  $([checkBtnRight, checkBtnBottom]).on('click', function(){
    checkBtnRight.innerHTML= check;
    checkBtnBottom.innerHTML= check;
    var path = location.pathname + "/saves"
    var id = location.href.split("/projects/")[1]
    var button = $('.contents--right__interests--top--centered__check--later__btn')
    console.log(path)
    if (!button.hasClass('pressed'))
    // 保存ボタンが押されるとbuttonのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
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
        alert('保存できませんでした')
      })
    }
  })
})
