const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.B84R0vDT.js","assets/chunks/framework.CgEMdeoU.js"])))=>i.map(i=>d[i]);
import{r as S,j as u,Z as g,H as C,Q as l,n as A,a4 as $,h as P,ay as k,b as ce,i as w,c as x,ad as nt,z as st,a7 as rt,ax as Pe,d as T,g as n,a9 as p,y as X,ag as $e,X as M,at as O,av as de,N as F,O as Le,aw as Te,P as it,t as lt,F as j,Y as I,$ as Q,L as ue,o as f,a1 as ze,a0 as q,E as Ue,ai as oe,D as K,x as me,ap as ct,I as J,M as we,G as pe,ao as Ee,v as ve,W as dt,q as ut,_ as mt,ak as Fe,U as De,a5 as pt,aA as vt,K as he,aB as Oe,am as ht,m as ee,V as ft,az as D,ar as Re,as as se,aq as Z,T as gt}from"./framework.CgEMdeoU.js";const bt=S({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,o)=>(l(),u("span",{class:C(["VPBadge",t.type])},[g(e.$slots,"default",{},()=>[A($(t.text),1)])],2))}}),kt={key:0,class:"VPBackdrop"},yt=S({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,o)=>(l(),P(ce,{name:"fade"},{default:k(()=>[t.show?(l(),u("div",kt)):w("",!0)]),_:1}))}}),_t=x(yt,[["__scopeId","data-v-c79a1216"]]),B=nt;function $t(t,e){let o,a=!1;return()=>{o&&clearTimeout(o),a?o=setTimeout(t,e):(t(),(a=!0)&&setTimeout(()=>a=!1,e))}}function xe(t){return t.startsWith("/")?t:`/${t}`}function je(t){const{pathname:e,search:o,hash:a,protocol:s}=new URL(t,"http://a.com");if(st(t)||t.startsWith("#")||!s.startsWith("http")||!rt(e))return t;const{site:c}=B(),d=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,c.value.cleanUrls?"":".html")}${o}${a}`);return Pe(d)}function ne({correspondingLink:t=!1}={}){const{site:e,localeIndex:o,page:a,theme:s,hash:c}=B(),d=T(()=>{var h,y;return{label:(h=e.value.locales[o.value])==null?void 0:h.label,link:((y=e.value.locales[o.value])==null?void 0:y.link)||(o.value==="root"?"/":`/${o.value}/`)}});return{localeLinks:T(()=>Object.entries(e.value.locales).flatMap(([h,y])=>d.value.label===y.label?[]:{text:y.label,link:wt(y.link||(h==="root"?"/":`/${h}/`),s.value.i18nRouting!==!1&&t,a.value.relativePath.slice(d.value.link.length-1),!e.value.cleanUrls)+c.value})),currentLang:d}}function wt(t,e,o,a){return e?t.replace(/\/$/,"")+xe(o.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):t}const xt={class:"NotFound"},Vt={class:"code"},St={class:"title"},Pt={class:"quote"},Lt={class:"action"},Tt=["href","aria-label"],jt=S({__name:"NotFound",setup(t){const{theme:e}=B(),{currentLang:o}=ne();return(a,s)=>{var c,d,v,h,y;return l(),u("div",xt,[n("p",Vt,$(((c=p(e).notFound)==null?void 0:c.code)??"404"),1),n("h1",St,$(((d=p(e).notFound)==null?void 0:d.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=n("div",{class:"divider"},null,-1)),n("blockquote",Pt,$(((v=p(e).notFound)==null?void 0:v.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),n("div",Lt,[n("a",{class:"link",href:p(Pe)(p(o).link),"aria-label":((h=p(e).notFound)==null?void 0:h.linkLabel)??"go to home"},$(((y=p(e).notFound)==null?void 0:y.linkText)??"Take me home"),9,Tt)])])}}}),Mt=x(jt,[["__scopeId","data-v-d6be1790"]]);function qe(t,e){if(Array.isArray(t))return re(t);if(t==null)return[];e=xe(e);const o=Object.keys(t).sort((s,c)=>c.split("/").length-s.split("/").length).find(s=>e.startsWith(xe(s))),a=o?t[o]:[];return Array.isArray(a)?re(a):re(a.items,a.base)}function Ct(t){const e=[];let o=0;for(const a in t){const s=t[a];if(s.items){o=e.push(s);continue}e[o]||e.push({items:[]}),e[o].items.push(s)}return e}function Bt(t){const e=[];function o(a){for(const s of a)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&o(s.items)}return o(t),e}function Ve(t,e){return Array.isArray(e)?e.some(o=>Ve(t,o)):X(t,e.link)?!0:e.items?Ve(t,e.items):!1}function re(t,e){return[...t].map(o=>{const a={...o},s=a.base||e;return s&&a.link&&(a.link=s+a.link),a.items&&(a.items=re(a.items,s)),a})}function Y(){const{frontmatter:t,page:e,theme:o}=B(),a=$e("(min-width: 960px)"),s=M(!1),c=T(()=>{const H=o.value.sidebar,N=e.value.relativePath;return H?qe(H,N):[]}),d=M(c.value);O(c,(H,N)=>{JSON.stringify(H)!==JSON.stringify(N)&&(d.value=c.value)});const v=T(()=>t.value.sidebar!==!1&&d.value.length>0&&t.value.layout!=="home"),h=T(()=>y?t.value.aside==null?o.value.aside==="left":t.value.aside==="left":!1),y=T(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:o.value.aside!==!1),b=T(()=>v.value&&a.value),r=T(()=>v.value?Ct(d.value):[]);function i(){s.value=!0}function _(){s.value=!1}function V(){s.value?_():i()}return{isOpen:s,sidebar:d,sidebarGroups:r,hasSidebar:v,hasAside:y,leftAside:h,isSidebarEnabled:b,open:i,close:_,toggle:V}}function It(t,e){let o;de(()=>{o=t.value?document.activeElement:void 0}),F(()=>{window.addEventListener("keyup",a)}),Le(()=>{window.removeEventListener("keyup",a)});function a(s){s.key==="Escape"&&t.value&&(e(),o==null||o.focus())}}function Ht(t){const{page:e,hash:o}=B(),a=M(!1),s=T(()=>t.value.collapsed!=null),c=T(()=>!!t.value.link),d=M(!1),v=()=>{d.value=X(e.value.relativePath,t.value.link)};O([e,t,o],v),F(v);const h=T(()=>d.value?!0:t.value.items?Ve(e.value.relativePath,t.value.items):!1),y=T(()=>!!(t.value.items&&t.value.items.length));de(()=>{a.value=!!(s.value&&t.value.collapsed)}),Te(()=>{(d.value||h.value)&&(a.value=!1)});function b(){s.value&&(a.value=!a.value)}return{collapsed:a,collapsible:s,isLink:c,isActiveLink:d,hasActiveLink:h,hasChildren:y,toggle:b}}function At(){const{hasSidebar:t}=Y(),e=$e("(min-width: 960px)"),o=$e("(min-width: 1280px)");return{isAsideEnabled:T(()=>!o.value&&!e.value?!1:t.value?o.value:e.value)}}const Nt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Se=[];function Ge(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Me(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(o=>o.id&&o.hasChildNodes()).map(o=>{const a=Number(o.tagName[1]);return{element:o,title:zt(o),link:"#"+o.id,level:a}});return Ut(e,t)}function zt(t){let e="";for(const o of t.childNodes)if(o.nodeType===1){if(Nt.test(o.className))continue;e+=o.textContent}else o.nodeType===3&&(e+=o.textContent);return e.trim()}function Ut(t,e){if(e===!1)return[];const o=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[a,s]=typeof o=="number"?[o,o]:o==="deep"?[2,6]:o;return Dt(t,a,s)}function Et(t,e){const{isAsideEnabled:o}=At(),a=$t(c,100);let s=null;F(()=>{requestAnimationFrame(c),window.addEventListener("scroll",a)}),it(()=>{d(location.hash)}),Le(()=>{window.removeEventListener("scroll",a)});function c(){if(!o.value)return;const v=window.scrollY,h=window.innerHeight,y=document.body.offsetHeight,b=Math.abs(v+h-y)<1,r=Se.map(({element:_,link:V})=>({link:V,top:Ft(_)})).filter(({top:_})=>!Number.isNaN(_)).sort((_,V)=>_.top-V.top);if(!r.length){d(null);return}if(v<1){d(null);return}if(b){d(r[r.length-1].link);return}let i=null;for(const{link:_,top:V}of r){if(V>v+lt()+4)break;i=_}d(i)}function d(v){s&&s.classList.remove("active"),v==null?s=null:s=t.value.querySelector(`a[href="${decodeURIComponent(v)}"]`);const h=s;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Ft(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function Dt(t,e,o){Se.length=0;const a=[],s=[];return t.forEach(c=>{const d={...c,children:[]};let v=s[s.length-1];for(;v&&v.level>=d.level;)s.pop(),v=s[s.length-1];if(d.element.classList.contains("ignore-header")||v&&"shouldIgnore"in v){s.push({level:d.level,shouldIgnore:!0});return}d.level>o||d.level<e||(Se.push({element:d.element,link:d.link}),v?v.children.push(d):a.push(d),s.push(d))}),a}const Ot=["href","title"],Rt=S({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:o}){const a=o.href.split("#")[1],s=document.getElementById(decodeURIComponent(a));s==null||s.focus({preventScroll:!0})}return(o,a)=>{const s=Q("VPDocOutlineItem",!0);return l(),u("ul",{class:C(["VPDocOutlineItem",t.root?"root":"nested"])},[(l(!0),u(j,null,I(t.headers,({children:c,link:d,title:v})=>(l(),u("li",null,[n("a",{class:"outline-link",href:d,onClick:e,title:v},$(v),9,Ot),c!=null&&c.length?(l(),P(s,{key:0,headers:c},null,8,["headers"])):w("",!0)]))),256))],2)}}}),We=x(Rt,[["__scopeId","data-v-b933a997"]]),qt={class:"content"},Gt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Wt=S({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:o}=B(),a=ze([]);ue(()=>{a.value=Me(e.value.outline??o.value.outline)});const s=M(),c=M();return Et(s,c),(d,v)=>(l(),u("nav",{"aria-labelledby":"doc-outline-aria-label",class:C(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:s},[n("div",qt,[n("div",{class:"outline-marker",ref_key:"marker",ref:c},null,512),n("div",Gt,$(p(Ge)(p(o))),1),f(We,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),Jt=x(Wt,[["__scopeId","data-v-a5bbad30"]]),Yt={class:"VPDocAsideCarbonAds"},Kt=S({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(o,a)=>(l(),u("div",Yt,[f(p(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Xt={class:"VPDocAside"},Qt=S({__name:"VPDocAside",setup(t){const{theme:e}=B();return(o,a)=>(l(),u("div",Xt,[g(o.$slots,"aside-top",{},void 0,!0),g(o.$slots,"aside-outline-before",{},void 0,!0),f(Jt),g(o.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=n("div",{class:"spacer"},null,-1)),g(o.$slots,"aside-ads-before",{},void 0,!0),p(e).carbonAds?(l(),P(Kt,{key:0,"carbon-ads":p(e).carbonAds},null,8,["carbon-ads"])):w("",!0),g(o.$slots,"aside-ads-after",{},void 0,!0),g(o.$slots,"aside-bottom",{},void 0,!0)]))}}),Zt=x(Qt,[["__scopeId","data-v-3f215769"]]);function ea(){const{theme:t,page:e}=B();return T(()=>{const{text:o="Edit this page",pattern:a=""}=t.value.editLink||{};let s;return typeof a=="function"?s=a(e.value):s=a.replace(/:path/g,e.value.filePath),{url:s,text:o}})}function ta(){const{page:t,theme:e,frontmatter:o}=B();return T(()=>{var y,b,r,i,_,V,H,N;const a=qe(e.value.sidebar,t.value.relativePath),s=Bt(a),c=aa(s,z=>z.link.replace(/[?#].*$/,"")),d=c.findIndex(z=>X(t.value.relativePath,z.link)),v=((y=e.value.docFooter)==null?void 0:y.prev)===!1&&!o.value.prev||o.value.prev===!1,h=((b=e.value.docFooter)==null?void 0:b.next)===!1&&!o.value.next||o.value.next===!1;return{prev:v?void 0:{text:(typeof o.value.prev=="string"?o.value.prev:typeof o.value.prev=="object"?o.value.prev.text:void 0)??((r=c[d-1])==null?void 0:r.docFooterText)??((i=c[d-1])==null?void 0:i.text),link:(typeof o.value.prev=="object"?o.value.prev.link:void 0)??((_=c[d-1])==null?void 0:_.link)},next:h?void 0:{text:(typeof o.value.next=="string"?o.value.next:typeof o.value.next=="object"?o.value.next.text:void 0)??((V=c[d+1])==null?void 0:V.docFooterText)??((H=c[d+1])==null?void 0:H.text),link:(typeof o.value.next=="object"?o.value.next.link:void 0)??((N=c[d+1])==null?void 0:N.link)}}})}function aa(t,e){const o=new Set;return t.filter(a=>{const s=e(a);return o.has(s)?!1:o.add(s)})}const G=S({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,o=T(()=>e.tag??(e.href?"a":"span")),a=T(()=>e.href&&Ue.test(e.href)||e.target==="_blank");return(s,c)=>(l(),P(q(o.value),{class:C(["VPLink",{link:t.href,"vp-external-link-icon":a.value,"no-icon":t.noIcon}]),href:t.href?p(je)(t.href):void 0,target:t.target??(a.value?"_blank":void 0),rel:t.rel??(a.value?"noreferrer":void 0)},{default:k(()=>[g(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),oa={class:"VPLastUpdated"},na=["datetime"],sa=S({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:o,lang:a}=B(),s=T(()=>new Date(o.value.lastUpdated)),c=T(()=>s.value.toISOString()),d=M("");return F(()=>{de(()=>{var v,h,y;d.value=new Intl.DateTimeFormat((h=(v=e.value.lastUpdated)==null?void 0:v.formatOptions)!=null&&h.forceLocale?a.value:void 0,((y=e.value.lastUpdated)==null?void 0:y.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(v,h)=>{var y;return l(),u("p",oa,[A($(((y=p(e).lastUpdated)==null?void 0:y.text)||p(e).lastUpdatedText||"Last updated")+": ",1),n("time",{datetime:c.value},$(d.value),9,na)])}}}),ra=x(sa,[["__scopeId","data-v-e98dd255"]]),ia={key:0,class:"VPDocFooter"},la={key:0,class:"edit-info"},ca={key:0,class:"edit-link"},da={key:1,class:"last-updated"},ua={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},ma={class:"pager"},pa=["innerHTML"],va=["innerHTML"],ha={class:"pager"},fa=["innerHTML"],ga=["innerHTML"],ba=S({__name:"VPDocFooter",setup(t){const{theme:e,page:o,frontmatter:a}=B(),s=ea(),c=ta(),d=T(()=>e.value.editLink&&a.value.editLink!==!1),v=T(()=>o.value.lastUpdated),h=T(()=>d.value||v.value||c.value.prev||c.value.next);return(y,b)=>{var r,i,_,V;return h.value?(l(),u("footer",ia,[g(y.$slots,"doc-footer-before",{},void 0,!0),d.value||v.value?(l(),u("div",la,[d.value?(l(),u("div",ca,[f(G,{class:"edit-link-button",href:p(s).url,"no-icon":!0},{default:k(()=>[b[0]||(b[0]=n("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),A(" "+$(p(s).text),1)]),_:1},8,["href"])])):w("",!0),v.value?(l(),u("div",da,[f(ra)])):w("",!0)])):w("",!0),(r=p(c).prev)!=null&&r.link||(i=p(c).next)!=null&&i.link?(l(),u("nav",ua,[b[1]||(b[1]=n("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),n("div",ma,[(_=p(c).prev)!=null&&_.link?(l(),P(G,{key:0,class:"pager-link prev",href:p(c).prev.link},{default:k(()=>{var H;return[n("span",{class:"desc",innerHTML:((H=p(e).docFooter)==null?void 0:H.prev)||"Previous page"},null,8,pa),n("span",{class:"title",innerHTML:p(c).prev.text},null,8,va)]}),_:1},8,["href"])):w("",!0)]),n("div",ha,[(V=p(c).next)!=null&&V.link?(l(),P(G,{key:0,class:"pager-link next",href:p(c).next.link},{default:k(()=>{var H;return[n("span",{class:"desc",innerHTML:((H=p(e).docFooter)==null?void 0:H.next)||"Next page"},null,8,fa),n("span",{class:"title",innerHTML:p(c).next.text},null,8,ga)]}),_:1},8,["href"])):w("",!0)])])):w("",!0)])):w("",!0)}}}),ka=x(ba,[["__scopeId","data-v-e257564d"]]),ya={class:"container"},_a={class:"aside-container"},$a={class:"aside-content"},wa={class:"content"},xa={class:"content-container"},Va={class:"main"},Sa=S({__name:"VPDoc",setup(t){const{theme:e}=B(),o=oe(),{hasSidebar:a,hasAside:s,leftAside:c}=Y(),d=T(()=>o.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(v,h)=>{const y=Q("Content");return l(),u("div",{class:C(["VPDoc",{"has-sidebar":p(a),"has-aside":p(s)}])},[g(v.$slots,"doc-top",{},void 0,!0),n("div",ya,[p(s)?(l(),u("div",{key:0,class:C(["aside",{"left-aside":p(c)}])},[h[0]||(h[0]=n("div",{class:"aside-curtain"},null,-1)),n("div",_a,[n("div",$a,[f(Zt,null,{"aside-top":k(()=>[g(v.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[g(v.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[g(v.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[g(v.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[g(v.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[g(v.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):w("",!0),n("div",wa,[n("div",xa,[g(v.$slots,"doc-before",{},void 0,!0),n("main",Va,[f(y,{class:C(["vp-doc",[d.value,p(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),f(ka,null,{"doc-footer-before":k(()=>[g(v.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),g(v.$slots,"doc-after",{},void 0,!0)])])]),g(v.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Pa=x(Sa,[["__scopeId","data-v-39a288b8"]]),La=S({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,o=T(()=>e.href&&Ue.test(e.href)),a=T(()=>e.tag||(e.href?"a":"button"));return(s,c)=>(l(),P(q(a.value),{class:C(["VPButton",[t.size,t.theme]]),href:t.href?p(je)(t.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:k(()=>[A($(t.text),1)]),_:1},8,["class","href","target","rel"]))}}),Ta=x(La,[["__scopeId","data-v-fa7799d5"]]),ja=["src","alt"],Ma=S({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,o)=>{const a=Q("VPImage",!0);return t.image?(l(),u(j,{key:0},[typeof t.image=="string"||"src"in t.image?(l(),u("img",K({key:0,class:"VPImage"},typeof t.image=="string"?e.$attrs:{...t.image,...e.$attrs},{src:p(Pe)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,ja)):(l(),u(j,{key:1},[f(a,K({class:"dark",image:t.image.dark,alt:t.image.alt},e.$attrs),null,16,["image","alt"]),f(a,K({class:"light",image:t.image.light,alt:t.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):w("",!0)}}}),le=x(Ma,[["__scopeId","data-v-8426fc1a"]]),Ca={class:"container"},Ba={class:"main"},Ia={class:"heading"},Ha=["innerHTML"],Aa=["innerHTML"],Na=["innerHTML"],za={key:0,class:"actions"},Ua={key:0,class:"image"},Ea={class:"image-container"},Fa=S({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=me("hero-image-slot-exists");return(o,a)=>(l(),u("div",{class:C(["VPHero",{"has-image":t.image||p(e)}])},[n("div",Ca,[n("div",Ba,[g(o.$slots,"home-hero-info-before",{},void 0,!0),g(o.$slots,"home-hero-info",{},()=>[n("h1",Ia,[t.name?(l(),u("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Ha)):w("",!0),t.text?(l(),u("span",{key:1,innerHTML:t.text,class:"text"},null,8,Aa)):w("",!0)]),t.tagline?(l(),u("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Na)):w("",!0)],!0),g(o.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(l(),u("div",za,[(l(!0),u(j,null,I(t.actions,s=>(l(),u("div",{key:s.link,class:"action"},[f(Ta,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):w("",!0),g(o.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||p(e)?(l(),u("div",Ua,[n("div",Ea,[a[0]||(a[0]=n("div",{class:"image-bg"},null,-1)),g(o.$slots,"home-hero-image",{},()=>[t.image?(l(),P(le,{key:0,class:"image-src",image:t.image},null,8,["image"])):w("",!0)],!0)])])):w("",!0)])],2))}}),Da=x(Fa,[["__scopeId","data-v-4f9c455b"]]),Oa=S({__name:"VPHomeHero",setup(t){const{frontmatter:e}=B();return(o,a)=>p(e).hero?(l(),P(Da,{key:0,class:"VPHomeHero",name:p(e).hero.name,text:p(e).hero.text,tagline:p(e).hero.tagline,image:p(e).hero.image,actions:p(e).hero.actions},{"home-hero-info-before":k(()=>[g(o.$slots,"home-hero-info-before")]),"home-hero-info":k(()=>[g(o.$slots,"home-hero-info")]),"home-hero-info-after":k(()=>[g(o.$slots,"home-hero-info-after")]),"home-hero-actions-after":k(()=>[g(o.$slots,"home-hero-actions-after")]),"home-hero-image":k(()=>[g(o.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):w("",!0)}}),Ra={class:"box"},qa={key:0,class:"icon"},Ga=["innerHTML"],Wa=["innerHTML"],Ja=["innerHTML"],Ya={key:4,class:"link-text"},Ka={class:"link-text-value"},Xa=S({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,o)=>(l(),P(G,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:k(()=>[n("article",Ra,[typeof t.icon=="object"&&t.icon.wrap?(l(),u("div",qa,[f(le,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(l(),P(le,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(l(),u("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Ga)):w("",!0),n("h2",{class:"title",innerHTML:t.title},null,8,Wa),t.details?(l(),u("p",{key:3,class:"details",innerHTML:t.details},null,8,Ja)):w("",!0),t.linkText?(l(),u("div",Ya,[n("p",Ka,[A($(t.linkText)+" ",1),o[0]||(o[0]=n("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):w("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Qa=x(Xa,[["__scopeId","data-v-a3976bdc"]]),Za={key:0,class:"VPFeatures"},eo={class:"container"},to={class:"items"},ao=S({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,o=T(()=>{const a=e.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,s)=>t.features?(l(),u("div",Za,[n("div",eo,[n("div",to,[(l(!0),u(j,null,I(t.features,c=>(l(),u("div",{key:c.title,class:C(["item",[o.value]])},[f(Qa,{icon:c.icon,title:c.title,details:c.details,link:c.link,"link-text":c.linkText,rel:c.rel,target:c.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):w("",!0)}}),oo=x(ao,[["__scopeId","data-v-a6181336"]]),no=S({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=B();return(o,a)=>p(e).features?(l(),P(oo,{key:0,class:"VPHomeFeatures",features:p(e).features},null,8,["features"])):w("",!0)}}),so=S({__name:"VPHomeContent",setup(t){const{width:e}=ct({initialWidth:0,includeScrollbar:!1});return(o,a)=>(l(),u("div",{class:"vp-doc container",style:J(p(e)?{"--vp-offset":`calc(50% - ${p(e)/2}px)`}:{})},[g(o.$slots,"default",{},void 0,!0)],4))}}),ro=x(so,[["__scopeId","data-v-8e2d4988"]]),io=S({__name:"VPHome",setup(t){const{frontmatter:e,theme:o}=B();return(a,s)=>{const c=Q("Content");return l(),u("div",{class:C(["VPHome",{"external-link-icon-enabled":p(o).externalLinkIcon}])},[g(a.$slots,"home-hero-before",{},void 0,!0),f(Oa,null,{"home-hero-info-before":k(()=>[g(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":k(()=>[g(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":k(()=>[g(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":k(()=>[g(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":k(()=>[g(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),g(a.$slots,"home-hero-after",{},void 0,!0),g(a.$slots,"home-features-before",{},void 0,!0),f(no),g(a.$slots,"home-features-after",{},void 0,!0),p(e).markdownStyles!==!1?(l(),P(ro,{key:0},{default:k(()=>[f(c)]),_:1})):(l(),P(c,{key:1}))],2)}}}),lo=x(io,[["__scopeId","data-v-8b561e3d"]]),co={},uo={class:"VPPage"};function mo(t,e){const o=Q("Content");return l(),u("div",uo,[g(t.$slots,"page-top"),f(o),g(t.$slots,"page-bottom")])}const po=x(co,[["render",mo]]),vo=S({__name:"VPContent",setup(t){const{page:e,frontmatter:o}=B(),{hasSidebar:a}=Y();return(s,c)=>(l(),u("div",{class:C(["VPContent",{"has-sidebar":p(a),"is-home":p(o).layout==="home"}]),id:"VPContent"},[p(e).isNotFound?g(s.$slots,"not-found",{key:0},()=>[f(Mt)],!0):p(o).layout==="page"?(l(),P(po,{key:1},{"page-top":k(()=>[g(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[g(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):p(o).layout==="home"?(l(),P(lo,{key:2},{"home-hero-before":k(()=>[g(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":k(()=>[g(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":k(()=>[g(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":k(()=>[g(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":k(()=>[g(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":k(()=>[g(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[g(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[g(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[g(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):p(o).layout&&p(o).layout!=="doc"?(l(),P(q(p(o).layout),{key:3})):(l(),P(Pa,{key:4},{"doc-top":k(()=>[g(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[g(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[g(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[g(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[g(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[g(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[g(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[g(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[g(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[g(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[g(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ho=x(vo,[["__scopeId","data-v-1428d186"]]),fo={class:"container"},go=["innerHTML"],bo=["innerHTML"],ko=S({__name:"VPFooter",setup(t){const{theme:e,frontmatter:o}=B(),{hasSidebar:a}=Y();return(s,c)=>p(e).footer&&p(o).footer!==!1?(l(),u("footer",{key:0,class:C(["VPFooter",{"has-sidebar":p(a)}])},[n("div",fo,[p(e).footer.message?(l(),u("p",{key:0,class:"message",innerHTML:p(e).footer.message},null,8,go)):w("",!0),p(e).footer.copyright?(l(),u("p",{key:1,class:"copyright",innerHTML:p(e).footer.copyright},null,8,bo)):w("",!0)])],2)):w("",!0)}}),yo=x(ko,[["__scopeId","data-v-e315a0ad"]]);function _o(){const{theme:t,frontmatter:e}=B(),o=ze([]),a=T(()=>o.value.length>0);return ue(()=>{o.value=Me(e.value.outline??t.value.outline)}),{headers:o,hasLocalNav:a}}const $o={class:"menu-text"},wo={class:"header"},xo={class:"outline"},Vo=S({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:o}=B(),a=M(!1),s=M(0),c=M(),d=M();function v(r){var i;(i=c.value)!=null&&i.contains(r.target)||(a.value=!1)}O(a,r=>{if(r){document.addEventListener("click",v);return}document.removeEventListener("click",v)}),we("Escape",()=>{a.value=!1}),ue(()=>{a.value=!1});function h(){a.value=!a.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function y(r){r.target.classList.contains("outline-link")&&(d.value&&(d.value.style.transition="none"),pe(()=>{a.value=!1}))}function b(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(r,i)=>(l(),u("div",{class:"VPLocalNavOutlineDropdown",style:J({"--vp-vh":s.value+"px"}),ref_key:"main",ref:c},[t.headers.length>0?(l(),u("button",{key:0,onClick:h,class:C({open:a.value})},[n("span",$o,$(p(Ge)(p(o))),1),i[0]||(i[0]=n("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(l(),u("button",{key:1,onClick:b},$(p(o).returnToTopLabel||"Return to top"),1)),f(ce,{name:"flyout"},{default:k(()=>[a.value?(l(),u("div",{key:0,ref_key:"items",ref:d,class:"items",onClick:y},[n("div",wo,[n("a",{class:"top-link",href:"#",onClick:b},$(p(o).returnToTopLabel||"Return to top"),1)]),n("div",xo,[f(We,{headers:t.headers},null,8,["headers"])])],512)):w("",!0)]),_:1})],4))}}),So=x(Vo,[["__scopeId","data-v-8a42e2b4"]]),Po={class:"container"},Lo=["aria-expanded"],To={class:"menu-text"},jo=S({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:o}=B(),{hasSidebar:a}=Y(),{headers:s}=_o(),{y:c}=Ee(),d=M(0);F(()=>{d.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ue(()=>{s.value=Me(o.value.outline??e.value.outline)});const v=T(()=>s.value.length===0),h=T(()=>v.value&&!a.value),y=T(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:v.value,fixed:h.value}));return(b,r)=>p(o).layout!=="home"&&(!h.value||p(c)>=d.value)?(l(),u("div",{key:0,class:C(y.value)},[n("div",Po,[p(a)?(l(),u("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:r[0]||(r[0]=i=>b.$emit("open-menu"))},[r[1]||(r[1]=n("span",{class:"vpi-align-left menu-icon"},null,-1)),n("span",To,$(p(e).sidebarMenuLabel||"Menu"),1)],8,Lo)):w("",!0),f(So,{headers:p(s),navHeight:d.value},null,8,["headers","navHeight"])])],2)):w("",!0)}}),Mo=x(jo,[["__scopeId","data-v-a6f0e41e"]]);function Co(){const t=M(!1);function e(){t.value=!0,window.addEventListener("resize",s)}function o(){t.value=!1,window.removeEventListener("resize",s)}function a(){t.value?o():e()}function s(){window.outerWidth>=768&&o()}const c=oe();return O(()=>c.path,o),{isScreenOpen:t,openScreen:e,closeScreen:o,toggleScreen:a}}const Bo={},Io={class:"VPSwitch",type:"button",role:"switch"},Ho={class:"check"},Ao={key:0,class:"icon"};function No(t,e){return l(),u("button",Io,[n("span",Ho,[t.$slots.default?(l(),u("span",Ao,[g(t.$slots,"default",{},void 0,!0)])):w("",!0)])])}const zo=x(Bo,[["render",No],["__scopeId","data-v-1d5665e3"]]),Uo=S({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:o}=B(),a=me("toggle-appearance",()=>{e.value=!e.value}),s=M("");return Te(()=>{s.value=e.value?o.value.lightModeSwitchTitle||"Switch to light theme":o.value.darkModeSwitchTitle||"Switch to dark theme"}),(c,d)=>(l(),P(zo,{title:s.value,class:"VPSwitchAppearance","aria-checked":p(e),onClick:p(a)},{default:k(()=>[...d[0]||(d[0]=[n("span",{class:"vpi-sun sun"},null,-1),n("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Ce=x(Uo,[["__scopeId","data-v-5337faa4"]]),Eo={key:0,class:"VPNavBarAppearance"},Fo=S({__name:"VPNavBarAppearance",setup(t){const{site:e}=B();return(o,a)=>p(e).appearance&&p(e).appearance!=="force-dark"&&p(e).appearance!=="force-auto"?(l(),u("div",Eo,[f(Ce)])):w("",!0)}}),Do=x(Fo,[["__scopeId","data-v-6c893767"]]),Be=M();let Je=!1,ye=0;function Oo(t){const e=M(!1);if(ve){!Je&&Ro(),ye++;const o=O(Be,a=>{var s,c,d;a===t.el.value||(s=t.el.value)!=null&&s.contains(a)?(e.value=!0,(c=t.onFocus)==null||c.call(t)):(e.value=!1,(d=t.onBlur)==null||d.call(t))});Le(()=>{o(),ye--,ye||qo()})}return dt(e)}function Ro(){document.addEventListener("focusin",Ye),Je=!0,Be.value=document.activeElement}function qo(){document.removeEventListener("focusin",Ye)}function Ye(){Be.value=document.activeElement}const Go={class:"VPMenuLink"},Wo=["innerHTML"],Jo=S({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=B();return(o,a)=>(l(),u("div",Go,[f(G,{class:C({active:p(X)(p(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:k(()=>[n("span",{innerHTML:t.item.text},null,8,Wo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),fe=x(Jo,[["__scopeId","data-v-35975db6"]]),Yo={class:"VPMenuGroup"},Ko={key:0,class:"title"},Xo=S({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,o)=>(l(),u("div",Yo,[t.text?(l(),u("p",Ko,$(t.text),1)):w("",!0),(l(!0),u(j,null,I(t.items,a=>(l(),u(j,null,["link"in a?(l(),P(fe,{key:0,item:a},null,8,["item"])):w("",!0)],64))),256))]))}}),Qo=x(Xo,[["__scopeId","data-v-69e747b5"]]),Zo={class:"VPMenu"},en={key:0,class:"items"},tn=S({__name:"VPMenu",props:{items:{}},setup(t){return(e,o)=>(l(),u("div",Zo,[t.items?(l(),u("div",en,[(l(!0),u(j,null,I(t.items,a=>(l(),u(j,{key:JSON.stringify(a)},["link"in a?(l(),P(fe,{key:0,item:a},null,8,["item"])):"component"in a?(l(),P(q(a.component),K({key:1,ref_for:!0},a.props),null,16)):(l(),P(Qo,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):w("",!0),g(e.$slots,"default",{},void 0,!0)]))}}),an=x(tn,[["__scopeId","data-v-b98bc113"]]),on=["aria-expanded","aria-label"],nn={key:0,class:"text"},sn=["innerHTML"],rn={key:1,class:"vpi-more-horizontal icon"},ln={class:"menu"},cn=S({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=M(!1),o=M();Oo({el:o,onBlur:a});function a(){e.value=!1}return(s,c)=>(l(),u("div",{class:"VPFlyout",ref_key:"el",ref:o,onMouseenter:c[1]||(c[1]=d=>e.value=!0),onMouseleave:c[2]||(c[2]=d=>e.value=!1)},[n("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":t.label,onClick:c[0]||(c[0]=d=>e.value=!e.value)},[t.button||t.icon?(l(),u("span",nn,[t.icon?(l(),u("span",{key:0,class:C([t.icon,"option-icon"])},null,2)):w("",!0),t.button?(l(),u("span",{key:1,innerHTML:t.button},null,8,sn)):w("",!0),c[3]||(c[3]=n("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(l(),u("span",rn))],8,on),n("div",ln,[f(an,{items:t.items},{default:k(()=>[g(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Ie=x(cn,[["__scopeId","data-v-cf11d7a2"]]),dn=["href","aria-label","innerHTML"],un=S({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,o=M();F(async()=>{var c;await pe();const s=(c=o.value)==null?void 0:c.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const a=T(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,c)=>(l(),u("a",{ref_key:"el",ref:o,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,dn))}}),mn=x(un,[["__scopeId","data-v-bd121fe5"]]),pn={class:"VPSocialLinks"},vn=S({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,o)=>(l(),u("div",pn,[(l(!0),u(j,null,I(t.links,({link:a,icon:s,ariaLabel:c})=>(l(),P(mn,{key:a,icon:s,link:a,ariaLabel:c},null,8,["icon","link","ariaLabel"]))),128))]))}}),He=x(vn,[["__scopeId","data-v-7bc22406"]]),hn={key:0,class:"group translations"},fn={class:"trans-title"},gn={key:1,class:"group"},bn={class:"item appearance"},kn={class:"label"},yn={class:"appearance-action"},_n={key:2,class:"group"},$n={class:"item social-links"},wn=S({__name:"VPNavBarExtra",setup(t){const{site:e,theme:o}=B(),{localeLinks:a,currentLang:s}=ne({correspondingLink:!0}),c=T(()=>a.value.length&&s.value.label||e.value.appearance||o.value.socialLinks);return(d,v)=>c.value?(l(),P(Ie,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[p(a).length&&p(s).label?(l(),u("div",hn,[n("p",fn,$(p(s).label),1),(l(!0),u(j,null,I(p(a),h=>(l(),P(fe,{key:h.link,item:h},null,8,["item"]))),128))])):w("",!0),p(e).appearance&&p(e).appearance!=="force-dark"&&p(e).appearance!=="force-auto"?(l(),u("div",gn,[n("div",bn,[n("p",kn,$(p(o).darkModeSwitchLabel||"Appearance"),1),n("div",yn,[f(Ce)])])])):w("",!0),p(o).socialLinks?(l(),u("div",_n,[n("div",$n,[f(He,{class:"social-links-list",links:p(o).socialLinks},null,8,["links"])])])):w("",!0)]),_:1})):w("",!0)}}),xn=x(wn,[["__scopeId","data-v-bb2aa2f0"]]),Vn=["aria-expanded"],Sn=S({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,o)=>(l(),u("button",{type:"button",class:C(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:o[0]||(o[0]=a=>e.$emit("click"))},[...o[1]||(o[1]=[n("span",{class:"container"},[n("span",{class:"top"}),n("span",{class:"middle"}),n("span",{class:"bottom"})],-1)])],10,Vn))}}),Pn=x(Sn,[["__scopeId","data-v-e5dd9c1c"]]),Ln=["innerHTML"],Tn=S({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=B();return(o,a)=>(l(),P(G,{class:C({VPNavBarMenuLink:!0,active:p(X)(p(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:k(()=>[n("span",{innerHTML:t.item.text},null,8,Ln)]),_:1},8,["class","href","target","rel","no-icon"]))}}),jn=x(Tn,[["__scopeId","data-v-e56f3d57"]]),Mn=S({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:o}=B(),a=c=>"component"in c?!1:"link"in c?X(o.value.relativePath,c.link,!!e.item.activeMatch):c.items.some(a),s=T(()=>a(e.item));return(c,d)=>(l(),P(Ie,{class:C({VPNavBarMenuGroup:!0,active:p(X)(p(o).relativePath,t.item.activeMatch,!!t.item.activeMatch)||s.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Cn={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Bn=S({__name:"VPNavBarMenu",setup(t){const{theme:e}=B();return(o,a)=>p(e).nav?(l(),u("nav",Cn,[a[0]||(a[0]=n("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(l(!0),u(j,null,I(p(e).nav,s=>(l(),u(j,{key:JSON.stringify(s)},["link"in s?(l(),P(jn,{key:0,item:s},null,8,["item"])):"component"in s?(l(),P(q(s.component),K({key:1,ref_for:!0},s.props),null,16)):(l(),P(Mn,{key:2,item:s},null,8,["item"]))],64))),128))])):w("",!0)}}),In=x(Bn,[["__scopeId","data-v-dc692963"]]);function Hn(t){const{localeIndex:e,theme:o}=B();function a(s){var V,H,N;const c=s.split("."),d=(V=o.value.search)==null?void 0:V.options,v=d&&typeof d=="object",h=v&&((N=(H=d.locales)==null?void 0:H[e.value])==null?void 0:N.translations)||null,y=v&&d.translations||null;let b=h,r=y,i=t;const _=c.pop();for(const z of c){let R=null;const U=i==null?void 0:i[z];U&&(R=i=U);const E=r==null?void 0:r[z];E&&(R=r=E);const W=b==null?void 0:b[z];W&&(R=b=W),U||(i=R),E||(r=R),W||(b=R)}return(b==null?void 0:b[_])??(r==null?void 0:r[_])??(i==null?void 0:i[_])??""}return a}const An=["aria-label"],Nn={class:"DocSearch-Button-Container"},zn={class:"DocSearch-Button-Placeholder"},Ae=S({__name:"VPNavBarSearchButton",setup(t){const o=Hn({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,s)=>(l(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":p(o)("button.buttonAriaLabel")},[n("span",Nn,[s[0]||(s[0]=n("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),n("span",zn,$(p(o)("button.buttonText")),1)]),s[1]||(s[1]=n("span",{class:"DocSearch-Button-Keys"},[n("kbd",{class:"DocSearch-Button-Key"}),n("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,An))}}),Un={class:"VPNavBarSearch"},En={id:"local-search"},Fn={key:1,id:"docsearch"},Dn=S({__name:"VPNavBarSearch",setup(t){const e=ut(()=>mt(()=>import("./VPLocalSearchBox.B84R0vDT.js"),__vite__mapDeps([0,1]))),o=()=>null,{theme:a}=B(),s=M(!1),c=M(!1);F(()=>{});function d(){s.value||(s.value=!0,setTimeout(v,16))}function v(){const r=new Event("keydown");r.key="k",r.metaKey=!0,window.dispatchEvent(r),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||v()},16)}function h(r){const i=r.target,_=i.tagName;return i.isContentEditable||_==="INPUT"||_==="SELECT"||_==="TEXTAREA"}const y=M(!1);we("k",r=>{(r.ctrlKey||r.metaKey)&&(r.preventDefault(),y.value=!0)}),we("/",r=>{h(r)||(r.preventDefault(),y.value=!0)});const b="local";return(r,i)=>{var _;return l(),u("div",Un,[p(b)==="local"?(l(),u(j,{key:0},[y.value?(l(),P(p(e),{key:0,onClose:i[0]||(i[0]=V=>y.value=!1)})):w("",!0),n("div",En,[f(Ae,{onClick:i[1]||(i[1]=V=>y.value=!0)})])],64)):p(b)==="algolia"?(l(),u(j,{key:1},[s.value?(l(),P(p(o),{key:0,algolia:((_=p(a).search)==null?void 0:_.options)??p(a).algolia,onVnodeBeforeMount:i[2]||(i[2]=V=>c.value=!0)},null,8,["algolia"])):w("",!0),c.value?w("",!0):(l(),u("div",Fn,[f(Ae,{onClick:d})]))],64)):w("",!0)])}}}),On=S({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=B();return(o,a)=>p(e).socialLinks?(l(),P(He,{key:0,class:"VPNavBarSocialLinks",links:p(e).socialLinks},null,8,["links"])):w("",!0)}}),Rn=x(On,[["__scopeId","data-v-0394ad82"]]),qn=["href","rel","target"],Gn=["innerHTML"],Wn={key:2},Jn=S({__name:"VPNavBarTitle",setup(t){const{site:e,theme:o}=B(),{hasSidebar:a}=Y(),{currentLang:s}=ne(),c=T(()=>{var h;return typeof o.value.logoLink=="string"?o.value.logoLink:(h=o.value.logoLink)==null?void 0:h.link}),d=T(()=>{var h;return typeof o.value.logoLink=="string"||(h=o.value.logoLink)==null?void 0:h.rel}),v=T(()=>{var h;return typeof o.value.logoLink=="string"||(h=o.value.logoLink)==null?void 0:h.target});return(h,y)=>(l(),u("div",{class:C(["VPNavBarTitle",{"has-sidebar":p(a)}])},[n("a",{class:"title",href:c.value??p(je)(p(s).link),rel:d.value,target:v.value},[g(h.$slots,"nav-bar-title-before",{},void 0,!0),p(o).logo?(l(),P(le,{key:0,class:"logo",image:p(o).logo},null,8,["image"])):w("",!0),p(o).siteTitle?(l(),u("span",{key:1,innerHTML:p(o).siteTitle},null,8,Gn)):p(o).siteTitle===void 0?(l(),u("span",Wn,$(p(e).title),1)):w("",!0),g(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,qn)],2))}}),Yn=x(Jn,[["__scopeId","data-v-1168a8e4"]]),Kn={class:"items"},Xn={class:"title"},Qn=S({__name:"VPNavBarTranslations",setup(t){const{theme:e}=B(),{localeLinks:o,currentLang:a}=ne({correspondingLink:!0});return(s,c)=>p(o).length&&p(a).label?(l(),P(Ie,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:p(e).langMenuLabel||"Change language"},{default:k(()=>[n("div",Kn,[n("p",Xn,$(p(a).label),1),(l(!0),u(j,null,I(p(o),d=>(l(),P(fe,{key:d.link,item:d},null,8,["item"]))),128))])]),_:1},8,["label"])):w("",!0)}}),Zn=x(Qn,[["__scopeId","data-v-88af2de4"]]),es={class:"wrapper"},ts={class:"container"},as={class:"title"},os={class:"content"},ns={class:"content-body"},ss=S({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:o}=Ee(),{hasSidebar:a}=Y(),{frontmatter:s}=B(),c=M({});return Te(()=>{c.value={"has-sidebar":a.value,home:s.value.layout==="home",top:o.value===0,"screen-open":e.isScreenOpen}}),(d,v)=>(l(),u("div",{class:C(["VPNavBar",c.value])},[n("div",es,[n("div",ts,[n("div",as,[f(Yn,null,{"nav-bar-title-before":k(()=>[g(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[g(d.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),n("div",os,[n("div",ns,[g(d.$slots,"nav-bar-content-before",{},void 0,!0),f(Dn,{class:"search"}),f(In,{class:"menu"}),f(Zn,{class:"translations"}),f(Do,{class:"appearance"}),f(Rn,{class:"social-links"}),f(xn,{class:"extra"}),g(d.$slots,"nav-bar-content-after",{},void 0,!0),f(Pn,{class:"hamburger",active:t.isScreenOpen,onClick:v[0]||(v[0]=h=>d.$emit("toggle-screen"))},null,8,["active"])])])])]),v[1]||(v[1]=n("div",{class:"divider"},[n("div",{class:"divider-line"})],-1))],2))}}),rs=x(ss,[["__scopeId","data-v-6aa21345"]]),is={key:0,class:"VPNavScreenAppearance"},ls={class:"text"},cs=S({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:o}=B();return(a,s)=>p(e).appearance&&p(e).appearance!=="force-dark"&&p(e).appearance!=="force-auto"?(l(),u("div",is,[n("p",ls,$(p(o).darkModeSwitchLabel||"Appearance"),1),f(Ce)])):w("",!0)}}),ds=x(cs,[["__scopeId","data-v-b44890b2"]]),us=["innerHTML"],ms=S({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=me("close-screen");return(o,a)=>(l(),P(G,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:p(e)},{default:k(()=>[n("span",{innerHTML:t.item.text},null,8,us)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ps=x(ms,[["__scopeId","data-v-df37e6dd"]]),vs=["innerHTML"],hs=S({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=me("close-screen");return(o,a)=>(l(),P(G,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:p(e)},{default:k(()=>[n("span",{innerHTML:t.item.text},null,8,vs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ke=x(hs,[["__scopeId","data-v-3e9c20e4"]]),fs={class:"VPNavScreenMenuGroupSection"},gs={key:0,class:"title"},bs=S({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,o)=>(l(),u("div",fs,[t.text?(l(),u("p",gs,$(t.text),1)):w("",!0),(l(!0),u(j,null,I(t.items,a=>(l(),P(Ke,{key:a.text,item:a},null,8,["item"]))),128))]))}}),ks=x(bs,[["__scopeId","data-v-8133b170"]]),ys=["aria-controls","aria-expanded"],_s=["innerHTML"],$s=["id"],ws={key:0,class:"item"},xs={key:1,class:"item"},Vs={key:2,class:"group"},Ss=S({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,o=M(!1),a=T(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){o.value=!o.value}return(c,d)=>(l(),u("div",{class:C(["VPNavScreenMenuGroup",{open:o.value}])},[n("button",{class:"button","aria-controls":a.value,"aria-expanded":o.value,onClick:s},[n("span",{class:"button-text",innerHTML:t.text},null,8,_s),d[0]||(d[0]=n("span",{class:"vpi-plus button-icon"},null,-1))],8,ys),n("div",{id:a.value,class:"items"},[(l(!0),u(j,null,I(t.items,v=>(l(),u(j,{key:JSON.stringify(v)},["link"in v?(l(),u("div",ws,[f(Ke,{item:v},null,8,["item"])])):"component"in v?(l(),u("div",xs,[(l(),P(q(v.component),K({ref_for:!0},v.props,{"screen-menu":""}),null,16))])):(l(),u("div",Vs,[f(ks,{text:v.text,items:v.items},null,8,["text","items"])]))],64))),128))],8,$s)],2))}}),Ps=x(Ss,[["__scopeId","data-v-b9ab8c58"]]),Ls={key:0,class:"VPNavScreenMenu"},Ts=S({__name:"VPNavScreenMenu",setup(t){const{theme:e}=B();return(o,a)=>p(e).nav?(l(),u("nav",Ls,[(l(!0),u(j,null,I(p(e).nav,s=>(l(),u(j,{key:JSON.stringify(s)},["link"in s?(l(),P(ps,{key:0,item:s},null,8,["item"])):"component"in s?(l(),P(q(s.component),K({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(l(),P(Ps,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):w("",!0)}}),js=S({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=B();return(o,a)=>p(e).socialLinks?(l(),P(He,{key:0,class:"VPNavScreenSocialLinks",links:p(e).socialLinks},null,8,["links"])):w("",!0)}}),Ms={class:"list"},Cs=S({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:o}=ne({correspondingLink:!0}),a=M(!1);function s(){a.value=!a.value}return(c,d)=>p(e).length&&p(o).label?(l(),u("div",{key:0,class:C(["VPNavScreenTranslations",{open:a.value}])},[n("button",{class:"title",onClick:s},[d[0]||(d[0]=n("span",{class:"vpi-languages icon lang"},null,-1)),A(" "+$(p(o).label)+" ",1),d[1]||(d[1]=n("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),n("ul",Ms,[(l(!0),u(j,null,I(p(e),v=>(l(),u("li",{key:v.link,class:"item"},[f(G,{class:"link",href:v.link},{default:k(()=>[A($(v.text),1)]),_:2},1032,["href"])]))),128))])],2)):w("",!0)}}),Bs=x(Cs,[["__scopeId","data-v-858fe1a4"]]),Is={class:"container"},Hs=S({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=M(null),o=Fe(ve?document.body:null);return(a,s)=>(l(),P(ce,{name:"fade",onEnter:s[0]||(s[0]=c=>o.value=!0),onAfterLeave:s[1]||(s[1]=c=>o.value=!1)},{default:k(()=>[t.open?(l(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[n("div",Is,[g(a.$slots,"nav-screen-content-before",{},void 0,!0),f(Ts,{class:"menu"}),f(Bs,{class:"translations"}),f(ds,{class:"appearance"}),f(js,{class:"social-links"}),g(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):w("",!0)]),_:3}))}}),As=x(Hs,[["__scopeId","data-v-f2779853"]]),Ns={key:0,class:"VPNav"},zs=S({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:o,toggleScreen:a}=Co(),{frontmatter:s}=B(),c=T(()=>s.value.navbar!==!1);return De("close-screen",o),de(()=>{ve&&document.documentElement.classList.toggle("hide-nav",!c.value)}),(d,v)=>c.value?(l(),u("header",Ns,[f(rs,{"is-screen-open":p(e),onToggleScreen:p(a)},{"nav-bar-title-before":k(()=>[g(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[g(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[g(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[g(d.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),f(As,{open:p(e)},{"nav-screen-content-before":k(()=>[g(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[g(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):w("",!0)}}),Us=x(zs,[["__scopeId","data-v-ae24b3ad"]]),Es=["role","tabindex"],Fs={key:1,class:"items"},Ds=S({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:o,collapsible:a,isLink:s,isActiveLink:c,hasActiveLink:d,hasChildren:v,toggle:h}=Ht(T(()=>e.item)),y=T(()=>v.value?"section":"div"),b=T(()=>s.value?"a":"div"),r=T(()=>v.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),i=T(()=>s.value?void 0:"button"),_=T(()=>[[`level-${e.depth}`],{collapsible:a.value},{collapsed:o.value},{"is-link":s.value},{"is-active":c.value},{"has-active":d.value}]);function V(N){"key"in N&&N.key!=="Enter"||!e.item.link&&h()}function H(){e.item.link&&h()}return(N,z)=>{const R=Q("VPSidebarItem",!0);return l(),P(q(y.value),{class:C(["VPSidebarItem",_.value])},{default:k(()=>[t.item.text?(l(),u("div",K({key:0,class:"item",role:i.value},pt(t.item.items?{click:V,keydown:V}:{},!0),{tabindex:t.item.items&&0}),[z[1]||(z[1]=n("div",{class:"indicator"},null,-1)),t.item.link?(l(),P(G,{key:0,tag:b.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:k(()=>[(l(),P(q(r.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(l(),P(q(r.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(l(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:H,onKeydown:vt(H,["enter"]),tabindex:"0"},[...z[0]||(z[0]=[n("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):w("",!0)],16,Es)):w("",!0),t.item.items&&t.item.items.length?(l(),u("div",Fs,[t.depth<5?(l(!0),u(j,{key:0},I(t.item.items,U=>(l(),P(R,{key:U.text,item:U,depth:t.depth+1},null,8,["item","depth"]))),128)):w("",!0)])):w("",!0)]),_:1},8,["class"])}}}),Os=x(Ds,[["__scopeId","data-v-b3fd67f8"]]),Rs=S({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=M(!0);let o=null;return F(()=>{o=setTimeout(()=>{o=null,e.value=!1},300)}),he(()=>{o!=null&&(clearTimeout(o),o=null)}),(a,s)=>(l(!0),u(j,null,I(t.items,c=>(l(),u("div",{key:c.text,class:C(["group",{"no-transition":e.value}])},[f(Os,{item:c,depth:0},null,8,["item"])],2))),128))}}),qs=x(Rs,[["__scopeId","data-v-c40bc020"]]),Gs={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ws=S({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:o}=Y(),a=t,s=M(null),c=Fe(ve?document.body:null);O([a,s],()=>{var v;a.open?(c.value=!0,(v=s.value)==null||v.focus()):c.value=!1},{immediate:!0,flush:"post"});const d=M(0);return O(e,()=>{d.value+=1},{deep:!0}),(v,h)=>p(o)?(l(),u("aside",{key:0,class:C(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:s,onClick:h[0]||(h[0]=Oe(()=>{},["stop"]))},[h[2]||(h[2]=n("div",{class:"curtain"},null,-1)),n("nav",Gs,[h[1]||(h[1]=n("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),g(v.$slots,"sidebar-nav-before",{},void 0,!0),(l(),P(qs,{items:p(e),key:d.value},null,8,["items"])),g(v.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):w("",!0)}}),Js=x(Ws,[["__scopeId","data-v-319d5ca6"]]),Ys=S({__name:"VPSkipLink",setup(t){const{theme:e}=B(),o=oe(),a=M();O(()=>o.path,()=>a.value.focus());function s({target:c}){const d=document.getElementById(decodeURIComponent(c.hash).slice(1));if(d){const v=()=>{d.removeAttribute("tabindex"),d.removeEventListener("blur",v)};d.setAttribute("tabindex","-1"),d.addEventListener("blur",v),d.focus(),window.scrollTo(0,0)}}return(c,d)=>(l(),u(j,null,[n("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),n("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},$(p(e).skipToContentLabel||"Skip to content"),1)],64))}}),Ks=x(Ys,[["__scopeId","data-v-0b0ada53"]]),Xs=S({__name:"Layout",setup(t){const{isOpen:e,open:o,close:a}=Y(),s=oe();O(()=>s.path,a),It(e,a);const{frontmatter:c}=B(),d=ht(),v=T(()=>!!d["home-hero-image"]);return De("hero-image-slot-exists",v),(h,y)=>{const b=Q("Content");return p(c).layout!==!1?(l(),u("div",{key:0,class:C(["Layout",p(c).pageClass])},[g(h.$slots,"layout-top",{},void 0,!0),f(Ks),f(_t,{class:"backdrop",show:p(e),onClick:p(a)},null,8,["show","onClick"]),f(Us,null,{"nav-bar-title-before":k(()=>[g(h.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[g(h.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[g(h.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[g(h.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[g(h.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[g(h.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),f(Mo,{open:p(e),onOpenMenu:p(o)},null,8,["open","onOpenMenu"]),f(Js,{open:p(e)},{"sidebar-nav-before":k(()=>[g(h.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[g(h.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),f(ho,null,{"page-top":k(()=>[g(h.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[g(h.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[g(h.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[g(h.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":k(()=>[g(h.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":k(()=>[g(h.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":k(()=>[g(h.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":k(()=>[g(h.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":k(()=>[g(h.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[g(h.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[g(h.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[g(h.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[g(h.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[g(h.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[g(h.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[g(h.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[g(h.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[g(h.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[g(h.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[g(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[g(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[g(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[g(h.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),f(yo),g(h.$slots,"layout-bottom",{},void 0,!0)],2)):(l(),P(b,{key:1}))}}}),Qs=x(Xs,[["__scopeId","data-v-5d98c3a5"]]),Xe={Layout:Qs,enhanceApp:({app:t})=>{t.component("Badge",bt)}},Zs={__name:"ClickableBox",props:{title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0}},setup(t){const e=t,o=()=>{window.open(e.link,"_blank")};return(a,s)=>(l(),u("div",{class:"clickable-box",onClick:o},[n("h3",null,$(t.title),1),n("p",null,$(t.description),1)]))}},er=x(Zs,[["__scopeId","data-v-37670120"]]),tr="/rahul_kewat.png",ar={class:"rk-hero"},or={class:"rk-hero__inner"},nr={class:"rk-hero__content rk-reveal"},sr={class:"rk-hero__title"},rr={class:"rk-hero__typer"},ir={class:"rk-hero__typer-text"},lr={__name:"HeroSection",setup(t){const e=["a freelance mentor.","a six-figure consultant.","a product builder.","a creator economist."],o=M("");let a=null,s=0,c=0,d=!1;const v=()=>{const h=e[s];if(d)c--,o.value=h.slice(0,c),c===0&&(d=!1,s=(s+1)%e.length);else if(c++,o.value=h.slice(0,c),c===h.length){d=!0,a=setTimeout(v,1500);return}a=setTimeout(v,d?35:70)};return F(()=>{typeof window<"u"&&(a=setTimeout(v,400))}),he(()=>{a&&clearTimeout(a)}),(h,y)=>(l(),u("section",ar,[y[7]||(y[7]=n("div",{class:"rk-hero__bg","aria-hidden":"true"},[n("div",{class:"rk-hero__orb rk-hero__orb--1"}),n("div",{class:"rk-hero__orb rk-hero__orb--2"}),n("div",{class:"rk-hero__orb rk-hero__orb--3"})],-1)),n("div",or,[n("div",nr,[y[4]||(y[4]=n("div",{class:"rk-hero__pill"},[n("span",{class:"rk-hero__dot"}),A(" Available for select freelance projects ")],-1)),n("h1",sr,[y[1]||(y[1]=A(" Hi, I'm ",-1)),y[2]||(y[2]=n("span",{class:"rk-grad-text"},"Rahul Kewat",-1)),y[3]||(y[3]=n("br",null,null,-1)),n("span",rr,[n("span",ir,$(o.value),1),y[0]||(y[0]=n("span",{class:"rk-hero__caret"},null,-1))])]),y[5]||(y[5]=ee('<p class="rk-hero__lede" data-v-6dca9b5a> I help ambitious freelancers, founders, and creators turn their craft into a six-figure business. Practical playbooks, real client wins, zero fluff. </p><div class="rk-hero__cta" data-v-6dca9b5a><a class="rk-btn rk-btn--primary" href="https://topmate.io/rahulkewat/1185547" target="_blank" rel="noopener" data-v-6dca9b5a><span data-v-6dca9b5a>Book a 1:1 call</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" data-v-6dca9b5a><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6dca9b5a></path></svg></a><a class="rk-btn rk-btn--ghost" href="/freelancing/" data-v-6dca9b5a> Read the playbook </a></div><div class="rk-hero__meta" data-v-6dca9b5a><div class="rk-hero__meta-item" data-v-6dca9b5a><strong data-v-6dca9b5a>$100k+</strong><span data-v-6dca9b5a>earned freelancing</span></div><div class="rk-hero__meta-divider" data-v-6dca9b5a></div><div class="rk-hero__meta-item" data-v-6dca9b5a><strong data-v-6dca9b5a>50+</strong><span data-v-6dca9b5a>clients shipped</span></div><div class="rk-hero__meta-divider" data-v-6dca9b5a></div><div class="rk-hero__meta-item" data-v-6dca9b5a><strong data-v-6dca9b5a>7+ yrs</strong><span data-v-6dca9b5a>in the trenches</span></div></div>',3))]),y[6]||(y[6]=ee('<div class="rk-hero__visual rk-reveal" data-delay="150" data-v-6dca9b5a><div class="rk-hero__portrait" data-v-6dca9b5a><div class="rk-hero__portrait-glow" data-v-6dca9b5a></div><img src="'+tr+'" alt="Rahul Kewat" loading="eager" data-v-6dca9b5a><div class="rk-hero__badge rk-hero__badge--top" data-v-6dca9b5a><span data-v-6dca9b5a>⚡</span> Top Rated Plus </div><div class="rk-hero__badge rk-hero__badge--bottom" data-v-6dca9b5a><span data-v-6dca9b5a>🌍</span> Working with 12+ countries </div></div></div>',1))]),y[8]||(y[8]=n("div",{class:"rk-hero__scroll","aria-hidden":"true"},[n("span",null,"scroll"),n("div",{class:"rk-hero__scroll-line"})],-1))]))}},cr=x(lr,[["__scopeId","data-v-6dca9b5a"]]),dr={class:"rk-stats rk-section"},ur=["data-delay"],mr=["innerHTML"],pr={class:"rk-stat__value"},vr={class:"rk-stat__num"},hr={class:"rk-stat__label"},fr={__name:"StatsSection",setup(t){const e=[{label:"Earned freelancing",value:100,prefix:"$",suffix:"k+",bg:"linear-gradient(135deg, #8b5cf6, #06b6d4)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'},{label:"Clients served globally",value:50,suffix:"+",bg:"linear-gradient(135deg, #ec4899, #f59e0b)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'},{label:"Years of experience",value:7,suffix:"+",bg:"linear-gradient(135deg, #06b6d4, #22c55e)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},{label:"Countries worked with",value:12,suffix:"+",bg:"linear-gradient(135deg, #f59e0b, #ec4899)",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'}],o=ft(e.map(()=>0)),a=M(null);let s=null,c=!1;const d=h=>h>=1e3?`${(h/1e3).toFixed(1)}k`:Math.floor(h).toString(),v=()=>{if(c)return;c=!0;const h=1600,y=performance.now(),b=i=>1-Math.pow(1-i,3),r=i=>{const _=i-y,V=Math.min(_/h,1),H=b(V);e.forEach((N,z)=>{o[z]=N.value*H}),V<1?requestAnimationFrame(r):e.forEach((N,z)=>o[z]=N.value)};requestAnimationFrame(r)};return F(()=>{if(!(typeof window>"u")){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach((h,y)=>o[y]=h.value);return}s=new IntersectionObserver(h=>{h.forEach(y=>{y.isIntersecting&&v()})},{threshold:.3}),a.value&&s.observe(a.value)}}),he(()=>{s&&s.disconnect()}),(h,y)=>(l(),u("section",dr,[y[0]||(y[0]=ee('<div class="rk-stats__head rk-reveal" data-v-ceb6d3a9><span class="rk-section__eyebrow" data-v-ceb6d3a9>By the numbers</span><h2 class="rk-section__title" data-v-ceb6d3a9> Real outcomes,<br data-v-ceb6d3a9><span class="rk-grad-text" data-v-ceb6d3a9>not vanity metrics.</span></h2><p class="rk-section__lede" data-v-ceb6d3a9> Years of shipping for clients across continents — distilled into a body of work that speaks louder than slogans. </p></div>',1)),n("div",{ref_key:"gridRef",ref:a,class:"rk-stats__grid"},[(l(),u(j,null,I(e,(b,r)=>n("div",{key:b.label,class:"rk-card rk-stat rk-reveal","data-delay":r*100},[n("div",{class:"rk-stat__icon",style:J({background:b.bg})},[n("span",{innerHTML:b.icon},null,8,mr)],4),n("div",pr,[n("span",null,$(b.prefix||""),1),n("span",vr,$(d(o[r])),1),n("span",null,$(b.suffix||""),1)]),n("div",hr,$(b.label),1)],8,ur)),64))],512)]))}},gr=x(fr,[["__scopeId","data-v-ceb6d3a9"]]),br={class:"rk-bento rk-section"},kr={class:"rk-bento__grid"},yr=["href","target","rel","data-delay"],_r=["innerHTML"],$r={class:"rk-bento__title"},wr={class:"rk-bento__desc"},xr={__name:"BentoGrid",setup(t){const e=[{title:"Freelancing Playbook",desc:"A 50-lesson course distilling 7 years of client work, pricing tactics, and proposals that actually close.",link:"/freelancing/",span:"is-tall",bg:"linear-gradient(135deg, #8b5cf6, #6366f1)",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'},{title:"1:1 Mentorship",desc:"Book a call. Bring your bottleneck. Walk away with a plan.",link:"https://topmate.io/rahulkewat/1185547",external:!0,bg:"linear-gradient(135deg, #ec4899, #f59e0b)",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'},{title:"Free Website Builder",desc:"Build a stunning portfolio in 5 minutes. No login. Download & host anywhere.",link:"/free-tools/website-builder",bg:"linear-gradient(135deg, #06b6d4, #22c55e)",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'},{title:"Personal Brand",desc:"Build a brand that earns you opportunities while you sleep — content, positioning, and proof.",link:"/freelancing/building-a-personal-brand",span:"is-wide",bg:"linear-gradient(135deg, #f59e0b, #ef4444)",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'},{title:"Pricing & Proposals",desc:"Stop trading hours. Package outcomes. Charge what you're worth.",link:"/freelancing/pricing-your-services-right",bg:"linear-gradient(135deg, #6366f1, #ec4899)",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>'},{title:"Scale & Systems",desc:"From solo hustle to 6-figure business — operations, hiring, and offers.",link:"/freelancing/scailing-your-freelancing-income",bg:"linear-gradient(135deg, #22c55e, #06b6d4)",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'}];return(o,a)=>(l(),u("section",br,[a[2]||(a[2]=ee('<div class="rk-bento__head rk-reveal" data-v-d550c647><span class="rk-section__eyebrow" data-v-d550c647>What I do</span><h2 class="rk-section__title" data-v-d550c647> Everything you need to <span class="rk-grad-text" data-v-d550c647>go pro</span>. </h2><p class="rk-section__lede" data-v-d550c647> From mindset to systems to high-leverage offers — a complete operating system for running freelance &amp; solo businesses that compound. </p></div>',1)),n("div",kr,[(l(),u(j,null,I(e,(s,c)=>n("a",{key:s.title,href:s.link,target:s.external?"_blank":"_self",rel:s.external?"noopener":null,class:C(["rk-bento__card rk-card rk-reveal",s.span]),"data-delay":c*90},[n("div",{class:"rk-bento__icon",style:J({background:s.bg})},[n("span",{innerHTML:s.icon},null,8,_r)],4),n("h3",$r,$(s.title),1),n("p",wr,$(s.desc),1),a[0]||(a[0]=n("span",{class:"rk-bento__arrow","aria-hidden":"true"},[n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[n("path",{d:"M7 17L17 7M17 7H8M17 7v9",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),a[1]||(a[1]=n("div",{class:"rk-bento__shine","aria-hidden":"true"},null,-1))],10,yr)),64))])]))}},Vr=x(xr,[["__scopeId","data-v-d550c647"]]),Sr={class:"rk-projects rk-section"},Pr={class:"rk-projects__list"},Lr=["data-delay"],Tr={class:"rk-project__year"},jr={class:"rk-project__emoji"},Mr={class:"rk-project__body"},Cr={class:"rk-project__tags"},Br={class:"rk-project__title"},Ir={class:"rk-project__desc"},Hr={class:"rk-project__meta"},Ar={class:"rk-project__role"},Nr={class:"rk-project__result"},zr={__name:"ProjectShowcase",setup(t){const e=[{title:"SaaS Onboarding Revamp",desc:"Redesigned activation flow for a B2B SaaS — cut time-to-value by 40% and lifted week-1 retention by 18%.",tags:["Product","UX","Conversion"],year:"2025",emoji:"🚀",role:"Product consultant",result:"+18% retention",gradient:"linear-gradient(135deg, #8b5cf6, #ec4899)"},{title:"Content Engine for a Solopreneur",desc:"Built a repeatable LinkedIn + newsletter system. Grew audience from 2k to 32k in under 6 months.",tags:["Brand","Content","Growth"],year:"2024",emoji:"📈",role:"Brand strategist",result:"16x audience",gradient:"linear-gradient(135deg, #06b6d4, #22c55e)"},{title:"Marketplace MVP",desc:"Took a two-sided marketplace from sketch to launch in 9 weeks. Stripe-powered, fully serverless.",tags:["Engineering","Stripe","Serverless"],year:"2024",emoji:"🛠️",role:"Tech lead",result:"Launched in 9 wks",gradient:"linear-gradient(135deg, #f59e0b, #ef4444)"},{title:"Cohort-based Course",desc:"Designed and delivered a 6-week freelancing cohort. NPS of 78, ~$60k in revenue across two batches.",tags:["Education","Cohort","Operations"],year:"2023",emoji:"🎓",role:"Course creator",result:"NPS 78",gradient:"linear-gradient(135deg, #6366f1, #06b6d4)"}];return(o,a)=>(l(),u("section",Sr,[a[1]||(a[1]=ee('<div class="rk-projects__head rk-reveal" data-v-61929c56><span class="rk-section__eyebrow" data-v-61929c56>Selected work</span><h2 class="rk-section__title" data-v-61929c56> Projects that <span class="rk-grad-text" data-v-61929c56>moved the needle.</span></h2><p class="rk-section__lede" data-v-61929c56> A glimpse into recent collaborations — from scrappy MVPs to production systems serving thousands of users. </p></div>',1)),n("div",Pr,[(l(),u(j,null,I(e,(s,c)=>n("article",{key:s.title,class:"rk-project rk-card rk-reveal","data-delay":c*100},[n("div",{class:"rk-project__media",style:J({background:s.gradient})},[a[0]||(a[0]=n("div",{class:"rk-project__media-pattern"},null,-1)),n("div",Tr,$(s.year),1),n("div",jr,$(s.emoji),1)],4),n("div",Mr,[n("div",Cr,[(l(!0),u(j,null,I(s.tags,d=>(l(),u("span",{key:d,class:"rk-project__tag"},$(d),1))),128))]),n("h3",Br,$(s.title),1),n("p",Ir,$(s.desc),1),n("div",Hr,[n("span",Ar,$(s.role),1),n("span",Nr,$(s.result),1)])])],8,Lr)),64))])]))}},Ur=x(zr,[["__scopeId","data-v-61929c56"]]),Er={class:"rk-testi rk-section"},Fr={class:"rk-testi__marquee","aria-hidden":"false"},Dr={class:"rk-testi__track"},Or={class:"rk-testi__quote"},Rr={class:"rk-testi__person"},qr={class:"rk-testi__meta"},Gr={__name:"TestimonialsMarquee",setup(t){const e=[{name:"Aarav Mehta",role:"Founder, Indie SaaS",initials:"AM",bg:"linear-gradient(135deg, #8b5cf6, #06b6d4)",quote:"Rahul gave me the structure I'd been missing. Within 8 weeks I went from inconsistent gigs to a steady $8k/month pipeline."},{name:"Priya Sharma",role:"Freelance designer",initials:"PS",bg:"linear-gradient(135deg, #ec4899, #f59e0b)",quote:"His proposals framework alone tripled my close rate. Worth every rupee, ten times over."},{name:"Daniel Cooper",role:"CTO, Stealth startup",initials:"DC",bg:"linear-gradient(135deg, #06b6d4, #22c55e)",quote:"Sharp, calm, and incredibly practical. Rahul helped us ship our MVP faster than I thought possible."},{name:"Lina Park",role:"Solo creator",initials:"LP",bg:"linear-gradient(135deg, #f59e0b, #ef4444)",quote:"I finally feel like a business owner instead of a busy contractor. The mindset shift alone was worth it."},{name:"Marco Bianchi",role:"Agency founder",initials:"MB",bg:"linear-gradient(135deg, #6366f1, #ec4899)",quote:"Rahul's frameworks helped me confidently raise rates by 60%. None of my best clients flinched."}],o=T(()=>[...e,...e]);return(a,s)=>(l(),u("section",Er,[s[1]||(s[1]=n("div",{class:"rk-testi__head rk-reveal"},[n("span",{class:"rk-section__eyebrow"},"Kind words"),n("h2",{class:"rk-section__title"},[A(" From folks I've "),n("span",{class:"rk-grad-text"},"worked with.")])],-1)),n("div",Fr,[n("div",Dr,[(l(!0),u(j,null,I(o.value,(c,d)=>(l(),u("article",{key:d,class:"rk-testi__card rk-card"},[s[0]||(s[0]=n("div",{class:"rk-testi__quote-mark"},'"',-1)),n("p",Or,$(c.quote),1),n("div",Rr,[n("div",{class:"rk-testi__avatar",style:J({background:c.bg})},$(c.initials),5),n("div",qr,[n("strong",null,$(c.name),1),n("span",null,$(c.role),1)])])]))),128))])])]))}},Wr=x(Gr,[["__scopeId","data-v-6ccac370"]]),Jr={class:"rk-stack rk-section"},Yr=["data-reverse"],Kr={class:"rk-stack__track"},Xr={class:"rk-stack__chip-icon"},Qr={__name:"TechStack",setup(t){const e=[{name:"Vue 3",icon:"🟢"},{name:"VitePress",icon:"⚡"},{name:"TypeScript",icon:"🔷"},{name:"Node.js",icon:"🟩"},{name:"Tailwind",icon:"🎨"},{name:"Figma",icon:"✨"},{name:"Stripe",icon:"💳"},{name:"Notion",icon:"📓"}],o=[{name:"PostgreSQL",icon:"🐘"},{name:"Cloudflare",icon:"☁️"},{name:"GitHub",icon:"🐙"},{name:"Linear",icon:"📐"},{name:"OpenAI",icon:"🤖"},{name:"Slack",icon:"💬"},{name:"ClickUp",icon:"🗂️"},{name:"Loom",icon:"🎥"}];return(a,s)=>(l(),u("section",Jr,[s[0]||(s[0]=n("div",{class:"rk-stack__head rk-reveal"},[n("span",{class:"rk-section__eyebrow"},"Stack & tools"),n("h2",{class:"rk-section__title"},[A(" Tools I use to "),n("span",{class:"rk-grad-text"},"ship fast.")])],-1)),(l(!0),u(j,null,I([e,o],(c,d)=>(l(),u("div",{class:"rk-stack__marquee",key:d,"data-reverse":d===1?"true":"false"},[n("div",Kr,[(l(!0),u(j,null,I([...c,...c],(v,h)=>(l(),u("div",{key:h,class:"rk-stack__chip"},[n("span",Xr,$(v.icon),1),n("span",null,$(v.name),1)]))),128))])],8,Yr))),128))]))}},Zr=x(Qr,[["__scopeId","data-v-4b2168b0"]]),ei={class:"rk-cta rk-section rk-section--narrow"},ti={class:"rk-cta__card rk-card rk-reveal"},ai={class:"rk-cta__content"},oi={type:"submit"},ni={key:0},si={key:1},ri={__name:"CallToAction",setup(t){const e=M(""),o=M(!1),a=()=>{e.value&&(o.value=!0,setTimeout(()=>{o.value=!1,e.value=""},3e3))};return(s,c)=>(l(),u("section",ei,[n("div",ti,[c[5]||(c[5]=n("div",{class:"rk-cta__bg","aria-hidden":"true"},[n("div",{class:"rk-cta__orb rk-cta__orb--1"}),n("div",{class:"rk-cta__orb rk-cta__orb--2"})],-1)),n("div",ai,[c[1]||(c[1]=n("span",{class:"rk-section__eyebrow"},"Ready when you are",-1)),c[2]||(c[2]=n("h2",{class:"rk-cta__title"},[A(" Let's turn your craft into a "),n("span",{class:"rk-grad-text"},"six-figure business.")],-1)),c[3]||(c[3]=n("p",{class:"rk-cta__lede"}," One conversation can change the trajectory of your career. Book a 1:1 call or grab the free playbook — start where you stand. ",-1)),n("form",{class:"rk-cta__form",onSubmit:Oe(a,["prevent"])},[D(n("input",{"onUpdate:modelValue":c[0]||(c[0]=d=>e.value=d),type:"email",required:"",placeholder:"you@yourcraft.com","aria-label":"Your email address"},null,512),[[Re,e.value]]),n("button",oi,[o.value?(l(),u("span",si,"Welcome aboard ✨")):(l(),u("span",ni,"Get the playbook"))])],32),c[4]||(c[4]=n("p",{class:"rk-cta__fineprint"}," No spam. Unsubscribe in one click. By signing up you'll get monthly field notes from the freelance trenches. ",-1))])])]))}},ii=x(ri,[["__scopeId","data-v-82ac5f12"]]);function li(t=".rk-modern-home"){let e=null;const o=()=>{if(typeof window>"u")return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=(document.querySelector(t)||document).querySelectorAll(".rk-reveal");if(a){c.forEach(d=>d.classList.add("is-visible"));return}e=new IntersectionObserver(d=>{d.forEach(v=>{if(v.isIntersecting){const h=v.target.getAttribute("data-delay");h&&(v.target.style.transitionDelay=`${h}ms`),v.target.classList.add("is-visible"),e.unobserve(v.target)}})},{threshold:.12,rootMargin:"0px 0px -10% 0px"}),c.forEach(d=>e.observe(d))};F(()=>{requestAnimationFrame(o)}),he(()=>{e&&e.disconnect()})}const ci={class:"rk-modern-home"},Qe={__name:"ModernHome",setup(t){return li(".rk-modern-home"),(e,o)=>(l(),u("div",ci,[o[0]||(o[0]=n("div",{class:"rk-grid-pattern","aria-hidden":"true"},null,-1)),f(cr),f(gr),f(Vr),f(Ur),f(Wr),f(Zr),f(ii)]))}},di="/rahulkewat_logo.png",ui={class:"rk-footer"},mi={class:"rk-footer__inner"},pi={class:"rk-footer__brand"},vi={class:"rk-footer__socials"},hi=["href","aria-label"],fi=["innerHTML"],gi={class:"rk-footer__cols"},bi=["href","target","rel"],ki={class:"rk-footer__bottom"},yi={__name:"SiteFooter",setup(t){const e=new Date().getFullYear(),o=[{label:"Upwork",href:"https://www.upwork.com/freelancers/~017e44b615de910457",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12c1.5 3 4.5 3 6 0"/></svg>'},{label:"YouTube",href:"https://www.youtube.com/@irahulkewat",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>'},{label:"LinkedIn",href:"https://www.linkedin.com/in/rahulkewat/",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>'},{label:"GitHub",href:"https://github.com/rahul-kewat",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>'}],a=[{title:"Explore",links:[{label:"Home",href:"/"},{label:"Free tools",href:"/free-tools/"},{label:"Freelancing playbook",href:"/freelancing/"},{label:"Best tools",href:"/best-tools/"}]},{title:"Work with me",links:[{label:"Book a 1:1 call",href:"https://topmate.io/rahulkewat/1185547",external:!0},{label:"Consulting",href:"/services/markdown-examples"},{label:"Workshops",href:"/services/api-examples"}]},{title:"Connect",links:[{label:"LinkedIn",href:"https://www.linkedin.com/in/rahulkewat/",external:!0},{label:"YouTube",href:"https://www.youtube.com/@irahulkewat",external:!0},{label:"GitHub",href:"https://github.com/rahul-kewat",external:!0}]}];return(s,c)=>(l(),u("footer",ui,[n("div",mi,[n("div",pi,[c[0]||(c[0]=n("div",{class:"rk-footer__logo"},[n("img",{src:di,alt:"Rahul Kewat logo"}),n("span",null,"Rahul Kewat")],-1)),c[1]||(c[1]=n("p",null," Helping freelancers, founders, and creators build a craft-led business they're proud of. ",-1)),n("div",vi,[(l(),u(j,null,I(o,d=>n("a",{key:d.label,href:d.href,target:"_blank",rel:"noopener","aria-label":d.label},[n("span",{innerHTML:d.icon},null,8,fi)],8,hi)),64))])]),n("div",gi,[(l(),u(j,null,I(a,d=>n("div",{key:d.title,class:"rk-footer__col"},[n("h4",null,$(d.title),1),n("ul",null,[(l(!0),u(j,null,I(d.links,v=>(l(),u("li",{key:v.label},[n("a",{href:v.href,target:v.external?"_blank":"_self",rel:v.external?"noopener":null},$(v.label),9,bi)]))),128))])])),64))])]),n("div",ki,[n("span",null,"© "+$(p(e))+" Rahul Kewat. Built with VitePress & Vue 3.",1),c[2]||(c[2]=n("span",{class:"rk-footer__made"},[A("Crafted with "),n("span",{"aria-label":"love"},"♥"),A(" in India")],-1))])]))}},Ze=x(yi,[["__scopeId","data-v-3160a0f3"]]),_i={class:"bt"},$i={class:"bt__group"},wi={key:0},xi={key:1},Vi={key:2},Si={class:"bt__group bt__group--center"},Pi={class:"bt__viewport"},Li=["title","onClick","aria-label"],Ti=["innerHTML"],ji={class:"bt__group bt__group--end"},Mi={__name:"BuilderToolbar",props:{viewport:String,dirty:Boolean,lastSaved:String},emits:["update:viewport","share","import","reset","export"],setup(t){const e=[{id:"desktop",label:"Desktop",icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'},{id:"tablet",label:"Tablet",icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'},{id:"mobile",label:"Mobile",icon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'}];return(o,a)=>(l(),u("div",_i,[n("div",$i,[a[4]||(a[4]=n("span",{class:"bt__brand"},[n("span",{class:"bt__brand-dot"}),A(" Site Builder ")],-1)),n("span",{class:C(["bt__status",{"is-dirty":t.dirty}])},[t.dirty?(l(),u("span",wi,"Saving…")):t.lastSaved?(l(),u("span",xi,"Auto-saved")):(l(),u("span",Vi,"Ready"))],2)]),n("div",Si,[n("div",Pi,[(l(),u(j,null,I(e,s=>n("button",{key:s.id,type:"button",class:C(["bt__vp-btn",{"is-active":t.viewport===s.id}]),title:s.label,onClick:c=>o.$emit("update:viewport",s.id),"aria-label":s.label},[n("span",{innerHTML:s.icon},null,8,Ti)],10,Li)),64))])]),n("div",ji,[n("button",{class:"bt__btn",type:"button",onClick:a[0]||(a[0]=s=>o.$emit("share")),title:"Copy share link"},[...a[5]||(a[5]=[ee('<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-dc35d468><circle cx="18" cy="5" r="3" data-v-dc35d468></circle><circle cx="6" cy="12" r="3" data-v-dc35d468></circle><circle cx="18" cy="19" r="3" data-v-dc35d468></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-dc35d468></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-dc35d468></line></svg> Share ',2)])]),n("button",{class:"bt__btn",type:"button",onClick:a[1]||(a[1]=s=>o.$emit("import"))},[...a[6]||(a[6]=[n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n("polyline",{points:"17 8 12 3 7 8"}),n("line",{x1:"12",y1:"3",x2:"12",y2:"15"})],-1),A(" Import ",-1)])]),n("button",{class:"bt__btn bt__btn--ghost",type:"button",onClick:a[2]||(a[2]=s=>o.$emit("reset"))}," Reset "),n("button",{class:"bt__btn bt__btn--primary",type:"button",onClick:a[3]||(a[3]=s=>o.$emit("export"))},[...a[7]||(a[7]=[n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n("polyline",{points:"7 10 12 15 17 10"}),n("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),A(" Download site ",-1)])])])]))}},Ci=x(Mi,[["__scopeId","data-v-dc35d468"]]),Bi={class:"bf"},Ii={class:"bf__label"},Hi={key:0,class:"bf__hint"},Ai=["value","rows","placeholder"],Ni={key:1,class:"bf__color"},zi=["value"],Ui=["value"],Ei=["min","max","value"],Fi=["value"],Di=["value"],Oi=["type","value","placeholder"],Ri={__name:"BuilderField",props:{label:String,hint:String,type:{type:String,default:"text"},modelValue:[String,Number],placeholder:String,options:Array,min:Number,max:Number,rows:Number},emits:["update:modelValue"],setup(t){return(e,o)=>(l(),u("label",Bi,[n("span",Ii,[A($(t.label)+" ",1),t.hint?(l(),u("span",Hi,$(t.hint),1)):w("",!0)]),t.type==="textarea"?(l(),u("textarea",{key:0,value:t.modelValue,rows:t.rows||3,placeholder:t.placeholder,onInput:o[0]||(o[0]=a=>e.$emit("update:modelValue",a.target.value))},null,40,Ai)):t.type==="color"?(l(),u("div",Ni,[n("input",{type:"color",value:t.modelValue,onInput:o[1]||(o[1]=a=>e.$emit("update:modelValue",a.target.value))},null,40,zi),n("input",{type:"text",value:t.modelValue,onInput:o[2]||(o[2]=a=>e.$emit("update:modelValue",a.target.value))},null,40,Ui)])):t.type==="range"?(l(),u("input",{key:2,type:"range",min:t.min,max:t.max,value:t.modelValue,onInput:o[3]||(o[3]=a=>e.$emit("update:modelValue",Number(a.target.value)))},null,40,Ei)):t.type==="select"?(l(),u("select",{key:3,value:t.modelValue,onChange:o[4]||(o[4]=a=>e.$emit("update:modelValue",a.target.value))},[(l(!0),u(j,null,I(t.options,a=>(l(),u("option",{key:a.value,value:a.value},$(a.label),9,Di))),128))],40,Fi)):(l(),u("input",{key:4,type:t.type||"text",value:t.modelValue,placeholder:t.placeholder,onInput:o[5]||(o[5]=a=>e.$emit("update:modelValue",a.target.value))},null,40,Oi))]))}},L=x(Ri,[["__scopeId","data-v-959451f5"]]),m=(t="")=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),qi=(t,e)=>{const o=new Set([t,e].filter(Boolean));return o.size?`<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?${Array.from(o).map(s=>`family=${encodeURIComponent(s)}:wght@400;500;600;700;800`).join("&")}&display=swap" rel="stylesheet">`:""},Gi=t=>{const{seo:e,hero:o}=t.content,a=o.name||"My Portfolio",s=o.role||"",c=e.title||`${a} — ${s}`,d=e.description||o.tagline||"",v=e.siteUrl||"",h={"@context":"https://schema.org","@type":"Person",name:a,jobTitle:s,description:d,url:v,sameAs:Object.values(t.content.contact.social||{}).filter(Boolean)};return`
  <title>${m(c)}</title>
  <meta name="description" content="${m(d)}">
  ${e.keywords?`<meta name="keywords" content="${m(e.keywords)}">`:""}
  <meta name="author" content="${m(a)}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${m(c)}">
  <meta property="og:description" content="${m(d)}">
  ${v?`<meta property="og:url" content="${m(v)}">`:""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${m(c)}">
  <meta name="twitter:description" content="${m(d)}">
  ${e.twitter?`<meta name="twitter:creator" content="${m(e.twitter)}">`:""}
  ${v?`<link rel="canonical" href="${m(v)}">`:""}
  <script type="application/ld+json">${JSON.stringify(h,null,2)}<\/script>`},ge=t=>({twitter:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.77-6.235L4.8 22H2.04l6.97-7.97L1.5 2h6.99l4.32 5.706L18.244 2zm-1.196 18h1.84L7.05 4h-1.97l11.968 16z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z"/></svg>',github:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>',upwork:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.561 5.025c-2.539 0-4.51 1.647-5.31 4.362-1.22-1.832-2.148-4.032-2.687-5.886H7.828v7.105c-.002 1.404-1.141 2.543-2.547 2.545-1.406-.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0 2.911 2.371 5.298 5.282 5.298 2.913 0 5.283-2.387 5.283-5.298V9.416c.529 1.106 1.182 2.228 1.974 3.219L10.865 20.5h2.797l1.213-5.705c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.45 5.439-5.445 0-2.998-2.439-5.434-5.439-5.434zm0 8.132c-1.102 0-2.135-.467-3.074-1.227l.228-1.074.008-.042c.207-1.143.849-3.058 2.839-3.058 1.492 0 2.703 1.211 2.703 2.7 0 1.489-1.211 2.701-2.704 2.701z"/></svg>',dribbble:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm9.94 12c-.04.66-.16 1.31-.34 1.94-1.41-.29-2.86-.45-4.32-.48.06-.93-.05-1.86-.34-2.74 1.7-.69 3.27-1.65 4.63-2.84.31 1.32.39 2.69.37 4.12zM18.5 5.7c-1.16 1.13-2.51 2.05-4 2.71-.88-1.83-1.97-3.57-3.25-5.16 2.74-.32 5.43.6 7.25 2.45zM9 4.06a23 23 0 0 1 3.36 5.18 21 21 0 0 1-9.84 1.18A10 10 0 0 1 9 4.06zM2.05 13.32a23 23 0 0 0 11.13-1.5l.6 1.43a14 14 0 0 0-7.36 5.7 10 10 0 0 1-4.37-5.63zm6.85 7.31a12 12 0 0 1 6.42-5.04 30 30 0 0 1 1.74 6.13 10 10 0 0 1-8.16-1.09zm10.16-.5a31 31 0 0 0-1.62-5.85c1.34.05 2.66.21 3.94.49a10 10 0 0 1-2.32 5.36z"/></svg>',behance:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>'})[t]||"",be=(t={})=>Object.entries(t).filter(([,e])=>e).map(([e,o])=>({key:e,url:o,label:e.charAt(0).toUpperCase()+e.slice(1)})),ke=({config:t,head:e,css:o,body:a})=>`<!doctype html>
<html lang="en" data-theme="${t.theme.mode}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${Gi(t)}
  ${qi(t.theme.fontHeading,t.theme.fontBody)}
  ${e||""}
  <style>${o}</style>
</head>
<body>
${a}
</body>
</html>`,Wi=t=>`
:root {
  --primary: ${t.primary};
  --accent: ${t.accent};
  --bg: ${t.bg};
  --surface: ${t.surface};
  --text: ${t.text};
  --muted: ${t.muted};
  --radius: ${t.radius}px;
  --font-h: '${t.fontHeading}', system-ui, sans-serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-b);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4 { font-family: var(--font-h); font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
a { color: inherit; }
img { max-width: 100%; display: block; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
.grad-text {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

/* Hero */
.hero {
  position: relative;
  padding: 8rem 0 5rem;
  overflow: hidden;
}
.hero::before, .hero::after {
  content: ""; position: absolute; border-radius: 50%; filter: blur(110px);
  pointer-events: none; opacity: 0.5;
}
.hero::before { width: 38rem; height: 38rem; top: -10rem; left: -10rem;
  background: radial-gradient(circle, var(--primary), transparent 60%); }
.hero::after { width: 32rem; height: 32rem; bottom: -8rem; right: -8rem;
  background: radial-gradient(circle, var(--accent), transparent 60%); animation: float 14s ease-in-out infinite; }
@keyframes float { 50% { transform: translate(-3%, 3%); } }

.hero-inner { position: relative; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
@media (max-width: 800px) { .hero-inner { grid-template-columns: 1fr; text-align: center; } }
.eyebrow {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.4rem 0.9rem; font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
  border: 1px solid rgba(255,255,255,0.1); border-radius: 999px;
  background: rgba(255,255,255,0.04); backdrop-filter: blur(10px);
  margin-bottom: 1.25rem;
}
.eyebrow .dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }
.hero h1 { font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1rem; }
.hero p.tagline { font-size: 1.1rem; color: var(--muted); max-width: 540px; margin-bottom: 2rem; }
@media (max-width: 800px) { .hero p.tagline { margin-left: auto; margin-right: auto; } }
.cta-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
@media (max-width: 800px) { .cta-row { justify-content: center; } }
.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.5rem; font-size: 0.95rem; font-weight: 600;
  border-radius: 999px; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease;
}
.btn-primary { color: #fff; background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
.btn-primary:hover { transform: translateY(-2px); }
.btn-ghost { color: var(--text); border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.04); }
.avatar-wrap { position: relative; width: clamp(220px, 30vw, 340px); aspect-ratio: 1; margin: 0 auto; }
.avatar-wrap .glow {
  position: absolute; inset: -10%;
  background: conic-gradient(from 180deg, var(--primary), var(--accent), var(--primary));
  border-radius: 50%; filter: blur(40px); opacity: 0.55; animation: spin 14s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.avatar-wrap img, .avatar-wrap .placeholder {
  position: relative; z-index: 1; width: 100%; height: 100%;
  border-radius: 50%; object-fit: cover;
  border: 4px solid rgba(255,255,255,0.06);
  box-shadow: 0 25px 60px rgba(0,0,0,0.3);
}
.avatar-wrap .placeholder {
  display: grid; place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff; font-size: 4rem; font-weight: 800; font-family: var(--font-h);
}

/* Sections */
section { padding: 5rem 0; position: relative; }
.section-head { max-width: 640px; margin: 0 auto 3rem; text-align: center; }
.section-head h2 { font-size: clamp(2rem, 4vw, 2.75rem); margin-bottom: 0.75rem; }
.section-head p { color: var(--muted); }

/* About */
.about-card {
  display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2.5rem; align-items: start;
  padding: 2.5rem; border-radius: var(--radius);
  background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
}
@media (max-width: 800px) { .about-card { grid-template-columns: 1fr; } }
.about-card p { color: var(--muted); margin-bottom: 1.5rem; }
.highlights { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.highlights li { display: flex; align-items: flex-start; gap: 0.6rem; color: var(--muted); }
.highlights li::before { content: "✓"; color: var(--accent); font-weight: 700; }

/* Cards grid */
.grid { display: grid; gap: 1.25rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 800px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
.card {
  padding: 1.75rem; border-radius: var(--radius);
  background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
  transition: transform .35s ease, border-color .35s ease;
}
.card:hover { transform: translateY(-4px); border-color: var(--primary); }
.card .icon { font-size: 2rem; margin-bottom: 1rem; }
.card h3 { font-size: 1.2rem; margin-bottom: 0.5rem; }
.card p { color: var(--muted); font-size: 0.95rem; }

/* Projects */
.project { display: flex; flex-direction: column; }
.project .top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; gap: 0.5rem; }
.project h3 { font-size: 1.2rem; }
.project .year { font-size: 0.78rem; color: var(--muted); }
.project p { color: var(--muted); margin-bottom: 1rem; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
.tag { font-size: 0.72rem; padding: 0.25rem 0.65rem; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1); color: var(--muted); }
.project a.view {
  display: inline-flex; align-items: center; gap: 0.35rem;
  font-size: 0.85rem; font-weight: 600; text-decoration: none;
  color: var(--text); border-bottom: 1px solid var(--accent); width: fit-content;
}

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.skill {
  padding: 0.5rem 1rem; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  font-size: 0.9rem; font-weight: 500;
}

/* Testimonials */
.testi {
  padding: 1.75rem; border-radius: var(--radius);
  background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
  position: relative;
}
.testi::before {
  content: '"'; position: absolute; top: -10px; right: 1rem;
  font-size: 4rem; line-height: 1; color: var(--primary); opacity: 0.4;
}
.testi p { color: var(--muted); margin-bottom: 1rem; }
.testi .who { font-weight: 600; }
.testi .who span { color: var(--muted); font-weight: 400; }

/* Contact */
.contact-card {
  text-align: center; padding: 4rem 2rem; border-radius: var(--radius);
  background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 30%, var(--surface)), var(--surface));
  border: 1px solid rgba(255,255,255,0.08);
}
.contact-card h2 { font-size: clamp(2rem, 4vw, 2.75rem); margin-bottom: 1rem; }
.contact-card p { color: var(--muted); max-width: 520px; margin: 0 auto 2rem; }
.contact-card .email { display: inline-block; margin-bottom: 2rem; font-size: 1.1rem; font-weight: 600; }
.socials { display: flex; gap: 0.6rem; justify-content: center; }
.socials a {
  width: 42px; height: 42px; display: grid; place-items: center;
  border-radius: 50%; border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03); color: var(--text);
  text-decoration: none; transition: all .3s ease;
}
.socials a:hover { background: linear-gradient(135deg, var(--primary), var(--accent)); border-color: transparent; transform: translateY(-2px); }

/* Footer */
footer { padding: 2rem 0; text-align: center; color: var(--muted); font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.06); }
footer a { color: var(--text); text-decoration: none; border-bottom: 1px dashed var(--muted); }

[data-theme="light"] {
  --bg: #fafafa; --surface: #ffffff; --text: #0b0b14; --muted: #555568;
}
[data-theme="light"] .eyebrow,
[data-theme="light"] .skill,
[data-theme="light"] .tag,
[data-theme="light"] .socials a,
[data-theme="light"] .btn-ghost { border-color: rgba(0,0,0,0.1); background: rgba(0,0,0,0.02); }
[data-theme="light"] .about-card,
[data-theme="light"] .card,
[data-theme="light"] .testi { border-color: rgba(0,0,0,0.06); box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
[data-theme="light"] footer { border-color: rgba(0,0,0,0.08); }
`,et={id:"modern",name:"Modern",description:"Glassmorphism, gradients, animated portrait.",preview:"modern",render(t){var b,r;const e=t.content,o=(e.hero.name||"A").split(" ").map(i=>i[0]).join("").slice(0,2).toUpperCase(),a=e.hero.avatar?`<img src="${m(e.hero.avatar)}" alt="${m(e.hero.name)}" />`:`<div class="placeholder">${m(o)}</div>`,s=(e.services.items||[]).map(i=>`
        <article class="card">
          <div class="icon">${m(i.icon)}</div>
          <h3>${m(i.title)}</h3>
          <p>${m(i.description)}</p>
        </article>`).join(""),c=(e.projects.items||[]).map(i=>`
        <article class="card project">
          <div class="top">
            <h3>${m(i.title)}</h3>
            ${i.year?`<span class="year">${m(i.year)}</span>`:""}
          </div>
          <div class="tags">${(i.tags||[]).map(_=>`<span class="tag">${m(_)}</span>`).join("")}</div>
          <p>${m(i.description)}</p>
          ${i.link?`<a class="view" href="${m(i.link)}" target="_blank" rel="noopener">View case →</a>`:""}
        </article>`).join(""),d=(e.testimonials.items||[]).map(i=>`
        <div class="testi">
          <p>"${m(i.quote)}"</p>
          <div class="who">${m(i.name)} <span>· ${m(i.role)}</span></div>
        </div>`).join(""),v=(e.skills.items||[]).map(i=>`<span class="skill">${m(i)}</span>`).join(""),h=be(e.contact.social).map(i=>`<a href="${m(i.url)}" target="_blank" rel="noopener" aria-label="${m(i.label)}">${ge(i.key)}</a>`).join(""),y=`
  <header class="hero">
    <div class="container hero-inner">
      <div>
        <div class="eyebrow"><span class="dot"></span> ${m(e.hero.role)}</div>
        <h1>${m(e.hero.headline)}</h1>
        <p class="tagline">${m(e.hero.tagline)}</p>
        <div class="cta-row">
          ${(b=e.hero.ctaPrimary)!=null&&b.text?`<a class="btn btn-primary" href="${m(e.hero.ctaPrimary.link)}">${m(e.hero.ctaPrimary.text)}</a>`:""}
          ${(r=e.hero.ctaSecondary)!=null&&r.text?`<a class="btn btn-ghost" href="${m(e.hero.ctaSecondary.link)}">${m(e.hero.ctaSecondary.text)}</a>`:""}
        </div>
      </div>
      <div class="avatar-wrap">
        <div class="glow"></div>
        ${a}
      </div>
    </div>
  </header>

  ${e.about.enabled?`<section id="about"><div class="container">
    <div class="about-card">
      <div>
        <h2>${m(e.about.heading)}</h2>
        <p style="margin-top:1rem">${m(e.about.body)}</p>
      </div>
      <ul class="highlights">
        ${(e.about.highlights||[]).map(i=>`<li>${m(i)}</li>`).join("")}
      </ul>
    </div>
  </div></section>`:""}

  ${e.services.enabled?`<section id="services"><div class="container">
    <div class="section-head">
      <h2>${m(e.services.heading)} <span class="grad-text">→</span></h2>
      <p>${m(e.services.subheading||"")}</p>
    </div>
    <div class="grid grid-3">${s}</div>
  </div></section>`:""}

  ${e.projects.enabled?`<section id="work"><div class="container">
    <div class="section-head">
      <h2>${m(e.projects.heading)}</h2>
      <p>${m(e.projects.subheading||"")}</p>
    </div>
    <div class="grid grid-2">${c}</div>
  </div></section>`:""}

  ${e.skills.enabled?`<section id="skills"><div class="container">
    <div class="section-head"><h2>${m(e.skills.heading)}</h2></div>
    <div class="skills">${v}</div>
  </div></section>`:""}

  ${e.testimonials.enabled?`<section id="testimonials"><div class="container">
    <div class="section-head"><h2>${m(e.testimonials.heading)}</h2></div>
    <div class="grid grid-2">${d}</div>
  </div></section>`:""}

  ${e.contact.enabled?`<section id="contact"><div class="container">
    <div class="contact-card">
      <h2>${m(e.contact.heading)}</h2>
      <p>${m(e.contact.body)}</p>
      ${e.contact.email?`<a class="email grad-text" href="mailto:${m(e.contact.email)}">${m(e.contact.email)}</a><br/>`:""}
      <div class="socials">${h}</div>
    </div>
  </div></section>`:""}

  <footer>
    © ${new Date().getFullYear()} ${m(e.hero.name)}. Built with the
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">free website builder</a>.
  </footer>`;return ke({config:t,css:Wi(t.theme),body:y})}},Ji=t=>`
:root {
  --primary: ${t.primary};
  --accent: ${t.accent};
  --bg: ${t.bg};
  --surface: ${t.surface};
  --text: ${t.text};
  --muted: ${t.muted};
  --radius: ${Math.max(4,t.radius/2)}px;
  --font-h: '${t.fontHeading}', Georgia, serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-b); background: var(--bg); color: var(--text); line-height: 1.7; -webkit-font-smoothing: antialiased; }
h1,h2,h3,h4 { font-family: var(--font-h); font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { max-width: 720px; margin: 0 auto; padding: 0 1.5rem; }

.dot-accent { color: var(--accent); }

/* Hero */
.hero { padding: 7rem 0 3rem; }
.hero .role { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); margin-bottom: 1.5rem; }
.hero h1 { font-size: clamp(2.4rem, 5vw, 3.6rem); margin-bottom: 1.5rem; }
.hero p.tagline { font-size: 1.15rem; color: var(--muted); margin-bottom: 2rem; max-width: 560px; }
.cta-row { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
.btn { padding: 0.75rem 1.4rem; border-radius: var(--radius); font-weight: 600; text-decoration: none; font-size: 0.95rem; transition: opacity .2s ease; }
.btn-primary { color: var(--bg); background: var(--text); }
.btn-primary:hover { opacity: 0.85; }
.btn-link { color: var(--text); text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 1px; padding: 0.75rem 0; }

/* Sections */
section { padding: 3.5rem 0; border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
.section-h { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); margin-bottom: 2rem; }
.section h2.section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1.25rem; }
.section p.section-lead { color: var(--muted); margin-bottom: 2rem; max-width: 560px; }

/* About */
.about-body { font-size: 1.05rem; color: var(--muted); }
.about-body p + p { margin-top: 1rem; }
.highlights { margin-top: 1.5rem; padding-left: 1.2rem; }
.highlights li { color: var(--muted); margin-bottom: 0.4rem; }

/* Services */
.svc { padding: 1.5rem 0; border-bottom: 1px solid color-mix(in srgb, var(--muted) 18%, transparent); display: grid; grid-template-columns: 60px 1fr; gap: 1rem; align-items: start; }
.svc:last-child { border-bottom: none; }
.svc .icon { font-size: 1.6rem; }
.svc h3 { font-size: 1.15rem; margin-bottom: 0.4rem; }
.svc p { color: var(--muted); }

/* Projects */
.proj { display: block; padding: 1.5rem 0; border-bottom: 1px solid color-mix(in srgb, var(--muted) 18%, transparent); text-decoration: none; color: inherit; transition: padding .2s ease; }
.proj:hover { padding-left: 0.5rem; }
.proj:last-child { border-bottom: none; }
.proj .top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; gap: 1rem; }
.proj h3 { font-size: 1.2rem; }
.proj .year { font-size: 0.85rem; color: var(--muted); white-space: nowrap; }
.proj p { color: var(--muted); margin-bottom: 0.5rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag { font-size: 0.75rem; color: var(--muted); }
.tag::before { content: "#"; }

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; color: var(--muted); }
.skill { display: inline-flex; align-items: center; gap: 0.5rem; }
.skill::before { content: "→"; color: var(--accent); }

