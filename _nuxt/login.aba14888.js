import{l as d,a as m,b as p,e as t,k as u,v as c,f as h,h as g,w as f,i as v,o as w}from"./entry.bfddb0cf.js";import{p as r}from"./pocketbase.0539cbe6.js";const k={data(){return{password:"",username:"",currentUser:r.instance.authStore.model,loading_auth:!1}},mounted(){r.instance.authStore.onChange(s=>{this.currentUser=r.instance.authStore.model,d("/")}),r.currentUser&&d("/")},methods:{loading(s){const e=s,i=s;i.disabled=!0;const a=s.innerHTML;var n="L\xE4dt";e.innerHTML=n+".",this.loading_auth=!0;var l=setInterval(()=>{if(!this.loading_auth){clearInterval(l),s.innerHTML=a,i.disabled=!1;return}e.innerHTML.length>n.length+3?e.innerHTML=n+".":e.innerHTML+="."},400)},validCheck(){const s=document.getElementsByClassName("valid-check");let e=!0;for(let i=0;i<s.length;i++){const a=s[i];a.checkValidity()||(a.style.outline="3px dashed #942525",setTimeout(()=>{a.style.outline=""},4e3),e=!1)}return e},async login(s){if(!this.validCheck()){setTimeout(()=>{alert("Bitte richtige Werte in markierte felder eingeben...")},100);return}this.loading(s.srcElement);try{await r.instance.collection("users").authWithPassword(this.username,this.password),this.loading_auth=!1}catch{alert("EMail oder Passwort falsch"),this.loading_auth=!1}}}};const x=t("div",{id:"header"},[t("h1",null,"ANMELDEN")],-1),y={id:"main"},T={id:"login"},L={id:"login-style",class:"area"},M=t("label",{for:"email"},"Mail",-1),b=t("label",{for:"password"},"Password",-1),E={class:"or"};function N(s,e,i,a,n,l){const _=v;return w(),p("div",null,[t("div",null,[x,t("div",y,[t("div",T,[t("div",L,[M,u(t("input",{class:"valid-check","onUpdate:modelValue":e[0]||(e[0]=o=>n.username=o),type:"email",required:"",id:"email"},null,512),[[c,n.username]]),b,u(t("input",{class:"valid-check","onUpdate:modelValue":e[1]||(e[1]=o=>n.password=o),type:"password",id:"password",required:"",minlength:"1"},null,512),[[c,n.password]]),t("button",{id:"signin",onClick:e[2]||(e[2]=o=>l.login(o))},"EINLOGGEN"),t("div",E,[h("oder "),g(_,{to:"/signup"},{default:f(()=>[h("registrieren")]),_:1})])])])])])])}const V=m(k,[["render",N]]);export{V as default};
