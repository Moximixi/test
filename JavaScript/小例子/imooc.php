<?php
	//��timestamp,nonce,token�����ֵ�������
	$timestamp=$_GET['timestamp'];
	$nonce=$_GET['nonce'];
	$token='weixin';
	$signature=$_GET['signature'];
	$array=array($timestamp,$nonce,$token);
	sort($array);
	//����������������ƴ��֮����sha1����
	$tmpstr=implode('',$array);
	$tmpstr=sha1($tmpstr);
	//�����ܺ���ַ�����signatrue���жԱȣ��жϸ������Ƿ�����΢��
	if($tmpstr==$signature){
		echo $_GET['echostr'];
}
	else{
		echo "error!";
}

