/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});

// Global Variables
var GlobalCreature

// Global Variables

function RandomNum() {
	let rngMin = Number(document.getElementById("rngMin").value)
	let rngMax = Number(document.getElementById("rngMax").value)
	document.getElementById("rngResult").innerHTML = Math.floor(Math.random() * (rngMax - rngMin) + rngMin);
}

function DistanceCalc() {
	let sideA = Number(document.getElementById("sideA").value) ** 2;
	let sideB = Number(document.getElementById("sideB").value) ** 2;
	let sideC = sideA + sideB;
	let sideFinal = Math.floor(Math.sqrt(sideC));
	document.getElementById("distanceResult").innerHTML = sideFinal;
}

function WeatherGen() {
	let weatherA = Math.floor(Math.random() * 36) + 1;
	let weatherB = Math.floor(Math.random() * 3) + 1;
	let weatherC;
	if (weatherB == 2) {weatherC = "Partially Cloudy";}
	else {
		if (weatherA >= 1 && weatherA <= 3) {weatherC = "Thunderstorm";}
		else if (weatherA >= 4 && weatherA <= 5) {weatherC = "Hailstorm or Wildfire";}
		else if (weatherA >= 6 && weatherA <= 8) {weatherC = "Snow or Heavy Downpour";}
		else if (weatherA >= 9 && weatherA <= 13) {weatherC = "Rain";}
		else if (weatherA >= 14 && weatherA <= 18) {weatherC = "Overcast";}
		else if (weatherA >= 19 && weatherA <= 23) {weatherC = "Sunny";}
		else if (weatherA >= 24 && weatherA <= 27) {weatherC = "Light Drizzle";}
		else if (weatherA >= 28 && weatherA <= 30) {weatherC = "Very Windy";}
		else if (weatherA >= 31 && weatherA <= 33) {weatherC = "Heavy Fog";}
		else if (weatherA >= 34 && weatherA <= 35) {weatherC = "Acid Rain";}
		else if (weatherA == 36) {weatherC = "Heatwave, Duststorm, Blizzard, or Flood";}
	}
	document.getElementById("weatherResult").innerHTML = weatherC;
}

function ExternalPart() {
	let partRNG = Math.floor(Math.random() * 19) + 1;
	let partX;
	if (partRNG == 1) {partX = "Head";}
	else if (partRNG == 2 || partRNG == 3) {partX = "Upper Left Arm";}
	else if (partRNG == 4 || partRNG == 5) {partX = "Upper Right Arm";}
	else if (partRNG == 6 || partRNG == 7) {partX = "Left Forearm";}
	else if (partRNG == 8 || partRNG == 9) {partX = "Right Forearm";}
	else if (partRNG == 10 || partRNG == 11) {partX = "Torso";}
	else if (partRNG == 12 || partRNG == 13) {partX = "Left Thigh";}
	else if (partRNG == 14 || partRNG == 15) {partX = "Right Thigh";}
	else if (partRNG == 16 || partRNG == 17) {partX = "Left Calf";}
	else if (partRNG == 18 || partRNG == 19) {partX = "Right Calf";}
	document.getElementById("partResult").innerHTML = partX;
}

