(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={sendForm:"SendForm_sendForm__15Va5"}},108:function(e,t,n){e.exports={historyTable:"RequestHistoryTable_historyTable__39tiS"}},142:function(e,t,n){},143:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(0),r=n.n(i),c=n(12),o=n.n(c),s=(n(142),n(8)),d=(n(143),n(76)),u=n.n(d),l=n(42),j=n.p+"static/media/pointer.8c1cae95.svg",b=r.a.memo((function(e){var t=e.getMapCoordinates,n=e.displayObjects;return Object(a.jsx)("div",{className:u.a.yandexMap,children:Object(a.jsx)(l.e,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(l.a,{className:u.a.Map,onDblClick:function(e){t(e)},state:{center:[53.905957,27.556118],zoom:20},children:[Object(a.jsx)(l.f,{options:{position:{right:10,top:10}}}),Object(a.jsx)(l.d,{options:{position:{left:10,top:10}}}),Object(a.jsx)(l.c,{options:{position:{right:50,top:10}}}),n.map((function(e){return Object(a.jsx)(l.b,{geometry:[+e.latitude,+e.longitude],modules:["geoObject.addon.balloon","geoObject.addon.hint"],properties:{hintContent:e.address,balloonContent:e.lastPointDistance},options:{iconLayout:"default#image",iconImageHref:j,iconImageSize:[100,100],iconImageOffset:[,-100]}})}))]})})})})})),p=n(100),O=n.n(p),h=n(112),f=n(30),m=n(53),g=n(121),x=n(47),v=n.n(x),y=n(67),w=n(18),C=n(48),S=n(78),D=n.n(S),M=D.a.create({baseURL:"https://geocode-maps.yandex.ru/1.x/"}),P=function(e,t){return M.get("?geocode=".concat(t,",").concat(e))};M.interceptors.request.use(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params=Object(C.a)(Object(C.a)({},t.params),{},{apikey:"62863b39-ff46-4e0f-a09b-34ed4079f28a",format:"json"}),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var F=D.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/",headers:{"Access-Control-Allow-Origin":"*"}}),_=function(e,t,n){return F.get("json?origins=".concat(e,",").concat(t,"&destinations=").concat(n[0],",").concat(n[1],"&key=AIzaSyDZYmugNtrfSskRFo0Wa3QYPRva1AeiuwU"))},A={displayObjects:[]},k=function(e){return{type:"MAP-REDUCER/ADD_OBJECT",newObject:e}},L=n(219),N=function(e){var t=e.address,n=Object(i.useState)(!1),r=Object(s.a)(n,2),c=r[0],o=r[1];return Object(i.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),1e3)}),[t]),Object(a.jsx)(a.Fragment,{children:t?Object(a.jsx)(L.a,{open:c,anchorReference:"anchorPosition",anchorPosition:{top:0,left:0},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:t}):Object(a.jsx)(a.Fragment,{})})},R=function(e){var t=e.currentObject,n=t.address;Object(i.useEffect)((function(){n=t.address}),[t.address]);var r=Object(i.useState)(["",""]),c=Object(s.a)(r,2),o=c[0],d=c[1],u=Object(f.b)(),l=Object(h.a)({initialValues:{latitude:t.latitude,longitude:t.longitude,address:t.address},onSubmit:function(e){u(function(e,t){return function(){var n=Object(y.a)(v.a.mark((function n(a){var i,r,c,o,s,d,u;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e.latitude,e.longitude);case 2:return s=n.sent,e.address=s.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted,n.next=6,_(e.latitude,e.longitude,t);case 6:d=n.sent,(u=null===d||void 0===d||null===(i=d.data)||void 0===i||null===(r=i.rows[0])||void 0===r||null===(c=r.elements[0])||void 0===c||null===(o=c.distance)||void 0===o?void 0:o.text)&&(e.lastPointDistance=u),a(k(e));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,o)),d([t.latitude,t.longitude])}});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{address:n}),Object(a.jsxs)("div",{className:O.a.sendForm,children:["SendForm",Object(a.jsxs)("form",{onSubmit:l.handleSubmit,noValidate:!0,children:[Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"latitude",type:"text",name:"latitude",label:"Latitude",autoFocus:!0,onChange:l.handleChange,value:t.latitude}),Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"longitude",name:"longitude",label:"Longitude",type:"text",onChange:l.handleChange,value:t.longitude}),Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"address",name:"address",type:"text",onChange:l.handleChange,value:n}),Object(a.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Geocode"})]})]})]})},E=n(108),T=n.n(E),U=n(109),z=function(){var e=Object(f.c)((function(e){return e.mapPage.displayObjects}));return Object(a.jsx)("div",{className:T.a.historyTable,children:Object(a.jsx)("div",{style:{height:400,width:"100%"},children:Object(a.jsx)(U.a,{rows:e,columns:I,pageSize:5})})})},I=[{field:"latitude",headerName:"Latitude",width:165},{field:"longitude",headerName:"Longitude",width:165},{field:"address",headerName:"Address",width:300},{field:"lastPointDistance",headerName:"Distance",width:90}],q=n(220);var W=function(){var e=Object(i.useState)({id:"",latitude:"",longitude:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(f.c)((function(e){return e.mapPage.displayObjects})),o=Object(i.useCallback)((function(e){var t=e.get("coords"),n={id:Object(q.a)(),latitude:t[0].toString(),longitude:t[1].toString()};r(n),console.log("newObject in App:",n)}),[]);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{children:Object(a.jsx)(b,{getMapCoordinates:o,displayObjects:c})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(R,{currentObject:n}),Object(a.jsx)(z,{})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},G=n(37),J=n(111),Y=Object(G.c)({mapPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAP-REDUCER/ADD_OBJECT":return Object(C.a)(Object(C.a)({},e),{},{displayObjects:[].concat(Object(w.a)(e.displayObjects),[t.newObject])});default:return e}}}),V=Object(G.d)(Y,Object(G.a)(J.a));o.a.render(Object(a.jsx)(f.a,{store:V,children:Object(a.jsx)(W,{})}),document.getElementById("root")),B()},76:function(e,t,n){e.exports={yandexMap:"YandexMap_yandexMap__Q1MUo",Map:"YandexMap_Map__1wL9U"}}},[[169,1,2]]]);
//# sourceMappingURL=main.a99c4a92.chunk.js.map