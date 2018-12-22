if (self.CavalryLogger) { CavalryLogger.start_js(["3kRkE"]); }

__d("FacepileRoundedProfile.react",["cx","HovercardLink","Image.react","Link.react","React","Tooltip.react","URI","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.borderColor,d=a.getCustomActivationLink,e=a.getCustomHovercardLink,f=a.hoverBehavior,g=a.imageSize,h=a.isClickable;a=a.profile;var i=this.props.style,j=a.glyph_size,k=a.image_src,l=a.entity_id;i=babelHelpers["extends"]({},i,{borderColor:c,height:g+"px",width:g+"px"});c={};j&&j<g&&(c.margin=(g-j)/2+"px");var m="_4mnq";a.className&&(m=b("joinClasses")(m,a.className));m=b("React").createElement("div",{className:m,style:i},b("React").createElement(b("Image.react"),{className:"_1h_6",height:j||g,src:k,style:c,width:j||g}));f==="name"&&a.name&&(m=b("React").createElement(b("Tooltip.react"),{className:"_4mns",tooltip:a.name},m));i=f==="hovercard";if(l&&(h||i)){k={};i&&(k["data-hovercard"]=e(l));h&&(k.href=d(l));m=b("React").createElement(b("Link.react"),k,m)}return m};function a(){h.apply(this,arguments)}a.defaultProps={getCustomActivationLink:function(a){return new(b("URI"))("/"+a)},getCustomHovercardLink:function(a){return b("HovercardLink").constructEndpoint({id:a})},hoverBehavior:"none",imageSize:32,isClickable:!1};e.exports=a}),null);
__d("FacepileRoundedCount.react",["cx","fbt","ix","FacepileRoundedProfile.react","Image.react","React","Tooltip.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;var k=.3438;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.backgroundColor,d=a.borderColor,e=a.color,f=a.count,g=a.profiles,j=a.size,l=a.style,m=a.use;a=a.shouldHideCountToolTip;var n=g.length;f=f||n;c={backgroundColor:c,borderColor:d,color:e,borderRadius:j,fontSize:j*k+"px",height:j,minWidth:j};e=b("React").createElement("span",{className:"_4mnq _34n6",style:c},b("React").createElement("span",{className:"_40vg"},"+"+f));if(m==="image"){var o=null;switch(j){case 16:o=i("409177");break;case 20:o=i("409178");break;case 28:o=i("409179");break;case 32:o=i("409180");break;case 48:o=i("409181");break}o&&(e=b("React").createElement("div",{className:"_4mnq",style:c},b("React").createElement(b("Image.react"),{className:"_1h_6",src:o})))}else if(m==="face"&&n>0){c={left:"50%",marginLeft:"-"+j/2+"px"};e=b("React").createElement("div",{className:"_ric",style:{borderColor:d}},b("React").createElement(b("FacepileRoundedProfile.react"),{borderColor:d,imageSize:j,profile:g[0],style:c}),e)}o=f-n;m=g.map(function(a){return a.name}).filter(Boolean);d=n>0?m.join("\n")+"\n":"";if(o>0){j=h._({"*":"and {count} others.","_1":"and {count} other."},[h._param("count",o),h._plural(o)]);d+=j.toString()}c=b("React").createElement("div",{style:{whiteSpace:"pre-wrap"}},d);return b("React").createElement(b("Tooltip.react"),{className:"_4mns",style:l,tooltip:a?null:c},e)};function a(){j.apply(this,arguments)}a.defaultProps={size:32,use:"count"};a.propTypes={backgroundColor:c.string,borderColor:c.string,color:c.string,className:c.string,count:c.number,use:c.oneOf(["count","face","image"]),profiles:c.arrayOf(c.shape({className:c.string,entity_id:c.string,glyph_size:c.number,image_src:c.any.isRequired,name:c.string})).isRequired,size:c.number,style:c.object,shouldHideCountToolTip:c.bool};e.exports=a}),null);
__d("FacepileRounded.react",["cx","FacepileRoundedCount.react","FacepileRoundedProfile.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=.3125;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.borderColor,d=a.direction,e=a.getCustomActivationLink,f=a.getCustomHovercardLink,g=a.hoverBehavior,h=a.imageSize,j=a.isClickable,k=a.message,l=a.numProfilesToDisplay,m=a.overflowBackgroundColor,n=a.overflowTextColor,o=a.profiles,p=a.remainingProfilesCount,q=a.remainingProfilesCountStyle,r=a.spacing;a=a.shouldHideCountToolTip;var s=d==="descending";d=o.length;var t=null,u=this.props.className;u=b("joinClasses")("_4mnv"+(s?" _4wh8":""),u);k&&(t=b("React").createElement("div",{className:"_4mnt"},k));k=o;var v=null;l&&l<d&&(k=o.slice(0,l),v=o.slice(l,d));var w={getCustomActivationLink:e,getCustomHovercardLink:f,hoverBehavior:g,imageSize:h,isClickable:j},x=(r!=null?r:-(h*i))+"px";l=k.map(function(a,d){var e={zIndex:s?o.length-d:d};d>0&&(e.marginLeft=x);return b("React").createElement(b("FacepileRoundedProfile.react"),babelHelpers["extends"]({borderColor:c,key:d,profile:a,style:e},w))});e=null;v&&(e=b("React").createElement(b("FacepileRoundedCount.react"),{backgroundColor:m,borderColor:c,color:n,count:p,profiles:v,size:h,shouldHideCountToolTip:a,style:{marginLeft:x,zIndex:s?0:d},use:q}));return b("React").createElement("div",{className:u},b("React").createElement("div",{className:"_4mnw"},l,e),t)};function a(){h.apply(this,arguments)}a.defaultProps={direction:"ascending",hoverBehavior:"none",imageSize:32,isClickable:!1,isOverlapDisabled:!1,remainingProfilesCountStyle:"count"};e.exports=a}),null);
__d("FBOverlayElement.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;var i={horizontal:{left:"_32rg",right:"_32rh",fit:"_32rg _32rh",center:"_1cy5"},vertical:{top:"_32ri",bottom:"_32rj",fit:"_32ri _32rj",middle:"_1cy6"}};h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){"use strict";var a=b("React").Children.only(this.props.children),c=b("joinClasses")(a.props.className,"_32rk",i.horizontal[this.props.horizontal],i.vertical[this.props.vertical]);return b("React").cloneElement(a,{className:c})};function a(){"use strict";h.apply(this,arguments)}a.propTypes={horizontal:c.oneOf(["left","right","fit","center"]),vertical:c.oneOf(["top","bottom","fit","middle"])};a.defaultProps={horizontal:"fit",vertical:"fit"};e.exports=a}),null);
__d("SUIDropdownButtonUniform.fds",["ix","cssVar","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";a={use:{"default":{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("481883"),srcDisabled:g("482773"),style:{marginRight:"-2px"}}),disabled:{background:"#EBEDF0",borderColor:"#DADDE1",color:"#BEC3C9"}},confirm:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("483254"),style:{marginRight:"-2px"}}),disabled:{background:"#AAC9FF",borderColor:"#AAC9FF",color:"#FFFFFF"}},special:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("483254"),style:{marginRight:"-2px"}}),disabled:{background:"#86DF81",borderColor:"#86DF81",color:"#FFFFFF"}}},padding:"12px"};e.exports=a}),null);
__d("SUIErrorUniform.fds",["ix","cssVar","Image.react","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";a={error:{borderColor:"#FA383E",icon:b("React").createElement(b("Image.react"),{src:g("480267")})},warning:{borderColor:"#FFBA00",icon:b("React").createElement(b("Image.react"),{src:g("480789")})}};e.exports=a}),null);
__d("SUITooltipUniform.fds",["cssVar","createBUITypeStyle"],(function(a,b,c,d,e,f,g){"use strict";a={backgroundColor:"#1C1E21",color:"#FFFFFF",typeStyle:b("createBUITypeStyle")({color:"#FFFFFF",fontSize:"12px",fontWeight:"bold"})};e.exports=a}),null);
__d("FDSPrivateDropdownButtonTheme.fds18",["SUIButtonUniform.fds","SUIDropdownButtonUniform.fds","SUIErrorUniform.fds","SUITooltipUniform.fds","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";a=b("makeSUIFDSPrivateTheme")("FDSDropdownButton",{SUIButton:b("SUIButtonUniform.fds"),SUIError:b("SUIErrorUniform.fds"),SUISelectorButton:b("SUIDropdownButtonUniform.fds"),SUITooltip:b("SUITooltipUniform.fds")});e.exports=a}),null);
__d("FDSPrivateDropdownButtonThemeContext",["FDSPrivateDropdownButtonTheme.fds18","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(b("FDSPrivateDropdownButtonTheme.fds18"))}),null);
__d("FDSDropdownButton.react",["FDSPrivateDropdownButtonThemeContext","React","SUIBorderUtils","SUISelectorButton.react","makeFDSStandardComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("FDSPrivateDropdownButtonThemeContext").Consumer,null,function(a){return b("React").createElement(b("SUISelectorButton.react"),{"aria-haspopup":this.props["aria-haspopup"],borderedSides:this.props.borderedSides,"data-testid":this.props["data-testid"],"data-tooltip-position":this.props.tooltipPosition,disabled:this.props.isDisabled,errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,hasHoverState:this.props.hasHoverState,height:h(this.props.size),icon:this.props.icon,id:this.props.id,isDepressed:this.props.isDepressed,isMenuShown:this.props.isMenuShown,label:this.props.label,labelIsHidden:this.props.labelIsHidden,margin:this.props.margin,maxWidth:this.props.maxWidth,onBlur:this.props.onBlur,onClick:this.props.onClick,onFocus:this.props.onFocus,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,onMouseDown:this.props.onMouseDown,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onMouseUp:this.props.onMouseUp,rel:this.props.rel,roundedCorners:this.props.roundedCorners,target:this.props.target,textAlign:this.props.textAlign,theme:a,tooltip:this.props.tooltip,tooltipDelay:this.props.tooltipDelay,type:this.props.type,use:i(this.props.use),warningMessage:this.props.warningMessage,width:this.props.width})}.bind(this))};function a(){g.apply(this,arguments)}a.defaultProps={errorTooltipPosition:"above",borderedSides:b("SUIBorderUtils").ALL_SIDES,isDisabled:!1,labelIsHidden:!1,roundedCorners:b("SUIBorderUtils").ALL_CORNERS,size:"medium",type:"button",use:"default",hasHoverState:!1,isMenuShown:!1};function h(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}function i(a){return a==="primary"?"confirm":a}e.exports=b("makeFDSStandardComponent")("FDSDropdownButton",a)}),null);
__d("XUINotice.react",["ix","cx","fbt","Image.react","React","XUICloseButton.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k={notify:{altText:i._("Notice"),className:null,iconSrc:g("504080")},success:{altText:i._("Success"),className:"_3qh4",iconSrc:g("505224")},warn:{altText:i._("Warning"),className:"_585o",iconSrc:g("478325")},recommend:{altText:i._("Recommend"),className:"_1wpa",iconSrc:g("478325")},quiet:{altText:i._("Quiet"),className:"_5d83",iconSrc:g("504080")}};j=babelHelpers.inherits(l,b("React").Component);j&&j.prototype;l.prototype.render=function(){var a=this.props,c=a.children,d=a.className,e=a.onDismiss,f=a.use;a=babelHelpers.objectWithoutProperties(a,["children","className","onDismiss","use"]);f=f==null?l.defaultProps.use:f;f=k[f];d=b("joinClasses")("_585n",f.className,d);var g=null;e&&(g=b("React").createElement(b("XUICloseButton.react"),{className:"_585q",href:"#",onClick:e}));e="_585r"+(e?" _2i-a":"")+(this.props.size==="medium"?" _50f4":"")+(this.props.size==="small"?" _50f3":"");return b("React").createElement("div",babelHelpers["extends"]({},a,{className:d}),b("React").createElement(b("Image.react"),{alt:f.altText,className:"_585p",src:f.iconSrc}),g,b("React").createElement("div",{className:e},c))};function l(){j.apply(this,arguments)}l.defaultProps={use:"notify",size:"medium"};e.exports=l}),null);
__d("PhotoZoomCropImageConstants",[],(function(a,b,c,d,e,f){"use strict";a={TOP:"top",MIDDLE:"middle"};e.exports.DRAG_INSTRUCTION_POSITION=a}),null);
__d("SpotlightProfilePicCropOptions",[],(function(a,b,c,d,e,f){__p&&__p();var g=2.5,h=.8,i=320,j={getOptions:function(a,b,c){c===void 0&&(c=i);var d={},e=Math.min(b.x,b.y),f,j,k=a.facebox;k?(j=Math.max(k.size.x*b.x,k.size.y*b.y)*g,f=k.center):(j=h*e,a.focus&&(f=a.focus));k=b.x/a.original.width;d.height=d.width=Math.min(Math.max(j,c*k),e);f&&(d.center_x=Math.min(Math.max(f.x*b.x,d.width/2),b.x-d.width/2),d.center_y=Math.min(Math.max(f.y*b.y,d.height/2),b.y-d.height/2));return d},getOptionsAsRatio:function(a,b,c){c===void 0&&(c=i);a=j.getOptions(a,b,c);c=Math.min(b.x,b.y);return{center:{x:a.center_x?a.center_x/b.x:.5,y:a.center_y?a.center_y/b.y:.5},size:{x:a.width/c,y:a.height/c}}}};e.exports=j}),null);
__d("PhotoZoomCropDimensions",["BasicVector","SpotlightProfilePicCropOptions","clamp"],(function(a,b,c,d,e,f){__p&&__p();var g=320,h=.5,i=.5,j=180,k=.05,l=3;function m(a,b){return Number(a.toFixed(b||l))}n.prototype.clone=function(){"use strict";return new n(this.$2).setSize(this.$3.x,this.$3.y).setSmallestSize(this.$4.x,this.$4.y).setCenter(this.$1.x,this.$1.y).setZoom(this.$5)};function n(a){"use strict";this.$2=a,this.setSmallestSize(j,j).setCenter(h,h),this.setSize(g,g).setZoom(i)}n.prototype.getArea=function(){"use strict";var a=this.getPosition(),b=this.$3.div(this.$5);return{height:Math.round(b.y),width:Math.round(b.x),x:Math.round(Math.abs(a.left)/this.$5),y:Math.round(Math.abs(a.top)/this.$5)}};n.prototype.getPosition=function(){"use strict";var a=this.$6();return{height:m(a.imageSize.y),left:m(this.$3.x/2-a.center.x),top:m(this.$3.y/2-a.center.y),width:m(a.imageSize.x)}};n.prototype.getRect=function(){"use strict";var a=this.$6(),b=this.$3.div(this.$5);return{center:{x:a.center.x/a.imageSize.x,y:a.center.y/a.imageSize.y},size:{x:b.x,y:b.y}}};n.prototype.getSize=function(){"use strict";return this.$3};n.prototype.getCenter=function(){"use strict";return this.$1};n.prototype.getZoom=function(){"use strict";return this.$5};n.prototype.getZoomRange=function(){"use strict";var a=Math.min(this.$2.x,this.$2.y);return{max:this.$3.x/Math.min(this.$4.x,a),min:Math.max(this.$3.x/this.$2.x,this.$3.y/this.$2.y)}};n.prototype.hasSpaceToDrag=function(){"use strict";var a=this.getZoomRange();return!(n.isSquare(this.$2)&&a.min===a.max)};n.prototype.isCurrentlyDragable=function(){"use strict";var a=this.$6().imageSize;return a.x!==this.$3.x||a.y!==this.$3.y};n.prototype.moveByPixels=function(a,b){"use strict";var c=this.$6();return this.moveBy(a/c.imageSize.x,b/c.imageSize.y)};n.prototype.moveBy=function(a,b){"use strict";this.setCenter(this.$1.x+a,this.$1.y+b);a=this.$6();this.$1=a.center.div(a.imageSize.x,a.imageSize.y);return this};n.prototype.setCenter=function(a,c){"use strict";this.$1=new(b("BasicVector"))(b("clamp")(a,0,1),b("clamp")(c,0,1));return this};n.prototype.setSize=function(a,c){"use strict";this.$3=new(b("BasicVector"))(a,c);return this};n.prototype.setRatio=function(a,b){"use strict";var c=this.$3.x*this.$3.y;a=Math.sqrt(c*a/b);return this.setSize(a,c/a)};n.prototype.setSmallestSize=function(a,c){"use strict";this.$4=new(b("BasicVector"))(a,c);return this};n.prototype.setZoom=function(a){"use strict";var c=this.getZoomRange();this.$5=b("clamp")(a,c.min,c.max);return this};n.prototype.cloneAndZoom=function(a){"use strict";var b=this.clone();b.setZoom(a);return b};n.prototype.cloneAndMove=function(a,b){"use strict";var c=this.clone();c.moveByPixels(a,b);return c};n.prototype.$7=function(a,c){"use strict";var d=this.$3.x/2,e=this.$3.y/2;return new(b("BasicVector"))(b("clamp")(c.x,d,a.x-d),b("clamp")(c.y,e,a.y-e))};n.prototype.$6=function(){"use strict";var a=this.$2.mul(this.$5);return{imageSize:a,center:this.$7(a,this.$1.mul(a.x,a.y))}};n.isSquare=function(a){"use strict";return Math.abs(a.x/a.y-1)<k};n.fromProfilePhotoData=function(a,c){"use strict";var d=new(b("BasicVector"))(a.original.width,a.original.height),e=new n(d);c?c=c:a.previousprofilepic?c=a.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}}:c=b("SpotlightProfilePicCropOptions").getOptionsAsRatio(a,d);c.center&&e.setCenter(c.center.x,c.center.y);if(c.size&&c.size.x){a=c.size.x*d.x;e.setZoom(e.getSize().x/a)}return e};e.exports=n}),null);
__d("PhotoZoomCropImagePreview.react",["cx","Image.react","PhotoZoomCropDimensions","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props,c=a.dimensions;a=a.size;var d=c.getSize().x/a.x;d!==1&&(c=c.clone().setSize(a.x,a.y).setZoom(c.getZoom()/d));d=null;this.props.overlay&&(d=b("React").createElement("div",{className:"_1_fc"+(this.props.circular?" _3np9":"")},this.props.overlay));return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_1k3v"+(this.props.circular?" _3np9":"")),style:babelHelpers["extends"]({},this.props.style||{},{height:a.y,width:a.x})}),b("React").createElement(b("Image.react"),{className:"_1k3w",src:this.props.src,style:c.getPosition()}),d)};function a(){"use strict";h.apply(this,arguments)}a.propTypes={dimensions:c.instanceOf(b("PhotoZoomCropDimensions")).isRequired,overlay:c.element,size:c.shape({x:c.number.isRequired,y:c.number.isRequired}).isRequired,src:c.oneOfType([c.string,c.object])};e.exports=a}),null);
__d("PhotoZoomCropImage.react",["cx","fbt","ix","Event","Image.react","Keys","PhotoZoomCropImageConstants","PhotoZoomCropImagePreview.react","React","UserAgent","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;c=b("React").PropTypes;var k=5;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={moved:!1},this.$6=function(a){__p&&__p();this.$2=null;var c=0,d=0;switch(b("Event").getKeyCode(a)){case b("Keys").DOWN:d=k;break;case b("Keys").LEFT:c=-k;break;case b("Keys").RIGHT:c=k;break;case b("Keys").UP:d=-k;break}(c||d)&&(this.props.onMove(c,d),this.setState({moved:!0}))}.bind(this),this.$7=function(a){this.$9(a,b("Vector").getEventPosition(a))}.bind(this),this.$8=function(a){this.$9(a,b("Vector").getTouchEventPosition(a))}.bind(this),this.$3=function(a){this.$10(b("Vector").getEventPosition(a))}.bind(this),this.$4=function(a){this.$10(b("Vector").getTouchEventPosition(a))}.bind(this),this.$5=function(){this.$2=null}.bind(this),c}a.prototype.componentDidMount=function(){"use strict";var a=b("UserAgent").isBrowser("IE < 9")?document.documentElement:window;this.$1=b("Event").listen(a,{mousemove:this.$3,touchmove:this.$4,mouseup:this.$5,touchend:this.$5})};a.prototype.componentWillUnmount=function(){"use strict";if(this.$1)for(var a in this.$1)this.$1[a]&&this.$1[a].remove(),this.$1[a]=null};a.prototype.render=function(){"use strict";__p&&__p();var a=this.props.dimensions,c=a.getSize(),d=null;this.props.overlay&&(d=b("React").createElement("div",{className:"_290-"},this.props.overlay));var e=null;if(this.props.customControls)e=b("React").createElement("div",{className:this.props.enableDrag?"":"_3dfz"},this.props.customControls);else{var f=this.props.moveStatus!==undefined?this.props.moveStatus:this.state.moved;e=b("React").createElement("div",{className:(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.MIDDLE?"_6aza":"")+(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP?" _3dfy":"")+(f||!this.props.enableDrag?" _3dfz":"")},b("React").createElement("span",{className:"_3df-"},b("React").createElement(b("Image.react"),{className:"_3-8_ _3df_",src:i("22701")}),h._("Drag to Reposition")))}f=this.props;var g=f.altText;f=babelHelpers.objectWithoutProperties(f,["altText"]);return b("React").createElement("div",babelHelpers["extends"]({},f,{className:b("joinClasses")(this.props.className,"_4on5"),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x})}),b("React").createElement(b("PhotoZoomCropImagePreview.react"),{circular:this.props.circular,dimensions:a,onKeyDown:this.$6,overlay:this.props.overlay,size:c,src:this.props.src,tabIndex:0}),e,b("React").createElement("div",{className:"_4on8"},b("React").createElement(b("Image.react"),{className:"_4on7"+(this.props.enableDrag?"":" _3mk2"),onDragStart:b("Event").prevent,onMouseDown:this.$7,onTouchStart:this.$8,src:this.props.src,alt:g,style:a.getPosition()}),d))};a.prototype.$9=function(a,b){"use strict";if(this.$2)return;a.preventDefault();this.$2=b};a.prototype.$10=function(a){"use strict";var b=this.$2;if(!b||!this.props.enableDrag)return;b=b.sub(a);this.props.onMove(b.x,b.y);this.setState({moved:!0});this.$2=a};a.propTypes={circular:c.bool,customControls:c.element,dimensions:c.object,enableDrag:c.bool,onMove:c.func,overlay:c.element,src:c.oneOfType([c.string,c.object]),altText:c.string,moveStatus:c.bool,dragPosition:c.string};a.defaultProps={circular:!1,enableDrag:!0,dragPosition:b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP};e.exports=a}),null);
__d("PhotoZoomCropMixin",["ix","cx","invariant","xuiglyph","Image.react","React"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();a={getDimensions:function(){return this._dims},resetDimensions:function(){this.setState(this.getInitialState())},_handleMove:function(a,b){this._dims.moveByPixels(a,b),this.setState(this._getDimensionsState())},_handleZoom:function(a,b){this._dims.setZoom(a[0]);var c=this._getDimensionsState();c.position=b||a[0];this.setState(c)},_getDimensionsState:function(){return{dimensions:this._dims.getPosition(),zoom:this._dims.getZoom()}},_getMessage:function(){var a,b;this.__getZoom||i(0,104);if(this.__getZoom()>1&&this.props.warningText)a=g("89108"),b=this.props.warningText;else if(this.props.messageText)a=g("89336"),b=this.props.messageText;else return null;return this._getMessageMarkup(a,b)},_getMessageMarkup:function(a,c){return b("React").createElement("div",{className:"_aym"},b("React").createElement(b("Image.react"),{className:"_a63",src:a}),c)}};e.exports=a}),null);
__d("PagesProfileTestID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COVER_PHOTO_EDIT_MENU:"cover_photo_edit_menu",COVER_PHOTO_REMOVE_MENU_ITEM:"cover_photo_remove_menu_item",COVER_PHOTO_UPLOAD_MENU_ITEM:"cover_photo_upload_menu_item",COVER_PHOTO_SAVE_BUTTON:"cover_photo_save_button",COVER_PHOTO_REMOVE_CONFIRM_BUTTON:"cover_photo_remove_confirm_button",PROFILE_PICTURE_EDIT_MENU:"profile_picture_edit_menu",PROFILE_PICTURE_REMOVE_MENU_ITEM:"profile_picture_remove_menu_item",PROFILE_PICTURE_UPLOAD_MENU_ITEM:"profile_picture_upload_menu_item",UNLIKE_PAGE_ITEM:"page_unlike_item_test_id",UNFOLLOW_PAGE_ITEM:"page_unfollow_item_test_id",SEE_FIRST_ITEM:"page_see_first_item_test_id",DEFAULT_FOLLOW_ITEM:"page_default_follow_item_test_id",FOLLOW_BUTTON_ID:"_follow_button_test_id",FOLLOWED_BUTTON_ID:"_followed_button_test_id",LIKE_BUTTON_ID:"_like_button_test_id",LIKED_BUTTON_ID:"_liked_button_test_id"})}),null);
__d("ProfileHeaderSpinner.react",["cx","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return!this.props.shown?null:b("React").createElement("div",{className:"_5mb0"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("ProfileHeaderViewShapes",["React"],(function(a,b,c,d,e,f){a=b("React").PropTypes;c=a.shape({focus:a.shape({height:a.number,width:a.number}),original:a.shape({height:a.number,width:a.number}),permalinkURI:a.string,source:a.number,uri:a.string,altText:a.string});e.exports={COVER_PHOTO_DATA:c}}),null);
__d("ProfileWizardStrings",["fbt"],(function(a,b,c,d,e,f,g){a={CANCEL:g._("Cancel"),CHOOSE_FROM_MY_PHOTOS:g._("Choose From My Photos"),COVER_PHOTO_CHANGE_NOTICE:g._("Change your cover photo any time from the camera icon."),COVER_PHOTO_LEAVE_WARNING:g._("The changes you made to your cover photo haven't been saved."),PROFILE_PICTURE_CHANGE_NOTICE:g._("Change your profile picture any time from the camera icon."),SAVE:g._("Save"),UPDATE_COVER_PHOTO:g._("Update Cover Photo"),UPLOAD_PHOTO:g._("Upload Photo"),UPDATE_PROFILE_PICTURE:g._("Update Profile Picture")};e.exports=a}),null);
__d("ProfileHeaderCoverPhoto.react",["ix","cx","BasicVector","Image.react","PagesProfileTestID","PhotoZoomCropDimensions","PhotoZoomCropImage.react","PhotoZoomCropMixin","ProfileHeaderSpinner.react","ProfileHeaderViewShapes","ProfileWizardStrings","React","ReactComponentWithPureRenderMixin","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ProfileHeaderCoverPhoto",_dims:null,mixins:[b("PhotoZoomCropMixin"),b("ReactComponentWithPureRenderMixin")],propTypes:{coverPhotoData:b("ProfileHeaderViewShapes").COVER_PHOTO_DATA.isRequired,customControls:a.element,dragPosition:a.string,emptyCover:a.element,height:a.number.isRequired,hideDefaultButtons:a.bool,index:a.number,isHidden:a.bool,isLoading:a.bool,isRequestFromContextItems:a.bool,moveStatus:a.bool,onMove:a.func,previewCancelHandler:a.func,previewMode:a.bool,previewSaveHandler:a.func,width:a.number.isRequired},getDefaultProps:function(){return{hideDefaultButtons:!1,onMove:function(){},previewCancelHandler:function(){},previewSaveHandler:function(){}}},getInitialState:function(){this._updateDimensions(this.props.coverPhotoData);return babelHelpers["extends"]({},this._getUpdatedDimensionsState())},UNSAFE_componentWillReceiveProps:function(a){__p&&__p();var b=this.props.coverPhotoData;if(b.id===a.coverPhotoData.id&&this.props.previewMode===a.previewMode&&this.props.width===a.width){b=b.focus;if(!b)return;if(b.width===a.coverPhotoData.focus.width&&b.height===a.coverPhotoData.focus.height)return}this._updateDimensions(a.coverPhotoData,a.height,a.width);this.setState(babelHelpers["extends"]({},this._getUpdatedDimensionsState()))},_updateDimensions:function(a,c,d){__p&&__p();var e=a.original;if(e==null)return;var f=new(b("BasicVector"))(e.width,e.height);f=new(b("PhotoZoomCropDimensions"))(f);f.setSize(d||this.props.width,c||this.props.height);d=a.focus;d&&f.setCenter(d.width,d.height);f.setZoom(f.getSize().x/e.width);this._dims=f},_getUpdatedDimensionsState:function(){return this._getDimensionsState()},_onMove:function(a,b){this._handleMove(a,b),this.props.onMove&&this.props.onMove(a,b,this.props.index)},render:function(){__p&&__p();var a=this.props.coverPhotoData;if(a.uri){var c=!!(this.props.previewMode&&this._dims&&this._dims.isCurrentlyDragable());c=b("React").createElement(b("PhotoZoomCropImage.react"),{altText:a.altText,className:"_2oru"+(this.props.isHidden||this.props.isLoading?" _2orv":""),customControls:this.props.customControls,dimensions:this._dims,dragPosition:this.props.dragPosition,enableDrag:c,moveStatus:this.props.moveStatus,onMove:this._onMove,src:a.uri})}else if(this.props.emptyCover)c=this.props.emptyCover;else{a=this.props.isRequestFromContextItems||null;a!==null?c=b("React").createElement("div",{className:"_6ld6"},b("React").createElement(b("Image.react"),{src:g("621934")})):c=b("React").createElement("div",{className:"_2orw"})}a=null;this.props.previewMode&&!this.props.customControls&&!this.props.hideDefaultButtons&&(a=b("React").createElement("div",{className:"_1tg",id:"fbProfileHeaderCoverPhotoControl"},b("React").createElement("div",{className:"_1th"},b("React").createElement(b("XUIButton.react"),{"data-testid":b("PagesProfileTestID").COVER_PHOTO_SAVE_BUTTON,label:b("ProfileWizardStrings").SAVE,onClick:this.props.previewSaveHandler,size:"large",use:"confirm"}),b("React").createElement(b("XUIButton.react"),{label:b("ProfileWizardStrings").CANCEL,onClick:this.props.previewCancelHandler,size:"large"}))));return b("React").createElement("div",{className:"_2orx",style:{height:this.props.height,width:this.props.width}},c,a,b("React").createElement(b("ProfileHeaderSpinner.react"),{shown:this.props.isLoading}))},getOffsets:function(){var a=this.getDimensions().getPosition();return{x:a.left/a.width,y:a.top/a.height}},getCenter:function(){var a=this.getDimensions().getRect();return a.center},__getZoom:function(){return this.state.zoom}});e.exports=c}),null);
__d("XUISubNavigationDynamicShortcuts",["cx","CSS","Event","Run","SubscriptionsHandler","ViewportBounds","clamp","getViewportDimensions","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_2u38",i=32,j=20;k.init=function(a,b,c){"use strict";a=new k(a,b,c);return a};function k(a,c,d){"use strict";__p&&__p();this.$6=function(){var a=b("getViewportDimensions")().height-b("ViewportBounds").getTop()-b("ViewportBounds").getBottom(),c=this.$3.offsetHeight-this.$5*i;a=b("clamp")(Math.floor((a-c)/i),0,this.$1);if(a===this.$5)return;c=this.$7(this.$5);c&&(b("CSS").removeClass(this.$2,c),b("CSS").removeClass(this.$2,h));c=this.$7(a);c&&(b("CSS").addClass(this.$2,c),b("CSS").addClass(this.$2,h));this.$5=a}.bind(this),this.$1=Math.min(d||j,j),this.$2=a,this.$3=c,this.$5=0,this.$4=new(b("SubscriptionsHandler"))(),this.$4&&this.$4.addSubscriptions(b("ViewportBounds").subscribe("change",this.$6),b("Event").listen(window,"resize",b("throttle")(this.$6)),b("Run").onLeave(this.destroy.bind(this))),this.$6()}k.prototype.destroy=function(){"use strict";this.$4&&this.$4.release(),this.$4=null};k.prototype.$7=function(a){"use strict";__p&&__p();switch(a){case 1:return"_1twe";case 2:return"_1twf";case 3:return"_1twg";case 4:return"_1tw-";case 5:return"_1tw_";case 6:return"_2u39";case 7:return"_2u3a";case 8:return"_2u3b";case 9:return"_2u3c";case 10:return"_2u3d";case 11:return"_5k9l";case 12:return"_5k9m";case 13:return"_5k9n";case 14:return"_5k9o";case 15:return"_5k9p";case 16:return"_5k9q";case 17:return"_5k9r";case 18:return"_5k9u";case 19:return"_5k9v";case 20:return"_5k9w";default:return null}};e.exports=k}),null);
__d("EntityPageRenderer",["ReactDOM","ReactRenderer","XUISubNavigationLoader"],(function(a,b,c,d,e,f){a={constructAndRenderComponent:function(a,c,d,e){b("XUISubNavigationLoader").onLeave(function(){b("ReactDOM").unmountComponentAtNode(d)});return b("ReactRenderer").constructAndRenderComponentAcrossTransitions(a,c,d,e)}};e.exports=a}),null);
__d("ResponsiveBlock.react",["cx","MutationObserver","React","ResizeEventHandler","UserAgent","joinClasses","requestAnimationFrame"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("UserAgent").isBrowser("IE")&&"onresize"in document.createElement("div"),j={attributes:!0,characterData:!0,childList:!0,subtree:!0};c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.$4=new(b("ResizeEventHandler"))(function(){if(this.$1==null)return;var a=this.$1.offsetWidth,b=this.$1.offsetHeight;(a!==this.$3||b!==this.$2)&&(this.$3=a,this.$2=b,this.props.onResize(a,b))}.bind(this)).handleEvent,this.$5=new(b("MutationObserver"))(this.$4),this.$6=function(a){this.$1=a;if(a==null){this.$5.disconnect();return}this.$5.observe(a,j)}.bind(this),this.$7=function(a){if(a==null)return;a.onresize=this.$4;this.$4()}.bind(this),this.$8=function(a){if(a==null)return;a.contentWindow?(a.contentWindow.onresize=this.$4,this.$4()):b("requestAnimationFrame")(function(){return this.$8(a)}.bind(this))}.bind(this),c}a.prototype.componentWillUnmount=function(){"use strict";this.$3=null,this.$2=null};a.prototype.render=function(){"use strict";var a=b("joinClasses")("_4u-c",this.props.className),c;i?c=b("React").createElement("div",{key:"sensor",ref:this.$7,className:"_4u-f"}):c=b("React").createElement("div",{key:"sensor",className:"_4u-f"},b("React").createElement("iframe",{"aria-hidden":"true",ref:this.$8,className:"_1_xb",tabIndex:"-1"}));return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:a,ref:this.$6}),this.props.children,c)};e.exports=a}),null);
__d("CurrencyUsage",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({RENDER:1,PAYMENT_TYPE_CREDIT_CARD:2,PAYMENT_TYPE_PAYPAL:4,PAYMENT_TYPE_MOBILE:8,PAYMENT_TYPE_DIRECT_DEBIT:16,ANY:31,ALL:72057594037927940,ADS:22,ALL_BUT_DD:72057594037927920})}),null);
__d("PECurrency",["CurrencyUsage","PECurrencyConfig","intlNumUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PECurrencyConfig").currency_map_for_cc,h=b("PECurrencyConfig").currency_map_for_render,i=100;function j(a){var b=0;a=a;while(a>1)b++,a/=10;return b}function k(a,b,c){var d=h[a].symbol,e=h[a].format||"{symbol}{amount}";c===!0&&d!=a&&(e.indexOf("{symbol}")>=e.indexOf("{amount}")?e+=" ("+a+") ":e+=" "+a);return e.replace("{symbol}",d).replace("{amount}",String(b))}function a(a,c,d){d=babelHelpers["extends"]({showCurrencyCode:!1,showDecimals:!0,showSymbol:!0,stripZeros:!1,thousandSeparator:!1},d);var e=h[a].offset;c=c/i;e=d.showDecimals?j(e):0;d.stripZeros||(c=b("intlNumUtils").formatNumber(c,e));d.thousandSeparator&&(typeof c==="string"&&(c=b("intlNumUtils").parseNumber(c)),c=b("intlNumUtils").formatNumberWithThousandDelimiters(Number(c),e));!d.showSymbol?e=d.showCurrencyCode?c+" "+a:String(c):(typeof c==="number"&&(c=""+c),e=k(a,c,d.showCurrencyCode));return e}function c(a,b,c,d,e){b=l(a,b,!0,c,d,e);switch(a){case"AUD":return"A"+b;case"CAD":return"C"+b;default:return b}}function l(a,c,d,e,f,g){__p&&__p();d=d!=null?d:!0;e=e!=null?e:!1;f=f!=null?f:!1;g=g!=null?g:!1;var l=h[a].offset,m=Math.abs(c)/i;l=j(l);f||(m=b("intlNumUtils").formatNumber(m,l));g&&(typeof m==="string"&&(m=b("intlNumUtils").parseNumber(m)),m=b("intlNumUtils").formatNumberWithThousandDelimiters(Number(m),f?0:l));!d?g=e?m+" "+a:String(m):(typeof m==="number"&&(m=""+m),g=k(a,m,e));c<0&&(g="-"+g);return g}function d(a,b,c,d,e){return l(a.currency,a.amount,b,c,d,e)}function f(a){a=p(a);return a!=null?Object.keys(a):[]}function m(a){return!h[a]?null:h[a].screen_name}function n(a){return!h[a]?null:h[a].symbol}function o(a){return!h[a]?null:h[a].offset}function p(a){switch(a){case b("CurrencyUsage").PAYMENT_TYPE_CREDIT_CARD:return g;case b("CurrencyUsage").RENDER:return h;default:return null}}e.exports={DEFAULT_AMOUNT_OFFSET:i,formatAmount:l,formatAmountWithExtendedSymbol:c,formatAmountX:a,formatCurrencyAmount:d,formatRawAmount:k,getAllCurrencies:f,getCurrencyScreenName:m,getCurrencySymbol:n,getCurrencyOffset:o}}),null);
__d("CollabCallTriggerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INTERN_SEARCH_MEETING_ROOM_UNIT:"intern_search_meeting_room_unit",MEETING_ROOM_PAGE_PROFILE:"meeting_room_page_profile",QUICK_DIAL:"quickdial"})}),null);
__d("PhotoBrowserDialogEndpointType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EVENT_COVER:0,GROUP_COVER:1,TIMELINE_COVER:2,PROFILE_PICTURE:3,PAGE_PICTURE:4,LINK_ALBUM:5,LIFE_EVENT:6,ATTACHMENT_EDITOR:7,EDITOR_IMPORT:8,EDITOR_SAVE:9,PAGE_COVER:10,MAP_COMPOSER:12,YEAR_IN_REVIEW:13,FAMILY_TAG_PROFILE:14,FAMILY_TAG_COVER:15,FEATURED_PHOTO:18,ORIGIN_STORY:19,PAGES_COVER_JS:20,FRAME_COMPOSER:21,ALBUM_COVER:22,PAGES_COVER_SLIDESHOW_JS:23,FUNDRAISER_COVER_THEMES:24,FUNDRAISER_COVER_NONPROFIT:25,FUNDRAISER_COVER_PERSON:26,GROUP_COVER_PREVIEW:27,FUNDRAISER_COVER_YOUR_UPLOADS:28})}),null);
__d("PhotoBrowserDialogPhotoGeneratorType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PROFILE:0,PAGE:1,FRIENDSHIP:2,EVENT:3,GROUP:4,TAGGED:5,SYNCED:6,LINKABLE_ALBUMS:8,RECENT:9,LAST_ONE_YEAR:10,SCRAPBOOK:11,ORIGIN_STORY:13,ALBUM:14,PROFILE_CHANNEL:15,COLLAGE:16,COVER_ARTWORK:17,FUNDRAISER_COVER_THEMES:18,FUNDRAISER_NONPROFIT_PAGE:19,FUNDRAISER_SUGGESTED_FOR_PERSON:20,SUBCOMMUNITY:21})}),null);
__d("XPhotoBrowserDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/photo_browser_dialog/",{album_id:{type:"Int"},cursor:{type:"String"},data:{type:"String",defaultValue:""},display:{type:"Enum",defaultValue:2,enumType:0},endpoint:{type:"Enum",required:!0,enumType:0},generator:{type:"Enum",required:!0,enumType:0},id:{type:"Int",required:!0},member_id:{type:"Int"},existing_media_ids:{type:"FBIDSet",defaultValue:[]},ajaxify_links:{type:"Bool",defaultValue:!0},include_photo_uri:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);
__d("XPhotoPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{vanity}/photos/{?set_token}/{photo_id}/",{photo_id:{type:"Int"},set_token:{type:"String"},type:{type:"Enum",defaultValue:3,enumType:0},link_share:{type:"String"},subject:{type:"Int"},object_id:{type:"Int"},opaque_cursor:{type:"String"},legacy_user_id:{type:"Int"},legacy_photo_id:{type:"Int"},video_id:{type:"Int"},comment_id:{type:"Int"},notif_t:{type:"String"},is_notification_preview:{type:"Bool",defaultValue:!1},force_theater:{type:"Bool",defaultValue:!1},story_token:{type:"String"},vanity:{type:"String"},__tn__:{type:"String"},reply_comment_id:{type:"Int"}})}),null);