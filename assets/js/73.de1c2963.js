(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1330:function(s,e,a){"use strict";a.r(e);var n=a(3),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"scrapy中间件的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy中间件的使用"}},[s._v("#")]),s._v(" scrapy中间件的使用")]),s._v(" "),a("h5",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标：")]),s._v(" "),a("ol",[a("li",[s._v("应用 scrapy中使用间件使用随机UA的方法")]),s._v(" "),a("li",[s._v("应用 scrapy中使用代理ip的的方法")]),s._v(" "),a("li",[s._v("应用 scrapy与selenium配合使用")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-scrapy中间件的分类和作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-scrapy中间件的分类和作用"}},[s._v("#")]),s._v(" 1. scrapy中间件的分类和作用")]),s._v(" "),a("h5",{attrs:{id:"_1-1-scrapy中间件的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-scrapy中间件的分类"}},[s._v("#")]),s._v(" 1.1 scrapy中间件的分类")]),s._v(" "),a("p",[s._v("根据scrapy运行流程中所在位置不同分为：")]),s._v(" "),a("ol",[a("li",[s._v("下载中间件")]),s._v(" "),a("li",[s._v("爬虫中间件")])]),s._v(" "),a("h5",{attrs:{id:"_1-2-scrapy中间的作用-预处理request和response对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-scrapy中间的作用-预处理request和response对象"}},[s._v("#")]),s._v(" 1.2 scrapy中间的作用：预处理request和response对象")]),s._v(" "),a("ol",[a("li",[s._v("对header以及cookie进行更换和处理")]),s._v(" "),a("li",[s._v("使用代理ip等")]),s._v(" "),a("li",[s._v("对请求进行定制化操作，")])]),s._v(" "),a("p",[s._v("但在scrapy默认的情况下 两种中间件都在middlewares.py一个文件中")]),s._v(" "),a("p",[s._v("爬虫中间件使用方法和下载中间件相同，且功能重复，通常使用下载中间件")]),s._v(" "),a("h3",{attrs:{id:"_2-下载中间件的使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载中间件的使用方法"}},[s._v("#")]),s._v(" 2. 下载中间件的使用方法：")]),s._v(" "),a("blockquote",[a("p",[s._v("接下来我们对腾讯招聘爬虫进行修改完善，通过下载中间件来学习如何使用中间件\n编写一个Downloader Middlewares和我们编写一个pipeline一样，定义一个类，然后在setting中开启")])]),s._v(" "),a("p",[s._v("Downloader Middlewares默认的方法：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("process_request(self, request, spider)：")]),s._v(" "),a("ol",[a("li",[s._v("当每个request通过下载中间件时，该方法被调用。")]),s._v(" "),a("li",[s._v("返回None值：没有return也是返回None，该request对象传递给下载器，或通过引擎传递给其他权重低的process_request方法")]),s._v(" "),a("li",[s._v("返回Response对象：不再请求，把response返回给引擎")]),s._v(" "),a("li",[s._v("返回Request对象：把request对象通过引擎交给调度器，此时将不通过其他权重低的process_request方法")])])]),s._v(" "),a("li",[a("p",[s._v("process_response(self, request, response, spider)：")]),s._v(" "),a("ol",[a("li",[s._v("当下载器完成http请求，传递响应给引擎的时候调用")]),s._v(" "),a("li",[s._v("返回Resposne：通过引擎交给爬虫处理或交给权重更低的其他下载中间件的process_response方法")]),s._v(" "),a("li",[s._v("返回Request对象：通过引擎交给调取器继续请求，此时将不通过其他权重低的process_request方法")])])]),s._v(" "),a("li",[a("p",[s._v("在settings.py中配置开启中间件，权重值越小越优先执行")])])]),s._v(" "),a("h3",{attrs:{id:"_3-定义实现随机user-agent的下载中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义实现随机user-agent的下载中间件"}},[s._v("#")]),s._v(" 3. 定义实现随机User-Agent的下载中间件")]),s._v(" "),a("h4",{attrs:{id:"_3-1-在middlewares-py中完善代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-在middlewares-py中完善代码"}},[s._v("#")]),s._v(" 3.1 在middlewares.py中完善代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import random\nfrom Tencent.settings import USER_AGENTS_LIST # 注意导入路径,请忽视pycharm的错误提示\n\nclass UserAgentMiddleware(object):\n    def process_request(self, request, spider):\n        user_agent = random.choice(USER_AGENTS_LIST)\n        request.headers['User-Agent'] = user_agent\n        # 不写return\n\nclass CheckUA:\n    def process_response(self,request,response,spider):\n        print(request.headers['User-Agent'])\n        return response # 不能少！\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h4",{attrs:{id:"_3-2-在settings中设置开启自定义的下载中间件-设置方法同管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-在settings中设置开启自定义的下载中间件-设置方法同管道"}},[s._v("#")]),s._v(" 3.2 在settings中设置开启自定义的下载中间件，设置方法同管道")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DOWNLOADER_MIDDLEWARES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tencent.middlewares.UserAgentMiddleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("543")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 543是权重值")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tencent.middlewares.CheckUA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先执行543权重的中间件，再执行600的中间件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_3-3-在settings中添加ua的列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-在settings中添加ua的列表"}},[s._v("#")]),s._v(" 3.3 在settings中添加UA的列表")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('USER_AGENTS_LIST = [\n    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)",\n    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",\n    "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",\n    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)",\n    "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",\n    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1",\n    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0",\n    "Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5"\n]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"运行爬虫观察现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行爬虫观察现象"}},[s._v("#")]),s._v(" 运行爬虫观察现象")]),s._v(" "),a("h3",{attrs:{id:"_4-代理ip的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-代理ip的使用"}},[s._v("#")]),s._v(" 4. 代理ip的使用")]),s._v(" "),a("h4",{attrs:{id:"_4-1-思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-思路分析"}},[s._v("#")]),s._v(" 4.1 思路分析")]),s._v(" "),a("ol",[a("li",[s._v("代理添加的位置：request.meta中增加"),a("code",[s._v("proxy")]),s._v("字段")]),s._v(" "),a("li",[s._v("获取一个代理ip，赋值给"),a("code",[s._v("request.meta['proxy']")]),s._v(" "),a("ul",[a("li",[s._v("代理池中随机选择代理ip")]),s._v(" "),a("li",[s._v("代理ip的webapi发送请求获取一个代理ip")])])])]),s._v(" "),a("h4",{attrs:{id:"_4-2-具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-具体实现"}},[s._v("#")]),s._v(" 4.2 具体实现")]),s._v(" "),a("p",[s._v("免费代理ip：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class ProxyMiddleware(object):\n    def process_request(self,request,spider):\n        # proxies可以在settings.py中，也可以来源于代理ip的webapi\n        # proxy = random.choice(proxies) \n\n        # 免费的会失效，报 111 connection refused 信息！重找一个代理ip再试\n        proxy = 'https://1.71.188.37:3128' \n\n        request.meta['proxy'] = proxy\n        return None # 可以不写return\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("收费代理ip：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 人民币玩家的代码(使用abuyun提供的代理ip)\nimport base64\n\n# 代理隧道验证信息  这个是在那个网站上申请的\nproxyServer = \'http://proxy.abuyun.com:9010\' # 收费的代理ip服务器地址，这里是abuyun\nproxyUser = 用户名\nproxyPass = 密码\nproxyAuth = "Basic " + base64.b64encode(proxyUser + ":" + proxyPass)\n\nclass ProxyMiddleware(object):\n    def process_request(self, request, spider):\n        # 设置代理\n        request.meta["proxy"] = proxyServer\n        # 设置认证\n        request.headers["Proxy-Authorization"] = proxyAuth\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"_4-3-检测代理ip是否可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-检测代理ip是否可用"}},[s._v("#")]),s._v(" 4.3 检测代理ip是否可用")]),s._v(" "),a("p",[s._v("在使用了代理ip的情况下可以在下载中间件的process_response()方法中处理代理ip的使用情况，如果该代理ip不能使用可以替换其他代理ip")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class ProxyMiddleware(object):\n    ......\n    def process_response(self, request, response, spider):\n        if response.status != '200':\n            request.dont_filter = True # 重新发送的请求对象能够再次进入队列\n            return requst\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"在settings-py中开启该中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在settings-py中开启该中间件"}},[s._v("#")]),s._v(" 在settings.py中开启该中间件")]),s._v(" "),a("h3",{attrs:{id:"_5-在中间件中使用selenium"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-在中间件中使用selenium"}},[s._v("#")]),s._v(" 5. 在中间件中使用selenium")]),s._v(" "),a("blockquote",[a("p",[s._v("以github登陆为例")])]),s._v(" "),a("h4",{attrs:{id:"_5-1-完成爬虫代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-完成爬虫代码"}},[s._v("#")]),s._v(" 5.1 完成爬虫代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import scrapy\n\nclass Login4Spider(scrapy.Spider):\n    name = 'login4'\n    allowed_domains = ['github.com']\n    start_urls = ['https://github.com/1596930226'] # 直接对验证的url发送请求\n\n    def parse(self, response):\n        with open('check.html', 'w') as f:\n            f.write(response.body.decode())\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"_5-2-在middlewares-py中使用selenium"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-在middlewares-py中使用selenium"}},[s._v("#")]),s._v(" 5.2 在middlewares.py中使用selenium")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import time\nfrom selenium import webdriver\n\n\ndef getCookies():\n    # 使用selenium模拟登陆，获取并返回cookie\n    username = input('输入github账号:')\n    password = input('输入github密码:')\n    options = webdriver.ChromeOptions()\n    options.add_argument('--headless')\n    options.add_argument('--disable-gpu')\n    driver = webdriver.Chrome('/home/worker/Desktop/driver/chromedriver',\n                              chrome_options=options)\n    driver.get('https://github.com/login')\n    time.sleep(1)\n    driver.find_element_by_xpath('//*[@id=\"login_field\"]').send_keys(username)\n    time.sleep(1)\n    driver.find_element_by_xpath('//*[@id=\"password\"]').send_keys(password)\n    time.sleep(1)\n    driver.find_element_by_xpath('//*[@id=\"login\"]/form/div[3]/input[3]').click()\n    time.sleep(2)\n    cookies_dict = {cookie['name']: cookie['value'] for cookie in driver.get_cookies()}\n    driver.quit()\n    return cookies_dict\n\nclass LoginDownloaderMiddleware(object):\n\n    def process_request(self, request, spider):\n        cookies_dict = getCookies()\n        print(cookies_dict)\n        request.cookies = cookies_dict # 对请求对象的cookies属性进行替换\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h5",{attrs:{id:"配置文件中设置开启该中间件后-运行爬虫可以在日志信息中看到selenium相关内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件中设置开启该中间件后-运行爬虫可以在日志信息中看到selenium相关内容"}},[s._v("#")]),s._v(" 配置文件中设置开启该中间件后，运行爬虫可以在日志信息中看到selenium相关内容")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[s._v("中间件的使用：")]),s._v(" "),a("ol",[a("li",[s._v("完善中间件代码：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("process_request(self, request, spider)：")]),s._v(" "),a("ol",[a("li",[s._v("当每个request通过下载中间件时，该方法被调用。")]),s._v(" "),a("li",[s._v("返回None值：没有return也是返回None，该request对象传递给下载器，或通过引擎传递给其他权重低的process_request方法")]),s._v(" "),a("li",[s._v("返回Response对象：不再请求，把response返回给引擎")]),s._v(" "),a("li",[s._v("返回Request对象：把request对象通过引擎交给调度器，此时将不通过其他权重低的process_request方法")])])]),s._v(" "),a("li",[a("p",[s._v("process_response(self, request, response, spider)：")]),s._v(" "),a("ol",[a("li",[s._v("当下载器完成http请求，传递响应给引擎的时候调用")]),s._v(" "),a("li",[s._v("返回Resposne：通过引擎交给爬虫处理或交给权重更低的其他下载中间件的process_response方法")]),s._v(" "),a("li",[s._v("返回Request对象：通过引擎交给调取器继续请求，此时将不通过其他权重低的process_request方法")])])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("需要在settings.py中开启中间件\nDOWNLOADER_MIDDLEWARES = {\n'myspider.middlewares.UserAgentMiddleware': 543,\n}")])]),s._v(" "),a("hr")])}),[],!1,null,null,null);e.default=r.exports}}]);