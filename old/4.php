<?php
if ($_GET['type'] == 'ajax') {
    ?>
<div class="page5">
  <div class="socialbucket"><img src="images/big-bucket-01.png" /></div>
  <!--socialbucket-->
  <div class="socialend">THE BIG BUCKET OF JOY IS FULL OF BEAUTIFUL WISHES, REASONS TO CELEBRATE LIFE,<br>
    SOME JOYS WE’LL HELP YOU FULFIL. FOR SOME YOU’LL HAVE TO QUICKEN YOUR STRIDE.<br>
    TIME IS PASSING BUY. DON’T POSTPONE JOY.</div>
  <!--socialend-->
</div>
<!--page5-->
<?php } else { ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>Don't Postpone joy</title>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" type="text/css" href="default.css" />
<link rel="stylesheet" type="text/css" href="component.css" />
<link rel="icon" href="images/favicon.png">
<script src="js/modernizr.custom.js"></script>
</head>
<body>
<div class='main-content'>
  <div class="navhead">
    <div class="headimg"></div>
    <!--mobiledropdown-->
    <div class="container demo-1">
      <div class="column">
        <div id="dl-menu" class="dl-menuwrapper">
          <button class="dl-trigger">Open Menu</button>
          <ul class="dl-menu">
            <li> <a href="index.html">HOME</a> </li>
            <li> <a href="http://www.bmw.in">BMW.IN</a> </li>
            <li> <a href="http://www.bmw.in/in/en/general/ecom_uic/dlo/dealer_locator.html">SELECT YOUR DEALER</a> </li>
            <!--<li>
                                                            <a href="#">SELECT YOUR BMW</a>
                                                    </li>-->
          </ul>
        </div>
        <!-- /dl-menuwrapper --> 
      </div>
    </div>
    <!-- /container --> 
    <!--mobileropdown-->
    <div class="thinhead">
      <ul class="mymenu">
        <li><a href="index.html">HOME</a></li>
        <li><a href="http://www.bmw.in" target="_blank">BMW.IN</a></li>
        <li><a href="http://www.bmw.in/in/en/general/ecom_uic/dlo/dealer_locator.html" target="_blank">SELECT YOUR DEALER</a></li>
        <!--   <li><a href="select-ur-dealer.html">SELECT YOUR BMW</a></li>-->
      </ul>
    </div>
  </div>
  <!--navhead-->
  
  <div class="page5">
    <div class="socialbucket"> <img src="images/big-bucket-01.png"> </div>
    <!--socialbucket-->
    <div class="socialend">THE BIG BUCKET OF JOY IS FULL OF BEAUTIFUL WISHES, REASONS TO CELEBRATE LIFE,<br>
      SOME JOYS WE’LL HELP YOU FULFIL. FOR SOME YOU’LL HAVE TO QUICKEN YOUR STRIDE.<br>
      TIME IS PASSING BY. DON’T POSTPONE JOY. </div>
    <!--socialend--> 
  </div>
  <!--page5--> 
</div>
<!--maincont--> 
<script src="js/jquery.dlmenu.js"></script> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" ></script> 
<script src="app.js"></script>
</body>
</html>
<?php
                                            }