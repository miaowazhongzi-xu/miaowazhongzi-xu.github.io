(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1259:function(t,e,n){"use strict";n(825)},1284:function(t,e,n){"use strict";n.r(e);var i=n(45),s=(n(35),n(18),n(36),n(66),n(8),n(67),n(174),n(267),n(418),{name:"MyTypewriter",data:function(){return{strs:[{title:"有一份热，发一份光",stop:5},{title:"就如萤火一般"},{title:"也可以在黑暗里发一点光"},{title:"不必等候炬火"},{title:"此后如竟没有炬火"},{title:"我便是唯一的光"},{title:"愿与所有中国青年共勉"}],currentIndex:0,spans:null,el:null,titleEl:null}},mounted:function(){var t=this;if(this.el)this.init();else var e=setInterval((function(){t.el=document.querySelector(".hero .description"),t.titleEl=document.querySelector(".hero  h1"),t.el&&(t.titleEl.style.fontWeight="bold",e&&clearInterval(e),t.init())}),100)},methods:{init:function(){this.currentIndex==this.strs.length&&(this.currentIndex=0);var t=this.strs[this.currentIndex];this.el.innerHTML=t instanceof Object?t.title:t,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");var e=0;this.spans=Object(i.a)(document.querySelectorAll(".hero .description span")),this.spans.forEach((function(n,i){e+=.1,t.hasOwnProperty("stop")&&(t.stop instanceof Array?t.stop.includes(i)&&(e+=.3):t.stop==i&&(e+=.3)),n.style.setProperty("--delay","".concat(e,"s"))})),this.el.addEventListener("animationend",this.lastEnd)},lastEnd:function(t){var e=this;t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout((function(){e.el.removeEventListener("animationend",e.lastEnd);var t=0;e.spans.reverse().forEach((function(n,i){e.el.classList.remove("ended"),n.style.width="2ch",n.style.animation="0.1s text-out ease-in-out forwards",t+=.05,n.style.animationDelay="".concat(t,"s")})),e.el.addEventListener("animationend",e.firstEnd)}),1500))},firstEnd:function(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach((function(t){t.remove()})),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}}),r=(n(1259),n(3)),l=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=l.exports},825:function(t,e,n){}}]);