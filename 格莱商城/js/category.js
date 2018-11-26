$(function(){
	var moreL = $(".products .list ul li:gt(8)");
	//页面初始化
	moreL.hide()
	 $(".more").click(function(){
	 	//判断jq对象是否符合指定的选择器----有一个符合的就是tur
	 	if(moreL.is(":visible")){
	 		moreL.slideUp()
	 		$(".more a").text("显示全部")
	 	}else{
	 		moreL.slideDown()
	 		$(".more a").text("显示精简")
	 	}
	 })	
})