function InternalPart() {
	let partRNG = Math.floor(Math.random() * 27) + 1;
	let organRNG = Math.floor(Math.random() * 60) + 1;
	let partX;
	if (organRNG == 1) {partX = "Brain";}
	else if (organRNG == 2) {partX = "Heart";}
	else if (organRNG >= 3 && organRNG <= 4) {partX = "Skin";}
	else if (organRNG >= 5 && organRNG <= 7) {partX = "Lung";}
	else if (organRNG >= 8 && organRNG <= 10) {partX = "Kidney";}
	else if (organRNG >= 11 && organRNG <= 12) {partX = "Stomach";}
	else if (organRNG >= 13 && organRNG <= 15) {partX = "Liver";}
	else if (organRNG >= 16 && organRNG <= 24) {partX = "Eye";}
	else if (organRNG >= 25 && organRNG <= 33) {partX = "Eardrum";}
	else if (organRNG >= 34 && organRNG <= 39) {partX = "Genitals";}
	else if (organRNG >= 40 && organRNG <= 46) {partX = "Teeth";}
	else if (organRNG >= 47 && organRNG <= 53) {partX = "Hair";}
	else if (organRNG >= 54 && organRNG <= 57) {
		if (partRNG == 1) {partX = "Back Muscle";}
		else if (partRNG == 2 || partRNG == 3) {partX = "Upper Left Arm Muscle";}
		else if (partRNG == 4 || partRNG == 5) {partX = "Upper Right Arm Muscle";}
		else if (partRNG == 6 || partRNG == 7) {partX = "Left Forearm Muscle";}
		else if (partRNG == 8 || partRNG == 9) {partX = "Right Forearm Muscle";}
		else if (partRNG == 10 || partRNG == 11) {partX = "Chest Muscle";}
		else if (partRNG == 12 || partRNG == 13) {partX = "Left Thigh Muscle";}
		else if (partRNG == 14 || partRNG == 15) {partX = "Right Thigh Muscle";}
		else if (partRNG == 16 || partRNG == 17) {partX = "Left Calf Muscle";}
		else if (partRNG == 18 || partRNG == 19) {partX = "Right Calf Muscle";}
		else if (partRNG == 20 || partRNG == 21) {partX = "Right Hand Muscle";}
		else if (partRNG == 22 || partRNG == 23) {partX = "Left Hand Muscle";}
		else if (partRNG == 24 || partRNG == 25) {partX = "Right Foot Muscle";}
		else if (partRNG == 26 || partRNG == 27) {partX = "Left Foot Muscle";}
	}
	else if (organRNG >= 58 && organRNG <= 60) {
		if (partRNG == 1) {partX = "Spine";}
		if (partRNG == 2 || partRNG == 3) {partX = "Upper Left Arm Bone";}
		else if (partRNG == 4 || partRNG == 5) {partX = "Upper Right Arm Bone";}
		else if (partRNG == 6 || partRNG == 7) {partX = "Left Forearm Bone";}
		else if (partRNG == 8 || partRNG == 9) {partX = "Right Forearm Bone";}
		else if (partRNG == 10 || partRNG == 11) {partX = "Rib Bone";}
		else if (partRNG == 12 || partRNG == 13) {partX = "Left Thigh Bone";}
		else if (partRNG == 14 || partRNG == 15) {partX = "Right Thigh Bone";}
		else if (partRNG == 16 || partRNG == 17) {partX = "Left Calf Bone";}
		else if (partRNG == 18 || partRNG == 19) {partX = "Right Calf Bone";}
		else if (partRNG == 20 || partRNG == 21) {partX = "Right Hand Bone";}
		else if (partRNG == 22 || partRNG == 23) {partX = "Left Hand Bone";}
		else if (partRNG == 24 || partRNG == 25) {partX = "Right Foot Bone";}
		else if (partRNG == 26 || partRNG == 27) {partX = "Left Foot Bone";}
	}
	document.getElementById("partResult").innerHTML = partX;
}

function CriticalFail() {
	let critFail = Math.floor(Math.random() * 15) + 1;
	let critFailX;
	if (critFail == 1 || critFail == 2) {critFailX = "Nothing Happens";}
	else if (critFail == 3 || critFail == 4) {critFailX = "Drop Weapon";}
	else if (critFail == 5 || critFail == 6) {critFailX = "Hit Adjacent Creature";}
	else if (critFail == 7 || critFail == 8) {critFailX = "Target gets an Opporunity Attack";}
	else if (critFail == 9 || critFail == 10) {critFailX = "Target has Advantage on Next Attack";}
	else if (critFail == 11 || critFail == 12) {critFailX = "Fall Prone";}
	else if (critFail == 13 || critFail == 14) {critFailX = "You have Disadvantage on Next Attack";}
	else if (critFail == 15) {critFailX = "Self Injury (Weapon Dice Only)";}
	document.getElementById("failResult").innerHTML = critFailX;
}

function JumpCalc() {
	let jumpStr = Number(document.getElementById("jumpStr").value);
	let jumpStand = document.getElementById("jumpStand").checked;
	let jumpMod = (jumpStr - 10) / 2;
	let jumpLong;
	let jumpHigh;
	if (jumpStand == false) {jumpLong = jumpStr; jumpHigh = (jumpMod + 3);}
	else {jumpLong = (jumpStr / 2); jumpMod = (jumpMod + 3); jumpHigh = (jumpMod / 2);}
	if (jumpHigh < 1) {jumpHigh = "½";}
	else {}
	document.getElementById("genBox").innerHTML = `${jumpLong} foot Long Jump \n${jumpHigh} foot High Jump \n(plus 1½ your height for vertical arm's reach)`;
}

