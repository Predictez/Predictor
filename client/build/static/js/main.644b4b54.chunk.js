(this.webpackJsonppredictor=this.webpackJsonppredictor||[]).push([[0],{188:function(e,t){},248:function(e,t){},320:function(e,t,n){},325:function(e,t){},327:function(e,t){},337:function(e,t){},339:function(e,t){},366:function(e,t){},367:function(e,t){},372:function(e,t){},374:function(e,t){},381:function(e,t){},400:function(e,t){},475:function(e,t){},484:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(121),o=n.n(i),a=(n(320),n(0)),s=n(44),l=n(17),d=n(29),j=n(115),b=n(79),u=n(120),x=n(22),p=n(272),h=n(280),O=n(80),f=n(273),m=n(274),g=n(141),v=n(275),w=n(126),y=(n(35),n(288)),k=n(82),C="KT1QM2Drh18w6fnU13fwxBCDAToWjKfcgZm5",S="KT1U8jQyUkwsYVpgogrjSAKyQXi8kWengpzp",W=new k.b("https://mainnet.api.tez.ie");W.setPackerProvider(new k.a);var D=W.contract,R=new y.a({name:"Predictor",preferredNetwork:"mainnet"});W.setWalletProvider(R);var P=W.wallet,I=function(){var e=c.a.useState(null),t=Object(l.a)(e,2),n=t[0],r=t[1],i=c.a.useState(!1),o=Object(l.a)(i,2),d=o[0],j=o[1];c.a.useEffect((function(){R.client.getActiveAccount().then((function(e){e&&(r(e),j(!0))}))}),[n]);var b=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.client.getActiveAccount();case 2:if(e.sent){e.next=8;break}return e.next=6,R.client.requestPermissions({network:{type:"mainnet",rpcUrl:"https://mainnet.api.tez.ie"}});case 6:(t=e.sent)&&(r(t.accountInfo),j(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{connect:b,disconnect:function(){R.client.clearActiveAccount(),j(!1)},activeAccount:n,connected:d}},T=n(142),z=n(7);function A(){return Object(z.jsx)(g.a,{display:"flex",flexDirection:"row",minHeight:"100vh",height:"100%",justifyContent:"center",alignItems:"center",children:Object(z.jsx)(T.a,{size:"lg"})})}var F=function(){var e=Object(x.e)(),t=e.isOpen,n=e.onOpen,r=e.onClose,c=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var n,r,c,i,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,r=n.tokenId,c=n.amount,console.log(r.value,c.value),e.next=5,P.at(C);case 5:return i=e.sent,e.next=8,i.methods.redeemTokens(parseInt(c.value),parseInt(r.value)).send();case 8:return o=e.sent,e.next=11,o.confirmation(1);case 11:alert("Redemption Completed!");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(p.c,{onClick:n,children:"Redeem"}),Object(z.jsxs)(h.a,{isOpen:t,onClose:r,children:[Object(z.jsx)(h.e,{}),Object(z.jsxs)(h.c,{children:[Object(z.jsx)(h.d,{children:"Redeem Token"}),Object(z.jsx)(h.b,{children:Object(z.jsxs)("form",{onSubmit:c,children:[Object(z.jsx)(O.a,{children:Object(z.jsx)(f.a,{required:!0,type:"number",name:"tokenId",placeholder:"Token ID"})}),Object(z.jsx)(O.a,{children:Object(z.jsx)(f.a,{required:!0,type:"number",name:"amount",placeholder:"Amount"})}),Object(z.jsx)(m.a,{type:"submit",children:"Redeem"})]})})]})]})]})};function B(e){e.links;var t=Object(d.f)(),n=Object(x.e)(),r=n.isOpen,c=n.onOpen,i=n.onClose,o=I(),l=o.connect,j=o.disconnect,b=o.activeAccount,h=o.connected,O=Object(u.c)(),f=O.colorMode,v=O.toggleColorMode,y=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.at(C);case 2:return t=e.sent,e.next=5,t.methods.addProposers(b.address).send();case 5:return n=e.sent,e.next=8,n.confirmation(1);case 8:alert("Proposer Whitelisted!");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.a,{color:Object(u.d)("purple","white"),bg:Object(u.d)("purple.100","purple.900"),px:4,children:[Object(z.jsxs)(g.c,{h:16,alignItems:"center",justifyContent:"space-between",children:[Object(z.jsx)(m.b,{size:"md",icon:r?Object(z.jsx)(w.a,{}):Object(z.jsx)(w.b,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:r?i:c}),Object(z.jsx)(g.d,{spacing:8,alignItems:"center",children:Object(z.jsx)(g.a,{})}),Object(z.jsx)(g.f,{fontSize:"3xl",colorScheme:"blue",fontWeight:"bold",children:"Predictor"}),Object(z.jsxs)(g.c,{alignItems:"center",children:[Object(z.jsx)(m.b,{marginRight:"10px",icon:"dark"===f?Object(z.jsx)(w.d,{}):Object(z.jsx)(w.c,{}),onClick:v}),Object(z.jsx)(g.a,{display:{base:"none",md:"flex"},children:h?Object(z.jsxs)(p.a,{children:[Object(z.jsx)(p.b,{as:m.a,cursor:"pointer",minW:0,children:Object(z.jsx)(g.f,{maxW:"300px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",children:null===b||void 0===b?void 0:b.address})}),Object(z.jsxs)(p.d,{children:[Object(z.jsx)(p.c,{onClick:function(){return t("/mypreds")},children:"My Predictions"}),Object(z.jsx)(p.c,{onClick:y,children:"Whitelist Me"}),Object(z.jsx)(p.c,{onClick:j,children:"Disconnect"}),Object(z.jsx)(M,{}),Object(z.jsx)(F,{})]})]}):Object(z.jsx)(m.a,{onClick:l,children:"Connect Wallet"})})]})]}),r?Object(z.jsx)(g.a,{pb:4,display:{md:"none"},children:Object(z.jsx)(g.e,{as:"nav",spacing:4,children:h?Object(z.jsxs)(p.a,{children:[Object(z.jsx)(p.b,{as:m.a,cursor:"pointer",minW:0,children:Object(z.jsx)(g.f,{maxW:"300px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",children:null===b||void 0===b?void 0:b.address})}),Object(z.jsxs)(p.d,{children:[Object(z.jsx)(p.c,{onClick:function(){return t("/mypreds")},children:"My Predictions"}),Object(z.jsx)(p.c,{onClick:j,children:"Disconnect"})]})]}):Object(z.jsx)(m.a,{onClick:l,children:"Connect Wallet"})})}):null]})}var M=function(){var e=Object(x.e)(),t=e.isOpen,n=e.onOpen,r=e.onClose,i={bg:Object(u.d)("purple.100","purple.700"),text:Object(u.d)("blue","white")},o=I(),d=o.connect,j=(o.disconnect,o.activeAccount),b=o.connected,O=c.a.useState(null),f=Object(l.a)(O,2),m=f[0],v=f[1],w=[];return c.a.useEffect(Object(s.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=3;break}return e.next=3,d();case 3:if(!j){e.next=5;break}return e.delegateYield(Object(a.a)().mark((function e(){var t,n,r,c,i,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(j),console.log(j.address),e.next=4,W.contract.at(S);case 4:return t=e.sent,e.next=7,t.storage();case 7:n=e.sent,r=n.ledger,console.log(r),c=n.all_tokens.toString().split(",").map(Number),console.log(c),i=Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,c[t]),e.next=3,r.get([j.address,c[t]]).then((function(e){e>0&&w.push({id:c[t],balance:e.toString()})})).catch((function(e){return console.log("Error: ".concat(c[t]," ").concat(j.address))}));case 3:console.log(w);case 4:case"end":return e.stop()}}),e)})),o=c.length-1;case 14:if(!(o>=0)){e.next=19;break}return e.delegateYield(i(o),"t0",16);case 16:o--,e.next=14;break;case 19:v(w);case 21:case"end":return e.stop()}}),e)}))(),"t0",5);case 5:case 6:case"end":return e.stop()}}),e)}))),[j]),m?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(p.c,{onClick:n,children:"Portfolio"}),Object(z.jsxs)(h.a,{isOpen:t,onClose:r,children:[Object(z.jsx)(h.e,{}),Object(z.jsxs)(h.c,{children:[Object(z.jsx)(h.d,{children:"Portfolio Details"}),Object(z.jsxs)(h.b,{children:[Object(z.jsxs)(g.f,{color:i.text,children:[" ",Object(z.jsx)("b",{children:" Portfolio "})," "]}),Object(z.jsx)(g.a,{display:"flex",flexDirection:"column",flexWrap:"wrap",children:m.map((function(e,t){return Object(z.jsxs)(g.a,{display:"flex",maxWidth:"400px",flexDirection:"row",border:"0px solid",borderRadius:"15px",padding:"5px",margin:"5px",children:[Object(z.jsxs)(g.f,{color:i.text,children:["Token id \xa0: \xa0 ",e.id," \xa0 |\xa0"]}),Object(z.jsxs)(g.f,{color:i.text,children:["Balance \xa0 : \xa0 ",e.balance,"\u2003"]}),Object(z.jsx)(_,{tokenID:e.id})]},t)}))})]})]})]})]}):Object(z.jsx)(A,{})},_=function(e){var t=Object(x.e)();t.isOpen,t.onOpen,t.onClose;console.log("tokenId",e.tokenID.toString());var n={bg:Object(u.d)("purple.300","purple.600"),text:Object(u.d)("purple","white")},r=function(){var t=Object(s.a)(Object(a.a)().mark((function t(n){var r,c;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=n.target.elements.amount,console.log(e.tokenID,r.value),t.next=5,P.at(C);case 5:return c=t.sent,t.next=8,c.methods.redeemTokens(r.value,e.tokenID).send();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(z.jsxs)(v.a,{returnFocusOnClose:!1,placement:"right",closeOnBlur:!1,children:[Object(z.jsx)(v.e,{children:Object(z.jsx)(m.a,{bg:n.bg,textColor:n.text,children:"Redeem"})}),Object(z.jsxs)(v.c,{textColor:n.text,children:[Object(z.jsx)(v.d,{fontWeight:"semibold",children:"Redeem Token"}),Object(z.jsx)(v.b,{children:Object(z.jsxs)("form",{onSubmit:r,children:[Object(z.jsx)(O.a,{children:Object(z.jsxs)(O.b,{htmlFor:"tokenID",children:["Token Id : ",e.tokenID.toString()," "]})}),Object(z.jsx)(O.a,{children:Object(z.jsx)(f.a,{required:!0,type:"number",name:"amount",placeholder:"Amount"})}),Object(z.jsx)(m.a,{type:"submit",children:"Redeem"})]})})]})]})},q=n(16),E=n(125),N=n(276),U=n(277),L=n(278),V=n(279),H=c.a.createContext({predictions:{},predictionsArray:[],updatePredictions:function(){}}),K=function(e){var t=e.id,n=e.options,r=c.a.useState({option:n[0],quantity:0}),i=Object(l.a)(r,2),o=i[0],d=i[1],j=function(){var e=Object(s.a)(Object(a.a)().mark((function e(n){var r,c,i,o,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.elements,c=r.option,i=r.quantity,e.next=4,P.at(C);case 4:return o=e.sent,t=Number(t),e.next=8,o.methods.voteOnprediction(t,c.value).send({amount:parseFloat(i.value/100)});case 8:return s=e.sent,e.next=11,s.confirmation(1);case 11:alert("Transaction Completed!");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(N.e,{variant:"soft-rounded",width:"100%",children:[Object(z.jsx)(N.b,{children:Object(z.jsx)(N.a,{children:"Options"})}),Object(z.jsxs)(N.d,{children:[Object(z.jsx)(N.c,{children:Object(z.jsx)("form",{onSubmit:j,children:Object(z.jsxs)(g.b,{padding:{base:"0"},display:"flex",flexDirection:"column",children:[Object(z.jsxs)(g.a,{margin:"3",children:[Object(z.jsx)(g.f,{fontWeight:"bold",fontSize:"md",children:"Pick an option"}),Object(z.jsx)(U.b,{onChange:function(e){return d((function(t){return Object(E.a)(Object(E.a)({},t),{},{option:e})}))},value:o.option,name:"option",children:Object(z.jsx)(g.e,{direction:"column",children:n.map((function(e,t){return Object(z.jsx)(U.a,{value:e,children:Object(z.jsx)(g.a,{borderWidth:"1px",borderColor:"gray.400",p:"2",borderRadius:"2xl",children:e})},t)}))})})]}),Object(z.jsxs)(g.a,{margin:"3",children:[Object(z.jsx)(g.f,{fontWeight:"bold",fontSize:"lg",children:"Amount of shares"}),Object(z.jsx)(L.a,{isRequired:!0,placeholder:"Shares",onChange:function(e){return d((function(t){return Object(E.a)(Object(E.a)({},t),{},{quantity:e})}))},value:o.quantity,name:"quantity",children:Object(z.jsx)(L.b,{})})]}),Object(z.jsx)(g.a,{margin:"3",children:Object(z.jsx)(m.a,{type:"submit",children:"Buy"})})]})})}),Object(z.jsx)(N.c,{children:"Lol2"})]})]})};function Q(){var e=Object(d.g)().id;console.log("ID ",e),e=e.toString();var t=c.a.useContext(H).predictions,n=c.a.useState(null),r=Object(l.a)(n,2),i=r[0],o=r[1],j={bg:Object(u.d)("blue.100","blue.900"),text:Object(u.d)("blue","white"),border:Object(u.d)("purple.900","purple.100"),cardBg:Object(u.d)("blue.200","blue.700")};return c.a.useEffect(Object(s.a)(Object(a.a)().mark((function n(){var r,c,i,s,l,d,j,b,u;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get(e).then((function(e){return e}));case 2:return r=n.sent,n.next=5,P.at(C);case 5:return c=n.sent,n.next=8,c.storage();case 8:return i=n.sent,n.next=11,i.predictionVoteSnapshot.get(e).then((function(e){return e}));case 11:s=n.sent,l=[],d=Object(q.a)(s.keys());try{for(d.s();!(j=d.n()).done;)"Total"!=(b=j.value)&&l.push({id:b,value:Math.round(100*s.get(b)/s.get("Total")).toString()}),console.log(l)}catch(a){d.e(a)}finally{d.f()}u=(s.get("Total")/100).toString(),console.log("volume :",u),o({prediction:r.predictionName,lastDate:new Date(r.endTime).toLocaleDateString()+" "+new Date(r.endTime).toLocaleTimeString(),key:e,ref:r.predictionRef,result:r.predictionVoteResult,pstatus:r.predictionStatus,options:r.predictionOptions,snap:l,Volume:u,disclosure:"Predictor is for informational and educational purposes only. We take no custody of anyone's money or cryptocurrency. Predictor displays existing markets live on the Tezos blockchain and is a graphical user interface for both visualizing data and market trends from on-chain activity, and interacting with said smart contracts directly via your Web 3 enabled wallet."});case 18:case"end":return n.stop()}}),n)}))),[]),i?Object(z.jsxs)(g.b,{maxWidth:"100vw",width:"auto",bg:j.bg,color:j.text,height:"auto",minH:"92vh",display:"flex",flexDir:"column",justifyContent:"center",padding:"0 15% 0 15%",children:[Object(z.jsx)(V.a,{allowToggle:!0,margin:"6",children:Object(z.jsxs)(V.c,{children:[Object(z.jsx)("h2",{children:Object(z.jsx)(V.b,{children:Object(z.jsx)(g.a,{flex:"1",children:"Please Read this before making any purchases"})})}),Object(z.jsx)(V.d,{p:"6",children:i.disclosure})]})}),Object(z.jsxs)(g.a,{p:"6",maxW:"max-content",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,overflow:"hidden",display:"flex",flexDirection:"column",flexWrap:"wrap",children:[Object(z.jsxs)(g.f,{fontSize:"sm",children:["Prediction id: ",i.ref," "]}),Object(z.jsx)(g.f,{fontSize:"lg",fontWeight:"bold",margin:{base:"1",md:"1"},maxWidth:"lg",overflow:"visible",textOverflow:"clip",children:i.prediction})]}),Object(z.jsxs)(g.a,{p:"3",maxW:"max-content",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,overflow:"hidden",display:"flex",flexDirection:"row",flexWrap:"wrap",children:[Object(z.jsxs)(g.a,{p:"2",maxW:"sm",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,bg:j.cardBg,overflow:"hidden",display:"flex",flexDir:"column",margin:{base:"0",md:"2"},children:[Object(z.jsx)(g.f,{fontSize:"sm",children:"Open Till"}),Object(z.jsx)(g.f,{fontSize:"l",children:i.lastDate})]}),Object(z.jsxs)(g.a,{p:"2",maxW:"sm",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,bg:j.cardBg,overflow:"hidden",display:"flex",flexDir:"column",margin:{base:"0",md:"2"},children:[Object(z.jsx)(g.f,{fontSize:"sm",children:"Status"}),Object(z.jsx)(g.f,{fontSize:"l",children:i.pstatus})]}),Object(z.jsxs)(g.a,{p:"2",maxW:"sm",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,bg:j.cardBg,overflow:"hidden",display:"flex",flexDir:"column",margin:{base:"0",md:"2"},children:[Object(z.jsx)(g.f,{fontSize:"sm",children:"Result"}),Object(z.jsx)(g.f,{fontSize:"l",children:i.result})]})]}),Object(z.jsx)(g.f,{fontSize:"sm",children:"Volume :"}),Object(z.jsxs)(g.a,{p:"2",maxW:"sm",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,overflow:"hidden",display:"flex",flexDir:"row",flexWrap:"wrap",children:[Object(z.jsxs)(g.a,{p:"2",maxW:"sm",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,bg:j.cardBg,overflow:"hidden",display:"flex",flexDir:"row",margin:{base:"0",md:"1"},children:[Object(z.jsx)(g.f,{color:j.text,children:"Total : \xa0"}),Object(z.jsxs)(g.f,{color:j.text,children:[i.Volume," Tez"]})]}),i.snap.map((function(e,t){return Object(z.jsxs)(g.a,{p:"2",maxW:"sm",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,bg:j.cardBg,overflow:"hidden",display:"flex",flexDir:"row",margin:{base:"0",md:"1"},children:[Object(z.jsxs)(g.f,{color:j.text,children:[e.id," : \xa0"]}),Object(z.jsxs)(g.f,{color:j.text,children:[e.value," %"]})]})}))]}),Object(z.jsx)(g.a,{margin:"6",p:{base:"2",md:"6"},maxW:"max-content",borderWidth:"1px",borderRadius:"lg",borderColor:j.border,overflow:"hidden",display:"flex",flexDirection:"row",flexWrap:"wrap",children:Object(z.jsx)(K,{id:e,options:i.options})})]}):Object(z.jsx)(A,{})}n(484);function Y(){var e=c.a.useContext(H).predictionsArray,t=Object(d.f)(),n={bg:Object(u.d)("blue.100","blue.900"),text:Object(u.d)("blue","white")},r=e.filter((function(e){return"Prediction In-Progress"==e.value.predictionStatus})),i=e.filter((function(e){return"Prediction In-Progress"!=e.value.predictionStatus}));return Object(z.jsxs)(g.b,{width:"auto",maxWidth:"100vw",bg:n.bg,height:"auto",maxHeight:"1000vh",padding:"5vh",children:[Object(z.jsxs)(g.f,{color:n.text,"text-align":"center",children:[" Join the community on  ",Object(z.jsxs)("a",{href:"https://t.me/+wcqQOgMRyMBkZDll",target:"_blank",children:[" ",Object(z.jsx)("b",{children:"telegram"})]})," for any queries.",Object(z.jsx)("br",{})," "]}),Object(z.jsx)(V.a,{allowToggle:!0,margin:"6",children:Object(z.jsxs)(V.c,{children:[Object(z.jsx)("h2",{children:Object(z.jsx)(V.b,{children:Object(z.jsx)(g.a,{flex:"1",children:"Read this to get familiar with Predictor Platform"})})}),Object(z.jsxs)(V.d,{p:"6",children:[" \"Predictor is for informational and educational purposes only. We take no custody of anyone's money or cryptocurrency. ",Object(z.jsx)("br",{}),"Read this ",Object(z.jsxs)("a",{href:"https://medium.com/coinmonks/predictor-da7efb0163ca/",target:"_blank",children:[" ",Object(z.jsx)("b",{children:"article"})]})," to know more about Predictor.",Object(z.jsx)("br",{}),"Read this ",Object(z.jsx)("a",{href:"https://medium.com/@karthi1908/predictor-c90398056061",target:"_blank",children:Object(z.jsx)("b",{children:"article"})})," to get started on Predictor ",Object(z.jsx)("br",{}),"Read this ",Object(z.jsxs)("a",{href:"https://medium.com/@karthi1908/predictor-d01e6c67de0e/",target:"_blank",children:[" ",Object(z.jsx)("b",{children:"article"})]})," to understand how to use predictor to predict events.",Object(z.jsx)("br",{}),'Predictor displays existing markets live on the Tezos blockchain and is a graphical user interface for both visualizing data and market trends from on-chain activity, and interacting with said smart contracts directly via your Web 3 enabled wallet."']})]})}),Object(z.jsxs)(g.a,{display:"flex",flexDirection:"column",flexWrap:"wrap",children:[Object(z.jsxs)(g.f,{color:n.text,children:[" ",Object(z.jsx)("b",{children:"Current Predictions "})]}),Object(z.jsx)(g.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",children:r.map((function(e,r){return Object(z.jsx)(g.a,{onClick:function(){return t("/predict/"+e.id)},display:"flex",maxWidth:"200px",border:"1px solid",borderColor:"purple.400",borderRadius:"20px",flexDirection:"row",padding:"20px",margin:"10px",children:Object(z.jsxs)(g.a,{display:"flex",flexDirection:"column",flexWrap:"wrap",children:[Object(z.jsxs)(g.f,{color:n.text,children:[" ",Object(z.jsx)("b",{children:"ID "}),": ",e.value.predictionRef]}),Object(z.jsxs)(g.f,{color:"orange",children:["  ",e.value.predictionName," "]}),Object(z.jsxs)(g.f,{color:n.text,children:[Object(z.jsx)("b",{children:"Status "}),": ",e.value.predictionStatus]})]})},r)}))}),Object(z.jsxs)(g.f,{color:n.text,children:[" ",Object(z.jsx)("b",{children:"Completed Predictions "})]}),Object(z.jsx)(g.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",children:i.map((function(e,r){return Object(z.jsx)(g.a,{onClick:function(){return t("/predict/"+e.id)},display:"flex",maxWidth:"200px",border:"1px solid",borderColor:"purple.400",flexDirection:"row",borderRadius:"20px",padding:"20px",margin:"10px",children:Object(z.jsxs)(g.a,{display:"flex",flexDirection:"column",flexWrap:"wrap",children:[Object(z.jsxs)(g.f,{color:n.text,children:[" ",Object(z.jsx)("b",{children:"ID "}),": ",e.value.predictionRef]}),Object(z.jsxs)(g.f,{color:"orange",children:["  ",e.value.predictionName," "]}),Object(z.jsxs)(g.f,{color:n.text,children:[Object(z.jsx)("b",{children:"Status "}),": ",e.value.predictionStatus]})]})},r)}))})]})]})}var J=n(10),Z=function(e){var t=e.pred,n={bg:Object(u.d)("blue.200","blue.700"),text:Object(u.d)("blue","white")},r=function(){var e=Object(s.a)(Object(a.a)().mark((function e(n){var r,c,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.elements.option,console.log(r.value),e.next=5,P.at(C);case 5:return c=e.sent,e.next=8,c.methods.predictResults(t.predictionRef,r.value).send();case 8:return i=e.sent,e.next=11,i.confirmation(1);case 11:alert("Result Updated!");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(v.a,{returnFocusOnClose:!1,placement:"right",closeOnBlur:!1,children:[Object(z.jsx)(v.e,{children:Object(z.jsx)(m.a,{bg:n.bg,textColor:n.text,marginLeft:"10px",children:"Result"})}),Object(z.jsxs)(v.c,{textColor:n.text,children:[Object(z.jsx)(v.d,{fontWeight:"semibold",children:"Update Prediction Result"}),Object(z.jsx)(v.b,{children:Object(z.jsxs)("form",{onSubmit:r,children:[Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:t.id+"_status",children:"Options"}),Object(z.jsx)(U.b,{name:"option",children:Object(z.jsx)(g.e,{direction:"column",children:t.predictionOptions.map((function(e,t){return Object(z.jsx)(U.a,{value:e,children:Object(z.jsx)(g.a,{borderWidth:"1px",borderColor:"purple.400",p:"2",borderRadius:"2xl",children:e})},t)}))})})]}),Object(z.jsx)(m.a,{type:"submit",children:"Submit"})]})})]})]})},X=function(e){var t=e.pred,n={bg:Object(u.d)("blue.200","blue.700"),text:Object(u.d)("blue","white")},r=function(){var e=Object(s.a)(Object(a.a)().mark((function e(n){var r,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.elements.status,e.next=4,P.at(C);case 4:return c=e.sent,e.next=7,c.methods.updateStatus(t.predictionRef,r.value).send();case 7:e.sent.confirmation(),alert("Status Updated!");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(v.a,{returnFocusOnClose:!1,placement:"right",closeOnBlur:!1,children:[Object(z.jsx)(v.e,{children:Object(z.jsx)(m.a,{bg:n.bg,textColor:n.text,children:"Update"})}),Object(z.jsxs)(v.c,{textColor:n.text,children:[Object(z.jsx)(v.d,{fontWeight:"semibold",children:"Update Prediction Status"}),Object(z.jsx)(v.b,{children:Object(z.jsxs)("form",{onSubmit:r,children:[Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:t.id+"_status",children:"Status"}),Object(z.jsx)(U.b,{name:"status",children:Object(z.jsx)(g.e,{direction:"column",children:["Prediction In-Progress","Prediction Ended","Result Declared","Cancelled"].map((function(e,t){return Object(z.jsx)(U.a,{value:e,children:Object(z.jsx)(g.a,{borderWidth:"1px",borderColor:"purple.400",p:"2",borderRadius:"2xl",children:e})},t)}))})})]}),Object(z.jsx)(m.a,{type:"submit",children:"Submit"})]})})]})]})},G=function(){var e=c.a.useState(0),t=Object(l.a)(e,2),n=t[0],r=t[1],i=c.a.useState({}),o=Object(l.a)(i,2),d=o[0],j=o[1],b=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var n,r,c,i,o,s,l,j,b;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,r=n.prediction,c=n.resultRef,i=n.start,o=n.end,e.next=4,P.at(C);case 4:return s=e.sent,l=new Date(o.value).toISOString(),j=new Date(i.value).toISOString(),e.next=9,s.methods.addprediction(l,c.value,r.value,Object.keys(d).map((function(e){return d[e]})),j).send({amount:2});case 9:return b=e.sent,e.next=12,b.confirmation(1);case 12:alert("Prediction Created!");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(v.a,{children:[Object(z.jsx)(v.e,{children:Object(z.jsx)(m.a,{children:"Add New Prediction"})}),Object(z.jsx)(v.c,{padding:"4",children:Object(z.jsxs)("form",{onSubmit:b,children:[Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:"prediction",children:"Prediction"}),Object(z.jsx)(f.a,{name:"prediction",id:"prediction"})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:"resultRef",children:"Result Reference"}),Object(z.jsx)(f.a,{name:"resultRef",id:"resultRef"})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:"start",children:"Start"}),Object(z.jsx)(f.a,{type:"datetime-local",name:"start",id:"start"})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:"end",children:"End"}),Object(z.jsx)(f.a,{type:"datetime-local",name:"end",id:"end"})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(O.b,{htmlFor:"number_options",children:"Number of Options"}),Object(z.jsx)(f.a,{onChange:function(e){console.log(e),r(parseInt(e.target.value)||0)},name:"number_options",id:"number_options",type:"number"})]}),Object(J.a)(Array(n).keys()).map((function(e){return Object(z.jsxs)(O.a,{children:[Object(z.jsxs)(O.b,{htmlFor:"option_"+e,children:["Option ",e]}),Object(z.jsx)(f.a,{onChange:function(t){return j((function(n){var r=n;return r["option_".concat(e)]=t.target.value,r}))},name:"option_".concat(e),id:"option_".concat(e)})]})})),Object(z.jsx)(m.a,{type:"submit",children:"Submit"})]})})]})};function $(){var e=c.a.useContext(H).predictionsArray,t=I(),n=t.connected,r=t.connect,i=t.activeAccount,o=c.a.useState([]),d=Object(l.a)(o,2),j=d[0],b=d[1],x={bg:Object(u.d)("blue.100","blue.900"),text:Object(u.d)("blue","white")};return c.a.useEffect((function(){Object(s.a)(Object(a.a)().mark((function t(){var c,o,s,l,d,j;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:return t.next=5,P.at(C);case 5:return c=t.sent,t.next=8,c.storage();case 8:if(o=t.sent,s=o.admin,console.log(s),i){for(l=[],d=0;d<e.length;d++)(j=e[d].value).proposer!==i.address&&s!==i.address||l.push(j);console.log(l),b(l)}case 12:case"end":return t.stop()}}),t)})))()}),[i]),j?Object(z.jsxs)(g.b,{width:"auto",maxWidth:"100vw",bg:x.bg,height:"auto",maxHeight:"100vh",padding:"10vh",children:[Object(z.jsx)(G,{}),Object(z.jsx)(g.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",children:j.map((function(e,t){return Object(z.jsxs)(g.a,{display:"flex",maxWidth:"300px",border:"1px solid",borderRadius:"15px",padding:"20px",margin:"10px",children:[Object(z.jsx)(g.f,{color:x.text,children:e.predictionName}),Object(z.jsx)(X,{pred:e}),Object(z.jsx)(Z,{pred:e})]},t)}))})]}):Object(z.jsx)(A,{})}var ee=function(){var e=c.a.useState(null),t=Object(l.a)(e,2),n=t[0],r=t[1],i=c.a.useState([]),o=Object(l.a)(i,2),x=o[0],p=o[1],h=function(e,t){r(e),p(t)};return Object(d.g)().id,c.a.useEffect((function(){D.at(C).then(function(){var e=Object(s.a)(Object(a.a)().mark((function e(t){var n,r,c,i,o,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.storage();case 2:n=e.sent,r=n.predictions,c=n.Id,i=[],o=Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get(t).then((function(e){i.push({id:t,value:e})}));case 2:case"end":return e.stop()}}),e)})),s=10;case 8:if(!(s<c)){e.next=13;break}return e.delegateYield(o(s),"t0",10);case 10:s++,e.next=8;break;case 13:h(r,i);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(z.jsx)(b.a,{children:Object(z.jsx)(u.a,{options:{initialColorMode:"dark",useSystemColorMode:!0},children:n?Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(H.Provider,{value:{predictions:n,predictionsArray:x,updatePredictions:h},children:Object(z.jsxs)(j.a,{children:[Object(z.jsx)(B,{}),Object(z.jsxs)(d.c,{children:[Object(z.jsx)(d.a,{exact:!0,path:"/",element:Object(z.jsx)(Y,{})}),Object(z.jsx)(d.a,{path:"/predict/:id",element:Object(z.jsx)(Q,{})}),Object(z.jsx)(d.a,{path:"/mypreds",element:Object(z.jsx)($,{})})]})]})})}):Object(z.jsx)(A,{})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,494)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};o.a.render(Object(z.jsxs)(c.a.StrictMode,{children:[Object(z.jsx)(u.b,{initialColorMode:"dark"}),Object(z.jsx)(ee,{})]}),document.getElementById("root")),te()}},[[485,1,2]]]);
//# sourceMappingURL=main.644b4b54.chunk.js.map