webpackJsonp([7],{287:function(t,s,a){a(402);var i=a(1)(a(363),a(392),null,null);t.exports=i.exports},363:function(t,s,a){"use strict";s.__esModule=!0,s.default={computed:{friendslist:function(){var t=this;return this.$store.state.friendslist.filter(function(s){var a=s.account,i=t.userInfos[a],n=i.alias?i.alias.trim():"";return s.alias=n||i.nick||a,s.link="/namecard/"+s.account,!(!i.isFriend||i.isBlack)})},blacklist:function(){var t=this;return this.$store.state.blacklist.filter(function(s){var a=s.account,i=t.userInfos[a],n=i.alias?i.alias.trim():"";return s.alias=n||i.nick||a,s.link="/namecard/"+s.account,!!i.isFriend})},robotslist:function(){return this.$store.state.robotslist.map(function(t){return t.link="/namecard/"+t.account,t})},userInfos:function(){return this.$store.state.userInfos}}},t.exports=s.default},379:function(t,s,a){s=t.exports=a(4)(void 0),s.push([t.i,".p-contacts .add-friend{background-color:#fff}.p-contacts .m-list{padding-top:8rem}.p-contacts .u-search-box-wrap{text-align:center}.p-contacts .u-search-box{position:relative;min-width:45%;padding:1em;height:3rem;text-align:center;border:1px solid #ccc;background-color:#fff;font-size:.8rem;box-shadow:2px 2px 6px #ccc}.p-contacts .u-search-box,.p-contacts .u-search-box a{display:inline-block;-moz-box-sizing:border-box;box-sizing:border-box}.p-contacts .u-search-box a{height:100%;width:100%}.p-contacts .u-card .icon{display:inline-block;margin-right:.4rem;width:1.4rem;height:1.4rem;background-size:20rem}.p-contacts .u-card .icon-team-advanced{background-position:0 -3rem}.p-contacts .u-card .icon-team,.p-contacts .u-card .icon-team-advanced{background-image:url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png)}.p-contacts .u-card .icon-team{background-position:-2.1rem -3rem}",""])},392:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"g-inherit m-main p-contacts"},[t._m(0),t._v(" "),a("div",{staticClass:"m-list",attrs:{id:"userList"}},[a("group",{staticClass:"u-card",staticStyle:{display:"none"},attrs:{title:"群"}},[a("cell",{attrs:{title:"高级群-待开发"}},[a("span",{staticClass:"icon icon-team-advanced",slot:"icon"})]),t._v(" "),a("cell",{staticStyle:{display:"none"},attrs:{title:"讨论组-待开发"}},[a("span",{staticClass:"icon icon-team",slot:"icon"})])],1),t._v(" "),a("group",{staticClass:"u-card",attrs:{title:"好友列表"}},t._l(t.friendslist,function(s){return a("cell",{key:s.account,attrs:{title:s.alias,"is-link":"",link:s.link}},[a("img",{staticClass:"icon",attrs:{width:"20",src:t.userInfos[s.account].avatar},slot:"icon"})])})),t._v(" "),a("group",{staticClass:"u-card",staticStyle:{display:"none"},attrs:{title:"机器人"}},t._l(t.robotslist,function(t){return a("cell",{key:t.account,attrs:{title:t.nick,"is-link":"",link:t.link}},[a("img",{staticClass:"icon",attrs:{width:"20",src:t.avatar},slot:"icon"})])})),t._v(" "),a("group",{staticClass:"u-card",staticStyle:{display:"none"},attrs:{title:"黑名单"}},t._l(t.blacklist,function(s){return a("cell",{key:s.account,attrs:{title:s.alias,"is-link":"",link:s.link}},[a("img",{staticClass:"icon",attrs:{width:"20",src:t.userInfos[s.account].avatar},slot:"icon"})])}))],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-cards u-search-box-wrap",staticStyle:{display:"none"}},[a("span",{staticClass:"u-search-box"},[a("a",{attrs:{href:"#/searchUser/0"}},[t._v("\n        添加好友\n      ")])]),t._v(" "),a("span",{staticClass:"u-search-box"},[t._v("\n      搜索高级群-待开发\n    ")])])}]}},402:function(t,s,a){var i=a(379);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(5)("cc67e99a",i,!0)}});