/* Testimonials */
.testi { padding: 1.5rem 0; border-bottom: 1px solid color-mix(in srgb, var(--muted) 18%, transparent); }
.testi:last-child { border-bottom: none; }
.testi blockquote { font-size: 1.1rem; color: var(--text); margin-bottom: 0.5rem; }
.testi blockquote::before { content: "\\201C"; color: var(--accent); margin-right: 0.25rem; }
.testi .who { color: var(--muted); font-size: 0.9rem; }

/* Contact */
.contact h2 { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1rem; }
.contact .email { font-size: 1.4rem; font-weight: 600; text-decoration: underline; text-underline-offset: 5px; display: inline-block; margin: 1rem 0 2rem; }
.socials { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.socials a { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--muted) 30%, transparent); color: var(--text); text-decoration: none; transition: all .2s ease; }
.socials a:hover { background: var(--text); color: var(--bg); border-color: var(--text); }

/* Footer */
footer { padding: 2rem 0 3rem; color: var(--muted); font-size: 0.85rem; border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
footer a { color: inherit; }

[data-theme="light"] {
  --bg: #ffffff; --surface: #fafafa; --text: #111111; --muted: #6b6b76;
}
`,Yi={id:"minimal",name:"Minimal",description:"Editorial typography, monochrome, generous whitespace.",preview:"minimal",render(t){var h,y,b;const e=t.content,o=(e.services.items||[]).map(r=>`
        <article class="svc">
          <div class="icon">${m(r.icon)}</div>
          <div>
            <h3>${m(r.title)}</h3>
            <p>${m(r.description)}</p>
          </div>
        </article>`).join(""),a=(e.projects.items||[]).map(r=>`
        <a class="proj" href="${m(r.link||"#")}" ${r.link?'target="_blank" rel="noopener"':""}>
          <div class="top">
            <h3>${m(r.title)}</h3>
            ${r.year?`<span class="year">${m(r.year)}</span>`:""}
          </div>
          <p>${m(r.description)}</p>
          <div class="tags">${(r.tags||[]).map(i=>`<span class="tag">${m(i)}</span>`).join(" ")}</div>
        </a>`).join(""),s=(e.testimonials.items||[]).map(r=>`
        <div class="testi">
          <blockquote>${m(r.quote)}</blockquote>
          <div class="who">— ${m(r.name)}, ${m(r.role)}</div>
        </div>`).join(""),c=(e.skills.items||[]).map(r=>`<span class="skill">${m(r)}</span>`).join(""),d=be(e.contact.social).map(r=>`<a href="${m(r.url)}" target="_blank" rel="noopener" aria-label="${m(r.label)}">${ge(r.key)}</a>`).join(""),v=`
  <header class="hero">
    <div class="container">
      <div class="role">${m(e.hero.role)}<span class="dot-accent"> .</span></div>
      <h1>${m(e.hero.headline)}</h1>
      <p class="tagline">${m(e.hero.tagline)}</p>
      <div class="cta-row">
        ${(h=e.hero.ctaPrimary)!=null&&h.text?`<a class="btn btn-primary" href="${m(e.hero.ctaPrimary.link)}">${m(e.hero.ctaPrimary.text)}</a>`:""}
        ${(y=e.hero.ctaSecondary)!=null&&y.text?`<a class="btn btn-link" href="${m(e.hero.ctaSecondary.link)}">${m(e.hero.ctaSecondary.text)} →</a>`:""}
      </div>
    </div>
  </header>

  ${e.about.enabled?`<section id="about" class="section"><div class="container">
    <div class="section-h">${m(e.about.heading)}</div>
    <div class="about-body">
      <p>${m(e.about.body)}</p>
      ${(b=e.about.highlights)!=null&&b.length?`<ul class="highlights">${e.about.highlights.map(r=>`<li>${m(r)}</li>`).join("")}</ul>`:""}
    </div>
  </div></section>`:""}

  ${e.services.enabled?`<section id="services" class="section"><div class="container">
    <div class="section-h">${m(e.services.heading)}</div>
    ${e.services.subheading?`<h2 class="section-title">${m(e.services.subheading)}</h2>`:""}
    ${o}
  </div></section>`:""}

  ${e.projects.enabled?`<section id="work" class="section"><div class="container">
    <div class="section-h">${m(e.projects.heading)}</div>
    ${e.projects.subheading?`<h2 class="section-title">${m(e.projects.subheading)}</h2>`:""}
    ${a}
  </div></section>`:""}

  ${e.skills.enabled?`<section id="skills" class="section"><div class="container">
    <div class="section-h">${m(e.skills.heading)}</div>
    <div class="skills">${c}</div>
  </div></section>`:""}

  ${e.testimonials.enabled?`<section id="testimonials" class="section"><div class="container">
    <div class="section-h">${m(e.testimonials.heading)}</div>
    ${s}
  </div></section>`:""}

  ${e.contact.enabled?`<section id="contact" class="section contact"><div class="container">
    <div class="section-h">Contact</div>
    <h2>${m(e.contact.heading)}</h2>
    <p style="color:var(--muted);max-width:560px">${m(e.contact.body)}</p>
    ${e.contact.email?`<a class="email" href="mailto:${m(e.contact.email)}">${m(e.contact.email)}</a>`:""}
    <div class="socials">${d}</div>
  </div></section>`:""}

  <footer><div class="container">
    © ${new Date().getFullYear()} ${m(e.hero.name)} ·
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">Built free</a>
  </div></footer>`;return ke({config:t,css:Ji(t.theme),body:v})}},Ki=t=>`
:root {
  --primary: ${t.primary};
  --accent: ${t.accent};
  --bg: ${t.bg};
  --surface: ${t.surface};
  --text: ${t.text};
  --muted: ${t.muted};
  --radius: ${t.radius}px;
  --font-h: '${t.fontHeading}', system-ui, sans-serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-b); background: var(--bg); color: var(--text); line-height: 1.6; -webkit-font-smoothing: antialiased; }
