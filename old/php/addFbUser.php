<?php

require_once 'db.php';
$sql = "INSERT INTO user (fbid,name) VALUES ('" . $_POST['fbid'] . "', '" . $_POST['name'] . "');";
mysql_query($sql);
