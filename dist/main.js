(()=>{var e={562:e=>{function t(e){return"number"==typeof e||!!/^0x[0-9a-f]+$/i.test(e)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)}function o(e,t){return"constructor"===t&&"function"==typeof e[t]||"__proto__"===t}e.exports=function(e,n){n||(n={});var i={bools:{},strings:{},unknownFn:null};"function"==typeof n.unknown&&(i.unknownFn=n.unknown),"boolean"==typeof n.boolean&&n.boolean?i.allBools=!0:[].concat(n.boolean).filter(Boolean).forEach((function(e){i.bools[e]=!0}));var r={};Object.keys(n.alias||{}).forEach((function(e){r[e]=[].concat(n.alias[e]),r[e].forEach((function(t){r[t]=[e].concat(r[e].filter((function(e){return t!==e})))}))})),[].concat(n.string).filter(Boolean).forEach((function(e){i.strings[e]=!0,r[e]&&(i.strings[r[e]]=!0)}));var s=n.default||{},c={_:[]};Object.keys(i.bools).forEach((function(e){a(e,void 0!==s[e]&&s[e])}));var l=[];function a(e,o,n){if(!n||!i.unknownFn||function(e,t){return i.allBools&&/^--[^=]+$/.test(t)||i.strings[e]||i.bools[e]||r[e]}(e,n)||!1!==i.unknownFn(n)){var s=!i.strings[e]&&t(o)?Number(o):o;u(c,e.split("."),s),(r[e]||[]).forEach((function(e){u(c,e.split("."),s)}))}}function u(e,t,n){for(var r=e,s=0;s<t.length-1;s++){if(o(r,c=t[s]))return;void 0===r[c]&&(r[c]={}),r[c]!==Object.prototype&&r[c]!==Number.prototype&&r[c]!==String.prototype||(r[c]={}),r[c]===Array.prototype&&(r[c]=[]),r=r[c]}var c;o(r,c=t[t.length-1])||(r!==Object.prototype&&r!==Number.prototype&&r!==String.prototype||(r={}),r===Array.prototype&&(r=[]),void 0===r[c]||i.bools[c]||"boolean"==typeof r[c]?r[c]=n:Array.isArray(r[c])?r[c].push(n):r[c]=[r[c],n])}function f(e){return r[e].some((function(e){return i.bools[e]}))}-1!==e.indexOf("--")&&(l=e.slice(e.indexOf("--")+1),e=e.slice(0,e.indexOf("--")));for(var h=0;h<e.length;h++){var d=e[h];if(/^--.+=/.test(d)){var p=d.match(/^--([^=]+)=([\s\S]*)$/),g=p[1],v=p[2];i.bools[g]&&(v="false"!==v),a(g,v,d)}else if(/^--no-.+/.test(d))a(g=d.match(/^--no-(.+)/)[1],!1,d);else if(/^--.+/.test(d))g=d.match(/^--(.+)/)[1],void 0===(_=e[h+1])||/^-/.test(_)||i.bools[g]||i.allBools||r[g]&&f(g)?/^(true|false)$/.test(_)?(a(g,"true"===_,d),h++):a(g,!i.strings[g]||"",d):(a(g,_,d),h++);else if(/^-[^-]+/.test(d)){for(var y=d.slice(1,-1).split(""),b=!1,m=0;m<y.length;m++){var _;if("-"!==(_=d.slice(m+2))){if(/[A-Za-z]/.test(y[m])&&/=/.test(_)){a(y[m],_.split("=")[1],d),b=!0;break}if(/[A-Za-z]/.test(y[m])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(_)){a(y[m],_,d),b=!0;break}if(y[m+1]&&y[m+1].match(/\W/)){a(y[m],d.slice(m+2),d),b=!0;break}a(y[m],!i.strings[y[m]]||"",d)}else a(y[m],_,d)}g=d.slice(-1)[0],b||"-"===g||(!e[h+1]||/^(-|--)[^-]/.test(e[h+1])||i.bools[g]||r[g]&&f(g)?e[h+1]&&/^(true|false)$/.test(e[h+1])?(a(g,"true"===e[h+1],d),h++):a(g,!i.strings[g]||"",d):(a(g,e[h+1],d),h++))}else if(i.unknownFn&&!1===i.unknownFn(d)||c._.push(i.strings._||!t(d)?d:Number(d)),n.stopEarly){c._.push.apply(c._,e.slice(h+1));break}}return Object.keys(s).forEach((function(e){var t,o,n;t=c,o=e.split("."),n=t,o.slice(0,-1).forEach((function(e){n=n[e]||{}})),o[o.length-1]in n||(u(c,e.split("."),s[e]),(r[e]||[]).forEach((function(t){u(c,t.split("."),s[e])})))})),n["--"]?(c["--"]=new Array,l.forEach((function(e){c["--"].push(e)}))):l.forEach((function(e){c._.push(e)})),c}},451:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},i=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,o=e[Symbol.asyncIterator];return o?o.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(o){t[o]=e[o]&&function(t){return new Promise((function(n,i){!function(e,t,o,n){Promise.resolve(n).then((function(t){e({value:t,done:o})}),t)}(n,i,(t=e[o](t)).done,t.value)}))}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NodeCleaner=void 0;const s=r(o(147)),c=o(988);t.NodeCleaner=class{constructor(e){this.targets=[],this.effectiveTargets=[],this.completeTargets=[],this.config=Object.assign({root:".",limit:5,forceMode:!1,suMode:!1,checkMode:!1,version:!1},e)}run(){return n(this,void 0,void 0,(function*(){if(this.config.version)return console.log(`v${this.version}`);console.log(`${this.config.root} 内を検索します。`),this.search(),console.log(""),console.log("○ 検索結果"),console.log(`● ${this.length}件のnode_modulesを検出しました。`),console.log(`● 合計サイズは${this.totalSize}です。`),this.config.checkMode||(yield this.scanning(),this.showResult())}))}search(){return this.targets=c.exec.getTargetDirsWithSize(this.config.root,"node_modules",this.config.suMode),this.effectiveTargets=this.targets,this.config.limit>-1&&(this.effectiveTargets=this.effectiveTargets.slice(0,this.config.limit)),this.targets}scanning(){var e,t,o,r;return n(this,void 0,void 0,(function*(){this.config.limit>-1&&this.config.limit<this.length&&console.log(`● サイズ容量上位${this.config.limit}件のみを対象とします。`),console.log("");try{for(var n,s=!0,l=i(Object.entries(this.effectiveTargets));n=yield l.next(),!(e=n.done);){r=n.value,s=!1;try{const[e,t]=r;this.config.forceMode?this.delete(t):(console.log(`(${Number(e)+1}/${this.effectiveLength}) ${t.path} (${t.formatSize})を削除しますか？`),(yield c.Interactive.confirm("> "))?this.delete(t):console.log("スキップしました。"),console.log(""))}finally{s=!0}}}catch(e){t={error:e}}finally{try{s||e||!(o=l.return)||(yield o.call(l))}finally{if(t)throw t.error}}this.config.forceMode&&console.log("")}))}delete(e){c.exec.delete(e.path,this.config.suMode),this.completeTargets.push(e),console.log(`削除しました。${e.path}`)}showResult(){console.log("○ 削除結果"),console.log(`● 削除対象：${this.length}件（${this.totalSize}）`),console.log(`● 削除済み：${this.completeLength}件（${this.completeTotalSize}）`)}get length(){return this.targets.length}get totalSize(){return(0,c.block2unitByte)(this.targets.reduce(((e,t)=>e+Number(t.size)),0))}get effectiveLength(){return this.effectiveTargets.length}get effectiveTotalSize(){return(0,c.block2unitByte)(this.effectiveTargets.reduce(((e,t)=>e+Number(t.size)),0))}get completeLength(){return this.completeTargets.length}get completeTotalSize(){return(0,c.block2unitByte)(this.completeTargets.reduce(((e,t)=>e+Number(t.size)),0))}get version(){return s.default.version}}},988:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.exec=t.Interactive=t.block2unitByte=void 0;const r=i(o(521)),s=o(81);t.block2unitByte=e=>{let t=512*e,o=0;for(;t>=1e3;)t/=1e3,o++;return`${t.toFixed(1)}${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}`},t.Interactive={confirm:e=>n(void 0,void 0,void 0,(function*(){const o=yield t.Interactive.question(`${e}(y/n): `),n=o.trim().toLowerCase();return["y","n"].includes(n)?"y"===o.trim().toLowerCase():(console.log("y/nで答えてください。"),yield t.Interactive.confirm(e))})),question:e=>{const t=r.default.createInterface({input:process.stdin,output:process.stdout});return new Promise((o=>{t.question(e,(e=>{o(e),t.close()}))}))}},t.exec={getTargetDirsWithSize:(e,o,n=!1)=>{const i=n?"sudo":"";return(0,s.execSync)(`${i} find ${e} -name "${o}" -type d -prune | ${i} xargs du -s | ${i} sort -h -r`).toString().split("\n").filter((e=>e)).map((e=>e.trim())).map((e=>{const[o,n]=e.split("\t");return{size:Number(o),formatSize:(0,t.block2unitByte)(Number(o)),path:n}}))},delete:(e,t=!1)=>{const o=t?"sudo":"";(0,s.execSync)(`${o} rm -rf ${e}`)}}},607:function(e,t,o){"use strict";var n,i=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(451),c=(0,r(o(562)).default)(process.argv.slice(2)),l={root:(null===(n=c._)||void 0===n?void 0:n[0])||".",limit:Number.isInteger(c.l)?c.l:5,forceMode:!!c.force,suMode:!!c.su,checkMode:!!c.check,version:!!c.version||!!c.v};i(void 0,void 0,void 0,(function*(){new s.NodeCleaner(l).run()}))},81:e=>{"use strict";e.exports=require("child_process")},521:e=>{"use strict";e.exports=require("readline")},147:e=>{"use strict";e.exports=JSON.parse('{"name":"node-lib-cleaner","version":"1.0.2","main":"index.js","author":"Tsubasa Ohtsuka <t.ohtsuka@re-tech.net>","license":"MIT","bin":{"node-cleaner":"bin/node-cleaner.js"},"homepage":"https://github.com/tsubasa-develop/node-cleaner","repository":{"type":"git","url":"git@github.com:tsubasa-develop/node-cleaner.git"},"bugs":{"url":"https://github.com/tsubasa-develop/node-cleaner/issues"},"keywords":["node","node_modules","clean","cleaner"],"scripts":{"cli":"cli","start":"node bin/node-cleaner.js","build":"webpack","prepare":"webpack --config webpack.config.js","watch":"webpack --config webpack.dev.js --watch"},"volta":{"node":"18.14.0"},"devDependencies":{"@types/minimist":"^1.2.2","@types/node":"^18.11.18","ts-loader":"^9.4.2","typescript":"^4.9.5","webpack":"^5.75.0","webpack-cli":"^5.0.1","webpack-merge":"^5.8.0"},"dependencies":{"child_process":"^1.0.2","minimist":"^1.2.7","readline":"^1.3.0"}}')}},t={};!function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}(607)})();