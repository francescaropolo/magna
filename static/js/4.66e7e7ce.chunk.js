(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{178:function(n,t,e){"use strict";e.r(t);var r,i=e(41),c=e(14),o=e(0),a=e(1),u=e(15),s=e(55),l=e(42),f=e(16),d=e(57),b=e(7),h=e(80),j=e(2),p=b.b.h2(r||(r=Object(c.a)(["\n    color: ",";\n    text-transform: capitalize;\n"])),(function(n){return n.theme.colors[n.variant]}));t.default=function(n){var t=Object(a.f)().id,e=Object(o.useState)(null),r=Object(i.a)(e,2),c=r[0],b=r[1];Object(o.useEffect)((function(){m()}),[t]);var m=function(){fetch("".concat("http://localhost:1337","/tags/").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){b(n)})).catch((function(n){console.error(n)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{transition:!1}),Object(j.jsxs)(l.a,{children:[c&&Object(j.jsxs)(p,{variant:c.variant,children:[c.name," ",h.a[c.name]]}),((c||{}).ricette||[]).length>0?c.ricette.map((function(n,t){return Object(j.jsx)(u.b,{to:"/recipe/".concat(n.id),children:Object(j.jsx)(d.a,{image:n.photo,inclination:!1})},t)})):Object(j.jsx)(f.a,{})]})]})}},41:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e(46);var i=e(44),c=e(48);function o(n,t){return Object(r.a)(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,i=!1,c=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(u){i=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw c}}return e}}(n,t)||Object(i.a)(n,t)||Object(c.a)()}},42:function(n,t,e){"use strict";var r,i=e(14),c=(e(0),e(7)),o=e(2),a=c.b.div(r||(r=Object(i.a)(["\n    // height: 100%;\n    margin: 0 auto;\n    padding: 0 ",";\n    @media(min-width: ",") {\n        padding: 0;\n        max-width: 90%;\n    }\n    @media(min-width: ",") {\n        max-width: 80%;\n    }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.smQuery}),(function(n){return n.theme.lgQuery}));t.a=function(n){return Object(o.jsx)(a,{children:n.children})}},44:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(47);function i(n,t){if(n){if("string"===typeof n)return Object(r.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(n,t):void 0}}},45:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(49);function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}},46:function(n,t,e){"use strict";function r(n){if(Array.isArray(n))return n}e.d(t,"a",(function(){return r}))},47:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},48:function(n,t,e){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(t,"a",(function(){return r}))},49:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return r}))},53:function(n,t,e){(function(t){var e="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=u||s||Function("return this")(),f=Object.prototype.toString,d=Math.max,b=Math.min,h=function(){return l.Date.now()};function j(n,t,r){var i,c,o,a,u,s,l=0,f=!1,j=!1,g=!0;if("function"!=typeof n)throw new TypeError(e);function O(t){var e=i,r=c;return i=c=void 0,l=t,a=n.apply(r,e)}function v(n){return l=n,u=setTimeout(x,t),f?O(n):a}function y(n){var e=n-s;return void 0===s||e>=t||e<0||j&&n-l>=o}function x(){var n=h();if(y(n))return w(n);u=setTimeout(x,function(n){var e=t-(n-s);return j?b(e,o-(n-l)):e}(n))}function w(n){return u=void 0,g&&i?O(n):(i=c=void 0,a)}function E(){var n=h(),e=y(n);if(i=arguments,c=this,s=n,e){if(void 0===u)return v(s);if(j)return u=setTimeout(x,t),O(s)}return void 0===u&&(u=setTimeout(x,t)),a}return t=m(t)||0,p(r)&&(f=!!r.leading,o=(j="maxWait"in r)?d(m(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g),E.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=s=c=u=void 0},E.flush=function(){return void 0===u?a:w(h())},E}function p(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==f.call(n)}(n))return NaN;if(p(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=p(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var e=c.test(n);return e||o.test(n)?a(n.slice(2),e?2:8):i.test(n)?NaN:+n}n.exports=function(n,t,r){var i=!0,c=!0;if("function"!=typeof n)throw new TypeError(e);return p(r)&&(i="leading"in r?!!r.leading:i,c="trailing"in r?!!r.trailing:c),j(n,t,{leading:i,maxWait:t,trailing:c})}}).call(this,e(22))},55:function(n,t,e){"use strict";var r,i,c,o,a,u,s,l,f,d,b,h,j=e(41),p=e(14),m=e(0),g=e.n(m),O=e(7),v=e(42),y=e(45),x=e(2),w=O.b.h1(r||(r=Object(p.a)(["\n    font-family ",";\n    color: ",";\n    font-size: 4rem;\n    margin: 0;\n    transition: all .2s linear; \n\n    span {\n        color: ","\n    }\n\n    &.scrolled {\n        font-size: 1.3rem;\n    }\n\n    ","\n"])),(function(n){return n.theme.typography.primaryFont}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.yellowOrange}),(function(n){return n.transition?null:"\n        font-size: 1.3rem;\n    "})),E=function(n){return Object(x.jsxs)(w,Object(y.a)(Object(y.a)({},n),{},{children:["Magna",Object(x.jsx)("span",{children:"."})]}))},S=e(15),T=e(53),k=e.n(T),P=O.b.div(i||(i=Object(p.a)(["\n    position: relative;\n    background-color: ",";\n    padding: "," ",";\n    border-radius: 50px;\n    border: 2px solid ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(.3)}),(function(n){return n.theme.spacing(1.5)}),(function(n){return n.theme.colors.orange})),L=O.b.ul(c||(c=Object(p.a)(["\n    padding: ",";\n    margin: 0;\n    position: absolute;\n    top: 40px;\n    right: 0;\n    z-index: 101;\n    background-color: ",";\n    padding: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(1.5)})),z=O.b.li(o||(o=Object(p.a)(["\n    list-style: none;\n"]))),A=O.b.input(a||(a=Object(p.a)(["\n    width: 100px;\n    background-color: ",";\n    border: none;\n    font-family: ",";\n    padding: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.typography.secondaryFont}),(function(n){return n.theme.spacing(1)})),I=function(n){var t=Object(m.useState)(""),e=Object(j.a)(t,2),r=e[0],i=e[1],c=Object(m.useState)(!1),o=Object(j.a)(c,2),a=o[0],u=o[1],s=Object(m.useState)([]),l=Object(j.a)(s,2),f=l[0],d=l[1];Object(m.useEffect)((function(){var n=!0;return r&&""!==r?(u(!0),b(r,(function(t){n&&(u(!1),d(t))}))):""===r&&d([]),function(){n=!1}}),[r]);var b=g.a.useMemo((function(){return k()((function(n,t){fetch("".concat("http://localhost:1337","/ricettes?title_contains=").concat(n),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){t(n)})).catch((function(n){console.error(n)}))}),300)}),[]);return Object(x.jsxs)(P,{children:[Object(x.jsx)(A,{type:"text",placeholder:"Search",value:r,onChange:function(n){i(n.target.value)}}),"\ud83d\udd0d",Object(x.jsx)(L,{children:!a&&f.map((function(n){return Object(x.jsx)(z,{children:Object(x.jsx)(S.b,{to:"/recipe/".concat(n.id),children:n.title})})}))})]})},C=O.b.header(u||(u=Object(p.a)(["\n    width: 100%;\n    padding: "," 0;\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    background-color: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.background})),D=O.b.div(s||(s=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all .8s ease-in-out;\n\n    &.scrolled {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n\n    ","\n"])),(function(n){return n.transition?null:"\n        flex-direction: row;\n        justify-content: space-between;\n    "})),M=O.b.ul(l||(l=Object(p.a)(["\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    margin-right: ",";\n"])),(function(n){return n.theme.spacing(2)})),$=O.b.li(f||(f=Object(p.a)(["\n    list-style: none;\n    margin: ",";\n"])),(function(n){return n.theme.spacing(.5)})),F=Object(O.b)(S.b)(d||(d=Object(p.a)(["\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: .8rem;\n    color: ",";\n    font-weight: 500;\n    transition: all .2s;\n\n    &:hover {\n        color: ",";\n        text-decoration: underline;\n    }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors[n.variant]})),N=Object(O.b)(S.b)(b||(b=Object(p.a)(["\n    text-decoration: none;\n"]))),G=O.b.div(h||(h=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));t.a=function(n){var t=Object(m.useState)([]),e=Object(j.a)(t,2),r=e[0],i=e[1];Object(m.useEffect)((function(){return n.transition&&window.addEventListener("scroll",o),c(),function(){window.removeEventListener("scroll",o)}}),[n.transition]);var c=function(){var n=[],t=["antipasti","primi","secondi","contorni","dolci"];fetch("".concat("http://localhost:1337","/tags"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(e){for(var r=0;r<e.length;r++)for(var c=0;c<t.length;c++)e[r].name===t[c]&&n.push(e[r]);i(n)})).catch((function(n){console.error(n)}))},o=function(n){var t=document.getElementById("magnaLogo"),e=document.getElementById("container");window.scrollY>70?(e.classList.add("scrolled"),t.classList.add("scrolled")):(e.classList.remove("scrolled"),t.classList.remove("scrolled"))};return Object(x.jsx)(C,{children:Object(x.jsx)(v.a,{children:Object(x.jsxs)(D,{id:"container",transition:n.transition,children:[Object(x.jsx)(N,{to:"/",children:Object(x.jsx)(E,{id:"magnaLogo",transition:n.transition})}),Object(x.jsxs)(G,{children:[Object(x.jsx)(M,{children:r.map((function(n,t){return Object(x.jsx)($,{children:Object(x.jsx)(F,{to:"/tags/".concat(n.id),variant:n.variant,children:n.name})},t)}))}),Object(x.jsx)(I,{})]})]})})})}},57:function(n,t,e){"use strict";var r,i,c,o,a=e(14),u=(e(0),e(7)),s=e(2),l=u.b.div(r||(r=Object(a.a)(["\n    width: 400px;\n    display: inline-block;\n    margin-top: ",";\n    ","\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.inclination?"transform: rotate(-5deg);":null})),f=u.b.div(i||(i=Object(a.a)(["\n    background: ",";\n    padding: ",";\n    padding-bottom: ",";\n    box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(8)})),d=u.b.div(c||(c=Object(a.a)(["\n    height: 350px;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n"]))),b=u.b.img(o||(o=Object(a.a)(["\n    width: 370px;\n    height: 370px;\n    object-fit: cover;\n"]))),h=function(n){var t=n.image,e=n.recipe,r=n.inclination;return Object(s.jsx)(l,{inclination:r,children:Object(s.jsx)(f,{children:Object(s.jsx)(d,{children:Object(s.jsx)(b,{src:"".concat("http://localhost:1337").concat(t.url),alt:e})})})})};h.defaultProps={inclination:!1},t.a=h},80:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={antipasti:"\ud83c\udfac",primi:"\ud83c\udf5d",secondi:"\ud83c\udf73",carne:"\ud83e\udd69",pesce:"\ud83d\udc1f",dolci:"\ud83c\udf6a",veggie:"\ud83e\udd66",light:"\ud83e\udd51",contorni:"\ud83e\udd54"}}}]);
//# sourceMappingURL=4.66e7e7ce.chunk.js.map