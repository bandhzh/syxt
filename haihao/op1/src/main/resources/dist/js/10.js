webpackJsonp([10],{288:function(t,n,e){var o=e(1)(e(364),e(389),null,null);t.exports=o.exports},364:function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var s=e(115),l=o(s),i=e(135),a=o(i);n.default={components:{Group:l.default,Cell:a.default},computed:{myInfo:function(){return this.$store.state.myInfo}},methods:{logout:function(){var t=this;this.$vux.confirm.show({title:"确定要注销帐号？",onConfirm:function(){t.$store.dispatch("logout")}})}}},t.exports=n.default},389:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.myInfo.account?e("div",{staticClass:"g-inherit m-main p-general"},[e("group",{staticClass:"u-card"},[e("cell",{attrs:{title:t.myInfo.nick,"inline-desc":"帐号: "+t.myInfo.account}},[e("img",{staticClass:"icon",attrs:{width:"20",src:t.myInfo.avatar},slot:"icon"})])],1),t._v(" "),e("group",{staticClass:"u-card"},[e("cell",{attrs:{title:"昵称"}},[t._v(t._s(t.myInfo.nick||""))]),t._v(" "),e("cell",{attrs:{title:"性别"}},[t._v(t._s(t.myInfo.gender))]),t._v(" "),e("cell",{attrs:{title:"生日"}},[t._v(t._s(t.myInfo.birth))]),t._v(" "),e("cell",{attrs:{title:"手机"}},[t._v(t._s(t.myInfo.tel))]),t._v(" "),e("cell",{attrs:{title:"邮箱"}},[t._v(t._s(t.myInfo.email))]),t._v(" "),e("cell",{attrs:{title:"签名"}},[t._v(t._s(t.myInfo.sign))])],1),t._v(" "),e("div",[e("x-button",{attrs:{type:"warn","action-type":"button"},nativeOn:{click:function(n){t.logout(n)}}},[t._v("注销")])],1)],1):t._e()},staticRenderFns:[]}}});