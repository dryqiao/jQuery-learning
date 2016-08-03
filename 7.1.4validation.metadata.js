<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>7.1.4validation2</title>
		<style type="text/css">
			
		</style>
		<script src="js/jquery-1.3.1.js"></script>
		<script src="js/lib/jquery.validate.js"></script>
		<script src="js/lib/jquery.metadata.js"></script>
		<script>
			$(function(){
				$('#commentForm').validate({
					rules:{
						username:{
							required:true,
							minlength:2
						},
						email:{
							required:true,
							email:true
						},
						url:"url", 
						comment:"required"
					}
				});
			});
		</script>
	</head>
	<body>
		<form class="cmxform"id="commentForm"method="get"action="#">
			<fieldset>
				<legend>一个简单的验证带验证提示的评论例子</legend>
				<p>
					<label for="cusername">姓名</label><em>*</em>
					<input id="cusername"name="username"
						size="25" />
				</p>
				<p>
					<label for="cemail">电子邮件</label><em>*</em>
					<input id="cemail"name="email"
						size="25" />
				</p>
				<p>
					<label for="curl">网址</label><em>*</em>
					<input id="curl"name="email"
						size="25" />
				</p>
				<p>
					<label for="ccomment">电子邮件</label><em>*</em>
					<input id="ccomment"name="comment"
						cols="22"  />
				</p>
				<p>
					<input class="submit"type="submit"value="提交" />
				</p>
			</fieldset>
		</form>
	</body>
</html>
