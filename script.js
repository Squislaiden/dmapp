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
var GCreature

	// Glyphs //

	// Glyphs //
	// Character Gen //

var GMod
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
	GCreature = creatureResult
}
function CreatureBtn() {
	CreatureTypeGen()
	document.getElementById("charBox").innerHTML = GCreature;
}

// CHARACTER TOOLS //
// CHARACTER TOOLS //
// CHARACTER TOOLS //
// CHARACTER TOOLS //
// CHARACTER TOOLS //



function EnemyMod() {
	let modRoll = Math.floor(Math.random() * 129) + 1;
	let modElite
	let modEliteCheck = document.getElementById("modEliteCheck").checked;
	if (modEliteCheck == true) {modElite =10;}
	else if (modEliteCheck == false) {modElite = Math.floor(Math.random() * 10) + 1;}
	
	if (modRoll == 1) {
            if (modElite == 10) {
                GMod = "[Grappler] (Elite) \nThe creatures grows a tentacle somewhere on its body. \n---Bonus Action--- \nDC 16 Grapple. Restrained. On following turns, can crush, throw, or slam to deal 4d6 + Str bludgeoning damage.";}
            else {
                GMod = "[Grappler] \nThe creatures grows a tentacle somewhere on its body. \n---Bonus Action--- \nDC 14 Grapple. Restrained. On following turns, can crush, throw, or slam to deal 2d6 + Str bludgeoning damage.";}
            }
        else if (modRoll == 2) {
            if (modElite == 10) {
                GMod = "[Armed] (Elite) \nThe creature grows two extra limbs. The creature can attack 2 extra times each turn.";}
            else {
                GMod = "[Armed] \nThe creature grows an extra limb. The creature can attack 1 extra time each turn.";}
            }
        else if (modRoll == 3) {
            if (modElite == 10) {
                GMod = "[Muscular] (Elite) \nThe creature bulks up. Non-Spell attacks deal up to half of the dice of an attack as extra damage, minimum 1 dice and gains +6 damage.";}
            else {
                GMod = "[Muscular] \nThe creature bulks up. Non-Spell attacks deal up to half of the dice of an attack as extra damage, minimum 1 dice.";}
            }
        else if (modRoll == 4) {
            if (modElite == 10) {
                GMod = "[Split] (Elite) \nThe creature is weaker and smaller, but has two identical clones of itself.";}
            else {
                GMod = "[Split] \nThe creature is weaker and smaller, but has an identical clone of itself.";}
            }
        else if (modRoll == 5) {
            if (modElite == 10) {
                GMod = "[Shadow Form] (Elite) \nThe creature gains a connection to the shadows. It can cast Misty Step when in shadow to other shadows up to 60 feet away. Twice per turn, it can half the damage of one attack.";}
            else {
                GMod = "[Shadow Form] \nThe creature gains a connection to the shadows. It can cast Misty Step when in shadow to other shadows. Once per turn, it can half the damage of one attack.";}
            }
        else if (modRoll == 6) {
            if (modElite == 10) {
                GMod = "[Blazing] (Elite) \nThe creature has a 30 ft. radius aura of fire that lights objects on fire. Creatures that enter the aura for the first time or start their turn in the aura take 4d6 fire damage. \n\nIt can cast Burning Hands and Scorching Ray at will, is Immune to Fire, and is Vulnerable to Cold.";}
            else {
                GMod = "[Blazing] \nThe creature has a 15 ft. radius aura of fire that lights objects on fire. Creatures that enter the aura for the first time or start their turn in the aura take 2d6 fire damage. \n\nIt can cast Burning Hands at will, has Resistance to Fire, and is Vulnerable to Cold.";}
            }
        else if (modRoll == 7) {
            if (modElite == 10) {
                GMod = "[Drenched] (Elite) \nThe creature is lightly obscured in mist \n\nIt can cast Wall of Water and Watery Sphere at will, has 40 ft. of swim speed, is Immune to Fire and Cold, and is Vulnerable to Lightning.";}
            else {
                GMod = "[Drenched] \nThe creature is lightly obscured in mist. \n\nIt can cast Wall of Water at will, is Resistant to Fire and Cold, and is Vulnerable to Lightning.";}
            }
        else if (modRoll == 8) {
            if (modElite == 10) {
                GMod = "[Glacial] (Elite) \nThe creature has a 30 ft. radius aura of cold that slows movement speeds within by half. Creatures that enter the aura for the first time or start their turn in the aura take 4d6 cold damage. \n\nIt can cast Ice Knife and Rimes Binding Ice at will, is Immune to Cold, and is Vulnerable to Fire.";}
            else {
                GMod = "[Glacial] \nThe creature has a 15 ft. radius aura of cold that slows movement speeds within by half. Creatures that enter the aura for the first time or start their turn in the aura take 2d6 cold damage. \n\nIt can cast Ice Knife at will, is Resistant to Cold, and is Vulnerable to Fire.";}
            }
        else if (modRoll == 9) {
            if (modElite == 10) {
                GMod = "[Storming] (Elite) \nThe creature has a 30 ft. radius aura of lightning. Creatures that enter the aura for the first time or start their turn in the aura take 4d6 lightning damage and make a DC 11 Con Save or be paralyzed until their next turn. \n\nIt can cast Lightning Arrow at will, is Resistant to Lightning, and is Vulnerable to Psychic.";}
            else {
                GMod = "[Storming] \nThe creature has a 15 ft. radius aura of lightning. Creatures that enter the aura for the first time or start their turn in the aura take 2d6 lightning damage and make a DC 14 Con Save or be paralyzed until their next turn. \n\nIt can cast Lightning Arrow and Lightning Bolt at will, is Immune to Lightning, and is Vulnerable to Psychic.";}
            }
        else if (modRoll == 10) {
            if (modElite == 10) {
                GMod = "[Grounded] (Elite) \nThe creature has a 40 ft. radius aura of rumbling ground that is difficult terrain. \n\nIt can cast Maximillians Earthen Grasp and Erupting Earth at will, is Immune to Lightning, is Resistant to Physical, and is Vulnerable to Thunder.";}
            else {
                GMod = "[Grounded] \nThe creature has a 20 ft. radius aura of rumbling ground that is difficult terrain. \n\nIt can cast Maximillians Earthen Grasp at will, is Immune to Lightning, and is Vulnerable to Thunder.";}
            }
        else if (modRoll == 11) {
            if (modElite == 10) {
                GMod = "[Wispy] (Elite) \nAll projeciles fired at the creature are made with disadvantage and the creature can hover. \n\nIt can cast Wind Wall and Pulse Wave at will, is Immune to Thunder, and is Vulnerable to Fire.";}
            else {
                GMod = "[Wispy] \nAll projeciles fired at the creature are made with disadvantage. \n\nIt can cast Wind Wall at will, is Resistant to Thunder, and is Vulnerable to Fire.";}
            }
        else if (modRoll == 12) {
            if (modElite == 10) {
                GMod = "[Venomous] (Elite) \nOn Non-Spell attacks, the target makes a DC 15 Con Save. On a fail, they take 4d6 poison damage and are Poisoned. Half damage on a save. \n\nIt can cast Acid Stream and Stinking Cloud at will, is Immune to Poison and Disease, and is Vulnerable to Radiant.";}
            else {
                GMod = "[Venomous] \nOn Non-Spell attacks, the target makes a DC 13 Con Save. On a fail, they take 2d6 poison damage and are Poisoned. Half damage on a save. \n\nIt can cast Acid Stream at will, is Immune to Disease, is Resistant to Poison, and is Vulnerable to Radiant.";}
            }
        else if (modRoll == 13) {
            if (modElite == 10) {
                GMod = "[Decaying] (Elite) \nThe creature has a 60 ft. aura of death. Creatures that enter the aura or start their turn in the aura have their Maximum Hit Points reduced by 25. \n\nIt can cast Wither and Bloom and Blight at will, is Immune to Necrotic, and is Vulnerable to Radiant.";}
            else {
                GMod = "[Decaying] \nThe creature has a 30 ft. aura of death. Creatures that enter the aura or start their turn in the aura have their Maximum Hit Points reduced by 15. \n\nIt can cast Wither and Bloom at will, is Resistant to Necrotic, and is Vulnerable to Radiant.";}
            }
        else if (modRoll == 14) {
            if (modElite == 10) {
                GMod = "[Radiant] (Elite) \nThe creature has a 20 ft. aura of bright light. Creatures within the aura are considered Blinded. \n\nIt can cast Branding Smite and Dawn at will, is Immune to Radiant, and is Resistant to Necrotic.";}
            else {
                GMod = "[Radiant] \nThe creature has a 10 ft. aura of bright light. Creatures within the aura are considered Blinded. \n\nIt can cast Branding Smite at will, is Resistant to Radiant, and is Vulnerable to Necrotic.";}
            }
        else if (modRoll == 15) {
            if (modElite == 10) {
                GMod = "[Psionic] (Elite) \nThe creature has advantage on Attacks made on creatures within 60 ft. and advantage on Saving Throws against effect originating from within 60 ft. \n\nThe creature can cast Mind Thrust and Psychic Lance at will, is Immune to Psychic, and is Vulnerable to Thunder.";}
            else {
                GMod = "[Psionic] \nThe creature has advantage on Attacks made on creatures within 30 ft. and advantage on Saving Throws against effect originating from within 30 ft. \n\nThe creature can cast Mind Thrust at will, is Resistant to Psychic, and is Vulnerable to Thunder.";}
            }
        else if (modRoll == 16) {
            if (modElite == 10) {
                GMod = "[Ocular] (Elite) \nThe creature has grown two random Beholder eye stalks. The effects and damage are at 66% normal effectiveness. The Save DC is 16. \n\n(For balance reasons, Disintegration and Death Rays can be removed from the possible rolls, especially at lower levels)";}
            else {
                GMod = "[Ocular] \nThe creature has grown a random Beholder eye stalk. The effects and damage are at 33% normal effectiveness. The Save DC is 14. \n\n(For balance reasons, Disintegration and Death Rays can be removed from the possible rolls, especially at lower levels)";}
            }
        else if (modRoll == 17) {
            if (modElite == 10) {
                GMod = "[Winged] (Elite) \nThe creature gains a pair of wings and 60 ft. of fly speed and can cast Gust of Wind as a Bonus Action.";}
            else {
                GMod = "[Winged] \nThe creature gains a pair of wings and 40 ft. of fly speed.";}
            }
        else if (modRoll == 18) {
            if (modElite == 10) {
                GMod = "[Reckless] (Elite) \nAll attacks made by the creature are made at advantage.";}
            else {
                GMod = "[Reckless] \nAll attacks made by and against the creature are made at advantage.";}
            }
        else if (modRoll == 19) {
            if (modElite == 10) {
                GMod = "[Stalker] (Elite) \nThe creature has +5 to stealth rolls and can cast Invisibility on itself as an Action at will. It also has a Sneak Attack for 6d6 damage.";}
            else {
                GMod = "[Stalker] \nThe creature can cast Invisibility on itself as an Action at will. It also has a Sneak Attack for 3d6 damage.";}
            }
        else if (modRoll == 20) {
            if (modElite == 10) {
                GMod = "[Hypnotist] (Elite) \nThe creature can cast Dominate Monster four time and can have a maximum of 2 creatures dominated at a time. The Save DC is 17.";}
            else {
                GMod = "[Hypnotist] \nThe creature can cast Dominate Monster twice and can have a maximum of 1 creature dominated at a time. The Save DC is 15.";}
            }
        else if (modRoll == 21) {
            if (modElite == 10) {
                GMod = "[Observant] (Elite) \nThe creatures grows many extra eyes on its body. It gains +10 and advantage to Perception rolls and canno tbe surprised.";}
            else {
                GMod = "[Observant] \nThe creatures grows many extra eyes on its body. It gains +5 to Perception rolls and canno tbe surprised.";}
            }
        else if (modRoll == 22) {
            if (modElite == 10) {
                GMod = "[Sticky] (Elite) \nCreatures or objects that touch the creature stick to it, just like a Mimic, with a escape DC of 18.";}
            else {
                GMod = "[Sticky] \nCreatures or objects that touch the creature stick to it, just like a Mimic, with a escape DC of 15.";}
            }
        else if (modRoll == 23) {
            if (modElite == 10) {
                GMod = "[Repulsor] (Elite) \nAt the start of the creatures turn, all creatures within 40 ft. make a DC 17 Strength Save or are pushed back 15 ft.";}
            else {
                GMod = "[Repulsor] \nAt the start of the creatures turn, all creatures within 20 ft. make a DC 14 Strength Save or are pushed back 10 ft.";}
            }
        else if (modElite == 24) {
            if (modRoll == 10) {
                GMod = "[Attractor] (Elite) \nAt the start of the creatures turn, all creatures within 40 ft. make a DC 17 Strength Save or are pulled 15 ft. closer.";}
            else {
                GMod = "[Attractor] \nAt the start of the creatures turn, all creatures within 20 ft. make a DC 14 Strength Save or are pulled 10 ft. closer.";}
            }
        else if (modRoll == 25) {
            if (modElite == 10) {
                GMod = "[Spell Eater] (Elite) \nDamage dealt by Spells or effects that consume a Spell Slot has a 50% chance to heal the creature instead.";}
            else {
                GMod = "[Spell Eater] \nDamage dealt by Spells or effects that consume a Spell Slot has a 25% chance to heal the creature instead.";}
            }
        else if (modRoll == 26) {
            if (modElite == 10) {
                GMod = "[Spell Breaker] (Elite) \nThe creature has a 30 ft. radius aura of Anti-Magic all around it.";}
            else {
                GMod = "[Spell Breaker] \nThe creature has a 60 ft. cone of Anti-Magic in front of it.";}
            }
        else if (modElite == 27) {
            if (modRoll == 10) {
                GMod = "[Single-Minded] (Elite) \nAt the start of combat the creature selects one target, either at random or intent, and focuses completely on them until they are killed. Once it no longer has a target, it selects a new one.";}
            else {
                GMod = "[Single-Minded] \nAt the start of combat the creature selects one target, either at random or intent, and focuses completely on them until they are killed. Once it no longer has a target, it selects a new one. \n\nThe creature crits on 18-20 (Or +2 crit range if it already has an expanded crit range) against its selected target.";}
            }
        else if (modRoll == 28) {
            if (modElite == 10) {
                GMod = "[Hunter] (Elite) \nThe creatures gains 20 ft. of all speeds and two extra Reactions every turn.";}
            else {
                GMod = "[Hunter] \nThe creatures gains 10 ft. of all speeds and an extra Reaction every turn.";}
            }
        else if (modRoll == 29) {
            if (modElite == 10) {
                GMod = "[Exoskeleton] (Elite) \nThe creatures skin grows thicker, granting it +4 to AC and Saving Throws.";}
            else {
                GMod = "[Exoskeleton] \nThe creatures skin grows thicker, granting it +2 to AC and Saving Throws.";}
            }
        else if (modRoll == 30) {
            if (modElite == 10) {
                GMod = "[Regenerator] (Elite) \nThe creature heals for 20 Hit Pionts at the start of its turn. if (the creature has taken fire damage since its last turn, it does not heal.";}
            else {
                GMod = "[Regenerator] \nThe creature heals for 10 Hit Pionts at the start of its turn. if (the creature has taken fire damage or a critical hit since its last turn, it does not heal.";}
            }
        else if (modRoll == 31) {
            if (modElite == 10) {
                GMod = "[Steel Skin] (Elite) \nThe creatures skin grows remarkably dense, granting them Immunity to Bludgeoning, Slashing, and Piercing damage.";}
            else {
                GMod = "[Steel Skin] \nThe creatures skin grows denser, granting them Resistance to Bludgeoning, Slashing, and Piercing damage.";}
            }
        else if (modRoll == 32) {
            if (modElite == 10) {
                GMod = "[Reflection] (Elite) \nThe first time the creature takes damage in a round, it absorbs some of it and adds 4d6 of that type on its next attack.";}
            else {
                GMod = "[Reflection] \nThe first time the creature takes Non-Physical damage in a round, it absorbs some of it and adds 2d6 of that type on its next attack.";}
            }
        else if (modRoll == 33) {
            if (modElite == 10) {
                GMod = "[Symbiosis] (Elite) \nAt the start of combat, the creature selects up to three allies. All damage and healing taken by either is split between both of them.";}
            else {
                GMod = "[Symbiosis] \nAt the start of combat, the creature selects one ally. All damage and healing taken by either is split between both of them.";}
            }
        else if (modRoll == 34) {
            if (modElite == 10) {
                GMod = "[Host] (Elite) \nWhen the creature dies, it splits into 5 much weaker and smaller versions.";}
            else {
                GMod = "[Host] \nWhen the creature dies, it splits into 3 much weaker and smaller versions.";}
            }
        else if (modRoll == 35) {
            if (modElite == 10) {
                GMod = "[Undying] (Elite) \nif (damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC  equal to the damage taken, unless the damage is from a critical hit. On a success, the creature drops to 1 hit point instead.";}
            else {
                GMod = "[Undying] \nif (damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is from a critical hit. On a success, the creature drops to 1 hit point instead.";}
            }
        else if (modRoll == 36) {
            if (modElite == 10) {
                GMod = "[Mother] (Elite) \nThe creature grows four beholder-like stalks that each have a separate Random Modifier.";}
            else {
                GMod = "[Mother] \nThe creature grows two beholder-like stalks that each have a separate Random Modifier.";}
            }
        else if (modRoll == 37) {
            if (modElite == 10) {
                GMod = "[Genius] (Elite) \nThe creatures Intelligence becomes 22 (or +5 if it is 22 or higher), gains Intelligence Saving Throw proficiency, and can speak telepathically up to 120 ft.";}
            else {
                GMod = "[Genius] \nThe creatures Intelligence becomes 18 (or +3 if it is 18 or higher), gains Intelligence Saving Throw proficiency, and can speak telepathically up to 60 ft.";}
            }
        else if (modRoll == 38) {
            if (modElite == 10) {
                GMod = "[Necromancer] (Elite) \nThe creature looks physically frail and unassuming. As an Action, the creature can resurrect a dead ally at 50% maximum Hit Points.";}
            else {
                GMod = "[Necromancer] \nThe creature looks physically frail and unassuming. As an Action, the creature can resurrect a dead ally at 25% maximum Hit Points.";}
            }
        else if (modRoll == 39) {
            if (modElite == 10) {
                GMod = "[Tunneler] (Elite) \nThe creature gains 20 ft. of burrow speed and leave tunnels. The burrow speed increases by 10 ft. for each size category above medium.";}
            else {
                GMod = "[Tunneler] \nThe creature gains 10 ft. of burrow speed and leave tunnels. The burrow speed increases by 5 ft. for each size category above medium.";}
            }
        else if (modRoll == 40) {
            if (modElite == 10) {
                GMod = "[Mage] (Elite) \nThe creature gains one 3rd and one 5th level spell to use at will.";}
            else {
                GMod = "[Mage] \nThe creature gains one 2nd and one 4th level spell to use at will.";}
            }
        else if (modRoll == 41) {
            if (modElite == 10) {
                GMod = "[Modular] (Elite) \nThe creature is much easier to dismember. Dismembered parts form into a smaller, weaker, version of the creature. These clones cannot replicate. Each clone has a separate randomly rolled Modifier.";}
            else {
                GMod = "[Modular] \nThe creature is much easier to dismember. Dismembered parts form into a smaller, weaker, version of the creature. These clones cannot replicate.";}
            }
        else if (modRoll == 42) {
            if (modElite == 10) {
                GMod = "[Wrong] (Elite) \nThe creature has the physical appearance of a completely different creature. It retains all stats, skills, and abilities, of the original creature. It gains one trait or attack from the creature it appears as.";}
            else {
                GMod = "[Wrong] \nThe creature has the physical appearance of a completely different creature. It retains all stats, skills, and abilities, of the original creature.";}
            }
        else if (modRoll == 43) {
            if (modElite == 10) {
                GMod = "[Phantom] (Elite) \nThe creature can phase through creatures, objects, and walls. Creatures it passes through take 2d6 psychic damage.";}
            else {
                GMod = "[Phantom] \nThe creature can phase through creatures, objects, and walls.";}
            }
        else if (modRoll == 44) {
            if (modElite == 10) {
                GMod = "[Hearty] (Elite) \nThe creature has an additional 66% Hit Points.";}
            else {
                GMod = "[Hearty] \nThe creature has an additional 33% Hit Points.";}
            }
        else if (modRoll == 45) {
            if (modElite == 10) {
                GMod = "[Webbing] (Elite) \nAs a Bonus Action, the creature can spray webbing at three targets. It has a range of 60/120 ft. with an escape DC of 17, AC of 15, and 30 Hit Points.";}
            else {
                GMod = "[Webbing] \nAs a Bonus Action, the creature can spray webbing at one target. It has a range of 30/60 ft. with an escape DC of 15, AC of 10, and 20 Hit Points.";}
            }
        else if (modRoll == 46) {
            if (modElite == 10) {
                GMod = "[Lingering] (Elite) \nNon-Spell attacks leave a 15x15 feet puddle of 4d6 acid (or applicable type) for 6 rounds.";}
            else {
                GMod = "[Lingering] \nNon-Spell attacks leave a 10x10 feet puddle of 2d6 acid (or applicable type) for 3 rounds.";}
            }
        else if (modRoll == 47) {
            if (modElite == 10) {
                GMod = "[Berzerker] (Elite) \nEvery successful attack during a combat adds +3 damage to all following attacks.";}
            else {
                GMod = "[Berzerker] \nEvery successful attack during a combat adds +2 damage to all following attacks.";}
            }
        else if (modRoll == 48) {
            if (modElite == 10) {
                GMod = "[Triggered] (Elite) \nThe creature takes a second turn on a different initative, gains +6 on initiative rolls, and gains an additional Reaction every round (3 total counting both turns).";}
            else {
                GMod = "[Triggered] \nThe creature takes a second turn on a different initative.";}
            }
        else if (modRoll == 49) {
            if (modElite == 10) {
                GMod = "[Mirrored] (Elite) \nWhile in combat, the creature is under the effect of Mirror Image. At the end of every turn, it gains an Image, to a max of 3. When the creature hits 0 Images, it instantly gains 3 Images.";}
            else {
                GMod = "[Mirrored] \nWhile in combat, the creature is under the effect of Mirror Image. At the end of every turn, it gains an Image, to a max of 3.";}
            }
        else if (modRoll == 50) {
            if (modElite == 10) {
                GMod = "[Mistling] (Elite) \nThe creature gains a 40 ft. aura of acid mist (or applicable damage type). Creatures that enter or start their turn in the mist take 4d6 damage.";}
            else {
                GMod = "[Mistling] \nThe creature gains a 20 ft. aura of acid mist (or applicable damage type). Creatures that enter or start their turn in the mist take 2d6 damage.";}
            }
        else if (modRoll == 51) {
            if (modElite == 10) {
                GMod = "[Lightweight] (Elite) \nThe creature has triple jump distance and height, and has 20 ft. increased speed.";}
            else {
                GMod = "[Lightweight] \nThe creature has double jump distance and height, and has 10 ft. increased speed.";}
            }
        else if (modRoll == 52) {
            if (modElite == 10) {
                GMod = "[Hidden Organs] (Elite) \nThe creature cannot be critically hit and is immune to conditions.";}
            else {
                GMod = "[Hidden Organs] \nThe creature cannot be critically hit.";}
            }
        else if (modRoll == 53) {
            if (modElite == 10) {
                GMod = "[Iron Jaw] (Elite) \nThe creature has a jaw that is capable of biting through most nonmagical materials. Bite damage is tripled and has the vorpal effect on bitten limbs.";}
            else {
                GMod = "[Iron Jaw] \nThe creature has a jaw that is capable of biting through most nonmagical materials. Bite damage is doubled.";}
            }
        else if (modRoll == 54) {
            if (modElite == 10) {
                GMod = "[Breath] (Elite) \nThe creature gains a random DC 18 Young Dragon Breath Attack.";}
            else {
                GMod = "[Breath] \nThe creature gains a random DC 15 Wyrmling Dragon Breath Attack.";}
            }
        else if (modRoll == 55) {
            if (modElite == 10) {
                GMod = "[Opposable] (Elite) \n(Only applicable to creatures that cannot wield weapons). The creature has and is able to wield two-handed weapons. The weapon damage is double of the base damage. It can wield two two-handed weapons if it is Large or larger.";}
            else {
                GMod = "[Opposable] \n(Only applicable to creatures that cannot wield weapons). The creature has and is able to wield one-handed weapons. The weapon damage is double of the base damage.";}
            }
        else if (modRoll == 56) {
            if (modElite == 10) {
                GMod = "[Hidden Form] (Elite) \nThe creature can undetectably disguise themself as an object, like a mimic. The size limit is 2 stages larger and smaller then normal.";}
            else {
                GMod = "[Hidden Form] \nThe creature can undetectably disguise themself as an object, like a mimic.";}
            }
        else if (modRoll == 57) {
            if (modElite == 10) {
                GMod = "[Disease-Ridden] (Elite) \nNon-Spell attacks invoke a DC 16 Con Save. On a fail, the target contracts a disease and is Poisoned.";}
            else {
                GMod = "[Disease-Ridden] \nNon-Spell attacks invoke a DC 14 Con Save. On a fail, the target contracts a disease.";}
            }
        else if (modRoll == 58) {
            if (modElite == 10) {
                GMod = "[Subsumer] (Elite) \nThe creature can replace an attack with absorbing a corpse. After absorbing a corpse, it heals for 30 Hit Points and gains two traits from the creature or +5 damage for the duration of the fight.";}
            else {
                GMod = "[Subsumer] \nThe creature can replace an attack with absorbing a corpse. After absorbing a corpse, it heals for 15 Hit Points and gains one trait from the creature or +3 damage for the duration of the fight.";}
            }
        else if (modRoll == 59) {
            if (modElite == 10) {
                GMod = "[Vampiric] (Elite) \nNatural/Unarmed weapons attacks deal an extra 4d6 necrotic damage. The targets Maximum Hit Points is reduced and the creature heals for the necrotic damage dealt.";}
            else {
                GMod = "[Vampiric] \nNatural/Unarmed weapons attacks deal an extra 2d6 necrotic damage. The targets Maximum Hit Points is reduced and the creature heals for the necrotic damage dealt.";}
            }
        else if (modRoll == 60) {
            if (modElite == 10) {
                GMod = "[Leader] (Elite) \nThe creature has 5 minion-type creatures with it and gains the Leadership trait.";}
            else {
                GMod = "[Leader] \nThe creature has 3 minion-type creatures with it and gains the Leadership trait.";}
            }
        else if (modRoll == 61) {
            if (modElite == 10) {
                GMod = "[Terrifying] (Elite) \nGains a DC 18 dragons Frighteneing Presence.";}
            else {
                GMod = "[Terrifying] \nGains a DC 15 dragons Frighteneing Presence.";}
            }
        else if (modRoll == 62) {
            if (modElite == 10) {
                GMod = "[Vines] (Elite) \nGround within 30 ft. of the creature requires three feet to move one foot.";}
            else {
                GMod = "[Vines] \nGround within 30 ft. of the creature is difficult terrain.";}
            }
        else if (modRoll == 63) {
            if (modElite == 10) {
                GMod = "[Duplicant] (Elite) \nDamage the creature deals is also dealt to a creature within 5 ft. of the target.";}
            else {
                GMod = "[Duplicant] \nHalf of the damage the creature deals is also dealt to a creature within 5 ft. of the target.";}
            }
        else if (modRoll == 64) {
            if (modElite == 10) {
                GMod = "[Oozing] (Elite) \nWhen hit by a weapon attack, slime fires off at two creature within 60 ft. with a +9 to hit. if (it hits, the target is Slimed and their movement speed is halved. A second slime reduces speed to 0. One layer of slime can be removed as an action.";}
            else {
                GMod = "[Oozing] \nWhen hit by a weapon attack, a piece of slime fires off at a creature within 30 ft. with a +7 to hit. if (it hits, the target is Slimed and their movement speed is halved. A second slime reduces speed to 0. One layer of slime can be removed as an action.";}
            }
        else if (modRoll == 65) {
            if (modElite == 10) {
                GMod = "[Enraged] (Elite) \nEvery 20% of health lost grants the creature 2d6 more damage.";}
            else {
                GMod = "[Enraged] \nEvery 25% of health lost grants the creature 1d6 more damage.";}
            }
        else if (modRoll == 66) {
            if (modElite == 10) {
                GMod = "[Gravity Well] (Elite) \nWithin 120 feet, moving towards the creature requires only one-third of the the normal speed. Moving away requires triple the normal speed.";}
            else {
                GMod = "[Gravity Well] \nWithin 60 feet, moving towards the creature requires only half of the the normal speed. Moving away requires double the normal speed.";}
            }
        else if (modRoll == 67) {
            if (modElite == 10) {
                GMod = "[Telekinetic] (Elite) \nEvery turn, all enemies within 80 feet make a DC 17 Intelligence (Athletics) roll or be move 15 ft. in a direction.";}
            else {
                GMod = "[Telekinetic] \nEvery turn, two enemies within 40 feet make a DC 14 Intelligence (Athletics) roll or be move 10 ft. in a direction.";}
            }
        else if (modRoll == 68) {
            if (modElite == 10) {
                GMod = "[Swapper] (Elite) \nAs a Bonus Action, the creature swaps the locations of two creatures within 60 ft. of it.";}
            else {
                GMod = "[Swapper] \nAs a Bonus Action, the creature swaps the locations of two creatures within 30 ft. of it.";}
            }
        else if (modRoll == 69) {
            if (modElite == 10) {
                GMod = "[Rigged] (Elite) \nOn death, the creature explodes for 9d8 within 40 ft.";}
            else {
                GMod = "[Rigged] \nOn death, the creature explodes for 6d8 within 20 ft.";}
            }
        else if (modRoll == 70) {
            if (modElite == 10) {
                GMod = "[Sweeping] (Elite) \nAll Non-Spell attacks also hit all creatures within 5 ft. of the target.";}
            else {
                GMod = "[Sweeping] \nAll Non-Spell attacks also hit 5 ft. to the left and right of the target.";}
            }
        else if (modRoll == 71) {
            if (modElite == 10) {
                GMod = "[Gravity Flip] (Elite) \nAs an Action, the creature picks a spot within 100 ft. and creates a 30 ft. square of reversed gravity 100 ft. tall. It lasts 6 rounds and recharges on a 4-6.";}
            else {
                GMod = "[Gravity Flip] \nAs an Action, the creature picks a spot within 50 ft. and creates a 15 ft. square of reversed gravity 50 ft. tall. It lasts 3 rounds and recharges on a 5-6.";}
            }
        else if (modRoll == 72) {
            if (modElite == 10) {
                GMod = "[Anti-Grav] (Elite) \nAs a Bonus Action, a targeted creature makes a DC 17 Charisma Save. On a fail, gravity is negated for them for 6 rounds.";}
            else {
                GMod = "[Anti-Grav] \nAs a Bonus Action, a targeted creature makes a DC 14 Charisma Save. On a fail, gravity is negated for them for 3 rounds.";}
            }
        else if (modRoll == 73) {
            if (modElite == 10) {
                GMod = "[Sapper] (Elite) \nAttack impose a DC 15 Con Save. On a fail, they gain one level of exhaustion and the creature gains advantage on their next attack and an extra attack.";}
            else {
                GMod = "[Sapper] \nAttack impose a DC 13 Con Save. On a fail, they gain one level of exhaustion and the creature gains advantage on their next attack.";}
            }
        else if (modRoll == 74) {
            if (modElite == 10) {
                GMod = "[Spider Climb] (Elite) \nThe creature gains 60 ft. of climbing speed, 90 ft. of tremorsense. Surprised creatures have disadvantage on attacks on their next turn.";}
            else {
                GMod = "[Spider Climb] \nThe creature gains 30 ft. of climbing speed, 45 ft. of tremorsense. Surprised creatures have disadvantage on attack on their next turn.";}
            }
        else if (modRoll == 75) {
            if (modElite == 10) {
                GMod = "[Charging] (Elite) \nAttacks take a full turn before they fire off. They deal damage in a sizable AoE (depending on the original attack size) and triple damage.";}
            else {
                GMod = "[Charging] \nAttacks take a full turn before they fire off. They deal damage in a sizable AoE (depending on the original attack size) and double damage.";}
            }
        else if (modRoll == 76) {
            if (modElite == 10) {
                GMod = "[Time Watcher] (Elite) \nEvery turn, one target makes a DC 16 Charisma Save or they cannot use Bonus Actions or Reactions on their next turn. They also have half movement speed until then.";}
            else {
                GMod = "[Time Watcher] \nEvery turn, one target makes a DC 13 Charisma Save or they cannot use Bonus Actions on their next turn.";}
            }
        else if (modRoll == 77) {
            if (modElite == 10) {
                GMod = "[Blinking] (Elite) \nAs a Reaction, the creature can cast Misty Step up to 60 ft. The creature has an additional Reaction eveyr turn.";}
            else {
                GMod = "[Blinking] \nAs a Reaction, the creature can cast Misty Step.";}
            }
        else if (modRoll == 78) {
            if (modElite == 10) {
                GMod = "[Consumer] (Elite) \nAll consumable items used within 90 ft. instead benefit the creature.";}
            else {
                GMod = "[Consumer] \nAll consumable items used within 45 ft. instead benefit the creature.";}
            }
        else if (modRoll == 79) {
            if (modElite == 10) {
                GMod = "[Mouth of Holding] (Elite) \nThe creatures mouth functions as a Large Bag of Holding. Creatures inside are incapacitated.";}
            else {
                GMod = "[Mouth of Holding] \nThe creatures mouth functions as a Large Bag of Holding.";}
            }
        else if (modRoll == 80) {
            if (modElite == 10) {
                GMod = "[Redirector] (Elite) \nAs a Reaction, reduce a projectles damage (even spells) by 3d6 + Dex + CR. Even if not reduced to 0, throw the projectile back with +10 attack; reroll the damage.";}
            else {
                GMod = "[Redirector] \nAs a Reaction, reduce a projectles damage (even spells) by 2d6 + Dex + CR. if (redcued to 0, throw the projectile back with +8 attack; reroll the damage.";}
            }
        else if (modRoll == 81) {
            if (modElite == 10) {
                GMod = "[Mutant] (Elite) \nThe creature is completely merged with two others. It gains the traits and attacks of all three and the highest of each Stat and HP.";}
            else {
                GMod = "[Mutant] \nThe creature is completely merged with another. It gains the traits and attacks of both and the highest of each Stat and HP.";}
            }
        else if (modRoll == 82) {
            if (modElite == 10) {
                GMod = "[Plant Growth] (Elite) \nThe creature can cast Plant Growth, Grasping Vines, and Guardian of Nature at will. The creature can also use Misty Step to travel through plants up to 60 feet.";}
            else {
                GMod = "[Plant Growth] \nThe creature can cast Plant Growth, Grasping Vines, and Guardian of Nature at will.";}
            }
        else if (modRoll == 83) {
            if (modElite == 10) {
                GMod = "[Trapper] (Elite) \nThe creatures has a large variety of traps and tricks set up within its territory. DCs are 15-17 and damage is 4d6-6d6.";}
            else {
                GMod = "[Trapper] \nThe creatures has a large variety of traps and tricks set up within its territory. DCs are 13-15 and damage is 2d6-3d6.";}
            }
        else if (modRoll == 84) {
            if (modElite == 10) {
                GMod = "[Blood Bags] (Elite) \nThe creature will fake its death to get an advantage. Sneak attacks from feign death deal 4d6 extra damage and crit on 18-20.";}
            else {
                GMod = "[Blood Bags] \nThe creature will fake its death to get an advantage. Sneak attacks from feign death deal 2d6 extra damage.";}
            }
        else if (modRoll == 85) {
            if (modElite == 10) {
                GMod = "[Waller] (Elite) \nCreates walls of stone (or applicable material) to limit movement. Can create two walls per turn, up to 30 ft. tall and long with 120 Hit Points.";}
            else {
                GMod = "[Waller] \nCreates walls of stone (or applicable material) to limit movement. Can create one wall per turn, up to 20 ft. tall and long with 60 Hit Points.";}
            }
        else if (modRoll == 86) {
            if (modElite == 10) {
                GMod = "[Riddler] (Elite) \nAs a Bonus Action, the creature asks two targets that can hear it a riddle. An incorrect or no answer results in paralysis until the end of their next turn.";}
            else {
                GMod = "[Riddler] \nAs a Bonus Action, the creature asks one target that can hear it a riddle. An incorrect or no answer results in paralysis until the end of their next turn.";}
            }
        else if (modRoll == 87) {
            if (modElite == 10) {
                GMod = "[Gangly] (Elite) \nThe creature has 20 foot longer reach with melee attacks and triple range with ranged attacks.";}
            else {
                GMod = "[Gangly] \nThe creature has 10 foot longer reach with melee attacks and double range with ranged attacks.";}
            }
        else if (modRoll == 88) {
            if (modElite == 10) {
                GMod = "[Pinpoint] (Elite) \nAll hits are Critical Hits, but the creature has -3 to hit.";}
            else {
                GMod = "[Pinpoint] \nAll hits are Critical Hits, but the creature has -5 to hit.";}
            }
        else if (modRoll == 89) {
            if (modElite == 10) {
                GMod = "[Consistent] (Elite) \nThe creatures attack always hit and enemies have -4 to Saving Throws, but it cannot land critical hits.";}
            else {
                GMod = "[Consistent] \nThe creatures attack always hit and enemies have -2 to Saving Throws, but it cannot land critical hits.";}
            }
        else if (modRoll == 90) {
            if (modElite == 10) {
                GMod = "[Resistant] (Elite) \nThe creature has 4 random resistances and 1 random immunity.";}
            else {
                GMod = "[Resistant] \nThe creature has 3 random resistances.";}
            }
        else if (modRoll == 91) {
            if (modElite == 10) {
                GMod = "[Weakness] (Elite) \nThe creature is Immune to damage of all types except for 2, which it is Vulnerable to.";}
            else {
                GMod = "[Weakness] \nThe creature has Resistance to all except for one type, which it is Vulnerable to.";}
            }
        else if (modRoll == 92) {
            if (modElite == 10) {
                GMod = "[Gibbering] (Elite) \nEach creature that starts its turn within 40 feet of the creature and can hear the gibbering must succeed on a DC 16 Wisdom Save. On a failure, the creature cant take reactions until the start of its next turn and rolls a d8 to determine what it does. 1-4, do nothing. 5-6, take no action or bonus action and use all movement in a random direction. 7-8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it cant make such an attack.";}
            else {
                GMod = "[Gibbering] \nEach creature that starts its turn within 20 feet of the creature and can hear the gibbering must succeed on a DC 13 Wisdom Save. On a failure, the creature cant take reactions until the start of its next turn and rolls a d8 to determine what it does. 1-4, do nothing. 5-6, take no action or bonus action and use all movement in a random direction. 7-8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it cant make such an attack.";}
            }
        else if (modRoll == 93) {
            if (modElite == 10) {
                GMod = "[Fortified] (Elite) \nInstances of damage 16 or less deal no damage to the creature.";}
            else {
                GMod = "[Fortified] \nInstances of damage 12 or less deal no damage to the creature.";}
            }
        else if (modRoll == 94) {
            if (modElite == 10) {
                GMod = "[Hivemind] (Elite) \n(Spellcasters Only) The creature can concentrate on 3 spells at once and has advantage and +2 on Saving Throws to maintain Concentration.";}
            else {
                GMod = "[Hivemind] \n(Spellcasters Only) The creature can concentrate on 2 spells at once and has advantage on Saving Throws to maintain Concentration.";}
            }
        else if (modRoll == 95) {
            if (modElite == 10) {
                GMod = "[Tactician] (Elite) \nAs a Bonus Action, command two allies to use their Reaction to make an attack. As a Reaction, add 2d6 to the Hit or Save roll of an ally.";}
            else {
                GMod = "[Tactician] \nAs a Bonus Action, command an ally to use their Reaction to make an attack. As a Reaction, add 1d6 to the Hit or Save roll of an ally.";}
            }
        else if (modRoll == 96) {
            if (modElite == 10) {
                GMod = "[Tiring] (Elite) \nEvery turn, a random creature within 1200 ft. makes a DC 16 Con Save or they gain a level of Exhaustion.";}
            else {
                GMod = "[Tiring] \nEvery turn, a random creature within 60 ft. makes a DC 13 Con Save or they gain a level of Exhaustion.";}
            }
        else if (modRoll == 97) {
            if (modElite == 10) {
                GMod = "[Tough] (Elite) \nThe creature gains 60 Maximum Hit Points and has Resistance to the two most recent damage types taken.";}
            else {
                GMod = "[Tough] \nThe creature gains 25 Maximum Hit Points and has Resistance to the most recent damage type taken.";}
            }
        else if (modRoll == 98) {
            if (modElite == 10) {
                GMod = "[Epic] (Elite) \nGains 4 uses of Legendary Resistance.";}
            else {
                GMod = "[Epic] \nGains 2 uses of Legendary Resistance.";}
            }
        else if (modRoll == 99) {
            if (modElite == 10) {
                GMod = "[Legendary] (Elite) \nGain 2 Legendary Action per round. It can be used to make a single attack, move up to full speed, or casting a known cantrip.";}
            else {
                GMod = "[Legendary] \nGain 1 Legendary Action per round. It can be used to make a single attack, move up to full speed, or casting a known cantrip.";}
            }
        else if (modRoll == 100) {
            if (modElite == 10) {
                GMod = "[Titan] (Elite) \nThe creatures grows two size categories larger, gains 10 feet of melee reach, and adds +13 to Non-Spell damage.";}
            else {
                GMod = "[Titan] \nThe creatures grows one size category larger, gains 5 feet of melee reach, and adds +7 to Non-Spell damage.";}
            }
        else if (modRoll == 101) {
            if (modElite == 10) {
                GMod = "[Time Flux] (Elite) \nThe creature gains an extra turn. Recharges on 4-6.";}
            else {
                GMod = "[Time Flux] \nThe creature gains an extra Action. Recharges on 5-6.";}
            }
        else if (modRoll == 102) {
            if (modElite == 10) {
                GMod = "[Glass Cannon] (Elite) \nThe creature deals 50% more damage and takes 25% more damage.";}
            else {
                GMod = "[Glass Cannon] \nThe creature deals 25% more damage and takes 25% more damage.";}
            }
        else if (modRoll == 103) {
            if (modElite == 10) {
                GMod = "[Weakener] (Elite) \nAt the end of the creatures turn, it chooses up to 2 creatures. Their Resistance is reduced for the rest of combat to a damage type that the creature can deal. \n\n(Immunity > Resistance > Normal > +50% Damage > Vulnerable)";}
            else {
                GMod = "[Weakener] \nDamage dealt by this creature reduces the Resistance of the target to that element for the rest of combat. \n\n(Immunity > Resistance > Normal > +50% Damage > Vulnerable)";}
            }
        else if (modRoll == 104) {
            if (modElite == 10) {
                GMod = "[Pustules] (Elite) \nEach separate instance of damage pops a pustle. A popped pustle squirts nitroglycerin towards a creatures with +10 to hit up to 60 ft. They take 2d6 acid damage and gain a stack of nitro. \n\nNitro can be ignited by bludgeoning damage of 20 or higher, fire, lightnings, or sparks.";}
            else {
                GMod = "[Pustules] \nEach separate instance of damage pops a pustle. A popped pustle squirts nitroglycerin towards a creatures with +8 to hit up to 30 ft. They take 1d6 acid damage and gain a stack of nitro. \n\nNitro can be ignited by bludgeoning damage of 20 or higher, fire, lightnings, or sparks.";}
            }
        else if (modRoll == 105) {
            if (modElite == 10) {
                GMod = "[Gunsmith] (Elite) \nAs a Bonus Action, the creature morphs a limb into a firearm or a siege weapon. These weapons do not need ammo and gain two additional damage die.";}
            else {
                GMod = "[Gunsmith] \nAs a Bonus Action, the creature morphs a limb into a firearm. These firearms do not need ammo and gain one additional damage die.";}
            }
        else if (modRoll == 106) {
            if (modElite == 10) {
                GMod = "[Magnetic] (Elite) \nMetal weapons and ammunition have -8 to hit against the creature. As a Bonus Action, the creature can pull three metal item (that can be magnetically affected) with 120 ft. towards it (DC 17 Strength Save).";}
            else {
                GMod = "[Magnetic] \nMetal weapons and ammunition have -4 to hit against the creature. As a Bonus Action, the creature can pull a metal item (that can be magnetically affected) with 60 ft. towards it (DC 15 Strength Save).";}
            }
        else if (modRoll == 107) {
            if (modElite == 10) {
                GMod = "[Magnifier] (Elite) \nEvery die rolled by enemies is one tier lower and every die rolled by the creature is one tier higher. \n\n(2d12 > 1d20 > 2d8 > 1d12 > 1d10 > 1d8 > 1d6 > 1d4 > 1 > 0)";}
            else {
                GMod = "[Magnifier] \nEvery die rolled by enemies is one tier lower. \n\n(2d12 > 1d20 > 2d8 > 1d12 > 1d10 > 1d8 > 1d6 > 1d4 > 1 > 0)";}
            }
        else if (modRoll == 108) {
            if (modElite == 10) {
                GMod = "[Copycat] (Elite) \nTwice a day, as an Action or upon rolling Initiative, the creature may morph into an exact copy of one of its enemies. It takes on the Hit Points of the creature as well, and reverts back to its original form with its original HP once it hits 0 HP. Overkill damage carries over.";}
            else {
                GMod = "[Copycat] \nOnce a day, as an Action or upon rolling Initiative, the creature may morph into an exact copy of one of its enemies. It takes on the Hit Points of the creature as well, and reverts back to its original form with its original HP once it hits 0 HP. Overkill damage carries over.";}
            }
        else if (modRoll == 109) {
            if (modElite == 10) {
                GMod = "[Plunderer] (Elite) \nAt the start of the creatures turn, roll a d20. On 11-20, target a random spellcaster and steal one of their highest Spell Slots. if (the creature is a spellcaster, they can use it upcast one level, or they can choose to add 4d8 on a successful attack. The stolen energy must be used before more can be stolen.";}
            else {
                GMod = "[Plunderer] \nAt the start of the creatures turn, roll a d20. On 15-20, target a random spellcaster and steal one of their highest Spell Slots. if (the creature is a spellcaster, they can use it, or they can choose to add 2d8 on a successful attack. The stolen energy must be used before more can be stolen.";}
            }
        else if (modRoll == 110) {
            if (modElite == 10) {
                GMod = "[Archmage] (Elite) \n(Spellcaster Only) All spells are upcast two levels.";}
            else {
                GMod = "[Archmage] \n(Spellcaster Only) All spells are upcast one level.";}
            }
        else if (modRoll == 111) {
            if (modElite == 10) {
                GMod = "[Double Trouble] (Elite) \nGeneate a new modifier three times and the creatures gains all three.";}
            else {
                GMod = "[Double Trouble] \nGenerate a new modifier twice and the creature gains both.";}
            }
        else if (modRoll == 112) {
            if (modElite == 10) {
                GMod = "[Feylost] (Elite) \nThis creature is considered as Fey. It gains +5 Charisma and wings with a 50 ft. fly speed. It has advantage on Saves against spells and magical effects.";}
            else {
                GMod = "[Feylost] \nThis creature is considered as Fey. It gains +3 Charisma and wings with a 30 ft. fly speed. It has advantage on Saves against spells and magical effects.";}
            }
        else if (modRoll == 113) {
            if (modElite == 10) {
                GMod = "[Fiendish] (Elite) \nThis creature is considered as Fiend. The creature has Immunity to Fire and Resistance to Nonmagical Physical damage. Spells of 2nd Level or lower cannot affect the creature unless it wills them to.";}
            else {
                GMod = "[Fiendish] \nThis creature is considered as Fiend. The creature has Resistance to Fire and Nonmagical Physical damage. Spells of 1st Level or lower cannot affect the creature unless it wills them to.";}
            }
        else if (modRoll == 114) {
            if (modElite == 10) {
                GMod = "[Slimeling] (Elite) \nThis creature is considered as Ooze. The creature is Immune to Physical and Lightning damage. A grappled creature of a size smaller than the creature can be absorbed into its body where they takes 6d6 acid damage at the start of their turn (escape DC 16).";}
            else {
                GMod = "[Slimeling] \nThis creature is considered as Ooze. The creature has Resistance to Physical and Lightning damage. A grappled creature of a size smaller than the creature can be absorbed into its body where they takes 3d6 acid damage at the start of their turn (escape DC 14).";}
            }
        else if (modRoll == 115) {
            if (modElite == 10) {
                GMod = "[Dragonkin] (Elite) \nThis creature is considered as Dragon. It gains +5 Strength and 60ft. of Blindsight. The creature gains 5 uses of a Dragonborn Breath weapon of DC 17 for 3d10 damage and Resistance to the matching element.";}
            else {
                GMod = "[Dragonkin] \nThis creature is considered as Dragon. It gains +3 Strength and 30ft. of Blindsight. The creature gains 3 uses of a Dragonborn Breath weapon of DC 15 for 2d10 damage and Resistance to the matching element.";}
            }
        else if (modRoll == 116) {
            if (modElite == 10) {
                GMod = "[Construct] (Elite) \nThis creature is considered as Construct. It gains +5 Consitution and its form cannot be changed. The creature is Immune to Sleep, Charm, Poison, Disease, Poisoned, and non-adamantite Physical damage. \nOn death, the creatures core overloads and it explodes for 4d8 fire within 30 ft.";}
            else {
                GMod = "[Construct] \nThis creature is considered as Construct. It gains +3 Consitution and its form cannot be changed. The creature is Immune to Sleep, Charm, Poison, Disease, Poisoned, and Resists non-adamantite Physical damage.";}
            }
        else if (modRoll == 117) {
            if (modElite == 10) {
                GMod = "[Angelborn] (Elite) \nThis creature is considered as Celestial. All Physical damage dealt is Radiant instead and is increased by 2d6. The creature knows if it hears a lie. It is Immune to Fear and Necrotic.";}
            else {
                GMod = "[Angelborn] \nThis creature is considered as Celestial and its normal type. All Physical damage dealt is Radiant instead and the creature knows if it hears a lie. It is Immune to Fear and Resists Necrotic.";}
            }
        else if (modRoll == 118) {
            if (modElite == 10) {
                GMod = "[Determinist] (Elite) \nThe creatures gains +8 Strength and Intelligence.";}
            else {
                GMod = "[Determinist] \nThe creatures gains +5 Strength and Intelligence.";}
            }
        else if (modRoll == 119) {
            if (modElite == 10) {
                GMod = "[Veteran] (Elite) \nThe creatures gains +8 Strength and Wisdom.";}
            else {
                GMod = "[Veteran] \nThe creatures gains +5 Strength and Wisdom.";}
            }
        else if (modRoll == 120) {
            if (modElite == 10) {
                GMod = "[Gladiator] (Elite) \nThe creatures gains +8 Strength and Charisma.";}
            else {
                GMod = "[Gladiator] \nThe creatures gains +5 Strength and Charisma.";}
            }
        else if (modRoll == 121) {
            if (modElite == 10) {
                GMod = "[Opportunist] (Elite) \nThe creatures gains +5 Dexterity and Intelligence.";}
            else {
                GMod = "[Opportunist] \nThe creatures gains +5 Dexterity and Intelligence.";}
            }
        else if (modRoll == 122) {
            if (modElite == 10) {
                GMod = "[Pursuer] (Elite) \nThe creatures gains +8 Dexterity and Wisdom.";}
            else {
                GMod = "[Pursuer] \nThe creatures gains +5 Dexterity and Wisdom.";}
            }
        else if (modRoll == 123) {
            if (modElite == 10) {
                GMod = "[Robin Hood] (Elite) \nThe creatures gains +8 Dexterity and Charisma.";}
            else {
                GMod = "[Robin Hood] \nThe creatures gains +5 Dexterity and Charisma.";}
            }
        else if (modRoll == 124) {
            if (modElite == 10) {
                GMod = "[Royalty] (Elite) \nThe creatures gains +8 Constitution and Charisma.";}
            else {
                GMod = "[Royalty] \nThe creatures gains +5 Contsitution and Charisma.";}
            }
        else if (modRoll == 125) {
            if (modElite == 10) {
                GMod = "[Queenly] (Elite) \nThe creatures gains +8 Constitution and Intelligence.";}
            else {
                GMod = "[Queenly] \nThe creatures gains +5 Constitution and Intelligence.";}
            }
        else if (modRoll == 126) {
            if (modElite == 10) {
                GMod = "[Kingly] (Elite) \nThe creatures gains +8 Constitution and Wisdom.";}
            else {
                GMod = "[Kingly] \nThe creatures gains +5 Constitution and Wisdom.";}
            }
        else if (modRoll == 127) {
            if (modElite == 10) {
                GMod = "[Gambler] (Elite) \nWhen rolling Initiative, the creature draws two random Deck of Many Things cards. \n\n(Optionally: Roll a d20. Even is Many Things, Odds is Many Fates) \n\n(Recommended: Reroll for card draws that would end or prevent the combat from happening. Also, DM fiat: reroll really bad cards, as this mod system is supposed to add challenge)";}
            else {
                GMod = "[Gambler] \nWhen rolling Initiative, the creature draws a random Deck of Many Things card. \n\n(Optionally: Roll a d20. Even is Many Things, Odds is Many Fates) \n\n(Recommended: Reroll for card draws that would end or prevent the combat from happening. Also, DM fiat: reroll really bad cards, as this mod system is supposed to add challenge)";}
            }
        else if (modRoll == 128) {
            if (modElite == 10) {
                GMod = "[Nightmare] (Elite) \nAt the start of combat, the creature designates (or randomly picks) a creature. They are pulled into a 50x50 ft pocket dimension. They must fight a creature of CR equal to 1/2 of their level. The only escape is the death of one of the fighters, in which the creature vanishes and the character, or their body, is returned where they were.";}
            else {
                GMod = "[Nightmare] \nAt the start of combat, the creature designates (or randomly picks) a creature. They are pulled into a 100x100 ft pocket dimension. They must fight a creature of CR equal to 1/3 of their level. The only escape is the death of one of the fighters, in which the creature vanishes and the character, or their body, is returned where they were.";}
            }
        else if (modRoll == 129) {
            if (modElite == 10) {
                GMod = "[Gourmet] (Elite) \nAs a Bonus Action, the creature can ingest a coin-sized material to gain a bonus for 1 minute (10 rounds). Up to four different bonuses can be active at once. \n\n(Other materials are up to the DM.) \n[Wood] Gain 4 AC. \n[Stone] Physical Resistance \n[Basic Metals] +4 Damage. \n[Cloth] Incoming Attacks have Disadv. \n[Precious Metals] Advantage on Attacks.";}
            else {
                GMod = "[Gourmet] \nAs a Bonus Action, the creature can ingest a coin-sized material to gain a bonus for 1 minute (10 rounds). Up to two different bonuses can be active at once. The second active reduces both durations by 4 rounds. \n\n(Other materials are up to the DM.) \n[Wood] Gain 2 AC. \n[Stone] Physical Resist, -5 Speed. \n[Basic Metals] +2 Damage. \n[Cloth] Incoming Attacks have Disadv. \n[Precious Metals] -2 AC and Advantage on Attacks.";}
            }
        else if (modRoll == 130) {
            if (modElite == 10) {
                GMod = "[] (Elite) \n";}
            else {
                GMod = "[] \n";}
            }
}
function EnemyModBtn() {
	EnemyMod()
	document.getElementById("charBox").innerHTML = GMod;
}

// INFO BUTTONS //
// INFO BUTTONS //
// INFO BUTTONS //
// INFO BUTTONS //
// INFO BUTTONS //

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

async function EnemyModInfo() {
	let grabFile = await fetch('/dmapp/lists/enemymodifier.txt');
	let txtConvert = await grabFile.text();
	const makeArray = txtConvert.split("\r?\n");

document.getElementById("charBox").innerHTML = txtConvert;
}

