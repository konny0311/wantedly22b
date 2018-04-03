$(function() {
  // 応援ボタン
  $('.fa-bullhorn').on('click', function(){
    var id = this.dataset.project_id
    var path = location.pathname + "projects/" + id + "/supports"
    console.log(id)
    console.log(path)
    console.log(this)
    if (!$(this).hasClass('pressed'))
    // 応援ボタンが押されると応援ボタンのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
    {
      $(this).addClass('pressed')
      console.log(this)
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
      })
      .fail(function(){
        alert('保存できませんでした')
      })
    }
  })
})
