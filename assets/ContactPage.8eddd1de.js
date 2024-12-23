import{u as me,f as ve,a as ge,g as he,c as ke,b as ye,e as se,h as ae,i as be}from"./use-key-composition.40dc36fe.js";import{r as D,w as Z,n as Q,Q as xe,c as B,k as ue,t as we,o as de,h as J,y as Me,g as ce,O as ne,Z as Se,A as Ce,K as Ve,m as le,ae as Fe,d as Ee,$ as Re,a0 as Ae,a1 as pe,a2 as oe,a7 as N,a5 as L,a4 as X,j as z,ah as Ne}from"./index.b20ace50.js";import{d as Pe}from"./QBtn.6dec9ae3.js";import{h as Te}from"./render.5ea3e601.js";import{b as $e}from"./vm.2790d41b.js";import{Q as qe}from"./QPage.6fc1fc1b.js";import{api as Oe}from"./axios.49694db5.js";import{u as je}from"./vue-i18n.runtime.c2105aca.js";import"./use-dark.1c1f2880.js";const ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},fe=Object.keys(te);fe.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ie=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+fe.join("")+"])|(.)","g"),re=/[.*+?^${}()|[\]\\]/g,w=String.fromCharCode(1),Be={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function _e(e,C,R,M){let u,c,k,A,$,i;const s=D(null),r=D(d());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Z(()=>e.type+e.autogrow,q),Z(()=>e.mask,l=>{if(l!==void 0)I(r.value,!0);else{const a=T(r.value);q(),e.modelValue!==a&&C("update:modelValue",a)}}),Z(()=>e.fillMask+e.reverseFillMask,()=>{s.value===!0&&I(r.value,!0)}),Z(()=>e.unmaskedValue,()=>{s.value===!0&&I(r.value)});function d(){if(q(),s.value===!0){const l=E(T(e.modelValue));return e.fillMask!==!1?ee(l):l}return e.modelValue}function V(l){if(l<u.length)return u.slice(-l);let a="",o=u;const n=o.indexOf(w);if(n!==-1){for(let m=l-o.length;m>0;m--)a+=w;o=o.slice(0,n)+a+o.slice(n)}return o}function q(){if(s.value=e.mask!==void 0&&e.mask.length!==0&&H(),s.value===!1){A=void 0,u="",c="";return}const l=ie[e.mask]===void 0?e.mask:ie[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",o=a.replace(re,"\\$&"),n=[],m=[],f=[];let x=e.reverseFillMask===!0,v="",g="";l.replace(Ie,(S,t,y,_,j)=>{if(_!==void 0){const p=te[_];f.push(p),g=p.negate,x===!0&&(m.push("(?:"+g+"+)?("+p.pattern+"+)?(?:"+g+"+)?("+p.pattern+"+)?"),x=!1),m.push("(?:"+g+"+)?("+p.pattern+")?")}else if(y!==void 0)v="\\"+(y==="\\"?"":y),f.push(y),n.push("([^"+v+"]+)?"+v+"?");else{const p=t!==void 0?t:j;v=p==="\\"?"\\\\\\\\":p.replace(re,"\\\\$&"),f.push(p),n.push("([^"+v+"]+)?"+v+"?")}});const U=new RegExp("^"+n.join("")+"("+(v===""?".":"[^"+v+"]")+"+)?"+(v===""?"":"["+v+"]*")+"$"),K=m.length-1,h=m.map((S,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+o+"*"+S):t===K?new RegExp("^"+S+"("+(g===""?".":g)+"+)?"+(e.reverseFillMask===!0?"$":o+"*")):new RegExp("^"+S));k=f,A=S=>{const t=U.exec(e.reverseFillMask===!0?S:S.slice(0,f.length+1));t!==null&&(S=t.slice(1).join(""));const y=[],_=h.length;for(let j=0,p=S;j<_;j++){const W=h[j].exec(p);if(W===null)break;p=p.slice(W.shift().length),y.push(...W)}return y.length!==0?y.join(""):S},u=f.map(S=>typeof S=="string"?S:w).join(""),c=u.split(w).join(a)}function I(l,a,o){const n=M.value,m=n.selectionEnd,f=n.value.length-m,x=T(l);a===!0&&q();const v=E(x),g=e.fillMask!==!1?ee(v):v,U=r.value!==g;n.value!==g&&(n.value=g),U===!0&&(r.value=g),document.activeElement===n&&Q(()=>{if(g===c){const h=e.reverseFillMask===!0?c.length:0;n.setSelectionRange(h,h,"forward");return}if(o==="insertFromPaste"&&e.reverseFillMask!==!0){const h=n.selectionEnd;let S=m-1;for(let t=$;t<=S&&t<h;t++)u[t]!==w&&S++;P.right(n,S);return}if(["deleteContentBackward","deleteContentForward"].indexOf(o)!==-1){const h=e.reverseFillMask===!0?m===0?g.length>v.length?1:0:Math.max(0,g.length-(g===c?0:Math.min(v.length,f)+1))+1:m;n.setSelectionRange(h,h,"forward");return}if(e.reverseFillMask===!0)if(U===!0){const h=Math.max(0,g.length-(g===c?0:Math.min(v.length,f+1)));h===1&&m===1?n.setSelectionRange(h,h,"forward"):P.rightReverse(n,h)}else{const h=g.length-f;n.setSelectionRange(h,h,"backward")}else if(U===!0){const h=Math.max(0,u.indexOf(w),Math.min(v.length,m)-1);P.right(n,h)}else{const h=m-1;P.right(n,h)}});const K=e.unmaskedValue===!0?T(g):g;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&R(K,!0)}function Y(l,a,o){const n=E(T(l.value));a=Math.max(0,u.indexOf(w),Math.min(n.length,a)),$=a,l.setSelectionRange(a,o,"forward")}const P={left(l,a){const o=u.slice(a-1).indexOf(w)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(u[n]===w){a=n,o===!0&&a++;break}if(n<0&&u[a]!==void 0&&u[a]!==w)return P.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const o=l.value.length;let n=Math.min(o,a+1);for(;n<=o;n++)if(u[n]===w){a=n;break}else u[n-1]===w&&(a=n);if(n>o&&u[a-1]!==void 0&&u[a-1]!==w)return P.left(l,o);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const o=V(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(o[n-1]===w){a=n;break}else if(o[n]===w&&(a=n,n===0))break;if(n<0&&o[a]!==void 0&&o[a]!==w)return P.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const o=l.value.length,n=V(o),m=n.slice(0,a+1).indexOf(w)===-1;let f=Math.min(o,a+1);for(;f<=o;f++)if(n[f-1]===w){a=f,a>0&&m===!0&&a--;break}if(f>o&&n[a-1]!==void 0&&n[a-1]!==w)return P.leftReverse(l,o);l.setSelectionRange(a,a,"forward")}};function b(l){C("click",l),i=void 0}function F(l){if(C("keydown",l),xe(l)===!0||l.altKey===!0)return;const a=M.value,o=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(i=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&i===void 0&&(i=a.selectionDirection==="forward"?o:n);const m=P[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),m(a,i===o?n:o),l.shiftKey){const f=a.selectionStart;a.setSelectionRange(Math.min(i,f),Math.max(i,f),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&o===n?(P.left(a,o),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&o===n&&(P.rightReverse(a,n),a.setSelectionRange(o,a.selectionEnd,"forward"))}function E(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return O(l);const a=k;let o=0,n="";for(let m=0;m<a.length;m++){const f=l[o],x=a[m];if(typeof x=="string")n+=x,f===x&&o++;else if(f!==void 0&&x.regex.test(f))n+=x.transform!==void 0?x.transform(f):f,o++;else return n}return n}function O(l){const a=k,o=u.indexOf(w);let n=l.length-1,m="";for(let f=a.length-1;f>=0&&n!==-1;f--){const x=a[f];let v=l[n];if(typeof x=="string")m=x+m,v===x&&n--;else if(v!==void 0&&x.regex.test(v))do m=(x.transform!==void 0?x.transform(v):v)+m,n--,v=l[n];while(o===f&&v!==void 0&&x.regex.test(v));else return m}return m}function T(l){return typeof l!="string"||A===void 0?typeof l=="number"?A(""+l):l:A(l)}function ee(l){return c.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?c.slice(0,-l.length)+l:l+c.slice(l.length)}return{innerValue:r,hasMask:s,moveCursorForPaste:Y,updateMaskValue:I,onMaskedKeydown:F,onMaskedClick:b}}function De(e,C){function R(){const M=e.modelValue;try{const u="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(M)===M&&("length"in M?Array.from(M):[M]).forEach(c=>{u.items.add(c)}),{files:u.files}}catch{return{files:void 0}}}return C===!0?B(()=>{if(e.type==="file")return R()}):B(R)}var G=ue({name:"QInput",inheritAttrs:!1,props:{...me,...Be,...ve,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ge,"paste","change","keydown","click","animationend"],setup(e,{emit:C,attrs:R}){const{proxy:M}=ce(),{$q:u}=M,c={};let k=NaN,A,$,i=null,s;const r=D(null),H=he(e),{innerValue:d,hasMask:V,moveCursorForPaste:q,updateMaskValue:I,onMaskedKeydown:Y,onMaskedClick:P}=_e(e,C,v,r),b=De(e,!0),F=B(()=>ae(d.value)),E=be(f),O=ke({changeEvent:!0}),T=B(()=>e.type==="textarea"||e.autogrow===!0),ee=B(()=>T.value===!0||["text","search","url","tel","password"].includes(e.type)),l=B(()=>{const t={...O.splitAttrs.listeners.value,onInput:f,onPaste:m,onChange:U,onBlur:K,onFocus:ne};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=E,V.value===!0&&(t.onKeydown=Y,t.onClick=P),e.autogrow===!0&&(t.onAnimationend=x),t}),a=B(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return T.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});Z(()=>e.type,()=>{r.value&&(r.value.value=e.modelValue)}),Z(()=>e.modelValue,t=>{if(V.value===!0){if($===!0&&($=!1,String(t)===k))return;I(t)}else d.value!==t&&(d.value=t,e.type==="number"&&c.hasOwnProperty("value")===!0&&(A===!0?A=!1:delete c.value));e.autogrow===!0&&Q(g)}),Z(()=>e.autogrow,t=>{t===!0?Q(g):r.value!==null&&R.rows>0&&(r.value.style.height="auto")}),Z(()=>e.dense,()=>{e.autogrow===!0&&Q(g)});function o(){se(()=>{const t=document.activeElement;r.value!==null&&r.value!==t&&(t===null||t.id!==O.targetUid.value)&&r.value.focus({preventScroll:!0})})}function n(){r.value!==null&&r.value.select()}function m(t){if(V.value===!0&&e.reverseFillMask!==!0){const y=t.target;q(y,y.selectionStart,y.selectionEnd)}C("paste",t)}function f(t){if(!t||!t.target)return;if(e.type==="file"){C("update:modelValue",t.target.files);return}const y=t.target.value;if(t.target.qComposing===!0){c.value=y;return}if(V.value===!0)I(y,!1,t.inputType);else if(v(y),ee.value===!0&&t.target===document.activeElement){const{selectionStart:_,selectionEnd:j}=t.target;_!==void 0&&j!==void 0&&Q(()=>{t.target===document.activeElement&&y.indexOf(t.target.value)===0&&t.target.setSelectionRange(_,j)})}e.autogrow===!0&&g()}function x(t){C("animationend",t),g()}function v(t,y){s=()=>{i=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==t&&k!==t&&(k=t,y===!0&&($=!0),C("update:modelValue",t),Q(()=>{k===t&&(k=NaN)})),s=void 0},e.type==="number"&&(A=!0,c.value=t),e.debounce!==void 0?(i!==null&&clearTimeout(i),c.value=t,i=setTimeout(s,e.debounce)):s()}function g(){requestAnimationFrame(()=>{const t=r.value;if(t!==null){const y=t.parentNode.style,{scrollTop:_}=t,{overflowY:j,maxHeight:p}=u.platform.is.firefox===!0?{}:window.getComputedStyle(t),W=j!==void 0&&j!=="scroll";W===!0&&(t.style.overflowY="hidden"),y.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",W===!0&&(t.style.overflowY=parseInt(p,10)<t.scrollHeight?"auto":"hidden"),y.marginBottom="",t.scrollTop=_}})}function U(t){E(t),i!==null&&(clearTimeout(i),i=null),s!==void 0&&s(),C("change",t.target.value)}function K(t){t!==void 0&&ne(t),i!==null&&(clearTimeout(i),i=null),s!==void 0&&s(),A=!1,$=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{r.value!==null&&(r.value.value=d.value!==void 0?d.value:"")})}function h(){return c.hasOwnProperty("value")===!0?c.value:d.value!==void 0?d.value:""}we(()=>{K()}),de(()=>{e.autogrow===!0&&g()}),Object.assign(O,{innerValue:d,fieldClass:B(()=>`q-${T.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:B(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:r,emitValue:v,hasValue:F,floatingLabel:B(()=>F.value===!0&&(e.type!=="number"||isNaN(d.value)===!1)||ae(e.displayValue)),getControl:()=>J(T.value===!0?"textarea":"input",{ref:r,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:h()}:b.value}),getShadowControl:()=>J("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(T.value===!0?"":" text-no-wrap")},[J("span",{class:"invisible"},h()),J("span",e.shadowText)])});const S=ye(O);return Object.assign(M,{focus:o,select:n,getNativeElement:()=>r.value}),Me(M,"nativeEl",()=>r.value),S}}),Ke=ue({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:C,emit:R}){const M=ce(),u=D(null);let c=0;const k=[];function A(d){const V=typeof d=="boolean"?d:e.noErrorFocus!==!0,q=++c,I=(b,F)=>{R(`validation${b===!0?"Success":"Error"}`,F)},Y=b=>{const F=b.validate();return typeof F.then=="function"?F.then(E=>({valid:E,comp:b}),E=>({valid:!1,comp:b,err:E})):Promise.resolve({valid:F,comp:b})};return(e.greedy===!0?Promise.all(k.map(Y)).then(b=>b.filter(F=>F.valid!==!0)):k.reduce((b,F)=>b.then(()=>Y(F).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(b=>[b])).then(b=>{if(b===void 0||b.length===0)return q===c&&I(!0),!0;if(q===c){const{comp:F,err:E}=b[0];if(E!==void 0&&console.error(E),I(!1,F),V===!0){const O=b.find(({comp:T})=>typeof T.focus=="function"&&$e(T.$)===!1);O!==void 0&&O.comp.focus()}}return!1})}function $(){c++,k.forEach(d=>{typeof d.resetValidation=="function"&&d.resetValidation()})}function i(d){d!==void 0&&le(d);const V=c+1;A().then(q=>{V===c&&q===!0&&(e.onSubmit!==void 0?R("submit",d):d!==void 0&&d.target!==void 0&&typeof d.target.submit=="function"&&d.target.submit())})}function s(d){d!==void 0&&le(d),R("reset"),Q(()=>{$(),e.autofocus===!0&&e.noResetFocus!==!0&&r()})}function r(){se(()=>{if(u.value===null)return;const d=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),V=>V.tabIndex!==-1);d!=null&&d.focus({preventScroll:!0})})}Se(Fe,{bindComponent(d){k.push(d)},unbindComponent(d){const V=k.indexOf(d);V!==-1&&k.splice(V,1)}});let H=!1;return Ce(()=>{H=!0}),Ve(()=>{H===!0&&e.autofocus===!0&&r()}),de(()=>{e.autofocus===!0&&r()}),Object.assign(M.proxy,{validate:A,resetValidation:$,submit:i,reset:s,focus:r,getValidationComponents:()=>k}),()=>J("form",{class:"q-form",ref:u,onSubmit:i,onReset:s},Te(C.default))}});const Le={class:"q-pa-md"},Ze={class:"row"},Ue={class:"row"},ze={class:"col-12"},Qe={class:"romade-italic text-center gt-md"},He={class:"romade-italic text-center lt-md"},Ye={class:"row items-center"},We={class:"col"},Xe={class:"gt-md"},Ge={href:"https://sociallyradicalguitarist.com",target:"_blank"},Je={class:"md"},et={href:"https://sociallyradicalguitarist.com",target:"_blank"},tt={class:"lt-md text-caption"},at={href:"https://sociallyradicalguitarist.com",target:"_blank"},ft=Ee({__name:"ContactPage",setup(e){let C=Re({firstName:"",lastName:"",email:"",subject:"",message:""});const R=D(""),M=D(""),u=D(""),c=D(""),k=D(""),{t:A}=je(),$=()=>{C={firstName:R.value,lastName:M.value,email:u.value,subject:c.value,message:k.value},Oe.post("/api/v1/contact",C).then(i=>{console.log(i)}).catch(i=>{console.log(i)}),alert(A("formSent")),R.value="",M.value="",u.value="",c.value="",k.value=""};return(i,s)=>(Ae(),pe(qe,{class:"row items-center justify-evenly"},{default:oe(()=>[N("div",Le,[N("div",Ze,[N("div",Ue,[N("div",ze,[N("h1",Qe,L(i.$t("contactTitle")),1),s[5]||(s[5]=N("h3",{class:"romade-italic text-center md"},"Contact the Designer",-1)),N("h4",He,L(i.$t("contactTitle")),1)])]),N("div",Ye,[N("div",We,[N("h6",Xe,[X(L(i.$t("contactNotice"))+" ",1),N("a",Ge,L(i.$t("srgLink")),1),s[6]||(s[6]=X(". "))]),N("p",Je,[X(L(i.$t("contactNotice"))+" ",1),N("a",et,L(i.$t("srgLink")),1),s[7]||(s[7]=X(". "))]),N("span",tt,[X(L(i.$t("contactNotice"))+" ",1),N("a",at,L(i.$t("srgLink")),1),s[8]||(s[8]=X(". "))])])])]),z(Ke,{onSubmit:Ne($,["prevent"]),name:"Contact Form",action:"POST"},{default:oe(()=>[z(G,{outlined:"",modelValue:R.value,"onUpdate:modelValue":s[0]||(s[0]=r=>R.value=r),type:"text",label:i.$t("formFirstName"),required:"","aria-required":"true"},null,8,["modelValue","label"]),z(G,{outlined:"",modelValue:M.value,"onUpdate:modelValue":s[1]||(s[1]=r=>M.value=r),type:"text",label:i.$t("formLastName"),required:"","aria-required":"true"},null,8,["modelValue","label"]),z(G,{outlined:"",modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=r=>u.value=r),type:"email",label:i.$t("formEmail"),required:"","aria-required":"true"},null,8,["modelValue","label"]),z(G,{outlined:"",modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=r=>c.value=r),type:"text",label:i.$t("formSubject"),required:"","aria-required":"true"},null,8,["modelValue","label"]),z(G,{outlined:"",modelValue:k.value,"onUpdate:modelValue":s[4]||(s[4]=r=>k.value=r),type:"textarea",label:i.$t("formMessage"),required:"","aria-required":"true"},null,8,["modelValue","label"]),z(Pe,{"no-caps":"",class:"romade-italic text-h6",type:"submit",label:i.$t("formSubmit"),name:"Submit"},null,8,["label"])]),_:1})])]),_:1}))}});export{ft as default};