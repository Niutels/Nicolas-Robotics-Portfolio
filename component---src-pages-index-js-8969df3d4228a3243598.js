(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var i,a=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),c=n(r("pVnL")),l=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,n=p(t||r||[]);return n&&n.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=d(e),r=h(t);return g[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&l.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function x(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+r+n+t+a+i+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(k,(0,c.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,i(n),s):s})),k=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":h,sizes:r,srcSet:n,src:i},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||y&&(v||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=h(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,h=e.placeholderClassName,g=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,S=e.loading,O=e.draggable,I=g||m;if(!I)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,c.default)({opacity:j?1:0,transition:T?"opacity "+y+"ms":"none"},s),H="boolean"==typeof v?"lightgray":v,P={transitionDelay:y+"ms"},_=(0,c.default)({opacity:this.state.imgLoaded?0:1},T&&P,s,f),N={title:t,alt:this.state.isVisible?"":r,style:_,className:h,itemProp:w},C=this.state.isHydrated?p(I):I[0];if(g)return l.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:C.maxWidth?C.maxWidth+"px":null,maxHeight:C.maxHeight?C.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),H&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&P)}),C.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:C.base64,spreadProps:N,imageVariants:I,generateSources:x}),C.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:C.tracedSVG,spreadProps:N,imageVariants:I,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(I),l.default.createElement(k,{alt:r,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:r,title:t,loading:S},C,{imageVariants:I}))}}));if(m){var M=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},a);return"inherit"===a.display&&delete M.display,l.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},H&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:H,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},T&&P)}),C.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:C.base64,spreadProps:N,imageVariants:I,generateSources:x}),C.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:C.tracedSVG,spreadProps:N,imageVariants:I,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(I),l.default.createElement(k,{alt:r,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:r,title:t,loading:S},C,{imageVariants:I}))}}))}return null},t}(l.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function H(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}j.propTypes={resolutions:T,sizes:z,fixed:H(u.default.oneOfType([T,u.default.arrayOf(T)])),fluid:H(u.default.oneOfType([z,u.default.arrayOf(z)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=j;t.default=P},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return _}));var n=r("q1tI"),i=r.n(n),a=r("8k0H"),o=r("jBH6"),s=r("7sqX"),c=r("9eSz"),l=r.n(c),u=r("MUpH"),d=r("vOnD"),f=r("WveJ");function h(){var e=Object(u.a)(["\n    margin-bottom: 4rem;\n  "]);return h=function(){return e},e}function p(){var e=Object(u.a)(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return p=function(){return e},e}function g(){var e=Object(u.a)(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n"]);return g=function(){return e},e}var m=d.c.span(g()),v=d.c.p(p(),f.a.TABLET(h())),y=function(e){var t=e.title,r=e.copy,n=e.image;return i.a.createElement("figure",null,i.a.createElement(l.a,{fluid:n?n.childImageSharp.fluid:{},alt:t}),i.a.createElement("figcaption",null,i.a.createElement(m,null,t),i.a.createElement(v,null,r)))};function b(){var e=Object(u.a)(["\n    display: block;\n  "]);return b=function(){return e},e}function w(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4rem;\n  padding: 0 4rem;\n  margin: 2rem 0;\n\n  ",";\n"]);return w=function(){return e},e}var E=d.c.div(w(),f.a.TABLET(b())),S=function(e){var t=e.items;return i.a.createElement(E,null,t.map((function(e,t){return i.a.createElement(y,Object.assign({},e,{key:t}))})))},L=r("o0o1"),x=r.n(L);r("ls82");function O(e,t,r,n,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}var I,R=r("dI71"),V=[];function k(e){return void 0===e&&(e="-50px"),void 0===I&&"undefined"!=typeof window&&window.IntersectionObserver&&(I=new window.IntersectionObserver((function(e){e.forEach((function(e){V.forEach((function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0?t[1](!0):(!e.isIntersecting||e.intersectionRatio<=0)&&t[1](!1))}))}))}),{rootMargin:e})),I}var j=function(e){function t(){var t;return(t=e.call(this)||this).listenToIntersections=function(){t.io=function(e,t,r){var n=k(r);return n.observe(e),V.push([e,t]),n}(t.ref,(function(e){t.setState((function(t){var r={};return!t.hasBeenVisible&&e&&(r={hasBeenVisible:!0}),Object.assign({isVisible:e},r)}))}),t.props.rootMargin)},t.handleRef=function(e){e&&(t.ref=e)},t.state={isVisible:!1,hasBeenVisible:!1,IOSupported:!1},t}Object(R.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t=(e=x.a.mark((function e(){var t,n,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,n=!0,i=!1,"undefined"==typeof window||window.IntersectionObserver){e.next=6;break}return e.next=6,r.e(9).then(r.t.bind(null,"Wr5T",7)).then((function(){console.log("IntersectionObserver polyfill injected.")}));case 6:"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,n=!1,i=!0),this.setState({isVisible:t,hasBeenVisible:n,IOSupported:i},this.listenToIntersections);case 8:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){O(a,n,i,o,s,"next",e)}function s(e){O(a,n,i,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),n.componentWillUnmount=function(){this.io.disconnect()},n.render=function(){var e=this.state,t=e.isVisible,r=e.hasBeenVisible;return i.a.createElement("div",{ref:this.handleRef},this.props.children({isVisible:t,hasBeenVisible:r}))},t}(n.Component),T=r("MnMr");function z(){var e=Object(u.a)(["\n  padding: 4rem;\n  margin: 4rem;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  background-color: ",";\n"]);return z=function(){return e},e}var H=d.c.div(z(),(function(e){return e.isVisible?T.a:" #333"})),P=function(){return i.a.createElement(j,{rootMargin:"-50px"},(function(e){var t=e.isVisible;return i.a.createElement(H,{isVisible:t},i.a.createElement(s.a,{tag:"span"},"IntersectionObserver"))}))},_=(t.default=function(e){var t=e.data;return i.a.createElement(a.a,null,i.a.createElement(o.a,null,i.a.createElement(s.a,{as:"h2",size:"large"},t.homeJson.content.childMarkdownRemark.rawMarkdownBody)),i.a.createElement(S,{items:t.homeJson.gallery}),i.a.createElement("div",{style:{height:"50vh"}}),i.a.createElement(P,null))},"1370931369")},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(I){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),o=new L(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return O()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=w(o,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(I){return{type:"throw",arg:I}}}e.wrap=c;var u={};function d(){}function f(){}function h(){}var p={};p[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(x([])));m&&m!==t&&r.call(m,i)&&(p=m);var v=h.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(i,a){function o(){return new t((function(n,o){!function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}(i,a,n,o)}))}return n=n?n.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,f.displayName=s(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,o,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new b(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),s(v,o,"Generator"),v[i]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-index-js-8969df3d4228a3243598.js.map