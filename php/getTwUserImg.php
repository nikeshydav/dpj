<?php

session_start();
require_once 'db.php';
$sql = "SELECT img FROM `user_tw` where id=" . $_SESSION['twiterid'];
$r = mysql_fetch_array(mysql_query($sql));
echo $r['img'];
