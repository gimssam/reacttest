(self.webpackChunkwandavision=self.webpackChunkwandavision||[]).push([[353],{371:(e,t,a)=>{var r,n=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,c=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of o(t))p.call(e,n)||n===a||i(e,n,{get:()=>t[n],enumerable:!(r=l(t,n))||r.enumerable});return e},d=(e,t,a)=>(((e,t,a)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),u={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(u,{default:()=>g}),e.exports=(r=u,c(i({},"__esModule",{value:!0}),r));var h=((e,t,a)=>(a=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?a:i(a,"default",{value:e,enumerable:!0}),e)))(a(43));const m="64px",b={};class g extends h.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"state",{image:null}),d(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:a}=this.props;e.url===t&&e.light===a||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:a,oEmbedUrl:r}=e;if(!h.default.isValidElement(a))if("string"!==typeof a){if(!b[t])return this.setState({image:null}),window.fetch(r.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const a=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:a}),b[t]=a}}));this.setState({image:b[t]})}else this.setState({image:a})}render(){const{light:e,onClick:t,playIcon:a,previewTabIndex:r,previewAriaLabel:n}=this.props,{image:i}=this.state,l=h.default.isValidElement(e),o={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:{width:"100%",height:"100%",backgroundImage:i&&!l?`url(${i})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...o},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:l?"absolute":void 0,...o},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},p=h.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:t,tabIndex:r,onKeyPress:this.handleKeyPress,...n?{"aria-label":n}:{}},l?e:null,a||p)}}}}]);
//# sourceMappingURL=reactPlayerPreview.9f3aa196.chunk.js.map