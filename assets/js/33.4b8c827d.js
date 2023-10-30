(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1120:function(s,e,r){s.exports=r.p+"assets/img/8.3.domz运行现象.268a0705.png"},1121:function(s,e,r){s.exports=r.p+"assets/img/8.4.1.redis_pipeline.4dcb4fff.png"},1122:function(s,e,r){s.exports=r.p+"assets/img/8.4.2.RFP.ddbe5738.png"},1123:function(s,e,r){s.exports=r.p+"assets/img/8.4.3.scheduler.064a16ca.png"},1329:function(s,e,r){"use strict";r.r(e);var a=r(3),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"scrapy-redis原理分析并实现断点续爬以及分布式爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-redis原理分析并实现断点续爬以及分布式爬虫"}},[s._v("#")]),s._v(" scrapy_redis原理分析并实现断点续爬以及分布式爬虫")]),s._v(" "),a("h5",{attrs:{id:"学习目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[s._v("#")]),s._v(" 学习目标")]),s._v(" "),a("ol",[a("li",[s._v("了解 scrapy实现去重的原理")]),s._v(" "),a("li",[s._v("了解 scrapy中请求入队的条件")]),s._v(" "),a("li",[s._v("掌握 scrapy_redis基于url地址的增量式单机爬虫")]),s._v(" "),a("li",[s._v("掌握 scrapy_redis分布式爬虫")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-下载github的demo代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载github的demo代码"}},[s._v("#")]),s._v(" 1. 下载github的demo代码")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("clone github scrapy-redis源码文件")]),s._v(" "),a("p",[a("code",[s._v("git clone https://github.com/rolando/scrapy-redis.git")])])]),s._v(" "),a("li",[a("p",[s._v("研究项目自带的demo")]),s._v(" "),a("p",[a("code",[s._v("mv scrapy-redis/example-project ~/scrapyredis-project")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-观察dmoz文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-观察dmoz文件"}},[s._v("#")]),s._v(" 2. 观察dmoz文件")]),s._v(" "),a("p",[s._v("在domz爬虫文件中，实现方式就是之前的"),a("code",[s._v("crawlspider")]),s._v("类型的爬虫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from scrapy.linkextractors import LinkExtractor\nfrom scrapy.spiders import CrawlSpider, Rule\n\n\nclass DmozSpider(CrawlSpider):\n    \"\"\"Follow categories and extract links.\"\"\"\n    name = 'dmoz'\n    allowed_domains = ['dmoztools.net']\n    start_urls = ['http://dmoztools.net/'] # 这里修改了url\n    \n    # 定义数据提取规则，使用了css选择器\n    rules = [\n        Rule(LinkExtractor(\n            restrict_css=('.top-cat', '.sub-cat', '.cat-item')\n        ), callback='parse_directory', follow=True),\n    ]\n\n    def parse_directory(self, response):\n        for div in response.css('.title-and-desc'):\n            yield {\n                'name': div.css('.site-title::text').extract_first(),\n                'description': div.css('.site-descr::text').extract_first().strip(),\n                'link': div.css('a::attr(href)').extract_first(),\n            }\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("但是在settings.py中多了以下内容,这几行表示"),a("code",[s._v("scrapy_redis")]),s._v("中重新实现的了去重的类，以及调度器，并且使用"),a("code",[s._v("RedisPipeline")]),s._v("管道类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("DUPEFILTER_CLASS = \"scrapy_redis.dupefilter.RFPDupeFilter\"\nSCHEDULER = \"scrapy_redis.scheduler.Scheduler\"\nSCHEDULER_PERSIST = True\n\nITEM_PIPELINES = {\n    'example.pipelines.ExamplePipeline': 300,\n    'scrapy_redis.pipelines.RedisPipeline': 400,\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-运行dmoz爬虫-观察现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行dmoz爬虫-观察现象"}},[s._v("#")]),s._v(" 3. 运行dmoz爬虫，观察现象")]),s._v(" "),a("ol",[a("li",[s._v("首先我们需要添加redis的地址，程序才能够使用redis")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('REDIS_URL = "redis://127.0.0.1:6379"\n#或者使用下面的方式\n# REDIS_HOST = "127.0.0.1"\n# REDIS_PORT = 6379\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("我们执行domz的爬虫，会发现redis中多了一下三个键：")])]),s._v(" "),a("img",{attrs:{src:r(1120),width:"80%"}}),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("中止进程后再次运行dmoz爬虫")])]),s._v(" "),a("p",[s._v("继续执行程序，会发现程序在前一次的基础之上继续往后执行，"),a("strong",[s._v("所以domz爬虫是一个基于url地址的增量式的爬虫")])]),s._v(" "),a("h3",{attrs:{id:"_4-scrapy-redis的原理分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-scrapy-redis的原理分析"}},[s._v("#")]),s._v(" 4. scrapy_redis的原理分析")]),s._v(" "),a("p",[s._v("我们从settings.py中的三个配置来进行分析\n分别是：")]),s._v(" "),a("ul",[a("li",[s._v("RedisPipeline # 管道类")]),s._v(" "),a("li",[s._v("RFPDupeFilter # 指纹去重类")]),s._v(" "),a("li",[s._v("Scheduler # 调度器类")]),s._v(" "),a("li",[s._v("SCHEDULER_PERSIST # 是否持久化请求队列和指纹集合")])]),s._v(" "),a("h4",{attrs:{id:"_4-1-scrapy-redis之redispipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-scrapy-redis之redispipeline"}},[s._v("#")]),s._v(" 4.1 Scrapy_redis之RedisPipeline")]),s._v(" "),a("p",[s._v("RedisPipeline中观察process_item，进行数据的保存，存入了redis中")]),s._v(" "),a("img",{attrs:{src:r(1121),width:"80%"}}),s._v(" "),a("h4",{attrs:{id:"_4-2-scrapy-redis之rfpdupefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-scrapy-redis之rfpdupefilter"}},[s._v("#")]),s._v(" 4.2 Scrapy_redis之RFPDupeFilter")]),s._v(" "),a("p",[s._v("RFPDupeFilter 实现了对request对象的加密")]),s._v(" "),a("img",{attrs:{src:r(1122),width:"80%"}}),s._v(" "),a("h4",{attrs:{id:"_4-3-scrapy-redis之scheduler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-scrapy-redis之scheduler"}},[s._v("#")]),s._v(" 4.3  Scrapy_redis之Scheduler")]),s._v(" "),a("p",[s._v("scrapy_redis调度器的实现了决定什么时候把request对象加入带抓取的队列，同时把请求过的request对象过滤掉")]),s._v(" "),a("img",{attrs:{src:r(1123),width:"80%"}}),s._v(" "),a("h4",{attrs:{id:"_4-4-由此可以总结出request对象入队的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-由此可以总结出request对象入队的条件"}},[s._v("#")]),s._v(" 4.4 由此可以总结出request对象入队的条件")]),s._v(" "),a("ul",[a("li",[s._v("request的指纹不在集合中")]),s._v(" "),a("li",[s._v("request的dont_filter为True，即不过滤\n"),a("ul",[a("li",[s._v("start_urls中的url地址会入队，因为他们默认是不过滤")])])])]),s._v(" "),a("h4",{attrs:{id:"_4-5-实现单机断点续爬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-实现单机断点续爬"}},[s._v("#")]),s._v(" 4.5 实现单机断点续爬")]),s._v(" "),a("blockquote",[a("p",[s._v("改写网易招聘爬虫，该爬虫就是一个经典的基于url地址的增量式爬虫")])]),s._v(" "),a("h3",{attrs:{id:"_5-实现分布式爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现分布式爬虫"}},[s._v("#")]),s._v(" 5. 实现分布式爬虫")]),s._v(" "),a("h4",{attrs:{id:"_5-1-分析demo中代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-分析demo中代码"}},[s._v("#")]),s._v(" 5.1 分析demo中代码")]),s._v(" "),a("blockquote",[a("p",[s._v("打开example-project项目中的myspider_redis.py文件")])]),s._v(" "),a("p",[s._v("通过观察代码：")]),s._v(" "),a("ol",[a("li",[s._v("继承自父类为RedisSpider")]),s._v(" "),a("li",[s._v("增加了一个redis_key的键，没有start_urls，因为分布式中，如果每台电脑都请求一次start_url就会重复")]),s._v(" "),a("li",[s._v("多了"),a("code",[s._v("__init__")]),s._v("方法，该方法不是必须的，可以手动指定allow_domains")]),s._v(" "),a("li",[s._v("启动方法：\n"),a("ol",[a("li",[s._v("在每个节点正确的目录下执行"),a("code",[s._v("scrapy crawl 爬虫名")]),s._v("，使该节点的scrapy_redis爬虫程序就位")]),s._v(" "),a("li",[s._v("在共用的redis中 "),a("code",[s._v("lpush redis_key 'start_url'")]),s._v("，使全部节点真正的开始运行")])])]),s._v(" "),a("li",[s._v("settings.py中关键的配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"\nSCHEDULER = "scrapy_redis.scheduler.Scheduler"\nSCHEDULER_PERSIST = True\n\nITEM_PIPELINES = {\n    \'example.pipelines.ExamplePipeline\': 300,\n    \'scrapy_redis.pipelines.RedisPipeline\': 400,\n}\nREDIS_URL = "redis://127.0.0.1:6379"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"_5-2-动手实现分布式爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-动手实现分布式爬虫"}},[s._v("#")]),s._v(" 5.2 动手实现分布式爬虫")]),s._v(" "),a("blockquote",[a("p",[s._v("改写tencent爬虫为分布式爬虫")])]),s._v(" "),a("h5",{attrs:{id:"注意-启动方式发生改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-启动方式发生改变"}},[s._v("#")]),s._v(" 注意：启动方式发生改变")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("scrapy_redis的含义和能够实现的功能")]),s._v(" "),a("ol",[a("li",[s._v("scrapy是框架")]),s._v(" "),a("li",[s._v("scrapy_redis是scrapy的组件")]),s._v(" "),a("li",[s._v("scrapy_redis能够实现断点续爬和分布式爬虫")])])]),s._v(" "),a("li",[a("p",[s._v("scrapy_redis流程和实现原理")]),s._v(" "),a("ol",[a("li",[s._v("在scrapy框架流程的基础上，把存储request对象放到了redis的有序集合中，利用该有序集合实现了请求队列")]),s._v(" "),a("li",[s._v("并对request对象生成指纹对象，也存储到同一redis的集合中，利用request指纹避免发送重复的请求")])])]),s._v(" "),a("li",[a("p",[s._v("request对象进入队列的条件")]),s._v(" "),a("ol",[a("li",[s._v("request的指纹不在集合中")]),s._v(" "),a("li",[s._v("request的dont_filter为True，即不过滤")])])]),s._v(" "),a("li",[a("p",[s._v("request指纹的实现")]),s._v(" "),a("ul",[a("li",[s._v("请求方法")]),s._v(" "),a("li",[s._v("排序后的请求地址")]),s._v(" "),a("li",[s._v("排序并处理过的请求体或空字符串")]),s._v(" "),a("li",[s._v("用hashlib.sha1()对以上内容进行加密")])])]),s._v(" "),a("li",[a("p",[s._v("scarpy_redis实现增量式爬虫、布式爬虫")]),s._v(" "),a("ol",[a("li",[s._v("对setting进行如下设置\n"),a("ul",[a("li",[s._v('DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"')]),s._v(" "),a("li",[s._v('SCHEDULER = "scrapy_redis.scheduler.Scheduler"')]),s._v(" "),a("li",[s._v("SCHEDULER_PERSIST = True")]),s._v(" "),a("li",[s._v("ITEM_PIPELINES = {'scrapy_redis.pipelines.RedisPipeline': 400,}")]),s._v(" "),a("li",[s._v('REDIS_URL = "redis://127.0.0.1:6379" # 请正确配置REDIS_URL')])])]),s._v(" "),a("li",[s._v("爬虫文件中的爬虫类继承RedisSpider类")]),s._v(" "),a("li",[s._v("爬虫类中redis_key替代了start_urls")]),s._v(" "),a("li",[s._v("启动方式不同\n"),a("ul",[a("li",[s._v("通过"),a("code",[s._v("scrapy crawl spider")]),s._v("启动爬虫后，向redis_key放入一个或多个起始url（lpush或rpush都可以），才能够让scrapy_redis爬虫运行")])])]),s._v(" "),a("li",[s._v("除了以上差异点以外，scrapy_redis爬虫和scrapy爬虫的使用方法都是一样的")])])])]),s._v(" "),a("hr")])}),[],!1,null,null,null);e.default=t.exports}}]);