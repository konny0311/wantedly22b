$(function() {
  // 保存ボタン
  var saveBtn = $('.fa-bookmark-o')[0];
  var save = "<i class="fa fa-bookmark-o green"></i>";
  saveBtn.on('click', function(){
    var id = saveBtn.dataset.project_id
    var path = location.pathname + "/projects/#{id}/saves"
    console.log('aaa')
    // var button = $('.contents--right__interests--top--centered__check--later__btn')
    // if (!button.hasClass('pressed'))
    // // 保存ボタンが押されるとbuttonのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
    // {
    //   $.ajax({
    //     url: path,
    //     type: "POST",
    //     data: {project_id: id},
    //     dataType: 'json',
    //     processData: false,
    //     contentType: false,
    //     cache: false
    //   })
    //   .done(function(){
    //     button.addClass('pressed')
    //   })
    //   .fail(function(){
    //     alert('保存できませんでした')
    //   })
    // }
  })
})
