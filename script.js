/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});

// Global Variables //
// Global Variables //
// Global Variables //
var GAttribute
var GSkillX
var GTerrain
var GWeather
var GCondition
var GPhysical
var GElement
var GAction
var GFightingStyle
var GInfusion
var GInvocation
var GMetaMagic
var GManeuver
var GWizard
var GWarlock

var GArmor
var GArmorLight
var GArmorMedium
var GArmorHeavy
var GWeapon
var GWeaponSimple
var GWeaponMartial
var GWeaponRanged
var GAccessory
var GArtisanTool
var GSpell
var GSpellGen0
var GSpellGen1
var GSpellGen2
var GSpellGen3
var GSpellGen4
var GSpellGen5
var GSpellGen6
var GSpellGen7
var GSpellGen8
var GSpellGen9
	// Glyphs //
var GWeaponAffix
var GArmorAffix
var GAccessoryAffix
var GTaintedWeapon
var GTaintedArmor
var GTaintedAccessory
var GClassAffix
	// Glyphs //
var GRace
var GClass
var GBackground
var GAlign
	// Character Gen //
var GStatRoll = 0
var GCR = 0
var GTier = 0
var GPB = 0
var GDarkvision = 0
var GTremorsense = 0
var GBlindsight = 0
var GTruesight = 0
const GLanguage = []
var GTelepathyRange = 0
var GCreature = ""
var GHumanoid = ""
var GElemental = ""
var GSize = ""
var GMagic = ""
var GHP = 0
var GHPTotal = 0
var GHPMulti = 1
var GHitDiceQty = 0
var GHitDiceSize = 0
var GFirstStat = ""
var GSecondStat = ""
var GThirdStat = ""
var GBadStat = ""
var GStr = 0
var GStrMod = 0
var GDex = 0
var GDexMod = 0
var GCon = 0
var GConMod = 0
var GInt = 0
var GIntMod = 0
var GWis = 0
var GWisMod = 0
var GCha = 0
var GChaMod = 0
var GWeaponMod = 0
var GWeaponHit = 0
var GSpellMod = 0
var GSpellHit = 0
var GSpellDC = 0
const GSkill = []
const GSave = []
var GSaveBonus = 0
var GSkillBonus = 0
const GRes = []
const GVuln = []
const GCondImmune = []
const GImmune = []
var GAC = 0
var GHitPoints = ""
var GSpeedTotal = ""
var GSpeed = 0
var GSpeedFly = 0
var GSpeedSwim = 0
var GSpeedClimb = 0
var GSpeedBurrow = 0
var GTraitQty = 1
const GSpellQty = []
var GSpell0 = ""
var GSpell1 = ""
var GSpell3 = ""
var GSpell5 = ""
var GMultiattack = 0
var GActionQty = 1
var GBonusQty = 1
var GRechargeQty = 1
var GReactionQty = 1
var GLegendaryQty = 1
var GLegendaryUses = 1
var GLegendaryResist = 1
var GLairActiveQty = 1
var GLairPassiveQty = 1
var GLairPassiveRange = ""
var GMod = ""
var GSpellStat = ""
const GTraitNames = []
const GTraits = []
const GActionNames = []
const GActions = []
const GBonusNames = []
const GBonuses = []
const GRechargeNames = []
const GRecharges = []
const GReactionNames = []
const GReactions = []
const GLegendaryNames = []
const GLegendaries = []
const GLairActiveNames = []
const GLairActives = []
const GLairPassiveNames = []
const GLairPassives = []
var GTempSave = ""
var GSaveTotal = ""
var GSkillTotal = ""
var GSenseTotal = ""
var GLanguageTotal = ""
var GResTotal = ""
var GImmuneTotal = ""
var GCondImmuneTotal = ""
var GVulnTotal = ""
var GNum = 0
var GSkillMod = ""
var GModX = false
var GRay = ``
var GRay1 = ``
var GRay2 = ``
var GRay3 = ``
var GRay4 = ``
var GRay5 = ``
var GRay6 = ``
var GBreath = ``
var GBreathName = ``
	// Character Gen //
// Global Variables //
// Global Variables //
// Global Variables //

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
	else if (critFail == 7 || critFail == 8) {critFailX = "Target gets an Opportunity Attack";}
	else if (critFail == 9 || critFail == 10) {critFailX = "Next Attack against You has Advantage";}
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

// SUBTYPES //
// SUBTYPES //
// SUBTYPES //
// SUBTYPES //
// SUBTYPES //

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
	GCreature = creatureResult
}
	function CreatureBtn() {
		CreatureTypeGen();
		document.getElementById("glyphBox").innerHTML = GCreature;
	}

function AttributeTypeGen() {
	let attributeResult
	let RNG = Math.floor(Math.random() * 6) + 1;
	
	if (RNG == 1) {attributeResult = "Strength";}
	else if (RNG == 2) {attributeResult = "Dexterity";}
	else if (RNG == 3) {attributeResult = "Constitution";}
	else if (RNG == 4) {attributeResult = "Intelligence";}
	else if (RNG == 5) {attributeResult = "Wisdom";}
	else if (RNG == 6) {attributeResult = "Charisma";}
	else {}
	GAttribute = attributeResult
}
	function AttributeBtn() {
		AttributeTypeGen()
		document.getElementById("glyphBox").innerHTML = GAttribute;
	}

function PhysicalTypeGen() {
	let physicalResult
	let RNG = Math.floor(Math.random() * 4) + 1;
	
	if (RNG == 1) {physicalResult = "Bludgeoning";}
	else if (RNG == 2) {physicalResult = "Slashing";}
	else if (RNG == 3) {physicalResult = "Piercing";}
	else if (RNG == 4) {physicalResult = "Native Weapon Type";}
	else {}
	GPhysical = physicalResult
}
	function PhysicalBtn() {
		PhysicalTypeGen()
		document.getElementById("glyphBox").innerHTML = GPhysical;
	}

function ElementTypeGen() {
	let elementResult
	let RNG = Math.floor(Math.random() * 10) + 1;
	
	if (RNG == 1) {elementResult = "Acid";}
	else if (RNG == 2) {elementResult = "Cold";}
	else if (RNG == 3) {elementResult = "Fire";}
	else if (RNG == 4) {elementResult = "Thunder";}
	else if (RNG == 5) {elementResult = "Lightning";}
	else if (RNG == 6) {elementResult = "Force";}
	else if (RNG == 7) {elementResult = "Necrotic";}
	else if (RNG == 8) {elementResult = "Radiant";}
	else if (RNG == 9) {elementResult = "Poison";}
	else if (RNG == 10) {elementResult = "Psychic";}
	else {}
	GElement = elementResult
}
	function ElementBtn() {
		ElementTypeGen()
		document.getElementById("glyphBox").innerHTML = GElement;
	}

function SkillTypeGen() {
	let skillResult
	let RNG = Math.floor(Math.random() * 19) + 1;
	
	if (RNG == 1) {skillResult = "Acrobatics";}
	else if (RNG == 2) {skillResult = "Animal Handling";}
	else if (RNG == 3) {skillResult = "Arcana";}
	else if (RNG == 4) {skillResult = "Athletics";}
	else if (RNG == 5) {skillResult = "Deception";}
	else if (RNG == 6) {skillResult = "History";}
	else if (RNG == 7) {skillResult = "Initiative";}
	else if (RNG == 8) {skillResult = "Insight";}
	else if (RNG == 9) {skillResult = "Intimidation";}
	else if (RNG == 10) {skillResult = "Investigation";}
	else if (RNG == 11) {skillResult = "Medicine";}
	else if (RNG == 12) {skillResult = "Nature";}
	else if (RNG == 13) {skillResult = "Perception";}
	else if (RNG == 14) {skillResult = "Performance";}
	else if (RNG == 15) {skillResult = "Persuasion";}
	else if (RNG == 16) {skillResult = "Religion";}
	else if (RNG == 17) {skillResult = "Sleight of Hand";}
	else if (RNG == 18) {skillResult = "Stealth";}
	else if (RNG == 19) {skillResult = "Survival";}
	else {}
	GSkillX = skillResult
}
	function SkillBtn() {
		SkillTypeGen()
		document.getElementById("glyphBox").innerHTML = GSkillX;
	}

function ConditionTypeGen() {
	let conditionResult
	let RNG = Math.floor(Math.random() * 10) + 1;
	
	if (RNG == 1) {conditionResult = "Blindness & Deafness";}
	else if (RNG == 2) {conditionResult = "Charm";}
	else if (RNG == 3) {conditionResult = "Frightened";}
	else if (RNG == 4) {conditionResult = "Paralyzed";}
	else if (RNG == 5) {conditionResult = "Petrified";}
	else if (RNG == 6) {conditionResult = "Poisoned";}
	else if (RNG == 7) {conditionResult = "Disease";}
	else if (RNG == 8) {conditionResult = "Curse";}
	else if (RNG == 9) {conditionResult = "Stunned";}
	else if (RNG == 10) {conditionResult = "Grappled (unless it also Restrains)";}
	else {}
	GCondition = conditionResult
}
	function ConditionBtn() {
		ConditionTypeGen()
		document.getElementById("glyphBox").innerHTML = GCondition;
	}

function ActionTypeGen() {
	let actionResult
	let RNG = Math.floor(Math.random() * 5) + 1;
	
	if (RNG == 1) {actionResult = "Disengage";}
	else if (RNG == 2) {actionResult = "Hide";}
	else if (RNG == 3) {actionResult = "Dash";}
	else if (RNG == 4) {actionResult = "Dodge";}
	else if (RNG == 5) {actionResult = "Help";}
	else {}
	GAction = actionResult
}
	function ActionBtn() {
		ActionTypeGen()
		document.getElementById("glyphBox").innerHTML = GAction;
	}

function WeatherTypeGen() {
	let weatherResult
	let RNG = Math.floor(Math.random() * 2) + 1;
	
	if (RNG == 1) {weatherResult = "Extreme Heat";}
	else if (RNG == 2) {weatherResult = "Extreme Cold";}
	else {}
	GWeather = weatherResult
}
	function WeatherBtn() {
		WeatherTypeGen()
		document.getElementById("glyphBox").innerHTML = GWeather;
	}

function WizardTypeGen() {
	let wizardResult
	let RNG = Math.floor(Math.random() * 8) + 1;
	
	if (RNG == 1) {wizardResult = "Abjuration";}
	else if (RNG == 2) {wizardResult = "Conjuration";}
	else if (RNG == 3) {wizardResult = "Divination";}
	else if (RNG == 4) {wizardResult = "Enchantment";}
	else if (RNG == 5) {wizardResult = "Evocation";}
	else if (RNG == 6) {wizardResult = "Illusion";}
	else if (RNG == 7) {wizardResult = "Necromancy";}
	else if (RNG == 8) {wizardResult = "Transmutation";}
	else {}
	GWizard = wizardResult
}
	function WizardBtn() {
		WizardTypeGen()
		document.getElementById("glyphBox").innerHTML = GWizard;
	}

function WarlockTypeGen() {
	let warlockResult
	let RNG = Math.floor(Math.random() * 7) + 1;
	
	if (RNG == 1) {warlockResult = "Archfey";}
	else if (RNG == 2) {warlockResult = "Celestial";}
	else if (RNG == 3) {warlockResult = "Fathomless";}
	else if (RNG == 4) {warlockResult = "Fiend";}
	else if (RNG == 5) {warlockResult = "Genie";}
	else if (RNG == 6) {warlockResult = "Great Old One";}
	else if (RNG == 7) {warlockResult = "Hexblade";}
	else {}
	GWarlock = warlockResult
}
	function WarlockBtn() {
		WarlockTypeGen()
		document.getElementById("glyphBox").innerHTML = GWarlock;
	}

function FightingStyleTypeGen() {
	let fightingStyleResult
	let RNG = Math.floor(Math.random() * 14) + 1;
	
	if (RNG == 1) {fightingStyleResult = "Archery";}
	else if (RNG == 2) {fightingStyleResult = "Blind Fighting";}
	else if (RNG == 3) {fightingStyleResult = "Defense";}
	else if (RNG == 4) {fightingStyleResult = "Dueling";}
	else if (RNG == 5) {fightingStyleResult = "Great Weapon Fighting";}
	else if (RNG == 6) {fightingStyleResult = "Interception";}
	else if (RNG == 7) {fightingStyleResult = "Protection";}
	else if (RNG == 8) {fightingStyleResult = "Superior Technique";}
	else if (RNG == 9) {fightingStyleResult = "Thrown Weapon Fighting";}
	else if (RNG == 10) {fightingStyleResult = "Two-Weapon Fighting";}
	else if (RNG == 11) {fightingStyleResult = "Unarmed Fighting";}
	else if (RNG == 12) {fightingStyleResult = "Close Quarters Shooter";}
	else if (RNG == 13) {fightingStyleResult = "Mariner";}
	else if (RNG == 14) {fightingStyleResult = "Tunnel Fighter";}

	else {}
	GFightingStyle = fightingStyleResult
}
	function FightingStyleBtn() {
		FightingStyleTypeGen()
		document.getElementById("glyphBox").innerHTML = GFightingStyle;
	}

function TerrainTypeGen() {
	let terrainResult
	let RNG = Math.floor(Math.random() * 9) + 1;
	
	if (RNG == 1) {terrainResult = "Arctic";}
	else if (RNG == 2) {terrainResult = "Coast";}
	else if (RNG == 3) {terrainResult = "Desert";}
	else if (RNG == 4) {terrainResult = "Forest";}
	else if (RNG == 5) {terrainResult = "Grassland";}
	else if (RNG == 6) {terrainResult = "Mountain";}
	else if (RNG == 7) {terrainResult = "Swamp";}
	else if (RNG == 8) {terrainResult = "Underdark";}
	else if (RNG == 9) {terrainResult = "Urban";}
	else {}
	GTerrain = terrainResult
}
	function TerrainBtn() {
		TerrainTypeGen()
		document.getElementById("glyphBox").innerHTML = GTerrain;
	}

function MetaMagicTypeGen() {
	let metaMagicResult
	let RNG = Math.floor(Math.random() * 10) + 1;
	
	if (RNG == 1) {metaMagicResult = "Careful Spell";}
	else if (RNG == 2) {metaMagicResult = "Distant Spell";}
	else if (RNG == 3) {metaMagicResult = "Empowered Spell";}
	else if (RNG == 4) {metaMagicResult = "Extended Spell";}
	else if (RNG == 5) {metaMagicResult = "Heightened Spell";}
	else if (RNG == 6) {metaMagicResult = "Quickened Spell";}
	else if (RNG == 7) {metaMagicResult = "Seeking Spell";}
	else if (RNG == 8) {metaMagicResult = "Subtle Spell";}
	else if (RNG == 9) {metaMagicResult = "Trasmuted Spell";}
	else if (RNG == 10) {metaMagicResult = "Twinned Spell";}
	else {}
	GMetaMagic = metaMagicResult
}
	function MetaMagicBtn() {
		MetaMagicTypeGen()
		document.getElementById("glyphBox").innerHTML = GMetaMagic;
	}

function ManeuverTypeGen() {
	let maneuverResult
	let RNG = Math.floor(Math.random() * 23) + 1;
	
	if (RNG == 1) {maneuverResult = "Ambush";}
	else if (RNG == 2) {maneuverResult = "Bait and Switch";}
	else if (RNG == 3) {maneuverResult = "Brace";}
	else if (RNG == 4) {maneuverResult = "Commander's Strike";}
	else if (RNG == 5) {maneuverResult = "Commanding Presence";}
	else if (RNG == 6) {maneuverResult = "Disarming Attack";}
	else if (RNG == 7) {maneuverResult = "Distracting Strike";}
	else if (RNG == 8) {maneuverResult = "Evasive Footwork";}
	else if (RNG == 9) {maneuverResult = "Feinting Attack";}
	else if (RNG == 10) {maneuverResult = "Goading Attack";}
	else if (RNG == 11) {maneuverResult = "Grappling Strike";}
	else if (RNG == 12) {maneuverResult = "Lunging Attack";}
	else if (RNG == 13) {maneuverResult = "Maneuvering Attack";}
	else if (RNG == 14) {maneuverResult = "Menacing Attack";}
	else if (RNG == 15) {maneuverResult = "Parry";}
	else if (RNG == 16) {maneuverResult = "Precision Attack";}
	else if (RNG == 17) {maneuverResult = "Pushing Attack";}
	else if (RNG == 18) {maneuverResult = "Quick Toss";}
	else if (RNG == 19) {maneuverResult = "Rally";}
	else if (RNG == 20) {maneuverResult = "Riposte";}
	else if (RNG == 21) {maneuverResult = "Sweeping Attack";}
	else if (RNG == 22) {maneuverResult = "Tactical Assessment";}
	else if (RNG == 23) {maneuverResult = "Trip Attack";}
	else {}
	GManeuver = maneuverResult
}
	function ManeuverBtn() {
		ManeuverTypeGen()
		document.getElementById("glyphBox").innerHTML = GManeuver;
	}

function InfusionTypeGen() {
	let infusionResult
	let RNG = Math.floor(Math.random() * 16) + 1;
	
	if (RNG == 1) {infusionResult = "Arcane Propulsion Armor";}
	else if (RNG == 2) {infusionResult = "Armor of Magical Strength";}
	else if (RNG == 3) {infusionResult = "Boots of the Winding Path";}
	else if (RNG == 4) {infusionResult = "Enhanced Arcane Focus";}
	else if (RNG == 5) {infusionResult = "Enhanced Defense";}
	else if (RNG == 6) {infusionResult = "Enhanced Weapon";}
	else if (RNG == 7) {infusionResult = "Helm of Awareness";}
	else if (RNG == 8) {infusionResult = "Homunculus Servant";}
	else if (RNG == 9) {infusionResult = "Mind Sharpener";}
	else if (RNG == 10) {infusionResult = "Radiant Weapon";}
	else if (RNG == 11) {infusionResult = "Repeating Shot";}
	else if (RNG == 12) {infusionResult = "Replicate Magic Item";}
	else if (RNG == 13) {infusionResult = "Repulsion Shield";}
	else if (RNG == 14) {infusionResult = "Resistant Armor";}
	else if (RNG == 15) {infusionResult = "Returning Weapon";}
	else if (RNG == 16) {infusionResult = "Spell-Refueling Ring";}
	else {}
	GInfusion = infusionResult
}
	function InfusionBtn() {
		InfusionTypeGen()
		document.getElementById("glyphBox").innerHTML = GInfusion;
	}

function InvocationTypeGen() {
	let invocationResult
	let RNG = Math.floor(Math.random() * 54) + 1;
	
	if (RNG == 1) {invocationResult = "Agonizing Blast";}
	else if (RNG == 2) {invocationResult = "Armor of Shadows";}
	else if (RNG == 3) {invocationResult = "Ascendant Step";}
	else if (RNG == 4) {invocationResult = "Aspect of the Moon (Pact of the Tome)";}
	else if (RNG == 5) {invocationResult = "Beast Speech";}
	else if (RNG == 6) {invocationResult = "Beguiling Influence";}
	else if (RNG == 7) {invocationResult = "Bewitching Whispers";}
	else if (RNG == 8) {invocationResult = "Bond of the Talisman (Pact of the Talisman)";}
	else if (RNG == 9) {invocationResult = "Book of Ancient Secrets (Pact of the Tome)";}
	else if (RNG == 10) {invocationResult = "Chains of Carceri (Pact of the Chain)";}
	else if (RNG == 11) {invocationResult = "Cloak of Flies";}
	else if (RNG == 12) {invocationResult = "Devil's Sight";}
	else if (RNG == 13) {invocationResult = "Dreadful Word";}
	else if (RNG == 14) {invocationResult = "Eldritch Mind";}
	else if (RNG == 15) {invocationResult = "Eldritch Sight";}
	else if (RNG == 16) {invocationResult = "Eldritch Smite (Pact of the Blade)";}
	else if (RNG == 17) {invocationResult = "Eldritch Spear";}
	else if (RNG == 18) {invocationResult = "Eyes of the Rune Keeper";}
	else if (RNG == 19) {invocationResult = "Far Scribe (Pact of the Tome)";}
	else if (RNG == 20) {invocationResult = "Fiendish Vigor";}
	else if (RNG == 21) {invocationResult = "Gaze of Two Minds";}
	else if (RNG == 22) {invocationResult = "Ghostly Gaze";}
	else if (RNG == 23) {invocationResult = "Gift of the Depths";}
	else if (RNG == 24) {invocationResult = "Gift of the Ever-Living Ones (Pact of the Chain)";}
	else if (RNG == 25) {invocationResult = "Gift of the Protectors (Pact of the Tome)";}
	else if (RNG == 26) {invocationResult = "Grasp of Hadar";}
	else if (RNG == 27) {invocationResult = "Improved Pact Weapon (Pact of the Blade)";}
	else if (RNG == 28) {invocationResult = "Investment of the Chain Master (Pact of the Chain)";}
	else if (RNG == 29) {invocationResult = "Lance of Lethargy";}
	else if (RNG == 30) {invocationResult = "Lifedrinker (Pact of the Blade)";}
	else if (RNG == 31) {invocationResult = "Maddening Hex";}
	else if (RNG == 32) {invocationResult = "Mask of Many Faces";}
	else if (RNG == 33) {invocationResult = "Master of Myriad Forms";}
	else if (RNG == 34) {invocationResult = "Minions of Chaos";}
	else if (RNG == 35) {invocationResult = "Mire the Mind";}
	else if (RNG == 36) {invocationResult = "Misty Visions";}
	else if (RNG == 37) {invocationResult = "One with Shadows";}
	else if (RNG == 38) {invocationResult = "Otherworldly Leap";}
	else if (RNG == 39) {invocationResult = "Protection of the Talisman (Pact of the Talisman)";}
	else if (RNG == 40) {invocationResult = "Rebuke of the Talisman (Pact of the Talisman)";}
	else if (RNG == 41) {invocationResult = "Relentless Hex";}
	else if (RNG == 42) {invocationResult = "Repelling Blast";}
	else if (RNG == 43) {invocationResult = "Sculptor of Flesh";}
	else if (RNG == 44) {invocationResult = "Shroud of Shadow";}
	else if (RNG == 45) {invocationResult = "Sign of Ill Omen";}
	else if (RNG == 46) {invocationResult = "Thief of Five Fates";}
	else if (RNG == 47) {invocationResult = "Thirsting Blade (Pact of the Blade)";}
	else if (RNG == 48) {invocationResult = "Tomb of Levistus";}
	else if (RNG == 49) {invocationResult = "Trickster's Escape";}
	else if (RNG == 50) {invocationResult = "Undying Servitude";}
	else if (RNG == 51) {invocationResult = "Visions of Distant Realms";}
	else if (RNG == 52) {invocationResult = "Voice of the Chain Master (Pact of the Chain)";}
	else if (RNG == 53) {invocationResult = "Whispers of the Grave";}
	else if (RNG == 54) {invocationResult = "Witch Sight";}
	else {}
	GInvocation = invocationResult
}
	function InvocationBtn() {
		InvocationTypeGen()
		document.getElementById("glyphBox").innerHTML = GInvocation;
	}

function ArmorAll() {
	let RNG = Math.floor(Math.random() * 13) + 1;
	if (RNG == 1) {GArmor = "Shield";}
	else if (RNG == 2) {GArmor = "Leather";}
	else if (RNG == 3) {GArmor = "Studded Leather";}
	else if (RNG == 4) {GArmor = "Padded";}
	else if (RNG == 5) {GArmor = "Hide";}
	else if (RNG == 6) {GArmor = "Breastplate";}
	else if (RNG == 7) {GArmor = "Chain Shirt";}
	else if (RNG == 8) {GArmor = "Half Plate";}
	else if (RNG == 9) {GArmor = "Scale Mail";}
	else if (RNG == 10) {GArmor = "Ring Mail";}
	else if (RNG == 11) {GArmor = "Chain Mail";}
	else if (RNG == 12) {GArmor = "Splint";}
	else if (RNG == 13) {GArmor = "Plate";}
}
	function ArmorAllBtn() {ArmorAll(); document.getElementById("itemBox").innerHTML = GArmor;}

function ArmorLight() {
	let RNG = Math.floor(Math.random() * 3) + 1;
	if (RNG == 1) {GArmorLight = "Leather";}
	else if (RNG == 2) {GArmorLight = "Studded Leather";}
	else if (RNG == 3) {GArmorLight = "Padded";}
}
	function ArmorLightBtn() {ArmorLight(); document.getElementById("itemBox").innerHTML = GArmorLight;}

function ArmorMedium() {
	let RNG = Math.floor(Math.random() * 5) + 1;
	if (RNG == 1) {GArmorMedium = "Hide";}
	else if (RNG == 2) {GArmorMedium = "Breastplate";}
	else if (RNG == 3) {GArmorMedium = "Chain Shirt";}
	else if (RNG == 4) {GArmorMedium = "Half Plate";}
	else if (RNG == 5) {GArmorMedium = "Scale Mail";}
}
	function ArmorMediumBtn() {ArmorMedium(); document.getElementById("itemBox").innerHTML = GArmorMedium;}

function ArmorHeavy() {
	let RNG = Math.floor(Math.random() * 4) + 1;
	if (RNG == 1) {GArmorHeavy = "Ring Mail";}
	else if (RNG == 2) {GArmorHeavy = "Chain Mail";}
	else if (RNG == 3) {GArmorHeavy = "Splint";}
	else if (RNG == 4) {GArmorHeavy = "Plate";}
}
	function ArmorHeavyBtn() {ArmorHeavy(); document.getElementById("itemBox").innerHTML = GArmorHeavy;}

function WeaponAll() {
	let RNG = Math.floor(Math.random() * 67) + 1;
	if (RNG >= 1 && RNG <= 2) {GWeapon = "Club";}
	else if (RNG >= 3 && RNG <= 4) {GWeapon = "Dagger";}
	else if (RNG >= 5 && RNG <= 6) {GWeapon = "Greatclub";}
	else if (RNG >= 7 && RNG <= 8) {GWeapon = "Handaxe";}
	else if (RNG >= 9 && RNG <= 10) {GWeapon = "Javelin";}
	else if (RNG == 11) {GWeapon = "Lance";}
	else if (RNG >= 12 && RNG <= 13) {GWeapon = "Mace";}
	else if (RNG >= 14 && RNG <= 15) {GWeapon = "Quarterstaff";}
	else if (RNG >= 16 && RNG <= 17) {GWeapon = "Sickle";}
	else if (RNG >= 18 && RNG <= 19) {GWeapon = "Spear";}
	else if (RNG >= 20 && RNG <= 21) {GWeapon = "Light Crossbow";}
	else if (RNG >= 22 && RNG <= 23) {GWeapon = "Shortbow";}
	else if (RNG >= 24 && RNG <= 25) {GWeapon = "Battleaxe";}
	else if (RNG >= 26 && RNG <= 27) {GWeapon = "Flail";}
	else if (RNG >= 28 && RNG <= 29) {GWeapon = "Glaive";}
	else if (RNG >= 30 && RNG <= 31) {GWeapon = "Greataxe";}
	else if (RNG >= 32 && RNG <= 33) {GWeapon = "Greatsword";}
	else if (RNG >= 34 && RNG <= 35) {GWeapon = "Halberd";}
	else if (RNG >= 36 && RNG <= 37) {GWeapon = "Longsword";}
	else if (RNG >= 38 && RNG <= 39) {GWeapon = "Maul";}
	else if (RNG >= 40 && RNG <= 41) {GWeapon = "Morningstar";}
	else if (RNG >= 42 && RNG <= 43) {GWeapon = "Pike";}
	else if (RNG >= 44 && RNG <= 45) {GWeapon = "Rapier";}
	else if (RNG >= 46 && RNG <= 47) {GWeapon = "Scimitar";}
	else if (RNG >= 48 && RNG <= 49) {GWeapon = "Shortsword";}
	else if (RNG >= 50 && RNG <= 51) {GWeapon = "Trident";}
	else if (RNG >= 52 && RNG <= 53) {GWeapon = "War Pick";}
	else if (RNG >= 54 && RNG <= 55) {GWeapon = "War Hammer";}
	else if (RNG >= 56 && RNG <= 57) {GWeapon = "Whip";}
	else if (RNG >= 58 && RNG <= 59) {GWeapon = "Hand Crossbow";}
	else if (RNG >= 60 && RNG <= 61) {GWeapon = "Heavy Crossbow";}
	else if (RNG >= 62 && RNG <= 63) {GWeapon = "Longbow";}	
	else if (RNG >= 64 && RNG <= 65) {GWeapon = "Light Hammer";}	
	else if (RNG == 66) {GWeapon = "Sling";}
	else if (RNG == 67) {GWeapon = "Blowgun";}
}
	function WeaponAllBtn() {WeaponAll(); document.getElementById("itemBox").innerHTML = GWeapon;}

function WeaponSimple() {
	let RNG = Math.floor(Math.random() * 25) + 1;
	if (RNG >= 1 && RNG <= 2) {GWeaponSimple = "Club";}
	else if (RNG >= 3 && RNG <= 4) {GWeaponSimple = "Dagger";}
	else if (RNG >= 5 && RNG <= 6) {GWeaponSimple = "Greatclub";}
	else if (RNG >= 7 && RNG <= 8) {GWeaponSimple = "Handaxe";}
	else if (RNG >= 9 && RNG <= 10) {GWeaponSimple = "Javelin";}
	else if (RNG >= 11 && RNG <= 12) {GWeaponSimple = "Light Hammer";}
	else if (RNG >= 13 && RNG <= 14) {GWeaponSimple = "Mace";}
	else if (RNG >= 15 && RNG <= 16) {GWeaponSimple = "Quarterstaff";}
	else if (RNG >= 17 && RNG <= 18) {GWeaponSimple = "Sickle";}
	else if (RNG >= 19 && RNG <= 20) {GWeaponSimple = "Spear";}
	else if (RNG >= 21 && RNG <= 22) {GWeaponSimple = "Light Crossbow";}
	else if (RNG >= 23 && RNG <= 24) {GWeaponSimple = "Shortbow";}
	else if (RNG == 25) {GWeaponSimple = "Sling";}
}
	function WeaponSimpleBtn() {WeaponSimple(); document.getElementById("itemBox").innerHTML = GWeaponSimple;}

function WeaponMartial() {
	let RNG = Math.floor(Math.random() * 42) + 1;
	if (RNG >= 1 && RNG <= 2) {GWeaponMartial = "Battleaxe";}
	else if (RNG >= 3 && RNG <= 4) {GWeaponMartial = "Flail";}
	else if (RNG >= 5 && RNG <= 6) {GWeaponMartial = "Glaive";}
	else if (RNG >= 7 && RNG <= 8) {GWeaponMartial = "Greataxe";}
	else if (RNG >= 9 && RNG <= 10) {GWeaponMartial = "Greatsword";}
	else if (RNG >= 11 && RNG <= 12) {GWeaponMartial = "Halberd";}
	else if (RNG >= 13 && RNG <= 14) {GWeaponMartial = "Longsword";}
	else if (RNG >= 15 && RNG <= 16) {GWeaponMartial = "Maul";}
	else if (RNG >= 17 && RNG <= 18) {GWeaponMartial = "Morningstar";}
	else if (RNG >= 19 && RNG <= 20) {GWeaponMartial = "Pike";}
	else if (RNG >= 21 && RNG <= 22) {GWeaponMartial = "Rapier";}
	else if (RNG >= 23 && RNG <= 24) {GWeaponMartial = "Scimitar";}
	else if (RNG >= 25 && RNG <= 26) {GWeaponMartial = "Shortsword";}
	else if (RNG >= 27 && RNG <= 28) {GWeaponMartial = "Trident";}
	else if (RNG >= 29 && RNG <= 30) {GWeaponMartial = "War Pick";}
	else if (RNG >= 31 && RNG <= 32) {GWeaponMartial = "War Hammer";}
	else if (RNG >= 33 && RNG <= 34) {GWeaponMartial = "Whip";}
	else if (RNG >= 35 && RNG <= 36) {GWeaponMartial = "Hand Crossbow";}
	else if (RNG >= 37 && RNG <= 38) {GWeaponMartial = "Heavy Crossbow";}
	else if (RNG >= 39 && RNG <= 40) {GWeaponMartial = "Longbow";}
	else if (RNG == 41) {GWeaponMartial = "Lance";}
	else if (RNG == 42) {GWeaponMartial = "Blowgun";}
}
	function WeaponMartialBtn() {WeaponMartial(); document.getElementById("itemBox").innerHTML = GWeaponMartial;}

function WeaponRanged() {
	let RNG = Math.floor(Math.random() * 17) + 1;
	if (RNG >= 1 && RNG <= 3) {GWeaponRanged = "Light Crossbow";}
	else if (RNG >= 4 && RNG <= 6) {GWeaponRanged = "Hand Crossbow";}
	else if (RNG >= 7 && RNG <= 9) {GWeaponRanged = "Heavy Crossbow";}
	else if (RNG >= 10 && RNG <= 12) {GWeaponRanged = "Shortbow";}
	else if (RNG >= 13 && RNG <= 15) {GWeaponRanged = "Longbow";}
	else if (RNG == 16) {GWeaponRanged = "Blowgun";}
	else if (RNG == 17) {GWeaponRanged = "Sling";}
}
	function WeaponRangedBtn() {WeaponRanged(); document.getElementById("itemBox").innerHTML = GWeaponRanged;}

function AccessoryGen() {
	let RNG = Math.floor(Math.random() * 9) + 1;
	let accGems
	let accMat = Math.floor(Math.random() * 32) + 1;
	let gemSize = Math.floor(Math.random() * 7) + 1;
	if (accMat >= 1 && accMat <= 6) {accMat = "Iron";}
	else if (accMat >= 7 && accMat <= 19) {accMat = "Silver";}
	else if (accMat >= 20 && accMat <= 23) {accMat = "Electrum";}
	else if (accMat >= 24 && accMat <= 28) {accMat = "Gold";}
	else if (accMat >= 29 && accMat <= 31) {accMat = "Mithril";}
	else if (accMat == 32) {accMat = "Adamantium";}
	if (gemSize == 1) {gemSize = "Tiny";}
	else if (gemSize >= 2 && gemSize <= 4) {gemSize = "Small";}
	else if (gemSize == 5 || gemSize == 6) {gemSize = "Normal";}
	else if (gemSize == 7) {gemSize = "Large";}
	if (RNG == 1) {accGems = Math.floor(Math.random() * 9);
	GAccessory = `${accMat} Crown with ${accGems} ${gemSize} Gem(s)`;}
	else if (RNG == 2) {accGems = Math.floor(Math.random() * 3);
	GAccessory = `${accMat} Amulet with ${accGems} ${gemSize} Gem(s)`;}
	else if (RNG == 3) {accGems = Math.floor(Math.random() * 2);
	GAccessory = `${accMat} Ring with ${accGems} ${gemSize} Gem(s)`;}
	else if (RNG == 4) {accGems = Math.floor(Math.random() * 4);
	GAccessory = `${accMat} Bracelet with ${accGems} ${gemSize} Gem(s)`;}
	else if (RNG == 5) {accGems = Math.floor(Math.random() * 5);
	GAccessory = `${accMat} Choker with ${accGems} ${gemSize} Gem(s)`;}
	else if (RNG == 6) {accGems = Math.floor(Math.random() * 2);
	GAccessory = `Pair of ${accMat} Earrings with ${accGems} Small Gem(s) each`;}
	else if (RNG == 7) {GAccessory = "Quiver";}
	else if (RNG == 8) {GAccessory = `${accMat} Timepiece (Watch, etc.)`;}
	else if (RNG == 9) {GAccessory = "Belt";}
}
	function AccessoryBtn() {AccessoryGen(); document.getElementById("itemBox").innerHTML = GAccessory;}


function ArtisanTool() {
	let RNG = Math.floor(Math.random() * 18) + 1;
	if (RNG == 1) {GArtisanTool = "Alchemist's Supplies";}
	else if (RNG == 2) {GArtisanTool = "Brewer's Supplies";}
	else if (RNG == 3) {GArtisanTool = "Calligrapher's Supplies";}
	else if (RNG == 4) {GArtisanTool = "Carpenter's Tools";}
	else if (RNG == 5) {GArtisanTool = "Cartographer's Tools";}
	else if (RNG == 6) {GArtisanTool = "Cobbler's Tools";}
	else if (RNG == 7) {GArtisanTool = "Cook's Utensils";}
	else if (RNG == 8) {GArtisanTool = "Glassblower's Tools";}
	else if (RNG == 9) {GArtisanTool = "Jeweler's Tools";}
	else if (RNG == 10) {GArtisanTool = "Leatherworker's Tools";}
	else if (RNG == 11) {GArtisanTool = "Mason's Tools";}
	else if (RNG == 12) {GArtisanTool = "Painter's Supplies";}
	else if (RNG == 13) {GArtisanTool = "Potter's Tools";}
	else if (RNG == 14) {GArtisanTool = "Smith's Tools";}
	else if (RNG == 15) {GArtisanTool = "Tinker's Tools";}
	else if (RNG == 16) {GArtisanTool = "Weaver's Tools";}
	else if (RNG == 17) {GArtisanTool = "Woodcarver's Tools";}
	else if (RNG == 18) {GArtisanTool = "Thieves' Tools";}
}
	function ArtisanToolBtn() {ArtisanTool(); document.getElementById("itemBox").innerHTML = GArtisanTool;}

// CHARACTER TOOLS //
// CHARACTER TOOLS //
// CHARACTER TOOLS //
// CHARACTER TOOLS //
// CHARACTER TOOLS //

function RaceGen() {
	let raceRNG
	let raceSub
	if (document.getElementById("reincarnateCheck").checked == true) {raceRNG = Math.floor(Math.random() * 100) + 1;
		if (raceRNG >= 1 && raceRNG <= 4) {GRace = "Dragonborn";}
		else if (raceRNG >= 5 && raceRNG <= 13) {GRace = "Hill Dwarf";}
		else if (raceRNG >= 14 && raceRNG <= 21) {GRace = "Mountain Dwarf";}
		else if (raceRNG >= 22 && raceRNG <= 25) {GRace = "Dark Elf";}
		else if (raceRNG >= 26 && raceRNG <= 34) {GRace = "High Elf";}
		else if (raceRNG >= 35 && raceRNG <= 42) {GRace = "Wood Elf";}
		else if (raceRNG >= 43 && raceRNG <= 46) {GRace = "Forest Gnome";}
		else if (raceRNG >= 47 && raceRNG <= 52) {GRace = "Rock Gnome";}
		else if (raceRNG >= 53 && raceRNG <= 56) {GRace = "Half-Elf";}
		else if (raceRNG >= 57 && raceRNG <= 60) {GRace = "Half-Orc";}
		else if (raceRNG >= 61 && raceRNG <= 68) {GRace = "Lightfoot Halfling";}
		else if (raceRNG >= 69 && raceRNG <= 76) {GRace = "Stout Halfling";}
		else if (raceRNG >= 77 && raceRNG <= 96) {GRace = "Human";}
		else if (raceRNG >= 97 && raceRNG <= 100) {GRace = "Tiefling";}
	}
	else if (document.getElementById("reincarnateCheck").checked == false) {raceRNG = Math.floor(Math.random() * 48) + 1;
if (raceRNG == 1) {GRace = "Aarakocra";}
else if (raceRNG == 2) {raceSub = Math.floor(Math.random() * 3) + 1;
	if (raceSub == 1) {GRace = "Fallen";}
	else if (raceSub == 2) {GRace = "Protector";}
	else if (raceSub == 3) {GRace = "Scourge";}
	GRace += " Aasimar";}
else if (raceRNG == 3) {GRace = "Bugbear";}
else if (raceRNG == 4) {GRace = "Centaur";}
else if (raceRNG == 5) {GRace = "Changeling";}
else if (raceRNG == 6) {GRace = "Dhampir";}
else if (raceRNG == 7) {raceSub = Math.floor(Math.random() * 15) + 1;
	if (raceSub == 1) {GRace = "Black (Acid) ";}
	else if (raceSub == 2) {GRace = "Blue (Lightning) ";}
	else if (raceSub == 3) {GRace = "Green (Poison)";}
	else if (raceSub == 4) {GRace = "Red (Fire)";}
	else if (raceSub == 5) {GRace = "White (Cold)";}
	else if (raceSub == 6) {GRace = "Copper (Acid)";}
	else if (raceSub == 7) {GRace = "Bronze/Mithril (Lightning)";}
	else if (raceSub == 8) {GRace = "Brass/Tungsten (Poison)";}
	else if (raceSub == 9) {GRace = "Gold (Fire)";}
	else if (raceSub == 10) {GRace = "Silver (Cold)";}
	else if (raceSub == 11) {GRace = "Amethyst (Force)";}
	else if (raceSub == 12) {GRace = "Crystal (Radiant)";}
	else if (raceSub == 13) {GRace = "Emerald (Psychic)";}
	else if (raceSub == 14) {GRace = "Sapphire (Thunder)";}
	else if (raceSub == 15) {GRace = "Topaz (Necrotic)";}GRace += " Dragonborn";}
else if (raceRNG == 8) {raceSub = Math.floor(Math.random() * 3) + 1;
	if (raceSub == 1) {GRace = "Duergar (Dark)";}
	else if (raceSub == 2) {GRace = "Hill";}
	else if (raceSub == 3) {GRace = "Mountain";}
	GRace += " Dwarf";}
else if (raceRNG == 9) {raceSub = Math.floor(Math.random() * 8) + 1;
	if (raceSub == 1) {GRace = "Drow";}
	else if (raceSub == 2) {GRace = "Eladrin";}
	else if (raceSub == 3) {GRace = "High";}
	else if (raceSub == 4) {GRace = "Sea";}
	else if (raceSub == 5) {GRace = "Shadar-Kai";}
	else if (raceSub == 6) {GRace = "Wood";}
	else if (raceSub == 7) {GRace = "Pallid";}
	else if (raceSub == 8) {GRace = "Astral";}
	GRace += " Elf";}
else if (raceRNG == 10) {GRace = "Firbolg";}
else if (raceRNG == 11) {raceSub = Math.floor(Math.random() * 3) + 1;
	if (raceSub == 1) {GRace = "Air";}
	else if (raceSub == 2) {GRace = "Earth";}
	else if (raceSub == 3) {GRace = "Water";}
	else if (raceSub == 4) {GRace = "Fire";}
	GRace += " Genasi";}
else if (raceRNG == 12) {raceSub = Math.floor(Math.random() * 2) + 1;
	if (raceSub == 1) {GRace = "Githyanki";}
	else if (raceSub == 2) {GRace = "Githzerai";}}
else if (raceRNG == 13) {raceSub = Math.floor(Math.random() * 3) + 1;
	if (raceSub == 1) {GRace = "Deep";}
	else if (raceSub == 2) {GRace = "Forest";}
	else if (raceSub == 3) {GRace = "Rock";}
	GRace += " Gnome";}
else if (raceRNG == 14) {GRace = "Goblin";}
else if (raceRNG == 15) {GRace = "Goliath";}
else if (raceRNG == 16) {GRace = "Half-Orc";}
else if (raceRNG == 17) {GRace = "Hobgoblin";}
else if (raceRNG == 18) {raceSub = Math.floor(Math.random() * 5) + 1;
	if (raceSub == 1) {GRace = "Aquatic";}
	else if (raceSub == 2) {GRace = "Drow";}
	else if (raceSub == 3) {GRace = "Wood";}
	else if (raceSub == 4) {GRace = "Moon";}
	else if (raceSub == 5) {GRace = "Sun";}
	GRace += " Half-Elf";}
else if (raceRNG == 19) {raceSub = Math.floor(Math.random() * 4) + 1;
	if (raceSub == 1) {GRace = "Lightfoot";}
	else if (raceSub == 2) {GRace = "Stous";}
	else if (raceSub == 3) {GRace = "Ghostwise";}
	else if (raceSub == 4) {GRace = "Lotusden";}
	GRace += " Halfling";}
else if (raceRNG == 20) {GRace = "Hexblood";}
else if (raceRNG == 21) {GRace = "Human";}
else if (raceRNG == 22) {GRace = "Kalashtar";}
else if (raceRNG == 23) {GRace = "Kenku";}
else if (raceRNG == 24) {GRace = "Kobold";}
else if (raceRNG == 25) {GRace = "Leonin";}
else if (raceRNG == 26) {GRace = "Lizardfolk";}
else if (raceRNG == 27) {GRace = "Loxodon";}
else if (raceRNG == 28) {GRace = "Minotaur";}
else if (raceRNG == 29) {GRace = "Orc";}
else if (raceRNG == 30) {GRace = "Reborn";}
else if (raceRNG == 31) {GRace = "Satyr";}
else if (raceRNG == 32) {raceSub = Math.floor(Math.random() * 4) + 1;
	if (raceSub == 1) {GRace = "Beasthide";}
	else if (raceSub == 2) {GRace = "Longtooth";}
	else if (raceSub == 3) {GRace = "Swiftstride";}
	else if (raceSub == 4) {GRace = "Wildhunt";}
	GRace += " Shifter";}
else if (raceRNG == 33) {GRace = "Simic Hybrid";}
else if (raceRNG == 34) {GRace = "Tabaxi";}
else if (raceRNG == 35) {GRace = "Tiefling "
	raceSub = Math.floor(Math.random() * 9) + 1;
	if (raceSub == 1) {GRace += "(Asmodeus)";}
	else if (raceSub == 2) {GRace += "(Baalzebul)";}
	else if (raceSub == 3) {GRace += "(Dispater)";}
	else if (raceSub == 4) {GRace += "(Fierna)";}
	else if (raceSub == 5) {GRace += "(Glasya)";}
	else if (raceSub == 6) {GRace += "(Levistus)";}
	else if (raceSub == 7) {GRace += "(Mammon)";}
	else if (raceSub == 8) {GRace += "(Mephistopheles)";}
	else if (raceSub == 9) {GRace += "(Zariel)";}}
else if (raceRNG == 36) {GRace = "Triton";}
else if (raceRNG == 37) {GRace = "Vedalken";}
else if (raceRNG == 38) {GRace = "Verdan";}
else if (raceRNG == 39) {GRace = "Warforged";}
else if (raceRNG == 40) {GRace = "Yuan-Ti";}
else if (raceRNG == 41) {GRace = "Owlin";}
else if (raceRNG == 42) {GRace = "Haregon";}
else if (raceRNG == 43) {GRace = "Autognome";}
else if (raceRNG == 44) {GRace = "Giff";}
else if (raceRNG == 45) {GRace = "Hadozee";}
else if (raceRNG == 46) {GRace = "Plasmoid";}
else if (raceRNG == 47) {GRace = "Thri-Kreen"}
else if (raceRNG == 48) {GRace = "Fairy";}
	}
}
	function ReincarnateBtn() {
		RaceGen();
		document.getElementById("charBox").innerHTML = GRace;
	}

function ClassGen() {
	let classRNG = Math.floor(Math.random() * 13) + 1;
	let classSub;
			if (classRNG == 1) {classSub = Math.floor(Math.random() * 8) + 1;
if (classSub == 1) {GClass = "Ancestral Guardian Barbarian";}
else if (classSub == 2) {GClass = "Battlerager Barbarian";}
else if (classSub == 3) {GClass = "Beast Barbarian";}
else if (classSub == 4) {GClass = "Berserker Barbarian";}
else if (classSub == 5) {GClass = "Storm Herald Barbarian";}
else if (classSub == 6) {GClass = "Totem Warrior Barbarian";}
else if (classSub == 7) {GClass = "Wild Magic Barbarian";}
else if (classSub == 8) {GClass = "Zealot Barbarian";}}
else if (classRNG == 2) {classSub = Math.floor(Math.random() * 8) + 1;
if (classSub == 1) {GClass = "Creation Bard";}
else if (classSub == 2) {GClass = "Eloquence Bard";}
else if (classSub == 3) {GClass = "Glamour Bard";}
else if (classSub == 4) {GClass = "Lore Bard";}
else if (classSub == 5) {GClass = "Spirits Bard";}
else if (classSub == 6) {GClass = "Swords Bard";}
else if (classSub == 7) {GClass = "Valor Bard";}
else if (classSub == 8) {GClass = "Whispers Bard";}}
else if (classRNG == 3) {classSub = Math.floor(Math.random() * 14) + 1;
if (classSub == 1) {GClass = "Arcana Cleric";}
else if (classSub == 2) {GClass = "Death Cleric";}
else if (classSub == 3) {GClass = "Forge Cleric";}
else if (classSub == 4) {GClass = "Grave Cleric";}
else if (classSub == 5) {GClass = "Knowledge Cleric";}
else if (classSub == 6) {GClass = "Life Cleric";}
else if (classSub == 7) {GClass = "Light Cleric";}
else if (classSub == 8) {GClass = "Nature Cleric";}
else if (classSub == 9) {GClass = "Order Cleric";}
else if (classSub == 10) {GClass = "Peace Cleric";}
else if (classSub == 11) {GClass = "Tempest Cleric";}
else if (classSub == 12) {GClass = "Trickery Cleric";}
else if (classSub == 13) {GClass = "Twilight Cleric";}
else if (classSub == 14) {GClass = "War Cleric";}}
else if (classRNG == 4) {classSub = Math.floor(Math.random() * 7) + 1;
if (classSub == 1) {GClass = "Dreams Druid";}
else if (classSub == 2) {GClass = "Land Druid";}
else if (classSub == 3) {GClass = "Moon Druid";}
else if (classSub == 4) {GClass = "Shepherd Druid";}
else if (classSub == 5) {GClass = "Spores Druid";}
else if (classSub == 6) {GClass = "Stars Druid";}
			else if (classSub == 7) {GClass = "Wildfire Druid";}}
else if (classRNG == 5) {classSub = Math.floor(Math.random() * 10) + 1;
if (classSub == 1) {GClass = "Arcane Archer Fighter";}
else if (classSub == 2) {GClass = "Banneret Fighter";}
else if (classSub == 3) {GClass = "Battle Master Fighter";}
else if (classSub == 4) {GClass = "Cavalier Fighter";}
else if (classSub == 5) {GClass = "Champion Fighter";}
else if (classSub == 6) {GClass = "Echo Knight Fighter";}
else if (classSub == 7) {GClass = "Eldritch Knight Fighter";}
else if (classSub == 8) {GClass = "Psi Warrior Fighter";}
else if (classSub == 9) {GClass = "Rune Knight Fighter";}
else if (classSub == 10) {GClass = "Samurai Fighter";}}
else if (classRNG == 6) {classSub = Math.floor(Math.random() * 10) + 1;
if (classSub == 1) {GClass = "Astral Self Monk";}
else if (classSub == 2) {GClass = "Drunken Master Monk";}
else if (classSub == 3) {GClass = "Four Elements Monk";}
else if (classSub == 4) {GClass = "Kensei Monk";}
else if (classSub == 5) {GClass = "Long Death Monk";}
else if (classSub == 6) {GClass = "Mercy Monk";}
else if (classSub == 7) {GClass = "Open Hand Monk";}
else if (classSub == 8) {GClass = "Shadow Monk";}
else if (classSub == 9) {GClass = "Sun Soul Monk";}
else if (classSub == 10) {GClass = "Ascendant Dragon Monk";}}
else if (classRNG == 7) {classSub = Math.floor(Math.random() * 9) + 1;
if (classSub == 1) {GClass = "Ancients Paladin";}
else if (classSub == 2) {GClass = "Conquest Paladin";}
else if (classSub == 3) {GClass = "Crown Paladin";}
else if (classSub == 4) {GClass = "Devotion Paladin";}
else if (classSub == 5) {GClass = "Glory Paladin";}
else if (classSub == 6) {GClass = "Redemption Paladin";}
else if (classSub == 7) {GClass = "Vengeance Paladin";}
else if (classSub == 8) {GClass = "Watchers Paladin";}
else if (classSub == 9) {GClass = "Oathbreaker Paladin";}}
else if (classRNG == 8) {classSub = Math.floor(Math.random() * 8) + 1;
if (classSub == 1) {GClass = "Beast Master Ranger";}
else if (classSub == 2) {GClass = "Fey Wanderer Ranger";}
else if (classSub == 3) {GClass = "Gloom Stalker Ranger";}
else if (classSub == 4) {GClass = "Horizon Walker Ranger";}
else if (classSub == 5) {GClass = "Hunter Ranger";}
else if (classSub == 6) {GClass = "Monster Slayer Ranger";}
else if (classSub == 7) {GClass = "Swarmkeeper Ranger";}
			else if (classSub == 8) {GClass = "Drakewarden Ranger";}}
else if (classRNG == 9) {classSub = Math.floor(Math.random() * 9) + 1;
if (classSub == 1) {GClass = "Arcane Trickster Rogue";}
else if (classSub == 2) {GClass = "Assassin Rogue";}
else if (classSub == 3) {GClass = "Inquisitive Rogue";}
else if (classSub == 4) {GClass = "Mastermind Rogue";}
else if (classSub == 5) {GClass = "Phantom Rogue";}
else if (classSub == 6) {GClass = "Scout Rogue";}
else if (classSub == 7) {GClass = "Soulknife Rogue";}
else if (classSub == 8) {GClass = "Swashbuckler Rogue";}
			else if (classSub == 9) {GClass = "Thief Rogue";}}
else if (classRNG == 10) {classSub = Math.floor(Math.random() * 7) + 1;
if (classSub == 1) {GClass = "Aberrant Mind Sorcerer";}
else if (classSub == 2) {GClass = "Clockwork Soul Sorcerer";}
else if (classSub == 3) {GClass = "Draconic Bloodline Sorcerer";}
else if (classSub == 4) {GClass = "Divine Soul Sorcerer";}
else if (classSub == 5) {GClass = "Shadow Magic Sorcerer";}
else if (classSub == 6) {GClass = "Storm Sorcery Sorcerer";}
else if (classSub == 7) {GClass = "Wild Magic Sorcerer";}}
else if (classRNG == 11) {classSub = Math.floor(Math.random() * 9) + 1;
if (classSub == 1) {GClass = "Archfey Warlock";}
else if (classSub == 2) {GClass = "Celestial Warlock";}
else if (classSub == 3) {GClass = "Fathomless Warlock";}
else if (classSub == 4) {GClass = "Fiend Warlock";}
else if (classSub == 5) {GClass = "Genie Warlock";}
else if (classSub == 6) {GClass = "Great Old One Warlock";}
else if (classSub == 7) {GClass = "Hexblade Warlock";}
else if (classSub == 8) {GClass = "Undead Warlock";}
			else if (classSub == 9) {GClass = "Undying Warlock";}}
else if (classRNG == 12) {classSub = Math.floor(Math.random() * 13) + 1;
if (classSub == 1) {GClass = "Abjuration Wizard";}
else if (classSub == 2) {GClass = "Bladesinging Wizard";}
else if (classSub == 3) {GClass = "Chronurgy Wizard";}
else if (classSub == 4) {GClass = "Conjuration Wizard";}
else if (classSub == 5) {GClass = "Divination Wizard";}
else if (classSub == 6) {GClass = "Enchantment Wizard";}
else if (classSub == 7) {GClass = "Evocation Wizard";}
else if (classSub == 8) {GClass = "Graviturgy Wizard";}
else if (classSub == 9) {GClass = "Illusion Wizard";}
else if (classSub == 10) {GClass = "Necromancy Wizard";}
else if (classSub == 11) {GClass = "Order of Scribes Wizard";}
else if (classSub == 12) {GClass = "Transmutation Wizard";}
			else if (classSub == 13) {GClass = "War Magic Wizard";}}
else if (classRNG == 13) {classSub = Math.floor(Math.random() * 4) + 1;
if (classSub == 1) {GClass = "Alchemist Artificer";}
else if (classSub == 2) {GClass = "Armorer Artificer";}
else if (classSub == 3) {GClass = "Artillerist Artificer";}
else if (classSub == 4) {GClass = "Battle Smith Artificer";}}
}

function BackgroundGen() {
	charBackground = Math.floor(Math.random() * 44) + 1;
		if (charBackground == 1) {GBackground = "Background: Acolyte";}
else if (charBackground == 1) {GBackground = "Background: Anthropologist";}
else if (charBackground == 2) {GBackground = "Background: Archaeologist";}
else if (charBackground == 3) {GBackground = "Background: Athlete";}
else if (charBackground == 4) {GBackground = "Background: Celebrity Scion";}
else if (charBackground == 5) {GBackground = "Background: Charlatan";}
else if (charBackground == 6) {GBackground = "Background: City Watch";}
else if (charBackground == 7) {GBackground = "Background: Clan Crafter";}
else if (charBackground == 8) {GBackground = "Background: Cloistered Scholar";}
else if (charBackground == 8) {GBackground = "Background: Courtier";}
else if (charBackground == 10) {GBackground = "Background: Criminal";}
else if (charBackground == 11) {GBackground = "Background: Entertainer";}
else if (charBackground == 12) {GBackground = "Background: Astral Drifter";}
else if (charBackground == 13) {GBackground = "Background: Faction Agent";}
else if (charBackground == 14) {GBackground = "Background: Failed Merchant";}
else if (charBackground == 15) {GBackground = "Background: Far Traveler";}
else if (charBackground == 16) {GBackground = "Background: Feylost";}
else if (charBackground == 17) {GBackground = "Background: Fisher";}
else if (charBackground == 18) {GBackground = "Background: Folk Hero";}
else if (charBackground == 19) {GBackground = "Background: Gambler";}
else if (charBackground == 20) {GBackground = "Background: Wildspacer";}
else if (charBackground == 21) {GBackground = "Background: Guild Artisan";}
else if (charBackground == 22) {GBackground = "Background: Haunted One";}
else if (charBackground == 23) {GBackground = "Background: Hermit";}
else if (charBackground == 24) {GBackground = "Background: House Agent";}
else if (charBackground == 25) {GBackground = "Background: Inheritor";}
else if (charBackground == 26) {GBackground = "Background: Investigator";}
else if (charBackground == 27) {GBackground = "Background: Knight of the Order";}
else if (charBackground == 28) {GBackground = "Background: Marine";}
else if (charBackground == 29) {GBackground = "Background: Mercenary Veteran";}
else if (charBackground == 30) {GBackground = "Background: Noble";}
else if (charBackground == 31) {GBackground = "Background: Outlander";}
else if (charBackground == 32) {GBackground = "Background: Sage";}
else if (charBackground == 33) {GBackground = "Background: Sailor";}
else if (charBackground == 34) {GBackground = "Background: Shipwright";}
else if (charBackground == 35) {GBackground = "Background: Smuggler";}
else if (charBackground == 36) {GBackground = "Background: Soldier";}
else if (charBackground == 37) {GBackground = "Background: Urban Bounty Hunter";}
else if (charBackground == 38) {GBackground = "Background: Urchin";}
else if (charBackground == 39) {GBackground = "Background: Tribe Member"}
else if (charBackground == 40) {GBackground = "Background: Witherbloom Student"}
else if (charBackground == 41) {GBackground = "Background: Silverquill Student"}
else if (charBackground == 42) {GBackground = "Background: Quandrix Student"}
else if (charBackground == 43) {GBackground = "Background: Prismari Student"}
else if (charBackground == 44) {GBackground = "Background: Lorehold Student"}
}

function AlignmentGen() {
	alignRNG = Math.floor(Math.random() * 9) + 1;
	if (alignRNG == 1) {GAlign = "Chaotic Good";}
	else if (alignRNG == 2) {GAlign = "Chaotic Neutral";}
	else if (alignRNG == 3) {GAlign = "Chaotic Evil";}
	else if (alignRNG == 4) {GAlign = "Neutral Good";}
	else if (alignRNG == 5) {GAlign = "True Neutral";}
	else if (alignRNG == 6) {GAlign = "Neutral Evil";}
	else if (alignRNG == 7) {GAlign = "Lawful Good";}
	else if (alignRNG == 8) {GAlign = "Lawful Neutral";}
	else if (alignRNG == 9) {GAlign = "Lawful Evil";}
}

function CharGenBtn() {
	multiRNG = Math.floor(Math.random() * 4) + 1;
	ClassGen();
	RaceGen();
	BackgroundGen();
	AlignmentGen();
	document.getElementById("charBox").innerHTML = `${GRace} \n${GClass}`;
	document.getElementById("charBox").innerHTML += `\n${GAlign} \n${GBackground}`;
	if (multiRNG == 4) {ClassGen(); document.getElementById("charBox").innerHTML += `\nMULTICLASS: ${GClass}`;} else {}
	document.getElementById("charBox").innerHTML += `\n--Base Stat Rolls--`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `	${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `	${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `	${GStatRoll}`;
	document.getElementById("charBox").innerHTML += `\n(Racial Bonuses not Added)`;
}

function RollStatsBtn() {
	RollAttribute(); document.getElementById("charBox").innerHTML = `${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
	RollAttribute(); document.getElementById("charBox").innerHTML += `\n${GStatRoll}`;
}

function Spell0() {
	RNG = Math.floor(Math.random() * 46) + 1;
if (RNG == 1) {GSpellGen0 = "Acid Splash";}
else if (RNG == 2) {GSpellGen0 = "Blade Ward";}
else if (RNG == 3) {GSpellGen0 = "Booming Blade";}
else if (RNG == 4) {GSpellGen0 = "Chill Touch";}
else if (RNG == 5) {GSpellGen0 = "Control Flames";}
else if (RNG == 6) {GSpellGen0 = "Create Bonfire";}
else if (RNG == 7) {GSpellGen0 = "Dancing Lights";}
else if (RNG == 8) {GSpellGen0 = "Druidcraft";}
else if (RNG == 9) {GSpellGen0 = "Eldritch Blast";}
else if (RNG == 10) {GSpellGen0 = "Encode Thoughts";}
else if (RNG == 11) {GSpellGen0 = "Fire Bolt";}
else if (RNG == 12) {GSpellGen0 = "Friends";}
else if (RNG == 13) {GSpellGen0 = "Frostbite";}
else if (RNG == 14) {GSpellGen0 = "Green-Flame Blade";}
else if (RNG == 15) {GSpellGen0 = "Guidance";}
else if (RNG == 16) {GSpellGen0 = "Gust";}
else if (RNG == 17) {GSpellGen0 = "Infestation";}
else if (RNG == 18) {GSpellGen0 = "Light";}
else if (RNG == 19) {GSpellGen0 = "Lightning Lure";}
else if (RNG == 20) {GSpellGen0 = "Mage Hand";}
else if (RNG == 21) {GSpellGen0 = "Magic Stone";}
else if (RNG == 22) {GSpellGen0 = "Mending";}
else if (RNG == 23) {GSpellGen0 = "Message";}
else if (RNG == 24) {GSpellGen0 = "Mind Sliver";}
else if (RNG == 25) {GSpellGen0 = "Minor Illusion";}
else if (RNG == 26) {GSpellGen0 = "Mold Earth";}
else if (RNG == 27) {GSpellGen0 = "Poison Spray";}
else if (RNG == 28) {GSpellGen0 = "Prestidigitation";}
else if (RNG == 29) {GSpellGen0 = "Primal Savagery";}
else if (RNG == 30) {GSpellGen0 = "Produce Flames";}
else if (RNG == 31) {GSpellGen0 = "Ray of Frost";}
else if (RNG == 32) {GSpellGen0 = "Resistance";}
else if (RNG == 33) {GSpellGen0 = "Sacred Flame";}
else if (RNG == 34) {GSpellGen0 = "Sapping Sting";}
else if (RNG == 35) {GSpellGen0 = "Shape Water";}
else if (RNG == 36) {GSpellGen0 = "Shillelagh";}
else if (RNG == 37) {GSpellGen0 = "Shocking Grasp";}
else if (RNG == 38) {GSpellGen0 = "Spare the Dying";}
else if (RNG == 39) {GSpellGen0 = "Sword Burst";}
else if (RNG == 40) {GSpellGen0 = "Thaumaturgy";}
else if (RNG == 41) {GSpellGen0 = "Thorn Whip";}
else if (RNG == 42) {GSpellGen0 = "Thunderclap";}
else if (RNG == 43) {GSpellGen0 = "Toll the Dead";}
else if (RNG == 44) {GSpellGen0 = "True Strike";}
else if (RNG == 45) {GSpellGen0 = "Vicious Mockery";}
else if (RNG == 46) {GSpellGen0 = "Word of Radiance";}
}

function Spell1() {
	RNG = Math.floor(Math.random() * 79) + 1;
if (RNG == 1) {GSpellGen1 = "Absorb Elements";}
else if (RNG == 2) {GSpellGen1 = "Alarm";}
else if (RNG == 3) {GSpellGen1 = "Animal Friendship";}
else if (RNG == 4) {GSpellGen1 = "Armor of Agathys";}
else if (RNG == 5) {GSpellGen1 = "Arms of Hadar";}
else if (RNG == 6) {GSpellGen1 = "Bane";}
else if (RNG == 7) {GSpellGen1 = "Beast Bond";}
else if (RNG == 8) {GSpellGen1 = "Bless";}
else if (RNG == 9) {GSpellGen1 = "Burning Hands";}
else if (RNG == 10) {GSpellGen1 = "Catapult";}
else if (RNG == 11) {GSpellGen1 = "Cause Fear";}
else if (RNG == 12) {GSpellGen1 = "Ceremony";}
else if (RNG == 13) {GSpellGen1 = "Chaos Bolt";}
else if (RNG == 14) {GSpellGen1 = "Charm Person";}
else if (RNG == 15) {GSpellGen1 = "Chromatic Orb";}
else if (RNG == 16) {GSpellGen1 = "Color Spray";}
else if (RNG == 17) {GSpellGen1 = "Command";}
else if (RNG == 18) {GSpellGen1 = "Compelled Duel";}
else if (RNG == 19) {GSpellGen1 = "Comprehend Languages";}
else if (RNG == 20) {GSpellGen1 = "Create or Destroy Water";}
else if (RNG == 21) {GSpellGen1 = "Cure Wounds";}
else if (RNG == 22) {GSpellGen1 = "Detect Evil and Good";}
else if (RNG == 23) {GSpellGen1 = "Detect Magic";}
else if (RNG == 24) {GSpellGen1 = "Detect Poison and Disease";}
else if (RNG == 25) {GSpellGen1 = "Disguise Self";}
else if (RNG == 26) {GSpellGen1 = "Dissonant Whispers";}
else if (RNG == 27) {GSpellGen1 = "Distort Value";}
else if (RNG == 28) {GSpellGen1 = "Divine Favor";}
else if (RNG == 29) {GSpellGen1 = "Earth Tremor";}
else if (RNG == 30) {GSpellGen1 = "Ensnaring Strike";}
else if (RNG == 31) {GSpellGen1 = "Entangle";}
else if (RNG == 32) {GSpellGen1 = "Expeditious Retreat";}
else if (RNG == 33) {GSpellGen1 = "Faerie Fire";}
else if (RNG == 34) {GSpellGen1 = "False Life";}
else if (RNG == 35) {GSpellGen1 = "Feather Fall";}
else if (RNG == 36) {GSpellGen1 = "Find Familiar";}
else if (RNG == 37) {GSpellGen1 = "Fog Cloud";}
else if (RNG == 38) {GSpellGen1 = "Frost Fingers";}
else if (RNG == 39) {GSpellGen1 = "Gift of Alacrity";}
else if (RNG == 40) {GSpellGen1 = "Goodberry";}
else if (RNG == 41) {GSpellGen1 = "Grease";}
else if (RNG == 42) {GSpellGen1 = "Guiding Bolt";}
else if (RNG == 43) {GSpellGen1 = "Hail of Thorns";}
else if (RNG == 44) {GSpellGen1 = "Healing Word";}
else if (RNG == 45) {GSpellGen1 = "Hellish Rebuke";}
else if (RNG == 46) {GSpellGen1 = "Heroism";}
else if (RNG == 47) {GSpellGen1 = "Hex";}
else if (RNG == 48) {GSpellGen1 = "Hunter's Mark";}
else if (RNG == 49) {GSpellGen1 = "Ice Knife";}
else if (RNG == 50) {GSpellGen1 = "Identify";}
else if (RNG == 51) {GSpellGen1 = "Illusory Script";}
else if (RNG == 52) {GSpellGen1 = "Inflict Wounds";}
else if (RNG == 53) {GSpellGen1 = "Jim's Magic Missile";}
else if (RNG == 54) {GSpellGen1 = "Jump";}
else if (RNG == 55) {GSpellGen1 = "Longstrider";}
else if (RNG == 56) {GSpellGen1 = "Mage Armor";}
else if (RNG == 57) {GSpellGen1 = "Magic Missile";}
else if (RNG == 58) {GSpellGen1 = "Magnify Gravity";}
else if (RNG == 59) {GSpellGen1 = "Protection from Evil and Good";}
else if (RNG == 60) {GSpellGen1 = "Purify Food and Drink";}
else if (RNG == 61) {GSpellGen1 = "Ray of Sickness";}
else if (RNG == 62) {GSpellGen1 = "Sanctuary";}
else if (RNG == 63) {GSpellGen1 = "Searing Smite";}
else if (RNG == 64) {GSpellGen1 = "Shield";}
else if (RNG == 65) {GSpellGen1 = "Shield Of Faith";}
else if (RNG == 66) {GSpellGen1 = "Silent Image";}
else if (RNG == 67) {GSpellGen1 = "Sleep";}
else if (RNG == 68) {GSpellGen1 = "Snare";}
else if (RNG == 69) {GSpellGen1 = "Speak with Animals";}
else if (RNG == 70) {GSpellGen1 = "Tasha's Caustic Brew";}
else if (RNG == 71) {GSpellGen1 = "Tasha's Hideous Laughter";}
else if (RNG == 72) {GSpellGen1 = "Tenser's Floating Disk";}
else if (RNG == 73) {GSpellGen1 = "Thunderous Smite";}
else if (RNG == 74) {GSpellGen1 = "Unseen Servant";}
else if (RNG == 75) {GSpellGen1 = "Witch Bolt";}
else if (RNG == 76) {GSpellGen1 = "Wrathful Smite";}
else if (RNG == 77) {GSpellGen1 = "Zephyr Strike";}
else if (RNG == 78) {GSpellGen1 = "Thunderwave";}
else if (RNG == 78) {GSpellGen1 = "Thunderwave";}
else if (RNG == 79) {GSpellGen1 = "Silvery Barbs";}
}

function Spell2() {
	RNG = Math.floor(Math.random() * 86) + 1;
if (RNG == 1) {GSpellGen2 = "Aganazzar's Scorcher";}
else if (RNG == 2) {GSpellGen2 = "Aid";}
else if (RNG == 3) {GSpellGen2 = "Alter Self";}
else if (RNG == 4) {GSpellGen2 = "Animal Messenger";}
else if (RNG == 5) {GSpellGen2 = "Arcane Lock";}
else if (RNG == 6) {GSpellGen2 = "Augury";}
else if (RNG == 7) {GSpellGen2 = "Barkskin";}
else if (RNG == 8) {GSpellGen2 = "Beast Sense";}
else if (RNG == 9) {GSpellGen2 = "Blindness/Deafness";}
else if (RNG == 10) {GSpellGen2 = "Blur";}
else if (RNG == 11) {GSpellGen2 = "Branding Smite";}
else if (RNG == 12) {GSpellGen2 = "Calm Emotions";}
else if (RNG == 13) {GSpellGen2 = "Cloud of Daggers";}
else if (RNG == 14) {GSpellGen2 = "Continual Flame";}
else if (RNG == 15) {GSpellGen2 = "Cordon of Arrows";}
else if (RNG == 16) {GSpellGen2 = "Crown of Madness";}
else if (RNG == 17) {GSpellGen2 = "Darkness";}
else if (RNG == 18) {GSpellGen2 = "Darkvision";}
else if (RNG == 19) {GSpellGen2 = "Detect Thoughts";}
else if (RNG == 20) {GSpellGen2 = "Dragon's Breath";}
else if (RNG == 21) {GSpellGen2 = "Dust Devil";}
else if (RNG == 22) {GSpellGen2 = "Earthbind";}
else if (RNG == 23) {GSpellGen2 = "Enhance Ability";}
else if (RNG == 24) {GSpellGen2 = "Enlarge/Reduce";}
else if (RNG == 25) {GSpellGen2 = "Enthrall";}
else if (RNG == 26) {GSpellGen2 = "Find Steed";}
else if (RNG == 27) {GSpellGen2 = "Find Traps";}
else if (RNG == 28) {GSpellGen2 = "Flame Blade";}
else if (RNG == 29) {GSpellGen2 = "Flaming Sphere";}
else if (RNG == 30) {GSpellGen2 = "Fortune's Favor";}
else if (RNG == 31) {GSpellGen2 = "Gentle Repose";}
else if (RNG == 32) {GSpellGen2 = "Gift of Gab";}
else if (RNG == 33) {GSpellGen2 = "Gust of Wind";}
else if (RNG == 34) {GSpellGen2 = "Healing Spirit";}
else if (RNG == 35) {GSpellGen2 = "Heat Metal";}
else if (RNG == 36) {GSpellGen2 = "Hold Person";}
else if (RNG == 37) {GSpellGen2 = "Immovable Object";}
else if (RNG == 38) {GSpellGen2 = "Invisibility";}
else if (RNG == 39) {GSpellGen2 = "Jim's Glowing Coin";}
else if (RNG == 40) {GSpellGen2 = "Knock";}
else if (RNG == 41) {GSpellGen2 = "Lesser Restoration";}
else if (RNG == 42) {GSpellGen2 = "Levitate";}
else if (RNG == 43) {GSpellGen2 = "Locate Animals or Plants";}
else if (RNG == 44) {GSpellGen2 = "Locate Object";}
else if (RNG == 45) {GSpellGen2 = "Magic Mouth";}
else if (RNG == 46) {GSpellGen2 = "Magic Weapon";}
else if (RNG == 47) {GSpellGen2 = "Maximilian's Earthen Grasp";}
else if (RNG == 48) {GSpellGen2 = "Melf's Acid Arrow";}
else if (RNG == 49) {GSpellGen2 = "Mind Spike";}
else if (RNG == 50) {GSpellGen2 = "Misty Step";}
else if (RNG == 51) {GSpellGen2 = "Moonbeam";}
else if (RNG == 52) {GSpellGen2 = "Nathair's Mischief";}
else if (RNG == 53) {GSpellGen2 = "Nystul's Magic Aura";}
else if (RNG == 54) {GSpellGen2 = "Pass without Trace";}
else if (RNG == 55) {GSpellGen2 = "Phantasmal Force";}
else if (RNG == 56) {GSpellGen2 = "Prayer of Healing";}
else if (RNG == 57) {GSpellGen2 = "Protection from Poison";}
else if (RNG == 58) {GSpellGen2 = "Pyrotechnics";}
else if (RNG == 59) {GSpellGen2 = "Ray of Enfeeblement";}
else if (RNG == 60) {GSpellGen2 = "Rime's Binding Ice";}
else if (RNG == 61) {GSpellGen2 = "Rope Trick";}
else if (RNG == 62) {GSpellGen2 = "Scorching Ray";}
else if (RNG == 63) {GSpellGen2 = "See Invisibility";}
else if (RNG == 64) {GSpellGen2 = "Shadow Blade";}
else if (RNG == 65) {GSpellGen2 = "Shatter";}
else if (RNG == 66) {GSpellGen2 = "Silence";}
else if (RNG == 67) {GSpellGen2 = "Skywrite";}
else if (RNG == 68) {GSpellGen2 = "Snilloc's Snowball Swarm";}
else if (RNG == 69) {GSpellGen2 = "Spider Climb";}
else if (RNG == 70) {GSpellGen2 = "Spike Growth";}
else if (RNG == 71) {GSpellGen2 = "Spiritual Weapon";}
else if (RNG == 72) {GSpellGen2 = "Suggestion";}
else if (RNG == 73) {GSpellGen2 = "Summon Beast";}
else if (RNG == 74) {GSpellGen2 = "Tasha's Mind Whip";}
else if (RNG == 75) {GSpellGen2 = "Warding Bond";}
else if (RNG == 76) {GSpellGen2 = "Warding Wind";}
else if (RNG == 77) {GSpellGen2 = "Web";}
else if (RNG == 78) {GSpellGen2 = "Wristpocket";}
else if (RNG == 79) {GSpellGen2 = "Zone of Truth";}
else if (RNG == 80) {GSpellGen2 = "Mirror Image";}
else if (RNG == 81) {GSpellGen2 = "Air Bubble";}
else if (RNG == 82) {GSpellGen2 = "Borrowed Knowledge";}
else if (RNG == 83) {GSpellGen2 = "Flock of Familiars";}
else if (RNG == 84) {GSpellGen2 = "Kinetic Jaunt";}
else if (RNG == 85) {GSpellGen2 = "Vortex Warp";}
else if (RNG == 86) {GSpellGen2 = "Wither and Bloom";}
}

function Spell3() {
	RNG = Math.floor(Math.random() * 74) + 1;
if (RNG == 1) {GSpellGen3 = "Animate Dead";}
else if (RNG == 2) {GSpellGen3 = "Ashardalon's Stride";}
else if (RNG == 3) {GSpellGen3 = "Aura of Vitality";}
else if (RNG == 4) {GSpellGen3 = "Beacon of Hope";}
else if (RNG == 5) {GSpellGen3 = "Bestow Curse";}
else if (RNG == 6) {GSpellGen3 = "Blinding Smite";}
else if (RNG == 7) {GSpellGen3 = "Blink";}
else if (RNG == 8) {GSpellGen3 = "Call Lightning";}
else if (RNG == 9) {GSpellGen3 = "Catnap";}
else if (RNG == 10) {GSpellGen3 = "Clairvoyance";}
else if (RNG == 11) {GSpellGen3 = "Conjure Animals";}
else if (RNG == 12) {GSpellGen3 = "Conjure Barrage";}
else if (RNG == 13) {GSpellGen3 = "Counterspell";}
else if (RNG == 14) {GSpellGen3 = "Create Food and Water";}
else if (RNG == 15) {GSpellGen3 = "Crusader's Mantle";}
else if (RNG == 16) {GSpellGen3 = "Daylight";}
else if (RNG == 17) {GSpellGen3 = "Dispel Magic";}
else if (RNG == 18) {GSpellGen3 = "Elemental Weapon";}
else if (RNG == 19) {GSpellGen3 = "Enemies Abound";}
else if (RNG == 20) {GSpellGen3 = "Erupting Earth";}
else if (RNG == 21) {GSpellGen3 = "Fast Friends";}
else if (RNG == 22) {GSpellGen3 = "Fear";}
else if (RNG == 23) {GSpellGen3 = "Feign Death";}
else if (RNG == 24) {GSpellGen3 = "Fireball";}
else if (RNG == 25) {GSpellGen3 = "Flame Arrows";}
else if (RNG == 26) {GSpellGen3 = "Fly";}
else if (RNG == 27) {GSpellGen3 = "Gaseous Form";}
else if (RNG == 28) {GSpellGen3 = "Glyph of Warding";}
else if (RNG == 29) {GSpellGen3 = "Haste";}
else if (RNG == 30) {GSpellGen3 = "Hunger of Hadar";}
else if (RNG == 31) {GSpellGen3 = "Hypnotic Pattern";}
else if (RNG == 32) {GSpellGen3 = "Incite Greed";}
else if (RNG == 33) {GSpellGen3 = "Intellect Fortress";}
else if (RNG == 34) {GSpellGen3 = "Leomund's Tiny Hut";}
else if (RNG == 35) {GSpellGen3 = "Life Transference";}
else if (RNG == 36) {GSpellGen3 = "Lightning Arrow";}
else if (RNG == 37) {GSpellGen3 = "Lightning Bolt";}
else if (RNG == 38) {GSpellGen3 = "Magic Circle";}
else if (RNG == 39) {GSpellGen3 = "Major Image";}
else if (RNG == 40) {GSpellGen3 = "Mass Healing Word";}
else if (RNG == 41) {GSpellGen3 = "Meld into Stone";}
else if (RNG == 42) {GSpellGen3 = "Melf's Minute Meteors";}
else if (RNG == 43) {GSpellGen3 = "Motivational Speech";}
else if (RNG == 44) {GSpellGen3 = "Nondetection";}
else if (RNG == 45) {GSpellGen3 = "Phantom Steed";}
else if (RNG == 46) {GSpellGen3 = "Plant Growth";}
else if (RNG == 47) {GSpellGen3 = "Protection from Energy";}
else if (RNG == 48) {GSpellGen3 = "Pulse Wave";}
else if (RNG == 49) {GSpellGen3 = "Remove Curse";}
else if (RNG == 50) {GSpellGen3 = "Revivify";}
else if (RNG == 51) {GSpellGen3 = "Sending";}
else if (RNG == 52) {GSpellGen3 = "Sleet Storm";}
else if (RNG == 53) {GSpellGen3 = "Slow";}
else if (RNG == 54) {GSpellGen3 = "Speak with Dead";}
else if (RNG == 55) {GSpellGen3 = "Speak with Plants";}
else if (RNG == 56) {GSpellGen3 = "Spirit Guardians";}
else if (RNG == 57) {GSpellGen3 = "Spirit Shroud";}
else if (RNG == 58) {GSpellGen3 = "Stinking Cloud";}
else if (RNG == 59) {GSpellGen3 = "Summon Fey";}
else if (RNG == 60) {GSpellGen3 = "Summon Lesser Demons";}
else if (RNG == 61) {GSpellGen3 = "Summon Shadowspawn";}
else if (RNG == 62) {GSpellGen3 = "Summon Undead";}
else if (RNG == 63) {GSpellGen3 = "Thunder Step";}
else if (RNG == 64) {GSpellGen3 = "Tidal Wave";}
else if (RNG == 65) {GSpellGen3 = "Tiny Servant";}
else if (RNG == 66) {GSpellGen3 = "Tongues";}
else if (RNG == 67) {GSpellGen3 = "Vampiric Touch";}
else if (RNG == 68) {GSpellGen3 = "Wall of Sand";}
else if (RNG == 69) {GSpellGen3 = "Wall of Water";}
else if (RNG == 70) {GSpellGen3 = "Water Breathing";}
else if (RNG == 71) {GSpellGen3 = "Water Walk";}
else if (RNG == 72) {GSpellGen3 = "Wind Wall";}
else if (RNG == 73) {GSpellGen3 = "Galder's Tower";}
else if (RNG == 74) {GSpellGen3 = "Linked Glyphs";}
}

function Spell4() {
	RNG = Math.floor(Math.random() * 51) + 1;
if (RNG == 1) {GSpellGen4 = "Arcane Eye";}
else if (RNG == 2) {GSpellGen4 = "Aura of Life";}
else if (RNG == 3) {GSpellGen4 = "Aura of Purity";}
else if (RNG == 4) {GSpellGen4 = "Banishment";}
else if (RNG == 5) {GSpellGen4 = "Blight";}
else if (RNG == 6) {GSpellGen4 = "Charm Monster";}
else if (RNG == 7) {GSpellGen4 = "Compulsion";}
else if (RNG == 8) {GSpellGen4 = "Confusion";}
else if (RNG == 9) {GSpellGen4 = "Conjure Minor Elementals";}
else if (RNG == 10) {GSpellGen4 = "Conjure Woodland Beings";}
else if (RNG == 11) {GSpellGen4 = "Control Water";}
else if (RNG == 12) {GSpellGen4 = "Death Ward";}
else if (RNG == 13) {GSpellGen4 = "Dimension Door";}
else if (RNG == 14) {GSpellGen4 = "Divination";}
else if (RNG == 15) {GSpellGen4 = "Dominate Beast";}
else if (RNG == 16) {GSpellGen4 = "Elemental Bane";}
else if (RNG == 17) {GSpellGen4 = "Evard's Black Tentacles";}
else if (RNG == 18) {GSpellGen4 = "Fabricate";}
else if (RNG == 19) {GSpellGen4 = "Find Greater Steed";}
else if (RNG == 20) {GSpellGen4 = "Fire Shield";}
else if (RNG == 21) {GSpellGen4 = "Freedom of Movement";}
else if (RNG == 22) {GSpellGen4 = "Giant Insect";}
else if (RNG == 23) {GSpellGen4 = "Grasping Vine";}
else if (RNG == 24) {GSpellGen4 = "Gravity Sinkhole";}
else if (RNG == 25) {GSpellGen4 = "Greater invisibility";}
else if (RNG == 26) {GSpellGen4 = "Guardian of Faith";}
else if (RNG == 27) {GSpellGen4 = "Guardian of Nature";}
else if (RNG == 28) {GSpellGen4 = "Hallucinatory Terrain";}
else if (RNG == 29) {GSpellGen4 = "Ice Storm";}
else if (RNG == 30) {GSpellGen4 = "Leomund's Secret Chest";}
else if (RNG == 31) {GSpellGen4 = "Locate Creature";}
else if (RNG == 32) {GSpellGen4 = "Mordenkainen's Fithful hound";}
else if (RNG == 33) {GSpellGen4 = "Mordenkainen's Private Sanctum";}
else if (RNG == 34) {GSpellGen4 = "Otiluke's Resilient Sphere";}
else if (RNG == 35) {GSpellGen4 = "Phantasmal Killer";}
else if (RNG == 36) {GSpellGen4 = "Polymorph";}
else if (RNG == 37) {GSpellGen4 = "Raulothim's Psychic Lance";}
else if (RNG == 38) {GSpellGen4 = "Shadow of Moil";}
else if (RNG == 39) {GSpellGen4 = "Sickening Radiance";}
else if (RNG == 40) {GSpellGen4 = "Staggering Smite";}
else if (RNG == 41) {GSpellGen4 = "Stone Shape";}
else if (RNG == 42) {GSpellGen4 = "Stoneskin";}
else if (RNG == 43) {GSpellGen4 = "Storm Sphere";}
else if (RNG == 44) {GSpellGen4 = "Summon Aberration";}
else if (RNG == 45) {GSpellGen4 = "Summon Construct";}
else if (RNG == 46) {GSpellGen4 = "Summon Elemental";}
else if (RNG == 47) {GSpellGen4 = "Summon Greater Demon";}
else if (RNG == 48) {GSpellGen4 = "Vitriolic Sphere";}
else if (RNG == 49) {GSpellGen4 = "Wall of Fire";}
else if (RNG == 50) {GSpellGen4 = "Watery Sphere";}
else if (RNG == 51) {GSpellGen4 = "Galder's Speedy Courier";}
}

function Spell5() {
	RNG = Math.floor(Math.random() * 61) + 1;
if (RNG == 1) {GSpellGen5 = "Animate Objects";}
else if (RNG == 2) {GSpellGen5 = "Anitlife shell";}
else if (RNG == 3) {GSpellGen5 = "Awaken";}
else if (RNG == 4) {GSpellGen5 = "Banishing Smite";}
else if (RNG == 5) {GSpellGen5 = "Bigby's Hand";}
else if (RNG == 6) {GSpellGen5 = "Circle of Power";}
else if (RNG == 7) {GSpellGen5 = "Cloudkill";}
else if (RNG == 8) {GSpellGen5 = "Commune";}
else if (RNG == 9) {GSpellGen5 = "Commune with Nature";}
else if (RNG == 10) {GSpellGen5 = "Cone of Cold";}
else if (RNG == 11) {GSpellGen5 = "Conjure Elemental";}
else if (RNG == 12) {GSpellGen5 = "Conjure Volley";}
else if (RNG == 13) {GSpellGen5 = "Contact Other Plane";}
else if (RNG == 14) {GSpellGen5 = "Contagion";}
else if (RNG == 15) {GSpellGen5 = "Control Winds";}
else if (RNG == 16) {GSpellGen5 = "Creation";}
else if (RNG == 17) {GSpellGen5 = "Danse Macabre";}
else if (RNG == 18) {GSpellGen5 = "Dawn";}
else if (RNG == 19) {GSpellGen5 = "Destructive Wave";}
else if (RNG == 20) {GSpellGen5 = "Dispel Evil and Good";}
else if (RNG == 21) {GSpellGen5 = "Dominate Person";}
else if (RNG == 22) {GSpellGen5 = "Dream";}
else if (RNG == 23) {GSpellGen5 = "Enervation";}
else if (RNG == 24) {GSpellGen5 = "Far Step";}
else if (RNG == 25) {GSpellGen5 = "Flame Strike";}
else if (RNG == 26) {GSpellGen5 = "Geas";}
else if (RNG == 27) {GSpellGen5 = "Greater Restoration";}
else if (RNG == 28) {GSpellGen5 = "Hallow";}
else if (RNG == 29) {GSpellGen5 = "Hold Monster";}
else if (RNG == 30) {GSpellGen5 = "Holy Weapon";}
else if (RNG == 31) {GSpellGen5 = "Immolation";}
else if (RNG == 32) {GSpellGen5 = "Infernal Callling";}
else if (RNG == 33) {GSpellGen5 = "Insect Plague";}
else if (RNG == 34) {GSpellGen5 = "Legend Lore";}
else if (RNG == 35) {GSpellGen5 = "Maelstrom";}
else if (RNG == 36) {GSpellGen5 = "Mass Cure Wounds";}
else if (RNG == 37) {GSpellGen5 = "Mislead";}
else if (RNG == 38) {GSpellGen5 = "Modify Memory";}
else if (RNG == 39) {GSpellGen5 = "Negative Energy Flood";}
else if (RNG == 40) {GSpellGen5 = "Passwall";}
else if (RNG == 41) {GSpellGen5 = "Planar Binding";}
else if (RNG == 42) {GSpellGen5 = "Raise Dead";}
else if (RNG == 43) {GSpellGen5 = "Rary's Telepathic Bond";}
else if (RNG == 44) {GSpellGen5 = "Reincarnate";}
else if (RNG == 45) {GSpellGen5 = "Scrying";}
else if (RNG == 46) {GSpellGen5 = "Seeming";}
else if (RNG == 47) {GSpellGen5 = "Skill Empowerment";}
else if (RNG == 48) {GSpellGen5 = "Steel Wind Strike";}
else if (RNG == 49) {GSpellGen5 = "Summon Celestial";}
else if (RNG == 50) {GSpellGen5 = "Summon Draconic Spirit";}
else if (RNG == 51) {GSpellGen5 = "Swift Quiver";}
else if (RNG == 52) {GSpellGen5 = "Synaptic Static";}
else if (RNG == 53) {GSpellGen5 = "Telekinesis";}
else if (RNG == 54) {GSpellGen5 = "Teleportation Circle";}
else if (RNG == 55) {GSpellGen5 = "Temporal Shunt";}
else if (RNG == 56) {GSpellGen5 = "Transmute Rock";}
else if (RNG == 57) {GSpellGen5 = "Tree Stride";}
else if (RNG == 58) {GSpellGen5 = "Wall of Force";}
else if (RNG == 59) {GSpellGen5 = "Wall of Light";}
else if (RNG == 60) {GSpellGen5 = "Wall of Stone";}
else if (RNG == 61) {GSpellGen5 = "Wrath of Nature";}
}

function Spell6() {
	RNG = Math.floor(Math.random() * 48) + 1;
if (RNG == 1) {GSpellGen6 = "Arcane Gate";}
else if (RNG == 2) {GSpellGen6 = "Blade Barrier";}
else if (RNG == 3) {GSpellGen6 = "Bones of the Earth";}
else if (RNG == 4) {GSpellGen6 = "Chain Lightning";}
else if (RNG == 5) {GSpellGen6 = "Circle of Death";}
else if (RNG == 6) {GSpellGen6 = "Conjure Fey";}
else if (RNG == 7) {GSpellGen6 = "Contingency";}
else if (RNG == 8) {GSpellGen6 = "Create Homunculus";}
else if (RNG == 9) {GSpellGen6 = "Create Undead";}
else if (RNG == 10) {GSpellGen6 = "Disentegrate";}
else if (RNG == 11) {GSpellGen6 = "Drawmij's Instant Summons";}
else if (RNG == 12) {GSpellGen6 = "Druid Grove";}
else if (RNG == 13) {GSpellGen6 = "Eyebite";}
else if (RNG == 14) {GSpellGen6 = "Find the Path";}
else if (RNG == 15) {GSpellGen6 = "Fizban's Platinum Shield";}
else if (RNG == 16) {GSpellGen6 = "Flesh to Stone";}
else if (RNG == 17) {GSpellGen6 = "Forbiddance";}
else if (RNG == 18) {GSpellGen6 = "Globe of Invulnerability";}
else if (RNG == 19) {GSpellGen6 = "Gravity Fissure";}
else if (RNG == 20) {GSpellGen6 = "Guards and Wards";}
else if (RNG == 21) {GSpellGen6 = "Harm";}
else if (RNG == 22) {GSpellGen6 = "Heal";}
else if (RNG == 23) {GSpellGen6 = "Heroes' Feast";}
else if (RNG == 24) {GSpellGen6 = "Investiture of Flame";}
else if (RNG == 25) {GSpellGen6 = "Investiture of Ice";}
else if (RNG == 26) {GSpellGen6 = "Investiture of Stone";}
else if (RNG == 27) {GSpellGen6 = "Investiture of Wind";}
else if (RNG == 28) {GSpellGen6 = "Magic Jar";}
else if (RNG == 29) {GSpellGen6 = "Mass Suggestion";}
else if (RNG == 30) {GSpellGen6 = "Mental Prison";}
else if (RNG == 31) {GSpellGen6 = "Move Earth";}
else if (RNG == 32) {GSpellGen6 = "Otiluke's Freezing Sphere";}
else if (RNG == 33) {GSpellGen6 = "Otto's Irresistible Dance";}
else if (RNG == 34) {GSpellGen6 = "Planar Ally";}
else if (RNG == 35) {GSpellGen6 = "Primordial Ward";}
else if (RNG == 36) {GSpellGen6 = "Programmed Illusion";}
else if (RNG == 37) {GSpellGen6 = "Scatter";}
else if (RNG == 38) {GSpellGen6 = "Soul Cage";}
else if (RNG == 39) {GSpellGen6 = "Summon Fiend";}
else if (RNG == 40) {GSpellGen6 = "Sunbeam";}
else if (RNG == 41) {GSpellGen6 = "Tasha's Otherworldly Guise";}
else if (RNG == 42) {GSpellGen6 = "Tenser's Transformation";}
else if (RNG == 43) {GSpellGen6 = "Transport via Plants";}
else if (RNG == 44) {GSpellGen6 = "True Seeing";}
else if (RNG == 45) {GSpellGen6 = "Wall of Ice";}
else if (RNG == 46) {GSpellGen6 = "Wall of Thorns";}
else if (RNG == 47) {GSpellGen6 = "Wind Walk";}
else if (RNG == 48) {GSpellGen6 = "Word of Recall";}
}

function Spell7() {
	RNG = Math.floor(Math.random() * 28) + 1;
if (RNG == 1) {GSpellGen7 = "Conjure Celestial";}
else if (RNG == 2) {GSpellGen7 = "Create Magen";}
else if (RNG == 3) {GSpellGen7 = "Crown of Stars";}
else if (RNG == 4) {GSpellGen7 = "Delayed Blast Fireball";}
else if (RNG == 5) {GSpellGen7 = "Divine Word";}
else if (RNG == 6) {GSpellGen7 = "Draconic Transformation";}
else if (RNG == 7) {GSpellGen7 = "Dream of the Blue Veil";}
else if (RNG == 8) {GSpellGen7 = "Etherealness";}
else if (RNG == 9) {GSpellGen7 = "Finger of Death";}
else if (RNG == 10) {GSpellGen7 = "Fire Storm";}
else if (RNG == 11) {GSpellGen7 = "Forcecage";}
else if (RNG == 12) {GSpellGen7 = "Mirage Arcane";}
else if (RNG == 13) {GSpellGen7 = "Mordenkainen's Magnificent Mansion";}
else if (RNG == 14) {GSpellGen7 = "Mordenkainen's Sword";}
else if (RNG == 15) {GSpellGen7 = "Plane Shift";}
else if (RNG == 16) {GSpellGen7 = "Power Word Pain";}
else if (RNG == 17) {GSpellGen7 = "Prismatic Spray";}
else if (RNG == 18) {GSpellGen7 = "Project Image";}
else if (RNG == 19) {GSpellGen7 = "Regenerate";}
else if (RNG == 20) {GSpellGen7 = "Resurrection";}
else if (RNG == 21) {GSpellGen7 = "Reverse Gravity";}
else if (RNG == 22) {GSpellGen7 = "Sequester";}
else if (RNG == 23) {GSpellGen7 = "Simulacrum";}
else if (RNG == 24) {GSpellGen7 = "Symbol";}
else if (RNG == 25) {GSpellGen7 = "Teleport";}
else if (RNG == 26) {GSpellGen7 = "Temple of the Gods";}
else if (RNG == 27) {GSpellGen7 = "Tether Essence";}
else if (RNG == 28) {GSpellGen7 = "Whirlwind";}
}

function Spell8() {
	RNG = Math.floor(Math.random() * 24) + 1;
if (RNG == 1) {GSpellGen8 = "Abi-Dalzim's Horrid Writing";}
else if (RNG == 2) {GSpellGen8 = "Animal Shapes";}
else if (RNG == 3) {GSpellGen8 = "Anitpathy/Sympathy";}
else if (RNG == 4) {GSpellGen8 = "Clone";}
else if (RNG == 5) {GSpellGen8 = "Control Weather";}
else if (RNG == 6) {GSpellGen8 = "Dark Star";}
else if (RNG == 7) {GSpellGen8 = "Demiplane";}
else if (RNG == 8) {GSpellGen8 = "Dominate Monster";}
else if (RNG == 9) {GSpellGen8 = "Earthquake";}
else if (RNG == 10) {GSpellGen8 = "Feeblemind";}
else if (RNG == 11) {GSpellGen8 = "Glibness";}
else if (RNG == 12) {GSpellGen8 = "Holy Aura";}
else if (RNG == 13) {GSpellGen8 = "Illusory Dragon";}
else if (RNG == 14) {GSpellGen8 = "Incendiary Cloud";}
else if (RNG == 15) {GSpellGen8 = "Maddening Darkness";}
else if (RNG == 16) {GSpellGen8 = "Maze";}
else if (RNG == 17) {GSpellGen8 = "Mighty Fortress";}
else if (RNG == 18) {GSpellGen8 = "Mind Blank";}
else if (RNG == 19) {GSpellGen8 = "Power Word Stun";}
else if (RNG == 20) {GSpellGen8 = "Reality Break";}
else if (RNG == 21) {GSpellGen8 = "Sunburst";}
else if (RNG == 22) {GSpellGen8 = "Telepathy";}
else if (RNG == 23) {GSpellGen8 = "Tsunami";}
else if (RNG == 24) {GSpellGen8 = "Antimagic Field";}
}

function Spell9() {
	RNG = Math.floor(Math.random() * 22) + 1;
if (RNG == 1) {GSpellGen9 = "Astral Projection";}
else if (RNG == 2) {GSpellGen9 = "Blade of Disaster";}
else if (RNG == 3) {GSpellGen9 = "Foresight";}
else if (RNG == 4) {GSpellGen9 = "Gate";}
else if (RNG == 5) {GSpellGen9 = "Imprisonment";}
else if (RNG == 6) {GSpellGen9 = "Invulnerability";}
else if (RNG == 7) {GSpellGen9 = "Mass Heal";}
else if (RNG == 8) {GSpellGen9 = "Mass Polymorph";}
else if (RNG == 9) {GSpellGen9 = "Meteor Swarm";}
else if (RNG == 10) {GSpellGen9 = "Power Word Heal";}
else if (RNG == 11) {GSpellGen9 = "Power Word Kill";}
else if (RNG == 12) {GSpellGen9 = "Prismatic Wall";}
else if (RNG == 13) {GSpellGen9 = "Psychic Scream";}
else if (RNG == 14) {GSpellGen9 = "Ravenous Void";}
else if (RNG == 15) {GSpellGen9 = "Shapechange";}
else if (RNG == 16) {GSpellGen9 = "Storm of Vengeance";}
else if (RNG == 17) {GSpellGen9 = "Time Ravage";}
else if (RNG == 18) {GSpellGen9 = "Time Stop";}
else if (RNG == 19) {GSpellGen9 = "True Polymorph";}
else if (RNG == 20) {GSpellGen9 = "True Resurrection";}
else if (RNG == 21) {GSpellGen9 = "Weird";}
else if (RNG == 22) {GSpellGen9 = "Wish";}
}

function SpellScrollBtn() {
	if (document.getElementById("spellLevel").value == "Spell0") {Spell0(); document.getElementById("itemBox").innerHTML = `${GSpellGen0}\n(DC 13 and +5 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell1") {Spell1(); document.getElementById("itemBox").innerHTML = `${GSpellGen1}\n(DC 13 and +5 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell2") {Spell2(); document.getElementById("itemBox").innerHTML = `${GSpellGen2}\n(DC 14 and +6 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell3") {Spell3(); document.getElementById("itemBox").innerHTML = `${GSpellGen3}\n(DC 15 and +7 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell4") {Spell4(); document.getElementById("itemBox").innerHTML = `${GSpellGen4}\n(DC 16 and +8 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell5") {Spell5(); document.getElementById("itemBox").innerHTML = `${GSpellGen5}\n(DC 17 and +9 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell6") {Spell6(); document.getElementById("itemBox").innerHTML = `${GSpellGen6}\n(DC 18 and +10 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell7") {Spell7(); document.getElementById("itemBox").innerHTML = `${GSpellGen7}\n(DC 18 and +10 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell8") {Spell8(); document.getElementById("itemBox").innerHTML = `${GSpellGen8}\n(DC 19 and +11 Attack Bonus)`}
	if (document.getElementById("spellLevel").value == "Spell9") {Spell9(); document.getElementById("itemBox").innerHTML = `${GSpellGen9}\n(DC 19 and +11 Attack Bonus)`}
}

function EnemyGenMod() {
	let modRoll = Math.floor(Math.random() * 129) + 1;
	let modElite
	let ModX = ``
	if (document.getElementById("modEliteCheck").checked == true) {modElite = 10} else {modElite = Math.floor(Math.random() * 10) + 1;}
	if (modRoll == 1) {
if (modElite == 10) {
GMod = `[Grappler] (Elite) \nThe creatures grows a tentacle somewhere on its body. \n---Bonus Action--- \nDC ${GTier + 14} Grapple. Restrained. On following turns, can crush, throw, or slam to deal ${Math.ceil(GPB / 2) + 2}d6 + ${GTier + 6} bludgeoning damage.`;}
else {
GMod = `[Grappler] \nThe creatures grows a tentacle somewhere on its body. \n---Bonus Action--- \nDC ${GTier + 12} Grapple. Restrained. On following turns, can crush, throw, or slam to deal ${Math.ceil(GPB / 3) + 1}d6 + ${GTier + 4} bludgeoning damage.`;}
}
else if (modRoll == 2) {
if (modElite == 10) {GMultiattack += 2;
GMod = `[Armed] (Elite) \nThe creature grows two extra limbs. The creature can attack 2 extra times each turn.`;}
else {GMultiattack += 1;
GMod = `[Armed] \nThe creature grows an extra limb. The creature can attack 1 extra time each turn.`;}
}
else if (modRoll == 3) {
if (modElite == 10) {
GMod = `[Muscular] (Elite) \nThe creature bulks up. Non-Spell attacks deal up to half of the dice of an attack as extra damage, minimum 1 dice and gains +${GTier + 3} damage.`;}
else {
GMod = `[Muscular] \nThe creature bulks up. Non-Spell attacks deal up to half of the dice of an attack as extra damage, minimum 1 dice.`;}
}
else if (modRoll == 4) {
if (modElite == 10) {
GMod = `[Split] (Elite) \nThe creature is weaker and smaller, but has two identical clones of itself.`;}
else {
GMod = `[Split] \nThe creature is weaker and smaller, but has an identical clone of itself.`;}
}
else if (modRoll == 5) {
if (modElite == 10) {
GMod = `[Shadow Form] (Elite) \nThe creature gains a connection to the shadows. It can cast Misty Step when in shadow to other shadows up to 60 feet away. Twice per turn, it can half the damage of one attack.`;}
else {
GMod = `[Shadow Form] \nThe creature gains a connection to the shadows. It can cast Misty Step when in shadow to other shadows. Once per turn, it can half the damage of one attack.`;}
}
else if (modRoll == 6) {
if (modElite == 10) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else {} if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}
GMod = `[Blazing] (Elite) \nThe creature has a 30 ft. radius aura of fire that lights objects on fire. Creatures that enter the aura for the first time or start their turn in the aura take ${Math.ceil(GPB / 2) + 2}d6 fire damage. \n\nIt can cast Burning Hands and Scorching Ray at will, is Immune to Fire, and is Vulnerable to Cold.`;}
else {if (GRes.includes("fire") == false) {GRes.push("fire")} else {} if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}
GMod = `[Blazing] \nThe creature has a 15 ft. radius aura of fire that lights objects on fire. Creatures that enter the aura for the first time or start their turn in the aura take ${Math.ceil(GPB / 3) + 1}d6 fire damage. \n\nIt can cast Burning Hands at will, has Resistance to Fire, and is Vulnerable to Cold.`;}
}
else if (modRoll == 7) {
if (modElite == 10) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} if (GImmune.includes("cold") == false) {GImmune.push("cold")} else {} if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {}
GMod = `[Drenched] (Elite) \nThe creature is lightly obscured in mist \n\nIt can cast Wall of Water and Watery Sphere at will, has 40 ft. of swim speed, is Immune to Fire and Cold, and is Vulnerable to Lightning.`;}
else {if (GRes.includes("fire") == false) {GRes.push("fire")} else {} if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {} if (GRes.includes("cold") == false) {GRes.push("cold")} else {}
GMod = `[Drenched] \nThe creature is lightly obscured in mist. \n\nIt can cast Wall of Water at will, is Resistant to Fire and Cold, and is Vulnerable to Lightning.`;}
}
else if (modRoll == 8) {
if (modElite == 10) {if (GImmune.includes("cold") == false) {GImmune.push("cold")} else {} if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}
GMod = `[Glacial] (Elite) \nThe creature has a 30 ft. radius aura of cold that slows movement speeds within by half. Creatures that enter the aura for the first time or start their turn in the aura take ${Math.ceil(GPB / 2) + 3}d6 cold damage. \n\nIt can cast Ice Knife and Rimes Binding Ice at will, is Immune to Cold, and is Vulnerable to Fire.`;}
else {if (GRes.includes("cold") == false) {GRes.push("cold")} else {} if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}
GMod = `[Glacial] \nThe creature has a 15 ft. radius aura of cold that slows movement speeds within by half. Creatures that enter the aura for the first time or start their turn in the aura take ${Math.ceil(GPB / 3) + 1}d6 cold damage. \n\nIt can cast Ice Knife at will, is Resistant to Cold, and is Vulnerable to Fire.`;}
}
else if (modRoll == 9) {
if (modElite == 10) {if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else {} if (GVuln.includes("psychic") == false) {GVuln.push("psychic")} else {}
GMod = `[Storming] (Elite) \nThe creature has a 30 ft. radius aura of lightning. Creatures that enter the aura for the first time or start their turn in the aura take 4d6 lightning damage and make a DC ${GTier + 12} Con Save or be paralyzed until their next turn. \n\nIt can cast Lightning Arrow and Lightning Bolt at will, is Immune to Lightning, and is Vulnerable to Psychic.`;}
else {if (GRes.includes("lightning") == false) {GRes.push("lightning")} else {} if (GVuln.includes("psychic") == false) {GVuln.push("psychic")} else {}
GMod = `[Storming] \nThe creature has a 15 ft. radius aura of lightning. Creatures that enter the aura for the first time or start their turn in the aura take 2d6 lightning damage and make a DC ${GTier + 10} Con Save or be paralyzed until their next turn. \n\nIt can cast Lightning Arrow at will, is Resistant to Lightning, and is Vulnerable to Psychic.`;}
}
else if (modRoll == 10) {
if (modElite == 10) {if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else {} if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {} if (GRes.includes("physical") == false) {GRes.push("physical")} else {}
GMod = `[Grounded] (Elite) \nThe creature has a 40 ft. radius aura of rumbling ground that is difficult terrain. \n\nIt can cast Maximillians Earthen Grasp and Erupting Earth at will, is Immune to Lightning, is Resistant to Physical, and is Vulnerable to Thunder.`;}
else {if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else {} if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}
GMod = `[Grounded] \nThe creature has a 20 ft. radius aura of rumbling ground that is difficult terrain. \n\nIt can cast Maximillians Earthen Grasp at will, is Immune to Lightning, and is Vulnerable to Thunder.`;}
}
else if (modRoll == 11) {
if (modElite == 10) {if (GImmune.includes("thunder") == false) {GImmune.push("thunder")} else {} if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}
GMod = `[Wispy] (Elite) \nAll projeciles fired at the creature are made with disadvantage and the creature can hover. \n\nIt can cast Wind Wall and Pulse Wave at will, is Immune to Thunder, and is Vulnerable to Fire.`;}
else {if (GRes.includes("thunder") == false) {GRes.push("thunder")} else {} if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}
GMod = `[Wispy] \nAll projeciles fired at the creature are made with disadvantage. \n\nIt can cast Wind Wall at will, is Resistant to Thunder, and is Vulnerable to Fire.`;}
}
else if (modRoll == 12) {
if (modElite == 10) {if (GCondImmune.includes("disease") == false) {GCondImmune.push("disease")} else {} if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {} if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {} if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}
GMod = `[Venomous] (Elite) \nOn Non-Spell attacks, the target makes a DC ${GTier + 14} Con Save. On a fail, they take ${Math.ceil(GPB / 2) + 3}d6 poison damage and are Poisoned. Half damage on a save. \n\nIt can cast Acid Stream and Stinking Cloud at will, is Immune to Poison and Disease, and is Vulnerable to Radiant.`;}
else {if (GCondImmune.includes("disease") == false) {GCondImmune.push("disease")} else {} if (GRes.includes("poison") == false) {GRes.push("poison")} else {} if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}
GMod = `[Venomous] \nOn Non-Spell attacks, the target makes a DC ${GTier + 12} Con Save. On a fail, they take ${Math.ceil(GPB / 3) + 1}d6 poison damage and are Poisoned. Half damage on a save. \n\nIt can cast Acid Stream at will, is Immune to Disease, is Resistant to Poison, and is Vulnerable to Radiant.`;}
}
else if (modRoll == 13) {
if (modElite == 10) {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic")} else {} if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}
GMod = `[Decaying] (Elite) \nThe creature has a 60 ft. aura of death. Creatures that enter the aura or start their turn in the aura have their Maximum Hit Points reduced by 25. \n\nIt can cast Wither and Bloom and Blight at will, is Immune to Necrotic, and is Vulnerable to Radiant.`;}
else {if (GRes.includes("necrotic") == false) {GRes.push("necrotic")} else {} if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}
GMod = `[Decaying] \nThe creature has a 30 ft. aura of death. Creatures that enter the aura or start their turn in the aura have their Maximum Hit Points reduced by 15. \n\nIt can cast Wither and Bloom at will, is Resistant to Necrotic, and is Vulnerable to Radiant.`;}
}
else if (modRoll == 14) {
if (modElite == 10) {if (GImmune.includes("radiant") == false) {GImmune.push("radiant")} else {} if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}
GMod = `[Radiant] (Elite) \nThe creature has a 20 ft. aura of bright light. Creatures within the aura are considered Blinded. \n\nIt can cast Branding Smite and Dawn at will, is Immune to Radiant, and is Resistant to Necrotic.`;}
else {if (GRes.includes("radiant") == false) {GRes.push("radiant")} else {} if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}
GMod = `[Radiant] \nThe creature has a 10 ft. aura of bright light. Creatures within the aura are considered Blinded. \n\nIt can cast Branding Smite at will, is Resistant to Radiant, and is Vulnerable to Necrotic.`;}
}
else if (modRoll == 15) {
if (modElite == 10) {if (GImmune.includes("psychic") == false) {GImmune.push("psychic")} else {} if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}
GMod = `[Psionic] (Elite) \nThe creature has advantage on Attacks made on creatures within 60 ft. and advantage on Saving Throws against effect originating from within 60 ft. \n\nThe creature can cast Mind Thrust and Psychic Lance at will, is Immune to Psychic, and is Vulnerable to Thunder.`;}
else {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {} if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}
GMod = `[Psionic] \nThe creature has advantage on Attacks made on creatures within 30 ft. and advantage on Saving Throws against effect originating from within 30 ft. \n\nThe creature can cast Mind Thrust at will, is Resistant to Psychic, and is Vulnerable to Thunder.`;}
}
else if (modRoll == 16) {
if (modElite == 10) {
GMod = `[Ocular] (Elite) \nThe creature has grown two random Beholder eye stalks. The effects and damage are at 66% normal effectiveness. The Save DC is ${GTier + 14}. \n\n(For balance reasons, Disintegration and Death Rays can be removed from the possible rolls, especially at lower levels)`;}
else {
GMod = `[Ocular] \nThe creature has grown a random Beholder eye stalk. The effects and damage are at 33% normal effectiveness. The Save DC is ${GTier + 12}. \n\n(For balance reasons, Disintegration and Death Rays can be removed from the possible rolls, especially at lower levels)`;}
}
else if (modRoll == 17) {
if (modElite == 10) {if (GSpeedFly = 0) {GSpeedFly = 60;} else {GSpeedFly += 20;}
GMod = `[Winged] (Elite) \nThe creature gains a pair of wings and 60 ft. of fly speed and can cast Gust of Wind as a Bonus Action.`;}
else {if (GSpeedFly = 0) {GSpeedFly = 60;} else {GSpeedFly += 10;}
GMod = `[Winged] \nThe creature gains a pair of wings and 40 ft. of fly speed.`;}
}
else if (modRoll == 18) {
if (modElite == 10) {
GMod = `[Reckless] (Elite) \nAll attacks made by the creature are made at advantage.`;}
else {
GMod = `[Reckless] \nAll attacks made by and against the creature are made at advantage.`;}
}
else if (modRoll == 19) {
if (modElite == 10) {
GMod = `[Stalker] (Elite) \nThe creature has +5 to stealth rolls and can cast Invisibility on itself as an Action at will. It also has a Sneak Attack for ${Math.ceil(GPB / 2) + 1}d6 damage.`;}
else {
GMod = `[Stalker] \nThe creature can cast Invisibility on itself as an Action at will. It also has a Sneak Attack for ${Math.ceil(GPB / 3) + 1}d6 damage.`;}
}
else if (modRoll == 20) {
if (modElite == 10) {
GMod = `[Hypnotist] (Elite) \nThe creature can cast Dominate Monster four times and can have a maximum of 2 creatures dominated at a time. The Save DC is ${GTier + 14}.`;}
else {
GMod = `[Hypnotist] \nThe creature can cast Dominate Monster twice and can have a maximum of 1 creature dominated at a time. The Save DC is ${GTier + 12}.`;}
}
else if (modRoll == 21) {
if (modElite == 10) {
GMod = `[Observant] (Elite) \nThe creatures grows many extra eyes on its body. It gains +10 and advantage to Perception rolls and cannot be surprised.`;}
else {
GMod = `[Observant] \nThe creatures grows many extra eyes on its body. It gains +5 to Perception rolls and cannot be surprised.`;}
}
else if (modRoll == 22) {
if (modElite == 10) {
GMod = `[Sticky] (Elite) \nCreatures or objects that touch the creature stick to it, just like a Mimic, with a escape DC of ${GTier + 14}.`;}
else {
GMod = `[Sticky] \nCreatures or objects that touch the creature stick to it, just like a Mimic, with a escape DC of ${GTier + 12}.`;}
}
else if (modRoll == 23) {
if (modElite == 10) {
GMod = `[Repulsor] (Elite) \nAt the start of the creatures turn, all creatures within 40 ft. make a DC ${GTier + 14} Strength Save or are pushed back 15 ft.`;}
else {
GMod = `[Repulsor] \nAt the start of the creatures turn, all creatures within 20 ft. make a DC ${GTier + 12} Strength Save or are pushed back 10 ft.`;}
}
else if (modRoll == 24) {
if (modElite == 10) {
GMod = `[Attractor] (Elite) \nAt the start of the creatures turn, all creatures within 40 ft. make a DC ${GTier + 14} Strength Save or are pulled 15 ft. closer.`;}
else {
GMod = `[Attractor] \nAt the start of the creatures turn, all creatures within 20 ft. make a DC ${GTier + 12} Strength Save or are pulled 10 ft. closer.`;}
}
else if (modRoll == 25) {
if (modElite == 10) {
GMod = `[Spell Eater] (Elite) \nDamage dealt by Spells or effects that consume a Spell Slot has a 50% chance to heal the creature instead.`;}
else {
GMod = `[Spell Eater] \nDamage dealt by Spells or effects that consume a Spell Slot has a 25% chance to heal the creature instead.`;}
}
else if (modRoll == 26) {
if (modElite == 10) {if (GMagic == "Caster"){EnemyGenMod();} else {
				GMod = `[Spell Breaker] (Elite) \nThe creature has a 30 ft. radius aura of Anti-Magic all around it.`;}}
else {
				GMod = `[Spell Breaker] \nThe creature has a 60 ft. cone of Anti-Magic in front of it.`;}
}
else if (modRoll == 27) {
if (modElite == 10) {
GMod = `[Single-Minded] (Elite) \nAt the start of combat the creature selects one target, either at random or intent, and focuses completely on them until they are killed. Once it no longer has a target, it selects a new one.`;}
else {
GMod = `[Single-Minded] \nAt the start of combat the creature selects one target, either at random or intent, and focuses completely on them until they are killed. Once it no longer has a target, it selects a new one. \n\nThe creature crits on 18-20 (Or +2 crit range if it already has an expanded crit range) against its selected target.`;}
}
else if (modRoll == 28) {
if (modElite == 10) {GSpeed =+ 20; GSpeedBurrow =+ 20; GSpeedFly =+ 20; GSpeedSwim =+ 20; 
GMod = `[Hunter] (Elite) \nThe creatures gains 20 ft. of all speeds and two extra Reactions every turn.`;}
else {GSpeed =+ 10; GSpeedBurrow =+ 10; GSpeedFly =+ 10; if (GSpeedSwim == 0) {GSpeedSwim += 20} else {GSpeedSwim += 10}
GMod = `[Hunter] \nThe creatures gains 10 ft. of all speeds and an extra Reaction every turn.`;}
}
else if (modRoll == 29) {
if (modElite == 10) {GAC = GAC += 4; GSaveBonus = GSaveBonus += 4;
GMod = `[Exoskeleton] (Elite) \nThe creatures skin grows thicker, granting it +4 to AC and Saving Throws.`;}
else {GAC = GAC += 2; GSaveBonus = GSaveBonus += 2;
GMod = `[Exoskeleton] \nThe creatures skin grows thicker, granting it +2 to AC and Saving Throws.`;}
}
else if (modRoll == 30) {
if (modElite == 10) {
GMod = `[Regenerator] (Elite) \nThe creature heals for 20 Hit Points at the start of its turn. If the creature has taken fire damage since its last turn, it does not heal.`;}
else {
GMod = `[Regenerator] \nThe creature heals for 10 Hit Points at the start of its turn. If the creature has taken fire damage or a critical hit since its last turn, it does not heal.`;}
}
else if (modRoll == 31) {
if (modElite == 10) {if (GImmune.includes("physical") == false) {GImmune.push("physical")} else {}
GMod = `[Steel Skin] (Elite) \nThe creature's skin grows remarkably dense, granting them Immunity to Bludgeoning, Slashing, and Piercing damage.`;}
else {if (GRes.includes("physical") == false) {GRes.push("physical")} else {}
GMod = `[Steel Skin] \nThe creature's skin grows denser, granting them Resistance to Bludgeoning, Slashing, and Piercing damage.`;}
}
else if (modRoll == 32) {
if (modElite == 10) {
GMod = `[Reflection] (Elite) \nThe first time the creature takes damage in a round, it absorbs some of it and adds ${Math.ceil(GPB / 3)}d6 of that type on its next attack.`;}
else {
GMod = `[Reflection] \nThe first time the creature takes Non-Physical damage in a round, it absorbs some of it and adds ${Math.ceil(GPB / 4)}d6 of that type on its next attack.`;}
}
else if (modRoll == 33) {
if (modElite == 10) {
GMod = `[Symbiosis] (Elite) \nAt the start of combat, the creature selects up to three allies. All damage and healing taken by either is split between both of them.`;}
else {
GMod = `[Symbiosis] \nAt the start of combat, the creature selects one ally. All damage and healing taken by either is split between both of them.`;}
}
else if (modRoll == 34) {
if (modElite == 10) {
GMod = `[Host] (Elite) \nWhen the creature dies, it splits into 5 much weaker and smaller versions.`;}
else {
GMod = `[Host] \nWhen the creature dies, it splits into 3 much weaker and smaller versions.`;}
}
else if (modRoll == 35) {
if (modElite == 10) {
GMod = `[Undying] (Elite) \nIf damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC equal to the damage taken, unless the damage is from a critical hit. On a success, the creature drops to 1 hit point instead.`;}
else {
GMod = `[Undying] \nIf damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is from a critical hit. On a success, the creature drops to 1 hit point instead.`;}
}
else if (modRoll == 36) {
if (modElite == 10) {ModX = `[Mother] (Elite) \nThe creature grows four beholder-like stalks that each have a separate Random Modifier:`;
			EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; GMod = ModX;}
else {ModX = `[Mother] \nThe creature grows two beholder-like stalks that each have a separate Random Modifier:`;
			EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; GMod = ModX;}
			}
else if (modRoll == 37) {
if (modElite == 10) {GInt = GInt += 6; if (GSave.includes("Intelligence") == false) {GSave.push("Intelligence");} else {} if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy");} GTelepathyRange = GTelepathyRange += 120;
GMod = `[Genius] (Elite) \nThe creature gains +5 Intelligence, gains Intelligence Saving Throw proficiency, and can speak telepathically up to 120 ft.`;}
else {GInt = GInt += 3; if (GSave.includes("Intelligence") == false) {GSave.push("Intelligence");} else {} if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy");} GTelepathyRange = GTelepathyRange += 60;
GMod = `[Genius] \nThe creature gains +3 Inteliigence, gains Intelligence Saving Throw proficiency, and can speak telepathically up to 60 ft.`;}
}
else if (modRoll == 38) {
if (modElite == 10) {
GMod = `[Necromancer] (Elite) \nThe creature looks physically frail and unassuming. As an Action, the creature can resurrect a dead ally at 50% maximum Hit Points.`;}
else {
GMod = `[Necromancer] \nThe creature looks physically frail and unassuming. As an Action, the creature can resurrect a dead ally at 25% maximum Hit Points.`;}
}
else if (modRoll == 39) {
if (modElite == 10) {if (GSize == "Tiny" || GSize == "Small" || GSize == "Medium") {GSpeedBurrow += 15;} else if (GSize == "Large") {GSpeedBurrow += 20;} else if (GSize == "Huge") {GSpeedBurrow += 25;} else if (GSize == "Gargantuan") {GSpeedBurrow += 30;}
GMod = `[Tunneler] (Elite) \nThe creature gains 20 ft. of burrow speed and leave tunnels. The burrow speed increases by 10 ft. for each size category above medium.`;}
else {if (GSize == "Tiny" || GSize == "Small" || GSize == "Medium") {GSpeedBurrow += 10;} else if (GSize == "Large") {GSpeedBurrow += 15;} else if (GSize == "Huge") {GSpeedBurrow += 20;} else if (GSize == "Gargantuan") {GSpeedBurrow += 25;}
GMod = `[Tunneler] \nThe creature gains 10 ft. of burrow speed and leave tunnels. The burrow speed increases by 5 ft. for each size category above medium.`;}
}
else if (modRoll == 40) {
if (modElite == 10) {Spell3(); Spell5();
GMod = `[Mage] (Elite) \nThe creature can use ${GSpell3} and ${GSpell5} at will.`; GSpell3 = ""; GSpell5 = "";}
else {Spell2(); Spell4();
GMod = `[Mage] \nThe creature can use ${GSpell2} and ${GSpell4} at will.`; GSpell2 = ""; GSpell4 = "";}
}
else if (modRoll == 41) {
if (modElite == 10) {
GMod = `[Modular] (Elite) \nThe creature is much easier to dismember. Dismembered parts form into a smaller, weaker, version of the creature. These clones cannot replicate. Each clone has a separate randomly rolled Modifier.`;}
else {
GMod = `[Modular] \nThe creature is much easier to dismember. Dismembered parts form into a smaller, weaker, version of the creature. These clones cannot replicate.`;}
}
else if (modRoll == 42) {
if (modElite == 10) {
GMod = `[Wrong] (Elite) \nThe creature has the physical appearance of a completely different creature. It retains all stats, skills, and abilities, of the original creature. It gains one trait or attack from the creature it appears as.`;}
else {
GMod = `[Wrong] \nThe creature has the physical appearance of a completely different creature. It retains all stats, skills, and abilities, of the original creature.`;}
}
else if (modRoll == 43) {
if (modElite == 10) {
GMod = `[Phantom] (Elite) \nThe creature can phase through creatures, objects, and walls. Creatures it passes through take ${Math.ceil(GPB / 3) + 1}d6 psychic damage.`;}
else {
GMod = `[Phantom] \nThe creature can phase through creatures, objects, and walls.`;}
}
else if (modRoll == 44) {
if (modElite == 10) {GHPMulti = 1.66;
GMod = `[Hearty] (Elite) \nThe creature has an additional 66% Hit Points.`;}
else {GHPMulti = 1.33;
GMod = `[Hearty] \nThe creature has an additional 33% Hit Points.`;}
}
else if (modRoll == 45) {
if (modElite == 10) {
GMod = `[Webbing] (Elite) \nAs a Bonus Action, the creature can spray webbing at three targets. It has a range of 60/120 ft. with an escape DC of ${GTier + 14}, AC of 16, and ${Math.ceil(GPB / 2) * 22} Hit Points.`;}
else {
GMod = `[Webbing] \nAs a Bonus Action, the creature can spray webbing at one target. It has a range of 30/60 ft. with an escape DC of ${GTier + 12}, AC of 12, and ${Math.ceil(GPB / 2) * 15} Hit Points.`;}
}
else if (modRoll == 46) {
if (modElite == 10) {
GMod = `[Lingering] (Elite) \nNon-Spell attacks leave a 15x15 feet puddle of ${Math.ceil(GPB / 2) + 4}d6 acid (or applicable type) for 6 rounds.`;}
else {
GMod = `[Lingering] \nNon-Spell attacks leave a 10x10 feet puddle of ${Math.ceil(GPB / 3) + 1}d6 acid (or applicable type) for 3 rounds.`;}
}
else if (modRoll == 47) {
if (modElite == 10) {
GMod = `[Berzerker] (Elite) \nEvery successful attack during a combat adds +3 damage to all following attacks.`;}
else {
GMod = `[Berzerker] \nEvery successful attack during a combat adds +2 damage to all following attacks.`;}
}
else if (modRoll == 48) {
if (modElite == 10) {
GMod = `[Triggered] (Elite) \nThe creature takes a second turn on a different initative, gains +6 on initiative rolls, and gains an additional Reaction every round (3 total counting both turns).`;}
else {
GMod = `[Triggered] \nThe creature takes a second turn on a different initative.`;}
}
else if (modRoll == 49) {
if (modElite == 10) {
GMod = `[Mirrored] (Elite) \nWhile in combat, the creature is under the effect of Mirror Image. At the end of every turn, it gains an Image, to a max of 3. When the creature hits 0 Images, it instantly gains 3 Images.`;}
else {
GMod = `[Mirrored] \nWhile in combat, the creature is under the effect of Mirror Image. At the end of every turn, it gains an Image, to a max of 3.`;}
}
else if (modRoll == 50) {
if (modElite == 10) {
GMod = `[Mistling] (Elite) \nThe creature gains a 40 ft. aura of acid mist (or applicable damage type). Creatures that enter or start their turn in the mist take ${Math.ceil(GPB / 2) + 4}d6 damage.`;}
else {
GMod = `[Mistling] \nThe creature gains a 20 ft. aura of acid mist (or applicable damage type). Creatures that enter or start their turn in the mist take ${Math.ceil(GPB / 3) + 1}d6 damage.`;}
}
else if (modRoll == 51) {
if (modElite == 10) {GSpeed += 20;
GMod = `[Lightweight] (Elite) \nThe creature has triple jump distance and height, and has 20 ft. increased speed.`;}
else {GSpeed += 10;
GMod = `[Lightweight] \nThe creature has double jump distance and height, and has 10 ft. increased speed.`;}
}
else if (modRoll == 52) {
if (modElite == 10) {GCondImmune.length = 0; GCondImmune.push("All Conditions");
GMod = `[Hidden Organs] (Elite) \nThe creature cannot be critically hit and is immune to conditions.`;}
else {
GMod = `[Hidden Organs] \nThe creature cannot be critically hit.`;}
}
else if (modRoll == 53) {
if (modElite == 10) {
GMod = `[Iron Jaw] (Elite) \nThe creature has a jaw that is capable of biting through most nonmagical materials. Bite damage is tripled and has the vorpal effect on bitten limbs. Default Bite damage is 1d8 + Str.`;}
else {
GMod = `[Iron Jaw] \nThe creature has a jaw that is capable of biting through most nonmagical materials. Bite damage is doubled. Default Bite damage is 1d6 + Str.`;}
}
else if (modRoll == 54) {
if (modElite == 10) {
GMod = `[Breath] (Elite) \nThe creature gains a random DC 18 Young Dragon Breath Attack.`;}
else {
GMod = `[Breath] \nThe creature gains a random DC 15 Wyrmling Dragon Breath Attack.`;}
}
else if (modRoll == 55) {
if (modElite == 10) {EnemyGenMod();}
			else {EnemyGenMod();}
			}
else if (modRoll == 56) {
if (modElite == 10) {
GMod = `[Hidden Form] (Elite) \nThe creature can undetectably disguise themself as an object, like a mimic. The size limit is 2 stages larger and smaller than ${GSize}.`;}
else {
GMod = `[Hidden Form] \nThe creature can undetectably disguise themself as an object, like a mimic.`;}
}
else if (modRoll == 57) {
if (modElite == 10) {
GMod = `[Disease-Ridden] (Elite) \nNon-Spell attacks invoke a DC ${GTier + 14} Con Save. On a fail, the target contracts a disease and is Poisoned.`;}
else {
GMod = `[Disease-Ridden] \nNon-Spell attacks invoke a DC ${GTier + 12} Con Save. On a fail, the target contracts a disease.`;}
}
else if (modRoll == 58) {
if (modElite == 10) {
GMod = `[Subsumer] (Elite) \nThe creature can replace an attack with absorbing a corpse. After absorbing a corpse, it heals for 40 Hit Points and gains two traits from the creature or +6 damage for the duration of the fight.`;}
else {
GMod = `[Subsumer] \nThe creature can replace an attack with absorbing a corpse. After absorbing a corpse, it heals for 20 Hit Points and gains one trait from the creature or +3 damage for the duration of the fight.`;}
}
else if (modRoll == 59) {
if (modElite == 10) {
GMod = `[Vampiric] (Elite) \nNatural/Unarmed weapons attacks deal an extra ${Math.ceil(GPB / 4) + 3}d6 necrotic damage. The targets Maximum Hit Points is reduced and the creature heals for the necrotic damage dealt.`;}
else {
GMod = `[Vampiric] \nNatural/Unarmed weapons attacks deal an extra ${Math.ceil(GPB / 4) + 1}d6 necrotic damage. The targets Maximum Hit Points is reduced and the creature heals for the necrotic damage dealt.`;}
}
else if (modRoll == 60) {
if (modElite == 10) {
GMod = `[Leader] (Elite) \nThe creature has 5 minion-type creatures with it and gains the Leadership trait:\nLeadership (Recharges after a Short or Long Rest)\n For 1 minute, the creature can utter a special command whenever an allied creature that it can see within 30 feet of it makes an attack roll or a saving throw. The target can add a d4 to its roll provided it can hear and understand the creature. A creature can benefit from only one Leadership die at a time. This effect ends if this creature  is incapacitated.`;}
else {
GMod = `[Leader] \nThe creature has 3 minion-type creatures with it and gains the Leadership trait:\nLeadership (Recharges after a Short or Long Rest)\n For 1 minute, the creature can utter a special command whenever an allied creature that it can see within 30 feet of it makes an attack roll or a saving throw. The target can add a d4 to its roll provided it can hear and understand the creature. A creature can benefit from only one Leadership die at a time. This effect ends if this creature  is incapacitated.`;}
}
else if (modRoll == 61) {
if (modElite == 10) {
GMod = `[Terrifying] (Elite) \nGains a DC ${GTier + 14} dragons Frighteneing Presence.`;}
else {
GMod = `[Terrifying] \nGains a DC ${GTier + 12} dragons Frighteneing Presence.`;}
}
else if (modRoll == 62) {
if (modElite == 10) {
GMod = `[Vines] (Elite) \nGround within 30 ft. of the creature requires three feet to move one foot.`;}
else {
GMod = `[Vines] \nGround within 30 ft. of the creature is difficult terrain.`;}
}
else if (modRoll == 63) {
if (modElite == 10) {
GMod = `[Duplicant] (Elite) \nDamage the creature deals is also dealt to a creature within 5 ft. of the target.`;}
else {
GMod = `[Duplicant] \nHalf of the damage the creature deals is also dealt to a creature within 5 ft. of the target.`;}
}
else if (modRoll == 64) {
if (modElite == 10) {
GMod = `[Oozing] (Elite) \nWhen hit by a weapon attack, slime fires off at two creature within 60 ft. with a +${GPB + 7} to hit. if it hits, the target is Slimed and their movement speed is halved. A second slime reduces speed to 0. One layer of slime can be removed as an action.`;}
else {
GMod = `[Oozing] \nWhen hit by a weapon attack, a piece of slime fires off at a creature within 30 ft. with a +${GPB + 4} to hit. if it hits, the target is Slimed and their movement speed is halved. A second slime reduces speed to 0. One layer of slime can be removed as an action.`;}
}
else if (modRoll == 65) {
if (modElite == 10) {
GMod = `[Enraged] (Elite) \nEvery 20% of health lost grants the creature ${Math.ceil(GPB / 3) + 1}d6 more damage.`;}
else {
GMod = `[Enraged] \nEvery 25% of health lost grants the creature ${Math.ceil(GPB / 4)}d6 more damage.`;}
}
else if (modRoll == 66) {
if (modElite == 10) {
GMod = `[Gravity Well] (Elite) \nWithin 120 feet, moving towards the creature requires only one-third of the the normal speed. Moving away requires triple the normal speed.`;}
else {
GMod = `[Gravity Well] \nWithin 60 feet, moving towards the creature requires only half of the the normal speed. Moving away requires double the normal speed.`;}
}
else if (modRoll == 67) {
if (modElite == 10) {
GMod = `[Telekinetic] (Elite) \nEvery turn, all enemies within 80 feet make a DC ${GTier + 14} Intelligence (Athletics) roll or be moved 15 ft. in a direction.`;}
else {
GMod = `[Telekinetic] \nEvery turn, two enemies within 40 feet make a DC ${GTier + 12} Intelligence (Athletics) roll or be moved 10 ft. in a direction.`;}
}
else if (modRoll == 68) {
if (modElite == 10) {
GMod = `[Swapper] (Elite) \nAs a Bonus Action, the creature swaps the locations of two creatures within 60 ft. of it.`;}
else {
GMod = `[Swapper] \nAs a Bonus Action, the creature swaps the locations of two creatures within 30 ft. of it.`;}
}
else if (modRoll == 69) {
if (modElite == 10) {
GMod = `[Rigged] (Elite) \nOn death, the creature explodes for ${Math.floor(GPB * 1.5)}d8 within 40 ft.`;}
else {
GMod = `[Rigged] \nOn death, the creature explodes for ${GPB}d8 within 20 ft.`;}
}
else if (modRoll == 70) {
if (modElite == 10) {
GMod = `[Sweeping] (Elite) \nAll Non-Spell attacks also hit all creatures within 5 ft. of the target.`;}
else {
GMod = `[Sweeping] \nAll Non-Spell attacks also hit 5 ft. to the left and right of the target.`;}
}
else if (modRoll == 71) {
if (modElite == 10) {
GMod = `[Gravity Flip] (Elite) \nAs an Action, the creature picks a spot within 100 ft. and creates a 30 ft. square of reversed gravity 100 ft. tall. It lasts 6 rounds and recharges on a 4-6.`;}
else {
GMod = `[Gravity Flip] \nAs an Action, the creature picks a spot within 50 ft. and creates a 15 ft. square of reversed gravity 50 ft. tall. It lasts 3 rounds and recharges on a 5-6.`;}
}
else if (modRoll == 72) {
if (modElite == 10) {
GMod = `[Anti-Grav] (Elite) \nAs a Bonus Action, a targeted creature makes a DC ${GTier + 14} Charisma Save. On a fail, gravity is negated for them for 6 rounds.`;}
else {
GMod = `[Anti-Grav] \nAs a Bonus Action, a targeted creature makes a DC ${GTier + 12} Charisma Save. On a fail, gravity is negated for them for 3 rounds.`;}
}
else if (modRoll == 73) {
if (modElite == 10) {
GMod = `[Sapper] (Elite) \nAttack impose a DC ${GTier + 14} Con Save. On a fail, they gain one level of exhaustion and the creature gains advantage on their next attack and an extra attack.`;}
else {
GMod = `[Sapper] \nAttack impose a DC ${GTier + 12} Con Save. On a fail, they gain one level of exhaustion and the creature gains advantage on their next attack.`;}
}
else if (modRoll == 74) {
if (modElite == 10) {if (GSpeedClimb == 0) {GSpeedClimb += 60} else {GSpeedClimb += 20} if (GTremorsense == 0) {GTremorsense += 90} else {GTremorsense += 40}
GMod = `[Spider Climb] (Elite) \nThe creature gains 60 ft. of climbing speed, 90 ft. of tremorsense. Surprised creatures have disadvantage on attacks on their next turn.`;}
else {if (GSpeedClimb == 0) {GSpeedClimb += 30} else {GSpeedClimb += 10} if (GTremorsense == 0) {GTremorsense += 45} else {GTremorsense += 20}
GMod = `[Spider Climb] \nThe creature gains 30 ft. of climbing speed, 45 ft. of tremorsense. Surprised creatures have disadvantage on attack on their next turn.`;}
}
else if (modRoll == 75) {
if (modElite == 10) {
GMod = `[Charging] (Elite) \nAttacks take a full turn before they fire off. They deal damage in a sizable AoE (depending on the original attack size) and triple damage.`;}
else {
GMod = `[Charging] \nAttacks take a full turn before they fire off. They deal damage in a sizable AoE (depending on the original attack size) and double damage.`;}
}
else if (modRoll == 76) {
if (modElite == 10) {
GMod = `[Time Watcher] (Elite) \nEvery turn, one target makes a DC ${GTier + 14} Charisma Save or they cannot use Bonus Actions or Reactions on their next turn. They also have half movement speed until then.`;}
else {
GMod = `[Time Watcher] \nEvery turn, one target makes a DC ${GTier + 12} Charisma Save or they cannot use Bonus Actions on their next turn.`;}
}
else if (modRoll == 77) {
if (modElite == 10) {
GMod = `[Blinking] (Elite) \nAs a Reaction, the creature can cast Misty Step up to 60 ft. The creature has an additional Reaction every turn.`;}
else {
GMod = `[Blinking] \nAs a Reaction, the creature can cast Misty Step.`;}
}
else if (modRoll == 78) {
if (modElite == 10) {
GMod = `[Consumer] (Elite) \nAll consumable items used within 90 ft. instead benefit the creature.`;}
else {
GMod = `[Consumer] \nAll consumable items used within 45 ft. instead benefit the creature.`;}
}
else if (modRoll == 79) {
if (modElite == 10) {
GMod = `[Mouth of Holding] (Elite) \nThe creature's mouth functions as a Large Bag of Holding. Creatures inside are incapacitated.`;}
else {
GMod = `[Mouth of Holding] \nThe creature's mouth functions as a Large Bag of Holding.`;}
}
else if (modRoll == 80) {
if (modElite == 10) {
GMod = `[Redirector] (Elite) \nAs a Reaction, reduce a projectles damage by ${Math.ceil(GPB / 4) + 2}d6 +${GPB + 4}. If reduced to 0, throw the projectile back with +${GPB + 6} attack.`;}
else {
GMod = `[Redirector] \nAs a Reaction, reduce a projectles damage by ${Math.ceil(GPB / 4) + 1}d6 +${GPB + 2}. If redcued to 0, throw the projectile back with +${GPB + 4} attack.`;}
}
else if (modRoll == 81) {
if (modElite == 10) {
GMod = `[Mutant] (Elite) \nThe creature is completely merged with two others. It gains the traits and attacks of all three and the highest of each Stat and HP.`;}
else {
GMod = `[Mutant] \nThe creature is completely merged with another. It gains the traits and attacks of both and the highest of each Stat and HP.`;}
}
else if (modRoll == 82) {
if (modElite == 10) {
GMod = `[Plant Growth] (Elite) \nThe creature can cast Plant Growth, Grasping Vines, and Guardian of Nature at will. The creature can also use Misty Step to travel through plants up to 60 feet.`;}
else {
GMod = `[Plant Growth] \nThe creature can cast Plant Growth, Grasping Vines, and Guardian of Nature at will.`;}
}
else if (modRoll == 83) {
if (modElite == 10) {
GMod = `[Trapper] (Elite) \nThe creature has a large variety of traps and tricks set up within its territory. DCs are ${GTier + 13}-${GTier + 15} and damage is ${Math.ceil(GPB / 2) + 4}d6.`;}
else {
GMod = `[Trapper] \nThe creature has a large variety of traps and tricks set up within its territory. DCs are ${GTier + 11}-${GTier + 13} and damage is ${Math.ceil(GPB / 3) + 1}d6.`;}
}
else if (modRoll == 84) {
if (modElite == 10) {
GMod = `[Blood Bags] (Elite) \nThe creature will fake its death to get an advantage. Sneak attacks from feign death deal ${Math.ceil(GPB / 2) + 1}d6 extra damage and crit on 18-20.`;}
else {
GMod = `[Blood Bags] \nThe creature will fake its death to get an advantage. Sneak attacks from feign death deal ${Math.ceil(GPB / 3) + 1}d6 extra damage.`;}
}
else if (modRoll == 85) {
if (modElite == 10) {
GMod = `[Waller] (Elite) \nCreates walls of stone (or applicable material) to limit movement. Can create two walls per turn, up to 30 ft. tall and long with 120 Hit Points.`;}
else {
GMod = `[Waller] \nCreates walls of stone (or applicable material) to limit movement. Can create one wall per turn, up to 20 ft. tall and long with 60 Hit Points.`;}
}
else if (modRoll == 86) {
if (modElite == 10) {
GMod = `[Riddler] (Elite) \nAs a Bonus Action, the creature asks two targets that can hear it a riddle. An incorrect or no answer results in paralysis until the end of their next turn.`;}
else {
GMod = `[Riddler] \nAs a Bonus Action, the creature asks one target that can hear it a riddle. An incorrect or no answer results in paralysis until the end of their next turn.`;}
}
else if (modRoll == 87) {
if (modElite == 10) {
GMod = `[Gangly] (Elite) \nThe creature has 20 foot longer reach with melee attacks and triple range with ranged attacks.`;}
else {
GMod = `[Gangly] \nThe creature has 10 foot longer reach with melee attacks and double range with ranged attacks.`;}
}
else if (modRoll == 88) {
if (modElite == 10) {
GMod = `[Pinpoint] (Elite) \nAll hits are Critical Hits, but the creature has -5 to hit.`;}
else {
GMod = `[Pinpoint] \nAll hits are Critical Hits, but the creature has -7 to hit.`;}
}
else if (modRoll == 89) {
if (modElite == 10) {
GMod = `[Consistent] (Elite) \nThe creature's attacks always hit and enemies have -4 to Saving Throws, but it cannot land critical hits.`;}
else {
GMod = `[Consistent] \nThe creature's attacks always hit and enemies have -2 to Saving Throws, but it cannot land critical hits.`;}
}
else if (modRoll == 90) {
if (modElite == 10) {ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
			ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
			ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
			ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
			ElementTypeGen(); if (GImmune.includes(GElement) == false) {} else {ElementTypeGen();} GImmune.push(GElement);
GMod = `[Resistant] (Elite) \nThe creature has 4 random resistances and 1 random immunity.`;}
else {ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
			ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
			ElementTypeGen(); if (GRes.includes(GElement) == false) {} else {ElementTypeGen();} GRes.push(GElement);
GMod = `[Resistant] \nThe creature has 3 random resistances.`;}
}
else if (modRoll == 91) {
if (modElite == 10) {ElementTypeGen(); eleOne = GElement; ElementTypeGen(); GImmune.length = 0; GImmune.push(`All damage except ${GElement} and ${eleOne}`); if (GVuln.includes(`${GElement}`) == false) {GVuln.push(`${GElement}`)} if (GVuln.includes(`${eleOne}`) == false) {GVuln.push(`${eleOne}`)}
GMod = `[Weakness] (Elite) \nThe creature is Immune to damage of all types except for 2, which it is Vulnerable to.`;}
else {ElementTypeGen(); GRes.length = 0; GRes.push(`All damage except ${GElement}`); if (GVuln.includes(`${GElement}`) == false) {GVuln.push(`${GElement}`)}
GMod = `[Weakness] \nThe creature has Resistance to all except for one type, which it is Vulnerable to.`;}
}
else if (modRoll == 92) {
if (modElite == 10) {
GMod = `[Gibbering] (Elite) \nEach creature that starts its turn within 40 feet of the creature and can hear the gibbering must succeed on a DC ${GTier + 14} Wisdom Save. On a failure, the creature cant take reactions until the start of its next turn and rolls a d8 to determine what it does. 1-4, do nothing. 5-6, take no action or bonus action and use all movement in a random direction. 7-8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it cant make such an attack.`;}
else {
GMod = `[Gibbering] \nEach creature that starts its turn within 20 feet of the creature and can hear the gibbering must succeed on a DC ${GTier + 12} Wisdom Save. On a failure, the creature cant take reactions until the start of its next turn and rolls a d8 to determine what it does. 1-4, do nothing. 5-6, take no action or bonus action and use all movement in a random direction. 7-8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it cant make such an attack.`;}
}
else if (modRoll == 93) {
if (modElite == 10) {
GMod = `[Fortified] (Elite) \nInstances of damage ${Math.ceil(GPB / 2) + 12} or less deal no damage to the creature.`;}
else {
GMod = `[Fortified] \nInstances of damage ${Math.ceil(GPB / 2) + 8} or less deal no damage to the creature.`;}
}
else if (modRoll == 94) {
if (modElite == 10) {
GMod = `[Hivemind] (Elite) \n(Spellcasters Only) The creature can concentrate on 3 spells at once and has advantage and +2 on Saving Throws to maintain Concentration.`;}
else {
GMod = `[Hivemind] \n(Spellcasters Only) The creature can concentrate on 2 spells at once and has advantage on Saving Throws to maintain Concentration.`;}
}
else if (modRoll == 95) {
if (modElite == 10) {
GMod = `[Tactician] (Elite) \nAs a Bonus Action, command two allies to use their Reaction to make an attack. As a Reaction, add 2d6 to the Hit or Save roll of an ally.`;}
else {
GMod = `[Tactician] \nAs a Bonus Action, command an ally to use their Reaction to make an attack. As a Reaction, add 1d6 to the Hit or Save roll of an ally.`;}
}
else if (modRoll == 96) {
if (modElite == 10) {
GMod = `[Tiring] (Elite) \nEvery turn, a random creature within 1200 ft. makes a DC ${GTier + 12} Con Save or they gain a level of Exhaustion.`;}
else {
GMod = `[Tiring] \nEvery turn, a random creature within 60 ft. makes a DC ${GTier + 10} Con Save or they gain a level of Exhaustion.`;}
}
else if (modRoll == 97) {
if (modElite == 10) {GHP += GPB * 8;
GMod = `[Tough] (Elite) \nThe creature gains ${GPB * 8} Maximum Hit Points and has Resistance to the two most recent damage types taken.`;}
else {GHP += GPB * 4
GMod = `[Tough] \nThe creature gains ${GPB * 4} Maximum Hit Points and has Resistance to the most recent damage type taken.`;}
}
else if (modRoll == 98) {
if (modElite == 10) {GLegendaryResist += 4;
GMod = `[Epic] (Elite) \nGains 4 uses of Legendary Resistance.`;}
else {GLegendaryResist += 2
GMod = `[Epic] \nGains 2 uses of Legendary Resistance.`;}
}
else if (modRoll == 99) {
if (modElite == 10) {GLegendaryUses =+ 2;
GMod = `[Legendary] (Elite) \nGain 2 Legendary Action per round. If it does not have any, it can be used to make a single attack, move up to full speed, or casting a known cantrip.`;}
else {GLegendaryUses =+ 1;
GMod = `[Legendary] \nGain 1 Legendary Action per round. If it does not have any, it can be used to make a single attack, move up to full speed, or casting a known cantrip.`;}
}
else if (modRoll == 100) {
if (modElite == 10) {
GMod = `[Titan] (Elite) \nThe creatures grows two size categories larger, gains 10 feet of melee reach, and adds +13 to Non-Spell damage.`;}
else {
GMod = `[Titan] \nThe creatures grows one size category larger, gains 5 feet of melee reach, and adds +7 to Non-Spell damage.`;}
}
else if (modRoll == 101) {
if (modElite == 10) {
GMod = `[Time Flux] (Elite) \nThe creature gains an extra turn. Recharges on 4-6.`;}
else {
GMod = `[Time Flux] \nThe creature gains an extra Action. Recharges on 5-6.`;}
}
else if (modRoll == 102) {
if (modElite == 10) {
GMod = `[Glass Cannon] (Elite) \nThe creature deals 50% more damage and takes 25% more damage.`;}
else {
GMod = `[Glass Cannon] \nThe creature deals 25% more damage and takes 25% more damage.`;}
}
else if (modRoll == 103) {
if (modElite == 10) {
GMod = `[Weakener] (Elite) \nAt the end of the creatures turn, it chooses up to 2 creatures. Their Resistance is reduced for the rest of combat to a damage type that the creature can deal. \n\n(Immunity > Resistance > Normal > +50% Damage > Vulnerable)`;}
else {
GMod = `[Weakener] \nDamage dealt by this creature reduces the Resistance of the target to that element for the rest of combat. \n\n(Immunity > Resistance > Normal > +50% Damage > Vulnerable)`;}
}
else if (modRoll == 104) {
if (modElite == 10) {
GMod = `[Pustules] (Elite) \nEach separate instance of damage pops a pustle. A popped pustle squirts nitroglycerin towards a creatures with +10 to hit up to 60 ft. They take ${Math.ceil(GPB / 2)}d6 acid damage and gain a stack of nitro. \n\nNitro can be ignited by bludgeoning damage of 20 or higher, fire, lightnings, or sparks.`;}
else {
GMod = `[Pustules] \nEach separate instance of damage pops a pustle. A popped pustle squirts nitroglycerin towards a creatures with +8 to hit up to 30 ft. They take ${Math.ceil(GPB / 3)}d6 acid damage and gain a stack of nitro. \n\nNitro can be ignited by bludgeoning damage of 20 or higher, fire, lightnings, or sparks.`;}
}
else if (modRoll == 105) {
if (modElite == 10) {
GMod = `[Gunsmith] (Elite) \nAs a Bonus Action, the creature morphs a limb into a firearm or a siege weapon. These weapons do not need ammo and gain two additional damage die.`;}
else {
GMod = `[Gunsmith] \nAs a Bonus Action, the creature morphs a limb into a firearm. These firearms do not need ammo and gain one additional damage die.`;}
}
else if (modRoll == 106) {
if (modElite == 10) {
GMod = `[Magnetic] (Elite) \nMetal weapons and ammunition have -8 to hit against the creature. As a Bonus Action, the creature can pull three metal item (that can be magnetically affected) with 120 ft. towards it (DC ${GTier + 14} Strength Save).`;}
else {
GMod = `[Magnetic] \nMetal weapons and ammunition have -4 to hit against the creature. As a Bonus Action, the creature can pull a metal item (that can be magnetically affected) with 60 ft. towards it (DC ${GTier + 12} Strength Save).`;}
}
else if (modRoll == 107) {
if (modElite == 10) {
GMod = `[Magnifier] (Elite) \nEvery die rolled by enemies is one tier lower and every die rolled by the creature is one tier higher. \n\n(2d12 > 1d20 > 2d8 > 1d12 > 1d10 > 1d8 > 1d6 > 1d4 > 1 > 0)`;}
else {
GMod = `[Magnifier] \nEvery die rolled by enemies is one tier lower. \n\n(2d12 > 1d20 > 2d8 > 1d12 > 1d10 > 1d8 > 1d6 > 1d4 > 1 > 0)`;}
}
else if (modRoll == 108) {
if (modElite == 10) {
GMod = `[Copycat] (Elite) \nTwice a day, as an Action or upon rolling Initiative, the creature may morph into an exact copy of one of its enemies. It takes on the Hit Points of the creature as well, and reverts back to its original form with its original HP once it hits 0 HP. Overkill damage carries over.`;}
else {
GMod = `[Copycat] \nOnce a day, as an Action or upon rolling Initiative, the creature may morph into an exact copy of one of its enemies. It takes on the Hit Points of the creature as well, and reverts back to its original form with its original HP once it hits 0 HP. Overkill damage carries over.`;}
}
else if (modRoll == 109) {
if (modElite == 10) {
GMod = `[Plunderer] (Elite) \nAt the start of the creatures turn, roll a d20. On 11-20, target a random spellcaster and steal one of their highest Spell Slots. If the creature is a spellcaster, they can use it upcast one level, or they can choose to add 4d8 on a successful attack. The stolen energy must be used before more can be stolen.`;}
else {
GMod = `[Plunderer] \nAt the start of the creatures turn, roll a d20. On 15-20, target a random spellcaster and steal one of their highest Spell Slots. If the creature is a spellcaster, they can use it, or they can choose to add 2d8 on a successful attack. The stolen energy must be used before more can be stolen.`;}
}
else if (modRoll == 110) {if (GMagic == "Martial") {EnemyGenMod();} else {
if (modElite == 10) {
GMod = `[Archmage] (Elite) \All spells are upcast two levels.`;}
else {
GMod = `[Archmage] \nAll spells are upcast one level.`;}
		}}
else if (modRoll == 111) {
if (modElite == 10) {ModX = `[Double Trouble] (Elite) \nGeneate a new modifier three times and the creatures gains all three.`;
			EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; GMod = ModX;}
else {ModX = `[Double Trouble] \nGenerate a new modifier twice and the creature gains both.`;
			EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; EnemyGenMod(); ModX = `${ModX}\n\n${GMod}`; GMod = ModX;}
}
else if (modRoll == 112) {
if (modElite == 10) {GCha += 5; if (GSpeedFly == 0) {GSpeedFly += 50} else {GSpeedFly += 20}
GMod = `[Feylost] (Elite) \nThis creature is considered as Fey. It gains +5 Charisma and wings with a 50 ft. fly speed. It has advantage on Saves against spells and magical effects.`;}
else {GCha += 3; if (GSpeedFly == 0) {GSpeedFly += 30} else {GSpeedFly += 10}
GMod = `[Feylost] \nThis creature is considered as Fey. It gains +3 Charisma and wings with a 30 ft. fly speed. It has advantage on Saves against spells and magical effects.`;}
}
else if (modRoll == 113) {
if (modElite == 10) {if (GImmune.includes("fire") == false) {GImmune.push("fire");} else {} if (GRes.includes("physical") == false) {GRes.push("physical");} else {}
GMod = `[Fiendish] (Elite) \nThis creature is considered as Fiend. The creature has Immunity to Fire and Resistance to Nonmagical Physical damage. Spells of 2nd Level or lower cannot affect the creature unless it wills them to.`;}
else {if (GRes.includes("fire") == false) {GRes.push("fire");} else {} if (GRes.includes("physical") == false) {GRes.push("physical");} else {}
GMod = `[Fiendish] \nThis creature is considered as Fiend. The creature has Resistance to Fire and Nonmagical Physical damage. Spells of 1st Level or lower cannot affect the creature unless it wills them to.`;}
}
else if (modRoll == 114) {
if (modElite == 10) {if (GImmune.includes("lightning") == false) {GImmune.push("lightning");} if (GImmune.includes("physical") == false) {GImmune.push("physical");} 
GMod = `[Slimeling] (Elite) \nThis creature is considered as Ooze. The creature is Immune to Physical and Lightning damage. A grappled creature of a size smaller than the creature can be absorbed into its body where they takes ${Math.ceil(GPB / 2) + 4}d6 acid damage at the start of their turn (escape DC ${GTier + 14}).`;}
else {if (GRes.includes("lightning") == false) {GRes.push("lightning");} else {} if (GRes.includes("physical") == false) {GRes.push("physical");} else {}
GMod = `[Slimeling] \nThis creature is considered as Ooze. The creature has Resistance to Physical and Lightning damage. A grappled creature of a size smaller than the creature can be absorbed into its body where they takes ${Math.ceil(GPB / 3) + 2}d6 acid damage at the start of their turn (escape DC ${GTier + 12}).`;}
}
else if (modRoll == 115) {
if (modElite == 10) {GStr += 5; if (GBlindsight == 0) {GBlindsight += 60} else {GBlindsight += 30}
GMod = `[Dragonkin] (Elite) \nThis creature is considered as Dragon. It gains +5 Strength and 60ft. of Blindsight. The creature gains 5 uses of a Dragonborn Breath weapon of DC ${GTier + 14} for ${Math.ceil(GPB / 3) + 2}d10 damage and Resistance to the matching element.`;}
else {GStr += 3; if (GBlindsight == 0) {GBlindsight += 30} else {GBlindsight += 10}
GMod = `[Dragonkin] \nThis creature is considered as Dragon. It gains +3 Strength and 30ft. of Blindsight. The creature gains 3 uses of a Dragonborn Breath weapon of DC ${GTier + 12} for ${Math.ceil(GPB / 4) + 1}d10 damage and Resistance to the matching element.`;}
}
else if (modRoll == 116) {
if (modElite == 10) {GCon += 5; if (GCondImmune.includes("charm") == false) {GCondImmune.push("charm")} else {} if (GCondImmune.includes("sleep") == false) {GCondImmune.push("sleep")} else {}
			if (GCondImmune.includes("disease") == false) {GCondImmune.push("disease")} else {} if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {} if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {}
			 if (GImmune.includes("physical") == false) {GImmune.push("physical")} else {}
GMod = `[Construct] (Elite) \nThis creature is considered as Construct. It gains +5 Consitution and its form cannot be changed. The creature is Immune to Sleep, Charm, Poison, Disease, Poisoned, and non-adamantite Physical damage. \nOn death, the creatures core overloads and it explodes for ${Math.ceil(GPB / 2) + 2}d8 fire within 30 ft.`;}
else {GCon += 5; if (GCondImmune.includes("charm") == false) {GCondImmune.push("charm")} else {} if (GCondImmune.includes("sleep") == false) {GCondImmune.push("sleep")} else {}
			if (GCondImmune.includes("disease") == false) {GCondImmune.push("disease")} else {} if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {} if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {}
			 if (GRes.includes("physical") == false) {GRes.push("physical")} else {}
GMod = `[Construct] \nThis creature is considered as Construct. It gains +3 Consitution and its form cannot be changed. The creature is Immune to Sleep, Charm, Poison, Disease, Poisoned, and Resists non-adamantite Physical damage.`;}
}
else if (modRoll == 117) {
if (modElite == 10) {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic");} else {} if (GCondImmune.includes("fear") == false) {GCondImmune.push("fear");} else {}
GMod = `[Angelborn] (Elite) \nThis creature is considered as Celestial. All Physical damage dealt is Radiant instead and is increased by ${Math.floor(GPB / 3)}d6. The creature knows if it hears a lie. It is Immune to Fear and Necrotic.`;}
else {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic");} else {} if (GCondImmune.includes("fear") == false) {GCondImmune.push("fear");} else {}
GMod = `[Angelborn] \nThis creature is considered as Celestial and its normal type. All Physical damage dealt is Radiant instead and the creature knows if it hears a lie. It is Immune to Fear and Resists Necrotic.`;}
}
else if (modRoll == 118) {
if (modElite == 10) {GStr += 8; GInt += 8;
GMod = `[Determinist] (Elite) \nThe creature gains +8 Strength and Intelligence.`;}
else {GStr += 5; GInt += 5;
GMod = `[Determinist] \nThe creature gains +5 Strength and Intelligence.`;}
}
else if (modRoll == 119) {
if (modElite == 10) {GStr += 8; GWis += 8;
GMod = `[Veteran] (Elite) \nThe creature gains +8 Strength and Wisdom.`;}
else {GStr += 5; GWis += 5;
GMod = `[Veteran] \nThe creature gains +5 Strength and Wisdom.`;}
}
else if (modRoll == 120) {
if (modElite == 10) {GStr += 8; GCha += 8;
GMod = `[Gladiator] (Elite) \nThe creature gains +8 Strength and Charisma.`;}
else {GStr += 5; GCha += 5;
GMod = `[Gladiator] \nThe creature gains +5 Strength and Charisma.`;}
}
else if (modRoll == 121) {
if (modElite == 10) {GDex += 8; GInt += 8;
GMod = `[Opportunist] (Elite) \nThe creature gains +5 Dexterity and Intelligence.`;}
else {GDex += 5; GInt += 5;
GMod = `[Opportunist] \nThe creature gains +5 Dexterity and Intelligence.`;}
}
else if (modRoll == 122) {
if (modElite == 10) {GDex += 8; GWis += 8;
GMod = `[Pursuer] (Elite) \nThe creature gains +8 Dexterity and Wisdom.`;}
else {GDex += 5; GWis += 5;
GMod = `[Pursuer] \nThe creature gains +5 Dexterity and Wisdom.`;}
}
else if (modRoll == 123) {
if (modElite == 10) {GDex += 8; GCha += 8;
GMod = `[Robin Hood] (Elite) \nThe creature gains +8 Dexterity and Charisma.`;}
else {GDex += 5; GCha += 5;
GMod = `[Robin Hood] \nThe creature gains +5 Dexterity and Charisma.`;}
}
else if (modRoll == 124) {
if (modElite == 10) {GCon += 8; GCha += 8;
GMod = `[Royalty] (Elite) \nThe creature gains +8 Constitution and Charisma.`;}
else {GCon += 5; GCha += 5;
GMod = `[Royalty] \nThe creature gains +5 Contsitution and Charisma.`;}
}
else if (modRoll == 125) {
if (modElite == 10) {GCon += 8; GInt += 8;
GMod = `[Queenly] (Elite) \nThe creature gains +8 Constitution and Intelligence.`;}
else {GCon += 5; GInt += 5;
GMod = `[Queenly] \nThe creature gains +5 Constitution and Intelligence.`;}
}
else if (modRoll == 126) {
if (modElite == 10) {GCon += 8; GWis += 8;
GMod = `[Kingly] (Elite) \nThe creature gains +8 Constitution and Wisdom.`;}
else {GCon += 5; GWis += 5;
GMod = `[Kingly] \nThe creature gains +5 Constitution and Wisdom.`;}
}
else if (modRoll == 127) {
if (modElite == 10) {
GMod = `[Gambler] (Elite) \nWhen rolling Initiative, the creature draws two random Deck of Many Things cards. \n\n(Optionally: Roll a d20. Even is Many Things, Odds is Many Fates) \n\n(Recommended: Reroll for card draws that would end or prevent the combat from happening. Also, DM fiat: reroll really bad cards, as this mod system is supposed to add challenge)`;}
else {
GMod = `[Gambler] \nWhen rolling Initiative, the creature draws a random Deck of Many Things card. \n\n(Optionally: Roll a d20. Even is Many Things, Odds is Many Fates) \n\n(Recommended: Reroll for card draws that would end or prevent the combat from happening. Also, DM fiat: reroll really bad cards, as this mod system is supposed to add challenge)`;}
}
else if (modRoll == 128) {
if (modElite == 10) {
GMod = `[Nightmare] (Elite) \nAt the start of combat, the creature designates (or randomly picks) a creature. They are pulled into a 50x50 ft pocket dimension. They must fight a creature of CR equal to 1/2 of their level. The only escape is the death of one of the fighters, in which the creature vanishes and the character, or their body, is returned where they were.`;}
else {
GMod = `[Nightmare] \nAt the start of combat, the creature designates (or randomly picks) a creature. They are pulled into a 100x100 ft pocket dimension. They must fight a creature of CR equal to 1/3 of their level. The only escape is the death of one of the fighters, in which the creature vanishes and the character, or their body, is returned where they were.`;}
}
else if (modRoll == 129) {
if (modElite == 10) {
GMod = `[Gourmet] (Elite) \nAs a Bonus Action, the creature can ingest a coin-sized material to gain a bonus for 1 minute (10 rounds). Up to four different bonuses can be active at once. \n\n(Other materials are up to the DM.) \n[Wood] Gain 4 AC. \n[Stone] Physical Resistance \n[Basic Metals] +4 Damage. \n[Cloth] Incoming Attacks have Disadv. \n[Precious Metals] Advantage on Attacks.`;}
else {
GMod = `[Gourmet] \nAs a Bonus Action, the creature can ingest a coin-sized material to gain a bonus for 1 minute (10 rounds). Up to two different bonuses can be active at once. The second active reduces both durations by 4 rounds. \n\n(Other materials are up to the DM.) \n[Wood] Gain 2 AC. \n[Stone] Physical Resist, -5 Speed. \n[Basic Metals] +2 Damage. \n[Cloth] Incoming Attacks have Disadv. \n[Precious Metals] -2 AC and Advantage on Attacks.`;}
}
else if (modRoll == 130) {
if (modElite == 10) {
GMod = `[] (Elite) \n`;}
else {
GMod = `[] \n`;}
}
}
	function EnemyModBtn() {
		EnemyGenMod();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n${GMod}`;
	}

function GetTier() {GCR = Number(document.getElementById("numCR").value);
	if (GCR >= 1 && GCR <= 4) {GTier = 1; GPB = 2;}
	else if (GCR >= 5 && GCR <= 8) {GTier = 2; GPB = 3;}
	else if (GCR >= 9 && GCR <= 12) {GTier = 3; GPB = 4;}
	else if (GCR >= 13 && GCR <= 16) {GTier = 4; GPB = 5;}
	else if (GCR >= 17 && GCR <= 20) {GTier = 5; GPB = 6;}
	else if (GCR >= 21 && GCR <= 24) {GTier = 6; GPB = 7;}
	else if (GCR >= 25 && GCR <= 28) {GTier = 7; GPB = 8;}
	else if (GCR >= 29 && GCR <= 32) {GTier = 8; GPB = 9;}
	else if (GCR >= 33 && GCR <= 36) {GTier = 9; GPB = 10;}
	else if (GCR >= 37 && GCR <= 40) {GTier = 10; GPB = 11;}
	else if (GCR >= 41 && GCR <= 44) {GTier = 11; GPB = 12;}
	else if (GCR >= 45 && GCR <= 48) {GTier = 12; GPB = 13;}
	else if (GCR >= 49 && GCR <= 50) {GTier = 13; GPB = 14;}
	else {GTier = 1; GPB = 2;}
}

function EnemyTrait() {
	let reachX = 5;
	let RNG = Math.floor(Math.random() * 3) + 1; 
	if (GSize == "Large" && RNG == 3) {reachX += 5} else if (GSize == "Huge") {reachX += 5} else if (GSize == "Gargantuan" && RNG == 3) {reachX += 15} else if (GSize == "Gargantuan" && RNG < 3) {reachX += 10} else {}
		RNG = Math.floor(Math.random() * 162) + 1;
		if (RNG == 1) {GTraitNames.push(`Keen Sight`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks that rely on sight.`);}
		else if (RNG == 2) {GTraitNames.push(`Keen Smell`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks that rely on smell.`);}
		else if (RNG == 3) {GTraitNames.push(`Keen Hearing`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks that rely on hearing.`);}
		else if (RNG == 4) {GTraitNames.push(`Keen Sight and Smell`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks that rely on sight or smell.`);}
		else if (RNG == 5) {GTraitNames.push(`Keen Sight and Hearing`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks that rely on sight or hearing.`);}
		else if (RNG == 6) {GTraitNames.push(`Keen Hearing and Smell`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks that rely on hearing or smell.`);}
		else if (RNG == 7) {GTraitNames.push(`Keen Senses`); GTraits.push(`The creature has advantage on Wisdom (Perception) checks.`);}
		else if (RNG == 8) {GTraitNames.push(`Radiant Eyes`); GTraits.push(`While its eyes are open, the creature projects bright light in a 60-foot cone and light for an additional 60 feet. It sets the orientation of this cone at the end of each of its turns. All creatures that can see the creature have disadvantage on attack rolls while in the area of bright light and within 15 feet of the creature. Creatures with the Sunlight Sensitivity trait that can see the creature have disadvantage on attack rolls anywhere in the area of bright light.`);}
		else if (RNG == 9) {GTraitNames.push(`Limited Amphibiousness`); GTraits.push(`The creature can breathe air and water, but it needs to be submerged once every 24 hours to avoid suffocating.`);}
		else if (RNG == 10) {GTraitNames.push(`Dire Cacophony`); GTraits.push(`Any creature that starts its turn within 60 feet of the creature and can hear it must make a DC ${GTier + 12} Wisdom saving throw. On a failed save, the creature is unable to use the Dash action, cannot climb, or cast spells other than cantrips until the start of its next turn.`);}
		else if (RNG == 11) {GTraitNames.push(`Magic Resistance`); GTraits.push(`The creature has advantage on saving throws against spells and other magical effects.`);}
		else if (RNG == 12) {GTraitNames.push(`Lurker in the Shadow`); GTraits.push(`The creature is invisible to darkvision.`);}
		else if (RNG == 13) {GTraitNames.push(`Vermin Friend`); GTraits.push(`The creature can speak to and understand rats and giant rats.`);}
		else if (RNG == 14) {GTraitNames.push(`Swarming Rush`); GTraits.push(`The creature adds ${Math.ceil(GPB / 3) + 1}d4 to its weapon damage rolls while within 5 feet of another, conscious ally.`);}
		else if (RNG == 15) {GTraitNames.push(`Iron Scent`); GTraits.push(`The creature can scent the location of ferrous metal within 30 feet of it.`);}
		else if (RNG == 16) {GTraitNames.push(`Blessing of Bountiful Generosity (1/day)`); GTraits.push(`The creature targets up to eight creatures within 100 feet of it that it can see. The next time a target finishes a long rest, it regains all spent Hit Dice and gains ${Math.floor(GPB + 6)} temporary hit points.`);}
		else if (RNG == 17) {GTraitNames.push(`Curse of Poor Hospitality (1/day)`); GTraits.push(`The creature targets up to eight creatures within 100 feet of it that it can see. The next time a target completes a long rest, it does not regain spent Hit Dice.`);}
		else if (RNG == 18) {GTraitNames.push(`Vexing Presence`); GTraits.push(`While within 30 feet of an ally that can see it, a non-fey creature has disadvantage on Dexterity checks and Dexterity saving throws.`);}
		else if (RNG == 19) {GTraitNames.push(`Needle Defense`); GTraits.push(`Each time a creature makes a melee attack against the creature, it takes ${Math.ceil((GCR + 8) / 2)} piercing damage. A creature can choose to make an attack with disadvantage to avoid this damage.`);}
		else if (RNG == 20) {GTraitNames.push(`Close Quarters Shooting`); GTraits.push(`The creature does not suffer disadvantage on ranged attacks while within 5 feet of a hostile creature that can see it and isn’t incapacitated, if the target of the attack is also within 5 feet of the creature.`);}
		else if (RNG == 21) {GTraitNames.push(`Fight On, You Slugs`); GTraits.push(`The creature picks up to three allied creatures within 60 feet that can see it. The chosen creatures can each use their reactions to make a single melee attack.`);}
		else if (RNG == 22) {GTraitNames.push(`Ceaseless Screaming`); GTraits.push(`Any creature other than allies that starts their turn within 30 feet of one or more screaming creatures and can hear it must make a DC ${GTier + 10} Wisdom saving throw. On a failure the creature is incapacitated until the start of its next turn. On a success, the creature suffers no effect.`);}
		else if (RNG == 23) {GTraitNames.push(`Poison Stinger`); GTraits.push(`The creature injects poison into one creature it hit with an attack this turn. The chosen creature must make a DC ${GTier + 12} Constitution saving throw, with disadvantage if the creature hit it more than once this turn, taking ${Math.ceil(GPB / 4) + 1}d6 poison damage on a failed save, or half as much on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned this way.`);}
		else if (RNG == 24) {GTraitNames.push(`Entropic Aura`); GTraits.push(`Each creature that is not a construct or undead that ends its turn within 15 feet of the creature takes ${Math.ceil(GPB / 2) + 1}d4 necrotic damage.`);}
		else if (RNG == 25) {GTraitNames.push(`Sunlight Sensitivity`); GTraits.push(`While in sunlight, the creature has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.`);}
		else if (RNG == 26) {GTraitNames.push(`Customizable Storage`); GTraits.push(`The creature can hold up to three types of liquid payload totaling 12 gallons within its body. A full creature can make one liquid attack per gallon before the liquid must be refilled. Refilling takes 2 rounds per gallon. Differing payloads can alter their attacks.`);}
		else if (RNG == 27) {GTraitNames.push(`Defensive Advantage`); GTraits.push(`As long as two or more of the creature’s allies are within 5 feet of the creature and are not incapacitated, attack rolls against the creature are made with disadvantage.`);}
		else if (RNG == 28) {GTraitNames.push(`Fey Ancestry`); GTraits.push(`The creature has advantage on saving throws against being charmed or frightened.`);}
		else if (RNG == 29) {GTraitNames.push(`Eye Thief`); GTraits.push(`The creature can see through the eyes of all creatures within 30 feet of it. All creatures within the sight of any creature within the 60 ft. count as in line of sight.`);}
		else if (RNG == 30) {GTraitNames.push(`Strong Regeneration`); GTraits.push(`The creature regains ${Math.ceil(GCR / 2) + 10} hit points at the start of its turn. If it takes a critical hit, this trait doesn’t function at the start of its next turn. The creature dies only if it starts its turn with 0 hit points and doesn’t regenerate.`);}
		else if (RNG == 31) {GTraitNames.push(`Regeneration`); GTraits.push(`The creature regains ${Math.ceil(GCR / 2) + 10} hit points at the start of its turn. If it takes fire damage or a critical hit, this trait doesn’t function at the start of its next turn.`);}
		else if (RNG == 32) {GTraitNames.push(`Pack Tactics`); GTraits.push(`The creature has advantage on an attack roll against a target if at least one of the creature's allies is within 5 feet of the creature and the ally isn't incapacitated.`);}
		else if (RNG == 33) {GTraitNames.push(`Pounce`); GTraits.push(`If the creature moves at least 15 feet straight toward a target and then hits it with a melee attack on the same turn, that target must succeed on a DC ${GTier + 12} Strength saving throw or be knocked prone.`);}
		else if (RNG == 34) {GTraitNames.push(`Better Pounce`); GTraits.push(`If the creature moves at least 15 feet straight toward a target and then hits it with a melee attack on the same turn, that target must succeed on a DC ${GTier + 12} Strength saving throw or be knocked prone. If the target falls or is already prone, the creature can make one natural/unarmed attack against it as a bonus action.`);}
		else if (RNG == 35) {GTraitNames.push(`Change Humanoid Appearance`); GTraits.push(`The creature can use its action to polymorph into a Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. It reverts to its true form if it dies.`);}
		else if (RNG == 36) {GTraitNames.push(`Brave`); GTraits.push(`The creature has advantage on saving throws against being frightened.`);}
		else if (RNG == 37) {GTraitNames.push(`Sneak Attack`); GTraits.push(`The creature deals an extra ${GPB}d6 damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the creature that isn't incapacitated and the creature doesn't have disadvantage on the attack roll.`);}
		else if (RNG == 38) {GTraitNames.push(`Evasion`); GTraits.push(`If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can’t use this trait if it’s incapacitated.`);}
		else if (RNG == 39) {GTraitNames.push(`Dual-Consciousness`); GTraits.push(`The creature has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.`);}
		else if (RNG == 40) {GTraitNames.push(`Telepathic Bond`); GTraits.push(`While the creature is on the same plane of existence as its master/servant, it can magically convey what it senses to them, and the two can communicate telepathically.`);}
		else if (RNG == 41) {GTraitNames.push(`Aware`); GTraits.push(`The creature cannot be surprised.`);}
		else if (RNG == 42) {GTraitNames.push(`Incorporeal Movement`); GTraits.push(`The creature can move through other creatures and objects as if they were difficult terrain. It takes 1d10 force damage if it ends its turn inside an object.`);}
		else if (RNG == 43) {GTraitNames.push(`Dual Mind`); GTraits.push(`The creature has advantage on Wisdom saving throws.`);}
		else if (RNG == 44) {GTraitNames.push(`Ambusher`); GTraits.push(`In the first round of a combat, the creature has advantage on attack rolls against any creature it surprised.`);}
		else if (RNG == 45) {GTraitNames.push(`Mimicry`); GTraits.push(`The creature can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC ${GTier + 12} Wisdom (Insight) check.`);}
		else if (RNG == 46) {GTraitNames.push(`Amorphous`); GTraits.push(`The creature can move through a space as narrow as 1 inch wide without squeezing.`);}
		else if (RNG == 47) {GTraitNames.push(`Aura of False Divinity`); GTraits.push(`An enemy that starts its turn within 30 feet of the creature must make a DC ${GTier + 12} Wisdom saving throw, provided the creature isn’t incapacitated. On a failed save, the enemy is charmed by the creature. An enemy charmed in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the enemy is immune to this creature’s Aura of False Divinity for 24 hours.`);}
		else if (RNG == 48) {GTraitNames.push(`Limited Magic Immunity`); GTraits.push(`The creature can’t be affected or detected by spells of 2nd level or lower unless it wishes to be. The creature has advantage on saving throws against all other spells and magical effects.`);}
		else if (RNG == 49) {GTraitNames.push(`Deadly Critical`); GTraits.push(`The creature scores a critical hit on a roll of 19 or 20 and rolls the damage dice three times, instead of twice.`);}
		else if (RNG == 50) {GTraitNames.push(`Precision Blows`); GTraits.push(`The creature scores a critical hit on a roll of 19 or 20.`);}
		else if (RNG == 51) {GTraitNames.push(`Powerful Critical`); GTraits.push(`On a critical hit the creature rolls the damage dice three times, instead of twice.`);}
		else if (RNG == 52) {GTraitNames.push(`Whirlwind of Weapons`); GTraits.push(`A magical aura of weapons surrounds the creature in a 5 foot radius. At the start of each of its turns, any other creature in the aura takes ${Math.ceil(GPB / 2) + 2}d6 force damage.`);}
		else if (RNG == 53) {
			if (GMagic == "Martial") {EnemyTrait();} else {GTraitNames.push(`Master of Magic`); GTraits.push(`The creature has advantage on Constitution saving throws to maintain concentration.`);}}
		else if (RNG == 54) {GTraitNames.push(`Adamantine Plating`); GTraits.push(`Any critical hit against the creature becomes a normal hit.`);}
		else if (RNG == 55) {GTraitNames.push(`Bladed Armor`); GTraits.push(`An enemy that grapples the creature or is grappled by it takes ${Math.ceil(GPB / 2) + 2}d8 slashing damage. An enemy takes ${Math.ceil(GPB / 2) + 2}d8 slashing damage if it starts its turn grappling or being grappled by the creature.`);}
		else if (RNG == 56) {GTraitNames.push(`Charge`); GTraits.push(`If the creature moves at least 10 feet straight toward a target and then hits it with a melee attack on the same turn, the target takes an extra ${Math.ceil(GPB / 2) + 1}d6 damage. If the target is a creature, it must succeed on a DC ${GTier + 12} Strength saving throw or be pushed up to 10 feet away and knocked prone.`);}
		else if (RNG == 57) {GTraitNames.push(`Aura of Radiance`); GTraits.push(`The creature magically sheds bright light in a 15-foot radius and light for an additional 15 feet. The creature can extinguish or restore this light as a bonus action. If the bright light overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created that darkness is dispelled.`);}
		else if (RNG == 58) {GTraitNames.push(`Siege Monster`); GTraits.push(`The creature deals double damage to objects and structures.`);}
		else if (RNG == 59) {GTraitNames.push(`Magic Weapons`); GTraits.push(`The creature’s attacks are magical.`);}
		else if (RNG == 60) {GTraitNames.push(`Crackling Death`); GTraits.push(`When the creature dies, it explodes. Each creature within 30 feet of it must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GCR / 3) + 1}d8 lightning damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 61) {GTraitNames.push(`Bolstering Presence`); GTraits.push(`The creature magically emanates life-giving energy within ${(Math.ceil(GPB / 2) * 5) + 5} feet of itself. Any ally of the creature that starts its turn there regains ${Math.ceil(GPB / 3)}d8 hit points.`);}
		else if (RNG == 62) {GTraitNames.push(`Devil's Sight`); GTraits.push(`Magical darkness doesn’t impede the creature’s darkvision.`); GDarkvision += 60;}
		else if (RNG == 63) {GTraitNames.push(`Last Laugh`); GTraits.push(`When the creature dies, it releases a dying laugh that scars the minds of other nearby creatures. Each enemy within 10 feet of the creature must succeed on a DC ${GTier + 12} Wisdom saving throw or take ${Math.ceil(GPB / 3) + 1}d8 psychic damage.`);}
		else if (RNG == 64) {GTraitNames.push(`Amphibious`); GTraits.push(`The creature can breathe air and water.`);}
		else if (RNG == 65) {GTraitNames.push(`Speak with Beasts`); GTraits.push(`The creature can communicate with beasts as if they shared a language.`);}
		else if (RNG == 66) {GTraitNames.push(`Speak with Plants`); GTraits.push(`The creature can communicate with plants as if they shared a language.`);}
		else if (RNG == 67) {GTraitNames.push(`Speak with Beasts and Plants`); GTraits.push(`The creature can communicate with beasts and plants as if they shared a language.`);}
		else if (RNG == 68) {if (GMagic == "Martial") {EnemyTrait();} else {GTraitNames.push(`Empowered Spell (3/day)`); GTraits.push(`When the creature rolls damage for a spell, it can reroll up to two dice of damage. It must use the new rolls.`);}}
		else if (RNG == 69) {GTraitNames.push(`Relentless (Recharge 6)`); GTraits.push(`If the creature takes damage that would reduce it to 0 hit points, it is reduced to 1 hit point instead.`);}
		else if (RNG == 70) {GTraitNames.push(`Assassinate`); GTraits.push(`During its first turn, the creature has advantage on attack rolls against any creature that hasn’t taken a turn. Any hit the creature scores against a surprised creature is a critical hit.`);}
		else if (RNG == 71) {GTraitNames.push(`Poisonous Skin`); GTraits.push(`Any enemy that touches the creature or hits it with a melee attack while within 5 feet of it takes ${Math.ceil(GPB / 3)}d6 poison damage.`);}
		else if (RNG == 72) {GTraitNames.push(`Spider Climb`); GTraits.push(`The creature can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.`);}
		else if (RNG == 73) {GTraitNames.push(`Inscrutable`); GTraits.push(`The creature is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Insight checks made to ascertain its intentions or sincerity have disadvantage.`);}
		else if (RNG == 74) {GTraitNames.push(`Elusive`); GTraits.push(`No attack roll has advantage against the creature unless it is incapacitated.`);}
		else if (RNG == 75) {GTraitNames.push(`Psychic Defense`); GTraits.push(`Unless the creature is incapacitated, it is immune to magic that allows other creatures to read its thoughts, determine whether it is lying, know its alignment, or know its creature type. Creatures can telepathically communicate with the creature only if it allows it.`);}
		else if (RNG == 76) {GTraitNames.push(`Aura of Bloodlust`); GTraits.push(`When any other creature starts its turn within 30 feet of the creature, that enemy must succeed on a DC ${GTier + 12} Wisdom saving throw, or it must immediately take the Attack action, making one melee attack against a random creature within reach. If no creatures are within reach, it makes a ranged attack against a random creature within range, throwing its weapon if necessary.`);}
		else if (RNG == 77) {GTraitNames.push(`Feed on the Crowd`); GTraits.push(`Whenever a creature within 60 feet of the creature dies, the creature gains ${GPB * 3} temporary hit points and has advantage on all attack rolls, ability checks, and saving throws until the end of its next turn.`);}
		else if (RNG == 78) {if (GMagic == "Martial") {EnemyTrait();} else {GTraitNames.push(`Locus of the Firemind`); GTraits.push(`The creature can maintain concentration on two different spells at the same time. In addition, it has advantage on saving throws to maintain concentration on spells.`);}}
		else if (RNG == 79) {GTraitNames.push(`Focus`); GTraits.push(`As a bonus action, the creature can target an enemy it can see within 30 feet of it and make that enemy its focus. The target remains the creature’s focus for 1 minute, or until either the target or the creature drops to 0 hit points. When the creature makes an attack roll against its focus, it adds a d4 to its attack roll. If the creature attacks a different target while it has a focus, it subtracts a d4 from its attack roll.`);}
		else if (RNG == 80) {GTraitNames.push(`Shadow Strike`); GTraits.push(`As a bonus action, the creature can step into a shadow within 5 feet of it and magically appear in an unoccupied space within 5 feet of a second shadow that is up to 60 feet away. Both shadows must be cast by a Small or larger creature or object.`);}
		else if (RNG == 81) {GTraitNames.push(`Formation Tactics`); GTraits.push(`The creature has advantage on saving throws against being charmed, frightened, grappled, or restrained while it is within 5 feet of at least one ally.`);}
		else if (RNG == 82) {GTraitNames.push(`Reckless`); GTraits.push(`At the start of its turn, the creature can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.`);}
		else if (RNG == 83) {if (GMagic == "Martial") {EnemyTrait();} else {GTraitNames.push(`One With the Weave`); GTraits.push(`The creature has such a powerful connection to the weave that, if it did not use its action to cast a spell, it can use its bonus action to cast a Cantrip or the weakest tier of spell avaiable.`);}}
		else if (RNG == 84) {GTraitNames.push(`Sheer Willpower`); GTraits.push(`The first time the creature drops to 0 HP in a combat, it is not downed and instead continues to fight for another turn. Taking a critical hit ends this effect early.`);}
		else if (RNG == 85) {GTraitNames.push(`Controlled Rage`); GTraits.push(`When the creature takes ${GPB * 2} damage from a single creature in a turn, they gain 15 ft. of movement speed on their next turn and +${GPB * 2} damage to their next attack.`);}
		else if (RNG == 86) {GTraitNames.push(`Group Distraction`); GTraits.push(`If an ally is within range of a target, the creature can Disengage as a Bonus Action.`);}
		else if (RNG == 87) {GTraitNames.push(`Blood Frenzy`); GTraits.push(`The creature has advantage on melee attack rolls against any creature that doesn't have all its hit points.`);}
		else if (RNG == 88) {GTraitNames.push(`Master Grappler`); GTraits.push(`The creature has advantage on grapple checks and can move at full speed while dragging a creature. Enemies grappled by the creature are considered restrained.`);}
		else if (RNG == 89) {GTraitNames.push(`Lightning Rod`); GTraits.push(`Every successful hit has a 10% chance to cause the target to make a DC ${GTier + 13} Consitution saving throw or be paralyzed.`);}
		else if (RNG == 90) {GTraitNames.push(`Projectile Shielding`); GTraits.push(`The creature takes half damage from all projectiles.`);}
		else if (RNG == 91) {GTraitNames.push(`Great Consitution`); GTraits.push(`The creature has advantage on checks to be stunned, charmed, restrained, or exhausted.`);}
		else if (RNG == 92) {GTraitNames.push(`Icy Slime`); GTraits.push(`The creature’s body is covered in a layer of greasy, ice-cold slime that grants it the benefits of freedom of movement. In addition, an enemy that touches the creature or hits it with a melee attack while within 5 feet of it takes ${Math.ceil(GPB / 3) + 1}d6 cold damage from the freezing slime. An enemy grappled by the creature takes this damage at the start of each of its turns.`);}
		else if (RNG == 93) {GTraitNames.push(`Strangle`); GTraits.push(`The creature has +${GPB + 1} to grapple checks. The creature strangles one enemy grappled by it. The target must make a DC ${GTier + 12} Strength saving throw. On a failure, the target takes ${Math.ceil(GPB / 2) + 3}d8 bludgeoning damage, can’t breathe, speak, or cast spells, and begins suffocating. On a success, the target takes half the bludgeoning damage and is no longer grappled. Until this strangling grapple ends (escape DC ${GTier + 12}), the target takes ${Math.ceil(GPB / 3) + 1}d8 bludgeoning damage at the start of each of its turns. The creature can strangle up to one creature the same size as it or two smaller than it.`);}
		else if (RNG == 94) {GTraitNames.push(`Distance Distortion Aura`); GTraits.push(`The presence of the creature distorts the vision of creatures within 60 feet of it. Each creature that starts its turn in that area must succeed on a DC ${GTier + 12} Wisdom saving throw or be unable to correctly judge the distance between itself and its surroundings until the start of its next turn. An affected creature has disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight, and it can’t move more than half its speed on its turn. On a successful saving throw, the creature is immune to the Aura for the next 24 hours. Creatures with blindsight, tremorsense, or truesight are unaffected by this trait.`);}
		else if (RNG == 95) {GTraitNames.push(`Mucuous Cloud`); GTraits.push(`While underwater, the creature is surrounded by transformative mucus. A creature that touches the creature or that hits it with a melee attack while within 5 ft. of it must make a DC ${GTier + 12} Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.`);}
		else if (RNG == 96) {GTraitNames.push(`Probing Telepathy`); GTraits.push(`If an enemy communicates telepathically with the creature, the creature learns the enemy's greatest desires if the creature can see the creature.`); if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 120;} else {}}
		else if (RNG == 97) {GTraitNames.push(`Dual State`); GTraits.push(`A creature exists upon the Material Plane in one of two forms and can switch between them at will. In its material form, it has resistance to damage from nonmagical attacks. In its ethereal form, it is immune to damage from nonmagical attacks. The creature's ethereal form appears as a dark purple outline of its material form, with a blackish-purple haze within. A creature in ethereal form can move through air as though it were water, with a fly speed of 40 feet.`);}
		else if (RNG == 98) {GTraitNames.push(`Camouflage`); GTraits.push(`The creature has advantage on Dexterity (Stealth) checks made to hide.`);}
		else if (RNG == 99) {GTraitNames.push(`Cursed Existence`); GTraits.push(`When it drops to 0 hit points in its home terrain, the creature's body disintegrates into sand and a sudden parched breeze. However, unless it was killed in a hallowed location, with radiant damage, or by a blessed creature, the creature reforms at the next sundown 2d20 miles away in a random direction.`);}
		else if (RNG == 100) {GTraitNames.push(`Darkness Aura`); GTraits.push(`The creature can generate an aura of darkness that fills its space and the surrounding 20 feet. This darkness prevents normal vision and darkvision from functioning. Blindsight and truesight function normally. Activating or deactivating the aura is a bonus action.`);}
		else if (RNG == 101) {
			if (GSpeedBurrow > 0) {GSpeedBurrow += 30} else {}
			GTraitNames.push(`Earth Glide`); GTraits.push(`The creature glides through stone, dirt, or any sort of earth except metal as easily as a fish glides through water. Its burrowing produces no ripple or other sign of its presence and leaves no tunnel or hole unless the creature chooses to do so; in that case, it creates a passageway ${reachX * 2} feet wide by ${reachX * 2} feet high. The spell move earth cast on an area containing an earth-gliding cave creature flings the creature back 30 feet and stuns the creature for one round unless it succeeds on a Constitution saving throw.`);}
		else if (RNG == 102) {GTraitNames.push(`Element Incarnate`); GTraits.push(`All non-physical damage dealt by the creature ignores resistance but not immunity.`);}
		else if (RNG == 103) {GTraitNames.push(`Ethereal Sight`); GTraits.push(`The creature can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa.`);}
		else if (RNG == 104) {GTraitNames.push(`Ice Walk`); GTraits.push(`The creature can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement.`);}
		else if (RNG == 105) {GTraitNames.push(`Uncontrollable`); GTraits.push(`The creature's movement is never impeded by difficult terrain, and its speed can't be reduced by spells or magical effects. It can't be restrained (per the condition), and it escapes automatically from any nonmagical restraints (such as chains, entanglement, or grappling) by spending 5 feet of movement. Being underwater imposes no penalty on its movement or attacks.`);}
		else if (RNG == 106) {GTraitNames.push(`Unfixed in Time`); GTraits.push(`To those properly fixed in time, the creature flickers in and out of time, its position never fully clear. Attack rolls against the creature have disadvantage. If it is hit by an attack, this trait ceases to function until the start of its next turn.`);}
		else if (RNG == 107) {GTraitNames.push(`Absorb Potion`); GTraits.push(`The creature can absorb any potion, oil, tincture, or alchemical draught that touches it, choosing to be affected by the substance or to nullify it.`);}
		else if (RNG == 108) {GTraitNames.push(`Elemental Expulsion`); GTraits.push(`Whenever the creature takes acid, cold, fire, or lightning damage, all creatures within 20 feet of the creature must make a DC ${GTier + 12} Dexterity saving throw, taking damage equal to the damage the creature took on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 109) {timeX = Math.floor(Math.random() * 8) + 1; GTraitNames.push(`Hold Breath`); GTraits.push(`The creature can hold its breath for ${timeX} hours.`);}
		else if (RNG == 110) {GTraitNames.push(`Defensive Frenzy`); GTraits.push(`When it has half its hit points or fewer, the creature can make one unarmed attack as a bonus action.`);}
		else if (RNG == 111) {GTraitNames.push(`Pack Leader`); GTraits.push(`The creature has advantage on an attack roll against an enemy if at least one of the creature‘s allies is within 5 feet of the enemy and the ally isn’t incapacitated. Likewise, each of the creature‘s allies has advantage on an attack roll against an enemy if the creature is within 5 feet of the enemy and isn’t incapacitated.`);}
		else if (RNG == 112) {GTraitNames.push(`Master Manipulator`); GTraits.push(`The creature prefers to control from the shadows and manipulates whomsoever it pleases. It has advantage on any Charisma skill checks or saving throws, even if it would otherwise have disadvantage. It also adds +${Math.ceil(GPB / 2)} to any Deception or Persuasion rolls.`);}
		else if (RNG == 113) {GTraitNames.push(`Born of Darkness`); GTraits.push(`The creature can take the Hide action as a bonus action on each turn while it is in light or darkness, even if it is being observed.`);}
		else if (RNG == 114) {GTraitNames.push(`Woodfriend`); GTraits.push(`When in a forest, the creature leave no tracks and automatically discerns true north.`);}
		else if (RNG == 115) {GTraitNames.push(`Aversion to Water`); GTraits.push(`If the creature takes cold damage or is doused with at least three gallons of water, it has disadvantage on attack rolls and ability checks until the end of its next turn.`);}
		else if (RNG == 116) {GTraitNames.push(`Fire Absorption`); GTraits.push(`Whenever the creature is subjected to fire damage, it takes no damage and instead regains a number of Hit Points equal to the fire damage taken.`);}
		else if (RNG == 117) {GTraitNames.push(`Arboreal Movement`); GTraits.push(`The creature can move through trees as if they were difficult terrain. The creature can end its turn inside a tree, but it is expelled into an unoccupied space within 5 feet of the tree if the tree is destroyed. Enemies inside of or grappled by the creature are expelled into a spot within 5 ft. of the tree.`);}
		else if (RNG == 118) {GTraitNames.push(`Truespeak`); GTraits.push(`The creature can communicate with any living creature as if they shared a language.`);}
		else if (RNG == 119) {GTraitNames.push(`Aura of Necromancy's Bane`); GTraits.push(`Necromancy spells can't be cast within 120 feet of the creature. When an undead creature starts its turn within 30 feet of the creature, it must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 2) + 3}d6 radiant damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 120) {GTraitNames.push(`Usher of Souls`); GTraits.push(`The creature can transport itself and up to eight creatures in contact with it to another plane of existence. This works like the plane shift spell, except dead or incorporeal creatures can be transported and don't have to be willing. The creature can't use this ability to transport an unwilling creature.`);}
		else if (RNG == 121) {GTraitNames.push(`Blood Sense`); GTraits.push(`The creature can pinpoint, by scent, the location of living creatures within 30 feet of it.`);}
		else if (RNG == 122) {GTraitNames.push(`Devil's Sight`); GTraits.push(`Magical darkness doesn’t impede the creature’s darkvision.`);}
		else if (RNG == 123) {GTraitNames.push(`Speak with Spiders`); GTraits.push(`The creature can communicate with spiders and other arachnids as if they shared a language.`);}
		else if (RNG == 124) {GTraitNames.push(`Capturing Strings`); GTraits.push(`If two attacks hit a Medium or smaller target, the target is restrained in gilded webbing. As an action, the restrained target can make a DC ${GTier + 12} Strength check, bursting the restaint on a success. The restraints can also be attacked and destroyed (AC ${GPB + 8}; hp ${GPB * 3}; immunity to bludgeoning, poison, and psychic damage).`);}
		else if (RNG == 125) {GTraitNames.push(`Aura of Virulence`); GTraits.push(`Creatures that would normally be resistant or immune to poison damage or the poisoned condition lose their resistance or immunity while within 60 feet of the creature. All other creatures within 60 feet of the creature have disadvantage on saving throws against effects that cause poison damage or the poisoned condition.`);}
		else if (RNG == 126) {GTraitNames.push(`Swarm Prince`); GTraits.push(`The creature can communicate with all vermin and insects, including swarms and giant varieties, within 120 feet via pheromone transmission. This is a silent and instantaneous mode of communication that only this creature, spawns of this creature, insects, and vermin can understand. All these creatures follow the creature's orders and will never harm the creature.`);}
		else if (RNG == 127) {GTraitNames.push(`Shearing`); GTraits.push(`Whenever the creature suffers ${GPB * 3} or more damage from a single attack, a length of itself breaks free. This animated tendril is under the creature's control, moving and acting as an extension of the creature. Each tendril has AC ${GPB + 9}, ${GPB * 3} hp, and a speed of 15 feet.`);}
		else if (RNG == 128) {SkillTypeGen(); GTraitNames.push(`Advanced ${GSkillX}`); GTraits.push(`The creature has advantage on ${GSkillX} checks.`);}
		else if (RNG == 129) {GTraitNames.push(`Shapechanger`); GTraits.push(`The creature can use its action to polymorph into a small object, such as a ring, wand, orb, rod, or scroll. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. While polymorphed and motionless, the creature is indistinguishable from an ordinary object.`);}
		else if (RNG == 130) {GTraitNames.push(`Arcane Discharge`); GTraits.push(`This creature can consume and digest magic items and objects. When the creature dies, it explodes in a surge of partially-digested magical energy. Each creature within 15 feet must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB / 3)}d6 force damage per recently consumed magical item (roll 1d6 if unknown) on a failed save, or half as much damage on a successful one. For 1 minute afterward, the affected area is awash with volatile magic. A creature that starts its turn in the affected area takes ${Math.ceil(GPB / 3) + 2}d6 force damage.`);}
		else if (RNG == 131) {GTraitNames.push(`Ingest Magic`); GTraits.push(`At the start of each of the creature's turns, each enemy within 30 feet of it that is currently maintaining concentration on a spell must make a DC ${GTier + 12} Constitution saving throw. On a failure, the enemy's spell ends and the creature feeds on the magic, regaining hit points equal to twice the level of the spell.`);}
		else if (RNG == 132) {GTraitNames.push(`Slaver Strikes`); GTraits.push(`The creature can add a magical effect in addition to the normal damage done by its attacks. If so, the creature chooses from the following effects:\n\nConfusion. The target must succeed on a DC ${GTier + 12} Wisdom saving throw or become confused (as the spell) for 2d4 - 1 rounds.\n\nFear. The target must succeed on a DC ${GTier + 12} Wisdom saving throw or become frightened for 2d4 rounds.\n\nHideous Laughter. The target must succeed on a DC ${GTier + 12} Wisdom saving throw or become incapacitated for 2d4 rounds. While incapacitated, the target is prone and laughing uncontrollably.\n\nSleep. The target must succeed on a DC ${GTier + 12} Wisdom saving throw or fall asleep for 2d4 minutes. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.`);}
		else if (RNG == 133) {GTraitNames.push(`Healing Presence`); GTraits.push(`When a friendly ally within 10 feet of the creature regains hp, they regain an extra ${Math.ceil(GPB / 3) + 1}d6 hp.`);}
		else if (RNG == 134) {GTraitNames.push(`Assassinate`); GTraits.push(`During its first turn, the creature has advantage on attack rolls against any enemy that hasn't taken a turn. Any hit the creature scores against a surprised enemy is a critical hit.`);}
		else if (RNG == 135) {GTraitNames.push(`Swarm`); GTraits.push(`The creature can occupy another creature’s space and vice versa, and the creature can move through any opening as small as an inch wide.`);}
		else if (RNG == 136) {GTraitNames.push(`Helping Hand`); GTraits.push(`The creature can take the Help action as a bonus action on each of its turns.`);}
		else if (RNG == 137) {GTraitNames.push(`Water Invisibility`); GTraits.push(`While fully immersed in water, the creature is invisible. If it attacks, it becomes visible until the start of its next turn. The creature can suppress this invisibility until the start of its next turn as a bonus action.`);}
		else if (RNG == 138) {GTraitNames.push(`Chilling Presence`); GTraits.push(`The creature freezes everything within 150 feet of it. After 5 rounds, nonmagical fires up to the size of a campfire are quenched. Water freezes within 1 minute. Spells that protect against cold are subjected to an immediate dispel magic (at +${GPB + 3} spellcasting ability) when within 150 feet of the creature.`);}
		else if (RNG == 139) {GTraitNames.push(`Absorbent`); GTraits.push(`When the creature damages an enemy, it absorbs a portion of that enemy's knowledge and power. As a bonus action, it can recreate any action available to an enemy it damaged within the last minute. This includes spells and actions with limited uses or with a recharge. This recreated action is resolved using the creature's statistics where applicable.`);}
		else if (RNG == 140) {GTraitNames.push(`Soothing Aura`); GTraits.push(`Any enemy hostile to the creature that starts its turn within 30 feet of the creature must succeed on a DC ${GTier + 12} Wisdom saving throw or have disadvantage on all attack rolls until the end of its next turn. Creatures with Intelligence 3 or lower automatically fail the saving throw.`);}
		else if (RNG == 141) {GTraitNames.push(`Legendary Merge`); GTraits.push(`A creature with less than half its maximum Hit Points can merge with any other of the same creature within 10 feet, adding its remaining hp to that creature's. The hp gained this way can exceed the normal maximum of that creature. The creature can accept any number of such mergers.`);}
		else if (RNG == 142) {GTraitNames.push(`Multiple Heads`); GTraits.push(`The creature's two heads grant it advantage on Perception Checks and saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.`);}
		else if (RNG == 143) {GTraitNames.push(`Reactive Heads`); GTraits.push(`The creature gets an extra head and two extra reactions that can be used only for opportunity attacks.`);}
		else if (RNG == 144) {GTraitNames.push(`Fire Aura`); GTraits.push(`At the start of each of the creature's turns, each enemy within 5 feet of it takes ${Math.ceil(GPB / 2) + 3}d6 fire damage, and flammable objects in the aura that aren't being worn or carried ignite. An enemy that touches the creature or hits it with a melee attack while within 5 feet of it takes ${Math.ceil(GPB / 2) + 3}d6 fire damage.`);}
		else if (RNG == 145) {GTraitNames.push(`Running Leap`); GTraits.push(`The creature's long jump is up to ${reachX * 3} feet and its high jump is up to ${reachX * 2} feet when it has a running start.`);}
		else if (RNG == 146) {GTraitNames.push(`Petrifying Gaze`); GTraits.push(`If an enemy starts its turn within 30 ft. of the creature and the two of them can see each other, the creature can force the enemy to make a DC ${GTier + 12} Constitution saving throw if the creature isn't incapacitated. On a failed save, the enemy magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the enemy is petrified until freed by the greater restoration spell or other magic.\n\nAn enemy that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the creature until the start of its next turn, when it can avert its eyes again. If it looks at the creature in the meantime, it must immediately make the save.`);}
		else if (RNG == 147) {GTraitNames.push(`Steadfast`); GTraits.push(`The creature can't be frightened while it can see an allied creature within 30 feet of it.`);}
		else if (RNG == 148) {GTraitNames.push(`Frenzy (1/short rest)`); GTraits.push(`As a bonus action, the creature can trigger a berserk frenzy that lasts 1 minute. While in frenzy, it gains resistance to bludgeoning, piercing, and slashing damage and has advantage on attack rolls. Attack rolls made against a frenzied creature have advantage.`);}
		else if (RNG == 149) {GTraitNames.push(`Antimagic Cone`); GTraits.push(`The creature creates an area of antimagic, as in the antimagic field spell, in a 60-foot cone. At the start of each of its turns, the creature decides which way the cone faces and whether the cone is active. The area works against the creature's own magics.`);}
		else if (RNG == 150) {GTraitNames.push(`Treasure Sense`); GTraits.push(`The creature can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.`);}
		else if (RNG == 151) {GTraitNames.push(`Hateful Aura`); GTraits.push(`The creature and allies within 10 feet of the creature add their Charisma modifier to weapon damage rolls (unless it is negative).`);}
		else if (RNG == 152) {GTraitNames.push(`Carnivorous Compulsion`); GTraits.push(`If the creature can see an incapacitated creature, it must succeed on a DC ${GTier + 12} Wisdom save or be compelled to move toward that creature and attack it.`);}
		else if (RNG == 153) {GTraitNames.push(`Unholy Stench`); GTraits.push(`When the creature takes piercing or slashing damage, noxious vapors burst from its wounds. Each enemy within 10 feet of it must succeed on a DC ${GTier + 12} Constitution saving throw or take ${Math.ceil(GPB / 3) + 2}d6 poison damage and be poisoned until the end of its next turn.`);}
		else if (RNG == 154) {GTraitNames.push(`Empowered Blood Sense`); GTraits.push(`The creature can pinpoint the location of living creatures within 60 feet of it and can sense the general direction of living creatures within 1 mile of it.`);}
		else if (RNG == 155) {GTraitNames.push(`Blood Scent`); GTraits.push(`A creature can smell blood within 240 feet of it. It can determine whether the blood is fresh or old and what type of creature shed the blood. In addition, the creature has advantage on Wisdom (Perception) and Wisdom (Survival) checks to find or track a creature that doesn’t have all its Hit Points.`);}
		else if (RNG == 156) {GTraitNames.push(`Necrotic Absorption`); GTraits.push(`Whenever the creature is subjected to necrotic damage, it takes no damage and instead regains a number of Hit Points equal to the necrotic damage dealt.`);}
		else if (RNG == 157) {GTraitNames.push(`Cackle`); GTraits.push(`The creature emits a constant, demoralizing cackle. When an enemy that isn’t an undead or a construct starts its turn within 30 feet of the creature and can hear it, it must make a DC ${GTier + 12} Wisdom saving throw or feel demoralized by the creature’s cackling. A demoralized enemy has disadvantage on attack rolls until the start of its next turn.`);}
		else if (RNG == 158) {GTraitNames.push(`Fiendish Blessing`); GTraits.push(`The AC of the creature includes its Charisma bonus.`);}
		else if (RNG == 159) {GTraitNames.push(`Detect Elixir`); GTraits.push(`The creature can pinpoint the location of potions and magic items within 60 feet of it. Outside of 60 feet, it can sense the general direction of potions within 1 mile of it.`);}
		else if (RNG == 160) {if (GMagic == "Martial") {EnemyTrait();} else {GTraitNames.push(`Forgetful Spellcasting`); GTraits.push(`When a creature fails an Intelligence, Wisdom, or Charisma saving throw against a spell cast by the creature, the target immediately forgets the source of the spellcasting.`);}}
		else if (RNG == 161) {GTraitNames.push(`Natural Climber`); GTraits.push(`The creature gains 20 ft. of climbing speed and can climb difficult surfaces, such as upside down on the ceiling. The creature does not provoke opportunity attacks while climbing.`); GSpeedClimb += 20}
		else if (RNG == 162) {GTraitNames.push(`Sunlight Petrification`); GTraits.push(`If the creature starts its turn in sunlight, it takes 10 radiant damage. While in sunlight, it moves at half speed and has disadvantage on attack rolls and ability checks. If the creature is reduced to 0 hp while in sunlight, it is petrified.`);}
		else if (RNG == 163) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 164) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 165) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 166) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 167) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 168) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 169) {GTraitNames.push(``); GTraits.push(``);}
		else if (RNG == 170) {GTraitNames.push(``); GTraits.push(``);}
}
	function EnemyTraitBtn() {
		GTraitNames.length = 0;
		GTraits.length = 0;
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2);
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		EnemyTrait();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GTraitNames}]\n${GTraits}`;
		GTraitNames.length = 0;
		GTraits.length = 0;
	}

function EnemyAction() {
	let reachX = 5;
	let RNG = Math.floor(Math.random() * 3) + 1; 
	if (GSize == "Large" && RNG == 3) {reachX += 5} else if (GSize == "Huge") {reachX += 5} else if (GSize == "Gargantuan" && RNG == 3) {reachX += 15} else if (GSize == "Gargantuan" && RNG < 3) {reachX += 10} else {}
		RNG = Math.floor(Math.random() * 133) + 1;
		if (RNG == 1) {GActionNames.push(`Poisonous Bite`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage, and the target must succeed on a DC ${GTier + 12} Constitution saving throw or be poisoned for 1 minute. While poisoned this way, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 2) {GActionNames.push(`Ovipositor`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one target. Hit: The target is infested with 1d4 eggs, which immediately hatch into maggots. At the start of each of the target’s turns, the target takes ${Math.floor(GPB / 3) + 1}d6 piercing damage per maggot infesting it. Applying fire to the bite wound before the end of the target’s next turn deals 1 fire damage to the target and kills these maggots. After this time, the maggots are too far under the skin to be burned. If a target infested by maggots ends its turn with 0 hit points, it dies as the maggots burrow into its heart and kill it. Any effect that cures disease kills all maggots infesting the target.`);}
		else if (RNG == 3) {GActionNames.push(`Bite`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 4) {GActionNames.push(`Dagger`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 5) {GActionNames.push(`Club`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) bludgeoning damage`);}
		else if (RNG == 6) {GActionNames.push(`Handaxe`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 7) {GActionNames.push(`Light Hammer`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 8) {GActionNames.push(`Javelin`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 9) {GActionNames.push(`Quarterstaff`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) bludgeoning damage or (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) when held in one hand.`);}
		else if (RNG == 10) {GActionNames.push(`Spear`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage or (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) when held in one hand.`);}
		else if (RNG == 11) {GActionNames.push(`Mace`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 12) {GActionNames.push(`Greatclub`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 13) {GActionNames.push(`Shortsword`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 14) {GActionNames.push(`Rapier`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 15) {GActionNames.push(`Longsword`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage or (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) when held in one hand.`);}
		else if (RNG == 16) {GActionNames.push(`Whip`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 17) {GActionNames.push(`Battlaxe`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage or (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) when held in one hand.`);}
		else if (RNG == 18) {GActionNames.push(`Morningstar`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 19) {GActionNames.push(`Flail`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 10) {GActionNames.push(`Warhammer`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) bludgeoning damage or (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) when held in one hand.`);}
		else if (RNG == 21) {GActionNames.push(`Pike`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 22) {GActionNames.push(`Barbed Whip`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 23) {GActionNames.push(`Halberd`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 24) {GActionNames.push(`Glaive`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 25) {GActionNames.push(`Greataxe`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d12 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 26) {GActionNames.push(`Greatsword`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil((GPB / 3) * 2) + 1}d6 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 27) {GActionNames.push(`Maul`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil((GPB / 3) * 2) + 1}d6 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 28) {GActionNames.push(`Scimitar`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 29) {GActionNames.push(`Trident`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage or (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) when held in one hand.`);}
		else if (RNG == 30) {GActionNames.push(`War Pick`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 31) {GActionNames.push(`Light Crossbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 8}/${(reachX + 5) * 32} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 32) {GActionNames.push(`Shortbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 8}/${(reachX + 5) * 32} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 33) {GActionNames.push(`Hand Crossbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 3}/${(reachX + 5) * 12} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 34) {GActionNames.push(`Heavy Crossbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 10}/${(reachX + 5) * 40} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 35) {GActionNames.push(`Longbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 15}/${(reachX + 5) * 60} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 36) {GActionNames.push(`Greatbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 25}/${(reachX + 5) * 100} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d12 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 37) {GActionNames.push(`Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 38) {GActionNames.push(`Claw (Grapple)`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) slashing damage and the target is grappled (escape DC ${GTier + 12}). Until this grapple ends, the creature can automatically hit the target with its claw, and the creature can’t make attacks with that claw against other targets..`);}
		else if (RNG == 39) {GActionNames.push(`Radiant Blast`); GActions.push(`Radiant energy erupts from the creature’s eyes in a 15-foot cone. Each creature in that area must succeed on a DC ${GTier + 12} Constitution saving throw or take ${Math.ceil(GPB / 3) + 1}d6 radiant damage and be blinded until the end of the creature’s next turn. Creatures with the Sunlight Sensitivity trait have disadvantage on this saving throw.`);}
		else if (RNG == 40) {GActionNames.push(`Gemstone Eye of Fear`); GActions.push(`The creature shoots a magical eye ray, choosing one target it can see within 90 feet of it. The target and up to four other creatures of the creature’s choice within 10 feet of the target must each succeed on a DC ${GTier + 12} Wisdom saving throw or be frightened for 1 minute. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 41) {GActionNames.push(`Gemstone Eye of Flame`); GActions.push(`The creature shoots a magical eye ray, choosing one target it can see within 90 feet of it. The target must make a DC ${GTier + 12} Dexterity saving throw. On a failed save, the target takes ${Math.ceil(GPB / 3) + 1}d8 fire damage, and if it is a creature or a flammable object, it ignites. On a successful save, the target takes half as much damage and does not ignite. A target that ignites takes ${Math.ceil(GPB / 3) + 1}d6 fire damage at the start of each of its turns until a creature takes an action to douse the fire.`);}
		else if (RNG == 42) {GActionNames.push(`Rock`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 43) {GActionNames.push(`Dart`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 44) {GActionNames.push(`Earth Phasing`); GActions.push(`Until the end of its next turn, the creature can fly through nonmagical earth and stone. While doing so, it doesn’t disturb the material it moves through. It can end its movement within earth or stone, but if it remains within earth or stone when this ability ends, it takes 14 (4d6) force damage and immediately moves to the nearest unoccupied space.`);}
		else if (RNG == 45) {GActionNames.push(`Needle Volley`); GActions.push(`The creature makes up to 1d6 needle attacks, but it cannot attack the same target more than twice during its turn. Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 46) {GActionNames.push(`Raking Vine`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage, and the target is grappled (escape DC ${GTier + 12}). Until this grapple ends, the target takes ${GPB * 2} piercing damage at the start of each of its turns. The creature has ${Math.floor(Math.random() * 3) + 1} raking vines, each of which can grapple only one target at a time.`);}
		else if (RNG == 47) {GActionNames.push(`Barbed Tail`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 48) {GActionNames.push(`Scythe`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage plus ${Math.ceil(GPB / 3) + 1}d4 necrotic damage. Any creature reduced to 0 hit points by this attack dies, with its body and everything it is wearing and carrying, except magic items, exploding into a cloud of ash.`);}
		else if (RNG == 49) {GActionNames.push(`Entropic Touch`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) necrotic damage, and the target must succeed on a DC ${GTier + 12} Constitution saving throw or gain one level of exhaustion.`);}
		else if (RNG == 50) {GActionNames.push(`Teleport`); GActions.push(`The creature teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see.`);}
		else if (RNG == 51) {GActionNames.push(`Shadow Caw`); GActions.push(`The creature releases an ear-splitting caw. Each creature within 60 feet of the creature and able to hear it must make a DC ${GTier + 12} Constitution saving throw. On a failure, a creature takes ${Math.ceil(GPB / 3) + 2}d6 psychic damage.`);}
		else if (RNG == 52) {GActionNames.push(`Tentacle`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil((GPB / 3) * 2) + 1}d6 + ${GWeaponMod}) bludgeoning damage. If the target is a creature, it is grappled (escape DC ${GTier + 12}). Until this grapple ends, the target is restrained. The creature can grapple no more than two targets at a time.`);}
		else if (RNG == 53) {GActionNames.push(`Fist`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 54) {GActionNames.push(`Acid Squirt`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 2}/${(reachX + 5) * 4} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) acid damage.`);}
		else if (RNG == 55) {GActionNames.push(`Beer Shower`); GActions.push(`The creature spews an unnaturally potent beer in a ${reachX + 10}-foot cone or in a ${(reachX + 10) * 2}-foot line that is ${Math.ceil(reachX - 10) * 5} feet wide. Each creature in the area must succeed on a DC ${GTier + 13} Constitution saving throw or be poisoned. While poisoned in this way, a creature has its speed halved by exposure to the potent brew. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Additionally, the beer shower extinguishes any fires or open flames in its area.`);}
		else if (RNG == 56) {GActionNames.push(`Vitality Drain`); GActions.push(`One creature grappled by the creature must make a DC ${GTier + 12} Constitution saving throw. On a failed save, the target takes ${Math.ceil(GPB / 3)}d8 necrotic damage, and the creature regains a number of hit points equal to half the necrotic damage taken.`);}
		else if (RNG == 57) {GActionNames.push(`Nightmare Touch`); GActions.push(`Melee Spell Attack: +${GSpellHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 2) + 1}d6 + ${GSpellMod}) psychic damage. If the target is unconscious, it takes an extra ${Math.ceil(GPB / 3) + 2}d6 psychic damage and is cursed until the creature dies or the curse is removed. The cursed target’s hit point maximum decreases by ${Math.ceil(GPB / 4)}d6 whenever it finishes a long rest.`);}
		else if (RNG == 58) {GActionNames.push(`Tentacle Whip`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) slashing damage. If the target is the same size or smaller than the creature, it is grappled (escape DC ${GTier + 12}), pulled into an unoccupied space within 5 feet of the creature, and must succeed on a DC ${GTier + 13} Intelligence saving throw or be stunned until this grapple ends. The creature can’t use the same tentacle whip on another target until this grapple ends. The creature has two tentacle whips.`);}
		else if (RNG == 59) {GActionNames.push(`Extract Brain`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one incapacitated creature grappled by the creature. Hit: (${Math.ceil(GPB / 2) + 3}d10 + ${GWeaponMod}) piercing damage. If this damage reduces the target to 0 hit points, the creature kills the target by extracting and devouring its brain.`);}
		else if (RNG == 60) {GActionNames.push(`Idyllic Touch`); GActions.push(`Melee Spell Attack: +${GSpellHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GSpellMod}) force damage. If the target is a creature, it must succeed on a DC ${GTier + 12} Wisdom saving throw or fall prone in a fit of laughter.`);}
		else if (RNG == 61) {GActionNames.push(`Mind Thrust`); GActions.push(`The creature targets a creature it can see within 60 feet of it. The target must make a DC ${GTier + 12} Wisdom saving throw, taking ${Math.ceil(GPB / 2) + 2}d8 psychic damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 62) {GActionNames.push(`Crysteel Dagger`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage. plus ${Math.ceil(GPB / 3) + 2}d6 force damage`);}
		else if (RNG == 63) {GActionNames.push(`Strong Bite`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage. If the target is a creature, it must succeed on a DC ${GTier + 12} Strength saving throw or take an extra ${Math.ceil(GPB / 3)}d6 piercing damage and be grappled (escape DC ${GTier + 12}). The creature can have only one creature grappled in this way at a time.`);}
		else if (RNG == 64) {GActionNames.push(`Arcane Blast`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 120 ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GSpellMod}) force damage.`);}
		else if (RNG == 65) {GActionNames.push(`Soul Binding`); GActions.push(`Melee Spell Attack: +${GSpellHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) necrotic damage. A creature reduced to 0 hit points from this attack dies and has its soul imprisoned inside the creature's body. The target can’t be revived by any means short of a wish spell until the creature is destroyed.`);}
		else if (RNG == 66) {GActionNames.push(`Paralyzing Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage plus ${Math.ceil(GPB / 3) + 2}d6 cold damage, and the target must succeed on a DC ${GTier + 12} Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 67) {GActionNames.push(`Holy Flail`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) bludgeoning damage plus ${Math.ceil(GPB / 2) + 2}d8 radiant damage.`);}
		else if (RNG == 68) {GActionNames.push(`Chromatic Orb`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 120 ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GSpellMod}) damage of a type chosen by the creature: acid, cold, fire, lightning, poison, or thunder.`);}
		else if (RNG == 69) {GActionNames.push(`Magic Staff`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) force damage.`);}
		else if (RNG == 70) {GActionNames.push(`Fire Bolt`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 120 ft., one creature. Hit: (${Math.ceil(GPB / 2) + 2}d6) fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.`);}
		else if (RNG == 71) {GActionNames.push(`Pincer`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) bludgeoning damage. The target is grappled (escape DC ${GTier + 12}) if it is a Medium or smaller creature. The creature has two pincers, each of which can grapple one target.`);}
		else if (RNG == 72) {GActionNames.push(`Hallucinogenic Stinger`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d10 + ${GWeaponMod}) piercing damage plus ${Math.ceil(GPB / 3) + 1}d10 psychic damage, and the target must succeed on a DC ${GTier + 12} Wisdom saving throw or be frightened of the creature for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 73) {GActionNames.push(`Radiant Touch`); GActions.push(`Melee Spell Attack: +${GSpellHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 2}d6 + ${GSpellMod}) radiant damage.`);}
		else if (RNG == 74) {GActionNames.push(`Talons`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) slashing damage.`);}
		else if (RNG == 75) {GActionNames.push(`Hooves`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil((GPB / 3) * 2) + 1}d6 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 76) {GActionNames.push(`Slam`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d12 + ${GWeaponMod}) bludgeoning damage, and if the target if the same size or smaller than the creature, it can push the target ${reachX + 5} feet away from it.`);}
		else if (RNG == 77) {GActionNames.push(`Eldritch turret`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 300 ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GSpellMod}) force damage, and if the target is a creature, it is knocked prone.`);}
		else if (RNG == 78) {GActionNames.push(`Hammer of Justice`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) bludgeoning damage plus ${Math.ceil(GPB / 3)}d6 force damage. If the target is a creature, it must succeed on a DC ${GTier + 12} Strength saving throw or be knocked prone.`);}
		else if (RNG == 79) {GActionNames.push(`Arclight Touch`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: ${Math.ceil(GPB / 3) + 2}d6 lightning damage, and lightning jumps from the target to one creature of the creature’s choice that it can see within 30 feet of the target. That second creature must succeed on a DC ${GTier + 12} Dexterity saving throw or take ${Math.ceil(GPB / 3) + 2}d6 lightning damage.`);}
		else if (RNG == 80) {GActionNames.push(`Vampiric Bite`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., a willing creature, a creature that is charmed by the creature, or a creature that is grappled, restrained, or incapacitated. Hit: (${Math.ceil(GPB / 3)}d6 + ${GWeaponMod}) piercing damage plus ${Math.ceil(GPB / 3) + 2}d6 necrotic damage.
The target’s hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.`);}
		else if (RNG == 81) {GActionNames.push(`Chain`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 15} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) bludgeoning damage. If the target is a creature, it is grappled (escape DC ${GTier + 12}). Until the grapple ends, the target is restrained, and the creature can’t use this attack on anyone else.`);}
		else if (RNG == 82) {GActionNames.push(`Spit Acid`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d4 + ${GWeaponMod}) acid damage.`);}
		else if (RNG == 83) {GActionNames.push(`Petrifying Gaze`); GActions.push(`The creature fixes its gaze on one enemy within 60 feet of it that it can see and that can see its eyes. The target must make a DC ${GTier + 12} Constitution saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. Otherwise, an enemy that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by a greater restoration spell or similar magic.`);}
		else if (RNG == 84) {GActionNames.push(`Searing Touch`); GActions.push(`The creature grabs a target and attempts to grapples them. The initial touch deals ${Math.ceil(GPB / 3) + 2}d6 fire damage and an additional ${Math.ceil(GPB / 3) + 2}d6 fire damage each turn they remain grappled.`);}
		else if (RNG == 85) {GActionNames.push(`Pseudopod`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 5} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 86) {GActionNames.push(`Combusting Touch`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: ${Math.ceil(GPB / 2) + 2}d8 fire damage. A creature hit by this attack is knocked back 5 ft. and cannot take a reaction until the end of their next turn.`);}
		else if (RNG == 87) {GActionNames.push(`Poisoned Daggers`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d4 + ${GWeaponMod}) piercing damage. The target must make a DC ${GTier + 12} Consitution Saving Throw or else take ${Math.ceil(GPB) * 2} poison damage and become poisoned. A successful save takes half damage and is not poisoned.`);}
		else if (RNG == 88) {GActionNames.push(`Pinning Thrust`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage. The creature attempts to pierce his sword through his target's leg into the ground. The target makes a DC ${GTier + 12} Dexterity saving throw. On a fail, the sword pierces their leg into the ground and they are considered restrained until the sword is removed. The creature cannot use this attack unless they retrieve their weapon or carry more.`);}
		else if (RNG == 89) {GActionNames.push(`Stunning Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d8 + ${GWeaponMod}) slashing damage. A target hit by two claw attacks in the same turn must make a DC ${GTier + 12} Consitution saving throw or else be stunned until the end of their next turn.`);}
		else if (RNG == 90) {GActionNames.push(`Haymaker`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d12 + ${GWeaponMod}) bludgeoning damage. A creature hit by this must make a Strength DC ${GTier + 12} saving throw or be knocked back 10 ft. Any creature hit by the target must make a Dex DC ${GTier + 12} saving throw or else take ${Math.ceil(GPB / 3)}d8 + ${GWeaponMod} bludgeoning damage and be knocked back to just behind where the target ends.`);}
		else if (RNG == 91) {GActionNames.push(`Tail`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX + 10} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d4 + ${GWeaponMod}) bludgeoning damage.`);}
		else if (RNG == 92) {GActionNames.push(`Bleeding Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d6 + ${GWeaponMod}) slashing damage, and the target loses ${GTier} hit points from bleeding at the start of each of its turns for six rounds unless it receives magical healing. Bleeding damage is cumulative; the target loses ${GTier} hp per round for each bleeding wound it's taken from the creature's claws.`);}
		else if (RNG == 93) {GActionNames.push(`Devour`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d12 + ${GWeaponMod}) slashing damage and attempts to grapple the target. If the target was already grappled by the creature, it takes an additional ${Math.ceil(GPB / 3)}d12 piercing damage. The creature can grapple one creature at a time, and it can't use its devour attack against a different target while it has a creature grappled.`);}
		else if (RNG == 94) {GActionNames.push(`Burning Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3)}d4 + ${GWeaponMod}) slashing damage plus ${Math.ceil(GPB / 4)}d6 fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes ${Math.ceil(GPB / 4)}d8 fire damage at the start of each of its turns.`);}
		else if (RNG == 95) {GActionNames.push(`Spit Fire`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes ${Math.ceil(GPB / 3)}d8 fire damage at the start of each of its turns.`);}
		else if (RNG == 96) {GActionNames.push(`Discombobulating Touch`); GActions.push(`The creature can make a touch attack that grants its target +3 to Dexterity-based skill checks and melee attacks but also induces confusion as per the spell. This effect lasts for 1d4 rounds. A successful DC ${GTier + 12} Charisma saving throw negates this effect.`);}
		else if (RNG == 97) {GActionNames.push(`Bone Shard`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage and the target must make a DC ${GTier + 12} Constitution saving throw. On a failure, a piece of the bone breaks and sticks in the target's wound. The target takes ${Math.ceil(GPB / 3) + 1}d4 piercing damage at the start of each of its turns as long as the bone remains lodged in its wound. A creature, including the target, can take its action to remove the bone by succeeding on a DC ${GTier + 12} Wisdom (Medicine) check. The bone also falls out of the wound if the target receives magical healing. A creature typically carries 3 (1d6) bone shards, which are destroyed on a successful hit. It can use its action to tear a bone shard from a corpse within 5 feet.`);}
		else if (RNG == 98) {GActionNames.push(`Gore`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 99) {GActionNames.push(`Chromatic Ray`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 60 ft., one creature. Hit: ${Math.ceil(GPB / 3)}d6 lightning damage plus ${Math.ceil(GPB / 3)}d6 fire damage plus ${Math.ceil(GPB / 3)}d6 cold damage.`);}
		else if (RNG == 100) {GActionNames.push(`Rainbow Arch`); GActions.push(`The creature can instantaneously teleport between sources of fresh water within 1 mile as an action. It can't move normally or take any other action on the turn when it uses this power. When this power is activated, a rainbow manifests between the origin and destination, lasting for 1 minute.`);}
		else if (RNG == 101) {GActionNames.push(`Fiery Greatsword`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage plus 16 (3d10) fire damage`);}
		else if (RNG == 102) {GActionNames.push(`Lightning Recolation`); GActions.push(`The creature teleports up to 60 feet to an unoccupied space it can see. When it does, it briefly transforms into a bolt of lightning, flashes upwards, then crashes down unharmed at its destination. Each enemy within 5 feet of the creature’s starting location or destination must succeed on a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB / 2) + 1}d6 lightning damage on a failed save, or half as much on a successful one. An enemy within 5 feet of both locations makes this saving throw only once.`);}
		else if (RNG == 103) {GActionNames.push(`Ash Cloud`); GActions.push(`The creature can create a cloud of ash that extends ${reachX + 5} feet in all directions, centered on itself. This cloud provides half cover, though the creature can see normally through its own cloud. Any enemy that enters or starts its turn in the cloud must succeed on a DC ${GTier + 12} Constitution saving throw or become blinded for 1d6 rounds.`);}
		else if (RNG == 104) {GActionNames.push(`Poisoned Dagger`); GActions.push(`Melee or Ranged Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft. or range ${(reachX + 5) * 2}/${(reachX + 5) * 6} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) piercing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 105) {GActionNames.push(`Poisoned Shortsword`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 106) {GActionNames.push(`Poisoned Rapier`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 107) {GActionNames.push(`Poisoned Barbed Whip`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 108) {GActionNames.push(`Poisoned Scimitar`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 109) {GActionNames.push(`Poisoned Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 110) {GActionNames.push(`Poisoned Light Crossbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 8}/${(reachX + 5) * 32} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 111) {GActionNames.push(`Poisoned Shortbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 8}/${(reachX + 5) * 32} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 112) {GActionNames.push(`Poisoned Hand Crossbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 3}/${(reachX + 5) * 12} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage, and the target must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 3) + 2}d6 poison damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 113) {GActionNames.push(`Healing Touch (3/day)`); GActions.push(`The creature touches a creature. The target magically regains (${Math.ceil(GPB / 3) + 1}}d8 + ${GConMod}) hit points and is freed from any disease, poison, blindness, or deafness.`);}
		else if (RNG == 114) {GActionNames.push(`North Wind Longbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 15}/${(reachX + 5) * 60} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage plus ${Math.ceil(GPB / 3) + 1}d8 cold damage`);}
		else if (RNG == 115) {GActionNames.push(`Wind Blast`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 50 ft., one creature. Hit: ${Math.ceil(GPB / 3) + 1}d12 slashing damage.`);}
		else if (RNG == 116) {GActionNames.push(`Pincers`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage. If the creature scores a critical hit against an enemy, roll a d10. On a 1-3, it severs the target’s arm, and on a 4-6 it severs the target’s leg. A creature missing an arm can’t wield weapons that require two hands, and if a creature is missing a leg, its speed is halved. Creatures without limbs are unaffected.`);}
		else if (RNG == 117) {GActionNames.push(`Hurl Flame`); GActions.push(`Ranged Spell Attack: +${GSpellHit} to hit, range 150 ft., one creature. Hit: ${Math.ceil(GPB / 3) + 3}d6 fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.`);}
		else if (RNG == 118) {GActionNames.push(`Beard`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) piercing damage, and the target must succeed on a DC ${GTier + 12} Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 119) {GActionNames.push(`Constrict`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature the same size or smaller. Hit: (${Math.ceil(GPB / 2) + 1}d10 + ${GWeaponMod}) bludgeoning damage plus (${Math.ceil(GPB / 3)}d10 + ${GWeaponMod}) slashing damage. The target is grappled (escape DC ${GTier + 12}) if the creature isn't already constricting an enemy, and the target is restrained until this grapple ends.`);}
		else if (RNG == 120) {GRay = ``; GRay1 = ``; GRay2 = ``; GRay3 = ``; GRay4 = ``; GRay5 = ``; GRay6 = ``; RayX = ``;
			Ray2 = Math.floor(Math.random() * 2) + 1; Ray3 = Math.floor(Math.random() * 3) + 1; Ray4 = Math.floor(Math.random() * 4) + 1; Ray5 = Math.floor(Math.random() * 6) + 1; Ray6 = Math.floor(Math.random() * 8) + 1;
			if (GCR >= 30) {Ray2 = 1;} else {}
			if (GCR >= 20) {Ray3 = 1;} else {}
			if (GCR >= 15) {Ray4 = 1;} else {}
			if (GCR >= 10) {Ray5 = 1;} else {}
			if (GCR >= 5) {Ray6 = 1;} else {}
			RandomRay(); RayX += `${GRay}`; GRay1 = GRay;
			if (Ray2 == 1) {RandomRay(); GRay2 = GRay;
				while(GRay2 == GRay1) {RandomRay(); GRay2 = GRay;} RayX += `\n${GRay}`;}
			if (Ray3 == 1) {RandomRay(); GRay3 = GRay;
				while(GRay3 == GRay1 || GRay3 == GRay2) {RandomRay(); GRay3 = GRay;} RayX += `\n${GRay}`;}
			if (Ray4 == 1) {RandomRay(); GRay4 = GRay;
				while(GRay4 == GRay1 || GRay4 == GRay2 || GRay4 == GRay3) {RandomRay(); GRay4 = GRay;} RayX += `\n${GRay}`;}
			if (Ray5 == 1) {RandomRay(); GRay5 = GRay;
				while(GRay5 == GRay1 || GRay5 == GRay2 || GRay5 == GRay3 || GRay5 == GRay4) {RandomRay(); GRay5 = GRay;} RayX += `\n${GRay}`;}
			if (Ray6 == 1) {RandomRay(); GRay6 = GRay;
				while(GRay6 == GRay1 || GRay6 == GRay2 || GRay6 == GRay3 || GRay6 == GRay4 || GRay6 == GRay5) {RandomRay(); GRay6 = GRay;} RayX += `\n${GRay}`;}
		GActionNames.push(`Eye Rays`); GActions.push(`The creature shoots ${Math.floor(GPB / 3) + 1} of the following magical eye rays at random, choosing one to three targets it can see within 120 ft. of it:\n${RayX}`);}
		else if (RNG == 121) {GActionNames.push(`Icy Shortbow`); GActions.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range ${(reachX + 5) * 8}/${(reachX + 5) * 32} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) piercing damage plus ${Math.ceil(GPB / 3) + 1}d6 cold damage, and the target must make a successful DC ${GTier + 11} Constitution saving throw or gain 2 levels of exhaustion from the arrow's icy chill. If the save succeeds, the target also becomes immune to further exhaustion from the arrows for 24 hours (but any levels of exhaustion already gained remain in effect). A character who gains a sixth level of exhaustion doesn't die automatically but drops to 0 hit points and must make death saving throws as normal. The exhaustion lasts until the target recovers fully from the cold damage.`);}
		else if (RNG == 122) {GActionNames.push(`Disheartening Touch`); GActions.push(`Melee Spell Attack: +${GSpellHit} to hit, range 5 ft., one creature. Hit: ${Math.ceil(GPB / 2) + 1}d6 psychic damage.`);}
		else if (RNG == 123) {GActionNames.push(`Sapping Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage. If the target is a creature other than an undead, it must succeed on a DC ${GTier + 12} Constitution saving throw or have its speed halved and have disadvantage on Dexterity-based checks and saving throws for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 124) {GActionNames.push(`Hideous Feast`); GActions.push(`The creature feeds on a corpse within 5 feet of it that is less than 1 week old. It regains ${Math.floor(GPB / 3) + 1}d8 hit points on a tiny corpse and an additional ${Math.floor(GPB / 3) + 1}d8 per size category above Tiny.`);}
		else if (RNG == 125) {GActionNames.push(`Spectral Claw`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) slashing damage, and the target must succeed on a DC ${GTier + 12} Constitution saving throw or suffer 1 level of exhaustion. A creature can suffer no more than 2 levels of exhaustion from Spectral Claws.`);}
		else if (RNG == 126) {GActionNames.push(`Invisibility`); GActions.push(`The creature magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the creature wears or carries is invisible with it.`);}
		else if (RNG == 127) {GActionNames.push(`Tusks`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB / 3) + 1}d6 + ${GWeaponMod}) slashing damage, and if the target is the same size as the creature or smaller it must succeed on a DC ${GTier + 13} Strength saving throw or be knocked prone.`);}
		else if (RNG == 128) {GActionNames.push(`Psychic Stab`); GActions.push(`The creature targets one enemy that it can sense within 30 feet of it. The target must make a DC ${GTier + 12} Intelligence saving throw, taking ${Math.ceil(GPB / 2) + 1}d6 psychic damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 129) {GActionNames.push(`Fissure`); GActions.push(`The creature opens a fissure in the ground within 120 feet of it that is 60 feet long, 10 feet wide, and 2d4 x 10 feet deep. Each enemy standing on a spot where a fissure opens must succeed on a DC ${GTier + 11} Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse as if the structure was in the area of an earthquake spell. The creature can have only one fissure open at a time. If it opens another, the previous fissure closes, shunting all creatures inside it to the surface.`);}
		else if (RNG == 130) {GActionNames.push(`Acid Touch`); GActions.push(`As an action, the creature destroys one nonmagical object that isn't being worn or carried, such as a rope, plank, candlestick, or even an entire bronze cauldron.`);}
		else if (RNG == 131) {GActionNames.push(`Mind-Weakening Ray`); GActions.push(`The creature targets one creature within 30 ft. that it can see. The target must succeed on a DC ${GTier + 12} Intelligence saving throw or take ${Math.ceil(GPB / 2) + 1}d8 psychic damage and be unable to cast spells or activate magic items for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 132) {GActionNames.push(`Domination Ray`); GActions.push(`The creature targets one creature within 30 ft. that it can see. The target must succeed on a DC ${GTier + 12} Wisdom saving throw or be charmed by the creature for 1 minute or until the target takes damage. The creature can issue telepathic commands to the charmed creature (no action required), which it does its best to obey.`);}
		else if (RNG == 133) {GActionNames.push(`Psyche-Reconstruction Ray`); GActions.push(`The creature targets one creature within 30 ft. that it can see. The target must make a DC ${GTier + 12} Wisdom saving throw, taking ${Math.ceil(GPB / 2) + 1}d10 psychic damage on a failed save, or half as much damage on a successful one. If this damage reduces a creature to 0 hit points, it dies and transforms into a spectator under the creature’s control and acts immediately after the creature in the initiative order. The target can’t be returned to its original form by any means short of a wish spell while the creature is alive.`);}
		else if (RNG == 134) {GActionNames.push(``); GActions.push(``);}
		else if (RNG == 135) {GActionNames.push(``); GActions.push(``);}
		else if (RNG == 136) {GActionNames.push(``); GActions.push(``);}
		else if (RNG == 137) {GActionNames.push(``); GActions.push(``);}
		else if (RNG == 138) {GActionNames.push(``); GActions.push(``);}
		else if (RNG == 139) {GActionNames.push(``); GActions.push(``);}
}
	function EnemyActionBtn() {
		GRayTemp = ``;
		GActionNames.length = 0;
		GActions.length = 0;
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2);
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		EnemyAction();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GActionNames}]\n${GActions}`;
		GActionNames.length = 0;
		GActions.length = 0;
	}

function EnemyBonus() {
		RNG = Math.floor(Math.random() * 39) + 1;
		if (RNG == 1) {GBonusNames.push(`Ethereal Jaunt`); GBonuses.push(`As a bonus action, the creature can magically shift from the Material Plane to the Ethereal Plane, or vice versa.`);}
		else if (RNG == 2) {GBonusNames.push(`Teleport`); GBonuses.push(`As a bonus action, the creature can teleport up to 15 feet to an unoccupied space it can see.`);}
		else if (RNG == 3) {GBonusNames.push(`Change Shape`); GBonuses.push(`The creature magically polymorphs into a humanoid, beast, or giant that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (its choice). In a new form, the creature retains his alignment, hit points, Hit Dice, ability to speak, proficiencies, and Intelligence, Wisdom, and Charisma scores, as well as this bonus action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.`);}
		else if (RNG == 4) {GBonusNames.push(`Healing Touch (2/Day)`); GBonuses.push(`The creature touches another creature. The target magically regains ${Math.ceil(GPB / 2) + 2}d6 + ${GPB * 2} hit points and is freed from one curse afflicting it (creature’s choice).`);}
		else if (RNG == 5) {GBonusNames.push(`Aggressive`); GBonuses.push(`As a bonus action, the creature can move up to its speed toward a hostile creature it can see.`);}
		else if (RNG == 6) {GBonusNames.push(`Shadow Stealth`); GBonuses.push(`While in light or darkness, the creature can take the Hide action as a bonus action.`);}
		else if (RNG == 7) {GBonusNames.push(`Nimble Escape`); GBonuses.push(`The creature can take the Disengage or Hide action as a bonus action on each of his turns.`);}
		else if (RNG == 8) {GBonusNames.push(`Commander of Bones`); GBonuses.push(`As a bonus action, the creature can target one skeleton or zombie it can see within 30 feet of it. The target must make a DC ${GTier + 11} Wisdom saving throw. On a failed save, the target must obey the creature’s commands until the creature dies or until the creature releases it as a bonus action. The creature can command up to twelve undead at a time this way. While within 60 feet of the creature, any undead ally of the creature has advantage on saving throws against any effect that turns undead.`);}
		else if (RNG == 9) {GBonusNames.push(`Cunning Action`); GBonuses.push(`On each of its turns, the creature can use a bonus action to take the Disengage or Hide action.`);}
		else if (RNG == 10) {GBonusNames.push(`Leadership`); GBonuses.push(`The creature utters a few inspiring words to one creature it can see within 30 feet of it. If the creature can hear it, they can add a d6 to one attack roll or saving throw it makes before the start of the creature’s next turn.`);}
		else if (RNG == 11) {GBonusNames.push(`Blood Witch Dance`); GBonuses.push(`The creature can cast hex as a bonus action. The creature can use a bonus action to control the movement of one creature cursed by its hex spell that it can see within 30 feet of it. The creature must succeed on a DC ${GTier + 12} Charisma saving throw or use its reaction to move up to 30 feet in a direction of the creature’s choice.`);}
		else if (RNG == 12) {GBonusNames.push(`Summon Mount (1/Day)`); GBonuses.push(`The creature magically summons a mount, which appears in an unoccupied space within 60 feet of the creature. The mount remains for 8 hours, until it or the creature dies, or until the creature dismisses it as an action. The mount uses the stat block of an elk (see the Monster Manual) with these changes: it has an Intelligence of 6, and it understands the creature's languages but can’t speak. While within 1 mile of the mount, the creature can communicate with it telepathically.`);}
		else if (RNG == 13) {GBonusNames.push(`Exploitation of the Peasants (Recharge 5-6)`); GBonuses.push(`As a bonus action, the creature targets a creature that it can see within 30 feet of it. The creature deals ${Math.ceil(GPB / 3) + 2}d10 necrotic damage to the target, and the creature gains temporary hit points equal to the damage dealt.`);}
		else if (RNG == 14) {GBonusNames.push(`Gust-Propelled Leap`); GBonuses.push(`The creature can use a bonus action to fly up to 15 feet without provoking opportunity attacks.`);}
		else if (RNG == 15) {GBonusNames.push(`Tree Stride`); GBonuses.push(`Once on its turn, the creature can use 10 feet of its movement to step magically into one living tree within its reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger.`);}
		else if (RNG == 16) {GBonusNames.push(`Radiant Defense (Recharge 5-6)`); GBonuses.push(`The creature chooses an ally it can see within 30 feet of it. The first time that creature is hit by an attack in the next minute, the attacker takes ${Math.ceil(GPB / 2) + 1}d8 radiant damage.`);}
		else if (RNG == 17) {GBonusNames.push(`Rift Beam (Recharge 5-6)`); GBonuses.push(`The creature can use an action to expend a charge to perform a Rift Beam attack. Each creature in a 5-foot wide 30-foot line must make a DC ${GTier + 12} Dexterity saving throw. On a failed save, the creature takes ${Math.ceil(GPB / 2) + 1}d6 and is pushed 5 feet away perpendicular from the line (the creature's choice of direction) and cannot take reactions until the start of their next turn. The Rift Beam also creates temporary tunnels in nonmagical walls. The tunnels last for 1 minute before closing and extend for up to 30 feet from where the rift beam originated. The tunnels are a distortion of space and do not cause structural damage.`);}
		else if (RNG == 18) {GBonusNames.push(`Sonic Scream`); GBonuses.push(`The creature takes a deep breath and screams. Any creature within 15 ft. roll a DC ${GTier + 11} Constitution saving throw. On a fail, they take ${Math.ceil(GPB / 3) + 1}d20 + 10 force damage and half as much on a success. Creatures that fail their saving throw are deafened for 1 minute. Any creature within 5 ft. is defeaned and, if they failed their saving throw, they are stunned until the end of their next turn.`);}
		else if (RNG == 19) {GBonusNames.push(`Piercing Spines (Recharge 6)`); GBonuses.push(`Two spines target the highest health creatures within 30 ft. and attempt to pin them to a surface. Targeted creatures must make a DC ${GTier + 12} Dex Save or take ${Math.ceil(GPB / 2) + 1}d8 piercing damage and become restrained (escape DC ${GTier + 12} Athletics). Creatures that pass the saving throw take half damage and are not restrained.`);}
		else if (RNG == 20) {GBonusNames.push(`Bell of Dissonance (Recharge 5-6)`); GBonuses.push(`A bell tolls. All creatures within 40 ft. of the creature must make a DC ${GTier + 12} Constitution saving throw. On a fail, they are deafened and cannot take bonus actions until the end of their next turn. If they fail the saving throw by more than 5, they are stunned for 1 round and cannot use bonus actions for 1 minute.`);}
		else if (RNG == 21) {GBonusNames.push(`Pull`); GBonuses.push(`A target within 30 ft. of creature and not in melee range must make a DC ${GTier + 12} Dexterity Saving Throw or be pulled 15 feet closer to the creature.`);}
		else if (RNG == 22) {GBonusNames.push(`Churning Advance (Recharge 6)`); GBonuses.push(`As a bonus action, the creature moves up to two times its speed, leaving a trail of difficult terrain behind it.`);}
		else if (RNG == 23) {GBonusNames.push(`Musk Spray (Recharge 5-6)`); GBonuses.push(`The creature unleashes a spray of foul musk in a 20-foot cone. Each creature in that area must succeed on a DC ${GTier + 12} Constitution saving throw or be poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 24) {GBonusNames.push(`Shield Wall (Recharge 4-6)`); GBonuses.push(`The creature adjsuts its stance, moving shields and armor to encase its body. It regains ${GPB * 6} hp, and its AC increases by ${Math.ceil(GPB / 4) + 1} until the end of its next turn.`);}
		else if (RNG == 25) {GBonusNames.push(`Elusive`); GBonuses.push(`The creature can take the Dash, Disengage, or Hide action as a bonus action on each of its turns.`);}
		else if (RNG == 26) {GBonusNames.push(`Liquid Courage (Recharge 5-6)`); GBonuses.push(`As a bonus action, the creature imbibes nearby alcohol to gain access to a hidden reservoir of audacity and grit. The creature gains ${Math.ceil(GPB / 2) + 2}d6 temporary hp for 1 minute.`);}
		else if (RNG == 27) {GBonusNames.push(`Smother`); GBonuses.push(`If the creature grapples an opponent, it extends a semi-solid gaseous tendril down the target's throat as a bonus action. The target must make a successful DC ${GTier + 12} Strength saving or it is immediately out of breath and begins suffocating. Suffocation ends if the grapple is broken or if the creature is killed.`);}
		else if (RNG == 28) {GBonusNames.push(`Rage (${GPB}/Day)`); GBonuses.push(`The creature enters a rage. They have resistance to physical damage and advantage on Strength Checks and Saves for 1 minute. If they go a full turn without being hit or attempting to attack an enemy, the rage ends.`);}
		else if (RNG == 29) {GBonusNames.push(`Silent Entry`); GBonuses.push(`As a bonus action, the creature can silently unlock a door within 10 feet of it that is held shut by a mundane lock. If a door has multiple locks, only one is unlocked per use of this trait.`);}
		else if (RNG == 30) {GBonusNames.push(`Vaporized Blood`); GBonuses.push(`A red mist surroundsthe creature in a 20-foot-radius sphere. The mist spreads around corners, and its area is heavily obscured. It moves with the creature and doesn't impede the creature's vision. The mist dissipates after 1d4 + 1 rounds.`);}
		else if (RNG == 31) {GBonusNames.push(`Drown (Recharge 5-6)`); GBonuses.push(`The creature sends blood pouring down the throat of one enemy within 30 feet, which must make a DC ${GTier + 12} Constitution saving throw. On a failure, the enemy is incapacitated until the end of its next turn as it coughs up the blood and is poisoned for 1 minute after that.`);}
		else if (RNG == 32) {GBonusNames.push(`Blood Choke Curse`); GBonuses.push(`The creature targts one enemy it can sense. The target must make a successful DC ${GTier + 12} Constitution saving throw or the target's mouth fills with blood, preventing any speech or spellcasting with verbal components for 1 minute.`);}
		else if (RNG == 33) {GBonusNames.push(`Bloody Eyes`); GBonuses.push(`The creature targts one enemy it can sense. The target must make a successful DC ${GTier + 12} Constitution saving throw or the target's eyes well up with bloody tears. The target is blinded for 1 minute.`);}
		else if (RNG == 34) {GBonusNames.push(`Heart Like Thunder`); GBonuses.push(`The creature targts one enemy it can sense. The target must make a successful DC ${GTier + 12} Constitution saving throw or the target hears only the rushing of blood and their thumping heart. They are deaf for 1 minute.`);}
		else if (RNG == 35) {GBonusNames.push(`Rupturing Arteries`); GBonuses.push(`The creature targts one enemy it can sense. The target must make a successful DC ${GTier + 12} Constitution saving throw or suffer or the victim suffers ${Math.ceil(GPB / 3) + 1}d6 slashing damage as its veins and arteries burst open. The target repeats the saving throw at the beginning of each of its turns. It takes ${Math.ceil(GPB / 3)}d6 necrotic damage if the saving throw fails, but the effect ends on a successful save.`);}
		else if (RNG == 36) {GBonusNames.push(`Dark Stare`); GBonuses.push(`The creature stares balefully at one enemy it can see within 60 feet. That enemy must succeed on a DC ${GTier + 12} Wisdom saving throw or have disadvantage on all attacks until the end of its next turn.`);}
		else if (RNG == 37) {GBonusNames.push(`Unearthly Hum (Recharge 4-6)`); GBonuses.push(`The creature targets one enemy it can see within 60 feet of it. It emits a high frequency humming noise which can only be heard by the target. The target must succeed on a DC ${GTier + 12} Wisdom saving throw or move toward the creature on its turn by the shortest and most direct route, ending its turn when it comes within 5 feet of the creature.`);}
		else if (RNG == 38) {GBonusNames.push(`Animate Chains (Recharges after a short or long rest`); GBonuses.push(`Up to four chains the creature can see within 60 feet of it magically sprout razor-edged barbs and animate under the creature's control, provided that the chains aren't being worn or carried. Each animated chain is an object with AC 20, ${GTier * 9} hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the creature uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one enemy of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the creature is incapacitated or dies.`);}
		else if (RNG == 39) {GBonusNames.push(`Quickness (Recharge 4-6)`); GBonuses.push(`The creature can take the Dodge action as a bonus action.`);}
		else if (RNG == 40) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 41) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 42) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 43) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 44) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 45) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 46) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 47) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 48) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 49) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 50) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 51) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 52) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 53) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 54) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 55) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 56) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 57) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 58) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 59) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 60) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 61) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 62) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 63) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 64) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 65) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 66) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 67) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 68) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 69) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 70) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 71) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 72) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 73) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 74) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 75) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 76) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 77) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 78) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 79) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 10) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 81) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 82) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 83) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 84) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 85) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 86) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 87) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 88) {GBonusNames.push(``); GBonuses.push(``);}
		else if (RNG == 89) {GBonusNames.push(``); GBonuses.push(``);}
}
	function EnemyBonusBtn() {
		GBonusNames.length = 0;
		GBonuses.length = 0;
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2)
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		EnemyBonus();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GBonusNames}]\n${GBonuses}`;
		GBonusNames.length = 0;
		GBonuses.length = 0;
	}

function EnemyReaction() {
	RNG = Math.floor(Math.random() * 36) + 1;
		if (RNG == 1) {GReactionNames.push("Absorb Attack"); GReactions.push(`When an enemy the creature can see hits it with a melee weapon attack, the weapon snags on a pocket of residual dimensional energy and is caught fast. The attack is negated and the weapon cannot be used until the enemy succeeds on a DC ${GTier + 11} Strength (Athletics) check as an action to pull it out of the creature. Natural weapons can have their attacks negated by this feature, but can then be retracted automatically at the end of the attacking creature’s turn.`);}
		else if (RNG == 2) {GReactionNames.push(`Dream`); GReactions.push(`When an unconscious target the creature can see within 30 feet of it regains consciousness, the creature can force the target to make a DC ${GTier + 10} Wisdom saving throw. Unless the save succeeds, the target takes (${Math.ceil(GTier * 0.8)}d10) psychic damage, and the creature regains hit points equal to the amount of damage taken.`);}
		else if (RNG == 3) {GReactionNames.push(`Absorb Attack`); GReactions.push(`When an enemy the creature can see hits it with a melee weapon attack, the weapon snags on a pocket of residual dimensional energy and is caught fast. The attack is negated and the weapon cannot be used until the enemy succeeds on a DC ${GTier + 11} Strength (Athletics) check as an action to pull it out of the creature. Natural weapons can have their attacks negated by this feature, but can then be retracted automatically at the end of the attacking creature’s turn.`);}
		else if (RNG == 4) {GReactionNames.push(`Dream Eater`); GReactions.push(`When an unconscious target the creature can see within 30 feet of it regains consciousness, the creature can force the target to make a DC ${GTier + 12} Wisdom saving throw. Unless the save succeeds, the target takes ${Math.ceil(GPB / 3) + 1}d10 psychic damage, and the creature regains hit points equal to the amount of damage taken.`);}
		else if (RNG == 5) {GReactionNames.push(`Emphatic Feedback`); GReactions.push(`When the creature takes damage from a creature it can see within 60 feet of it, the creature can force that creature to succeed on a DC ${GTier + 12} Intelligence saving throw or take ${Math.ceil(GPB / 3) + 1}d8 psychic damage.`);}
		else if (RNG == 6) {GReactionNames.push(`Psionic Counter (Recharge 5-6)`); GReactions.push(`When a spell is cast, the creature may attempt to psionically interfere with the target's mind to counterspell it.`);}
		else if (RNG == 7) {GReactionNames.push(`Parry`); GReactions.push(`The creature adds 3 to its AC against one melee attack that would hit it. To do so, the creature must see the attacker and be wielding a melee weapon.`);}
		else if (RNG == 8) {GReactionNames.push(`Protection`); GReactions.push(`When an attacker the creature can see makes an attack roll against a creature within 5 feet of the creature, the creature can impose disadvantage on the attack roll.`);}
		else if (RNG == 9) {GReactionNames.push(`Unyielding`); GReactions.push(`When the creature is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone.`);}
		else if (RNG == 10) {GReactionNames.push(`Furious Defense`); GReactions.push(`After an ally the creature can see is dealt damage by an enemy within 20 feet of the creature, the creature makes a ranged attack against that enemy.`);}
		else if (RNG == 11) {GReactionNames.push(`Guided Attack (Recharge 5-6)`); GReactions.push(`When the creature or one creature it can see within 30 feet of it makes an attack roll, the creature grants a +10 bonus to that roll.`);}
		else if (RNG == 12) {GReactionNames.push(`Feed on Death`); GReactions.push(`When a creature within 30 feet of the creature drops to 0 hit points, the creature gains ${Math.ceil(GPB / 3) + 1}d10 temporary hit points.`);}
		else if (RNG == 13) {GReactionNames.push(`Redirect Attack`); GReactions.push(`When an enemy the creature can see targets it with an attack, the creature chooses another ally within 5 feet of it. The two creatures swap places, and the chosen ally becomes the target instead.`);}
		else if (RNG == 14) {GReactionNames.push(`Spell Vitalization`); GReactions.push(`Immediately after a creature casts a spell of 1st level or higher within 120 feet of the creature, the creature can move up to twice its speed without provoking opportunity attacks. It can then make one melee attack against a target of its choice.`);}
		else if (RNG == 15) {GReactionNames.push(`Precognitive Insight (3/Day)`); GReactions.push(`When the creature or a creature it can see makes an attack roll, a saving throw, or an ability check, the creature can cause the roll to be made with advantage or disadvantage.`);}
		else if (RNG == 16) {GReactionNames.push(`Lightning Backlash (Recharge 5-6)`); GReactions.push(`When a creature hits the creature with an attack, the attacker takes lightning damage equal to half the damage dealt by the attack.`);}
		else if (RNG == 17) {GReactionNames.push(`Self-Sacrifice`); GReactions.push(`When an ally within 5 feet of the creature is hit by an attack, the creature swaps places with that ally and is hit instead.`);}
		else if (RNG == 18) {GReactionNames.push(`Encirclement (Recharge 5-6)`); GReactions.push(`When an enemy attempts to move further than 30 ft. from the creature, it can use its reaction to cast Wall of Fire in front of them.`);}
		else if (RNG == 19) {GReactionNames.push(`Defensive Reflex`); GReactions.push(`The creature can choose to take half damage from an attack that hits it. This trait cannot be used on area of effect spells.`);}
		else if (RNG == 20) {GReactionNames.push(`Redirection`); GReactions.push(`When hit with fire, lightning, or cold damage, the creature can redirect it to another creature within 10 ft. of him and that creature takes half the damage it would have.`);}
		else if (RNG == 21) {GReactionNames.push(`Cutting Words`); GReactions.push(`When an enemy rolls an attack roll, ability check, or saving throw, roll a d6 and subtract that from the roll.`);}
		else if (RNG == 22) {GReactionNames.push(`Tactical Avoidance`); GReactions.push(`After taking damage from a hit, the creature can teleport up to 10 feet away.`);}
		else if (RNG == 23) {GReactionNames.push(`Legendary Block`); GReactions.push(`If the creature is critically hit, it can reduce the damage by ${GPB * 4}, to a minimum of 1.`);}
		else if (RNG == 24) {GReactionNames.push(`Headbutt`); GReactions.push(`When a melee attack misses the creature, it can make a headbutt attack: +${GWeaponHit} to hit. (${Math.ceil(GPB / 3) + 1}d4 + ${GWeaponMod}) bludgeoning damage and the target makes a DC ${GTier + 11} Consitution saving throw or they have disadvantage on their next attack.`);}
		else if (RNG == 25) {GReactionNames.push(`Earth Counter (Recharge 5-6)`); GReactions.push(`When an enemy the creature can see within 30 feet of it casts a spell, the creature counters it. This reaction works like the counterspell spell, except the creature can only counter spells that directly affect or create earth or stone, such as stone shape, wall of stone, or move earth, and it doesn’t need to make a spellcasting ability check, regardless of the spell’s level.`);}
		else if (RNG == 26) {GReactionNames.push(`Void Body`); GReactions.push(`The creature can reduce the damage it takes from a single source to 0. Radiant damage can only be reduced by half.`);}
		else if (RNG == 27) {GReactionNames.push(`Ruff Spikes`); GReactions.push(`When an enemy tries to enter a space adjacent to the creature, the creature flares its many feelers and spikes. The enemy cannot enter a space adjacent to the creature unless it makes a successful DC ${GTier + 12} Dexterity saving throw. If the saving throw fails, the enemy can keep moving but only into spaces that aren't within 5 feet of the creature and takes ${Math.ceil(GPB / 3) + 1}d6 piercing damage from spikes.`);}
		else if (RNG == 28) {GReactionNames.push(`Void Twist`); GReactions.push(`When the creature is hit by a ranged attack it can create a small rift in space to increase its AC by 3 against that attack. If the attack misses because of this increase the creature can choose a creature within 30 feet to become the new target for that attack. Use the original attack roll to determine if the attack hits the new target.`);}
		else if (RNG == 29) {GReactionNames.push(`Time-Assisted Counterattack`); GReactions.push(`The creature’s awareness of the near future allows it to see attacks before they happen. When an enemy the creature can see attacks it while within 5 feet of it, the creature can attack the enemy before the enemy’s attack hits. The creature makes a single melee attack against the enemy. If the enemy is reduced to 0 hp as a result of the creature’s attack, the enemy’s attack doesn’t hit the creature.`);}
		else if (RNG == 30) {GReactionNames.push(`On the Hunt`); GReactions.push(`When an enemy the creature can see moves, the creature can move up to 20 feet toward the moving enemy. If the creature moves within 10 feet of that enemy, it can make one melee attack against the creature.`);}
		else if (RNG == 31) {GReactionNames.push(`Close In`); GReactions.push(`Upon taking ranged damage (not from a Saving Throw), the creature can move up to half it's speed towards the aggressor without triggering opportunity attacks.`);}
		else if (RNG == 32) {GReactionNames.push(`Shifting Sands`); GReactions.push(`The creature can shift parts of its body to avoid harm. When the creature takes damage, roll ${Math.ceil(GPB / 3)}d8. Reduce the damage it takes by the number rolled.`);}
		else if (RNG == 33) {GReactionNames.push(`Voracious`); GReactions.push(`The creature's veins glow when a spell is cast within 30 feet of it, countering the spell. This reaction works like the counterspell spell, except the creature must always make a spellcasting ability check, no matter the spell level. Its ability check for this is +${Math.ceil(GPB * 1.5)}. If it successfully counters the spell, the creature feeds on the spell, regaining hit points equal to twice the level of the spell.`);}
		else if (RNG == 34) {GReactionNames.push(`Ride the Bolt`); GReactions.push(`The creature can travel instantly along any bolt of lightning. When it is within 5 feet of a lightning effect, the creature can teleport to any unoccupied space inside or within 5 feet of that lightning effect.`);}
		else if (RNG == 35) {GReactionNames.push(`Blood Drain`); GReactions.push(`An enemy that touches the creature or hits it with a melee attack while within 5 feet of it takes ${Math.ceil(GPB / 3) + 21}d4 necrotic damage and the creature gains temporary hit points equal to that amount as it drains blood from the victim. Its temporary hp can't exceed half its maximum hp. If the creature takes radiant damage, this trait doesn't function at the start of the creature's next turn, although it retains any temporary hp it previously gained.`);}
		else if (RNG == 36) {GReactionNames.push(`Thick Skin`); GReactions.push(`When it is hit by an attack, the creature regains ${Math.ceil(GPB / 3)}d10 hit points and has resistance to that damage type until the end of its next turn.`);}
		else if (RNG == 37) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 38) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 39) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 41) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 42) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 43) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 44) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 45) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 46) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 47) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 48) {GReactionNames.push(``); GReactions.push(``);}
		else if (RNG == 49) {GReactionNames.push(``); GReactions.push(``);}
}
	function EnemyReactionBtn() {
		GReactionNames.length = 0;
		GReactions.length = 0;
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2)
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		EnemyReaction();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GReactionNames}]\n${GReactions}`;
		GReactionNames.length = 0;
		GReactions.length = 0;
	}

function EnemyRecharge() {
	let reachX = 5;
	let RNG = Math.floor(Math.random() * 3) + 1; 
	if (GSize == "Large" && RNG == 3) {reachX += 5} else if (GSize == "Huge") {reachX += 5} else if (GSize == "Gargantuan" && RNG == 3) {reachX += 15} else if (GSize == "Gargantuan" && RNG < 3) {reachX += 10} else {}
	RNG = Math.floor(Math.random() * 87) + 1;
		if (RNG <= 9) {RandomBreath(); GRechargeNames.push(GBreathName); GRecharges.push(GBreath);}
		else if (RNG == 10) {GRechargeNames.push(`Petty Tyrant (Recharge 5-6)`); GRecharges.push(`The creature shouts bloodcurdling threats at the creatures that serve it. Each medium or smaller ally of the creature within 120 feet of it that can see or hear it can use its reaction to make a melee attack.`);}
		else if (RNG == 11) {GRechargeNames.push(`Blood Boiling Hex (Recharge 6)`); GRecharges.push(`The creature places a hex on a target it can see within 60 feet of it for 1 minute. If the creature is hidden, using this ability does not reveal its location. While the target is affected by this hex, whenever it makes an attack roll, an ability check, or a saving throw, it must roll a ${Math.ceil(GTier / 4)}d4 and subtract the number rolled from the d20 roll. On any turn in which it suffers the effect of the hex, the target can attack an ally as a reaction, ignoring the effect of the hex when it does so. It can then ignore the effect of the hex until the end of its turn.`);}
		else if (RNG == 12) {GRechargeNames.push(`Chaos Cloud (Recharge 6)`); GRecharges.push(`The creature shoots forth a knot of roiling ethereal light that explodes at a point it can see within 60 feet of it. Each creature in a 20-foot-radius sphere centered on that point must succeed on a DC ${GTier + 12} Charisma saving throw or be stunned until the end of its next turn.`);}
		else if (RNG == 13) {GRechargeNames.push(`Hot Oil Spray (Recharge 5-6)`); GRecharges.push(`The creature sprays hot oil in a 15-foot cone or in a 30-foot line that is 5 feet wide. Each creature in the area must make a DC ${GTier + 12} Dexterity saving throw. On a failed save, a creature takes ${Math.ceil(GPB)}d8 fire damage and falls prone. On a successful save, a creature takes half as much damage and doesn’t fall prone. Any creature affected by the hot oil spray that takes fire damage before the oil dries (after 1 minute) takes an additional ${Math.ceil(GPB / 2) + 1}d6 fire damage, and the oil burns away. If the oil that remains in the area of the spray is lit, it burns for 1d4 rounds and deals ${Math.ceil(GPB / 3) + 1}d6 fire damage to any creature that enters the area for the first time on a turn or ends its turn there.`);}
		else if (RNG == 14) {GRechargeNames.push(`Words From Beyond (Recharge 5-6)`); GRecharges.push(`The creature remembers and repeats aloud a few words from a place he entered while walking back from the next world to this one. Each creature of his choice within 30 feet of him that can hear him must succeed on a DC ${GTier + 12} Wisdom saving throw or be stunned until the end of its next turn.`);}
		else if (RNG == 15) {GRechargeNames.push(`Unsettling Visage (Recharge 5-6)`); GRecharges.push(`Each creature within 30 feet of the changeling must succeed on a DC ${GTier + 12} Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 16) {GRechargeNames.push(`Corruption (Recharge 5-6)`); GRecharges.push(`The creature targets one creature it can see within 60 feet of it. The target must succeed on a DC ${GTier + 12} Constitution saving throw or take ${Math.ceil(GPB / 2) + 3}d6 necrotic damage and become corrupted for 1 minute. A corrupted creature’s flesh twists in alien ways. The creature has disadvantage on attack rolls, its speed is reduced by half, and if it tries to cast a spell, it must first succeed on a DC ${GTier + 12} Intelligence check or the spell fails and is wasted. The corrupted creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 17) {GRechargeNames.push(`Mind Blast (Recharge 5-6)`); GRecharges.push(`The creature magically emits psychic energy in a 30-foot cone. Each creature in that area must succeed on a DC ${GTier + 12} Intelligence saving throw or take (${Math.ceil(GPB / 2) + 2}d8 + ${GSpellMod}) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 18) {GRechargeNames.push(`Possession (Recharge 6)`); GRecharges.push(`One humanoid that the creature can see within 5 feet of it must succeed on a DC ${GTier + 12} Charisma saving throw or be possessed by the creature; the creature then disappears, and the target is incapacitated and loses control of its body. The creature now controls the body but doesn’t deprive the target of awareness. The creature can’t be targeted by any attack, spell, or other effect, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target’s statistics, but doesn’t gain access to the target’s knowledge, class features, or proficiencies. The possession lasts until the body drops to 0 hit points, the creature ends it as a bonus action, or the creature is forced out by an effect like the dispel evil and good spell. When the possession ends, the creature reappears in an unoccupied space within 5 feet of the body. The target is immune to this creature’s Possession for 24 hours after succeeding on the saving throw or after the possession ends.`);}
		else if (RNG == 19) {GRechargeNames.push(`Great Pierce (Recharge 4-6)`); GRecharges.push(`Thrust forward with a powerful blow. Each creature in a 15 ft. line much make a DC ${GTier + 12} Dexterity Saving Throw or take (${Math.ceil(GPB) + 2}d8 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 10) {GRechargeNames.push(`Whirlwind Slash (Recharge 5-6)`); GRecharges.push(`The creature spins, rolling a separate attack roll on each creature within melee range. On a hit, they take damage equal to a normal melee attack + ${GPB}.`);}
		else if (RNG == 21) {GRechargeNames.push(`Bladestorm (Recharge 5-6)`); GRecharges.push(`The creature sprays a fan of sharp objects, rolling a separate attack roll on each creature in a 180 degree cone within 25 ft. of the creature. On a hit, they take (${Math.ceil(GPB / 2) + 2}d4 + ${GWeaponMod}) piercing damage.`);}
		else if (RNG == 22) {GRechargeNames.push(`Tactician's Eye (Recharge 5-6)`); GRecharges.push(`The creature shouts an order, granting all allies within 30 ft. advantage on their next attack.`);}
		else if (RNG == 23) {GRechargeNames.push(`Gravity Bomb (Recharge 5-6)`); GRecharges.push(`The creature causes an intense gravitational pressure to cascade out in a wave. All creatures within 40 ft. must make a DC ${GTier + 12} Strength saving throw or else be pulled 20 ft. towards the creature. A creature that impacts an object or another creature takes ${Math.ceil(GPB / 2) + 1}d10 bludgeoning damage and are knocked prone if they failed the saving throw by 5 or more.`);}
		else if (RNG == 24) {GRechargeNames.push(`Deep Impact (Recharge 5-6)`); GRecharges.push(`The creature rears back and slams the ground, creating a crater 5 ft. around it, making it difficult terrain. All creatures within 10 ft. of the creature must make a DC ${GTier + 12} Dexterity saving throw or be knocked prone. Creatures within 5 ft. also take ${Math.ceil(GPB)}d6 bludgeoning damage on a failed save.`);}
		else if (RNG == 25) {GRechargeNames.push(`Static Shock (Recharge 5-6)`); GRecharges.push(`Electricity channels through the creature and every creature touching water or metal that is connected to the creature within 15 ft. or touching the creature must make a DC ${GTier + 11} Constitution saving throw. On a fail, they take ${Math.ceil(GPB)}d10 lightning damage and are paralyzed for one turn. On a successful save, they take half damage and are not paralyzed.`);}
		else if (RNG == 26) {GRechargeNames.push(`Heavy Shout (Recharge 5-6)`); GRecharges.push(`The creature lets out a powerful bellow in a 30 ft. cone in front of it, granting itself ${GPB * 4} Temporary Hit Points and advantage on its next attack. Creatures within the area must make a DC ${GTier + 12} Strength saving throw or be knocked back 10 ft.`);}
		else if (RNG == 27) {GRechargeNames.push(`Summoning Call (Recharge 5-6)`); GRecharges.push(`The creature sends out a telepathic command, summoning 1d4 (min 2) creatures that are CR ${Math.ceil(GCR / 4)} or lower.`);}
		else if (RNG == 28) {GRechargeNames.push(`Teleport (Recharge 5-6)`); GRecharges.push(`The creature teleports itself and one willing creature up to 60 ft. to a place it can see.`);}
		else if (RNG == 29) {GRechargeNames.push(`Blazing Warp (Recharge 5-6)`); GRecharges.push(`The creature teleports itself in a blaze of fire to a location up to 30 ft. away. Creatures within 5 ft. of the departure and arrival points must make a DC ${GTier + 12} Dexterity saving throw or take ${Math.ceil(GPB)}d6 fire damage.`);}
		else if (RNG == 30) {GRechargeNames.push(`Fire Flower (Recharge 5-6)`); GRecharges.push(`The creature expels two 10 ft. wide lines out 20 ft. on opposite sides of itself or four 5 ft. wide lines out 20 ft. in a cross shape from itself. The fire remains until the creature's second turn after using it. Creatures that the fire would hit initially must make a DC ${GTier + 12} Dexterity saving throw or take ${Math.ceil(GPB)}d8 fire damage. Creatures that start their turn in the fire or enter it for the first time on their turn take ${Math.ceil(GPB / 2) + 1}d6 fire damage.`);}
		else if (RNG == 31) {GRechargeNames.push(`Winter Wind (Recharge 5-6)`); GRecharges.push(`A freezing wind whirls around the creature, affecting all creatures within 10 ft. Affected creatures must make a DC ${GTier + 12} Consitution saving throw or take ${Math.ceil(GPB / 2) + 3}d8 cold damage and are frozen in place. On a successful save, creatures take half damage and are not frozen. Frozen creatures are considered restrained until they or another creature spend an action to break away the ice.`);}
		else if (RNG == 32) {GRechargeNames.push(`Mind Seed (1/Day`); GRecharges.push(`The creature touches one humanoid, which must succeed on a DC ${GTier + 12} Intelligence saving throw or be cursed. The curse lasts until it’s removed by a remove curse or greater restoration spell. The cursed target suffers 1 level of exhaustion every 24 hours, and finishing a long rest doesn’t reduce its exhaustion. If the cursed target reaches exhaustion level 6, it doesn’t die; it instead becomes a thrall under the creature’s control, and all its exhaustion is removed. Only the wish spell or the creature's death can free the thrall from this control.`);}
		else if (RNG == 33) {GRechargeNames.push(`Swarm of Eyes (Recharge 5-6)`); GRecharges.push(`The creature creates a swarm of spectral eyes that fills a 30-foot-radius sphere centered on a point it can see within 60 feet of it. Each creature in that area must make a DC ${GTier + 12} Wisdom saving throw. On a failure, a creature takes ${Math.ceil(GPB)}d8 psychic damage, and it is blinded for 1 minute. On a success, a creature takes half as much damage and isn’t blinded. A blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 34) {GRechargeNames.push(`Radiant Strike (Recharge 5-6)`); GRecharges.push(`The creature chooses a point on the ground it can see within 60 feet of it. A 10-foot-radius, 40-foot-high cylinder of bright light appears there until the start of the creature’s next turn. Each creature in the cylinder when it appears or that ends its turn there must make a DC ${GTier + 12} Constitution saving throw, taking 1${Math.ceil(GPB)}d8 radiant damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 35) {GRechargeNames.push(`Arcane Cataclysm (Recharge 6)`); GRecharges.push(`The creature conjures orbs of magical energy that plummet to the ground at three different points its can see within 60 ft. of it. Each creature in a 5-foot-radius sphere centered on each point must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB)}d8 force damage on a failed save or half as much damage on a successful one. A creature in the area of more than one arcane burst is affected only once. The area of each arcane burst then acts as an antimagic field for 2 rounds. The creature and spells it casts are unaffected by these fields.`);}
		else if (RNG == 36) {GRechargeNames.push(`Flame Strike (Recharge 5-6)`); GRecharges.push(`The creature chooses a point it can see within 60 feet of it. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on that point must make a DC ${GTier + 12} Dexterity saving throw. A creature takes ${Math.ceil(GPB / 2) + 2}d6 fire damage and ${Math.ceil(GPB / 2) + 2}d6 radiant damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 37) {GRechargeNames.push(`Incinerating Beam (Recharge 5-6)`); GRecharges.push(`The creature fires a beam of light in a 100-foot line that is 10 feet wide. Each creature in the line must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB)}d8 radiant damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this beam is disintegrated, leaving behind anything it was wearing or carrying.`);}
		else if (RNG == 38) {GRechargeNames.push(`Martial Prowess (Recharge 5-6)`); GRecharges.push(`Immediately make a melee attack. Until the start of its second turn after using this, when the creature hits a target with a melee weapon attack, the attack deals an extra ${Math.ceil(GPB / 2) + 1}d8 damage of the weapon’s type, and the target must make a DC ${GTier + 12} Strength saving throw. On a failure, the creature can push the target up to 10 feet away from it, knock the target prone, or make the target drop one item it is holding of the creature’s choice.`);}
		else if (RNG == 39) {GRechargeNames.push(`Pacifying Presence (Recharge 6)`); GRecharges.push(`Each target of the creature’s choice that the creature can see within 60 feet of it must succeed on a DC ${GTier + 12} Wisdom saving throw, or else the target drops any weapons it is holding, ends its concentration on any spells or other effects, and becomes charmed by the creature for 1 minute. The charmed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target’s saving throw is successful or the effect ends for it, the target is immune to the creature’s Pacifying Presence for the next 24 hours.`);}
		else if (RNG == 40) {GRechargeNames.push(`Detention (Recharge 5-6)`); GRecharges.push(`The creature targets a creature it can see within 60 feet of it. The target must succeed on a DC ${GTier + 12} Charisma saving throw or be magically teleported to a harmless demiplane until the end of the creature’s next turn, whereupon the target reappears in the space it left or the nearest unoccupied space if that space is occupied.`);}
		else if (RNG == 41) {GRechargeNames.push(`Warleader's Helix (Recharge 5-6)`); GRecharges.push(`Ranged Weapon Attack: +${GWeaponHit} to hit, range 60 ft., one creature. Hit: (${Math.ceil(GPB / 2) + 3}d6 + ${GWeaponMod}) radiant damage, and the creature can choose another creature it can see within 10 feet of the target. The second creature regains ${Math.ceil(GPB / 2) + 2}d6 hit points.`);}
		else if (RNG == 42) {GRechargeNames.push(`Suppress Magic (Recharge 5-6)`); GRecharges.push(`The creature targets one magic item it can see within 120 feet of it. If the magic item isn’t an artifact, its magical properties are suppressed for 10 minutes, until the creature is incapacitated or dies, or until the creature uses a bonus action to end the effect.`);}
		else if (RNG == 43) {GRechargeNames.push(`Supreme Legal Authority (Recharge 5-6)`); GRecharges.push(`The creature chooses up to three creatures it can see within 90 feet of it. Each target must succeed on a DC ${GTier + 12} Intelligence saving throw or the creature chooses an action for that target: Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, or Use an Object. The affected target can’t take that action for 1 minute. At the end of each of the target’s turns, it can end the effect on itself with a successful DC ${GTier + 12} Intelligence saving throw. A target that succeeds on the saving throw becomes immune to the creature’s Supreme Legal Authority for 24 hours.`);}
		else if (RNG == 44) {GRechargeNames.push(`Captivating Presence (Recharge 5-6)`); GRecharges.push(`Each creature within 120 feet of the creature must succeed on a DC ${GTier + 12} Wisdom saving throw or be charmed by the creature for 1 hour. While charmed in this way, a creature’s speed is 0. If the charmed creature takes damage, it can repeat the saving throw, ending the effect on itself on a success. A target that succeeds on the saving throw is immune to the Captivating Presence of all creature for the next 24 hours.`);}
		else if (RNG == 45) {GRechargeNames.push(`Mind Siphon (Recharge 5-6)`); GRecharges.push(`The creature targets an enemy it can see within 30 feet of it. The target must make a DC ${GTier + 12} Intelligence saving throw, with disadvantage if the creature has previously consumed the target’s blood. On a failed save, the target takes ${Math.ceil(GPB)}d6 psychic damage, and the creature discerns the target’s surface emotions and thoughts. On a successful save, the target takes half as much damage, and the creature discerns the target’s general emotional state but not its thoughts.`);}
		else if (RNG == 46) {GRechargeNames.push(`Lashing Shadows (Recharge 5-6)`); GRecharges.push(`Each creature within 60 feet of the creature, must succeed on a DC ${GTier + 12} Dexterity saving throw or take ${Math.ceil(GPB)}d6 necrotic damage.`);}
		else if (RNG == 47) {GRechargeNames.push(`Wrath of Nature's Lord (Recharge 5-6)`); GRecharges.push(`The creature conjures a momentary whirl of branches and vines at a point it can see within 60 feet of it. Each creature in a 30-foot cube on that point must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB / 2) + 2}d6 bludgeoning damage and ${Math.ceil(GPB)}d8 slashing damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 48) {GRechargeNames.push(`Deluge (Recharge 5-6)`); GRecharges.push(`The creature conjures a wave of water that crashes down on an area within 120 feet of it. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw. On a failed save, a creature takes ${Math.ceil(GPB)}d6 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn’t knocked prone. The water spreads out across the ground, extinguishing unprotected flames it comes in contact with, and then vanishes.`);}
		else if (RNG == 49) {GRechargeNames.push(`Godspeed (Recharge 6)`); GRecharges.push(`For 3 rounds the creature's speed doubles and his movement does not provoke opportunity attacks. All attack damage is increased by ${Math.ceil(GPB / 2) + 1}d6.`);}
		else if (RNG == 50) {GRechargeNames.push(`Charm (Recharge 5-6)`); GRecharges.push(`The creature targets one humanoid it can see within 30 ft. of it. If the target can see the creature, the target must succeed on a DC ${GTier + 12} Wisdom saving throw against this magic or be charmed by the creature. The charmed target regards the creature as a trusted friend to be heeded and protected. Although the target isn't under the creature's control, it takes the creature's requests or actions in the most favorable way it can. Each time the creature or the creature's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the creature is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.`);}
		else if (RNG == 51) {GRechargeNames.push(`Gliding Stab (Recharge 5-6)`); GRecharges.push(`The creature glides up to 15 ft to make an attack. The glide itself does not provoke opportunity attacks but does require movement. The attack rolls a hit against any creature in the line of movement as well as any creature that would be hit by the extended weapon. Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB)}d10 + ${GWeaponMod}) piercing damage, this attack is considered magical for the purposes of overcoming resistance. Hit creatures within the line are move to within 5 ft. of the creature's final location.`);}
		else if (RNG == 52) {GRechargeNames.push(`Jousting Swing (Recharge 5-6)`); GRecharges.push(`The creature charges up to 30 ft. and makes an upwards attack. The target and any creature in the path must make a DC 15 Dexterity saving throw. On a fail, creatures in the path take 12 (3d8 + 5) bludgeoning damage and be knocked 5 ft. to the side. Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one creature. Hit: (${Math.ceil(GPB)}d8 + ${GWeaponMod}) bludgeoning damage and, if the target failed their saving throw, they are knocked 30 ft. into the air, potentially causing falling damage.`);}
		else if (RNG == 53) {GRechargeNames.push(`Frozen Exhale (Recharge 5-6)`); GRecharges.push(`The creature exhales a blast of freezing wind in a 30-foot cone. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB / 2) + 3}d6 cold damage on a failed save, or half as much damage on a successful one. A creature that failed the save has their movement speed reduced by 10 ft. for their next turn.`);}
		else if (RNG == 54) {GRechargeNames.push(`Big Bang Impact (Recharge 6)`); GRecharges.push(`The creature rears back and powers up. Until the start of its next turn, its AC is reduced by 4, attacks against it have advantage, physical damage it takes is reduced by ${GPB * 2}, and it has advantage on saving throws that would result in it being stunned, paralyzed, or incapacitated. On its following turn, the creature punches the ground, creating a crater with a 20 ft. radius. The crater is considered difficult terrain and requires an Athletics/Acrobatics check of DC 15 to climb out of. A creature directly impacted by the attack takes (${Math.ceil(GPB) + 2}d6 + ${GWeaponMod * 3}) bludgeoning damage. Any creature within the radius of the crater on impact must make a DC 14 Strength Saving Throw or take (${Math.ceil(GPB + 2)}d6 + ${GWeaponMod * 2}) force damage and is hurled 20 ft. away. On a successul save, they take half damage and are pushed half the distance.`);}
		else if (RNG == 55) {GRechargeNames.push(`Chilling Gaze (Recharge 5-6)`); GRecharges.push(`The creature targets one creature it can see within 30 feet of it. If the target can see the creature, the target must succeed on a DC ${GTier + 12} Constitution saving throw against this magic or take ${Math.ceil(GPB)}d6 cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this creature's gaze for 1 hour.`);}
		else if (RNG == 56) {GRechargeNames.push(`Sandslash (Recharge 5-6)`); GRecharges.push(`As an action, the creature conjures a vortex of sand that surrounds it. All creatures within 10 feet of the creature take ${Math.ceil(GPB)}d6 slashing damage, or half damage with a successful DC ${GTier + 12} Dexterity saving throw.`);}
		else if (RNG == 57) {GRechargeNames.push(`Frightful Presence (Recharge 5-6)`); GRecharges.push(`Each enemy of the creature's choice that is within 90 feet of the creature and aware of it must succeed on a DC ${GTier + 12} Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If an enemy's saving throw is successful or the effect ends for it, the enemy is immune to the creature's Frightful Presence for the next 24 hours.`);}
		else if (RNG == 58) {GRechargeNames.push(`Whirlwind (Recharge 5-6)`); GRecharges.push(`Each enemy within 5 ft. of the creature's space must make a DC ${GTier + 12} Strength saving throw. On a failure, a target takes (${Math.ceil(GPB / 3) + 1}d8 + ${GWeaponMod}) bludgeoning damage and is flung up 20 feet away from the creature in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes ${Math.ceil(GPB / 2)}d6 bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC ${GTier + 12} Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.`);}
		else if (RNG == 59) {GRechargeNames.push(`Dust Devil (Recharge 5-6)`); GRecharges.push(`A 5-foot-radius, 30-foot-tall cylinder of sand magically forms on a point the creature can see within 120 feet of it. The dust devil lasts as long as the creature maintains concentration (as if a spell). Any creature that enters the dust devil must succeed on a DC ${GTier + 12} Strength saving throw or be restrained by it; any number of creatures may be restrained this way. At the start of a restrained creature's turn, it takes ${Math.ceil(GPB / 2) + 2}d4 slashing damage plus ${Math.ceil(GPB / 2) + 2}d4 necrotic damage. The creature can move the dust devil up to 60 feet as an action; restrained creatures move with it. The dust devil ends if the creature loses sight of it. A creature can use its action to free a creature restrained by the dust devil, including itself, by making a DC ${GTier + 12} Strength check. If the check succeeds, it moves to the nearest space outside the dust devil.`);}
		else if (RNG == 60) {GRechargeNames.push(`Lightning Kiss (Recharge 5-6)`); GRecharges.push(`One target within 50 feet must make a DC ${GTier + 12} Dexterity saving throw. It takes ${Math.ceil(GPB)}d6 lightning damage on a failed save, or half as much damage on a successful one. If a lightning storm is occuring, the save is made with disadvantage.`);}
		else if (RNG == 61) {GRechargeNames.push(`Cloud of Needles (Recharge 5-6)`); GRecharges.push(`The creature fires a cloud of sharp needles at all creatures within 30 feet of it. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB)}d8 piercing damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 62) {GRechargeNames.push(`Reality Bomb (Recharge 5-6)`); GRecharges.push(`The creature can summon forth a tiny rune of law and throw it as a weapon. Any creature within 30 feet of the square where the reality bomb lands takes ${Math.ceil(GPB )}d6 force damage and is stunned until the start of the creature's next turn. A target that makes a successful DC ${GTier + 12} Dexterity saving throw takes half damage and isn't stunned.`);}
		else if (RNG == 63) {GRechargeNames.push(`Charged Melody (Recharge 5-6)`); GRecharges.push(`The creature sings a beautiful melody. Each creature within 30 feet of it that can hear the melody must succeed on a DC ${GTier + 12} Charisma saving throw or take ${Math.ceil(GPB)}d6 lightning damage the next time it moves.`);}
		else if (RNG == 64) {GRechargeNames.push(`Cone of Negation (Recharge 5-6)`); GRecharges.push(`The creature can project a cone of null energy. Targets inside the 30 foot cone take ${Math.ceil(GPB)}d8 force damage and suffer the effect of a dispel magic spell. A successful DC ${GTier + 12} Dexterity saving throw reduces the damage to half and negates the dispel magic effect on that target.`);}
		else if (RNG == 65) {GRechargeNames.push(`Ember Wreath (Recharge 6)`); GRecharges.push(`As a bonus action, the creature wreathes its body in searing blue and white embers. The embers last for 1 minute or until the creature uses a breath weapon. An enemy that enters or starts its turn in a space within 10 feet of the creature must make a DC ${GTier + 13} Constitution saving throw, taking ${Math.ceil(GPB)}d6 fire damage on a failed save, or half as much damage on a successful one. If an enemy fails the saving throw by 5 or more, it suffers one level of exhaustion as the water is sapped from its body by the unrelenting heat.`);}
		else if (RNG == 66) {GRechargeNames.push(`Call the Dead (Recharge 4-6)`); GRecharges.push(`The creature animates one humanoid corpse within 60 feet. This works like the animate dead spell, except it only creates zombies. The creature can control up to twenty zombies at one time.`);}
		else if (RNG == 67) {GRechargeNames.push(`Eldritch Singularity (Recharge 6)`); GRecharges.push(`The creature opens a momentary rupture in the eldritch source that fuels its words of power. This rupture appears at a spot designated by the creature within 100 feet. Any enemy within 60 feet of the spot must make a DC ${GTier + 13} Constitution saving throw. On a failure, the enemy takes ${Math.ceil(GPB)}d6 force damage, falls prone, and is pulled 1d6 x 10 feet toward the eldritch singularity, taking an additional ${Math.ceil(GPB / 3)}d6 bludgeoning damage per 10 feet they were dragged. If the saving throw succeeds, the target takes half as much force damage and isn't knocked prone or pulled. The spot where the rupture occurs becomes the center of a 60-foot-radius antimagic field until the end of the creature's next turn. The creature's spells are not affected by this antimagic field.`);}
		else if (RNG == 68) {GRechargeNames.push(`Fallen Glory (Recharge 5-6)`); GRecharges.push(`All enemies within 50 feet of the creature and in its line of sight take ${Math.ceil(GPB)}d12 radiant damage and are knocked prone, or take half damage and aren't knocked prone with a successful DC ${GTier + 12} Strength saving throw.`);}
		else if (RNG == 69) {GRechargeNames.push(`Ethereal Lure (Recharge 4-6)`); GRecharges.push(`The creature selects a spot within 20 feet of itself; that spot glows with a faint, blue light until the start of the worm's next turn. All other enemies that can see the light at the start of their turn must make a successful DC ${GTier + 12} Wisdom saving throw or be charmed until the start of their next turn. An enemy charmed this way must Dash toward the light by the most direct route, automatically fails saving throws against being grappled, and treats the creature as invisible.`);}
		else if (RNG == 70) {GRechargeNames.push(`Acid Spray (Recharge 5-6)`); GRecharges.push(`The creature spits acid in a line that is 30 ft. long and 5 ft. wide. Each enemy in that line must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB)}d6 acid damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 71) {GRechargeNames.push(`Fiery Sands (Recharge 5-6)`); GRecharges.push(`Sand whips violently around the creature. Each enemy within 10 feet of the creature must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB)}d6 slashing damage and ${Math.ceil(GPB)}d6 fire damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 72) {GRechargeNames.push(`Ash Storm (Recharge 5-6)`); GRecharges.push(`The creature furiously beats its wings, throwing clinging ash into a 30-foot cone. Each enemy in the area must make a DC ${GTier + 12} Dexterity saving throw. On a failure, a enemy takes ${Math.ceil(GPB)}d6 necrotic damage and is blinded until the end of its next turn. On a success, a enemy takes half the damage and isn’t blinded.`);}
		else if (RNG == 73) {GRechargeNames.push(`Scream (Recharge 5-6)`); GRecharges.push(`The creature shrieks thunderously in a 30-foot cone. Each enemy in that area must make a DC ${GTier + 12} Dexterity saving throw. On a failure, an enemy takes ${Math.ceil(GPB / 2) + 3}d8 thunder damage and is deafened for 1 hour. On a success, an enemy takes half as much damage and isn’t deafened.`);}
		else if (RNG == 74) {GRechargeNames.push(`Acid Wave (Recharge 5-6)`); GRecharges.push(`The creature rises up and crashes down, releasing a 20-foot radius wave of acidic ooze. Each enemy in the area must make a DC ${GTier + 13} Dexterity saving throw. On a failure, an enemy takes ${Math.ceil(GPB)}d8 acid damage and is knocked prone. On a success, an enemy takes half the damage and isn't knocked prone.`);}
		else if (RNG == 75) {GRechargeNames.push(`Consult the Psyche (Recharge 5-6)`); GRecharges.push(`Each enemy within 60 feet who can see the creature must succeed on a DC ${GTier + 13} Constitution saving throw or be blinded until the end of its next turn. Each enemy of the creature's choice within 60 feet that speaks a language must succeed on a DC ${GTier + 12} Charisma saving throw or be stunned until the end of its next turn as the creature telepathically utters a short expression that is particularly meaningful to that enemy.`);}
		else if (RNG == 76) {GRechargeNames.push(`Animated Bones (Recharge 5-6)`); GRecharges.push(`The creature creates a skeleton out of a pile of bones or a the corpse of a Large or smaller creature within 10 feet of it. The skeleton is under the control of the creature, obeying the creature’s mental commands, and uses the statistics of a CR 1 or lower skeleton of your choice. The creature can control up to ${GTier + 1} skeletons at one time. If the creature creates a skeleton while it already has ${GTier + 1} under its control, the oldest skeleton crumbles to dust.`);}
		else if (RNG == 77) {GRechargeNames.push(`Temporal Strike (Recharge 5-6)`); GRecharges.push(`Channel your weapon as a bonus action. This lasts for 3 rounds. When the creature strikes a target with a melee attack, in addition to taking normal damage, the target must succeed on a DC ${GTier + 13} Constitution saving throw or instantly age 3d6 years. A creature that ages this way has disadvantage on attack rolls, ability checks, and saving throws based on Strength, Dexterity, and Constitution until the aging is reversed. A creature that ages beyond its lifespan dies immediately. The aging reverses automatically after 24 hours, or it can be reversed magically by greater restoration or comparable magic. A creature that succeeds on the save is immune to the temporal strike effect for 24 hours.`);}
		else if (RNG == 78) {GRechargeNames.push(`Blood Bray (Recharge 5-6)`); GRecharges.push(`The creature unleashes an otherworldly braying that causes the internal organs of nearby enemies to twist and rupture. Each enemy within 20 feet of the creature that can hear it must make a DC ${GTier + 12} Constitution saving throw. On a failure, the enemy takes ${Math.ceil(GPB)}d8 necrotic damage and is stunned until the end of its next turn as it doubles over in agony. On a success, the enemy takes half the damage and isn’t stunned. The bray doesn’t affect creatures without internal organs, such as constructs, elementals, and oozes.`);}
		else if (RNG == 79) {GRechargeNames.push(`Leadership (Recharges after a short or long rest)`); GRecharges.push(`For 1 minute, the creature can utter a special command or warning whenever an ally that it can see within 30 feet of it makes an attack roll or a saving throw. The ally can add a d6 to its roll provided it can hear and understand the bandit lord. An ally can benefit from only one Leadership die at a time. This effect ends if the creature is incapacitated.`);}
		else if (RNG == 80) {GRechargeNames.push(`Crier's Lament (1/Day)`); GRecharges.push(`The creature unleashes a devastating peal of anguish and rage in a 30-foot cone. Each enemy in the area must make a DC ${GTier + 10} Charisma saving throw. On a failure, an enemy drops to 0 hp. On a success, an enemy takes ${Math.ceil(GPB)}d6 psychic damage and is frightened for 1 minute. A frightened enemy can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 81) {GRechargeNames.push(`Steal Joy (Recharge 5-6)`); GRecharges.push(`Each enemy of the creature’s choice that is within 20 feet of the creature and aware of it must succeed on a DC ${GTier + 12} Wisdom saving throw or its Charisma score is reduced by 1d4. An enemy that has its Charisma reduced to 0 ends its life at the earliest opportunity. Otherwise, the Charisma reduction lasts until the target finishes a long rest.`);}
		else if (RNG == 82) {GRechargeNames.push(`Blood Magic (Recharge 5-6)`); GRecharges.push(`The creature causes 10-foot-high blood spikes to burst from the ground within 15 feet of it. Each enemy in the area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB)}d12 piercing damage plus ${Math.ceil(GPB)}d6 cold damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 83) {GRechargeNames.push(`Sonic Blast (Recharge 5-6)`); GRecharges.push(`The creature can emit a howling thunderclap that deafens and damages those nearby. Enemies within 15 feet who fail a DC ${GTier + 12} Constitution saving throw take ${Math.ceil(GPB)}d8 thunder damage and are permanently deafened. Those succeeding on the saving throw take half damage and are not deafened. The deafness can be cured with lesser restoration.`);}
		else if (RNG == 84) {GRechargeNames.push(`Mock (Recharge 5-6)`); GRecharges.push(`The creature mocks the futile efforts of up to three enemies it can see within 30 feet of it that aren’t undead or constructs. Each target must make a DC ${GTier + 12} Charisma saving throw, taking ${Math.ceil(GPB)}d4 psychic damage on a failed save, or half as much damage on a successful one. A creature that fails this has disadvantage on their next saving throw.`);}
		else if (RNG == 85) {GRechargeNames.push(`Call Potion (Recharge 5-6)`); GRecharges.push(`The creature releases a hungry screech, magically reaching out to nearby potions. All potions within 10 feet of the creature magically move toward the creature by rolling out of backpacks, hopping off of belts, unburying themselves, etc. A creature wearing or carrying a potion must succeed on a DC ${GTier + 12} Dexterity saving throw or its potion moves to within 5 feet of the creature. The target must make a separate saving throw for each potion it is attempting to keep in its possession.`);}
		else if (RNG == 86) {GRechargeNames.push(`Light Beam (Recharge 5-6)`); GRecharges.push(`The creature shoots a 30-foot-long, 5-foot-wide line of scintillating light from the garnet on its forehead. Each enemy in that line must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB)}d6 radiant damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 87) {GRechargeNames.push(`Quake (Recharge 5-6)`); GRecharges.push(`The creature slams its fists into the ground, shaking the terrain within 60 feet of it. Each enemy standing on the ground in that area must make a DC ${GTier + 12} Dexterity saving throw. On a failure, the enemy takes ${Math.ceil(GPB)}d8 bludgeoning damage and is knocked prone. On a success, the enemy takes half the damage and isn’t knocked prone.`);}
		else if (RNG == 88) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 89) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 90) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 91) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 92) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 93) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 94) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 95) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 96) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 97) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 98) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
		else if (RNG == 99) {GRechargeNames.push(` (Recharge 5-6)`); GRecharges.push(``);}
	}

	function EnemyRechargeBtn() {
		GRechargeNames.length = 0;
		GRecharges.length = 0;
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2)
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		EnemyRecharge();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GRechargeNames}]\n${GRecharges}`;
		GRechargeNames.length = 0;
		GRecharges.length = 0;
	}

function RandomBreath() {
	RNG = Math.floor(Math.random() * 24) + 1;
	TypeX = Math.floor(Math.random() * 2) + 1;
		if (TypeX == 1) {AreaX = `60-foot cone`;}
		else if (TypeX == 2) {AreaX = `120 ft. line that is 5 ft wide`;}
	if (RNG == 1) {GBreathName = `Cerebral Breath (Recharge 5-6)`; GBreath = `The creature exhales psionic waves in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB / 2) + 3}d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, the creature has disadvantage on their next d20 roll.`;}
	else if (RNG == 2) {GBreathName = `Fire Breath (Recharge 5-6)`; GBreath = `The creature exhales fire in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 fire damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 3) {GBreathName = `Cold Breath (Recharge 5-6)`; GBreath = `The creature exhales cold in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 cold damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 4) {GBreathName = `Lightning Breath (Recharge 5-6)`; GBreath = `The creature exhales lightning in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 lightning damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 5) {GBreathName = `Acid Breath (Recharge 5-6)`; GBreath = `The creature exhales acid in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 acid damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 6) {GBreathName = `Necrotic Breath (Recharge 5-6)`; GBreath = `The creature exhales necrotic gas in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 necrotic damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 7) {GBreathName = `Radiant Breath (Recharge 5-6)`; GBreath = `The creature exhales radiant heat in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 radiant damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 8) {GBreathName = `Force Breath (Recharge 5-6)`; GBreath = `The creature exhales force in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Strength saving throw, taking ${Math.ceil(GPB) + 4}d8 force damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 9) {GBreathName = `Thunder Breath (Recharge 5-6)`; GBreath = `The creature exhales thunderous sound in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 4}d8 thunder damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 10) {GBreathName = `Poison Breath (Recharge 5-6)`; GBreath = `The creature exhales poison in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB) + 4}d8 poison damage and be poisoned for 1 minute on a failed save, or half as much damage on a successful one and is not poisoned.`;}
	else if (RNG == 11) {GBreathName = `Breath of Undeath (Recharge 5-6)`; GBreath = `The creature exhales poisonous gas in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Constitution saving throw. On a failed save, a creature takes ${Math.ceil(GPB / 2) + 2}d6 poison damage and is poisoned for 1 minute. While poisoned in this way, the creature can’t regain hit points. On a successful save, the creature takes half as much damage and isn’t poisoned. A humanoid reduced to 0 hit points by this damage dies and rises at the start of the creature’s next turn as a zombie. The zombie acts immediately after the creature in the initiative count and is permanently under its command, following its verbal orders.`;}
	else if (RNG == 12) {GBreathName = `Sleep Breath (Recharge 5-6)`; GBreath = `The creature exhales sleep gas in a ${AreaX}. Each creature in that area must succeed on a DC ${GTier + 12} Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.`;}
	else if (RNG == 13) {GBreathName = `Repulsion Breath (Recharge 5-6)`; GBreath = `The creature exhales repulsion energy in a ${AreaX}. Each creature in that area must succeed on a DC ${GTier + 12} Strength saving throw. On a failed save, the creature is pushed 60 feet away from the creature.`;}
	else if (RNG == 14) {GBreathName = `Slowing Breath (Recharge 5-6)`; GBreath = `The creature exhales gas in a ${AreaX}. Each creature in that area must succeed on a DC ${GTier + 12} Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.`;}
	else if (RNG == 15) {GBreathName = `Weakening Breath (Recharge 5-6)`; GBreath = `The creature exhales gas in a ${AreaX}. Each creature in that area must succeed on a DC ${GTier + 12} Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`;}
	else if (RNG == 16) {GBreathName = `Flaring Breath (Recharge 5-6)`; GBreath = `The creature emits a flash of dazzling light from its maw in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Constitution saving throw or be blinded. Undead within the area of effect must also make a DC 19 Wisdom saving throw or be turned for 1 minute. Undead of CR 2 or lower who fail the saving throw are instantly destroyed.`;}
	else if (RNG == 17) {GBreathName = `Metallic Breath (Recharge 5-6)`; GBreath = `The creature can spit a ${AreaX} of metallic shards. Targets in its path take ${Math.ceil(GPB) + 4}d6 magical slashing damage and lose another ${Math.ceil(GPB * 1.5)} hit points from bleeding at the start of their turns for 6 rounds; slashing and bleed damage are halved by a successful DC ${GTier + 12} Dexterity saving throw. Only magical healing stops the bleeding before 6 rounds. The shards dissolve into wisps of smoke 1 round after the breath weapon's use.`;}
	else if (RNG == 18) {GBreathName = `Black Ice Spray (Recharge 5-6)`; GBreath = `The creature sprays slivers of ice in a line ${AreaX}. All creatures in the line take ${Math.ceil(GPB) + 4}d12 necrotic damage and are blinded; a successful DC ${GTier + 12} Constitution saving throw prevents the blindness. A blinded creature repeats the saving throw at the end of its turn, ending the effect on itself with a successful save.`;}
	else if (RNG == 19) {GBreathName = `Tidal Breath (Recharge 5-6)`; GBreath = `The creature exhales a crushing wave of frigid seawater in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw. On a failure, the target takes ${Math.ceil(GPB / 3) + 1}d10 bludgeoning damage and ${Math.ceil(GPB / 3) + 1}d10 cold damage, and is pushed 30 feet away from the creature and knocked prone. On a successful save the creature takes half as much damage and isn't pushed or knocked prone.`;}
	else if (RNG == 20) {GBreathName = `Paralyzing Breath (Recharge 5-6)`; GBreath = `The creature exhales paralyzing gas in a ${AreaX}. Each creature in that area must succeed on a DC ${GTier + 11} Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns or each time it takes damage, ending the effect on itself on a success.`;}
	else if (RNG == 21) {GBreathName = `Gravitic Breath (Recharge 5-6)`; GBreath = `The creature exhales a 60-foot cube of powerful localized gravity, originating from the creature. Falling damage in the area increases to 1d10 per 10 feet fallen. When a creature starts its turn within the area or enters it for the first time in a turn, including when the creature creates the field, must make a DC 14 Dexterity saving throw. On a failure the creature is restrained. On a success the creature's speed is halved as long as it remains in the field. A restrained creature repeats the saving throw at the end of its turn. The field persists until the creature's breath recharges, and it can't use gravitic breath twice consecutively.`;}
	else if (RNG == 22) {GBreathName = `Stellar Flare Breath (Recharge 5-6)`; GBreath = `The creature exhales star fire in a ${AreaX}. Each creature in that area must make a DC ${GTier + 12} Dexterity saving throw, taking ${Math.ceil(GPB) + 2}d8 fire damage and ${Math.ceil(GPB) + 2}d8 radiant damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 23) {GBreathName = `Ash Breath (Recharge 5-6)`; GBreath = `The creature spews a ${AreaX} of blistering hot, choking ash. Any targets in the path of this spray takes ${Math.ceil(GPB) + 4}d6 fire damage and become poisoned for one minute; a successful DC ${GTier + 12} Dexterity saving throw reduces damage by half and negates the poisoning. A poisoned enemy repeats the saving throw at the end of each of its turns, ending the effect on itself with a successful save.`;}
	else if (RNG == 24) {GBreathName = `Breath of the Gales (Recharge 5-6)`; GBreath = `The creature exhales a blast of wind in a 60-foot cone. Each creature in that cone takes ${Math.ceil(GPB) + 4}d10 bludgeoning damage and is pushed 25 feet away from the creature and knocked prone; a successful DC ${GTier + 12} Strength saving throw halves the damage and prevents being pushed (but not being knocked prone). All flames in the cone are extinguished.`;}
	else if (RNG == 25) {GBreathName = ` (Recharge 5-6)`; GBreath = ``;}
	else if (RNG == 26) {GBreathName = ` (Recharge 5-6)`; GBreath = ``;}
	else if (RNG == 27) {GBreathName = ` (Recharge 5-6)`; GBreath = ``;}
	else if (RNG == 28) {GBreathName = ` (Recharge 5-6)`; GBreath = ``;}
	else if (RNG == 29) {GBreathName = ` (Recharge 5-6)`; GBreath = ``;}
	else if (RNG == 30) {GBreathName = ` (Recharge 5-6)`; GBreath = ``;}
}

function RandomBreathBtn() {
	GBreathName = `Undefined`;
	GBreath = `Undefined`;
	GetTier();
	GMagic = "Not Applicable";
	GWeaponMod = Math.floor((GPB+10) / 2)
	GSpellMod = Math.floor((GPB+10) / 2);
	GWeaponHit = GWeaponMod + GPB;
	GSpellHit = GSpellMod + GPB;
	RandomBreath();
	document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GBreathName}]\n${GBreath}`;
	GBreathName = ``;
	GBreath = ``;
}

function RandomRay() {
	RNG = Math.floor(Math.random() * 17) + 1;
	if (RNG == 1 || RNG == 2) {GRay = `• Charm Ray. The targeted enemy must succeed on a DC ${GTier + 12} Wisdom saving throw or be charmed by the creature for 1 hour, or until the creature harms the enemy.`;}
	else if (RNG == 3 || RNG == 4) {GRay = `• Paralyzing Ray. The targeted enemy must succeed on a DC ${GTier + 12} Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`;}
	else if (RNG == 5 || RNG == 6) {GRay = `• Fear Ray. The targeted enemy must succeed on a DC ${GTier + 12} Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`;}
	else if (RNG == 7 || RNG == 8) {GRay = `• Slowing Ray. The targeted enemy must succeed on a DC ${GTier + 12} Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the enemy can't take reactions, and it can take either an action or a bonus action on its turn, not both. The enemy can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`;}
	else if (RNG == 9 || RNG == 10) {GRay = `• Enervation Ray. The targeted enemy must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB / 2) + 1}d8 necrotic damage on a failed save, or half as much damage on a successful one.`;}
	else if (RNG == 11 || RNG == 12) { GRay = `• Telekinetic Ray. If the target is an enemy, it must succeed on a DC ${GTier + 12} Strength saving throw or the creature moves it up to 30 ft. in any direction. It is restrained by the ray's telekinetic grip until the start of the creature's next turn or until the creature is incapacitated. If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 ft. in any direction. The creature can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.`;}
	else if (RNG == 13 || RNG == 14) {GRay = `• Sleep Ray. The targeted enemy must succeed on a DC ${GTier + 12} Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another enemy takes an action to wake it. This ray has no effect on constructs and undead.`;}
	else if (RNG == 15) {GRay = `• Petrification Ray. The targeted enemy must make a DC ${GTier + 12} Dexterity saving throw. On a failed save, the enemy begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the enemy is petrified until freed by the greater restoration spell or other magic.`;}
	else if (RNG == 16) {GRay = `• Disintegration Ray. If the target is an enemy, it must succeed on a DC ${GTier + 12} Dexterity saving throw or take ${Math.ceil(GPB / 2) + 3}d8 force damage. If this damage reduces the enemy to 0 hit points, its body becomes a pile of fine gray dust. If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10•foot cube of it.`;}
	else if (RNG == 17) {GRay = `• Death Ray. The targeted enemy must succeed on a DC ${GTier + 12} Dexterity saving throw or take ${Math.ceil(GPB / 2) + 3}d10 necrotic damage. The target dies if the ray reduces it to 0 hit points.`;}
}

function EnemyLegendary() {
	RNG = Math.floor(Math.random() * 53) + 1;
		if (RNG == 1) {GLegendaryNames.push(`Weapon Attack`); GLegendaries.push(`Make one attack with a weapon.`);}
		else if (RNG == 2) {if (GMagic == "Martial") {EnemyLegendary();} else {GLegendaryNames.push(`Spellcasting (Costs 2 Actions)`); GLegendaries.push(`Cast a Level ${Math.ceil(GTier / 2 + 2)} or lower spell.`);}}
		else if (RNG == 3) {GLegendaryNames.push(`Teleport`); GLegendaries.push(`The creature teleports up to 30 ft.`);}
		else if (RNG == 4) {if (GLegendaryUses <= 2) {EnemyLegendary();} else {GLegendaryNames.push(`Call the Void (Costs 3 Actions)`); GLegendaries.push(`Each creature that is not a construct or undead within 20 feet of the creature must make a DC ${GTier + 14} Constitution saving throw against the creature’s attempt to unmake life, taking ${Math.ceil(GPB) + 1}d6 necrotic damage on a failed save, or half as much damage on a successful one. The creature then regains a number of hit points equal to half the total damage taken by all affected creatures.`);}}
		else if (RNG == 5) {GLegendaryNames.push(`Detect`); GLegendaries.push(`The creature makes a Wisdom (Perception) check.`);}
		else if (RNG == 6) {if (GSpeedFly <= 0) {EnemyLegendary();} else {GLegendaryNames.push(`Wing Attack (Costs 2 Actions)`); GLegendaries.push(`The creature beats its wings. Each target within 10 feet of the creature must succeed on a DC ${GTier + 13} Dexterity saving throw or take (${Math.ceil(GPB)}d6 + ${GStrMod}) bludgeoning damage and be knocked prone.`);}}
		else if (RNG == 7) {GLegendaryNames.push(`Implant Fear (Costs 2 Actions)`); GLegendaries.push(`The creature targets a creature it can see within 30 feet of it. The target must succeed on a DC ${GTier + 14} Wisdom saving throw or take ${Math.ceil(GPB / 2) + 2}d8 psychic damage and immediately use its reaction, if available, to move as far as its speed allows away from the creature.`);}
		else if (RNG == 8) {if (GLegendaryUses <= 2) {EnemyLegendary();} else {GLegendaryNames.push(`Rend Reality (3 Actions)`); GLegendaries.push(`The creature rips at the bonds of reality in its immediate area. Each creature within 10 feet of the creature must succeed on a DC ${GTier + 14} Constitution saving throw or take ${Math.ceil(GPB) + 1}d12 force damage and gain one level of exhaustion.`);}}
		else if (RNG == 9) {GLegendaryNames.push(`Spawn Aberration (Costs 2 Actions)`); GLegendaries.push(`Uses per day is equal to Proficiency Bonus. The creature regurgitates an intellect devourer in an unoccupied space within 5 feet of it. The intellect devourer is under the creature’s control and acts immediately after the creature in the initiative order.`);}
		else if (RNG == 10) {if (GLegendaryUses <= 2) {EnemyLegendary();} else {GLegendaryNames.push(`Mind Blast (Costs 3 Actions)`); GLegendaries.push(`The creature magically emits psychic energy in a 30-foot cone. Each creature in that area must succeed on a DC ${GTier + 13} Intelligence saving throw or take (${Math.ceil(GPB)}d8 + ${GWisMod}) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}}
		else if (RNG == 11) {GLegendaryNames.push(`Frightening Presence (Costs 2 Actions)`); GLegendaries.push(`The creature targets up to three creatures it can see within 30 feet of it. Each target must succeed on a DC ${GTier  +13} Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target’s saving throw is successful or the effect ends for it, the target is immune to the creature’s Frightening Presence for the next 24 hours.`);}
		else if (RNG == 12) {GLegendaryNames.push(`Chromatic Resistance`); GLegendaries.push(`The creature gains resistance to one damage type of its choice — acid, cold, fire, lightning, poison, or thunder — until the start of its next turn.`);}
		else if (RNG == 13) {GLegendaryNames.push(`Warlord's Command (Costs 2 Actions)`); GLegendaries.push(`The creature targets up to two allies that it can see within 30 feet of it. If a target can see and hear it, the target can make one weapon attack as a reaction and gains advantage on the attack roll.`);}
		else if (RNG == 14) {GLegendaryNames.push(`End Magic (Costs 2 Actions)`); GLegendaries.push(`The creature effectively casts dispel magic.`);}
		else if (RNG == 15) {if (GLegendaryUses <= 2) {EnemyLegendary();} else {GLegendaryNames.push(`Provoke Rage (Costs 3 Actions)`); GLegendaries.push(`Each enemy within 60 feet of the creature must succeed on a DC ${GTier + 14} Wisdom saving throw or use its reaction to make a melee weapon attack against a random creature within reach. If no creatures are within reach, it makes a ranged weapon attack against a random creature within range, throwing its weapon if necessary. This attack is made with advantage and gains a +2 bonus to the damage roll.`);}}
		else if (RNG == 16) {GLegendaryNames.push(`Consume Magic (Costs 2 Actions)`); GLegendaries.push(`The creature targets a creature within 120 feet of it who is concentrating on a spell. The target must succeed on a DC ${GTier + 13} Constitution saving throw or its concentration is broken on the spell, and the creature gains ${GPB * 2} temporary hit points per level of that spell.`);}
		else if (RNG == 17) {if (GLegendaryUses <= 2) {EnemyLegendary();} else {GLegendaryNames.push(`Maddening Secrets (Costs 3 Actions)`); GLegendaries.push(`The creature whispers an arcane secret into the mind of a creature it can see within 60 feet of it. The target must succeed on a DC ${GTier + 13} Wisdom saving throw or expend one of its spell slots of 2nd level or lower and deal ${Math.ceil(GPB) + 1}d8 force damage to each creature within 15 feet of it. A creature that fails the saving throw but can’t expend a spell slot is instead stunned until the end of its next turn.`);}}
		else if (RNG == 18) {if (GMagic == "Martial") {EnemyLegendary();} else {GLegendaryNames.push(`Cast a Spell (Costs 2 Actions)`); GLegendaries.push(`The creature casts a spell of level ${Math.ceil(GPB / 2)} or lower from its spell list that takes 1 action to cast.`);}}
		else if (RNG == 19) {GLegendaryNames.push(`Charge`); GLegendaries.push(`The creature moves up to its speed without provoking opportunity attacks towards an enemy.`);}
		else if (RNG == 20) {GLegendaryNames.push(`Mad Dash (Costs 2 Actions)`); GLegendaries.push(`The creature moves up to its speed without provoking opportunity attacks, then makes one melee attack.`);}
		else if (RNG == 21) {GLegendaryNames.push(`Blade Dash (Costs 3 Actions)`); GLegendaries.push(`The creature moves up to its speed without provoking opportunity attacks, then makes one melee attack. It can make one melee attack against each creature it moves past.`);}
		else if (RNG == 22) {GLegendaryNames.push(`Shimmering Aura (Costs 2 Actions)`); GLegendaries.push(`The creature channels positive energy into its aura. Until the end of the creature’s next turn, it sheds bright light in a 30-foot radius and light for an additional 30 feet. Any creature that starts its turn in the bright light must succeed on a DC ${GTier + 13} Constitution saving throw or be blinded until the end of the creature’s next turn.`);}
		else if (RNG == 23) {GLegendaryNames.push(`Detention (Costs 2 Actions)`); GLegendaries.push(`The creature targets a creature it can see within 60 feet of it. The target must succeed on a DC ${GTier + 13} Charisma saving throw or be magically teleported to a harmless demiplane until the end of the creature’s next turn, whereupon the target reappears in the space it left or the nearest unoccupied space if that space is occupied.`);}
		else if (RNG == 24) {GLegendaryNames.push(`Command Allies (Costs 2 Actions)`); GLegendaries.push(`The creature chooses up to three creatures it can see within 30 feet of it. If a chosen creature can see or hear the creature, it can immediately use its reaction to make one weapon attack, with advantage on the attack roll.`);}
		else if (RNG == 25) {GLegendaryNames.push(`Disrupt Life (Costs 3 Actions)`); GLegendaries.push(`Each creature within 30 feet of the creature must make a DC ${GTier + 13} Constitution saving throw, taking ${Math.ceil(GPB) + 2}d6 necrotic damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 26) {GLegendaryNames.push(`Supreme Authority (Costs 3 Actions)`); GLegendaries.push(`The creature chooses up to three creatures it can see within 90 feet of it. Each target must succeed on a DC ${GTier + 13} Intelligence saving throw or the creature chooses an action for that target: Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, or Use an Object. The affected target can’t take that action for 1 minute. At the end of each of the target’s turns, it can end the effect on itself with a successful DC ${GTier + 13} Intelligence saving throw. A target that succeeds on the saving throw becomes immune to the creature’s Supreme Authority for 24 hours.`);}
		else if (RNG == 27) {GLegendaryNames.push(`Shifting Nightmares (Costs 3 Actions)`); GLegendaries.push(`The creature rapidly takes the form of several nightmarish creatures, lashing out at all nearby. Each creature within 10 feet of the creature must succeed on a DC ${GTier + 13} Dexterity saving throw or take ${Math.ceil(GPB) + 2}d8 damage of a type chosen by the creature: acid, cold, fire, lightning, or necrotic.`);}
		else if (RNG == 28) {GLegendaryNames.push(`Sadistic Revely`); GLegendaries.push(`Each creature within 60 feet of creature that is its ally or is charmed by it must use its reaction to move up to half its speed toward the creature closest to it that it can see, provided it isn’t already within 5 feet of that creature. It then must make one melee attack against that creature if it is able to do so.`);}
		else if (RNG == 29) {GLegendaryNames.push(`Touch of Pain (Costs 2 Actions)`); GLegendaries.push(`The creature makes an unarmed attack against one enemy within 10 feet of him. The target must succeed on a DC ${GTier + 13} Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the creature can’t maintain concentration on a spell or any other effect that requires concentration. The poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 30) {GLegendaryNames.push(`Voice of Harmony`); GLegendaries.push(`The creature makes one melee attack, with advantage on the attack roll.`);}
		else if (RNG == 31) {GLegendaryNames.push(`Voice of Life`); GLegendaries.push(`The creature bestows ${GPB * 10} temporary hit points on another creature it can see within 120 feet of it.`);}
		else if (RNG == 32) {GLegendaryNames.push(`Awaken Grove Guardians (Costs 3 Actions)`); GLegendaries.push(`The creature animates ${Math.ceil(GPB / 2)} trees it can see within 120 feet of it, causing them to uproot themselves and become awakened trees (see the Monster Manual for their stat blocks) for 1 minute or until the creature uses a bonus action to end the effect. These trees understand Druidic and obey the creature’s spoken commands, but can’t speak. If it issues no commands to them, the trees do nothing but follow it and take the Dodge action.`);}
		else if (RNG == 33) {GLegendaryNames.push(`Enlarge (Costs 2 Actions)`); GLegendaries.push(`The creature casts enlarge/reduce on itself, using the enlarge option, without expending a spell slot.`);}
		else if (RNG == 34) {GLegendaryNames.push(`Reduce (Costs 2 Actions)`); GLegendaries.push(`The creature casts enlarge/reduce on an enemy, using the reduce option, without expending a spell slot.`);}
		else if (RNG == 35) {GLegendaryNames.push(`Sinners Beware`); GLegendaries.push(`Move up to 30 feet towards a hostile creature. This does not trigger opportunity attacks.`);}
		else if (RNG == 36) {GLegendaryNames.push(`Justice!`); GLegendaries.push(`A creature within 10 feet must make a DC ${GTier + 13} Charisma Saving Throw. On a fail, holy chains erupt from the ground, binding them for 10 minutes. They are considered restrained and magical effects on the target are suppressed while restrained this way. Creatures can repeat the saving throw when hit by a hostile creature, or every minute. Chaotic-aligned creatures make the save with disadvantage.`);}
		else if (RNG == 37) {GLegendaryNames.push(`Iron Will (Costs 2 Actions)`); GLegendaries.push(`While afflicted with any condition, except unconsciousness, the creature can choose to shrug it off, neutralizing it.`);}
		else if (RNG == 38) {GLegendaryNames.push(`Bulwark`); GLegendaries.push(`The creature flares crimson with power, protecting those nearby. The next attack that would hit an ally within 5 feet of the creature hits the creature instead.`);}
		else if (RNG == 39) {GLegendaryNames.push(`Void Slip (Costs 2 Actions)`); GLegendaries.push(`The creature twists the fabric of space. Each creature within 15 feet of the creature must succeed on a DC ${GTier + 13} Dexterity saving throw or take (${Math.ceil(GPB)}d6 + ${GChaMod}) bludgeoning damage and be knocked prone. The creature can then teleport to an unoccupied space within 40 feet.`);}
		else if (RNG == 40) {GLegendaryNames.push(`Void Cache (Costs 2 Actions)`); GLegendaries.push(`The creature can magically reach into its personal cache and retrieve one item. If it is holding an item, it can use this ability to deposit the item into its cache. The cache is a literal physical place on the material plane connected to this ability.`);}
		else if (RNG == 41) {GLegendaryNames.push(`Pack Maneuver (Costs 2 Actions)`); GLegendaries.push(`The creature, or an ally within 30 feet that can see and hear it, moves up to half its speed without provoking opportunity attacks.`);}
		else if (RNG == 42) {GLegendaryNames.push(`Move`); GLegendaries.push(`The creature moves up to half its speed without provoking opportunity attacks.`);}
		else if (RNG == 43) {GLegendaryNames.push(`Shroud (Costs 2 Actions)`); GLegendaries.push(`The creature radiates magical darkness in a 30 foot radius. The darkness lasts until the start of the creatures's next turn.`);}
		else if (RNG == 44) {GLegendaryNames.push(`Envelop in Shadow (Costs 2 Actions)`); GLegendaries.push(`The creature moves up to half its speed without provoking opportunity attacks. Any enemy whose space it moves through must make a DC ${GTier + 13} Dexterity saving throw, taking ${Math.ceil(GPB) + 1}d6 necrotic damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 45) {GLegendaryNames.push(`Poison`); GLegendaries.push(`The creature targets an enemy within 120 feet. If the target isn't poisoned, it must make a DC ${GTier + 13} Constitution saving throw or become poisoned. The poisoned target repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 46) {GLegendaryNames.push(`North Wind's Glare`); GLegendaries.push(`The creature freezes a foe with a look. One enemy within 60 feet that the creature can see must make a successful DC ${GTier + 13} Constitution saving throw or be petrified until the start of the creature's next turn.`);}
		else if (RNG == 47) {if (GRechargeQty <= 0) {EnemyLegendary();} else {GLegendaryNames.push(`Recharge`); GLegendaries.push(`The creature may roll to attempt to recharge a rechargable ability.`);}}
		else if (RNG == 48) {if (GRechargeQty <= 0) {EnemyLegendary();} else {GLegendaryNames.push(`Intent Recharge (Costs 2 Actions)`); GLegendaries.push(`The creature may roll to attempt to recharge a rechargable ability. The recharge roll range is increased by 1.`);}}
		else if (RNG == 49) {GLegendaryNames.push(`Power Up (Costs 3 Actions) (1/day)`); GLegendaries.push(`The creature selects and recharge ability and recharges it.`);}
		else if (RNG == 50) {GLegendaryNames.push(`Control Weather`); GLegendaries.push(`The creature can alter the weather in a 5-mile radius centered on itself. The effect is identical to the control weather spell, except the casting time and effects are immediate.`);}
		else if (RNG == 51) {GLegendaryNames.push(`Call Lightning (Costs 2 Actions)`); GLegendaries.push(`A bolt of lightning flashes down from the clouds to a point the creature can see within 120 feet of it. Each enemy within 5 feet of that point must make a DC ${GTier + 13} Dexterity saving throw, taking ${Math.ceil(GPB) + 2}d10 lightning damage on a failed save, or half as much damage on a successful one.`);}
		else if (RNG == 52) {GLegendaryNames.push(`Enlightening Roar`); GLegendaries.push(`Each ally the creature chooses within 30 feet of it can immediately repeat a saving throw to end one condition currently affecting it.`);}
		else if (RNG == 53) {GLegendaryNames.push(`Tar Toss`); GLegendaries.push(`The creature hurls a glob of tar at a target within 30 feet as a ranged weapon attack (+${GDexMod + GPB} to hit). If the attack hits, the target is restrained (escape DC ${GTier + 12}).`);}
		else if (RNG == 54) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 55) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 56) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 57) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 58) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 59) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 60) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 61) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 62) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 63) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 64) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 65) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 66) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 67) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 68) {GLegendaryNames.push(``); GLegendaries.push(``);}
		else if (RNG == 69) {GLegendaryNames.push(``); GLegendaries.push(``);}
}
	function EnemyLegendaryBtn() {
		GLegendaryNames.length = 0;
		GLegendaries.length = 0;
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2)
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		EnemyLegendary();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GLegendaryNames}]\n${GLegendaries}`;
		GLegendaryNames.length = 0;
		GLegendaries.length = 0;
	}

function EnemyLairActive() {
	RNG = Math.floor(Math.random() * 26) + 1;
		if (RNG == 1) {GLairActiveNames.push(`Cave In`); GLairActives.push(`A 40 ft. wide circular section of the roof starts to crumble. At the same point in the initiative order next turn, the ceiling crumbles down, making it difficult terrain. Anyone caught in it must succeed on a DC ${GTier + 12} Dexterity Saving Throw or else take (${Math.floor(GTier + 3)}d6 + ${Math.ceil(GTier * 1.5)}) bludgeoning damage and be knocked prone. On a Critical Fail, they are restrained under the rocks and they or someone else must succeed on a DC ${GTier + 12} Athletics check to escape or pull them out.`);}
		else if (RNG == 2) {GLairActiveNames.push(`Plate Shift`); GLairActives.push(`A section of the floor shifts in a direction. All creatures, must make a DC ${GTier + 13} Dexterity Saving Throw or be moved 5 ft. in the direction and be knocked prone. The creature whose lair it is automatically passes. A creature that succeeds can choose to be moved 5 feet in the direction of the movement or jump to avoid moving.`);}
		else if (RNG == 3) {GLairActiveNames.push(`Earth Crush`); GLairActives.push(`A 10x10 foot section of the ceiling rushes down to the ground. A creature in the target area must make a DC ${GTier + 12} Dexterity Saving Throw or be pinned to the ground, taking ${Math.ceil(GPB / 1.5) + 3}d6 bludgeoning damage. They are considered restrained and must succeed on a DC ${GTier + 12} Athletics Check to escape.`);}
		else if (RNG == 4) {GLairActiveNames.push(`Void Absorbance`); GLairActives.push(`The creature can pull the life force from those it has converted to undead to replenish its own life. This takes ${Math.ceil(GPB / 2) + 3}d6 hit points from undead within 30 feet of the creature, spread evenly between the undead, and healing the creature. If an undead reaches 0 hit points from this action, it perishes with no Undead Fortitude saving throw.`);}
		else if (RNG == 5) {GLairActiveNames.push(`Fissure`); GLairActives.push(`A ten foot-wide, ten foot-long crack opens in the cavern floor where the creature wishes. Any creature occupying that space must make a successful DC ${GTier + 12} Dexterity saving throw or fall 20 feet, taking ${Math.ceil(GPB / 3) + 2}d6 bludgeoning damage plus ${Math.ceil(GPB / 3) + 3}d4 piercing damage from the jagged stones at the bottom.`);}
		else if (RNG == 6) {GLairActiveNames.push(`Insect Swarm`); GLairActives.push(`The creature summons a swarm of insects as if it had cast insect plague, filling a 20-foot radius sphere within 90 feet of the creature. Creatures that are in the affected space or that enter it take {Math.ceil(GPB / 1.5) + 3}d10 piercing damage, or half damage with a successful DC ${GTier + 12} Constitution saving throw. The swarm lasts one full round.`);}
		else if (RNG == 7) {GLairActiveNames.push(`Pure Darkness`); GLairActives.push(`The creature snuffs all light sources within the lair. Spells that create light are dispelled, mundane light sources are extinguished, and magical light sources are suppressed. Even light created by artifacts is reduced to light with half its normal radius of illumination. This lasts until the initiative count that this effect occured on in the following round.`);}
		else if (RNG == 8) {GLairActiveNames.push(`Haunting Melody`); GLairActives.push(`Haunting, maddening music emanates from a point the creature can see. Enemies within 50 feet of the origin that can hear the music must make a DC ${GTier + 12} Wisdom saving throw. Those that fail are charmed, incapacitated, and have their speed reduced to 0 until they take damage or until the initiative count that this effect occured on in the following round.`);}
		else if (RNG == 9) {GLairActiveNames.push(`Black Tendrils`); GLairActives.push(`Black tendrils writhe around up to three enemies the creature can see within 100 feet. The enemies must succeed on a DC ${GTier + 12} Strength saving throw or be restrained until the initiative count that this effect occured on in the following round.`);}
		else if (RNG == 10) {GLairActiveNames.push(`Smoke Cloud`); GLairActives.push(`A cloud of smoke swirls in a 20-foot-radius sphere centered on a point the creature can see within 120 feet of it. The cloud spreads around corners and the area is lightly obscured. Each enemy in the cloud must succeed on a DC ${GTier + 12} Constitution saving throw or be blinded for 1 minute. An enemy creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.`);}
		else if (RNG == 11) {GLairActiveNames.push(`Shattered Ground`); GLairActives.push(`The ground erupts with volcanic force at a point the creature can see within 120 feet of it. Any enemy within 20 feet of the point must make a successful DC ${GTier + 12} Dexterity saving throw or be knocked prone and trapped in the ground. An enemy trapped in this way is restrained and can't stand up. An enemy can end the restraint if it or another enemy takes an action to make a successful DC ${GTier + 12} Strength check.`);}
		else if (RNG == 12) {GLairActiveNames.push(`Fire Wall`); GLairActives.push(`A wall of fire rises up from the ground within 120 feet of the creature. The wall is up to 60 feet long, 10 feet high, and 5 feet thick, can take any shape the creature wants, and blocks line of sight. When the wall appears, each creature in its area must make a DC ${GTier + 12} Dexterity saving throw. An enemy that fails the saving throw takes ${Math.ceil(GPB / 2) + 2}d6 fire damage. Each enemy that enters the wall for the first time each turn or ends its turn there takes ${Math.ceil(GPB / 2) + 2}d6 fire damage. The wall is extinguished when the creature uses this lair action again or when the creature dies.`);}
		else if (RNG == 13) {GLairActiveNames.push(`Vortexes`); GLairActives.push(`Four vortexes, each 5 feet in diameter and up to 30 feet tall, appear within the lair where the creature wishes. Eemies occupying the space where a vortex appears or who enter the vortex for the first time on a turn must make a DC ${GTier + 12} Dexterity save or be restrained. As an action, an enemy can free itself or another enemy from a vortex by succeeding on a DC ${GTier + 12} Strength check. The vortexes last until the creature uses this lair action again or until the creature dies.`);}
		else if (RNG == 14) {GLairActiveNames.push(`Coral Wall`); GLairActives.push(`The creature creates a wall of living coral on a solid surface it can see within 120 feet of it. The wall can be up to 30 feet long, 30 feet high, and 1 foot thick. When the wall appears, each enemy within its area takes damage as if touching the wall and is pushed 5 feet out of the wall's space, on whichever side of the wall it wants. Touching the wall releases painful stings that deal ${Math.ceil(GPB)}d8 poison damage, or half that with a successful DC ${GTier + 12} Constitution saving throw. Each 10-foot section of the wall has AC 5, ${GPB * 7} hit points, resistance to fire damage, and immunity to psychic damage. The wall lasts until the creature uses this lair action again or until the creature dies.`);}
		else if (RNG == 15) {GLairActiveNames.push(`Slow Time`); GLairActives.push(`The creature bends time around its enemies. Four enemies the creature can see within 120 feet of it must succeed on a DC ${GTier + 12} Wisdom save or be affected by a slow spell. This effect last until the initiative count that this effect occured on in the following round.`);}
		else if (RNG == 16) {GLairActiveNames.push(`Nullify Gravity`); GLairActives.push(`The creature negates natural gravity within its lair. Enemies drift 10 feet away from the ground over the course of a round and are restrained. Flying enemies can move at half speed, unless they have the (hover) tag or use magical flight, in which case they move normally. This effect persists until the initiative count that this effect occured on in the following round.`);}
		else if (RNG == 17) {GLairActiveNames.push(`Void Sphere`); GLairActives.push(`The Void briefly overlaps the creature's lair in a 20-foot-radius sphere of blackness punctuated by deep blue streaks and pinpoints of light. The sphere is centered on a point the creature can see within 120 feet of the creature. The area spreads around corners, is heavily obscured, and contains no air (creatures must hold their breath). Each enemy in the sphere when it appears must make a DC ${GTier + 12} Constitution saving throw, taking ${Math.ceil(GPB)}d6 cold damage on a failed save or half as much on a successful one. Any enemy that ends its turn in the sphere takes ${Math.ceil(GPB)}d6 cold damage. The sphere lasts until the creature uses this lair action again or until the creature dies.`);}
		else if (RNG == 18) {GLairActiveNames.push(`Coterminous`); GLairActives.push(`The creature rips the fabric of space, forcing two enemies it can see within 120 feet of it to suddenly exist in the same place. Space itself repels the enemies to their original positions. Each creature takes ${Math.ceil(GPB / 1.5) + 2}d10 force damage and is knocked prone, or takes half as much damage and is not knocked prone with a successful DC ${GTier + 12} Strength saving throw.`);}
		else if (RNG == 19) {GLairActiveNames.push(`Dust Devils`); GLairActives.push(`Sand and dust swirls up from the floor in a 20-foot radius sphere within 120 feet of the creature at a point the creature can see. The sphere spreads around corners. The area inside the sphere is lightly obscured, and each enemy in the sphere at the start of its turn must make a successful DC ${GTier + 12} Constitution saving throw or be blinded for 1 minute. A blinded enemy repeats the saving throw at the start of each of its turns, ending the effect on itself with a success.`);}
		else if (RNG == 20) {GLairActiveNames.push(`Splinter of Ice`); GLairActives.push(`Fragments of ice and stone are torn from the lair's wall by a blast of wind and flung along a 15-foot cone. Enemies in the cone take ${Math.ceil(GPB / 1.5) + 2}d8 bludgeoning damage, or half damage with a successful DC ${GTier + 12} Dexterity saving throw.`);}
		else if (RNG == 21) {GLairActiveNames.push(`Howling Gale`); GLairActives.push(`A torrent of wind blasts outward from the creature in a 60-foot radius, either racing just above the floor or near the ceiling. If near the floor, it affects all enemies standing in the radius; if near the ceiling, it affects all enemies flying in the radius. Affected enemies must make a successful DC ${GTier + 12} Strength saving throw or be knocked prone and stunned until the end of their next turn.`);}
		else if (RNG == 22) {GLairActiveNames.push(`Beast Swarm`); GLairActives.push(`The creature magically conjures up a swarm of eight giant beasts (of CR ${Math.ceil(GPB / 2)} or less) to defend his lair. The beasts act immediately, and on the initiative count that this effect occured on in subsequent rounds. The beasts remain until they're killed or until the creature dismisses them as an action. The creature can use this action again, but no more than eight giant beasts can be present at a time.`);}
		else if (RNG == 23) {GLairActiveNames.push(`Becoming Animal`); GLairActives.push(`The creature targets an enemy within the lair that it can see. The enemy must succeed on a DC ${GTier + 12} Constitution saving throw or be magically transformed into a CR 1 beast as if by a polymorph spell. At the beginning of its turn, a transformed enemy repeats the saving throw. If it fails, the enemy must use its action to attack one of the creature's foes. If it succeeds, the effect ends and the enemy returns to its normal form. The effect lasts until the enemy succeeds on the saving throw or until the creature uses this lair action again.`);}
		else if (RNG == 24) {GLairActiveNames.push(`Trembling Ground`); GLairActives.push(`The creature causes the ground in a 20-foot radius to tremble and shake. Any enemies in the affected area must succeed on a DC ${GTier + 12} Strength saving throw or suffer ${Math.ceil(GPB / 2) + 2}d6 bludgeoning damage and fall prone. The ground continues to tremble until the initiative count that this effect occured on in the following round, during which time the area is difficult terrain.`);}
		else if (RNG == 25) {GLairActiveNames.push(`Sticky Ground`); GLairActives.push(`A 50-foot square area of ground within 120 feet of the creature becomes slimy; that area is difficult terrain until the initiative count that this effect occured on in the next round. The creature and its minions are immune to this effect.`);}
		else if (RNG == 26) {GLairActiveNames.push(`Living Walls`); GLairActives.push(`Walls within 120 feet of the creature sprout grasping appendages until the initiative count that this effect occured on in the round after next. Each enemy of the creature’s choice that starts its turn within 10 feet of such a wall must succeed on a DC ${GTier + 12} Dexterity saving throw or be grappled.`);}
		else if (RNG == 27) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 28) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 29) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 30) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 31) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 32) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 33) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 34) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 35) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 36) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 37) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 38) {GLairActiveNames.push(``); GLairActives.push(``);}
		else if (RNG == 39) {GLairActiveNames.push(``); GLairActives.push(``);}
}
	function EnemyLairBtn() {
		GLairActiveNames.length = 0;
		GLairActives.length = 0;
		GLairPassiveNames.length = 0;
		GLairPassives.length = 0;
		GLairPassiveRange = "";
		GetTier();
		GMagic = "Not Applicable";
		GWeaponMod = Math.floor((GPB+10) / 2)
		GSpellMod = Math.floor((GPB+10) / 2);
		GWeaponHit = GWeaponMod + GPB;
		GSpellHit = GSpellMod + GPB;
		rangeRNGx = Math.floor(Math.random() * 10) + 1;
		if (rangeRNGx == 1) {GLairPassiveRange = "half a mile";} else if (rangeRNGx == 2) {GLairPassiveRange = "1 mile";} else if (rangeRNGx == 3) {GLairPassiveRange = "2 miles";} else if (rangeRNGx == 4) {GLairPassiveRange = "4 miles";}
		else if (rangeRNGx == 5) {GLairPassiveRange = "5 miles";} else if (rangeRNGx == 6) {GLairPassiveRange = "6 miles";} else if (rangeRNGx == 7) {GLairPassiveRange = "8 miles";} else if (rangeRNGx == 8) {GLairPassiveRange = "10 miles";}
		else if (rangeRNGx == 9) {GLairPassiveRange = "15 miles";} else if (rangeRNGx == 10) {GLairPassiveRange = "20 miles";}
		EnemyLairActive();
		document.getElementById("charBox").innerHTML = `(Choose DC, # of dice, and other values to fit your difficulty) \n\n[${GLairActiveNames}]\n${GLairActives}`;
		GLairActiveNames.length = 0;
		GLairActives.length = 0;
		EnemyLairPassive();
		document.getElementById("charBox").innerHTML += `\n\n{Lair Passive}\n[${GLairPassiveNames}]\n${GLairPassives}\n\nLair Range: ${GLairPassiveRange}`;
		GLairPassiveNames.length = 0;
		GLairPassives.length = 0;
		GLairPassiveRange = "";
	}

function EnemyLairPassive() {
		RNG = Math.floor(Math.random() * 26) + 1;
		if (RNG == 1) {GLairPassiveNames.push(`Paranoia`); GLairPassives.push(`Creatures within ${GLairPassiveRange} feel as if they are being followed, even when they're not.`);}
		else if (RNG == 2) {GLairPassiveNames.push(`Telepathic Eavesdropping`); GLairPassives.push(`The creature can overhear any telepathic conversation within ${GLairPassiveRange} of it's lair. The creature that initiated the telepathic conversation makes a DC ${GTier + 11} Wisdom save. On a save, the creature is aware something is eavesdropping, but knows nothing about it.`);}
		else if (RNG == 3) {GLairPassiveNames.push(`Earthen Sense`); GLairPassives.push(`The creature can sense the footsteps of any creatures within ${GLairPassiveRange} while within its lair.`);}
		else if (RNG == 4) {GLairPassiveNames.push(`Magical Awareness`); GLairPassives.push(`The creature can sense any magic within 200 ft. of itself as if it was under the effects of detect magic.`);}
		else if (RNG == 5) {GLairPassiveNames.push(`Water Contimation`); GLairPassives.push(`Water sources within ${GLairPassiveRange} of the creature's lair are not only supernaturally fouled but can spread a disease. A creature who drinks from such water must make a successful DC ${GTier + 11} Constitution check or become infected. An infected creature can only breath underwater.`);}
		else if (RNG == 6) {GLairPassiveNames.push(`Poisonous Passage`); GLairPassives.push(`Poisonous and odorless gases suddenly fill passages and caverns, and just as quickly disperse, within ${GLairPassiveRange} of the creature's lair.`);}
		else if (RNG == 7) {GLairPassiveNames.push(`Flash Flooding`); GLairPassives.push(`Flash flooding turns tunnels into death traps as tremors create fissures in the stone within ${GLairPassiveRange} of the lair. On the surface, ponds drain away, and long-dry creek beds break their banks in flood.`);}
		else if (RNG == 8) {GLairPassiveNames.push(`Vermin Swarm`); GLairPassives.push(`Swarms of vermin within ${GLairPassiveRange} of the lair increase in both size and number as they try to escape the creature's endless and undiscriminating hunger.`);}
		else if (RNG == 9) {GLairPassiveNames.push(`Encroaching Darkness`); GLairPassives.push(`Within ${GLairPassiveRange} of the lair all light sources except artifacts shed light to only half the usual radius.`);}
		else if (RNG == 10) {GLairPassiveNames.push(`Nocturnal Swarm`); GLairPassives.push(`Owls and other nocturnal beasts become enraged and hostile within 5 miles of the lair, attacking intruders individually and in swarms.`);}
		else if (RNG == 11) {GLairPassiveNames.push(`Shadow Ominscience`); GLairPassives.push(`Within ${GLairPassiveRange} of the lair, the creature can cast its senses into any area of light or darkness as if using clairvoyance.`);}
		else if (RNG == 12) {GLairPassiveNames.push(`Short Tempered`); GLairPassives.push(`Arguments and misunderstandings erupt easily within ${GLairPassiveRange} of the lair. Friendships are easily broken and criminal acts are common.`);}
		else if (RNG == 13) {GLairPassiveNames.push(`Heat Wave`); GLairPassives.push(`Temperatures rise within ${GLairPassiveRange} of the lair. Crops wither, producing famines.`);}
		else if (RNG == 14) {GLairPassiveNames.push(`Deadly Geysers`); GLairPassives.push(`Sulfur geysers form in and around the creature's lair. Some of them erupt only once an hour, so they're spotted only with a successful DC ${GTier + 13} Wisdom (Perception) check. A creature on top of an erupting geyser takes ${Math.ceil(GPB / 2) + 2}d6 fire damage, or half damage with a successful DC ${GTier + 12} Dexterity saving throw.`);}
		else if (RNG == 15) {GLairPassiveNames.push(`Proliferous Sea Life`); GLairPassives.push(`Sea life becomes richer within ${GLairPassiveRange} of the lair. Schools of fish move into new waters, sharks become common, and whale migration paths shift to pass near the area.`);}
		else if (RNG == 16) {GLairPassiveNames.push(`Icy Waters`); GLairPassives.push(`Water temperatures drop sharply within ${GLairPassiveRange} of the lair. Creatures not accustomed to cold suffer exposure to extreme cold while swimming in this water.`);}
		else if (RNG == 17) {GLairPassiveNames.push(`Rogue Waters`); GLairPassives.push(`Storms and rough water are more common within ${GLairPassiveRange} of the lair.`);}
		else if (RNG == 18) {GLairPassiveNames.push(`The Truth Will Out`); GLairPassives.push(`Secrets have a way of coming to light within ${GLairPassiveRange} of the lair. Clues are inadvertently discovered, slips of the tongue hint at a hidden truth, and creatures become morbidly curious for forbidden knowledge.`);}
		else if (RNG == 19) {GLairPassiveNames.push(`Shadows Overcast`); GLairPassives.push(`Light is muted within ${GLairPassiveRange} of the lair. Nonmagical illumination, including sunlight, can't create bright light in this area.`);}
		else if (RNG == 20) {GLairPassiveNames.push(`Lowered Borders`); GLairPassives.push(`Visitations from otherworldly beings occur and disembodied voices whisper in the night within ${GLairPassiveRange} of the creature's lair. Celestials, fey, and fiends of CR ${Math.ceil(GPB / 2)} or lower can slip into the world in this area.`);}
		else if (RNG == 21) {GLairPassiveNames.push(`Swarm Prince`); GLairPassives.push(`The creature can communicate with spawns of itself and all vermin and insects, including swarms and giant varieties, within 120 feet via pheromone transmission. In the lair, this range extends to cover the entire lair. This is a silent and instantaneous mode of communication that only the creature, spawns of itself, insects, and vermin can understand. All these creatures follow the creature's orders and will never harm the creature.`);}
		else if (RNG == 22) {GLairPassiveNames.push(`Chilling Colds`); GLairPassives.push(`Everywhere aboveground within ${GLairPassiveRange} of the lair is considered exrteme cold. Nonmagical fires up to the size of a campfire are quenched. Exposed waters are frozen solid. Spells that protect against cold are subjected to a dispel magic every 10 minutes (at +${Math.ceil(GPB + 4)} spellcasting ability).`);}
		else if (RNG == 23) {GLairPassiveNames.push(`Lycan Lands`); GLairPassives.push(`Within ${GLairPassiveRange} of the lair, enemies have disadvantage on saving throws made to avoid contracting lycanthropy.`);}
		else if (RNG == 24) {GLairPassiveNames.push(`Agitated Creatures`); GLairPassives.push(`Beasts within ${GLairPassiveRange} of the lair are easily agitated quick to attack.`);}
		else if (RNG == 25) {GLairPassiveNames.push(`Enflamed Emotions`); GLairPassives.push(`Emotions within ${GLairPassiveRange} of the lair run high. Arguments quickly descend into physical scuffles and enjoyable get-togethers are likely to become raucous carousing or even brawls. `);}
		else if (RNG == 26) {GLairPassiveNames.push(`Warped Reality`); GLairPassives.push(`Within ${GLairPassiveRange} of the lair, small things make change. Marks on cave walls might change subtly, an eerie trinket might appear where none existed before, harmless slime might coat a statue, and so on. These effects apply only to natural surfaces and to nonmagical objects that aren’t on anyone’s person.`);}
		else if (RNG == 27) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 28) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 29) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 30) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 31) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 32) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 33) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 34) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 35) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 36) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 37) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 38) {GLairPassiveNames.push(``); GLairPassives.push(``);}
		else if (RNG == 39) {GLairPassiveNames.push(``); GLairPassives.push(``);}
}

function RollAttribute() {
	let roll1 = Math.floor(Math.random() * 6) + 1;
	let roll2 = Math.floor(Math.random() * 6) + 1;
	let roll3 = Math.floor(Math.random() * 6) + 1;
	let roll4 = Math.floor(Math.random() * 6) + 1;
	let rollLow;
	rollLow = roll1;
	if (roll2 < rollLow) {rollLow = roll2;} else {}
	if (roll3 < rollLow) {rollLow = roll3;} else {}
	if (roll4 < rollLow) {rollLow = roll4;} else {}
	GStatRoll = roll1 + roll2 + roll3 + roll4 - rollLow
}

function MainStats() {
	if (GMagic == "Martial") {RNG1 = Math.floor(Math.random() * 2) + 1; RNG3 = Math.floor(Math.random() * 4) + 1; RNGBad = Math.floor(Math.random() * 3) + 1;
		if (RNG1 == 1) {GFirstStat = "Str";} else if (RNG1 == 2) {GFirstStat = "Dex";}
		GSecondStat = "Con"
		if (RNG3 == 1) {GThirdStat = "Int";} else if (RNG3 == 2) {GThirdStat = "Wis";} else if (RNG3 == 3) {GThirdStat = "Cha";} else if (RNG3 == 4) {GThirdStat = "Dex";}
		if (RNGBad == 1) {GBadStat = "Int";} else if (RNGBad == 2) {GBadStat = "Wis";} else if (RNGBad == 3) {GBadStat = "Cha";}
	}
	else if (GMagic == "Half") {RNG1 = Math.floor(Math.random() * 2) + 1; RNG2 = Math.floor(Math.random() * 3) + 1; RNGBad = Math.floor(Math.random() * 6) + 1;
		if (RNG1 == 1) {GFirstStat = "Str";} else if (RNG1 == 2) {GFirstStat = "Dex";}
		if (RNG2 == 1) {GSecondStat = "Int";} else if (RNG2 == 2) {GSecondStat = "Wis";} else if (RNG2 == 3) {GSecondStat = "Cha";}
		GThirdStat = "Con"
		if (RNGBad == 1) {GBadStat = "Str";} else if (RNGBad == 2) {GBadStat = "Dex";} else if (RNGBad == 3) {GBadStat = "Int";} else if (RNGBad == 4) {GBadStat = "Wis";} else if (RNGBad == 5) {GBadStat = "Cha";} else if (RNGBad == 6) {}
		GSpellStat = GSecondStat;
	}
	else if (GMagic == "Caster") {RNG1 = Math.floor(Math.random() * 3) + 1; RNG2 = Math.floor(Math.random() * 3) + 1; RNG3 = Math.floor(Math.random() * 3) + 1; RNGBad = Math.floor(Math.random() * 6) + 1;
		if (RNG1 == 1) {GFirstStat = "Int";} else if (RNG1 == 2) {GFirstStat = "Wis";} else if (RNG1 == 3) {GFirstStat = "Cha";}
		if (RNG2 == 1) {GSecondStat = "Int";} else if (RNG2 == 2) {GSecondStat = "Wis";} else if (RNG2 == 3) {GSecondStat = "Cha";}
		if (RNG3 == 1) {GThirdStat = "Str";} else if (RNG3 == 2) {GThirdStat = "Dex";} else if (RNG3 == 3) {GThirdStat = "Con";}
		if (RNGBad == 1) {GBadStat = "Str";} else if (RNGBad == 2) {GBadStat = "Dex";} else if (RNGBad == 3) {GBadStat = "Con";} else if (RNGBad == 4) {GBadStat = "Int";} else if (RNGBad == 5) {GBadStat = "Wis";} else if (RNGBad == 6) {GBadStat = "Cha";}
		GSpellStat = GFirstStat;
	}
}

function GetSize() {
	let RNG = Math.floor(Math.random() * 20) + 1;
	if (GSize == "") {} else {GSize = "";} if (GHumanoid == "") {} else {GHumanoid = "";} if (GElemental == "") {} else {GElemental = "";}
	if (GCreature == "Dragon") {if (GCR >= 1 && GCR <= 5) {GSize = "Medium";} else if (GCR >= 6 && GCR <= 12) {GSize = "Large";} else if (GCR >= 13 && GCR <= 18) {GSize = "Huge";} else if (GCR >= 19) {GSize = "Gargantuan";}}
	else if (GCreature == "Giant") {if (RNG == 1) {GSize = "Large";} else if (RNG == 20) {GSize = "Gargantuan";} else {GSize = "Huge";}}
	else if (GCreature == "Plant") {if (RNG == 1) {GSize = "Medium";} else if (RNG >= 15 && RNG <= 19) {GSize = "Huge";} else if (RNG == 20) {GSize = "Gargantuan";} else {GSize = "Large"}}
	else if (GCreature == "Fey") {if (RNG == 1 || RNG == 2) {GSize = "Tiny";} else if (RNG >= 3 && RNG <= 9) {GSize = "Small";} else if (RNG >= 10 && RNG <= 19) {GSize = "Medium";} else if (RNG == 20) {GSize = "Large";}}
	else if (GCreature == "Humanoid") {HumanoidRace();
		if (GHumanoid == "Halfling" || GHumanoid == "Gnome" || GHumanoid == "Goblin") {GSize = "Small";} else if (GHumanoid == "Goliath" && RNG >= 19) {GSize = "Large";} else if (GHumanoid == "Goliath" && RNG < 19) {GSize = "Medium";}
		else if (GHumanoid == "Orc" && RNG >= 19) {GSize = "Large";} else if (GHumanoid == "Orc" && RNG < 19) {GSize = "Medium";} else {GSize = "Medium";}}
	else if (GCreature == "Elemental") {ElementalRace();
		if (RNG == 1) {GSize = "Small";} else if (RNG >= 2 && RNG <= 5) {GSize = "Medium";} else if (RNG >= 6 && RNG <= 13) {GSize = "Large";} else if (RNG >= 14 && RNG <= 18) {GSize = "Huge";} else if (RNG >= 19) {GSize = "Gargantuan";}}
	else {if (RNG == 1) {GSize = "Small";} else if (RNG >= 2 && RNG <= 5) {GSize = "Medium";} else if (RNG >= 6 && RNG <= 13) {GSize = "Large";} else if (RNG >= 14 && RNG <= 18) {GSize = "Huge";} else if (RNG >= 19) {GSize = "Gargantuan";}}
}

function HumanoidRace() {
	if (GLanguage.includes("common") == false) {GLanguage.push("common")} else {}
	let RNG = Math.floor(Math.random() * 100) + 1;
	if (RNG >= 1 && RNG <= 14) {GHumanoid = "Human";}
	else if (RNG >= 15 && RNG <= 23) {GHumanoid = "Halfling"; if (GLanguage.includes("halfling") == false) {GLanguage.push("halfling")} else {}}
	else if (RNG >= 24 && RNG <= 28) {GHumanoid = "Gnome"; if (GLanguage.includes("gnomish") == false) {GLanguage.push("gnomish")} else {}}
	else if (RNG >= 29 && RNG <= 36) {GHumanoid = "Goblin"; if (GLanguage.includes("goblin") == false) {GLanguage.push("goblin")} else {}}
	else if (RNG >= 37 && RNG <= 42) {GHumanoid = "Dragonborn"; if (GLanguage.includes("draconic") == false) {GLanguage.push("draconic")} else {}}
	else if (RNG >= 43 && RNG <= 54) {GHumanoid = "Dwarf"; if (GLanguage.includes("dwarvish") == false) {GLanguage.push("dwarvish")} else {}}
	else if (RNG >= 55 && RNG <= 64) {GHumanoid = "Elf"; if (GLanguage.includes("elvish") == false) {GLanguage.push("elvish")} else {}}
	else if (RNG >= 67 && RNG <= 71) {GHumanoid = "Tiefling"; if (GLanguage.includes("infernal") == false) {GLanguage.push("infernal")} else {}}
	else if (RNG >= 72 && RNG <= 85) {GHumanoid = "Half-Elf"; if (GLanguage.includes("elvish") == false) {GLanguage.push("elvish")} else {}}
	else if (RNG >= 86 && RNG <= 89) {GHumanoid = "Orc"; if (GLanguage.includes("orc") == false) {GLanguage.push("orc")} else {}}
	else if (RNG >= 90 && RNG <= 95) {GHumanoid = "Half-Orc"; if (GLanguage.includes("orc") == false) {GLanguage.push("orc")} else {}}
	else if (RNG >= 96 && RNG <= 100) {GHumanoid = "Goliath"; if (GLanguage.includes("giant") == false) {GLanguage.push("giant")} else {}}
}

function ElementalRace() {
	let RNG = Math.floor(Math.random() * 5) + 1;
	if (RNG == 1) {GElemental = "Fire";}
	else if (RNG == 2) {GElemental = "Water";}
	else if (RNG == 3) {GElemental = "Earth";}
	else if (RNG == 4) {GElemental = "Air";}
	else if (RNG == 5) {GElemental = "Lightning";}
}

function BurrowSpeed() {
	burrowRNG = Math.floor(Math.random() * 3) + 1;
	if (GSize == "Small") {GSpeedBurrow = 10;}
	else if (GSize == "Medium") {if (burrowRNG == 1) {GSpeedBurrow = 15;} else {GSpeedburrow = 10};}
	else if (GSize == "Large") {if (burrowRNG == 1) {GSpeedBurrow = 15;} else if (burrowRNG == 2) {GSpeedBurrow = 20;} else if (burrowRNG == 3) {GSpeedBurrow = 25;}}
	else if (GSize == "Huge") {if (burrowRNG == 1) {GSpeedBurrow = 20;} else if (burrowRNG == 2) {GSpeedBurrow = 25;} else if (burrowRNG == 3) {GSpeedBurrow = 30;}}
	else if (GSize == "Gargantuan") {if (burrowRNG == 1) {GSpeedBurrow = 30;} else if (burrowRNG == 2) {GSpeedBurrow = 35;} else if (burrowRNG == 3) {GSpeedBurrow = 40;}}
}

function SwimSpeed() {
	swimRNG = Math.floor(Math.random() * 6) + 1;
	if (swimRNG >= 1 && swimRNG <= 2) {GSpeedSwim = 20} else if (swimRNG >= 3 && swimRNG <= 5) {GSpeedSwim = 30} else if (swimRNG == 6) {GSpeedSwim = 40}
}

function ClimbSpeed() {
	climbRNG = Math.floor(Math.random() * 6) + 1;
	if (climbRNG >= 1 && climbRNG <= 2) {GSpeedClimb = 20} else if (climbRNG >= 3 && climbRNG <= 5) {GSpeedClimb = 30} else if (climbRNG == 6) {GSpeedClimb = 40}
}

function FlySpeed() {
	flyRNG = Math.floor(Math.random() * 6) + 1;
	if (GCreature == "Dragon" || GCreature == "Celestial") {flyRNG = flyRNG + 5} else {}
	if (flyRNG >= 1 && flyRNG <= 2) {GSpeedFly = 20} else if (flyRNG >= 3 && flyRNG <= 5) {GSpeedFly = 30} else if (flyRNG == 6) {GSpeedFly = 40} else if (flyRNG == 7) {GSpeedFly = 50} else if (flyRNG == 8 || flyRNG == 9) {GSpeedFly = 60}
	else if (flyRNG == 10) {GSpeedFly = 70} else if (flyRNG == 11) {GSpeedFly = 80}
}

function GetSave() {if (GMagic == "Martial" || GMagic == "Caster") {RNG = Math.floor(Math.random() * 6) + 1; if (RNG == 1) {GTempSave = "Str";} else if (RNG == 2) {GTempSave = "Dex";} else if (RNG == 3) {GTempSave = "Con";}
	else if (RNG == 4) {GTempSave = "Int";} else if (RNG == 5) {GTempSave = "Wis";} else if (RNG == 6) {GTempSave = "Cha";}}
	else if (GMagic == "Half") {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GTempSave = "Int";} else if (RNG == 1) {GTempSave = "Wis";} else if (RNG == 1) {GTempSave = "Cha";}}
}

function GetSaveX() {RNG = Math.floor(Math.random() * 6) + 1; if (RNG == 1) {GTempSave = "Str";} else if (RNG == 2) {GTempSave = "Dex";} else if (RNG == 3) {GTempSave = "Con";}
	else if (RNG == 4) {GTempSave = "Int";} else if (RNG == 5) {GTempSave = "Wis";} else if (RNG == 6) {GTempSave = "Cha";}
}

// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!
// BIG BOY RANDOM ENEMY GENERATOR!!!!!!!!

function FullEnemyBtn() {
	GSpell0 = ""
	GSpell1 = ""
	GSpell2 = ""
	GSpell3 = ""
	GSpell4 = ""
	GSpell5 = ""
	GSpell6 = ""
	GSpell7 = ""
	GSpell8 = ""
	GSpell9 = ""
	GStatRoll = 0
	GCR = 0
	GTier = 0
	GPB = 0
	GDarkvision = 0
	GTremorsense = 0
	GBlindsight = 0
	GTruesight = 0
	GLanguage.length = 0
	GTelepathyRange = 0
	GCreature = ""
	GHumanoid = ""
	GElemental = ""
	GSize = ""
	GMagic = ""
	GHP = 0
	GHPTotal = 0
	GHPMulti = 1
	GHitDiceQty = 0
	GHitDiceSize = 0
	GFirstStat = ""
	GSecondStat = ""
	GThirdStat = ""
	GBadStat = ""
	GStr = 0
	GStrMod = 0
	GDex = 0
	GDexMod = 0
	GCon = 0
	GConMod = 0
	GInt = 0
	GIntMod = 0
	GWis = 0
	GWisMod = 0
	GCha = 0
	GChaMod = 0
	GWeaponMod = 0
	GWeaponHit = 0
	GSpellMod = 0
	GSpellHit = 0
	GSpellDC = 0
	GSkill.length = 0
	GSave.length = 0
	GSaveBonus = 0
	GSkillBonus = 0
	GRes.length = 0
	GVuln.length = 0
	GCondImmune.length = 0
	GImmune.length = 0
	GAC = 0
	GHitPoints = ""
	GSpeedTotal = ""
	GSpeed = 0
	GSpeedFly = 0
	GSpeedSwim = 0
	GSpeedClimb = 0
	GSpeedBurrow = 0
	GTraitQty = 1
	GSpellQty.length = 0
	GSpell0 = ""
	GSpell1 = ""
	GSpell3 = ""
	GSpell5 = ""
	GMultiattack = 0
	GActionQty = 1
	GBonusQty = 1
	GRechargeQty = 1
	GReactionQty = 1
	GLegendaryQty = 1
	GLegendaryUses = 1
	GLegendaryResist = 1
	GLairActiveQty = 1
	GLairPassiveQty = 1
	GLairPassiveRange = ""
	GMod = ""
	GSpellStats = ""
	GTraitNames.length = 0
	GTraits.length = 0
	GActionNames.length = 0
	GActions.length = 0
	GBonusNames.length = 0
	GBonuses.length = 0
	GRechargeNames.length = 0
	GRecharges.length = 0
	GReactionNames.length = 0
	GReactions.length = 0
	GLegendaryNames.length = 0
	GLegendaries.length = 0
	GLairActiveNames.length = 0
	GLairActives.length = 0
	GLairPassiveNames.length = 0
	GLairPassives.length = 0
	GSpellStat = ""
	GSaveTotal = ""
	GSkillTotal = ""
	GSenseTotal = ""
	GLanguageTotal = ""
	GResTotal = ""
	GImmuneTotal = ""
	GCondImmuneTotal = ""
	GVulnTotal = ""
	GRay = ``
	GRay1 = ``
	GRay2 = ``
	GRay3 = ``
	GRay4 = ``
	GRay5 = ``
	GRay6 = ``
	GBreath = ``
	GBreathName = ``
		GetTier(); // Set Tier, CR, and PB
 // Set Creature Type
	if (document.getElementById("dropType").value == "Random") {CreatureTypeGen();}
	else {GCreature = document.getElementById("dropType").value;}
	if (GCreature == "Humanoid") {HumanoidRace();} else {}
	if (GCreature == "Elemental") {ElementalRace();} else {}
		let magicRNG = Math.floor(Math.random() * 20) + 1;
 // Set Caster Type
		if (document.getElementById("magicRandom").checked == true) {
			if (magicRNG >= 1 && magicRNG <= 12) {GMagic = "Martial";}
			else if (magicRNG >= 13 && magicRNG <= 17) {GMagic = "Half";}
			else if (magicRNG >= 18 && magicRNG <= 20) {GMagic = "Caster";}}
		else if (document.getElementById("magicMartial").checked == true) {GMagic = "Martial";}
		else if (document.getElementById("magicHalf").checked == true) {GMagic = "Half";}
		else if (document.getElementById("magicCaster").checked == true) {GMagic = "Caster";}
 // Set Hit Dice Size
			let hitDiceRNG = Math.floor(Math.random() * 4) + 1;
			if (GMagic == "Martial") {
				if (hitDiceRNG == 1) {GHitDiceSize = 10;}
				else if (hitDiceRNG == 4) {GHitDiceSize = 20;}
				else {GHitDiceSize = 12;}}
			else if (GMagic == "Half") {
				if (hitDiceRNG == 1) {GHitDiceSize = 8;}
				else if (hitDiceRNG == 4) {GHitDiceSize = 12;}
				else {GHitDiceSize = 10;}}
			else if (GMagic == "Caster") {
				if (hitDiceRNG == 1) {GHitDiceSize = 6;}
				else if (hitDiceRNG == 4) {GHitDiceSize = 10;}
				else {GHitDiceSize = 8;}}
					GHitDiceQty = Number(GCR) + 1
 // Set Flat HP Bonus
					let hpRNG = (Math.floor(Math.random() * 8) + 1) + 12;;
						if (document.getElementById("bossCheck").checked == false) {}
						else if (document.getElementById("bossCheck").checked == true) {bossHP = ((Math.floor(Math.random() * 6) + 1) + 4) / 10 + 1; hpRNG = Math.floor(hpRNG * bossHP);}
					GHP = GCR * hpRNG;
 // Pick 3 Main Stats, then rolls all stats
		MainStats();
		while (GFirstStat == GSecondStat || GFirstStat == GThirdStat || GSecondStat == GThirdStat || GFirstStat == GBadStat || GSecondStat == GBadStat || GThirdStat == GBadStat) {MainStats();}
		if (document.getElementById("bossCheck").checked == false) {RollAttribute(); GStr = GStatRoll + GPB; RollAttribute(); GDex = GStatRoll + GPB; RollAttribute(); GCon = GStatRoll + GPB;
		RollAttribute(); GInt = GStatRoll + GPB; RollAttribute(); GWis = GStatRoll + GPB; RollAttribute(); GCha = GStatRoll + GPB;}
		else if (document.getElementById("bossCheck").checked == true) {RollAttribute(); GStr = GStatRoll + GPB + 2; RollAttribute(); GDex = GStatRoll + GPB + 2; RollAttribute(); GCon = GStatRoll + GPB + 2;
		RollAttribute(); GInt = GStatRoll + GPB + 2; RollAttribute(); GWis = GStatRoll + GPB + 2; RollAttribute(); GCha = GStatRoll + GPB + 2;}
		if (GFirstStat == "Str") {GStr = GStr + 5} else if (GFirstStat == "Dex") {GDex = GDex + 5} else if (GFirstStat == "Con") {GCon = GCon + 5} else if (GFirstStat == "Int") {GInt = GInt + 5} else if (GFirstStat == "Wis") {GWis = GWis + 5} else if (GFirstStat == "Cha") {GCha = GCha + 5}
		if (GSecondStat == "Str") {GStr = GStr + 3} else if (GSecondStat == "Dex") {GDex = GDex + 3} else if (GSecondStat == "Con") {GCon = GCon + 3} else if (GSecondStat == "Int") {GInt = GInt + 3} else if (GSecondStat == "Wis") {GWis = GWis + 3} else if (GSecondStat == "Cha") {GCha = GCha + 3}
		if (GThirdStat == "Str") {GStr = GStr + 2} else if (GThirdStat == "Dex") {GDex = GDex + 2} else if (GThirdStat == "Con") {GCon = GCon + 2} else if (GThirdStat == "Int") {GInt = GInt + 2} else if (GThirdStat == "Wis") {GWis = GWis + 2} else if (GThirdStat == "Cha") {GCha = GCha + 2}
		if (GBadStat == "Str") {GStr = GStr - 7} else if (GBadStat == "Dex") {GDex = GDex - 7} else if (GBadStat == "Con") {GCon = GCon - 7} else if (GBadStat == "Int") {GInt = GInt - 7} else if (GBadStat == "Wis") {GWis = GWis - 7} else if (GBadStat == "Cha") {GCha = GCha - 7} else {}
 // Pick a size and multiattack
			GetSize();
			RNG = Math.floor(Math.random() * 4) + 1;
				if (GCR >= 1 && GCR <= 5)   {if (RNG > 2) {GMultiattack = 2;} else {GMultiattack = 0;}}
				if (GCR >= 6 && GCR <= 10)  {if (RNG == 1) {GMultiattack = 3;} else if (RNG == 2) {GMultiattack = 3} else {GMultiattack = 2;}}
				if (GCR >= 11 && GCR <= 17) {if (RNG == 1) {GMultiattack = 3;} else if (RNG == 2) {GMultiattack = 4} else {GMultiattack = 2;}}
				if (GCR >= 18 && GCR <= 25) {if (RNG == 1) {GMultiattack = 4;} else if (RNG == 2) {GMultiattack = 4} else {GMultiattack = 3;}}
				if (GCR >= 26 && GCR <= 32) {if (RNG == 1) {GMultiattack = 4;} else if (RNG == 2) {GMultiattack = 5} else {GMultiattack = 3;}}
				if (GCR >= 33 && GCR <= 39) {if (RNG == 1) {GMultiattack = 5;} else if (RNG == 2) {GMultiattack = 5} else {GMultiattack = 4;}}
				if (GCR >= 40 && GCR <= 48) {if (RNG == 1) {GMultiattack = 5;} else if (RNG == 2) {GMultiattack = 6} else {GMultiattack = 4;}}
				if (GCR >= 49 && GCR <= 50) {if (RNG == 1) {GMultiattack = 7;} else if (RNG == 2) {GMultiattack = 6} else {GMultiattack = 5;}}
			if (GMagic == "Half") {GMultiattack -= 1;} else if (GMagic == "Caster") {GMultiattack -= 3;}
			if (GMultiattack < 0) {GMultiattack = 0;} else {}
 // Get Trait Qty
			traitRNG = Math.floor(Math.random() * 2) + 1;
			if (GTier == 1) {GTraitQty = 1;}
			else if (GTier == 2) {if (traitRNG == 1) {GTraitQty = 1;} else {GTraitQty = 2;}} else if (GTier == 3) {if (traitRNG == 1) {GTraitQty = 2;} else {GTraitQty = 3;}}
			else if (GTier == 4) {if (traitRNG == 1) {GTraitQty = 3;} else {GTraitQty = 4;}} else if (GTier == 5) {if (traitRNG == 1) {GTraitQty = 3;} else {GTraitQty = 4;}}
			else if (GTier == 6) {if (traitRNG == 1) {GTraitQty = 4;} else {GTraitQty = 4;}} else if (GTier == 7) {if (traitRNG == 1) {GTraitQty = 4;} else {GTraitQty = 5;}}
			else if (GTier == 8) {if (traitRNG == 1) {GTraitQty = 5;} else {GTraitQty = 5;}} else if (GTier == 9) {if (traitRNG == 1) {GTraitQty = 5;} else {GTraitQty = 6;}}
			else if (GTier == 10) {if (traitRNG == 1) {GTraitQty = 5;} else {GTraitQty = 6;}} else if (GTier == 11) {if (traitRNG == 1) {GTraitQty = 6;} else {GTraitQty = 6;}}
			else if (GTier == 12) {if (traitRNG == 1) {GTraitQty = 6;} else {GTraitQty = 7;}} else if (GTier == 13) {if (traitRNG == 1) {GTraitQty = 7;} else {GTraitQty = 7;}}
			if (document.getElementById("bossCheck").checked == true) {bossTrait = Math.floor(Math.random() * 2) + 1; if (bossTrait == 1) {GTraitQty = GTraitQty + 1;} else {GTraitQty = GTraitQty + 2;}}
 // Get Action Qty
		actRNG = Math.floor(Math.random() * 3) + 1;
		if (GTier == 1 || GTier == 2) {if (actRNG == 1) {GActionQty = 1;} else {GActionQty = 2;}}
		else if (GTier == 3 || GTier == 4) {if (actRNG == 1) {GActionQty = 3;} else {GActionQty = 2;}} else if (GTier == 5 || GTier == 6) {if (actRNG == 1) {GActionQty = 2;} else if (actRNG == 2) {GActionQty = 3;} else {GActionQty = 4;}}
		else if (GTier == 7 || GTier == 8) {if (actRNG == 1) {GActionQty = 4;} else {GActionQty = 3;}} else if (GTier == 9 || GTier == 10) {if (actRNG == 1) {GActionQty = 4;} else {GActionQty = 3;}}
		else if (GTier == 11 || GTier == 12) {if (actRNG == 1) {GActionQty = 4;} else {GActionQty = 4;}} else if (GTier == 13 ) {if (actRNG == 1) {GActionQty = 5;} else {GActionQty = 4;}}
			if (document.getElementById("bossCheck").checked == true) {bonusRNG = Math.floor(Math.random() * 2) + 1;} else {bonusRNG = Math.floor(Math.random() * 3) + 1;} // Get Bonus Action Qty
			if (GTier >= 1 && GTier <= 3) {if (bonusRNG == 1) {GBonusQty = 1;} else {GBonusQty = 0;}} else if (GTier >= 4 && GTier <= 8) {if (bonusRNG == 1) {GBonusQty = 2;} else {GBonusQty = 1;}}
			else if (GTier >= 9 && GTier <= 13) {if (bonusRNG == 1) {GBonusQty = 3;} else {GBonusQty = 2;}}
 // Get Reaction Qty
		reactRNG = Math.floor(Math.random() * 20) + 1;
		if (reactRNG <= 4) {GReactionQty = 1;} else {GReactionQty = 0;}
		if (document.getElementById("reactionCheck").checked == true) {GReactionQty += 1}
 // Get Recharge Qty
			rechargeRNG = Math.floor(Math.random() * 10) + 1;
			if (document.getElementById("bossCheck").checked == true && rechargeRNG <= 8) {GRechargeQty = 1;} else if (document.getElementById("bossCheck").checked == true && rechargeRNG >= 9) {GRechargeQty = 2;}
			else if (document.getElementById("bossCheck").checked == false && rechargeRNG == 2) {GRechargeQty = 1;} else if (document.getElementById("bossCheck").checked == false && rechargeRNG >= 3) {GRechargeQty = 0;}
			if (document.getElementById("rechargeCheck").checked == true) {GRechargeQty += 1}
 // Get Legendary Action Qty
		if (document.getElementById("bossCheck").checked == false) {GLegendaryQty = 0;} else {legRNG = Math.floor(Math.random() * 10) + 1 ;
			if (legRNG >= 1 && legRNG <= 3) {GLegendaryQty = 2;} else if (legRNG >= 4 && legRNG <= 7) {GLegendaryQty = 3;} else if (legRNG >= 8 && legRNG <= 9) {GLegendaryQty = 4;} else if (legRNG == 10) {GLegendaryQty = 5;}}
 // Get Legendary Uses Qty
		if (document.getElementById("bossCheck").checked == false) {GLegendaryUses = 0;} else {if (GTier == 1) {GLegendaryUses = 2;} else if (GTier >= 2 && GTier <= 6) {GLegendaryUses = 3;} else if (GTier >= 7 && GTier <= 10) {GLegendaryUses = 4;}
		else if (GTier >= 11) {GLegendaryUses = 4;}}
 // Get Legendary Resistances Qty
		if (document.getElementById("bossCheck").checked == false) {GLegendaryResist = 0;} else {if (GTier == 1) {GLegendaryResist = 1;} else if (GTier == 2) {GLegendaryResist = 2;} else if (GTier >= 3 && GTier <= 6) {GLegendaryResist = 3;}
		else if (GTier >= 7 && GTier <= 10) {GLegendaryResist = 4;} else if (GTier >= 11) {GLegendaryResist = 5;}}
 // Get Lair Actives Qty
		if (document.getElementById("lairCheck").checked == false) {GLairActiveQty = 0;} else {lairRNG = Math.floor(Math.random() * 5) + 1;
			if (lairRNG >= 1 && lairRNG <= 2) {GLairActiveQty = 2;} else if (lairRNG >= 3 && lairRNG <= 4) {GLairActiveQty = 3;} else if (lairRNG == 5) {GLairActiveQty = 4;}}
 // Get Lair Passives Qty and Range
		rangeRNG = Math.floor(Math.random() * 10) + 1;
		if (rangeRNG == 1) {GLairPassiveRange = "half a mile";} else if (rangeRNG == 2) {GLairPassiveRange = "1 mile";} else if (rangeRNG == 3) {GLairPassiveRange = "2 miles";} else if (rangeRNG == 4) {GLairPassiveRange = "4 miles";}
		else if (rangeRNG == 5) {GLairPassiveRange = "5 miles";} else if (rangeRNG == 6) {GLairPassiveRange = "6 miles";} else if (rangeRNG == 7) {GLairPassiveRange = "8 miles";} else if (rangeRNG == 8) {GLairPassiveRange = "10 miles";}
		else if (rangeRNG == 9) {GLairPassiveRange = "15 miles";} else if (rangeRNG == 10) {GLairPassiveRange = "20 miles";}
		if (document.getElementById("lairCheck").checked == false) {GLairPassiveQty = 0;} else {passRNG = Math.floor(Math.random() * 7) + 1;
			if (passRNG >= 1 && passRNG <= 2) {GLairPassiveQty = 1;} else if (passRNG >= 3 && passRNG <= 4) {GLairPassiveQty = 2;} else if (passRNG >= 5 && passRNG <= 6) {GLairPassiveQty = 3;} else if (passRNG == 7) {GLairPassiveQty = 4;}}
 // Get Speed
		if (GCreature == "Aberration") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 25;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			burRNG = Math.floor(Math.random() * 20) + 1; if (burRNG <= 3) {BurrowSpeed();} else {}
			climbRNG = Math.floor(Math.random() * 20) + 1; if (climbRNG <= 3) {ClimbSpeed();} else {}}
		else if (GCreature == "Beast") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			burRNG = Math.floor(Math.random() * 20) + 1; if (burRNG <= 4) {BurrowSpeed();} else {}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 4) {SwimSpeed();} else {}
			climbRNG = Math.floor(Math.random() * 20) + 1; if (climbRNG <= 3) {ClimbSpeed();} else {}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 4) {FlySpeed();} else {}}
		else if (GCreature == "Celestial") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 10) {FlySpeed();} else {}}
		else if (GCreature == "Construct") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 25;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 1) {SwimSpeed();} else {}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 1) {FlySpeed();} else {}}
		else if (GCreature == "Dragon") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			burRNG = Math.floor(Math.random() * 20) + 1; if (burRNG <= 5) {BurrowSpeed();} else {}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 2) {SwimSpeed();} else {}
			climbRNG = Math.floor(Math.random() * 20) + 1; if (climbRNG <= 2) {ClimbSpeed();} else {}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 19) {FlySpeed();} else {}}
		else if (GCreature == "Elemental") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			if (GElemental == "Earth") {BurrowSpeed();} else {}
			if (GElemental == "Water") {SwimSpeed();} else {}
			if (GElemental == "Air") {FlySpeed();} else {}}
		else if (GCreature == "Fey") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 2) {SwimSpeed();} else {}
			climbRNG = Math.floor(Math.random() * 20) + 1; if (climbRNG <= 2) {ClimbSpeed();} else {}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 10) {FlySpeed();} else {}}
		else if (GCreature == "Fiend") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 2) {SwimSpeed();} else {}
			climbRNG = Math.floor(Math.random() * 20) + 1; if (climbRNG <= 4) {ClimbSpeed();} else {}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 4) {FlySpeed();} else {}}
		else if (GCreature == "Giant") {GSpeed = 40;}
		else if (GCreature == "Humanoid") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 2) {SwimSpeed();} else {}}
		else if (GCreature == "Monstrosity") {RNG = Math.floor(Math.random() * 5) + 1;
			if (RNG == 5) {GSpeed = 40;} else if (RNG == 4) {GSpeed = 35;} else {GSpeed = 30;}
			burRNG = Math.floor(Math.random() * 20) + 1; if (burRNG <= 3) {BurrowSpeed();} else {}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 4) {SwimSpeed();} else {}
			climbRNG = Math.floor(Math.random() * 20) + 1; if (climbRNG <= 4) {ClimbSpeed();} else {}
			flyRNG = Math.floor(Math.random() * 20) + 1; if (flyRNG <= 4) {FlySpeed();} else {}}
		else if (GCreature == "Plant" || GCreature == "Ooze") {RNG = Math.floor(Math.random() * 4) + 1;
			if (RNG == 1) {GSpeed = 10;} else if (RNG == 2) {GSpeed = 15;} else if (RNG == 3) {GSpeed = 20;} else if (RNG == 4) {GSpeed = 25;}}
		else if (GCreature == "Undead") {RNG = Math.floor(Math.random() * 8) + 1;
			if (RNG >= 1 && RNG <= 4) {GSpeed = 20;} else if (RNG >= 5 && RNG <= 7) {GSpeed = 30;} else if (RNG == 8) {GSpeed = 40;}
			swimRNG = Math.floor(Math.random() * 20) + 1; if (swimRNG <= 2) {SwimSpeed();} else {}}
		if (document.getElementById("swimCheck").checked == true && GSpeedSwim <= 0) {SwimSpeed();} else {}
		if (document.getElementById("burrowCheck").checked == true && GSpeedBurrow <= 0) {BurrowSpeed();} else {}
		if (document.getElementById("climbCheck").checked == true && GSpeedClimb <= 0) {ClimbSpeed();} else {}
		if (document.getElementById("flyCheck").checked == true && GSpeedFly <= 0) {FlySpeed();} else {}
 // Get Spell Slots
	if (GMagic == "Caster") {
		if (GTier == 1) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(1);}
			GSpellQty.push(0); GSpellQty.push(0); GSpellQty.push(1);}
		else if (GTier == 2) {GSpellQty.push(1); GSpellQty.push(0); GSpellQty.push(1);
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}}
		else if (GTier == 3) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			GSpellQty.push(0); RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);} GSpellQty.push(2);}
		else if (GTier == 4) {GSpellQty.push(2); GSpellQty.push(1); GSpellQty.push(2);
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}}
		else if (GTier == 5) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}}
		else if (GTier == 6) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}}
		else if (GTier == 7) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(4);}}
		else if (GTier == 8) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(5);}}
		else if (GTier == 9) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(5);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(5);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(5);}}
		else if (GTier == 10) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(5);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(5);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(6);}}
		else if (GTier == 11) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(6);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(5);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(6);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(6);} else {GSpellQty.push(6);}}
		else if (GTier == 12) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(6);} else {GSpellQty.push(6);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(5);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(6);} else {GSpellQty.push(6);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(6);} else {GSpellQty.push(7);}}
		else if (GTier == 13) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(6);} else {GSpellQty.push(7);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(5);} else {GSpellQty.push(6);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(6);} else {GSpellQty.push(7);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(7);} else {GSpellQty.push(8);}}
				if (GTier == 1) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;} else {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;}}}
				else if (GTier == 2) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell1 += `${GSpellGen4}${spacerX}`;}}}
				else if (GTier == 3) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell1 += `${GSpellGen5}${spacerX}`;} else {Spell6(); GSpell1 += `${GSpellGen6}${spacerX}`;}}}
				else if (GTier == 4) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell1 += `${GSpellGen5}${spacerX}`;} else if (RNG == 2) {Spell5(); GSpell1 += `${GSpellGen5}${spacerX}`;}
						else if (RNG == 3) {Spell6(); GSpell1 += `${GSpellGen6}${spacerX}`;} else if (RNG == 4) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;}}}
				else if (GTier == 5) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell3 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell1 += `${GSpellGen6}${spacerX}`;} else if (RNG == 2) {Spell6(); GSpell1 += `${GSpellGen6}${spacerX}`;}
						else if (RNG == 3) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;} else if (RNG == 4) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;}}}
				else if (GTier == 6) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell3 += `${GSpellGen4}${spacerX}`;} else {Spell4(); GSpell3 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell1 += `${GSpellGen6}${spacerX}`;} else if (RNG == 2) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;}
						else if (RNG == 3) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else if (RNG == 4) {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 7) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell0 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell5 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell3 += `${GSpellGen4}${spacerX}`;} else {Spell5(); GSpell3 += `${GSpellGen5}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell1 += `${GSpellGen6}${spacerX}`;} else if (RNG == 2) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;}
						else if (RNG == 3) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else if (RNG == 4) {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 8) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell0 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell0 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell5 += `${GSpellGen4}${spacerX}`;} else {Spell4(); GSpell5 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell3 += `${GSpellGen5}${spacerX}`;} else {Spell0(); GSpell3 += `${GSpellGen5}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;} else if (RNG == 2) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;}
						else if (RNG == 3) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else if (RNG == 4) {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 9) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell0 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell0 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell5 += `${GSpellGen4}${spacerX}`;} else {Spell5(); GSpell5 += `${GSpellGen5}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell3 += `${GSpellGen5}${spacerX}`;} else {Spell6(); GSpell3 += `${GSpellGen6}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;} else if (RNG == 2) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;}
						else if (RNG == 3) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else if (RNG == 4) {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 10) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell0 += `${GSpellGen4}${spacerX}`;} else {Spell4(); GSpell0 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell5 += `${GSpellGen5}${spacerX}`;} else {Spell5(); GSpell5 += `${GSpellGen5}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell3 += `${GSpellGen6}${spacerX}`;} else {Spell6(); GSpell3 += `${GSpellGen6}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 4) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;} else if (RNG == 2) {Spell7(); GSpell1 += `${GSpellGen7}${spacerX}`;}
						else if (RNG == 3) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else if (RNG == 4) {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 11) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell0 += `${GSpellGen4}${spacerX}`;} else {Spell5(); GSpell0 += `${GSpellGen5}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell5 += `${GSpellGen5}${spacerX}`;} else {Spell6(); GSpell5 += `${GSpellGen6}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell3 += `${GSpellGen6}${spacerX}`;} else {Spell7(); GSpell3 += `${GSpellGen7}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 12) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell0 += `${GSpellGen5}${spacerX}`;} else {Spell5(); GSpell0 += `${GSpellGen5}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell5 += `${GSpellGen6}${spacerX}`;} else {Spell6(); GSpell5 += `${GSpellGen6}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell7(); GSpell3 += `${GSpellGen7}${spacerX}`;} else {Spell7(); GSpell3 += `${GSpellGen7}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
				else if (GTier == 13) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell5(); GSpell0 += `${GSpellGen5}${spacerX}`;} else {Spell6(); GSpell0 += `${GSpellGen6}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell6(); GSpell5 += `${GSpellGen6}${spacerX}`;} else {Spell7(); GSpell5 += `${GSpellGen7}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell7(); GSpell3 += `${GSpellGen7}${spacerX}`;} else {Spell8(); GSpell3 += `${GSpellGen8}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell8(); GSpell1 += `${GSpellGen8}${spacerX}`;} else {Spell9(); GSpell1 += `${GSpellGen9}${spacerX}`;}}}
			}
	else if (GMagic == "Half") {
		if (GTier == 1) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}}
		else if (GTier == 2) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}}
		else if (GTier == 3) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}}
		else if (GTier == 4) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}}
		else if (GTier == 5) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}}
		else if (GTier == 6) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(0);} else {GSpellQty.push(0);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}}
		else if (GTier == 7) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}}
		else if (GTier == 8) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(1);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}}
		else if (GTier == 9) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}}
		else if (GTier == 10) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(1);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}}
		else if (GTier == 11) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}}
		else if (GTier == 12) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(2);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}}
		else if (GTier == 13) {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(4);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(2);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(3);} else {GSpellQty.push(3);}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GSpellQty.push(4);} else {GSpellQty.push(4);}}
				if (GTier == 1) {
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell1 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell1 += `${GSpellGen1}${spacerX}`;}}}
				else if (GTier == 2) {
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell1 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;}}}
				else if (GTier == 3) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;} else {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell1 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;}}}
				else if (GTier == 4) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;} else {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell3 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell3 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;}}}
				else if (GTier == 5) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell3 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;}}}
				else if (GTier == 6) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell0(); GSpell0 += `${GSpellGen0}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell3 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;}}}
				else if (GTier == 7) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell5 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell5 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell1 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;}}}
				else if (GTier == 8) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell5 += `${GSpellGen1}${spacerX}`;} else {Spell1(); GSpell5 += `${GSpellGen1}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;}}}
				else if (GTier == 9) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell5 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;}}}
				else if (GTier == 10) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell0 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell1(); GSpell5 += `${GSpellGen1}${spacerX}`;} else {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell3 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell1 += `${GSpellGen4}${spacerX}`;}}}
				else if (GTier == 11) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell1 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell1 += `${GSpellGen4}${spacerX}`;}}}
				else if (GTier == 12) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;} else {Spell2(); GSpell0 += `${GSpellGen2}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell2(); GSpell5 += `${GSpellGen2}${spacerX}`;} else {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell3 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell4(); GSpell1 += `${GSpellGen4}${spacerX}`;} else {Spell3(); GSpell1 += `${GSpellGen4}${spacerX}`;}}}
				else if (GTier == 13) {
					spellNum = GSpellQty[0]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell0 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell0 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[1]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;} else {Spell3(); GSpell5 += `${GSpellGen3}${spacerX}`;}}
					spellNum = GSpellQty[2]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
						if (RNG == 1) {Spell3(); GSpell3 += `${GSpellGen3}${spacerX}`;} else {Spell4(); GSpell3 += `${GSpellGen4}${spacerX}`;}}
					spellNum = GSpellQty[3]; while (spellNum > 0) {spellNum -= 1; RNG = Math.floor(Math.random() * 2) + 1; if (spellNum == 0) {spacerX = "";} else {spacerX = ", ";}
				if (RNG == 1) {Spell5(); GSpell1 += `${GSpellGen5}${spacerX}`;} else {Spell5(); GSpell1 += `${GSpellGen5}${spacerX}`;}}}}
		
 // Random Enemy Modifier Chance 5%, 15% boss, 2% double boss
			let modRNG
			let modTwo;
			if (document.getElementById("enemyModCheck").checked == true) {modRNG = Math.floor(Math.random() * 17) + 1;} else {modRNG = Math.floor(Math.random() * 100) + 1;}
			if (document.getElementById("bossCheck").checked == true) {if (modRNG >= 1 && modRNG <= 15) {EnemyGenMod(); GModX = true;} else {if (modRNG >= 16 && modRNG <= 17) {EnemyGenMod(); GModX = true; modTwo = GMod; EnemyGenMod(); GMod = `${GMod}\n\n${modTwo}`;} else { GModX = false;}}}
			else if (document.getElementById("bossCheck").checked == false) {
				if (modRNG >= 1 && modRNG <= 5) {EnemyGenMod(); GModX = true;} else { GModX = false;}}
// Random Traits based on Qty
			let zNum = GTraitQty;
			while (zNum > 0) {zNum -= 1; EnemyTrait();}
// Get Languages
			RNG = Math.floor(Math.random() * 7);
			if (RNG == 1) {if (GLanguage.includes("common") == false) {GLanguage.push("common")} else {}}
			RNG = Math.floor(Math.random() * 6);
			if (RNG == 1) {if (GLanguage.includes("undercommon") == false) {GLanguage.push("undercommon")} else {}}
			RNG = Math.floor(Math.random() * 9);
			if (RNG == 1) {if (GLanguage.includes("dwarvish") == false) {GLanguage.push("dwarvish")} else {}}
			RNG = Math.floor(Math.random() * 12);
			if (RNG == 1) {if (GLanguage.includes("elvish") == false) {GLanguage.push("elvish")} else {}}
			RNG = Math.floor(Math.random() * 9);
			if (RNG == 1) {if (GLanguage.includes("giant") == false) {GLanguage.push("giant")} else {}}
			RNG = Math.floor(Math.random() * 8);
			if (RNG == 1) {if (GLanguage.includes("goblin") == false) {GLanguage.push("goblin")} else {}}
			RNG = Math.floor(Math.random() * 10);
			if (RNG == 1) {if (GLanguage.includes("orc") == false) {GLanguage.push("orc")} else {}}
			RNG = Math.floor(Math.random() * 25);
			if (RNG == 1) {if (GLanguage.includes("abyssal") == false) {GLanguage.push("abyssal")} else {}}
			RNG = Math.floor(Math.random() * 35);
			if (RNG == 1) {if (GLanguage.includes("celestial") == false) {GLanguage.push("celestial")} else {}}
			RNG = Math.floor(Math.random() * 8);
			if (RNG == 1) {if (GLanguage.includes("draconic") == false) {GLanguage.push("draconic")} else {}}
			RNG = Math.floor(Math.random() * 35);
			if (RNG == 1) {if (GLanguage.includes("deep speech") == false) {GLanguage.push("deep speech")} else {}}
			RNG = Math.floor(Math.random() * 20);
			if (RNG == 1) {if (GLanguage.includes("infernal") == false) {GLanguage.push("infernal")} else {}}
			RNG = Math.floor(Math.random() * 35);
			if (RNG == 1) {if (GLanguage.includes("primordial") == false) {GLanguage.push("primordial")} else {}}
			RNG = Math.floor(Math.random() * 35);
			if (RNG == 1) {if (GLanguage.includes("sylvan") == false) {GLanguage.push("sylvan")} else {}}
// Creature-Type Specifics
			if (GCreature == "Aberration") {if (GLanguage.includes("deep speech") == false) {GLanguage.push("deep speech")} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GLanguage.includes("undercommon") == false) {GLanguage.push("undercommon")} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange = 120} else {}} else {}
				if (GDarkvision == 0) {GDarkvision = 60} RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GTremorsense == 0) {GTremorsense = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 50) + 1; if (RNG == 1) {if (GTruesight == 0) {GTruesight = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GRes.includes("cold") == false) {GRes.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("poison") == false) {GRes.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 18) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GImmune.includes("psychic") == false) {GImmune.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 50) + 1; if (RNG == 1) {if (GImmune.includes("cold") == false) {GImmune.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("force") == false) {GVuln.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GTraitNames.push(`Alien Mind`); GTraits.push(`If an enemy tries to read the creature's’s thoughts or deals psychic damage to it, that enemy must succeed on a DC ${GTier + 13} Intelligence saving throw or be stunned for 1 minute. The stunned enemy can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`);} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {GTraitNames.push(`Umbral Sight`); GTraits.push(`While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness.`); GDarkvision += 60} else {}
			} else {}
			if (GCreature == "Beast") {GInt -= 5; if (GInt > 3) {GInt = 3} else {} RNG = Math.floor(Math.random() * 4) + 1; if (GInt <= 4 || RNG == 1) {GLanguage.length = 0} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG >= 3) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GTremorsense == 0) {GTremorsense = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("acid") == false) {GRes.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("slashing") == false) {GRes.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("piercing") == false) {GRes.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("poison") == false) {GRes.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("cold") == false) {GRes.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("fire") == false) {GRes.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG == 1) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG == 1) {if (GImmune.includes("cold") == false) {GImmune.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG == 1) {if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 50) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("prone") == false) {GCondImmune.push("prone")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("psychic") == false) {GVuln.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {}} else {}
			} else {}
			if (GCreature == "Celestial") {if (GLanguage.includes("celestial") == false) {GLanguage.push("celestial")} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 7) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange = 120} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 18) {if (GTruesight == 0) {GTruesight = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 4) {if (GRes.includes("radiant") == false) {GRes.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("fire") == false) {GRes.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 18) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("physical") == false) {GRes.push("physical")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("force") == false) {GRes.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GImmune.includes("radiant") == false) {GImmune.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 50) + 1; if (RNG == 1) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("charmed") == false) {GCondImmune.push("charmed")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("blinded") == false) {GCondImmune.push("blinded")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("deafened") == false) {GCondImmune.push("deafened")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("petrified") == false) {GCondImmune.push("petrified")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 18) {if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("acid") == false) {GVuln.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {GBonusNames.push(`Eyes of the Law`); GBonuses.push(`As a bonus action, the creature can target a creature it can see within 120 feet of it and determine which laws that creature has broken in the last 24 hours.`);} else {}
			} else {}
			if (GCreature == "Construct") {
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GTremorsense == 0) {GTremorsense = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("slashing") == false) {GRes.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("piercing") == false) {GRes.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("fire") == false) {GRes.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("cold") == false) {GRes.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("lightning") == false) {GRes.push("lightning")} else {}} else {}
				if (GRes.includes("poison") == false) {GRes.push("poison")} else {} if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GImmune.includes("psychic") == false) {GImmune.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 4) {if (GCondImmune.includes("exhaustion") == false) {GCondImmune.push("exhaustion")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("charmed") == false) {GCondImmune.push("charmed")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("petrified") == false) {GCondImmune.push("petrified")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("paralyzed") == false) {GCondImmune.push("paralyzed")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GCondImmune.includes("stunned") == false) {GCondImmune.push("stunned")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GVuln.includes("force") == false) {GVuln.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("acid") == false) {GVuln.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GBonusNames.push(`Repair (3/day)`); GBonuses.push(`The magical mechanisms inside the creature restore ${Math.ceil(GPB / 3) + 1}d8 + ${GTier} hit points to itself or to one construct or object within 5 feet of it.`);} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GTraitNames.push(`Immutable Form`); GTraits.push(`The creature is immune to any spell or effect that would alter its form.`);} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GTraitNames.push(`Mechanical Resilience`); GTraits.push(`The creature has advantage on saving throws against being poisoned and is immune to disease. Magic can’t put it to sleep.`);} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {GTraitNames.push(`Antimagic Susceptibility`); GTraits.push(`The creature is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the creature must succeed on a Constitution saving throw against the caster’s spell save DC or fall unconscious for 1 minute.`);} else {}
			} else {}
			if (GCreature == "Dragon") {
				if (GLanguage.includes("draconic") == false) {GLanguage.push("draconic")} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG <= 2) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 120} else {GTelepathyRange += 120}} else {}
				if (GDarkvision == 0) {GDarkvision = 60} else {GDarkvision += 60}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG  == 1) {if (GBlindsight == 0) {GBlindsight = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 3) {if (GTremorsense == 0) {GTremorsense = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GTruesight == 0) {GTruesight = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; xRNG = Math.floor(Math.random() * 21) + 1;
					if (RNG == 1) {if (xRNG = 1) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else if (GRes.includes("fire") == false) {GRes.push("fire")}} if (GVuln.includes("cold") == false) {GVuln.push("cold")}}
					else if (RNG == 2) {if (xRNG = 1) {if (GImmune.includes("cold") == false) {GImmune.push("cold")} else if (GRes.includes("cold") == false) {GRes.push("cold")}} if (GVuln.includes("fire") == false) {GVuln.push("fire")}}
					else if (RNG == 3) {if (xRNG = 1) {if (GImmune.includes("radiant") == false) {GImmune.push("radiant")} else if (GRes.includes("radiant") == false) {GRes.push("radiant")}} if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")}}
					else if (RNG == 4) {if (xRNG = 1) {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic")} else if (GRes.includes("necrotic") == false) {GRes.push("necrotic")}} if (GVuln.includes("radiant") == false) {GVuln.push("radiant")}}
					else if (RNG == 5) {if (xRNG = 1) {if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else if (GRes.includes("lightning") == false) {GRes.push("lightning")}} if (GVuln.includes("thunder") == false) {GVuln.push("thunder")}}
					else if (RNG == 6) {if (xRNG = 1) {if (GImmune.includes("thunder") == false) {GImmune.push("thunder")} else if (GRes.includes("thunder") == false) {GRes.push("thunder")}} if (GVuln.includes("lightning") == false) {GVuln.push("lightning")}}
					else if (RNG == 7) {if (xRNG = 1) {if (GImmune.includes("force") == false) {GImmune.push("force")} else if (GRes.includes("force") == false) {GRes.push("force")}} if (GVuln.includes("psychic") == false) {GVuln.push("psychic")}}
					else if (RNG == 8) {if (xRNG = 1) {if (GImmune.includes("psychic") == false) {GImmune.push("psychic")} else if (GRes.includes("psychic") == false) {GRes.push("psychic")}} if (GVuln.includes("force") == false) {GVuln.push("force")}}
					else if (RNG == 9) {if (GRes.includes("physical") == false) {GRes.push("physical")} if (GVuln.includes("psychic") == false) {GVuln.push("psychic")}}
					else if (RNG == 10) {if (xRNG = 1) {if (GImmune.includes("poison") == false) {GImmune.push("poison")} else if (GRes.includes("poison") == false) {GRes.push("poison")}} if (GVuln.includes("radiant") == false) {GVuln.push("radiant")}}
					else if (RNG == 11) {if (xRNG = 1) {if (GImmune.includes("radiant") == false) {GImmune.push("radiant")} else if (GRes.includes("radiant") == false) {GRes.push("radiant")}} if (GVuln.includes("poison") == false) {GVuln.push("poison")}}
					else if (RNG == 12) {if (xRNG = 1) {if (GImmune.includes("force") == false) {GImmune.push("force")} else if (GRes.includes("force") == false) {GRes.push("force")}} if (GVuln.includes("acid") == false) {GVuln.push("acid")}}
					else if (RNG == 13) {if (xRNG = 1) {if (GImmune.includes("acid") == false) {GImmune.push("acid")} else if (GRes.includes("acid") == false) {GRes.push("acid")}} if (GVuln.includes("force") == false) {GVuln.push("force")}}
					else if (RNG == 14) {if (xRNG = 1) {if (GImmune.includes("bludgeoning") == false) {GImmune.push("bludgeoning")} else if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")}} if (GVuln.includes("poison") == false) {GVuln.push("poison")}}
					else if (RNG == 15) {if (xRNG = 1) {if (GImmune.includes("poison") == false) {GImmune.push("poison")} else if (GRes.includes("poison") == false) {GRes.push("poison")}} if (GVuln.includes("bludgeoning") == false) {GVuln.push("bludgeoning")}}
					else if (RNG == 16) {if (xRNG = 1) {if (GImmune.includes("slashing") == false) {GImmune.push("slashing")} else if (GRes.includes("slashing") == false) {GRes.push("slashing")}} if (GVuln.includes("acid") == false) {GVuln.push("acid")}}
					else if (RNG == 17) {if (xRNG = 1) {if (GImmune.includes("acid") == false) {GImmune.push("acid")} else if (GRes.includes("acid") == false) {GRes.push("acid")}} if (GVuln.includes("slashing") == false) {GVuln.push("slashing")}}
					else if (RNG == 18) {if (xRNG = 1) {if (GImmune.includes("piercing") == false) {GImmune.push("piercing")} else if (GRes.includes("piercing") == false) {GRes.push("piercing")}} if (GVuln.includes("thunder") == false) {GVuln.push("thunder")}}
					else if (RNG == 19) {if (xRNG = 1) {if (GImmune.includes("thunder") == false) {GImmune.push("thunder")} else if (GRes.includes("thunder") == false) {GRes.push("thunder")}} if (GVuln.includes("piercing") == false) {GVuln.push("piercing")}}
					else if (RNG == 20) {if (xRNG = 1) {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic")} else if (GRes.includes("necrotic") == false) {GRes.push("necrotic")}} if (GVuln.includes("fire") == false) {GVuln.push("fire")}}
					else if (RNG == 21) {if (xRNG = 1) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else if (GRes.includes("fire") == false) {GRes.push("fire")}} if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")}}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("stunned") == false) {GCondImmune.push("stunned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("paralyzed") == false) {GCondImmune.push("paralyzed")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {RandomBreath(); GRechargeNames.push(GBreathName); GRecharges.push(GBreath);} else {}
			} else {}
			if (GCreature == "Elemental") {
				if (GElemental == "Fire") {
					if (GLanguage.includes("primordial (ignan)") == false) {GLanguage.push("primordial (ignan)")} else {}
					if (GImmune.includes("fire") == false) {GImmune.push("fire")} else {}
					if (GRes.includes("radiant") == false) {GRes.push("radiant")} else {}
					if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}
					GCha += 3;
					RNG = Math.floor(Math.random() * 6) + 1; if (RNG == 1) {GTraitNames.push(`Illumination`); GTraits.push(`The creature sheds bright light in a 30-foot radius and light in an additional 30 ft.`);} else {}
				}
				if (GElemental == "Water") {
					if (GLanguage.includes("primordial (aquan)") == false) {GLanguage.push("primordial (aquan)")} else {}
					if (GImmune.includes("cold") == false) {GImmune.push("cold")} else {}
					if (GRes.includes("poison") == false) {GRes.push("poison")} else {}
					if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {}
					if (GSpeedSwim > 0) {GSpeedSwim += 10} else {GSpeedSwim += 40}
					GWis += 3;
				}
				if (GElemental == "Earth") {
					if (GLanguage.includes("primordial (terran)") == false) {GLanguage.push("primordial (terran)")} else {}
					if (GTremorsense == 0) {GTremorsense = 60} else {GTremorsense += 30}
					if (GImmune.includes("bludgeoning") == false) {GImmune.push("bludgeoning")} else {}
					if (GRes.includes("fire") == false) {GRes.push("fire")} else {}
					if (GVuln.includes("force") == false) {GVuln.push("force")} else {}
					if (GCondImmune.includes("petrified") == false) {GCondImmune.push("petrified")} else {}
					if (GSpeedClimb > 0) {GSpeedClimb += 10} else {GSpeedClimb += 40}
					GStr += 2; GCon += 2; GAC += 2;
					RNG = Math.floor(Math.random() * 6) + 1; if (RNG == 1) {GTraitNames.push(`Earth Glide`); GTraits.push(`The creature can burrow through nonmagical, unworked earth and stone. While doing so, the creature doesn't disturb the material it moves through.`);} else {}
					RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {GTraitNames.push(`Siege Monster`); GTraits.push(`The creature deals double damage to objects and structures.`);} else {}
				}
				if (GElemental == "Air") {
					if (GLanguage.includes("primordial (auran)") == false) {GLanguage.push("primordial (auran)")} else {}
					if (GTremorsense == 0) {GBlindsight = 30} else {GBlindsight += 10}
					if (GImmune.includes("thunder") == false) {GImmune.push("thunder")} else {}
					if (GRes.includes("") == false) {GRes.push("")} else {}
					if (GVuln.includes("") == false) {GVuln.push("")} else {}
					if (GCondImmune.includes("grappled") == false) {GCondImmune.push("grappled")} else {}
					if (GSpeedFly > 0) {GSpeedFly += 10} else {GSpeedFly += 40}
					GDex += 3;
				}
				if (GElemental == "Lightning") {
					if (GLanguage.includes("primordial (auran)") == false) {GLanguage.push("primordial (auran)")} else {}
					if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else {}
					if (GRes.includes("thunder") == false) {GRes.push("thunder")} else {}
					if (GVuln.includes("psychic") == false) {GVuln.push("psychic")} else {}
					if (GCondImmune.includes("paralyzed") == false) {GCondImmune.push("paralyzed")} else {}
					RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GSpeedFly > 0) {GSpeedFly += 10} else {GSpeedFly += 30}}
					GSpeed += 40; GInt += 3;
				}
				RNG = Math.floor(Math.random() * 6) + 1; if (RNG <= 3) {GTraitNames.push(`Elemental Form`); GTraits.push(`The creature can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.`);} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GCondImmune.includes("prone") == false) {GCondImmune.push("prone")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("petrified") == false) {GCondImmune.push("petrified")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GCondImmune.includes("stunned") == false) {GCondImmune.push("stunned")} else {}} else {}
			} else {}
			if (GCreature == "Fey") {
				if (GLanguage.includes("sylvan") == false) {GLanguage.push("sylvan")} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GLanguage.includes("elvish") == false) {GLanguage.push("elvish")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GLanguage.includes("primordial") == false) {GLanguage.push("primordial")} else {}} else {}
				RNG = Math.floor(Math.random() * 6) + 1; if (RNG == 1) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 60} else {GTelepathyRange += 60}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 15) + 1; if (RNG == 1) {if (GTruesight == 0) {GTruesight = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GRes.includes("radiant") == false) {GRes.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GRes.includes("force") == false) {GRes.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("thunder") == false) {GRes.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GRes.includes("physical") == false) {GRes.push("physical")} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GCondImmune.includes("charmed") == false) {GCondImmune.push("charmed")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("acid") == false) {GVuln.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {}} else {}
				GTraitNames.push(`Fey Ancestry`); GTraits.push(`The creature has advantage on Saving Throws against being Charmed, and magic can't put you to sleep.`);
			} else {}
			if (GCreature == "Fiend") {
				if (GLanguage.includes("abyssal") == false) {GLanguage.push("abyssal")} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GLanguage.includes("infernal") == false) {GLanguage.push("infernal")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GLanguage.includes("primordial") == false) {GLanguage.push("primordial")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GLanguage.includes("undercommon") == false) {GLanguage.push("undercommon")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 60} else {GTelepathyRange += 60}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 120} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 50) + 1; if (RNG == 1) {if (GTruesight == 0) {GTruesight = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 17) {if (GRes.includes("fire") == false) {GRes.push("fire")} else {}} else if (RNG == 20) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else {}}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GRes.includes("physical") == false) {GRes.push("physical")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("exhaustion") == false) {GCondImmune.push("exhaustion")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}} else {}
			} else {}
			if (GCreature == "Giant") {
				if (GLanguage.includes("giant") == false) {GLanguage.push("giant")} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GLanguage.includes("orcish") == false) {GLanguage.push("orcish")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GLanguage.includes("goblin") == false) {GLanguage.push("goblin")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("fire") == false) {GRes.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("cold") == false) {GRes.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("lightning") == false) {GRes.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GRes.includes("physical") == false) {GRes.push("physical")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("petrified") == false) {GCondImmune.push("petrified")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("poison") == false) {GVuln.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("acid") == false) {GVuln.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("force") == false) {GVuln.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GVuln.includes("psychic") == false) {GVuln.push("psychic")} else {}} else {}
				GStr += 4;
			} else {}
			if (GCreature == "Plant") {RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GLanguage.length = 0;} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GLanguage.includes("sylvan") == false) {GLanguage.push("sylvan")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 120;} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG >= 2) {if (GTremorsense == 0) {GTremorsense = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GRes.includes("piercing") == false) {GRes.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("lightning") == false) {GRes.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GRes.includes("acid") == false) {GRes.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("poison") == false) {GRes.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("thunder") == false) {GRes.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("force") == false) {GRes.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GImmune.includes("psychic") == false) {GImmune.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 5) {if (GCondImmune.includes("prone") == false) {GCondImmune.push("prone")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 5) {if (GCondImmune.includes("blinded") == false) {GCondImmune.push("blinded")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 5) {if (GCondImmune.includes("deafened") == false) {GCondImmune.push("deafened")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("charmed") == false) {GCondImmune.push("charmed")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 8) {if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 7) {if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GVuln.includes("slashing") == false) {GVuln.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}} else {}
			} else {}
			if (GCreature == "Ooze") {RNG = Math.floor(Math.random() * 3) + 1; if (RNG <= 2) {GLanguage.length = 0;} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 60;} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GLanguage.includes("undercommon") == false) {GLanguage.push("undercommon")} else {}} else {}
				if (GBlindsight == 0) {GBlindsight = 20} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GTremorsense == 0) {GTremorsense = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GTruesight == 0) {GTruesight = 30} else {}} else {}
				if (GRes.includes("acid") == false) {GRes.push("acid")} else {}
				if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GRes.includes("piercing") == false) {GRes.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("poison") == false) {GRes.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GRes.includes("necrotic") == false) {GRes.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG >= 2) {if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG >= 2) {if (GImmune.includes("slashing") == false) {GImmune.push("slashing")} else {}} else {}
				if (GCondImmune.includes("prone") == false) {GCondImmune.push("prone")} else {}
				if (GCondImmune.includes("blinded") == false) {GCondImmune.push("blinded")} else {}
				if (GCondImmune.includes("deafened") == false) {GCondImmune.push("deafened")} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("paralyzed") == false) {GCondImmune.push("paralyzed")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("stunned") == false) {GCondImmune.push("stunned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}} else {}
				GTraitNames.push(`Amorphous`); GTraits.push(`The creature can move through a space as narrow as 1 inch wide without squeezing.`);
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GTraitNames.push(`Split`); GTraits.push(`When the ooze that is Medium or larger is subjected to lightning or slashing damage, it splits into two new oozes if it has at least 10 hit points. Each new ooze has hit points equal to half the original ooze's, rounded down. New oozes are one size smaller than the original ooze.`);} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {GTraitNames.push(`Corrosive Form`); GTraits.push(`An enemy that touches the creature or hits it with a melee attack while within 5 feet of it takes ${Math.ceil(GPB / 3) + 1}d8 acid damage. Any nonmagical weapon made of metal or wood that hits the creature corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the creature is destroyed after dealing damage. The creature can eat through 2-inch-thick, nonmagical wood or metal in 1 round.`);} else {}
				GActionNames.push(`Engulf`); GActions.push(`The creature moves up to its speed. While doing so, it can enter Large or smaller enemy's spaces. Whenever the ooze enters an enemy’s space, the enemy must make a DC ${GTier + 12} Dexterity saving throw. On a successful save, the enemy is pushed 5 feet back. On a failed save, the enemy is engulfed. The engulfed enemy can’t breathe, is restrained, and takes ${Math.ceil((GPB / 3) - 0.9)}d6 acid damage at the start of their turns. They can attempt to break out with a DC ${GTier + 12} Athletics check.`);
				GInt -= 4;
			} else {}
			if (GCreature == "Undead") {
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 5) {if (GRes.includes("necrotic") == false) {GRes.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GRes.includes("slashing") == false) {GRes.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GRes.includes("cold") == false) {GRes.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 8) {if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic")} else {}} else {}
				if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("stunned") == false) {GCondImmune.push("stunned")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("paralyzed") == false) {GCondImmune.push("paralyzed")} else {}} else {}
				RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GVuln.includes("force") == false) {GVuln.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GTraitNames.push(`Undead Fortitude`); GTraits.push(`If damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the creature drops to 1 hit point instead.`);} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {GTraitNames.push(`Turn Resistance`); GTraits.push(`The creature has advantage on saving throws against any effect that turns undead.`);} else {}
			} else {}
			if (GCreature == "Montrosity") {
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GLanguage.includes("undercommon") == false) {GLanguage.push("undercommon")} else {}} else {}
				RNG = Math.floor(Math.random() * 4) + 1; if (RNG == 1) {if (GLanguage.includes("abyssal") == false) {GLanguage.push("abyssal")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GLanguage.includes("telepathy") == false) {GLanguage.push("telepathy"); GTelepathyRange += 120} else {}} else {}
				RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {if (GDarkvision == 0) {GDarkvision = 60} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GBlindsight == 0) {GBlindsight = 20} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG <= 3) {if (GTremorsense == 0) {GTremorsense = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 50) + 1; if (RNG == 1) {if (GTruesight == 0) {GTruesight = 30} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("slashing") == false) {GRes.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("bludgeoning") == false) {GRes.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("piercing") == false) {GRes.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("fire") == false) {GRes.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("cold") == false) {GRes.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("lightning") == false) {GRes.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("thunder") == false) {GRes.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("poison") == false) {GRes.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("force") == false) {GRes.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("psychic") == false) {GRes.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("radiant") == false) {GRes.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("acid") == false) {GRes.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 8) {if (GRes.includes("necrotic") == false) {GRes.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("slashing") == false) {GImmune.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("bludgeoning") == false) {GImmune.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("piercing") == false) {GImmune.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("fire") == false) {GImmune.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("cold") == false) {GImmune.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("lightning") == false) {GImmune.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("thunder") == false) {GImmune.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("poison") == false) {GImmune.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("force") == false) {GImmune.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("psychic") == false) {GImmune.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("radiant") == false) {GImmune.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("acid") == false) {GImmune.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 1) {if (GImmune.includes("necrotic") == false) {GImmune.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("slashing") == false) {GVuln.push("slashing")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("bludgeoning") == false) {GVuln.push("bludgeoning")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("piercing") == false) {GVuln.push("piercing")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("fire") == false) {GVuln.push("fire")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("cold") == false) {GVuln.push("cold")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("lightning") == false) {GVuln.push("lightning")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("thunder") == false) {GVuln.push("thunder")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("poison") == false) {GVuln.push("poison")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("force") == false) {GVuln.push("force")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("psychic") == false) {GVuln.push("psychic")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("radiant") == false) {GVuln.push("radiant")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("acid") == false) {GVuln.push("acid")} else {}} else {}
				RNG = Math.floor(Math.random() * 100) + 1; if (RNG <= 3) {if (GVuln.includes("necrotic") == false) {GVuln.push("necrotic")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("blinded") == false) {GCondImmune.push("blinded")} else {}} else {}
				RNG = Math.floor(Math.random() * 5) + 1; if (RNG == 1) {if (GCondImmune.includes("deafened") == false) {GCondImmune.push("deafened")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("frightened") == false) {GCondImmune.push("frightened")} else {}} else {}
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {if (GCondImmune.includes("poisoned") == false) {GCondImmune.push("poisoned")} else {}} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG == 1) {if (GCondImmune.includes("stunned") == false) {GCondImmune.push("stunned")} else {}} else {}
			} else {}
			if (GSize == "Tiny" || GSize == "Small") {GTraitNames.push(`Nimbleness`); GTraits.push(`You can move through the space of any creature that is of a size larger than yours.`);} else {}
			if (GSize == "Gargantuan") {
				let reachX = 5;
				GWeaponHit = GWeaponMod + (GPB * 1.5) + 5;
				let RNG = Math.floor(Math.random() * 3) + 1; 
			if (GSize == "Large" && RNG == 3) {reachX += 5} else if (GSize == "Huge") {reachX += 5} else if (GSize == "Gargantuan" && RNG == 3) {reachX += 15} else if (GSize == "Gargantuan" && RNG < 3) {reachX += 10} else {}
			RNG = Math.floor(Math.random() * 2) + 1; if (RNG == 1) {GActionNames.push(`Stomp`); GActions.push(`The creature stomps one of its feet at a point on the ground within 10 feet of it. Any creature in a 10-foot-radius, 20-foot-high cylinder centered on this point must succeed on a DC ${GTier + 13} Dexterity saving throw or take ${Math.ceil(GPB / 2) + 3}d10 bludgeoning damage and fall prone. Until the creature uses its Stomp again or moves, the target is restrained. While restrained in this way, the target (or another creature within 5 feet of it) can use its action to make a DC ${GTier + 13} Strength check. On a success, the target relocates to an unoccupied space of its choice within 5 feet of the creature and is no longer restrained. Structures, as well as nonmagical objects that are neither being worn nor carried, take the same amount of damage if they are in the cylinder (no save).`);} else {}
			RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GActionNames.push(`Bite`); GActions.push(`Melee Weapon Attack: +${GWeaponHit} to hit, reach ${reachX} ft., one target. Hit: ${Math.ceil(GPB / 2) + 2}d10 + ${GStr} piercing damage. If the target is a Large or smaller creature, it must succeed on a DC ${GTier + 12} Dexterity saving throw or be swallowed by the creature. A swallowed enemy is blinded and restrained, it has total cover against attacks and other effects outside the creature, and it takes ${Math.ceil(GPB / 3) + 2}d6 acid damage at the start of each of the creature’s turns. If the creature takes 30 damage or more on a single turn from the swallowed enemy, the creature must succeed on a DC ${GTier + 14} Constitution saving throw at the end of that turn or regurgitate the enemy, which falls prone in a space within 10 feet of the creature. If the creature dies, a swallowed enemy is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone.`);} else {}
			} else {}
			if (GSpeedFly > 0) {
				RNG = Math.floor(Math.random() * 10) + 1; if (RNG == 1) {GTraitNames.push(`Flyby`); GTraits.push(`The creature doesn’t provoke opportunity attacks when it flies out of an enemy’s reach.`);} else {}
				RNG = Math.floor(Math.random() * 20) + 1; if (RNG >= 18 && document.getElementById("bossCheck").checked == true) {GLegendaryNames.push(`Wing Attack (Costs 2 Actions)`); GLegendaries.push(`The creature beats its wings. Each creature within 10 ft. of the creature must succeed on a DC ${GTier + 12} Dexterity saving throw or take ${GPB}d6 + ${GStr} bludgeoning damage and be knocked prone. The creature can then fly up to half its flying speed`);} else {}
			} else {}

			//if (GLanguage.includes("") == false) {GLanguage.push("")} else {}
			// Certain types, removes all languages before adding native language
// Get Sense Checkboxes
			if (document.getElementById("blindsightCheck").checked == true && GBlindsight <= 0) {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GBlindsight = 40} else {GBlindsight = 20}}
			if (document.getElementById("darkvisionCheck").checked == true && GDarkvision <= 0) {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GDarkvision = 120} else {GDarkvision = 60}}
			if (document.getElementById("tremorsenseCheck").checked == true && GTremorsense <= 0) {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GTremorsense = 40} else {GTremorsense = 20}}
			if (document.getElementById("truesightCheck").checked == true && GTruesight <= 0) {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GTruesight = 40} else {GTruesight = 20}}
// Get Final Attribute Modifiers, AC, and Saves
			GStrMod = Math.floor((GStr - 10) / 2);
			GDexMod = Math.floor((GDex - 10) / 2);
			GConMod = Math.floor((GCon - 10) / 2);
			GIntMod = Math.floor((GInt - 10) / 2);
			GWisMod = Math.floor((GWis - 10) / 2);
			GChaMod = Math.floor((GCha - 10) / 2);
			let acMod;
			if (GFirstStat == "Str") {acMod = GStrMod;} else if (GFirstStat == "Dex") {acMod = GDexMod;} else if (GFirstStat == "Con") {acMod = GConMod;} else {}
			if (GMagic == "Martial") {GAC = 10 + acMod + Math.floor(GTier / 2);} else if (GMagic == "Half") {GAC = 7 + acMod + Math.floor(GTier / 2);} else if (GMagic == "Caster") {GAC = 10 + GDexMod;}
			testHP = GConMod * 4; if (testHP <= 0) {GHP += 2 * GTier;} else if (testHP > 0) {GHP += testHP * GTier}
				if (GMagic == "Martial") {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GSave.push("Str");} else if (RNG == 2) {GSave.push("Dex");} else {GSave.push("Con");}}
				else if (GMagic == "Half") {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GSave.push("Str");} else if (RNG == 2) {GSave.push("Dex");} else {GSave.push("Con");}}
				else if (GMagic == "Caster") {RNG = Math.floor(Math.random() * 3) + 1; if (RNG == 1) {GSave.push("Int");} else if (RNG == 2) {GSave.push("Wis");} else {GSave.push("Cha");}}
			GetSave();
			while (GSave.includes(`${GTempSave}`) == true) {GetSave();}
			GSave.push(`${GTempSave}`);
			if (GCR >= 10 && GCR <= 19) {GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`);}
			else if (GCR >= 20 && GCR <= 29) {GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`); GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`);}
			else if (GCR >= 30 && GCR <= 39) {GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`); GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`);
											GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`);}
			else if (GCR >= 40) {GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`); GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`);
								GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`); GetSaveX(); while (GSave.includes(`${GTempSave}`) == true) {GetSaveX();} GSave.push(`${GTempSave}`);}
			GHPTotal = Math.floor(GHitDiceQty * (GHitDiceSize / 2 + 0.5) + GHP) * GHPMulti;
			if (document.getElementById("hpCheck").checked == false) {GHPTotal = Math.ceil(GHPTotal / 2); GHP = Math.ceil(GHP / 2);}
// Get Skills
			SkillTypeGen(); GSkill.push(`${GSkillX}`);
			if (GCR >= 1 && GCR <= 3) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 4 && GCR <= 7) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 8 && GCR <= 14) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 15 && GCR <= 21) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 22 && GCR <= 28) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 29 && GCR <= 35) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 36 && GCR <= 42) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			else if (GCR >= 43 && GCR <= 50) {SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);
											SkillTypeGen(); while (GSkill.includes(`${GSkillX}`) == true || GSkillX == "Initiative") {SkillTypeGen();} GSkill.push(`${GSkillX}`);}
			if (GFirstStat == "Str") {GWeaponMod = GStrMod} else if (GFirstStat == "Dex") {GWeaponMod = GDexMod} else {GWeaponMod = GStrMod + GPB}
			GWeaponHit = GWeaponMod + GPB
			if (GSpellStat == "Int") {GSpellMod = GIntMod; GSpellDC = 8 + GIntMod + GPB;}
			else if (GSpellStat == "Wis") {GSpellMod = GWisMod; GSpellDC = 7 + GWisMod + GPB;}
			else if (GSpellStat == "Cha") {GSpellMod = GChaMod; GSpellDC = 7 + GChaMod + GPB;}
			else {}
			if (GMagic == "Martial") {GSpellMod = GWisMod; GSpellHit = GSpellMod + (Math.ceil(GPB / 3));} else {GSpellHit = GSpellMod + GPB}
// Random Actions based on Qty
			zNum = GActionQty;
			while (zNum > 0) {zNum -= 1; EnemyAction();}
// Random Bonus Actions based on Qty
			zNum = GBonusQty;
			while (zNum > 0) {zNum -= 1; EnemyBonus();}
// Random Reactions based on Qty
			zNum = GReactionQty;
			while (zNum > 0) {zNum -= 1; EnemyReaction();}
// Random Rechargess based on Qty
			if (document.getElementById("breathCheck").checked == true) {RandomBreath(); GRechargeNames.push(GBreathName); GRecharges.push(GBreath);} else {}
			zNum = GRechargeQty;
			while (zNum > 0) {zNum -= 1; EnemyRecharge();}
// Random Legendary Actions based on Qty
			zNum = GLegendaryQty;
			while (zNum > 0) {zNum -= 1; EnemyLegendary();}
// Random Lair Actives based on Qty
			zNum = GLairActiveQty;
			while (zNum > 0) {zNum -= 1; EnemyLairActive();}
// Random Lair Passives based on Qty
			zNum = GLairPassiveQty;
			while (zNum > 0) {zNum -= 1; EnemyLairPassive();}
// Final Speed
		GSpeedTotal = `walk ${GSpeed} ft.`;
		if (GSpeedBurrow > 0) {GSpeedTotal += `, burrow ${GSpeedBurrow} ft.`} else {}
		if (GSpeedSwim > 0) {GSpeedTotal += `, swim ${GSpeedSwim} ft.`} else {}
		if (GSpeedClimb > 0) {GSpeedTotal += `, climb ${GSpeedClimb} ft.`} else {}
		if (GSpeedFly > 0) {GSpeedTotal += `, fly ${GSpeedFly} ft.`} else {}
// Final Saves
		if (GSave.includes("Str") == true) {GSaveTotal += `Str +${GStrMod + GPB}, `} else {}
		if (GSave.includes("Dex") == true) {GSaveTotal += `Dex +${GDexMod + GPB}, `} else {}
		if (GSave.includes("Con") == true) {GSaveTotal += `Con +${GConMod + GPB}, `} else {}
		if (GSave.includes("Int") == true) {GSaveTotal += `Int +${GIntMod + GPB}, `} else {}
		if (GSave.includes("Wis") == true) {GSaveTotal += `Wis +${GWisMod + GPB}, `} else {}
		if (GSave.includes("Cha") == true) {GSaveTotal += `Cha +${GChaMod + GPB}, `} else {}
		GSaveTotal = GSaveTotal.slice(0, -2);
		GSaveTotal = GSaveTotal.replace("+-", "-"); GSaveTotal = GSaveTotal.replace("+-", "-"); GSaveTotal = GSaveTotal.replace("+-", "-");
// Final Skills
		if (GSkill.includes("Athletics") == true) {GSkillTotal += `Athletics +${GStrMod + GPB}, `} else {}
		if (GSkill.includes("Acrobatics") == true) {GSkillTotal += `Acrobatics +${GDexMod + GPB}, `} else {}
		if (GSkill.includes("Sleight of Hand") == true) {GSkillTotal += `Sleight of Hands +${GDexMod + GPB}, `} else {}
		if (GSkill.includes("Stealth") == true) {GSkillTotal += `Stealth +${GDexMod + GPB}, `} else {}
		if (GSkill.includes("Arcana") == true) {GSkillTotal += `Arcana +${GIntMod + GPB}, `} else {}
		if (GSkill.includes("History") == true) {GSkillTotal += `History +${GIntMod + GPB}, `} else {}
		if (GSkill.includes("Investigation") == true) {GSkillTotal += `Investigation +${GIntMod + GPB}, `} else {}
		if (GSkill.includes("Nature") == true) {GSkillTotal += `Nature +${GIntMod + GPB}, `} else {}
		if (GSkill.includes("Religion") == true) {GSkillTotal += `Religion +${GIntMod + GPB}, `} else {}
		if (GSkill.includes("Animal Handling") == true) {GSkillTotal += `Animal Handling +${GWisMod + GPB}, `} else {}
		if (GSkill.includes("Insight") == true) {GSkillTotal += `Insight +${GWisMod + GPB}, `} else {}
		if (GSkill.includes("Medicine") == true) {GSkillTotal += `Medicine +${GWisMod + GPB}, `} else {}
		if (GSkill.includes("Perception") == true) {GSkillTotal += `Perception +${GWisMod + GPB}, `} else {}
		if (GSkill.includes("Survival") == true) {GSkillTotal += `Survival +${GWisMod + GPB}, `} else {}
		if (GSkill.includes("Deception") == true) {GSkillTotal += `Deception +${GChaMod + GPB}, `} else {}
		if (GSkill.includes("Intimidation") == true) {GSkillTotal += `Intimidation +${GChaMod + GPB}, `} else {}
		if (GSkill.includes("Performance") == true) {GSkillTotal += `Performance +${GChaMod + GPB}, `} else {}
		if (GSkill.includes("Persuasion") == true) {GSkillTotal += `Persuasion +${GChaMod + GPB}, `} else {}
		GSkillTotal = GSkillTotal.slice(0, -2);
		GSkillTotal = GSkillTotal.replace("+-", "-"); GSkillTotal = GSkillTotal.replace("+-", "-"); GSkillTotal = GSkillTotal.replace("+-", "-");
// Final Resistances
		if (GRes.includes("physical") == true) {GResTotal += "blugeoning, slashing, piercing, ";} else {}
		if (GRes.includes("slashing") == true) {GResTotal += "slashing, ";} else {}
		if (GRes.includes("bludgeoning") == true) {GResTotal += "bludgeoning, ";} else {}
		if (GRes.includes("piercing") == true) {GResTotal += "piercing, ";} else {}
		if (GRes.includes("acid") == true) {GResTotal += "acid, ";} else {}
		if (GRes.includes("cold") == true) {GResTotal += "cold, ";} else {}
		if (GRes.includes("fire") == true) {GResTotal += "fire, ";} else {}
		if (GRes.includes("force") == true) {GResTotal += "force, ";} else {}
		if (GRes.includes("lightning") == true) {GResTotal += "lightning, ";} else {}
		if (GRes.includes("necrotic") == true) {GResTotal += "necrotic, ";} else {}
		if (GRes.includes("poison") == true) {GResTotal += "poison, ";} else {}
		if (GRes.includes("psychic") == true) {GResTotal += "psychic, ";} else {}
		if (GRes.includes("radiant") == true) {GResTotal += "radiant, ";} else {}
		if (GRes.includes("thunder") == true) {GResTotal += "thunder, ";} else {}
		GResTotal = GResTotal.slice(0, -2);
// Final Immunity
		if (GImmune.includes("physical") == true) {GImmuneTotal += "blugeoning, slashing, piercing, ";} else {}
		if (GImmune.includes("slashing") == true) {GImmuneTotal += "slashing, ";} else {}
		if (GImmune.includes("bludgeoning") == true) {GImmuneTotal += "bludgeoning, ";} else {}
		if (GImmune.includes("piercing") == true) {GImmuneTotal += "piercing, ";} else {}
		if (GImmune.includes("acid") == true) {GImmuneTotal += "acid, ";} else {}
		if (GImmune.includes("cold") == true) {GImmuneTotal += "cold, ";} else {}
		if (GImmune.includes("fire") == true) {GImmuneTotal += "fire, ";} else {}
		if (GImmune.includes("force") == true) {GImmuneTotal += "force, ";} else {}
		if (GImmune.includes("lightning") == true) {GImmuneTotal += "lightning, ";} else {}
		if (GImmune.includes("necrotic") == true) {GImmuneTotal += "necrotic, ";} else {}
		if (GImmune.includes("poison") == true) {GImmuneTotal += "poison, ";} else {}
		if (GImmune.includes("psychic") == true) {GImmuneTotal += "psychic, ";} else {}
		if (GImmune.includes("radiant") == true) {GImmuneTotal += "radiant, ";} else {}
		if (GImmune.includes("thunder") == true) {GImmuneTotal += "thunder, ";} else {}
		GImmuneTotal = GImmuneTotal.slice(0, -2);
// Final Vulnerabilities
		if (GVuln.includes("physical") == true) {GVulnTotal += "blugeoning, slashing, piercing, ";} else {}
		if (GVuln.includes("slashing") == true) {GVulnTotal += "slashing, ";} else {}
		if (GVuln.includes("bludgeoning") == true) {GVulnTotal += "bludgeoning, ";} else {}
		if (GVuln.includes("piercing") == true) {GVulnTotal += "piercing, ";} else {}
		if (GVuln.includes("acid") == true) {GVulnTotal += "acid, ";} else {}
		if (GVuln.includes("cold") == true) {GVulnTotal += "cold, ";} else {}
		if (GVuln.includes("fire") == true) {GVulnTotal += "fire, ";} else {}
		if (GVuln.includes("force") == true) {GVulnTotal += "force, ";} else {}
		if (GVuln.includes("lightning") == true) {GVulnTotal += "lightning, ";} else {}
		if (GVuln.includes("necrotic") == true) {GVulnTotal += "necrotic, ";} else {}
		if (GVuln.includes("poison") == true) {GVulnTotal += "poison, ";} else {}
		if (GVuln.includes("psychic") == true) {GVulnTotal += "psychic, ";} else {}
		if (GVuln.includes("radiant") == true) {GVulnTotal += "radiant, ";} else {}
		if (GVuln.includes("thunder") == true) {GVulnTotal += "thunder, ";} else {}
		GVulnTotal = GVulnTotal.slice(0, -2);
// Final Condition Immunity
		if (GCondImmune.includes("blinded") == true) {GCondImmuneTotal += "blinded, ";} else {}
		if (GCondImmune.includes("deafened") == true) {GCondImmuneTotal += "deafened, ";} else {}
		if (GCondImmune.includes("charmed") == true) {GCondImmuneTotal += "charmed, ";} else {}
		if (GCondImmune.includes("exhaustion") == true) {GCondImmuneTotal += "exhaustion, ";} else {}
		if (GCondImmune.includes("frightened") == true) {GCondImmuneTotal += "frightened, ";} else {}
		if (GCondImmune.includes("grappled") == true) {GCondImmuneTotal += "grappled, ";} else {}
		if (GCondImmune.includes("incapacitated") == true) {GCondImmuneTotal += "incapacitated, ";} else {}
		if (GCondImmune.includes("paralyzed") == true) {GCondImmuneTotal += "paralyzed, ";} else {}
		if (GCondImmune.includes("petrified") == true) {GCondImmuneTotal += "petrified, ";} else {}
		if (GCondImmune.includes("poisoned") == true) {GCondImmuneTotal += "poisoned, ";} else {}
		if (GCondImmune.includes("prone") == true) {GCondImmuneTotal += "prone, ";} else {}
		if (GCondImmune.includes("restrained") == true) {GCondImmuneTotal += "restrained, ";} else {}
		if (GCondImmune.includes("stunned") == true) {GCondImmuneTotal += "stunned, ";} else {}
		if (GCondImmune.includes("disease") == true) {GCondImmuneTotal += "disease, ";} else {}
		GCondImmuneTotal = GCondImmuneTotal.slice(0, -2);
// Final Senses
		if (GDarkvision > 0) {GSenseTotal += `darkvision ${GDarkvision} ft., `} else {}
		if (GTremorsense > 0) {GSenseTotal += `tremorsense ${GTremorsense} ft., `} else {}
		if (GBlindsight > 0) {GSenseTotal += `blindsight ${GBlindsight} ft., `} else {}
		if (GTruesight > 0) {GSenseTotal += `truesight ${GTruesight} ft., `} else {}
		if (GSkill.includes("Perception") == true) {GSenseTotal += `passive perception ${10 + GWisMod + GPB}, `;} else {GSenseTotal += `passive perception ${10 + GWisMod}, `;}
		GSenseTotal = GSenseTotal.slice(0, -2);
// Final Languages
		if (GLanguage.includes("common") == true) {GLanguageTotal += "common, ";} else {}
		if (GLanguage.includes("dwarvish") == true) {GLanguageTotal += "dwarvish, ";} else {}
		if (GLanguage.includes("elvish") == true) {GLanguageTotal += "elvish, ";} else {}
		if (GLanguage.includes("giant") == true) {GLanguageTotal += "giant, ";} else {}
		if (GLanguage.includes("gnomish") == true) {GLanguageTotal += "gnomish, ";} else {}
		if (GLanguage.includes("goblin") == true) {GLanguageTotal += "goblin, ";} else {}
		if (GLanguage.includes("halfling") == true) {GLanguageTotal += "halfling, ";} else {}
		if (GLanguage.includes("orc") == true) {GLanguageTotal += "orc, ";} else {}
		if (GLanguage.includes("abyssal") == true) {GLanguageTotal += "abyssal, ";} else {}
		if (GLanguage.includes("celestial") == true) {GLanguageTotal += "celestial, ";} else {}
		if (GLanguage.includes("draconic") == true) {GLanguageTotal += "draconic, ";} else {}
		if (GLanguage.includes("deep speech") == true) {GLanguageTotal += "deep speech, ";} else {}
		if (GLanguage.includes("infernal") == true) {GLanguageTotal += "infernal, ";} else {}
		if (GLanguage.includes("sylvan") == true) {GLanguageTotal += "sylvan, ";} else {}
		if (GLanguage.includes("undercommon") == true) {GLanguageTotal += "undercommon, ";} else {}
		if (GLanguage.includes("primordial") == true) {GLanguageTotal += "primordial, ";} else {}
		if (GLanguage.includes("primordial (ignan)") == true) {GLanguageTotal += "primordial (Ignan), ";} else {}
		if (GLanguage.includes("primordial (aquan)") == true) {GLanguageTotal += "primordial (Aquan), ";} else {}
		if (GLanguage.includes("primordial (auran)") == true) {GLanguageTotal += "primordial (Auran), ";} else {}
		if (GLanguage.includes("primordial (terran)") == true) {GLanguageTotal += "primordial (Terran), ";} else {}
		if (GLanguage.includes("telepathy") == true) {GLanguageTotal += `telepathy up to ${GTelepathyRange}, `;} else {}
		GLanguageTotal = GLanguageTotal.slice(0, -2);
// Humanoid/Elemental Subrace
		if (GCreature == "Humanoid") {GCreature += ` (${GHumanoid})`} else {}
		if (GCreature == "Elemental") {GCreature += ` (${GElemental})`} else {}
// Output Results
		EnemyOutput();
		EnemyHomebrew();
		EnemyImproved();		
		
	//console.log(`Str ${GStr} (${GStrMod}), Dex ${GDex} (${GDexMod}), Con ${GCon} (${GConMod}), Int ${GInt} (${GIntMod}), Wis ${GWis} (${GWisMod}), Cha ${GCha} (${GChaMod})`);
	//console.log(`Weapon: ${GFirstStat} + ${GPB} = ${GWeaponMod}`);
	//console.log(`Spell: ${GSpellStat} + ${GPB} = ${GSpellMod}`);
	//console.log (`DC: 7 + ${GSpellStat} + ${GPB} = ${GSpellDC}`);
	//console.log(`HP: (${GHP}), AC: (${GAC})`);
	//console.log(`${GSave}`);
	//console.log(`${GSkill}`);
	//console.log(`${GMagic}: Will/5/3/1: ${GSpellQty}`);
	//console.log (`${GMod}`);
	//console.log(`Traits(${GTraitQty}), Actions(${GActionQty}), Bonus(${GBonusQty}), Reaction(${GReactionQty}), Recharge(${GRechargeQty}), LegAct(${GLegendaryQty}), LegUse(${GLegendaryUses}), LegRes(${GLegendaryResist}), LairActive(${GLairActiveQty}), LairPassive(${GLairPassiveQty}), Range(${GLairPassiveRange})`);
	//console.log(`${GSize} ${GCreature} (${GHumanoid}${GElemental}), ${GSpeed} ft., ${GSpeedFly} Fly ft., ${GSpeedSwim} Swim ft., ${GSpeedBurrow} Burrow ft., ${GSpeedClimb} Climb ft.`);
	//console.log(`${GMagic} -- Main: ${GFirstStat}, Second: ${GSecondStat}, Third: ${GThirdStat}, Bad: ${GBadStat}, PB: ${GPB} Spellcasting Stat: ${GSpellStat}`);
	//console.log(`Str(${GStr}), Dex(${GDex}), Con(${GCon}), Int(${GInt}), Wis(${GWis}), Cha(${GCha})`);
	//console.log(`${GMagic}: ${GHitDiceQty}d${GHitDiceSize} + ${GHP}`);
}

function EnemyOutput() {
	let TraitsList = ""
	let ActionsList = ""
	let BonusesList = ""
	let ReactionsList = ""
	let LegendaryList = ""
	let LairActionsList = ""
	let LairPassivesList = ""
	document.getElementById("charBox").innerHTML = `Name: ??\n${GSize}, ${GCreature}\nHit Points: ${GHPTotal} (${GHitDiceQty}d${GHitDiceSize} + ${GHP})\nAC: ${GAC} &nbsp; - PB: +${GPB}\nSpeeds: ${GSpeedTotal}\n
STR: ${GStr} (${GStrMod}) &nbsp; DEX: ${GDex} (${GDexMod}) &nbsp; CON: ${GCon} (${GConMod})\nINT: ${GInt} (${GIntMod}) &nbsp; WIS: ${GWis} (${GWisMod}) &nbsp; CHA: ${GCha} (${GChaMod})\n
- Saving Throws: ${GSaveTotal}\n- Skills: ${GSkillTotal}\n- Resistances: ${GResTotal}\n- Damage Immunities: ${GImmuneTotal}\n- Vulnerabilities: ${GVulnTotal}\n- Condition Immunities: ${GCondImmuneTotal}\n- Senses: ${GSenseTotal}\n- Languages: ${GLanguageTotal}\n- Challenge Rating: ${GCR} (Tier ${GTier})\n\n`;
	if (GMagic == "Half" || GMagic == "Caster") {TraitsList += `&nbsp;&nbsp;[Spellcasting]\nThe creature's spellcasting ability is ${GSpellStat} (save DC ${GSpellDC}). It can cast the following spells.\n`;
		if (GSpellQty[0] > 0) {TraitsList += `• at will: ${GSpell0}\n`;} else {}
		if (GSpellQty[3] > 0) {TraitsList += `• 1/day each: ${GSpell1}\n`;} else {}
		if (GSpellQty[2] > 0) {TraitsList += `• 3/day each: ${GSpell3}\n`;} else {}
		if (GSpellQty[1] > 0) {TraitsList += `• 5/day each: ${GSpell5}\n`;} else {}}
	xNum = GTraits.length;
	while (xNum > 0) {xNum -= 1; TraitsList += `&nbsp;&nbsp;[${GTraitNames[xNum]}]\n${GTraits[xNum]}\n\n`;}
		if (GModX == true) {TraitsList += `&nbsp;&nbsp;[Random Enemy Modifier]\n${GMod}\n\n`;} else {}
		if (GLegendaryResist > 0) {TraitsList += `&nbsp;&nbsp;[Legendary Resistance (${GLegendaryResist}/day)]\nIf the creature fails a saving throw, it can choose to succeed instead.\n\n`;} else {}
	document.getElementById("charBox").innerHTML += `------TRAITS------\n${TraitsList}`;
		xNum = GActions.length; xNum2 = GRecharges.length;
		if (GMultiattack >= 2) {ActionsList += `&nbsp;&nbsp;[Multiattack]\nThe creature can make ${GMultiattack} attacks on its turn.\n\n`;} else {}
		while (xNum > 0) {xNum -= 1; ActionsList += `&nbsp;&nbsp;[${GActionNames[xNum]}]\n${GActions[xNum]}\n\n`;}
		while (xNum2 > 0) {xNum2 -= 1; ActionsList += `&nbsp;&nbsp;[${GRechargeNames[xNum2]}]\n${GRecharges[xNum2]}\n\n`;}
		document.getElementById("charBox").innerHTML += `------ACTIONS------\n${ActionsList}`;
	if (GBonuses.length > 0) {xNum = GBonuses.length;
	while (xNum > 0) {xNum -= 1; BonusesList += `&nbsp;&nbsp;[${GBonusNames[xNum]}]\n${GBonuses[xNum]}\n\n`;}
	document.getElementById("charBox").innerHTML += `------BONUS ACTIONS------\n${BonusesList}`;}
		if (GReactions.length > 0) {xNum = GReactions.length;
		while (xNum > 0) {xNum -= 1; ReactionsList += `&nbsp;&nbsp;[${GReactionNames[xNum]}]\n${GReactions[xNum]}\n\n`;}
		document.getElementById("charBox").innerHTML += `------REACTIONS------\n${ReactionsList}`;}
	if (document.getElementById("bossCheck").checked == true) {if (GLegendaries.length > 0) {xNum = GLegendaries.length;
		LegendaryList += `The creature has ${GLegendaryUses} Legendary Actions that it can use each round at the end of another creature's turn. It regains all Legendary Actions at the start of its turn.\n\n`;
		while (xNum > 0) {xNum -= 1; LegendaryList += `&nbsp;&nbsp;[${GLegendaryNames[xNum]}]\n${GLegendaries[xNum]}\n\n`;}
		document.getElementById("charBox").innerHTML += `------LEGENDARY ACTIONS------\n${LegendaryList}`;}
	} else {}
	if (document.getElementById("lairCheck").checked == true) {if (GLairActives.length > 0) {xNum = GLairActives.length;
		LairActionsList += `While in its lair, the creature can one lair action on initiative count 20 (losing ties). Stronger creatures may have a second lair action use on initiative count 10 (losing ties).\n\n`;
		while (xNum > 0) {xNum -= 1; LairActionsList += `&nbsp;&nbsp;[${GLairActiveNames[xNum]}]\n${GLairActives[xNum]}\n\n`;}
		document.getElementById("charBox").innerHTML += `------LAIR ACTIONS------\n${LairActionsList}`;}
	} else {}
	if (document.getElementById("lairCheck").checked == true) {if (GLairPassives.length > 0) {xNum = GLairPassives.length;
		LairPassivesList += `The area within ${GLairPassiveRange} is under the effects listed below. When the creature dies, these effects fade over the next ${GTier * (Math.floor(Math.random() * 8) + 1)} weeks.\n\n`;
		while (xNum > 0) {xNum -= 1; LairPassivesList += `&nbsp;&nbsp;[${GLairPassiveNames[xNum]}]\n${GLairPassives[xNum]}\n\n`;}
		document.getElementById("charBox").innerHTML += `------LAIR REGIONAL EFFECTS------\n${LairPassivesList}`;}
	} else {}
}

function EnemyHomebrew() {
	document.getElementById("homebrewBox").innerHTML = "{{monster,frame,wide\n## Name: ??\n";
	document.getElementById("homebrewBox").innerHTML += `*${GSize}, ${GCreature}*\n___\n**Armor Class** :: ${GAC}\n**Hit Points** :: ${GHPTotal} (${GHitDiceQty}d${GHitDiceSize} + ${GHP})\nSpeed :: ${GSpeedTotal}\n___
|STR|DEX|CON|INT|WIS|CHA|\n|:-:|:-:|:-:|:-:|:-:|:-:|\n|${GStr} (${GStrMod})|${GDex} (${GDexMod})|${GCon} (${GConMod})|${GInt} (${GIntMod})|${GWis} (${GWisMod})|${GCha} (${GChaMod})|\n___
**Proficiency Bonus** :: +${GPB}\n`;
	if (GSaveTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Saving Throws** :: ${GSaveTotal}\n`}
	if (GSkillTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Skills** :: ${GSkillTotal}\n`}
	if (GResTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Resistances** :: ${GResTotal}\n`}
	if (GImmuneTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Immunities** :: ${GImmuneTotal}\n`}
	if (GVulnTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Vulnerabilities** :: ${GVulnTotal}\n`}
	if (GCondImmuneTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Condition Immunities** :: ${GCondImmuneTotal}\n`}
	if (GSenseTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Senses** :: ${GSenseTotal}\n`}
	if (GLanguageTotal == "") {} else {document.getElementById("homebrewBox").innerHTML += `**Languages** :: ${GLanguageTotal}\n`}
	document.getElementById("homebrewBox").innerHTML += `**Challenge** :: ${GCR} (Tier ${GTier})\n___\n`;
	if (GMagic == "Half" || GMagic == "Caster") {document.getElementById("homebrewBox").innerHTML += `**Spellcasting**\nThe creature's spellcasting ability is ${GSpellStat} (save DC ${GSpellDC}). It can cast the following spells.\n`;
	if (GSpellQty[0] > 0) {document.getElementById("homebrewBox").innerHTML += `at will: ${GSpell0}\n`;} else {}
	if (GSpellQty[3] > 0) {document.getElementById("homebrewBox").innerHTML += `1/day each: ${GSpell1}\n`;} else {}
	if (GSpellQty[2] > 0) {document.getElementById("homebrewBox").innerHTML += `3/day each: ${GSpell3}\n`;} else {}
	if (GSpellQty[1] > 0) {document.getElementById("homebrewBox").innerHTML += `5/day each: ${GSpell5}\n:\n`;} else {}}
	xNum = GTraits.length;
	while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GTraitNames[xNum]}.*** ${GTraits[xNum]}\n:\n`;}
		if (GModX == true) {document.getElementById("homebrewBox").innerHTML += `***Random Enemy Modifier***\n${GMod}\n:\n`;} else {}
		if (GLegendaryResist > 0) {document.getElementById("homebrewBox").innerHTML += `***Legendary Resistance (${GLegendaryResist}/day).***\nIf the creature fails a saving throw, it can choose to succeed instead.\n:\n`;} else {}
	document.getElementById("homebrewBox").innerHTML += `### Actions\n`;
	xNum = GActions.length;
	xNum2 = GRecharges.length;
	if (GMultiattack >= 2) {document.getElementById("homebrewBox").innerHTML += `***Multiattack.*** The creature can make ${GMultiattack} attacks on its turn.\n:\n`;}
	while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GActionNames[xNum]}.*** ${GActions[xNum]}\n:\n`;}
	while (xNum2 > 0) {xNum2 -=1; document.getElementById("homebrewBox").innerHTML += `***${GRechargeNames[xNum2]}.*** ${GRecharges[xNum2]}\n:\n`;}
	if (GBonuses.length > 0) {xNum = GBonuses.length; document.getElementById("homebrewBox").innerHTML += `### Bonus Actions\n`;
	while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GBonusNames[xNum]}.*** ${GBonuses[xNum]}\n:\n`;}} else {}
	if (GReactions.length > 0) {document.getElementById("homebrewBox").innerHTML += `### Reactions\n`; xNum = GReactions.length;
	while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GReactionNames[xNum]}.*** ${GReactions[xNum]}\n:\n`;}} else {}
	if (document.getElementById("bossCheck").checked == true) {if (GLegendaries.length > 0) {xNum = GLegendaries.length;
		document.getElementById("homebrewBox").innerHTML += `### Legendary Actions\nThe creature has ${GLegendaryUses} Legendary Actions that it can use each round at the end of another creature's turn. It regains all Legendary Actions at the start of its turn.\n:\n`;}
		while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GLegendaryNames[xNum]}.*** ${GLegendaries[xNum]}\n:\n`;}} else {}
	if (document.getElementById("bossCheck").checked == true) {if (GLairActives.length > 0) {xNum = GLairActives.length;
		document.getElementById("homebrewBox").innerHTML += `### Lair Actions\nWhile in its lair, the creature can one lair action on initiative count 20 (losing ties). Stronger creatures may have a second lair action use on initiative count 10 (losing ties).\n:\n`;}
		while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GLairActiveNames[xNum]}.*** ${GLairActives[xNum]}\n:\n`;}} else {}
	if (document.getElementById("bossCheck").checked == true) {if (GLairPassives.length > 0) {xNum = GLairPassives.length;
		document.getElementById("homebrewBox").innerHTML += `### Regional Lair Effects\nThe area within ${GLairPassiveRange} is under the effects listed below. When the creature dies, these effects fade over the next ${GTier * (Math.floor(Math.random() * 2) + 1)} weeks.\n:\n`;}
		while (xNum > 0) {xNum -= 1; document.getElementById("homebrewBox").innerHTML += `***${GLairPassiveNames[xNum]}.*** ${GLairPassives[xNum]}\n:\n`;}} else {}
	document.getElementById("homebrewBox").innerHTML += `}}`;
	
	//tempState = document.getElementById("homebrewBox").innerHTML;
	//document.getElementById("homebrewBox").innerHTML = tempState.slice(0, -1);
}

function EnemyImproved() {
	document.getElementById("improvedBox").innerHTML = `{ "Source": "Squislaiden's DM Assistant", "Type": "${GSize}, ${GCreature}", "HP": { "Value": ${GHPTotal}, "Notes": "(${GHitDiceQty}d${GHitDiceSize} + ${GHP})" }, "AC": { "Value": ${GAC}, "Notes": "" }, "InitiativeModifier": ${GDexMod}, "InitiativeAdvantage": false, "Speed": [ "${GSpeedTotal}" ], "Abilities": { "Str": ${GStr}, "Dex": ${GDex}, "Con": ${GCon}, "Int": ${GInt}, "Wis": ${GWis}, "Cha": ${GCha} }, `;
	if (GVulnTotal == "") {document.getElementById("improvedBox").innerHTML += `"DamageVulnerabilities": [],`;} else {document.getElementById("improvedBox").innerHTML += `"DamageVulnerabilities": [ "${GVulnTotal}" ], `;}
	if (GResTotal == "") {document.getElementById("improvedBox").innerHTML += `"DamageResistances": [],`;} else {document.getElementById("improvedBox").innerHTML += `"DamageResistances": [ "${GResTotal}" ], `;}
	if (GImmuneTotal == "") {document.getElementById("improvedBox").innerHTML += `"DamageImmunities": [],`;} else {document.getElementById("improvedBox").innerHTML += `"DamageImmunities": [ "${GImmuneTotal}" ], `;}
	if (GCondImmuneTotal == "") {document.getElementById("improvedBox").innerHTML += `"ConditionImmunities": [],`;} else {document.getElementById("improvedBox").innerHTML += `"ConditionImmunities": [ "${GCondImmuneTotal}" ], `;}
	if (GSaveTotal == "") {document.getElementById("improvedBox").innerHTML += `"Saves": [],`;} else {document.getElementById("improvedBox").innerHTML += `"Saves": [`; xNum = GSave.length; 
		while (xNum > 0) {xNum -=1; GSkillMod = GSave[xNum]; GetSaveMod(); document.getElementById("improvedBox").innerHTML += `{ "Name": "${GSave[xNum]}", "Modifier": ${GNum} }, `}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);}
	document.getElementById("improvedBox").innerHTML += `],`
	if (GSkillTotal == "") {document.getElementById("improvedBox").innerHTML += `"Skills": [],`;} else {document.getElementById("improvedBox").innerHTML += `"Skills": [`; xNum = GSkill.length; 
		while (xNum > 0) {xNum -=1; GSkillMod = GSkill[xNum]; GetSkillMod(); document.getElementById("improvedBox").innerHTML += `{ "Name": "${GSkill[xNum]}", "Modifier": ${GNum} }, `}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);}
	document.getElementById("improvedBox").innerHTML += `],`
	if (GSenseTotal == "") {document.getElementById("improvedBox").innerHTML += `"Senses": [],`;} else {document.getElementById("improvedBox").innerHTML += `"Senses": [ "${GSenseTotal}" ], `;}
	if (GLanguageTotal == "") {document.getElementById("improvedBox").innerHTML += `"Languages": [],`;} else {document.getElementById("improvedBox").innerHTML += `"Languages": [ "${GLanguageTotal}" ], `;}
	document.getElementById("improvedBox").innerHTML += `"Challenge": "${GCR} (Tier ${GTier})", "Traits": [ `;
	if (GMagic == "Half" || GMagic == "Caster") {document.getElementById("improvedBox").innerHTML += `{ "Name": "Spellcasting", "Content": "The creature's spellcasting ability is ${GSpellStat} (save DC ${GSpellDC}). It can cast the following spells.&#92;n&#92;n`;
	if (GSpellQty[0] > 0) {document.getElementById("improvedBox").innerHTML += `at will: ${GSpell0}&#92;n&#92;n`;}
	if (GSpellQty[3] > 0) {document.getElementById("improvedBox").innerHTML += `1/day each: ${GSpell1}&#92;n&#92;n`;}
	if (GSpellQty[2] > 0) {document.getElementById("improvedBox").innerHTML += `3/day each: ${GSpell3}&#92;n&#92;n`;}
	if (GSpellQty[1] > 0) {document.getElementById("improvedBox").innerHTML += `5/day each: ${GSpell5}`;}
	document.getElementById("improvedBox").innerHTML += `"}, `;}
	xNum = GTraits.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GTraitNames[xNum]}", "Content": "${GTraits[xNum]}"}, `;}
	GMod = GMod.replace("\n", "&#92;n"); GMod = GMod.replace("\n", "&#92;n"); GMod = GMod.replace("\n", "&#92;n"); GMod = GMod.replace("\n", "&#92;n");
		if (GModX == true) {document.getElementById("improvedBox").innerHTML += `{ "Name": "Random Enemy Modifier", "Content": "${GMod}"}, `;} else {}
		if (GLegendaryResist > 0) {document.getElementById("improvedBox").innerHTML += `{ "Name": "Legendary Resistance (${GLegendaryResist}/day)", "Content": "If the creature fails a saving throw, it can choose to succeed instead."}, `;} else {}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);
	document.getElementById("improvedBox").innerHTML += `], "Actions": [ `
	if (GMultiattack >= 2) {document.getElementById("improvedBox").innerHTML += `{ "Name": "Multiattack", "Content": "The creature can make ${GMultiattack} attacks on its turn."}, `;}
			XNUM = GActions.length;
			if (XNUM > 0) {BaseX = GActions[0]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[0] = BaseX;} else {}
			if (XNUM > 1) {BaseX = GActions[1]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[1] = BaseX;} else {}
			if (XNUM > 2) {BaseX = GActions[2]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[2] = BaseX;} else {}
			if (XNUM > 3) {BaseX = GActions[3]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[3] = BaseX;} else {}
			if (XNUM > 4) {BaseX = GActions[4]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[4] = BaseX;} else {}
			if (XNUM > 5) {BaseX = GActions[5]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[5] = BaseX;} else {}
			if (XNUM > 6) {BaseX = GActions[6]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[6] = BaseX;} else {}
			if (XNUM > 7) {BaseX = GActions[7]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[7] = BaseX;} else {}
			if (XNUM > 8) {BaseX = GActions[8]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[8] = BaseX;} else {}
			if (XNUM > 9) {BaseX = GActions[9]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GActions[9] = BaseX;} else {}
	xNum = GActions.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GActionNames[xNum]}", "Content": "${GActions[xNum]}"}, `;}
			XNUM = GRecharges.length;
			if (XNUM > 0) {BaseX = GRecharges[0]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GRecharges[0] = BaseX;} else {}
			if (XNUM > 1) {BaseX = GRecharges[1]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GRecharges[1] = BaseX;} else {}
			if (XNUM > 2) {BaseX = GRecharges[2]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GRecharges[2] = BaseX;} else {}
			if (XNUM > 3) {BaseX = GRecharges[3]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GRecharges[3] = BaseX;} else {}
			if (XNUM > 4) {BaseX = GRecharges[4]; BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); BaseX = BaseX.replace("\n", "&#92;n"); GRecharges[4] = BaseX;} else {}
	xNum2 = GRecharges.length; while (xNum2 > 0) {xNum2 -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GRechargeNames[xNum2]}", "Content": "${GRecharges[xNum2]}"}, `;}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);
	document.getElementById("improvedBox").innerHTML += `], "BonusActions": [ `
	if (GBonuses.length == 0) {} else {xNum = GBonuses.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GBonusNames[xNum]}", "Content": "${GBonuses[xNum]}"}, `;}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);}
	document.getElementById("improvedBox").innerHTML += `], "Reactions": [ `
	if (GReactions.length == 0) {} else {xNum = GReactions.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GReactionNames[xNum]}", "Content": "${GReactions[xNum]}"}, `;}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);}
	document.getElementById("improvedBox").innerHTML += `], "LegendaryActions": [ `
	if (document.getElementById("bossCheck").checked == false) {} else {document.getElementById("improvedBox").innerHTML += `{ "Name": "", "Content": "The creature has ${GLegendaryUses} Legendary Actions that it can use each round at the end of another creature's turn. It regains all Legendary Actions at the start of its turn."}, `;
		xNum = GLegendaries.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GLegendaryNames[xNum]}", "Content": "${GLegendaries[xNum]}"}, `;}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);}
	document.getElementById("improvedBox").innerHTML += `], "MythicActions": [ `
	if (document.getElementById("lairCheck").checked == false) {} else {document.getElementById("improvedBox").innerHTML += `{ "Name": "Lair Actions", "Content": "While in its lair, the creature can one lair action on initiative count 20 (losing ties). Stronger creatures may have a second lair action use on initiative count 10 (losing ties)."}, `;
	xNum = GLairActives.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GLairActiveNames[xNum]}", "Content": "${GLairActives[xNum]}"}, `;}}
	if (document.getElementById("lairCheck").checked == false) {} else {document.getElementById("improvedBox").innerHTML += `{ "Name": "------REGIONAL LAIR EFFECTS------", "Content": "The area within ${GLairPassiveRange} is under the effects listed below. When the creature dies, these effects fade over the next ${GTier * (Math.floor(Math.random() * 2) + 1)} weeks."}, `;
	xNum = GLairPassives.length; while (xNum > 0) {xNum -=1; document.getElementById("improvedBox").innerHTML += `{ "Name": "${GLairPassiveNames[xNum]}", "Content": "${GLairPassives[xNum]}"}, `;}
	tempState = document.getElementById("improvedBox").innerHTML;
	document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);}
	document.getElementById("improvedBox").innerHTML += `],`
	
	document.getElementById("improvedBox").innerHTML += ` "Description": "", "Player": "", "Version": "3.3.0", "ImageURL": ""}`;
	//tempState = document.getElementById("improvedBox").innerHTML;
	//document.getElementById("improvedBox").innerHTML = tempState.slice(0, -2);
	//GMod = GMod.replace("\n", "&#92;n");
}

function copyOutput() {
document.getElementById("charBox").select();
document.execCommand('copy');
}

function copyHomebrew() {
document.getElementById("homebrewBox").select();
document.execCommand('copy');
}

function copyImproved() {
document.getElementById("improvedBox").select();
document.execCommand('copy');
}

function GetSkillMod() {
	if (GSkillMod == "Athletics") {GNum = GStrMod + GPB;}
	if (GSkillMod == "Acrobatics") {GNum = GDexMod + GPB;}
	if (GSkillMod == "Sleight of Hand") {GNum = GDexMod + GPB;}
	if (GSkillMod == "Stealth") {GNum = GDexMod + GPB;}
	if (GSkillMod == "Arcana") {GNum = GIntMod + GPB;}
	if (GSkillMod == "History") {GNum = GIntMod + GPB;}
	if (GSkillMod == "Religion") {GNum = GIntMod + GPB;}
	if (GSkillMod == "Nature") {GNum = GIntMod + GPB;}
	if (GSkillMod == "Animal Handling") {GNum = GWisMod + GPB;}
	if (GSkillMod == "Insight") {GNum = GWisMod + GPB;}
	if (GSkillMod == "Medicine") {GNum = GWisMod + GPB;}
	if (GSkillMod == "Perception") {GNum = GWisMod + GPB;}
	if (GSkillMod == "Survival") {GNum = GWisMod + GPB;}
	if (GSkillMod == "Deception") {GNum = GChaMod + GPB;}
	if (GSkillMod == "Intimidation") {GNum = GChaMod + GPB;}
	if (GSkillMod == "Performance") {GNum = GChaMod + GPB;}
	if (GSkillMod == "Persuasion") {GNum = GChaMod + GPB;}
}

function GetSaveMod() {
	if (GSkillMod == "Str") {GNum = GStrMod + GPB;}
	if (GSkillMod == "Dex") {GNum = GDexMod + GPB;}
	if (GSkillMod == "Con") {GNum = GConMod + GPB;}
	if (GSkillMod == "Int") {GNum = GIntMod + GPB;}
	if (GSkillMod == "Wis") {GNum = GWisMod + GPB;}
	if (GSkillMod == "Cha") {GNum = GChaMod + GPB;}
}

// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //
// GLYPH GENERATOR //

function GlyphHelp() {
	document.getElementById("glyphBox").innerHTML = "";
}

function WeaponAffix() {
	let wpnRNG = Math.floor(Math.random() * 47) + 1;
	let wpnTier = Math.floor(Math.random() * 3) + 1;
	if (wpnRNG >= 1 && wpnRNG <= 2) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) +2 to Weapon Hit";}
		else {GWeaponAffix = "• (T1 Weapon) +1 to Weapon Hit";}
	}
	else if (wpnRNG >= 3 && wpnRNG <= 4) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) +2 to Weapon Damage";}
		else {GWeaponAffix = "• (T1 Weapon) +1 to Weapon Damage";}
	}
	else if (wpnRNG == 5 ) {GWeaponAffix = "• (T2 Weapon) +1 to Weapon Hit and Damage";}
	else if (wpnRNG == 6 ) {GWeaponAffix = "• (T2 Weapon) +1 to Weapon Critical Hit Range";}
	else if (wpnRNG == 7 ) {GWeaponAffix = "• (T2 Weapon) +5 ft. to Weapon Range (and) Double Range if Thrown or Ranged";}
	else if (wpnRNG >= 8 && wpnRNG <= 9) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Gain +2 and Advantage on attacks with the weapon";}
		else {GWeaponAffix = "• (T1 Weapon) Gain Advantage on attacks with the weapon";}
	}
	else if (wpnRNG == 10 ) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Twice, recharging on a Long Rest, on a miss, reroll the hit and if it hits, it deals half damage and cannot be a critical";}
		else {GWeaponAffix = "• (T1 Weapon) Once, recharging on a Long Rest, on a miss, reroll the hit and if it hits, it deals half damage and cannot be a critical";}
		}
	else if (wpnRNG >= 11 && wpnRNG <= 12) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) The weapon is considered Silvered for overcoming Supernatural Resistance and deals an extra 1d4 to those creatures";}
		else {GWeaponAffix = "• (T1 Weapon) The weapon is considered Silvered for overcoming Supernatural Resistance";}
		}
	else if (wpnRNG == 13 ) {GWeaponAffix = "• (T2 Weapon) The weapon can be used as a Spellcasting Focus";}
	else if (wpnRNG >= 14 && wpnRNG <= 15) {
		CreatureTypeGen()
		if (wpnTier == 3) {GWeaponAffix = `• (T2 Weapon) Deal an extra +6 damage to ${GCreature}`;}
		else {GWeaponAffix = `• (T1 Weapon) Deal an extra +3 damage to ${GCreature}`;}
		}
	else if (wpnRNG == 16 ) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Increase the weapon Damage Dice by 2 Tiers";}
		else {GWeaponAffix = "• (T1 Weapon) Increase the weapon Damage Dice by 1 Tier";}
		}
	else if (wpnRNG == 17 ) {
		PhysicalTypeGen()
		if (wpnTier == 3) {GWeaponAffix = `• (T2 Weapon) The weapons deals an extra +1d6 ${GPhysical}`;}
		else {GWeaponAffix = `• (T1 Weapon) The weapons deals an extra +1d4 ${GPhysical}`;}
		}
	else if (wpnRNG == 18 ) {GWeaponAffix = "• (T2 Weapon) The weapon bypasses Resistances";}
	else if (wpnRNG == 19 ) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Any time you hit a creature, roll your unmodified (before affixes) weapon damage dice and heal for half of that";}
		else {GWeaponAffix = "• (T1 Weapon) Once, recharging on a Short Rest, when you hit a creature, roll your unmodified (before affixes) weapon damage dice and heal for that";}
		}
	else if (wpnRNG >= 20 && wpnRNG <= 21) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Hit Rolls on this weapon can add your Strength, Dexterity, or Consitution modifier";}
		else {GWeaponAffix = "• (T1 Weapon) Damage Rolls on this weapon can add your Strength, Dexterity, or Consitution modifier";}
		}
	else if (wpnRNG == 22 ) {GWeaponAffix = "• (T2 Weapon) Creatures hit by this weapon cannot regain Hit Points until the start of your next turn";}
	else if (wpnRNG == 23 ) {
		ElementTypeGen()
		GWeaponAffix = `• (T2 Weapon) Creatures hit by this weapon are impaired to ${GElement} until the start of your next turn`;}
	else if (wpnRNG == 24 ) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Creature hit by this weapon have -10 ft. to movement speeds until the start of your next turn";}
		else {GWeaponAffix = "• (T1 Weapon) Creature hit by this weapon have -5 ft. to movement speeds until the start of your next turn";}
		}
	else if (wpnRNG == 25 ) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Creatures hit by this weapon are wounded; until the start of your next turn, every time they take damage matching the weapon's type, they take an extra 1d8";}
		else {GWeaponAffix = "• (T1 Weapon) Creatures hit by this weapon are wounded; until the start of your next turn, every time they take damage matching the weapon's type, they take an extra 1d6";}
		}
	else if (wpnRNG >= 26 && wpnRNG <= 27) {GWeaponAffix = "• (T2 Weapon) As a Bonus Action, the weapon can be stored or retrieved from a pocket dimension";}
	else if (wpnRNG == 28 ) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) As a Bonus Action, the weapon can change into one of two weapons. One of them is the same type and the other is of the opposite range (melee/ranged). The weapons are randomly selected or determined by the DM and can be changed with a Tailoring Glyph.";}
		else {GWeaponAffix = "• (T1 Weapon) As a Bonus Action, the weapon can change into a weapon of the opposite range (melee/ranged). The weapon is randomly selected or determined by the DM and can be changed with a Tailoring Glyph.";}
		}
	else if (wpnRNG >= 29 && wpnRNG <= 30) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Weapon Hit rolls on this weapon can use Intelligence, Wisdom, or Charisma.";}
		else {GWeaponAffix = "• (T1 Weapon) Weapon Damage rolls on this weapon can use Intelligence, Wisdom, or Charisma.";}
		}
	else if (wpnRNG == 31 ) {GWeaponAffix = "• (T2 Weapon) Gain advantage if an ally is within 5 ft. of the target.";}
	else if (wpnRNG == 32 ) {GWeaponAffix = "• (T2 Weapon) As a Bonus Action, you can attack with the weapon, but it deals half damage.";}
	else if (wpnRNG == 33) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) When you hit a targe twith the weapon, all other enemies within 5 ft. of it must make a DC 13 Dexterity saving throw. On a fail, they take half the damage dealt to the inital target, and half of that on a save. You can do this once, recharging on a Long Rest.";}
		else {GWeaponAffix = "• (T1 Weapon) When you hit a targe twith the weapon, all other enemies within 5 ft. of it must make a DC 13 Dexterity saving throw. On a fail, they take half the damage dealt to the inital target, and half of that on a save. You can do this once, recharging on a Long Rest."}
	}
	else if (wpnRNG >= 34 && wpnRNG <= 35) {
		if (wpnTier == 3) {GWeaponAffix = "• (T2 Weapon) Add weapon dice one more time and +3 to Critical Hits";}
		else {GWeaponAffix = "• (T1 Weapon) Add weapon dice one more time to Critical Hits";}
	}
	else if (wpnRNG == 36) {GWeaponAffix = `• (T2 Weapon) Once per turn, as part of the Attack Action, you can teleport up to 5 ft. towards your target.`;}
	else if (wpnRNG >= 37 && wpnRNG <= 38) {GWeaponAffix = `• (T2 Weapon) Once per turn, your attacks also hit an enemy directly behind you`;}
	else if (wpnRNG == 39) {
		if (wpnTier == 3) {GWeaponAffix = `• (T2 Weapon) After you attack, as a Bonus Action, attempt to grapple the target and gain +2 on the check`;}
		else {GWeaponAffix = `• (T1 Weapon) After you attack, as a Bonus Action, attempt to grapple the target`;}
	}
	else if (wpnRNG >= 40 && wpnRNG <= 41) {CreatureTypeGen();
		if (wpnTier == 3) {GWeaponAffix = `• (T2 Weapon) You can detect when ${GCreature}s are within 20 ft. of you.`;}
		else {GWeaponAffix = `• (T1 Weapon) You can detect when ${GCreature}s are within 10 ft. of you.`;}
	}
	else if (wpnRNG == 42) {GWeaponAffix = `• (T2 Weapon) The weapon can deal half damage to creatures on the Ethereal Plane`;}
	else if (wpnRNG == 43) {GWeaponAffix = `• (T2 Weapon) Once per turn, per creature, on a hit, move them 5 ft. in a direction.`;}
	else if (wpnRNG >= 44 && wpnRNG <= 45) {
		if (wpnTier == 3) {GWeaponAffix = `• (T2 Weapon) The weapon deals double damage to structures and objects`;}
		else {GWeaponAffix = `• (T1 Weapon) The weapon deals 50% additional damage to structures and objects`;}
	}
	else if (wpnRNG == 46) {
		if (wpnTier == 3) {GWeaponAffix = `• (T2 Weapon) 	Critical Hits deal an extra d10 damage`;}
		else {GWeaponAffix = `• (T1 Weapon) 	Critical Hits deal an extra d6 damage`;}
	}
	else if (wpnRNG == 47) {GWeaponAffix = `• (T2 Weapon) After hitting a creature with this weapon, learn one random resistance, immunity, or vulnerability they have`;}
	}
	function WeaponAffixBtn() {
		let affNum = Number(document.getElementById("affixNum").value)
		let affWeapon = ""
		while (affNum > 0) {
			affNum -= 1
			WeaponAffix();
			affWeapon += `${GWeaponAffix} \n`
		}
			document.getElementById("glyphBox").innerHTML = affWeapon;
	}

function ArmorAffix() {
	let armRNG = Math.floor(Math.random() * 51) + 1;
	let armTier = Math.floor(Math.random() * 3) + 1;
	if (armRNG >= 1 && armRNG <= 2) {GArmorAffix = "• (T2 Armor) +1 AC";}
	else if (armRNG >= 3 && armRNG <= 4) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) 50% reduced Fall Damage";}
		else {GArmorAffix = "• (T1 Armor) 25% Reduced Fall Damage";}
	}
	else if (armRNG == 5) {GArmorAffix = "• (T2 Armor) Reduce Falling and Force Damage by half of your level";}
	else if (armRNG >= 6 && armRNG <= 7) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) Incoming melee and ranged weapon attacks from Supernatural enemies have Disadvantage";}
		else {GArmorAffix = "• (T1 Armor) Incoming melee weapon attacks from Supernatural enemies have Disadvantage";}
	}
	else if (armRNG >= 8 && armRNG <= 9) {
		ElementTypeGen()
		GArmorAffix = `• (T2 Armor) Gain ${GElement} Resistance`;}
	else if (armRNG == 10) {GArmorAffix = "• (T2 Armor) Incoming Spell Attacks have Disadvantage";}
	else if (armRNG >= 11 && armRNG <= 12) {
		PhysicalTypeGen()
		while (GPhysical == "Native Weapon Type") {PhysicalTypeGen();} GArmorAffix = `• (T2 Armor) Gain nonmagical ${GPhysical} Resistance`;}
	else if (armRNG >= 13 && armRNG <= 14) {
		ElementTypeGen()
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) Reduce all ${GElement} damage by 7`;}
		else {GArmorAffix = `• (T1 Armor) Reduce all ${GElement} damage by 4`;}
	}
	else if (armRNG >= 15 && armRNG <= 16) {GArmorAffix = "• (T2 Armor) Negative Armor Properties do not apply";}
	else if (armRNG >= 17 && armRNG <= 18) {GArmorAffix = "• (T2 Armor) Unless you will it, other creatures see normal clothing instead of your armor, unless they are immune to illusions";}
	else if (armRNG >= 19 && armRNG <= 20) {
		WeatherTypeGen()
		GArmorAffix = `• (T2 Armor) Advantage on ${GWeather} saving throws`;}
	else if (armRNG >= 21 && armRNG <= 22) {GArmorAffix = "• (T2 Armor) As an Action, Armor can be stored or retrieved from a pocket dimension";}
	else if (armRNG >= 23 && armRNG <= 24) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) Weapon damage you take is reduced by 5";}
		else {GArmorAffix = "• (T1 Armor) Weapon damage you take is reduced by 3";}
	}
	else if (armRNG == 25) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) Critical Damage you take is reduced by 7";}
		else {GArmorAffix = "• (T1 Armor) Critical Damage you take is reduced by 4";}
	}
	else if (armRNG == 26) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) While not Incapacitated, Stunned, or Paralyzed, gain 7 Temporary Hit Points at the start of your turn";}
		else {GArmorAffix = "• (T1 Armor) While not Incapacitated, Stunned, or Paralyzed, gain 4 Temporary Hit Points at the start of your turn";}
	}
	else if (armRNG == 27) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) When you reach 3 failed Death saving throws, the armor shatters and you regain 12 Hit Points";}
		else {GArmorAffix = "• (T1 Armor) When you reach 3 failed Death saving throws, the armor shatters and you regain 6 Hit Points";}
	}
	else if (armRNG == 28) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) Melee attackers take 5 Piercing Damage when they hit you";}
		else {GArmorAffix = "• (T1 Armor) Melee attackers take 3 Piercing Damage when they hit you";}
	}
	else if (armRNG >= 29 && armRNG <= 30) {
		CreatureTypeGen()
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) Take 8 less damage from ${GCreature}s`;}
		else {GArmorAffix = `• (T1 Armor) Take 4 less damage from ${GCreature}s`;}
	}
	else if (armRNG >= 31 && armRNG <= 32) {
		AttributeTypeGen()
		while (GAttribute == "Dexterity") {
			AttributeTypeGen()
		}
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) Instead of Dexterity, you can add ${GAttribute} to your AC`;}
		else {GArmorAffix = `• (T1 Armor) Instead of Dexterity, you can add half of ${GAttribute} to your AC`;}
	}
	else if (armRNG == 33) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) At the start of your turn, regain 5 Hit Points (taking Fire or Critical damage negates this for one turn)";}
		else {GArmorAffix = "• (T1 Armor) At the start of your turn, regain 3 Hit Points (taking Fire or Critical damage negates this for one turn)";}
	}
	else if (armRNG == 34) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) Take 50% less damage from Ranged Weapon Attacks";}
		else {GArmorAffix = "• (T1 Armor) Take 25% less damage from Ranged Weapon Attacks";}
	}
	else if (armRNG >= 35 && armRNG <= 36) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) Increase Maximum Hit Points by 12";}
		else {GArmorAffix = "• (T1 Armor) Increase Maximum Hit Points by 6";}
	}
	else if (armRNG == 37) {
		if (armTier == 3) {GArmorAffix = "• (T2 Armor) You cannot gain more than 3 levels of Exhaustion";}
		else {GArmorAffix = "• (T1 Armor) You cannot gain more than 4 levels of Exhaustion";}
	}
	else if (armRNG >= 38 && armRNG <= 39) {
		ConditionTypeGen()
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) Gain Advantage on saving throws against ${GCondition} and it has 50% reduced duration (minimum 6 seconds)`;}
		else {GArmorAffix = `• (T1 Armor) Gain Advantage on saving throws against ${GCondition}`;}
	}
	else if (armRNG == 40) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) Attune to the object and give it to another creature. You take half of the physical damage they would take while you are within 60 ft.`;}
		else {GArmorAffix = `• (T1 Armor) Attune to the object and give it to another creature. You take half of the physical damage they would take while you are within 30 ft.`;}
	}
	else if (armRNG == 41) {GArmorAffix = `• (T2 Armor) As a Reaction to taking damage, you may teleport up to 10 ft. to a location you can see.`;}
	else if (armRNG >= 42 && armRNG <= 43) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) As a Reaction to being Hit, expend a number of charges and increase your AC by that for that attack, The item has 5 charges, regaining them at dawn.`;}
		else {GArmorAffix = `• (T1 Armor) As a Reaction to being Hit, expend a number of charges and increase your AC by that for that attack, The item has 3 charges, regaining them at dawn.`;}
	}
	else if (armRNG >= 44) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) As a Reaction, attempt to grapple the attacker. Two uses per Long Rest.`;}
		else {GArmorAffix = `• (T1 Armor) As a Reaction, attempt to grapple the attacker. One use per Long Rest.`;}
	}
	else if (armRNG == 45) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) Gain your level x1 to Hit Point Maximum`;}
		else {GArmorAffix = `• (T1 Armor) Gain half of your level to Hit Point Maximum`;}
	}
	else if (armRNG >= 46) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) As an Action, enter a Guard Stance. You cannot move or Actions or Reactions, but gain +6 AC. You can leave the stance as a Bonus Action.`;}
		else {GArmorAffix = `• (T1 Armor) As an Action, enter a Guard Stance. You cannot move or Actions or Reactions, but gain +6 AC. You can leave the stance as a Bonus Action.`;}
	}
	else if (armRNG == 47) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) While you’re under the Dodge Action, gain +2 AC and +2 to Saving Throws`;}
		else {GArmorAffix = `• (T1 Armor) While you’re under the Dodge Action, gain +2 AC`;}
	}
	else if (armRNG == 48) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) 50% of your fall damage is instead taken by a creature you land on. They must make a (10 + PB + Dex or Str) Dexterity saving throw to avoid.`;}
		else {GArmorAffix = `• (T1 Armor) 25% of your fall damage is instead taken by a creature you land on. They must make a (10 + PB + Dex or Str) Dexterity saving throw to avoid.`;}
	}
	else if (armRNG == 49) {
		if (armTier == 3) {GArmorAffix = `• (T2 Armor) While standing still, you blend in with the background. Creatures haves -4 to checks to find or see you.`;}
		else {GArmorAffix = `• (T1 Armor) While standing still, you blend in with the background. Creature haves -2 to checks to find or see you.`;}
	}
	else if (armRNG == 50) {GArmorAffix = `• (T2 Armor) Gain 1 use of Legendary Resistance that recharges at dawn.`;}
	else if (armRNG == 51) {GArmorAffix = `• (T2 Armor) Once per Long rest, a Critical Hit against you becomes a normal hit.`;}
	
}
	function ArmorAffixBtn() {
		let affNum = Number(document.getElementById("affixNum").value)
		let affArmor = ""
		while (affNum > 0) {
			affNum -= 1
			ArmorAffix();
			affArmor += `${GArmorAffix} \n`
		}
			document.getElementById("glyphBox").innerHTML = affArmor;
	}

function AccessoryAffix() {
	let accRNG = Math.floor(Math.random() * 56) + 1;
	let accTier = Math.floor(Math.random() * 3) + 1;
	if (accRNG >= 1 && accRNG <= 2) {
		let statOne
		AttributeTypeGen()
		statOne = GAttribute
		AttributeTypeGen()
		while (GAttribute == statOne) {
			AttributeTypeGen()
		}
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) +1 to ${GAttribute} and ${statOne}`}
		else {GAccessoryAffix = `• (T1 Accessory) +1 to ${GAttribute}`}
	}
	else if (accRNG == 3) {GAccessoryAffix = "• (T2 Accessory) +1 to Spell DC"}
	else if (accRNG >= 4 && accRNG <= 5) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) +2 to Spell Attack"}
		else {GAccessoryAffix = "• (T1 Accessory) +1 to Spell Attack"}
	}
	else if (accRNG >= 6 && accRNG <= 7) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) +2 Hit Dice (does not affect Maxmimum Hit Points)"}
		else {GAccessoryAffix = "• (T1 Accessory) +1 Hit Dice (does not affect Maxmimum Hit Points)"}
	}
	else if (accRNG >= 8 && accRNG <= 9) {GAccessoryAffix = "• (T2 Accessory) Hit Dice are 1 Tier higher (does not affect Maxmimum Hit Points)"}
	else if (accRNG >= 10 && accRNG <= 11) {GAccessoryAffix = "• (T2 Accessory) Gain Medium Armor Proficiency"}
	else if (accRNG >= 12 && accRNG <= 13) {GAccessoryAffix = "• (T2 Accessory) Gain Simple Weapon Proficiency"}
	else if (accRNG == 14) {
		AttributeTypeGen()
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) Gain +2 and saving throw proficiency with ${GAttribute}`}
		else {GAccessoryAffix = `• (T1 Accessory) Gain ${GAttribute} saving throw proficiency`}
	}
	else if (accRNG >= 15 && accRNG <= 16) {
		SkillTypeGen()
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) Gain proficiency and expertise with ${GSkillX}`}
		else {GAccessoryAffix = `• (T1 Accessory) Gain proficiency with ${GSkillX}`}
	}
	else if (accRNG >= 17 && accRNG <= 18) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain a random Cantrip, you have +8 to Spell Attack and a DC of 16 for this spell"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain a random Cantrip, you have +6 to Spell Attack and a DC of 14 for this spell"}
	}
	else if (accRNG == 19) {GAccessoryAffix = "• (T2 Accessory) Gain Advantage on saving throws against magic that you can see"}
	else if (accRNG >= 20 && accRNG <= 21) {
		SkillTypeGen()
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) Gain +2 and Advantage on ${GSkillX} ability checks`}
		else {GAccessoryAffix = `• (T1 Accessory) Gain +2 on ${GSkillX} ability checks`}
	}
	else if (accRNG == 22) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) You may roll all weapon damage dice a second time and use the higher roll. You can do this three time, recharging on a Short Rest"}
		else {GAccessoryAffix = "• (T1 Accessory) You may roll all weapon damage dice a second time and use the higher roll. You can do this twice, recharging on a Short Rest"}
	}
	else if (accRNG == 23) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) You can reroll all 1s and 2s on an attack or damage roll. You can do this twice, recharging on a Short Rest"}
		else {GAccessoryAffix = "• (T1 Accessory) You can reroll all 1s on an attack or damage roll. You can do this twice, recharging on a Short Rest"}
	}
	else if (accRNG == 24) {GAccessoryAffix = "• (T2 Accessory) +1 Attunement Slot"}
	else if (accRNG == 25) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain one 4th level Spell Slot (reroll if the character is fully Martial)"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain one 3rd level Spell Slot (reroll if the character is fully Martial)"}
	}
	else if (accRNG == 26) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Ranged Weapons, Cantrips, and 1st Level Spells can be used when you use an Opportunity Attack"}
		else {GAccessoryAffix = "• (T1 Accessory) Ranged Weapons and Cantrips can be used when you use an Opportunity Attack"}
	}
	else if (accRNG == 27) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain a random 1st and 2nd Level Spell with one use, recharging on a Long Rest (+8 Spell Attack and DC 16 for Martial Characters)"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain a random 1st Level Spell with one use, recharging on a Long Rest (+6 Spell Attack and DC 14 for Martial Characters)"}
	}
	else if (accRNG == 28) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Spells can be cast without Somatic (Gesture) or Verbal components"}
		else {GAccessoryAffix = "• (T1 Accessory) Spells can be cast without Somatic (Gesture) components"}
	}
	else if (accRNG >= 29 && accRNG <= 30) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Material costs for spells are reduced by 50%"}
		else {GAccessoryAffix = "• (T1 Accessory) Material costs for spells are reduced by 25%"}
	}
	else if (accRNG == 31) {GAccessoryAffix = "• (T2 Accessory) Gain 5 ft. of all applicable speeds"}
	else if (accRNG >= 32 && accRNG <= 33) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain a 30 ft. Swim Speed"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain a 20 ft. Swim Speed"}
	}
	else if (accRNG >= 34 && accRNG <= 35) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain a 30 ft. Climb Speed"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain a 20 ft. Climb Speed"}
	}
	else if (accRNG >= 36 && accRNG <= 37) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain a 30 ft. Hover Speed"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain a 20 ft. Hover Speed"}
	}
	else if (accRNG == 38) {
		ActionTypeGen()
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) Twice per combat you may use ${GAction} as a Bonus Action`}
		else {GAccessoryAffix = `• (T1 Accessory) Once per combat you may use ${GAction} as a Bonus Action`}
	}
	else if (accRNG == 39) {
		ElementTypeGen()
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) Gain +6 to all instances of ${GElement} damage`}
		else {GAccessoryAffix = `• (T1 Accessory) Gain +3 to all instances of ${GElement} damage`}
	}
	else if (accRNG == 40) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain Advantage on Opportunity Attacks and an additional Reaction per turn"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain Advantage on Opportunity Attacks"}
	}
	else if (accRNG >= 41 && accRNG <= 42) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain 60 ft. of Darkvision"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain 30 ft. of Darkvision"}
	}
	else if (accRNG >= 43 && accRNG <= 44) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain 30 ft. of Blindsight"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain 15 ft. of Blindsight"}
	}
	else if (accRNG >= 45 && accRNG <= 46) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Gain 30 ft. of Tremorsense"}
		else {GAccessoryAffix = "• (T1 Accessory) Gain 15 ft. of Tremorsense"}
	}
	else if (accRNG == 47) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) Once a day, gain 10 ft. of Truesight for 15 minutes"}
		else {GAccessoryAffix = "• (T1 Accessory) Once a day, gain 5 ft. of Truesight for 10 minutes"}
	}
	else if (accRNG == 48) {GAccessoryAffix = "• (T2 Accessory) Healing you take is split between you and all allies within 5 ft. of you";}
	else if (accRNG == 49) {ActionTypeGen(); GAccessoryAffix = `• (T2 Accessory) ${GAction} lasts for two rounds`;}
	else if (accRNG == 50) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) As a Bonus Action, you can take a bite off the item and regain 25% of your Maximum Hit Points. The item loses all affixes until it regenerates at dawn."}
		else {GAccessoryAffix = "• (T1 Accessory) As a Bonus Action, you can take a bite off the item and regain Hit Points equal to your PB times 3. The item loses all affixes until it regenerates at dawn."}
	}
	else if (accRNG == 51) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) As an Action, you can sacrifice multiples of 8 Hit Points to regain a Spell Slot of that multiple, max 5th."}
		else {GAccessoryAffix = "• (T1 Accessory) As an Action, you can sacrifice multiples of 10 Hit Points to regain a Spell Slot of that multiple, max 3rd."}
	}
	else if (accRNG == 52) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) As a Bonus Action, you can begin or stop glowing. While glowing, you shed light up to 20 feet."}
		else {GAccessoryAffix = "• (T1 Accessory) As an Action, you can begin or stop glowing. While glowing, you shed light up to 10 feet."}
	}
	else if (accRNG == 53) {
		if (accTier == 3) {GAccessoryAffix = "• (T2 Accessory) While below 25% health, gain +3 damage and AC"}
		else {GAccessoryAffix = "• (T1 Accessory) While below 25% health, gain +2 damage and AC"}
	}
	else if (accRNG == 54) {GAccessoryAffix = "• (T2 Accessory) Once per Long Rest, upcast a spell for free";}
	else if (accRNG == 55) {GAccessoryAffix = "• (T2 Accessory) Healing dice used to heal you are rolled with advantage";}
	else if (accRNG == 56) {
		ElementTypeGen();
		if (accTier == 3) {GAccessoryAffix = `• (T2 Accessory) Spells that deal ${GElement} damage gain +2 to Hit or DC`}
		else {GAccessoryAffix = `• (T1 Accessory) Spells that deal ${GElement} damage gain +1 to Hit or DC`}
	}
}
	function AccessoryAffixBtn() {
		let affNum = Number(document.getElementById("affixNum").value)
		let affAccessory = ""
		while (affNum > 0) {
			affNum -= 1
			AccessoryAffix();
			affAccessory += `${GAccessoryAffix} \n`
		}
			document.getElementById("glyphBox").innerHTML = affAccessory;
	}


function TaintedWeaponAffix() {
	let RNG = Math.floor(Math.random() * 50) + 1;
	if (RNG == 1) {GTaintedWeapon = "• (Tainted Weapon) +1 to all Attributes";}
	else if (RNG == 2) {
		AttributeTypeGen();
		GTaintedWeapon = `• (Tainted Weapon) Gain +4 ${GAttribute}`;}
	else if (RNG == 3) {GTaintedWeapon = "• (Tainted Weapon) +1 to Proficiency Bonus";}
	else if (RNG == 4) {GTaintedWeapon = "• (Tainted Weapon) +1 Attunement Slot";}
	else if (RNG == 5) {GTaintedWeapon = "• (Tainted Weapon) Gain a Class Affix with double effectiveness";}
	else if (RNG == 6) {GTaintedWeapon = "• (Tainted Weapon) The item cannot be picked up by someone you do not trust implicitly";}
	else if (RNG == 7) {GTaintedWeapon = "• (Tainted Weapon) +2 AC";}
	else if (RNG == 8) {GTaintedWeapon = "• (Tainted Weapon) You no longer need to eat, drink, breath, or sleep";}
	else if (RNG == 9) {GTaintedWeapon = "• (Tainted Weapon) Gain an extra Bonus Action each turn";}
	else if (RNG == 10) {
		CreatureTypeGen()
		GTaintedWeapon = `• (Tainted Weapon) You can detect the presence of ${GCreature}s within 60 ft. and you deal +6 damage to them`;}
	else if (RNG == 11) {GTaintedWeapon = "• (Tainted Weapon) Gain an additional Reaction each turn";}
	else if (RNG == 12) {GTaintedWeapon = "• (Tainted Weapon) The weapon can deal full damage to creatures on the Etheral plane";}
	else if (RNG == 13) {GTaintedWeapon = "• (Tainted Weapon) Gain a Class Affix that does not count towards the limit of 2";}
	else if (RNG == 14) {GTaintedWeapon = "• (Tainted Weapon) Gain three Class Affixes (you cannot benefit from any other source of Class Affix while this item is equipped)";}
	else if (RNG == 15) {GTaintedWeapon = "• (Tainted Weapon) The item is invisible to other outside of combat and unidentifiable in combat";}
	else if (RNG == 16) {
		ElementTypeGen();
		GTaintedWeapon = `• (Tainted Weapon) All damage dealt by the weapon is converted to ${GElement}`;}
	else if (RNG == 17) {GTaintedWeapon = "• (Tainted Weapon) The damage die of the weapon is 4 tiers higher than the base";}
	else if (RNG == 18) {GTaintedWeapon = "• (Tainted Weapon) +3 to Hit and Damage";}
	else if (RNG == 19) {GTaintedWeapon = "• (Tainted Weapon) Critical Hits roll an extra set of dice";}
	else if (RNG == 20) {GTaintedWeapon = "• (Tainted Weapon) The size of the weapon is doubled in all dimensions; the size does not change";}
	else if (RNG == 21) {GTaintedWeapon = "• (Tainted Weapon) The weapon's Critical Range is increased by 4";}
	else if (RNG == 22) {GTaintedWeapon = "• (Tainted Weapon) Increase all non-physical damage dealt by the weapon by 8";}
	else if (RNG == 23) {GTaintedWeapon = "• (Tainted Weapon) (Melee) The weapon can be thrown up to 20 ft. and returns as a Bonus Action. (Ranged/Thrown) Quadruple Maximum Range and no Disadvantage on Long Range attacks";}
	else if (RNG == 24) {GTaintedWeapon = "• (Tainted Weapon) Each of the weapon's damage dice cannot deal less than half damage (ie. a 1 or 2 on a d6 counts as a 3";}
	else if (RNG == 25) {GTaintedWeapon = "• (Tainted Weapon) The weapon deals an extra 2d6 damage";}
	else if (RNG == 26) {GTaintedWeapon = "• (Tainted Weapon) Gain Advantage on weapon attacks while at or belo whalf health (this stacks with other sources of Advantage)";}
	else if (RNG == 27) {GTaintedWeapon = "• (Tainted Weapon) +5 to Hit";}
	else if (RNG == 28) {GTaintedWeapon = "• (Tainted Weapon) +5 to Damage";}
	else if (RNG == 29) {GTaintedWeapon = "• (Tainted Weapon) Hit and Damage rolls on this weapon can use any Attribute and gain +2";}
	else if (RNG == 30) {GTaintedWeapon = "• (Tainted Weapon) Hit enemies have -20 ft. movement speed until the start of your next turn";}
	else if (RNG == 31) {GTaintedWeapon = "• (Tainted Weapon) Hit enemies take an additional 2d6 of the weapon’s base damage type when hit by that type of damage for three turns";}
	else if (RNG == 32) {
		let statOne;
		AttributeTypeGen();
		statOne = GAttribute;
		AttributeTypeGen();
		while (GAttribute == statOne) {
			AttributeTypeGen();}
		GTaintedWeapon = `• (Tainted Weapon) The weapon adds both ${GAttribute} and ${statOne} to Hit and Damage rolls`;}
	else if (RNG == 33) {GTaintedWeapon = "• (Tainted Weapon) Hit enemies gain one less Legendary Action (a creature cannot lose more than one per turn this way)";}
	else if (RNG == 34) {GTaintedWeapon = "• (Tainted Weapon) As a Reaction or Bonus Action, this weapon can be changed into any other weapon type";}
	else if (RNG == 35) {GTaintedWeapon = "• (Tainted Weapon) This weapon always has Advantage on Attacks (this can't be cancelled out with Disadvantage)";}
	else if (RNG == 36) {GTaintedWeapon = "• (Tainted Weapon) Gain +1 Extra Attack with this weapon";}
	else if (RNG == 37) {GTaintedWeapon = `• (Tainted Weapon) Deal quadruple damage to structures and objects`;}
	else if (RNG == 38) {GTaintedWeapon = `• (Tainted Weapon) Attack with the weapon as a Bonus Action for full damage, or +2 AC if you don’t use your Bonus Action`;}
	else if (RNG == 39) {GTaintedWeapon = `• (Tainted Weapon) Add weapon dice two more times to a critical hit`;}
	else if (RNG == 40) {GTaintedWeapon = `• (Tainted Weapon) As part of the Attack, you can teleport up to 15 ft. towards the target`;}
	else if (RNG == 41) {GTaintedWeapon = `• (Tainted Weapon) Your attacks also hit enemies directly behind you`;}
	else if (RNG == 42) {GTaintedWeapon = `• (Tainted Weapon) You cannot be moved against your will and have +5 to escaping Grapple Check`;}
	else if (RNG == 43) {GTaintedWeapon = `• (Tainted Weapon) Gain 15 ft. of all applicable speeds`;}
	else if (RNG == 44) {GTaintedWeapon = `• (Tainted Weapon) Critical Hits deal an additional 2d10`;}
	else if (RNG == 45) {GTaintedWeapon = `• (Tainted Weapon) After hitting with this weapon, learn all Resistances, Vulnerabilities, and Immunities of the target`;}
	else if (RNG == 46) {GTaintedWeapon = `• (Tainted Weapon) Every consecutive hit against a target increases your Critical Range by 1, this resets on a Critical Hit`;}
	else if (RNG == 47) {GTaintedWeapon = `• (Tainted Weapon) Every consecutive miss against a target grants +2 to Hit, this rests when you hit`;}
	else if (RNG == 48) {GTaintedWeapon = `• (Tainted Weapon) When you kill a creature with this weapon, immediately, as a Reaction, cast Disintegrate on another creature within range. You can do this once per day, recharging at dawn. The DC is the higher between your DC or 20`;}
	else if (RNG == 49) {GTaintedWeapon = `• (Tainted Weapon) When you hit a creature that has a Recharge ability with a weapon, they have disadvantage on their next turn on Recharge rolls`;}
	else if (RNG == 50) {GTaintedWeapon = `• (Tainted Weapon) (Hidden) The item is cursed and cannot be removed`;}
}
	function TaintedWeaponAffixBtn() {
		let RNG = Math.floor(Math.random() * 20) + 1;
		let affixType;
		let taintResult;
		if (RNG >= 1 && RNG <= 2) {
			WeaponAll(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Weapon changes into ${GWeapon} with one affix:\n${affixType}`;
		}
		else if (RNG >= 3 && RNG <= 4) {
			WeaponAll(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Weapon changes into ${GWeapon} with two affixes:\n${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}`;
		}
		else if (RNG >= 5 && RNG <= 6) {
			WeaponAll(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Weapon changes into ${GWeapon} with three affixes:\n${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}`;
		}
		else if (RNG >= 7 && RNG <= 10) {
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Weapon gains:\n${affixType}`;
		}
		else if (RNG >= 11 && RNG <= 15) {
			WeaponAll();
			TaintedWeaponAffix();
			taintResult = `Weapon changes into ${GWeapon} and gains:\n${GTaintedWeapon}`;
		}
		else if (RNG >= 16 && RNG <= 18) {
			TaintedWeaponAffix();
			taintResult = `Weapon gains:\n${GTaintedWeapon}`;
		}
		else if (RNG >= 19 && RNG <= 20) {
			TaintedWeaponAffix();
			taintResult = `Weapon gains:\n${GTaintedWeapon}\n`;
			TaintedWeaponAffix();
			taintResult += `${GTaintedWeapon}`;
		}	
		
		document.getElementById("glyphBox").innerHTML = `${taintResult}\n\n\nTAINTED: Tainted items can NEVER be modified or changed again short of a Wish spell.\n(Topical effects like Oils and Spells still work)`;
	}

function TaintedArmorAffix() {
	let RNG = Math.floor(Math.random() * 50) + 1;
	if (RNG == 1) {GTaintedArmor = "• (Tainted Armor) +1 to all Attributes";}
	else if (RNG == 2) {
		AttributeTypeGen();
		GTaintedArmor = `• (Tainted Armor) Gain +4 ${GAttribute}`;}
	else if (RNG == 3) {GTaintedArmor = "• (Tainted Armor) +1 to Proficiency Bonus";}
	else if (RNG == 4) {GTaintedArmor = "• (Tainted Armor) +3 Attunement Slots";}
	else if (RNG == 5) {GTaintedArmor = "• (Tainted Armor) Gain a Class Affix with double effectiveness";}
	else if (RNG == 6) {GTaintedArmor = "• (Tainted Armor) +1 Attunement Slot";}
	else if (RNG == 7) {GTaintedArmor = "• (Tainted Armor) You cannot be moved against your will and have +5 to escaping Grapple Check";}
	else if (RNG == 8) {GTaintedArmor = "• (Tainted Armor) Gain Resistance to all attacks originating on a plane that you are not currently on";}
	else if (RNG == 9) {GTaintedArmor = "• (Tainted Armor) Gain an extra Bonus Action each turn";}
	else if (RNG == 10) {GTaintedArmor = "• (Tainted Armor) Gain 15 ft. of all applicable speed";}
	else if (RNG == 11) {GTaintedArmor = "• (Tainted Armor) You no longer need to eat, drink, breath, or sleep";}
	else if (RNG == 12) {GTaintedArmor = "• (Tainted Armor) Your unarmed attacks deal 1d8 + the higher of Strength or Dexterity. If the creature already has Unarmed Attack Dice, they deal 1d8 extra.";}
	else if (RNG == 13) {GTaintedArmor = "• (Tainted Armor) Gain a Class Affix that does not count towards the limit of 2";}
	else if (RNG == 14) {GTaintedArmor = "• (Tainted Armor) Gain three Class Affixes (you cannot benefit from any other source of Class Affix while this item is equipped)";}
	else if (RNG == 15) {GTaintedArmor = "• (Tainted Armor) The item is invisible to other outside of combat and unidentifiable in combat";}
	else if (RNG == 16) {GTaintedArmor = "• (Tainted Armor) +3 AC";}
	else if (RNG == 17) {GTaintedArmor = "• (Tainted Armor) Gain Immunity to Fall Damage";}
	else if (RNG == 18) {GTaintedArmor = "• (Tainted Armor) Increase Maximum Hit Points by 25";}
	else if (RNG == 19) {GTaintedArmor = "• (Tainted Armor) You cannot gain levels of Exhaustion";}
	else if (RNG == 20) {GTaintedArmor = "• (Tainted Armor) Melee Weapon attacks against you have Disadvantage (this can't be cancelled out with Advantage)";}
	else if (RNG == 21) {GTaintedArmor = "• (Tainted Armor) Ranged Weapon attacks against you have Disadvantage (this can't be cancelled out with Advantage)";}
	else if (RNG == 22) {
		let condOne;
		let condTwo;
		ConditionTypeGen();
		condOne = GCondition;
		ConditionTypeGen();
		while (GCondition == condOne) {
			ConditionTypeGen();}
		condTwo = GCondition;
		ConditionTypeGen();
		while (GCondition == condOne || GCondition == condTwo) {
			ConditionTypeGen();}
		GTaintedArmor = `• (Tainted Armor) Gain Immunity to ${GCondition}, ${condOne}, and ${condTwo}`;}
	else if (RNG == 23) {GTaintedArmor = "• (Tainted Armor) Take 75% less damage from Ranged Attacks";}
	else if (RNG == 24) {GTaintedArmor = "• (Tainted Armor) Gain Resistance to Bludgeoning, Slashing, and Piercing";}
	else if (RNG == 25) {
		let eleOne;
		let eleTwo;
		ElementTypeGen();
		eleOne = GElement;
		ElementTypeGen();
		while (GElement == eleOne) {
			ElementTypeGen();}
		eleTwo = GElement;
		ElementTypeGen();
		while (GElement == eleOne || GCondition == eleTwo) {
			ElementTypeGen();}
		GTaintedArmor = `• (Tainted Armor) Gain Resistance to ${GElement}, ${eleOne}, and ${eleTwo}`;}
	else if (RNG == 26) {
		AttributeTypeGen();
		while (GAttribute == "Consitution") {AttributeTypeGen();}
		GTaintedArmor = `• (Tainted Armor) Gain Proficiency with all ${GAttribute} Skills`;}
	else if (RNG == 27) {GTaintedArmor = "• (Tainted Armor) While not Incapacitated, gain 14 Temporary Hit Points at the start of your turn";}
	else if (RNG == 28) {GTaintedArmor = "• (Tainted Armor) At the start of your turn, regain 10 Hit Points";}
	else if (RNG == 29) {
		let eleX;
		ElementTypeGen();
		eleX = GElement;
		ElementTypeGen();
		while (GElement == eleX) {ElementTypeGen();}
		GTaintedArmor = `• (Tainted Armor) Reduce all ${GElement} and ${eleX} damage taken by 14`;}
	else if (RNG == 30) {GTaintedArmor = "• (Tainted Armor) Your appearance is completely indiscernable unless you will it otherwise";}
	else if (RNG == 31) {GTaintedArmor = "• (Tainted Armor) Weapon Damage you take is reduced by 12";}
	else if (RNG == 32) {GTaintedArmor = "• (Tainted Armor) Critical Damage you take is reduced by 16";}
	else if (RNG == 33) {GTaintedArmor = "• (Tainted Armor) Once a day, when you reach 3 failed Death Saves, regain 10 Hit Points and the armor loses 1 AC, it shatters after 4 activations";}
	else if (RNG == 34) {GTaintedArmor = "• (Tainted Armor) Melee attackers take 12 Piercing Damage when they hit you";}
	else if (RNG == 35) {CreatureTypeGen(); GTaintedArmor = `• (Tainted Armor) Take 50% less damage from ${GCreature}s`;}
	else if (RNG == 36) {GTaintedArmor = `• (Tainted Armor) As a Reaction to taking damage, you can teleport up to 30 ft.`;}
	else if (RNG == 37) {GTaintedArmor = `• (Tainted Armor) As a Reaction to being hit, expend a number of charges to gain that much AC for that attack. 10 charges, regain at dawn`;}
	else if (RNG == 38) {GTaintedArmor = `• (Tainted Armor) Gain your level x3 Hit Point Maximum`;}
	else if (RNG == 39) {GTaintedArmor = `• (Tainted Armor) As an Action, enter a Guard Stance. Your speed is halved and you cannot take Actions or Reactions, but gain +10 AC. You can leave the stance as an Bonus Action.`;}
	else if (RNG == 40) {GTaintedArmor = `• (Tainted Armor) The item cannot be picked up by someone you do not trust implicitly`;}
	else if (RNG == 41) {GTaintedArmor = `• (Tainted Armor) While you’re under the Dodge Action, gain +4 to Saves and AC`;}
	else if (RNG == 42) {GTaintedArmor = `• (Tainted Armor) 100% of your fall damage is instead taken by every creature within 5 feet of your landing area. They must make a (10 + PB + Dex or Str) Dexterity saving throw to avoid`;}
	else if (RNG == 43) {GTaintedArmor = `• (Tainted Armor) While standing still or moving at half speed, you blend in with the background. Creature haves -8 to checks to find or see you`;}
	else if (RNG == 44) {GTaintedArmor = `• (Tainted Armor) While below 50% health, gain +5 damage and AC`;}
	else if (RNG == 45) {GTaintedArmor = `• (Tainted Armor) Gain 3 uses of Legendary Resistance that recharge at dawn`;}
	else if (RNG == 46) {GTaintedArmor = `• (Tainted Armor) Healing dice used to heal you heal for the maximum and add +2 per dice`;}
	else if (RNG == 47) {GTaintedArmor = `• (Tainted Armor) You cannot be critically hit`;}
	else if (RNG == 48) {GTaintedArmor = `• (Tainted Armor) Gain Immunity to Physical Damage`;}
	else if (RNG == 49) {GTaintedArmor = `• (Tainted Armor) When you hit a creature that has a Recharge ability with a weapon, they have disadvantage on their next turn on Recharge rolls`;}
	else if (RNG == 50) {GTaintedArmor = `• (Tainted Armor) (Hidden) The item is cursed and cannot be removed`;}
}
	function TaintedArmorAffixBtn() {
		let RNG = Math.floor(Math.random() * 20) + 1;
		let affixType;
		let taintResult;
		if (RNG >= 1 && RNG <= 2) {
			ArmorAll(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Armor changes into ${GArmor} with one affix:\n${affixType}`;
		}
		else if (RNG >= 3 && RNG <= 4) {
			ArmorAll(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Armor changes into ${GArmor} with two affixes:\n${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}`;
		}
		else if (RNG >= 5 && RNG <= 6) {
			ArmorAll(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Armor changes into ${GArmor} with three affixes:\n${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}`;
		}
		else if (RNG >= 7 && RNG <= 10) {
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Armor gains:\n${affixType}`;
		}
		else if (RNG >= 11 && RNG <= 15) {
			ArmorAll();
			TaintedArmorAffix();
			taintResult = `Armor changes into ${GArmor} and gains:\n${GTaintedArmor}`;
		}
		else if (RNG >= 16 && RNG <= 18) {
			TaintedArmorAffix();
			taintResult = `Armor gains:\n${GTaintedArmor}`;
		}
		else if (RNG >= 19 && RNG <= 20) {
			TaintedArmorAffix();
			taintResult = `Armor gains:\n${GTaintedArmor}\n`;
			TaintedArmorAffix();
			taintResult += `${GTaintedArmor}`;
		}	
		
		document.getElementById("glyphBox").innerHTML = `${taintResult}\n\n\nTAINTED: Tainted items can NEVER be modified or changed again short of a Wish spell.\n(Topical effects like Oils and Spells still work)`;
	}

function TaintedAccessoryAffix() {
	let RNG = Math.floor(Math.random() * 50) + 1;
	if (RNG == 1) {GTaintedAccessory = "• (Tainted Accessory) +2 to all Attributes";}
	else if (RNG == 2) {
		AttributeTypeGen()
		GTaintedAccessory = `• (Tainted Accessory) Gain +4 ${GAttribute}`;}
	else if (RNG == 3) {GTaintedAccessory = "• (Tainted Accessory) +1 to Proficiency Bonus";}
	else if (RNG == 4) {GTaintedAccessory = "• (Tainted Accessory) +3 Attunement Slots";}
	else if (RNG == 5) {GTaintedAccessory = "• (Tainted Accessory) Gain a Class Affix with double effectiveness";}
	else if (RNG == 6) {GTaintedAccessory = "• (Tainted Accessory) The item cannot be picked up by someone you do not trust implicitly";}
	else if (RNG == 7) {CreatureTypeGen(); GTaintedAccessory = `• (Tainted Accessory) You can detect ${GCreature} within 60 ft. and deal +6 damage to them`;}
	else if (RNG == 8) {GTaintedAccessory = "• (Tainted Accessory) You no longer need to eat, drink, breath, or sleep";}
	else if (RNG == 9) {GTaintedAccessory = "• (Tainted Accessory) Gain an extra Bonus Action each turn";}
	else if (RNG == 10) {GTaintedAccessory = "• (Tainted Accessory) Gain 15 ft. of all applicable speed";}
	else if (RNG == 11) {GTaintedAccessory = "• (Tainted Accessory) Gain an additional Reaction each turn";}
	else if (RNG == 12) {GTaintedAccessory = "• (Tainted Accessory) Your unarmed attacks deal 1d8 + the higher of Strength or Dexterity. If the creature already has Unarmed Attack Dice, they deal 1d8 extra.";}
	else if (RNG == 13) {GTaintedAccessory = "• (Tainted Accessory) Gain a Class Affix that does not count towards the limit of 2";}
	else if (RNG == 14) {GTaintedAccessory = "• (Tainted Accessory) Gain three Class Affixes (you cannot benefit from any other source of Class Affix while this item is equipped)";}
	else if (RNG == 15) {GTaintedAccessory = "• (Tainted Accessory) The item is invisible to other outside of combat and unidentifiable in combat";}
	else if (RNG == 16) {GTaintedAccessory = "• (Tainted Accessory) +3 to Spell DC (Reroll for Full Martials)";}
	else if (RNG == 17) {GTaintedAccessory = "• (Tainted Accessory) +2 to Death Saving Throws";}
	else if (RNG == 18) {GTaintedAccessory = "• (Tainted Accessory) +2 to all non-Death Saving Throws";}
	else if (RNG == 19) {
		let statOne;
		AttributeTypeGen();
		statOne = GAttribute;
		AttributeTypeGen();
		while (GAttribute == statOne) {
			AttributeTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) +4 to ${GAttribute} and ${statOne} Saving Throws`;}
	else if (RNG == 20) {
		let skillOne;
		SkillTypeGen();
		skillOne = GSkillX;
		SkillTypeGen();
		while (GSkillX == skillOne) {
			SkillTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) Gain Double Advantage on ${GSkillX} and ${skillOne}`;}
	else if (RNG == 21) {
		let statOne;
		AttributeTypeGen();
		statOne = GAttribute;
		AttributeTypeGen();
		while (GAttribute == statOne) {
			AttributeTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) Gain Double Advantage on ${GAttribute} and ${statOne} Saving Throws`;}
	else if (RNG == 22) {GTaintedAccessory = "• (Tainted Accessory) Spells do not have Material Costs (Reroll for Full Martials)";}
	else if (RNG == 23) {GTaintedAccessory = "• (Tainted Accessory) Gain a 7th Level Spell Slot (Reroll for Full Martials)";}
	else if (RNG == 24) {GTaintedAccessory = "• (Tainted Accessory) Gain an 8th Level Spell Slot (Reroll for Full Martials)";}
	else if (RNG == 25) {GTaintedAccessory = "• (Tainted Accessory) Gain Proficiency with all Armor and Weapons";}
	else if (RNG == 26) {GTaintedAccessory = "• (Tainted Accessory) +2 to All Attributes";}
	else if (RNG == 27) {
		let statOne;
		AttributeTypeGen();
		statOne = GAttribute;
		AttributeTypeGen();
		while (GAttribute == statOne) {
			AttributeTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) +4 to ${GAttribute} and ${statOne}`;}
	else if (RNG == 28) {GTaintedAccessory = "• (Tainted Accessory) +5 to Spell Attack (Reroll for Full Martials)";}
	else if (RNG == 29) {GTaintedAccessory = "• (Tainted Accessory) +5 Hit Dice (does not affect Maximum Hit Points)";}
	else if (RNG == 30) {GTaintedAccessory = "• (Tainted Accessory) Hit Dice are 3 Tiers higher (does not affect Maximum Hit Points)";}
	else if (RNG == 31) {GTaintedAccessory = "• (Tainted Accessory) Gain Proficiency in Death Saving Throws";}
	else if (RNG == 32) {
		let skillOne;
		SkillTypeGen();
		skillOne = GSkillX;
		SkillTypeGen();
		while (GSkillX == skillOne) {
			SkillTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) Gain Proficiency and Expertise in ${GSkillX} and ${skillOne}`;}
	else if (RNG == 33) {GTaintedAccessory = "• (Tainted Accessory) Gain access to 3 random Cantrips (+12 to Spell Attack and DC20)";}
	else if (RNG == 34) {GTaintedAccessory = "• (Tainted Accessory) Gain Resistance to Magic Damage";}
	else if (RNG == 35) {GTaintedAccessory = "• (Tainted Accessory) Gain Advantage on all non-Death Saving Throws";}
	else if (RNG == 36) {GTaintedAccessory = "• (Tainted Accessory) When a Damage or Healing dice rolls a 1, it is instead considered as if it had rolled the maximum";}
	else if (RNG == 37) {GTaintedAccessory = "• (Tainted Accessory) Reroll all 1s and 2s on Damage or Healing dice";}
	else if (RNG == 38) {GTaintedAccessory = "• (Tainted Accessory) Gain a 1st, 2nd, 3rd, and 4th Level Spell with one use per Long Rest each";}
	else if (RNG == 39) {
		let actOne;
		ActionTypeGen();
		actOne = GAction;
		ActionTypeGen();
		while (GAction == actOne) {
			ActionTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) You may ${GAction} or ${actOne} as a Bonus Action`;}
	else if (RNG == 40) {
		let eleOne;
		ElementTypeGen();
		eleOne = GElement;
		ElementTypeGen();
		while (GElement == eleOne) {
			ElementTypeGen();}
		GTaintedAccessory = `• (Tainted Accessory) Gain +10 to all instances of ${GElement} and ${eleOne}`;}
	else if (RNG == 41) {GTaintedAccessory = "• (Tainted Accessory) Gain 120 ft. of Darkvision";}
	else if (RNG == 42) {GTaintedAccessory = "• (Tainted Accessory) Gain 90 ft. of Blindsight";}
	else if (RNG == 43) {GTaintedAccessory = "• (Tainted Accessory) Gain 90 ft. of Tremorsense";}
	else if (RNG == 44) {GTaintedAccessory = "• (Tainted Accessory) Up to Proficiency Bonus times a day, gain 30 ft. of Truesight for 30 minutes";}
	else if (RNG == 45) {GTaintedAccessory = "• (Tainted Accessory) One per Long Rest, gain an Extra Action on a turn";}
	else if (RNG == 46) {GTaintedAccessory = `• (Tainted Accessory) Healing you take is duplicated to three allies within 10 ft. of you`;}
	else if (RNG == 47) {GTaintedAccessory = `• (Tainted Accessory) As a Bonus Action, you can take a bite off the item and regain all of your Hit Points. The item loses all affixes until it regenerates at dawn`;}
	else if (RNG == 48) {GTaintedAccessory = `• (Tainted Accessory) As an Action, you can sacrifice multiple of 5 Hit Points to regain a Spell Slot of that multiple, max 9th level`;}
	else if (RNG == 49) {GTaintedAccessory = `• (Tainted Accessory) All Spells are upcast one slot`;}
	else if (RNG == 50) {GTaintedAccessory = `• (Tainted Accessory) (Hidden) The item is cursed and cannot be removed`;}
}
	function TaintedAccessoryAffixBtn() {
		let RNG = Math.floor(Math.random() * 20) + 1;
		let affixType;
		let taintResult;
		if (RNG >= 1 && RNG <= 2) {
			AccessoryGen(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Accessory changes into ${GAccessory} with one affix:\n${affixType}`;
		}
		else if (RNG >= 3 && RNG <= 4) {
			AccessoryGen(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Accessory changes into ${GAccessory} with two affixes:\n${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}`;
		}
		else if (RNG >= 5 && RNG <= 6) {
			AccessoryGen(); 
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Accessory changes into ${GAccessory} with three affixes:\n${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}\n`;
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult += `${affixType}`;
		}
		else if (RNG >= 7 && RNG <= 10) {
			affixType = Math.floor(Math.random() * 3) + 1;
				if (affixType == 1) {WeaponAffix(); affixType = GWeaponAffix;}
				else if (affixType == 2) {ArmorAffix(); affixType = GArmorAffix;}
				else if (affixType == 3) {AccessoryAffix(); affixType = GAccessoryAffix;}			
			taintResult = `Accessory gains:\n${affixType}`;
		}
		else if (RNG >= 11 && RNG <= 15) {
			AccessoryGen();
			TaintedAccessoryAffix();
			taintResult = `Accessory changes into ${GAccessory} and gains:\n${GTaintedAccessory}`;
		}
		else if (RNG >= 16 && RNG <= 18) {
			TaintedAccessoryAffix();
			taintResult = `Accessory gains:\n${GTaintedAccessory}`;
		}
		else if (RNG >= 19 && RNG <= 20) {
			TaintedAccessoryAffix();
			taintResult = `Accessory gains:\n${GTaintedAccessory}\n`;
			TaintedAccessoryAffix();
			taintResult += `${GTaintedAccessory}`;
		}	
		
		document.getElementById("glyphBox").innerHTML = `${taintResult}\n\n\nTAINTED: Tainted items can NEVER be modified or changed again short of a Wish spell.\n(Topical effects like Oils and Spells still work)`;
	}

function ClassAffix() {
	const arrX = [];
	let arrLength;
	let classX;
	let RNG = Math.floor(Math.random() * 12) + 1;
	let tierX = Math.floor(Math.random() * 3) + 1;
	if (document.getElementById("Artificer").checked == true) {arrX.push("Artificer");} else {}
	if (document.getElementById("Barbarian").checked == true) {arrX.push("Barbarian");} else {}
	if (document.getElementById("Bard").checked == true) {arrX.push("Bard");} else {}
	if (document.getElementById("Cleric").checked == true) {arrX.push("Cleric");} else {}
	if (document.getElementById("Druid").checked == true) {arrX.push("Druid");} else {}
	if (document.getElementById("Fighter").checked == true) {arrX.push("Fighter");} else {}
	if (document.getElementById("Monk").checked == true) {arrX.push("Monk");} else {}
	if (document.getElementById("Paladin").checked == true) {arrX.push("Paladin");} else {}
	if (document.getElementById("Ranger").checked == true) {arrX.push("Ranger");} else {}
	if (document.getElementById("Rogue").checked == true) {arrX.push("Rogue");} else {}
	if (document.getElementById("Sorcerer").checked == true) {arrX.push("Sorcerer");} else {}
	if (document.getElementById("Warlock").checked == true) {arrX.push("Warlock");} else {}
	if (document.getElementById("Wizard").checked == true) {arrX.push("Wizard");} else {}
	arrLength = arrX.length;
	classX = Math.floor(Math.random() * arrLength) + 1;
	classX = arrX[classX - 1];
		if (classX == "Artificer") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Artificer) Gain an additional use of Magical Tinkering and it can apply up to two effects to a single object`;}
				else {GClassAffix = `• (T1 Artificer) Magical Tinkering can apply up to two effects to a single object`;}}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Artificer) Gain an additional use of Magical Tinkering and it can be applied on up to Small objects`;}
				else {GClassAffix = `• (T1 Artificer) Tinkering effects can be applied on up to Small objects`;}}
			else if (RNG >= 5 && RNG <= 6) {InfusionTypeGen(); GClassAffix = `• (T2 Artificer) Learn the ${GInfusion} infusion`;}
			else if (RNG >= 7 && RNG <= 8) {GClassAffix = `• (T2 Artificer) Gain a 3rd Level Spell Slot`;}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Artificer) Up to two levels worth of spells can be cast each day without expending Spell Slots`;}
				else {GClassAffix = `• (T1 Artificer) Up to one level worth of spells can be cast each day without expending Spell Slots`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Artificer) +1 Infused Item Limit`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Artificer) Expend a Spell Slot to gain AC equal to half of the slot's level for 10 minutes (Subsequent uses override each other)`;}
			else if (RNG == 12) {GClassAffix = `• (T2 Artificer) A single object can contain up to 2 infusions`;}
		}
		else if (classX == "Barbarian") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Barbarian) +2 Rage uses`;}
				else {GClassAffix = `• (T1 Barbarian) +1 Rage use`;}}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Barbarian) +4 to Grapple Checks`;}
				else {GClassAffix = `• (T1 Barbarian) +2 to Grapple Checks`;}}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Barbarian) Rage as a Reaction to Initiative and +3 to Initiative if you do so`;}
				else {GClassAffix = `• (T1 Barbarian) Rage as a Reaction to Initiative`;}}
			else if (RNG >= 7 && RNG <= 8) {
				if (tierX == 3) {GClassAffix = `• (T2 Barbarian) +2 Rage Damage`;}
				else {GClassAffix = `• (T1 Barbarian) +1 Rage Damage`;}}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Barbarian) +2 AC while Raging`;}
				else {GClassAffix = `• (T1 Barbarian) +1 AC while Raging`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Barbarian) Enter Rage as a Reaction to damage being taken`;}
			else if (RNG == 11) {
				if (tierX == 3) {GClassAffix = `• (T2 Barbarian) Resists Fire and Cold Damage while Raging`;}
				else {GClassAffix = `• (T1 Barbarian) Resist Fire Damage while Raging`;}}
			else if (RNG == 12) {GClassAffix = `• (T2 Barbarian) Two-Handed weapons can be wielded in one hand with a shield in the other`;}
		}
		else if (classX == "Bard") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Bard) +2 Bardic Inspiration uses`;}
				else {GClassAffix = `• (T1 Bard) +1 Bardic Inspiration use`;}}
			else if (RNG >= 3 && RNG <= 4) {GClassAffix = `• (T2 Bard) +1 Bardic Dice Tier`;}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Bard) +2 Song of Rest Dice Tier`;}
				else {GClassAffix = `• (T1 Bard) +1 Song of Rest Dice Tier`;}}
			else if (RNG >= 7 && RNG <= 8) {SkillTypeGen(); GClassAffix = `• (T2 Bard) Gain Expertise in ${GSkillX}`;}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Bard) Gain [Quick Song of Rest] - Twice per Long Rest, as an Action, allies within 20 ft. can spend Hit Dice and a Song of Rest dice to heal`;}
				else {GClassAffix = `• (T1 Bard) Gain [Quick Song of Rest] - Once per Long Rest, as an Action, allies within 10 ft. can spend Hit Dice and a Song of Rest dice to heal`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Bard) Select one of your 1st Level spells, it can be cast without expending Spell Slots. The spell cannot be changed unless you use a Tailoring Glyph`;}
			else if (RNG == 11) {
				if (tierX == 3) {GClassAffix = `• (T2 Bard) Jack of All Trades now affects weapons and non-Death saving throws that you are not proficient with`;}
				else {GClassAffix = `• (T1 Bard) Jack of All Trades now affects weapons that you are not proficient with`;}}
			else if (RNG == 12) {GClassAffix = `• (T2 Bard) Bardic Dice grants double the dice but they are two tiers lower (min 2d4)`;}
		}
		else if (classX == "Cleric") {
			if (RNG >= 1 && RNG <= 2) {GClassAffix = `• (T2 Cleric) Gain an extra use of Channel Divinity`;}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Cleric) As a Bonus Action, expend one or two Hit Dice to heal a creature within 15 ft.`;}
				else {GClassAffix = `• (T1 Cleric) As an Action, expend one or two Hit Dice to heal a creature within 10 ft.`;}}
			else if (RNG >= 5 && RNG <= 6) {GClassAffix = `• (T2 Cleric) Increased Blessed or Divine Strike's damage dice by 1 tier`;}
			else if (RNG >= 7 && RNG <= 8) {
				if (tierX == 3) {GClassAffix = `• (T2 Cleric) When you expend a Spell Slot, heal for 8 Hit Points`;}
				else {GClassAffix = `• (T1 Cleric) When you expend a Spell Slot, heal for 4 Hit Points`;}}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Cleric) As a Reaction, grant two creatures within 20 ft. Resistance to Magic for one attack. You can do this twice, recharging on a Short Rest`;}
				else {GClassAffix = `• (T1 Cleric) As a Reaction, grant two creatures within 15 ft. Resistance to Magic for one attack. You can do this once, recharging on a Short Rest`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Cleric) Gain an extra use of Harness Divine Power`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Cleric) When you would get an Opportunity Attack, you may instead cast any Cantrip. This does not have to be an attack or target the triggering creature`;}
			else if (RNG == 12) {
				if (tierX == 3) {GClassAffix = `• (T2 Cleric) Gain an extra 4th and 5th Level Spell Slots`;}
				else {GClassAffix = `• (T1 Cleric) Gain an extra 4th Level Spell Slot`;}}
		}
		else if (classX == "Druid") {
			if (RNG >= 1 && RNG <= 2) {GClassAffix = `• (T2 Druid) Metal gear changes to wood while worn or wielded, they retain their stats`;}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Druid) Wild Shape lasts for 2 more hours, you can speak, and you can cast Cantrips while transformed`;}
				else {GClassAffix = `• (T1 Druid) Wild Shape lasts for 1 more hours and you can speak while transformed`;}}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Druid) Your spells deal an extra 1d8 Poison Damage`;}
				else {GClassAffix = `• (T1 Druid) Your spells deal an extra 1d6 Poison Damage`;}}
			else if (RNG >= 7 && RNG <= 8) {
				if (tierX == 3) {GClassAffix = `• (T2 Druid) You have Advantage on Checks and Attacks against Plants`;}
				else {GClassAffix = `• (T1 Druid) You have Advantage on Checks related to Plants
`;}}
			else if (RNG == 9) {GClassAffix = `• (T2 Druid) You can Wild Shape as a Bonus Action (or as a Reaction if it was already a Bonus Action)`;}
			else if (RNG == 10) {GClassAffix = `• (T2 Druid) Gain an extra Wild Shape use`;}
			else if (RNG == 11) {
				if (tierX == 3) {GClassAffix = `• (T2 Druid) +1 CR to Wild Shape limit`;}
				else {GClassAffix = `• (T1 Druid) +1/2 CR to Wild Shape limit`;}}
			else if (RNG == 12) {GClassAffix = `• (T2 Druid) You can Wild Shape into Fey`;}
		}
		else if (classX == "Fighter") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Fighter) As a Reaction to taking damage or being grappled, you can attempt to Shove or Grapple the triggering creature`;}
				else {GClassAffix = `• (T1 Fighter) As a Reaction to taking damage or being grappled, you can attempt to Shove the triggering creature`;}}
			else if (RNG >= 3 && RNG <= 4) {FightingStyleTypeGen(); GClassAffix = `• (T2 Fighter) Gain the ${GFightingStyle} fighting style`;}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Fighter) Second Wind heals an additional 1d688 and you gain an extra use`;}
				else {GClassAffix = `• (T1 Fighter) Second Wind heals an additional 1d6`;}}
			else if (RNG >= 7 && RNG <= 8) {ManeuverTypeGen();
				if (tierX == 3) {GClassAffix = `• (T2 Fighter) Gain the ${GManeuver} and two d8 Superiority Dice`;}
				else {GClassAffix = `• (T1 Fighter) Gain the ${GManeuver} and one d8 Superiority Dice`;}}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Fighter) Gain +10 ft. of movement speed when moving directly towards an enemy`;}
				else {GClassAffix = `• (T1 Fighter) Gain +5 ft. of movement speed when moving directly towards an enemy`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Fighter) Gain an extra use of Indomitable`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Fighter) Critical Hits deal an extra weapon damage dice`;}
			else if (RNG == 12) {
				if (tierX == 3) {GClassAffix = `• (T2 Fighter) Action Surge grants an additional Reaction and half of your movement on that turn`;}
				else {GClassAffix = `• (T1 Fighter) Action Surge grants an additional Reaction on that turn`;}}
		}
		else if (classX == "Monk") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Monk) +4 Ki Points`;}
				else {GClassAffix = `• (T1 Monk) +2 Ki Points`;}}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Monk) Roll a d20 for each spent Ki Point. On a 19-20, the point is not expdended`;}
				else {GClassAffix = `• (T1 Monk) Roll a d20 for each spent Ki Point. On a 20, the point is not expdended`;}}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Monk) Unarmored Defense and Save DC can use Intelligence or Charisma in place of Wisdom`;}
				else {GClassAffix = `• (T1 Monk) Unarmored Defense and Save DC can use Intelligence in place of Wisdom`;}}
			else if (RNG >= 7 && RNG <= 8) {GClassAffix = `• (T2 Monk) Deflect Missiles no longer requires a Reaction, but you can only use it an amount of time equal to your Proficiency Bonus, recharging on a Long Rest. Throwing a missile back still uses your Reaction`;}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Monk) Heal 5 Hit Points when you spend Ki`;}
				else {GClassAffix = `• (T1 Monk) Heal 3 Hit Points when you spend Ki`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Monk) Shields do not impede Unarmored Movement`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Monk) Gain +5 ft. of Unarmored Movement Speed`;}
			else if (RNG == 12) {GClassAffix = `• (T2 Monk) Increase your Martial Arts die by one tier`;}
		}
		else if (classX == "Paladin") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Paladin) Divine Sense functions permanently up to 20 ft.`;}
				else {GClassAffix = `• (T1 Paladin) Divine Sense functions permanently up to 10 ft.`;}}
			else if (RNG >= 3 && RNG <= 4) {FightingStyleTypeGen(); GClassAffix = `• (T2 Paladin) Gain the ${GFightingStyle} fighting style`;}
			else if (RNG >= 5 && RNG <= 6) {GClassAffix = `• (T2 Paladin) Gain an extra Channel Divinity use`;}
			else if (RNG >= 7 && RNG <= 8) {
				if (tierX == 3) {GClassAffix = `• (T2 Paladin) After dealing Radiant Damage, heal 8 Hit Points`;}
				else {GClassAffix = `• (T1 Paladin) After dealing Radiant Damage, heal 4 Hit Points`;}}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Paladin) Gain +10 ft. to all Auras`;}
				else {GClassAffix = `• (T1 Paladin) Gain +5 ft. to all Auras`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Paladin) +1d8 Divine Smite Damage`;}
			else if (RNG == 11) {
				if (tierX == 3) {GClassAffix = `• (T2 Paladin) Lay On Hands Hit Point Pool is your level x 7`;}
				else {GClassAffix = `• (T1 Paladin) Lay On Hands Hit Point Pool is your level x 6`;}}
			else if (RNG == 12) {GClassAffix = `• (T2 Paladin) Gain a 5th Level Spell Slot`;}
		}
		else if (classX == "Ranger") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Ranger) Primeval Awareness can detect Oozes, Constructs, and Plants. You can choose to reduce to range of it down to 500 ft. in 100 ft. incremenets`;}
				else {GClassAffix = `• (T1 Ranger) Primeval Awareness can detect Oozes, Constructs, and Plants`;}}
			else if (RNG >= 3 && RNG <= 4) {GClassAffix = `• (T2 Ranger) Favored Enemies or Foes have Disadvantage on non-grapple checks against you`;}
			else if (RNG >= 5 && RNG <= 6) {TerrainTypeGen(); GClassAffix = `• (T2 Ranger) Gain ${GTerrain} as a Favored Terrain`;}
			else if (RNG >= 7 && RNG <= 8) {CreatureTypeGen(); GClassAffix = `• (T2 Ranger) Gain ${GCreature} as a Favored Enemy and learn their langauge`;}
			else if (RNG == 9) {
				if (tierX == 3) {GClassAffix = `• (T2 Ranger) Gain an extra use of Favored Foe (even if you chose Favored Enemy) and increase the Dice by 1 Tier`;}
				else {GClassAffix = `• (T1 Ranger) Gain an extra use of Favored Foe (even if you chose Favored Enemy)`;}}
			else if (RNG == 10) {GClassAffix = `• (T2 Ranger) Ranged Attacks can benefit from Flanking`;}
			else if (RNG == 11) {FightingStyleTypeGen(); GClassAffix = `• (T2 Ranger) Gain the ${GFightingStyle} fighting style`;}
			else if (RNG == 12) {
				if (tierX == 3) {GClassAffix = `• (T2 Ranger) Gain an additional 2nd and 3rd Level Spell Slot`;}
				else {GClassAffix = `• (T1 Ranger) Gain an additional 2nd Level Spell Slot`;}}
		}
		else if (classX == "Rogue") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Rogue) You can Use Object and Help as a Bonus Action`;}
				else {GClassAffix = `• (T1 Rogue) You can Use Object as a Bonus Action`;}}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Rogue) Reduce your AC by 4 until your next turn to gain Advantage on all attacks`;}
				else {GClassAffix = `• (T1 Rogue) Reduce your AC by 6 until your next turn to gain Advantage on all attacks`;}}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Rogue) Uncanny Dodge no longer requires a Reaction but you can only use it three times, recharging on a Long Rest`;}
				else {GClassAffix = `• (T1 Rogue) Uncanny Dodge no longer requires a Reaction but you can only use it twice, recharging on a Long Rest`;}}
			else if (RNG >= 7 && RNG <= 8) {
				if (tierX == 3) {SkillTypeGen(); let skillX = GSkillX; SkillTypeGen(); GClassAffix = `• (T2 Rogue) Gain Expertise in ${GSkillX} and ${skillX}`;}
				else {SkillTypeGen(); GClassAffix = `• (T1 Rogue) Gain Expertise in ${GSkillX}`;}}
			else if (RNG == 9) {GClassAffix = `• (T2 Rogue) You can add half of your Charisma Modifier to Sleight of Hand and Stealth checks outside of combat`;}
			else if (RNG == 10) {
				if (tierX == 3) {GClassAffix = `• (T2 Rogue) Gain +2d6 Sneak Attakc Damage`;}
				else {GClassAffix = `• (T1 Rogue) Gain +1d6 Sneak Attakc Damage`;}}
			else if (RNG == 11) {
				if (tierX == 3) {GClassAffix = `• (T2 Rogue) Uncanny Dodge also affects an ally within 10 ft. of you`;}
				else {GClassAffix = `• (T1 Rogue) Uncanny Dodge also affects an ally within 5 ft. of you`;}}
			else if (RNG == 12) {
				if (tierX == 3) {GClassAffix = `• (T2 Rogue) Evasion also affects an ally within 10 ft. of you`;}
				else {GClassAffix = `• (T1 Rogue) Evasion also affects an ally within 5 ft. of you`;}}
		}
		else if (classX == "Sorcerer") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Sorcerer) +4 Sorcery Points`;}
				else {GClassAffix = `• (T1 Sorcerer) +2 Sorcery Points`;}}
			else if (RNG >= 3 && RNG <= 4) {MetaMagicTypeGen(); GClassAffix = `• (T2 Sorcerer) Gain the ${GMetaMagic} meta-magic`;}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Sorcerer) You can cast all Sorcerer and Bard Cantrip`;}
				else {GClassAffix = `• (T1 Sorcerer) You can cast all Sorcerer Cantrip`;}}
			else if (RNG >= 7 && RNG <= 8) {
				if (tierX == 3) {GClassAffix = `• (T2 Sorcerer) For Each Sorcery Point spent on your turn (max 3), gain 1.5 AC (rounded down) until the start of your next turn`;}
				else {GClassAffix = `• (T1 Sorcerer) For Each Sorcery Point spent on your turn (max 2), gain 1 AC until the start of your next turn`;}}
			else if (RNG == 9) {GClassAffix = `• (T2 Sorcerer) You can cast Ritual Spells as rituals, increasing the cast time by 30 minutes`;}
			else if (RNG == 10) {GClassAffix = `• (T2 Sorcerer) +1 to Intelligence, Wisdom, and Charisma Spell Save DCs`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Sorcerer) +1 to Strength, Dexterity, and Consitution Spell Save DCs`;}
			else if (RNG == 12) {GClassAffix = `• (T2 Sorcerer) You can convert 9 Sorcery Points into a 6th Level Spell Slot`;}
		}
		else if (classX == "Warlock") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Warlock) Gain Advantage on Charisma Checks against friendly and neutral creatures`;}
				else {GClassAffix = `• (T1 Warlock) Gain Advantage on Charisma Checks against friendly creatures`;}}
			else if (RNG >= 3 && RNG <= 4) {InvocationTypeGen(); GClassAffix = `• (T2 Warlock) Gain an Eldritch ${GInvocation} (ignoring requirements, except Pact type)`;}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Warlock) The Dice Tier of Eldritch Blast in increased by 2`;}
				else {GClassAffix = `• (T1 Warlock) The Dice Tier of Eldritch Blast in increased by 1`;}}
			else if (RNG >= 7 && RNG <= 8) {WarlockTypeGen(); GClassAffix = `• (T2 Warlock) Gain the Level 1 Trait of the ${GWarlock} subclass (reroll if you already have it)`;}
			else if (RNG == 9) {GClassAffix = `• (T2 Warlock) Increase your Spell Slot Level by 1`;}
			else if (RNG == 10) {GClassAffix = `• (T2 Warlock) Gain an extra Spell Slot`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Warlock) When you would get an Opportunity Attack you may cast a Cantrip instead`;}
			else if (RNG == 12) {
				if (tierX == 3) {GClassAffix = `• (T2 Warlock) Eldritch blast bypasses Resistance and treats Immunity as Resistance`;}
				else {GClassAffix = `• (T1 Warlock) Eldritch blast bypasses Resistance`;}}
		}
		else if (classX == "Wizard") {
			if (RNG >= 1 && RNG <= 2) {
				if (tierX == 3) {GClassAffix = `• (T2 Wizard) +1 to Spell Attack and you don't need to hold your Spellbook to cast spells`;}
				else {GClassAffix = `• (T1 Wizard) +1 to Spell Attack`;}}
			else if (RNG >= 3 && RNG <= 4) {
				if (tierX == 3) {GClassAffix = `• (T2 Wizard) Gold and Time required to copy a spell into your Spellbook is reduced by 50%`;}
				else {GClassAffix = `• (T1 Wizard) Gold and Time required to copy a spell into your Spellbook is reduced by 25%`;}}
			else if (RNG >= 5 && RNG <= 6) {
				if (tierX == 3) {GClassAffix = `• (T2 Wizard) Once per turn, when you expend a Spell Slot, heal for the Spell Level x3`;}
				else {GClassAffix = `• (T1 Wizard) Once per turn, when you expend a Spell Slot, heal for the Spell Level x2`;}}
			else if (RNG >= 7 && RNG <= 8) {GClassAffix = `• (T2 Wizard) Spells can targets items held by creatures`;}
			else if (RNG == 9) {WizardTypeGen(); GClassAffix = `• (T2 Wizard) Gain the Level 2 Traits of the ${GWizard} subclass (reroll if you already have it)`;}
			else if (RNG == 10) {AttributeTypeGen(); GClassAffix = `• (T2 Wizard) Increase your Spell Save DC by 1 for ${GAttribute} Saves`;}
			else if (RNG == 11) {GClassAffix = `• (T2 Wizard) Arcane Recovery is equal to half your level +1`;}
			else if (RNG == 12) {
				if (tierX == 3) {GClassAffix = `• (T2 Wizard) All 4th or lower spells can be ritual cast`;}
				else {GClassAffix = `• (T1 Wizard) All 3rd or lower spells can be ritual cast`;}}
		}

	if (arrX.length == 0) {GClassAffix = "!!!-Please select applicable Classes First-!!!";} else {}
}
	function ClassAffixBtn() {
		let affNum = Number(document.getElementById("affixNum").value);
		let affClass = "";
		while (affNum > 0) {
			affNum -= 1;
			ClassAffix();
			affClass += `${GClassAffix} \n`;}
		document.getElementById("glyphBox").innerHTML = affClass;
	}

function ChaoticWeaponBtn() {
	let RNG = Math.floor(Math.random() * 20) + 1;
	let chaosResult;
	if (RNG >= 1 && RNG <= 8) {WeaponAffix(); chaosResult = `The weapon gains:\n${GWeaponAffix}`;}
	else if (RNG >= 9 && RNG <= 12){WeaponAffix(); chaosResult = `The weapon gains:\n${GWeaponAffix}\n`; WeaponAffix(); chaosResult += `${GWeaponAffix}`}
	else if (RNG >= 13 && RNG <= 16){chaosResult = `The weapon gains:\n• (CLASS) Random Class-Appropriate Class Affix`;}
	else if (RNG >= 17 && RNG <= 19){WeaponAffix(); chaosResult = `The weapon gains:\n${GWeaponAffix}\n• (CLASS) Random Class-Appropriate Class Affix`;}
	else if (RNG == 20){let rarity = Math.floor(Math.random() * 20) + 1;
		if (rarity >= 1 && rarity <= 10) {chaosResult = "It changes into a random Uncommon Weapon Magic Item";}
		else if (rarity >= 11 && rarity <= 17) {chaosResult = "It changes into a random Rare Weapon Magic Item";}
		else if (rarity >= 18 && rarity <= 20) {chaosResult = "It changes into a random Very Rare Weapon Magic Item";}
		}
	document.getElementById("glyphBox").innerHTML = chaosResult
}

function ChaoticArmorBtn() {
	let RNG = Math.floor(Math.random() * 20) + 1;
	let chaosResult;
	if (RNG >= 1 && RNG <= 8) {ArmorAffix(); chaosResult = `The armor gains:\n${GArmorAffix}`;}
	else if (RNG >= 9 && RNG <= 12){ArmorAffix(); chaosResult = `The armor gains:\n${GArmorAffix}\n`; ArmorAffix(); chaosResult += `${GArmorAffix}`}
	else if (RNG >= 13 && RNG <= 16){chaosResult = `The armor gains:\n• (CLASS) Random Class-Appropriate Class Affix`;}
	else if (RNG >= 17 && RNG <= 19){ArmorAffix(); chaosResult = `The armor gains:\n${GArmorAffix}\n• (CLASS) A Random Class-Appropriate Class Affix`;}
	else if (RNG == 20){let rarity = Math.floor(Math.random() * 20) + 1;
		if (rarity >= 1 && rarity <= 10) {chaosResult = "It changes into a random Uncommon Armor Magic Item";}
		else if (rarity >= 11 && rarity <= 17) {chaosResult = "It changes into a random Rare Armor Magic Item";}
		else if (rarity >= 18 && rarity <= 20) {chaosResult = "It changes into a random Very Rare Armor Magic Item";}
		}
	document.getElementById("glyphBox").innerHTML = chaosResult
}

function ChaoticAccessoryBtn() {
	let RNG = Math.floor(Math.random() * 20) + 1;
	let chaosResult;
	if (RNG >= 1 && RNG <= 8) {AccessoryAffix(); chaosResult = `The accessory gains:\n${GAccessoryAffix}`;}
	else if (RNG >= 9 && RNG <= 12){AccessoryAffix(); chaosResult = `The accessory gains:\n${GAccessoryAffix}\n`; AccessoryAffix(); chaosResult += `${GAccessoryAffix}`}
	else if (RNG >= 13 && RNG <= 16){chaosResult = `The accessory gains:\n• (CLASS) Random Class-Appropriate Class Affix`;}
	else if (RNG >= 17 && RNG <= 19){AccessoryAffix(); chaosResult = `The accessory gains:\n${GAccessoryAffix}\n• (CLASS) Random Class-Appropriate Class Affix`;}
	else if (RNG == 20){let rarity = Math.floor(Math.random() * 20) + 1;
		if (rarity >= 1 && rarity <= 10) {chaosResult = "It changes into a random Uncommon Accessory Magic Item";}
		else if (rarity >= 11 && rarity <= 17) {chaosResult = "It changes into a random Rare Accessory Magic Item";}
		else if (rarity >= 18 && rarity <= 20) {chaosResult = "It changes into a random Very Rare Accessory Magic Item";}
		}
	document.getElementById("glyphBox").innerHTML = chaosResult
}

function GenAffixItem() {
	let typeX = Math.floor(Math.random() * 3) + 1;
	let affixNum = Math.floor(Math.random() * 40) + 1;
	let taintChance = Math.floor(Math.random() * 10) + 1;
	let randomResult;
	
	if (affixNum >= 1 && affixNum <= 25) {affixNum = 1;}
	else if (affixNum >= 26 && affixNum <= 39) {affixNum = 2;}
	else if (affixNum == 40) {affixNum = 3;}
	
	if (typeX == 1) {WeaponAll(); randomResult = `A ${GWeapon} lies before you:\n`;
		while (affixNum > 0) {affixNum -= 1; WeaponAffix(); randomResult += `${GWeaponAffix}\n`}}
	else if (typeX == 2) {ArmorAll(); randomResult = `A ${GArmor} is revealed with:\n`;
		while (affixNum > 0) {affixNum -= 1; ArmorAffix(); randomResult += `${GArmorAffix}\n`}}
	else if (typeX == 3) {AccessoryGen(); randomResult = `The ${GAccessory} is ready with:\n`;
		while (affixNum > 0) {affixNum -= 1; AccessoryAffix(); randomResult += `${GAccessoryAffix}\n`}}
	
	if (taintChance == 10 && typeX == 1) {TaintedWeaponAffix(); randomResult += `${GTaintedWeapon}\n`;
		taintChance = Math.floor(Math.random() * 10) + 1;
		if (taintChance == 10) {TaintedWeaponAffix(); randomResult += `${GTaintedWeapon}\n\n(The item is Tainted)`;}
		else {`\n(The item is Tainted)`;}}
	else {}
	
	if (taintChance == 10 && typeX == 2) {TaintedArmorAffix(); randomResult += `${GTaintedArmor}\n`;
		taintChance = Math.floor(Math.random() * 10) + 1;
		if (taintChance == 10) {TaintedArmorAffix(); randomResult += `${GTaintedArmor}\n\n(The item is Tainted)`;}
		else {`\n(The item is Tainted)`;}}
	else {}
	
	if (taintChance == 10 && typeX == 3) {TaintedAccessoryAffix(); randomResult += `${GTaintedAccessory}\n`;
		taintChance = Math.floor(Math.random() * 10) + 1;
		if (taintChance == 10) {TaintedAccessoryAffix(); randomResult += `${GTaintedAccessory}\n\n(The item is Tainted)`;}
		else {`\n(The item is Tainted)`;}}
	else {}
	
	document.getElementById("glyphBox").innerHTML = randomResult
}

function GenGlyphsBtn() {
	let altX = 0;
	let transX = 0;
	let scourX = 0;
	let augX = 0;
	let tailorX = 0;
	let chaoticX = 0;
	let expertiseX = 0;
	let magniX = 0;
	let aberX = 0;
	let ascendX = 0;
	let taintX = 0;
	let transferX = 0;
	let qtyX = Number(document.getElementById("glyphNum").value);
	let RNG;
	let resultGlyph = "";
	while (qtyX > 0) {qtyX -= 1;RNG = Math.floor(Math.random() * 100) + 1;
		if (RNG >= 1 && RNG <= 21) {altX += 1;}
		else if (RNG >= 22 && RNG <= 33) {transX += 1;}
		else if (RNG >= 34 && RNG <= 43) {scourX += 1;}
		else if (RNG >= 44 && RNG <= 51) {augX += 1;}
		else if (RNG >= 53 && RNG <= 60) {tailorX += 1;}
		else if (RNG >= 61 && RNG <= 68) {chaoticX += 1;}
		else if (RNG >= 69 && RNG <= 76) {expertiseX += 1;}
		else if (RNG >= 77 && RNG <= 83) {magniX += 1;}
		else if (RNG >= 84 && RNG <= 87) {aberX += 1;}
		else if (RNG >= 88 && RNG <= 93) {ascendX += 1;}
		else if (RNG >= 94 && RNG <= 97) {taintX += 1;}
		else if (RNG >= 98 && RNG <= 100) {transferX += 1;}
	}
	if (altX > 0) {resultGlyph += `${altX} Altertion Glyph(s)\n`;} else {}
	if (transX > 0) {resultGlyph += `${transX} Transmutation Glyph(s)\n`;} else {}
	if (scourX > 0) {resultGlyph += `${scourX} Scouring Glyph(s)\n`;} else {}
	if (augX > 0) {resultGlyph += `${augX} Augmentation Glyph(s)\n`;} else {}
	if (tailorX > 0) {resultGlyph += `${tailorX} Tailoring Glyph(s)\n`;} else {}
	if (chaoticX > 0) {resultGlyph += `${chaoticX} Chaotic Glyph(s)\n`;} else {}
	if (expertiseX > 0) {resultGlyph += `${expertiseX} Expertise Glyph(s)\n`;} else {}
	if (magniX > 0) {resultGlyph += `${magniX} Magnificence Glyph(s)\n`;} else {}
	if (aberX > 0) {resultGlyph += `${aberX} Aberration Glyph(s)\n`;} else {}
	if (ascendX > 0) {resultGlyph += `${ascendX} Ascension Glyph(s)\n`;} else {}
	if (taintX > 0) {resultGlyph += `${taintX} Tainted Glyph(s)\n`;} else {}
	if (transferX > 0) {resultGlyph += `${transferX} Transferral Glyph(s)\n`;} else {}
	
	document.getElementById("glyphBox").innerHTML = resultGlyph;
}

function GlyphHelp() {
	document.getElementById("glyphBox").innerHTML = "Glyphs are items that can be used to Add or Modify Affixes on nonmagical items. For a full rundown, click the link below the Help button.\n\nThe regular (aqua) buttons will generate a number of affixes of that type.\n\nThe Tainted (red) buttons will roll for a Tainted outcome and output the result, potentially adding powerful Tainted Affixes to an item, but also corrupting it permanently.\n\nThe Chaotic (right side purple) buttons pick a random upgrade of the item, potentially changing item type or turning it into a conventional magic item.\n\nThe Expertise (purple) button will generate a Class Affix, which are tailored to the class and can be quite powerful. It will randomly select one class from the selected checkboxes to generate an affix for.\n\nThe 16 Green buttons are used to regenerate a Subtype, mainly for Tailoring Glyph usage, which can change Subtypes without changing the overall affix.\n\nLast, but not least, the Generate glyphs button will randomly generate that many Glyphs, for DMs placing loot."
}

async function WeaponAffixList() {
	let grabFile = await fetch('/dmapp/lists/affixes/weaponaffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

async function ArmorAffixList() {
	let grabFile = await fetch('/dmapp/lists/affixes/armoraffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

async function AccessoryAffixList() {
	let grabFile = await fetch('/dmapp/lists/affixes/accessoryaffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

async function TaintedWeaponList() {
	let grabFile = await fetch('/dmapp/lists/affixes/taintedweaponaffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

async function TaintedArmorList() {
	let grabFile = await fetch('/dmapp/lists/affixes/taintedarmoraffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

async function TaintedAccessoryList() {
	let grabFile = await fetch('/dmapp/lists/affixes/taintedaccessoryaffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

async function ClassAffixList() {
	let grabFile = await fetch('/dmapp/lists/affixes/classaffix.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("glyphBox").innerHTML = txtConvert;
}

// JEWELRY TAB //
// JEWELRY TAB //
// JEWELRY TAB //
// JEWELRY TAB //
// JEWELRY TAB //

function jewCalc() {
	if (document.getElementById("jewSize").value == "Tiny") {gemSize = 0.25}
	else if (document.getElementById("jewSize").value == "Small") {gemSize = 0.5}
	else if (document.getElementById("jewSize").value == "Standard") {gemSize = 1}
	else if (document.getElementById("jewSize").value == "Large") {gemSize = 2}
	else if (document.getElementById("jewSize").value == "Huge") {gemSize = 4}
	if (document.getElementById("jewType").value == "Gems") {jewX = 0}
	else if (document.getElementById("jewType").value == "Amulet") {jewX = 0.4}
	else if (document.getElementById("jewType").value == "Bracelet") {jewX = 0.8}
	else if (document.getElementById("jewType").value == "Choker") {jewX = 1.2}
	else if (document.getElementById("jewType").value == "Crown") {jewX = 3}
	else if (document.getElementById("jewType").value == "Earrings") {jewX = 0.1}
	else if (document.getElementById("jewType").value == "Ring") {jewX = 0.2}
	if (document.getElementById("jewMaterial").value == "Wood") {jewX *= 0.1}
	else if (document.getElementById("jewMaterial").value == "Stone") {jewX *= 0.15}
	else if (document.getElementById("jewMaterial").value == "Copper") {jewX *= 1}
	else if (document.getElementById("jewMaterial").value == "Tin") {jewX *= 0.25}
	else if (document.getElementById("jewMaterial").value == "Iron") {jewX *= 0.5}
	else if (document.getElementById("jewMaterial").value == "Steel") {jewX *= 10}
	else if (document.getElementById("jewMaterial").value == "Silver") {jewX *= 5}
	else if (document.getElementById("jewMaterial").value == "Electrum") {jewX *= 25}
	else if (document.getElementById("jewMaterial").value == "Gold") {jewX *= 50}
	else if (document.getElementById("jewMaterial").value == "Platinum") {jewX *= 500}
	else if (document.getElementById("jewMaterial").value == "Mithril") {jewX *= 750}
	else if (document.getElementById("jewMaterial").value == "Adamantium") {jewX *= 1250}
	jewX += document.getElementById("jewPearl").value * 10 * gemSize;
	jewX += document.getElementById("jewAzu").value * 12 * gemSize;
	jewX += document.getElementById("jewLapis").value * 12 * gemSize;
	jewX += document.getElementById("jewTiger").value * 14 * gemSize;
	jewX += document.getElementById("jewCitrine").value * 20 * gemSize;
	jewX += document.getElementById("jewPeridot").value * 24 * gemSize;
	jewX += document.getElementById("jewRose").value * 28 * gemSize;
	jewX += document.getElementById("jewBlood").value * 33 * gemSize;
	jewX += document.getElementById("jewOnyx").value * 38 * gemSize;
	jewX += document.getElementById("jewJade").value * 50 * gemSize;
	jewX += document.getElementById("jewGold").value * 54 * gemSize;
	jewX += document.getElementById("jewMoon").value * 61 * gemSize;
	jewX += document.getElementById("jewGarnet").value * 84 * gemSize;
	jewX += document.getElementById("jewSpinel").value * 100 * gemSize;
	jewX += document.getElementById("jewAqua").value * 135 * gemSize;
	jewX += document.getElementById("jewBlack").value * 200 * gemSize;
	jewX += document.getElementById("jewTopaz").value * 250 * gemSize;
	jewX += document.getElementById("jewAmethyst").value * 400 * gemSize;
	jewX += document.getElementById("jewSapphire").value * 500 * gemSize;
	jewX += document.getElementById("jewRuby").value * 720 * gemSize;
	jewX += document.getElementById("jewEmerald").value * 1250 * gemSize;
	jewX += document.getElementById("jewDiamond").value * 2000 * gemSize;
	jewX += document.getElementById("jewEber").value * 800 * gemSize;
	jewX += document.getElementById("jewKhyber").value * 1200 * gemSize;
	jewX += document.getElementById("jewSiber").value * 1600 * gemSize;
	jewX = jewX.toFixed(2);
	if (jewX >= 1) {document.getElementById("jewBox").innerHTML = `${Math.floor(jewX)} gp`}
	else if (jewX > 0.1 && jewX < 1) {jewX *= 10; document.getElementById("jewBox").innerHTML = `${Math.floor(jewX)} sp`}
	else if (jewX < 0.1) {jewX *= 100; document.getElementById("jewBox").innerHTML = `${Math.floor(jewX)} cp`}
}

function gemBag() {
	if (document.getElementById("gemBagTier").value == "tier1") {bagTier = 1}
	else if (document.getElementById("gemBagTier").value == "tier2") {bagTier = 2}
	else if (document.getElementById("gemBagTier").value == "tier3") {bagTier = 3}
	else if (document.getElementById("gemBagTier").value == "tier4") {bagTier = 4}
	else if (document.getElementById("gemBagTier").value == "tier5") {bagTier = 5}
	bagRolls = Math.floor(Math.random() * 7) + 4;
	gemPearl = 0
	gemAzurite = 0
	gemLapis = 0
	gemTiger = 0
	gemCitrine = 0
	gemPeridot = 0
	gemRose = 0
	gemBloodstone = 0
	gemOnyx = 0
	gemJade = 0
	gemGPearl = 0
	gemMoonstone = 0
	gemGarnet = 0
	gemSpinel = 0
	gemAqua = 0
	gemBPearl = 0
	gemTopaz = 0
	gemAmethyst = 0
	gemSapphire = 0
	gemRuby = 0
	gemEmerald = 0
	gemDiamond = 0
	gemEberron = 0
	gemKhyber = 0
	gemSiberys = 0
	while (bagRolls > 0) {
		if (bagTier == 1) {RNG = Math.floor(Math.random() * 4) + 1;}
		else if (bagTier == 2) {RNG = Math.floor(Math.random() * 5) + 1;}
		else if (bagTier == 3) {RNG = Math.floor(Math.random() * 5) + 1;}
		else if (bagTier == 4) {RNG = Math.floor(Math.random() * 4) + 1;}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == false) {RNG = Math.floor(Math.random() * 14) + 1;}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == true) {RNG = Math.floor(Math.random() * 20) + 1;}
		
		if (bagTier == 1 && RNG == 1) {gemPearl += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 2) {gemAzurite += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 3) {gemLapis += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 4) {gemTiger += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 1) {gemCitrine += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 2) {gemPeridot += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 3) {gemRose += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 4) {gemBloodstone += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 5) {gemOnyx += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 1) {gemJade += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 2) {gemGPearl += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 3) {gemMoonstone += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 4) {gemGarnet += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 5) {gemSpinel += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 1) {gemAqua += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 2) {gemBPearl += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 3) {gemTopaz += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 4) {gemAmethyst += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 1 && RNG <= 4) {gemSapphire += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 5 && RNG <= 8) {gemRuby += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 9 && RNG <= 11) {gemEmerald += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 12 && RNG <= 14) {gemDiamond += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 15 && RNG <= 16) {gemEberron += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 17 && RNG <= 18) {gemKhyber += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 19 && RNG <= 20) {gemSiberys += 1; bagRolls -=1;}
		
		if (bagTier == 1) {
			document.getElementById("itemBox").innerHTML = `${gemPearl} Pearls\n${gemAzurite} Azurites\n${gemLapis} Lapis Lazulis\n${gemTiger} Tiger Eyes`}
		else if (bagTier == 2) {
			document.getElementById("itemBox").innerHTML = `${gemCitrine} Citrines\n${gemPeridot} Peridots\n${gemRose} Rose Quartz\n${gemBloodstone} Bloodstones\n${gemOnyx} Onyxes`}
		else if (bagTier == 3) {
			document.getElementById("itemBox").innerHTML = `${gemJade} Jades\n${gemGPearl} Gold Pearls\n${gemMoonstone} Moonstones\n${gemGarnet} Garnets\n${gemSpinel} Spinels`}
		else if (bagTier == 4) {
			document.getElementById("itemBox").innerHTML = `${gemAqua} Aquamarines\n${gemBPearl} Black Pearls\n${gemTopaz} Topazes\n${gemAmethyst} Amethysts`}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == false) {
			document.getElementById("itemBox").innerHTML = `${gemSapphire} Sapphires\n${gemRuby} Rubies\n${gemEmerald} Emeralds\n${gemDiamond} Diamonds`}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == true) {
			document.getElementById("itemBox").innerHTML = `${gemAmethyst} Amethysts\n${gemSapphire} Sapphires\n${gemRuby} Rubies\n${gemEmerald} Emeralds\n${gemDiamond} Diamonds\n${gemEberron} Eberron Gems\n${gemKhyber} Khyber Gems\n${gemSiberys} Siberys Gems`}
	}
}

function gemBagSmall() {
	if (document.getElementById("gemBagTier").value == "tier1") {bagTier = 1}
	else if (document.getElementById("gemBagTier").value == "tier2") {bagTier = 2}
	else if (document.getElementById("gemBagTier").value == "tier3") {bagTier = 3}
	else if (document.getElementById("gemBagTier").value == "tier4") {bagTier = 4}
	else if (document.getElementById("gemBagTier").value == "tier5") {bagTier = 5}
	bagRolls = Math.floor(Math.random() * 4) + 2;
	gemPearl = 0
	gemAzurite = 0
	gemLapis = 0
	gemTiger = 0
	gemCitrine = 0
	gemPeridot = 0
	gemRose = 0
	gemBloodstone = 0
	gemOnyx = 0
	gemJade = 0
	gemGPearl = 0
	gemMoonstone = 0
	gemGarnet = 0
	gemSpinel = 0
	gemAqua = 0
	gemBPearl = 0
	gemTopaz = 0
	gemAmethyst = 0
	gemSapphire = 0
	gemRuby = 0
	gemEmerald = 0
	gemDiamond = 0
	gemEberron = 0
	gemKhyber = 0
	gemSiberys = 0
	while (bagRolls > 0) {
		if (bagTier == 1) {RNG = Math.floor(Math.random() * 4) + 1;}
		else if (bagTier == 2) {RNG = Math.floor(Math.random() * 5) + 1;}
		else if (bagTier == 3) {RNG = Math.floor(Math.random() * 5) + 1;}
		else if (bagTier == 4) {RNG = Math.floor(Math.random() * 4) + 1;}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == false) {RNG = Math.floor(Math.random() * 14) + 1;}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == true) {RNG = Math.floor(Math.random() * 20) + 1;}
		
		if (bagTier == 1 && RNG == 1) {gemPearl += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 2) {gemAzurite += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 3) {gemLapis += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 4) {gemTiger += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 1) {gemCitrine += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 2) {gemPeridot += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 3) {gemRose += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 4) {gemBloodstone += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 5) {gemOnyx += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 1) {gemJade += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 2) {gemGPearl += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 3) {gemMoonstone += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 4) {gemGarnet += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 5) {gemSpinel += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 1) {gemAqua += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 2) {gemBPearl += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 3) {gemTopaz += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 4) {gemAmethyst += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 1 && RNG <= 4) {gemSapphire += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 5 && RNG <= 8) {gemRuby += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 9 && RNG <= 11) {gemEmerald += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 12 && RNG <= 14) {gemDiamond += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 15 && RNG <= 16) {gemEberron += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 17 && RNG <= 18) {gemKhyber += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 19 && RNG <= 20) {gemSiberys += 1; bagRolls -=1;}
		
		if (bagTier == 1) {
			document.getElementById("itemBox").innerHTML = `${gemPearl} Pearls\n${gemAzurite} Azurites\n${gemLapis} Lapis Lazulis\n${gemTiger} Tiger Eyes`}
		else if (bagTier == 2) {
			document.getElementById("itemBox").innerHTML = `${gemCitrine} Citrines\n${gemPeridot} Peridots\n${gemRose} Rose Quartz\n${gemBloodstone} Bloodstones\n${gemOnyx} Onyxes`}
		else if (bagTier == 3) {
			document.getElementById("itemBox").innerHTML = `${gemJade} Jades\n${gemGPearl} Gold Pearls\n${gemMoonstone} Moonstones\n${gemGarnet} Garnets\n${gemSpinel} Spinels`}
		else if (bagTier == 4) {
			document.getElementById("itemBox").innerHTML = `${gemAqua} Aquamarines\n${gemBPearl} Black Pearls\n${gemTopaz} Topazes\n${gemAmethyst} Amethysts`}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == false) {
			document.getElementById("itemBox").innerHTML = `${gemSapphire} Sapphires\n${gemRuby} Rubies\n${gemEmerald} Emeralds\n${gemDiamond} Diamonds`}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == true) {
			document.getElementById("itemBox").innerHTML = `${gemAmethyst} Amethysts\n${gemSapphire} Sapphires\n${gemRuby} Rubies\n${gemEmerald} Emeralds\n${gemDiamond} Diamonds\n${gemEberron} Eberron Gems\n${gemKhyber} Khyber Gems\n${gemSiberys} Siberys Gems`}
	}
}

function gemBagLarge() {
	if (document.getElementById("gemBagTier").value == "tier1") {bagTier = 1}
	else if (document.getElementById("gemBagTier").value == "tier2") {bagTier = 2}
	else if (document.getElementById("gemBagTier").value == "tier3") {bagTier = 3}
	else if (document.getElementById("gemBagTier").value == "tier4") {bagTier = 4}
	else if (document.getElementById("gemBagTier").value == "tier5") {bagTier = 5}
	bagRolls = Math.floor(Math.random() * 9) + 12;
	gemPearl = 0
	gemAzurite = 0
	gemLapis = 0
	gemTiger = 0
	gemCitrine = 0
	gemPeridot = 0
	gemRose = 0
	gemBloodstone = 0
	gemOnyx = 0
	gemJade = 0
	gemGPearl = 0
	gemMoonstone = 0
	gemGarnet = 0
	gemSpinel = 0
	gemAqua = 0
	gemBPearl = 0
	gemTopaz = 0
	gemAmethyst = 0
	gemSapphire = 0
	gemRuby = 0
	gemEmerald = 0
	gemDiamond = 0
	gemEberron = 0
	gemKhyber = 0
	gemSiberys = 0
	while (bagRolls > 0) {
		if (bagTier == 1) {RNG = Math.floor(Math.random() * 4) + 1;}
		else if (bagTier == 2) {RNG = Math.floor(Math.random() * 5) + 1;}
		else if (bagTier == 3) {RNG = Math.floor(Math.random() * 5) + 1;}
		else if (bagTier == 4) {RNG = Math.floor(Math.random() * 4) + 1;}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == false) {RNG = Math.floor(Math.random() * 14) + 1;}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == true) {RNG = Math.floor(Math.random() * 20) + 1;}
		
		if (bagTier == 1 && RNG == 1) {gemPearl += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 2) {gemAzurite += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 3) {gemLapis += 1; bagRolls -=1;}
		else if (bagTier == 1 && RNG == 4) {gemTiger += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 1) {gemCitrine += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 2) {gemPeridot += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 3) {gemRose += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 4) {gemBloodstone += 1; bagRolls -=1;}
		else if (bagTier == 2 && RNG == 5) {gemOnyx += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 1) {gemJade += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 2) {gemGPearl += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 3) {gemMoonstone += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 4) {gemGarnet += 1; bagRolls -=1;}
		else if (bagTier == 3 && RNG == 5) {gemSpinel += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 1) {gemAqua += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 2) {gemBPearl += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 3) {gemTopaz += 1; bagRolls -=1;}
		else if (bagTier == 4 && RNG == 4) {gemAmethyst += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 1 && RNG <= 4) {gemSapphire += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 5 && RNG <= 8) {gemRuby += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 9 && RNG <= 11) {gemEmerald += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 12 && RNG <= 14) {gemDiamond += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 15 && RNG <= 16) {gemEberron += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 17 && RNG <= 18) {gemKhyber += 1; bagRolls -=1;}
		else if (bagTier == 5 && RNG >= 19 && RNG <= 20) {gemSiberys += 1; bagRolls -=1;}
		
		if (bagTier == 1) {
			document.getElementById("itemBox").innerHTML = `${gemPearl} Pearls\n${gemAzurite} Azurites\n${gemLapis} Lapis Lazulis\n${gemTiger} Tiger Eyes`}
		else if (bagTier == 2) {
			document.getElementById("itemBox").innerHTML = `${gemCitrine} Citrines\n${gemPeridot} Peridots\n${gemRose} Rose Quartz\n${gemBloodstone} Bloodstones\n${gemOnyx} Onyxes`}
		else if (bagTier == 3) {
			document.getElementById("itemBox").innerHTML = `${gemJade} Jades\n${gemGPearl} Gold Pearls\n${gemMoonstone} Moonstones\n${gemGarnet} Garnets\n${gemSpinel} Spinels`}
		else if (bagTier == 4) {
			document.getElementById("itemBox").innerHTML = `${gemAqua} Aquamarines\n${gemBPearl} Black Pearls\n${gemTopaz} Topazes\n${gemAmethyst} Amethysts`}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == false) {
			document.getElementById("itemBox").innerHTML = `${gemSapphire} Sapphires\n${gemRuby} Rubies\n${gemEmerald} Emeralds\n${gemDiamond} Diamonds`}
		else if (bagTier == 5 && document.getElementById("eberCheck").checked == true) {
			document.getElementById("itemBox").innerHTML = `${gemAmethyst} Amethysts\n${gemSapphire} Sapphires\n${gemRuby} Rubies\n${gemEmerald} Emeralds\n${gemDiamond} Diamonds\n${gemEberron} Eberron Gems\n${gemKhyber} Khyber Gems\n${gemSiberys} Siberys Gems`}
	}
}

// INFO BUTTONS //
// INFO BUTTONS //
// INFO BUTTONS //
// INFO BUTTONS //
// INFO BUTTONS //

function GemBagInfo() {
	document.getElementById("itemBox").innerHTML = "[Gem Bag Tier 1]\nPearl, Azurite, Lapis Lazuli, and Tiger Eye\n\n[GemBag Tier 2]\nCitrine, Peridot, Rose Quartz, Bloodstone, and Onyx\n\n[GemBag Tier 3]\nJade, Gold Pearl, Moonstone, Garnet, and Spinel\n\n[GemBag Tier 4]\nAquamarine, Black Pearl, Topaz, and Amethyst\n\n[GemBag Tier 5]\nSapphire, Ruby, Emerald, and Diamond\n\n[Eberron Gems]\nEberron Gem, Khyber Gem, and Siberys Gem";
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

async function CreatureInfo() {
	let grabFile = await fetch('/dmapp/lists/creature.txt');
	let txtConvert = await grabFile.text();

document.getElementById("infoBox").innerHTML = txtConvert;
}

async function CharacterInfo() {
	let grabFile = await fetch('/dmapp/lists/character.txt');
	let txtConvert = await grabFile.text();

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyModInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/enemymodifier.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function GearList() {
	let grabFile = await fetch('/dmapp/lists/gear.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("itemBox").innerHTML = txtConvert;
}

async function EnemyTraitInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/1-traits.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyActionInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/2-actions.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyBonusInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/3-bonuses.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyReactionInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/4-reactions.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyRechargeInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/5-recharges.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyLegendaryInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/6-legactions.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function EnemyLairInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/7-lairtraits.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

async function TypeSpecificInfo() {
	let grabFile = await fetch('/dmapp/lists/enemy/8-typespecific.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}