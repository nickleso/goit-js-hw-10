!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(n){return n&&n.__esModule?n.default:n}var e={fetchCountries:function(n){console.log(n);var t="".concat("https://restcountries.com/v3.1/name/").concat(n,"?fields=name,capital,population,flags,languages");return console.log(t),fetch(t).then((function(n){return n.json()}))}},o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,p=l||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return p.Date.now()};function m(n){var e=void 0===n?"undefined":t(i)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(i)(n))||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var o=c.test(n);return o||a.test(n)?f(n.slice(2),o?2:8):u.test(n)?NaN:+n}o=function(n,t,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function d(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function _(n){return f=n,c=setTimeout(j,t),l?d(n):u}function h(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=r}function j(){var n=g();if(h(n))return E(n);c=setTimeout(j,function(n){var e=t-(n-a);return s?y(e,r-(n-f)):e}(n))}function E(n){return c=void 0,p&&o?d(n):(o=i=void 0,u)}function w(){var n=g(),e=h(n);if(o=arguments,i=this,a=n,e){if(void 0===c)return _(a);if(s)return c=setTimeout(j,t),d(a)}return void 0===c&&(c=setTimeout(j,t)),u}return t=b(t)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(b(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},w.flush=function(){return void 0===c?u:E(g())},w};var _={inputEl:document.querySelector("#search-box"),listEl:document.querySelector(".country-list"),infoContainerEl:document.querySelector(".country-info")};console.dir(_.inputEl),console.log(_.listEl),console.log(_.infoContainerEl);var h=o((function(){var n=_.inputEl.value;e.fetchCountries(n).then(j).catch(E)}),1e3);function j(n){_.infoContainerEl.insertAdjacentHTML("beforeend",function(n){return n.map((function(n){var t=n.flags.svg,e=n.name.official,o=n.capital,i=n.population,r=n.languages;return'\n      <div class="coutry-info__wrap">\n        <img src='.concat(t,' alt="flag" width="60"></img>\n        <h2 class="country-info__name">').concat(e,'</h2>\n        <p class="country-info__descr">\n          Capital: <span class="country-info__value">').concat(o,'</span>\n        </p>\n        <p class="country-info__descr">\n          Population: <span class="country-info__value">').concat(i,'</span>\n        </p>\n        <p class="country-info__descr">\n          Languages: <span class="country-info__value">').concat(r,"</span>\n        </p>\n      </div>")})).join("")}(n))}function E(){}_.inputEl.addEventListener("input",h)}();
//# sourceMappingURL=index.10405312.js.map
