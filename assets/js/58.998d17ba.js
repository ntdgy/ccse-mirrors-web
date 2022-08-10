(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{521:function(t,s,r){"use strict";r.r(s);var a=r(11),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"centos-mirror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-mirror"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/centos/"}},[t._v("CentOS")]),t._v(" Mirror")],1),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS"),s("OutboundLink")],1),t._v(" is a popular community-driven Linux distribution renowned for its stability and reliability. It is highly compatible with Red Hat Enterprise Linux (RHEL).")]),t._v(" "),s("h2",{attrs:{id:"backup-existing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup-existing-configuration"}},[t._v("#")]),t._v(" Backup Existing Configuration")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n")])])]),s("h2",{attrs:{id:"edit-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-configuration-file"}},[t._v("#")]),t._v(" Edit Configuration File")]),t._v(" "),s("p",[t._v("Use the following command to replace the software repository: (from "),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TUNA"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -e "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s|^mirrorlist=|#mirrorlist=|g'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         -e "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s|^#baseurl=http://mirror.centos.org|baseurl=https://mirrors.sustech.edu.cn|g'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         -i.bak "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         /etc/yum.repos.d/CentOS-*.repo\n\n")])])]),s("h2",{attrs:{id:"refresh-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh-cache"}},[t._v("#")]),t._v(" Refresh Cache")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum makecache\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);