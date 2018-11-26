/*
 1.模拟数据
 2.使用数据生成页面
 3.完成效果
        1.加减 改变购买的数目--改变小计
        2.删除--删除当前项目----confirm()
        3.选中--计算总价
        3.全选---全选（计算总价）---全取消---
 */
$(function() {
	//使用数据生成页面
	var goods = data.goods; //获取数组数据
	for(var i = 0; i < goods.length; i++) {

		$('<div class="cart-list" title=' +
			goods[i].id +
			'><div class="cart-hd"><input value="" type="checkbox" /><span>'
			+ goods[i].title + '</span></div><div class="cart-items"><dl><dt><a href="detail.html"><img src='
			+ goods[i].imgUrl + '/></a></dt><dd>名称' +
			goods[i].title +
			'</dd><dd>简介：当你第一次见到C#时，千万不要傻傻地将它读作“C井号”...</dd><dd>定价：￥<span class="price">' +
			goods[i].price +
			'</span></dd></dl><div class="icon del-item"><a href="#"></a></div></div><div class="subtotal"><span class="total">小计：￥<em>' + goods[i].price + '</em></span><span class="count"><a class="icon minus" href="#"></a><input id="num" step="1" min="0" value="1" type="number"/><a class="icon add" href="#"></a></span></div></div>').appendTo(".container")

	}

	//事件处理--加---减
	//找到要点击的标签---绑定事件---给input重新赋值---var（）
	//	加
	$(".add").click(function() {
		var countN = $(this).siblings("input"); //找到兄弟标签input
		var val0 = parseInt(countN.val()) //获取input原来的值
		var valN = val0 + 1; //值加1
		countN.val(valN); //把新值赋值回去
		//获取单价
		var price = parseFloat($(this).parent().parent().siblings(".cart-items").find(".price").text());
		//计算小计
		var subprice = price * valN;
		// 		小计赋值
		$(this).parent().prev().children("em").text(subprice);
		add();
		return false; //既可以阻止事件传播 也可以阻止默认行为

	})
	//	减
	$(".minus").click(function() {
		var countN = $(this).siblings("input"); //找到兄弟标签input
		var val0 = parseInt(countN.val()) //获取input原来的值
		if(val0 > 0) {
			var valN = val0 - 1; //值-1
			countN.val(valN); //把新值赋值回去
			//获取单价
			var price = parseFloat($(this).parent().parent().siblings(".cart-items").find(".price").text());
			//计算小计
			var subprice = price * valN;
			// 		小计赋值
			$(this).parent().prev().children("em").text(subprice);
			add();
			return false; //既可以阻止事件传播 也可以阻止默认行为
		}

	})

	//事件处理--删除
	$(".del-item a").click(function() {
		//让模态框显示
		//给模态框上面的按钮添加事件

		//省事的做法--正式开发不用----使用系统弹框来判断

		var boo = confirm("确定删除吗？")
		if(boo) {
			$(this).parents(".cart-list").remove();
			add();
			return false;
		}
	})

	//事件全选
	$("#allCheck").click(function() {

		//点击全选找到所有的多选框---设置属性（获取被点击的状态，直接赋值给多选框）
		//prop与attr作用和用法一致：但是是专门来设置特殊属性的
		$(".container input[type='checkbox']").prop("checked", this.checked);
		add();
	})

	//事件处理
	/* jq为所有的表单类型提供了专用的选择器
	 * 1. ：input 匹配所有的input select textarea 标签
	 * 2. ：text 匹配单行文本框与input[type="text"]作用一样
	 * 3. ：password匹配密码框与input[type="password"]作用一样
	 * 4. ----其他都有
	 */

	//      $("input")//==所有的
	//  $("input:checked")  //==被选中的  
	//长度不一样就设置下边那个选中
	//  长度不一样-----设置不选中
	//表单专用的选择器input：checkbox：判断类型 input：checked：判断状态-找到被选中的input
/*	$(".container input:checkbox").click(function() { //找到所有的多选框绑定事件处理函数
		var allL = $(".container input:checkbox").length; //获取多选框的长度
		var cheL = $(".container input:checked").length; //获取所有的被选中的多选框的长度
		if(allL == cheL) {
			$("#allCheck").prop("checked", true) //如果长度一样，就说明已经全选
		} else {
			$("#allCheck").prop("checked", false)
		}
	add();
	}).trigger("click") //页面打开时，手动触发一次这个事件
*/
     //=====反选
      function isAll(){
      	var allL = $(".container input:checkbox").length; //获取多选框的长度
		var cheL = $(".container input:checked").length; //获取所有的被选中的多选框的长度
		if(allL == cheL) {
			$("#allCheck").prop("checked", true) //如果长度一样，就说明已经全选
		} else {
			$("#allCheck").prop("checked", false)
		}
	add();
      }
      //页面进来就执行一次
      isAll();
      //把函数绑定到多选框的点击事件
      $(".container input:checkbox").click(isAll);//页面打开时手动触发这个事件
	//封装函数-实现小计累加
	function add() {
		//找到所有的备选中的多选框----去除和其他相关的小计值----小计值累加
		var allTotle = 0;
		//使用for循环--循环取值
		/*	for(var i=0;i<$(".container input:checked")length;i++){
				var a = $(".container input:checked").eq(i);
				var aN = parseInt(a.parent().siblings(".subtotal").children(".total").children("em").text())
				allTotle = allTotle + aN;
			}*/

		//使用each()--循环取值---根据
		$(".container input:checked").each(function(index) {
			var a = $(".container input:checked").eq(index);
			var aN = parseInt(a.parent().siblings(".subtotal").children(".total").children("em").text());
			//			console.log(aN);
			allTotle = allTotle + aN;
			//			console.log(allTotle);
		})
		//把累计结果放在总计处
		$("#totPirce").text(allTotle)
	}
})