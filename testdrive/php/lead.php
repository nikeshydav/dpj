<?php

require_once 'db.php';
$sql = "UPDATE user SET status = '" . $_POST['status'] . "'  WHERE fbid='" . $_POST['fbid'] . "' order by id desc";
$sql = "INSERT INTO leadform (fname,lname,eml,mb,add,year,prefrred,cur_car,cur_model,pur) VALUES ('" . $_POST['fname'] . "', '" . $_POST['lname'] . "', '" . $_POST['email'] . "', '" . $_POST['mb'] . "', '" . $_POST['year'] . "', '" . $_POST['state'] . "', '" . $_POST['prefrred'] . "', '" . $_POST['drilldown-1'] . "', '" . $_POST['cars1'] . "', '" . $_POST['pur'] . "');";
mysql_query($sql) || die(mysql_error());
