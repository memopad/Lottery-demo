$(function () {
  $('#lottery-btn').click(function(){
    if($(this).hasClass('opened')){
      $(this).removeClass('opened').text('打开宝箱');
    }else{
      $(this).addClass('opened').text('关闭宝箱');
    }

    document.querySelectorAll('.item-real').forEach((element,index) => {
      let target = document.querySelectorAll(".item")[index];
      if($(element).hasClass('item-show')){
        $(element).removeClass('item-show')
      }else{
        $(element).addClass('item-show')
      }
      const parabola = funParabola(element, target).mark();
      parabola.init();
    });
  })
})