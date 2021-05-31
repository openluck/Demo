
var detail = $('.detail');
var btn = $('.btn-toggle');
var initialheight = detail.height();
if (initialheight > 44) {
  detail.css('height', '44');
  $('.btn-toggle').click(function (e) {
    e.preventDefault();
    var height = detail.height();
    if (height == 44) {
      detail.css('height', 'auto');
      btn.text('收起');
    }
    else {
      detail.css('height', '44');
      btn.text('展开');
    }
  });
  $('.detail').click(function (e) {
    e.preventDefault();
    var height = detail.height();
    if (height == 44) {
      detail.css('height', 'auto');
      btn.text('收起');
    }
    else {
      detail.css('height', '44');
      btn.text('展开');
    }
  });
}
else {
  detail.css('height', 'auto');
  $('.btn-toggle').addClass('moving');
}


$(document).ready(function(){
  var recommend = $('.recommend-container'),
      my_recommend = recommend.find('#my-recommend-list'),
      others_recommend = recommend.find('#others-recommend-list'),
      recommend_tab = $('.recommend-switcher'),
      tab_my_recommend = recommend_tab.children('li').eq(0),
      tab_others_recommend = recommend_tab.children('li').eq(1);

 recommend.on('click', function(event) {
    event.preventDefault();
    ( $(event.target).is(tab_others_recommend) ) ? others_recommend_selected() : my_recommend_selected();
  });

  function others_recommend_selected(){
    my_recommend.removeClass('is-selected');
    others_recommend.addClass('is-selected');
    tab_my_recommend.removeClass('selected');
    tab_others_recommend.addClass('selected');
  }

  function my_recommend_selected(){
    my_recommend.addClass('is-selected');
    others_recommend.removeClass('is-selected');
    tab_my_recommend.addClass('selected');
    tab_others_recommend.removeClass('selected');
  }
});
