
          window.__NEXT_REGISTER_PAGE('/success-banner', function() {
            var comp = module.exports=webpackJsonp([8],{138:function(e,t,a){function n(e,t,a){var n=null==e?void 0:l(e,t);return void 0===n?a:n}var l=a(129);e.exports=n},994:function(e,t,a){e.exports=a(995)},995:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(19),r=n(l),c=a(9),u=n(c),s=a(10),i=n(s),o=a(20),f=n(o),d=a(21),m=n(d),h=a(348),p=n(h),g=a(1),v=n(g),E=a(122),y=n(E),_=a(229),b=a(49),k=(n(b),a(137)),N=n(k),w=a(138),M=n(w),x=a(262),T=function(e){var t="Banner "+e;return function(){"1"===new URL(location.href).searchParams.get("api-version")?console.log((0,p.default)({command:"log",data:t})):console.log(t)}},P=function(e){function t(){(0,u.default)(this,t);var e=(0,f.default)(this,(t.__proto__||(0,r.default)(t)).call(this));return e.state={version:""},e}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return v.default.createElement("span",{className:"version"},this.state.version)}},{key:"componentDidMount",value:function(){var e=new URL(location.href).searchParams.get("etcher-version");this.setState({version:e})}}]),t}(v.default.PureComponent),C=function(e){function t(){(0,u.default)(this,t);var e=(0,f.default)(this,(t.__proto__||(0,r.default)(t)).call(this));return e.type="link",e}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this;return v.default.createElement("a",{href:this.props.href,target:"_blank",rel:"noopener noreferrer",className:this.type,onClick:function(){e.context.track("etcher_app "+e.props.label+" "+e.type),T("click "+e.props.label+" "+e.type)}},this.props.children)}}]),t}(v.default.PureComponent);C.contextTypes={track:v.default.PropTypes.func};var L=function(e){function t(e){(0,u.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,r.default)(t)).call(this));return a.type="button "+e.className,a}return(0,m.default)(t,e),t}(C),S=function(){return v.default.createElement("main",{className:"vertical center"},v.default.createElement("div",null,v.default.createElement("h1",null,"We hope you enjoyed using",v.default.createElement("img",{src:"/static/etcher.svg",className:"etcher-logo"}))),v.default.createElement("div",{className:"horizontal center grow"},v.default.createElement(L,{href:"https://github.com/resin-io/etcher",label:"star on Github"},v.default.createElement("img",{className:"icon github",src:"/static/social/octocat.png"}),"Star on Github"),v.default.createElement(L,{className:"ml-2",href:"https://twitter.com/intent/tweet?text=Just%20flashed%20an%20image%20with%20%23etcher%20by%20%40resin_io!%20Check%20it%20out%3A%20https%3A%2F%2Fetcher.io",label:"Tweet"},v.default.createElement("img",{className:"icon twitter",src:"/static/social/twitter.png"}),"Tweet")),v.default.createElement(G,null))},G=function(){return v.default.createElement("footer",null,"made with",v.default.createElement("img",{className:"icon",src:"/static/love.svg"}),"by",v.default.createElement(C,{href:"https://resin.io/",label:"Resin"},v.default.createElement("img",{className:"brand",src:"/static/resin.png"})),v.default.createElement(C,{href:"https://github.com/resin-io/etcher/blob/master/CHANGELOG.md",label:"Version"},v.default.createElement(P,null)))},H=function(e){var t=e.url;(0,M.default)(t,"query.vn");return v.default.createElement(_.Tracker,{analytics:N.default.analytics},v.default.createElement("div",null,v.default.createElement(y.default,null,v.default.createElement("script",{dangerouslySetInnerHTML:{__html:(0,x.tagManagerHead)(N.default.analytics.tagManagerId)}}),v.default.createElement("meta",{charset:"utf-8"}),v.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/success-banner.css?v=1.0.1"})),v.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:(0,x.tagManagerNoScript)(N.default.analytics.tagManagerId)}}),v.default.createElement(S,null)))};t.default=H}},[994]);
            return { page: comp.default }
          })
        