function MadnessGen(){
	let madType = document.getElementById("madType").value;
	let madTime;
	let madDays;
	let madRNG;
	let madnessX;
	if (madType == "Short") {
		madTime = (Math.floor(Math.random() * 10) + 1);
		madTime = `${madTime} minute(s)`;
		madRNG = Math.floor(Math.random() * 11) + 1;
		if (madRNG == 1) {madnessX = "(Short) The character becomes Incapacitated and spends the Duration screaming, laughing, or weeping.";}
		else if (madRNG == 2) {madnessX = "(Short) The character becomes Frightened and must use his or her action and Movement each round to flee from the source of the fear.";}
		else if (madRNG == 3) {madnessX = "(Short) The character begins babbling and is incapable of normal Speech or Spellcasting.";}
		else if (madRNG == 4) {madnessX = "(Short) The character must use his or her action each round to Attack the nearest creature.";}
		else if (madRNG == 5) {madnessX = "(Short) The character experiences vivid hallucinations and has disadvantage on Ability Checks.";}
		else if (madRNG == 6) {madnessX = "(Short) The character does whatever anyone tells him or her to do that isn’t obviously self-­ destructive.";}
		else if (madRNG == 7) {madnessX = "(Short) The character experiences an overpowering urge to eat something strange such as dirt, slime, or offal.";}
		else if (madRNG == 8) {madnessX = "(Short) The character is Stunned.";}
		else if (madRNG == 9) {madnessX = "(Short) The character falls Unconscious.";}
		else if (madRNG == 10 || madRNG == 11) {madnessX = "(Short) The character retreats into his or her mind and becomes Paralyzed. The Effect ends if the character takes any damage.";}
	}
	else if (madType == "Long") {
		madTime = (Math.floor(Math.random() * 10) + 1) * 10;
		madDays = madTime / 24;
		madDays = madDays.toFixed(2);
		madTime = `${madTime} hours (${madDays} days)`;
		madRNG = Math.floor(Math.random() * 16) + 1;
		if (madRNG >= 1 && madRNG <= 2) {madnessX = "(Long) The character feels compelled to repeat a specific activity over and over, such as washing hands, touching things, praying, or counting coins.";}
		else if (madRNG >= 3 && madRNG <= 4) {madnessX = "(Long) The character experiences vivid hallucinations and has disadvantage on Ability Checks.";}
		else if (madRNG >= 5 && madRNG <= 6) {madnessX = "(Long) The character suffers extreme paranoia. The character has disadvantage on Wisdom and Charisma checks.";}
		else if (madRNG >= 7 && madRNG <= 8) {madnessX = "(Long) The character regards something (usually the source of madness) with intense revulsion, as if affected by the antipathy Effect of the Antipathy/Sympathy spell.";}
		else if (madRNG == 9) {madnessX = "(Long) The character experiences a powerful delusion. Choose a potion. The character imagines that he or she is under its Effects.";}
		else if (madRNG == 10) {madnessX = "(Long) The character becomes attached to a 'lucky charm,' such as a person or an object, and has disadvantage on Attack rolls, Ability Checks, and Saving Throws while more than 30 feet from it.";}
		else if (madRNG == 11) {madnessX = "(Long) The character is Blinded (25%) or Deafened (75%).";}
		else if (madRNG == 12) {madnessX = "(Long) The character experiences uncontrollable tremors or tics, which impose disadvantage on Attack rolls, Ability Checks, and Saving Throws that involve Strength or Dexterity.";}
		else if (madRNG == 13) {madnessX = "(Long) The character suffers from partial amnesia. The character knows who he or she is and retains racial Traits and Class Features, but doesn’t recognize other people or remember anything that happened before the madness took Effect.";}
		else if (madRNG == 14) {madnessX = "(Long) Whenever the character takes damage, he or she must succeed on a DC 15 Wisdom saving throw or be affected as though he or she failed a saving throw against the Confusion spell. The Confusion Effect lasts for 1 minute.";}
		else if (madRNG == 15) {madnessX = "(Long) The character loses the ability to speak.";}
		else if (madRNG == 16) {madnessX = "(Long) The character falls Unconscious. No amount of jostling or damage can wake the character.";}
	}
	else if (madType == "Indefinite") {
		madTime = "Indefinite";
		madRNG = Math.floor(Math.random() * 16) + 1;
		if (madRNG >= 1 && madRNG <= 3) {madnessX = "(Indefinite) Being drunk keeps me sane.";}
		else if (madRNG >= 4 && madRNG <= 6) {madnessX = "(Indefinite) I keep whatever I find.";}
		else if (madRNG == 7) {madnessX = "(Indefinite) I try to become more like someone else I know—adopting his or her style of dress, mannerisms, and name.";}
		else if (madRNG == 8) {madnessX = "(Indefinite) I must bend the truth, exaggerate, or outright lie to be interesting to other people.";}
		else if (madRNG == 9) {madnessX = "(Indefinite) Achieving my goal is the only thing of interest to me, and I’ll ignore everything else to pursue it.";}
		else if (madRNG == 10) {madnessX = "(Indefinite) I find it hard to care about anything that goes on around me.";}
		else if (madRNG == 11) {madnessX = "(Indefinite) I don’t like the way people judge me all the time.";}
		else if (madRNG == 12) {madnessX = "(Indefinite) I am the smartest, wisest, strongest, fastest, and most beautiful person I know.";}
		else if (madRNG == 13) {madnessX = "(Indefinite) I am convinced that powerful enemies are hunting me, and their agents are everywhere I go. I am sure they’re watching me all the time.";}
		else if (madRNG == 14) {madnessX = "(Indefinite) There’s only one person I can trust. And only I can see this Special friend.";}
		else if (madRNG == 15) {madnessX = "(Indefinite) I can’t take anything seriously. The more serious the situation, the funnier I find it.";}
		else if (madRNG == 16) {madnessX = "(Indefinite) I’ve discovered that I really like killing people.";}
	}
	document.getElementById("genBox").innerHTML = `[${madTime}]\n${madnessX}`;
}

