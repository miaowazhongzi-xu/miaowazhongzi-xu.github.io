(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1287:function(l,n,s){"use strict";s.r(n);var v=s(3),_=Object(v.a)({},(function(){var l=this,n=l.$createElement,s=l._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[s("p",[s("strong",[l._v("了解gulp")])]),l._v(" "),s("ul",[s("li",[l._v("前端自动化打包构建工具\n=> 打包:把文件压缩，整合，移动，混淆")])]),l._v(" "),s("p",[l._v("了解一下前端的打包构建工具")]),l._v(" "),s("p",[s("code",[l._v("gulp")]),l._v(":基于流的打包构建工具\n"),s("code",[l._v("webpack")]),l._v(":基于js文件的打包构建工具")]),l._v(" "),s("p",[s("strong",[l._v("什么是流")])]),l._v(" "),s("ul",[s("li",[s("p",[l._v("流文件:流\n=> 一种文件传输的格式\n=> 一段段的文件传输")])]),l._v(" "),s("li",[s("p",[l._v("流格式:流\n=> 从头到尾的一个过程\n=> 需要从源开始一步一 步加工")])])]),l._v(" "),s("p",[l._v("gulp是基于流格式的一种打包构建工具")]),l._v(" "),s("p",[s("strong",[l._v("gulp 的依赖环境")])]),l._v(" "),s("ul",[s("li",[l._v("依赖于node环境进行开发")]),l._v(" "),s("li",[l._v("底层封装的内容就是node 里面的读写文件")])]),l._v(" "),s("p",[s("strong",[l._v("gulp 的作用")])]),l._v(" "),s("ul",[s("li",[s("p",[l._v("对于css文件\n=> 压缩\n=>\n转码(自动添加前缀)")])]),l._v(" "),s("li",[s("p",[l._v("对于js文件\n=> 压缩\n=> 转码(ES6转ES5)")])]),l._v(" "),s("li",[s("p",[l._v("对于html文件\n=> 压缩\n=> 转码(对格式的转换)")])]),l._v(" "),s("li",[s("p",[l._v("对于静态资源文件的处理")])]),l._v(" "),s("li",[s("p",[l._v("对于第三方文件的处理")])])]),l._v(" "),s("p",[s("strong",[l._v("gulp的安装")])]),l._v(" "),s("ul",[s("li",[s("p",[l._v("是一个JavaScript 相关的T具")])]),l._v(" "),s("li",[s("p",[l._v("就可以直接使用npm进行安装")])]),l._v(" "),s("li",[s("p",[l._v("需要安装再你的电脑环境里面，一次安装多次使用")])]),l._v(" "),s("li",[s("p",[l._v("打开命令行，输入指令")]),l._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("WIN: $ npm install --global gu1p\nMAC: $ sudo Inpm install --g1obal gulp\n")])]),l._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[l._v("1")]),s("br"),s("span",{staticClass:"line-number"},[l._v("2")]),s("br")])]),s("p",[l._v("gu1p的检测")]),l._v(" "),s("p",[l._v("gulp的检测")])]),l._v(" "),s("li",[s("p",[l._v("打开命令行，输入指令")]),l._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[l._v("$ gulp --version\nCLI version: "),s("span",{pre:!0,attrs:{class:"token number"}},[l._v("2.3")]),l._v(".0\nLocal version: Unknown\n")])]),l._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[l._v("1")]),s("br"),s("span",{staticClass:"line-number"},[l._v("2")]),s("br"),s("span",{staticClass:"line-number"},[l._v("3")]),s("br")])])])]),l._v(" "),s("p",[s("strong",[l._v("gulp的卸载")])]),l._v(" "),s("p",[l._v("打开命令行，输入指令")]),l._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[l._v(" $ "),s("span",{pre:!0,attrs:{class:"token function"}},[l._v("npm")]),l._v(" uninstall --global gulp\n")])]),l._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[l._v("1")]),s("br")])]),s("p",[s("strong",[l._v("gulp的版本")])]),l._v(" "),s("ul",[s("li",[l._v("gulp@3\n安装成功检测版本号，gulp 3.9.1")]),l._v(" "),s("li",[l._v("gulp@4\n安装成功检测版本号，gulp cli 2.3.0\ngulp全局工具安装完毕")]),l._v(" "),s("li",[l._v("能给你的电脑提供个启动 gulp的环境")]),l._v(" "),s("li",[l._v("私人:可以再 cmd 里面运行gulp xxx 的指令")])]),l._v(" "),s("p",[l._v("准备使用gulp\n作用:帮我们打包自己的项目\n1.准备一个项目")]),l._v(" "),s("ul",[s("li",[l._v("需求: 你要确定好自己的 目录结构\n你要分开源码和打包以后的内容")]),l._v(" "),s("li",[l._v("确定自己的目录结构")])]),l._v(" "),s("ul",[s("li",[l._v("catdmoe1")]),l._v(" "),s("li",[l._v("src\n源码")])]),l._v(" "),s("blockquote",[s("ul",[s("li",[l._v("src\n源码")])]),l._v(" "),s("ul",[s("li",[l._v("pages\nhtm]")]),l._v(" "),s("li",[l._v("CSS\nCSS")]),l._v(" "),s("li",[l._v("js\njs")]),l._v(" "),s("li",[l._v("sass\nsass")]),l._v(" "),s("li",[l._v("images\n图片")]),l._v(" "),s("li",[l._v("videos\n视频")]),l._v(" "),s("li",[l._v("audios\n音频")]),l._v(" "),s("li",[l._v("lib\n第三方文件")]),l._v(" "),s("li",[l._v("fonts\n字体图标文件")])])]),l._v(" "),s("p",[l._v("2.准备个"),s("code",[l._v("gulpfile.js")]),l._v(" 的文件")]),l._v(" "),s("ul",[s("li",[l._v("必须有gulp进行打包的依据")]),l._v(" "),s("li",[l._v("每一个项目需要一 个gulpfile.js")]),l._v(" "),s("li",[l._v("我们再这个文件里面进行本项目的打包配置")]),l._v(" "),s("li",[l._v("gulp再运行的时候，会自动读取gulpfile.js 文件里面的配置")]),l._v(" "),s("li",[l._v("按照你再gulpfile.js 文件里面的配置进行打包工作")]),l._v(" "),s("li",[l._v("注意: "),s("strong",[l._v("直接写在项目根目录， 和src 同级")])])]),l._v(" "),s("p",[l._v("3.再项目里面再次安装gu1p")]),l._v(" "),s("ul",[s("li",[l._v("注意:\n"),s("strong",[l._v("项目里面的gulp 是以第三方模块的形式出现的")])]),l._v(" "),s("li",[l._v("专门给你提供配置打包流程的API的")]),l._v(" "),s("li",[l._v("每一个项目都要安装一 次")]),l._v(" "),s("li",[l._v("打开命令行，切换到项目目录\n输入指令"),s("code",[l._v("$ npm install gulp -D")])])]),l._v(" "),s("p",[l._v("4.再"),s("code",[l._v("gulpfile.js")]),l._v(" 里面书写配置文件")]),l._v(" "),s("ul",[s("li",[l._v("书写你该项目的打包流程")]),l._v(" "),s("li",[l._v("书写完毕以后，按照打包流程去执行gulp指令运行gulpfile.js 文件")])]),l._v(" "),s("blockquote",[s("p",[l._v("1.全局依赖环境gulp")]),l._v(" "),s("ul",[s("li",[l._v("一台电脑安装次， 以后使用就可以了")]),l._v(" "),s("li",[l._v("再命令行提供gulp xXx的能力")]),l._v(" "),s("li",[l._v("指令$ npm install --global gulp")])]),l._v(" "),s("p",[l._v("2.项目依赖第三方gulp")]),l._v(" "),s("ul",[s("li",[l._v("每一个项目都要安装一次")]),l._v(" "),s("li",[l._v("作为第三方包出现，在你导入以后，可以使用gulp.xxx() 方法")]),l._v(" "),s("li",[l._v("切换到项目目录，输入指令$ npm install gulp")])]),l._v(" "),s("p",[l._v("package. json记录的第三方依赖")]),l._v(" "),s("ul",[s("li",[s("code",[l._v("dependencies")]),l._v("\n表示的你项目的项目依赖\n比如jquery, swiper\n指项目运行需要用到的内容，将来上线以后也需要用到的内容")]),l._v(" "),s("li",[s("code",[l._v("devDependencies")]),l._v("\n表示的你项目的开发依赖\n比如guln\n指项目开发阶段需要用到的内容，将来上线以后不需要用到的")])])]),l._v(" "),s("p",[l._v("gulp的常用API")]),l._v(" "),s("ul",[s("li",[l._v("前提:下载gulp第三方，导入以后使用")])]),l._v(" "),s("ol",[s("li",[s("p",[l._v("gulp. task()\n语法: "),s("code",[l._v("gulp.task")]),l._v("(任务名称，任务处理函数)\n作用:创建一个基于流的任务\n例子: "),s("code",[l._v("gulp.task")]),l._v("('htmlHandler'，function() {\n// 找到html 源文件，进行压缩，打包，放入指定目录\n})")])]),l._v(" "),s("li",[s("p",[l._v("gulp.src()")])])]),l._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[l._v("语法: `gulp.src(路径信息)`\n作用:找到源文件\n书写方式\n2-1. `gulp.src('./a/b.htm1')`\n找到指定一个文件\n2-2. gulp.src('./a/*.html')\n找到指定目录下，指定后缀的文件\n2-3. gulp.src('./a/**')\n找到指令目录下的所有文件\n2-4. gulp.src('./a/**/*') \n找到a目录下所有子目录里面的所有文件\n2-5. gulp.src('./a//***/*.html')\n找到a目录下所有子目录里面的所有.html文件\n")])]),l._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[l._v("1")]),s("br"),s("span",{staticClass:"line-number"},[l._v("2")]),s("br"),s("span",{staticClass:"line-number"},[l._v("3")]),s("br"),s("span",{staticClass:"line-number"},[l._v("4")]),s("br"),s("span",{staticClass:"line-number"},[l._v("5")]),s("br"),s("span",{staticClass:"line-number"},[l._v("6")]),s("br"),s("span",{staticClass:"line-number"},[l._v("7")]),s("br"),s("span",{staticClass:"line-number"},[l._v("8")]),s("br"),s("span",{staticClass:"line-number"},[l._v("9")]),s("br"),s("span",{staticClass:"line-number"},[l._v("10")]),s("br"),s("span",{staticClass:"line-number"},[l._v("11")]),s("br"),s("span",{staticClass:"line-number"},[l._v("12")]),s("br"),s("span",{staticClass:"line-number"},[l._v("13")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[l._v("gulp.dest()\n语法: "),s("code",[l._v("gulp.dest(路径信息)")]),l._v("\n作用:把一个内容放入指定目录内\n例子: gulp.dest('./abc')\n把他接收到的内容放到abc 目录下")])]),l._v(" "),s("li",[s("p",[l._v("gulp.watch()\n语法: "),s("code",[l._v("gulp.watch(路径信息，任务名称)")]),l._v("\n作用:监控指定目录下的文件，一旦发生变化，从新执行后面的任务\n例子: gulp .watch('./src/pages/*.html', htmlHandler )\n当指定目录下的html 文件发生变化，就会执行htmlHandler 这个任务")])]),l._v(" "),s("li",[s("p",[l._v("gulp.series()\n语法: "),s("code",[l._v("gulp.series(任务1, 任务2,任务3, ...)")]),l._v("\n作用:逐个执行多个任务，前一个任务结束，第二个任务开始")])]),l._v(" "),s("li",[s("p",[l._v("gulp.parallel()\n语法: "),s("code",[l._v("gulp.parallel(任务1,任务2,任务3, ...)")]),l._v("\n作用:并行开始多个任务")])]),l._v(" "),s("li",[s("p",[l._v("pipe()\n管道函数\n所有的gulpAPI都是基于流\n接收当前流，进入下一个流过程的管道函数\n例子:\n"),s("code",[l._v("gulp.src().pipe(压缩任务).pipe(转码).pipe(gulp.dest( 'abc' ))")])])])]),l._v(" "),s("h2",{attrs:{id:"第一个gulp程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个gulp程序"}},[l._v("#")]),l._v(" 第一个gulp程序")]),l._v(" "),s("p",[l._v("我们前面已经下载了"),s("code",[l._v("gulp")]),l._v("包`")]),l._v(" "),s("p",[l._v("开始编写程序")]),l._v(" "),s("p",[l._v("在和package.js 同级目录下创建"),s("code",[l._v("gulpfile.js")]),l._v("文件，在创建一个crs文件夹，文件目录如下")]),l._v(" "),s("h2",{attrs:{id:"gulp常用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp常用插件"}},[l._v("#")]),l._v(" gulp常用插件")]),l._v(" "),s("p",[l._v("gulp的各种插件就是用来执行各种各样的压缩混淆转码任务的")]),l._v(" "),s("p",[l._v('l. gulp-cssmin\n下载: npm i gulp-cssmin -D\n导入: const cssmin = require("gulp-cssmin" )\n导入以后得到一个处理流文件的函数\n直接再管道函数里面执行就好了')]),l._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[l._v("gulp-autoprefixer\n下载: npm i gulp- autoprefixer -D\n导入: const autoPrefixer = require( \"gulp-autoprefixer' )\n导入以后得到一个处理流文件的函数\n直接再管道函数里面使用，需要传递参数\n{browsers:[要兼容的浏览器]}")])]),l._v(" "),s("li",[s("p",[l._v("gulp-sass\n下载: npm i gulp-sass -D\n很容易报错，基本下载不成功\n为什么:因为gulp-sass 依赖另一个第三方，node-sass\nnode-sass 很难下载成功\n以前都是再一个地方下载，后来node-sass 自己单独有一个下载地址\n如果你不进行单独的node-sass 下 载地址配置，就很容易失败\n解决:给node-sass单独配置一个下载地址\n下载node-sass 从这个单独的地址下载， 下载其他的东西还是统地址\nnode-sass 单独下载地址\n$set SASS_ BINARY_ SITE=https://npm.taobao.org/mirrors/node-sass/\n单独配置一个下载地址，只有下载node-sass 的时候会使用\n过程")])]),l._v(" "),s("li",[s("p",[l._v("$set SASS_ BINARY_ SITE=https://npm.taobao.org/mirrors/node-sass/")])]),l._v(" "),s("li",[s("p",[l._v("$ npm i node-sass -D")])]),l._v(" "),s("li",[s("p",[l._v("$ npm i gulp-sass -D")])]),l._v(" "),s("li",[s("p",[l._v("gulp-uglify\n把JS文件压缩的\n下载: npm i -D gulp-uglify\n导入: const uglify = require( 'gulp-uglify')\n导入以后得到一个可以处理流文件的函数\n直接再管道函数中使用就可以了\n注意:你不能写ES6语法，一旦有了ES6语法就会报错")])]),l._v(" "),s("li",[s("p",[l._v('gulp-babel\n专门进行ES6转ES5的插件\ngulp-babel 的版本\ngulp-babel@7: 大部分使用再gulp@3 里面\ngulp-babel@8: 大部分使用再gulp@4 里面\n下载:\ngulp-babel 需要依赖另外两个包，我们要一起下载\n另外两个包: @babel/core @babel/preset-env\n导入:\n只要导入一个包就够了,他会自动导入另外两个包\nconst babel = require( "gulp-babel" )\n导入以后得到一个可以处理流文件的函数\n直接再管道函数内部使用，需要传递参数')])]),l._v(" "),s("li",[s("p",[l._v("gullp-htmlmin\n下载: npm i -D gulp- htmlmin\n导入: const htmlmin = require( 'gulp-htmlmin\" )\n导入以后得到一个可以处理流文件的函数\n直接再管道函数里面调用，需要传递参数")])])]),l._v(" "),s("p",[l._v("图片问题\n再开发环境中\n图片是不需要我们压缩的\n直接使用线上地址\n图片是UI处理好给我们的")]),l._v(" "),s("p",[l._v("gulp-imagemin\n专门用来压缩图片(无损压缩)\n下载需要很好的网络环境\n压缩程度最高是7级，l024K 变成l023K")]),l._v(" "),s("p",[l._v("7.del")]),l._v(" "),s("p",[l._v("下载: npm  i del -D")]),l._v(" "),s("p",[l._v("del这个插件7版本不支持CommonJS，要么插件降级，要么换成import导入试试，我是改到6这个版本，")]),l._v(" "),s("p",[l._v("作用:删除文件目录\n导入: const del = require('del')\n导入以后得到一个函数，直接使用传递参数就可以了")]),l._v(" "),s("p",[l._v("sass文件")]),l._v(" "),s("ul",[s("li",[l._v("src/pages/login.html")]),l._v(" "),s("li",[l._v("src/sass/ login.scss\n怎么使用\n将来src/pages/login.html 会把打包传递到dist/ pages/ login.html\n将来src/sass/login.scss 会把打包传递到dist/sass/login.css\n+再html中书写\n"),s("link",{attrs:{href:"../sass/login.css"}})])]),l._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[l._v("gulp-webserver\n作用:启动一个基于node书写的服务器")]),l._v(" "),s("p",[l._v("下载:\nnpm i gulp-webserver -D")]),l._v(" "),s("p",[l._v('导入: const webserver = require( "gulp-webserver" )\n导入以后得到一个处理流文件的函数\n我们再管道函数内调用就可以了，需要传递参数')])])]),l._v(" "),s("p",[l._v("gulp打包组件\n场景")]),l._v(" "),s("p",[l._v("把重复的位置单独拿出来，写成一个html 片段\n单独拿出来的片段可以包含css 和js\n也可以不包含\n当我压缩html的时候\n能再固定位置把我写好的html 片段引入进来")]),l._v(" "),s("p",[l._v("组件")]),l._v(" "),s("p",[l._v("一段可以包含(cs /js)一整套html结构片段")]),l._v(" "),s("p",[l._v("把页面的每一部分分成一段一段的html 片段\n最后组装在一起")]),l._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[s("p",[l._v("gulp-file-include")]),l._v(" "),s("p",[l._v("作用:再一个html 页面里面导入一个html 片段\n下载: npm i -D gulp-file-include")]),l._v(" "),s("p",[l._v("导入: const fileInclude = require( 'gulp-file-include')\n导入以后得到一个处理流文件的函数\n我们再管道函数内调用就可以了，需要传递参数")])])])])}),[],!1,null,null,null);n.default=_.exports}}]);