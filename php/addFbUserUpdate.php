<?php

require_once 'db.php';
$sql = "UPDATE user SET status = '" . $_POST['status'] . "'  WHERE fbid='" . $_POST['fbid'] . "' order by id desc";
mysql_query($sql);