function ConjureCR(){
	let conjureRNG = Math.floor(Math.random() * 4) + 1;
	let conjureX;
	if (conjureRNG == 1) {conjureX = "Half the Max CR";}
	else if (conjureRNG == 2) {conjureX = "1 CR Under Max";}
	else if (conjureRNG == 3) {conjureX = "Max CR; Poor Pick";}
	else if (conjureRNG == 4) {conjureX = "Max CR; Good Pick";}
	document.getElementById("conjureResult").innerHTML = conjureX;
}

function rollDice() {
	let d4Qty = Number(document.getElementById("d4Num").value);
	let d6Qty = Number(document.getElementById("d6Num").value);
	let d8Qty = Number(document.getElementById("d8Num").value);
	let d10Qty = Number(document.getElementById("d10Num").value);
	let d12Qty = Number(document.getElementById("d12Num").value);
	let d20Qty = Number(document.getElementById("d20Num").value);
	let diceRNG
	let d4Total = 0
	let d6Total = 0
	let d8Total = 0
	let d10Total = 0
	let d12Total = 0
	let d20Total = 0
	let d4Result = "d4("
	let d6Result = "d6("
	let d8Result = "d8("
	let d10Result = "d10("
	let d12Result = "d12("
	let d20Result = "d20("
	let diceTotal = 0
	let diceMod = Number(document.getElementById("diceMod").value);
	let diceNeg = "+"
	
	document.getElementById("genBox").innerHTML = "";	
	if (d4Qty > 0) {
		while (d4Qty > 0) {
			diceRNG = Math.floor(Math.random() * 4) + 1;
			if (d4Qty > 1 ) {d4Result += `${diceRNG} + `}
			else {d4Result += `${diceRNG})`}
			d4Total = d4Total + diceRNG
			d4Qty = d4Qty -1
		}
		document.getElementById("genBox").innerHTML += `${d4Result} = ${d4Total}\n`;
	} else {}
	if (d6Qty > 0) {
		while (d6Qty > 0) {
			diceRNG = Math.floor(Math.random() * 6) + 1;
			if (d6Qty > 1 ) {d6Result += `${diceRNG} + `}
			else {d6Result += `${diceRNG})`}
			d6Total = d6Total + diceRNG
			d6Qty = d6Qty -1
		}
		document.getElementById("genBox").innerHTML += `${d6Result} = ${d6Total}\n`;
	} else {}
	if (d8Qty > 0) {
		while (d8Qty > 0) {
			diceRNG = Math.floor(Math.random() * 8) + 1;
			if (d8Qty > 1 ) {d8Result += `${diceRNG} + `}
			else {d8Result += `${diceRNG})`}
			d8Total = d8Total + diceRNG
			d8Qty = d8Qty -1
		}
		document.getElementById("genBox").innerHTML += `${d8Result} = ${d8Total}\n`;
	} else {}
	if (d10Qty > 0) {
		while (d10Qty > 0) {
			diceRNG = Math.floor(Math.random() * 10) + 1;
			if (d10Qty > 1 ) {d10Result += `${diceRNG} + `}
			else {d10Result += `${diceRNG})`}
			d10Total = d10Total + diceRNG
			d10Qty = d10Qty -1
		}
		document.getElementById("genBox").innerHTML += `${d10Result} = ${d10Total}\n`;
	} else {}
	if (d12Qty > 0) {
		while (d12Qty > 0) {
			diceRNG = Math.floor(Math.random() * 12) + 1;
			if (d12Qty > 1 ) {d12Result += `${diceRNG} + `}
			else {d12Result += `${diceRNG})`}
			d12Total = d12Total + diceRNG
			d12Qty = d12Qty -1
		}
		document.getElementById("genBox").innerHTML += `${d12Result} = ${d12Total}\n`;
	} else {}
	if (d20Qty > 0) {
		while (d20Qty > 0) {
			diceRNG = Math.floor(Math.random() * 20) + 1;
			if (d20Qty > 1 ) {d20Result += `${diceRNG} + `}
			else {d20Result += `${diceRNG})`}
			d20Total = d20Total + diceRNG
			d20Qty = d20Qty -1
		}
		document.getElementById("genBox").innerHTML += `${d20Result} = ${d20Total}\n`;
	} else {}
		if (diceMod < 0) {
			diceNeg = ""
		}
		else {}
	diceTotal = d4Total + d6Total + d8Total + d10Total + d12Total + d20Total + diceMod
	document.getElementById("genBox").innerHTML += `Modifier: ${diceNeg}${diceMod}\nTotal: ${diceTotal}`;
}

