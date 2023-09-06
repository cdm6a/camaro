
var camaro = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(camaro) {
  camaro = camaro || {};


var g;g||(g=typeof camaro !== 'undefined' ? camaro : {});var aa,ba;g.ready=new Promise(function(a,b){aa=a;ba=b});var ca=Object.assign({},g),da="./this.program",ea="object"==typeof window,u="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,w="",ha,y,z,fs,A,ia;
if(fa)w=u?require("path").dirname(w)+"/":__dirname+"/",ia=()=>{A||(fs=require("fs"),A=require("path"))},ha=function(a,b){ia();a=A.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},z=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},y=(a,b,c)=>{ia();a=A.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",function(a){throw a;
}),g.inspect=function(){return"[Emscripten Module object]"};else if(ea||u)u?w=self.location.href:"undefined"!=typeof document&&document.currentScript&&(w=document.currentScript.src),_scriptDir&&(w=_scriptDir),0!==w.indexOf("blob:")?w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):w="",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(z=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
y=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var B=g.printErr||console.warn.bind(console);Object.assign(g,ca);ca=null;g.thisProgram&&(da=g.thisProgram);var C;g.wasmBinary&&(C=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&D("no native wasm support detected");
var ja,ka=!1,la="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&la)return la.decode(c.subarray(a,b));for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var n=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|n:(f&7)<<18|h<<12|n<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}
function na(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var n=a.charCodeAt(++f);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var pa="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function qa(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&G[c];)++c;c<<=1;if(32<c-a&&pa)return pa.decode(F.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var f=H[a+2*d>>1];if(0==f)break;c+=String.fromCharCode(f)}return c}
function ra(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)H[b>>1]=a.charCodeAt(f),b+=2;H[b>>1]=0;return b-d}function sa(a){return 2*a.length}function ta(a,b){for(var c=0,d="";!(c>=b/4);){var f=I[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}
function ua(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var n=a.charCodeAt(++f);h=65536+((h&1023)<<10)|n&1023}I[b>>2]=h;b+=4;if(b+4>c)break}I[b>>2]=0;return b-d}function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var wa,J,F,H,G,I,K,xa,ya;
function za(){var a=ja.buffer;wa=a;g.HEAP8=J=new Int8Array(a);g.HEAP16=H=new Int16Array(a);g.HEAP32=I=new Int32Array(a);g.HEAPU8=F=new Uint8Array(a);g.HEAPU16=G=new Uint16Array(a);g.HEAPU32=K=new Uint32Array(a);g.HEAPF32=xa=new Float32Array(a);g.HEAPF64=ya=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[];function Ea(){var a=g.preRun.shift();Ba.unshift(a)}var L=0,Fa=null,M=null;
function D(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";B(a);ka=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");ba(a);throw a;}function Ga(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="camaro.wasm";if(!Ga()){var Ha=N;N=g.locateFile?g.locateFile(Ha,w):w+Ha}function Ia(){var a=N;try{if(a==N&&C)return new Uint8Array(C);if(z)return z(a);throw"both async and sync fetching of the wasm failed";}catch(b){D(b)}}
function Ja(){if(!C&&(ea||u)){if("function"==typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(y)return new Promise(function(a,b){y(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Aa;"number"==typeof c?void 0===b.Z?O(c)():O(c)(b.Z):c(void 0===b.Z?null:b.Z)}}}var La=[];function O(a){var b=La[a];b||(a>=La.length&&(La.length=a+1),La[a]=b=Aa.get(a));return b}
function Ma(a){this.W=a-24;this.ja=function(b){K[this.W+4>>2]=b};this.ga=function(b){K[this.W+8>>2]=b};this.ha=function(){I[this.W>>2]=0};this.fa=function(){J[this.W+12>>0]=0};this.ia=function(){J[this.W+13>>0]=0};this.da=function(b,c){this.ea();this.ja(b);this.ga(c);this.ha();this.fa();this.ia()};this.ea=function(){K[this.W+16>>2]=0}}var Na=0,Oa={};function Pa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Qa(a){return this.fromWireType(K[a>>2])}var P={},Q={},Ra={};
function Sa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ta(a,b){a=Sa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ua(a){var b=Error,c=Ta(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Va=void 0;
function Wa(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new Va("Mismatched type converter count");for(var l=0;l<a.length;++l)R(a[l],k[l])}a.forEach(function(k){Ra[k]=b});var f=Array(b.length),h=[],n=0;b.forEach((k,l)=>{Q.hasOwnProperty(k)?f[l]=Q[k]:(h.push(k),P.hasOwnProperty(k)||(P[k]=[]),P[k].push(()=>{f[l]=Q[k];++n;n===h.length&&d(f)}))});0===h.length&&d(f)}
function Xa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ya=void 0;function S(a){for(var b="";F[a];)b+=Ya[F[a++]];return b}var Za=void 0;function U(a){throw new Za(a);}
function R(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||U('type "'+d+'" must have a positive integer typeid pointer');if(Q.hasOwnProperty(a)){if(c.pa)return;U("Cannot register type '"+d+"' twice")}Q[a]=b;delete Ra[a];P.hasOwnProperty(a)&&(b=P[a],delete P[a],b.forEach(f=>f()))}var $a=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ab(a){4<a&&0===--V[a].$&&(V[a]=void 0,$a.push(a))}
var W=a=>{a||U("Cannot use deleted val. handle = "+a);return V[a].value},X=a=>{switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=$a.length?$a.pop():V.length;V[b]={$:1,value:a};return b}};function bb(a,b){switch(b){case 2:return function(c){return this.fromWireType(xa[c>>2])};case 3:return function(c){return this.fromWireType(ya[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function cb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ta(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function db(a,b){var c=g;if(void 0===c[a].R){var d=c[a];c[a]=function(){c[a].R.hasOwnProperty(arguments.length)||U("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].R+")!");return c[a].R[arguments.length].apply(this,arguments)};c[a].R=[];c[a].R[d.ka]=d}}
function eb(a,b,c){g.hasOwnProperty(a)?((void 0===c||void 0!==g[a].R&&void 0!==g[a].R[c])&&U("Cannot register public name '"+a+"' twice"),db(a,a),g.hasOwnProperty(c)&&U("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),g[a].R[c]=b):(g[a]=b,void 0!==c&&(g[a].Ba=c))}function fb(a,b){for(var c=[],d=0;d<a;d++)c.push(I[(b>>2)+d]);return c}
function gb(a,b){var c=[];return function(){c.length=0;Object.assign(c,arguments);if(a.includes("j")){var d=g["dynCall_"+a];d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)}else d=O(b).apply(null,c);return d}}function Y(a,b){a=S(a);var c=a.includes("j")?gb(a,b):O(b);"function"!=typeof c&&U("unknown function pointer with signature "+a+": "+b);return c}var hb=void 0;function ib(a){a=jb(a);var b=S(a);Z(a);return b}
function kb(a,b){function c(h){f[h]||Q[h]||(Ra[h]?Ra[h].forEach(c):(d.push(h),f[h]=!0))}var d=[],f={};b.forEach(c);throw new hb(a+": "+d.map(ib).join([", "]));}function lb(a,b,c){switch(b){case 0:return c?function(d){return J[d]}:function(d){return F[d]};case 1:return c?function(d){return H[d>>1]}:function(d){return G[d>>1]};case 2:return c?function(d){return I[d>>2]}:function(d){return K[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var mb={};
function nb(a){var b=mb[a];return void 0===b?S(a):b}var ob=[];function pb(a){var b=ob.length;ob.push(a);return b}function qb(a,b){var c=Q[a];void 0===c&&U(b+" has unknown type "+ib(a));return c}function rb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=qb(I[(b>>2)+d],"parameter "+d);return c}var sb=[],tb={};
function ub(){if(!vb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:da||"./this.program"},b;for(b in tb)void 0===tb[b]?delete a[b]:a[b]=tb[b];var c=[];for(b in a)c.push(b+"="+a[b]);vb=c}return vb}var vb;function wb(a){return 0===a%4&&(0!==a%100||0===a%400)}var xb=[31,29,31,30,31,30,31,31,30,31,30,31],yb=[31,28,31,30,31,30,31,31,30,31,30,31];
function zb(a,b,c,d){function f(e,m,t){for(e="number"==typeof e?e.toString():e||"";e.length<m;)e=t[0]+e;return e}function h(e,m){return f(e,m,"0")}function n(e,m){function t(E){return 0>E?-1:0<E?1:0}var v;0===(v=t(e.getFullYear()-m.getFullYear()))&&0===(v=t(e.getMonth()-m.getMonth()))&&(v=t(e.getDate()-m.getDate()));return v}function k(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),
0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function l(e){var m=e.U;for(e=new Date((new Date(e.V+1900,0,1)).getTime());0<m;){var t=e.getMonth(),v=(wb(e.getFullYear())?xb:yb)[t];if(m>v-e.getDate())m-=v-e.getDate()+1,e.setDate(1),11>t?e.setMonth(t+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1));else{e.setDate(e.getDate()+m);break}}t=new Date(e.getFullYear()+1,0,4);m=k(new Date(e.getFullYear(),0,
4));t=k(t);return 0>=n(m,e)?0>=n(t,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var p=I[d+40>>2];d={ya:I[d>>2],xa:I[d+4>>2],X:I[d+8>>2],aa:I[d+12>>2],Y:I[d+16>>2],V:I[d+20>>2],S:I[d+24>>2],U:I[d+28>>2],Ca:I[d+32>>2],wa:I[d+36>>2],za:p?p?ma(p):"":""};c=c?ma(c):"";p={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y",
"%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var q in p)c=c.replace(new RegExp(q,"g"),p[q]);var r="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),x="January February March April May June July August September October November December".split(" ");p={"%a":function(e){return r[e.S].substring(0,3)},"%A":function(e){return r[e.S]},"%b":function(e){return x[e.Y].substring(0,3)},
"%B":function(e){return x[e.Y]},"%C":function(e){return h((e.V+1900)/100|0,2)},"%d":function(e){return h(e.aa,2)},"%e":function(e){return f(e.aa,2," ")},"%g":function(e){return l(e).toString().substring(2)},"%G":function(e){return l(e)},"%H":function(e){return h(e.X,2)},"%I":function(e){e=e.X;0==e?e=12:12<e&&(e-=12);return h(e,2)},"%j":function(e){for(var m=0,t=0;t<=e.Y-1;m+=(wb(e.V+1900)?xb:yb)[t++]);return h(e.aa+m,3)},"%m":function(e){return h(e.Y+1,2)},"%M":function(e){return h(e.xa,2)},"%n":function(){return"\n"},
"%p":function(e){return 0<=e.X&&12>e.X?"AM":"PM"},"%S":function(e){return h(e.ya,2)},"%t":function(){return"\t"},"%u":function(e){return e.S||7},"%U":function(e){return h(Math.floor((e.U+7-e.S)/7),2)},"%V":function(e){var m=Math.floor((e.U+7-(e.S+6)%7)/7);2>=(e.S+371-e.U-2)%7&&m++;if(m)53==m&&(t=(e.S+371-e.U)%7,4==t||3==t&&wb(e.V)||(m=1));else{m=52;var t=(e.S+7-e.U-1)%7;(4==t||5==t&&wb(e.V%400-1))&&m++}return h(m,2)},"%w":function(e){return e.S},"%W":function(e){return h(Math.floor((e.U+7-(e.S+6)%
7)/7),2)},"%y":function(e){return(e.V+1900).toString().substring(2)},"%Y":function(e){return e.V+1900},"%z":function(e){e=e.wa;var m=0<=e;e=Math.abs(e)/60;return(m?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.za},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(q in p)c.includes(q)&&(c=c.replace(new RegExp(q,"g"),p[q](d)));c=c.replace(/\0\0/g,"%");q=Ab(c);if(q.length>b)return 0;J.set(q,a);return q.length-1}Va=g.InternalError=Ua("InternalError");
for(var Bb=Array(256),Cb=0;256>Cb;++Cb)Bb[Cb]=String.fromCharCode(Cb);Ya=Bb;Za=g.BindingError=Ua("BindingError");g.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};g.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};hb=g.UnboundTypeError=Ua("UnboundTypeError");function Ab(a){var b=Array(oa(a)+1);na(a,b,0,b.length);return b}
var Eb={b:function(a){return Db(a+24)+24},c:function(a,b,c){(new Ma(a)).da(b,c);Na++;throw a;},B:function(a){var b=Oa[a];delete Oa[a];var c=b.ra,d=b.sa,f=b.ba,h=f.map(n=>n.oa).concat(f.map(n=>n.ua));Wa([a],h,n=>{var k={};f.forEach((l,p)=>{var q=n[p],r=l.ma,x=l.na,e=n[p+f.length],m=l.ta,t=l.va;k[l.la]={read:v=>q.fromWireType(r(x,v)),write:(v,E)=>{var T=[];m(t,v,e.toWireType(T,E));Pa(T)}}});return[{name:b.name,fromWireType:function(l){var p={},q;for(q in k)p[q]=k[q].read(l);d(l);return p},toWireType:function(l,
p){for(var q in k)if(!(q in p))throw new TypeError('Missing field:  "'+q+'"');var r=c();for(q in k)k[q].write(r,p[q]);null!==l&&l.push(d,r);return r},argPackAdvance:8,readValueFromPointer:Qa,T:d}]})},s:function(){},z:function(a,b,c,d,f){var h=Xa(c);b=S(b);R(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var k=J;else if(2===c)k=H;else if(4===c)k=I;else throw new TypeError("Unknown boolean type size: "+
b);return this.fromWireType(k[n>>h])},T:null})},y:function(a,b){b=S(b);R(a,{name:b,fromWireType:function(c){var d=W(c);ab(c);return d},toWireType:function(c,d){return X(d)},argPackAdvance:8,readValueFromPointer:Qa,T:null})},r:function(a,b,c){c=Xa(c);b=S(b);R(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){return f},argPackAdvance:8,readValueFromPointer:bb(b,c),T:null})},o:function(a,b,c,d,f,h){var n=fb(b,c);a=S(a);f=Y(d,f);eb(a,function(){kb("Cannot call "+a+" due to unbound types",
n)},b-1);Wa([],n,function(k){var l=[k[0],null].concat(k.slice(1)),p=k=a,q=f,r=l.length;2>r&&U("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==l[1]&&!1,e=!1,m=1;m<l.length;++m)if(null!==l[m]&&void 0===l[m].T){e=!0;break}var t="void"!==l[0].name,v="",E="";for(m=0;m<r-2;++m)v+=(0!==m?", ":"")+"arg"+m,E+=(0!==m?", ":"")+"arg"+m+"Wired";p="return function "+Sa(p)+"("+v+") {\nif (arguments.length !== "+(r-2)+") {\nthrowBindingError('function "+p+" called with ' + arguments.length + ' arguments, expected "+
(r-2)+" args!');\n}\n";e&&(p+="var destructors = [];\n");var T=e?"destructors":"null";v="throwBindingError invoker fn runDestructors retType classParam".split(" ");q=[U,q,h,Pa,l[0],l[1]];x&&(p+="var thisWired = classParam.toWireType("+T+", this);\n");for(m=0;m<r-2;++m)p+="var arg"+m+"Wired = argType"+m+".toWireType("+T+", arg"+m+"); // "+l[m+2].name+"\n",v.push("argType"+m),q.push(l[m+2]);x&&(E="thisWired"+(0<E.length?", ":"")+E);p+=(t?"var rv = ":"")+"invoker(fn"+(0<E.length?", ":"")+E+");\n";if(e)p+=
"runDestructors(destructors);\n";else for(m=x?1:2;m<l.length;++m)r=1===m?"thisWired":"arg"+(m-2)+"Wired",null!==l[m].T&&(p+=r+"_dtor("+r+"); // "+l[m].name+"\n",v.push(r+"_dtor"),q.push(l[m].T));t&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n");v.push(p+"}\n");l=cb(v).apply(null,q);m=b-1;if(!g.hasOwnProperty(k))throw new Va("Replacing nonexistant public symbol");void 0!==g[k].R&&void 0!==m?g[k].R[m]=l:(g[k]=l,g[k].ka=m);return[]})},h:function(a,b,c,d,f){b=S(b);-1===f&&(f=4294967295);f=
Xa(c);var h=k=>k;if(0===d){var n=32-8*c;h=k=>k<<n>>>n}c=b.includes("unsigned")?function(k,l){return l>>>0}:function(k,l){return l};R(a,{name:b,fromWireType:h,toWireType:c,argPackAdvance:8,readValueFromPointer:lb(b,f,0!==d),T:null})},e:function(a,b,c){function d(h){h>>=2;var n=K;return new f(wa,n[h+1],n[h])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=S(c);R(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{pa:!0})},q:function(a,
b){b=S(b);var c="std::string"===b;R(a,{name:b,fromWireType:function(d){var f=K[d>>2];if(c)for(var h=d+4,n=0;n<=f;++n){var k=d+4+n;if(n==f||0==F[k]){h=h?ma(h,k-h):"";if(void 0===l)var l=h;else l+=String.fromCharCode(0),l+=h;h=k+1}}else{l=Array(f);for(n=0;n<f;++n)l[n]=String.fromCharCode(F[d+4+n]);l=l.join("")}Z(d);return l},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var h="string"==typeof f;h||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||
U("Cannot pass non-string to std::string");var n=(c&&h?()=>oa(f):()=>f.length)(),k=Db(4+n+1);K[k>>2]=n;if(c&&h)na(f,F,k+4,n+1);else if(h)for(h=0;h<n;++h){var l=f.charCodeAt(h);255<l&&(Z(k),U("String has UTF-16 code units that do not fit in 8 bits"));F[k+4+h]=l}else for(h=0;h<n;++h)F[k+4+h]=f[h];null!==d&&d.push(Z,k);return k},argPackAdvance:8,readValueFromPointer:Qa,T:function(d){Z(d)}})},n:function(a,b,c){c=S(c);if(2===b){var d=qa;var f=ra;var h=sa;var n=()=>G;var k=1}else 4===b&&(d=ta,f=ua,h=va,
n=()=>K,k=2);R(a,{name:c,fromWireType:function(l){for(var p=K[l>>2],q=n(),r,x=l+4,e=0;e<=p;++e){var m=l+4+e*b;if(e==p||0==q[m>>k])x=d(x,m-x),void 0===r?r=x:(r+=String.fromCharCode(0),r+=x),x=m+b}Z(l);return r},toWireType:function(l,p){"string"!=typeof p&&U("Cannot pass non-string to C++ string type "+c);var q=h(p),r=Db(4+q+b);K[r>>2]=q>>k;f(p,r+4,q+b);null!==l&&l.push(Z,r);return r},argPackAdvance:8,readValueFromPointer:Qa,T:function(l){Z(l)}})},D:function(a,b,c,d,f,h){Oa[a]={name:S(b),ra:Y(c,d),
sa:Y(f,h),ba:[]}},C:function(a,b,c,d,f,h,n,k,l,p){Oa[a].ba.push({la:S(b),oa:c,ma:Y(d,f),na:h,ua:n,ta:Y(k,l),va:p})},A:function(a,b){b=S(b);R(a,{qa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},l:function(a,b,c,d){a=ob[a];b=W(b);c=nb(c);a(b,c,null,d)},a:ab,m:function(a,b){var c=rb(a,b),d=c[0];b=d.name+"_$"+c.slice(1).map(function(q){return q.name}).join("_")+"$";var f=sb[b];if(void 0!==f)return f;f=["retType"];for(var h=[d],n="",k=0;k<a-1;++k)n+=(0!==k?", ":"")+"arg"+
k,f.push("argType"+k),h.push(c[1+k]);var l="return function "+Sa("methodCaller_"+b)+"(handle, name, destructors, args) {\n",p=0;for(k=0;k<a-1;++k)l+="    var arg"+k+" = argType"+k+".readValueFromPointer(args"+(p?"+"+p:"")+");\n",p+=c[k+1].argPackAdvance;l+="    var rv = handle[name]("+n+");\n";for(k=0;k<a-1;++k)c[k+1].deleteObject&&(l+="    argType"+k+".deleteObject(arg"+k+");\n");d.qa||(l+="    return retType.toWireType(destructors, rv);\n");f.push(l+"};\n");a=cb(f).apply(null,h);f=pb(a);return sb[b]=
f},g:function(a){4<a&&(V[a].$+=1)},j:function(){return X([])},k:function(a){return X(nb(a))},i:function(){return X({})},f:function(a,b,c){a=W(a);b=W(b);c=W(c);a[b]=c},d:function(a,b){a=qb(a,"_emval_take_value");a=a.readValueFromPointer(b);return X(a)},p:function(){D("")},x:function(a,b,c){F.copyWithin(a,b,b+c)},w:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math;d=Math.max(a,d);f=f.min.call(f,2147483648,d+(65536-
d%65536)%65536);a:{try{ja.grow(f-wa.byteLength+65535>>>16);za();var h=1;break a}catch(n){}h=void 0}if(h)return!0}return!1},u:function(a,b){var c=0;ub().forEach(function(d,f){var h=b+c;f=K[a+4*f>>2]=h;for(h=0;h<d.length;++h)J[f++>>0]=d.charCodeAt(h);J[f>>0]=0;c+=d.length+1});return 0},v:function(a,b){var c=ub();K[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});K[b>>2]=d;return 0},t:function(a,b,c,d){return zb(a,b,c,d)}};
(function(){function a(f){g.asm=f.exports;ja=g.asm.E;za();Aa=g.asm.I;Ca.unshift(g.asm.F);L--;g.monitorRunDependencies&&g.monitorRunDependencies(L);0==L&&(null!==Fa&&(clearInterval(Fa),Fa=null),M&&(f=M,M=null,f()))}function b(f){a(f.instance)}function c(f){return Ja().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(f,function(h){B("failed to asynchronously prepare wasm: "+h);D(h)})}var d={a:Eb};L++;g.monitorRunDependencies&&g.monitorRunDependencies(L);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!=typeof WebAssembly.instantiateStreaming||Ga()||N.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.F).apply(null,arguments)};var Db=g._malloc=function(){return(Db=g._malloc=g.asm.G).apply(null,arguments)},Z=g._free=function(){return(Z=g._free=g.asm.H).apply(null,arguments)},jb=g.___getTypeName=function(){return(jb=g.___getTypeName=g.asm.J).apply(null,arguments)};g.___embind_register_native_and_builtin_types=function(){return(g.___embind_register_native_and_builtin_types=g.asm.K).apply(null,arguments)};
g.___cxa_is_pointer_type=function(){return(g.___cxa_is_pointer_type=g.asm.L).apply(null,arguments)};g.dynCall_viijii=function(){return(g.dynCall_viijii=g.asm.M).apply(null,arguments)};g.dynCall_iiiiij=function(){return(g.dynCall_iiiiij=g.asm.N).apply(null,arguments)};g.dynCall_iiiiijj=function(){return(g.dynCall_iiiiijj=g.asm.O).apply(null,arguments)};g.dynCall_iiiiiijj=function(){return(g.dynCall_iiiiiijj=g.asm.P).apply(null,arguments)};var Fb;M=function Gb(){Fb||Hb();Fb||(M=Gb)};
function Hb(){function a(){if(!Fb&&(Fb=!0,g.calledRun=!0,!ka)){Ka(Ca);aa(g);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var b=g.postRun.shift();Da.unshift(b)}Ka(Da)}}if(!(0<L)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ea();Ka(Ba);0<L||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);a()},1)):a())}}g.run=Hb;
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();Hb();


  return camaro.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = camaro;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return camaro; });
else if (typeof exports === 'object')
  exports["camaro"] = camaro;
