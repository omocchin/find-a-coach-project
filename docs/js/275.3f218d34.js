"use strict";(self["webpackChunkvue_first_app"]=self["webpackChunkvue_first_app"]||[]).push([[275],{8275:function(e,s,t){t.r(s),t.d(s,{default:function(){return q}});var r=t(6252),a=t(3577);const i=e=>((0,r.dD)("data-v-613a461a"),e=e(),(0,r.Cn)(),e),n=i((()=>(0,r._)("header",null,[(0,r._)("h2",null,"Request Received")],-1))),u={key:1},l={key:2};function o(e,s,t,i,o,d){const c=(0,r.up)("base-dialog"),h=(0,r.up)("base-spinner"),m=(0,r.up)("request-item"),g=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c,{show:!!o.error,title:"An error occured!",onClose:d.handleError},{default:(0,r.w5)((()=>[(0,r._)("p",null,(0,a.zw)(o.error),1)])),_:1},8,["show","onClose"]),(0,r._)("section",null,[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[n,o.isLoading?((0,r.wg)(),(0,r.j4)(h,{key:0})):d.hasRequests&!o.isLoading?((0,r.wg)(),(0,r.iD)("ul",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.receivedRequests,(e=>((0,r.wg)(),(0,r.j4)(m,{key:e.id,email:e.userEmail,message:e.message},null,8,["email","message"])))),128))])):((0,r.wg)(),(0,r.iD)("h3",l,"You haven't received any requests yet!"))])),_:1})])])}const d=["href"];function c(e,s,t,i,n,u){return(0,r.wg)(),(0,r.iD)("li",null,[(0,r._)("div",null,[(0,r._)("a",{href:u.emailLink},(0,a.zw)(t.email),9,d)]),(0,r._)("p",null,(0,a.zw)(t.message),1)])}var h={props:["email","message"],computed:{emailLink(){return"mailto:"+this.email}}},m=t(3744);const g=(0,m.Z)(h,[["render",c],["__scopeId","data-v-92277ac4"]]);var p=g,w={components:{RequestItem:p},data(){return{isLoading:!1,error:null}},computed:{receivedRequests(){return this.$store.getters["requests/requests"]},hasRequests(){return this.$store.getters["requests/hasRequests"]}},created(){this.laodRequests()},methods:{async laodRequests(){this.isLoading=!0;try{await this.$store.dispatch("requests/fetchRequests")}catch(e){this.error=e.message||"Something has failed"}this.isLoading=!1},handleError(){this.error=null}}};const _=(0,m.Z)(w,[["render",o],["__scopeId","data-v-613a461a"]]);var q=_}}]);
//# sourceMappingURL=275.3f218d34.js.map