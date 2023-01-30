(function(){"use strict";try{if(typeof document!="undefined"){var i=document.createElement("style");i.appendChild(document.createTextNode(':root{--color-border: "" ;--color-width: "" ;--color-animation:"" }*{margin:0;padding:0;box-sizing:border-box}div,button{isolation:isolate}.video-container{width:20rem;height:540px;position:fixed;bottom:10px;border-radius:10px;z-index:10000;background-color:#000;isolation:isolate;z-index:100}.video-container-box{width:100%;height:100%;position:relative;border-radius:10px;isolation:isolate}.video-container video{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:-10px 4px 65px #0000001a;isolation:isolate}.full{width:100%}.overlay-thing{position:absolute;bottom:0;width:100%;padding:1rem;padding-bottom:0;margin-bottom:3.8rem;text-align:center;isolation:isolate}.flexiblebutton{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:100%;isolation:isolate}.overlay-thing-button{display:block;padding:5px 15px;border-radius:20px;margin-bottom:8px;background-color:#fff;color:#000;cursor:pointer;font-size:12px;width:100%;isolation:isolate}.large-container-buttonparent{position:absolute;bottom:60px;width:100%;padding:20px;isolation:isolate}a{color:inherit;text-decoration:none}.small-video-container-box-parent{width:168px;height:218px;position:fixed;z-index:100;isolation:isolate}.small-video-container-box{position:absolute;z-index:10;width:160px;height:160px;z-index:100;border-radius:50%;isolation:isolate}video{height:100%;width:100%;object-fit:cover;isolation:isolate}.close-button{position:absolute;right:0;top:-10px;background-color:#000;height:30px;width:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:100;cursor:pointer;isolation:isolate}.cls-sm{height:15px;width:15px;top:-5px;padding:3px}.widgetheader{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;font-size:15px;color:#fff;font-family:sans-serif}.sm-video{z-index:1}.lg-credit{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-size:10px;font-family:sans-serif}.video-size{min-height:100vh;width:100%;background-color:#000}.sahi{position:absolute;bottom:28px;top:0;z-index:1;left:10px;width:4rem;height:2.9rem;opacity:1;background:transparent;border:none}.sahi svg{padding-top:10px;padding-left:5px;width:2rem;fill:#fff}.blink{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.brick{position:absolute;bottom:10px;z-index:1;right:10px;width:3rem;height:3rem;border-radius:50%;opacity:1;border:none}.brick h1{font-size:1.2rem}.circle{border-radius:50%}.smvideo-container{width:fit-content;border-radius:50%;width:160px;height:190px}.smvideo-container-round{width:fit-content;border-radius:50%;width:160px;height:160px}.smvideo-container-round:before{width:100%;height:100%;content:"";top:0;bottom:0;left:0;position:absolute;top:-8.2px;bottom:10px;left:-8.2px;right:0;border:var(--color-width) solid var(--color-border);border-radius:50%;animation:pulse 1s infinite}.loader-container svg{padding-top:80px;position:absolute;z-index:-10}')),document.head.appendChild(i)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(){"use strict";const T=new Set,H=new Map;new window.MutationObserver(t=>{for(const e of t)if(e.type==="attributes"){const{target:n,attributeName:r,oldValue:_}=e;if(H.has(n)){let[o,l]=H.get(n);if(l.includes(r)||l.length==0){const c=n.getAttribute(r);o(r,_,c,n)}}}T.forEach(e=>e())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function ze(t,e){setTimeout(n),T.add(n);function n(){document.querySelectorAll(t).forEach(r=>{if(!H.has(r)){const{connected:_=()=>{},disconnected:o=()=>{},attributeChanged:l=()=>{},observedAttributes:c=[]}=e(r);H.set(r,[l,c]),_(),Ue(t,r,()=>o())}})}}function Ue(t,e,n){setTimeout(r),T.add(r);function r(){e&&document.contains(e)&&e.matches(t)||(H.delete(e),T.delete(r),n())}}var D,u,K,M,Q,Y,z={},ee=[],Fe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function N(t,e){for(var n in e)t[n]=e[n];return t}function te(t){var e=t.parentNode;e&&e.removeChild(t)}function ne(t,e,n){var r,_,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?_=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?D.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)l[o]===void 0&&(l[o]=t.defaultProps[o]);return U(t,l,r,_,null)}function U(t,e,n,r,_){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_??++K};return _==null&&u.vnode!=null&&u.vnode(o),o}function F(t){return t.children}function O(t,e){this.props=t,this.context=e}function $(t,e){if(e==null)return t.__?$(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?$(t):null}function oe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return oe(t)}}function re(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!I.__r++||Y!==u.debounceRendering)&&((Y=u.debounceRendering)||Q)(I)}function I(){for(var t;I.__r=M.length;)t=M.sort(function(e,n){return e.__v.__b-n.__v.__b}),M=[],t.some(function(e){var n,r,_,o,l,c;e.__d&&(l=(o=(n=e).__v).__e,(c=n.__P)&&(r=[],(_=N({},o)).__v=o.__v+1,q(c,o,_,n.__n,c.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l??$(o),o.__h),ue(r,o),o.__e!=l&&oe(o)))})}function ie(t,e,n,r,_,o,l,c,p,f){var i,v,d,s,h,S,m,y=r&&r.__k||ee,k=y.length;for(n.__k=[],i=0;i<e.length;i++)if((s=n.__k[i]=(s=e[i])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?U(null,s,null,null,s):Array.isArray(s)?U(F,{children:s},null,null,null):s.__b>0?U(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(d=y[i])===null||d&&s.key==d.key&&s.type===d.type)y[i]=void 0;else for(v=0;v<k;v++){if((d=y[v])&&s.key==d.key&&s.type===d.type){y[v]=void 0;break}d=null}q(t,s,d=d||z,_,o,l,c,p,f),h=s.__e,(v=s.ref)&&d.ref!=v&&(m||(m=[]),d.ref&&m.push(d.ref,null,s),m.push(v,s.__c||h,s)),h!=null?(S==null&&(S=h),typeof s.type=="function"&&s.__k===d.__k?s.__d=p=_e(s,p,t):p=le(t,s,d,y,h,p),typeof n.type=="function"&&(n.__d=p)):p&&d.__e==p&&p.parentNode!=t&&(p=$(d))}for(n.__e=S,i=k;i--;)y[i]!=null&&(typeof n.type=="function"&&y[i].__e!=null&&y[i].__e==n.__d&&(n.__d=$(r,i+1)),de(y[i],y[i]));if(m)for(i=0;i<m.length;i++)fe(m[i],m[++i],m[++i])}function _e(t,e,n){for(var r,_=t.__k,o=0;_&&o<_.length;o++)(r=_[o])&&(r.__=t,e=typeof r.type=="function"?_e(r,e,n):le(n,r,r,_,r.__e,e));return e}function le(t,e,n,r,_,o){var l,c,p;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||_!=o||_.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(_),l=null;else{for(c=o,p=0;(c=c.nextSibling)&&p<r.length;p+=2)if(c==_)break e;t.insertBefore(_,o),l=o}return l!==void 0?l:_.nextSibling}function Oe(t,e,n,r,_){var o;for(o in n)o==="children"||o==="key"||o in e||W(t,o,null,n[o],r);for(o in e)_&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||W(t,o,e[o],n[o],r)}function se(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Fe.test(e)?n:n+"px"}function W(t,e,n,r,_){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||se(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||se(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?ce:ae,o):t.removeEventListener(e,o?ce:ae,o);else if(e!=="dangerouslySetInnerHTML"){if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function ae(t){this.l[t.type+!1](u.event?u.event(t):t)}function ce(t){this.l[t.type+!0](u.event?u.event(t):t)}function q(t,e,n,r,_,o,l,c,p){var f,i,v,d,s,h,S,m,y,k,P,L=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,c=e.__e=n.__e,e.__h=null,o=[c]),(f=u.__b)&&f(e);try{e:if(typeof L=="function"){if(m=e.props,y=(f=L.contextType)&&r[f.__c],k=f?y?y.props.value:f.__:r,n.__c?S=(i=e.__c=n.__c).__=i.__E:("prototype"in L&&L.prototype.render?e.__c=i=new L(m,k):(e.__c=i=new O(m,k),i.constructor=L,i.render=We),y&&y.sub(i),i.props=m,i.state||(i.state={}),i.context=k,i.__n=r,v=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),L.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=N({},i.__s)),N(i.__s,L.getDerivedStateFromProps(m,i.__s))),d=i.props,s=i.state,v)L.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(L.getDerivedStateFromProps==null&&m!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,k),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,k)===!1||e.__v===n.__v){i.props=m,i.state=i.__s,e.__v!==n.__v&&(i.__d=!1),i.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(A){A&&(A.__=e)}),i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,k),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,s,h)})}i.context=k,i.props=m,i.state=i.__s,(f=u.__r)&&f(e),i.__d=!1,i.__v=e,i.__P=t,f=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=N(N({},r),i.getChildContext())),v||i.getSnapshotBeforeUpdate==null||(h=i.getSnapshotBeforeUpdate(d,s)),P=f!=null&&f.type===F&&f.key==null?f.props.children:f,ie(t,Array.isArray(P)?P:[P],e,n,r,_,o,l,c,p),i.base=e.__e,e.__h=null,i.__h.length&&l.push(i),S&&(i.__E=i.__=null),i.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ie(n.__e,e,n,r,_,o,l,p);(f=u.diffed)&&f(e)}catch(A){e.__v=null,(p||o!=null)&&(e.__e=c,e.__h=!!p,o[o.indexOf(c)]=null),u.__e(A,e,n)}}function ue(t,e){u.__c&&u.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){u.__e(r,n.__v)}})}function Ie(t,e,n,r,_,o,l,c){var p,f,i,v=n.props,d=e.props,s=e.type,h=0;if(s==="svg"&&(_=!0),o!=null){for(;h<o.length;h++)if((p=o[h])&&"setAttribute"in p==!!s&&(s?p.localName===s:p.nodeType===3)){t=p,o[h]=null;break}}if(t==null){if(s===null)return document.createTextNode(d);t=_?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,d.is&&d),o=null,c=!1}if(s===null)v===d||c&&t.data===d||(t.data=d);else{if(o=o&&D.call(t.childNodes),f=(v=n.props||z).dangerouslySetInnerHTML,i=d.dangerouslySetInnerHTML,!c){if(o!=null)for(v={},h=0;h<t.attributes.length;h++)v[t.attributes[h].name]=t.attributes[h].value;(i||f)&&(i&&(f&&i.__html==f.__html||i.__html===t.innerHTML)||(t.innerHTML=i&&i.__html||""))}if(Oe(t,d,v,_,c),i)e.__k=[];else if(h=e.props.children,ie(t,Array.isArray(h)?h:[h],e,n,r,_&&s!=="foreignObject",o,l,o?o[0]:n.__k&&$(n,0),c),o!=null)for(h=o.length;h--;)o[h]!=null&&te(o[h]);c||("value"in d&&(h=d.value)!==void 0&&(h!==t.value||s==="progress"&&!h||s==="option"&&h!==v.value)&&W(t,"value",h,v.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==t.checked&&W(t,"checked",h,v.checked,!1))}return t}function fe(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){u.__e(r,n)}}function de(t,e,n){var r,_;if(u.unmount&&u.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||fe(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&de(r[_],e,typeof t.type!="function");n||t.__e==null||te(t.__e),t.__e=t.__d=void 0}function We(t,e,n){return this.constructor(t,n)}function Re(t,e,n){var r,_,o;u.__&&u.__(t,e),_=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],q(e,t=(!r&&n||e).__k=ne(F,null,[t]),_||z,z,e.ownerSVGElement!==void 0,!r&&n?[n]:_?null:e.firstChild?D.call(e.childNodes):null,o,!r&&n?n:_?_.__e:e.firstChild,r),ue(o,t)}D=ee.slice,u={__e:function(t,e,n,r){for(var _,o,l;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(t)),l=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,r||{}),l=_.__d),l)return _.__E=_}catch(c){t=c}throw t}},K=0,O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof t=="function"&&(t=t(N({},n),this.props)),t&&N(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),re(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),re(this))},O.prototype.render=F,M=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I.__r=0;var R,x,he,B=0,pe=[],ve=u.__b,me=u.__r,ge=u.diffed,ye=u.__c,be=u.unmount;function J(t,e){u.__h&&u.__h(x,t,B||e),B=0;var n=x.__H||(x.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function C(t){return B=1,Be(Ce,t)}function Be(t,e,n){var r=J(R++,2);return r.t=t,r.__c||(r.__=[n?n(e):Ce(void 0,e),function(_){var o=r.t(r.__[0],_);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=x),r.__}function E(t,e){var n=J(R++,3);!u.__s&&xe(n.__H,e)&&(n.__=t,n.__H=e,x.__H.__h.push(n))}function we(t){return B=5,je(function(){return{current:t}},[])}function je(t,e){var n=J(R++,7);return xe(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Ze(){for(var t;t=pe.shift();)if(t.__P)try{t.__H.__h.forEach(j),t.__H.__h.forEach(V),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){x=null,ve&&ve(t)},u.__r=function(t){me&&me(t),R=0;var e=(x=t.__c).__H;e&&(e.__h.forEach(j),e.__h.forEach(V),e.__h=[])},u.diffed=function(t){ge&&ge(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(pe.push(e)!==1&&he===u.requestAnimationFrame||((he=u.requestAnimationFrame)||function(n){var r,_=function(){clearTimeout(o),ke&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(_,100);ke&&(r=requestAnimationFrame(_))})(Ze)),x=null},u.__c=function(t,e){e.some(function(n){try{n.__h.forEach(j),n.__h=n.__h.filter(function(r){return!r.__||V(r)})}catch(r){e.some(function(_){_.__h&&(_.__h=[])}),e=[],u.__e(r,n.__v)}}),ye&&ye(t,e)},u.unmount=function(t){be&&be(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{j(r)}catch(_){e=_}}),e&&u.__e(e,n.__v))};var ke=typeof requestAnimationFrame=="function";function j(t){var e=x,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),x=e}function V(t){var e=x;t.__c=t.__(),x=e}function xe(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Ce(t,e){return typeof e=="function"?e(t):e}const qe=(t,e,n=[],r)=>{const _=o=>Re(ne(()=>e(o)),o);ze(t,o=>({connected:()=>_(o),disconnected:()=>r&&r(),attributeChanged:()=>_(o),observedAttributes:n}))};var G;function Le(t){return t.children}G={__e:function(t,e,n,r){for(var _,o,l;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(t)),l=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,r||{}),l=_.__d),l)return _.__E=_}catch(c){t=c}throw t}};var Je=0;function a(t,e,n,r,_){var o,l,c={};for(l in e)l=="ref"?o=e[l]:c[l]=e[l];var p={type:t,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Je,__source:_,__self:r};if(typeof t=="function"&&(o=t.defaultProps))for(l in o)c[l]===void 0&&(c[l]=o[l]);return G.vnode&&G.vnode(p),p}function Ve({cssval:t,handleCloseforlargesize:e,video:n,videoEl:r,handlemuted:_,muted:o,handleChange:l,show:c,buttons:p}){return E(()=>{var f;(f=r.current)==null||f.removeAttribute("controls")},[]),a("div",{style:t,className:"video-container",children:[a("div",{className:"loader-container",children:a("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0",children:a("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:a("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})}),a("div",{className:"video-container-box",children:[a("div",{class:"close-button",onClick:()=>e(),children:a("svg",{style:"margin-left: 0.5px; width: 11px !important; height: 10px !important;",width:"11",height:"100",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M13.0547 12.5938C12.8203 12.8281 12.3906 12.8281 12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.14062 12.8281 0.90625 12.5938C0.671875 12.3594 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.90625 1.34375C0.671875 1.10938 0.671875 0.679688 0.90625 0.445312C1.14062 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.8203 0.210938 13.0547 0.445312C13.2891 0.679688 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3594 13.0547 12.5938Z",fill:"white"})})}),a("button",{className:"sahi",onClick:_,children:[" ",o?a("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",children:[a("use",{class:"ytp-svg-shadow"}),a("use",{class:"ytp-svg-shadow"}),a("defs",{children:[a("clipPath",{id:"ytp-svg-volume-animation-mask",children:[a("path",{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}),a("path",{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}),a("path",{class:"ytp-svg-volume-animation-mover",d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z",transform:"translate(0, 0)"})]}),a("clipPath",{id:"ytp-svg-volume-animation-slash-mask",children:a("path",{class:"ytp-svg-volume-animation-mover",d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z",transform:"translate(0, 0)"})})]}),a("path",{class:"ytp-svg-fill ytp-svg-volume-animation-speaker","clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff",id:"ytp-id-15"}),a("path",{class:"ytp-svg-fill ytp-svg-volume-animation-hider","clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff",id:"ytp-id-16",style:"display: none;"})]}):a("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",children:[a("use",{class:"ytp-svg-shadow"}),a("path",{class:"ytp-svg-fill",d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z",id:"ytp-id-17"})]})," "]}),a("video",{src:n,autoPlay:!0,ref:r,className:"lg-video-for-full",playsInline:!0}),a("div",{className:"large-container-buttonparent",children:c?p.map(f=>f.value?a("button",{className:"overlay-thing-button",children:a("a",{href:f.value,target:"_blank",children:[" ",f.text," "]})}):a("button",{className:"overlay-thing-button",onClick:()=>l(f.next),href:f==null?void 0:f.value,children:f.text})):a("div",{})}),a("h1",{className:"lg-credit",style:{background:"black",paddingTop:"2px",paddingBottom:"2px"},children:["powered by",a("span",{style:{fontSize:"14px"},children:"  F22 Labs"})]})]})]})}function Ge({cmpclose:t,video:e,setinitialsize:n,data:r,base:_,round:o=!1,onlocalchange:l}){const c=we(null);E(()=>{var v;(v=c.current)==null||v.removeAttribute("controls"),console.log(c)},[]);let p="smvideo-container";function f(){console.log(o),o&&(p="smvideo-container-round")}f();function i(){n(!0),l()}return console.log(r),a(Le,{children:a(Le,{children:a("div",{className:"small-video-container-box ",children:[a("div",{className:"close-button cls-sm",children:a("svg",{onClick:t,style:"margin-left: 0.5px; width: 11px !important; height: 10px !important;",width:"5",height:"100",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M13.0547 12.5938C12.8203 12.8281 12.3906 12.8281 12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.14062 12.8281 0.90625 12.5938C0.671875 12.3594 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.90625 1.34375C0.671875 1.10938 0.671875 0.679688 0.90625 0.445312C1.14062 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.8203 0.210938 13.0547 0.445312C13.2891 0.679688 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3594 13.0547 12.5938Z",fill:"white"})})}),a("div",{className:p,"data-customattribute":"red",children:a("video",{src:e,autoPlay:!0,id:"videos",className:o?"sm-video circle ":"sm-video",muted:!0,loop:!0,controls:!0,ref:c})}),a("h1",{className:"widgetheader",onClick:()=>i(),children:r.widgetHeader})]})})})}function Xe(t,e){const[n,r]=C(()=>JSON.parse(window.localStorage.getItem(t))||e);return E(()=>{window.localStorage.setItem(t,JSON.stringify(n))},[n,r]),[n,r]}function Se(){const{innerWidth:t,innerHeight:e}=window;return{width:t,height:e}}function Ke(){const[t,e]=C(Se());return E(()=>{function n(){e(Se())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function Qe({dataURL:t}){let e=window.location.pathname,n;const[r,_]=C({}),[o,l]=C({}),[c,p]=Xe("initialvideo",[]);function f(){let g=JSON.parse(localStorage.getItem("initialvideo"));if(g!=null&&g.length)g.filter(b=>b.base===e?b==null?void 0:b.count:0);else return 0}if(E(()=>{async function g(){var He,Me,Te;let w=await(await fetch(t)).json(),Z=(He=JSON.parse(localStorage.getItem("initialvideo")))==null?void 0:He.filter(De=>De.base===e?De:0);console.log(Z),Ae(w.record),_(w.record),console.log("super",((Me=Z[0])==null?void 0:Me.count)||0),l(w.record[e][((Te=Z[0])==null?void 0:Te.count)||0])}g()},[]),console.log(o),setTimeout(()=>{document.documentElement.style.setProperty("--color-border",o.widthcolor),document.documentElement.style.setProperty("--color-width",`${o.widthsize}px`)},5e3),Object.entries(r).length===0)return a("div",{});const[i,v]=C(!1),[d,s]=C(""),[h,S]=C(!1),[m,y]=C(o==null?void 0:o.startStep),[k,P]=C([]),[L,A]=C(!1),[$e,Ee]=C(!0),[Pe,Ye]=C(0),X=we(null),{height:ct,width:et}=Ke();function Ae(g){let b=Object.keys(g).map(w=>({base:w,count:0}));JSON.parse(localStorage.getItem("initialvideo")).length||p(b)}function tt(g=o==null?void 0:o.startStep){o==null||o.steps.filter(b=>b).filter(b=>{b.key===g&&(Ye(b.answerTime),P(b.answers),s(b.stockAsset.videoUrl))})}E(()=>{const g=setTimeout(()=>{h&&v(!0)},Pe*1e3);return()=>clearInterval(g)},[m,h,Pe]),tt(m);function nt(g){y(g),v(!1)}function ot(){S(!1),v(!1),y(o==null?void 0:o.startStep),Ee(!0)}function rt(){A(!0)}function it(){X.current&&(Ee(g=>!g),X.current.muted=$e)}function _t(){var b,w;let g={transform:`translate(${(b=o==null?void 0:o.custom)==null?void 0:b.x}px  , ${(w=o==null?void 0:o.custom)==null?void 0:w.y}px)`};switch(o==null?void 0:o.widgetPosition){case"bottomRight":n={bottom:"10px",right:"10px",...g};break;case"bottomLeft":n={bottom:"10px",left:"10px",...g};break;case"topRight":n={top:"10px",right:"10px",...g};break;case"topLeft":n={top:"10px",left:"10px",...g};break;default:return n}}if(_t(),o.toshowinmobile&&et<=600)return a("div",{});if(L)return a("div",{});function lt(){Ae(r),p(g=>g.map((w,Z)=>w.base===e&&w.count<r[e].length-1?{...w,count:w.count+1}:w)),console.log("opiop"),f()}return a("div",{className:"small-video-container-box-parent",style:n,children:h?a(Ve,{cssval:n,handleCloseforlargesize:ot,video:d,videoEl:X,handlemuted:it,muted:$e,handleChange:nt,show:i,buttons:k}):a(Ge,{base:e,cmpclose:rt,data:o,setinitialsize:S,video:d,round:o==null?void 0:o.rounded,onlocalchange:lt})})}const at="";qe("f22-plugin",t=>a(Qe,{dataURL:t.getAttribute("dataURL")||""}),["dataURL"],()=>console.log("F22 Plugin cleanup"));let Ne=document.createElement("f22-plugin");Ne.setAttribute("dataUrl","https://api.jsonbin.io/v3/b/63d5087aebd26539d069c0ac"),document.body.append(Ne)})();
