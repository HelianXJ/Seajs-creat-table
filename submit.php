
<?php
	//提交判断
	if(isset($_POST["submit"]))
	{
		//当前台点击添加，就把输入的句子进行切分
		$name = $_POST["name"];
		//输入数据验证,任意一个为空刚不进行存储
		if(!empty($_POST["name"]) && !empty($_POST["content"]))
		{
            $sentences = preg_split('/[。！？!?.]/', $_POST['content'], -1, PREG_SPLIT_NO_EMPTY);
            echo json_encode(array(
                'message' => 'success',
                'name'    => $name,
                'content' => $sentences
            ));
		}
		elseif(empty($_POST["name"]))
		{
            echo json_encode(array('message' => 'failed', 'error' => '请填写项目名称！'));
		}
		elseif(empty($_POST["content"]))
		{
            echo json_encode(array('message' => 'failed', 'error' => '请填写句字内容！'));
		}
	}
    else
    {
        echo json_encode(array('message' => 'failed'));
    }
?>
