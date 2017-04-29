<?php
	$cont = mysql_connect('localhost','root','root') or die ('连接服务器失败'.mysql_errno());
	mysql_query("SET NAMES UTF8");
	mysql_select_db("isShow",$cont) or die ('连接数据库失败'.mysql_errno());
	
	$tel = $_GET("tel");
	$pwd = $_GET("pwd");
	
	$params = "select * from t_user where user_tel = '$tel' and user_pws = '$pwd'";
	$result = mysql_query($params);
	
	$isTel = mysql_num_rows($result);
	if($isTel == 1){
		$array = array();
		while($isTel = mysql_fetch_array($result)){
			$array["user_tel"] = $isTel["user_tel"];
			$array["user_pws"] = $isTel["user_pws"];
		}
		
		$json = json_encode(array(
		  "resultCode"=>200,
           "message"=>"登录成功！",
           "data"=>$array
		),JSON_UNESCAPED_UNICODE);
		echo($json);
	}else{
		$json = json_encode(array(
		  "resultCode"=>500,
           "message"=>"登录失败！"
		),JSON_UNESCAPED_UNICODE);
		echo($json);
	}
	
	mysql_close($cont);
?>