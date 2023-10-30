(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1317:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"mongodb的权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb的权限管理"}},[s._v("#")]),s._v(" Mongodb的权限管理")]),s._v(" "),e("h5",{attrs:{id:"学习目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标")]),s._v(" "),e("p",[s._v("1.了解 mongodb的权限管理")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_1-为什么要进行权限管理的设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要进行权限管理的设置"}},[s._v("#")]),s._v(" 1. 为什么要进行权限管理的设置")]),s._v(" "),e("p",[s._v("刚安装完毕的mongodb默认不使用权限认证方式启动，与MySQL不同，mongodb在安装的时候并没有设置权限，然而公网运行系统需要设置权限以保证数据安全，所以我们要学习mongodb的权限管理")]),s._v(" "),e("h3",{attrs:{id:"_2-mongodb的权限管理方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-mongodb的权限管理方案"}},[s._v("#")]),s._v(" 2. mongodb的权限管理方案")]),s._v(" "),e("ul",[e("li",[s._v("MongoDB是没有默认管理员账号，所以要先添加管理员账号，并且mongodb服务器需要在运行的时候开启验证模式\n"),e("ul",[e("li",[s._v("用户只能在用户所在数据库登录(创建用户的数据库)，包括管理员账号。")]),s._v(" "),e("li",[s._v("管理员可以管理所有数据库，但是不能直接管理其他数据库，要先认证后才可以。")])])])]),s._v(" "),e("h3",{attrs:{id:"_3-mongodb超级管理员账号的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-mongodb超级管理员账号的创建"}},[s._v("#")]),s._v(" 3. mongodb超级管理员账号的创建")]),s._v(" "),e("h4",{attrs:{id:"_3-1-创建超级用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建超级用户"}},[s._v("#")]),s._v(" 3.1 创建超级用户")]),s._v(" "),e("p",[s._v("进入mongo shell")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo mongod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用admin数据库(超级管理员账号必须创建在该数据库上)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use admin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建超级用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.createUser({"user":"python","pwd":"python","roles":["root"]})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建成功会显示如下信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Successfully added user: { "user" : "python", "roles" : [ "root" ] }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出mongo shell")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("exit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_3-2-以权限认证的方式启动mongodb数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-以权限认证的方式启动mongodb数据库"}},[s._v("#")]),s._v(" 3.2 以权限认证的方式启动mongodb数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo mongod --auth\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动之后在启动信息中会有如下信息，说明mongodb以权限认证的方式启动成功")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[initandlisten] options: { security: { authorization: "enabled" } }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_3-3-登录验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-登录验证"}},[s._v("#")]),s._v(" 3.3 登录验证")]),s._v(" "),e("p",[s._v("此时再使用数据库各命令的时候会报权限错误，需要认证才能执行相应操作、")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use admin\ndb.auth('python','python')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("python用户是创建在admin数据库上的所以必须来到admin数据库上进行认证")]),s._v(" "),e("li",[s._v("认证成功会返回1，失败返回0")])]),s._v(" "),e("h3",{attrs:{id:"_4-创建普通用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建普通用户"}},[s._v("#")]),s._v(" 4. 创建普通用户")]),s._v(" "),e("h4",{attrs:{id:"_4-1-在使用的数据库上创建普通用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-在使用的数据库上创建普通用户"}},[s._v("#")]),s._v(" 4.1 在使用的数据库上创建普通用户")]),s._v(" "),e("p",[s._v("1.选择需要创建用户的数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use test1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("创建用户")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.createUser("user":"user1", "pwd":"pwd1", roles:["read"])\n创建普通用户user1,该用户在test1上的权限是只读\ndb.createUser("user":"user1", "pwd":"pwd1", roles:["readWrite"])\n创建普通用户user1,该用户在test1上的权限是读写\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_4-2-在admin用户数据库上创建普通用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-在admin用户数据库上创建普通用户"}},[s._v("#")]),s._v(" 4.2 在admin用户数据库上创建普通用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('use admin\ndb.createUser({"user":"python1", "pwd":"python1", roles:[{"role":"read","db":"dbname1"},{"role":"readWrite","db":"dbname2"}\n]})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("在admin上创建python1用户，python1用户的权限有两个，一个再dbname1上的只读，另一个是在dbname2上的读写")]),s._v(" "),e("h3",{attrs:{id:"_5-查看创建的用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看创建的用户"}},[s._v("#")]),s._v(" 5. 查看创建的用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('show users\n{\n\t"_id" : "admin.python",\n\t"user" : "python",\n\t"db" : "admin",\n\t"roles" : [\n\t\t{\n\t\t\t"role" : "root",\n\t\t\t"db" : "admin"\n\t\t}\n\t]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"_6-删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-删除用户"}},[s._v("#")]),s._v(" 6. 删除用户")]),s._v(" "),e("h4",{attrs:{id:"_6-1-进入账号数据所在的数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-进入账号数据所在的数据库"}},[s._v("#")]),s._v(" 6.1 进入账号数据所在的数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use db_name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_6-2-删除用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-删除用户"}},[s._v("#")]),s._v(" 6.2 删除用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("db.dropUser('python')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),e("ol",[e("li",[s._v("了解mongodb的权限管理")]),s._v(" "),e("li",[s._v("熟悉创建用户的相应流程")])]),s._v(" "),e("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);