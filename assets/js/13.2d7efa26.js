(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1089:function(r,a,t){r.exports=t.p+"assets/img/gerapy_mugg.e7a1d156.png"},1090:function(r,a,t){r.exports=t.p+"assets/img/gerapy_db.fe120af7.png"},1091:function(r,a,t){r.exports=t.p+"assets/img/gerapy_zy.d81e33fb.png"},1092:function(r,a,t){r.exports=t.p+"assets/img/gerapy_gl.fb9f71e6.png"},1093:function(r,a,t){r.exports=t.p+"assets/img/gerapy_tj.dd89e8d1.png"},1094:function(r,a,t){r.exports=t.p+"assets/img/gerapy_lb.41ed99ca.png"},1095:function(r,a,t){r.exports=t.p+"assets/img/gerapy_pc.5efc2f7e.png"},1096:function(r,a,t){r.exports=t.p+"assets/img/project_1.2f08ea18.png"},1097:function(r,a,t){r.exports=t.p+"assets/img/project_list.3b289ac2.png"},1098:function(r,a,t){r.exports=t.p+"assets/img/projectdb.18642e05.png"},1099:function(r,a,t){r.exports=t.p+"assets/img/build.23c62b7e.png"},1100:function(r,a,t){r.exports=t.p+"assets/img/bs.f058d8ff.png"},1101:function(r,a,t){r.exports=t.p+"assets/img/bucg.2f6c5e14.png"},1102:function(r,a,t){r.exports=t.p+"assets/img/yx1.70bf6e7d.png"},1103:function(r,a,t){r.exports=t.p+"assets/img/yx2.7911f817.png"},1318:function(r,a,t){"use strict";t.r(a);var s=t(3),e=Object(s.a)({},(function(){var r=this,a=r.$createElement,s=r._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h2",{attrs:{id:"_13-gerapy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-gerapy"}},[r._v("#")]),r._v(" 13.Gerapy")]),r._v(" "),s("h5",{attrs:{id:"学习目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[r._v("#")]),r._v(" 学习目标")]),r._v(" "),s("ol",[s("li",[r._v("了解 什么是Gerapy")]),r._v(" "),s("li",[r._v("掌握 Gerapy的安装")]),r._v(" "),s("li",[r._v("掌握 Gerapy配置启动")]),r._v(" "),s("li",[r._v("掌握 通过Gerapy配置管理scrapy项目")])]),r._v(" "),s("h3",{attrs:{id:"_1-gerapy介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-gerapy介绍"}},[r._v("#")]),r._v(" 1.Gerapy介绍:")]),r._v(" "),s("p",[r._v("​ Gerapy 是一款 "),s("em",[s("strong",[r._v("分布式爬虫管理框架")])]),r._v("，支持 Python 3，基于 Scrapy、Scrapyd、Scrapyd-Client、Scrapy-Redis、Scrapyd-API、Scrapy-Splash、Jinjia2、Django、Vue.js 开发，Gerapy 可以帮助我们：\n​")]),r._v(" "),s("ol",[s("li",[r._v("更方便地控制爬虫运行")]),r._v(" "),s("li",[r._v("更直观地查看爬虫状态")]),r._v(" "),s("li",[r._v("更实时地查看爬取结果")]),r._v(" "),s("li",[r._v("更简单地实现项目部署")]),r._v(" "),s("li",[r._v("更统一地实现主机管理")])]),r._v(" "),s("h3",{attrs:{id:"_2-gerapy的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-gerapy的安装"}},[r._v("#")]),r._v(" 2.Gerapy的安装")]),r._v(" "),s("p",[r._v("​ 1.执行如下命令，等待安装完毕")]),r._v(" "),s("p",[r._v("​   "),s("em",[s("strong",[r._v("pip3 install gerapy")])])]),r._v(" "),s("p",[r._v("​ 2.验证gerapy是否安装成功")]),r._v(" "),s("p",[r._v("​   在终端中执行 gerapy 会出现如下信息")]),r._v(" "),s("p",[r._v("​   "),s("code",[r._v("​ Usage: ​ gerapy init [--folder=<folder>] ​ gerapy migrate ​ gerapy createsuperuser ​ gerapy runserver [<host:port>] ​")])]),r._v(" "),s("h3",{attrs:{id:"_3-gerapy配置启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-gerapy配置启动"}},[r._v("#")]),r._v(" 3.Gerapy配置启动")]),r._v(" "),s("p",[r._v("​ 1.新建一个项目")]),r._v(" "),s("p",[r._v("​   "),s("em",[s("strong",[r._v("gerapy init")])])]),r._v(" "),s("p",[r._v("​   执行完该命令之后会在当前目录下生成一个gerapy文件夹，进入该文件夹，会找到一个名为projects的文件夹\n​   "),s("img",{attrs:{src:t(1089),alt:"目录结构"}})]),r._v(" "),s("p",[r._v("​ 2.对数据库进行初始化(在gerapy目录中操作)，执行如下命令")]),r._v(" "),s("p",[r._v("​   "),s("em",[s("strong",[r._v("gerapy migrate")])])]),r._v(" "),s("p",[r._v("​   对数据库初始化之后会生成一个SQLite数据库，数据库保存主机配置信息和部署版本等\n​   "),s("img",{attrs:{src:t(1090),alt:"数据库初始化"}})]),r._v(" "),s("p",[r._v("​ 3.启动 gerapy服务")]),r._v(" "),s("p",[r._v("​   "),s("em",[s("strong",[r._v("gerapy runserver")])])]),r._v(" "),s("p",[r._v("​ 此时启动gerapy服务的这台机器的8000端口上开启了Gerapy服务，在浏览器中输入http://localhost:8000就能进入Gerapy管理界面，在管理界面就可以进行主机管理和界面管理"),s("br"),r._v("\n​   "),s("img",{attrs:{src:t(1091),alt:"主界面"}})]),r._v(" "),s("h3",{attrs:{id:"_4-通过gerapy配置管理scrapy项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过gerapy配置管理scrapy项目"}},[r._v("#")]),r._v(" 4.通过Gerapy配置管理scrapy项目")]),r._v(" "),s("ol",[s("li",[s("em",[s("strong",[r._v("配置主机")])]),r._v("\n1.添加scrapyd主机\n"),s("img",{attrs:{src:t(1092),alt:"配置"}}),r._v(" "),s("img",{attrs:{src:t(1093),alt:"配置"}})])]),r._v(" "),s("p",[r._v("需要添加 IP、端口，以及名称，点击创建即可完成添加，点击返回即可看到当前添加的 Scrapyd 服务列表,创建成功后,我们可以在列表中查看已经添加的服务")]),r._v(" "),s("p",[r._v("​ 2.执行爬虫,就点击调度.然后运行. (前提是: 我们配置的scrapyd中,已经发布了爬虫.)")]),r._v(" "),s("p",[r._v("​ "),s("img",{attrs:{src:t(1094),alt:"配置"}}),r._v("\n​ "),s("img",{attrs:{src:t(1095),alt:"配置"}})]),r._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[s("em",[s("strong",[r._v("配置Projects")])])]),r._v(" "),s("p",[r._v("1.我们可以将scarpy项目直接放到 /gerapy/projects下.\n"),s("img",{attrs:{src:t(1096),alt:"配置"}})]),r._v(" "),s("p",[r._v("2.可以在gerapy后台看到有个项目\n"),s("img",{attrs:{src:t(1097),alt:"配置"}})]),r._v(" "),s("p",[r._v("3.点击部署点击部署按钮进行打包和部署，在右下角我们可以输入打包时的描述信息，类似于 Git 的 commit 信息，然后点击打包按钮，即可发现 Gerapy 会提示打包成功，同时在左侧显示打包的结果和打包名称。\n"),s("img",{attrs:{src:t(1098),alt:"配置"}}),r._v(" "),s("img",{attrs:{src:t(1099),alt:"配置"}})]),r._v(" "),s("p",[r._v("4.选择一个站点，点击右侧部署，将该项目部署到该站点上\n"),s("img",{attrs:{src:t(1100),alt:"配置"}})]),r._v(" "),s("p",[r._v("5.成功部署之后会显示描述和部署时间\n"),s("img",{attrs:{src:t(1101),alt:"配置"}})]),r._v(" "),s("p",[r._v("6.来到clients界面，找到部署该项目的节点，点击调度\n"),s("img",{attrs:{src:t(1102),alt:"配置"}})]),r._v(" "),s("p",[r._v("7.在该节点中的项目列表中找到项目，点击右侧run运行项目\n"),s("img",{attrs:{src:t(1103),alt:"配置"}})])])]),r._v(" "),s("h3",{attrs:{id:"补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[r._v("#")]),r._v(" 补充:")]),r._v(" "),s("p",[r._v("1.Gerapy 与 scrapyd 有什么关联吗?")]),r._v(" "),s("p",[r._v("​ 我们仅仅使用scrapyd是可以调用scrapy进行爬虫. 只是需要使用命令行开启爬虫\n​   curl http://127.0.0.1:6800/schedule.json -d project=工程名 -d spider=爬虫名\n​ 使用Greapy就是为了将使用命令行开启爬虫变成 “小手一点”. 我们在gerapy中配置了scrapyd后,不需要使用命令行,可以通过图形化界面直接开启爬虫.")]),r._v(" "),s("h5",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[r._v("#")]),r._v(" 小结")]),r._v(" "),s("ol",[s("li",[r._v("了解 什么是Gerapy")]),r._v(" "),s("li",[r._v("掌握 Gerapy的安装")]),r._v(" "),s("li",[r._v("掌握 Gerapy配置启动")]),r._v(" "),s("li",[r._v("掌握 通过Gerapy配置管理scrapy项目")])])])}),[],!1,null,null,null);a.default=e.exports}}]);