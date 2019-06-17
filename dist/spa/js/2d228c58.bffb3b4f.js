(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d228c58"],{db37:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"flex column",staticStyle:{"align-items":"center"}},[t("section",{staticClass:"q-mt-md row justify-around items-center "},[t("q-select",{staticClass:"q-mr-md",staticStyle:{"min-width":"12em",background:"transparent"},attrs:{rounded:"",outlined:"",label:"Device",disable:e.deviceIsOpen,"option-label":function(e){return e.comName},"option-value":function(e){return e},options:e.deviceList},scopedSlots:e._u([{key:"option",fn:function(n){return[t("q-item",e._g(e._b({},"q-item",n.itemProps,!1),n.itemEvents),[t("q-item-section",[t("q-item-label",[e._v("\n                            "+e._s(n.opt.comName)+"\n                        ")]),t("q-item-label",{attrs:{caption:""}},[e._v("\n                            "+e._s(n.opt.pnpId)+"\n                        ")]),t("q-item-label",{attrs:{caption:""}},[e._v("\n                            "+e._s(n.opt.manufacturer)+"\n                        ")]),t("q-item-label",{attrs:{caption:""}},[e._v("\n                            vendorId:"+e._s(n.opt.vendorId)+"\n                        ")]),t("q-item-label",{attrs:{caption:""}},[e._v("\n                            productId:"+e._s(n.opt.productId)+"\n                        ")]),t("q-item-label",{attrs:{caption:""}},[e._v("\n                            serialNumber:"+e._s(n.opt.serialNumber)+"\n                        ")])],1)],1)]}},{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",[e._v("\n                        No Devices\n                    ")])],1)]},proxy:!0},{key:"append",fn:function(){return[t("q-btn",{attrs:{flat:"",round:"",dense:"",hint:"search devices",icon:"refresh",disable:e.deviceIsOpen,loading:e.deviceSearching},on:{click:function(n){return e.search()}},scopedSlots:e._u([{key:"loading",fn:function(){return[t("q-spinner-radio")]},proxy:!0}])})]},proxy:!0}]),model:{value:e.deviceSelected,callback:function(n){e.deviceSelected=n},expression:"deviceSelected"}}),t("q-btn",{style:{opacity:e.deviceSelected?"inherit":"0.05"},attrs:{rounded:"",icon:e.deviceIsOpen?"phonelink_off":"phonelink",loading:e.deviceConnecting,label:e.deviceIsOpen?"disconnect":"connect",disable:!e.deviceSelected},on:{click:function(n){return e.toggleConnect()}},scopedSlots:e._u([{key:"loading",fn:function(){return[t("q-spinner-gears")]},proxy:!0},{key:"after",fn:function(){return[t("q-icon",{attrs:{name:"close"}})]},proxy:!0}])})],1),t("section",[t("p",{staticClass:"q-ma-md"},[e._v("\n            "+e._s(e.deviceSelected)+"\n        ")])]),t("LogView",{ref:"mylog",staticClass:"q-mt-md q-pa-sm",attrs:{"show-demo-data":"",log:e.log},on:{"update:log":function(n){e.log=n}}}),t("section",{staticClass:"q-mt-md",staticStyle:{"min-width":"50vw"}},[t("q-input",{attrs:{filled:"",label:"Send Message",disable:!e.deviceIsOpen||e.deviceConnecting},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.messageSend()}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",style:{opacity:""!==e.messagaeToSend?"inherit":"0.1"},attrs:{name:"close"},on:{click:function(n){e.messagaeToSend=""}}})]},proxy:!0},{key:"after",fn:function(){return[t("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{round:"",dense:"",flat:"",icon:"send",disable:!e.deviceIsOpen||e.deviceConnecting},on:{click:function(n){return e.messageSend()}}})]},proxy:!0}]),model:{value:e.messagaeToSend,callback:function(n){e.messagaeToSend=n},expression:"messagaeToSend"}})],1)],1)},o=[],s=(t("386d"),t("ac4d"),t("8a81"),t("ac6a"),t("f559"),t("11ec")),c=t("01bf"),a={vendorId:-1,productId:-1,comName:"/dummyResponder/0",pnpId:-1,locationId:-1,serialNumber:"42",manufacturer:"s-light.eu",product:"dummyResponder",release:void 0,interface:void 0,usagePage:void 0,usage:void 0},r={name:"PageSerialTest",data:function(){return{serialAvailable:!1,device:void 0,parser:void 0,deviceList:[a],deviceSelected:"dummyResponder",deviceIsOpen:!1,deviceSearching:!1,deviceConnecting:!1,messagaeToSend:"Hello World :-)",log:void 0}},methods:{toggleConnect:function(){console.group("toggleConnect()"),this.deviceConnecting=!0,this.deviceIsOpen?(console.log("we will close now.."),this.deviceClose(),console.log("close done.")):(console.log("we will open now.."),this.deviceOpen()),console.groupEnd()},deviceOpen:function(){var e=this;if(console.group("deviceOpen()"),console.log("this.deviceSelected '".concat(this.deviceSelected,"'")),this.deviceSelected.comName.startsWith("/dummyResponder/"))console.log("this.deviceSelected.comName '".concat(this.deviceSelected.comName,"'")),setTimeout(function(){console.log("done."),e.deviceConnecting=!1,e.deviceIsOpen=!0},500);else if(this.serialAvailable)try{this.device=new SerialPort(this.deviceSelected.comName,{baudRate:115200}),this.device.pipe(this.parser),this.device.on("open",function(){console.log("event open"),e.deviceIsOpen=e.device.isOpen,e.deviceConnecting=!1}),this.device.on("close",function(){console.log("event close"),e.deviceIsOpen=e.device.isOpen,e.deviceConnecting=!1})}catch(n){console.error("port open failed:\n",n),this.deviceConnecting=!1}else this.deviceConnecting=!1,console.error("Serial not Available!");console.groupEnd()},deviceClose:function(){var e=this;this.deviceSelected.comName.startsWith("/dummyResponder/")?setTimeout(function(){e.deviceConnecting=!1,e.deviceIsOpen=!1},500):this.serialAvailable&&this.device&&(this.deviceConnecting=!0,this.device.close())},messageSend:function(){var e=this;if(this.deviceSelected.comName.startsWith("/dummyResponder/")){var n=this.messagaeToSend;setTimeout(function(){e.messageReceive(n)},1e3)}else this.serialAvailable&&this.device.write(this.messagaeToSend+"\n");this.$refs.mylog.addEntryOut(this.messagaeToSend),this.messagaeToSend=""},messageReceive:function(e){this.$refs.mylog.addEntryIn(e)},search:function(){var e=this;this.serialAvailable?(this.deviceSearching=!0,SerialPort.list().then(function(n){var t={};Object(s["a"])(t,a),e.deviceList=[t];var i=!0,o=!1,c=void 0;try{for(var r,d=n[Symbol.iterator]();!(i=(r=d.next()).done);i=!0){var l=r.value;l.vendorId&&e.deviceList.push(l)}}catch(v){o=!0,c=v}finally{try{i||null==d.return||d.return()}finally{if(o)throw c}}e.deviceSelected=e.deviceList[e.deviceList.length-1],e.deviceSearching=!1},function(n){console.error("serialport.list:",n),e.deviceSearching=!1})):setTimeout(function(){var n={};Object(s["a"])(n,a),n.comName="/dummyResponder/"+e.deviceList.length,n.serialNumber=42+100*e.deviceList.length,n.product="dummyResponder new"+e.deviceList.length,e.deviceList.push(n),e.deviceSearching=!1},2e3)}},computed:{testthings:function(){var e=[],n=!0,t=!1,i=void 0;try{for(var o,s=this.deviceList[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;e.push(c.comName)}}catch(a){t=!0,i=a}finally{try{n||null==s.return||s.return()}finally{if(t)throw i}}return e}},mounted:function(){var e=this;if(this.deviceSelected=this.deviceList[0],SerialPort){try{var n=SerialPort.parsers.Readline;this.parser=new n,this.parser.on("data",function(n){return e.messageReceive(n)}),this.serialAvailable=!0}catch(t){this.serialAvailable=!1,console.error(t)}this.search()}},beforeDestroy:function(){console.group("beforeDestroy.."),this.serialAvailable&&this.device&&this.device.isOpen&&(console.group("close devices."),this.device.close()),console.groupEnd()},filters:{},components:{LogView:c["a"]}},d=r,l=t("42e1"),v=Object(l["a"])(d,i,o,!1,null,null,null);n["default"]=v.exports}}]);