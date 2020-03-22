(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)();t.a=r},11:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)();t.a=r},37:function(e,t,a){(function(t){e.exports=t.config={proxy:"https://starnavi-frontend-test-task.herokuapp.com"}}).call(this,a(24))},40:function(e,t,a){e.exports=a.p+"static/media/spinner.31985f2a.gif"},43:function(e,t,a){"use strict";(function(e){var n=a(14),r=a.n(n),c=a(19),l=a(13),o=a(0),u=a.n(o),s=a(11),m=a(44),i=a(20),E=a.n(i);a(37);t.a=function(t){var a=Object(o.useReducer)(m.a,{gameSettings:null,gameState:"default",count:{red:0,green:0},currentGame:{},gameElements:[],randomArray:[],error:null}),n=Object(l.a)(a,2),i=n[0],d=n[1],p=e.config.proxy,g=function(e){d({type:"SET_GAME",payload:e})},f=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(p,"/game-settings"));case 3:t=e.sent,d({type:"GET_SETTINGS",payload:t.data}),g(t.data[Object.keys(t.data)[0]]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d({type:"NO_SETTINGS"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(s.a.Provider,{value:{gameSettings:i.gameSettings,gameState:i.gameState,currentGame:i.currentGame,gameElements:i.gameElements,count:i.count,randomArray:i.randomArray,error:i.error,fetchGameSettings:f,changeGame:g,playButton:function(){d({type:"START_GAME"})},gameEnded:function(){d({type:"GAME_ENDED"})},setNameError:function(){d({type:"INVALID_NAME"})},increaseCount:function(e,t){"red"===e&&d({type:"UPDATE_RED",payload:t}),"green"===e&&d({type:"UPDATE_GREEN",payload:t})},updateRandomElement:function(e){d({type:"UPDATE_RANDOM",payload:e})}}},t.children)}}).call(this,a(24))},44:function(e,t,a){"use strict";var n=a(12),r=a(5);t.a=function(e,t){switch(t.type){case"GET_SETTINGS":return Object(r.a)({},e,{gameSettings:t.payload});case"SET_GAME":var a=Object(n.a)(Array(Math.pow(t.payload.field,2)));return Object(r.a)({},e,{currentGame:t.payload,gameElements:a.map((function(){return{color:""}}))});case"START_GAME":return Object(r.a)({},e,{gameState:"game",error:null});case"UPDATE_RED":return Object(r.a)({},e,{count:Object(r.a)({},e.count,{red:e.count.red+1}),gameElements:e.gameElements.map((function(e,a){return a===t.payload&&(e.color="red"),e}))});case"UPDATE_GREEN":return Object(r.a)({},e,{count:Object(r.a)({},e.count,{green:e.count.green+1}),gameElements:e.gameElements.map((function(e,a){return a===t.payload&&(e.color="green"),e}))});case"UPDATE_RANDOM":return Object(r.a)({},e,{randomArray:[].concat(Object(n.a)(e.randomArray),[t.payload]),gameElements:e.gameElements.map((function(e,a){return a===t.payload&&(e.color="blue"),e}))});case"GAME_ENDED":return Object(r.a)({},e,{gameState:"over",count:{red:0,green:0},randomArray:[],gameElements:e.gameElements.map((function(e){return e.color="",e}))});case"ADD_COLOR_ELEMENT":return Object(r.a)({},e,{gameElements:[].concat(Object(n.a)(e.gameElements),[{color:""}])});case"NO_SETTINGS":return Object(r.a)({},e,{error:"No game settings, server error"});case"INVALID_NAME":return Object(r.a)({},e,{gameState:"error",error:"Enter a name to start the game"});default:return e}}},45:function(e,t,a){"use strict";(function(e){var n=a(14),r=a.n(n),c=a(19),l=a(13),o=a(0),u=a.n(o),s=a(10),m=a(46),i=a(20),E=a.n(i);a(37);t.a=function(t){var a=Object(o.useReducer)(m.a,{currentUser:{name:"",startTime:null},currentWinner:"",allPlayers:[],serverMsg:null}),n=Object(l.a)(a,2),i=n[0],d=n[1],p=e.config.proxy,g=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n={date:(new Date).toLocaleString()}).winner="player"===t?i.currentUser.name:t,c={name:n.winner,time:(a-i.currentUser.startTime)/1e3,date:n.date},d({type:"WINNER_POSTED",payload:c}),e.prev=4,e.next=7,E.a.post("".concat(p,"/winners"),n);case 7:d({type:"SERVER_UPDATED"}),setTimeout((function(){d({type:"CLEAR_MESSAGE"})}),2e3),e.next=16;break;case 11:throw e.prev=11,e.t0=e.catch(4),d({type:"SERVER_REJECTED"}),setTimeout((function(){d({type:"CLEAR_MESSAGE"})}),2e3),e.t0;case 16:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement(s.a.Provider,{value:{currentUser:i.currentUser,allUsers:i.allUsers,allPlayers:i.allPlayers,currentWinner:i.currentWinner,serverMsg:i.serverMsg,setUser:function(e){d({type:"SET_CURRENT_PLAYER",payload:e})},postWinner:g,setStartTime:function(e){d({type:"SET_START_TIME",payload:e})}}},t.children)}}).call(this,a(24))},46:function(e,t,a){"use strict";var n=a(12),r=a(5);t.a=function(e,t){switch(t.type){case"SET_CURRENT_PLAYER":return Object(r.a)({},e,{currentUser:Object(r.a)({},e.currentUser,{name:t.payload})});case"SET_START_TIME":return Object(r.a)({},e,{currentUser:Object(r.a)({},e.currentUser,{startTime:t.payload})});case"SET_END_TIME":return Object(r.a)({},e,{currentUser:Object(r.a)({},e.currentUser,{endTime:t.payload})});case"WINNER_POSTED":return Object(r.a)({},e,{currentUser:{name:"",date:null,startTime:null},currentWinner:t.payload.name,allPlayers:[].concat(Object(n.a)(e.allPlayers),[t.payload])});case"SERVER_UPDATED":return Object(r.a)({},e,{serverMsg:"SUCCESS - results posted to the server"});case"SERVER_REJECTED":return Object(r.a)({},e,{serverMsg:"ERROR - did not post results"});case"CLEAR_MESSAGE":return Object(r.a)({},e,{serverMsg:null});default:return e}}},47:function(e,t,a){e.exports=a(76)},52:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),l=a.n(c),o=(a(52),a(53),a(27)),u=a(6),s=a(10),m=function(){var e=Object(n.useContext)(s.a),t=e.allPlayers,a=e.serverMsg;return t.length<1?r.a.createElement("div",{className:"LeaderBoard"},r.a.createElement("h1",null,"LEADER BOARD"),r.a.createElement("h3",null,"Get rocking with your 1st game")):r.a.createElement("div",{className:"LeaderBoard"},r.a.createElement("h1",null,"LEADER BOARD"),r.a.createElement(o.a,null,t.sort((function(e,t){return e.time-t.time})).map((function(e){return r.a.createElement(o.a.Item,{key:e.date+e.time},r.a.createElement("div",{className:"userItem"},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("p",null,e.time,"sec"),r.a.createElement("p",null,e.date))))}))),r.a.createElement(u.a,{bg:"info",style:a?{opacity:"1"}:{opacity:"0"}},r.a.createElement(u.a.Body,{text:"light"},a)))},i=a(5),E=a(13),d=a(22),p=function(e){var t=null;switch(e.type){case"default":t=r.a.createElement(d.a,{variant:"dark",size:"lg",onClick:e.handleSubmit},"PLAY");break;case"over":t=r.a.createElement(d.a,{variant:"primary",size:"lg",onClick:e.handleSubmit},"GO AGAIN!");break;default:t=r.a.createElement(d.a,{variant:"dark",size:"lg",onClick:e.handleSubmit},"PLAY")}return t},g=function(e){var t=e.setting,a=e.field,n=e.delay;return r.a.createElement("option",{field:a,delay:n},t,": ",a,"x",a," play area size and ",n/1e3,"s delay")},f=a(40),y=a.n(f),b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:y.a,alt:"spinner",className:"Spinner"}))},v=a(41),O=a(17),S=a(21),T=a(11),h=function(){var e=Object(n.useState)({gameParams:null,name:""}),t=Object(E.a)(e,2),a=t[0],c=t[1],l=a.gameParams,o=a.name,u=Object(n.useContext)(T.a),m=u.gameState,d=u.gameSettings,f=u.fetchGameSettings,y=u.setNameError,h=u.changeGame,A=u.playButton,j=Object(n.useContext)(s.a).setUser,R=!0;Object(n.useEffect)((function(){R&&f(),l&&h(l)}),[d,R,l]),d&&(R=!1);return R?r.a.createElement("div",{className:"GameNav"},r.a.createElement(b,null)):r.a.createElement("form",{className:"game"===m?"GameNav Disabled":"GameNav"},r.a.createElement(S.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(S.a.Label,null,"Pick the game"),r.a.createElement(S.a.Control,{as:"select",size:"lg",name:"gameParams",onChange:function(e){var t=e.target.value.split(":")[0];c(Object(i.a)({},a,{gameParams:d[t]}))}},Object.keys(d).map((function(e,t){return r.a.createElement(g,{key:e+t,setting:e,field:d[e].field,delay:d[e].delay})})))),r.a.createElement(v.a,{size:"lg"},r.a.createElement(O.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"Enter your name",name:"name",value:o,onChange:function(e){c(Object(i.a)({},a,{name:e.target.value}))}})),r.a.createElement(p,{type:m,handleSubmit:function(e){e.preventDefault(),""===a.name.trim()?y():(A(),j(a.name))}}))},A=function(e){var t=null;switch(e.type){case"default":t=r.a.createElement(u.a,{bg:"light"},r.a.createElement(u.a.Body,{text:"dark"},'Select game mode and enter your name and click "PLAY" to start'));break;case"game":t=r.a.createElement(u.a,{bg:"info"},r.a.createElement(u.a.Body,{text:"light"},"Good luck!"));break;case"over":t="computer"===e.currentWinner?r.a.createElement(u.a,{bg:"warning"},r.a.createElement(u.a.Body,{text:"dark"},"Better luck next time...",e.currentWinner," won")):r.a.createElement(u.a,{bg:"success"},r.a.createElement(u.a.Body,{text:"dark"},"Well done ",e.currentWinner,"!"));break;case"error":t=r.a.createElement(u.a,{bg:"warning"},r.a.createElement(u.a.Body,{text:"light"},e.error));break;default:t=r.a.createElement(u.a,{bg:"light"},r.a.createElement(u.a.Body,{text:"dark"},'Select game mode and enter your name and click "PLAY" to start'))}return t},j=a(12),R=a(42),N=a.n(R),_=function(e){var t=e.increaseCount,a=e.field,n=e.color,c=e.id,l={flexBasis:"".concat(100/a,"%"),height:"".concat(350/a,"px")};return r.a.createElement("div",{className:"game-item ".concat(n),style:l,onClick:function(){"blue"===n&&"red"!==n&&t("green",c)}})},D=function(){var e=Object(n.useContext)(T.a),t=e.gameElements,a=e.gameState,c=e.increaseCount,l=e.gameEnded,o=e.randomArray,u=e.updateRandomElement,m=e.currentGame,i=m.delay,E=m.field,d=e.count,p=d.red,g=d.green,f=Object(n.useContext)(s.a),y=f.postWinner,b=f.setStartTime;return Object(n.useEffect)((function(){if("game"===a&&(!function(){var e=Object(j.a)(t.keys());if(o.length>0&&o.forEach((function(t){e.splice(e.indexOf(t),1)})),t.length>0){var a=N()(e);u(a),setTimeout((function(){"green"!==t[a].color&&"blue"===t[a].color&&c("red",a)}),i)}}(),0===p&&0===g&&b(Date.now())),E){var e=Math.pow(E,2)/2;(p>e||g>e)&&(l(),p>e&&y("computer",Date.now()),g>e&&y("player",Date.now()))}}),[a,p,g]),E?r.a.createElement("div",{className:"Game"},t.map((function(e,t){return r.a.createElement(_,{key:t,id:t,field:E,increaseCount:c,color:e.color})}))):null},G=function(){var e=Object(n.useContext)(T.a),t=e.gameState,a=e.error,c=Object(n.useContext)(s.a).currentWinner;return r.a.createElement("div",{className:"GameBoard"},r.a.createElement(h,null),r.a.createElement(A,{type:t,currentWinner:c,error:a}),r.a.createElement(D,null))},k=a(43),x=a(45),C=function(){return r.a.createElement(k.a,null,r.a.createElement(x.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(m,null))))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.82622eb5.chunk.js.map