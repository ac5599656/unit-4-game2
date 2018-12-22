if (self.CavalryLogger) { CavalryLogger.start_js(["ERZJi"]); }

__d("SearchClientFunnelTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("search_client_funnel:SearchClientFunnelLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setActionName=function(a){this.$1.action_name=a;return this};a.prototype.setLastState=function(a){this.$1.last_state=a;return this};a.prototype.setSelectedID=function(a){this.$1.selected_id=a;return this};a.prototype.setSelectedText=function(a){this.$1.selected_text=a;return this};a.prototype.setSelectedType=function(a){this.$1.selected_type=a;return this};a.prototype.setTypeaheadSid=function(a){this.$1.typeahead_sid=a;return this};a.prototype.setTypedQuery=function(a){this.$1.typed_query=a;return this};c={action_name:!0,last_state:!0,selected_id:!0,selected_text:!0,selected_type:!0,typeahead_sid:!0,typed_query:!0};e.exports=a}),null);
__d("SearchFunnelLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEARCH_BOX_TAPPED:"search_box_tapped",TA_SUGGESTION_CLICKED:"ta_suggestion_clicked",TA_ABANDON:"ta_abandon",SERP_INLINE_ACTION:"serp_inline_action",SERP_RESULTS_LOADED:"serp_results_loaded",SERP_RESULT_CLICKED:"serp_result_clicked",SERP_SEE_MORE_CLICKED:"serp_see_more_clicked",SERP_SCROLL_RESULTS:"serp_scroll_results",SERP_TAB_CLICKED:"serp_tab_clicked",VIEW_PORT_VIEWS_ON_SEARCH_RESULTS:"view_port_views_on_search_results",END_OF_SERP_RESULTS:"end_of_serp_results",MARKETPLACE_SERP_ITEM_CLICKED:"marketplace_click"})}),null);
__d("SearchFunnelLogger",["SearchClientFunnelTypedLogger","SearchFunnelLoggerConfig","SearchFunnelLoggerEvents"],(function(a,b,c,d,e,f){"use strict";a={logSearchOpen:function(){if(!b("SearchFunnelLoggerConfig").isEnabled)return;new(b("SearchClientFunnelTypedLogger"))().setActionName(b("SearchFunnelLoggerEvents").SEARCH_BOX_TAPPED).log()}};e.exports=a}),null);
__d("BrowseClientEventLogger",["csx","Banzai","DOMQuery","SearchFunnelLogger","SearchLoggingOptions","ge","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="browse_client_event_session",i="search_www_click_error",j="21.";a={logData:function(event,a,c,d){__p&&__p();d===void 0&&(d={});if(!event||!a)return;d.event=event;d.client_time=Math.floor(Date.now());d.client_time_2=Date.now()/1e3;d.session_id=a;d.vertical=c;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(a)!==-1)return;c=d.event==="click"&&d.clicked_href!=null&&b("SearchLoggingOptions").signalLinkClicks;b("Banzai").post(h,[d],{delay:0,retry:!0,signal:c})},logClick:function(a){a.gt.event="click",this.maybeLogVisiblityEvent(a,!0),b("gkx")("678249")&&b("ifRequired")("FacebarTypeaheadRefreshNullstate",function(a){a.setIsNullstateStale(!0)})},maybeLogClientViewEvent:function(a){a.event="client_view",this.maybeLogVisiblityEvent(a)},maybeLogVisiblityEvent:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=null;c&&(d=a,a=a.gt);if(!a||!a.xt||a.xt.indexOf(j)!==0){c&&b("Banzai").post(i,[d],{delay:0,retry:!0});return}var e=JSON.parse(a.xt.substring(3));c&&(e.click_type=a.click_type,e.tn=a.tn,e.clicked_href=a.clicked_href,d&&d.bt&&d.bt.ct&&(d.bt.ct=="feedback"&&(e.feedback_score=d.bt.feedback_score,e.feedback_type=d.bt.feedback_type)));var event=a.event;c=this._getPositionForCurrentDOMNode(e.unit_id);e.position=c;if(e.display_style==="context_hscroll"&&(event==="client_view"||event==="vpvd"||event==="visible"||event==="hidden"))return;if(event==="vpvd"){if(!a.ft)return;e.vpvd_time=a.ft.vpvd_time_delta}this.logData(event,e.session_id,e.vertical,e)},_getPositionForCurrentDOMNode:function(a){__p&&__p();if(a==null||a==undefined)return null;var c=0,d=b("ge")("browse_result_area");if(d==null||d==undefined)return null;d=b("DOMQuery").scry(d,"._401d");for(var e=0;e<d.length;e++){var f=d[e];f=f.getAttribute("data-gt");if(f!==null||f!==undefined){f=JSON.parse(JSON.parse(f).xt.substring(3));if(f.item_type=="result"&&f.id!==""&&f.id!==null){if(f.unit_id==a)return c;c++}}}return null},logImpression:function(a){a.event="impression",this.maybeLogVisiblityEvent(a)}};e.exports=a}),null);
__d("GamesGogglesSwitch",[],(function(a,b,c,d,e,f){var g=!1;a={enable:function(){g=!0},isEnabled:function(){return g}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","Event","getViewportDimensions"],(function(a,b,c,d,e,f){a={getEventListeners:function(a){return[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)]},getViewportInfo:function(){return b("getViewportDimensions")()}};e.exports=a}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g="visibility_tracking",h="[data-vistracking]",i=500,j=50,k=50,l=50,m=50,n=0;function o(a){"use strict";__p&&__p();a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(g))return;this.visibleElementInfo={};this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,b("ErrorUtils").guard(function(){return this.fireEvent("browser")}.bind(this),"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,b("ErrorUtils").guard(function(){return this.clearAllVisibleElements("browser")}.bind(this),"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(b("ErrorUtils").guard(function(){return this.updateVisibleElements()}.bind(this),"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,b("ErrorUtils").guard(function(){return this.onUnload()}.bind(this),"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(b("ErrorUtils").guard(function(event){return this.fireEvent(event)}.bind(this),"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return this.fireEventCallback()}.bind(this)).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&b("ErrorUtils").applyWithGuard(this.extraInit.bind(this))}o.prototype.getDataFromConfig=function(a){"use strict";this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||h,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==undefined?a.timeout:i,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==undefined?a.minOffsetVisibleFromBottom:j,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==undefined?a.minOffsetVisibleFromTop:k,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==undefined?a.minOffsetVisibleFromLeft:l,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==undefined?a.minOffsetVisibleFromRight:m,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==undefined?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==undefined?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==undefined?a.cacheTrackedElements:!1};o.prototype.getAllTrackedElements=function(){"use strict";__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};o.prototype.refreshAllTrackedElements=function(){"use strict";delete this.allTrackedElements;return this.getAllTrackedElements()};o.prototype.getDataToLog=function(a){"use strict";a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};o.prototype.getElementID=function(a){"use strict";var b=a.$1;if(b)return b;a.$1=++n;return n};o.prototype.sendDataToLog=function(a){"use strict";b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(g,a)};o.prototype.isInstreamAdStoryElement=function(a){"use strict";return!1};o.prototype.fireEvent=function(a){a===void 0&&(a="default");var c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo();f=this.isVisible(e,f);!f&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):f&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};o.prototype.isVisible=function(a,c){"use strict";if(a==null)return!1;a=b("getElementPosition")(a);return a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};o.prototype.handleEvent=function(a,event){"use strict";__p&&__p();var c=this.getElementID(a).toString(),d=this.getDataToLog(a),e;if(event.name==="visible"){var f=Math.floor(Date.now()/1e3);e=b("pageID").concat(":",f.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[c]={visibility_id:e,elem:a}}else if(event.name==="hidden"){c in this.visibleElementInfo&&(e=this.visibleElementInfo[c].visibility_id,delete this.visibleElementInfo[c]);if(event.cause==="browser")return}this.sendDataToLog(Object.assign(d,{event:event.name,visibility_id:e}))};o.prototype.clearUntrackedVisibleElements=function(){"use strict";var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};o.prototype.clearAllVisibleElements=function(a){a===void 0&&(a="default");var b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};o.prototype.updateVisibleElements=function(){"use strict";this.clearAllVisibleElements(),this.fireEvent()};o.prototype.refreshAndFireEvent=function(event){"use strict";this.refreshAllTrackedElements(),this.fireEventCallback(event)};o.prototype.onUnload=function(){"use strict";this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&b("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))};o.init=function(a){"use strict";return new o(a)};e.exports=o}),null);
__d("GamesImpressionTracker",["cx","Arbiter","Banzai","Event","GamesGogglesSwitch","VisibilityTracking","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i="data-gamesrankedimp";c=1e3;function j(a){b("GamesGogglesSwitch").isEnabled()&&(a.className=a.className+" _1z5y")}function k(a){return function(){a&&(a(),a=null)}}h=babelHelpers.inherits(a,b("VisibilityTracking"));h&&h.prototype;a.prototype.handleEvent=function(a,event){if(event.name==="visible"){var c=a.getAttribute(i);a.removeAttribute(i);c&&(j(a),c&&b("Banzai").post("games_ranked_imp",{data:c}));b("Event").listen(a,"mouseover",k(function(){b("Banzai").post("games_mouseover",{data:c}),b("Event").listen(a,"mouseout",k(function(){b("Banzai").post("games_mouseout",{data:c})}))}))}};function a(){h.apply(this,arguments)}var l=new a({selector:"[data-gamesrankedimp]",handleAllVisibleEvents:!0,cacheTrackedElements:!0});d=b("throttle").acrossTransitions(function(){return l.fireEventCallback()},c,null);l.listeners&&l.listeners.addSubscriptions(b("Event").listen(document,"mousemove",d),b("Event").listen(document,"click",d),b("Arbiter").subscribe("games_unit_loaded",function(){return l.refreshAllTrackedElements()}))}),null);
__d("ghlTestUBT",["Promise","URI","gkx","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(){__p&&__p();var a=document.createElement("div"),c=["AdBox","Ad","advert"];b("gkx")("686994")&&c.push("post-ads");a.className=c.join(" ");document.body.appendChild(a);return new(b("Promise"))(function(b){__p&&__p();var c=window.getComputedStyle&&window.getComputedStyle(a);if(!c){b(!1);return}if(c.display==="none"){b(!0);return}if(c.MozBinding&&c.MozBinding.indexOf("url")===0){setTimeout(function(){return b(a.clientWidth===0)},5e3);return}b(!1)})}function i(){__p&&__p();var a=document.createElement("img");document.body.appendChild(a);return new(b("Promise"))(function(c){a.onload=function(){var b=window.getComputedStyle&&window.getComputedStyle(a);b=b&&b.display==="none";a.parentNode&&a.parentNode.removeChild(a);c(b)};a.onerror=function(){a.parentNode&&a.parentNode.removeChild(a),c(!0)};var d=new(b("URI"))("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png");a.src=d.toString()})}function a(a){g===undefined?b("promiseDone")(b("Promise").all([h(),i()]),function(b){g=b.some(function(a){return a}),a(g)}):a(g)}e.exports=a}),null);
__d("NonBlockingIFrame",["Promise","DOM","TimeSlice"],(function(a,b,c,d,e,f){__p&&__p();var g={},h,i;function j(a,c){__p&&__p();a===void 0&&(a=g);c===void 0&&(c=document.body);var d={className:"nonBlockingIframe",width:0,height:0,frameborder:0,scrolling:"no","aria-hidden":"true"};a!==g&&(d.src=a);d=b("DOM").create("iframe",d);d.style.left="-1000px";d.style.position="absolute";b("DOM").appendContent(c,d);a===g&&(d.contentDocument.open(),d.contentDocument.close());return d}function k(){return new(b("Promise"))(function(a){h||(h=j()),h.contentDocument.readyState==="complete"?a(h):(i||(i=new(b("Promise"))(function(a){h.contentWindow.onload=b("TimeSlice").guard(function(){a(h)},"NonBlockingIFrame window.onload")})),a(i))})}a={loadImage:function(a){__p&&__p();return k().then(function(c){return new(b("Promise"))(function(d,e){var f=c.contentWindow.Image,g=new f();g.onload=b("TimeSlice").guard(function(){d(g)},"NonBlockingIFrame image.onload");g.onerror=b("TimeSlice").guard(function(){e(g)},"NonBlockingIFrame image.onerror");g.onabort=b("TimeSlice").guard(function(){e(g)},"NonBlockingIFrame image.onabort");g.src=a})})},loadIFrame:function(a){a===void 0&&(a=g);return k().then(function(b){b=b.contentDocument.body;return j(a,b)})}};e.exports=a}),null);