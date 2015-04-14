<?php
if ($_GET['type'] == 'ajax') {
    ?>
    <div id="fittowidth" style="position: absolute;top: 0;left: 0;width: 100%;z-index: 99999"></div>
    <div id="player"></div>
    <div class="hidecontrol">
        <div class="smallscreen">
            <div class="vidsec">YOUR AGE. IN SECONDS.</div>
            <div class="agenum"></div>
        </div>
    </div>
    <style>
        .navhead{display: none;}
    </style>
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId: '630703253710230',
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
        }(document, 'script', 'facebook-jssdk'));</script>
    <script src="//www.youtube.com/player_api"></script>
    <script>
        var player;
        // create youtube player
        function onYouTubePlayerAPIReady() {
            player = new YT.Player("player",
                    {playerVars: {autoplay: 1, controls: 0, autohide: 0, wmode: "opaque", loop: 1, modestbranding: 0, border: 0, showinfo: 0, hd: 0, html5: 1},
                        videoId: 'k_HdndRWNK8', //vz2rAgXjkCA
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange}
                    });
        }
        // autoplay video
        function onPlayerReady(event) {
            event.target.playVideo();
        }
        // when video ends
        var done = false;
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 41500);
                done = true;
            }

            if (event.data === 0) {
                $('#page1').trigger('click');
            }
        }

        function stopVideo() {
            //player.stopVideo();
            player.pauseVideo();
            setTimeout(function() {
                $('#page1').trigger('click');
            }, 1000);
        }
        //$(window).resize(function() {
        $(function() {
            var wi = $(window).width(),
                    h = $(window).height();
            //alert(wi);
            if (wi <= 800) {
                $('#player').html('<iframe style="width:100%;height:' + (h - 20) + 'px"src="//www.youtube.com/embed/k_HdndRWNK8?autoplay=1&controls=0&modestbranding=0&showinfo=0&hd=1" frameborder="0" allowfullscreen></iframe>');
                $('#fittowidth').remove();
                console.log($.cookie("twitters"));
            }
        });
    </script>
<?php } else { ?>
    <!DOCTYPE html>
    <html>
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
        <body style="background: #000">
            <div class="skip men"><a href="2.html">Skip</a></div>
            <div id="fittowidth" style="position: absolute;top: 0;left: 0;width: 100%;z-index: 99999"></div>
            <div class='main-content'>
                <div id="main-content" class="page2" >
                    <div id="player"></div>
                    <div class="hidecontrol">
                        <div class="smallscreen">
                            <div class="vidsec">YOUR AGE. IN SECONDS.</div>
                            <div class="agenum"></div>
                        </div>
                    </div>
                    <!--hidecontrol-->
                </div>
                <!--page2-->
            </div><!--maincont-->
            <a href="2.php" class="men" id="page1" ></a>
            <div id="fb-root"></div>
            <script src="js/jquery.min.js" ></script>
            <script src="https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js" ></script>
            <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId: '630703253710230',
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
        }(document, 'script', 'facebook-jssdk'));</script>
            <script src="//www.youtube.com/player_api"></script>
            <script src="js/jquery.dlmenu.js"></script>
            <script src="app.js"></script>
            <script>
        var player;
        // create youtube player
        function onYouTubePlayerAPIReady() {
            player = new YT.Player("player",
                    {playerVars: {autoplay: 1, controls: 0, autohide: 0, wmode: "opaque", loop: 1, modestbranding: 0, border: 0, showinfo: 0, hd: 0, html5: 1},
                        videoId: 'k_HdndRWNK8', //vz2rAgXjkCA
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange}
                    });
        }
        // autoplay video
        function onPlayerReady(event) {
            event.target.playVideo();
        }
        // when video ends
        var done = false;
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 41500);
                done = true;
            }

            if (event.data === 0) {
                $('#page1').trigger('click');
            }
        }

        function stopVideo() {
            //player.stopVideo();
            player.pauseVideo();
            setTimeout(function() {
                $('#page1').trigger('click');
            }, 1000);
        }
        //$(window).resize(function() {
        $(function() {
            var wi = $(window).width(),
                    h = $(window).height();
            //alert(wi);
            if (wi <= 800) {
                $('#player').html('<iframe style="width:100%;height:' + (h - 20) + 'px"src="//www.youtube.com/embed/k_HdndRWNK8?autoplay=1&controls=0&modestbranding=0&showinfo:=0&hd=1" frameborder="0" allowfullscreen></iframe>');
                $('#fittowidth').remove();
                console.log($.cookie("twitters"));
            }
        });
            </script>
        </body>
    </html>
    <?php
}