import{b,u,I as a,a as m,J as S,o as $,i as I,j as w,s as x,v as P,k as C,x as _,ai as E,r as j,X as r}from"./entry.138ef2fe.js";import{u as D}from"./asyncData.a4f8b286.js";import z from"./ComponentPlaygroundData.972d660a.js";import"./TabsHeader.07a5989c.js";import"./ComponentPlaygroundProps.01253143.js";import"./ProseH4.7a37e333.js";import"./ProseCodeInline.8f41fe78.js";import"./Badge.590a7d61.js";import"./ContentSlot.4929beca.js";import"./ProseP.35df1984.js";import"./index.c523da14.js";import"./ComponentPlaygroundSlots.vue.b3fe95dc.js";import"./ComponentPlaygroundTokens.vue.382b17a1.js";async function B(o){b();const e=u(o);{const{data:n}=await D(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>n.value)}}const N=o=>(x("data-v-a2bd7d25"),o=o(),P(),o),k=N(()=>C("div",{class:"ellipsis-item"},null,-1)),A=[k],V=m({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(o){const e=o,n=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),i=a(()=>((t=e)=>t.right)()),c=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,d,p;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(p=t==null?void 0:t.colors)==null?void 0:p[2]} 98.48%)`})()),{$pinceau:v}=S(e,void 0,{_cCN_top:n,_eih_insetInlineStart:s,_IfB_insetInlineEnd:i,_SsE_zIndex:c,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>($(),I("div",{class:w(["ellipsis",[u(v)]])},A,2))}});const q=_(V,[["__scopeId","data-v-a2bd7d25"]]),J=m({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=a(()=>E(o.component)),n=j({...o.props}),s=await B(o.component);return{as:e,formProps:n,componentData:s}},render(o){const e=Object.entries(this.$slots).reduce((n,[s,i])=>{if(s.startsWith("component-")){const c=s.replace("component-","");n[c]=i}return n},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),r(z,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const Y=_(J,[["__scopeId","data-v-ffdff82a"]]);export{Y as default};