h1,h2,h3 { font-family: var(--font-h); font-weight: 900; letter-spacing: -0.04em; line-height: 0.95; text-transform: uppercase; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

/* Marquee strip */
.strip {
  background: var(--primary); color: var(--bg);
  padding: 0.85rem 0; overflow: hidden; white-space: nowrap;
  border-bottom: 4px solid var(--text);
}
.strip-track { display: inline-block; animation: scroll 30s linear infinite; }
.strip span { display: inline-block; padding: 0 2rem; font-weight: 700; letter-spacing: 0.05em; }
.strip span::after { content: "★"; margin-left: 2rem; color: var(--bg); opacity: 0.7; }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* Hero */
.hero {
  padding: 6rem 0 5rem; position: relative;
  border-bottom: 4px solid var(--text);
}
.hero h1 { font-size: clamp(3.5rem, 12vw, 9rem); margin: 1rem 0 1.5rem; }
.hero h1 .accent { color: var(--accent); }
.hero p.tagline { font-size: 1.4rem; max-width: 720px; margin-bottom: 2rem; font-weight: 500; }
.role-badge {
  display: inline-flex; padding: 0.5rem 1.2rem; background: var(--text); color: var(--bg);
  font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.78rem;
}
.cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn {
  padding: 1.1rem 2rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;
  text-decoration: none; font-size: 1rem; border: 4px solid var(--text);
  transition: transform .2s ease, box-shadow .2s ease;
  box-shadow: 6px 6px 0 var(--text); display: inline-block;
}
.btn-primary { background: var(--accent); color: var(--text); }
.btn-secondary { background: var(--bg); color: var(--text); }
.btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 var(--text); }

