<?php
if ($_GET['type'] == 'ajax') {
    ?>
    <div class="personalbucket">
        <div class="bigbucket2">
            <div class="profileimg"></div>
            <div class="customtext">
                <div class="smalltext">JOY TO ME IS:</div>
                <!--smalltext-->
                <div id="dynatext" class="dynatext"></div>
                <!--dynatext-->
            </div>
            <!--customtext-->
        </div>
        <!--bigbucket2-->
        <div class="share">SHARE YOUR JOY</div>
        <div id="share-button"><a href="javascript:void(0)" id="fb-share" ><img src="images/sf-01.png" class="soc"/></a><a href="javascript:void(0)" class="men" id="twittershare"><img src="images/sf-02.png" class="soc"/></a></div>
    </div>
    <!--personalbucket-->
    <br />
    <br />
    <br />
    <br />
    <div class="share">VIEW ALL JOYS</div>
    <div class="nextscroll" ><a href="4.php"><img src="images/).png" /></a></div>
    <!--nextscroll-->
    <div class="countdown ">
        <div class="timertext">TIME IS PASSING BY. DON'T POSTPONE JOY.</div>
        <!--timertext-->
        <div class="smalltimer"></div>
        <!--smalltimer-->
    </div>
    <!--countdown-->
    <script>
        $(function() {
            console.log($.cookie('profilepic'));
            $('.profileimg').css({'background': 'url("' + $.cookie('profilepic') + '") no-repeat', 'background-size': 'cover'});
            $('#dynatext').text($.cookie('wistext'));
            $.ajax({
                url: 'php/addFbUserUpdate.php',
                type: 'POST',
                data: {status: $.cookie('wistext'), fbid: $.cookie('fbid')}
            }).done(function(data) {
            });
        })
    </script>
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
                            <!--<li><a href="select-ur-dealer.html">SELECT YOUR BMW</a></li>-->
                        </ul>
                    </div>
                </div>
                <!--navhead-->
                <div id="main-content" class="page4" >
                    <div class="personalbucket">
                        <div class="bigbucket2">
                            <div class="profileimg"></div>
                            <div class="customtext">
                                <div class="smalltext">JOY TO ME IS:</div>
                                <!--smalltext-->
                                <div id="dynatext" class="dynatext"> hellasldkjaslkfjdslkfjslkdfjlksdjflksdjkg </div>
                                <!--dynatext-->
                            </div>
                            <!--customtext-->
                        </div>
                        <!--bigbucket2-->
                        <div class="share">SHARE YOUR JOY</div>
                        <div id="share-button"><a href="javascript:void(0)" id="fb-share" ><img src="images/sf-01.png" class="soc"/></a><a href="javascript:void(0)" class="men" id="twittershare"><img src="images/sf-02.png" class="soc"/></a></div>
                    </div>
                    <!--personalbucket-->
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="share">VIEW ALL JOYS</div>
                    <div class="nextscroll" ><a href="4.html"><img src="images/).png" /></a></div>
                    <!--nextscroll-->
                    <div class="countdown ">
                        <div class="timertext">TIME IS PASSING BY. DON'T POSTPONE JOY.</div>
                        <!--timertext-->
                        <div class="smalltimer">12312312</div>
                        <!--smalltimer-->
                    </div>
                    <!--countdown-->
                </div>
                <!--page4-->
            </div>
            <!--maincont-->
            <div id="fb-root"></div>
            <script src="js/jquery.min.js" ></script>
            <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId: '611410122306210',
                xfbml: true,
                version: 'v2.0'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
            </script>
            <script src="js/jquery.min.js" ></script>
            <script src="js/jquery.dlmenu.js"></script>
            <script type="text/javascript" src="source/jquery.fancybox.js?v=2.1.5"></script>
            <link rel="stylesheet" type="text/css" href="source/jquery.fancybox.css?v=2.1.5" media="screen" />
            <script src="app.js"></script>
            <script>
        $(function() {
            $('.profileimg').css({'background': 'url("http://graph.facebook.com/' + $.cookie('fbid') + '/picture?type=large") no-repeat', 'background-size': 'cover'})
            $.ajax({
                url: 'php/addFbUserUpdate.php',
                type: 'POST',
                data: {status: $.cookie('wistext'), fbid: $.cookie('fbid')}
            }).done(function(data) {
            });
        })
            </script>
        </body>
    </html>
    <?php
}