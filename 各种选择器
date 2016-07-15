
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link media="screen"href="css/main.css"rel="stylesheet" />
		<script src="js/jquery-3.0.0.min.js"></script>
		<script src="js/main.js"></script>

	</head>
	<body>
		<button id="reset">手动重置页面元素</button>
  <input type="checkbox" id="isreset" checked="checked"/><label for="isreset">点击下列按钮时先自动重置页面</label><br />
  
		<h3>基本选择器：</h3>
		<input type="button"value="改变id为one的元素"id="btn1" />
		<input type="button"value="改变class为mini的元素"id="btn2" />
		<input type="button"value="改变div的元素"id="btn3" />
		<input type="button"value="改变所有元素"id="btn4" />
		<input type="button"value="改变span和id为two的元素"id="btn5" />
		<br />
		
		<h3>层次选择器：</h3>
		<input type="button"value="改变XX元素下的所有后代元素div mini"id="btn6" />
		<input type="button"value="改变XX元素下的的元素，只取一层，与上面有区别div .mini"id="btn7" />
		<input type="button"value="改变XX元素的下一个同辈YY元素one div"id="btn8" />
		<input type="button"value="改变XX元素之后的所有YY元素two div"id="btn9" />
		<br />
		
		
		<h3>基本过滤选择器：</h3>
		<input type="button"value="改变第1个div元素"id="btn10" />
		<input type="button"value="改变最后1个div元素"id="btn11" />
		<input type="button"value="改变class不为one的div元素"id="btn12" />
		<input type="button"value="改变索引值为偶数的div元素"id="btn13" />
		<input type="button"value="改变索引值为奇数的div元素"id="btn14" />
		<input type="button"value="改变索引值为3的div元素"id="btn15" />
		<input type="button"value="改变索引值大于3的div元素"id="btn16" />
		<input type="button"value="改变索引值小于3的div元素"id="btn17" />
		<input type="button"value="改变所有标题元素"id="btn18" />
		<input type="button"value="改变正在执行动画div元素"id="btn19" />
		<input type="button"value="改变当前获取焦点的div元素"id="btn20" />
		<br />
		
		<h3>内容过滤选择器：</h3>
		<input type="button"value="改变含有文本内容XXX的元素：contains(text)"id="btn21" />
		<input type="button"value="改变不包含子元素的元素:empty"id="btn22" />
		<input type="button"value="改变含有选择器所匹配的的元素：has(selector)"id="btn23" />
		<input type="button"value="改变含有子元素的元素：parent"id="btn24" />
		<br />


		<h3>可见性过滤选择器：</h3>
		<input type="button"value="选取所有可见的元素：visible"id="btn25" />
		<input type="button"value="选取所有不可见的元素:hidden"id="btn26" />
		<br />
		
		
		
		<h3>属性过滤选择器：</h3>
		<input type="button"value="改变含有属性title的div元素[xx]"id="btn27" />
		<input type="button"value="改变属性title=test的div元素[xx=xx]"id="btn28" />
		<input type="button"value="改变属性title！=test的div元素[xx!=xx]"id="btn29" />
		<input type="button"value="改变属性值从value开始的元素[xx^=value]"id="btn30" />
		<input type="button"value="改变属性值以value结束的元素[xx$=value]"id="btn31" />
		<input type="button"value="改变属性值含有value的元素[xx*=value]"id="btn32" />
		<input type="button"value="有id且title含有es"id="btn33" />

		<br />
		
		
		<div class="one"id="one">
			id为one，class为one的div
			<div class="mini">class为mini</div>
		</div>
		<div class="one"id="two"title="test">
			id为two，class为one，title=test的div
			<div class="mini"title="other">class为mini，title为other</div>
			<div class="mini"title="test">class为mini，title为test</div>
		</div>
		<div class="one">
			<div class="mini">class为mini</div>
			<div class="mini">class为mini</div>
			<div class="mini">class为mini</div>
			<div class="mini"></div>
		</div>
		<div class="one">
			<div class="mini">class为mini</div>
			<div class="mini">class为mini</div>
			<div class="mini">class为mini</div>
			<div class="mini"title="tesst">class为mini,title为tesst</div>
		</div>
		<div style="display: none;"class="none">
			style的display为"none"的div
		</div>
		<div class="hide">class为hide的div</div>
		<div>
			包含input的type为"hidden"的div
		</div>
		<span id="mover">hhh</span>
	</body>