/* Section */
section { padding: 5rem 0; border-bottom: 4px solid var(--text); }
section.alt { background: var(--surface); }
.section-eyebrow { font-size: 0.85rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
.section-title { font-size: clamp(2.5rem, 6vw, 4.5rem); margin-bottom: 2.5rem; }
.section-title .accent { color: var(--primary); }

/* About */
.about { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; }
@media (max-width: 800px) { .about { grid-template-columns: 1fr; } }
.about p { font-size: 1.2rem; }
.highlights { list-style: none; }
.highlights li { font-size: 1.1rem; font-weight: 600; padding: 0.75rem 0; border-bottom: 2px dashed var(--muted); display: flex; align-items: center; gap: 0.75rem; }
.highlights li::before { content: "→"; color: var(--accent); font-weight: 900; }

/* Cards */
.grid { display: grid; gap: 1.5rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 800px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
.card {
  padding: 2rem; background: var(--bg); border: 4px solid var(--text);
  box-shadow: 8px 8px 0 var(--text); transition: transform .2s ease, box-shadow .2s ease;
}
.card:hover { transform: translate(-2px, -2px); box-shadow: 12px 12px 0 var(--accent); }
.card .icon { font-size: 2.5rem; margin-bottom: 1rem; }
.card h3 { font-size: 1.4rem; margin-bottom: 0.75rem; text-transform: none; letter-spacing: -0.02em; }
.card p { font-size: 1rem; color: var(--muted); }

/* Projects */
.proj { padding: 2rem; background: var(--bg); border: 4px solid var(--text); transition: all .2s ease; }
.proj:hover { background: var(--accent); }
.proj .top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; gap: 0.5rem; }
.proj h3 { font-size: 1.6rem; text-transform: none; letter-spacing: -0.02em; }
.proj .year { font-size: 0.85rem; font-weight: 800; padding: 0.25rem 0.75rem; background: var(--text); color: var(--bg); }
.proj p { margin-bottom: 1rem; }
.tags { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem; }
.tag { padding: 0.3rem 0.8rem; background: var(--text); color: var(--bg); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.skill { padding: 0.6rem 1.2rem; border: 3px solid var(--text); font-weight: 700; font-size: 1rem; }
.skill:nth-child(3n) { background: var(--accent); }
.skill:nth-child(5n) { background: var(--primary); color: var(--bg); }

/* Testimonials */
.testi { padding: 2rem; background: var(--bg); border: 4px solid var(--text); }
.testi blockquote { font-size: 1.4rem; line-height: 1.4; font-weight: 600; margin-bottom: 1.5rem; }
.testi .who { font-weight: 800; }
.testi .who span { font-weight: 400; color: var(--muted); }

/* Contact */
.contact { padding: 6rem 0; background: var(--text); color: var(--bg); }
.contact h2 { color: var(--bg); }
.contact h2 .accent { color: var(--accent); }
.contact p { color: var(--muted); font-size: 1.2rem; max-width: 640px; }
.contact .email { display: inline-block; padding: 1rem 2rem; background: var(--accent); color: var(--text); font-weight: 800; text-decoration: none; margin: 2rem 0; font-size: 1.4rem; transition: transform .2s ease; }
.contact .email:hover { transform: translateY(-2px); }
.socials { display: flex; gap: 0.75rem; }
.socials a { width: 48px; height: 48px; display: grid; place-items: center; background: var(--bg); color: var(--text); text-decoration: none; transition: all .2s ease; }
.socials a:hover { background: var(--accent); }

footer { padding: 2rem 0; text-align: center; font-weight: 700; }
footer a { color: var(--primary); }

[data-theme="light"] {
  --bg: #ffffff; --surface: #f5f5dc; --text: #0b0b14; --muted: #555568;
}
[data-theme="light"] .strip { background: var(--text); color: var(--bg); }
[data-theme="light"] .strip span::after { color: var(--bg); }
`,Xi={id:"bold",name:"Bold",description:"Brutalist, oversized type, neo-brutal blocks.",preview:"bold",render(t){var b,r;const e=t.content,o=(e.services.items||[]).map(i=>`
        <article class="card">
          <div class="icon">${m(i.icon)}</div>
          <h3>${m(i.title)}</h3>
          <p>${m(i.description)}</p>
        </article>`).join(""),a=(e.projects.items||[]).map(i=>`
        <article class="proj">
          <div class="top">
            <h3>${m(i.title)}</h3>
            ${i.year?`<span class="year">${m(i.year)}</span>`:""}
          </div>
          <div class="tags">${(i.tags||[]).map(_=>`<span class="tag">${m(_)}</span>`).join("")}</div>
          <p>${m(i.description)}</p>
          ${i.link?`<a href="${m(i.link)}" target="_blank" rel="noopener" style="font-weight:800;text-decoration:underline;">View →</a>`:""}
        </article>`).join(""),s=(e.testimonials.items||[]).map(i=>`
        <div class="testi">
          <blockquote>"${m(i.quote)}"</blockquote>
          <div class="who">${m(i.name)} <span>— ${m(i.role)}</span></div>
        </div>`).join(""),c=(e.skills.items||[]).map(i=>`<span class="skill">${m(i)}</span>`).join(""),d=be(e.contact.social).map(i=>`<a href="${m(i.url)}" target="_blank" rel="noopener" aria-label="${m(i.label)}">${ge(i.key)}</a>`).join(""),v=`<span>${m(e.hero.role)}</span>`.repeat(8),h=m(e.hero.headline).replace(/([^\s]+)$/,'<span class="accent">$1</span>'),y=`
  <div class="strip"><div class="strip-track">${v}${v}</div></div>

  <header class="hero">
    <div class="container">
      <div class="role-badge">${m(e.hero.role)}</div>
      <h1>${h}</h1>
      <p class="tagline">${m(e.hero.tagline)}</p>
      <div class="cta-row">
        ${(b=e.hero.ctaPrimary)!=null&&b.text?`<a class="btn btn-primary" href="${m(e.hero.ctaPrimary.link)}">${m(e.hero.ctaPrimary.text)}</a>`:""}
        ${(r=e.hero.ctaSecondary)!=null&&r.text?`<a class="btn btn-secondary" href="${m(e.hero.ctaSecondary.link)}">${m(e.hero.ctaSecondary.text)}</a>`:""}
      </div>
    </div>
  </header>

  ${e.about.enabled?`<section id="about"><div class="container">
    <div class="section-eyebrow">${m(e.about.heading)}</div>
    <div class="about">
      <p>${m(e.about.body)}</p>
      <ul class="highlights">${(e.about.highlights||[]).map(i=>`<li>${m(i)}</li>`).join("")}</ul>
    </div>
  </div></section>`:""}

  ${e.services.enabled?`<section id="services" class="alt"><div class="container">
    <div class="section-eyebrow">${m(e.services.heading)}</div>
    <h2 class="section-title">${m(e.services.subheading||e.services.heading)}</h2>
    <div class="grid grid-3">${o}</div>
  </div></section>`:""}

  ${e.projects.enabled?`<section id="work"><div class="container">
    <div class="section-eyebrow">${m(e.projects.heading)}</div>
    <h2 class="section-title">${m(e.projects.subheading||e.projects.heading)}</h2>
    <div class="grid grid-2">${a}</div>
  </div></section>`:""}

  ${e.skills.enabled?`<section id="skills" class="alt"><div class="container">
    <div class="section-eyebrow">${m(e.skills.heading)}</div>
    <div class="skills">${c}</div>
  </div></section>`:""}

  ${e.testimonials.enabled?`<section id="testimonials"><div class="container">
    <div class="section-eyebrow">${m(e.testimonials.heading)}</div>
    <div class="grid grid-2">${s}</div>
  </div></section>`:""}

  ${e.contact.enabled?`<section id="contact" class="contact"><div class="container">
    <div class="section-eyebrow" style="color:var(--accent)">Contact</div>
    <h2 class="section-title">${m(e.contact.heading)}</h2>
    <p>${m(e.contact.body)}</p>
    ${e.contact.email?`<a class="email" href="mailto:${m(e.contact.email)}">${m(e.contact.email)}</a><br/>`:""}
    <div class="socials">${d}</div>
  </div></section>`:""}

  <footer>
    © ${new Date().getFullYear()} ${m(e.hero.name)} ·
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">Built free</a>
  </footer>`;return ke({config:t,css:Ki(t.theme),body:y})}},Qi=t=>`
:root {
  --primary: ${t.primary};
  --accent: ${t.accent};
  --bg: ${t.bg};
  --surface: ${t.surface};
  --text: ${t.text};
  --muted: ${t.muted};
  --radius: ${Math.max(4,t.radius/2)}px;
  --font-h: '${t.fontHeading}', system-ui, sans-serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-b); background: var(--bg); color: var(--text);
  line-height: 1.6; -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: -1px -1px;
}
h1,h2,h3 { font-family: var(--font-h); font-weight: 700; letter-spacing: -0.02em; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
.mono { font-family: var(--font-mono); }
.accent { color: var(--accent); }
.muted { color: var(--muted); }

/* Top bar */
.topbar {
  font-family: var(--font-mono); font-size: 0.85rem;
  padding: 0.65rem 0; color: var(--muted);
  border-bottom: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
}
.topbar .container { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.topbar .status { display: inline-flex; align-items: center; gap: 0.4rem; }
.topbar .status::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 12px #22c55e; }

/* Hero */
.hero { padding: 6rem 0 4rem; }
.hero .prompt { font-family: var(--font-mono); color: var(--muted); margin-bottom: 1rem; }
.hero .prompt::before { content: "$ "; color: var(--accent); }
.hero h1 { font-size: clamp(2.6rem, 6vw, 4.5rem); margin-bottom: 1.5rem; }
.hero h1 .name { color: var(--primary); }
.hero h1 .cursor { display: inline-block; width: 0.6em; height: 1em; background: var(--accent); animation: blink 1s step-end infinite; vertical-align: -0.1em; }
@keyframes blink { 50% { opacity: 0; } }
.hero p.tagline { color: var(--muted); font-size: 1.1rem; max-width: 560px; margin-bottom: 2rem; }
.cta-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn {
  padding: 0.85rem 1.4rem; font-family: var(--font-mono); font-weight: 500; font-size: 0.9rem;
  border-radius: var(--radius); text-decoration: none; transition: all .2s ease; display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-primary { color: var(--bg); background: var(--accent); }
.btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
.btn-ghost { color: var(--text); border: 1px solid color-mix(in srgb, var(--muted) 35%, transparent); background: transparent; }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

/* Sections */
section { padding: 4rem 0; }
.section-h {
  font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted);
  margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;
}
.section-h::before { content: "//"; color: var(--accent); }
.section-h .num { color: var(--accent); margin-right: 0.5rem; font-weight: 700; }
.section-title { font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin-bottom: 2rem; max-width: 640px; }

/* Cards */
.grid { display: grid; gap: 1rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 800px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
.card {
  padding: 1.5rem; border-radius: var(--radius);
  border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
  background: var(--surface);
  transition: all .25s ease;
}
.card:hover { border-color: var(--accent); transform: translateY(-2px); }
.card .icon { font-size: 1.6rem; margin-bottom: 0.75rem; }
.card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
.card p { color: var(--muted); font-size: 0.92rem; }

/* About */
.about-card {
  border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
  border-radius: var(--radius); padding: 1.75rem; background: var(--surface);
  font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.7;
}
.about-card .key { color: var(--accent); }
.about-card p { color: var(--muted); }
.about-card p + p { margin-top: 1rem; }
.highlights { list-style: none; margin-top: 1rem; }
.highlights li { color: var(--muted); padding: 0.4rem 0; font-family: var(--font-mono); font-size: 0.92rem; }
.highlights li::before { content: "▸ "; color: var(--accent); }

/* Projects */
.proj { padding: 1.5rem; border-radius: var(--radius); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); background: var(--surface); transition: all .25s ease; }
.proj:hover { border-color: var(--accent); }
.proj .top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; gap: 0.5rem; }
.proj .num { font-family: var(--font-mono); color: var(--muted); font-size: 0.85rem; }
.proj h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
.proj .year { font-family: var(--font-mono); font-size: 0.78rem; color: var(--muted); }
.proj p { color: var(--muted); font-size: 0.92rem; margin-bottom: 0.85rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag { font-family: var(--font-mono); font-size: 0.72rem; padding: 0.2rem 0.55rem; border-radius: 4px; background: color-mix(in srgb, var(--accent) 15%, transparent); color: var(--accent); }

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.skill { font-family: var(--font-mono); font-size: 0.85rem; padding: 0.4rem 0.85rem; border-radius: 4px; background: var(--surface); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
.skill::before { content: "{ "; color: var(--accent); }
.skill::after { content: " }"; color: var(--accent); }

/* Testimonials */
.testi { padding: 1.5rem; border-radius: var(--radius); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); background: var(--surface); }
.testi blockquote { font-size: 0.98rem; margin-bottom: 1rem; }
.testi blockquote::before { content: "// "; color: var(--accent); font-family: var(--font-mono); }
.testi .who { font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted); }
.testi .who strong { color: var(--text); }

/* Contact */
.contact { padding: 5rem 0; }
.contact-card {
  padding: 2.5rem; border-radius: var(--radius);
  border: 1px solid var(--accent); background: var(--surface);
  display: flex; flex-direction: column; gap: 1rem;
}
.contact-card h2 { font-size: clamp(1.75rem, 3.5vw, 2.2rem); }
.contact-card p { color: var(--muted); max-width: 560px; }
.contact-card .email { font-family: var(--font-mono); color: var(--accent); font-size: 1.1rem; text-decoration: none; align-self: flex-start; }
.contact-card .email::before { content: "→ "; }
.socials { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
.socials a { width: 40px; height: 40px; display: grid; place-items: center; border-radius: var(--radius); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); color: var(--text); text-decoration: none; transition: all .2s ease; }
.socials a:hover { color: var(--accent); border-color: var(--accent); }

footer { padding: 2rem 0; font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted); border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
footer a { color: var(--accent); }

[data-theme="light"] {
  --bg: #fafafa; --surface: #ffffff; --text: #0b0b14; --muted: #6b6b76;
}
[data-theme="light"] body { background-image: radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px); }
`,Zi={id:"tech",name:"Tech",description:"Developer aesthetic, monospace, terminal accents.",preview:"tech",render(t){var h,y;const e=t.content,o=(e.services.items||[]).map(b=>`
        <article class="card">
          <div class="icon">${m(b.icon)}</div>
          <h3>${m(b.title)}</h3>
          <p>${m(b.description)}</p>
        </article>`).join(""),a=(e.projects.items||[]).map((b,r)=>`
        <article class="proj">
          <div class="top">
            <span class="num">0${r+1}</span>
            <h3>${m(b.title)}</h3>
            ${b.year?`<span class="year">${m(b.year)}</span>`:""}
          </div>
          <p>${m(b.description)}</p>
          <div class="tags">${(b.tags||[]).map(i=>`<span class="tag">${m(i)}</span>`).join("")}</div>
          ${b.link?`<a href="${m(b.link)}" target="_blank" rel="noopener" style="display:inline-block;margin-top:1rem;color:var(--accent);text-decoration:none;font-family:var(--font-mono);font-size:0.85rem;">→ explore</a>`:""}
        </article>`).join(""),s=(e.testimonials.items||[]).map(b=>`
        <div class="testi">
          <blockquote>${m(b.quote)}</blockquote>
          <div class="who"><strong>${m(b.name)}</strong> · ${m(b.role)}</div>
        </div>`).join(""),c=(e.skills.items||[]).map(b=>`<span class="skill">${m(b)}</span>`).join(""),d=be(e.contact.social).map(b=>`<a href="${m(b.url)}" target="_blank" rel="noopener" aria-label="${m(b.label)}">${ge(b.key)}</a>`).join(""),v=`
  <div class="topbar"><div class="container">
    <span class="mono">~/<span class="accent">${m(e.hero.name)}</span>.dev</span>
    <span class="status">Available for work</span>
  </div></div>

  <header class="hero">
    <div class="container">
      <div class="prompt mono">whoami</div>
      <h1><span class="name">${m(e.hero.name)}</span> — ${m(e.hero.role)}<span class="cursor"></span></h1>
      <p class="tagline">${m(e.hero.tagline)}</p>
      <div class="cta-row">
        ${(h=e.hero.ctaPrimary)!=null&&h.text?`<a class="btn btn-primary" href="${m(e.hero.ctaPrimary.link)}">→ ${m(e.hero.ctaPrimary.text)}</a>`:""}
        ${(y=e.hero.ctaSecondary)!=null&&y.text?`<a class="btn btn-ghost" href="${m(e.hero.ctaSecondary.link)}">${m(e.hero.ctaSecondary.text)}</a>`:""}
      </div>
    </div>
  </header>

  ${e.about.enabled?`<section id="about"><div class="container">
    <div class="section-h"><span class="num">01.</span> ${m(e.about.heading)}</div>
    <div class="about-card">
      <p><span class="key">bio</span>: ${m(e.about.body)}</p>
      <ul class="highlights">${(e.about.highlights||[]).map(b=>`<li>${m(b)}</li>`).join("")}</ul>
    </div>
  </div></section>`:""}

  ${e.services.enabled?`<section id="services"><div class="container">
    <div class="section-h"><span class="num">02.</span> ${m(e.services.heading)}</div>
    <h2 class="section-title">${m(e.services.subheading||e.services.heading)}</h2>
    <div class="grid grid-3">${o}</div>
  </div></section>`:""}

  ${e.projects.enabled?`<section id="work"><div class="container">
    <div class="section-h"><span class="num">03.</span> ${m(e.projects.heading)}</div>
    <h2 class="section-title">${m(e.projects.subheading||e.projects.heading)}</h2>
    <div class="grid grid-2">${a}</div>
  </div></section>`:""}

  ${e.skills.enabled?`<section id="skills"><div class="container">
    <div class="section-h"><span class="num">04.</span> ${m(e.skills.heading)}</div>
    <div class="skills">${c}</div>
  </div></section>`:""}

  ${e.testimonials.enabled?`<section id="testimonials"><div class="container">
    <div class="section-h"><span class="num">05.</span> ${m(e.testimonials.heading)}</div>
    <div class="grid grid-2">${s}</div>
  </div></section>`:""}

  ${e.contact.enabled?`<section id="contact" class="contact"><div class="container">
    <div class="section-h"><span class="num">06.</span> Contact</div>
    <div class="contact-card">
      <h2>${m(e.contact.heading)}</h2>
      <p>${m(e.contact.body)}</p>
      ${e.contact.email?`<a class="email" href="mailto:${m(e.contact.email)}">${m(e.contact.email)}</a>`:""}
      <div class="socials">${d}</div>
    </div>
  </div></section>`:""}

  <footer><div class="container">
    [ © ${new Date().getFullYear()} ${m(e.hero.name)} ] · built with
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">free website builder</a>
  </div></footer>`;return ke({config:t,css:Qi(t.theme),body:v})}},tt=[et,Yi,Xi,Zi],el=Object.fromEntries(tt.map(t=>[t.id,t])),at=t=>(el[t.template]||et).render(t),tl={class:"bs"},al={class:"bs__tabs",role:"tablist"},ol=["aria-selected","onClick"],nl=["innerHTML"],sl={class:"bs__body"},rl={class:"bs__panel"},il={class:"bs__templates"},ll=["onClick"],cl=["data-tpl"],dl={class:"bs__tpl-meta"},ul={class:"bs__panel"},ml={class:"bs__group",open:""},pl={class:"bs__row"},vl={class:"bs__row"},hl={class:"bs__file"},fl={class:"bs__file-label"},gl={class:"bs__group"},bl={class:"bs__list-head"},kl=["onUpdate:modelValue"],yl=["onClick"],_l={class:"bs__toggle"},$l={class:"bs__group"},wl={class:"bs__list-head"},xl={class:"bs__sub-head"},Vl=["onClick"],Sl={class:"bs__row"},Pl={class:"bs__toggle"},Ll={class:"bs__group"},Tl={class:"bs__list-head"},jl={class:"bs__sub-head"},Ml=["onClick"],Cl={class:"bs__row"},Bl={class:"bs__toggle"},Il={class:"bs__group"},Hl={class:"bs__toggle"},Al={class:"bs__group"},Nl={class:"bs__list-head"},zl={class:"bs__sub-head"},Ul=["onClick"],El={class:"bs__row"},Fl={class:"bs__toggle"},Dl={class:"bs__group"},Ol={class:"bs__toggle"},Rl={class:"bs__panel"},ql={class:"bs__palettes"},Gl=["title","onClick"],Wl={class:"bs__row"},Jl={class:"bs__row"},Yl={class:"bs__row"},Kl={class:"bs__panel"},Xl={class:"bs__seo-checks"},Ql={__name:"BuilderSidebar",props:{config:{type:Object,required:!0}},setup(t){const e=t,o=M("template"),a=T(()=>e.config.content),s=[{id:"template",label:"Template",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'},{id:"content",label:"Content",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'},{id:"style",label:"Style",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>'},{id:"seo",label:"SEO",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'}],c=[{name:"Violet sky",primary:"#8b5cf6",accent:"#06b6d4",bg:"#0b0b14",surface:"#15151f",text:"#f5f5fa",muted:"#a3a3b3"},{name:"Sunset",primary:"#f59e0b",accent:"#ec4899",bg:"#0c0a14",surface:"#181522",text:"#fdf6e3",muted:"#a89c8a"},{name:"Mono ink",primary:"#0a0a0a",accent:"#ef4444",bg:"#fafaf7",surface:"#ffffff",text:"#0a0a0a",muted:"#666666"},{name:"Forest",primary:"#22c55e",accent:"#14b8a6",bg:"#0a1410",surface:"#13201b",text:"#ecfdf5",muted:"#9ab3a8"},{name:"Royal",primary:"#6366f1",accent:"#a855f7",bg:"#0a0a18",surface:"#15152b",text:"#f5f5ff",muted:"#a0a0c0"},{name:"Mocha",primary:"#a16207",accent:"#dc2626",bg:"#1c1410",surface:"#2a1f18",text:"#fef3c7",muted:"#a89884"},{name:"Snow",primary:"#3b82f6",accent:"#8b5cf6",bg:"#ffffff",surface:"#f4f4f7",text:"#0f172a",muted:"#64748b"},{name:"Cyber",primary:"#06b6d4",accent:"#10b981",bg:"#04111a",surface:"#0a1f2c",text:"#e0fefe",muted:"#7da6b3"}],d=["Inter","Space Grotesk","Plus Jakarta Sans","Manrope","DM Sans","Outfit","Poppins","Sora","Playfair Display","Lora","Fraunces","JetBrains Mono","IBM Plex Mono"].map(b=>({value:b,label:b})),v=b=>{Object.assign(e.config.theme,{primary:b.primary,accent:b.accent,bg:b.bg,surface:b.surface,text:b.text,muted:b.muted,mode:b.bg.toLowerCase().startsWith("#f")||b.bg.toLowerCase().startsWith("#e")?"light":"dark"})},h=b=>{var _;const r=(_=b.target.files)==null?void 0:_[0];if(!r)return;const i=new FileReader;i.onload=()=>{e.config.content.hero.avatar=i.result},i.readAsDataURL(r)},y=T(()=>{const b=a.value.seo,r=a.value.contact.social;return{title:b.title.length>=30&&b.title.length<=60,description:b.description.length>=70&&b.description.length<=160,keywords:!!b.keywords,url:!!b.siteUrl,email:!!a.value.contact.email,social:Object.values(r).some(i=>!!i)}});return(b,r)=>(l(),u("aside",tl,[n("nav",al,[(l(),u(j,null,I(s,i=>n("button",{key:i.id,type:"button",role:"tab",class:C(["bs__tab",{"is-active":o.value===i.id}]),"aria-selected":o.value===i.id,onClick:_=>o.value=i.id},[n("span",{innerHTML:i.icon},null,8,nl),n("span",null,$(i.label),1)],10,ol)),64))]),n("div",sl,[D(n("div",rl,[r[53]||(r[53]=n("h3",{class:"bs__h3"},"Pick a template",-1)),r[54]||(r[54]=n("p",{class:"bs__hint"},"Switch any time without losing your content.",-1)),n("div",il,[(l(!0),u(j,null,I(p(tt),i=>(l(),u("button",{key:i.id,type:"button",class:C(["bs__tpl",{"is-active":t.config.template===i.id}]),onClick:_=>t.config.template=i.id},[n("div",{class:"bs__tpl-preview","data-tpl":i.id},[...r[52]||(r[52]=[n("div",{class:"bs__tpl-bar"},null,-1),n("div",{class:"bs__tpl-bar bs__tpl-bar--sm"},null,-1),n("div",{class:"bs__tpl-grid"},[n("span"),n("span"),n("span")],-1)])],8,cl),n("div",dl,[n("strong",null,$(i.name),1),n("span",null,$(i.description),1)])],10,ll))),128))])],512),[[se,o.value==="template"]]),D(n("div",ul,[n("details",ml,[r[56]||(r[56]=n("summary",null,"Hero",-1)),f(L,{modelValue:a.value.hero.name,"onUpdate:modelValue":r[0]||(r[0]=i=>a.value.hero.name=i),label:"Your name"},null,8,["modelValue"]),f(L,{modelValue:a.value.hero.role,"onUpdate:modelValue":r[1]||(r[1]=i=>a.value.hero.role=i),label:"Role / title",placeholder:"e.g. Freelance Designer"},null,8,["modelValue"]),f(L,{modelValue:a.value.hero.headline,"onUpdate:modelValue":r[2]||(r[2]=i=>a.value.hero.headline=i),label:"Headline",type:"textarea",rows:2},null,8,["modelValue"]),f(L,{modelValue:a.value.hero.tagline,"onUpdate:modelValue":r[3]||(r[3]=i=>a.value.hero.tagline=i),label:"Tagline",type:"textarea",rows:3},null,8,["modelValue"]),n("div",pl,[f(L,{modelValue:a.value.hero.ctaPrimary.text,"onUpdate:modelValue":r[4]||(r[4]=i=>a.value.hero.ctaPrimary.text=i),label:"Primary CTA",placeholder:"Hire me"},null,8,["modelValue"]),f(L,{modelValue:a.value.hero.ctaPrimary.link,"onUpdate:modelValue":r[5]||(r[5]=i=>a.value.hero.ctaPrimary.link=i),label:"Primary link",placeholder:"mailto:you@..."},null,8,["modelValue"])]),n("div",vl,[f(L,{modelValue:a.value.hero.ctaSecondary.text,"onUpdate:modelValue":r[6]||(r[6]=i=>a.value.hero.ctaSecondary.text=i),label:"Secondary CTA",placeholder:"View work"},null,8,["modelValue"]),f(L,{modelValue:a.value.hero.ctaSecondary.link,"onUpdate:modelValue":r[7]||(r[7]=i=>a.value.hero.ctaSecondary.link=i),label:"Secondary link",placeholder:"#work"},null,8,["modelValue"])]),n("div",hl,[n("label",fl,[r[55]||(r[55]=A(" Avatar (optional) ",-1)),n("input",{type:"file",accept:"image/*",onChange:h},null,32)]),a.value.hero.avatar?(l(),u("button",{key:0,type:"button",class:"bs__file-clear",onClick:r[8]||(r[8]=i=>a.value.hero.avatar="")},"Remove")):w("",!0)])]),n("details",gl,[r[59]||(r[59]=n("summary",null,"About",-1)),f(L,{modelValue:a.value.about.heading,"onUpdate:modelValue":r[9]||(r[9]=i=>a.value.about.heading=i),label:"Heading"},null,8,["modelValue"]),f(L,{modelValue:a.value.about.body,"onUpdate:modelValue":r[10]||(r[10]=i=>a.value.about.body=i),label:"Body",type:"textarea",rows:5},null,8,["modelValue"]),n("div",bl,[r[57]||(r[57]=n("span",null,"Highlights",-1)),n("button",{type:"button",class:"bs__add",onClick:r[11]||(r[11]=i=>a.value.about.highlights.push("New highlight"))},"+ Add")]),(l(!0),u(j,null,I(a.value.about.highlights,(i,_)=>(l(),u("div",{key:_,class:"bs__list-row"},[D(n("input",{type:"text","onUpdate:modelValue":V=>a.value.about.highlights[_]=V},null,8,kl),[[Re,a.value.about.highlights[_]]]),n("button",{type:"button",class:"bs__remove",onClick:V=>a.value.about.highlights.splice(_,1),"aria-label":"Remove"},"×",8,yl)]))),128)),n("label",_l,[D(n("input",{type:"checkbox","onUpdate:modelValue":r[12]||(r[12]=i=>a.value.about.enabled=i)},null,512),[[Z,a.value.about.enabled]]),r[58]||(r[58]=n("span",null,"Show this section",-1))])]),n("details",$l,[r[61]||(r[61]=n("summary",null,"Services",-1)),f(L,{modelValue:a.value.services.heading,"onUpdate:modelValue":r[13]||(r[13]=i=>a.value.services.heading=i),label:"Heading"},null,8,["modelValue"]),f(L,{modelValue:a.value.services.subheading,"onUpdate:modelValue":r[14]||(r[14]=i=>a.value.services.subheading=i),label:"Subheading"},null,8,["modelValue"]),n("div",wl,[n("span",null,"Items ("+$(a.value.services.items.length)+")",1),n("button",{type:"button",class:"bs__add",onClick:r[15]||(r[15]=i=>a.value.services.items.push({icon:"✨",title:"New service",description:"Describe what you offer."}))},"+ Add")]),(l(!0),u(j,null,I(a.value.services.items,(i,_)=>(l(),u("div",{key:_,class:"bs__sub"},[n("div",xl,[n("span",null,"Service "+$(_+1),1),n("button",{type:"button",class:"bs__remove",onClick:V=>a.value.services.items.splice(_,1),"aria-label":"Remove"},"×",8,Vl)]),n("div",Sl,[f(L,{modelValue:i.icon,"onUpdate:modelValue":V=>i.icon=V,label:"Icon (emoji)"},null,8,["modelValue","onUpdate:modelValue"]),f(L,{modelValue:i.title,"onUpdate:modelValue":V=>i.title=V,label:"Title"},null,8,["modelValue","onUpdate:modelValue"])]),f(L,{modelValue:i.description,"onUpdate:modelValue":V=>i.description=V,label:"Description",type:"textarea",rows:2},null,8,["modelValue","onUpdate:modelValue"])]))),128)),n("label",Pl,[D(n("input",{type:"checkbox","onUpdate:modelValue":r[16]||(r[16]=i=>a.value.services.enabled=i)},null,512),[[Z,a.value.services.enabled]]),r[60]||(r[60]=n("span",null,"Show this section",-1))])]),n("details",Ll,[r[63]||(r[63]=n("summary",null,"Projects / Work",-1)),f(L,{modelValue:a.value.projects.heading,"onUpdate:modelValue":r[17]||(r[17]=i=>a.value.projects.heading=i),label:"Heading"},null,8,["modelValue"]),f(L,{modelValue:a.value.projects.subheading,"onUpdate:modelValue":r[18]||(r[18]=i=>a.value.projects.subheading=i),label:"Subheading"},null,8,["modelValue"]),n("div",Tl,[n("span",null,"Projects ("+$(a.value.projects.items.length)+")",1),n("button",{type:"button",class:"bs__add",onClick:r[19]||(r[19]=i=>a.value.projects.items.push({title:"New project",description:"Brief description.",tags:["Tag"],link:"",year:String(new Date().getFullYear())}))},"+ Add")]),(l(!0),u(j,null,I(a.value.projects.items,(i,_)=>(l(),u("div",{key:_,class:"bs__sub"},[n("div",jl,[n("span",null,"Project "+$(_+1),1),n("button",{type:"button",class:"bs__remove",onClick:V=>a.value.projects.items.splice(_,1),"aria-label":"Remove"},"×",8,Ml)]),n("div",Cl,[f(L,{modelValue:i.title,"onUpdate:modelValue":V=>i.title=V,label:"Title"},null,8,["modelValue","onUpdate:modelValue"]),f(L,{modelValue:i.year,"onUpdate:modelValue":V=>i.year=V,label:"Year"},null,8,["modelValue","onUpdate:modelValue"])]),f(L,{modelValue:i.description,"onUpdate:modelValue":V=>i.description=V,label:"Description",type:"textarea",rows:2},null,8,["modelValue","onUpdate:modelValue"]),f(L,{"model-value":(i.tags||[]).join(", "),"onUpdate:modelValue":V=>i.tags=V.split(",").map(H=>H.trim()).filter(Boolean),label:"Tags (comma-separated)"},null,8,["model-value","onUpdate:modelValue"]),f(L,{modelValue:i.link,"onUpdate:modelValue":V=>i.link=V,label:"Link (optional)",placeholder:"https://"},null,8,["modelValue","onUpdate:modelValue"])]))),128)),n("label",Bl,[D(n("input",{type:"checkbox","onUpdate:modelValue":r[20]||(r[20]=i=>a.value.projects.enabled=i)},null,512),[[Z,a.value.projects.enabled]]),r[62]||(r[62]=n("span",null,"Show this section",-1))])]),n("details",Il,[r[65]||(r[65]=n("summary",null,"Skills / Toolbox",-1)),f(L,{modelValue:a.value.skills.heading,"onUpdate:modelValue":r[21]||(r[21]=i=>a.value.skills.heading=i),label:"Heading"},null,8,["modelValue"]),f(L,{"model-value":(a.value.skills.items||[]).join(", "),"onUpdate:modelValue":r[22]||(r[22]=i=>a.value.skills.items=i.split(",").map(_=>_.trim()).filter(Boolean)),label:"Skills (comma-separated)",type:"textarea",rows:3},null,8,["model-value"]),n("label",Hl,[D(n("input",{type:"checkbox","onUpdate:modelValue":r[23]||(r[23]=i=>a.value.skills.enabled=i)},null,512),[[Z,a.value.skills.enabled]]),r[64]||(r[64]=n("span",null,"Show this section",-1))])]),n("details",Al,[r[67]||(r[67]=n("summary",null,"Testimonials",-1)),f(L,{modelValue:a.value.testimonials.heading,"onUpdate:modelValue":r[24]||(r[24]=i=>a.value.testimonials.heading=i),label:"Heading"},null,8,["modelValue"]),n("div",Nl,[n("span",null,"Items ("+$(a.value.testimonials.items.length)+")",1),n("button",{type:"button",class:"bs__add",onClick:r[25]||(r[25]=i=>a.value.testimonials.items.push({quote:"A glowing review goes here.",name:"Jane Doe",role:"CEO, ACME"}))},"+ Add")]),(l(!0),u(j,null,I(a.value.testimonials.items,(i,_)=>(l(),u("div",{key:_,class:"bs__sub"},[n("div",zl,[n("span",null,"Testimonial "+$(_+1),1),n("button",{type:"button",class:"bs__remove",onClick:V=>a.value.testimonials.items.splice(_,1),"aria-label":"Remove"},"×",8,Ul)]),f(L,{modelValue:i.quote,"onUpdate:modelValue":V=>i.quote=V,label:"Quote",type:"textarea",rows:3},null,8,["modelValue","onUpdate:modelValue"]),n("div",El,[f(L,{modelValue:i.name,"onUpdate:modelValue":V=>i.name=V,label:"Name"},null,8,["modelValue","onUpdate:modelValue"]),f(L,{modelValue:i.role,"onUpdate:modelValue":V=>i.role=V,label:"Role"},null,8,["modelValue","onUpdate:modelValue"])])]))),128)),n("label",Fl,[D(n("input",{type:"checkbox","onUpdate:modelValue":r[26]||(r[26]=i=>a.value.testimonials.enabled=i)},null,512),[[Z,a.value.testimonials.enabled]]),r[66]||(r[66]=n("span",null,"Show this section",-1))])]),n("details",Dl,[r[69]||(r[69]=n("summary",null,"Contact",-1)),f(L,{modelValue:a.value.contact.heading,"onUpdate:modelValue":r[27]||(r[27]=i=>a.value.contact.heading=i),label:"Heading"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.body,"onUpdate:modelValue":r[28]||(r[28]=i=>a.value.contact.body=i),label:"Message",type:"textarea",rows:3},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.email,"onUpdate:modelValue":r[29]||(r[29]=i=>a.value.contact.email=i),label:"Email",type:"email"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.social.twitter,"onUpdate:modelValue":r[30]||(r[30]=i=>a.value.contact.social.twitter=i),label:"Twitter / X URL",type:"url",placeholder:"https://"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.social.linkedin,"onUpdate:modelValue":r[31]||(r[31]=i=>a.value.contact.social.linkedin=i),label:"LinkedIn URL",type:"url",placeholder:"https://"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.social.github,"onUpdate:modelValue":r[32]||(r[32]=i=>a.value.contact.social.github=i),label:"GitHub URL",type:"url",placeholder:"https://"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.social.upwork,"onUpdate:modelValue":r[33]||(r[33]=i=>a.value.contact.social.upwork=i),label:"Upwork URL",type:"url",placeholder:"https://"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.social.dribbble,"onUpdate:modelValue":r[34]||(r[34]=i=>a.value.contact.social.dribbble=i),label:"Dribbble URL",type:"url",placeholder:"https://"},null,8,["modelValue"]),f(L,{modelValue:a.value.contact.social.behance,"onUpdate:modelValue":r[35]||(r[35]=i=>a.value.contact.social.behance=i),label:"Behance URL",type:"url",placeholder:"https://"},null,8,["modelValue"]),n("label",Ol,[D(n("input",{type:"checkbox","onUpdate:modelValue":r[36]||(r[36]=i=>a.value.contact.enabled=i)},null,512),[[Z,a.value.contact.enabled]]),r[68]||(r[68]=n("span",null,"Show this section",-1))])])],512),[[se,o.value==="content"]]),D(n("div",Rl,[r[70]||(r[70]=n("h3",{class:"bs__h3"},"Theme & typography",-1)),n("div",ql,[(l(),u(j,null,I(c,i=>n("button",{key:i.name,type:"button",class:"bs__palette",title:i.name,onClick:_=>v(i)},[n("span",{style:J({background:i.primary})},null,4),n("span",{style:J({background:i.accent})},null,4),n("span",{style:J({background:i.bg})},null,4),n("small",null,$(i.name),1)],8,Gl)),64))]),n("div",Wl,[f(L,{modelValue:t.config.theme.primary,"onUpdate:modelValue":r[37]||(r[37]=i=>t.config.theme.primary=i),label:"Primary",type:"color"},null,8,["modelValue"]),f(L,{modelValue:t.config.theme.accent,"onUpdate:modelValue":r[38]||(r[38]=i=>t.config.theme.accent=i),label:"Accent",type:"color"},null,8,["modelValue"])]),n("div",Jl,[f(L,{modelValue:t.config.theme.bg,"onUpdate:modelValue":r[39]||(r[39]=i=>t.config.theme.bg=i),label:"Background",type:"color"},null,8,["modelValue"]),f(L,{modelValue:t.config.theme.surface,"onUpdate:modelValue":r[40]||(r[40]=i=>t.config.theme.surface=i),label:"Surface",type:"color"},null,8,["modelValue"])]),n("div",Yl,[f(L,{modelValue:t.config.theme.text,"onUpdate:modelValue":r[41]||(r[41]=i=>t.config.theme.text=i),label:"Text",type:"color"},null,8,["modelValue"]),f(L,{modelValue:t.config.theme.muted,"onUpdate:modelValue":r[42]||(r[42]=i=>t.config.theme.muted=i),label:"Muted text",type:"color"},null,8,["modelValue"])]),f(L,{modelValue:t.config.theme.mode,"onUpdate:modelValue":r[43]||(r[43]=i=>t.config.theme.mode=i),label:"Mode",type:"select",options:[{value:"dark",label:"Dark"},{value:"light",label:"Light"}]},null,8,["modelValue"]),f(L,{modelValue:t.config.theme.fontHeading,"onUpdate:modelValue":r[44]||(r[44]=i=>t.config.theme.fontHeading=i),label:"Heading font",type:"select",options:p(d)},null,8,["modelValue","options"]),f(L,{modelValue:t.config.theme.fontBody,"onUpdate:modelValue":r[45]||(r[45]=i=>t.config.theme.fontBody=i),label:"Body font",type:"select",options:p(d)},null,8,["modelValue","options"]),f(L,{modelValue:t.config.theme.radius,"onUpdate:modelValue":r[46]||(r[46]=i=>t.config.theme.radius=i),label:"Corner roundness",hint:t.config.theme.radius+"px",type:"range",min:0,max:32},null,8,["modelValue","hint"])],512),[[se,o.value==="style"]]),D(n("div",Kl,[r[78]||(r[78]=n("h3",{class:"bs__h3"},"SEO & social",-1)),r[79]||(r[79]=n("p",{class:"bs__hint"},"These tags ship with the downloaded HTML. Important for ranking on Google.",-1)),f(L,{modelValue:a.value.seo.title,"onUpdate:modelValue":r[47]||(r[47]=i=>a.value.seo.title=i),label:"Title (≤60 chars)",hint:a.value.seo.title.length+"/60"},null,8,["modelValue","hint"]),f(L,{modelValue:a.value.seo.description,"onUpdate:modelValue":r[48]||(r[48]=i=>a.value.seo.description=i),label:"Meta description (≤160 chars)",hint:a.value.seo.description.length+"/160",type:"textarea",rows:3},null,8,["modelValue","hint"]),f(L,{modelValue:a.value.seo.keywords,"onUpdate:modelValue":r[49]||(r[49]=i=>a.value.seo.keywords=i),label:"Keywords",placeholder:"freelance designer, ux, mumbai"},null,8,["modelValue"]),f(L,{modelValue:a.value.seo.siteUrl,"onUpdate:modelValue":r[50]||(r[50]=i=>a.value.seo.siteUrl=i),label:"Canonical URL",type:"url",placeholder:"https://yoursite.com"},null,8,["modelValue"]),f(L,{modelValue:a.value.seo.twitter,"onUpdate:modelValue":r[51]||(r[51]=i=>a.value.seo.twitter=i),label:"Twitter handle",placeholder:"@username"},null,8,["modelValue"]),n("div",Xl,[r[77]||(r[77]=n("h4",null,"Checklist",-1)),n("div",{class:C(["bs__check",{ok:y.value.title}])},[...r[71]||(r[71]=[n("span",{class:"bs__check-dot"},null,-1),A("Title between 30–60 chars ",-1)])],2),n("div",{class:C(["bs__check",{ok:y.value.description}])},[...r[72]||(r[72]=[n("span",{class:"bs__check-dot"},null,-1),A("Description between 70–160 chars ",-1)])],2),n("div",{class:C(["bs__check",{ok:y.value.keywords}])},[...r[73]||(r[73]=[n("span",{class:"bs__check-dot"},null,-1),A("Keywords filled in ",-1)])],2),n("div",{class:C(["bs__check",{ok:y.value.url}])},[...r[74]||(r[74]=[n("span",{class:"bs__check-dot"},null,-1),A("Canonical URL set ",-1)])],2),n("div",{class:C(["bs__check",{ok:y.value.email}])},[...r[75]||(r[75]=[n("span",{class:"bs__check-dot"},null,-1),A("Contact email present ",-1)])],2),n("div",{class:C(["bs__check",{ok:y.value.social}])},[...r[76]||(r[76]=[n("span",{class:"bs__check-dot"},null,-1),A("At least one social link (for sameAs schema) ",-1)])],2)])],512),[[se,o.value==="seo"]])])]))}},Zl=x(Ql,[["__scopeId","data-v-cd013f69"]]),ec=["data-viewport"],tc={class:"bp__frame-wrap"},ac={key:0,class:"bp__chrome"},oc=["srcdoc"],nc={__name:"BuilderPreview",props:{html:String,viewport:{type:String,default:"desktop"}},setup(t){const e=M(null);return(o,a)=>(l(),u("div",{class:"bp","data-viewport":t.viewport},[n("div",tc,[t.viewport!=="desktop"?(l(),u("div",ac,[...a[0]||(a[0]=[n("div",{class:"bp__chrome-bar"},[n("span"),n("span"),n("span")],-1)])])):w("",!0),n("iframe",{ref_key:"frameRef",ref:e,class:"bp__frame",srcdoc:t.html,title:"Live preview of generated website",sandbox:"allow-same-origin"},null,8,oc)])],8,ec))}},sc=x(nc,[["__scopeId","data-v-40ab4be8"]]),te=()=>({template:"modern",theme:{primary:"#8b5cf6",accent:"#06b6d4",bg:"#0b0b14",surface:"#15151f",text:"#f5f5fa",muted:"#a3a3b3",fontHeading:"Space Grotesk",fontBody:"Inter",radius:16,mode:"dark"},content:{seo:{title:"Jordan Reyes — Freelance Product Designer",description:"Award-winning product designer helping startups craft delightful, conversion-focused digital experiences. Available for select projects.",keywords:"product designer, freelance designer, ux designer portfolio",siteUrl:"https://example.com",twitter:"@jordanreyes"},hero:{name:"Jordan Reyes",role:"Freelance Product Designer",headline:"I design digital products people actually love.",tagline:"I help ambitious founders ship beautiful, high-converting interfaces — without the fluff.",avatar:"",ctaPrimary:{text:"Hire me",link:"mailto:hello@example.com"},ctaSecondary:{text:"View work",link:"#work"}},about:{enabled:!0,heading:"About me",body:"Hey, I'm Jordan — a product designer with 7+ years of experience working with venture-backed startups and indie founders. I specialise in turning early ideas into polished products that ship and scale. When I'm not designing, I'm probably hiking or playing chess badly.",highlights:["7+ years of product design experience","Worked with 50+ founders across 12 countries","Top-rated on Upwork & Toptal"]},services:{enabled:!0,heading:"Services",subheading:"How I can help you ship.",items:[{icon:"🎯",title:"Product strategy",description:"Translate fuzzy ideas into a clear, prioritized product roadmap."},{icon:"🎨",title:"UI / UX design",description:"Beautiful, accessible interfaces tested against real user behavior."},{icon:"🚀",title:"Launch sprints",description:"From wireframe to production-ready Figma in two focused weeks."}]},projects:{enabled:!0,heading:"Selected work",subheading:"Some recent collaborations.",items:[{title:"SaaS Onboarding Revamp",description:"Redesigned activation flow for a B2B SaaS and lifted week-1 retention by 18%.",tags:["UX","SaaS","Conversion"],link:"#",year:"2025"},{title:"Fintech Mobile App",description:"Designed a personal-finance app from zero — featured in the App Store.",tags:["Mobile","Fintech","Branding"],link:"#",year:"2024"},{title:"Marketplace MVP",description:"Took a two-sided marketplace from sketch to launch in 9 weeks.",tags:["MVP","Web"],link:"#",year:"2024"}]},skills:{enabled:!0,heading:"Toolbox",items:["Figma","Notion","Framer","Webflow","Linear","Loom","Mixpanel","Tailwind"]},testimonials:{enabled:!0,heading:"Kind words",items:[{quote:"Jordan delivered the cleanest design system we've ever shipped. Our investors literally clapped.",name:"Aarav Mehta",role:"Founder, Indie SaaS"},{quote:"Sharp eye, calm hands. Took our messy product brief and turned it into something gorgeous.",name:"Lina Park",role:"Solo creator"}]},contact:{enabled:!0,heading:"Let's build something good.",body:"Always open to interesting briefs. Drop me a line — I usually reply within a day.",email:"hello@example.com",social:{twitter:"https://twitter.com/jordanreyes",linkedin:"https://linkedin.com/in/jordanreyes",github:"",upwork:"",dribbble:"",behance:""}}}}),_e="rk-website-builder-v1",Ne=t=>{try{return JSON.parse(t)}catch{return null}},ie=(t,e)=>{if(!e)return t;if(Array.isArray(t)||Array.isArray(e))return e;if(typeof t=="object"&&t!==null&&typeof e=="object"){const o={...t};for(const a of Object.keys(e))o[a]=ie(t[a],e[a]);return o}return e},ae=()=>typeof window<"u",rc=t=>{if(!ae())return"";const e=JSON.stringify(t);return btoa(unescape(encodeURIComponent(e)))},ic=t=>{try{return JSON.parse(decodeURIComponent(escape(atob(t))))}catch{return null}};function lc(){const t=M(te()),e=M(!1),o=M(null),a=()=>{if(!ae())return;const b=window.location.hash;if(b.startsWith("#share=")){const i=ic(b.slice(7));if(i){t.value=ie(te(),i),history.replaceState(null,"",window.location.pathname+window.location.search);return}}const r=Ne(localStorage.getItem(_e));r&&(t.value=ie(te(),r),o.value=r.__savedAt||null)},s=()=>{if(!ae())return;const b={...t.value,__savedAt:new Date().toISOString()};localStorage.setItem(_e,JSON.stringify(b)),o.value=b.__savedAt,e.value=!1},c=()=>{t.value=te(),ae()&&localStorage.removeItem(_e),e.value=!1,o.value=null},d=()=>{const b=new Blob([JSON.stringify(t.value,null,2)],{type:"application/json"});ot(b,"site-config.json")},v=b=>new Promise((r,i)=>{const _=new FileReader;_.onload=()=>{const V=Ne(_.result);if(!V)return i(new Error("Invalid JSON"));t.value=ie(te(),V),r(V)},_.onerror=i,_.readAsText(b)}),h=()=>ae()?`${window.location.origin}${window.location.pathname}#share=${rc(t.value)}`:"";let y=null;return O(t,()=>{e.value=!0,y&&clearTimeout(y),y=setTimeout(s,800)},{deep:!0}),F(a),{config:t,dirty:e,lastSaved:o,load:a,save:s,reset:c,exportJson:d,importJson:v,buildShareUrl:h}}function ot(t,e){if(typeof window>"u")return;const o=URL.createObjectURL(t),a=document.createElement("a");a.href=o,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(o),1e3)}const cc=t=>{const e=(t||"").replace(/\/+$/,"")||"https://example.com",o=new Date().toISOString().split("T")[0];return`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${e}/</loc>
    <lastmod>${o}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`},dc=t=>`User-agent: *
Allow: /

Sitemap: ${(t||"").replace(/\/+$/,"")||"https://example.com"}/sitemap.xml
`,uc=t=>{const e=at(t),o=t.content.seo.siteUrl;[{content:e,name:"index.html",type:"text/html;charset=utf-8"},{content:cc(o),name:"sitemap.xml",type:"application/xml"},{content:dc(o),name:"robots.txt",type:"text/plain"}].forEach((s,c)=>{setTimeout(()=>{ot(new Blob([s.content],{type:s.type}),s.name)},c*350)})},mc={class:"wb"},pc={class:"wb__layout"},vc={key:0,class:"wb__toast",role:"status"},hc={__name:"WebsiteBuilder",setup(t){const{config:e,dirty:o,lastSaved:a,reset:s,importJson:c,buildShareUrl:d}=lc(),v=M("desktop"),h=M(""),y=M(null);let b=null;const r=U=>{h.value=U,b&&clearTimeout(b),b=setTimeout(()=>h.value="",2400)},i=M(""),_=()=>{try{i.value=at(e.value)}catch(U){i.value=`<!doctype html><html><body style="font-family:system-ui;padding:2rem;color:#ef4444">Render error: ${String(U)}</body></html>`}};let V=null;O(e,()=>{V&&clearTimeout(V),V=setTimeout(_,80)},{deep:!0,immediate:!0});const H=async()=>{var U;try{const E=d();(U=navigator.clipboard)!=null&&U.writeText?(await navigator.clipboard.writeText(E),r("Share link copied to clipboard")):window.prompt("Copy this link",E)}catch{r("Could not copy. Try again.")}},N=()=>{window.confirm("Reset to the starter content? This cannot be undone.")&&(s(),r("Reset to defaults"))},z=()=>{uc(e.value),r("Downloading index.html, sitemap.xml, robots.txt")},R=async U=>{var W;const E=(W=U.target.files)==null?void 0:W[0];if(E){try{await c(E),r("Config imported")}catch{r("Invalid JSON file")}U.target.value=""}};return(U,E)=>(l(),u("div",mc,[f(Ci,{viewport:v.value,dirty:p(o),"last-saved":p(a),"onUpdate:viewport":E[0]||(E[0]=W=>v.value=W),onShare:H,onImport:E[1]||(E[1]=W=>U.$refs.fileInput.click()),onReset:N,onExport:z},null,8,["viewport","dirty","last-saved"]),n("input",{ref_key:"fileInput",ref:y,type:"file",accept:".json,application/json",class:"wb__file-input",onChange:R},null,544),n("div",pc,[f(Zl,{config:p(e)},null,8,["config"]),f(sc,{html:i.value,viewport:v.value},null,8,["html","viewport"])]),(l(),P(gt,{to:"body"},[f(ce,{name:"wb-toast"},{default:k(()=>[h.value?(l(),u("div",vc,$(h.value),1)):w("",!0)]),_:1})]))]))}},fc=x(hc,[["__scopeId","data-v-a245ec4a"]]),gc={class:"google-ad-container"},bc={__name:"GoogleAd",setup(t){return F(()=>{pe(()=>{if(window.adsbygoogle)setTimeout(()=>{(adsbygoogle=window.adsbygoogle||[]).push({})},200);else{const e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",e.async=!0,e.crossOrigin="anonymous",e.onload=()=>{setTimeout(()=>{(adsbygoogle=window.adsbygoogle||[]).push({})},200)},document.head.appendChild(e)}})}),(e,o)=>(l(),u("div",gc,[...o[0]||(o[0]=[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-1527757373409987","data-ad-slot":"7969276000","data-ad-format":"auto","data-full-width-responsive":"true"},null,-1)])]))}},kc=x(bc,[["__scopeId","data-v-fcec0d3b"]]),yc={class:"main-content"},_c={__name:"Layout",setup(t){const e=oe(),o=()=>{if(typeof document>"u")return;const a=e.path==="/"||e.path==="/index.html";document.documentElement.classList.toggle("rk-modern-active",a)};return F(()=>{o()}),O(()=>e.path,()=>pe(o)),(a,s)=>(l(),P(p(Xe).Layout,null,{"home-hero-before":k(()=>[f(Qe)]),"aside-bottom":k(()=>[n("div",yc,[f(kc)])]),"layout-bottom":k(()=>[f(Ze)]),_:1}))}},$c=x(_c,[["__scopeId","data-v-6dea885c"]]),xc={...Xe,Layout:$c,enhanceApp({app:t}){t.component("ClickableBox",er),t.component("ModernHome",Qe),t.component("SiteFooter",Ze),t.component("WebsiteBuilder",fc)}};export{xc as R,Hn as c,B as u};
