(this.webpackJsonplobby=this.webpackJsonplobby||[]).push([[0],{101:function(e,t,a){},104:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(17),c=a.n(r),o=(a(91),a(9)),i=a(26),l=a(18),d=a.n(l);var u=new Proxy({},{get:function(e,t){return void 0===e[t]?function(e){return{type:(a=t,a.replace(/([A-Z])/g,"_$1").toUpperCase()),payload:e};var a}:e[t]}}),p="",j=a(19),h=a(68);var f=a(8),b=a.n(f),m={leaderStatic:{sumContacts:0,sumPapers:0,sumProjects:0,sumTasks:0},GougeContact:"0",dataStatic:[],AllProject:[],AllTask:[],AllContact:[],AllPapers:[],jwt:"",papers:[0,0,0,0,0,0,0,0,0,0,0,0,0],projects:[0,0,0,0,0,0,0,0,0,0,0,0,0],tasks:[0,0,0,0,0,0,0,0,0,0,0,0,0],contacts:[0,0,0,0,0,0,0,0,0,0,0,0,0],user:{}},g={setJwt:function(e,t){e.jwt=t.payload},setUserName:function(e,t){e.user.username=t.payload},setUser:function(e,t){e.user=t.payload},setContactStatic:function(e,t){e.leaderStatic.sumContacts=t.payload},setProjectStatic:function(e,t){e.leaderStatic.sumProjects=t.payload},setProjectData:function(e,t){null!=t.payload?e.AllProject=t.payload.result:e.AllProject=t.payload},setTaskStatic:function(e,t){e.leaderStatic.sumTasks=t.payload},setTaskData:function(e,t){e.AllTask=t.payload},setTaskChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(null!=t.payload){for(var a=t.payload,s=Object(j.a)(e.tasks),n=0;n<a.length;n++){var r=a[n].startDate.split("/"),c=r[1];if(0!=c[0]){var o=s[c]+1;s[c]=o}else{var i=s[c=c[1]]+1;s[c]=i}}e.tasks=Object(j.a)(s)}},setProjectChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(null!=t.payload){for(var a=t.payload.result,s=Object(j.a)(e.projects),n=0;n<a.length;n++){var r=a[n].closeDate,c=b()(r).format("MM/DD/YYYY").split("/"),o=c[0];if(0!=o[0]){var i=s[o]+1;s[o]=i}else{var l=s[o=o[1]]+1;s[o]=l}}e.projects=Object(j.a)(s)}},setContactChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(null!=t.payload){var a=t.payload;console.log(m.contacts);for(var s=Object(j.a)(e.contacts),n=0;n<a.length;n++){var r=a[n].createDateAndTime,c=b()(r).format("MM/DD/YYYY").split("/"),o=c[0];if(0!=o[0]){var i=s[o]+1;s[o]=i}else{var l=s[o=o[1]]+1;s[o]=l}}e.contacts=Object(j.a)(s)}},setPaperChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(null!=t.payload){var a=t.payload;console.log(m.papers);for(var s=Object(j.a)(e.papers),n=0;n<a.length;n++){var r=a[n].createdDate,c=b()(r).format("MM/DD/YYYY").split("/"),o=c[0];if(0!=o[0]){var i=s[o]+1;s[o]=i}else{var l=s[o=o[1]]+1;s[o]=l}}e.papers=Object(j.a)(s)}},setPaperStatic:function(e,t){e.leaderStatic.sumPapers=t.payload},setContactData:function(e,t){e.AllContact=t.payload},setPaperData:function(e,t){e.AllPapers=t.payload}},v=Object(h.a)((function(e,t){return function(e,t,a){var s=a[t.type.toLowerCase().replace(/_(\w)/g,(function(e){return e[1].toUpperCase()}))];s&&s(e,t)}(e,t,g)}),m),x=a(69),O=Object(i.combineReducers)({staticDetailsReducer:v}),y=Object(i.createStore)(O,Object(x.composeWithDevTools)(Object(i.applyMiddleware)((function(e){var t=e.dispatch;e.getState;return function(e){return function(a){if("EXTRACT_JWT"===a.type){var s=new URL(document.location).searchParams.get("jwt");if(s){var n=window.location.href;n=(n=n.split("?jwt="))[0];var r=new Date(Date.now()+864e5),c="expires="+(r=r.toUTCString());document.cookie="devJwt="+s+";"+c+";domain=.dev.leader.codes;path=/",window.location.replace(n)}else t({type:"INIT_DATA"})}return e(a)}}}),(function(e){var t=e.dispatch;e.getState;return function(e){return function(a){if("INIT_DATA"===a.type){var s=window.location,n=s.pathname.split("/")[1];return p=document.cookie.includes("devJwt")?document.cookie.split(";").filter((function(e){return e.includes("devJwt")}))[0].split("=").pop():null,t(u.setJwt(p)),t(u.setUserName(n)),fetch("https://lobby.dev.leader.codes/api/".concat(n,"/getUserByUserName"),{method:"GET",headers:{authorization:p}}).then((function(e){return 401===e.status&&window.location.assign("https://accounts.codes/lobby/login"),e.json()})).then((function(e){t(u.setUser(e)),console.log("All User Details"+e),fetch("https://contacts.dev.leader.codes/api/deal/".concat(n,"/getAllDealsByUser"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:p}}).then((function(e){return e.json()})).then((function(e){if(!e.status){var a=e;if(a&&0!==a.length){var s=a.result.length;t(u.setProjectStatic(s)),t(u.setProjectData(a)),t(u.setProjectChart(a)),console.log(e)}else t(u.setProjectStatic("0")),t(u.setProjectData(null)),t(u.setProjectChart(null))}})),fetch("https://reacthub.dev.leader.codes/api/".concat(n,"/getAllTasksForUser"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:p}}).then((function(e){return e.json()})).then((function(e){if(e.status)t(u.setTaskStatic("0")),t(u.setTaskData(null)),t(u.setTaskChart(null));else{var a=e.userTasksList;if(a&&0!==a.length){var s=e.countTasksForUser;t(u.setTaskStatic(s)),t(u.setTaskData(a)),t(u.setTaskChart(a)),console.log("task data!!!!!!!!@@@@@"+e)}}})),fetch("https://papers.dev.leader.codes/api/".concat(n,"/getAllQuote"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:p}}).then((function(e){return e.json()})).then((function(e){if(e.status)t(u.setPaperStatic("0")),t(u.setPaperData(null)),t(u.setPaperChart(null));else if(e.quotes&&0!==e.quotes.length){var a=e.quotes.length,s=e.quotes;t(u.setPaperStatic(a)),t(u.setPaperData(s)),t(u.setPaperChart(s)),console.log(e)}})),fetch("https://api.dev.leader.codes/".concat(n,"/getContacts/?includesConversations=false"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:p}}).then((function(e){return e.json()})).then((function(e){if(e.status)t(u.setContactStatic("0")),t(u.setContactData(null)),t(u.setContactChart(null));else{var a=e;if(a&&0!==a.length){var s=a.length;t(u.setContactStatic(s)),t(u.setContactData(a)),t(u.setContactChart(a)),console.log(a)}}}))}),(function(e){return e})).catch((function(e){console.log(e)}))}return e(a)}}}))));window.store=y;var D=y;y.dispatch({type:"EXTRACT_JWT"});var w=a(3),C=a(149),k=a(150),A=a(148),S=a(147),T=a(48),Y=a(80),P=(a(101),a(39),a(42)),N=a.n(P),F=a(1);function M(){var e=Object(o.c)((function(e){return e.staticDetailsReducer})),t={series:[{name:" ",data:[e.leaderStatic.sumContacts,e.leaderStatic.sumPapers,e.leaderStatic.sumProjects,e.leaderStatic.sumTasks]}],options:{xaxis:{type:"category",categories:[],labels:{show:!1}},grid:{show:!0,borderColor:"#90A4AE",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1},labels:{show:!1}},yaxis:{lines:{show:!1},gridlines:{count:-1}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5}},chart:{height:350,type:"bar",background:"#fff",toolbar:{show:!1}},colors:["rgb(221, 162, 4)","rgb(14, 186, 165)","rgb(103, 114, 222)","rgb(255, 69, 96)"],plotOptions:{bar:{borderRadius:6,columnWidth:"50%",distributed:!0}},labels:["contacts","papers","Deals","tasks"],dataLabels:{show:!1,enabled:!1},legend:{show:!1,display:!1},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!1,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!0,theme:!0,style:{fontSize:"12px",fontFamily:void 0,backgroundColor:"white"},onDatasetHover:{highlightDataSeries:!0},x:{show:!0,format:"dd MMM",formatter:void 0},y:{show:!0,formatter:void 0,title:{formatter:function(e){return e}}},marker:{show:!0},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}}}};return Object(F.jsx)("div",{id:"chart",children:Object(F.jsx)(N.a,{options:t.options,series:t.series,type:"bar",height:"110%",width:"86%"})})}function E(){var e=Object(o.c)((function(e){return e.staticDetailsReducer}));console.log(e);var t=b()().format("YYYY"),a={series:[{name:"Contacts",data:[e.contacts[1],e.contacts[2],e.contacts[3],e.contacts[4],e.contacts[5],e.contacts[6],e.contacts[7],e.contacts[8],e.contacts[9],e.contacts[10],e.contacts[11],e.contacts[12]]},{name:"Papers",data:[e.papers[1],e.papers[2],e.papers[3],e.papers[4],e.papers[5],e.papers[6],e.papers[7],e.papers[8],e.papers[9],e.papers[10],e.papers[11],e.papers[12]]},{name:"Deals",data:[e.projects[1],e.projects[2],e.projects[3],e.projects[4],e.projects[5],e.projects[6],e.projects[7],e.projects[8],e.projects[9],e.projects[10],e.projects[11],e.projects[12]]},{name:"Tasks",data:[e.tasks[1],e.tasks[2],e.tasks[3],e.tasks[4],e.tasks[5],e.tasks[6],e.tasks[7],e.tasks[8],e.tasks[9],e.tasks[10],e.tasks[11],e.tasks[12]]}],options:{title:{text:"Total Year ".concat(t),align:"center",margin:15,floating:!1,style:{fontSize:"12px",fontWeight:"bold",fontFamily:void 0,color:"#263238",textAlign:"center"}},legend:{show:!1},scales:{},colors:["rgb(221, 162, 4)","rgb(14, 186, 165)","rgb(103, 114, 222)","rgb(253, 36, 67)"],chart:{background:"#fff",zoom:{enabled:!1},height:350,type:"line",stacked:!1,toolbar:{show:!1}},dataLabels:{enabled:!1},grid:{show:!1,borderColor:"#90A4AE",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}}},stroke:{curve:"smooth",width:1},xaxis:{categories:["01","02","03","04","05","06","07","08","09","10","11","12"]}}};return Object(F.jsxs)("div",{id:"chart",className:"return-chart",children:[e.leaderStatic.sumDeals,Object(F.jsx)(N.a,{options:a.options,series:a.series,type:"line",height:"110%",width:"88%"})]})}var B={padding:6,margin:6,display:"inline-block",backgroundColor:"rgb(247, 181, 0)",borderRadius:"50%",width:1,height:1,left:0,top:0},R={padding:6,margin:6,display:"inline-block",backgroundColor:"rgb(1, 220, 209)",borderRadius:"50%",width:1,height:1,left:0,top:0},z={padding:6,margin:6,display:"inline-block",backgroundColor:"rgb(103, 114, 222)",borderRadius:"50%",width:1,height:1,left:0,top:0},W={padding:6,margin:6,display:"inline-block",backgroundColor:"#ff4560",borderRadius:"50%",width:1,height:1,left:0,top:1};function I(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"container mt-5 container-chart",children:Object(F.jsxs)("div",{className:" d-flex justify-content-between align-items-center myClass in-small-screen",children:[Object(F.jsx)("div",{className:"marginClass",children:Object(F.jsx)(M,{})}),Object(F.jsx)("div",{class:"add-div",children:Object(F.jsxs)(k.a,{expand:"md",variant:"light",className:"justify-content-end is-small",children:[Object(F.jsx)("p",{style:B}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Contacts"}),Object(F.jsx)("div",{style:R}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Papers"}),Object(F.jsx)("div",{style:z}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Deals"}),Object(F.jsx)("div",{style:W}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Tasks"})]})}),Object(F.jsxs)("div",{className:"marginClass1",children:[Object(F.jsx)(E,{}),Object(F.jsx)("div",{class:"add-div",children:Object(F.jsxs)(k.a,{expand:"md",variant:"light",className:"justify-content-end is-small1",children:[Object(F.jsx)("p",{style:B}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Contacts"}),Object(F.jsx)("div",{style:R}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Papers"}),Object(F.jsx)("div",{style:z}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Deals"}),Object(F.jsx)("div",{style:W}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Tasks"})]})})]})]})})})}a(61);var L=a(10),U=a.p+"static/media/box.757d446b.svg",J=a.p+"static/media/crm.b1ec1d28.svg",q=a.p+"static/media/papers.51e63f3b.svg",G=a.p+"static/media/time.0d22d1a2.svg",H=(a.p,a.p+"static/media/hub.86ace7ea.svg"),_=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/hoverBox.5f8dd86f.svg"),V=(a.p,a.p+"static/media/hoverHub.357848ca.svg"),X=a.p+"static/media/hoverPapers.840861d7.svg",Q=a.p+"static/media/hoverCrm.8912cc1a.svg",Z=a.p+"static/media/hoverTime.9ad7fa11.svg",$=(a.p,a(75));var K=function(e){var t,a=Object(o.c)((function(e){return e.staticDetailsReducer})),n=Object(s.useState)(-1),r=Object(w.a)(n,2),c=r[0],i=r[1],l=Object(s.useState)(-1),d=Object(w.a)(l,2),u=(d[0],d[1]),p=Object(s.useState)(!1),j=Object(w.a)(p,2),h=j[0],f=(j[1],Object(s.useState)(!0)),b=Object(w.a)(f,2),m=b[0],g=(b[1],[{i:0,title:"Box",text:"CRM For Managing All Client Contact And Interactions Using Leader Tools",isActiveApp:!0,color:"#2198FF",overColor:"#EFF7FF",img:U,overImg:_,url:"https://box.dev.leader.codes/".concat(a.user.username),leader:!0},{i:2,title:"Hub",text:"Manage Your Projects, Teams And Tasks, Priorities And Performance Goals",isActiveApp:!0,color:"#6DD400",overColor:"#FAFFF5",overImg:V,img:H,url:"https://reacthub.dev.leader.codes/".concat(a.user.username,"/hub"),leader:!0},{i:4,title:"Time",text:"Intergrated Calendar For Managing Leads, Meetings Events And Deadlines",isActiveApp:!0,color:"#B620E0",overColor:"#FCF1FF",img:G,overImg:Z,url:"https://calendar.dev.leader.codes/".concat(a.user.username),leader:!0},{i:5,title:"papers",text:"Intuitive Form Builder Including Api Integration With Popular Applications",isActiveApp:!1,color:"#F7B500",overColor:"#FFFAEE",overImg:X,img:q,url:"https://papers.dev.leader.codes/admin/".concat(a.user.username),leader:!0},{i:6,title:"Contacts",text:"Customizable Proposal Templates For Customer Quotations And Contracts",isActiveApp:!0,color:"#6236FF",overColor:"#F4F2FF",overImg:Q,img:J,url:"https://contacts.dev.leader.codes/".concat(a.user.username),leader:!0}]);return"https://dev.vloger.codes/admin/".concat(a.user.username,"?jwt=").concat(a.jwt),"https://quote.dev.leader.codes/".concat(a.user.username,"/NewLead"),"https://quote.dev.leader.codes/".concat(a.user.username,"/NewLead"),"https://quote.dev.leader.codes/".concat(a.user.username,"/NewLead"),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"warpDiv space row  offset-2 col-8  d-flex justify-content-center align-items-center",children:[Object(F.jsx)("div",{className:"height col-12 d-flex justify-content-center",children:Object(F.jsx)("div",{className:"imgProfil in-small-profil mt-3 align-items-center",children:e.inMore?" ":Object(F.jsx)("div",{className:"inmore"})})}),Object(F.jsx)("div",{className:"title col-12 mb-4 divTitle",children:Object(F.jsx)("h2",{className:"title",children:"What do you want to do?"})}),"\u200f",(t=g,Object(F.jsx)("div",{className:"row all-apps-in-small in-large",children:t.map((function(e){return e&&Object(F.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xs-12 mb-5 d-flex justify-content-center",children:Object(F.jsxs)("div",{class:"box myCard",style:{backgroundColor:c===e.i?e.overColor:"#F4F2FF",animation:!e.leader&&h?$.animations.fadeIn:!e.leader&&console.log("animations.fadeOut")},onClick:function(){window.open(e.url),window.open(e.url)},onMouseEnter:function(){i(e.i)},onMouseLeave:function(){i(-1),u(-1)},hidden:e.i>6&&m,children:[Object(F.jsx)("img",Object(L.a)({className:"offset-2 mt-2 mb-0  d-flex align-items-center appIcon",src:e.img,alt:"img"},"src",c===e.i?e.overImg:e.img)),Object(F.jsx)("div",{class:"hid-box",style:{backgroundColor:e.color},children:e.i===c?Object(F.jsx)("p",{className:"myCardText p-2 m-1",children:e.text}):Object(F.jsx)("p",{className:"myCardTitle p-2 mt-2",children:e.title})})]})})}))}))]})})},ee=(a(104),a(23)),te=a.n(ee);function ae(){var e=Object(o.c)((function(e){return e.staticDetailsReducer}));return console.log(e.leaderStatic.sumProjects+"in gouge2"),Object(F.jsx)(te.a,{value:e.leaderStatic.sumContacts,width:100,forceRender:!0,height:100,fluidWidth:!1,valueTextFontSize:"0px",needleHeightRatio:.4,ringWidth:16,maxValue:5e3,needleColor:"#2E2E2E",segmentColors:["#F7B400","#D99E00","#C38E00","#8E6800","#6A4E00"],labelFontSize:"0"})}function se(){var e=Object(o.c)((function(e){return e.staticDetailsReducer}));return console.log(e.leaderStatic.sumProjects+"in gouge2"),Object(F.jsx)(te.a,{value:e.leaderStatic.sumTasks,width:100,forceRender:!0,height:100,fluidWidth:!1,valueTextFontSize:"0px",needleHeightRatio:.4,ringWidth:16,maxValue:500,needleColor:"#2E2E2E",segmentColors:["#FF4560","#E6223F","#9A0017","#67000F","#3C0009"],labelFontSize:"0"})}function ne(){var e=Object(o.c)((function(e){return e.staticDetailsReducer}));return console.log(e.leaderStatic.sumProjects+"in gouge2 in deals"),Object(F.jsx)(te.a,{value:e.leaderStatic.sumProjects,width:100,forceRender:!0,height:100,fluidWidth:!1,valueTextFontSize:"0px",needleHeightRatio:.4,ringWidth:16,maxValue:500,needleColor:"#2E2E2E",segmentColors:["#3B68FF","#1F50F4","#002AB5","#001E81","#041755"],labelFontSize:"0"})}function re(){var e=Object(o.c)((function(e){return e.staticDetailsReducer}));return console.log(e.leaderStatic.sumProjects+"in gouge2"),Object(F.jsx)(te.a,{value:e.leaderStatic.sumPapers,width:100,height:100,forceRender:!0,fluidWidth:!1,valueTextFontSize:"0px",needleHeightRatio:.4,maxValue:500,ringWidth:16,needleColor:"#2E2E2E",segmentColors:["#00DEC2","#08C4AC","#05AA95","#03675A","#02433B"],labelFontSize:"0"})}var ce=b()().format("MM/DD/YYYY"),oe=b()().subtract(1,"week").format("MM/DD/YYYY"),ie=b()().subtract(1,"month").format("MM/DD/YYYY"),le=b()().subtract(1,"year").format("MM/DD/YYYY"),de={padding:6,margin:6,display:"inline-block",backgroundColor:"#DDA204",borderRadius:"50%",width:1,height:1,left:0,top:0},ue={padding:6,margin:6,display:"inline-block",backgroundColor:"#0EBAA5",borderRadius:"50%",width:1,height:1,left:0,top:0},pe={padding:6,margin:6,display:"inline-block",backgroundColor:"rgb(103, 114, 222)",borderRadius:"50%",width:1,height:1,left:0,top:0},je={padding:6,margin:6,display:"inline-block",backgroundColor:"#FD2443",borderRadius:"50%",width:1,height:1,left:0,top:1},he=Object(T.a)((function(){return{root:{width:"100%",maxWidth:360,background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},paper:{borderRadius:"17px",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}}))((function(){var e=Object(o.c)((function(e){return e.staticDetailsReducer})),t=e.user,a=Object(o.b)(),n=Object(s.useState)(!1),r=Object(w.a)(n,2),c=r[0],i=r[1],l=Object(s.useState)(!0),p=Object(w.a)(l,2),j=p[0],h=p[1];return Object(F.jsxs)("div",{children:[Object(F.jsx)(Y.a,{appName:"Leader",userName:t?t.username:""}),Object(F.jsxs)("div",{className:"firstDiv",style:{backgroundColor:"rgb(248, 249, 250)",paddingTop:"80px"},children:[Object(F.jsxs)("div",{className:"row pb-5",style:{marginRight:"5%",marginLeft:"5%"},children:[Object(F.jsx)("div",{className:"col-3.5",style:{direction:"rtl"},children:Object(F.jsx)("div",{className:"col-3.5",style:{direction:"rtl"}})}),"\u200f",Object(F.jsxs)(S.a,{container:!0,className:"grid-container",spacing:4,children:[Object(F.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(F.jsxs)(A.a,{className:"paperOne",onClick:function(){window.open(" https://contacts.dev.leader.codes/".concat(t.username))},style:{cursor:"pointer",padding:10,borderRadius:"14px",background:"#fff",height:" 100px",width:"240px",color:"#DDA204"},children:[Object(F.jsxs)("div",{className:"ml-2 total",style:{textAlign:"start",fontWeight:"bolder",color:"black",fontSize:"12px"},children:["Total Contacts "," "]}),Object(F.jsxs)("div",{class:"row justify-content-between",children:[Object(F.jsx)("div",{className:"ml-2",children:Object(F.jsx)("div",{class:"col-6 p-2",children:Object(F.jsx)("h6",{style:{fontSize:"19px",color:"#DDA204"},className:"h6",children:e.leaderStatic.sumContacts?e.leaderStatic.sumContacts+"/5000":"0/5000"})})}),Object(F.jsx)("div",{className:"gouge",children:Object(F.jsx)(ae,{className:"gouge1"})})]}),Object(F.jsx)("div",{className:"row",style:{margin:"1px",fontWeight:"bolder"}})]})}),Object(F.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(F.jsxs)(A.a,{className:"paperTwo",onClick:function(){window.open("https://papers.dev.leader.codes/admin/".concat(t.username))},style:{padding:10,background:"#fff",cursor:"pointer",color:"#01DCD1",borderRadius:"14px",height:" 100px",width:"240px"},children:[Object(F.jsxs)("div",{className:"total",style:{textAlign:"start",fontWeight:"bolder",color:"black",fontSize:"12px"},children:["Total Papers "," "]}),Object(F.jsxs)("div",{class:"row justify-content-between",children:[Object(F.jsx)("div",{className:"ml-2",children:Object(F.jsx)("div",{class:"col-6 p-2",children:Object(F.jsx)("h6",{className:"h6",style:{fontSize:"19px"},children:e.leaderStatic.sumPapers?e.leaderStatic.sumPapers+"/500":"0/500"})})}),Object(F.jsx)("div",{className:"gouge",children:Object(F.jsx)(re,{className:"gouge1"})})]})]})}),Object(F.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(F.jsxs)(A.a,{className:"paperThree",onClick:function(){window.open(" \n                            https://contacts.dev.leader.codes/".concat(t.username,"/deals"))},style:{cursor:"pointer",padding:10,background:"#fff",color:"#5475E3",borderRadius:"14px",height:" 100px",width:"240px"},children:[Object(F.jsxs)("div",{className:"ml-2 total",style:{textAlign:"start",fontWeight:"bolder",color:"black",fontSize:"12px"},children:["Total Deals "," "]}),Object(F.jsxs)("div",{class:"row justify-content-between",children:[Object(F.jsx)("div",{className:"ml-2",children:Object(F.jsx)("div",{class:"col-6 p-2",children:Object(F.jsx)("h6",{className:"h6",style:{fontSize:"19px"},children:e.leaderStatic.sumProjects?e.leaderStatic.sumProjects+"/500":"0/500"})})}),Object(F.jsx)("div",{className:"gouge",children:Object(F.jsx)(ne,{className:"gouge1"})})]})]})}),Object(F.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(F.jsxs)(A.a,{className:"paperFour",onClick:function(){window.open(" \n                            https://reacthub.dev.leader.codes/".concat(t.username,"/myTasks"))},style:{paddingRight:"5px",paddingTop:"10px",background:"#fff",color:"#FD2443",borderRadius:"14px",cursor:"pointer",height:" 100px",width:"240px"},children:[Object(F.jsxs)("div",{className:"ml-2 total cardFor",style:{textAlign:"start",fontWeight:"bolder",color:"black",fontSize:"12px"},children:["Total Tasks  "," "]}),Object(F.jsxs)("div",{class:"row justify-content-between",children:[Object(F.jsx)("div",{class:" ml-2",children:Object(F.jsx)("div",{className:" col-6 p-2",children:Object(F.jsx)("h6",{className:"h6",style:{fontSize:"19px"},children:e.leaderStatic.sumTasks?e.leaderStatic.sumTasks+"/500":"0/500"})})}),Object(F.jsx)("div",{className:"gouge",children:Object(F.jsx)(se,{className:"gouge1"})})]}),Object(F.jsx)("div",{className:"row",style:{margin:"1px"}})]})})]})]}),c?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"d-flex justify-content-center align-content-center",children:Object(F.jsx)("p",{className:"moreTxt1  moreBtn",onClick:function(){console.log(j),h(!0),console.log(j),i(!c)},children:"Show Less"})}),Object(F.jsx)("div",{className:"div-container",children:Object(F.jsx)(C.a,{className:"p-0",children:Object(F.jsx)("div",{class:"container p-0",children:Object(F.jsxs)("div",{class:"row",children:[Object(F.jsx)("div",{class:"col-md-6 mb-0 text-time-container",children:Object(F.jsxs)(k.a,{expand:"md",variant:"light",className:"nav mb-0 d-flex navmy",style:{justifyContent:"flex-start"},children:[Object(F.jsx)("p",{id:"day",onClick:function(){if(d()(".filterBy").css("font-weight","unset"),d()("#day").css("font-weight","bold"),null!=e.AllTask){var t=e.AllTask.filter((function(e){var t=e.startDate.split("/");return t[1]+"/"+t[0]+"/"+t[2]===ce}));a(u.setTaskStatic(t.length))}if(null!=e.AllContact){var s=e.AllContact.filter((function(e){var t=e.createDateAndTime;return b()(t).format("MM/DD/YYYY")===ce}));a(u.setContactStatic(s.length))}if(null!=e.AllProject){var n=e.AllProject.filter((function(e){var t=e.closeDate;return b()(t).format("MM/DD/YYYY")===ce}));a(u.setProjectStatic(n.length))}if(null!=e.AllPapers){var r=e.AllPapers.filter((function(e){var t=e.createdDate;return b()(t).format("MM/DD/YYYY")===ce}));a(u.setPaperStatic(r.length))}},className:"filterBy",children:"Day"}),Object(F.jsx)("p",{id:"week",onClick:function(){if(d()(".filterBy").css("font-weight","unset"),d()("#week").css("font-weight","bold"),null!=e.AllProject){var t=e.AllProject.filter((function(e){var t=e.closeDate,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(oe)}));a(u.setProjectStatic(t.length))}if(null!=e.AllPapers){var s=e.AllPapers.filter((function(e){var t=e.createdDate,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(oe)}));a(u.setPaperStatic(s.length))}if(null!=e.AllTask){var n=e.AllTask.filter((function(e){var t=e.startDate.split("/"),a=t[1]+"/"+t[0]+"/"+t[2];return new Date(a)>=new Date(oe)}));a(u.setTaskStatic(n.length))}if(null!=e.AllContact){var r=e.AllContact.filter((function(e){var t=e.createDateAndTime,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(oe)}));a(u.setContactStatic(r.length))}},className:"filterBy",children:"Week"}),Object(F.jsx)("p",{id:"month",onClick:function(){if(d()(".filterBy").css("font-weight","unset"),d()("#month").css("font-weight","bold"),null!=e.AllProject){var t=e.AllProject.filter((function(e){var t=e.closeDate,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(ie)}));a(u.setProjectStatic(t.length))}if(null!=e.AllPapers){var s=e.AllPapers.filter((function(e){var t=e.createdDate,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(ie)}));a(u.setPaperStatic(s.length))}if(null!=e.AllTask){var n=e.AllTask.filter((function(e){var t=e.startDate.split("/"),a=t[1]+"/"+t[0]+"/"+t[2];return new Date(a)>=new Date(ie)}));a(u.setTaskStatic(n.length))}if(null!=e.AllContact){var r=e.AllContact.filter((function(e){var t=e.createDateAndTime,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(ie)}));a(u.setContactStatic(r.length))}},className:"filterBy",children:"Month"}),Object(F.jsx)("p",{id:"year",onClick:function(){if(d()(".filterBy").css("font-weight","unset"),d()("#year").css("font-weight","bold"),null!=e.AllProject){var t=e.AllProject.filter((function(e){var t=e.closeDate,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(le)}));a(u.setProjectStatic(t.length))}if(null!=e.AllPapers){var s=e.AllPapers.filter((function(e){var t=e.createdDate,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(le)}));a(u.setPaperStatic(s.length))}if(null!=e.AllTask){var n=e.AllTask.filter((function(e){var t=e.startDate.split("/"),a=t[1]+"/"+t[0]+"/"+t[2];return new Date(a)>=new Date(le)}));a(u.setTaskStatic(n.length))}if(null!=e.AllContact){var r=e.AllContact.filter((function(e){var t=e.createDateAndTime,a=b()(t).format("MM/DD/YYYY");return new Date(a)>=new Date(le)}));a(u.setContactStatic(r.length))}},className:"filterBy",children:"Year"})]})}),Object(F.jsx)("div",{class:"col-md-6 circle-menu-container",children:Object(F.jsxs)(k.a,{expand:"md",variant:"light",className:"justify-content-end is-small nav2",children:[Object(F.jsx)("p",{style:de}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Contacts"}),Object(F.jsx)("div",{style:ue}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Papers"}),Object(F.jsx)("div",{style:pe}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Deals"}),Object(F.jsx)("div",{style:je}),Object(F.jsx)(k.a.Brand,{style:{fontSize:"14px"},children:"Tasks"})]})})]})})})}),Object(F.jsx)(I,{}),Object(F.jsx)("div",{style:{backgroundColor:"rgb(248, 249, 250)",height:"55px"},className:"backgroundDiv"})]}):Object(F.jsx)("div",{className:"d-flex justify-content-center align-content-center",children:Object(F.jsx)("p",{className:"moreTxt1 moreBtn",onClick:function(){i(!c),console.log(c),h(!1)},children:"Show More"})})]}),Object(F.jsx)(K,{inMore:j})]})})),fe=a(56),be=a.n(fe);a(123);var me=function(){return Object(F.jsx)(o.a,{store:D,children:Object(F.jsx)(he,{})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(be.a,{url:"https://files.leader.codes/favicon.ico"}),Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(me,{})})]}),document.getElementById("root")),ge()},39:function(e,t,a){},61:function(e,t,a){},91:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.0a36d6bb.chunk.js.map