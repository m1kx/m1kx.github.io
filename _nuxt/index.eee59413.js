import{_ as m}from"./_plugin-vue_export-helper.a1a6add7.js";import{o as s,a as o,b as t,t as c,F as U,r as E,e as h,f as l,u as p,h as S,w as $,i as N,p as b,j as C}from"./entry.a8736022.js";import{p as a}from"./pocketbase.0539cbe6.js";import{O as k}from"./Options.2334adb3.js";const O={name:"DataDisplay",props:{day_data:{type:Object,default:"Null"},heading:{type:String,default:"err"}},methods:{split_inner(e){return e.split("|")},fmt_data(){const e=this.day_data.hash.split("!!!");for(let n=0;n<e.length;n++)e[n]=e[n].split("|");return e}}},D={class:"data-display"},A={key:1};function T(e,n,d,y,i,_){return s(),o("div",D,[t("h2",null,c(d.heading),1),_.fmt_data()[0]!=""?(s(!0),o(U,{key:0},E(_.fmt_data(),(r,f)=>(s(),o("div",null,[t("p",null,[h(c(r[1])+" "+c(r[2])+" ",1),t("i",null,c(r[5]),1)])]))),256)):(s(),o("div",A," Keine Ereignisse "))])}const w=m(O,[["render",T]]),M={name:"Display",props:{currentUser:a.currentUser},data(){return{h_data:{hash:atob(this.currentUser.h_hash)},m_data:{hash:atob(this.currentUser.m_hash)},days:{day_1:"",day_2:""}}},async mounted(){const e=await a.instance.collection("times").getOne("ux8ausqmf2h57dd");this.days.day_1=e.day_1,this.days.day_2=e.day_2}},V={id:"display"},B={id:"display-container",class:"area",pos:"top"},H=t("div",{id:"seperator"},null,-1);function I(e,n,d,y,i,_){const r=w;return s(),o("div",V,[t("div",B,[l(r,{day_data:i.h_data,heading:i.days.day_1},null,8,["day_data","heading"]),H,l(r,{day_data:i.m_data,heading:i.days.day_2},null,8,["day_data","heading"])])])}const j=m(M,[["render",I]]),F={name:"ScoreDisplay",data(){return{list:[]}},async mounted(){const e=await a.instance.collection("users").getList(1,5,{sort:"-score"});console.log(e),this.list=e.items}},R={class:"area",id:"score-display"},q={id:"score-content"},z=t("h2",null,"EVA SCORE",-1),G=t("h3",null,"DEIN SCORE",-1),K=t("h3",null,"TOP 5 SCORE",-1),P={id:"your-score",class:"score"},W=t("div",{id:"score-seperator"},null,-1),J={id:"top-score",class:"score"},Q={key:0},X={key:0,style:{color:"rgb(157, 241, 154)"}},Y={key:1};function Z(e,n,d,y,i,_){return s(),o("div",R,[t("div",q,[z,G,K,t("div",P,[t("div",null,[t("h2",null,c(p(a).currentUser.score),1)])]),W,t("div",J,[t("div",null,[(s(!0),o(U,null,E(i.list,(r,f)=>(s(),o("div",null,[r.score!=0?(s(),o("div",Q,[r.id==p(a).currentUser.id?(s(),o("div",X,c(r.score),1)):(s(),o("div",Y,c(r.score),1))])):S("",!0)]))),256))])])])])}const tt=m(F,[["render",Z]]),et={components:{Options:k},data(){return{currentUser:a.instance.authStore.model}},methods:{loading(e){const n=e;var d="L\xE4dt";n.innerHTML=d+".",setInterval(function(){n.innerHTML.length>d.length+3?n.innerHTML=d+".":n.innerHTML+="."},400)},async signOut(e){this.loading(e.srcElement),a.instance.authStore.clear()},async deleteAccount(e){const n=prompt("Willst du den Account wirklich l\xF6schen? (ja/nein)");this.currentUser&&n=="ja"&&a.instance.collection("users").delete(this.currentUser.id)}},mounted(){a.instance.authStore.onChange(e=>{this.currentUser=a.instance.authStore.model})}};const u=e=>(b("data-v-f753af9a"),e=e(),C(),e),nt={id:"main-content"},st={key:0,id:"main-settings"},ot={key:0},it={id:"main-heading"},rt=u(()=>t("br",null,null,-1)),at=u(()=>t("br",null,null,-1)),ct={id:"mail-notify"},dt={key:1},_t=u(()=>t("p",{id:"confirm"},"Bitte email best\xE4tigen und danach neu laden",-1)),lt=[_t],ut={key:1},ht=u(()=>t("h1",null,"LMG Vertretungsplan Bot \u{1F916}",-1)),pt=u(()=>t("p",null,"Automatische Nachrichten zu deinen aktuellen Vertetungen/Entf\xE4llen (beta)",-1)),mt=u(()=>t("button",{id:"signin"},"ANMELDEN",-1)),yt=u(()=>t("button",{id:"signin"},"ACCOUNT ERSTELLEN",-1));function ft(e,n,d,y,i,_){var x;const r=j,f=tt,L=k,v=N;return s(),o("div",nt,[i.currentUser?(s(),o("div",st,[i.currentUser.verified?(s(),o("div",ot,[t("h1",it,"HALLO, "+c((x=i.currentUser)==null?void 0:x.email.split("@")[0].toUpperCase()),1),l(r,{currentUser:i.currentUser},null,8,["currentUser"]),l(f),l(L,{currentUser:i.currentUser},null,8,["currentUser"]),t("p",null,[h("Angemeldet!"),rt,h("(user-id: "+c(p(a).currentUser.id)+")",1),at,h("( "),t("i",ct,c(p(a).currentUser.email),1),h(")")])])):(s(),o("div",dt,lt)),t("button",{id:"signout",onClick:n[0]||(n[0]=g=>_.signOut(g))},"ABMELDEN"),t("button",{id:"delete",onClick:n[1]||(n[1]=g=>_.deleteAccount(g))},"ACCOUNT L\xD6SCHEN")])):(s(),o("div",ut,[ht,pt,l(v,{to:"/login"},{default:$(()=>[mt]),_:1}),l(v,{to:"/signup"},{default:$(()=>[yt]),_:1})]))])}const Ut=m(et,[["render",ft],["__scopeId","data-v-f753af9a"]]);export{Ut as default};
