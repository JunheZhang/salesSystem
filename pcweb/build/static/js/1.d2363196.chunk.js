webpackJsonp([1],{QeAW:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i,d=n("oRCo"),c=l(d),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();n("JKaW");var s=n("GiK3"),p=l(s),m=n("RH2O"),h=n("F8kA"),g=n("BCOr"),b=n("wF3A"),y=l(b),E=function(e){var t=e.isLoading,n=e.error;return t?p.default.createElement("div",null,"Loading..."):n?p.default.createElement("div",null,"Sorry, there was a problem loading the page."):null},v=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"SR3d"))},loading:E}),P=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"oCHu"))},loading:E}),R=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"NIZN"))},loading:E}),_=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"poCU"))},loading:E}),w=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"EdVI"))},loading:E}),O=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"0TJ0"))},loading:E}),C=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"SCmR"))},loading:E}),j=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"8alL"))},loading:E}),k=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"xT+X"))},loading:E}),L=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"VbgS"))},loading:E}),S=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"RrgB"))},loading:E}),A=(0,y.default)({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"cmi5"))},loading:E}),I=(u=(0,m.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token}},function(e){return{signout:function(){return e((0,g.signout)())}}}))(i=function(e){function t(){var e,n,l,r;o(this,t);for(var u=arguments.length,i=Array(u),d=0;d<u;d++)i[d]=arguments[d];return n=l=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),l.state={collapsed:!1,superLevel:!0},l.handleLogout=function(){l.props.signout()},l.toggleCollapse=function(){l.setState({collapsed:!l.state.collapsed})},r=n,a(l,r)}return r(t,e),f(t,[{key:"render",value:function(){var e=this.state.superLevel;return p.default.createElement("div",{className:"page page-home"},p.default.createElement(c.default,null,p.default.createElement(P,{collapsed:this.state.collapsed,permission:e}),p.default.createElement(c.default,null,p.default.createElement(v,{collapsed:this.state.collapsed,handleClick:this.toggleCollapse,signout:this.handleLogout}),p.default.createElement(h.Route,{path:"/dashboard",component:C}),p.default.createElement(h.Route,{path:"/users",component:R}),p.default.createElement(h.Route,{path:"/goods",component:_}),p.default.createElement(h.Route,{path:"/category/first",component:w}),p.default.createElement(h.Route,{path:"/category/second",component:k}),p.default.createElement(h.Route,{path:"/orders",component:O}),p.default.createElement(h.Route,{path:"/order/refund",component:S}),p.default.createElement(h.Route,{path:"/order/dispatch",component:A}),p.default.createElement(h.Route,{path:"/advertisments",component:j}),p.default.createElement(h.Route,{path:"/admins",component:L}))))}}]),t}(p.default.Component))||i;t.default=I}});
//# sourceMappingURL=1.d2363196.chunk.js.map