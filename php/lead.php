<?php

require_once 'db.php';

$sql = "INSERT INTO `leadform-BMW` (fname,lname,brand,model,yearofpurchage,prefred,purchageintention,mb,eml,salutation) VALUES ('" . $_POST['bmw_firstname'] . "', '" . $_POST['bmw_lastname'] . "', '" . $_POST['cars'] . "', '" . $_POST['cars1'] . "', '" . $_POST['bmw_yearofpurchase'] . "', '" . $_POST['bmw_seriesid'] . "', '" . $_POST['bmw_purchaseintentionid'] . "', '" . $_POST['bmw_email'] . "', '" . $_POST['bmw_mobile1'] . "', '" . $_POST['bmw_salutation'] . "');";
mysql_query($sql) || die(mysql_error());