function CreatureTypeGen() {
	let creatureResult
	let RNG = Math.floor(Math.random() * 14) + 1;
	
	if (RNG == 1) {creatureResult = "Aberration";}
	else if (RNG == 2) {creatureResult = "Beast";}
	else if (RNG == 3) {creatureResult = "Celestial";}
	else if (RNG == 4) {creatureResult = "Construct";}
	else if (RNG == 5) {creatureResult = "Dragon";}
	else if (RNG == 6) {creatureResult = "Elemental";}
	else if (RNG == 7) {creatureResult = "Fey";}
	else if (RNG == 8) {creatureResult = "Fiend";}
	else if (RNG == 9) {creatureResult = "Giant";}
	else if (RNG == 10) {creatureResult = "Plant";}
	else if (RNG == 11) {creatureResult = "Ooze";}
	else if (RNG == 12) {creatureResult = "Undead";}
	else if (RNG == 13) {creatureResult = "Monstrosity";}
	else if (RNG == 14) {creatureResult = "Humanoid";}
	else {}
	GlobalCreature = creatureResult
	document.getElementById("charBox").innerHTML = creatureResult;
}

function WeatherInfo() {
	document.getElementById("infoBox").innerHTML = "Partially Cloudy \nThunderstorm \nHailstorm/Wildfire \nSnow/Heavy Downpour \nRain \nOvercast \nSunny \nLight Drizzle \nVery Windy \nHeavy Fog \nAcid Rain \nHeatwave/Duststorm/Blizzard/Flood";
}

function PartInfo() {
	document.getElementById("infoBox").innerHTML = "Head \nUpper Arm \nForearm \nTorso \nThigh \nCalf";
}

