import{u as s,a as d}from"./use-dark.956905a1.js";import{k as u,c as n,h as c,g as l}from"./index.331a7d37.js";import{h as q}from"./render.5255264d.js";var k=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=l(),t=d(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},q(r.default))}});export{k as Q};
