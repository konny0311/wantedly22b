$(function() {
  // 求人画面にてメンバー画像の上にカーソルを乗せると自己紹介が現れる
  var member = $('.contents--left__company__members__image__container');
  var sentence = $('.contents--left__company__members__introduction');
  member.hover(function() {
    console.log(this)
    var id = this.dataset.user_id;
    console.log(id)
    // thisからuser_id取得し、自己紹介表示に利用したい
  })
})
