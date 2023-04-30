"use strict";(self.webpackChunkreact_design_pattern_with_medium_clap=self.webpackChunkreact_design_pattern_with_medium_clap||[]).push([[996],{6843:function(t,o,e){var n=e(1889),r=e(890),i=e(184);o.Z=function(t){var o=t.beforeComponent,e=t.beforeSourceCode,a=t.afterComponent,s=t.afterSourceCode;return(0,i.jsxs)(n.ZP,{container:!0,spacing:4,children:[(0,i.jsxs)(n.ZP,{item:!0,children:[(0,i.jsx)(r.Z,{onClick:function(){return window.open(e,"_blank","noopener noreferrer")},sx:{color:"aquamarine",fontWeight:600,cursor:"pointer",textDecoration:"underline"},variant:"h5",children:"Before \ud83d\udd17"}),o]}),(0,i.jsxs)(n.ZP,{item:!0,children:[(0,i.jsx)(r.Z,{onClick:function(){return window.open(s,"_blank","noopener noreferrer")},sx:{color:"#fc90a4",fontWeight:600,cursor:"pointer",textDecoration:"underline"},variant:"h5",children:"After \ud83d\udd17"}),a]})]})}},2451:function(t,o,e){var n=e(890),r=e(184);o.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{variant:"h4",children:"Custom Hooks"}),(0,r.jsx)(n.Z,{variant:"body1",children:"Custom Hooks let you share logic between components."}),(0,r.jsx)(n.Z,{variant:"body1",children:"Strictly speaking, it's not a design pattern, but it comes in handy when you want to reuse your logic."}),(0,r.jsx)(n.Z,{variant:"body1",children:"The benefit of using the custom hook in this case is using the exactly same animation logic with total different UIs."})]})}},5083:function(t,o,e){var n=e(1918),r=e(5527),i=e(1582),a=e(184);o.Z=function(t){var o=t.children,e=t.chipLabel;return(0,a.jsxs)(r.Z,{sx:{padding:"32px",width:"300px",backgroundColor:"#ffffff"},children:[(0,a.jsx)(n.Z,{label:e,color:"primary",sx:{display:"flex",marginBottom:"60px"}}),(0,a.jsx)(i.Z,{sx:{display:"flex",alignItems:"center",position:"relative",padding:"32px"},children:o})]})}},8857:function(t,o,e){var n=e(1413),r=e(9439),i=e(6169),a=e(2791),s=e(3400),p=e(1582),l=e(786),c=e(890),d=e(5083),x=e(8146),u=e(184);o.Z=function(){var t=(0,a.useState)(!1),o=(0,r.Z)(t,2),e=o[0],f=o[1],h=(0,a.useState)(0),b=(0,r.Z)(h,2),Z=b[0],m=b[1],y=(0,a.useState)(200),v=(0,r.Z)(y,2),j=v[0],g=v[1],C=(0,i.q_)({from:{opacity:e?0:1,transition:"ease"},to:[{opacity:e?1:0}],loop:e,config:{duration:1e3}}),w=(0,i.q_)((function(){return{}})),k=(0,r.Z)(w,2),_=k[0],S=k[1],q=(0,i.q_)((function(){return{}})),A=(0,r.Z)(q,2),H=A[0],W=A[1];return(0,u.jsxs)(d.Z,{chipLabel:"The Original Clap \ud83c\udfb6",children:[(0,u.jsx)(i.q.div,{style:(0,n.Z)({position:"relative",opacity:0},_),children:(0,u.jsx)(s.Z,{sx:{padding:"20px",backgroundColor:"#90caf9",width:"20px",height:"20px"},children:(0,u.jsx)(c.Z,{variant:"body2",children:"+".concat(Z)})})}),(0,u.jsx)(c.Z,{variant:"body2",color:"primary",sx:{position:"absolute",top:"6px"},children:j}),(0,u.jsxs)(p.Z,{onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},sx:{position:"absolute"},children:[(0,u.jsx)(i.q.div,{style:(0,n.Z)({borderRadius:"50%",width:"60px",height:" 60px",position:"absolute",boxShadow:"0px 0px 28px #90caf9"},C)}),(0,u.jsx)(i.q.div,{style:(0,n.Z)({opacity:0},H),children:(0,u.jsx)(x.Z,{})}),(0,u.jsx)(s.Z,{onClick:function(){Z<50&&(S.start({from:{opacity:2,transform:"translate(0px, 10px)",transition:"ease-in-out",transitionDelay:"2500"},to:{opacity:0,transform:"translate(0px, -100px)"},config:{duration:700}}),W.start({from:{opacity:10,transform:"scale(0)"},to:{opacity:0,transform:"scale(1)"}}),m(Z+1),g(j+1))},"aria-label":"thumb up",color:"primary",sx:{border:"1px solid",width:"60px",height:"60px",backgroundColor:"#ffffff"},children:(0,u.jsx)(l.Z,{})})]})]})}},265:function(t,o,e){e.d(o,{Z:function(){return h}});var n=e(1413),r=e(6169),i=e(3400),a=e(1582),s=e(786),p=e(890),l=e(9439),c=e(2791),d=function(){var t=(0,c.useState)(!1),o=(0,l.Z)(t,2),e=o[0],n=o[1],i=(0,c.useState)(0),a=(0,l.Z)(i,2),s=a[0],p=a[1],d=(0,c.useState)(200),x=(0,l.Z)(d,2),u=x[0],f=x[1],h=(0,r.q_)({from:{opacity:e?0:1,transition:"ease"},to:[{opacity:e?1:0}],loop:e,config:{duration:1e3}}),b=(0,r.q_)((function(){return{}})),Z=(0,l.Z)(b,2),m=Z[0],y=Z[1],v=(0,r.q_)((function(){return{}})),j=(0,l.Z)(v,2),g=j[0],C=j[1];return{isHover:e,setIsHover:n,addedClap:s,totalClap:u,boxShadowAnimation:h,clapAddedAnimation:m,streamersAnimation:g,handleAddedClap:function(){s<50&&(y.start({from:{opacity:2,transform:"translate(0px, 10px)",transition:"ease-in-out",transitionDelay:"2500"},to:{opacity:0,transform:"translate(0px, -100px)"},config:{duration:700}}),C.start({from:{opacity:10,transform:"scale(0)"},to:{opacity:0,transform:"scale(1)"}}),p(s+1),f(u+1))}}},x=e(5083),u=e(8146),f=e(184),h=function(){var t=d(),o=t.setIsHover,e=t.addedClap,l=t.totalClap,c=t.boxShadowAnimation,h=t.clapAddedAnimation,b=t.streamersAnimation,Z=t.handleAddedClap;return(0,f.jsxs)(x.Z,{chipLabel:"Custom Hook \ud83e\ude9d",children:[(0,f.jsx)(r.q.div,{style:(0,n.Z)({position:"relative",opacity:0},h),children:(0,f.jsx)(i.Z,{sx:{padding:"20px",backgroundColor:"#90caf9",width:"20px",height:"20px"},children:(0,f.jsx)(p.Z,{variant:"body2",children:"+".concat(e)})})}),(0,f.jsx)(p.Z,{variant:"body2",color:"primary",sx:{position:"absolute",top:"6px"},children:l}),(0,f.jsxs)(a.Z,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},sx:{position:"absolute"},children:[(0,f.jsx)(r.q.div,{style:(0,n.Z)({borderRadius:"50%",width:"60px",height:" 60px",position:"absolute",boxShadow:"0px 0px 28px #90caf9"},c)}),(0,f.jsx)(r.q.div,{style:(0,n.Z)({opacity:0},b),children:(0,f.jsx)(u.Z,{})}),(0,f.jsx)(i.Z,{onClick:Z,"aria-label":"thumb up",color:"primary",sx:{border:"1px solid",width:"60px",height:"60px",backgroundColor:"#ffffff"},children:(0,f.jsx)(s.Z,{})})]})]})}},8146:function(t,o,e){var n=e(1413),r=e(184),i={borderRadius:"50%",backgroundColor:"gray",width:"5px",height:"5px"},a={width:0,height:0,borderStyle:"solid"};o.Z=function(){return(0,r.jsxs)("div",{style:{position:"absolute"},children:[(0,r.jsx)("div",{style:(0,n.Z)({position:"absolute",left:"60px"},i)}),(0,r.jsx)("div",{style:(0,n.Z)({borderWidth:"7px 0 0 7px",borderColor:"transparent transparent transparent #ff0033",position:"absolute",top:"-15px",left:"75px"},a)}),(0,r.jsx)("div",{style:(0,n.Z)({position:"absolute",top:"35px",left:"70px"},i)}),(0,r.jsx)("div",{style:(0,n.Z)({borderWidth:"7px 7px 0 0",borderColor:"#ff0033 transparent transparent transparent",position:"absolute",top:"45px",left:"85px"},a)}),(0,r.jsx)("div",{style:(0,n.Z)({position:"absolute",top:"70px",left:"30px"},i)}),(0,r.jsx)("div",{style:(0,n.Z)({borderWidth:"0 3.5px 7px 3.5px",borderColor:"transparent transparent #ff0033 transparent",position:"absolute",top:"85px",left:"30px"},a)}),(0,r.jsx)("div",{style:(0,n.Z)({position:"absolute",top:"45px",left:"-10px"},i)}),(0,r.jsx)("div",{style:(0,n.Z)({borderWidth:"0 7px 7px 0",borderColor:"transparent #ff0033 transparent transparent",position:"absolute",top:"55px",left:"-25px"},a)}),(0,r.jsx)("div",{style:(0,n.Z)({position:"absolute",top:"0px",left:"-5px"},i)}),(0,r.jsx)("div",{style:(0,n.Z)({borderWidth:"0 0 7px 7px",borderColor:"transparent transparent #ff0033 transparent",position:"absolute",top:"-11px",left:"-20px"},a)})]})}},4996:function(t,o,e){e.r(o);var n=e(1582),r=e(6843),i=e(2451),a=e(8857),s=e(265),p=e(184);o.default=function(){return(0,p.jsxs)(n.Z,{spacing:2,children:[(0,p.jsx)(i.Z,{}),(0,p.jsx)(r.Z,{beforeComponent:(0,p.jsx)(a.Z,{}),beforeSourceCode:"https://github.com/12cassie34/react-design-pattern-with-medium-clap/blob/main/src/components/MediumClap.tsx",afterComponent:(0,p.jsx)(s.Z,{}),afterSourceCode:"https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/SingleCustomHook"})]})}},786:function(t,o,e){var n=e(4836);o.Z=void 0;var r=n(e(5649)),i=e(184),a=(0,r.default)((0,i.jsx)("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");o.Z=a}}]);
//# sourceMappingURL=996.1520436f.chunk.js.map