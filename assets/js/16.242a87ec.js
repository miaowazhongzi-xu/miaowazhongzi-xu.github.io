(window.webpackJsonp=window.webpackJsonp||[]).push([[16,24,38],{1258:function(t,e,i){"use strict";i(824)},1283:function(t,e,i){"use strict";i.r(e);i(130);var s={components:{FlipClock:i(833).default},name:"Weather",data:function(){return{color:"#409eff",str:"",src:"https://tianqiapi.com/api.php?style=tz&skin=mango"}},mounted:function(){this.welcomeTime()},methods:{welcomeTime:function(){var t=(new Date).getHours();t<12?(this.str="Hi,早上好,又是崭新的一天,要加油哦",this.color="#409eff"):t>=12&&t<13?(this.str="Hi,中午好,要不要忘记眯一小会儿呢？",this.color="#67c23a"):t>=13&&t<18?(this.str="Hi,下午好,记得多活动活动哦",this.color="#909399"):t>=18&&t<22?(this.str="Hi,晚上好,忙了一天,好好休息下了",this.color="#e6a23c"):(this.str="Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧",this.color="#f56c6c")}}},r=(i(1258),i(3)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"welcome-tip",style:{color:t.color}},[t._v(t._s(t.str))]),t._v(" "),t.src?i("iframe",{staticClass:"iframe",attrs:{scrolling:"no",src:t.src,frameborder:"0",width:"100%",height:"32",allowtransparency:"true"}}):t._e(),t._v(" "),i("div",{staticClass:"clock-box"},[i("FlipClock")],1)])}),[],!1,null,"42bc5ed9",null);e.default=n.exports},760:function(t,e,i){},777:function(t,e,i){"use strict";i(760)},778:function(t,e,i){},781:function(t,e,i){"use strict";i.r(e);i(262),i(35);var s={name:"FlipClock",data:function(){return{isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}},props:{frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:600}},methods:{_textClass:function(t){return"number"+t},_flip:function(t,e,i){var s=this;if(this.isFlipping)return!1;this.frontTextFromData=e,this.backTextFromData=i,this.flipType=t,this.isFlipping=!0,setTimeout((function(){s.isFlipping=!1,s.frontTextFromData=i}),this.duration)},flipDown:function(t,e){this._flip("down",t,e)},flipUp:function(t,e){this._flip("up",t,e)},setFront:function(t){this.frontTextFromData=t},setBack:function(t){this.backTextFromData=t}},created:function(){this.frontTextFromData=this.frontText,this.backTextFromData=this.backText}},r=(i(777),i(3)),n=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"M-Flipper",class:[this.flipType,{go:this.isFlipping}]},[e("div",{staticClass:"digital front",class:this._textClass(this.frontTextFromData)}),this._v(" "),e("div",{staticClass:"digital back",class:this._textClass(this.backTextFromData)})])}),[],!1,null,null,null);e.default=n.exports},789:function(t,e,i){"use strict";i(778)},824:function(t,e,i){},833:function(t,e,i){"use strict";i.r(e);i(130),i(35),i(18),i(105),i(36),i(415),i(416),i(264),i(417),i(414);var s={name:"flipClock",data:function(){return{timer:null,flipObjs:[]}},components:{Flipper:i(781).default},methods:{init:function(){for(var t=new Date,e=this.formatDate(new Date(t.getTime()),"hhiiss"),i=0;i<this.flipObjs.length;i++)this.flipObjs[i].setFront(e[i])},run:function(){var t=this;this.timer=setInterval((function(){for(var e=new Date,i=t.formatDate(new Date(e.getTime()-1e3),"hhiiss"),s=t.formatDate(e,"hhiiss"),r=0;r<t.flipObjs.length;r++)i[r]!==s[r]&&t.flipObjs[r].flipDown(i[r],s[r])}),1e3)},formatDate:function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"m+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"i+":t.getMinutes(),"s+":t.getSeconds()};for(var s in i)if(new RegExp("(".concat(s,")")).test(e)){var r=i[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:this.padLeftZero(r))}return e},padLeftZero:function(t){return("00"+t).substr(t.length)}},mounted:function(){this.flipObjs=[this.$refs.flipperHour1,this.$refs.flipperHour2,this.$refs.flipperMinute1,this.$refs.flipperMinute2,this.$refs.flipperSecond1,this.$refs.flipperSecond2],this.init(),this.run()}},r=(i(789),i(3)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"FlipClock"},[i("Flipper",{ref:"flipperHour1"}),t._v(" "),i("Flipper",{ref:"flipperHour2"}),t._v(" "),i("em",[t._v(":")]),t._v(" "),i("Flipper",{ref:"flipperMinute1"}),t._v(" "),i("Flipper",{ref:"flipperMinute2"}),t._v(" "),i("em",[t._v(":")]),t._v(" "),i("Flipper",{ref:"flipperSecond1"}),t._v(" "),i("Flipper",{ref:"flipperSecond2"})],1)}),[],!1,null,null,null);e.default=n.exports}}]);