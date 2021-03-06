$(function() {
  // 求人画面にてメンバー画像の上にカーソルを乗せると自己紹介が現れる
  var member = $('.contents--left__company__members__image__container');
  var sentence = $('.contents--left__company__members__introduction');
  member.on({
    'mouseenter': function() {
    var id = this.dataset.user_id;
    var catchcopy = $('.catchcopy')[id-1];
    catchcopy.className = "catchcopy--shown"
    // 自己紹介文はli(display:none)として記載
    // 写真hoverされたもののidを入手し、id一致するもののみli(display:list-item)化
    },
    'mouseleave': function() {
    var catchcopy = $('.catchcopy--shown')[0];
    console.log(catchcopy);
    catchcopy.className = "catchcopy"
    }
  })
})