</html>


JS部分
$(document).ready(function(){
	
	//重置页面元素
	$("#reset").click(function(){
		$("*").removeAttr("style");
		$("div[class=none]").css({"display":"none"});
	});
	//判断是否重复重置
	$("input[type=button").click(function(){
		if($("#isreset").is(":checked")){
			$("#reset").click();
		}
	});
	  function animateIt() {
		  $("#mover").slideToggle("slow", animateIt);
	    }
		animateIt();
	//基本选择器
	$("#btn1").click(function(){
		$("#one").css("background","#bbffaa");
	});
	$("#btn2").click(function(){
		$(".mini").css("background","#bbffaa");
	});
	$("#btn3").click(function(){
		$("div").css("background","#bbffaa");
	});
	$("#btn4").click(function(){
		$("*").css("background","#bbffaa");
	});
	$("#btn5").click(function(){
		$("span,#two").css("background","#bbffaa");
	});
	
//	层次选择器
	$("#btn6").click(function(){
		$("div .mini").css("background","#bbffaa");
	});
	$("#btn7").click(function(){
		$("div>.mini").css("background","#bbffaa");
	});
	$("#btn8").click(function(){
		$(".one+div").css("background","#bbffaa");
	});
	$("#btn9").click(function(){
		$("#two~div").css("background","#bbffaa");
	});
	
	//基本过滤选择器
	$("#btn10").click(function(){
		$("div:first").css("background","#bbffaa");
	});
	$("#btn11").click(function(){
		$("div:last").css("background","#bbffaa");
	});
	$("#btn12").click(function(){
		$("div:not(.one)").css("background","#bbffaa");
	});
	$("#btn13").click(function(){
		$("div:even").css("background","#bbffaa");
	});
	$("#btn14").click(function(){
		$("div:odd").css("background","#bbffaa");
	});
	$("#btn15").click(function(){
		$("div:eq(3)").css("background","#bbffaa");
	});
	$("#btn16").click(function(){
		$("div:gt(3)").css("background","#bbffaa");
	});
	$("#btn17").click(function(){
		$("div:lt(3)").css("background","#bbffaa");
	});
	$("#btn18").click(function(){
		$(":header").css("background","#bbffaa");
	});
	$("#btn19").click(function(){
		$(":animated").css("background","#bbffaa");
	});
	$("#btn20").click(function(){
		$(":focus").css("background","#bbffaa");
	});
	
	
//内容过滤选择器
	$("#btn21").click(function(){
		$("div:contains(di)").css("background","#bbffaa");
	});
	$("#btn22").click(function(){
		$("div:empty").css("background","#bbffaa");
	});
	$("#btn23").click(function(){
		$("div:has(.mini)").css("background","#bbffaa");
	});
	$("#btn24").click(function(){
		$("div:parent").css("background","#bbffaa");
	});
	
	
	//可见性过滤选择器
	$("#btn25").click(function(){
		$("div:visible").css("background","#bbffaa");
	});
	$("#btn26").click(function(){
		$("div:hidden").show(300);
	});
	
	
	//属性过滤选择器
	$("#btn27").click(function(){
		$("div[title]").css("background","#bbffaa");
	});
	$("#btn28").click(function(){
		$("div[title=test]").css("background","#bbffaa");
	});
	$("#btn29").click(function(){
		$("div[title!=test]").css("background","#bbffaa");
	});
	$("#btn30").click(function(){
		$("div[title^=te]").css("background","#bbffaa");
	});
	$("#btn31").click(function(){
		$("div[title$=st]").css("background","#bbffaa");
	});
	$("#btn32").click(function(){
		$("div[title*=es]").css("background","#bbffaa");
	});
	$("#btn33").click(function(){
		$("div[id][title*=es]").css("background","#bbffaa");
	});

	
})
