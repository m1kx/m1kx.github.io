import{p as a}from"./pocketbase.a05c9fd4.js";import{a as u,b as r,l as d,v as p,u as c,t as h,o as _}from"./entry.70609e10.js";import{_ as b}from"./_plugin-vue_export-helper.a1a6add7.js";const f={name:"Options",data(){return{current:"",courses:"",loading_upd:!1}},props:{currentUser:a.currentUser},mounted(){this.courses=this.currentUser.subjects.replaceAll(":",","),this.current=this.currentUser.class,Object.keys(this.$refs).forEach(t=>{const e=this.$refs[t];e.innerHTML==this.current&&e.classList.add("selected")})},methods:{validCheck(){const t=document.getElementsByClassName("valid-check");let e=!0;for(let s=0;s<t.length;s++){const n=t[s];n.checkValidity()||(n.style.outline="3px dashed #942525",setTimeout(()=>{n.style.outline=""},4e3),e=!1)}return e},button_select(t){t.preventDefault();const e=t.srcElement;this.current=e.innerHTML;const s=document.getElementsByClassName("select");for(let n=0;n<s.length;n++){const i=s[n];if(e==i){e.classList.add("selected");continue}i.classList.remove("selected")}},loading(t){const e=t,s=t;s.disabled=!0;const n=t.innerHTML;var i="L\xE4dt";e.innerHTML=i+".",this.loading_upd=!0;var o=setInterval(()=>{if(!this.loading_upd){clearInterval(o),t.innerHTML=n,s.disabled=!1;return}e.innerHTML.length>i.length+3?e.innerHTML=i+".":e.innerHTML+="."},400)},async button_submit(t){if(!this.validCheck()){setTimeout(()=>{alert("Bitte richtige Werte in markierte felder eingeben...")},100);return}if(this.current==""){alert("Bitte eine Stufe angeben...");return}if(this.current==this.currentUser.class&&this.courses.replaceAll(",",":")==this.currentUser.subjects)return;this.loading(t.srcElement);const e={class:this.current,subjects:this.courses.replaceAll(", ",",").replaceAll(",",":")};try{await a.instance.collection("users").update(this.currentUser.id,e),await a.instance.collection("users").update(this.currentUser.id,{new_update:!0})}catch{alert("Ein unerwarteter Fehler ist aufgetreten, versuche es sp\xE4ter erneut..."),this.loading_upd=!1}this.loading_upd=!1}}};const m={id:"login",style:{"text-align":"center"}},g={id:"login-style",class:"area",pos:"bottom"},v=r("h2",{style:{"font-weight":"900","margin-top":"0"}},"DATEN \xC4NDERN",-1),y=r("label",null,"Kurse",-1),k=r("br",null,null,-1);function E(t,e,s,n,i,o){return _(),u("div",m,[r("div",g,[v,y,d(r("input",{onkeyup:"this.value = this.value.toUpperCase();",class:"valid-check","onUpdate:modelValue":e[0]||(e[0]=l=>c(a).data.subjects_formatted=l),id:"courses",type:"text",placeholder:"E G1,D G4,M L1,MU G1",pattern:"^[A-Z]{1,2}\\d?\\s[A-Z][1-9](,\\s?[A-Z]{1,2}\\d?\\s[A-Z][1-9])*$",required:""},null,512),[[p,c(a).data.subjects_formatted]]),r("label",null,"Stufe: "+h(i.current),1),r("button",{ref:"select_button_1",class:"select",onClick:e[1]||(e[1]=l=>o.button_select(l))},"EF",512),r("button",{ref:"select_button_2",class:"select",onClick:e[2]||(e[2]=l=>o.button_select(l))},"Q1",512),r("button",{ref:"select_button_3",class:"select",onClick:e[3]||(e[3]=l=>o.button_select(l))},"Q2",512),k,r("button",{id:"update-button",onClick:e[4]||(e[4]=l=>o.button_submit(l)),style:{"background-color":"rgba(255, 255, 255, 0.162)","margin-top":"35px",width:"50vw"}},"AKTUALISIEREN")])])}const U=b(f,[["render",E]]);export{U as O};
