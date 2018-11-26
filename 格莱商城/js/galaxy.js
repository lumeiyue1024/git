$(function(){
	//banner图自适应
	var domWidth =$(window).width();
	$('.banner-box').css('width',domWidth *3);
	$('.banner-box img').css('width',domWidth);
	
	//购物车(全选)
	$("#allCheck").click(function(){
		if (this.checked) {
			$(".container input[type='checkbox']").attr("checked",true);
		} else{
			$(".container input[type='checkbox']").attr("checked",false);
		}
	})
	//购物车(删除)
	$('.del-item').click(function(){
		var thisItem=$(this)
		$('.modals').css('display','block');
		$('.ok').click(function(){
			thisItem.parent().parent().remove();
			$('.modals').css('display','none');
		})
		$('.cancel').click(function(){
			$('.modals').css('display','none');
		})
	})
	//购物车(数量加减及价格计算)
	$('.add').click(function(){
		var price=$(this).parent().parent().prev().children().children('.price').children('span').html() // 获取定价
		var count=$(this).prev().val(); 		// 获取当前数量表单中的值
		$(this).prev().val(parseInt(count)+1);	// 数量加1
		var countNew=$(this).prev().val();		// 储存新值
		var total=price * countNew;				// 计算总价
		$(this).parent().siblings().children().html('￥'+total+'.00')	// 显示总价
	})
	$('.minus').click(function(){
		var price=$(this).parent().parent().prev().children().children('.price').children('span').html() // 获取定价
		var count=$(this).next().val();			// 获取当前数量表单中的值
		var total=price * (count-1);			// 计算总价
		if (count<=1) {							// 判断不能为负数
			count=1;
		}
		else{
			$(this).next().val(parseInt(count)-1);	// 数量减1
			$(this).parent().siblings().children().html('￥'+total+'.00') // 显示总价
		}
	})
	//详情页选项卡
	$('.detail-content').eq(0).show()//默认展开第1个
	$('.detail-hd li').click(function(){	
		$(this).addClass('active').siblings().removeClass('active')
		var i=$('.detail-hd li').index(this);//让li当前索引等于i
		$('.detail-content').eq(i).show().siblings('.detail-content').hide()//eq()表示获取第几个元素
	})
	//点击收藏
	var e=true;
	$('.fav').click(function(){
		if (e) {
			$(this).css('background-position-x','-340px');
			e=false;
		} else{
			$(this).css('background-position-x','-307px');
			e=true;
		}
	})
	//点击添加购物车
	var v=true;
	$('.secCart').click(function(){
		if (v) {
			$(this).css('background-position-x','-270px');
			v=false;
		} else{
			$(this).css('background-position-x','-234px');
			v=true;
		}
	})
})

//banner图自适应
$(window).resize(function(){
	$('.banner-box').css('width',$(window).width() *3);
	$('.banner-box img').css('width',$(window).width());
})