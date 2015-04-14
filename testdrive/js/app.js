/*
 * Facebook login
 * 
 * @returns null
 * 
 */
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





/*
 * YouTube starts
 * 
 */
var player;
// create youtube player
function onYouTubePlayerAPIReady() {
    player = new YT.Player("player",
            {playerVars: {autoplay: 0, controls: 0, autohide: 0, wmode: "opaque", loop: 0, modestbranding: 0, border: 0, showinfo: 0, hd: 0, html5: 1},
                videoId: 'k_HdndRWNK8', //vz2rAgXjkCA
                events: {
                    /*'onReady': onPlayerReady,*/
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
        $.scrollLock(false);
        $('#page1').trigger('click');
    }
}

function stopVideo() {
    //player.stopVideo();
    $.scrollLock(false);
    player.pauseVideo();
    $('.navhead').fadeIn(2000);
    setTimeout(function() {
        $('#pageentre_joy').trigger('click');
        /*setTimeout(function() {
         $.scrollLock(true);
         }, 2000);*/
    }, 1000);
}

function playVideo() {
    player.playVideo();
    $('.navhead').fadeOut(2000);
}
//////////Youtube code ends


var hash = window.location.hash;
var pathname = window.location.pathname;
$(function() {
    var $age_sec, $age;
    $w= $(window).width();
    //alert(pathname);
    if (pathname.indexOf("lead_form") != -1) {
        $.scrollLock(false);
    } else {
        $.scrollLock(false);
    }



    function afterLogin() {
        $.scrollLock(false);
        $('#pageone').trigger('click');
        if ( Modernizr.touch ) {
            $('#player').html('<video  style="width:100%" autoplay ><source src="images/bmw.mp4" type="video/mp4">Your browser does not support the video tag.</video>'); 
        }else{
            playVideo();
        }
        
/*setTimeout(
        
         function()
         {
         $.scrollLock(true);
         }, 2000);*/
    }
    $('#wishtext').keypress(function(e) {
        if (e.keyCode == 13)
            $('#postwish').click();
    });



    $('.dl-trigger').on('click', function() {
        $('.dl-menu').toggleClass('dl-menuopen');
    });

    $('.viewbut').click(function() {
        $(".fullwrap").hide();
        $(".personalbucket").fadeIn(1000);
        $(".nextscroll").fadeIn(2000);

        return false;
    });

    function resize() {
        $pageHeight = $(this).height();
        $('.page1,.page2,.page3,.page4,.page5').height($pageHeight);
    }

    $(window).resize(function() {
        resize();
    });
    resize();


    $('#agebox').blur(function() {
        $age = $(this).val();
        $age_sec = $age * 365 * 24 * 3600;
        $('.smalltimer').text($age_sec);
        setInterval(function() {
            $age_sec++;
            $('.smalltimer, .agenum').text($age_sec).css({'z-index': $age_sec});
        }, 1000);
    });
    $('#fb').click(function() {

        if ($age >= 1) {
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function(response) {
                        $fbid = response.id;
                        $name = response.name;
                        $profilepic = 'http://graph.facebook.com/' + $fbid + '/picture?type=large';
                        $.ajax({
                            url: 'php/addFbUser.php',
                            type: 'POST',
                            data: {name: response.name, fbid: response.id}
                        }).done(function(data) {
                        });
                        afterLogin();
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, {
                scope: 'publish_actions',
                return_scopes: true
            });
        } else {
            alert('Please enter your age.');
        }
        return false;
    });
    $('#tw').click(function() {
        if ($age >= 1) {
            window.open("twitteroauth/", "mywindow", "status=1,width=350,height=150");
            gotoextpage = setInterval(function() {
                $.ajax({
                    url: 'php/chkTwUser.php',
                    type: 'POST'
                }).done(function(data) {
                    if (data == "done") {
                        clearInterval(gotoextpage);
                        $.ajax({
                            url: 'php/getTwUserImg.php',
                            type: 'POST'
                        }).done(function(data) {
                            $profilepic = data;
                            afterLogin();
                        });
                    }
                });
            }, 1000);
        } else {
            alert('Please enter your age.');
        }
        return false;
    });


    $pageHeight = $(window).height();
    $('.page1,.page2,.page3,.page4,.page5, #fittowidth').height($pageHeight);
    $('#wishtext').on('keypress', function(e) {
        if (e.keyCode == 13) {
            $('#postwish').trigger('click');
        }
    });

    $('#postwish').click(function() {
        $.scrollLock(false);
        $('#pagetwo').trigger('click')
        $('#dynatext').text($('#wishtext').val());
        $('.profileimg').css({'background': 'url("http://graph.facebook.com/' + $fbid + '/picture?type=large") no-repeat', 'background-size': 'cover'});
        /*setTimeout(function() {
         $.scrollLock(true);
         }, 2000);*/
    });


    $('#fb-share').on('click', function() {
        var data =
                {
                    name: "Don't Postpone Joy",
                    message: '​Joy to me is: ' + $('#wishtext').val() + ' #DontPostponeJoy @BMWIndia',
                    picture: 'http://dontpostponejoy.in/images/big-bucket-01.png',
                    link: "http://www.dontpostponejoy.in", // Go here if user click the picture
                    description: '​I have decided not to Postpone Joy in my life. Joy brings more joy and the time to achieve it is NOW with @BMWIndia'
                }
        /*FB.login(function() {
         $login = FB.api('/me/feed', 'post', data,
         function(response) {
         //alert('Post ID: ' + response.id);
         alert('Your message has been shared on your wall.');
         });
         }, {scope: 'publish_actions'});*/
        FB.ui({
            method: 'share',
            href: 'http://dontpostponejoy.in/',
        }, function(response) {
        });
    });

    $('#twittershare').on('click', function() {
        $url = 'http://twitter.com/home?status=';
        $loc = encodeURIComponent("Joy to me is: " + $('#wishtext').val() + " #DontPostponeJoy @BMWIndia. Share your joy http://dontpostponejoy.in");
        window.open($url + $loc, 'popup', 'width=500, height=500');
        return false;

    });


    $('#car').selectHierarchy({hideOriginal: true, name: 'cars', placeholder: 'Existing Car Brand*',placeholder1: 'Existing Car Model*',  title: 'Model'});


});


$(window).load(function() {
    //$("#cars").val("Aston Martin");
    //$('#cars').change();

    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#commentForm").validate({
        submitHandler: function() {
            $('#commentForm').ajaxSubmit(function(d) {
                //$('#form-div').html('<div class="subhead">Thanks for submitting. We will get back you soon.</div>');
				$('.bighead').text("Thank you for your interest in BMW.");
                $('.subhead').text("Your request has been submitted. We will contact you at the earliest.");
                $('.form').hide();
            });
			
            return false;
        }
    });


});
