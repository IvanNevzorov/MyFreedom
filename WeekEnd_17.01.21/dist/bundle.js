(()=>{"use strict";const e=document.querySelector("#divMessages"),t=document.querySelector("#inputUser"),s=document.querySelector(".seletUser"),n=document.querySelector(".messages");let c,o="";function a(t){e.innerHTML+=`<div class="${t.user}">${t.user}:${t.message}</div>`}const r=document.querySelector("#inputMessages"),u=document.querySelector("#btnSend"),l=document.querySelector("#btnChoose"),i=document.querySelector("#btnClear");c=new WebSocket("ws://localhost:8081"),c.onopen=function(e){const t=JSON.stringify({type:"onload"});c.send(t)},c.onmessage=function(t){const{type:s,data:n}=JSON.parse(t.data);switch(s){case"allMessages":n.forEach((e=>{a(e)}));break;case"message":a(n);break;case"clear":e.innerHTML=""}},u.addEventListener("click",(e=>{e.preventDefault(),function(e){const t=JSON.stringify({type:"message",data:{user:o,message:e}});c.send(t)}(r.value)})),l.addEventListener("click",(function(){o=t.value,s.style.display="none",n.style.display="block"})),i.addEventListener("click",(function(){const e=JSON.stringify({type:"clear",data:{}});c.send(e)}))})();