/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */function Q(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),t.push.apply(t,r)}return t}function D(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Q(Object(t),!0).forEach(function(r){fe(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function he(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(a,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function ue(a,e,t){return e&&Z(a.prototype,e),t&&Z(a,t),a}function fe(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function C(){return C=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},C.apply(this,arguments)}var re={exports:{}};(function(a){typeof window>"u"||function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,r=e.Blob&&function(){try{return Boolean(new Blob)}catch{return!1}}(),n=r&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,u=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,h=(r||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(s){var l,f,c,p,d,o,b,v,B;if(l=s.match(u),!l)throw new Error("invalid data URI");for(f=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),c=!!l[4],p=s.slice(l[0].length),c?d=atob(p):d=decodeURIComponent(p),o=new ArrayBuffer(d.length),b=new Uint8Array(o),v=0;v<d.length;v+=1)b[v]=d.charCodeAt(v);return r?new Blob([n?b:o],{type:f}):(B=new i,B.append(o),B.getBlob(f))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(s,l,f){var c=this;setTimeout(function(){f&&t.toDataURL&&h?s(h(c.toDataURL(l,f))):s(c.mozGetAsFile("blob",l))})}:t.toDataURL&&h&&(t.msToBlob?t.toBlob=function(s,l,f){var c=this;setTimeout(function(){(l&&l!=="image/png"||f)&&t.toDataURL&&h?s(h(c.toDataURL(l,f))):s(c.msToBlob(l))})}:t.toBlob=function(s,l,f){var c=this;setTimeout(function(){s(h(c.toDataURL(l,f)))})})),a.exports?a.exports=h:e.dataURLtoBlob=h}(window)})(re);var ce=re.exports,ve=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},_={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},me=typeof window<"u"&&typeof window.document<"u",y=me?window:{},E=function(e){return e>0&&e<1/0},ge=Array.prototype.slice;function de(a){return Array.from?Array.from(a):ge.call(a)}var be=/^image\/.+$/;function k(a){return be.test(a)}function pe(a){var e=k(a)?a.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var ae=String.fromCharCode;function ye(a,e,t){var r="",n;for(t+=e,n=e;n<t;n+=1)r+=ae(a.getUint8(n));return r}var we=y.btoa;function Be(a,e){for(var t=[],r=8192,n=new Uint8Array(a);n.length>0;)t.push(ae.apply(null,de(n.subarray(0,r)))),n=n.subarray(r);return"data:".concat(e,";base64,").concat(we(t.join("")))}function Re(a){var e=new DataView(a),t;try{var r,n,i;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var u=e.byteLength,h=2;h+1<u;){if(e.getUint8(h)===255&&e.getUint8(h+1)===225){n=h;break}h+=1}if(n){var s=n+4,l=n+10;if(ye(e,s,4)==="Exif"){var f=e.getUint16(l);if(r=f===18761,(r||f===19789)&&e.getUint16(l+2,r)===42){var c=e.getUint32(l+4,r);c>=8&&(i=l+c)}}}if(i){var p=e.getUint16(i,r),d,o;for(o=0;o<p;o+=1)if(d=i+o*12+2,e.getUint16(d,r)===274){d+=8,t=e.getUint16(d,r),e.setUint16(d,1,r);break}}}catch{t=1}return t}function Ue(a){var e=0,t=1,r=1;switch(a){case 2:t=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:r}}var xe=/\.\d*(?:0|9){12}\d*$/;function ee(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return xe.test(a)?Math.round(a*e)/e:a}function A(a){var e=a.aspectRatio,t=a.height,r=a.width,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",i=E(r),u=E(t);if(i&&u){var h=t*e;(n==="contain"||n==="none")&&h>r||n==="cover"&&h<r?t=r/e:r=t*e}else i?t=r/e:u&&(r=t*e);return{width:r,height:t}}var Te=y.ArrayBuffer,te=y.FileReader,w=y.URL||y.webkitURL,Oe=/\.\w+$/,Ae=y.Compressor,Ce=function(){function a(e,t){he(this,a),this.file=e,this.image=new Image,this.options=D(D({},_),t),this.aborted=!1,this.result=null,this.init()}return ue(a,[{key:"init",value:function(){var t=this,r=this.file,n=this.options;if(!ve(r)){this.fail(new Error("The first argument must be a File or Blob object."));return}var i=r.type;if(!k(i)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!w||!te){this.fail(new Error("The current browser does not support image compression."));return}if(Te||(n.checkOrientation=!1),w&&!n.checkOrientation)this.load({url:w.createObjectURL(r)});else{var u=new te,h=n.checkOrientation&&i==="image/jpeg";this.reader=u,u.onload=function(s){var l=s.target,f=l.result,c={};if(h){var p=Re(f);p>1||!w?(c.url=Be(f,i),p>1&&C(c,Ue(p))):c.url=w.createObjectURL(r)}else c.url=f;t.load(c)},u.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},u.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},u.onloadend=function(){t.reader=null},h?u.readAsArrayBuffer(r):u.readAsDataURL(r)}}},{key:"load",value:function(t){var r=this,n=this.file,i=this.image;i.onload=function(){r.draw(D(D({},t),{},{naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}))},i.onabort=function(){r.fail(new Error("Aborted to load the image."))},i.onerror=function(){r.fail(new Error("Failed to load the image."))},y.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(y.navigator.userAgent)&&(i.crossOrigin="anonymous"),i.alt=n.name,i.src=t.url}},{key:"draw",value:function(t){var r=this,n=t.naturalWidth,i=t.naturalHeight,u=t.rotate,h=u===void 0?0:u,s=t.scaleX,l=s===void 0?1:s,f=t.scaleY,c=f===void 0?1:f,p=this.file,d=this.image,o=this.options,b=document.createElement("canvas"),v=b.getContext("2d"),B=Math.abs(h)%180===90,L=(o.resize==="contain"||o.resize==="cover")&&E(o.width)&&E(o.height),U=Math.max(o.maxWidth,0)||1/0,x=Math.max(o.maxHeight,0)||1/0,T=Math.max(o.minWidth,0)||0,O=Math.max(o.minHeight,0)||0,R=n/i,m=o.width,g=o.height;if(B){var W=[x,U];U=W[0],x=W[1];var H=[O,T];T=H[0],O=H[1];var I=[g,m];m=I[0],g=I[1]}L&&(R=m/g);var z=A({aspectRatio:R,width:U,height:x},"contain");U=z.width,x=z.height;var F=A({aspectRatio:R,width:T,height:O},"cover");if(T=F.width,O=F.height,L){var S=A({aspectRatio:R,width:m,height:g},o.resize);m=S.width,g=S.height}else{var X=A({aspectRatio:R,width:m,height:g}),G=X.width;m=G===void 0?n:G;var N=X.height;g=N===void 0?i:N}m=Math.floor(ee(Math.min(Math.max(m,T),U))),g=Math.floor(ee(Math.min(Math.max(g,O),x)));var ie=-m/2,ne=-g/2,oe=m,se=g,P=[];if(L){var Y=0,V=0,M=n,j=i,$=A({aspectRatio:R,width:n,height:i},{contain:"cover",cover:"contain"}[o.resize]);M=$.width,j=$.height,Y=(n-M)/2,V=(i-j)/2,P.push(Y,V,M,j)}if(P.push(ie,ne,oe,se),B){var K=[g,m];m=K[0],g=K[1]}b.width=m,b.height=g,k(o.mimeType)||(o.mimeType=p.type);var q="transparent";if(p.size>o.convertSize&&o.convertTypes.indexOf(o.mimeType)>=0&&(o.mimeType="image/jpeg"),o.mimeType==="image/jpeg"&&(q="#fff"),v.fillStyle=q,v.fillRect(0,0,m,g),o.beforeDraw&&o.beforeDraw.call(this,v,b),!this.aborted&&(v.save(),v.translate(m/2,g/2),v.rotate(h*Math.PI/180),v.scale(l,c),v.drawImage.apply(v,[d].concat(P)),v.restore(),o.drew&&o.drew.call(this,v,b),!this.aborted)){var J=function(le){r.aborted||r.done({naturalWidth:n,naturalHeight:i,result:le})};b.toBlob?b.toBlob(J,o.mimeType,o.quality):J(ce(b.toDataURL(o.mimeType,o.quality)))}}},{key:"done",value:function(t){var r=t.naturalWidth,n=t.naturalHeight,i=t.result,u=this.file,h=this.image,s=this.options;if(w&&!s.checkOrientation&&w.revokeObjectURL(h.src),i)if(s.strict&&i.size>u.size&&s.mimeType===u.type&&!(s.width>r||s.height>n||s.minWidth>r||s.minHeight>n||s.maxWidth<r||s.maxHeight<n))i=u;else{var l=new Date;i.lastModified=l.getTime(),i.lastModifiedDate=l,i.name=u.name,i.name&&i.type!==u.type&&(i.name=i.name.replace(Oe,pe(i.type)))}else i=u;this.result=i,s.success&&s.success.call(this,i)}},{key:"fail",value:function(t){var r=this.options;if(r.error)r.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=Ae,a}},{key:"setDefaults",value:function(t){C(_,t)}}]),a}();export{Ce as default};
//# sourceMappingURL=compressor.esm.bf8af3ea.js.map
