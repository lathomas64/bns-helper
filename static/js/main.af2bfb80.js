(()=>{"use strict";var e={7770:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(885),r=a(3426),n=a(5004),u=a(1046),o=a(1054),s=a(9385),i=a(3693),d=a(3624),f=a(5722),c=a(4841),x=a(2629);function h(e){var t=(0,n.useState)(e.maxValue),a=(0,l.default)(t,2),r=a[0],u=a[1];return(0,x.jsxs)(s.default,{children:[(0,x.jsx)(o.default,{children:" "}),(0,x.jsxs)(o.default,{children:[e.name," ",r,"/",e.maxValue,(0,x.jsx)(i.default,{title:"-",onPress:function(){return u(Math.max(r-1,0))}}),(0,x.jsx)(i.default,{title:"+",onPress:function(){return u(Math.min(r+1,e.maxValue))}})]})]})}function m(){var e=(0,n.useState)("N/A"),t=(0,l.default)(e,2),a=t[0],u=t[1],m=(0,n.useState)(12),p=(0,l.default)(m,2),v=(p[0],p[1],(0,n.useState)(6)),b=(0,l.default)(v,2),g=(b[0],b[1],(0,n.useState)(9)),y=(0,l.default)(g,2),S=(y[0],y[1],{1:"Rock",2:"Paper",3:"Scissors"}),w=(0,n.useState)({name:"Daria Gray",maxBlood:12,maxHealth:9,maxWillpower:6}),O=(0,l.default)(w,2),M=O[0],P=(O[1],(0,n.useState)(!1)),k=(0,l.default)(P,2),D=k[0],I=k[1];return(0,x.jsxs)(s.default,{style:j.container,children:[(0,x.jsx)(o.default,{children:M.name}),(0,x.jsx)(o.default,{children:a}),(0,x.jsx)(i.default,{title:"chop!",onPress:function(){var e=Math.ceil(3*Math.random());u(S[e]),d.default.alert(S[e])}}),(0,x.jsx)(c.default,{isDialogVisible:D,title:"DialogInput 1",message:"Message for DialogInput #1",hintInput:"HINT INPUT",submitInput:function(e){var t;t=e,d.default.alert(t),I(!1)},closeDialog:function(){I(!1)}}),(0,x.jsx)(h,{name:"Blood",maxValue:M.maxBlood}),(0,x.jsx)(h,{name:"Willpower",maxValue:M.maxWillpower}),(0,x.jsx)(h,{name:"Health",maxValue:M.maxHealth}),(0,x.jsx)(o.default,{children:"Mental Defense = 10 + willpower"}),(0,x.jsx)(o.default,{children:"Social Defense = 10 + willpower"}),(0,x.jsx)(o.default,{children:"Dodge = 21"}),(0,x.jsx)(o.default,{children:"Initiative = 20"}),(0,x.jsx)(o.default,{children:"Melee 19 (accurate sword)"}),(0,x.jsx)(o.default,{children:" Convert 2 agg, soak 1 normal"}),(0,x.jsx)(o.default,{children:" 3 actions/turn"}),(0,x.jsx)(o.default,{children:"2 blood/turn"}),(0,x.jsx)(o.default,{children:" "}),(0,x.jsx)(i.default,{title:"More info",onPress:function(){return f.default.openURL("https://vamp.bynightstudios.com/")}}),(0,x.jsx)(r.default,{style:"auto"})]})}var j=u.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})}},t={};function a(l){var r=t[l];if(void 0!==r)return r.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,l,r,n)=>{if(!l){var u=1/0;for(d=0;d<e.length;d++){for(var[l,r,n]=e[d],o=!0,s=0;s<l.length;s++)(!1&n||u>=n)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(o=!1,n<u&&(u=n));if(o){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,r,n]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var r,n,[u,o,s]=l,i=0;if(u.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(s)var d=s(a)}for(t&&t(l);i<u.length;i++)n=u[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},l=self.webpackChunkweb=self.webpackChunkweb||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=a.O(void 0,[508],(()=>a(6271)));l=a.O(l)})();
//# sourceMappingURL=main.af2bfb80.js.map