(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[5],{117:function(e,n,t){e.exports=t.p+"static/media/loading.120d0cea.gif"},119:function(e,n,t){e.exports=t(188)},128:function(e,n,t){},129:function(e,n,t){},130:function(e,n,t){},131:function(e,n,t){},188:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(17),o=t.n(i),l=t(53),u=t(88),c=t(83);var d=function(){return a.a.createElement(l.a,null,a.a.createElement(u.a,{routers:c.c}))};var m,f,s,p,h,g,b,O,v=function(){return a.a.createElement(d,null)},y=(t(129),t(130),t(131),t(76)),j=(t(85),t(45)),w=t(38),P=t(39),k=t(40),L=t(19),E=(t(92),t(4)),D=t(36),z={ContorlData:new(m=E.d.bound,f=E.d.bound,s=E.d.bound,p=function(){function e(){Object(P.a)(this,e),Object(w.a)(this,"staffList",h,this)}return Object(k.a)(e,[{key:"staffListOfAdd",value:function(e){console.log(e),console.log(this.staffList)}},{key:"staffListOfDel",value:function(e){Object(D.f)({id:JSON.stringify(e)}).then(function(e){e.code&&j.a.success("\u5220\u9664\u6210\u529f")})}},{key:"getStaffListFn",value:function(e,n){var t=this;Object(D.b)({limit:e,pageid:n}).then(function(e){var n=e.code,r=e.data;n&&(t.staffList=r)})}}]),e}(),h=Object(L.a)(p.prototype,"staffList",[E.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return["\u603b\u8def\u7531"]}}),Object(L.a)(p.prototype,"staffListOfAdd",[m],Object.getOwnPropertyDescriptor(p.prototype,"staffListOfAdd"),p.prototype),Object(L.a)(p.prototype,"staffListOfDel",[f],Object.getOwnPropertyDescriptor(p.prototype,"staffListOfDel"),p.prototype),Object(L.a)(p.prototype,"getStaffListFn",[s],Object.getOwnPropertyDescriptor(p.prototype,"getStaffListFn"),p.prototype),p),AllList:new(g=function(){function e(){Object(P.a)(this,e),Object(w.a)(this,"allList",b,this),Object(w.a)(this,"size",O,this)}return Object(k.a)(e,[{key:"all",value:function(e,n){var t=this;Object(D.b)({limit:e,pageid:n}).then(function(n){n.data.data.length&&(t.size=n.data.size,n.data.data.length<e&&j.a.info("\u5df2\u5230\u8fbe\u6700\u5927\u9875"),t.allList=n.data.data.map(function(e){return e.key=e.id,e}),window.allList=t.allList)})}}]),e}(),b=Object(L.a)(g.prototype,"allList",[E.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=Object(L.a)(g.prototype,"size",[E.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(L.a)(g.prototype,"all",[E.d],Object.getOwnPropertyDescriptor(g.prototype,"all"),g.prototype),g)};o.a.render(a.a.createElement(y.a,z,a.a.createElement(v,null)),document.getElementById("root"))},2:function(e,n,t){"use strict";var r=t(0),a=t.n(r);t(128);var i=function(){return a.a.createElement("div",{className:"loading"},a.a.createElement("img",{src:t(117)}))},o=t(3),l=t.n(o);t.d(n,"n",function(){return u}),t.d(n,"k",function(){return c}),t.d(n,"g",function(){return d}),t.d(n,"m",function(){return m}),t.d(n,"b",function(){return f}),t.d(n,"v",function(){return s}),t.d(n,"i",function(){return p}),t.d(n,"t",function(){return h}),t.d(n,"l",function(){return g}),t.d(n,"y",function(){return b}),t.d(n,"c",function(){return O}),t.d(n,"d",function(){return v}),t.d(n,"h",function(){return y}),t.d(n,"D",function(){return j}),t.d(n,"r",function(){return w}),t.d(n,"q",function(){return P}),t.d(n,"E",function(){return k}),t.d(n,"A",function(){return L}),t.d(n,"C",function(){return E}),t.d(n,"z",function(){return D}),t.d(n,"B",function(){return z}),t.d(n,"p",function(){return x}),t.d(n,"s",function(){return A}),t.d(n,"x",function(){return S}),t.d(n,"a",function(){return B}),t.d(n,"f",function(){return W}),t.d(n,"w",function(){return C}),t.d(n,"o",function(){return I}),t.d(n,"e",function(){return q}),t.d(n,"u",function(){return F}),t.d(n,"j",function(){return J});var u=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(26),t.e(28)]).then(t.bind(null,1099))},loading:i}),c=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,1097))},loading:i}),d=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,1067))},loading:i}),m=(l()({loader:function(){return t.e(37).then(t.bind(null,1068))},loading:i}),l()({loader:function(){return t.e(45).then(t.bind(null,1069))},loading:i}),l()({loader:function(){return t.e(43).then(t.bind(null,1070))},loading:i}),l()({loader:function(){return t.e(38).then(t.bind(null,1071))},loading:i}),l()({loader:function(){return t.e(34).then(t.bind(null,1072))},loading:i}),l()({loader:function(){return t.e(35).then(t.bind(null,1073))},loading:i}),l()({loader:function(){return t.e(44).then(t.bind(null,1074))},loading:i}),l()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(4),t.e(46)]).then(t.bind(null,1075))},loading:i})),f=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,1076))},loading:i}),s=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,1077))},loading:i}),p=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,1103))},loading:i}),h=l()({loader:function(){return t.e(36).then(t.bind(null,1078))},loading:i}),g=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,1079))},loading:i}),b=l()({loader:function(){return t.e(42).then(t.bind(null,1080))},loading:i}),O=l()({loader:function(){return t.e(39).then(t.bind(null,1081))},loading:i}),v=l()({loader:function(){return t.e(40).then(t.bind(null,1082))},loading:i}),y=l()({loader:function(){return t.e(41).then(t.bind(null,1083))},loading:i}),j=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(23)]).then(t.bind(null,1084))},loading:i}),w=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(15)]).then(t.bind(null,1085))},loading:i}),P=l()({loader:function(){return t.e(27).then(t.bind(null,1086))},loading:i}),k=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(24)]).then(t.bind(null,1087))},loading:i}),L=l()({loader:function(){return t.e(31).then(t.bind(null,1088))},loading:i}),E=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,1104))},loading:i}),D=l()({loader:function(){return t.e(32).then(t.bind(null,1089))},loading:i}),z=l()({loader:function(){return t.e(33).then(t.bind(null,1090))},loading:i}),x=l()({loader:function(){return t.e(29).then(t.bind(null,1091))},loading:i}),A=l()({loader:function(){return t.e(30).then(t.bind(null,1092))},loading:i}),S=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,1093))},loading:i}),B=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,1098))},loading:i}),W=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,1101))},loading:i}),C=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,1094))},loading:i}),I=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,1095))},loading:i}),q=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(22)]).then(t.bind(null,1100))},loading:i}),F=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(25)]).then(t.bind(null,1102))},loading:i}),J=l()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,1096))},loading:i})},36:function(e,n,t){"use strict";var r=t(87),a=t(112);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(t,!0).forEach(function(n){Object(r.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var l=t.n(a).a.create({timeout:2e3});l.interceptors.request.use(function(e){return o({},e,{headers:o({},e.headers,{authorization:window.localStorage.getItem("token"),"api-request":"yes"})})},function(e){return Promise.reject(e)}),l.interceptors.response.use(function(e){return e.data},function(e){return e.response.data});var u=l;t.d(n,"c",function(){return c}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return m}),t.d(n,"b",function(){return f}),t.d(n,"f",function(){return s}),t.d(n,"a",function(){return p});var c=function(e){return u.post("/user/login",e)},d=function(e){return u.post("/management/exportXlsx/original",e,{responseType:"blob"})},m=function(e){return u.post("/management/importXlsx",e)},f=function(e){return u.get("/management/alldata",{params:e})},s=function(e){return u.post("/management/removedata",e)},p=function(e){return u.post("/management/adddata",e)}},83:function(e,n,t){"use strict";var r=t(27),a=t(2),i=[{path:"/main/level/one",component:a.p,meta:{title:"\u6559\u5e08\u8003\u6838",name:"C-B\u7ea7"}},{path:"/main/level/review",component:a.s,meta:{title:"\u6559\u5e08\u8003\u6838",name:"B-A\u7ea7"}},{path:"/main/level/three",component:a.z,meta:{title:"\u4e3b\u7ba1\u8003\u6838",name:"C\u7ea7"}},{path:"/main/level/threeOnce",component:a.A,meta:{title:"\u4e3b\u7ba1\u8003\u6838",name:"B\u7ea7"}},{path:"/main/level/two",component:a.B,meta:{title:"\u4e3b\u7ba1\u8003\u6838",name:"A\u7ea7"}},{path:"/main/level/twoOnce",component:a.C,meta:{name:"\u8003\u6838\u8bc4\u5ba1"}},{path:"/main/level",head:"\u7ea7\u522b\u8003\u6838",redirect:"/main/level/one"}],o=[{path:"/main/assistant/analyze",component:a.a,meta:{title:"\u8003\u52e4\u6570\u636e\u6c47\u603b"}},{path:"/main/assistant/competitiveness",component:a.f,meta:{title:"\u5ba2\u6237\u6570\u636e\u5206\u6790"}},{path:"/main/assistant/study",component:a.w,meta:{title:"\u4e3b\u7ba1\u7ade\u4e89\u529b\u6392\u540d"}},{path:"/main/assistant/tabulate",component:a.x,meta:{title:"\u6559\u5ba4\u5b66\u4e60\u6392\u540d"}},{path:"/main/assistant",redirect:"/main/assistant/analyze",head:"\u7ba1\u7406\u52a9\u624b"}],l=[{path:"/main/checkWork/approvel",component:a.b,meta:{title:"\u8003\u52e4\u5ba1\u6279"}},{path:"/main/checkWork/statistics",component:a.v,meta:{title:"\u8003\u52e4\u7edf\u8ba1"}},{path:"/main/checkWork/detail",component:a.i,meta:{title:"\u8003\u52e4\u660e\u7ec6"}},{path:"/main/checkWork/set",component:a.t,meta:{title:"\u8003\u52e4\u8bbe\u7f6e"}},{path:"/main/checkWork",redirect:"/main/checkWork/approvel",head:"\u5458\u5de5\u8003\u52e4"}],u=t(91),c=[{path:"/main/customer/list",component:a.l,meta:{title:"\u5ba2\u6237",name:"\u5ba2\u6237\u5217\u8868"}},{path:"/main/customer/teacher",component:a.y,meta:{title:"\u5ba2\u6237",name:"\u4f53\u80fd\u8001\u5e08\u7ba1\u7406"}},{path:"/main/customer/audit",component:a.c,meta:{title:"\u5ba2\u6237",name:"\u5ba2\u6237\u5ba1\u6838"}},{path:"/main/customer/care",component:a.d,meta:{title:"\u5ba2\u6237",name:"\u5ba2\u6237\u7ef4\u62a4"}},{path:"/main/customer/dataAnalysis",component:a.h,meta:{title:"\u5ba2\u6237",name:"\u5ba2\u6237\u6570\u636e\u5206\u6790"}},{path:"/main/customer/vistied",component:a.D,meta:{title:"\u5ba2\u6237\u62dc\u8bbf",name:"\u62dc\u8bbf\u7ba1\u7406"}},{path:"/main/customer/record",component:a.r,meta:{title:"\u5ba2\u6237\u62dc\u8bbf",name:"\u62dc\u8bbf\u8bb0\u5f55"}},{path:"/main/customer",redirect:"/main/customer/list",head:"\u5ba2\u6237\u7ba1\u7406"}],d=[{path:"/main/integral/checked",component:a.e,meta:{title:"\u79ef\u5206\u4e0a\u62a5"}},{path:"/main/integral/fulfill",component:a.j,meta:{title:"\u79ef\u5206\u5ba1\u6838"}},{path:"/main/integral/newspapers",component:a.o,meta:{title:"\u79ef\u5206\u7edf\u8ba1"}},{path:"/main/integral/statistic",component:a.u,meta:{title:"\u79ef\u5206\u5151\u73b0"}},{path:"/main/integral",redirect:"/main/integral/checked",head:"\u79ef\u5206\u7ba1\u7406"}];t.d(n,"b",function(){return s}),t.d(n,"e",function(){return p}),t.d(n,"d",function(){return h}),t.d(n,"a",function(){return g});var m=[{path:"/",redirect:"/main"},{path:"/login",component:a.m},{path:"/main",component:a.n,children:[{path:"/main/home",head:"\u9996\u9875",component:a.k}].concat(Object(r.a)(u.a),Object(r.a)(l),[{path:"/main/plan/index",head:"\u5de5\u4f5c\u8ba1\u5212",component:a.q}],Object(r.a)(c),[{path:"/main/college/index",head:"\u4e9a\u592a\u5b66\u9662",component:a.E}],Object(r.a)(i),Object(r.a)(o),Object(r.a)(d),[{path:"/main",redirect:"/main/home"}])}],f=[],s=function(e){var n=m.filter(function(e){return e.children})[0].children.find(function(n){return n.path===e});return-1===f.findIndex(function(e){return e.path===n.path})&&(f.push(n),f.length>10&&f.shift()),f},p=function(e){return f.splice(e,1),f},h=function(e){var n=m.filter(function(e){return e.children})[0].children.filter(function(e){return e.head}),t=[];if(window.localStorage.view){var r=e.filter(function(e){return 0!==e.routeIsVisible});n.forEach(function(e){e.path&&r.forEach(function(n){n.routerId===e.path.split("/")[2]&&t.push(e)})})}return t},g=function(e){var n=/\/\w+/g;return m.filter(function(e){return e.children})[0].children.filter(function(t){return!t.redirect&&t.meta&&t.path.match(n)[1]===e.match(n)[1]})};n.c=m},88:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(14);n.a=function(e){var n=e.routers,t=void 0===n?[]:n,r=t.length&&t.filter(function(e){return e.redirect}).map(function(e,n){return a.a.createElement(i.a,{key:n,from:e.path,to:e.redirect})});return a.a.createElement(i.d,null,t.length&&t.filter(function(e){return!e.redirect}).map(function(e,n){return a.a.createElement(i.b,{key:n,path:e.path,render:function(n){return a.a.createElement(e.component,Object.assign({},n,{children:e.children}))}})}).concat(r))}},91:function(e,n,t){"use strict";var r=t(2);n.a=[{path:"/main/management/archives",component:r.g,meta:{title:"\u6863\u6848\u7ba1\u7406"}},{path:"/main/management/allocation",component:r.g,meta:{title:"\u5206\u914d\u7ba1\u7406"}},{path:"/main/management/course",component:r.g,meta:{title:"\u8bfe\u7a0b\u7ba1\u7406"}},{path:"/main/management/substitute",component:r.g,meta:{title:"\u4ee3\u8bfe\u8d39\u7ba1\u7406"}},{path:"/main/management/birthday",component:r.g,meta:{title:"\u751f\u65e5\u63d0\u9192"}},{path:"/main/management/money",component:r.g,meta:{title:"\u85aa\u916c\u7ba1\u7406"}},{path:"/main/management/leave",component:r.g,meta:{title:"\u79bb\u804c\u7ba1\u7406"}},{path:"/main/management",redirect:"/main/management/archives",head:"\u5458\u5de5\u7ba1\u7406"}]}},[[119,6,21]]]);
//# sourceMappingURL=main.6ea4b355.chunk.js.map