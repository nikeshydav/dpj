/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {
        }
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        // Write
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }
            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }
        // Read
        var result = key ? undefined : {};
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }
            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, {expires: -1}));
        return !$.cookie(key);
    };
}));
/*
 * 
 * My Code
 * 
 */
var $age_sec, $age;
$(function() {
    $.removeCookie('wistext');

    function resize() {
        $pageHeight = $(this).height();
        $('.page1,.page2,.page3,.page4,.page5, #fittowidth').height($pageHeight);
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
                        //console.log('Good to see you, ' + response.id);
                        //console.dir(response);
                        $.cookie('fbid', response.id);
                        $.cookie('name', response.name);
                        $.cookie('profilepic', 'http://graph.facebook.com/' + $.cookie('fbid') + '/picture?type=large');
                        $.ajax({
                            url: 'php/addFbUser.php',
                            type: 'POST',
                            data: {name: response.name, fbid: response.id}
                        }).done(function(data) {
                            $('#page1').trigger('click').attr('href', '2.php');
                        });
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        } else {
            alert('Please enter your age!');
        }
        return false;
    });
    $('#tw').click(function() {
        if ($age >= 1) {
            window.open("/twitteroauth/", "mywindow", "status=1,width=350,height=150");
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
                            $.cookie('profilepic', data);
                        })
                        $('#page1').trigger('click').attr('href', '2.php');
                    }
                });
            }, 1000);
        } else {
            alert('Please enter your age!');
        }
        return false;
    });

    $('#twittershare').on('click', function() {
        $url = 'http://twitter.com/home?status=';
        $loc = encodeURIComponent("#DontPostponeJoy and pursue what you always wanted to, share your joy http://dontpostponejoy.in @BMWIndia");
        window.open($url + $loc, 'popup', 'width=500, height=500');
        return false;

    });


    $.cergis = $.cergis || {};
    $.cergis.loadContent = function() {
        // show ajax loader
        //$('.ajax-loader').show();
        // get the html in the content div
        $.ajax({
            url: pageUrl + '?type=ajax', success: function(data) {
                $('#main-content').html(data);
                // hide ajax loader
                //$('.ajax-loader').hide();
                $pageHeight = $(window).height();
                $('.page1,.page2,.page3,.page4,.page5, #fittowidth').height($pageHeight);
                $('#wishtext').on('keypress', function(e) {
                    if (e.keyCode == 13) {
                        $('#postwish').trigger('click');
                    }
                });

                $('#postwish').click(function() {
                    $.cookie('wistext', $('#wishtext').val());
                    $('#page1').trigger('click').attr('href', '4.php');
                    $('#dynatext').text($.cookie('wistext'));
                });


                $('#fb-share').on('click', function() {
                    var data =
                            {
                                name: "Don't Postpone Joy",
                                message: '​#DontPostponeJoy any longer. Why do later what you can do now?',
                                picture: 'http://dontpostponejoy.in/images/big-bucket-01.png',
                                link: "http://www.dontpostponejoy.in", // Go here if user click the picture
                                description: '​I have decided not to Postpone Joy in my life. Joy brings more joy and the time to achieve it is NOW with @BMWIndia'
                            }
                    FB.login(function() {
                        $login = FB.api('/me/feed', 'post', data,
                                function(response) {
                                    //alert('Post ID: ' + response.id);
                                    alert('Your message share on your wall!!');
                                });
                    }, {scope: 'publish_actions'});
                });

                $('#twittershare').on('click', function() {
                    $url = 'http://twitter.com/home?status=';
                    $loc = encodeURIComponent("#DontPostponeJoy and pursue what you always wanted to, share your joy http://dontpostponejoy.in @BMWIndia");
                    window.open($url + $loc, 'popup', 'width=500, height=500');
                    return false;

                });
            }
        });
        // change browser url to the one user clicked
        if (pageUrl != window.location) {
            window.history.pushState({path: pageUrl}, '', pageUrl);
        }
    }
    $.cergis.backForwardButtons = function() {
        // override the back and forward buttons, so that we get the right content without refreshing the page
        $(window).on('popstate', function() {
            $.ajax({
                url: location.pathname + '?type=ajax', success: function(data) {
                    $('#main-content').html(data);
                }
            });
        });
    }

// click event
    $("a.men").on('click', function() {
        // item clicked
        pageUrl = $(this).attr('href');
        $.cergis.loadContent();
        return false;
    });
    $.cergis.backForwardButtons();
});
$(window).load(function() {
    if ($age_sec) {
        window.location.href = '/';
    }

    $(function() {
        $('#dl-menu').dlmenu();
    });

});