$(function(){
  // 応援ボタン
  var supportBtnTop = $('.company--under--bar__support--box__support--btn')[0];
  var supportBtnRight = $('.contents--right__interests--bottom__cheer__btn')[0];
  var supportBtnBottom = $('.support__btn--bottom')[0];
  var support = "<span class='support'>応援しました</span>";
  $([supportBtnTop, supportBtnRight, supportBtnBottom]).on('click', function(){
    supportBtnTop.innerHTML= support;
    supportBtnRight.innerHTML= support;
    supportBtnBottom.innerHTML= support;
    // 応援された数を保存,カウンターに+1
    var path = location.pathname + "/supports"
    var id = location.href.split("/projects/")[1]
    var button = $('.company--under--bar__support--box__support--btn')
    var counter = Number($('.company--under--bar__support--box__support--num')[0].innerHTML)
    if (!button.hasClass('pressed'))
    // 応援ボタンが押されるとbuttonのクラス名に'pressed'を追加し、'pressed'の有無により既に押されているかどうかを判定
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
        $('.company--under--bar__support--box__support--num')[0].innerHTML = counter+1
        button.addClass('pressed')
      })
      .fail(function(){
        alert('応援できませんでした')
      })
    }
  })
})
