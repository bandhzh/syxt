webpackJsonp([5],{294:function(t,s,e){e(398);var n=e(1)(e(373),e(384),null,null);t.exports=n.exports},373:function(t,s,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}s.__esModule=!0;var i=e(41),a=n(i),o=e(15),r=n(o);s.default={data:function(){return{delSessionId:null,stopBubble:!1,noticeIcon:r.default.noticeIcon,myPhoneIcon:r.default.myPhoneIcon}},computed:{sysMsgUnread:function(){return(this.$store.state.sysMsgUnread.addFriend||0)+this.$store.state.customSysMsgUnread},userInfos:function(){return this.$store.state.userInfos},myInfo:function(){return this.$store.state.myInfo},myPhoneId:function(){return""+this.$store.state.userUID},sessionlist:function(){var t=this;return this.$store.state.sessionlist.filter(function(s){if(s.name="",s.avatar="","p2p"===s.scene){var e=null;if(s.to===t.myPhoneId)return!1;e=t.userInfos[s.to],e&&(s.name=a.default.getFriendAlias(e),s.avatar=e.avatar)}var n=s.lastMsg||{};return"text"===n.type?s.lastMsgShow=n.text||"":"custom"===n.type?s.lastMsgShow=a.default.parseCustomMsg(n):a.default.mapMsgType(n)?s.lastMsgShow="["+a.default.mapMsgType(n)+"]":s.lastMsgShow="",s.updateTime&&(s.updateTimeShow=a.default.formatDate(s.updateTime,!0)),s})}},methods:{enterSysMsgs:function(){this.hideDelBtn()||(location.href="#/sysmsgs")},enterChat:function(t){this.hideDelBtn()||t&&t.id&&(location.href="#/chat/"+t.id)},enterMyChat:function(){location.href="#/chat/p2p-"+this.myPhoneId},deleteSession:function(){null!==this.delSessionId&&this.$store.dispatch("deleteSession",this.delSessionId)},showDelBtn:function(t){var s=this;t&&t.data&&t.data.attrs&&(this.delSessionId=t.data.attrs.sessionId,this.stopBubble=!0,setTimeout(function(){s.stopBubble=!1},20))},hideDelBtn:function(){return null!==this.delSessionId&&!this.stopBubble&&(this.delSessionId=null,!0)}}},t.exports=s.default},375:function(t,s,e){s=t.exports=e(4)(void 0),s.push([t.i,".p-session .vux-cell-primary{max-width:70%}",""])},384:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"g-inherit m-main p-session"},[e("group",{staticClass:"u-list"},[e("cell",{staticClass:"u-list-item",attrs:{title:"消息中心"},nativeOn:{click:function(s){t.enterSysMsgs(s)}}},[e("img",{staticClass:"icon",attrs:{width:"24",src:t.noticeIcon},slot:"icon"}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.sysMsgUnread>0,expression:"sysMsgUnread > 0"}],staticClass:"u-unread"},[t._v(t._s(t.sysMsgUnread))])]),t._v(" "),e("cell",{staticClass:"u-list-item",attrs:{title:"我的手机"},nativeOn:{click:function(s){t.enterMyChat(s)}}},[e("img",{staticClass:"icon",attrs:{width:"24",src:t.myPhoneIcon},slot:"icon"})]),t._v(" "),t._l(t.sessionlist,function(s,n){return e("cell",{directives:[{name:"touch",rawName:"v-touch:swipeleft",value:t.showDelBtn,expression:"showDelBtn",arg:"swipeleft"},{name:"touch",rawName:"v-touch:swiperight",value:t.hideDelBtn,expression:"hideDelBtn",arg:"swiperight"}],key:s.id,staticClass:"u-list-item",attrs:{title:s.name,"inline-desc":s.lastMsgShow,sessionId:s.id},nativeOn:{click:function(e){t.enterChat(s)}}},[e("img",{staticClass:"icon",attrs:{width:"24",src:s.avatar},slot:"icon"}),t._v(" "),e("span",[t._v("\n        "+t._s(s.updateTimeShow)+"\n      ")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.unread>0,expression:"session.unread > 0"}],staticClass:"u-unread"},[t._v(t._s(s.unread))]),t._v(" "),e("span",{staticClass:"u-tag-del",class:{active:t.delSessionId===s.id},on:{click:t.deleteSession}})])})],2)],1)},staticRenderFns:[]}},398:function(t,s,e){var n=e(375);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(5)("ba6f6818",n,!0)}});