webpackJsonp([6],{"+yAI":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){var t=e.type,r=e.className,n=e.prefixCls,l=e.children,u=(0,s.default)(r,n+"-body",a({},n+"-light","light"===t));return o.default.createElement("div",{className:u},l)}Object.defineProperty(t,"__esModule",{value:!0});var u=r("GiK3"),o=n(u),d=r("KSGD"),i=n(d),f=r("HW6M"),s=n(f);l.defaultProps={prefixCls:"panel"},l.propTypes={type:i.default.string,className:i.default.string},t.default=l},"0TJ0":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,l){try{var u=t[a](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,i,f,s,c=r("oRCo"),p=n(c),m=r("yF52"),y=n(m),h=r("Xxa5"),b=n(h),v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r("JKaW"),r("Zjie");var g=r("GiK3"),E=n(g),O=r("RH2O"),_=r("KSGD"),I=n(_),x=r("z8xT"),w=n(x),C=r("BCOr"),j=r("0xDb"),P=r("BHCp"),R=n(P),N=r("23Is"),M=n(N),T=r("qJAG"),D=n(T),S=(d=(0,O.connect)(function(e){return{adminId:e.auth.admin.adminId,token:e.auth.admin.token,orders:e.orders.orders,isFetching:e.orders.isFetchingOrders}},function(e){return{loadOrders:function(t,r,n){e((0,C.getAllOrders)(t,r,n))}}}))((s=f=function(e){function t(){var e,r,n,o,d=this;l(this,t);for(var i=arguments.length,f=Array(i),s=0;s<i;s++)f[s]=arguments[s];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),n.state={filteredInfo:null,sortedInfo:null},n.loadOrders=function(){var e=a(b.default.mark(function e(t){var r,a,l;return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props,a=r.adminId,l=r.token,e.next=3,n.props.loadOrders(a,l,t);case 3:case"end":return e.stop()}},e,d)}));return function(t){return e.apply(this,arguments)}}(),n.handleTableChange=function(e,t,r){n.setState({filteredInfo:t,sortedInfo:r})},n.onSelectorChange=function(e){var t="undefined"!==typeof e.status&&"all"!==e.status?e.status:null,r=e.createTime?e.createTime[0].format("YYYY-MM-DD"):null,a=e.createTime?e.createTime[1].format("YYYY-MM-DD"):null,l=e.userName&&""!==e.userName?e.userName:null,u=e.orderId?parseInt(e.orderId):null,o={status:t,start:r,end:a,userName:l,orderId:u};n.loadOrders(o)},n.renderExpanded=function(e){var t=e.address.city+e.address.address+e.address.streetNumber,r=t+"   "+e.address.consignee+"   "+e.address.phone;return E.default.createElement("div",null,E.default.createElement("p",null,"\u7528\u6237\u6536\u8d27\u5730\u5740\uff1a ",r),E.default.createElement("h4",null,"\u5546\u54c1\uff1a"),e.orderDetails.length>0?e.orderDetails.map(function(e){return E.default.createElement(D.default,{key:e.goodId,detail:e})}):null)},o=r,u(n,o)}return o(t,e),v(t,[{key:"componentDidMount",value:function(){this.loadOrders()}},{key:"render",value:function(){var e=this.props.isFetching,t=this.props.orders,r=this.state,n=r.filteredInfo,a=r.sortedInfo;n=n||{},a=a||{};var l=[{title:"id",dataIndex:"orderId",key:"orderId",sorter:function(e,t){return e.orderId-t.orderId},sortOrder:"orderId"===a.columnKey&&a.order},{title:"\u7528\u6237id",dataIndex:"userId",key:"userId"},{title:"\u603b\u4ef7",dataIndex:"amount",key:"amount"},{title:"\u8ba2\u5355\u72b6\u6001",dataIndex:"status",key:"status",render:function(e,t){return E.default.createElement(M.default,{status:e})},filters:[{text:"\u672a\u53d1\u8d27",value:"0"},{text:"\u914d\u9001\u4e2d",value:"1"},{text:"\u5df2\u5b8c\u6210",value:"2"},{text:"\u9000\u6b3e\u4e2d",value:"3"},{text:"\u9000\u6b3e\u6210\u529f",value:"-1"},{text:"\u9000\u6b3e\u5931\u8d25",value:"-2"}],filteredValue:n.status||null,onFilter:function(e,t){return t.status===parseInt(e,10)}},{title:"\u4e0b\u5355\u65f6\u95f4",dataIndex:"createTime",render:function(e,t){return E.default.createElement("span",null,(0,j.dateFormat)(new Date(e),"yyyy-MM-dd hh:ss"))}},{title:"\u5907\u6ce8",dataIndex:"remarks",key:"remarks"}];return E.default.createElement(p.default.Content,null,E.default.createElement(w.default,{minus:!0},E.default.createElement(R.default,{handleSelectorChange:this.onSelectorChange}),E.default.createElement(w.default.Body,{type:"light"},E.default.createElement(y.default,{rowKey:function(e){return e.orderId},dataSource:t,expandedRowRender:this.renderExpanded,columns:l,loading:e,bordered:!0,onChange:this.handleTableChange}))))}}]),t}(E.default.Component),f.propTypes={adminId:I.default.number.isRequired,token:I.default.string.isRequired,orders:I.default.array.isRequired,isFetching:I.default.bool.isRequired,loadOrders:I.default.func.isRequired},i=s))||i;t.default=S},"23Is":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){var t,r=e.status,n=e.prefixCls,l=e.className,u="";u=0===r?"\u672a\u53d1\u8d27":1===r?"\u914d\u9001\u4e2d":2===r?"\u5df2\u5b8c\u6210":3===r?"\u9000\u6b3e\u4e2d":-1===r?"\u9000\u6b3e\u6210\u529f":"\u9000\u6b3e\u5931\u8d25";var d=(0,s.default)(l,(t={},a(t,n+"-success",2===r),a(t,n+"-error",3===r),a(t,n+"-warning",0===r),a(t,""+n,1===r),t));return o.default.createElement("span",{className:d},u)}Object.defineProperty(t,"__esModule",{value:!0});var u=r("GiK3"),o=n(u),d=r("KSGD"),i=n(d),f=r("HW6M"),s=n(f);l.propTypes={status:i.default.number.isRequired},l.defaultProps={prefixCls:"status"},t.default=l},BHCp:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,d,i,f,s=r("0b0c"),c=n(s),p=r("IidI"),m=n(p),y=r("sRCy"),h=n(y),b=r("G3dI"),v=n(b),g=r("uuhB"),E=n(g),O=r("wgAv"),_=n(O),I=r("XSlN"),x=n(I),w=r("NJOH"),C=n(w),j=r("37+n"),P=n(j),R=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r("1szz"),r("du7Z"),r("mNLB"),r("Dp5J"),r("4yHo"),r("uMhn"),r("4WQ2"),r("RWXa"),r("onAH");var N=r("GiK3"),M=n(N),T=r("KSGD"),D=n(T),S=r("z8xT"),k=n(S),G=r("qI5z"),K=P.default.Item,q=C.default.Option,F=(o=P.default.create())((f=i=function(e){function t(){var e,r,n,u;a(this,t);for(var o=arguments.length,d=Array(o),i=0;i<o;i++)d[i]=arguments[i];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(e,t){e||("all"===t.categoryId&&(t.categoryId=null),"all"===t.status&&(t.status=null),n.props.handleSelectorChange(t))})},n.handleReset=function(){n.props.form.setFieldsValue({goodId:void 0,goodName:"",categoryId:"all",status:"all"})},n.onDateChange=function(e,t){console.log(e,t)},n.handleStatusChange=function(e){n.props.form.setFieldsValue({status:e})},u=r,l(n,u)}return u(t,e),R(t,[{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator;return M.default.createElement(k.default.Header,{type:"light"},M.default.createElement(x.default,null,M.default.createElement(x.default.Item,null,"\u4e3b\u9875"),M.default.createElement(x.default.Item,null,"\u8ba2\u5355\u7ba1\u7406"),M.default.createElement(x.default.Item,null,"\u8ba2\u5355\u67e5\u8be2")),M.default.createElement("h2",null,"\u8ba2\u5355\u67e5\u8be2"),M.default.createElement("p",null,"\u5c55\u793a\u5168\u90e8\u8ba2\u5355\u4fe1\u606f\uff0c\u7ec4\u5408\u67e5\u8be2\u8ba2\u5355\u4fe1\u606f"),M.default.createElement(_.default,{style:{marginTop:"10px",marginBottom:"30px"}}),M.default.createElement(P.default,{className:"form-search",onSubmit:this.handleSubmit},M.default.createElement(c.default,{gutter:24},M.default.createElement(v.default,{span:4},M.default.createElement(K,{label:"id"},t("orderId")(M.default.createElement(E.default,{type:"number"})))),M.default.createElement(v.default,{span:5},M.default.createElement(K,{className:"form-flex-wrapper",label:"\u7528\u6237\u540d\u79f0"},t("userName",{initialValue:""})(M.default.createElement(E.default,{type:"text"})))),M.default.createElement(v.default,{span:7},M.default.createElement(K,{label:"\u65f6\u95f4:"},t("createTime",{initialValue:""})(M.default.createElement(h.default.RangePicker,{style:{marginLeft:"10px"}})))),M.default.createElement(v.default,{span:4},M.default.createElement(K,{label:"\u8ba2\u5355\u72b6\u6001:"},t("status",{initialValue:"all"})(M.default.createElement(C.default,{onChange:this.handleStatusChange},M.default.createElement(q,{value:"all"},"\u5168\u90e8"),M.default.createElement(q,{value:G.ORDER_WAIT},"\u5f85\u53d1\u8d27"),M.default.createElement(q,{value:G.ORDER_DISPATCHING},"\u914d\u9001\u4e2d"),M.default.createElement(q,{value:G.ORDER_FINISH},"\u5df2\u5b8c\u6210"),M.default.createElement(q,{value:G.ORDER_REFUNDING},"\u9000\u6b3e\u4e2d"))))),M.default.createElement(v.default,{span:4,style:{textAlign:"right"}},M.default.createElement(m.default,{type:"primary",htmlType:"submit"},"\u641c\u7d22"),M.default.createElement(_.default,{type:"vertical"}),M.default.createElement(m.default,{type:"dashed",onClick:this.handleReset},"\u91cd\u7f6e")))))}}]),t}(M.default.Component),i.propTypes={handleSelectorChange:D.default.func.isRequired},d=f))||d;t.default=F},m2On:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function u(e){var t=e.children,r=e.className,n=e.type,u=e.prefixCls,o=l(e,["children","className","type","prefixCls"]),i=(0,c.default)(r,u+"-header",a({},u+"-light","light"===n));return d.default.createElement("header",Object.assign({className:i},o),t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r("GiK3"),d=n(o),i=r("KSGD"),f=n(i),s=r("HW6M"),c=n(s);u.defaultProps={prefixCls:"panel"},u.propTypes={type:f.default.string,className:f.default.string},t.default=u},qJAG:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.detail;return f.default.createElement(u.default,null,f.default.createElement(d.default,{span:7},"\u7f16\u53f7\uff1a ",t.goodId),f.default.createElement(d.default,{span:7},"\u540d\u79f0\uff1a",t.good.goodName),f.default.createElement(d.default,{span:7},"\u6570\u91cf\uff1a",t.count))}Object.defineProperty(t,"__esModule",{value:!0});var l=r("0b0c"),u=n(l),o=r("G3dI"),d=n(o);r("1szz"),r("Dp5J");var i=r("GiK3"),f=n(i),s=r("KSGD"),c=n(s);a.propTypes={detail:c.default.shape({goodId:c.default.number.isRequired,good:c.default.shape({goodName:c.default.string.isRequired}),count:c.default.number.isRequired}).isRequired},t.default=a},stit:function(e,t,r){"use strict";function n(e){var t=e.children;return l.default.createElement("header",{className:"panel-footer"},t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r("GiK3"),l=function(e){return e&&e.__esModule?e:{default:e}}(a)},z8xT:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,f,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r("GiK3"),p=n(c),m=r("HW6M"),y=n(m),h=r("m2On"),b=n(h),v=r("+yAI"),g=n(v),E=r("stit"),O=n(E),_=(f=i=function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,r=e.children,n=e.minus,u=l(e,["prefixCls","children","minus"]),o=(0,y.default)(""+t,a({},t+"-minus",n));return p.default.createElement("div",Object.assign({className:o},u),r)}}]),t}(p.default.Component),i.Header=b.default,i.Body=g.default,i.Footer=O.default,i.defaultProps={prefixCls:"panel"},f);t.default=_}});
//# sourceMappingURL=6.147eb9b8.chunk.js.map