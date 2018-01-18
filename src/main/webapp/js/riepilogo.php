<?php
	include('config.php');

	$db = new DB();

	$data = $db->qryFireRiep();

	echo json_encode($data);

?>
