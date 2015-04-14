// JavaScript Document

/*!
	SlickNav Responsive Mobile Menu
	(c) 2014 Josh Cope
	licensed under MIT
*/
(function(e,a,c){var f={label:"MENU",duplicate:true,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:false,allowParentLinks:false,init:function(){},open:function(){},close:function(){}},g="slicknav",d="slicknav";function b(i,h){this.element=i;this.settings=e.extend({},f,h);this._defaults=f;this._name=g;this.init()}b.prototype.init=function(){var l=this;var m=e(this.element);var k=this.settings;if(k.duplicate){l.mobileNav=m.clone();l.mobileNav.removeAttr("id");l.mobileNav.find("*").each(function(n,o){e(o).removeAttr("id")})}else{l.mobileNav=m}var h=d+"_icon";if(k.label==""){h+=" "+d+"_no-text"}if(k.parentTag=="a"){k.parentTag='a href="#"'}l.mobileNav.attr("class",d+"_nav");var j=e('<div class="'+d+'_menu"></div>');l.btn=e("<"+k.parentTag+' aria-haspopup="true" tabindex="0" class="'+d+"_btn "+d+'_collapsed"><span class="'+d+'_menutxt">'+k.label+'</span><span class="'+h+'"><span class="'+d+'_icon-bar"></span><span class="'+d+'_icon-bar"></span><span class="'+d+'_icon-bar"></span></span></a>');e(j).append(l.btn);e(k.prependTo).prepend(j);j.append(l.mobileNav);var i=l.mobileNav.find("li");e(i).each(function(){var q=e(this);data={};data.children=q.children("ul").attr("role","menu");q.data("menu",data);if(data.children.length>0){var n=q.contents();var o=[];e(n).each(function(){if(!e(this).is("ul")){o.push(this)}else{return false}});var p=e(o).wrapAll("<"+k.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+d+'_item"/>').parent();q.addClass(d+"_collapsed");q.addClass(d+"_parent");e(o).last().after('<span class="'+d+'_arrow">'+k.closedSymbol+"</span>")}else{if(q.children().length==0){q.addClass(d+"_txtnode")}}q.children("a").attr("role","menuitem").click(function(r){if(k.closeOnClick&&!e(r.target).parent().closest("li").hasClass(d+"_parent")){e(l.btn).click()}});if(k.closeOnClick&&k.allowParentLinks){q.children("a").children("a").click(function(r){e(l.btn).click()})}});e(i).each(function(){var n=e(this).data("menu");l._visibilityToggle(n.children,false,null,true)});l._visibilityToggle(l.mobileNav,false,"init",true);l.mobileNav.attr("role","menu");e(a).mousedown(function(){l._outlines(false)});e(a).keyup(function(){l._outlines(true)});e(l.btn).click(function(n){n.preventDefault();l._menuToggle()});l.mobileNav.on("click","."+d+"_item",function(n){n.preventDefault();l._itemClick(e(this))});e(l.btn).keydown(function(o){var n=o||event;if(n.keyCode==13){o.preventDefault();l._menuToggle()}});l.mobileNav.on("keydown","."+d+"_item",function(o){var n=o||event;if(n.keyCode==13){o.preventDefault();l._itemClick(e(o.target))}});if(k.allowParentLinks){e("."+d+"_item a").click(function(n){n.stopImmediatePropagation()})}};b.prototype._menuToggle=function(j){var k=this;var i=k.btn;var h=k.mobileNav;if(i.hasClass(d+"_collapsed")){i.removeClass(d+"_collapsed");i.addClass(d+"_open")}else{i.removeClass(d+"_open");i.addClass(d+"_collapsed")}i.addClass(d+"_animating");k._visibilityToggle(h,true,i)};b.prototype._itemClick=function(i){var k=this;var h=k.settings;var j=i.data("menu");if(!j){j={};j.arrow=i.children("."+d+"_arrow");j.ul=i.next("ul");j.parent=i.parent();i.data("menu",j)}if(j.parent.hasClass(d+"_collapsed")){j.arrow.html(h.openedSymbol);j.parent.removeClass(d+"_collapsed");j.parent.addClass(d+"_open");j.parent.addClass(d+"_animating");k._visibilityToggle(j.ul,true,i)}else{j.arrow.html(h.closedSymbol);j.parent.addClass(d+"_collapsed");j.parent.removeClass(d+"_open");j.parent.addClass(d+"_animating");k._visibilityToggle(j.ul,true,i)}};b.prototype._visibilityToggle=function(l,i,j,o){var n=this;var k=n.settings;var h=n._getActionItems(l);var m=0;if(i){m=k.duration}if(l.hasClass(d+"_hidden")){l.removeClass(d+"_hidden");l.slideDown(m,k.easingOpen,function(){e(j).removeClass(d+"_animating");e(j).parent().removeClass(d+"_animating");if(!o){k.open(j)}});l.attr("aria-hidden","false");h.attr("tabindex","0");n._setVisAttr(l,false)}else{l.addClass(d+"_hidden");l.slideUp(m,this.settings.easingClose,function(){l.attr("aria-hidden","true");h.attr("tabindex","-1");n._setVisAttr(l,true);l.hide();e(j).removeClass(d+"_animating");e(j).parent().removeClass(d+"_animating");if(!o){k.close(j)}else{if(j=="init"){k.init()}}})}};b.prototype._setVisAttr=function(i,j){var k=this;var h=i.children("li").children("ul").not("."+d+"_hidden");if(!j){h.each(function(){var m=e(this);m.attr("aria-hidden","false");var l=k._getActionItems(m);l.attr("tabindex","0");k._setVisAttr(m,j)})}else{h.each(function(){var m=e(this);m.attr("aria-hidden","true");var l=k._getActionItems(m);l.attr("tabindex","-1");k._setVisAttr(m,j)})}};b.prototype._getActionItems=function(i){var k=i.data("menu");if(!k){k={};var h=i.children("li");var j=h.children("a");k.links=j.add(h.children("."+d+"_item"));i.data("menu",k)}return k.links};b.prototype._outlines=function(h){if(!h){e("."+d+"_item, ."+d+"_btn").css("outline","none")}else{e("."+d+"_item, ."+d+"_btn").css("outline","")}};b.prototype.toggle=function(){$this._menuToggle()};b.prototype.open=function(){$this=this;if($this.btn.hasClass(d+"_collapsed")){$this._menuToggle()}};b.prototype.close=function(){$this=this;if($this.btn.hasClass(d+"_open")){$this._menuToggle()}};e.fn[g]=function(i){var h=arguments;if(i===undefined||typeof i==="object"){return this.each(function(){if(!e.data(this,"plugin_"+g)){e.data(this,"plugin_"+g,new b(this,i))}})}else{if(typeof i==="string"&&i[0]!=="_"&&i!=="init"){var j;this.each(function(){var k=e.data(this,"plugin_"+g);if(k instanceof b&&typeof k[i]==="function"){j=k[i].apply(k,Array.prototype.slice.call(h,1))}});return j!==undefined?j:this}}}}(jQuery,document,window));