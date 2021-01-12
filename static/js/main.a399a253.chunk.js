(this.webpackJsonpTheCovidTracker=this.webpackJsonpTheCovidTracker||[]).push([[0],{100:function(e,t,s){},261:function(e,t,s){"use strict";s.r(t);var a=s(3),n=s(4),c=s.n(n),r=s(25),i=s.n(r),o=(s(98),s(28)),l=s.n(o),d=s(63),h=s(43),u=(s(100),s(87)),b=s.n(u),j=function(e){var t=e.label,s=e.number,n=e.inc,c=Number(s),r=new b.a;return Object(a.jsxs)("div",{className:"stats-box",children:[Object(a.jsx)("span",{className:"number",children:c>3e5?r.abbreviate(s,2):s},s),Object(a.jsx)("span",{className:"label",children:t},t),Object(a.jsx)("span",{className:"change",children:n>0?"+".concat(n):"-".concat(n)})]})},v=s(90),m=s.n(v),f=s(35),p=s.n(f),x=s(88),O=s.n(x),C=s(89);s(197);var g=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)((function(){var e=new Date;return e.setDate(e.getDate()-1)})),i=Object(h.a)(r,2),o=i[0],u=i[1],b=Object(n.useState)("none"),v=Object(h.a)(b,2),f=v[0],x=v[1],g=Object(n.useRef)(),w=function(){var e=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covidtracking.com/v1/us/daily.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w().then((function(e){var t=new Date(o),s="".concat(t.getFullYear()).concat(("0"+(t.getMonth()+1)).slice(-2)).concat(("0"+t.getDate()).slice(-2)),a={casesIncValues:[],dates:[]};e.map((function(e){if(e.date==s&&(a.cases=e.positive,a.casesInc=e.positiveIncrease,a.deaths=e.death,a.deathsInc=e.deathIncrease,a.tests=e.totalTestResults,a.testsInc=e.totalTestResultsIncrease),e.positiveIncrease>0&&e.date<=s){a.casesIncValues.push(e.positiveIncrease);var t=e.date.toString(),n=t.slice(0,4),c=t.slice(4,6),r=t.slice(6,8),i="".concat(c,"-").concat(r,"-").concat(n),o=p()().format(i,"MMMM");a.dates.push(o)}})),a.casesIncValues=a.casesIncValues.reverse().filter((function(e){return e>0})),a.dates=a.dates.reverse(),c(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){x("none"===f?"block":"none")},k=function(e){g.current.contains(e.target)||x("none")};Object(n.useEffect)((function(){return N(),document.addEventListener("mousedown",k),function(){document.removeEventListener("mousedown",k)}}),[]),Object(n.useEffect)((function(){N()}),[o]);var D={labels:s.dates,datasets:[{label:"Number of Cases",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"rgba(75,192,192,1)",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:s.casesIncValues}]};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header"}),Object(a.jsxs)("main",{children:[Object(a.jsx)("section",{className:"header",children:Object(a.jsxs)("div",{className:"header-data",children:[Object(a.jsx)("h3",{children:"United States"}),Object(a.jsxs)("div",{className:"header-date",children:[Object(a.jsxs)("div",{ref:g,className:"calendar",style:{display:f},children:[" ",Object(a.jsx)(m.a,{selected:o,onChange:function(e){u(e),I()},filterDate:function(e){var t=new Date;if(e>new Date("03/07/2020")&&e<t.setDate(t.getDate()-1))return e},inline:!0})]}),"As of"," ",Object(a.jsxs)("span",{onClick:I,className:"date-moment",children:[Object(a.jsx)(O.a,{date:o,format:"MMMM Do, YYYY "}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(a.jsx)("path",{d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"})})]})]}),Object(a.jsxs)("div",{className:"header-stats",children:[Object(a.jsx)(j,{label:"Cases",number:s.cases,inc:s.casesInc}),Object(a.jsx)(j,{label:"Deaths",number:s.deaths,inc:s.deathsInc}),Object(a.jsx)(j,{label:"Tests",number:s.tests,inc:s.testsInc})]})]})}),Object(a.jsx)("section",{className:"body",children:Object(a.jsxs)("div",{className:"chart-area",children:[Object(a.jsx)("h1",{className:"chart-title",children:"Daily Cases"}),Object(a.jsx)(C.Line,{data:D,options:{scales:{xAxes:[{ticks:{display:!0,autoSkip:!0,maxTicksLimit:5,source:"data"}}]}}})]})}),Object(a.jsxs)("section",{className:"footer",children:[Object(a.jsxs)("span",{className:"footer-data",children:[" ",Object(a.jsxs)("svg",{viewBox:"0 0 437 437",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{d:"M218.5 0L389.33 82.2675L431.522 267.121L313.304 415.362H123.696L5.47826 267.121L47.6698 82.2675L218.5 0Z",fill:"#1A1E22"}),Object(a.jsx)("path",{d:"M206.76 199.872C199.08 199.872 195.24 196.032 195.24 188.352V157.248C195.24 149.568 191.4 145.728 183.72 145.728H145.128C137.448 145.728 133.608 149.568 133.608 157.248V288.864C133.608 296.544 137.448 300.384 145.128 300.384H183.72C191.4 300.384 195.24 296.544 195.24 288.864V260.64C195.24 252.96 199.08 249.12 206.76 249.12H209.928C217.608 249.12 221.448 252.96 221.448 260.64V297.216C221.448 302.784 219.528 307.488 215.688 311.328L206.184 320.832C202.344 324.672 197.64 326.592 192.072 326.592H136.776C131.208 326.592 126.504 324.672 122.664 320.832L113.16 311.328C109.32 307.488 107.4 302.784 107.4 297.216V148.896C107.4 143.328 109.32 138.624 113.16 134.784L122.664 125.28C126.504 121.44 131.208 119.52 136.776 119.52H192.072C197.64 119.52 202.344 121.44 206.184 125.28L215.688 134.784C219.528 138.624 221.448 143.328 221.448 148.896V188.352C221.448 196.032 217.608 199.872 209.928 199.872H206.76ZM232.995 131.04C232.995 123.36 236.835 119.52 244.515 119.52H335.523C343.203 119.52 347.043 123.36 347.043 131.04V134.208C347.043 141.888 343.203 145.728 335.523 145.728H314.787C307.107 145.728 303.267 149.568 303.267 157.248V314.784C303.267 322.464 299.427 326.304 291.747 326.304H288.579C280.899 326.304 277.059 322.464 277.059 314.784V157.248C277.059 149.568 273.219 145.728 265.539 145.728H244.515C236.835 145.728 232.995 141.888 232.995 134.208V131.04Z",fill:"#65CACA"})]}),"\xa0Made by Suhas Jagannath"]}),Object(a.jsxs)("span",{className:"footer-github",children:["Check it out on"," ",Object(a.jsx)("a",{href:"https://github.com/sjaga003/cutiehack2020",children:"Github"})]})]})]})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,263)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),w()},98:function(e,t,s){}},[[261,1,2]]]);
//# sourceMappingURL=main.a399a253.chunk.js.map