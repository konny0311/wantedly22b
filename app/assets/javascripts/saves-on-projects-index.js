$(function() {
  // 保存ボタン
  $('.fa-bookmark-o').on('click', function(){
    var id = this.dataset.project_id
    var path = location.pathname + "projects/" + id + "/saves"
    var btn = this
    if (!$(btn).hasClass('pressed'))
    // 保存ボタンが押されるとbookmarkボタンのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
    {
      $(btn).addClass('pressed')
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
        btn.style.color = "#7fdae7";
      })
      .fail(function(){
        alert('保存できませんでした')
      })
    }
  })
})
