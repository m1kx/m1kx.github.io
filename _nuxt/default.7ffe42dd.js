import{a as c,o as n,b as h,e as i,m as l,h as u}from"./entry.aa2a1419.js";const d={name:"HealthCheck",props:{bot_status:{type:String,default:""}},data(){return{clicks:0}},methods:{navigatetoerr(){var t;this.clicks++,this.bot_status=="sad"&&this.clicks>10&&((t=window.open("https://bothealth.mikadev.tech/health","_blank"))==null||t.focus())}}},p=["src"];function f(t,s,o,_,r,e){return n(),h("div",{id:"health",onClick:s[0]||(s[0]=(...a)=>e.navigatetoerr&&e.navigatetoerr(...a))},[i("img",{src:`robot_${o.bot_status}.svg`},null,8,p)])}const b=c(d,[["render",f]]),m={data(){return{robot_status:""}},methods:{async check_status(){try{(await(await fetch("https://bothealth.mikadev.tech/health")).json()).status=="alive"?this.robot_status="happy":this.robot_status="sad"}catch(t){console.log(t),this.robot_status="sad"}}},mounted(){this.check_status(),setInterval(()=>{this.check_status()},9e3)}};function k(t,s,o,_,r,e){const a=b;return n(),h("div",null,[l(t.$slots,"default"),u(a,{bot_status:r.robot_status},null,8,["bot_status"])])}const $=c(m,[["render",k]]);export{$ as default};
