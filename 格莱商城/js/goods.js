$(function() {
	//使用数据生成页面
	var goods = data.goods; //获取数组数据
	for(var i = 0; i < goods.length; i++) {
		 $(".goods-items ul").append('<li><a href="detail.html" id=""><em><img src="' + goods[i].imgUrl + '"></em> <span>' + goods[i].title + '</span> <span>￥' + goods[i].price + '</span><span>' + goods[i].reviews + '条评论  <i>' + goods[i].rate + '%好评</i></span></a></li>').appendTo(".goods-items");

	}
})