$(function() {
  // 保存ボタン
  $('.fa-bookmark-o').on('click', function(){
    var id = this.dataset.project_id
    var path = location.pathname + "projects/" + id + "/saves"
    console.log(id)
    console.log(path)
    console.log(this)
    if (!this.hasClass('pressed'))
    // 保存ボタンが押されるとbookmarkボタンのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
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
        this.addClass('pressed')
      })
      .fail(function(){
        alert('保存できませんでした')
      })
    }
  })
})
