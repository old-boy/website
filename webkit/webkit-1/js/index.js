$(function(){
	searchImgList();
	
	//加载动画
	var progress = $.AMUI.progress;

	//节点
	var imgPanel = $('.js_container');
	var imgList = imgPanel.find('.js_img_list');
	var imgListPanel = imgList.find('.img-panel').remove();
	
	/*$('.js_img_list').remove();*/
	
	function searchImgList(){
		$.getJSON("../json/imglist.json",function(data){
			console.log("654654" + data);
			var data = data.imgList;
			
			if(data > 0){
				for(var i = 0; i < data.length; i++){
					var curImgPanel = imgListPanel.clone();
					
					var item = data[i];
					var imgUrl = item.imgUrl;
					var imgName = item.imgName;
					var imgDate = item.imgTime;
					var imgClickNum = item.imgClickNum;
					
					curImgPanel.find('js_img_url').attr('src',imgUrl);
					curImgPanel.find('.js_img_title').text(imgName);
					curImgPanel.find('.js_img_date').text(imgDate);
					curImgPanel.find('.js_click_num').text(imgClickNum);
					
					imgPanel.append(curImgPanel);
				}
			}
			
		});
		
		/*$.ajax({
			type:"get",
			url:imgList,
			data: "",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			beforeSend: function(data){
				//这里判断，如果没有加载数据，会显示loading   
			},
			success: function(data) {
				//这里判断，如果加载成功则把数据显示在页面上   
			},
			complete: function(data){
				//这里判断，数据加载成功之后，loading 隐藏
			}
			error:function(data){
				//这里判断，如果没有获取到数据，则会有相应的提示信息  
			}
		});*/
	}
});