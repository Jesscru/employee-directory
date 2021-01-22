(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),r=n(11),s=n.n(r),o=(n(35),n(36),n(23)),c=n(24),l=n(29),d=n(28),j=(n(37),n(25));n(38);var h=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Profile"}),Object(a.jsx)("th",{"data-value":"name",children:"Name"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{"data-value":"location",children:"Location"})]})}),Object(a.jsxs)("tbody",{children:[e.people.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.picture.medium,alt:"profile of employee"})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.location.state})]},e.login.uuid)})),e.names.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.picture.medium,alt:"profile of employee"})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.location.state})]},e.login.uuid)}))]})]})})},u=n(26),m=n.n(u);var b=function(){return m.a.get("https://randomuser.me/api/?results=200&nat=us")},p=n(27);n(57);var O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(p.a,{fluid:!0,className:"jumbotron",children:Object(a.jsx)("h1",{children:"Employee Directory"})})})},f=n(10),x=n(8);n(58);var v=function(e){return Object(a.jsx)("div",{id:"width",children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(x.a.Toggle,{className:"sort-drop",id:"dropdown-basic",children:"Sort By..."}),Object(a.jsxs)(x.a.Menu,{children:[Object(a.jsx)(x.a.Item,{onClick:e.handleStateSort,href:"#/action-1",children:"State"}),Object(a.jsx)(x.a.Item,{onClick:e.handleNameSort,href:"#/action-2",children:" Last name"})]})]})})},S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={people:[],names:[],search:"",locations:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]},e.getPeople=function(t){b(t).then((function(t){e.setState({people:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var n=document.querySelector("#filter").value,a=e.state.people.filter((function(e){return e.location.state===n}));e.setState({people:a}),console.log(n)},e.handleReset=function(t){t.preventDefault(),e.setState({names:e.state.people}),window.location.reload(),document.querySelector("#filter").value=""},e.handleNameSort=function(t){e.setState({names:e.state.people.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))})},e.handleStateSort=function(t){e.setState({names:e.state.people.sort((function(e,t){return e.location.state.localeCompare(t.location.state)}))})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getPeople()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{id:"filter",className:"form-control",type:"text",placeholder:"Filter by last name",name:"filter"}),Object(a.jsx)("datalist",{id:"states",children:this.state.locations.map((function(e){return Object(a.jsx)("option",{value:e},e)}))}),Object(a.jsx)(v,{handleNameSort:this.handleNameSort,handleStateSort:this.handleStateSort}),Object(a.jsx)(f.a,{className:"filter-btn",variant:"outline-primary",onClick:this.handleFormSubmit,children:" Filter"}),Object(a.jsx)(f.a,{className:"sort-btn",variant:"outline-primary",onClick:this.handleReset,children:"Reset"})]}),Object(a.jsx)(h,{names:this.state.names,people:this.state.people})]})}}]),n}(i.Component);var y=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(S,{})})};s.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.dfed2bc2.chunk.js.map