setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'fa8063290ac44529b4134db067f364ad',
                comparisonItems:[{name : 'cmp', value : 11442050},{name : 'plmt', value : 11487876}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_909474307324');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var impId = 'fa8063290ac44529b4134db067f364ad';var dvObj = $dvbs;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv?parent:window,h=0,i=0,k=[],l=[],m=10;
function o(a,c){function b(b){return f=function(g){g.preventDefault();if(!t[c*Math.pow(2,m*b)]&&(rhe(c*Math.pow(2,m*b)),t[Math.pow(2,m*b)]=!0,a)){events=u[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var u=[["click"],["focus"],"input change keyup textInput keypress paste".split(" "),["touchstart"]],t=[];t[c]=!1;if(a)for(var j=0;j<u.length;j++){events=u[j];for(var n=0;n<events.length;n++)a.addEventListener?
a.addEventListener(events[n],b(j),!0):a.attachEvent?a.attachEvent("on"+events[n],b(j)):a["on"+events[n]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b={};"number"===typeof a&&void 0===k[a]&&(k[a]=!0,h+=a,b[lbl+"heas"]=h);"number"===typeof c&&void 0===l[c]&&(l[c]=!0,i+=c,b["dvp_hease"]=i);dvObj.registerEventCall(impId,b)};e.rhe=rhe;function p(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}
function q(a){var c=r;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var s=p("form");s.submit=function(){window.rhe(1,1)};var r=p("input","txt");r.name=r.id;r.type="text";q("value");q("textContent");var v=p("input","btn");v.name=v.id;v.type="button";
var w=p("input","sbmt");w.name=w.id;w.type="submit";w.click=function(){window.rhe(2,2)};w.ontouchstart=function(){window.rhe(2,2)};var x=p("a");x.href="javascript:window.rhe(16,16);";if(""!=alu){var y=p("a");y.href=alu}e.document.body.insertBefore(s,d);e.document.body.insertBefore(x,d);s.insertBefore(r,d);s.insertBefore(v,d);s.insertBefore(w,d);o(r,8);o(v,4);o(w,2);o(s,1);""!=alu&&(y=p("a","alu"),y.href=alu,e.document.body.insertBefore(y,d),o(y,32));
if(""!=ifu){var z=p("iframe");z.src=ifu;e.document.body.insertBefore(z,d);o(z,64)};} catch (e) {}; });
(function() {var dvObj = $dvbs;var impId = 'fa8063290ac44529b4134db067f364ad';var dvParams = {'useDvp': 'true','logRate': '100'};dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"BHL", function() {function f(){var c="true"===dvParams.useDvp?"dvp_":"",d="";this.exec=function(){var a={},b;a:{try{b=history.length;break a}catch(e){d+="|"+e.message}b=void 0}b&&(a[c+"brh"]=b);c&&d&&(a.dvp_brherr=d);try{a&&dvObj.registerEventCall(impId,a)}catch(e){}}}try{(new f).exec()}catch(c){};});})();(function() {var dvObj = $dvbs;var impId = 'fa8063290ac44529b4134db067f364ad';dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"CTITS",function(){var a=-1;try{top.frames&&(a=top.frames.length),dvObj.registerEventCall(impId,{dvp_fcifrms:a})}catch(b){dvObj.registerEventCall(impId,{dvp_fcierr:b.message.slice(0,100)})}});})();var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("fa8063290ac44529b4134db067f364ad",false);var dvObj=$dvbs;var impId='fa8063290ac44529b4134db067f364ad';var runTag=1;var sources=256;var adid='8792236625474379203';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){
try{try{(function(){var e=window;var t=0;try{while(e.parent&&e!=e.parent&&e.parent.document){e=e.parent;if(t++>10)break}}catch(r){}var a=0;function n(e,t){if(t)a=(a|1<<e)>>>0}function o(t){var r=e.document;if(!r.querySelector){var a=r.createElement("style"),n=[],o;r.documentElement.firstChild.appendChild(a);r._qsa=[];a.styleSheet.cssText=selectors+"{x-qsa:expression(document._qsa && document._qsa.push(this))}";window.scrollBy(0,0);a.parentNode.removeChild(a);while(r._qsa.length){o=r._qsa.shift();o.style.removeAttribute("x-qsa");n.push(o)}r._qsa=null;return n.length?n[0]:null}return r.querySelector(t)}testBrokenImages=function(e){var t=e.getElementsByTagName("img");var r=0;var a=t.length>20?20:t.length;var n=0;for(;r<a;r++){var o=t[r];if(o.naturalWidth*o.naturalHeight===0)++n}return n/a};n(0,e.document.head.children&&e.document.head.children.length==3&&e.jwplayer&&!e.document.title);n(1,e.xy_checksum&&e.place_player&&e.logjwonready&&e.logContentPauseRequested);n(2,e.playerInstance&&o('script[src*="ads-player.com"]'));n(3,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks);n(4,e.zpz&&e.zpz.createPlayer);n(5,e.ixesxap&&e.dlyga&&e.ebwirozzopw);n(6,e.muhter);n(7,e.JIUFoiVePNXYTRaOyB&&e.QoUEVpsCPaHJLBvKIf||e.IsZAGeHOwVYgfxLrD&&xrGglpcvOPBSTwR||e.rgTAlSWeuNPcIZsE&&usLWbxkNQnMtVmilP);n(8,o('script[src*="google-analytics.ga"]')||o('script[src*="trafficome.ga"]')||o('script[src*="m1ii.ml"]'));dvObj.registerEventCall(impId,{dvp_acv:a,dvp_acc:e==e.top&&e.document.head&&e.document.head.children?e.document.head.children.length:-1,dvp_acl:e==e.top&&e.document.head&&e.document.head.outerHTML?e.document.head.outerHTML.length:-1,dvp_nbi:testBrokenImages(e.document)});if(runTag==1&&(sources&a)>0&&window.top==window.parent){var c=new XMLHttpRequest;c.open("PUT",window.location.protocol+"//d23xwq4myz19mk.cloudfront.net/htmldata/0"+a+"/"+adid+"_"+impId+"_"+window.location.hostname+".html",true);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");c.setRequestHeader("x-amz-acl","public-read");c.send(window.parent.document.documentElement.outerHTML)}})()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}
});


try{__tagObject_callback_909474307324({ImpressionID:"fa8063290ac44529b4134db067f364ad", ServerPublicDns:"tps608.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "fa8063290ac44529b4134db067f364ad");}catch(e){}
try{__verify_callback_909474307324({
ResultID:2,
Passback:"",
AdWidth:728,
AdHeight:90});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "fa8063290ac44529b4134db067f364ad");}catch(e){}
