import{_ as y}from"./_plugin-vue_export-helper.a1a6add7.js";import{o as s,a as o,b as e,t as d,F as $,r as E,e as p,f as l,u as m,h as S,w as U,i as N,p as C,j as O}from"./entry.c46d7379.js";import{p as c}from"./pocketbase.0539cbe6.js";import{O as k}from"./Options.f8c269e8.js";const b={name:"DataDisplay",props:{day_data:{type:Object,default:"Null"},heading:{type:String,default:"err"}},methods:{split_inner(t){return t.split("|")},fmt_data(){const t=this.day_data.hash.split("!!!");for(let n=0;n<t.length;n++)t[n]=t[n].split("|");return t}}},D={class:"data-display"},A={key:1};function T(t,n,a,h,r,_){return s(),o("div",D,[e("h2",null,d(a.heading),1),_.fmt_data()[0]!=""?(s(!0),o($,{key:0},E(_.fmt_data(),(i,f)=>(s(),o("div",null,[e("p",null,[p(d(i[1])+" "+d(i[2])+" ",1),e("i",null,d(i[5]),1)])]))),256)):(s(),o("div",A," Keine Ereignisse "))])}const w=y(b,[["render",T]]),M={name:"Display",props:{currentUser:c.currentUser},data(){return{h_data:{hash:atob(this.currentUser.h_hash)},m_data:{hash:atob(this.currentUser.m_hash)},days:{day_1:"",day_2:""}}},async mounted(){const t=await c.instance.collection("times").getOne("ux8ausqmf2h57dd");this.days.day_1=t.day_1,this.days.day_2=t.day_2}},V={id:"display"},B={id:"display-container",class:"area",pos:"top"},H=e("div",{id:"seperator"},null,-1);function I(t,n,a,h,r,_){const i=w;return s(),o("div",V,[e("div",B,[l(i,{day_data:r.h_data,heading:r.days.day_1},null,8,["day_data","heading"]),H,l(i,{day_data:r.m_data,heading:r.days.day_2},null,8,["day_data","heading"])])])}const j=y(M,[["render",I]]),F={name:"ScoreDisplay",data(){return{list:[]}},async mounted(){const n=(await c.instance.collection("users").getList(1,5,{})).items;n.sort((a,h)=>h.score+h.h_score-(a.score+a.h_score)),this.list=n}},R={class:"area",id:"score-display"},q={id:"score-content"},z=e("h2",null,"EVA SCORE",-1),G=e("h3",null,"DEIN SCORE",-1),K=e("h3",null,"TOP 5 SCORE",-1),P={id:"your-score",class:"score"},W=e("div",{id:"score-seperator"},null,-1),J={id:"top-score",class:"score"},Q={key:0},X={key:0,style:{color:"rgb(157, 241, 154)"}},Y={key:1};function Z(t,n,a,h,r,_){return s(),o("div",R,[e("div",q,[z,G,K,e("div",P,[e("div",null,[e("h2",null,d(m(c).currentUser.score+m(c).currentUser.h_score),1)])]),W,e("div",J,[e("div",null,[(s(!0),o($,null,E(r.list,(i,f)=>(s(),o("div",null,[i.score!=0?(s(),o("div",Q,[i.id==m(c).currentUser.id?(s(),o("div",X,d(i.score+i.h_score),1)):(s(),o("div",Y,d(i.score+i.h_score),1))])):S("",!0)]))),256))])])])])}const ee=y(F,[["render",Z]]),te={components:{Options:k},data(){return{currentUser:c.instance.authStore.model}},methods:{loading(t){const n=t;var a="L\xE4dt";n.innerHTML=a+".",setInterval(function(){n.innerHTML.length>a.length+3?n.innerHTML=a+".":n.innerHTML+="."},400)},async signOut(t){this.loading(t.srcElement),c.instance.authStore.clear()},async deleteAccount(t){const n=prompt("Willst du den Account wirklich l\xF6schen? (ja/nein)");this.currentUser&&n=="ja"&&c.instance.collection("users").delete(this.currentUser.id)}},mounted(){c.instance.authStore.onChange(t=>{this.currentUser=c.instance.authStore.model})}};const u=t=>(C("data-v-f753af9a"),t=t(),O(),t),ne={id:"main-content"},se={key:0,id:"main-settings"},oe={key:0},ie={id:"main-heading"},re=u(()=>e("br",null,null,-1)),ce=u(()=>e("br",null,null,-1)),ae={id:"mail-notify"},de={key:1},_e=u(()=>e("p",{id:"confirm"},"Bitte email best\xE4tigen und danach neu laden",-1)),le=[_e],ue={key:1},he=u(()=>e("h1",null,"LMG Vertretungsplan Bot \u{1F916}",-1)),pe=u(()=>e("p",null,"Automatische Nachrichten zu deinen aktuellen Vertetungen/Entf\xE4llen (beta)",-1)),me=u(()=>e("button",{id:"signin"},"ANMELDEN",-1)),ye=u(()=>e("button",{id:"signin"},"ACCOUNT ERSTELLEN",-1));function fe(t,n,a,h,r,_){var x;const i=j,f=ee,L=k,v=N;return s(),o("div",ne,[r.currentUser?(s(),o("div",se,[r.currentUser.verified?(s(),o("div",oe,[e("h1",ie,"HALLO, "+d((x=r.currentUser)==null?void 0:x.email.split("@")[0].toUpperCase()),1),l(i,{currentUser:r.currentUser},null,8,["currentUser"]),l(f),l(L,{currentUser:r.currentUser},null,8,["currentUser"]),e("p",null,[p("Angemeldet!"),re,p("(user-id: "+d(m(c).currentUser.id)+")",1),ce,p("( "),e("i",ae,d(m(c).currentUser.email),1),p(")")])])):(s(),o("div",de,le)),e("button",{id:"signout",onClick:n[0]||(n[0]=g=>_.signOut(g))},"ABMELDEN"),e("button",{id:"delete",onClick:n[1]||(n[1]=g=>_.deleteAccount(g))},"ACCOUNT L\xD6SCHEN")])):(s(),o("div",ue,[he,pe,l(v,{to:"/login"},{default:U(()=>[me]),_:1}),l(v,{to:"/signup"},{default:U(()=>[ye]),_:1})]))])}const $e=y(te,[["render",fe],["__scopeId","data-v-f753af9a"]]);export{$e as default};
