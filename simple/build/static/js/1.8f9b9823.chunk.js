(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{44:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),c=n.n(o),s=n(4),i=n.n(s),u=n(13),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(u.b)(t,null,null,o.location):t,s=o.createHref(c);return a.a.createElement("a",l({},r,{onClick:this.handleClick,href:s,ref:n}))},t}(a.a.Component);h.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=h},51:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(6),o=n(8),c=n(7),s=n(9),i=n(12),u=n(1),l=n.n(u),p=n(50),f=n(44),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.onLogout,r=e.location;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"nav"},l.a.createElement("span",{className:"left-link"},l.a.createElement(f.a,{to:"/"},"\u9996\u9875")),t&&t.length>0?l.a.createElement("span",{className:"user"},"\u5f53\u524d\u7528\u6237\uff1a",t,"\xa0",l.a.createElement("input",{type:"button",onClick:n,value:"\u6ce8\u9500"})):l.a.createElement("span",{className:"right-link"},l.a.createElement(f.a,{to:{pathname:"/login",state:{from:r}}},"\u767b\u5f55"))))}}]),t}(u.Component),d=n(11),m=Object(d.a)(function(){return n.e(3).then(n.bind(null,45))}),b=Object(d.a)(function(){return n.e(4).then(n.bind(null,47))}),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={userId:sessionStorage.getItem("userId"),username:sessionStorage.getItem("username")},n.handleLogout=n.handleLogout.bind(Object(i.a)(Object(i.a)(n))),n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"handleLogout",value:function(){sessionStorage.removeItem("userId"),sessionStorage.removeItem("username"),this.setState({userId:null,username:null,redirectToReferrer:!1})}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.location;console.log(n);var r=this.state,a=r.username,o=r.userId;return l.a.createElement("div",null,l.a.createElement(h,{username:a,onLogout:this.handleLogout,location:n}),l.a.createElement(p.a,{path:t.url,exact:!0,render:function(e){return l.a.createElement(b,Object.assign({userId:o},e))}}),l.a.createElement(p.a,{path:"".concat(t.url,"/:id"),render:function(e){return l.a.createElement(m,Object.assign({userId:o},e))}}))}}]),t}(u.Component);t.default=y}}]);
//# sourceMappingURL=1.8f9b9823.chunk.js.map