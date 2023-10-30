(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1066:function(s,t,e){s.exports=e.p+"assets/img/selenium.3076c833.png"},1067:function(s,t,e){s.exports=e.p+"assets/img/chrome.e13d0d31.png"},1068:function(s,t,e){s.exports=e.p+"assets/img/chrome2.b4c5615c.png"},1069:function(s,t,e){s.exports=e.p+"assets/img/chromedriver-1.f8a9b051.png"},1070:function(s,t,e){s.exports=e.p+"assets/img/chromedriver-2.5764510e.png"},1071:function(s,t,e){s.exports=e.p+"assets/img/chromedriver-3.6e0a1c99.png"},1072:function(s,t,e){s.exports=e.p+"assets/img/chromedriver-4.9b40efb8.png"},1304:function(s,t,e){"use strict";e.r(t);var a=e(3),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本阶段课程主要学习selenium自动化测试框架在爬虫中的应用，selenium能够大幅降低爬虫的编写难度，但是也同样会大幅降低爬虫的爬取速度。在逼不得已的情况下我们可以使用selenium进行爬虫的编写。")]),s._v(" "),a("h2",{attrs:{id:"selenium的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selenium的介绍"}},[s._v("#")]),s._v(" selenium的介绍")]),s._v(" "),a("h5",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点：")]),s._v(" "),a("ul",[a("li",[s._v("了解 selenium的工作原理")]),s._v(" "),a("li",[s._v("了解 selenium以及chromedriver的安装")]),s._v(" "),a("li",[s._v("掌握 标签对象click点击以及send_keys输入")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-selenium运行效果展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-selenium运行效果展示"}},[s._v("#")]),s._v(" 1. selenium运行效果展示")]),s._v(" "),a("blockquote",[a("p",[s._v("Selenium是一个Web的自动化测试工具，最初是为网站自动化测试而开发的，Selenium 可以直接调用浏览器，它支持所有主流的浏览器（包括PhantomJS这些无界面的浏览器），可以接收指令，让浏览器自动加载页面，获取需要的数据，甚至页面截屏等。我们可以使用selenium很容易完成之前编写的爬虫，接下来我们就来看一下selenium的运行效果")])]),s._v(" "),a("h4",{attrs:{id:"_1-1-chrome浏览器的运行效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-chrome浏览器的运行效果"}},[s._v("#")]),s._v(" 1.1 chrome浏览器的运行效果")]),s._v(" "),a("blockquote",[a("p",[s._v("在下载好chromedriver以及安装好selenium模块后，执行下列代码并观察运行的过程")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果driver没有添加到了环境变量，则需要将driver的绝对路径赋值给executable_path参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# driver = webdriver.Chrome(executable_path='/home/worker/Desktop/driver/chromedriver')")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果driver添加了环境变量则不需要设置executable_path")]),s._v("\ndriver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向一个url发起请求")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.itcast.cn/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把网页保存为图片，69版本以上的谷歌浏览器将无法使用截图功能")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# driver.save_screenshot("itcast.png")')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印页面的标题")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出模拟浏览器")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一定要退出！不退出会有残留进程！")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h4",{attrs:{id:"_1-2-phantomjs无界面浏览器的运行效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-phantomjs无界面浏览器的运行效果"}},[s._v("#")]),s._v(" 1.2 phantomjs无界面浏览器的运行效果")]),s._v(" "),a("blockquote",[a("p",[s._v("PhantomJS 是一个基于Webkit的“无界面”(headless)浏览器，它会把网站加载到内存并执行页面上的 JavaScript。下载地址："),a("a",{attrs:{href:"http://phantomjs.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://phantomjs.org/download.html"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定driver的绝对路径")]),s._v("\ndriver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PhantomJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("executable_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/worker/Desktop/driver/phantomjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# driver = webdriver.Chrome(executable_path='/home/worker/Desktop/driver/chromedriver')")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向一个url发起请求")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.itcast.cn/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把网页保存为图片")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save_screenshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itcast.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出模拟浏览器")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一定要退出！不退出会有残留进程！")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h4",{attrs:{id:"_1-3-观察运行效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-观察运行效果"}},[s._v("#")]),s._v(" 1.3 观察运行效果")]),s._v(" "),a("ul",[a("li",[s._v("python代码能够自动的调用谷歌浏览或phantomjs无界面浏览器，控制其自动访问网站")])]),s._v(" "),a("h4",{attrs:{id:"_1-4-无头浏览器与有头浏览器的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-无头浏览器与有头浏览器的使用场景"}},[s._v("#")]),s._v(" 1.4 无头浏览器与有头浏览器的使用场景")]),s._v(" "),a("ul",[a("li",[s._v("通常在开发过程中我们需要查看运行过程中的各种情况所以通常使用有头浏览器")]),s._v(" "),a("li",[s._v("在项目完成进行部署的时候，通常平台采用的系统都是服务器版的操作系统，服务器版的操作系统必须使用无头浏览器才能正常运行")])]),s._v(" "),a("h3",{attrs:{id:"_2-selenium的作用和工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-selenium的作用和工作原理"}},[s._v("#")]),s._v(" 2. selenium的作用和工作原理")]),s._v(" "),a("blockquote",[a("p",[s._v("利用浏览器原生的API，封装成一套更加面向对象的Selenium WebDriver API，直接操作浏览器页面里的元素，甚至操作浏览器本身（截屏，窗口大小，启动，关闭，安装插件，配置证书之类的）")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(1066),alt:"selenium的工作原理"}})]),s._v(" "),a("ul",[a("li",[s._v("webdriver本质是一个web-server，对外提供webapi，其中封装了浏览器的各种功能")]),s._v(" "),a("li",[s._v("不同的浏览器使用各自不同的webdriver")])]),s._v(" "),a("hr"),s._v(" "),a("h5",{attrs:{id:"知识点-了解-selenium的工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点-了解-selenium的工作原理"}},[s._v("#")]),s._v(" 知识点：了解 selenium的工作原理")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_3-selenium的安装以及简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-selenium的安装以及简单使用"}},[s._v("#")]),s._v(" 3. selenium的安装以及简单使用")]),s._v(" "),a("blockquote",[a("p",[s._v("我们以谷歌浏览器的chromedriver为例")])]),s._v(" "),a("h4",{attrs:{id:"_3-1-在python虚拟环境中安装selenium模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-在python虚拟环境中安装selenium模块"}},[s._v("#")]),s._v(" 3.1 在python虚拟环境中安装selenium模块")]),s._v(" "),a("p",[a("code",[s._v("pip/pip3 install selenium")])]),s._v(" "),a("h4",{attrs:{id:"_3-2-下载版本符合的webdriver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-下载版本符合的webdriver"}},[s._v("#")]),s._v(" 3.2 下载版本符合的webdriver")]),s._v(" "),a("blockquote",[a("p",[s._v("以chrome谷歌浏览器为例")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看谷歌浏览器的版本")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1067),alt:"查看chrome版本"}})]),s._v(" "),a("p",[s._v("​\t"),a("img",{attrs:{src:e(1068),alt:"查看chrome版本2"}})])]),s._v(" "),a("li",[a("p",[s._v("访问https://npm.taobao.org/mirrors/chromedriver，点击进入不同版本的chromedriver下载页面")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1069),alt:"下载chromedriver-1"}})])]),s._v(" "),a("li",[a("p",[s._v("点击notes.txt进入版本说明页面")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1070),alt:"下载chromedriver-2"}})])]),s._v(" "),a("li",[a("p",[s._v("查看chrome和chromedriver匹配的版本")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1071),alt:"下载chromedriver-3"}})])]),s._v(" "),a("li",[a("p",[s._v("根据操作系统下载正确版本的chromedriver")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1072),alt:"下载chromedriver-4"}})])]),s._v(" "),a("li",[a("p",[s._v("解压压缩包后获取python代码可以调用的谷歌浏览器的webdriver可执行文件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("windows为"),a("code",[s._v("chromedriver.exe")])])]),s._v(" "),a("li",[a("p",[s._v("linux和macos为"),a("code",[s._v("chromedriver")])])])])]),s._v(" "),a("li",[a("p",[s._v("chromedriver环境的配置")]),s._v(" "),a("ul",[a("li",[s._v("windows环境下需要将 chromedriver.exe 所在的目录设置为path环境变量中的路径")]),s._v(" "),a("li",[s._v("linux/mac环境下，将 chromedriver 所在的目录设置到系统的PATH环境值中")])])])]),s._v(" "),a("hr"),s._v(" "),a("h5",{attrs:{id:"知识点-了解-selenium以及chromedriver的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点-了解-selenium以及chromedriver的安装"}},[s._v("#")]),s._v(" 知识点：了解 selenium以及chromedriver的安装")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_4-selenium的简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-selenium的简单使用"}},[s._v("#")]),s._v(" 4.  selenium的简单使用")]),s._v(" "),a("blockquote",[a("p",[s._v("接下来我们就通过代码来模拟百度搜索")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" selenium "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" webdriver\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过指定chromedriver的路径来实例化driver对象，chromedriver放在当前目录。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# driver = webdriver.Chrome(executable_path='./chromedriver')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chromedriver已经添加环境变量")]),s._v("\ndriver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 控制浏览器访问url地址")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.baidu.com/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在百度搜索框中搜索'python'")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 点击'百度搜索'")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'su'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出浏览器")]),s._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("webdriver.Chrome(executable_path='./chromedriver')")]),s._v("中executable参数指定的是下载好的chromedriver文件的路径")]),s._v(" "),a("li",[a("code",[s._v("driver.find_element_by_id('kw').send_keys('python')")]),s._v("定位id属性值是'kw'的标签，并向其中输入字符串'python'")]),s._v(" "),a("li",[a("code",[s._v("driver.find_element_by_id('su').click()")]),s._v("定位id属性值是su的标签，并点击\n"),a("ul",[a("li",[s._v("click函数作用是：触发标签的js的click事件")])])])]),s._v(" "),a("hr"),s._v(" "),a("h5",{attrs:{id:"知识点-掌握-标签对象click点击以及send-keys输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点-掌握-标签对象click点击以及send-keys输入"}},[s._v("#")]),s._v(" 知识点：掌握 标签对象click点击以及send_keys输入")]),s._v(" "),a("hr")])}),[],!1,null,null,null);t.default=n.exports}}]);