function OrganInfo() {
	document.getElementById("infoBox").innerHTML = "Brain \nHeart \nSkin \nLung \nKidney \nStomach \nLiver \nEye \nEardrum \nGenitals \nTeeth \nHair \nMuscle(many options) \nBone(many options)";
}

function FailInfo() {
	document.getElementById("infoBox").innerHTML = "Nothing Happens \nDrop Weapon \nHit Adjacent Creature \nTarget gets an Opportunity Attack \nTarget has Advantage on Next Attack \nFall Prone \nYou have Disadvantage on Next Attack \nSelf Injury (Weapon Dice Only)";
}

function ConjureInfo() {
	document.getElementById("infoBox").innerHTML = "Half the Max CR \n1 CR under Max \nMax CR; Poor Pick \nMax CR; Good Pick";
}

function MadnessInfo() {
	document.getElementById("infoBox").innerHTML = "(Short) The character becomes Incapacitated and spends the Duration screaming, laughing, or weeping. \n(Short) The character becomes Frightened and must use his or her action and Movement each round to flee from the source of the fear. \n(Short) The character begins babbling and is incapable of normal Speech or Spellcasting. \n(Short) The character must use his or her action each round to Attack the nearest creature. \n(Short) The character experiences vivid hallucinations and has disadvantage on Ability Checks. \n(Short) The character does whatever anyone tells him or her to do that isn’t obviously self-­ destructive. \n(Short) The character experiences an overpowering urge to eat something strange such as dirt, slime, or offal. \n(Short) The character is Stunned. \n(Short) The character falls Unconscious. \n(Short) The character retreats into his or her mind and becomes Paralyzed. The Effect ends if the character takes any damage. \n \n(Long) The character feels compelled to repeat a specific activity over and over, such as washing hands, touching things, praying, or counting coins. \n(Long) The character experiences vivid hallucinations and has disadvantage on Ability Checks. \n(Long) The character suffers extreme paranoia. The character has disadvantage on Wisdom and Charisma checks. \n(Long) The character regards something (usually the source of madness) with intense revulsion, as if affected by the antipathy Effect of the Antipathy/Sympathy spell. \n(Long) The character experiences a powerful delusion. Choose a potion. The character imagines that he or she is under its Effects. \n(Long) The character becomes attached to a 'lucky charm,' such as a person or an object, and has disadvantage on Attack rolls, Ability Checks, and Saving Throws while more than 30 feet from it. \n(Long) The character is Blinded (25%) or Deafened (75%). \n(Long) The character experiences uncontrollable tremors or tics, which impose disadvantage on Attack rolls, Ability Checks, and Saving Throws that involve Strength or Dexterity. \n(Long) The character suffers from partial amnesia. The character knows who he or she is and retains racial Traits and Class Features, but doesn’t recognize other people or remember anything that happened before the madness took Effect. \n(Long) Whenever the character takes damage, he or she must succeed on a DC 15 Wisdom saving throw or be affected as though he or she failed a saving throw against the Confusion spell. The Confusion Effect lasts for 1 minute. \n(Long) The character loses the ability to speak. \n(Long) The character falls Unconscious. No amount of jostling or damage can wake the character. \n \n(Indefinite) Being drunk keeps me sane. \n(Indefinite) I keep whatever I find. \n(Indefinite) I try to become more like someone else I know—adopting his or her style of dress, mannerisms, and name. \n(Indefinite) I must bend the truth, exaggerate, or outright lie to be interesting to other people. \n(Indefinite) Achieving my goal is the only thing of interest to me, and I’ll ignore everything else to pursue it. \n(Indefinite) I find it hard to care about anything that goes on around me. \n(Indefinite) I don’t like the way people judge me all the time. \n(Indefinite) I am the smartest, wisest, strongest, fastest, and most beautiful person I know. \n(Indefinite) I am convinced that powerful enemies are hunting me, and their agents are everywhere I go. I am sure they’re watching me all the time. \n(Indefinite) There’s only one person I can trust. And only I can see this Special friend. \n(Indefinite) I can’t take anything seriously. The more serious the situation, the funnier I find it. \n(Indefinite) I’ve discovered that I really like killing people. \n";
}

function CreatureInfo() {
	const logFileText = async file => {
    const response = await fetch(file)
    const text = await response.text()
    console.log(text)
}

logFileText('./lists/creature.txt')
}