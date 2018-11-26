

$(function () {
    //详情页选项卡
    $('.detail-content').eq(0).show()
    //默认显示第1个
    $('.detail-hd li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
       // 当前元素添加active 这个类名，其他同级元素移除这个active类名 
        var i = $('.detail-hd li').index(this);//让li当前索引等于i
        $('.detail-content').eq(i).show().siblings('.detail-content').hide()
        //eq()表示获取第几个元素
        //siblings(".detail-content").hide(); 这个只是查找每个div元素，使他们全部隐藏。
    })
    //点击收藏====改属性
    var lu = true;
      $('.fav').click(function () {
        if (lu) {
            $(this).css('background-position-x', '-340px');
            lu = false;
        } else {
            $(this).css('background-position-x', '-307px');
            lu = true;
        }
        
    })
})