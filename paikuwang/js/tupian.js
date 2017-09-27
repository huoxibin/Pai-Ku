$.get("json/tupian.json",function(msg){
	addpic(msg)
	
	})
//添加三级菜单   先建立一个JSon 遍历json 生成ul 将键值用逗号分开加入数组，循环给LI，吧li添加进对应Ul
function addpic(tupian){
	for(var key in tupian){
	
		
		var pic=tupian[key].pic.split(",")
		var wenzi=tupian[key].wenzi.split(",")
		var deta=tupian[key].deta.split(",")
		
			
		var	$indexSaleCenterUl=$("<ul></ul>").appendTo($("#indexSaleCenter"))
		
		
		for(var j=0;j<deta.length;j++){
			
			$indexSaleCenterLi=$("<li></li>").appendTo($indexSaleCenterUl)
			$indexSaleCenterDl=$("<dl></dl>").appendTo($indexSaleCenterLi)
			$indexSaleCenterA=$("<a href='javascript:;'></a>").appendTo($indexSaleCenterDl)
			$indexSaleCenterDt=$("<dt></dt>").appendTo($indexSaleCenterA)
			$indexSaleCenterImg=$("<img src="+pic[j]+"/>").appendTo($indexSaleCenterDt)
			$indexSaleCenterSpan=$("<span></span>").appendTo($indexSaleCenterDt)
			$indexSaleCenterDd=$("<dd></dd>").appendTo($indexSaleCenterA)
			$indexSaleCenterDdp1=$("<p>"+wenzi[j]+"</p>").appendTo($indexSaleCenterDd)
			$indexSaleCenterDdp2=$("<p>"+deta[j]+"</p>").appendTo($indexSaleCenterDd)
			
		}
	}
}