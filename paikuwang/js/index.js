//=============================================================轮播图====================================================
		var t , n =0, count;
		$(document).ready(function(){
			count=$("#banner_list a").length;
			$("#banner_list a:not(:first-child)").hide();
			$("#banner li").click(function() {
			var i = $(this).text()-1;//获取Li元素内的值，
			/*console.log(i)
			console.log(count)*/
			n = i;
			if (i >= count) return;
			$("#banner_list a").filter(":visible").fadeOut().parent().children().eq(i).fadeIn();
			
			$(this).toggleClass("on");
			$(this).siblings().removeAttr("class");
			});
			t = setInterval("showAuto()", 3000);
			$("#banner").hover(function(){
				clearInterval(t)
				$("#leftBtn").css({display:"block"})
				$("#rightBtn").css({display:"block"})
			},
			function(){
				$("#leftBtn").css({display:"none"})
				$("#rightBtn").css({display:"none"})
				t = setInterval("showAuto()", 3000);
			});
			$("#leftBtn").click(function(){
				clearInterval(t)
				
				n = n >=count ? 0: --n;
				console.log(n)
				$("#banner li").eq(n).trigger('click');
			})
			$("#rightBtn").click(function(){
				clearInterval(t)
				console.log(n)
				n = n >=(count-1) ?0 : ++n;
				$("#banner li").eq(n).trigger('click');
			})
		})
		function showAuto()
		{	
			n = n >=(count -1) ?0 : ++n;
			$("#banner li").eq(n).trigger('click');
		}
	//==================================================下拉菜单==============================================	
			
			$(function(){
				//两个小的下拉菜单
				$("#boxTop ul li").eq(4).hover(fn1,fn2)
				$("#boxTop ul li").eq(5).hover(fn1,fn2)
					function fn1(){
						$(this).children().eq(1).stop(true).slideDown()
					}
					function fn2(){
						$(this).children().eq(1).stop(true,true).slideUp()
						
					}
				//购物车下拉菜单出现返回	
				$("#boxBottomRight").hover(
					function fn1(){
						$("#boxBottomRight div").slideDown().stop(true,true)
					},
					function fn2(){
						$("#boxBottomRight div").slideUp().stop(true,true)	
						
					})
				//==================================================导航栏==============================================
				$.get("json/daohang.json",function(msg){
					addNav(msg)
					hover()
				})
				//添加三级菜单   先建立一个JSon 遍历json 生成ul 将键值用逗号分开加入数组，循环给LI，吧li添加进对应Ul
				function addNav(daohang){
					for(var key in daohang){
						$navThrUl=$("<ul></ul>").appendTo("#navThr")
							var arr=daohang[key].date1.split(",")
						for(var j=0;j<arr.length;j++){
							var $navThrLi=$("<li><a href='javascript'>"+arr[j]+"</a></li>").appendTo($navThrUl)
						}
					}
				}
				//滑入滑出效果     滑入li的时候对应的Ul显示，滑出时判断是否滑入ul，如果滑入ul上本身不消失，对应的Li颜色为白色，滑出时消失，如果没滑入UL，UL直接消失
				function hover(){
					$("#navTwo li").hover(
						function(){
							$(this).css({background:"#fff"}),
							$("#navThr").show(),
							$("#navThr ul").eq($(this).index()).show().siblings().hide();
						},function(){
							//设置一个变量=$(this)  建立一个索引 
							var $navtwoLi=$(this)
							if($("#navThr")){
								$("#navThr").hover(
									function(){
										$("#navThr").show()
										$navtwoLi.siblings().css({background:""})
										$navtwoLi.css({background:"#fff"})
										$navtwoLi.siblings().children().css({color:""})
										$navtwoLi.children().css({color:"#000"})
									},function(){
										$("#navThr").hide()
										$navtwoLi.children().css({color:""})
										$navtwoLi.css({background:""})
									}
								)
							}
							$("#navThr").hide()
							$(this).css({
								background:"",
							})
						}
					)
				}
				//======================================================划上导航栏效果====================================
				$("#navOne a").hover(function(){
					$(this).stop(true,true).animate({top:-2})
					$(this).css({color:"#463B7F"})
					$("#navOne a:first").css({color:"#fff"})
				},function(){
					$(this).stop(true,true).animate({top:0})
					$(this).css({color:""})
					$("#navOne a:first").css({color:"#fff"})
				})
				//=====================================================楼梯===================================================
					$floorLi=$("#floor ul li")
					$floorLi.click(function(){
						var i=$(this).index()
						$(this).siblings().css({background:""})
						$(this).css({background:"#ccc"})
						$("html,body").animate({
							scrollTop:1000*i
						})
						
					})
					$(window).scroll(function(){
						if($(window).scrollTop()>600){
							$("#floor").css({display:"block"})
						}else{
							$floorLi.css({background:""})
							$("#floor").css({display:"none"})
						}
						
					})
				
				//=====================================================选项卡===================================================
				$("#indexSaleBottom ul li").click(function(){
					$("#indexSaleCenter ul").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"})
					$(this).css({background:"#463B7F"}).siblings().css({background:''})
				})
			//=====================================================注册===================================================	
			var b = true;
			$(".indexReg").click(function(){
				if (b) {
					var w=$(window).width()
					var h=$(window).height()
					$("#zhezhao").css({width:w,height:h}).show()
					$(".indexRegister").animate({
					"right": 0
					})
					b = false;
					
				} else {
					$("#zhezhao").hide()
					$(".indexRegister").animate({
					"right": -452
					})
					b = true;
				}
			})
			$(".indexRegX").click(function(){
				$("#zhezhao").hide()
				$(".indexRegister").animate({
					"right":-452
				})
				b=true;
			})
			
			//=====================================================返回顶部===================================================	
				$("#top").click(function(){
				$("body,html").animate({
					scrollTop:0
				},500)
			})
				
				//=============================================验证用户名，密码，手机号==========================================
                $("#zhuce").click(function(){
                	if($("#username").val()==""){
                		
                		alert("用户名不能为空")
                	}else{
                		var v = $("#username").val();
		                var reg=/^[a-zA-Z][a-zA-Z0-9_]{5}$/;
						if(!reg.test(v)){
					    alert('用户名不对');
						}else{
							var v = $("#password").val();
			                var reg1=/^\w{6,16}$/;
							if(!reg1.test(v)){
							    alert('密码长度不正确');
							}else{
								if($("#repassword").val()!=$("#password").val()){
			              		alert("输入密码不相同")
			              		}else{
			              			var str=$("#mobile").val();
							   		var re =/^1[3|7|5|8]\d{9}$/;
							   		if(!re.test(str)){
							   	
							   			alert("手机号不正确");
							   		}	
			              		}	
							}	
						}
               		 }
		  		})
				
				
				
				
				
				
				//=====================================================图片===================================================
				/$("#indexSale img").hover(img1,img2)
				
				
				function img1(){
					$(this).animate({opacity:'0.8'})
				}
				function img2(){
					$(this).animate({opacity:'1'})
				}
				//indexSaleCenter
			})