(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{536:function(t,s,e){"use strict";e.r(s);var r=e(11),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"openwrt-lede-mirrors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openwrt-lede-mirrors"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/openwrt/"}},[t._v("OpenWRT")]),t._v(" (LEDE)  Mirrors")],1),t._v(" "),s("p",[t._v("OpenWRT（曾用名 LEDE）是一款广泛应用于路由器的嵌入式操作系统。本站提供 OpenWRT 的包管理器 "),s("code",[t._v("opkg")]),t._v(" 的镜像，以加快国内访问速度。")]),t._v(" "),s("h2",{attrs:{id:"手工替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手工替换"}},[t._v("#")]),t._v(" 手工替换")]),t._v(" "),s("p",[t._v("登录到路由器，并编辑 "),s("code",[t._v("/etc/opkg/distfeeds.conf")]),t._v(" 文件，将其中的 "),s("code",[t._v("downloads.openwrt.org")]),t._v(" 替换为 "),s("code",[t._v("mirrors.sustech.edu.cn/openwrt")]),t._v(" 即可。")]),t._v(" "),s("h2",{attrs:{id:"自动替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动替换"}},[t._v("#")]),t._v(" 自动替换")]),t._v(" "),s("p",[t._v("执行如下命令自动替换")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s_downloads.openwrt.org_mirrors.sustech.edu.cn/openwrt_'")]),t._v(" /etc/opkg/distfeeds.conf\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);