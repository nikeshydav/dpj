function onYouTubePlayerAPIReady() {
    jQuery(".youtube-bg").each(function(e) {
        var t = jQuery(this).attr("data-video-uid");
        var n = jQuery("#youtube-bg" + t).attr("data-video-url");
        player = new YT.Player("youtube-bg" + t, {playerVars: {autoplay: 1, controls: 0, autohide: 0, wmode: "opaque", loop: 1, modestbranding: 0, border: 0, showinfo: 0, hd: 1, playlist: n}, videoId: n, events: {onReady: onPlayerReady}})
    })
}
function onPlayerReady(e) {
    /*e.target.mute();*/
    jQuery(".youtube-bg").each(function(e) {
        youtubesect = jQuery(".youtube-bg")[e];
        youtubesect.height = yheight;
        youtubesect.width = ywidth
    })
}
function videoBackgroundSize() {
    jQuery(".video-area").each(function() {
        /*jQuery("video").prop("muted",true);*/var e = 1500;
        var t = 1280;
        var n = 720;
        var r = parseInt(jQuery(this).find(".video-section").attr("data-video-height"));
        if (isNaN(r)) {
            r = jQuery(window).height()
        }
        var i = jQuery(window).width();
        var s = i / t;
        var o = r / n;
        var u = s > o ? s : o;
        e = 1280 / 720 * r;
        if (u * t < e) {
            u = e / t
        }
        yheight = Math.ceil(u * n + 2);
        ywidth = Math.ceil(u * t + 2);
        jQuery(this).find(".video-wrapper, .video-content").width(i);
        jQuery(this).find(".video-wrapper, .video-section, .video-section-home, .video-content").height(r);
        jQuery(".video-wrapper").find("video, .video-cover, .video-cover img").width(Math.ceil(u * t + 2));
        jQuery(".video-wrapper").find("video, .video-cover, .video-cover img").height(Math.ceil(u * n + 2));
        if (jQuery(".vimeo-bg").length > 0) {
            jQuery(".vimeo-bg").each(function(e) {
                var r = jQuery(".vimeo-bg")[e];
                r.height = Math.ceil(u * n + 2);
                r.width = Math.ceil(u * t + 2);
                var i = jQuery(".vimeo-bg")[e], s = $f(i);
                s.addEvent("ready", function() {
                    s.api("setVolume", 100)
                })
            })
        }
        jQuery(".youtube-bg").each(function(e) {
            youtubesect = jQuery(".youtube-bg")[e];
            youtubesect.height = yheight;
            youtubesect.width = ywidth
        })
    })
}

function videoBackgroundSize1(mute) {
    jQuery(".video-area").each(function() {
        /*jQuery("video").prop("muted",true);*/var e = 1500;
        var t = 1280;
        var n = 720;
        var r = parseInt(jQuery(this).find(".video-section").attr("data-video-height"));
        if (isNaN(r)) {
            r = jQuery(window).height()
        }
        var i = jQuery(window).width();
        var s = i / t;
        var o = r / n;
        var u = s > o ? s : o;
        e = 1280 / 720 * r;
        if (u * t < e) {
            u = e / t
        }
        yheight = Math.ceil(u * n + 2);
        ywidth = Math.ceil(u * t + 2);
        jQuery(this).find(".video-wrapper, .video-content").width(i);
        jQuery(this).find(".video-wrapper, .video-section, .video-section-home, .video-content").height(r);
        jQuery(".video-wrapper").find("video, .video-cover, .video-cover img").width(Math.ceil(u * t + 2));
        jQuery(".video-wrapper").find("video, .video-cover, .video-cover img").height(Math.ceil(u * n + 2));
        if (jQuery(".vimeo-bg").length > 0) {
            jQuery(".vimeo-bg").each(function(e) {
                var r = jQuery(".vimeo-bg")[e];
                r.height = Math.ceil(u * n + 2);
                r.width = Math.ceil(u * t + 2);
                var i = jQuery(".vimeo-bg")[e], s = $f(i);
                s.addEvent("ready", function() {
                    s.api("setVolume", mute);
                })
            })
        }
        jQuery(".youtube-bg").each(function(e) {
            youtubesect = jQuery(".youtube-bg")[e];
            youtubesect.height = yheight;
            youtubesect.width = ywidth
        })
    })
}


jQuery(document).ready(function() {
    var unmute=true;
    if (jQuery(".video-area").length > 0) {
        videoBackgroundSize()
    }
    jQuery(window).bind("resize", function() {
        videoBackgroundSize()
    })
    jQuery('#mute').click(function(){
        if(unmute){
            unmute=false;
            videoBackgroundSize1(0);
            alert('0');
        }else{
            unmute=true;
            videoBackgroundSize1(100);
            alert('100');
        }
    })
})