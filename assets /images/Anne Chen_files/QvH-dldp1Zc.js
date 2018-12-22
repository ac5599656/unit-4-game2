if (self.CavalryLogger) { CavalryLogger.start_js(["KfreV"]); }

__d("ComposerXStore",["Arbiter","ge"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a,b){return"ComposerX/"+a+"/"+b}a={set:function(a,c,d){g[a]||(g[a]={}),g[a][c]=d,b("Arbiter").inform(h(a,c),{},"state")},get:function(a,b){return g[a]?g[a][b]:null},getAllForComposer:function(a){return g[a]||{}},waitForComponents:function(a,c,d){b("Arbiter").registerCallback(d,c.map(h.bind(null,a)))}};b("Arbiter").subscribe("page_transition",function(){for(var a in g)b("ge")(a)||delete g[a]});e.exports=a}),null);
__d("MenuDeprecated",["ArbiterMixin","CSS","DataStore","DOM","Event","HTML","Keys","Parent","Style","UserAgent_DEPRECATED","emptyFunction","mixin","Run"],(function(a,b,c,d,e,f){__p&&__p();var g,h="menu:mouseover",i=null;function j(a){return b("CSS").hasClass(a,"uiMenuContainer")?a:b("Parent").byClass(a,"uiMenu")}function k(a){return b("Parent").byClass(a,"uiMenuItem")}function l(a){if(document.activeElement){var b=k(document.activeElement);return a.indexOf(b)}return-1}function m(a){return b("DOM").find(a,"a.itemAnchor")}function n(a){return b("CSS").hasClass(a,"checked")}function o(a){return!b("CSS").hasClass(a,"disabled")&&b("Style").get(a,"display")!=="none"}function p(event){var a=document.activeElement;if(!a||!b("Parent").byClass(a,"uiMenu")||!b("DOM").isInputNode(a)){a=k(event.getTarget());a&&s.focusItem(a)}}function q(a){b("UserAgent_DEPRECATED").firefox()&&m(a).blur(),s.inform("select",{menu:j(a),item:a})}var r=function(){__p&&__p();r=b("emptyFunction");var a={};a.click=function(event){var a=k(event.getTarget());if(a&&o(a)){q(a);a=m(a);var b=a.href;a=a.getAttribute("rel");return a&&a!=="ignore"||b&&b.charAt(b.length-1)!=="#"}};a.keydown=function(event){__p&&__p();var a=event.getTarget();if(event.getModifiers().any)return;if(!i||b("DOM").isInputNode(a))return;var c=b("Event").getKeyCode(event),d;switch(c){case b("Keys").UP:case b("Keys").DOWN:var e=s.getEnabledItems(i);d=l(e);s.focusItem(e[d+(c===b("Keys").UP?-1:1)]);return!1;case b("Keys").SPACE:e=k(a);e&&(q(e),event.prevent());break;default:a=String.fromCharCode(c).toLowerCase();e=s.getEnabledItems(i);d=l(e);c=d;var f=e.length;while(~d&&(c=++c%f)!==d||!~d&&++c<f){var g=s.getItemLabel(e[c]);if(g&&g.charAt(0).toLowerCase()===a){s.focusItem(e[c]);return!1}}}};b("Event").listen(document.body,a)};g=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g&&g.prototype;a.prototype.focusItem=function(a){"use strict";a&&o(a)&&(this.$MenuDeprecatedImpl1(j(a)),b("CSS").addClass(a,"selected"),m(a).focus())};a.prototype.getEnabledItems=function(a){"use strict";return s.getItems(a).filter(o)};a.prototype.getCheckedItems=function(a){"use strict";return s.getItems(a).filter(n)};a.prototype.getItems=function(a){"use strict";return b("DOM").scry(a,"li.uiMenuItem")};a.prototype.getItemLabel=function(a){"use strict";return a.getAttribute("data-label",2)||""};a.prototype.isItemChecked=function(a){"use strict";return b("CSS").hasClass(a,"checked")};a.prototype.autoregister=function(a,b,c){"use strict";a.subscribe("show",function(){s.register(b,c)}),a.subscribe("hide",function(){s.unregister(b)})};a.prototype.register=function(a,c){"use strict";a=j(a),r(),b("DataStore").get(a,h)||b("DataStore").set(a,h,b("Event").listen(a,"mouseover",p)),c!==!1&&(i=a)};a.prototype.setItemEnabled=function(a,c){"use strict";!c&&!b("DOM").scry(a,"span.disabledAnchor")[0]&&b("DOM").appendContent(a,b("DOM").create("span",{className:b("DOM").find(a,"a").className+" disabledAnchor"},b("HTML")(m(a).innerHTML))),b("CSS").conditionClass(a,"disabled",!c)};a.prototype.toggleItem=function(a){"use strict";var b=!s.isItemChecked(a);s.setItemChecked(a,b)};a.prototype.setItemChecked=function(a,c){"use strict";b("CSS").conditionClass(a,"checked",c),m(a).setAttribute("aria-checked",c)};a.prototype.unregister=function(a){"use strict";a=j(a);var c=b("DataStore").remove(a,h);c&&c.remove();i=null;this.$MenuDeprecatedImpl1(a)};a.prototype.$MenuDeprecatedImpl1=function(a){"use strict";s.getItems(a).filter(function(a){return b("CSS").hasClass(a,"selected")}).forEach(function(a){b("CSS").removeClass(a,"selected")})};function a(){"use strict";g.apply(this,arguments)}var s=new a();e.exports=s}),null);
__d("SubscriptionLevels",[],(function(a,b,c,d,e,f){a=Object.freeze({ALL:"162318810514679",DEFAULT:"271670892858696",TOP:"266156873403755"});e.exports=a}),null);
__d("EditSubscriptions",["csx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","MenuDeprecated","Parent","SubscriptionLevels","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();var h=45,i=[b("SubscriptionLevels").ALL,b("SubscriptionLevels").DEFAULT,b("SubscriptionLevels").TOP],j={},k={},l={},m={},n={},o={},p={},q={},r={},s={},t={},u="/ajax/follow/follow_profile.php",v="/ajax/follow/unfollow_profile.php",w="/ajax/settings/notifications/notify_me.php",x={},y={},z={},A=null,B={};function C(a){return i.includes(a)}function D(a,c,d,e){__p&&__p();e=b("Parent").byClass(e,"uiMenuItem")||b("Parent").bySelector(e,"._54ni");var f=b("getOrCreateDOMID")(a);if(!e||!b("DOM").contains(a,e))return;else if(b("CSS").hasClass(e,"SubscribeMenuSubscribeCheckbox")){l[c]?I(f,c):H(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuUnsubscribe")){I(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuSettingsItem")){U(a,!0);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuGoBack")){U(a,!1);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuItem")){F(a,c,d,e);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuNotifyMeCheckbox")){E(a,c);return!1}}function E(a,b){m[b]?Y(a,b):X(a,b)}function F(a,c,d,e){if(b("CSS").hasClass(e,"SubscriptionMenuLevel")){if(b("MenuDeprecated").isItemChecked(e))return;S(a,c,L(e),!0,d)}else b("CSS").hasClass(e,"SubscriptionMenuCategory")?P(c,e,!b("MenuDeprecated").isItemChecked(e),!0,d):b("CSS").hasClass(e,"SubscriptionAppStory")&&R(c,e,!b("MenuDeprecated").isItemChecked(e),d)}function G(a){return B[a]?B[a]:0}function H(a,c){var d={profile_id:c};b("Arbiter").inform("FollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,d);new(b("AsyncRequest"))().setURI(u).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"FollowUserFail",d)).send()}function I(a,c){var d={profile_id:c};b("Arbiter").inform("UnfollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,d);new(b("AsyncRequest"))().setURI(v).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"UnfollowUserFail",d)).send()}function J(a,c,d){c={profile_id:a,level:q[a],custom_categories:r[a],location:d};new(b("AsyncRequest"))().setURI("/ajax/follow/manage_subscriptions.php").setData(c).send()}function K(a,c){__p&&__p();var d=r[c]||[],e=b("MenuDeprecated").getItems(a);e.forEach(function(a){if(b("CSS").hasClass(a,"SubscriptionMenuCategory")){var e=L(a);d.includes(e)?N(a):O(a)}else if(b("CSS").hasClass(a,"SubscriptionAppStory")){e=L(a);z[c]&&z[c][e]?N(a):O(a)}});S(a,c,q[c],!1)}function L(a){a=b("DOM").scry(a,"input")[0];return a&&a.value}function M(a){return b("DOM").find(a,"a.itemAnchor")}function N(a){b("CSS").addClass(a,"checked"),M(a).setAttribute("aria-checked",!0)}function O(a){b("CSS").removeClass(a,"checked"),M(a).setAttribute("aria-checked",!1)}function P(a,b,c,d,e){__p&&__p();c?N(b):O(b);b=L(b);if(C(b))c&&Q(a,b);else if(c)r[a].includes(b)||r[a].push(b);else{c=r[a].indexOf(b);c!==-1&&r[a].splice(c,1)}d&&J(a,b,e)}function Q(a,c){q[a]=c,b("Arbiter").inform("SubscriptionLevelUpdated",{profile_id:a,level:c})}function R(a,c,d,e){e="/ajax/feed/filter_action/";var f=L(c),g={actor_id:a,app_id:f};d?(N(c),e+="resubscribe_user_app/",g.action="resubscribe_user_app",z[a]||(z[a]={}),z[a][f]=!0):(O(c),e+="unsubscribe_user_app_checkbox/",g.action="unsubscribe_user_app_checkbox",z[a]&&(z[a][f]=!1));new(b("AsyncRequest"))().setURI(e).setData(g).send()}function S(a,c,d,e,f){a=b("DOM").scry(a,".SubscriptionMenuLevel");var g=null;a.forEach(function(a){L(a)==d?g=a:b("MenuDeprecated").isItemChecked(a)&&P(c,a,!1,!1)});g&&P(c,g,!0,e,f)}function T(a,c,d){l[c]=d;b("CSS").conditionClass(a,"isUnsubscribed",!d);c=b("DOM").scry(a,"li.SubscribeMenuSubscribeCheckbox");if(c.length!==0){a=c[0];d?N(a):O(a)}}function U(a,c){b("CSS").conditionClass(a,"subscriptionMenuOpen",c)}function V(a,c,d){c=b("DOM").find(a,".FriendListSubscriptionsMenu");var e=b("DOM").find(c,".uiMenuInner");A!=null&&A.forEach(function(a){e.removeChild(a)});d.forEach(function(a){e.appendChild(a)});A=d}b("Arbiter").subscribe("UnfollowUser",function(a,b){s[b.profile_id]&&(Q(b.profile_id,s[b.profile_id]),r[b.profile_id]=t[b.profile_id].slice())});b("Arbiter").subscribe("UpdateSubscriptionLevel",function(a,c){a=c.profile_id+"";c=c.level+"";Q(a,c);var d;for(d in j)if(j[d]===a){var e=b("ge")(d);e&&S(e,a,c,!1)}});b("Arbiter").subscribe("listeditor/close_editor",function(){var a;for(a in j){var c=b("ge")(a);c&&U(c,!1)}});function W(a,c,d){__p&&__p();m[c]=d;c=y[c];if(c){d?c.select():c.deselect();return}c=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckbox");if(c.length!==0){c=c[0];b("CSS").conditionShow(c,!0);a=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckboxSeparator");a.length>0&&b("CSS").conditionShow(a[0],!0);d?N(c):O(c)}}function X(a,c){a={profile_id:c};b("Arbiter").inform("EnableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!0}).setErrorHandler(b("Arbiter").inform.bind(null,"EnableNotifsForUserFail",a)).send()}function Y(a,c){a={profile_id:c};b("Arbiter").inform("DisableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!1}).setErrorHandler(b("Arbiter").inform.bind(null,"DisableNotifsForUserFail",a)).send()}c={init:function(a,c,d){__p&&__p();var e=b("getOrCreateDOMID")(a);B[e]=d;j[e]||b("Event").listen(a,"click",function(b){return D(a,j[e],d,b.getTarget())});d===h&&x[c].length&&V(a,c,x[c]);q[c]&&K(a,c);j[e]=c;b("CSS").conditionClass(a,"NonFriendSubscriptionMenu",!k[c]);b("CSS").conditionClass(a,"cannotSubscribe",!n[c]);b("CSS").conditionClass(a,"noSubscriptionLevels",o[c]&&!p[c]);b("CSS").conditionClass(a,"noSubscribeCheckbox",!k[c]&&!o[c]);T(a,c,l[c]);W(a,c,m[c]);b("Arbiter").subscribe(["FollowUser","FollowingUser","UnfollowUserFail"],function(b,d){d.profile_id==c&&T(a,c,!0)}.bind(this));b("Arbiter").subscribe(["UnfollowUser","UnfollowingUser","FollowUserFail"],function(d,e){e.profile_id==c&&(b("Arbiter").inform("SubMenu/Reset"),T(a,c,!1))}.bind(this));b("Arbiter").subscribe(["EnableNotifsForUser","DisableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!0)}.bind(this));b("Arbiter").subscribe(["DisableNotifsForUser","EnableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!1)}.bind(this));b("Arbiter").subscribe("listeditor/friend_lists_changed",function(b,c){if(c.notify_state){b=c.added_uid?c.added_uid:c.removed_uid;W(a,b,c.notify_state.is_notified)}}.bind(this))},getSubscriptions:function(a){return{level:q[a],custom_categories:r[a]}},registerTimelineNotifySelector:function(a,c){var d=a.getInitialMenu(),e=a.getContentRoot();d.forEachItem(function(a){var d=a.getRoot();b("CSS").hasClass(d,"SubscribeMenuNotifyMeCheckbox")&&(y[c]=a,W(e,c,m[c]))});d.subscribe("itemclick",function(a,b){b.item===y[c]&&E(e,c);return!0})},toggleNotificationsOnJoin:function(a,b){m[a]!==b&&E(null,a)},setSubscriptions:function(a,b,c,d,e,f,g,h,i,j,q,u){Q(a,g+""),k[a]=b,l[a]=c,n[a]=d,o[a]=e,p[a]=f,s[a]=i+"",r[a]=h.map(String),t[a]=j.map(String),x[a]=u,m[a]=q}};e.exports=a.EditSubscriptions||c}),null);
__d("SelectorDeprecated",["Arbiter","ArbiterMixin","Button","ContextualLayer","CSS","DataStore","DOM","Event","Focus","HTML","Keys","MenuDeprecated","Parent","Style","Toggler","TooltipData","URI","Vector","emptyFunction","getDocumentScrollElement","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j=[],k;function l(a){return b("Parent").byClass(a,"uiSelector")}function m(a){return b("Parent").byClass(a,"uiSelectorButton")}function n(){i||(i=new(b("ContextualLayer"))({position:"below"},b("DOM").create("div")),b("CSS").addClass(i.getRoot(),"uiSelectorContextualLayer"));return i}function o(a){return b("DOM").scry(a,"select")[0]}function p(a){return b("DOM").find(a,"div.uiSelectorMenuWrapper")}var q=function(){__p&&__p();q=b("emptyFunction"),b("MenuDeprecated").subscribe("select",function(a,c){__p&&__p();if(!h||!c||c.menu!==v.getSelectorMenu(h))return;a=r(h);var d=s(c.item);if(d){var e=h,f=v.isOptionSelected(c.item),g=v.inform("select",{selector:e,option:c.item,clone:k});if(g===!1)return;(a||!f)&&(v.setSelected(e,v.getOptionValue(c.item),!f),v.inform("toggle",{selector:e,option:c.item}),v.inform("change",{selector:e}),b("Arbiter").inform("Form/change",{node:e}),t(e)&&b("DataStore").set(e,"dirty",!0))}(!a||!d)&&(h&&v.toggle(h))})};function r(a){return!!a.getAttribute("data-multiple")}function s(a){return b("CSS").hasClass(a,"uiSelectorOption")}function t(a){return!!a.getAttribute("data-autosubmit")}var u=function(){__p&&__p();u=b("emptyFunction");var a={keydown:function(event){__p&&__p();var a=event.getTarget();if(b("DOM").isInputNode(a))return;switch(b("Event").getKeyCode(event)){case b("Keys").DOWN:case b("Keys").SPACE:case b("Keys").UP:if(m(a)){a=l(a);v.toggle(a);return!1}break;case b("Keys").ESC:if(h){a=v.getSelectorButton(h);v.toggle(h);a&&b("Focus").set(a);return!1}break}},mouseover:function(event){var a=b("Parent").byAttribute(event.getTarget(),"ajaxify");a&&b("CSS").hasClass(a,"uiSelectorButton")&&v.loadMenu(l(a))}};b("Event").listen(document.body,a)};b("Toggler").subscribe(["show","hide"],function(a,c){__p&&__p();var d=l(c.getActive());if(d){u();q();var e=v.getSelectorButton(d),f=v.getSelectorMenu(d);a=a==="show";e.setAttribute("aria-expanded",a?"true":"false");if(a){h=d;if(b("CSS").hasClass(e,"uiButtonDisabled")){v.setEnabled(d,!1);return!1}f=f||v.loadMenu(d);e=b("Style").getScrollParent(d);var g=e!==window&&e!==b("getDocumentScrollElement")();if(g||b("CSS").hasClass(d,"uiSelectorUseLayer")){g&&j.push(b("Event").listen(e,"scroll",function(){c.hide()}));k=b("DOM").create("div",{className:d.className});b("CSS").addClass(k,"invisible_elem");b("Vector").getElementDimensions(d).setElementDimensions(k);b("DOM").replace(d,k);g=b("CSS").hasClass(d,"uiSelectorRight");e=b("CSS").hasClass(d,"uiSelectorBottomUp");n().setContext(k).setContent(d).setPosition(e?"above":"below").setAlignment(g?"right":"left").show()}b("MenuDeprecated").register(f);e=b("MenuDeprecated").getCheckedItems(f);e.length||(e=b("MenuDeprecated").getEnabledItems(f));e.length&&b("MenuDeprecated").focusItem(e[0])}else{h=null;if(k){while(j.length)j.pop().remove();b("DOM").replace(k,d);n().hide();k=null}f&&b("MenuDeprecated").unregister(f);if(t(d)&&b("DataStore").get(d,"dirty")){g=b("DOM").scry(d,"input.submitButton")[0];g&&g.click();b("DataStore").remove(d,"dirty")}}b("CSS").conditionClass(v.getSelectorButton(d),"selected",a);v.inform(a?"open":"close",{selector:d,clone:k})}});g=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g&&g.prototype;a.prototype.attachMenu=function(a,c,d){"use strict";__p&&__p();a=l(a);if(a){h&&b("MenuDeprecated").unregister(v.getSelectorMenu(h));b("DOM").setContent(p(a),c);h&&b("MenuDeprecated").register(v.getSelectorMenu(a));k&&n().updatePosition();if(d){c=a.getAttribute("data-name");c&&d.setAttribute("name",c);r(a)||d.setAttribute("multiple",!1);c=o(a);c?b("DOM").replace(c,d):b("DOM").insertAfter(a.firstChild,d)}return!0}};a.prototype.getOption=function(a,b){"use strict";a=v.getOptions(a);var c=a.length;while(c--)if(b===v.getOptionValue(a[c]))return a[c];return null};a.prototype.getOptions=function(a){"use strict";a=b("MenuDeprecated").getItems(v.getSelectorMenu(a));return a.filter(s)};a.prototype.getEnabledOptions=function(a){"use strict";a=b("MenuDeprecated").getEnabledItems(v.getSelectorMenu(a));return a.filter(s)};a.prototype.getSelectedOptions=function(a){"use strict";return b("MenuDeprecated").getCheckedItems(v.getSelectorMenu(a))};a.prototype.getOptionText=function(a){"use strict";return b("MenuDeprecated").getItemLabel(a)};a.prototype.getOptionValue=function(a){"use strict";var b=l(a),c=o(b);b=v.getOptions(b).indexOf(a);return b>=0?c.options[b+1].value:""};a.prototype.getSelectorButton=function(a){"use strict";return b("DOM").find(a,"a.uiSelectorButton")};a.prototype.getSelectorMenu=function(a){"use strict";return b("DOM").scry(a,"div.uiSelectorMenu")[0]};a.prototype.getValue=function(a){"use strict";__p&&__p();var b=o(a);if(!b)return null;if(!r(a))return b.value;a=[];b=b.options;for(var c=1,d=b.length;c<d;c++)b[c].selected&&a.push(b[c].value);return a};a.prototype.isOptionSelected=function(a){"use strict";return b("MenuDeprecated").isItemChecked(a)};a.prototype.listen=function(a,b,c){"use strict";return this.subscribe(b,function(b,d){if(d.selector===a)return c(d,b)})};a.prototype.loadMenu=function(a,c){"use strict";__p&&__p();var e=v.getSelectorMenu(a);if(!e){var f=v.getSelectorButton(a),g=f.getAttribute("ajaxify");if(g){d(["AsyncRequest"],function(a){var d=new(b("URI"))(g),e=d.getQueryData();d.setQueryData({});a=new a(d).setData(e).setNectarModuleDataSafe(f).setRelativeTo(f);c&&a.setFinallyHandler(function(){setTimeout(c,0)});a.send()}.bind(this));var h=b("HTML")('<div class="uiSelectorMenuWrapper uiToggleFlyout"><div class="uiMenu uiSelectorMenu loading"><ul class="uiMenuInner"><li><span></span></li></ul></div></div>');b("DOM").appendContent(f.parentNode,h);e=v.getSelectorMenu(a);f.removeAttribute("onmouseover")}}else c&&c();return e};a.prototype.setButtonLabel=function(a,c){"use strict";a=v.getSelectorButton(a);var d=parseInt(a.getAttribute("data-length"),10);c=c||a.getAttribute("data-label")||"";b("Button").setLabel(a,c);typeof c==="string"&&(d&&c.length>d?a.setAttribute("title",c):a.removeAttribute("title"))};a.prototype.setButtonTooltip=function(a,c){"use strict";a=v.getSelectorButton(a);var d=b("Parent").byTag(a,"a");d&&b("TooltipData").set(d,c||a.getAttribute("data-tooltip")||"")};a.prototype.setEnabled=function(a,c){"use strict";!c&&h&&l(a)===h&&v.toggle(a),b("Button").setEnabled(v.getSelectorButton(a),c)};a.prototype.setOptionEnabled=function(a,c){"use strict";b("MenuDeprecated").setItemEnabled(a,c)};a.prototype.setSelected=function(a,c,d){"use strict";__p&&__p();d=d!==!1;c=v.getOption(a,c);if(!c)return;var e=v.isOptionSelected(c);if(d!==e){if(!r(a)&&!e){d=v.getSelectedOptions(a)[0];d&&b("MenuDeprecated").toggleItem(d)}b("MenuDeprecated").toggleItem(c)}v.updateSelector(a)};a.prototype.toggle=function(a){"use strict";b("Toggler").toggle(b("DOM").scry(l(a),"div.wrap")[0])};a.prototype.updateSelector=function(a){"use strict";__p&&__p();var c=v.getOptions(a),d=v.getSelectedOptions(a),e=o(a).options,f=[],g=[];for(var h=0,i=c.length;h<i;h++){var j=d.includes(c[h]);e[h+1].selected=j;if(j){j=v.getOptionText(c[h]);f.push(j);g.push(c[h].getAttribute("data-tooltip")||j)}}e[0].selected=!d.length;j=b("CSS").hasClass(a,"uiSelectorDynamicLabel");h=b("CSS").hasClass(a,"uiSelectorDynamicTooltip");if(j||h){i="";if(r(a)){c=v.getSelectorButton(a);i=c.getAttribute("data-delimiter")||", "}f=f.join(i);g=g.join(i);j&&v.setButtonLabel(a,f);h&&v.setButtonTooltip(a,g)}};function a(){"use strict";g.apply(this,arguments)}var v=new a();e.exports=v}),null);
__d("ProgressBarBase",["emptyFunction","removeFromArray","requestAnimationFrame"],(function(a,b,c,d,e,f){__p&&__p();var g=[];function h(a,c){"use strict";this._min=a||0,this._max=c||100,this._initialPosition=0,this._position=0,this._initialVelocity=0,this._velocity=0,this._acceleration=0,this.useAcceleration=!0,this._targetPosition=0,this._targetTime=0,this._startTime=null,this._onComplete=b("emptyFunction")}h.prototype.setPosition=function(a){"use strict";a=this._normalizePosition(a);this._initialPosition=a;this._position=a;this.updateMeter(this._position);this.stop();return this};h.prototype.setCompleteHandler=function(a){"use strict";this._onComplete=a||b("emptyFunction");return this};h.prototype.setTarget=function(a,b){"use strict";__p&&__p();this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=a;a=this._normalizePosition(a);this._targetTime=b;this._initialVelocity=this._velocity;this._initialPosition=this._position;this.useAcceleration?this._acceleration=2*(a-this._initialPosition-this._initialVelocity*b)/(b*b):(this._acceleration=0,this._velocity=this._initialVelocity=(a-this._initialPosition)/b);this._position>=a?this._onComplete():this._start();return this};h.prototype.setNoAcceleration=function(a){"use strict";this.useAcceleration=!a;return this};h.prototype._clearOnCompleteTimeout=function(){"use strict";a.clearTimeout(this._onCompleteTimeout)};h.prototype.stop=function(){"use strict";this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this};h.prototype._start=function(){"use strict";this._startTime=Date.now();this._onCompleteTimeout=a.setTimeout(function(){this.setPosition(this._targetPosition),this._onComplete()}.bind(this),this._targetTime);this._startAnimating();return this};h.prototype._loop=function(){"use strict";var a=Date.now()-this._startTime;this._position=.5*this._acceleration*a*a+this._initialVelocity*a+this._initialPosition;var b=this._velocity;this._velocity=this._acceleration*a+this._initialVelocity;a=b<0!==this._velocity<0;this._position>this._normalizePosition(this._targetPosition)||a?(this.setPosition(this._targetPosition),this._onComplete()):this.updateMeter(this._position)};h.prototype.updateMeter=function(a){"use strict";throw new Error("Unimplemented function: updateMeter")};h.prototype._normalizePosition=function(a){"use strict";return Math.min(Math.max((a-this._min)/(this._max-this._min),0),1)};h.prototype._startAnimating=function(){"use strict";g.includes(this)||(g.push(this),g.length===1&&b("requestAnimationFrame")(h.prototype._requestAnimationFrameCallback))};h.prototype._stopAnimating=function(){"use strict";b("removeFromArray")(g,this)};h.prototype._requestAnimationFrameCallback=function(){"use strict";g.forEach(function(a){a._loop()}),g.length&&b("requestAnimationFrame")(h.prototype._requestAnimationFrameCallback)};h.setPosition=function(a,b){"use strict";a.setPosition(b)};h.setTarget=function(a,b,c){"use strict";a.setTarget(b,c)};e.exports=h}),null);
__d("ProgressBar",["csx","cx","CSS","DOM","ProgressBarBase","Style"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=babelHelpers.inherits(a,b("ProgressBarBase"));i=c&&c.prototype;function a(a,c,d){"use strict";i.constructor.call(this,c,d),this._root=a,this._meter=b("DOM").find(a,"div._5e4k"),this._meter2=b("DOM").scry(a,"div._5e2g")[0]}a.prototype.getRoot=function(){"use strict";return this._root};a.prototype.updateMeter=function(a){"use strict";a=Math.min(Math.max(a,0),1);b("CSS").conditionClass(this._meter,"_5e2d",a<=0);b("CSS").conditionClass(this._meter,"_5e4j",a>=1);this._root.setAttribute("aria-valuenow",a*100);a=a*100+"%";b("Style").set(this._meter,"width",a);this._meter2&&(b("Style").set(this._meter2,"left",a),b("Style").set(this._meter2,"width",a))};a.prototype.changeLabel=function(a){"use strict";var c=b("DOM").scry(this._root,"span._5e2h");c.forEach(function(c){b("DOM").setContent(c,a)});return this};e.exports=a}),null);
__d("SearchSourceWithMetrics",["AbstractSearchSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("AbstractSearchSource"));g=c&&c.prototype;function a(a,b){"use strict";g.constructor.call(this),this.searchSource=a,this.reporter=b}a.prototype.searchImpl=function(a,b,c){"use strict";this.reporter.reportQueryBegin(a);c&&this.reporter.reportStrategyName(c.strategyName);var d=Date.now();this.searchSource.search(a,function(c,a){this.reporter.reportQueryComplete(Date.now()-d,0),b(c,a)}.bind(this),c)};a.prototype.bootstrapImpl=function(a){"use strict";this.reporter.reportBootstrapBegin();return this.searchSource.bootstrap(function(){this.searchSource.getBootstrappedEntries(function(b){this.reporter.reportBootstrapComplete(b.map(function(a){return a.getType()})),a()}.bind(this))}.bind(this))};e.exports=a}),null);
__d("TypeaheadMetricCounter",[],(function(a,b,c,d,e,f){__p&&__p();function a(){"use strict";this.reset()}a.prototype.reset=function(){"use strict";this.stats={},this.avgStats={}};a.prototype.recordStat=function(a,b){"use strict";this.stats[a]=b};a.prototype.recordCountStat=function(a){"use strict";var b=this.stats[a];this.stats[a]=b?b+1:1};a.prototype.recordAvgStat=function(a,b){"use strict";this.avgStats[a]?(this.avgStats[a][0]+=b,this.avgStats[a][1]+=1):this.avgStats[a]=[b,1]};a.prototype.hasStats=function(){"use strict";return!!Object.keys(this.stats).length};a.prototype.getStats=function(){"use strict";var a=babelHelpers["extends"]({},this.stats);for(var b in this.avgStats){var c=this.avgStats[b];a[b]=c[0]/c[1]}return a};e.exports=a}),null);
__d("QueriesHistory",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.reset()}a.prototype.getQueries=function(){"use strict";return this.$2};a.prototype.getCurrentLength=function(){"use strict";return this.$3};a.prototype.add=function(a){"use strict";this.$2.push(a);this.$3+=a.length;while(this.$2.length!==0&&this.$3>this.$1){a=this.$2.shift();this.$3-=a.length}};a.prototype.reset=function(){"use strict";this.$3=0,this.$2=[]};e.exports=a}),null);
__d("TypeaheadMetricReporter",["AsyncRequest","QueriesHistory","Random","TypeaheadMetricCounter","mixInEventEmitter"],(function(a,b,c,d,e,f){__p&&__p();var g="/ajax/typeahead/record_basic_metrics.php",h=1e3;function a(a){"use strict";this.counter=new(b("TypeaheadMetricCounter"))(),this.extraData=Object.assign({},a),this.bootstrapped=!1,this.bootstrapBegin=Date.now(),this.queriesHistory=new(b("QueriesHistory"))(h),this.lastQuery=null,this.sessionActive=!1,this.$1()}a.prototype.getSID=function(){"use strict";return this.sid};a.prototype.sessionStart=function(){"use strict";this.sessionActive=!0,this.sessionStartTime=Date.now()};a.prototype.sessionEnd=function(){"use strict";this.sessionActive&&(this.$2(),this.$1(),this.sessionActive=!1)};a.prototype.setAdditionalStats=function(a){"use strict";a&&Object.entries(a).forEach(function(a){var b=a[0];a=a[1];this.counter.recordStat(b,a)}.bind(this))};a.prototype.sessionPause=function(a){"use strict";this.sessionActive&&(this.setAdditionalStats(a),this.$2(),this.sessionActive=!1)};a.prototype.sessionDeactivate=function(){"use strict";this.sessionActive=!1};a.prototype.reportSelect=function(a,b,c,d,e,f){"use strict";e=e==null?this.lastQuery:e;this.counter.recordStat("selected_id",a||"SELECT_NULL");this.counter.recordStat("selected_type",b);this.counter.recordStat("selected_position",c);this.counter.recordStat("selected_with_mouse",d?1:0);this.counter.recordStat("selected_query",e);for(var g in f)this.counter.recordStat(g,f[g])};a.prototype.reportStrategyName=function(a){"use strict";this.counter.recordStat("strategy_name",a)};a.prototype.reportBootstrapBegin=function(){"use strict";this.bootstrapBegin=Date.now()};a.prototype.reportBootstrapDirty=function(){"use strict";this.bootstrapped=!1};a.prototype.reportBootstrapComplete=function(a){"use strict";this.counter.recordAvgStat("bootstrap_latency",Date.now()-this.bootstrapBegin);var b={};a.forEach(function(a){b[a]=(b[a]||0)+1});this.counter.recordStat("bootstrap_response_types",b);this.bootstrapped=!0};a.prototype.reportQueryBegin=function(a){"use strict";this.counter.recordStat("query",a),this.counter.recordCountStat("num_queries"),this.queriesHistory.add(a),this.lastNotBackspacedQuery.indexOf(a)!==0&&(this.lastNotBackspacedQuery=a),this.lastQuery=a,this.lastQueryTime=Date.now()};a.prototype.reportRequestID=function(a){"use strict";this.lastRequestID=a,this.requestIDHistory.push(a)};a.prototype.reportQueryComplete=function(a,b){"use strict";this.counter.recordAvgStat("avg_query_latency",a),b!==undefined&&this.counter.recordStat("filtered_count",b)};a.prototype.reportResults=function(a,b){"use strict";this.results=a,b===this.lastQuery&&this.counter.recordStat("last_query_latency",Date.now()-this.lastQueryTime)};a.prototype.reportResultsAds=function(a){"use strict";this.resultsAds=a};a.prototype.$1=function(){"use strict";this.sid=Math.floor(Date.now()*b("Random").random()),this.lastNotBackspacedQuery="",this.queriesHistory.reset(),this.results=null,this.resultsAds=null,this.lastRequestID=null,this.requestIDHistory=[],this.counter.reset(),this.emit&&this.emit("reset",{sid:this.sid})};a.prototype.$3=function(){"use strict";var a={};for(var b in this.extraData){var c=this.extraData[b];a[b]=typeof c==="function"?c():c}return a};a.prototype.$2=function(){"use strict";__p&&__p();if(this.counter.hasStats()){this.counter.recordStat("session_time",Date.now()-this.sessionStartTime);this.results&&this.counter.recordStat("candidate_results",JSON.stringify(this.results));this.resultsAds&&this.counter.recordStat("candidate_results_ads",JSON.stringify(this.resultsAds));this.sid&&this.counter.recordStat("sid",this.sid);this.lastNotBackspacedQuery&&this.counter.recordStat("last_not_backspaced_query",this.lastNotBackspacedQuery);this.counter.recordStat("queries_history",JSON.stringify(this.queriesHistory.getQueries()));this.bootstrapped&&this.counter.recordStat("bootstrapped",1);this.lastRequestID&&this.counter.recordStat("request_id",this.lastRequestID);this.requestIDHistory.length&&this.counter.recordStat("request_ids",this.requestIDHistory);var a=babelHelpers["extends"]({},this.counter.getStats(),this.$3());new(b("AsyncRequest"))().setURI(g).setMethod("POST").setData({stats:a}).send();this.emit&&this.emit("submitted",a)}};b("mixInEventEmitter")(a,{reset:!0,submitted:!0});e.exports=a}),null);
__d("htmlSpecialChars",[],(function(a,b,c,d,e,f){__p&&__p();var g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/\'/g;function a(a){if(typeof a==="undefined"||a===null||!a.toString)return"";if(a===!1)return"0";else if(a===!0)return"1";return a.toString().replace(g,"&amp;").replace(j,"&quot;").replace(k,"&#039;").replace(h,"&lt;").replace(i,"&gt;")}e.exports=a}),null);
__d("DocumentMentionsRegex",[],(function(a,b,c,d,e,f){"use strict";a="\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";b="\\b[A-Z][^\\s"+a+"]";c={PUNCTUATION:a,NAME:b};e.exports=c}),null);
__d("AtSignMentionsStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){__p&&__p();a=b("DocumentMentionsRegex").PUNCTUATION;c=["@","\\uff20"].join("");d="[^"+c+a+"\\s]";f="(?:\\.[ |$]| |["+a+"]|)";b=20;var g=new RegExp("(?:^|\\s|\\()(["+c+"]((?:"+d+f+"){0,"+b+"}))$");a={name:"AtSignMentionsStrategy",findMentionableString:function(a){a=g.exec(a);if(a!==null){var b=a[2];if(b.length)return{matchingString:b,leadOffset:a[1].length}}return null}};e.exports=a}),null);
__d("CapitalizedNameMentionsStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){"use strict";a=1;var g=new RegExp("(^|[^#])((?:"+b("DocumentMentionsRegex").NAME+"{"+a+",})$)");c={name:"CapitalizedNameMentionsStrategy",findMentionableString:function(a){a=g.exec(a);return a!==null?{matchingString:a[2],leadOffset:a[2].length}:null}};e.exports=c}),null);
__d("DocumentCompositeMentionsSource",["invariant","createCancelableFunction","emptyFunction","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){var c=a.getCharacterList().toSeq().slice(0,b).reverse().takeWhile(function(a){return a.getEntity()===null}).count();return a.getText().slice(b-c,b)}function a(a){a.length>0||g(0,1514),this.$1=a,this.$2=!1,this.$3=null}a.prototype.bootstrap=function(a){if(this.$2)return;this.$2=!0;a=a||b("emptyFunction");var c=this.$1.length;function d(){c--,c||a&&a()}this.$1.forEach(function(a){a.bootstrap(d)})};a.prototype.search=function(a,c,d){var e=c.getAnchorKey();a=a.getBlockForKey(e);var f=b("createCancelableFunction")(d);this.$4(h(a,c.getAnchorOffset()),f);return{remove:function(){f.cancel()}}};a.prototype.$4=function(a,c){__p&&__p();var d=this.$1.length,e,f;for(var g=0;g<d;g++){e=this.$1[g];f=e.findMatch(a);if(f===null)continue;else{var h=b("nullthrows")(f).matchingString;this.$3=h;e.search(h,function(a,b){this.$3===b&&c(a,f.leadOffset)}.bind(this));return}}this.$3=null;c(null,null)};e.exports=a}),null);
__d("DocumentMentionsSource",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b){typeof a.findMentionableString==="function"||g(0,558),this.$1=a,this.$2=b,this.$3=!1}a.prototype.findMatch=function(a){return this.$1.findMentionableString(a)};a.prototype.bootstrap=function(a){this.$3||(this.$3=!0,this.$2.bootstrap(a))};a.prototype.search=function(a,b){this.$2.search(a,b,{strategyName:this.$1.name})};e.exports=a}),null);
__d("FlexboxStyles",[],(function(a,b,c,d,e,f){"use strict";a={alignItems:!0,flexDirection:!0,justifyContent:!0};e.exports=a}),null);
__d("LayoutStyles",["FlexboxStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("FlexboxStyles"),{borderBottomWidth:!0,borderLeftWidth:!0,borderRightWidth:!0,borderTopWidth:!0,borderWidth:!0,bottom:!0,height:!0,left:!0,margin:!0,marginBottom:!0,marginLeft:!0,marginRight:!0,marginTop:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,opacity:!0,overflow:!0,padding:!0,paddingBottom:!0,paddingLeft:!0,paddingRight:!0,paddingTop:!0,position:!0,top:!0,transform:!0,transformOrigin:!0,width:!0});e.exports=a}),null);
__d("ViewStyles",["LayoutStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("LayoutStyles"),{backgroundColor:!0,borderBottomColor:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderBottomWidth:!0,borderColor:!0,borderLeftColor:!0,borderLeftWidth:!0,borderRadius:!0,borderRightColor:!0,borderRightWidth:!0,borderStyle:!0,borderTopColor:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderTopWidth:!0,borderWidth:!0,flex:!0,opacity:!0,overflow:!0});e.exports=a}),null);
__d("TextStyles",["ViewStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("ViewStyles"),{color:!0,fontFamily:!0,fontSize:!0,fontStyle:!0,fontWeight:!0,letterSpacing:!0,lineHeight:!0,textAlign:!0,textDecorationLine:!0,whiteSpace:!0});e.exports=a}),null);
__d("flattenStyle",["mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();if(!a)return null;if(!Array.isArray(a))return b("mapObject").untyped(a,function(b,a){return h(b,a)});var c={};for(var d=0,e=a.length;d<e;++d){var f=g(a[d]);if(f)for(var i in f)c[i]=f[i]}return c}function h(a,b){return b==="lineHeight"&&typeof a==="number"?a+"px":a}e.exports=g}),null);
__d("getValidatedStyle",["filterObject","flattenStyle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={textDecorationLine:"textDecoration"};function a(a,c){if(!a)return null;a=b("flattenStyle")(a);return h(b("filterObject")(a,function(a,b){return!!c[b]}),g)}function h(a,b){var c=babelHelpers["extends"]({},a);Object.keys(b).forEach(function(a){if(Object.prototype.hasOwnProperty.call(c,a)){var d=b[a];c[d]=c[a];delete c[a]}});return c}e.exports=a}),null);
__d("pluckClassNames",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var b=[],c=[];Array.isArray(a)?a.forEach(function(a){a=g(a);var d=a.classNames;a=a.styles;b=b.concat(d);c=c.concat(a)}):typeof a==="string"?b.push(a):c.push(a);return{classNames:b,styles:c}}e.exports=g}),null);
__d("Text",["cx","React","TextStyles","getValidatedStyle","joinClasses","pluckClassNames"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=b("React").PropTypes;h=babelHelpers.inherits(i,b("React").Component);h&&h.prototype;i.prototype.getChildContext=function(){return{inline:!0}};i.prototype.render=function(){__p&&__p();var a=this.props,c=a.children;a=a.style;a=b("pluckClassNames")(a);var d=a.classNames;a=a.styles;a=b("getValidatedStyle")(a,b("TextStyles"));var e=typeof c==="string",f=this.context.inline;f=b("joinClasses").apply(undefined,["_b5a"+(!e&&!f?" _b5b":"")+(f?" _b5c":"")].concat(d));e?d=c:d=b("React").Children.map(c,function(a){return typeof a==="string"?b("React").createElement(i,null,a):a});return b("React").createElement("div",{className:f,style:a},d)};function i(){h.apply(this,arguments)}i.childContextTypes={inline:a.bool};i.contextTypes={inline:a.bool};e.exports=i}),null);
__d("FilteredSearchSource",["AbstractSearchSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("AbstractSearchSource"));g=c&&c.prototype;function a(a,b){"use strict";g.constructor.call(this),this.$FilteredSearchSource1=a,this.$FilteredSearchSource2=b}a.prototype.bootstrapImpl=function(a){"use strict";this.$FilteredSearchSource2.bootstrap(a)};a.prototype.searchImpl=function(a,b,c){"use strict";var d=function(a,c){a=this.$FilteredSearchSource3(a,c),b(a,c)}.bind(this);this.$FilteredSearchSource2.search(a,d,c)};a.prototype.$FilteredSearchSource3=function(a,b){"use strict";var c=this.$FilteredSearchSource1;return a.filter(function(a){return c(a,b)})};e.exports=a}),null);
__d("filterCapitalizedNames",["TokenizeUtil"],(function(a,b,c,d,e,f){function a(a,b){return g(a)&&(b.length>=5||h(a,b))}function g(a){var b=a.getAuxiliaryData()||i;return!b.disableAutosuggest&&!!(a.getType()==="user"||b.connectedPage)}function h(a,c){return b("TokenizeUtil").isExactMatch(c,a.getTitle())}var i={};e.exports=a}),null);