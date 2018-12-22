if (self.CavalryLogger) { CavalryLogger.start_js(["Ao6tc"]); }

__d("PrivacyConst",[],(function(a,b,c,d,e,f){e.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,COMPOSER_CUSTOM_INCLUSION:1067668039947624,COMPOSER_CUSTOM_EXCLUSION:1082068668536535,CAN_LIKE_AND_COMMENT_PUBLIC_PROFILE_MEDIA:1269423589794183,CAN_TAG_PUBLIC_PROFILE_MEDIA:260920744319731,CAN_DOWNLOAD_PUBLIC_PROFILE_MEDIA:410249702663051,CAN_SHARE_PUBLIC_PROFILE_MEDIA:1648969422065270,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171,FACEREC_ENROLLMENT:1709697052669794,DEVICE_PHOTO_PROCESSING:1798505450455620,SPACES_VR_OFFLINE_VISIT_PRIVACY:351913698615451,RESHARES_ON_TIMELINE_VISIBILITY:230094651068076,CAN_POST_TRIBUTES:298481070877996,CAN_SEE_TRIBUTE_POSTS:1909416226028186,RESHARE_TO_STORIES:282421212606762},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2,FRIENDS_TAGGED:6},ExpansionType:{NONE:0,TAGS_ONLY:1}}}),null);
__d("TextDelightInComposerGating",["TextDelightConfig","TextDelightSurface","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("TextDelightConfig").composerOptions;a={checkGKForSurface:function(a){return a===b("TextDelightSurface").POST?b("gkx")("678313"):b("gkx")("678314")},isEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled},isHighlightEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled&&g.highlightEnabled},isBackspaceEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled&&g.backspaceEnabled},isXbuttonEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled&&g.xbuttonEnabled}};e.exports=a}),null);
__d("TextDelightInComposerLogger",["FunnelLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="TEXT_DELIGHTS_COMPOSER_FUNNEL",h="regex_matched",i="opt_out_tapped",j="opt_out_backspace",k="range_tapped";function l(a){var b=0;for(var c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c),b&=b;return b}a={startFunnelInstance:function(a,c){a=l(a);if(b("FunnelLogger").getFunnelInstance(g,a))return;b("FunnelLogger").startFunnel(g,a);b("FunnelLogger").addFunnelTag(g,a,c)},_appendAction:function(a,c,d,e,f){this.startFunnelInstance(a,f),b("FunnelLogger").appendActionWithPayload(g,l(a),c,{campaign_id:d,keyword:e})},regexMatched:function(a,b,c,d){this._appendAction(a,h,b,c,d)},optOutTapped:function(a,b,c,d){this._appendAction(a,i,b,c,d)},optOutBackspace:function(a,b,c,d){this._appendAction(a,j,b,c,d)},rangeTapped:function(a,b,c,d){this._appendAction(a,k,b,c,d)},endFunnel:function(a){b("FunnelLogger").endFunnel(g,l(a))}};e.exports=a}),null);
__d("AsyncUploadBase",["ArbiterMixin","AsyncRequest","AsyncResponse","BrowserSupport","Form","forEachObject","mixin","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;a.parseFiles=function(a){"use strict";__p&&__p();var c={};b("forEachObject")(a,function(a,b){if(Array.isArray(a))c[b]=a;else{c[b]=[];if(a instanceof window.FileList)for(var d=0;d<a.length;d++)c[b].push(a.item(d));else(a instanceof window.File||a instanceof window.Blob)&&c[b].push(a)}});return c};function a(a){"use strict";g.constructor.call(this),this._customHeader={},this._inFlight=!1,this._limit=10,this._suspended=!1,a&&this.setURI(a),this.setNetworkErrorRetryLimit(0)}a.prototype.setAllowCrossOrigin=function(a){"use strict";this._allowCrossOrigin=!!a;return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allowCrossPageTransition=!!a;return this};a.prototype.setCustomHttpHeader=function(a,b){"use strict";this._customHeader[a]=b;return this};a.prototype.setData=function(a){"use strict";this._data=a;return this};a.prototype.setLimit=function(a){"use strict";this._limit=a;return this};a.prototype.setNetworkErrorRetryLimit=function(a){"use strict";this._retryLimit=a;return this};a.prototype.setPreprocessHandler=function(a){"use strict";this._preprocessHandler=a;return this};a.prototype.setRelativeTo=function(a){"use strict";this._relativeTo=a;return this};a.prototype.setStatusElement=function(a){"use strict";this._statusElement=a;return this};a.prototype.setURI=function(a){"use strict";this._uri=a;return this};a.prototype.suspend=function(){"use strict";this._suspended=!0;return this};a.prototype.resume=function(){"use strict";this._suspended=!1;this._processQueue();return this};a.prototype.isUploading=function(){"use strict";return this._inFlight};a.prototype._createFileUpload=function(a,b,c){"use strict";return new h(a,b,c)};a.prototype._processQueue=function(){"use strict";__p&&__p();if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var a=this._waiting.shift(),b=this._preprocessHandler;b?b(a,this._processUpload.bind(this)):this._processUpload(a);this._pending.push(a)}};a.prototype._processUpload=function(a){"use strict";__p&&__p();var c=b("Form").createFormData(a.getData()||this._data);if(a.getFile()){c.append(a.getName(),a.getFile());var d=a.getFile().uploadID;d&&c.append("upload_id",d);a.getAdditionalData().forEach(function(a,b){return c.append(b,a)})}d=new(b("AsyncRequest"))().setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setURI(this._uri).setRawData(c).setStatusElement(this._statusElement).setHandler(this._success.bind(this,a)).setErrorHandler(this._failure.bind(this,a)).setUploadProgressHandler(this._progress.bind(this,a)).setInitialHandler(this._initial.bind(this,a));for(var e in this._customHeader)d.setRequestHeader(e,this._customHeader[e]);this._relativeTo&&d.setRelativeTo(this._relativeTo);d.send();a.setAsyncRequest(d);this._inFlight=!0;a.getRetryCount()||this.inform("start",a)};a.prototype._abort=function(a){"use strict";this._pending.indexOf(a)!==-1&&(b("removeFromArray")(this._pending,a),this._processQueue()),b("removeFromArray")(this._waiting,a),a.abort()};a.prototype._initial=function(a){"use strict";if(a.isAborted())return;this.inform("initial",a)};a.prototype._success=function(a,b){"use strict";if(a.isAborted()){this.inform("success_after_abort",b);return}this._complete(a);this.inform("success",a.handleSuccess(b));this._processQueue()};a.prototype._retryUpload=function(a){"use strict";a.increaseRetryCount(),this._processUpload(a)};a.prototype._failure=function(a,c){"use strict";if(a.isAborted())return;if(c.error===1004&&a.getRetryCount()<(this._retryLimit||0))return this._retryUpload(a);this._complete(a);this.inform("failure",a.handleFailure(c))!==!1&&b("AsyncResponse").defaultErrorHandler(c);this._processQueue()};a.prototype._progress=function(a,event){"use strict";if(a.isAborted())return;this.inform("progress",a.handleProgress(event))};a.prototype._complete=function(a){"use strict";b("removeFromArray")(this._pending,a),this._pending.length||(this._inFlight=!1)};a.isSupported=function(){"use strict";return b("BrowserSupport").hasFileAPI()};function h(a,b,c){"use strict";this._allowCrossOrigin=!1,this._allowCrossPageTransition=!1,this._additionalData=new Map(),this._success=null,this._response=null,this._progressEvent=null,this._request=null,this._numRetries=0,this._aborted=!1,this._name=a,this._file=b,this._data=c}h.prototype.getName=function(){"use strict";return this._name};h.prototype.getFile=function(){"use strict";return this._file};h.prototype.setFile=function(a){"use strict";this._file=a};h.prototype.getData=function(){"use strict";return this._data};h.prototype.getAdditionalData=function(){"use strict";return this._additionalData};h.prototype.isComplete=function(){"use strict";return this._success!==null};h.prototype.isSuccess=function(){"use strict";return this._success===!0};h.prototype.getResponse=function(){"use strict";return this._response};h.prototype.getProgressEvent=function(){"use strict";return this._progressEvent};h.prototype.setAsyncRequest=function(a){"use strict";this._request=a;return this};h.prototype.increaseRetryCount=function(){"use strict";this._numRetries++;return this};h.prototype.getRetryCount=function(){"use strict";return this._numRetries};h.prototype.isWaiting=function(){"use strict";return!this._request};h.prototype.isAborted=function(){"use strict";return this._aborted};h.prototype.abort=function(){"use strict";this._request=null,this._aborted=!0};h.prototype.handleSuccess=function(a){"use strict";this._success=!0;this._response=a;this._progressEvent=null;return this};h.prototype.handleFailure=function(a){"use strict";this._success=!1;this._response=a;this._progressEvent=null;return this};h.prototype.handleProgress=function(event){"use strict";this._progressEvent=event;return this};e.exports=a}),null);
__d("AsyncUploadRequest",["AsyncUploadBase"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("AsyncUploadBase"));g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this._files=null,this._uploads=[],this._fileLessUpload=null,b}a.prototype.setFiles=function(a){"use strict";this._files=b("AsyncUploadBase").parseFiles(a);return this};a.prototype.setAlwaysReturnResponse=function(a){"use strict";this._shouldAlwaysReturnResponse=a};a.prototype.abort=function(){"use strict";this._uploads.forEach(function(a){return this._abort(a)}.bind(this),this)};a.prototype.send=function(){"use strict";__p&&__p();if(this._inFlight)return;this._inFlight=!0;this._uploads=[];for(var a in this._files)this._files[a].forEach(function(b){this._uploads.push(this._createFileUpload(a,b))}.bind(this));this._waiting=this._uploads.slice(0);this._pending=[];this._uploads.length?this._processQueue():(this._fileLessUpload=this._createFileUpload(null,null),this._processUpload(this._fileLessUpload))};a.prototype._processQueue=function(){"use strict";g._processQueue.call(this);if(!this._pending.length&&!this._waiting.length){var a=this._uploads;a=this._shouldAlwaysReturnResponse?this._fileLessUpload!=null?{response:this._fileLessUpload.getResponse(),uploads:a}:{response:a[0].getResponse(),uploads:a}:a;this.inform("complete",a)}};a.isSupported=function(){"use strict";return b("AsyncUploadBase").isSupported()};e.exports=a}),null);
__d("DOMClone",[],(function(a,b,c,d,e,f){a={shallowClone:function(a){return g(a,!1)},deepClone:function(a){return g(a,!0)}};function g(a,b){a=a.cloneNode(b);typeof a.__FB_TOKEN!=="undefined"&&delete a.__FB_TOKEN;typeof a.__FB_STORE!=="undefined"&&delete a.__FB_STORE;return a}e.exports=a}),null);
__d("ErrorDialog",["Dialog","emptyFunction"],(function(a,b,c,d,e,f){var g={showAsyncError:function(a){try{return g.show(a.getErrorSummary(),a.getErrorDescription())}catch(b){alert(a)}},show:function(a,c,d,e){return new(b("Dialog"))().setTitle(a).setBody(c).setButtons([b("Dialog").OK]).setStackable(!0).setModal(!0).setHandler(d||b("emptyFunction")).setButtonsMessage(e||"").show()}};e.exports=g}),null);
__d("FileForm",["ArbiterMixin","AsyncRequest","AsyncResponse","AsyncUploadRequest","BehaviorsMixin","CurrentUser","DataStore","DOMQuery","Event","Form","JSONPTransport","Parent","URI","isElementNode","mixin","shield"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){var c={};a=b("DOMQuery").scry(a,'input[type="file"]');a.forEach(function(a){c[a.name]=a.files});return c}function i(a){a=b("DOMQuery").scry(a,'input[type="file"]');a.forEach(function(a){a.files=null})}c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));g=c&&c.prototype;function a(a,c,d){"use strict";__p&&__p();g.constructor.call(this);this._handleSubmit=function(event){if(event.isDefaultPrevented()||event.getTarget()!==this._form)return;if(this.inform("submit")===!1){event.prevent();return}this.submit(event)}.bind(this);this.initial=function(a){return this.inform("initial",{upload:a})}.bind(this);if(a.getAttribute("rel")==="async")throw new Error("FileForm cannot be used with Primer forms.");if((a.getAttribute("method")||"").toUpperCase()!=="POST")throw new Error("FileForm must be used with POST forms.");this._form=a;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding="multipart/form-data";this._files=null;this._customHeader={};c&&this.enableBehaviors(c);this._options=d||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setAllowCrossPageTransition(this._options.allowCrossPageTransition);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[b("Event").listen(document.documentElement,"submit",this._handleSubmit),b("Event").listen(this._form,"click",this._click.bind(this))];b("DataStore").set(this._form,"FileForm",this)}a.prototype.getRoot=function(){"use strict";return this._form};a.prototype.setAllowCrossOrigin=function(a){"use strict";this._allowCrossOrigin=!!a;return this};a.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allowCrossPageTransition=!!a;return this};a.prototype.setUploadInParallel=function(a){"use strict";this._uploadInParallel=!!a;return this};a.prototype.setConcurrentLimit=function(a){"use strict";this._concurrentLimit=a;return this};a.prototype.setCustomHttpHeader=function(a,b){"use strict";this._customHeader[a]=b;return this};a.prototype.setPreprocessHandler=function(a){"use strict";this._preprocessHandler=a;return this};a.prototype.setNetworkErrorRetryLimit=function(a){"use strict";this._retryLimit=a;return this};a.prototype.setFiles=function(a){"use strict";this._files=a;return this};a.prototype.canUseXHR=function(){"use strict";var a="FormData"in window;a&&(!new(b("URI"))(this._form.action).isSameOrigin()&&!this._allowCrossOrigin&&(!1,a=!1));return a};a.prototype._click=function(event){"use strict";__p&&__p();var a=event.getTarget();while(b("isElementNode")(a)){if(a.type==="submit"){this._clickTarget=a;setTimeout(this._unclick.bind(this),0);break}a=a.parentNode}};a.prototype._unclick=function(){"use strict";this._clickTarget=null};a.prototype._sendViaFrame=function(){"use strict";__p&&__p();var a=this._request=new(b("AsyncRequest"))();a.setStatusElement(this._getStatusElement());a.addStatusIndicator();a.setOption("useIframeTransport",!0);var c=a.handleResponse.bind(a);c=new(b("JSONPTransport"))("iframe",this._form.action,c);var d=c.getTransportFrame(),e=c.getRequestURI().addQueryData({__iframe:!0,__user:b("CurrentUser").getID()});this._form.setAttribute("action",e.toString());c.createContinuationForFileForm_DO_NOT_USE();this._form.setAttribute("target",d.name);a.setJSONPTransport(c);a.setURI(e);a.setHandler(this.success.bind(this,null));a.setErrorHandler(this.failure.bind(this,null));a.setInitialHandler(b("shield")(this.initial,this,null))};a.prototype._sendViaXHR=function(event){__p&&__p();var a=this,c;if(this._uploadInParallel&&b("AsyncUploadRequest").isSupported()){c=new(b("AsyncUploadRequest"))().setPreprocessHandler(this._preprocessHandler).setData(b("Form").serialize(this._form,this._clickTarget)).setNetworkErrorRetryLimit(this._retryLimit);for(var d in this._customHeader)c.setCustomHttpHeader(d,this._customHeader[d]);this._concurrentLimit&&c.setLimit(this._concurrentLimit);this._files?c.setFiles(this._files):c.setFiles(h(this._form));var e=[c.subscribe("progress",function(a,b){this.progress(b,b.getProgressEvent())}.bind(this)),c.subscribe("initial",function(a,b){this.initial(b)}.bind(this)),c.subscribe("success",function(a,b){this.success(b,b.getResponse())}.bind(this)),c.subscribe("start",function(a,b){this.inform("start",{upload:b})}.bind(this)),c.subscribe("failure",function(a,b){this.failure(b,b.getResponse());return!1}.bind(this)),c.subscribe("complete",function(){while(e.length)e.pop().unsubscribe()})]}else{var f,d,g;(function(){__p&&__p();var e,h=a._files;if(h){e=b("Form").createFormData(b("Form").serialize(a._form,a._clickTarget));f=b("AsyncUploadRequest").parseFiles(h);for(d in f)g=f[d],g.length===1?e.append(d,g[0]):(d=d+"[]",g.forEach(function(a){e.append(d,a)}))}else e=b("Form").createFormData(a._form,a._clickTarget);c=new(b("AsyncRequest"))().setRawData(e).setHandler(a.success.bind(a,null)).setErrorHandler(a.failure.bind(a,null)).setUploadProgressHandler(a.progress.bind(a,null)).setInitialHandler(b("shield")(a.initial,a,null));a.inform("start",{upload:null})})()}c.setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setRelativeTo(this._form).setStatusElement(this._getStatusElement()).setURI(this._form.action).send();this._request=c;event&&event.prevent()};a.prototype.forceSendViaXHR=function(){"use strict";return this._sendViaXHR(null)};a.prototype.success=function(a,c){"use strict";c={response:c,upload:a};this.inform("success",c)!==!1&&b("Event").fire(this._form,"success",c);this._cleanup()};a.prototype.failure=function(a,c){"use strict";a={response:c,upload:a};this.inform("failure",a)!==!1&&(b("Event").fire(this._form,"error",a)!==!1&&b("AsyncResponse").defaultErrorHandler(c));this._cleanup()};a.prototype.progress=function(a,event){"use strict";this.inform("progress",{event:event,upload:a})};a.prototype.abort=function(){"use strict";this._request&&(this._request.abort(),this._cleanup())};a.prototype.clear=function(){"use strict";i(this._form)};a.prototype.destroy=function(){"use strict";this._cleanup();while(this._listeners&&this._listeners.length)this._listeners.pop().remove();this._listeners=null;this._form.enctype=this._form.encoding=this._previousEncoding;b("DataStore").remove(this._form,"FileForm")};a.prototype.submit=function(event){"use strict";this.canUseXHR()?this._sendViaXHR(event):this._sendViaFrame()};a.prototype._cleanup=function(){"use strict";this._request=null};a.prototype._getStatusElement=function(){"use strict";return b("Parent").byClass(this._form,"stat_elem")||this._form};a.getInstance=function(a){"use strict";return b("DataStore").get(a,"FileForm")};Object.assign(a,{EVENTS:["start","submit","initial","progress","success","failure"]});e.exports=a}),null);
__d("FileInput",["cx","ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("UserAgent_DEPRECATED").ie();c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));h=c&&c.prototype;function a(a,c,d){"use strict";__p&&__p();h.constructor.call(this);this.container=a;this.control=c;a=b("DOM").scry(this.container,"a")[0];a&&a.removeAttribute("href");c=b("DOM").create("div",{className:"_3jk"},d);b("DOM").appendContent(this.control,c);this._boundHandleChange=this._handleChange.bind(this);i&&(this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this));this._setInputElement(d)}a.prototype.getValue=function(){"use strict";return this.input.value};a.prototype.getInput=function(){"use strict";return this.input};a.prototype.getContainer=function(){"use strict";return this.container};a.prototype.getControl=function(){"use strict";return this.control};a.prototype.clear=function(){"use strict";this.input.value="";if(this.input.value!==""){var a=b("DOMClone").deepClone(this.input);b("DOM").replace(this.input,a);this._setInputElement(a)}};a.prototype.destroy=function(){"use strict";this._focus.remove(),this._focus=null,this._listener.remove(),this._listener=null,i&&(this._IEKeyDownListener.remove(),this._IEKeyDownListener=null),this.container=null,this.control=null,this.input=null};a.prototype._setInputElement=function(a){"use strict";this.input=a,this._focus&&this._focus.remove(),this._focus=b("Focus").relocate(a,this.control),this._listener&&this._listener.remove(),this._listener=b("Event").listen(a,"change",this._boundHandleChange),i&&(this._IEKeyDownListener&&this._IEKeyDownListener.remove(),this._IEKeyDownListener=b("Event").listen(a,"keydown",this._boundHandleIEKeyDown))};a.prototype._handleChange=function(event){"use strict";this.inform("change",event);if(this.input){var a=this.input.form;a&&i<9&&b("Event").fire(a,"change",event)}};a.prototype._handleIEKeyDown=function(event){"use strict";if(event.keyCode===b("Keys").RETURN){event.preventDefault();var a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0);this.input.dispatchEvent(a)}};e.exports=a}),null);
__d("PhotosUploadWaterfallMixin",["PhotosUploadWaterfall","emptyFunction"],(function(a,b,c,d,e,f){a=b("emptyFunction");c={getUploaderApp:a,getWaterfallID:a,getAdditionalData:function(){return{}},logWaterfallStep:function(a,c,d){b("PhotosUploadWaterfall").sendSignal(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)},logWaterfallStepUsingBanzai:function(a,c,d){b("PhotosUploadWaterfall").sendBanzai(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)}};e.exports=c}),null);
__d("PhotoSourceTypes",["keyMirror"],(function(a,b,c,d,e,f){e.exports=b("keyMirror")({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null})}),null);
__d("BaseSelectionContainer",[],(function(a,b,c,d,e,f){__p&&__p();var g=0;function a(){"use strict";this.$1=(g++).toString()}a.prototype.getSelectionContainerID=function(){"use strict";return this.$1};a.prototype.getSource=function(){"use strict";throw new Error("This must be implemented by the child class")};a.prototype.getName=function(){"use strict";return null};a.prototype.getSize=function(){"use strict";return null};a.prototype.hasPlaceholderUI=function(){"use strict";throw new Error("This must be implemented by the child class")};e.exports=a}),null);
__d("SelectionSource",["PhotoSourceTypes"],(function(a,b,c,d,e,f){var g={FILE:"file",FLASH:"flash",VAULT:"vault",SUGGESTIONS:"suggestions",POSTED_PHOTOS:"posted_photos",PAGES_POSTED_PHOTOS:"pages_posted_photos",toPhotoSourceType:function(a){switch(a){case g.FILE:case g.FLASH:return b("PhotoSourceTypes").COMPUTER;case g.VAULT:return b("PhotoSourceTypes").SYNCED_PHOTOS;case g.SUGGESTIONS:return b("PhotoSourceTypes").SUGGESTIONS;case g.POSTED_PHOTOS:return b("PhotoSourceTypes").POSTED_PHOTOS;case g.PAGES_POSTED_PHOTOS:return b("PhotoSourceTypes").PAGES_POSTED_PHOTOS;default:throw new Error("No mapping for SelectionSource: "+a)}}};e.exports=g}),null);
__d("FileSelectionContainer",["BaseSelectionContainer","SelectionSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("BaseSelectionContainer"));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this.$FileSelectionContainer1=a}a.prototype.getFile=function(){"use strict";return this.$FileSelectionContainer1};a.prototype.getSource=function(){"use strict";return b("SelectionSource").FILE};a.prototype.getName=function(){"use strict";return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name};a.prototype.getSize=function(){"use strict";return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size};a.prototype.hasPlaceholderUI=function(){"use strict";return!1};e.exports=a}),null);
__d("FilePickerEvent",[],(function(a,b,c,d,e,f){e.exports={BEGIN:"FilePickerEvent/BEGIN",SELECT_START:"FilePickerEvent/SELECT_START",SELECTED:"FilePickerEvent/SELECTED_FILES",ALBUM_LIMIT_EXCEEDED:"FilePickerEvent/ALBUM_LIMIT_EXCEEDED",SESSION_LIMIT_EXCEEDED:"FilePickerEvent/SESSION_LIMIT_EXCEEDED",SELECT_CANCELED:"FilePickerEvent/SELECT_CANCELED",FALLBACK:"FilePickerEvent/FALLBACK"}}),null);
__d("PUWApplications",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WEB_SIMPLE:"web_simple",WEB_FLASH:"web_flash",WEB_HTML5:"web_html5",WEB_COMPOSER:"web_composer",WEB_ARCHIVE:"web_archive",WEB_MESSENGER:"web_messenger",WEB_OMNIPICKER:"web_omnipicker",WEB_MUSE_OMNIPICKER:"web_muse_omnipicker",WEB_SAY_THANKS:"web_say_thanks",WEB_GOODWILL_CAMPAIGN_OMNIPICKER:"web_goodwill_campaign_omnipicker",WEB_PRODUCT_PHOTO_OMNIPICKER:"web_product_photo_omnipicker",WEB_PAGES_MESSENGER:"web_pages_messenger",WEB_M_ZERO:"web_m_zero",WEB_M_BASIC:"web_m_basic",WEB_M_TOUCH:"web_m_touch",WEB_REACT_COMPOSER:"web_react_composer",MOBILE_FB4IOS:"mobile_fb4ios",MOBILE_FB4IOS_SNAP:"mobile_fb4ios_snap",MOBILE_FB4A:"mobile_fb4a",MOBILE_PMA_ANDROID:"mobile_pma_android",MOBILE_PMA_IOS:"mobile_pma_ios",THIRD_PARTY:"third_party"})}),null);
__d("PUWSteps",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLIENT_FLOW_BEGIN:"client_flow_begin",CLIENT_SELECT_BEGIN:"client_select_begin",CLIENT_SELECT_SUCCESS:"client_select_success",CLIENT_SELECT_CANCEL:"client_select_cancel",CLIENT_SELECT_FAIL:"client_select_fail",CLIENT_FLOW_POST:"client_flow_post",CLIENT_TRANSFER_BATCH_BEGIN:"client_transfer_batch_begin",CLIENT_UPLOAD_BEGIN:"client_upload_begin",CLIENT_ATTACH_PHOTO:"client_attach_photo",CLIENT_PROCESS_BEGIN:"client_process_begin",CLIENT_PROCESS_SUCCESS:"client_process_success",CLIENT_PROCESS_CANCEL:"client_process_cancel",CLIENT_PROCESS_SKIP:"client_process_skip",CLIENT_PROCESS_FAIL:"client_process_fail",CLIENT_PROCESS_UNAVAILABLE:"client_process_unavailable",CLIENT_SPHERICAL_CHECK_SUCCESS:"client_spherical_check_success",CLIENT_SPHERICAL_CHECK_FAIL:"client_spherical_check_fail",CLIENT_TRANSFER_ENQUEUE:"client_transfer_enqueue",CLIENT_TRANSFER_BEGIN:"client_transfer_begin",CLIENT_TRANSFER_SUCCESS:"client_transfer_success",CLIENT_TRANSFER_CANCEL:"client_transfer_cancel",CLIENT_TRANSFER_FAIL:"client_transfer_fail",CLIENT_TRANSFER_MANUAL_RETRY:"client_transfer_manual_retry",CLIENT_UPLOAD_SUCCESS:"client_upload_success",CLIENT_UPLOAD_FAIL:"client_upload_fail",CLIENT_UPLOAD_CANCEL:"client_upload_cancel",CLIENT_UPLOAD_REMOVE:"client_upload_remove",CLIENT_FACEREC_BEGIN:"client_facerec_begin",CLIENT_FACEREC_SUCCESS:"client_facerec_success",CLIENT_FACEREC_FAIL:"client_facerec_fail",CLIENT_PHOTO_PREVIEW_OPEN:"client_photo_preview_open",CLIENT_PHOTO_PREVIEW_CLOSE:"client_photo_preview_close",CLIENT_TRANSFER_BATCH_SUCCESS:"client_transfer_batch_success",CLIENT_TRANSFER_BATCH_CANCEL:"client_transfer_batch_cancel",CLIENT_TRANSFER_BATCH_FAIL:"client_transfer_batch_fail",CLIENT_PUBLISH_ENQUEUE:"client_publish_enqueue",CLIENT_PUBLISH_BEGIN:"client_publish_begin",CLIENT_PUBLISH_SUCCESS:"client_publish_success",CLIENT_PUBLISH_FAIL:"client_publish_fail",CLIENT_ATTEMPT_FAIL:"client_attempt_fail",CLIENT_FLOW_SUCCESS:"client_flow_success",CLIENT_FLOW_FATAL:"client_flow_fatal",CLIENT_FLOW_GIVEUP:"client_flow_giveup",CLIENT_FLOW_CANCEL:"client_flow_cancel",CLIENT_FLOW_FAIL:"client_flow_fail",CLIENT_FLOW_INCOMPLETE:"client_flow_incomplete",CLIENT_ATTEMPT_INCOMPLETE:"client_attempt_incomplete",CLIENT_FLOW_RETRY:"client_flow_retry",CLIENT_ATTEMPT_RETRY:"client_attempt_retry",CLIENT_DIAGNOSTIC:"client_diagnostic",CLIENT_QUALITY_SWITCH:"client_quality_switch",CLIENT_CANCEL_SURVEY:"client_cancel_survey",CLIENT_PHOTO_EDIT_BEGIN:"client_photo_edit_begin",CLIENT_PHOTO_EDIT_SUCCESS:"client_photo_edit_success",SERVER_UPLOAD_BEGIN:"server_upload_begin",SERVER_UPLOAD_SUCCESS:"server_upload_success",SERVER_UPLOAD_FAIL:"server_upload_fail",SERVER_PUBLISH_BEGIN:"server_publish_begin",SERVER_PUBLISH_SUCCESS:"server_publish_success",SERVER_PUBLISH_FAIL:"server_publish_fail",SERVER_RECEIVER_BEGIN:"server_receiver_begin",SERVER_RECEIVER_PUBLISH_BEGIN:"server_receiver_publish_begin",SERVER_SENTRY_RESTRICTION:"server_sentry_restriction"})}),null);
__d("PhotosUploadWaterfallXMixin",["invariant","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","randomInt"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new Map();function i(a,c){var d={};a.client_time=Math.round(Date.now()/1e3);b("PhotosUploadWaterfallXConfig").retryBanzai&&(d.retry=!0,a.nonce=b("randomInt")(4294967296));b("Banzai").post(b("PhotosUploadWaterfallXConfig").banzaiRoute,a,d);c&&setTimeout(c,0)}function j(a,c){if(b("PhotosUploadWaterfallXConfig").useBanzai)i(a,c);else{a=new(b("AsyncSignal"))(b("PhotosUploadWaterfallXConfig").loggingEndpoint,{data:JSON.stringify(a)}).setHandler(c);b("PhotosUploadWaterfallXConfig").timeout&&a.setTimeout(10*1e3);a.send()}}e.exports={logStep:function(a,b,c){var d=this.getWaterfallID&&this.getWaterfallID(),e=this.getWaterfallAppName&&this.getWaterfallAppName();if(!d||!e)return;j(babelHelpers["extends"]({step:a,qn:d,uploader:e,ref:this.getWaterfallSource&&this.getWaterfallSource()},b),c)},logPUWStep:function(a,b,c,d,e,f,g){if(f&&f.logOncePerSession){h.has(b)||h.set(b,new Set());if(h.get(b).has(a))return;h.get(b).add(a)}j(Object.assign({step:a,qn:b,uploader:c,ref:d},e),g)}}}),null);
__d("HTML5FilePicker",["cx","ArbiterMixin","BrowserSupport","CSS","DOM","FilePickerEvent","FileSelectionContainer","Keys","Parent","PhotosUploadID","PhotosUploadWaterfall","PhotosUploadWaterfallMixin","PhotosUploadWaterfallXMixin","PUWApplications","PUWSteps","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();this._config=babelHelpers["extends"]({accept:undefined,multiple:undefined},c);this._button=a;this._beginInformed=!1;if(!b("BrowserSupport").hasFileAPI()){this.logStep(b("PUWSteps").CLIENT_PROCESS_UNAVAILABLE,{error:"no_file_api"});if(Object.prototype.hasOwnProperty.call(this._config,"fallbackFunction")){this._config.fallbackFunction.call(this);return}return}this._subscriptions=[];c=this._config.input||b("DOM").create("input",{type:"file",className:"_n"});Object.prototype.hasOwnProperty.call(this._config,"accept")&&(c.accept=this._config.accept);Object.prototype.hasOwnProperty.call(this._config,"multiple")&&(c.multiple=this._config.multiple);Object.prototype.hasOwnProperty.call(this._config,"title")&&(c.title=this._config.title);a=b("DOM").create("label",{className:"accessible_elem","for":b("getOrCreateDOMID")(c)},c.title);a=b("DOM").create("div",{className:"_3jk"},[a,c]);b("CSS").addClass(this._button,"_m");b("DOM").appendContent(this._button,a);this._button.setAttribute("rel","ignore");this._bindInput(c);this._button.onkeydown=function(event){event.keyCode===b("Keys").RETURN&&(this._input.click(),event&&event.stopPropagation&&event.stopPropagation())}.bind(this);a=b("Parent").byClass(this._button,"addPhotosDisabled");a&&(b("CSS").removeClass(a,"addPhotosDisabled"),b("CSS").addClass(a,"addPhotosEnabled"))}Object.assign(a.prototype,b("ArbiterMixin"),b("PhotosUploadWaterfallMixin"),b("PhotosUploadWaterfallXMixin"),{getUploaderApp:function(){return b("PhotosUploadWaterfall").APP_HTML5},getWaterfallID:function(){return this._config.qn},getWaterfallAppName:function(){return b("PUWApplications").WEB_HTML5},getWaterfallSource:function(){return this._config.ref},getSwfID:function(){return null},_constructFileList:function(){var a=Array.from(this._input.files);a.forEach(function(a){a.uploadID=b("PhotosUploadID").getNewID()});return a},_constructFileSelectionContainerList:function(){var a=Array.from(this._input.files);return a.map(function(a){return new(b("FileSelectionContainer"))(a)})},cleanup:function(){this._input&&(this._input.onclick=null,this._input.onchange=null),this._button&&(this._button.onkeydown=null)},_bindInput:function(a){this.cleanup(),a.onclick=function(){this.logWaterfallStep(b("PhotosUploadWaterfall").SELECT_START),this._beginInformed||(this._beginInformed=!0,this.inform(b("FilePickerEvent").BEGIN||"FilePickerEvent/BEGIN")),this.inform(b("FilePickerEvent").SELECT_START)}.bind(this),a.onchange=function(){this.inform(b("FilePickerEvent").SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()}),this._bindInput(this._input.cloneNode(!1))}.bind(this),this._input&&b("DOM").replace(this._input,a),this._input=a}});e.exports=a}),null);
__d("PrivacySelectorNewDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();var g,h="selector";g=babelHelpers.inherits(a,b("Dispatcher_DEPRECATED"));g&&g.prototype;a.prototype.handleUpdateFromSelector=function(a){"use strict";this.dispatch(babelHelpers["extends"]({payloadSource:h},a))};function a(){"use strict";g.apply(this,arguments)}c=new a();e.exports=c}),null);
__d("FBStoriesPrivacySelectorLoadingPlaceholder.react",["fbt","React","XUIButton.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{size:"medium",haschevron:!1,label:g._("Loading..."),image:b("React").createElement(b("XUISpinner.react"),null),onClick:function(a){a.stopPropagation()}}))};e.exports=a}),null);
__d("FBStoriesPrivacySelectorLoadingContainerBootloader.react",["BootloadOnRender.react","FBStoriesPrivacySelectorLoadingPlaceholder.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a){return b("React").createElement(b("BootloadOnRender.react"),{loader:b("JSResource")("FBStoriesPrivacySelectorLoadingContainer.react").__setRef("FBStoriesPrivacySelectorLoadingContainerBootloader.react"),placeholder:b("React").createElement(b("FBStoriesPrivacySelectorLoadingPlaceholder.react"),null),component:b("React").createElement(b("LazyComponent.react"),a)})};e.exports=a}),null);
__d("submitForm",["DOM"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.querySelector('input[type="submit"]');c!=null?c.click():(c=b("DOM").create("input",{type:"submit",className:"hidden_elem"}),b("DOM").appendContent(a,c),c.click(),b("DOM").remove(c))};e.exports=a}),null);
__d("PublishingToolsSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS_CANVAS_LANDING_PAGE:"ads_canvas_landing_page",COPYRIGHT_MATCH_PERMALINK:"copyright_match_permalink",DRAFTS_POSTS_TIMELINE_PAGELET:"draft_timeline_pagelet",EXPIRING_POSTS_TIMELINE_PAGELET:"expiring_timeline_pagelet",IA_URL_GROWTH_QP:"ia_url_growth_qp",NOTIFICATION:"notif",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",PAGES_MANAGER_BAR:"pages_manager_bar",PAYMENT_SETTINGS_HEADER:"payment_settings_header",SCHEDULED_POSTS_TIMELINE_PAGELET:"scheduled_timeline_pagelet",UNKNOWN:"unknown",VIDEO_ASSET_INSIGHTS_PERMALINK:"video_asset_insights_permalink",VIDEO_EDIT_PERMALINK:"video_edit_permalink",VIDEO_INSIGHTS:"video_insights",VIDEO_LIBRARY_MEGAPHONE:"video_library_megaphone",VIDEO_PAGE_VIDEO_LIST:"video_page_video_list",VIDEO_PAGE_VIDEO_TAB:"video_page_video_tab",VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",VIDEO_UPLOAD_NOTIF:"video_upload_notif",VIDEOS_HUB:"videos_hub",VIDEOS_YOU_CAN_USE_TIMELINE_PAGELET:"crossposted_timeline_pagelet",LEAD_GEN_DOWNLOAD_DIALOG_FORMS_LIB:"lead_gen_download_dialog_forms_lib",LEAD_GEN_DOWNLOAD_DIALOG_NAM:"lead_gen_download_dialog_nam",LEAD_GEN_DOWNLOAD_DIALOG_NAM_LINK:"lead_gen_download_dialog_nam_link",LEAD_GEN_DOWNLOAD_DIALOG_PE:"lead_gen_download_dialog_pe",LEAD_GEN_DOWNLOAD_DIALOG_PE_LINK:"lead_gen_download_dialog_pe_link",LEAD_GEN_DOWNLOAD_DIALOG_OTHER:"lead_gen_download_dialog_other",LEAD_GEN_FORM_LIBRARY_NOTICE:"lead_gen_form_library_notice",LEAD_GEN_INLINE_FORM_SELECTOR:"lead_gen_inline_form_selector",LEAD_GEN_DOWNLOAD_DIALOG_CONNECT_CRM:"lead_gen_download_dialog_connect_crm",LEAD_GEN_ORGANIC:"lead_gen_organic",WWW_CHATBAR:"www_chatbar",PAGE_EVENTS_TAB:"page_events_tab",PAGES_QR_CODE_DOWNLOAD_AYMT:"pages_qr_code_download_aymt"})}),null);
__d("XPagesManagerPublishingToolsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/publishing_tools/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},current_page:{type:"Int"},section:{type:"String"},source:{type:"Enum",enumType:1},sourceID:{type:"String"},refSource:{type:"Enum",enumType:1},initial_action_data:{type:"StringToStringMap"},initial_data:{type:"StringToStringMap"}})}),null);
__d("XPrivacyCustomDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/privacy/custom_dialog/",{id:{type:"String",required:!0},option_id:{type:"String",required:!0},autosave:{type:"Bool",defaultValue:!1},explain_tags:{type:"Bool",defaultValue:!1},limit_community:{type:"Bool",defaultValue:!1},limit_facebook:{type:"Bool",defaultValue:!1},limit_fof:{type:"Bool",defaultValue:!1},limit_tagexpand:{type:"Bool",defaultValue:!1},is_new_privacy_selector:{type:"Bool",defaultValue:!1},render_location_enum:{type:"Enum",enumType:1},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},saved_custom_opt_in:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);