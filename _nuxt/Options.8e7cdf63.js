import{p as o}from"./pocketbase.0539cbe6.js";import{a as d,b as h,f as n,h as u,t as a,k as p,v as g,o as f}from"./entry.bb58152b.js";const _={name:"Options",data(){return{current:"",courses:"",loading_upd:!1}},props:{currentUser:o.currentUser},mounted(){this.courses=this.currentUser.subjects.replaceAll(":",","),this.current=this.currentUser.class,setTimeout(()=>{const t=document.getElementsByClassName("select");for(let e=0;e<t.length;e++){const s=t[e];s.innerHTML==this.current&&s.classList.add("selected"),s.onclick=()=>{s.classList.add("selected");for(let r=0;r<t.length;r++)t[r]!=s&&t[r].classList.remove("selected")}}},200)},methods:{validCheck(){const t=document.getElementsByClassName("valid-check");let e=!0;for(let s=0;s<t.length;s++){const r=t[s];r.checkValidity()||(r.style.outline="3px dashed #942525",setTimeout(()=>{r.style.outline=""},4e3),e=!1)}return e},button_select(t){t.preventDefault(),this.current=t.srcElement.innerHTML},loading(t){const e=t,s=t;s.disabled=!0;const r=t.innerHTML;var i="L\xE4dt";e.innerHTML=i+".",this.loading_upd=!0;var c=setInterval(()=>{if(!this.loading_upd){clearInterval(c),t.innerHTML=r,s.disabled=!1;return}e.innerHTML.length>i.length+3?e.innerHTML=i+".":e.innerHTML+="."},400)},async button_submit(t){if(!this.validCheck()){setTimeout(()=>{alert("Bitte richtige Werte in markierte felder eingeben...")},100);return}if(this.current==""){alert("Bitte eine Stufe angeben...");return}if(this.current==this.currentUser.class&&this.courses.replaceAll(",",":")==this.currentUser.subjects)return;this.loading(t.srcElement);const e={class:this.current,subjects:this.courses.replaceAll(",",":")};try{await o.instance.collection("users").update(this.currentUser.id,e),await o.instance.collection("users").update(this.currentUser.id,{update:!0})}catch{alert("Ein unerwarteter Fehler ist aufgetreten, versuche es sp\xE4ter erneut..."),this.loading_upd=!1}this.loading_upd=!1}}};const m={id:"login",style:{"text-align":"center"}},b={id:"login-style",class:"area"},v=n("h2",{style:{"text-decoration":"underline","underline-offset":"10px","font-weight":"500","margin-top":"0"}},"Daten Aktualisieren",-1),k={class:"highlight"},x={class:"highlight"},y=n("label",null,"Kurse",-1),L=n("br",null,null,-1);function T(t,e,s,r,i,c){return f(),h("div",m,[n("div",b,[v,n("div",null,[u("(Kurse aktuell: "),n("div",k,a(s.currentUser.subjects.replaceAll(":",",")),1),u(" & Stufe: "),n("div",x,a(s.currentUser.class),1),u(")")]),y,p(n("input",{onkeyup:"this.value = this.value.toUpperCase();",class:"valid-check","onUpdate:modelValue":e[0]||(e[0]=l=>i.courses=l),id:"courses",type:"text",placeholder:"E G1,D G4,M L1,MU G1",pattern:"^([A-Z]{1,2} [A-Z]\\d)(,([A-Z]{1,2} [A-Z]\\d))*$",required:""},null,512),[[g,i.courses]]),n("label",null,"Stufe: "+a(i.current),1),n("button",{class:"select",onClick:e[1]||(e[1]=l=>c.button_select(l))},"EF"),n("button",{class:"select",onClick:e[2]||(e[2]=l=>c.button_select(l))},"Q1"),n("button",{class:"select",onClick:e[3]||(e[3]=l=>c.button_select(l))},"Q2"),L,n("button",{onClick:e[4]||(e[4]=l=>c.button_submit(l)),style:{"background-color":"rgba(255, 255, 255, 0.162)","margin-top":"35px",width:"50vw"}},"OK")])])}const E=d(_,[["render",T]]);export{E as O};
