var webData = {
    "description": "个人网站记录",
    "bgk":[
        // "https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images",   //有问题，请求失败
        // "http://imgapi.xl0408.top/index.php",
        "https://hefollo.com/apis.php?type=电脑端-动漫图片",
        "https://hefollo.com/apis.php?type=电脑端-谷歌每日图片",
        "https://hefollo.com/apis.php?type=电脑端-4K图片/4K动漫壁纸",
        "https://hefollo.com/apis.php?type=电脑端-4K图片/4K动漫系列",
        "https://hefollo.com/apis.php?type=电脑端-4K图片/4K风景壁纸图片1080P",
        // "https://www.loliapi.com/acg/pc/",  //pc
        // "https://api.rainss.cn/randoms.php", 
        // "https://cdn.seovx.com/ha/?mom=302",  //古风
        // "https://cdn.seovx.com/?mom=302",  //美女
         //"https://cdn.seovx.com/d/?mom=302"  //卡通
    ],
    "data": [
        {
            "type": "日常浏览",
            "icon": "fa fa-calendar",
            "tag": [
                {
                    "tagType": "",
                    "tagList": [
                        {
                            "homePage": "https://www.zhihu.com/hot",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "知乎",
                            "description": "国内专业知识问答网站"
                        },
                        {
                            "homePage": "https://www.oschina.net/",
                            "icon": "https://static.oschina.net/new-osc/img/favicon.ico",
                            "name": "开源中国",
                            "description": "开源中国"
                        },
                        {
                            "homePage": "https://blog.csdn.net/qq_22973811",
                            "icon": "https://g.csdnimg.cn/static/logo/favicon32.ico",
                            "name": "CSDN",
                            "description": "好用的博客平台"
                        },
                        {
                            "homePage": "https://www.bilibili.com/",
                            "icon": "https://www.bilibili.com/favicon.ico",
                            "name": "B站",
                            "description": "自由软件发布平台"
                        },
                        {
                            "homePage": "https://v.qq.com/",
                            "icon": "https://v.qq.com/favicon.ico",
                            "name": "腾讯视频",
                            "description": "冲了会员，慢慢看吧"
                        },
                        {
                            "homePage": "https://gitee.com/wangzonghui",
                            "icon": "https://cn-assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico",
                            "name": "gitee",
                            "description": "国内仿github源代码开放平台"
                        },
                        {
                            "homePage": "https://github.com/",
                            "icon": "https://github.com/favicon.ico",
                            "name": "gitHub",
                            "description": "世界流行源代码开放平台"
                        },
                        {
                            "homePage": "https://www.jd.com/",
                            "icon": "https://www.jd.com/favicon.ico",
                            "name": "京东",
                            "description": "世界流行源代码开放平台"
                        },
                        {
                            "homePage":"https://i.mi.com/",
                            "icon":"https://i.mi.com/favicon.ico",
                            "name":"小米云服务",
                            "description":"小米云服务可操作手机笔记本"
                        },
                        {
                            "homePage":"https://i.mi.com/note/h5",
                            "icon":"https://i.mi.com/favicon.ico",
                            "name":"Cloud Notes",
                            "description":""
                        },
                        {
                            "homePage":"https://web.vip.miui.com/page/info/mio/mio/singleBoard?boardId=36106637&channel=boardLive&fromPathname=mioBoardLive&app_version=dev.230112",
                            "icon":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAeFBMVEUAAAD/Pin/Pyn+Pij/QCj/Pin/QCj+PSn+Pir/Pyj/QCn/Pyn9Pin/QCD+Pin/Pin+Pin/Pir+Pin+Pin/////5+T/VkT/t6//z8n/b1//n5T/h3n/k4f+Sjb/8/H/29f/w73/q6H/YlH+emz/e2z/8/L/q6L+npR7WrzAAAAAE3RSTlMA37+AQKAgcO9QMK+QEO/PsI9grtRi+gAAA6BJREFUWMOtmIt6oyAQhaPGpEnavY2MgNeYtPv+b7gDgSKO6WXJ/31NFMNxODNQdLPK7vCnKE95lmXwDp3keVnsty+br3Hcn57gQ57y/fEzlZcigy+RPe8+kNnm8A3Ke1Ivv4FIl9pm8G2yFa/28F8US50CIEEpXYfYR/5AAttZIWeQQBZKvYQkfr8HBIlsQ0Bp5D6gZI4soKRiyiCZH6GGUu1mRd1IKf1xVVU6XKnXwFl5x2vQWFWDO5xIqAVPV62Bs7zN1lVElFUl8XZZ0Q8VQJBdYWbSEQLSXvT9WzqYwOBle7mgBs8u8rq3Kr7/OdzRyWq4y4EWNG7Dq7dLgMXLNnCXP1HS0EBhjWAYyK4oCzRipbXu7E21Ps8DLFhdN9Th4gfqPHCy1WSdGn2ALQTKRfYBhRmQIq4VCZkDfPfP5UMBaPr6CzN+LYVqY0Wc6tb7J1zyhHV+iBeAxUzTJgy4RkLKZ196r2qjhvEyGQu1tiN9eXwtkLZzDPtQ01woGG3v1SExUhmgYVFGOow3EorjsQydK/MhLqNLqLY3WLKJf0t4M4RLNOGzFSIS94VQuqoWroTp6xyXEc7C1utC3kT6kyiswBQb4ae6sr8y9jGh4JCYehPF1PJFpHOFg8Kk0aRf3vdId+gcXV9EpNNpb9ErJhRQrjNfRK7WMevUX2e46O4LadeZLyLaRnJ+nxmC+b1ZW7D5IlLbQSt1aW5xYNPo5r7Q4ErHLyK8jO4TTREbf0iTZmXE4HMtZLzTBjOW0R41voxkvQSZUJizHcnFjD4izjQX+hlNtleI1xA/wMuqULSw/ZqlRogR4E3ENO5fuWAMkVAJD6HcPMNDKOIdf8pu+wAPYet2kMkco21N2t4vZ63nFtYYm483yAVrvVxgDY0fJS3ejOIV4Ipqgq413ZRu6HxqGzrt6AKAbaOf0SfbjEYmDW0julpDfa4FNP1ZSJCD7oezqEFSX9um1ausKxXNfSIqSRQCgYQApwqpZ0eftDKOcBU3oYHaOvVqDwIlf1gTAoyQ7GWFgryycroG5YRMmzkxZ4EdycR506N8IyG6JVY4vkEjYCaEDdDl62UplLPnR9Uj9qrWnRBjhSj6vpkLqQpMmxfiz5AnYODtswMGbyvDo2hSdWfhNULazD3wx/XHP/inv4pI1yGfMvg2T+QPZ1fCNzntHvIiKvd1uB5V9sVBPTMZFlaRf/qyruAq6xy3+6LM2evDn6fyeX9YN+YfwyRhQug5cZAAAAAASUVORK5CYII=",
                            "name":"小米社区",
                            "description":""
                        },
                        {
                            "homePage":"https://sspai.com/",
                            "icon":"https://cdn-static.sspai.com/favicon/sspai.ico",
                            "name":"少数派",
                            "description":""
                        },
                        {
                            "homePage":"https://www.ithome.com/",
                            "icon":"https://www.ithome.com/favicon.ico",
                            "name":"it之家",
                            "description":""
                        },
                        {
                            "homePage": "https://huaban.com/follow",
                            "icon": "https://huaban.com/favicon.ico",
                            "name": "花瓣",
                            "description": "照片、绘画资源网站，可以建立自己的绘画库"
                        },
                        {
                            "homePage": "https://hellogithub.com/",
                            "icon": "https://hellogithub.com/favicon.ico",
                            "name": "HelloGitHub",
                            "description": "28号更新"
                        },
                        {
                            "homePage":"https://github.com/OpenGithubs/github-daily-rank,https://open.itc.cn/?tab=repos",
                            "icon":"https://github.com/favicon.ico",
                            "name":"OpenGithubs",
                            "description":"github开源项目排行统计。"
                        },
                        {
                            "homePage": "https://github.com/zhaoolee/ins",
                            "icon": "https://github.com/favicon.ico",
                            "name": "ins项目记录",
                            "description": "整理收集和记录阮一峰分享的项目"
                        },
                        {
                            "homePage": "https://www.kuaishou.com/?isHome=1",
                            "icon": "https://static.yximgs.com/udata/pkg/WEB-LIVE/kwai_icon.8f6787d8.ico",
                            "name": "快手",
                            "description": "快手"
                        },
                        {
                            "homePage": "https://www.douyin.com/discover",
                            "icon": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico",
                            "name": "抖音",
                            "description": "抖音"
                        },
                        {
                            "homePage":"https://weibo.com/",
                            "icon":"https://weibo.com/favicon.ico",
                            "name":"新浪微博",
                            "description":""
                        },
                        {
                            "homePage":"http://www.acfun.cn/",
                            "icon":"http://www.acfun.cn/favicon.ico",
                            "name":"AcFun弹幕视频网",
                            "description":""
                        },
                        {
                            "homePage": "https://fanyi.baidu.com/?aldtype=16047&tpltype=sigma",
                            "icon": "https://fanyi.baidu.com/favicon.ico",
                            "name": "百度翻译",
                            "description": ""
                        },
                        {
                            "homePage": "https://fanyi.youdao.com/index.html",
                            "icon": "https://shared-https.ydstatic.com/images/favicon.ico",
                            "name": "网易翻译",
                            "description": ""
                        },
                        {
                            "homePage":"https://www.solidot.org/",
                            "icon":"https://www.solidot.org/favicon.ico",
                            "name":"奇客资讯网",
                            "description":""
                        },
                        {
                            "homePage":"https://leetcode.cn/",
                            "icon":"https://leetcode.cn/favicon.ico",
                            "name":"力扣",
                            "description":""
                        },
                        {
                            "homePage":"https://www.tgb.cn/",
                            "icon":"https://www.tgb.cn/favicon.ico",
                            "name":"淘吧",
                            "description":"专业投资A股股票炒股论坛交流分享社区"
                        },                        
                        {
                            "homePage": "https://www.zhihu.com/people/chen-bin-99-5-4",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "跳舞",
                            "description": "习惯断更的优秀小说作家"
                        },                        
                        {
                            "homePage": "https://www.zhihu.com/people/liulangdehama",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "流浪的蛤蟆",
                            "description": "优秀且高产的网络小说作家"
                        },                        
                        {
                            "homePage": "https://www.zhihu.com/people/fen-nu-de-xiang-jiao-82/answers",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "愤怒的香蕉",
                            "description": "教授写作经验的作者"
                        },
                        {
                            "homePage":"https://space.bilibili.com/488034462",
                            "icon":"https://space.bilibili.com/favicon.ico",
                            "name":"阿兵电器维修",
                            "description":""
                        },
                        {
                            "homePage":"https://space.bilibili.com/1359917078",
                            "icon":"https://space.bilibili.com/favicon.ico",
                            "name":"米师傅安装",
                            "description":""
                        },
                        {
                            "homePage":"https://live.kuaishou.com/profile/3xccdyxe6ar7ttm",
                            "icon":"https://live.kuaishou.com/favicon.ico",
                            "name":"小辉辉",
                            "description":""
                        },
                        {
                            "homePage":"https://live.kuaishou.com/profile/3x4m2cqdabjudsi",
                            "icon":"https://live.kuaishou.com/favicon.ico",
                            "name":"大冰",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "博客",
                    "tagList": [
                        {
                            "homePage": "https://juejin.cn/",
                            "icon": "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",
                            "name": "稀土掘金",
                            "description": ""
                        },
                        {
                            "homePage": "https://www.infoq.cn/",
                            "icon": "https://static001.infoq.cn/static/infoq/www/img/share-default-5tgbiuhgfefgujjhg.png",
                            "name": "InfoQ",
                            "description": "促进软件开发及相关领域知识与创新的传播-极客邦"
                        },
                        {
                            "homePage": "https://segmentfault.com/news",
                            "icon": "https://static.segmentfault.com/main_site/a3f9529a/favicon.ico",
                            "name": "Segmentfault",
                            "description": ""
                        },
                        {
                            "homePage": "https://blog.51cto.com/",
                            "icon": "https://blog.51cto.com/favicon.ico",
                            "name": "51CTO博客",
                            "description": ""
                        },
                        {
                            "homePage": "https://www.woshipm.com/",
                            "icon": "https://www.woshipm.com/favicon.ico",
                            "name": "人人都是产品经理",
                            "description": "软件产品分享平台"
                        },
                        {
                            "homePage": "https://www.cnblogs.com/",
                            "icon": "https://www.cnblogs.com/favicon.ico",
                            "name": "博客园",
                            "description": ""
                        },
                        {
                            "homePage":"https://infos.imhcg.cn/",
                            "icon":"https://infos.imhcg.cn/icon.svg",
                            "name":"Engineering Blogs",
                            "description":"英文博客梗概"
                        }
                        
                    ]
                },
                {
                    "tagType": "个人博客",
                    "tagList": [
                        {
                            "homePage":"https://manateelazycat.github.io/",
                            "icon":"https://manateelazycat.github.io/favicon.ico",
                            "name":"王勇博客",
                            "description":""
                        },
                        {
                            "homePage": "http://www.ruanyifeng.com/blog/",
                            "icon": "https://www.ruanyifeng.com/favicon.ico",
                            "name": "阮一峰博客",
                            "description": "优秀个人博客作者"
                        },
                        {
                            "homePage":"https://coolshell.cn/",
                            "icon":"https://coolshell.cn/favicon.png",
                            "name":"酷壳",
                            "description":"陈皓大佬博客，已于2023年5月13日离世。"
                        },
                        {
                            "homePage":"https://windliang.wang/",
                            "icon":"https://windliang.wang//images/favicon-32x32-next.png",
                            "name":"windliang",
                            "description":""
                        },
                        {
                            "homePage":"https://blog.cugxuan.cn/",
                            "icon":"https://blog.cugxuan.cn//images/favicon-32x32-next.png",
                            "name":"泫",
                            "description":""
                        },
                        {
                            "homePage":"https://rainss.cn/",
                            "icon":"https://rainss.cn/favicon.ico",
                            "name":"雨落凋殇",
                            "description":"技术加手工牛人"
                        },
                        {
                            "homePage":"https://tool.heheda.top/",
                            "icon":"",
                            "name":"赵丹刚工具箱",
                            "description":""
                        },
                        {
                            "homePage":"https://wukan.me/,https://wukan.me/?p=2649",
                            "icon":"",
                            "name":"阿偏的孤独星球",
                            "description":"美国和国内it从业者比较，作者4年在中（北京、上海）美两国工作，分析总结两地特点和差异。情绪按摩。"
                        }
                    ]
                },
                {
                    "tagType": "热榜",
                    "tagList": [
                        {
                            "homePage": "https://tophub.today/",
                            "icon": "https://file.ipadown.com/tophub/assets/images/favicon/favicon-32x32.png",
                            "name": "今日热榜网",
                            "description": "直接展示热榜内容"
                        },
                        {
                            "homePage": "http://guozhivip.com/rank/qt.html",
                            "icon": "http://guozhivip.com/images/ic.ico",
                            "name": "果汁排行榜",
                            "description": "种类多排行"
                        },
                        {
                            "homePage": "https://xyzrank.com/#/",
                            "icon": "https://xyzrank.justinbot.com/public/favicon.png",
                            "name": "个人博客排行",
                            "description": "博客排行"
                        }
                    ]
                }, 
                {
                    "tagType": "论坛",
                    "tagList": [
                        {
                            "homePage":"https://tieba.baidu.com/",
                            "icon":"https://tieba.baidu.com/favicon.ico",
                            "name":"百度贴吧",
                            "description":""
                        },
                        {
                            "homePage":"https://www.douban.com/group/",
                            "icon":"https://www.douban.com/favicon.ico",
                            "name":"豆瓣",
                            "description":"国内影视小组论坛"
                        },
                        {
                            "homePage":"https://www.lofter.com/trend",
                            "icon":"https://www.lofter.com/favicon.ico",
                            "name":"Lofter",
                            "description":"95后论坛，戏称老福特，图片社交、照片社交、摄影作品、手机摄影、同人文、平面设计、cosplay、达人、女神图片、时尚搭配、二次元"
                        },
                        {
                            "homePage":"https://afdian.net/feed",
                            "icon":"https://afdian.net/favicon.ico",
                            "name":"爱发电",
                            "description":"付费知识平台"
                        },
                        {
                            "homePage":"https://tieba.baidu.com/f?kw=%E6%9C%A8%E5%B7%A5&ie=utf-8",
                            "icon":"https://tieba.baidu.com/favicon.ico",
                            "name":"百度木工贴吧",
                            "description":""
                        }
                    ]
                }, 
                {
                    "tagType": "导航",
                    "tagList": [
                        {
                            "homePage":"https://fuliba123.net/",
                            "icon":"https://fuliba123.net/favicon.ico",
                            "name":"福利吧导航",
                            "description":"综合资源导航网站"
                        },
                        {
                            "homePage":"https://www.zjnav.com/",
                            "icon":"https://www.zjnav.com/wp-content/uploads/2024/01/1705467656-favicon.png",
                            "name":"终极导航",
                            "description":"全平台导航网站"
                        },
                        {
                            "homePage":"https://www.bidianer.com/",
                            "icon":"https://www.bidianer.com/favicon.ico",
                            "name":"笔点",
                            "description":"用心做简洁、可自定义的网址导航！"
                        },
                        {
                            "homePage":"https://nav.qinight.com/",
                            "icon":"https://nav.qinight.com/static/image/favicon.ico",
                            "name":"柒夜导航",
                            "description":"复合型导航网站，包含图片、视频、资源等"
                        },
                        {
                            "homePage":"https://hao.mfsc123.com/",
                            "icon":"https://hao.mfsc123.com/favicon.ico",
                            "name":"免费商用导航",
                            "description":"免费图片、视频等资源分析网站"
                        },
                        {
                            "homePage":"https://www.xue8nav.com/",
                            "icon":"https://www.xue8nav.com/favicon.ico",
                            "name":"学吧导航",
                            "description":"四十万学习爱好者都在用的学霸导航网站"
                        },
                        {
                            "homePage":"http://www.zoudupai.com/",
                            "icon":"",
                            "name":"走读派读书导航",
                            "description":""
                        },
                        {
                            "homePage":"https://daohangxie.com/",
                            "icon":"https://daohangxie.com/wp-content/uploads/2024/06/cropped-New-Project-32x32.png",
                            "name":"导航蟹",
                            "description":""
                        },
                        {
                            "homePage":"https://www.klyingshi1.com/,https://klyingshi.top/",
                            "icon":"https://www.klyingshi1.com/favicon.ico",
                            "name":"可乐影视",
                            "description":"最全面最优质的影视导航、影视搜索网站"
                        
                        },
                        {
                            "homePage":"https://36kdh.com/",
                            "icon":"https://36kdh.com/favicon.ico",
                            "name":"36k导航",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "工具",
                    "tagList": [
                        {
                            "homePage": "https://tool.browser.qq.com/",
                            "icon": "https://tool.browser.qq.com/favicon.ico",
                            "name": " 帮小忙",
                            "description": "腾讯在线工具箱平台"
                        },
                        {
                            "homePage":"https://mholt.github.io/json-to-go/",
                            "icon":"",
                            "name":"JSON-to-Go",
                            "description":"json对象转golang结构体"
                        },
                        {
                            "homePage": "http://192.168.31.1/",
                            "icon": "",
                            "name": "小米路由",
                            "description": "小米路由器"
                        },
                        {
                            "homePage": "https://os5.mycloud.com/sessions/new",
                            "icon": "https://os5.mycloud.com/favicon.ico",
                            "name": "mycloud5",
                            "description": "网盘"
                        },
                        {
                            "homePage": "https://www.speedtest.cn/",
                            "icon": "https://www.speedtest.cn/images/ico/favicon.png",
                            "name": "网络测速",
                            "description": "网络测速"
                        },
                        {
                            "homePage": "https://myip.ipip.net/",
                            "icon": "",
                            "name": "本机ip",
                            "description": "本机外网ip地址"
                        },
                        {
                            "homePage": "https://tool.lu/timestamp/",
                            "icon": "https://tool.lu/favicon.ico",
                            "name": "时间戳",
                            "description": "时间戳转换"
                        },
                        {
                            "homePage": "https://the-x.cn/",
                            "icon": "https://the-x.cn/favicon.ico",
                            "name": "在线加密解密",
                            "description": "各类在线加密解密工具"
                        },
                        {
                            "homePage": "https://www.bitbug.net/",
                            "icon": "https://www.bitbug.net/favicon.ico",
                            "name": "制作ico图标",
                            "description": "在线图片转ico文件"
                        },
                        {
                            "homePage":"https://www.aconvert.com/cn/icon/png-to-ico/",
                            "icon":"https://www.aconvert.com/favicon.ico",
                            "name":"PNG转ICO",
                            "description":"在线转换图标文件"
                        },
                        {
                            "homePage":"https://www.useragents.me/",
                            "icon":"https://www.useragents.me/static/favicon-32x32.png",
                            "name":"各系统浏览器agent",
                            "description":"整理总结多个系统浏览器agent"
                        },
                        {
                            "homePage":"https://www.photopea.com/",
                            "icon":"https://www.photopea.com/promo/icon512.png",
                            "name":"在线ps",
                            "description":""
                        },
                        {
                            "homePage":"https://watermark.liumingye.cn/",
                            "icon":"",
                            "name":"短视频提取",
                            "description":"支持多种平台短视频内容提取"
                        },
                        {
                            "homePage":"http://tv.wandhi.com/go.html",
                            "icon":"http://tv.wandhi.com///www.wandhi.com/favicon.ico",
                            "name":"vip视频解析",
                            "description":""
                        },
                        {
                            "homePage":"https://handraw.top/,https://revezone.com/index.html",
                            "icon":"https://handraw.top/favicon.ico",
                            "name":"handraw",
                            "description":"网页绘图工具 第二个网页为升级版"
                        },
                        {
                            "homePage":"http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html,https://github.com/Momo707577045/m3u8-downloader,https://m3u8.yydy.link:2023/",
                            "icon":"http://blog.luckly-mjw.cn/favicon.ico",
                            "name":"m3u8 downloader",
                            "description":"在线m3u8格式视频网页下载工具"
                        },
                        {
                            "homePage":"https://idify.netlify.app/",
                            "icon":"https://idify.netlify.app/favicon.ico",
                            "name":"IDIFY",
                            "description":"在线证件照生成工具"
                        },
                        {
                            "homePage":"https://pictode.com/",
                            "icon":"https://pictode.com/./logo.svg",
                            "name":"Pictode",
                            "description":"在线绘图工具"
                        },
                        {
                            "homePage":"https://epubtopdf.com/",
                            "icon":"https://epubtopdf.com//images/epubtopdf/favicon.svg",
                            "name":"ePub转换PDF",
                            "description":"在线文件epub转换PDF工具"
                        },{
                            "homePage":"https://github.com/BlueMatthew/WechatExporter",
                            "icon":"",
                            "name":"导出微信聊天",
                            "description":""
                        },
                        {
                            "homePage":"https://zm.i8k.tv/",
                            "icon":"https://zm.i8k.tv/favicon.ico",
                            "name":"在线字幕工具",
                            "description":""
                        },
                        {
                            "homePage":"https://symbl.cc/cn/unicode-table/",
                            "icon":"https://symbl.cc/favicon.ico",
                            "name":"Unicode 符号表",
                            "description":"unicode不可见字符"
                        },
                        {
                            "homePage":"https://jiemahao.com/",
                            "icon":"https://jiemahao.com/favicon.ico",
                            "name":"接码平台",
                            "description":"使用网站提供的手机号接收短信验证码"
                        },
                        {
                            "homePage":"https://lovelive.tools/",
                            "icon":"https://lovelive.tools/icon.png",
                            "name":"渣男说话语录",
                            "description":""
                        },
                        {
                            "homePage":"https://emojis.click/zh",
                            "icon":"https://emojis.click/favicon.ico",
                            "name":"Emoji搜索",
                            "description":"结合ai用自然语言找到适合的表情。"
                        },
                        {
                            "homePage":"https://qrframe.kylezhe.ng/",
                            "icon":"https://qrframe.kylezhe.ng/favicon.svg",
                            "name":"qrframe",
                            "description":"定制二维码网页工具"
                        },
                        {
                            "homePage":"https://tool.520101.com/wangluo/ipjisuan/",
                            "icon":"https://tool.520101.com/favicon.ico",
                            "name":"ip地址计算",
                            "description":"在线网页工具，支持电子电路等相关计算。"
                        },
                        {
                            "homePage":"https://fietkau.software/qr",
                            "icon":"https://fietkau.software/favicon.ico",
                            "name":"QRSVG",
                            "description":"二维码定制可指定颜色，背景色，插入图片。"
                        }
                    ]
                }

            ]
        },
        {
            "type": "大数据",
            "icon": "fa fa-database",
            "tag": [
                {
                    "tagType": "文件系统与数据库",
                    "tagList": [
                        {
                            "homePage": "https://hadoop.apache.org/,https://github.com/apache/hadoop",
                            "icon": "https://hadoop.apache.org/elephant.png",
                            "name": "hadoop",
                            "description": "java开发开源大数据平台"
                        },
                        {
                            "homePage": "https://hbase.apache.org/downloads.html",
                            "icon": "https://hbase.apache.org/images/favicon.ico",
                            "name": "hbase",
                            "description": "基于hdfs快速查询，列式存储，key-value关联数据库"
                        },
                        {
                            "homePage": "https://hive.apache.org/,https://dlcdn.apache.org/hive/,https://hive.apache.org/general/downloads/,https://cwiki.apache.org/confluence/display/Hive/LanguageManual",
                            "icon": "https://hive.apache.org/favicon.ico",
                            "name": "hive",
                            "description": "数据仓库，数据查询引擎"
                        },
                        {
                            "homePage": "https://impala.apache.org/",
                            "icon": "https://impala.apache.org/favicon.ico",
                            "name": "Impala",
                            "description": ""
                        },
                        {
                            "homePage": "https://ozone.apache.org/,https://ozone.apache.org/docs/1.3.0/zh/start/onprem.html",
                            "icon": "https://ozone.apache.org/favicon.ico",
                            "name": "Ozone",
                            "description": "分布式文件和数据存储系统，解决hdfs存储小文件效率不佳的问题"
                        },
                        {
                            "homePage":"https://clickhouse.com/docs/zh,https://github.com/ClickHouse/ClickHouse/releases",
                            "icon":"https://clickhouse.com/favicon.ico",
                            "name":"ClickHouse",
                            "description":""
                        },
                        {
                            "homePage":"https://doris.apache.org/zh-CN/download,https://doris.apache.org/zh-CN/docs/gettingStarted/quick-start",
                            "icon":"https://doris.apache.org/favicon.ico",
                            "name":"Doris",
                            "description":"国产基于 MPP 架构的高性能、实时的分析型数据库"
                        },
                        {
                            "homePage":"https://docs.starrocks.io/zh-cn/latest/loading/load_concept/strict_mode",
                            "icon":"https://docs.starrocks.io/zh/img/favicon.ico",
                            "name":"StarRocks",
                            "description":"与doris同源的另一个版本软件"
                        },
                        {
                            "homePage":"https://www.datamonad.com/",
                            "icon":"",
                            "name":"MR3",
                            "description":"非开源软件，据说可以直接替换Hive，性能大大提升，可以免费使用，但计算资源限制在5T以下。"
                        },
                        {
                            "homePage":"https://paimon.apache.org/docs/0.5/",
                            "icon":"https://paimon.apache.org/favicon.ico",
                            "name":"Paimon",
                            "description":"新一代流式数据湖"
                        }
                    ]
                },
                {
                    "tagType":"异常讨论",
                    "tagList":[
                        {
                            "homePage":"https://issues.apache.org/jira/projects/HADOOP/issues/",
                            "icon":"https://issues.apache.org/jira/s/403rv7/820010/13pdxe5/_/images/fav-jsw.png",
                            "name":"hadoop-issues",
                            "description": "hadoop异常提交列表"
                        }
                    ]
                },
                {
                    "tagType": "计算引擎",
                    "tagList": [
                        {
                            "homePage": "https://flink.apache.org/zh/",
                            "icon": "https://flink.apache.org/favicon.ico",
                            "name": "Flink",
                            "description": "阿里购买并开源第三代流批一体计算框架。"
                        },
                        {
                            "homePage": "https://spark.apache.org/,https://github.com/apache/spark",
                            "icon": "https://spark.apache.org/favicon.ico",
                            "name": "Spark",
                            "description": "第一代主打流批计算框架，将流定义为小幅度批处理。"
                        },
                        {
                            "homePage": "https://tez.apache.org/,https://archive.apache.org/dist/tez/",
                            "icon": "https://tez.apache.org/images/ApacheTezLogo_lowres.png",
                            "name": "Tez",
                            "description": "hadoop MapReduce计算框架升级款 "
                        }
                    ]
                },
                {
                    "tagType": "管理平台",
                    "tagList": [
                        {
                            "homePage": "https://ambari.apache.org/,https://github.com/apache/ambari",
                            "icon": "https://ambari.apache.org/favicon.ico",
                            "name": "Ambari",
                            "description": ""
                        },
                        {
                            "homePage":"http://www.hdp.link/,https://pan.baidu.com/s/1z_Yk-inzpZnOvtG8EHo_ow?pwd=wj68,https://www.alipan.com/s/99Y3MRpJ6kh",
                            "icon":"http://www.hdp.link/images/favicon.ico",
                            "name":"HiDataPlus(HDP)官网",
                            "description":""
                        },
                        {
                            "homePage":"https://mp.weixin.qq.com/s/5EdqLYv7jIiqia-7l_bLhQ,https://mp.weixin.qq.com/s/KrhgKnbca1IuSR65UcbCzQ",
                            "icon":"https://mp.weixin.qq.com/favicon.ico",
                            "name":"hidataPlus公众号",
                            "description":""
                        },
                        {
                            "homePage":"https://bigtop.apache.org/,https://github.com/apache/bigtop",
                            "icon":"https://bigtop.apache.org/favicon.ico",
                            "name":"Apache Bigtop",
                            "description":"apache基金会支持的新一代开源大数据组件提供全面的打包、测试和配置。"
                        },
                        {
                            "homePage":"http://www.boundivore.cn/",
                            "icon":"http://www.boundivore.cn/favicon/logo.svg",
                            "name":"DataLight",
                            "description":"新生大数据部署平台，可用性待定。"
                        },
                        {
                            "homePage":"https://docs.cloudera.com/HDPDocuments/index.html",
                            "icon":"https://docs.cloudera.com/favicon.ico",
                            "name":"HDP",
                            "description":"HDP官方文档"
                        }
                    ]
                },
                {
                    "tagType": "消息队列",
                    "tagList": [
                        {
                            "homePage": "https://kafka.apache.org/",
                            "icon": "https://kafka.apache.org/favicon.ico",
                            "name": "Kafka",
                            "description": "消息队列"
                        }
                    ]
                },
                {
                    "tagType": "任务调度",
                    "tagList": [
                        {
                            "homePage": "https://oozie.apache.org/",
                            "icon": "https://oozie.apache.org/favicon.ico",
                            "name": "oozie",
                            "description": "开源大数据任务调度，缺点不支持hadoop3"
                        },
                        {
                            "homePage": "https://airflow.apache.org/",
                            "icon": "https://airflow.apache.org/favicons/favicon-32x32.png",
                            "name": "Airflow",
                            "description": "基于Python开发，大数据任务调度平台"
                        },
                        {
                            "homePage": "https://azkaban.github.io/",
                            "icon": "https://azkaban.github.io/img/favicon.ico",
                            "name": "Azkaban",
                            "description": "Linkedin开源的一个批量工作流任务调度器"
                        },
                        {
                            "homePage": "https://dolphinscheduler.apache.org/zh-cn/",
                            "icon": "https://dolphinscheduler.apache.org/img/favicon.ico",
                            "name": "dolphinscheduler",
                            "description": "基于分布式任务调度引擎开发的任务调度工具"
                        }
                    ]
                },
                {
                    "tagType": "安全认证",
                    "tagList": [
                        {
                            "homePage": "https://web.mit.edu/kerberos/",
                            "icon": "https://web.mit.edu/favicon.ico",
                            "name": "kerberos",
                            "description": "节点认证"
                        },
                        {
                            "homePage": "https://ranger.apache.org/",
                            "icon": "https://ranger.apache.org/favicon.ico",
                            "name": "ranger",
                            "description": "用户组件权限管理"
                        }
                    ]
                },
                {
                    "tagType": "分布式控制中心",
                    "tagList": [
                        {
                            "homePage":"https://zookeeper.apache.org/releases.html",
                            "icon":"https://zookeeper.apache.org/favicon.ico",
                            "name":"ZooKeeper",
                            "description":""
                        }
                    ]
                }
            ]
        },
        {
            "type": "后端",
            "icon": "fa fa-desktop",
            "tag": [
                {
                    "tagType": "java",
                    "tagList": [
                        {
                            "homePage": "https://www.oracle.com/java/technologies/downloads/archive/#JavaSE",
                            "icon": "https://www.oracle.com/asset/web/favicons/favicon-32.png",
                            "name": "OracleJdk",
                            "description": "主流jdk，最新LST版本17，从17开始有3年免费试用期。"
                        },
                        {
                            "homePage": "https://jdk.java.net/",
                            "icon": "https://jdk.java.net/images/nanoduke.ico",
                            "name": "OpenJdk",
                            "description": "jdk开源项目，所有jdk都从它二次编译开发。"
                        },
                        {
                            "homePage": "https://www.injdk.cn/",
                            "icon": "https://pic.imgdb.cn/item/5e88a831504f4bcb04231262.jpg",
                            "name": "jdk收录",
                            "description": "所有主流jdk备份平台主要，国外官网无法连接时，可作为备份。"
                        },
                        {
                            "homePage": "https://adoptium.net/temurin/releases/",
                            "icon": "https://adoptium.net/images/aqavit-icon.png",
                            "name": "adoptiumJdk",
                            "description": "原社区维护jdk，后以移交给eclipse，推荐使用"
                        },
                        {
                            "homePage": "https://www.graalvm.org/,https://github.com/oracle/graal",
                            "icon": "https://www.graalvm.org/resources/img/favicon/favicon-light/favicon-light.ico",
                            "name": "graalvm",
                            "description": "支持多种语言的新一代vm，凭借VSC++可将java编译为原生程序。"
                        }
                    ]
                },
                {   
                    "tagType":"maven仓库",
                    "tagList":[
                        {
                            "homePage": "https://mvnrepository.com/",
                            "icon": "https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico",
                            "name": "Maven官方仓库",
                            "description": ""

                        },
                        {
                            "homePage":"https://developer.aliyun.com/mvn/search",
                            "icon":"https://developer.aliyun.com/favicon.ico",
                            "name":"阿里maven仓库",
                            "description":""
                        }
                        
                    ]
                },
                {   
                    "tagType":"web框架",
                    "tagList":[
                        {
                            "homePage": "https://spring.io/projects/spring-framework#learn,https://github.com/spring-projects/spring-framework",
                            "icon": "https://spring.io/favicon-32x32.png",
                            "name": "Spring",
                            "description": "java 企业级web开发框架"
                        },
                        {
                            "homePage": "https://spring.io/projects/spring-boot,https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-dependencies",
                            "icon": "https://spring.io/favicon-32x32.png",
                            "name": "SpringBoot",
                            "description": "java 企业级web开发框架"
                        },
                        {
                            "homePage":"https://jooby.io/",
                            "icon":"https://jooby.io/images/favicon96.png",
                            "name":"jooby",
                            "description":"基于netty开发的java web框架，语法简单请便。"
                        },
                        {
                            "homePage":"https://jfinal.com/doc/1-1,https://gitee.com/jfinal/jfinal",
                            "icon":"https://jfinal.com/favicon.ico",
                            "name":"JFinal",
                            "description":"JFinal 是基于 Java 语言的极速 WEB + ORM 框架，其核心设计目标是开发迅速、代码量少、学习简单、功能强大、轻量级、易扩展、Restful。"
                        },
                        {
                            "homePage":"https://solon.noear.org/",
                            "icon":"https://solon.noear.org//img/solon/favicon.png",
                            "name":"Solon",
                            "description":"国产web框架与信通院合作"
                        },
                        {
                            "homePage": "https://zookeeper.apache.org/",
                            "icon": "https://zookeeper.apache.org/images/zookeeper_small.gif",
                            "name": "zookeeper",
                            "description": "分布式控制中心"

                        }
                        
                    ]
                },
                {   
                    "tagType":"spring cloud",
                    "tagList":[
                        {
                            "homePage":"https://spring.io/projects/spring-cloud",
                            "icon":"",
                            "name":"spring-cloud",
                            "description":"官网，打开很卡"
                        },
                        {
                            "homePage":"https://nacos.io/zh-cn/docs/what-is-nacos.html,https://github.com/alibaba/nacos",
                            "icon":"https://nacos.io/favicon.ico",
                            "name":"Nacos",
                            "description":"国产服务中心"
                        },
                        {
                            "homePage":"https://blog.csdn.net/m0_66689823/article/details/128057839",
                            "icon":"https://blog.csdn.net/favicon.ico",
                            "name":"GateWay-CSDN",
                            "description":"官网不好打开，GetWay微服务网关组件"
                        },
                        {
                            "homePage":"https://sentinelguard.io/zh-cn/,https://github.com/alibaba/Sentinel/releases",
                            "icon":"https://sentinelguard.io/img/sentinel.ico",
                            "name":"Sentinel",
                            "description":"阿里开发的流控防护组件"
                        }
                        
                    ]
                },
                {   
                    "tagType":"虚拟化",
                    "tagList":[
                        {
                            "homePage":"https://www.virtualbox.org/",
                            "icon":"https://www.virtualbox.org/favicon.ico",
                            "name":"Oracle VirtualBox",
                            "description":"开源虚拟化软件"
                        },
                        {
                            "homePage":"https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion",
                            "icon":"https://www.vmware.com/vm-favicon.png",
                            "name":"vmware",
                            "description":"需要注册账号，不太好。"
                        },
                        {
                            "homePage":"https://download.docker.com/linux/centos/8/x86_64/stable/Packages/,https://mirrors.ustc.edu.cn/docker-ce/linux/centos/8/x86_64/stable/Packages/",
                            "icon":"https://download.docker.com/favicon.ico",
                            "name":"docker",
                            "description":"docker安装包"
                        },
                        {
                            "homePage":"https://learn.microsoft.com/zh-cn/windows/wsl/install",
                            "icon":"https://learn.microsoft.com/favicon.ico",
                            "name":"WSL安装",
                            "description":"微软wsl安装文档"
                        },
                        {
                            "homePage":"https://docs.docker.com/desktop/setup/install/windows-install/",
                            "icon":"https://docs.docker.com/favicons/docs@2x.ico",
                            "name":"DockerDesktop",
                            "description":"windows安装docker"
                        },
                        {

                            "homePage":"https://github.com/docker/compose",
                            "icon":"https://github.com/favicon.ico",
                            "name":"docker-compose",
                            "description":"github地址"
                        },

                        {
                            "homePage":"https://kubernetes.io/zh-cn/releases/",
                            "icon":"https://kubernetes.io/icons/favicon-64.png",
                            "name":"kubernetes",
                            "description":"k8s docker容器管理软件"
                        },
                        {
                            "homePage":"https://kind.sigs.k8s.io/",
                            "icon":"https://kind.sigs.k8s.io/favicon.ico",
                            "name":"kind",
                            "description":"基于golang开发的k8s系统工具"
                        },
                        {
                            "homePage":"https://docs.tigera.io/calico/latest/getting-started/kubernetes/quickstart,https://github.com/projectcalico/calico,https://raw.githubusercontent.com/projectcalico/calico/v3.28.2/manifests/tigera-operator.yaml",
                            "icon":"https://docs.tigera.io/img/favicon.png",
                            "name":"calico",
                            "description":"k8s虚拟网络模块"
                        },
                        {
                            "homePage":"https://coredns.io/,https://github.com/coredns/coredns",
                            "icon":"https://coredns.io/images/favicon.png",
                            "name":"coredns",
                            "description":"k8s集群coredns工具"
                        },
                        {
                            "homePage":"https://github.com/kubernetes-sigs/metrics-server/,https://kubernetes.io/zh-cn/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/,https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.7.2/components.yaml",
                            "icon":"https://kubernetes.io/icons/favicon-64.png",
                            "name":"Metrics Server",
                            "description":"k8s集群指标工具"
                        },
                        {
                            "homePage":"https://github.com/kubernetes/dashboard,https://kubernetes.io/zh-cn/docs/tasks/access-application-cluster/web-ui-dashboard/,https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml",
                            "icon":"https://kubernetes.io/icons/favicon-64.png",
                            "name":"dashboard",
                            "description":"k8s集群web管理工具"
                        }
                    ]

                },
                {   
                    "tagType":"镜像源",
                    "tagList":[
                        {

                            "homePage":"https://catalog.ngc.nvidia.com/containers?filters=&orderBy=weightPopularDESC&query=&page=&pageSize=",
                            "icon":"https://catalog.ngc.nvidia.com/favicon.ico",
                            "name":"NVIDIA镜像源",
                            "description":"NVIDIA镜像源"
                        },
                        {
                            "homePage":"https://container-registry.oracle.com/ords/f?p=113:10::::::",
                            "icon":"https://container-registry.oracle.com/favicon.ico",
                            "name":"Oracle镜像源",
                            "description":"mysql、java、GraalVM等镜像源"
                        }
                    ]

                },
                {   
                    "tagType":"项目版本管理",
                    "tagList":[
                        {
                            "homePage": "https://git-scm.com/download/win",
                            "icon": "https://git-scm.com/favicon.ico",
                            "name": "Git",
                            "description": "版本控制软件"
                        },
                        {
                            "homePage": "https://sourceforge.net/projects/tortoisesvn/files/,https://subversion.apache.org/download/",
                            "icon": "",
                            "name": "tortoise-svn",
                            "description": "一个windows，一个linux安装包下载地址。"
                        }
                    ]

                },
                {
                    "tagType": "web容器",
                    "tagList": [
                        {
                            "homePage": "https://tomcat.apache.org/,https://tomcat.apache.org/whichversion.html,https://archive.apache.org/dist/tomcat/",
                            "icon": "https://tomcat.apache.org/res/images/tomcat.png",
                            "name": "Tomcat",
                            "description": "开源javaWeb运行容器。"
                        },
                        {
                            "homePage": "https://www.eclipse.org/jetty/download.php,https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/",
                            "icon": "https://www.eclipse.org/favicon.ico",
                            "name": "Jetty",
                            "description": "轻量级web容器"
                        },
                        {
                            "homePage": "https://nginx.org/en/download.html",
                            "icon": "https://nginx.org/favicon.ico",
                            "name": "Nginx",
                            "description": "C++开发高性能服务代理框架"
                        },
                        {
                            "homePage":"https://undertow.io/,https://github.com/undertow-io/undertow",
                            "icon":"https://undertow.io/images/undertow_icon_16px.png",
                            "name":"Undertow",
                            "description":"Undertow 是红帽公司的开源产品，是 Wildfly 默认的 Web 服务器，Java Web 服务器市场占有率高于 Jetty，仅次于 Tomcat"
                        },
                        {
                            "homePage":"https://smartboot.tech/smart-http/,https://gitee.com/smartboot",
                            "icon":"https://smartboot.tech/img/favicon.ico",
                            "name":"smart-http",
                            "description":"国产web容器"
                        }
                    ]
                },
                {
                    "tagType": "python",
                    "tagList": [
                        {
                            "homePage": "https://www.python.org/downloads/",
                            "icon": "https://www.python.org/static/favicon.ico",
                            "name": "python官网",
                            "description": "增速最快，排行第一编程语言，在AI和脚本语言领域独领风骚。"
                        }
                    ]
                },
                {
                    "tagType": "golang",
                    "tagList": [
                        {
                            "homePage": "https://golang.google.cn/",
                            "icon": "https://golang.google.cn/images/favicon-gopher.png",
                            "name": "golang官网",
                            "description": "google发布的类java语言，支持平台化编译，多应用于虚拟化，云计算。"
                        },
                        {
                            "homePage": "https://github.com/avelino/awesome-go",
                            "icon": "https://github.com/favicon.ico",
                            "name": "golang库集合",
                            "description": "github golang库集合项目"
                        }
                    ]
                },
                {
                    "tagType": "c++",
                    "tagList": [
                        {
                            "homePage":"https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/",
                            "icon":"https://visualstudio.microsoft.com/favicon.ico",
                            "name":"msvc",
                            "description":""
                        },
                        {
                            "homePage":"https://www.mingw-w64.org/downloads/",
                            "icon":"https://www.mingw-w64.org/logo.svg",
                            "name":" MinGW-w64",
                            "description":""
                        },
                        {
                            "homePage":"https://www.msys2.org/",
                            "icon":"https://www.msys2.org/favicon.ico",
                            "name":"MSYS2",
                            "description":"mingw团队又一力作msys2，推荐使用"
                        }
                    ]
                },
                {
                    "tagType": "rust",
                    "tagList": [
                        {
                            "homePage":"https://www.rust-lang.org/zh-CN",
                            "icon":"https://www.rust-lang.org/static/images/favicon-16x16.png",
                            "name":"Rust",
                            "description":"rust中文官网"
                        }
                    ]
                },
                {
                    "tagType": "数据库",
                    "tagList": [
                        {
                            "homePage": "https://dev.mysql.com/downloads/mysql/,https://downloads.mysql.com/archives/community/,https://github.com/mysql/mysql-server",
                            "icon": "https://labs.mysql.com/common/themes/sakila/favicon.ico",
                            "name": "mysql",
                            "description": "主流开源关系型数据库。"
                        },                        
                        {
                            "homePage": "https://www.navicat.com.cn/download/navicat-premium-lite",
                            "icon": "https://www.navicat.com/images/Navicat_16_Premium_win_256x256.ico",
                            "name": "navicat",
                            "description": "mysql navicat免费链接工具"
                        }
                        ,{
                            "homePage":"https://mariadb.com/downloads/",
                            "icon":"https://mariadb.com/favicon/favicon-32x32.png",
                            "name":"MariaDB",
                            "description":"MariaDB 开源版mysql"
                        },
                        {
                            "homePage":"https://www.enterprisedb.com/downloads/postgres-postgresql-downloads",
                            "icon":"https://www.enterprisedb.com/favicon.ico",
                            "name":"PostgreSQ",
                            "description":"高性能开源数据库，与mysql比肩。"
                        },
                        {
                            "homePage":"https://greatsql.cn/,https://greatsql.cn/docs/8032/",
                            "icon":"https://greatsql.cn/favicon.ico",
                            "name":"GreatSQL官方手册",
                            "description":"国产mysql分支，项目发布在gitee"
                        },
                        {
                            "homePage": "https://opengauss.org/zh/download/",
                            "icon": "https://opengauss.org/favicon.ico",
                            "name": "高斯数据库",
                            "description": ""
                        },
                        {
                            "homePage": "https://www.dameng.com/list_103.html",
                            "icon": "https://www.dameng.com/images/logo.ico",
                            "name": "达梦",
                            "description": "国产关系型数据库"
                        },
                        {
                            "homePage":"https://www.oceanbase.com/softwarecenter",
                            "icon":"https://mdn.alipayobjects.com/huamei_22khvb/afts/img/A*1kw8R5uv0DAAAAAAAAAAAAAADiGDAQ/original",
                            "name":"OceanBase",
                            "description":"阿里发布兼容mysql数据库"
                        },
                        {
                            "homePage":"https://www.influxdata.com/,https://github.com/influxdata/influxdb",
                            "icon":"https://www.influxdata.com/wp-content/uploads/cubo.svg",
                            "name":"influxdata",
                            "description":"时序数据库"
                        }
                    ]
                },
                {
                    "tagType": "键值对数据库",
                    "tagList": [
                        {
                            "homePage": "https://redis.io/download/",
                            "icon": "https://redis.io/wp-content/themes/wpx/assets/images/favicons/favicon-32x32.png?v=A0mpW2gQlj",
                            "name": "Redis",
                            "description": "流行Key-value nosql内存数据库。"
                        },
                        {
                            "homePage":"https://etcd.io/,https://github.com/etcd-io/etcd",
                            "icon":"https://etcd.io/favicons/favicon.ico",
                            "name":"etcd",
                            "description":"golang开发键值对数据库"
                        }
                    ]
                },
                {
                    "tagType": "yum源",
                    "tagList": [
                        {
                            "homePage": "http://www.rpmfind.net/linux/rpm2html/search.php",
                            "icon": "http://www.rpmfind.net/favicon.ico",
                            "name": "rpm包搜索",
                            "description": ""
                        }
                    ]
                },
                {
                    "tagType": "搜索引擎",
                    "tagList": [
                        {
                            "homePage": "https://www.elastic.co/cn/,https://www.elastic.co/cn/downloads/elasticsearch",
                            "icon": "https://www.elastic.co/favicon.ico",
                            "name": "Elasticsearch",
                            "description": "流行免费开源搜索引擎项目"
                        }
                    ]
                },
                {
                    "tagType": "文件存储",
                    "tagList": [
                        {
                            "homePage":"https://min.io/",
                            "icon":"https://min.io/resources/favs/favicon-32x32.png",
                            "name":"MinIO",
                            "description":"分布式对象存储系统，可以做图床。"
                        }
                    ]
                },
                {
                    "tagType": "gui",
                    "tagList": [
                        {
                            "homePage":"https://v2.tauri.app/zh-cn/",
                            "icon":"https://v2.tauri.app/favicon.svg",
                            "name":"tauri",
                            "description":"基于rust开发的pc、手机全平台图形化方案。"
                        },
                        {
                            "homePage": "https://www.electronjs.org/",
                            "icon": "https://static.oschina.net/uploads/logo/electron_tAOTZ.png",
                            "name": "electron",
                            "description": "内涵chrome的pc跨平台gui方案"
                        },
                        {
                            "homePage":"https://docs.flutter.cn/get-started/install,https://github.com/flutter",
                            "icon":"https://docs.flutter.cn/assets/images/cn/flutter-icon.png",
                            "name":"Flutter",
                            "description":"Flutter 中文文档 - Flutter 中文开发者网站"
                        },
                        {
                            "homePage":"https://www.qt.io/",
                            "icon":"https://www.qt.io/hubfs/QtGroup_Favicon_32.ico",
                            "name":"qt",
                            "description":"c++语言跨平台开发"
                        },
                        {
                            "homePage":"https://www.aardio.com/,https://bbs.aardio.com/",
                            "icon":"https://www.aardio.com/favicon.ico",
                            "name":"aardio",
                            "description":"小巧的自定exe文件功能封装开发框架"
                        },
                        {
                            "homePage":"https://www.ultimatepp.org/",
                            "icon":"https://www.ultimatepp.org/favicon.png",
                            "name":"U++",
                            "description":"一个欧洲人做的比较小众，整个代码库大概有40万行代码(核心也有10万+行)，所有控件自绘实现了，支持Windows, X-Windows, MacOS(2019年)，支持跨平台。"
                        }
                    ]
                },
                {
                    "tagType":"小程序",
                    "tagList":[
                        {
                            "homePage":"https://zh.uniapp.dcloud.io/case.html",
                            "icon":"https://zh.uniapp.dcloud.io/favicon.ico",
                            "name":"uni-app",
                            "description":"小程序开发框架"
                        }
                    ]
                },
                {
                    "tagType":"资讯",
                    "tagList":[
                        {
                            "homePage":"https://www.tiobe.com/tiobe-index/",
                            "icon":"https://www.tiobe.com/favicon.ico",
                            "name":"TIOBE",
                            "description":"编程语言使用排行"
                        }
                    ]
                },
                {
                    "tagType":"代码库",
                    "tagList":[
                        {
                            "homePage": "https://github.com/",
                            "icon": "https://github.com/favicon.ico",
                            "name": "gitHub",
                            "description": "世界流行源代码开放平台"
                        },
                        {
                            "homePage":"https://www.codecopy.cn/",
                            "icon":"https://www.codecopy.cn/favicon.ico",
                            "name":"代码小炒",
                            "description":"程序员鱼皮开发的代码分享工具"
                        }
                    ]
                }

            ]
        },
        {
            "type": "AI",
            "icon": "fa fa-connectdevelop",
            "tag": [
                {
                    "tagType": "AI工具",
                    "tagList": [
                        {
                            "homePage":"https://chat.deepseek.com/",
                            "icon":"https://cdn.deepseek.com/chat/icon.png",
                            "name":"DeepSeek对话",
                            "description":"2025年国产ai主角。"
                        },
                        {
                            "homePage":"https://chat.scnet.cn/#/chat?activeChatId=f34f1f5b62e246734aface2b403027b00042",
                            "icon":"https://chat.scnet.cn/favicon-isc.ico",
                            "name":"国家超算中心ai",
                            "description":"超算中心DeepSeek模型"
                        },
                        {
                            "homePage":"https://github.com/zhangrenyang/deepseek",
                            "icon":"https://github.com/favicon.ico",
                            "name":"DeepSeek源码",
                            "description":"github源码"
                        },
                        {
                            "homePage":"https://www.doubao.com/chat/",
                            "icon":"https://lf-cdn-tos.bytescm.com/obj/static/doubao_web/logo-icon.png",
                            "name":"豆包",
                            "description":"字节推出的 ChatGPT 类产品，免费使用。"
                        },

                        {
                            "homePage":"https://yiyan.baidu.com/",
                            "icon":"https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",
                            "name":"文心一言",
                            "description":"百度大模型工具"
                        },
                        {
                            "homePage":"https://xinghuo.xfyun.cn/",
                            "icon":"https://xinghuo.xfyun.cn/favicon.ico",
                            "name":"讯飞星火",
                            "description":"科大讯飞大模型产品"
                        },
                        {
                            "homePage":"https://kimi.moonshot.cn/",
                            "icon":"https://statics.moonshot.cn/kimi-chat/favicon.ico",
                            "name":"Kimi.ai",
                            "description":""
                        },                   
                        
                        {
                            "homePage":"https://tongyi.aliyun.com/qianwen/",
                            "icon":"https://img.alicdn.com/imgextra/i4/O1CN01FOwagl1XBpyVA2QVy_!!6000000002886-2-tps-512-512.png",
                            "name":"通义",
                            "description":"阿里通用大模型平台"
                        },
                        {
                            "homePage":"https://chatglm.cn/main/alltoolsdetail",
                            "icon":"https://chatglm.cn/favicon.ico",
                            "name":"智谱清言",
                            "description":""
                        },
                        {
                            "homePage":"https://gpt4o.so/zh-CN/app/89a94649e8ea27d2033f07b33ef3d102",
                            "icon":"https://gpt4o.so/favicon.ico",
                            "name":"gpt4o",
                            "description":"免费无需注册在此GTP4工具"
                        },
                        {
                            "homePage":"https://lmstudio.ai/",
                            "icon":"https://lmstudio.ai/assets/favicon.ico",
                            "name":"lmstudio",
                            "description":"离线llvms人工智能工具"
                        },
                        {
                            "homePage":"https://silo.kwok.ink/",
                            "icon":"https://silo.kwok.ink/logo.svg",
                            "name":"silo",
                            "description":"在线多模型文本对话和文生图。"
                        },
                        {
                            "homePage":"https://chat.baidu.com/search",
                            "icon":"https://chat.baidu.com/favicon.ico",
                            "name":"百度AI助手",
                            "description":""
                        },
                        {
                            "homePage":"https://www.moyin.com/",
                            "icon":"https://tc-nj-backend-ms-pub-cdn.mobvoi.com/moyingongfang-prd/assets/manifest/img/icons/favicon.ico",
                            "name":"魔音工坊",
                            "description":"视频声音处理"
                        }
                    ]
                },
                {
                    "tagType": "编程助手",
                    "tagList": [
                        {
                            "homePage":"https://www.marscode.cn/home?utm_source=content&utm_medium=kol&utm_campaign=ruanyifeng",
                            "icon":"https://lf-cdn.marscode.cn/obj/marscode-bucket-cn/marscode-favicon.ico",
                            "name":"marscode",
                            "description":"豆包旗下AI编程开发助手"
                        }
                    ]
                },
                {
                    "tagType": "声音克隆",
                    "tagList": [
                        {
                            "homePage":"https://anyvoice.net/zh/ai-voice-cloning",
                            "icon":"https://anyvoice.net/favicon.ico",
                            "name":"AI声音克隆",
                            "description":"3秒克隆声音"
                        }
                    ]
                },
                {
                    "tagType": "文字生成视频",
                    "tagList": [
                            {
                                "homePage":"https://aimovie.newmin.cn/",
                                "icon":"https://aimovie.newmin.cn/favicon.ico",
                                "name":"元镜",
                                "description":"一段文字生成图片，进一步生成视频。"
                            }
                    ]
                },
                {
                    "tagType": "文本生成图片",
                    "tagList": [
                        {
                            "homePage":"https://stablediffusion3.net/zh-CN/app",
                            "icon":"https://stablediffusion3.net/favicon.ico",
                            "name":"stablediffusion3",
                            "description":"在线文本生成图片"
                        },
                        {
                            "homePage":"https://aigc.360.com/",
                            "icon":"https://p0.ssl.qhimg.com/t014f809b450a0cf0ce.png",
                            "name":"360智绘",
                            "description":"360公司推出ai产品，需要注册"
                        }
                    ]
                },
                {
                    "tagType": "文本转语音",
                    "tagList": [
                        {
                            "homePage":"https://d1tools.com/tools/ai-tts/",
                            "icon":"https://d1tools.com/favicon.ico",
                            "name":"第一在线工具",
                            "description":""
                        },
                        {
                            "homePage":"https://texttospeech.im/zh-CN",
                            "icon":"https://texttospeech.im/favicon.ico",
                            "name":"文本转语音",
                            "description":"免费在线文本转语音"
                        },
                        {
                            "homePage":"https://elevenlabs.io/",
                            "icon":"https://elevenlabs.io/favicon.ico",
                            "name":"ElevenLabs",
                            "description":"在线文本转语音"
                        },
                        {
                            "homePage":"https://easyvoice.ioplus.tech/",
                            "icon":"https://easyvoice.ioplus.tech/favicon.ico",
                            "name":"easyvoice",
                            "description":"支持长篇小说转换，多人物语意。"
                        }

                    ]
                },
                {
                    "tagType": "AI智能搜索问答",
                    "tagList": [
                        {
                            "homePage":"https://metaso.cn/",
                            "icon":"https://metaso.cn/favicon.ico",
                            "name":"秘塔AI搜索",
                            "description":"分析问题，通过网络知识库，输出答案。"
                        },
                        {
                            "homePage":"https://so.360.com/",
                            "icon":"https://so.360.com/favicon.ico",
                            "name":"360AI搜索",
                            "description":""
                        },
                        {
                            "homePage":"https://www.tiangong.cn/",
                            "icon":"https://static.tiangong.cn/wwwsite/logo.ico",
                            "name":"天工ai",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "AI能力平台",
                    "tagList": [
                        {
                            "homePage":"https://www.coze.cn/",
                            "icon":"https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png",
                            "name":"扣子",
                            "description":"抖音开发的AI平台，通过配置创造自己的专属AI"
                        },
                        {
                            "homePage":"https://www.aiyjs.com/",
                            "icon":"https://www.aiyjs.com/wp-content/uploads/2024/02/cropped-1709004251-AI%E7%A0%94%E7%A9%B6%E6%89%80.webp",
                            "name":"AI研究所",
                            "description":""
                        },
                        {
                            "homePage": "https://ai.nancheng.fun/",
                            "icon": "https://ai.nancheng.fun/assets/images/favicon.png",
                            "name": "ai导航",
                            "description": "ai资源收集"
                        },
                        {
                            "homePage":"https://www.aihub.cn/",
                            "icon":"https://www.aihub.cn/wp-content/uploads/2023/06/cropped-aihub_logo-32x32.png",
                            "name":"AIHub",
                            "description":"免费齐全的AI工具箱 | 精选800+AI工具集合网站导航"
                        }
                    ]
                },
                {
                    "tagType": "ai开发",
                    "tagList": [
                        {
                            "homePage": "http://zh.d2l.ai/",
                            "icon": "http://zh.d2l.ai/_static/favicon.png",
                            "name": "动手学深度学习",
                            "description": "机器学习算法集合"
                        },
                        {
                            "homePage":"http://difyai.com/,https://github.com/langgenius/dify",
                            "icon":"https://framerusercontent.com/images/KWDRAMQLGjoMFBAjNjoCFMP7XI.png",
                            "name":"dify",
                            "description":"开源支持多模型的ai编辑平台"
                        },
                        {
                            "homePage":"https://www.modelscope.cn/home",
                            "icon":"https://www.modelscope.cn/favicon.ico",
                            "name":"魔搭社区",
                            "description":"阿里巴巴达摩院，汇聚各领域最先进的机器学习模型，提供模型探索体验、推理、训练、部署和应用的一站式服务。发现、学习、定制和分享心仪的模型"
                        }

                    ]
                },
                {
                    "tagType":"本地ai软件",
                    "tagList":[
                        {
                            "homePage":"https://want-ai.top/writer/",
                            "icon":"https://want-ai.top//_astro/favicon.gErAxO2c.ico",
                            "name":"爱享绘画",
                            "description":""
                        },
                        {
                            "homePage":"https://github.com/k4yt3x/video2x",
                            "icon":"https://github.com/favicon.ico",
                            "name":"video2x",
                            "description":"图片视频超清化"
                        }
                    ]
                }

            ]
        },
        {
            "type": "前端",
            "icon": "fa fa-edge",
            "tag": [
                {
                    "tagType": "Vue",
                    "tagList": [
                        {
                            "homePage": "https://www.javascriptc.com/vue3js/",
                            "icon": "https://www.javascriptc.com/vue3js/logo.png",
                            "name": "vue3官网",
                            "description": "新一代渐进式js框架"
                        },
                        {
                            "homePage":"https://github.com/vuejs/core-vapor",
                            "icon":"https://github.com/favicon.ico",
                            "name":"vue-vapor",
                            "description":"无虚拟DOM版本的vue，体积更小，速度更快，当前开为开发阶段。"
                        },
                        {
                            "homePage":"https://elementplus.fenxianglu.cn/zh-CN/component/button.html",
                            "icon":"https://s-test.belle.cn//images/element-plus-logo-small.svg",
                            "name":"Element Plus",
                            "description":""
                        },
                        {
                            "homePage": "https://element.eleme.cn/#/zh-CN/component/layout",
                            "icon": "",
                            "name": "element",
                            "description": "饿了吗基于vue2开源的企业级开发框架"
                        },
                        {
                            "homePage": "https://www.antdv.com/components/overview-cn/",
                            "icon": "https://aliyuncdn.antdv.com/favicon.ico",
                            "name": "antd-vue",
                            "description": "vue版本antd"
                        },
                        {
                            "homePage": "https://router.vuejs.org/zh/index.html",
                            "icon": "https://router.vuejs.org/logo.png",
                            "name": "Vue-router",
                            "description": "vue路由框架"
                        },
                        {
                            "homePage": "https://vuex.vuejs.org/zh/index.html",
                            "icon": "https://vuex.vuejs.org/icons/apple-touch-icon-152x152.png",
                            "name": "VueX",
                            "description": "vue状态管理"
                        },
                        {
                            "homePage": "https://vueuse.org/,https://github.com/vueuse/vueuse",
                            "icon": "https://vueuse.org/favicon-32x32.png",
                            "name": "VueUse",
                            "description": "vue cookies管理"
                        },
                        {
                            "homePage": "https://vant-ui.github.io/vant/",
                            "icon": "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
                            "name": "Vant 4",
                            "description": ""
                        }
                    ]
                },
                {
                    "tagType": "React",
                    "tagList": [
                        {
                            "homePage": "https://react.docschina.org/",
                            "icon": "https://react.docschina.org/favicon.ico",
                            "name": "react",
                            "description": "facebook开源js框架"
                        },
                        {
                            "homePage": "https://ant-design.antgroup.com/docs/react/introduce-cn",
                            "icon": "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
                            "name": "antd",
                            "description": "阿里开源基于react开发企业级web前端框架"
                        }
                    ]
                },
                {
                    "tagType": "svelte",
                    "tagList": [
                        {
                            "homePage":"https://svelte.dev/,https://www.svelte.cn/",
                            "icon":"https://www.svelte.cn/favicon.ico",
                            "name":"Svelte 中文文档 | Svelte 中文网",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "html",
                    "tagList": [
                        {
                            "homePage": "https://www.runoob.com/html/html-tutorial.html",
                            "icon": "https://www.runoob.com/favicon.ico",
                            "name": "html",
                            "description": ""
                        }
                    ]
                },
                {
                    "tagType": "js",
                    "tagList": [
                        {
                            "homePage": "https://www.runoob.com/js/js-tutorial.html",
                            "icon": "https://www.runoob.com/favicon.ico",
                            "name": "js教程",
                            "description": ""
                        },
                        {
                            "homePage":"https://animejs.com/",
                            "icon":"https://animejs.com/documentation/assets/img/favicon.png",
                            "name":"anime.js",
                            "description":"js动画库"
                        },
                        {
                            "homePage":"https://newcar.js.org/zh/",
                            "icon":"https://newcar.js.org/newcar_uni.webp",
                            "name":"newcar",
                            "description":"基于CanvasKit-WASM开发的现代化js动画引擎"
                        }
                    ]
                },
                {
                    "tagType": "js资源库",
                    "tagList": [
                        {
                            "homePage":"https://www.unpkg.com/",
                            "icon":"",
                            "name":"unpkg",
                            "description":"国外js资源cdn库，部署在coludflare"
                        },
                        {
                            "homePage":"https://www.jsdelivr.com/",
                            "icon":"https://www.jsdelivr.com/icons/favicon-32x32.png",
                            "name":"jsdelivr",
                            "description":"国内开源的js库"
                        }
                    ]
                },
                {
                    "tagType": "css框架",
                    "tagList": [
                        {
                            "homePage": "https://tailwindcss.com/",
                            "icon": "https://v2.tailwindcss.com/favicon-32x32.png",
                            "name": "tailwindCss",
                            "description": "原子css框架，未来有较好的发展性。"
                        },
                        {
                            "homePage": "https://cn.windicss.org/",
                            "icon": "https://cn.windicss.org/assets/logo.svg",
                            "name": "windiCss",
                            "description": "借鉴tailwindcss开发的下一代css框架，但官方更新不给力，使用有待确认。"
                        },
                        {
                            "homePage":"https://github.com/saadeghi/daisyui",
                            "icon":"https://github.com/favicon.ico",
                            "name":"daisyui",
                            "description":"B站使用此ui，基于svelte开发"
                        },
                        {
                            "homePage":"https://unocss.dev/",
                            "icon":"https://unocss.dev/favicon.ico",
                            "name":"unocss",
                            "description":"漂亮的原子css框架"
                        },
                        {
                            "homePage": "https://www.runoob.com/css3/css3-tutorial.html",
                            "icon": "https://www.runoob.com/favicon.ico",
                            "name": "CSS3 教程",
                            "description": ""
                        },
                        {
                            "homePage":"https://picnicss.com/,https://picnicss.com/documentation",
                            "icon":"https://picnicss.com/img/basket.png",
                            "name":"picnicss",
                            "description":"原生轻量化css库"
                        },
                        {
                            "homePage":"https://layui.dev/",
                            "icon":"https://layui.dev/favicon.ico",
                            "name":"Layui - 极简模块化前端 UI 组件库",
                            "description":""
                        },
                        {
                            "homePage":"https://equal-ui.github.io/Equal/introduction",
                            "icon":"https://equal-ui.github.io//Equal/favicon.ico",
                            "name":"Equal UI",
                            "description":"基于vue3和Tailwind Css实现的组件库，更新较慢"
                        }
                    ]
                },
                {
                    "tagType": "css实例库",
                    "tagList": [
                        {
                            "homePage":"https://csscoco.com/inspiration/",
                            "icon":"https://csscoco.com/inspiration/logo2.png",
                            "name":"csc inspiration",
                            "description":"css灵感网站"
                        },
                        {
                            "homePage":"https://animate.style/",
                            "icon":"https://animate.style/img/favicon.ico",
                            "name":"Animate.css",
                            "description":"css动画效果库"
                        },
                        {
                            "homePage":"http://www.species-in-pieces.com/",
                            "icon":"http://www.species-in-pieces.com/favicon.ico",
                            "name":"In Pieces",
                            "description":"30块方块组成的濒危动物图形，完全用css实现。"
                        }
                    ]
                },
                {
                    "tagType": "配色方案",
                    "tagList": [
                        {
                            "homePage": "https://nipponcolors.com/",
                            "icon": "https://nipponcolors.com/favicon.ico",
                            "name": "日本传统颜色",
                            "description": ""
                        },
                        {
                            "homePage": "http://zhongguose.com/",
                            "icon": "http://zhongguose.com/favicon.ico",
                            "name": "中国传统颜色",
                            "description": ""
                        },
                        {
                            "homePage":"https://uchu.style/",
                            "icon":"https://uchu.style/./favicon.svg",
                            "name":"uchū demo",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "图标库",
                    "tagList": [
                        {
                            "homePage": "https://www.iconfont.cn/manage/index",
                            "icon": "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
                            "name": "阿里矢量图标库",
                            "description": "新浪账号登录，阿里图标库"
                        },
                        {
                            "homePage": "https://fontawesome.dashgame.com/,https://www.runoob.com/font-awesome/fontawesome-reference.html",
                            "icon": "https://fontawesome.dashgame.com/assets/ico/favicon.ico",
                            "name": "fontawesome",
                            "description": "矢量图标库"
                        },
                        {
                            "homePage":"https://iconce.com/",
                            "icon":"https://iconce.com/ce.svg",
                            "name":"iconce",
                            "description":"在线图标制作工具"
                        },
                        {
                            "homePage":"https://github.com/microsoft/fluentui-system-icons",
                            "icon":"https://github.com/favicon.ico",
                            "name":"fluentui-system-icons",
                            "description":"微软开源的图标集合。"
                        }
                    ]
                },
                {
                    "tagType": "老牌框架",
                    "tagList": [
                        {
                            "homePage": "https://www.bootcss.com/",
                            "icon": "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@1.0.3/dist/assets/favicons/favicon.ico",
                            "name": "Bootstrap中文网",
                            "description": ""
                        },
                        {
                            "homePage":"https://preview.tabler.io/,https://github.com/tabler/tabler",
                            "icon":"https://preview.tabler.io/favicon.ico",
                            "name":"tabler",
                            "description":"基于bootstrap实现的后台程序，适配手机和pc"
                        }
                    ]
                },
                {
                    "tagType": "公共",
                    "tagList": [
                        {
                            "homePage": "https://nodejs.org/zh-cn/,https://nodejs.org/dist/",
                            "icon": "https://nodejs.org/static/images/favicons/favicon-32x32.png",
                            "name": "Nodejs",
                            "description": "基于v8js运行环境"
                        },
                        {
                            "homePage": "http://www.axios-js.com/docs/,https://github.com/axios/axios",
                            "icon": "http://www.axios-js.com/icon/apple-touch-icon-57x57.png",
                            "name": "Axios",
                            "description": "js request请求框架"
                        },
                        {
                            "homePage": "http://mockjs.com/,https://github.com/nuysoft/Mock/wiki/Getting-Started",
                            "icon": "http://mockjs.com/assets/img/logo-2.svg",
                            "name": "mockjs",
                            "description": "测试数据生成框架"
                        },
                        {
                            "homePage": "https://kamranahmed.info/driver.js/,https://github.com/kamranahmedse/driver.js",
                            "icon": "https://kamranahmed.info/driver.js/favicon.png",
                            "name": "Driver.js",
                            "description": "引导页插件"
                        },
                        {
                            "homePage": "https://sindresorhus.com/screenfull/,https://github.com/sindresorhus/screenfull",
                            "icon": "",
                            "name": "screenfull",
                            "description": "全屏插件"
                        },
                        {
                            "homePage":"https://cdn.jsdelivr.net/npm/qs/dist/qs.min.js",
                            "icon":"",
                            "name":"qj",
                            "description":"格式化数据，请求springboot"
                        },
                        {
                            "homePage":"https://www.jimureport.com/reportDemo",
                            "icon":"https://www.jimureport.com/favicon.ico",
                            "name":"积木报表官网",
                            "description":"大屏图标库"
                        }
                    ]
                },
                {
                    "tagType": "Three.js",
                    "tagList": [

                        {
                            "homePage":"http://webgl3d.cn/",
                            "icon":"http://webgl3d.cn/favicon.ico",
                            "name":"Three.js中文网",
                            "description":""
                        },
                        {
                            "homePage":"https://www.carstenmell.com/",
                            "icon":"",
                            "name":"Carsten Mell Illustration, Illustrator und Comiczeichner",
                            "description":"该网站主要展示插画师 Carsten Mell 的个人作品与服务，包括插图、漫画和相关艺术项目。"
                        },
                        {
                            "homePage":"https://victor-marin.dev/",
                            "icon":"https://victor-marin.dev/assets/Favicon/favicon-32x32.png",
                            "name":"Victor Marin",
                            "description":"这是一份交互式简历。"
                        },
                        {
                            "homePage":"https://neon-city.netlify.app/",
                            "icon":"https://neon-city.netlify.app/53e9dbc3bb014f8c.ico",
                            "name":"霓虹城",
                            "description":"作者用 Three.js 和 Blender 制作的 3D 交互式作品集。灯红酒绿的霓虹城，鲜艳夺目的色彩、动态变幻的图案和文字装点着建筑物的轮廓、招牌、广告牌以及街头巷尾，在夜晚展现出独特的魅力。"
                        },
                        {
                            "homePage":"https://www.pranavaa.com/",
                            "icon":"https://www.pranavaa.com/favicon.ico",
                            "name":"pranavaa",
                            "description":"一位充满故事的男人的个人网站"
                        },
                        {
                            "homePage":"https://yapacdev.com/",
                            "icon":"https://yapacdev.com/icon.ico?85dcaf7693c91119",
                            "name":"Yapac",
                            "description":"作者从使用纯 HTML + JS + Three.js 更新为使用 React.js + Three.js。一个非常年轻的软件工程师，02年出生在摩洛哥。"
                        },
                        {
                            "homePage":"https://thesigner.pl/",
                            "icon":"https://thesigner.pl/favicon-32x32.40cc04e5.png",
                            "name":"thesigner",
                            "description":"一个具有 Three.js 背景的简单个人展示页面。在滚动中过渡两个简单的元素，加上光影效果，科技感十足。"
                        },
                        {
                            "homePage":"https://ivankapunac.com/",
                            "icon":"",
                            "name":"Ivan Kapunac",
                            "description":"露营小屋为主题的个人网站，采用Three.js作为核心技术，将呈现出一个沉浸式、交互式的3D虚拟环境，让用户仿佛置身于宁静而充满自然气息的露营场景之中。"
                        },
                        {
                            "homePage":"https://rahulvuppala.in/",
                            "icon":"https://rahulvuppala.in/images/code.png",
                            "name":"Rahul Vuppala",
                            "description":"简约干净的作品集网站。"
                        },
                        {
                            "homePage":"https://gamemcu.com/su7/",
                            "icon":"https://gamemcu.com/favicon.ico",
                            "name":"小米su7",
                            "description":"小米su7在线体验网站，查看风阻、定制皮肤，展示狂飙动态。"
                        }
                    ]
                },
                {
                    "tagType": "实例库",
                    "tagList": [
                        {
                            "homePage": "https://www.handsome-css.com/buttons,https://github.com/ZiYi0414/handsome-css3-lib",
                            "icon": "https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico",
                            "name": "AwA Ui",
                            "description": "个人按钮、加载、开关、输出框、创想代码实例，方便快速构建个人前端应用。"
                        }
                    ]
                }


            ]
        },
        {
            "type": "软件",
            "icon": "fa fa-tv",
            "tag": [
                {
                    "tagType": "常用",
                    "tagList": [
                        {
                            "homePage": "https://im.qq.com/pcqq",
                            "icon": "https://qzonestyle.gtimg.cn/qzone/qzact/act/external/tiqq/logo.png",
                            "name": "QQ",
                            "description": "满满的青春回忆"
                        },
                        {
                            "homePage": "https://pc.weixin.qq.com/",
                            "icon": "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
                            "name": "微信",
                            "description": "生活离不开"
                        },
                        {
                            "homePage": "https://page.dingtalk.com/wow/z/dingtalk/simple/ddhomedownlaod,https://open.dingtalk.com/document/resourcedownload/h5-debug",
                            "icon": "https://gw.alicdn.com/imgextra/i3/O1CN01eMicSg1GVD4uXMWGv_!!6000000000627-73-tps-32-32.ico",
                            "name": "钉钉",
                            "description": ""
                        },
                        {
                            "homePage": "https://obsidian.md/",
                            "icon": "https://obsidian.md/favicon.ico",
                            "name": "obsidian",
                            "description": "个人知识库管理软件"
                        },
                        {
                            "homePage": "https://github.com/notepad-plus-plus/notepad-plus-plus/releases,https://github.com/dail8859/NotepadNext",
                            "icon": "https://images.sftcdn.net/images/t_app-logo-xl,f_auto/p/311d9b92-96d2-11e6-b5e8-00163ed833e7/2186182379/notepad-plus-11194__notepad-plus-plus-icon.png",
                            "name": "Notepad++",
                            "description": "好用的文本编辑器"
                        },
                        {
                            "homePage": "https://zh.snipaste.com/",
                            "icon": "https://zh.snipaste.com/favicon.ico",
                            "name": "snipaste",
                            "description": "轻量级截图工具，缺少不支持长截图"
                        },
                        {
                            "homePage":"https://pixpinapp.com/,https://txc.qq.com/products/614512/",
                            "icon":"https://txc.qq.com/favicon.ico",
                            "name":"pixpin",
                            "description":"新型截图软件，支持文字识别和长截图"
                        },
                        {
                            "homePage": "https://www.huorong.cn/person5.html?v=1",
                            "icon": "https://www.huorong.cn/favicon.ico",
                            "name": "火绒",
                            "description": "简洁好用的安全防护软件"
                        },
                        {
                            "homePage": "http://www.bandisoft.com/",
                            "icon": "http://www.bandisoft.com/favicon.ico",
                            "name": "bandzip",
                            "description": "好用的文件或文件夹压缩软件，不建议官网"
                        },
                        {
                            "homePage":"https://7-zip.org/",
                            "icon":"https://7-zip.org/favicon.ico",
                            "name":"7-Zip",
                            "description":"免费好用的压缩软件"
                        },
                        {
                            "homePage": "https://www.blender.org/download/",
                            "icon": "https://www.blender.org/favicon.ico",
                            "name": "blender",
                            "description": "开源3D建模、渲染、动画软件，可以做动漫和游戏"
                        },
                        {
                            "homePage": "http://activity.ths123.com/html/xb/160809/index.html",
                            "icon": "http://activity.ths123.com/favicon.ico",
                            "name": "同花顺远航版",
                            "description": ""
                        },
                        {
                            "homePage":"https://download.10jqka.com.cn/",
                            "icon":"https://download.10jqka.com.cn/favicon.ico",
                            "name":"同花顺软件库",
                            "description":""
                        },
                        {
                            "homePage":"https://www.gaomon.cn/plus/list.php?tid=10&hao=M6",
                            "icon":"https://www.gaomon.cn/favicon.ico",
                            "name":"高漫官网",
                            "description":"数位板驱动官网"
                        },
                        {
                            "homePage":"https://obsproject.com/zh-cn",
                            "icon":"https://obsproject.com/favicon-32x32.png",
                            "name":"OBS Studio",
                            "description":"开源录屏直播软件"
                        },
                        {
                            "homePage":"https://learn.microsoft.com/zh-cn/sysinternals/downloads/zoomit",
                            "icon":"https://learn.microsoft.com/favicon.ico",
                            "name":"zoomit",
                            "description":"屏幕缩放、批注和录制工具，用于包括应用程序演示的技术演示文稿。"
                        },
                        {
                            "homePage":"https://guanjia.lenovo.com.cn/",
                            "icon":"https://guanjia.lenovo.com.cn/favicon.ico",
                            "name":"联想电脑",
                            "description":""
                        },
                        {
                            "homePage":"https://calibre-ebook.com/",
                            "icon":"https://calibre-ebook.com/favicon.ico",
                            "name":"calibre",
                            "description":"电子书阅读器，python语言开发，支持多种文件格式"
                        },
                        {
                            "homePage":"http://www.haoxg.net/ediary/index.html",
                            "icon":"",
                            "name":"Ediary",
                            "description":"更新二十几年的个人日记软件，安装包小，支持加密，功能丰富。"
                        },
                        {
                            "homePage":"https://www.sumatrapdfreader.org/downloadafter",
                            "icon":"https://www.sumatrapdfreader.org/favicon.ico",
                            "name":"Sumatra PDF",
                            "description":"轻量简洁的阅读器，速度很快。PDF、EPUB、MOBI、XPS、DjVu、CBZ、CBR、CHM 等格式支持超级全面"
                        }
                    ]
                },
                {
                    "tagType": "windows工具",
                    "tagList": [
                            {
                                "homePage":"https://getquicker.net/",
                                "icon":"https://getquicker.net/favicon.ico",
                                "name":"Quicker",
                                "description":"自定快速唤醒菜单，支持ocr，支持自定义动作，支持插件库，很牛。"
                            },
                            {
                                "homePage":"https://geekuninstaller.com/download",
                                "icon":"https://geekuninstaller.com/favicon.ico",
                                "name":"Geek",
                                "description":"干净卸载软件工具"
                            },
                            {
                                "homePage":"http://www.xabyb.com/",
                                "icon":"",
                                "name":"追光护眼",
                                "description":"国内免费护眼软件"
                            },
                            {
                                "homePage":"https://justgetflux.com/",
                                "icon":"https://justgetflux.com/favicon.ico",
                                "name":"f.lux",
                                "description":"国外免费护眼软件"
                            },
                            {
                                "homePage":"https://www.tbtool.cn/",
                                "icon":"https://www.tbtool.cn/favicon.ico",
                                "name":"图吧工具箱",
                                "description":""
                            },
                            {
                                "homePage": "https://www.diskanalyzer.com/download",
                                "icon": "https://www.diskanalyzer.com/favicon-32x32.png",
                                "name": "WizTree",
                                "description": "磁盘清理工具"
                            },
                            {
                                "homePage": "https://ditto-cp.sourceforge.io/,https://github.com/sabrogden/Ditto/releases/",
                                "icon": "https://ditto-cp.sourceforge.io/Ditto2.png",
                                "name": "Ditto",
                                "description": "剪切板工具"
                            },
                            {
                                "homePage": "https://freefilesync.org/download.php",
                                "icon": "https://freefilesync.org/images/freefilesync.ico",
                                "name": "FreeFileSync",
                                "description": "文件同步"
                            },
                            {
                                "homePage":"https://www.carifred.com/quick_any2ico/",
                                "icon":"https://www.carifred.com/favicon.ico",
                                "name":"exe提取ico",
                                "description":"Quick Any2Ico 提取exe文件中的ico文件"
                            }
                        ]
                },
                {
                    "tagType": "浏览器",
                    "tagList": [
                        {
                            "homePage":"https://www.microsoft.com/zh-cn/edge",
                            "icon":"https://www.microsoft.com/favicon.ico",
                            "name":"Edge",
                            "description":""
                        },
                        {
                            "homePage":"https://www.google.cn/chrome/index.html",
                            "icon":"https://www.google.cn//chrome/static/images/favicons/favicon-16x16.png",
                            "name":"Chrome",
                            "description":"主流浏览器"
                        },
                        {
                            "homePage":"https://www.mozilla.org/zh-CN/firefox/",
                            "icon":"https://www.mozilla.org/media/img/favicons/firefox/browser/favicon-196x196.59e3822720be.png",
                            "name":"Firefox",
                            "description":""
                        },
                        {
                            "homePage":"https://github.com/ungoogled-software/ungoogled-chromium,https://ungoogled-software.github.io/ungoogled-chromium-binaries/",
                            "icon":"https://github.com/favicon.ico",
                            "name":"ungoogled-chromium",
                            "description":"官方chrome二次剪切"
                        },
                        {
                            "homePage":"https://www.waterfox.net/",
                            "icon":"https://www.waterfox.net/favicon.ico",
                            "name":"waterfox",
                            "description":"水狐浏览器和火狐同一个内核。"
                        },
                        {
                            "homePage":"https://gosub.io/,https://github.com/gosub-io/gosub-engine",
                            "icon":"https://gosub.io/favicon.ico",
                            "name":"Gosub",
                            "description":"rust重写的浏览器，开发中，等发包。"
                        },
                        {
                            "homePage":"https://browser.yandex.com/",
                            "icon":"https://browser.yandex.com/favicon.ico",
                            "name":"Yandex",
                            "description":"俄罗斯搜索引擎商 Yandex 开发的浏览器软件"
                        }
                    ]
                },
                {
                    "tagType": "浏览器设置",
                    "tagList": [
                        {
                            "homePage":"chrome://flags/",
                            "icon":"",
                            "name":"多线程下载",
                            "description":"chrome://flags/，设置 Enable download bubble为enabled"
                        },
                        {
                            "homePage":"chrome://version/",
                            "icon":"",
                            "name":"查看浏览器信息",
                            "description":"chrome://version/，查看浏览器版本和数据存储位置"
                        }
                    ]
                },
                {
                    "tagType": "浏览器插件库",
                    "tagList": [
                        {
                            "homePage":"https://www.chajianxw.com/",
                            "icon":"https://www.chajianxw.com/static/favicon.ico",
                            "name":"插件小屋",
                            "description":"Chrome插件,谷歌浏览器扩展下载,Chrome应用商店,离线安装包下载,crx扩展安装"
                        },
                        {
                            "homePage":"https://chrome.zzzmh.cn/extension",
                            "icon":"https://chrome.zzzmh.cn/favicon.ico",
                            "name":"极简插件",
                            "description":"chrome插件库"
                        }
                    ]
                },
                {
                    "tagType": "浏览器插件",
                    "tagList": [
                        {
                            "homePage":"https://greasyfork.org/zh-CN/scripts/449291-%E6%94%B9-%E7%BD%91%E7%9B%98%E7%9B%B4%E9%93%BE%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B",
                            "icon":"https://greasyfork.org/vite/assets/blacklogo16-bc64b9f7.png",
                            "name":"下载助手",
                            "description":""
                        },
                        {
                            "homePage":"https://immersivetranslate.com/",
                            "icon":"https://immersivetranslate.com/img/favicon.svg",
                            "name":"沉浸式翻译",
                            "description":"好用的翻译插件"
                        },
                        {
                            "homePage":"https://docs.scriptcat.org/docs/use/,https://scriptcat.org/zh-CN/",
                            "icon":"https://docs.scriptcat.org//img/logo.png",
                            "name":"ScriptCat",
                            "description":"类似油猴工具，可执行自定义脚本。"
                        }
                    ]
                },
                {
                    "tagType": "图片编辑",
                    "tagList": [
                        {
                            "homePage":"https://krita.org/zh/download-zh/krita-desktop-zh/,https://github.com/KDE/krita,https://docs.krita.org/zh_CN/",
                            "icon":"https://github.com/favicon.ico",
                            "name":"krita",
                            "description":"偏手绘的免费开源软件，建议ps一套搞定。"
                        },
                        {
                            "homePage":"https://gitlab.gnome.org/GNOME/gimp",
                            "icon":"https://github.com/favicon.ico",
                            "name":"gimp",
                            "description":"偏向照片处理的图像软件，建议ps一套搞定。"
                        }
                    ]
                },
                {
                    "tagType": "图片查看",
                    "tagList": [
                        {
                            "homePage":"https://www.irfanview.com/",
                            "icon":"https://www.irfanview.com/favicon.ico",
                            "name":"IrfanView",
                            "description":"体量小速度快的图片查看器。"
                        },
                        {
                            "homePage":"http://www.softerviews.org/FastStoneViewer.html",
                            "icon":"http://www.softerviews.org/favicon.ico",
                            "name":"FastStoneViewer",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "数据恢复",
                    "tagList": [
                        {
         
                            "homePage":"https://www.ccleaner.com/zh-cn/recuva",
                            "icon":"https://www.ccleaner.com/favicon.ico",
                            "name":"Recuva",
                            "description":"国外免费数据恢复软件"
                        }
                    ]
                },
                {
                    "tagType": "素材管理",
                    "tagList": [

                        {
                            "homePage":"https://www.billfish.cn/",
                            "icon":"https://www.billfish.cn/favicon.ico",
                            "name":"Billfish",
                            "description":"国产免费资源管理软件，开发技术Qt+SQLit"
                        },
                        {
                            "homePage":"https://eagle.cool/",
                            "icon":"https://eagle.cool/favicon.ico",
                            "name":"eagle",
                            "description":"国产商用资源管理软件，开发技术：Electron+json"
                        },
                        {
                            "homePage":"https://www.digikam.org/",
                            "icon":"https://www.digikam.org/favicon.ico",
                            "name":"digiKam",
                            "description":"国外免费资源管理"
                        }
                    ]
                },
                {
                    "tagType": "视频",
                    "tagList": [
                        {
                            "homePage":"https://www.shotcut.org/",
                            "icon":"https://www.shotcut.org//assets/img/favicon.ico",
                            "name":"Shotcut",
                            "description":"视频剪辑"
                        },
                        {
                            "homePage":"https://www.capcut.cn/",
                            "icon":"https://lf-cdn-tos.bytescm.com/obj/static/ies/ulike/web/resource/fe_official/assets/imgs/lv/favicon.ico",
                            "name":"剪映",
                            "description":"抖音旗下视频剪辑软件"
                        },
                        {
                            "homePage": "https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup64.exe",
                            "icon": "https://bkimg.cdn.bcebos.com/pic/f636afc379310a55764bc76ebe4543a982261038?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_auto",
                            "name": "potPlayer",
                            "description": "好用的视频播放软件"
                        },
                        {
                            "homePage":"https://olivevideoeditor.org/,https://github.com/olive-editor/olive",
                            "icon":"https://olivevideoeditor.org/img/olive-adaptive.svg",
                            "name":"olive",
                            "description":"开发中一款免费、开源的非线性视频剪辑工具。非线性视频剪辑是指将图片、音乐、特效等素材与视频进行混合编辑，虽然该项目完全免费"
                        }
                    ]
                },
                {
                    "tagType": "在线软件",
                    "tagList": [
                        {
                            "homePage":"https://www.zhixi.com/",
                            "icon":"https://www.zhixi.com/favicon.ico",
                            "name":"知犀思维导图",
                            "description":"支持网页和本地的脑图工具"
                        },
                        {
                            "homePage":"https://jiashuiyin.com/,https://github.com/pdmaker/watermark-master",
                            "icon":"https://jiashuiyin.com/images/favicon.ico",
                            "name":"加水印",
                            "description":"图片添加水印"
                        },
                        {
                            "homePage":"https://icraft.gantcloud.com/zh-CN",
                            "icon":"https://icraft.gantcloud.com/favicon.ico",
                            "name":"iCraft Editor",
                            "description":"3D架构图绘制工具"
                        },
                        {
                            "homePage":"https://design.palxp.cn/home,https://github.com/palxiao/poster-design",
                            "icon":"https://design.palxp.cn:5175/static/1730043322678_913969.ico",
                            "name":"迅排设计",
                            "description":"在线海报设计软件"
                        },
                        {
                            "homePage":"https://tools.miku.ac/",
                            "icon":"https://mikutools.cdn.hatsune.tech/icons/icon_64x64.3ecd30.png",
                            "name":"MikuTools",
                            "description":"在线工具网站，涵盖热门、数据转换、图片相关、文字处理、编程开发"
                        }
                    ]
                },
                {
                    "tagType": "办公",
                    "tagList": [
                        {
                            "homePage": "https://github.com/jgraph/drawio-desktop/releases",
                            "icon": "https://www.diagrams.net/favicon.ico",
                            "name": "drawio",
                            "description": "流程图软件"
                        },
                        {
                            "homePage":"https://www.wps.cn/",
                            "icon":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ2SURBVHgB7Va9biRFEK7qWa9XAuSByMEhr0FIzvARkEBgEUHEPQG79wKcTyL3Li/gnxdgl5TgTAQSQmeJxEJCIoIjOc/JyemSW4tbe70z28XX1T0z+zO2U6RzWe3unq6un6+/rl6iW7mV111Y7tzZImMekVAcvkm+NqUnxZy1S0jsQz49PdTF3Q82ych3WNzM1dM/Msp+S4UviQ32RHDlBm5MIgJrz9Bvs6y9e4Ida3MOvRXGnxRTyb2HgM6I/13nZDCQb98/IcNNtQC19J8JXf46InWM5npjfM/qnJ1dtVGjSOLgKkQWnMz4y+clcmgx2TiWb955QENpFsBhT/r7SDhymZMwEnfKOjbiFcSSRuO+k7F7FFk4xsdIECZ6xtxg7HqeuHFYQ583lh59Dgvn0qZXmL/CviGy/3tM9gJOoYPmehcMcaR7vE03Vj9yyNJsxlQf4xgkLrNFUCnvEzUwGZUoRDjjiB7peCzr9Gm9hflOgRokfZHdnfw1HPi9+X/IMu8CpHsznIIN3SgbqzvoOiXAMgBgd/nJ84TmibGx+pgcCTeoS9HSY5hpFnwh6vEPp/cr9jidE3/M+Vfb4ycv7hsf5mifzOQlYPFwM87X2B2qlq62kWnRhW3SOaC8sExDHFUadSt3OFsecg+9csGorgbAfw4GVOMDPef8fCJpy0bcnLcFVI5oFYORbcMpaQBD6/o+HybJYvawAVs4Kgq2Hd96ObqmjHK8h8gGgYw+yuWoGoXzrEXnE2SfCQ0zN3dUqc7e2VAyB0LjdtBSWugWASgK7G7EFNONtGRzFgWdp7JNKYxlCBYd+h4fP0+wFi/oGmp7ZK1WI/jowleyEIAXCy7Yl8UxGGyIzCwKjvXGxj5AZxAR2ElXPorbVDPbs7qmExKRcLUTR75plZkAFIVIDvQY3CYlpW3nKBQZ6VqoGUb6oOwgBPa1bHkUVJcnXwUd9hwAUlPZVyAAGZPnQl6UXBDLsqtrDdvReV6UHFKRuxH2AeZwCGTc2MkymO9JnSfyDN768+4WAggo7IWKxeH8vpRP3mo5TpQVUYPrBSttrabujI1sy8dvfIixZ76x3gajRhzPZq/+qEIUxjR9igr3NlVKqChZtk6NxgC9e9A8AUWL0hn+r+QvDPQTytLP+HiU3IiAmj8KXCh5IEWR8mN9C5xB1a3RfnFz/NGtTL0d7v39vsr5lQH4lTq4YM+U6aVxCuQD3JOpe19zuoNQwALp8qtsE6plvSvdXLWgmRnZL1isJXoSXjLu81GZUaGrL14otVrQ0Eg607oLfugakS2c61L9qf5a8i+e6O+CzLw3b1R1a3XHhZWp1zHhXy7Xr/NhrlvkI73fB2Vh0vvcr8pIdR0Xpisp49reILWbFPjncUe+qK0g83vK5tGbD12xqJQR3pPG0hrq8xZQ+JF/yvp0K7fyf5f/AKzIO6StcaNfAAAAAElFTkSuQmCC",
                            "name":"WPS",
                            "description":"国产办公软件，支持多种文件编码格式。"
                        },
                        {
                            "homePage":"https://www.todesk.com/",
                            "icon":"https://www.todesk.com/favicon.ico",
                            "name":"ToDesk",
                            "description":"国内远程控制软件"
                        },
                        {
                            "homePage":"https://sunlogin.oray.com/",
                            "icon":"https://sunlogin.oray.com/favicon.ico",
                            "name":"向日葵",
                            "description":"远程控制软件"
                        },
                        {
                            "homePage": "https://www.wireshark.org/download.html",
                            "icon": "https://www.wireshark.org/favicon.ico",
                            "name": "wireShark",
                            "description": ""
                        },
                        {
                            "homePage": "https://mobaxterm.mobatek.net/download-home-edition.html",
                            "icon": "https://mobaxterm.mobatek.net/favicon.ico",
                            "name": "MobaXterm",
                            "description": "新一代免费ssh工具，有免费和收费两个版本"
                        },
                        {
                            "homePage":"https://github.com/spieglt/FlyingCarpet",
                            "icon":"https://github.com/favicon.ico",
                            "name":"FlyingCarpet",
                            "description":"Rust开发多平台文件互传工具"
                        },
                        {
                            "homePage":"https://note.youdao.com/note-download",
                            "icon":"https://note.youdao.com/favicon.ico",
                            "name":"有道云笔记",
                            "description":"建议用历史版本"
                        },
                        {
                            "homePage":"https://sandboxie-plus.com/",
                            "icon":"",
                            "name":"Sandboxie",
                            "description":"windows沙盒程序"
                        },
                        {
                            "homePage":"https://www.frp.cool/",
                            "icon":"https://www.frp.cool/favicon.ico",
                            "name":"浮居内网穿透",
                            "description":"有一定免费额度的内网穿透服务。"
                        },
                        {
                            "homePage":"https://ffmpeg.org/download.html#build-windows,https://www.gyan.dev/ffmpeg/builds/",
                            "icon":"https://ffmpeg.org/favicon.ico",
                            "name":"ffmpeg",
                            "description":"ffmpeg文件处理程序下载地址"
                        },
                        {
                            "homePage":"https://github.com/svenstaro/genact",
                            "icon":"https://github.com/favicon.ico",
                            "name":"genact",
                            "description":"摸鱼神器"
                        },
                        {
                            "homePage":"https://www.yingdao.com/",
                            "icon":"https://winrobot-pub-a-oss.winrobot360.com/static/home/favicon.ico",
                            "name":"影刀RPA",
                            "description":"按键精灵增强版官产软件"
                        }
                    ]
                },
                {
                    "tagType": "网盘",
                    "tagList": [
                        {
                            "homePage": "https://www.aliyundrive.com/sign/in",
                            "icon": "https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico",
                            "name": "阿里云盘",
                            "description": "国内良心云盘"
                        },
                        {
                            "homePage": "https://pan.baidu.com/disk/main",
                            "icon": "https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico",
                            "name": "百度云盘",
                            "description": "食之无用弃之可惜"
                        },
                        {
                            "homePage":"https://www.microsoft.com/zh-cn/microsoft-365/onedrive/download",
                            "icon":"https://www.microsoft.com/favicon.ico",
                            "name":"OneDrive",
                            "description":""
                        },
                        {
                            "homePage":"https://pan.quark.cn/",
                            "icon":"https://pan.quark.cn/favicon.ico",
                            "name":"夸克网盘",
                            "description":"夸克网盘"
                        },
                        
                        {
                            "homePage":"https://repo.jellyfin.org/?path=/server/windows/latest-stable/amd64",
                            "icon":"https://repo.jellyfin.org/favicon.ico",
                            "name":"Jellyfin",
                            "description":"Nax资源管理软件"
                        },
                        {
                            "homePage":"https://alist.nn.ci/zh/,https://alist.nn.ci/zh/guide/webdav.html",
                            "icon":"https://alist.nn.ci/favicon.ico",
                            "name":"alist",
                            "description":"golang开发的一个支持多种存储的文件列表程序，使用 Gin 和 Solidjs。"
                        }
                    ]
                },
                {
                    "tagType": "IDE",
                    "tagList": [
                        {
                            "homePage": "https://www.eclipse.org/downloads/packages/",
                            "icon": "https://www.eclipse.org/downloads/packages/sites/all/themes/solstice/_themes/solstice_packages/favicon.ico",
                            "name": "Eclipse",
                            "description": "java开源开发工具。"
                        },
                        {
                            "homePage": "https://code.visualstudio.com/",
                            "icon": "https://code.visualstudio.com/favicon.ico",
                            "name": "VScode",
                            "description": "微软开源文本编辑器"
                        },
                        {
                            "homePage": "https://www.jetbrains.com/idea/",
                            "icon": "https://www.jetbrains.com/apple-touch-icon.png",
                            "name": "Idea",
                            "description": "智能提示开发软件"
                        },
                        {
                            "homePage":"https://developer.android.google.cn/studio/",
                            "icon":"https://developer.android.google.cn/favicon.ico",
                            "name":"Android Studio",
                            "description":"谷歌安卓应用开发工具，主推语言kotlin"
                        },
                        {
                            "homePage":"https://visualstudio.microsoft.com/zh-hans/",
                            "icon":"https://visualstudio.microsoft.com/wp-content/uploads/2017/02/Microsoft-favicon.png",
                            "name":"Visual Studio",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "桌面软件",
                    "tagList": [
                        {
                            "homePage": "https://mylivewallpapers.com/how-to-set-live-wallpaper-for-your-desktop-using-mlwapp/",
                            "icon": "https://mylivewallpapers.com/wp-content/uploads/fbrfg/favicon-32x32.png",
                            "name": "MLWapp",
                            "description": "myLivewallpaper发布免费桌面壁纸软件"
                        },
                        {
                            "homePage":"https://zmde.yijoys.com/,https://store.steampowered.com/app/3003300/_/",
                            "icon":"https://zmde.yijoys.com/favicon.ico",
                            "name":"战盟桌面精灵",
                            "description":""
                        },
                        {
                            "homePage":"https://n0va.mihoyo.com/",
                            "icon":"https://n0va.mihoyo.com/favicon.ico",
                            "name":"人工桌面官方网站",
                            "description":"yoyo鹿鸣动态壁纸"
                        }
                    ]
                },

                {
                    "tagType": "阅读器",
                    "tagList": [
                        {
                            "homePage":"https://readest.com/,https://github.com/readest/readest",
                            "icon":"https://readest.com/icons/favicon.ico",
                            "name":"readest",
                            "description":"开源全平台现代阅读器，基于Tauri + Next.js 开发。"
                        }
                    ]
                },
                {
                    "tagType": "全平台",
                    "tagList": [
                        {
                            "homePage":"https://github.com/xiaohucode/yidaRule",
                            "icon":"https://github.com/favicon.ico",
                            "name":"益达",
                            "description":"rust+flutter开发的漫画小说阅读软件"
                        },
                        {
                            "homePage":"https://github.com/Predidit/Kazumi",
                            "icon":"https://github.com/favicon.ico",
                            "name":"kazumi",
                            "description":"flutter开发的多平台追番工具"
                        },
                        {
                            "homePage":"https://github.com/spieglt/FlyingCarpet",
                            "icon":"https://github.com/favicon.ico",
                            "name":"FlyingCarpet",
                            "description":"rust开发，使用ad-hoc技术，在无wifi热点情况下，实现跨平台设备间高速、加密传输文件。"
                        }
                    ]
                },
                {
                    "tagType": "下载工具",
                    "tagList": [
                        {
                            "homePage":"https://github.com/nilaoda/BBDown",
                            "icon":"https://github.com/favicon.ico",
                            "name":"BBDown",
                            "description":"B站资源下载工具"
                        },
                        {
                            "homePage":"https://www.neatdownloadmanager.com/index.php/en/",
                            "icon":"https://www.neatdownloadmanager.com/templates/neat/favicon.ico",
                            "name":"Neat Download Manager",
                            "description":"ide下载器免费替代版"
                        },
                        {
                            "homePage":"https://github.com/iawia002/lux",
                            "icon":"https://github.com/favicon.ico",
                            "name":"lux",
                            "description":"B站资源下载工具"
                        }
                    ]
                },
                {
                    "tagType": "内网穿透",
                    "tagList": [
                        {
                            "homePage":"https://github.com/EasyTier/EasyTier/blob/main/README_CN.md,https://blog.ysicing.net/easytier",
                            "icon":"https://github.com/favicon.ico",
                            "name":"EasyTier",
                            "description":"rust开发内网穿透软件，基于p2p技术，无需公网ip。"
                        },
                        {
                            "homePage":"https://github.com/fatedier/frp",
                            "icon":"https://github.com/favicon.ico",
                            "name":"frp",
                            "description":"需要外网服务器做通信中转"
                        },
                        {
                            "homePage":"https://www.zerotier.com/",
                            "icon":"https://www.zerotier.com/wp-content/uploads/2024/05/favicon-32x32-1.png",
                            "name":"zerotier",
                            "description":"国外异地组网方案，网络延迟大。"
                        }
                    ]
                },
                {
                    "tagType": "安卓",
                    "tagList": [
                        {
                            "homePage": "https://www.vmos.cn/",
                            "icon": "https://www.vmos.cn/media/static/images/icon.png",
                            "name": "VMOS",
                            "description": "安卓虚拟机软件"
                        },
                        {
                            "homePage": "https://www.viayoo.com/zh-cn/",
                            "icon": "https://www.viayoo.com/zh-cn/images/logo.png",
                            "name": "via浏览器",
                            "description": "小浏览器"
                        },
                        {
                            "homePage":"https://kiwibrowser.com/",
                            "icon":"https://kiwibrowser.com/wp-content/uploads/2019/09/kiwibrowserlogo-300x300.png",
                            "name":"kiwi浏览器",
                            "description":"手机端浏览器支持chrome插件"
                        },
                        {
                            "homePage": "https://f-droid.org/en/packages/com.termux/",
                            "icon": "",
                            "name": "termux",
                            "description": "手机端linux控制软件"
                        },
                        {
                            "homePage": "https://github.com/Sangwan5688/BlackHole",
                            "icon": "https://github.com/favicon.ico",
                            "name": "blackhole",
                            "description": "github开源音乐app"
                        },
                        {
                            "homePage": "https://github.com/wangchenyan/ponymusic",
                            "icon": "https://github.com/favicon.ico",
                            "name": "ponymusic",
                            "description": "github开源音乐app"
                        },
                        {
                            "homePage":"https://gedoor.github.io/download",
                            "icon":"https://gedoor.github.io/img/logo.png",
                            "name":"开源阅读",
                            "description":"github开源小说、图书阅读软件"
                        },
                        {
                            "homePage":"https://github.com/xiaoyaocz/dart_simple_live",
                            "icon":"https://github.com/favicon.ico",
                            "name":"dart_simple_live",
                            "description":"多平台视频直播软件"
                        },
                        {
                            "homePage":"https://github.com/zfdang/Android-Touch-Helper",
                            "icon":"https://github.com/favicon.ico",
                            "name":"Android-Touch-Helper",
                            "description":"github开源开屏广告跳过app"
                        },
                        {
                            "homePage":"https://github.com/gkd-kit/gkd",
                            "icon":"https://github.com/favicon.ico",
                            "name":"gkd",
                            "description":"kitlin开发 自定义屏幕点击的 Android 应用。该项目是基于无障碍功能的手机自动点击工具，支持自定义或订阅点击规则，可用来自动完成点击跳过广告、同意按钮、领红包等操作。"
                        },
                        {
                            "homePage":"https://www.dangbei.com/apps/",
                            "icon":"https://www.dangbei.com/favicon.ico",
                            "name":"当贝市场",
                            "description":"电视机应用市场"
                        },
                        {
                            "homePage":"https://www.wandoujia.com/",
                            "icon":"https://www.wandoujia.com/favicon.ico",
                            "name":"豌豆荚",
                            "description":""
                        },
                        {
                            "homePage":"https://github.com/guozhigq/pilipala",
                            "icon":"https://github.com/favicon.ico",
                            "name":"pilipala",
                            "description":"flutter开发开源b站客户端"
                        },
                        {
                            "homePage":"https://czy0729.github.io/Bangumi-Storybook/storybook-static/iframe.html?id=screens-discovery--discovery&viewMode=story,https://github.com/czy0729/Bangumi",
                            "icon":"https://github.com/favicon.ico",
                            "name":"Bangumi",
                            "description":"一个无广告、以爱好为驱动、不以盈利为目的、专门做 ACG 的类似豆瓣的追番记录，bgm.tv 第三方客户端。为移动端重新设计，内置大量加强的网页端难以实现的功能，且提供了相当的自定义选项。 目前已适配 iOS / Android / WSA、mobile / 简单 pad、light / dark theme、移动端网页。"
                        }
                    ]
                },
                {
                    "tagType": "软件库",
                    "tagList": [
                        {
                            "homePage": "https://sspai.com/",
                            "icon": "https://cdn-static.sspai.com/favicon/sspai.ico",
                            "name": "少数派",
                            "description": "综合软件下载"
                        },
                        {
                            "homePage":"https://www.32r.com/",
                            "icon":"https://www.32r.com/favicon.ico",
                            "name":"3322软件库",
                            "description":"国内pc、手机端软件库。"
                        },
                        {
                            "homePage": "https://masuit.com/",
                            "icon": "https://masuit.com/favicon.png",
                            "name": "懒得勤快",
                            "description": "个人开源软件"
                        },
                        {
                            "homePage":"https://www.qijishow.com/down/index.html",
                            "icon":"https://www.qijishow.com/../img/ico.ico",
                            "name":"奇迹秀工具箱",
                            "description":"设计和动画等资软件综合资源网站"
                        },
                        {
                            "homePage": "https://www.weidown.com/",
                            "icon": "https://www.weidown.com/favicon.ico",
                            "name": "微当下载",
                            "description": "综合软件下载"
                        },
                        {
                            "homePage": "http://www.dayanzai.me/",
                            "icon": "http://www.dayanzai.me/favicon.ico",
                            "name": "大眼仔",
                            "description": "综合软件下载"
                        },
                        {
                            "homePage": "https://www.ghxi.com/",
                            "icon": "https://www.ghxi.com/favicon.ico",
                            "name": "果核剥离",
                            "description": "综合软件下载"
                        },
                        {
                            "homePage": "https://www.ypojie.com/",
                            "icon": "https://www.ypojie.com/favicon.ico",
                            "name": "破亿姐",
                            "description": "综合软件下载"
                        }

                    ]
                }
            ]
        },
        {
            "type": "学习",
            "icon": "fa fa-pencil-square-o",
            "tag": [
                {
                    "tagType": "学习网站",
                    "tagList": [
                        {
                            "homePage":"https://www.51zxw.net/",
                            "icon":"https://www.51zxw.net/favicon.ico",
                            "name":"我要自学网",
                            "description":""
                        },
                        {
                            "homePage":"https://study.163.com/",
                            "icon":"https://study.163.com/favicon.ico",
                            "name":"网易云课堂",
                            "description":""
                        },
                        {
                            "homePage":"https://open.163.com/",
                            "icon":"https://open.163.com/favicon.ico",
                            "name":"网易公开课",
                            "description":""
                        },
                        {
                            "homePage":"https://www.xuetangx.com/",
                            "icon":"https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0329/logo.ico",
                            "name":"学堂在线",
                            "description":"精品在线课程学习平台"
                        },
                        {
                            "homePage":"https://www.icourse163.org/",
                            "icon":"https://edu-image.nosdn.127.net/32a8dd2a-b9aa-4ec9-abd5-66cd8751befb.png?imageView&quality=100",
                            "name":"中国大学MOOC",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType":"独立开发",
                    "tagList":[
                        {
                            "homePage":"https://github.com/yaolifeng0629/Awesome-independent-tools?tab=readme-ov-file",
                            "icon":"https://github.com/favicon.ico",
                            "name":"独立开发者",
                            "description":"独立开发者前后端框架库总结整理。"
                        }
                    ]
                },
                {
                    "tagType":"实践项目",
                    "tagList":[
                        {
                            "homePage":"https://wyag-zh.hanyujie.xyz/",
                            "icon":"https://wyag-zh.hanyujie.xyz/favicon.ico",
                            "name":"自己手写git",
                            "description":""
                        },
                        {
                            "homePage":"https://learning-guide.gitbook.io/system-design-interview",
                            "icon":"https://learning-guide.gitbook.io/system-design-interview/~gitbook/icon?size=small&theme=light",
                            "name":"系统设计面试：内幕指南",
                            "description":"系统设计"
                        }
                    ]
                },
                {
                    "tagType": "java",
                    "tagList": [
                        {
                            "homePage": "https://www.wdbyte.com/",
                            "icon": "https://www.wdbyte.com/static/fav.png",
                            "name": "未读代码",
                            "description": "jdk新语法，java源代码，spring boot，java性能分析等资源"
                        },
                        {
                            "homePage": "https://www.cnblogs.com/signheart/category/969720.html?page=1",
                            "icon": "https://common.cnblogs.com/favicon.svg",
                            "name": "多线程系列博客",
                            "description": "java高并发开发"
                        },
                        {
                            "homePage": "http://icyfenix.cn/",
                            "icon": "http://icyfenix.cn/favicon.ico",
                            "name": "凤凰框架",
                            "description": "企业级分布式，高可靠框架文档"
                        },
                        {
                            "homePage": "https://huanzi-qch.gitee.io/spring-boot/#/",
                            "icon": "https://huanzi-qch.gitee.io/file-server/images/logo.png",
                            "name": "Springboot系列",
                            "description": "详细spring boot构建项目与组件教程"
                        },
                        {
                            "homePage": "https://java.cunzaima.cn/",
                            "icon": "",
                            "name": "中文java教程",
                            "description": "包含java环境安装，部分工具库讲解，gui等这只"
                        }

                    ]
                },
                {
                    "tagType": "大数据",
                    "tagList": [

                        {
                            "homePage": "https://blog.csdn.net/zhanglong_4444/article/details/108821091",
                            "icon": "https://g.csdnimg.cn/static/logo/favicon32.ico",
                            "name": "HDFS源码分析",
                            "description": "CSDN平台hadoop 3.2.x源码分析"
                        }

                    ]
                },
                {
                    "tagType": "kotlin",
                    "tagList": [

                        {
                            "homePage":"https://book.kotlincn.net/",
                            "icon":"https://book.kotlincn.net/gitbook/images/favicon.ico",
                            "name":"kotlin文档",
                            "description":"动态更新得kotlin语言开发文档，从语法到框架。"
                        }

                    ]
                },
                {
                    "tagType": "前端",
                    "tagList": [

                        {
                            "homePage": "https://wangdoc.com/typescript/intro",
                            "icon": "https://wangdoc.com/assets/icons/favicon-32x32.png",
                            "name": "TypeScript",
                            "description": "typeScript教程"
                        }

                    ]
                },
                {
                    "tagType": "数据库开发",
                    "tagList": [

                        {
                            "homePage":"https://oceanbase.github.io/miniob/miniob-introduction.html,https://github.com/oceanbase/miniob",
                            "icon":"https://oceanbase.github.io/favicon.svg",
                            "name":"MiniOB",
                            "description":"国产数据库开发教程"
                        }

                    ]
                },
                {
                    "tagType": "python",
                    "tagList": [

                        {
                            "homePage": "https://github.com/jackfrued/Python-100-Days/",
                            "icon": "https://github.com/favicon.ico",
                            "name": "Python 100天",
                            "description": "Python系列知识总结，从小白到大神。"
                        }

                    ]
                },
                {
                    "tagType": "c",
                    "tagList": [

                        {
                            "homePage": "https://wangdoc.com/clang/index.html",
                            "icon": "https://wangdoc.com/assets/icons/favicon-32x32.png",
                            "name": "网道C教程",
                            "description": "C语言从基础到应用库"
                        },
                        {
                            "homePage":"https://learn.microsoft.com/zh-cn/cpp/c-language/?view=msvc-170",
                            "icon":"https://learn.microsoft.com/favicon.ico",
                            "name":"微软c教程",
                            "description":""
                        },
                        {
                            "homePage":"https://c.biancheng.net/c/",
                            "icon":"https://c.biancheng.net/favicon.ico",
                            "name":"C语言中文网",
                            "description":""
                        },
                        {
                            "homePage":"https://c-cpp.com/",
                            "icon":"https://c-cpp.com/icon.png",
                            "name":"C语言|C++中文网",
                            "description":""
                        }


                    ]
                },
                {
                    "tagType": "c++",
                    "tagList": [

                        {
                            "homePage": "https://github.com/applenob/Cpp_Primer_Practice",
                            "icon": "https://github.com/favicon.ico",
                            "name": "c++ Primer中文第五版",
                            "description": "github开源图书资源"
                        },
                        {
                            "homePage": "https://cntransgroup.github.io/EffectiveModernCppChinese/",
                            "icon": "https://cntransgroup.github.io/EffectiveModernCppChinese/favicon.svg",
                            "name": "Effective c++ ",
                            "description": "Effective在线图书"
                        },
                        {
                            "homePage":"https://learn.microsoft.com/zh-cn/cpp/cpp/?view=msvc-170",
                            "icon":"https://learn.microsoft.com/favicon.ico",
                            "name":"微软c++教程",
                            "description":""
                        }


                    ]
                },
                {
                    "tagType": "golang",
                    "tagList": [
                        {
                            "homePage": "https://www.topgoer.cn/",
                            "icon": "https://www.topgoer.cn/favicon.ico",
                            "name": "地鼠文档",
                            "description": "golang综合资源网站"
                        },
                        {
                            "homePage": "https://www.topgoer.com/",
                            "icon": "https://www.topgoer.com/gitbook/images/favicon.ico",
                            "name": "go前景文档",
                            "description": "golang语法文档"
                        },
                        {
                            "homePage": "https://chai2010.cn/advanced-go-programming-book/",
                            "icon": "https://chai2010.cn/favicon.ico",
                            "name": "Go语言高级编程",
                            "description": "高级golang语法教程"
                        }

                    ]
                },
                {
                    "tagType": "计算机",
                    "tagList": [
                        {
                            "homePage":"https://hackway.org/docs/cs/intro",
                            "icon":"https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/hackway/cs/ico.png",
                            "name":"计算机专业学习路线",
                            "description":"大神整理的计算机专业学习路线文档"
                        },
                        {
                            "homePage":"https://cpu.land/",
                            "icon":"https://cpu.land/favicon-on-dark.png",
                            "name":"CPU执行原理",
                            "description":"以文字加图片方式介绍cpu加载程序，执行程序的过程。"
                        }

                    ]
                },
                {
                    "tagType": "Rust",
                    "tagList": [
                        {
                            "homePage": "https://course.rs/about-book.html",
                            "icon": "https://course.rs/favicon.svg",
                            "name": "Rust语言圣经",
                            "description": "rust学习资料"
                        },
                        {
                            "homePage":"https://google.github.io/comprehensive-rust/",
                            "icon":"https://google.github.io/favicon.svg",
                            "name":"4天rust学习",
                            "description":"安卓团队发布的rust教程"
                        },
                        {
                            "homePage":"https://wubingzheng.github.io/build-lua-in-rust/zh/",
                            "icon":"https://wubingzheng.github.io/favicon.svg",
                            "name":"rust实现lua解释器",
                            "description":"rust实践开发lua解释器"
                        }

                    ]
                },
                {
                    "tagType": "汇编",
                    "tagList": [
                        {
                            "homePage":"https://zhuanlan.zhihu.com/p/674895448,https://zhuanlan.zhihu.com/p/588075416",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"汇编语言入门教程",
                            "description":"介绍汇编语言"
                        },
                        {
                            "homePage":"https://learn.microsoft.com/zh-cn/cpp/intrinsics/?view=msvc-170",
                            "icon":"https://learn.microsoft.com/favicon.ico",
                            "name":"微软汇编教程",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "zig",
                    "tagList": [
                        {
                            "homePage":"https://ziglang.org/zh-CN/",
                            "icon":"https://ziglang.org/favicon.ico",
                            "name":"Zig",
                            "description":"类c语言"
                        }

                    ]
                },
                {
                    "tagType": "视频剪辑",
                    "tagList": [
                        {
                            "homePage":"https://www.doyoudo.com/",
                            "icon":"https://www.doyoudo.com/favicon.ico",
                            "name":"doyoudo",
                            "description":"视频剪辑网站"
                        }

                    ]
                },
                {
                    "tagType": "数据结构与算法",
                    "tagList": [
                        {
                            "homePage": "https://www.hello-algo.com/,https://github.com/krahets/hello-algo",
                            "icon": "https://www.hello-algo.com/assets/images/favicon.png",
                            "name": "hello算法",
                            "description": "提供多种语言加动画的在线算法教程"
                        },
                        {
                            "homePage": "https://lookcos.cn/archives/1120.html",
                            "icon": "",
                            "name": "c数据结构",
                            "description": "C语言实现数据结构"
                        }

                    ]
                },
                {
                    "tagType": "latex",
                    "tagList": [
                        {
                            "homePage":"https://latex.lierhua.top/zh/docs/test/",
                            "icon":"",
                            "name":"latex教程",
                            "description":"在线中文文档"
                        }

                    ]
                },

                {
                    "tagType": "文档库",
                    "tagList": [
                        {
                            "homePage": "https://www.runoob.com/",
                            "icon": "https://static.runoob.com/images/icon/mobile-icon.png",
                            "name": "菜鸟教程",
                            "description": "包含编程语言、数据库、系统、建站等多种资源"
                        },
                        {
                            "homePage": "https://www.w3cschool.cn/tutorial",
                            "icon": "https://www.w3cschool.cn/statics/images/favicon.ico",
                            "name": "w3cschool",
                            "description": "综合文档网站，比菜鸟资源更加丰富"
                        }

                    ]
                },
                {
                    "tagType": "安全",
                    "tagList": [
                        {
                            "homePage": "https://wiki.teamssix.com/CloudSecurityResources/",
                            "icon": "https://wiki.teamssix.com/img/favicon.ico",
                            "name": "T Wiki",
                            "description": "安全云资源"
                        },
                        {
                            "homePage": "https://www.52pojie.cn/forum-68-1.html",
                            "icon": "https://www.52pojie.cn/favicon.ico",
                            "name": "无爱破解培训",
                            "description": "吾爱破解培训"
                        }

                    ]
                },
                {
                    "tagType": "个人知识库",
                    "tagList": [
                        {
                            "homePage": "https://wangchujiang.com/reference/",
                            "icon": "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%221em%22%20width%3D%221em%22%3E%20%3Cpath%20d%3D%22m21.66%2010.44-.98%204.18c-.84%203.61-2.5%205.07-5.62%204.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2%201.17-2.42%203.16-3.07%206.5-2.28l1.67.39c4.19.98%205.47%203.05%204.49%207.23Z%22%20fill%3D%22%23c9d1d9%22%2F%3E%20%3Cpath%20d%3D%22M15.06%2019.39c-.62.42-1.4.77-2.35%201.08l-1.58.52c-3.97%201.28-6.06.21-7.35-3.76L2.5%2013.28c-1.28-3.97-.22-6.07%203.75-7.35l1.58-.52c.41-.13.8-.24%201.17-.31-.3.61-.54%201.35-.74%202.2l-.98%204.19c-.98%204.18.31%206.24%204.48%207.23l1.68.4c.58.14%201.12.23%201.62.27Zm2.43-8.88c-.06%200-.12-.01-.19-.02l-4.85-1.23a.75.75%200%200%201%20.37-1.45l4.85%201.23a.748.748%200%200%201-.18%201.47Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3Cpath%20d%3D%22M14.56%2013.89c-.06%200-.12-.01-.19-.02l-2.91-.74a.75.75%200%200%201%20.37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3C%2Fsvg%3E",
                            "name": "reference",
                            "description": "个人结合nodejs+markdown开发个人知识库"
                        }

                    ]
                }

            ]
        },
        {
            "type": "操作系统",
            "icon": "fa fa-windows",
            "tag": [
                {
                    "tagType": "windows",
                    "tagList": [
                        {
                            "homePage": "https://hellowindows.cn/",
                            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEtklEQVR4nO3dUWpjVxBF0fciT8Mz8IA8Gw1IIzTY3HzZOI5Edz761CF3LRDoJyDoKtV+HTc+juNYXpnX9Xpdv3K73cY/506vvw7YmAUosNY61lrTH2NLT9MfYDefg36e57+G3hLkWYCw8zzvvmeGBAr7/i3vG3+eCzDMEsyyAGESqIsFCHv0EHzvoZg/zzPAgHvf/IZ/hgsQJoG6WIAwCdRFAg3xP8E6uABhsqeLBRjmm3+WBQgz8F0sQJgE6mIBhrkIsyxAmIHvYgHCJFAXCzDMRZhlAcIMfBcLECaBuliAYS7CLD8LFOafRHZxAcL8OHQXF4CtuQBha62vb34JNM8ChEmgLhKIrbkAYRKoiwUIk0BdJBBbcwHCJFAXCxAmgbpIILbmAoRJoC4WIEwCdZFAbM0FCJNAXSxAmATqIoHYmgsQJoG6WIAwCdRFArE1FyBMAnWxAGESqIsEYmsWgK1ZALZmAcLWWl8Pvx6C53kIDvMQ3MUFYGsWIEwCdZFAYRKoiwvA1ixAmATqIoHCJFAXF4CtWYAwCdRFAoVJoC4uAFuzAGESqIsECpNAXVwAtmYBwiRQFwkUJoG6uABszQKESaAuEihMAnVxAdiaBQiTQF0kUJgE6uICsDULECaBukigMAnUxQVgaxYgTAJ1kUBhEqiLC8DWLECYBOoigcIkUBcXgK1ZgDAJ1EUChUmgLi4AW3t6fX2d/gzbeHl5+cqe8zz/8UuzPz0/Px/+THLOdSdEf/4285+/2fzzD+933jvzNLubQI861TDzf/O1AD//duLR+//q+3/zJ9//7udve88sCcTWJBBbk0DD75klgdiaBGJrT29vb9OfYRuXy+W4XC7HcTy+kB8fH8f7+/vEx9vW8sq8rtfr+pXb7Tb+OXd6+WG4sEcPvt+fn8ixAGH3nqO+/8UBWX4atIDBn+MChEmgLhYgTAJ1kUAFDP4cFyBMAnWxAGESqIsEKmDw57gAYRKoiwUIk0BdJFABgz/HBQiTQF0sQJgE6iKBChj8OS5AmATqYgHCJFAXCVTA4M9xAcIkUBcLECaBukigAgZ/jgsQJoG6WIAwCdRFAhUw+HNcgDAJ1MUChEmgLhKogMGf4wKESaAuFiBMAnWRQAUM/hwXIEwCdbEAYRKoiwQqYPDnuABhEqiLBQiTQF0kUAGDP8cFCJNAXSxAmATqIoEKGPw5LkCYBOpiAcIkUBcJVMDgz3EBwiRQFwsQJoG6SKACBn+OCxAmgbpYgDAJ1EUCFTD4c1yAMAnUxQKESaAuEqiAwZ/jAoRJoC4WIEwCdZFABQz+HBcgTAJ1sQBhEqiLBCpg8Oe4AGESqIsFCJNAXSRQAYM/xwUIk0BdLECYBOoigQoY/DkuQJgE6mIBwiRQFwlUwODPcQHCJFAXCxAmgbpIoAIGf44LECaBuliAMAnURQIVMPhzXIAwCdTFAoRJoC4SqIDBn+MChEmgLhYgTAJ1kUAFDP4cFyBMAnWxAGESqIsEKmDw57gAYRKoiwUIk0BdJFABgz/HBQiTQF0sQJgE6iKBChj8OS5AmATqYgHCJFAXCVTA4M9xAcIkUBcLECaBukigAgZ/jgsQJoG6WIAwCdTlb1GxNPBTH75pAAAAAElFTkSuQmCC",
                            "name": "HelloWindow",
                            "description": "给予github搭建windows下载平台"
                        },
                        {
                            "homePage": "https://msdn.sjjzm.com/",
                            "icon": "",
                            "name": "山己几子木",
                            "description": "windows系列官网版下载地址"
                        },
                        {
                            "homePage":"https://www.pc521.net/",
                            "icon":"https://www.pc521.net/favicon.ico",
                            "name":"不忘初心博客-精简版系统官网",
                            "description":"第三方修改操作系统"
                        },
                        {
                            "homePage":"https://pan.baidu.com/s/1wjD8qQeos50vpHvRSHW7Qw?_at_=1633944395373#list/path=%2Fsharelink1975930430-244365294644948%2F9035&parentPath=%2Fsharelink1975930430-244365294644948",
                            "icon":"https://pan.baidu.com/m-static/base/static/images/favicon.ico",
                            "name":"百度网盘",
                            "description":""
                        },
                        {
                            "homePage":"https://atlasos.net/,https://github.com/Atlas-OS/Atlas",
                            "icon":"https://atlasos.net/favicon-32x32.png",
                            "name":"atlasOs",
                            "description":"极简windows系统"
                        }

                    ]
                },
                {
                    "tagType": "win-c++环境",
                    "tagList": [
                        {
                            "homePage":"https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170",
                            "icon":"https://learn.microsoft.com/favicon.ico",
                            "name":"微软c++运行环境",
                            "description":"虚拟机或软件启动报错时安装即可。"
                        },
                        {
                            "homePage":"https://github.com/abbodi1406/vcredist/tree/master/source_links",
                            "icon":"https://github.com/favicon.ico",
                            "name":"vcredist",
                            "description":"vs个版本c++库下载地址记录"
                        }
                    ]
                },
                {
                    "tagType": "win美化",
                    "tagList": [
                        {
                            "homePage":"https://github.com/TranslucentTB/TranslucentTB",
                            "icon":"https://github.com/favicon.ico",
                            "name":"TranslucentTB",
                            "description":"任务栏美化工具"
                        },
                        {
                            "homePage":"https://github.com/Raphire/Win11Debloat",
                            "icon":"https://github.com/favicon.ico",
                            "name":"Win11Debloat",
                            "description":"win10和win11 优化脚本，打开或关闭多余功能。"
                        }
                    ]
                },
                {
                    "tagType": "win激活",
                    "tagList": [
                        {
                            "homePage":"https://github.com/abbodi1406/KMS_VL_ALL_AIO",
                            "icon":"https://github.com/favicon.ico",
                            "name":"KMS_VL_ALL_AIO",
                            "description":""
                        },
                        {
                            "homePage":"https://github.com/massgravel/Microsoft-Activation-Scripts",
                            "icon":"https://github.com/favicon.ico",
                            "name":"Microsoft-Activation-Scripts",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "win系统工具",
                    "tagList": [
                        {
                            "homePage": "https://github.com/hellzerg/optimizer",
                            "icon": "https://github.com/favicon.ico",
                            "name": "optimizer",
                            "description": "win10和11系统优化工具"
                        },
                        {
                            "homePage": "https://github.com/Sophia-Community/SophiApp",
                            "icon": "https://github.com/favicon.ico",
                            "name": "ShopiApp",
                            "description": "需要高版本系统window优化工具"
                        }
                    ]
                },
                {
                    "tagType": "Linux",
                    "tagList": [
                        {
                            "homePage": "https://www.centos.org/download/,http://mirrors.163.com/centos/",
                            "icon": "https://www.centos.org//assets/img/favicon.png",
                            "name": "centos",
                            "description": "主流开源服务器linux系统，基于商业版RedHat构建，8版本后，先发布centos，稳定后再发布RedHat，centos成为了测试小白鼠。"
                        },
                        {
                            "homePage": "http://releases.ubuntu.com/",
                            "icon": "http://releases.ubuntu.com/favicon.ico",
                            "name": "ubuntu",
                            "description": "个人linux操作系统"
                        },
                        {
                            "homePage": "https://www.deepin.org/index/zh",
                            "icon": "https://www.deepin.org/index/favicon.ico",
                            "name": "deepin",
                            "description": "国产个人linux操作系统"
                        },
                        {
                            "homePage": "https://rockylinux.org/",
                            "icon": "https://rockylinux.org/favicon.png",
                            "name": "Rocky Linux",
                            "description": "centos停更后，继任者。redhat更改规则闭源，后续使用堪忧，可以考虑ubuntu。"
                        },
                        {
                            "homePage": "https://www.suse.com/",
                            "icon": "https://www.suse.com/favicon.ico",
                            "name": "SUSE",
                            "description": "德国开源linux操作协同"
                        },
                        {
                            "homePage":"https://openwrt.org/toh/views/toh_fwdownload",
                            "icon":"https://openwrt.org//_media/favicon.ico",
                            "name":"OpenWrt",
                            "description":"嵌入式linux系统，常用于软路由。"
                        }

                    ]
                },
                {
                    "tagType": "国产Linux",
                    "tagList": [
                        {
                            "homePage": "https://www.openeuler.org/zh/download/",
                            "icon": "https://www.openeuler.org/favicon.ico",
                            "name": "欧拉euler系统",
                            "description": "华为发布基于centos操作系统"
                        },
                        {
                            "homePage": "https://openanolis.cn/download,https://mirrors.openanolis.cn/anolis/,https://gitee.com/anolis",
                            "icon": "https://img.alicdn.com/imgextra/i1/O1CN01oJnJZg1yK4RzI4Rx2_!!6000000006559-2-tps-118-118.png",
                            "name": "龙蜥anolis操作系统",
                            "description": "阿里发布linux操作系统"
                        },
                        {
                            "homePage": "https://mirrors.cmecloud.cn/bclinux/",
                            "icon": "https://mirrors.cmecloud.cn/favicon.ico",
                            "name": "BCLinux",
                            "description": "龙蜥二次开发操作系统"
                        }


                    ]
                },
                {
                    "tagType": "yum源",
                    "tagList": [
                        {
                            "homePage":"https://mirrors.tuna.tsinghua.edu.cn/",
                            "icon":"https://mirrors.tuna.tsinghua.edu.cn/static/img/favicon.png",
                            "name":"清华yum源",
                            "description":""
                        },
                        {
                            "homePage":"https://developer.aliyun.com/mirror/",
                            "icon":"https://developer.aliyun.com/favicon.ico",
                            "name":"阿里镜像站",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "手机",
                    "tagList": [
                        {
                            "homePage": "https://github.com/topjohnwu/Magisk",
                            "icon": "https://github.com/favicon.ico",
                            "name": "Magisk面具",
                            "description": "安卓系统root工具"
                        }

                    ]
                }
            ]
        },
        {
            "type": "视频",
            "icon": "fa fa-video-camera",
            "tag": [
                {
                    "tagType": "视频平台",
                    "tagList": [
                        {
                            "homePage": "https://www.bilibili.com/",
                            "icon": "https://www.bilibili.com/favicon.ico",
                            "name": "B站",
                            "description": "自由软件发布平台"
                        },
                        {
                            "homePage": "https://v.qq.com/",
                            "icon": "https://v.qq.com/favicon.ico",
                            "name": "腾讯视频",
                            "description": "冲了会员，慢慢看吧"
                        },
                        {
                            "homePage":"https://www.ixigua.com/channel/jilupian",
                            "icon":"https://www.ixigua.com/favicon.ico",
                            "name":"西瓜视频记录片",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "短视频",
                    "tagList": [
                        {
                            "homePage": "https://www.kuaishou.com/",
                            "icon": "https://static.yximgs.com/udata/pkg/WEB-LIVE/kwai_icon.8f6787d8.ico",
                            "name": "快手",
                            "description": "快手"
                        },
                        {
                            "homePage": "https://www.douyin.com/discover",
                            "icon": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico",
                            "name": "抖音",
                            "description": "抖音"
                        }
                    ]
                },
                {
                    "tagType": "直播",
                    "tagList": [
                        {
                            "homePage":"https://live.kuaishou.com/",
                            "icon":"https://live.kuaishou.com/favicon.ico",
                            "name":"快手直播",
                            "description":""
                        },
                        {
                            "homePage":"https://lemonlive.deno.dev/huya",
                            "icon":"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmY2VhMmIiIGQ9Ik0yNTQuMzU1IDE1Ljk5N2MtOTMuNTEyLjcyNi0xODIuMDU3IDU2LjQwNS0yMjAuMDY2IDE0OC4xNjZjLTUwLjY4IDEyMi4zNSA3LjUyNSAyNjIuODcgMTI5Ljg3NCAzMTMuNTQ3YzEyMi4zNSA1MC42OCAyNjIuODY4LTcuNTI2IDMxMy41NDctMTI5Ljg3NVM0NzAuMTg1IDg0Ljk2NyAzNDcuODM2IDM0LjI4OGMtMzAuNTg3LTEyLjY3LTYyLjMxLTE4LjUzMi05My40OC0xOC4yOXptMS4zMjUgMjQuMzQyYzMzLjI0OCAwIDY2LjQ5NyAxNC4yNDcgNTYuOTk4IDQyLjc0NUwyNzAuODIyIDIxOC43NEwzMzguMjMgOTMuMTY1YzEzLjQzMy0yNi44NjggNDcuMDE4LTEzLjQzMyA3MC41MjggMTAuMDc3czM2Ljk0NiA1Ny4wOTUgMTAuMDc4IDcwLjUzbC0xMjYuNyA2Ni41N0w0MjguOTEgMTk5LjQzYzMuNTYyLTEuMTg4IDYuOTAzLTEuNzEgMTAuMDItMS42NDRjMjEuODIuNDU1IDMyLjcyOCAyOS41NDcgMzIuNzI4IDU4LjY0YzAgMzMuMjQ3LTE0LjI1IDY2LjQ5Ny00Mi43NDggNTYuOTk3bC0xMzUuMzg1LTQyLjI2N2wxMjUuMjMzIDY3LjA3MmMzLjM1OCAxLjY4IDYuMDg4IDMuNjc0IDguMjQ2IDUuOTI0YzE1LjEwNyAxNS43NSAyLjI1IDQ0LjAzNC0xOC4zMjIgNjQuNjA1Yy0yMy41MSAyMy41MS01Ny4wOTUgMzYuOTQ3LTcwLjUzIDEwLjA3OGwtNjcuNTktMTI3LjIxOGEzOC41IDM4LjUgMCAwIDAgMjEuMDAyLTIwLjg4NWM4LjEzNy0xOS42NDMtMS4xOS00Mi4xNjMtMjAuODM0LTUwLjNjLTE5LjY0Mi04LjEzNi00Mi4xNjIgMS4xOTItNTAuMjk4IDIwLjgzNXMxLjE5IDQyLjE2MiAyMC44MzQgNTAuM2EzOC41IDM4LjUgMCAwIDAgMjkuMTI3LjEyNkwzMTEuOTMgNDI4LjkxYzE5IDU2Ljk5OC0xMzIuOTkzIDU2Ljk5OC0xMTMuOTk0IDBsNDMuNjA1LTEzNy42M2wtNjcuNzcgMTI2LjVjLTI2Ljg2NyA1My43MzYtMTM0LjM0My01My43NC04MC42MDYtODAuNjFsMTI0LjE1Ni02Ni4yNDNsLTEzNC4yMzIgNDEuNzQ4Yy01My40MzUgMTcuODEyLTU2Ljc3NS0xMTQuNjYyLTEwLjAyLTExNS42MzdjMy4xMTctLjA2NSA2LjQ1OC40NTYgMTAuMDIgMS42NDNsMTM1LjkxNCA0MS4xODhMOTQuMTQ2IDE3My43N0M0My43NjggMTQ4LjU4MyAxMzUuMDggNTIuNTQ4IDE2OC44MyA4NC45MmMyLjI1IDIuMTU3IDQuMjQ1IDQuODg3IDUuOTI0IDguMjQ1TDIzOS41NCAyMTcuOTVMMTk4LjY4MyA4My4wODVjLTkuNS0yOC40OTggMjMuNzUtNDIuNzQ2IDU2Ljk5OC00Mi43NDZ6Ii8+PC9zdmc+",
                            "name":"lemonlive",
                            "description":"多直播平台整合网站"
                        }
                    ]
                },
                {
                    "tagType": "纪录片",
                    "tagList": [
                        {
                            "homePage":"http://www.docuchina.cn/",
                            "icon":"http://www.docuchina.cn/favicon.ico",
                            "name":"中国纪录片网",
                            "description":"国家级的纪录片资源，央视出品"
                        }
                    ]
                },
                {
                    "tagType": "在线动漫",
                    "tagList": [
                        {
                            "homePage":"https://www.mtacg.tv/",
                            "icon":"https://video1.beijcloud.com/favicon.ico",
                            "name":"蜜糖动漫",
                            "description":"溢满热爱，探寻动漫世界的精彩旅程！"
                        },
                        {
                            "homePage":"https://www.bimiacg4.net/",
                            "icon":"https://www.bimiacg4.net/favicon.ico",
                            "name":"哔咪动漫",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "在线视频",
                    "tagList": [
                        {
                            "homePage": "https://www.hdmoli.com/",
                            "icon": "https://www.hdmoli.com/favicon.ico",
                            "name": "HDMOLI",
                            "description": "高品质视屏平台"
                        },
                        {
                            "homePage":"https://www.6080yy4.com/",
                            "icon":"https://edu-image.nosdn.127.net/034B6C53B270CC44D56476BBE94C95E4.png",
                            "name":"6080",
                            "description":"国内视频资源网站，视频播放速速快。"
                        },
                        {
                            "homePage":"https://www.zxzj.site/",
                            "icon":"",
                            "name":"在线之家",
                            "description":"在线之家导航地址"
                        },
                        {
                            "homePage": "https://dyxs20.com/?www.dianyingim.com",
                            "icon": "https://dyxs20.com/statics/logo.png",
                            "name": "电影先生",
                            "description": "高品质视屏平台"
                        },
                        {
                            "homePage": "https://ddys.tv/",
                            "icon": "https://ddys.tv/favicon-32x32.png",
                            "name": "低端影视",
                            "description": "高品质视屏平台"
                        },
                        {
                            "homePage": "http://halihali18.com/",
                            "icon": "http://halihali18.com/favicon.ico",
                            "name": "哈哩哈哩",
                            "description": "高品质视屏平台"
                        },
                        {
                            "homePage":"http://www.dy1234.net/",
                            "icon":"http://www.dy1234.net/templets/image/apple-touch-icon-152x152.png",
                            "name":"电影家园",
                            "description":"排版不错"
                        }
                    ]
                },
                {
                    "tagType": "视频搜索",
                    "tagList": [
                        {
                            "homePage": "https://wukongshipin.com/",
                            "icon": "https://wukongshipin.com/favicon.ico",
                            "name": "悟空视频",
                            "description": "视频、小说综合平台"
                        },
                        {
                            "homePage":"https://uugg1.cn/",
                            "icon":"https://uugg1.cn/favicon.ico",
                            "name":"小白短剧搜索",
                            "description":"短视频搜索"
                        }
                    ]
                },
                {
                    "tagType": "短剧",
                    "tagList": [
                        {
                            "homePage":"https://www.kdocs.cn/l/cePrBOXrkTzs?R=L1MvMQ==",
                            "icon":"https://qn.cache.wpscdn.com/kdocs/kd-pic-resource/format/v1/icons/png/dbs-36.png",
                            "name":"免费短剧.dbt",
                            "description":"网盘资源短剧"
                        }
                    ]
                },
                {
                    "tagType": "国外资源",
                    "tagList": [
                        {
                            "homePage":"https://www.naifei.im/",
                            "icon":"https://www.naifei.im/favicon.ico",
                            "name":"奈飞影视",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "影评",
                    "tagList": [
                        {
                            "homePage": "https://movie.douban.com/chart",
                            "icon": "https://img3.doubanio.com/favicon.ico",
                            "name": "豆瓣",
                            "description": "国内第一影评平台"
                        }
                    ]
                }
            ]
        },
        {
            "type": "游戏",
            "icon": "fa fa-gamepad",
            "tag": [
                {
                    "tagType": "平台",
                    "tagList": [
                        {
                            "homePage": "https://www.taptap.com/",
                            "icon": "https://assets.tapimg.com/web-app/favicon.1.ico",
                            "name": "Taptap",
                            "description": "国内第一游戏运行平台"
                        },
                        {
                            "homePage": "http://nga.cn/",
                            "icon": "https://bbs.nga.cn/favicon.ico",
                            "name": "NGA玩家社区",
                            "description": "国内第一游戏运行平台"
                        },
                        {
                            "homePage":"https://www.miyoushe.com/sr/",
                            "icon":"https://www.miyoushe.com/favicon.ico",
                            "name":"米游社",
                            "description":"米哈游自建游戏社区"
                        },
                        {
                            "homePage":"https://www.yystv.cn/",
                            "icon":"https://alioss.yystv.cn/images/yyslogo124.png",
                            "name":"研游社",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "在线",
                    "tagList": [
                        {
                            "homePage": "https://www.yikm.net/",
                            "icon": "https://www.yikm.net/f.png",
                            "name": "小霸王",
                            "description": "在线经典小游戏网站"
                        },
                        {
                            "homePage": "https://dos.zczc.cz/",
                            "icon": "",
                            "name": "在线dos游戏",
                            "description": ""
                        },
                        {
                            "homePage": "https://oskarstalberg.com/Townscaper/",
                            "icon": "",
                            "name": "Townscaper",
                            "description": "岛上建城堡"
                        },
                        {
                            "homePage": "https://bruno-simon.com/",
                            "icon": "https://bruno-simon.com/favicon/favicon-32x32.png",
                            "name": "BrunoSimon",
                            "description": "网页版3D小车"
                        },
                        {
                            "homePage":"https://hellogithub.com/onefile/demo/cc759276aefe4bad87ac259940042581.html",
                            "icon":"https://hellogithub.com/favicon.ico",
                            "name":"小球停止",
                            "description":"将小球停在指定位置"
                        },
                        {
                            "homePage":"https://passer-by.com/pacman/",
                            "icon":"https://passer-by.com/favicon.png",
                            "name":"吃豆人游戏",
                            "description":""
                        },
                        {
                            "homePage":"https://poki.com/zh",
                            "icon":"https://a.poki.com/icons/favicon-32x32.png",
                            "name":"poki",
                            "description":""
                        },
                        {
                            "homePage":"https://xiuxian.jntm.cool/",
                            "icon":"https://xiuxian.jntm.cool/favicon.ico",
                            "name":"网页文字修仙",
                            "description":""
                        },
                        {
                            "homePage":"https://passer-by.com/gobang/",
                            "icon":"https://passer-by.com/favicon.png",
                            "name":"五子棋",
                            "description":""
                        },
                        {
                            "homePage":"https://project.threejs-tetris-react.rylan.cn/,https://github.com/RylanBot/threejs-tetris-react",
                            "icon":"https://project.threejs-tetris-react.rylan.cn/favicon.ico",
                            "name":"threejs-tetris-react",
                            "description":"3d版俄罗斯方块"
                        },
                        {
                            "homePage":"https://play.typeracer.com/",
                            "icon":"https://play.typeracer.com/favicon.ico",
                            "name":"TypeRacer",
                            "description":"打字游戏"
                        }

                    ]
                },
                {
                    "tagType":"游戏公司",
                    "tagList":[
                        {
                            "homePage":"https://www.mihoyo.com/",
                            "icon":"https://www.mihoyo.com/favicon.ico",
                            "name":"米哈游",
                            "description":""
                        },
                        {
                            "homePage":"https://www.gamefps.cn/cn/Phone/index.html",
                            "icon":"https://www.gamefps.cn/../../Web_Global/favicon.ico",
                            "name":"心动互娱",
                            "description":"作品纸嫁衣系列"
                        },
                        {
                            "homePage":"https://www.wanmei.com/",
                            "icon":"",
                            "name":"完美世界",
                            "description":"游戏公司"
                        }
                    ]
                },
                {
                    "tagType":"热门游戏",
                    "tagList":[
                        {
                            "homePage":"https://bh3.mihoyo.com/",
                            "icon":"https://bh3.mihoyo.com/favicon.ico",
                            "name":"崩坏3",
                            "description":""
                        },
                        {
                            "homePage":"https://sr.mihoyo.com/?nav=home",
                            "icon":"https://sr.mihoyo.com/favicon.ico",
                            "name":"崩坏：星穹铁道",
                            "description":""
                        },
                        {
                            "homePage":"https://wmsj.qq.com/main.shtml",
                            "icon":"",
                            "name":"完美世界",
                            "description":"腾讯游戏"
                        },
                        {
                            "homePage":"https://ys.mihoyo.com/",
                            "icon":"https://ys.mihoyo.com/favicon.ico",
                            "name":"原神",
                            "description":""
                        },
                        {
                            "homePage":"https://coa.nvsgames.cn/",
                            "icon":"https://coa.nvsgames.cn/cdn/img/game_icon.jpeg",
                            "name":"晶核",
                            "description":""
                        },
                        {
                            "homePage":"https://zzz.mihoyo.com/",
                            "icon":"https://zzz.mihoyo.com/favicon.ico",
                            "name":"绝区零",
                            "description":"米哈游未上线游戏"
                        },
                        {
                            "homePage":"https://mc.kurogames.com/",
                            "icon":"https://mc.kurogames.com/favicon.ico",
                            "name":"鸣潮",
                            "description":""
                        },
                        {
                            "homePage":"https://m.yjwujian.cn/",
                            "icon":"https://m.yjwujian.cn/favicon.ico",
                            "name":"永劫无间",
                            "description":""
                        },
                        {
                            "homePage":"https://www.heishenhua.com/",
                            "icon":"https://www.heishenhua.com/favicon.ico",
                            "name":"黑神话悟空",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "辅助软件",
                    "tagList": [
                        {
                            "homePage": "https://steampp.net/,https://github.com/BeyondDimension/SteamTools",
                            "icon": "https://steampp.net/favicon.ico",
                            "name": "Watt Toolkit",
                            "description": "原steam++"
                        },
                        {
                            "homePage":"https://launcher.mihoyo.com/",
                            "icon":"https://sdk.mihoyo.com/hyp/agreement/images/favicon.ico",
                            "name":"米哈游启动器",
                            "description":"米哈游游戏启动器，可用于管理原神、崩铁、绝区零、崩坏等所有米家游戏。"
                        },
                        {
                            "homePage":"https://bluemaxima.org/flashpoint/downloads/",
                            "icon":"",
                            "name":"flash游戏仓库",
                            "description":"flash游戏库"
                        },
                        {
                            "homePage":"https://github.com/Scighost/Starward",
                            "icon":"https://github.com/favicon.ico",
                            "name":"米哈游游戏启动器",
                            "description":"包含崩坏、崩铁、原神"
                        },
                        {
                            "homePage":"https://github.com/shadps4-emu/shadPS4",
                            "icon":"https://github.com/favicon.ico",
                            "name":"shadPS4",
                            "description":"ps4模拟器"
                        }

                    ]
                },
                {
                    "tagType": "游戏论坛",
                    "tagList": [
                        {
                            "homePage":"https://nga.178.com/",
                            "icon":"https://nga.178.com/favicon.ico",
                            "name":"178",
                            "description":""
                        },
                        {
                            "homePage":"https://bbs.3dmgame.com/forum.php",
                            "icon":"https://bbs.3dmgame.com/favicon.ico",
                            "name":"单机游戏",
                            "description":"单机游戏下载_3DMGAME_中国单机游戏论坛"
                        },
                        {
                            "homePage":"https://game.ali213.net/",
                            "icon":"https://game.ali213.net/favicon.ico",
                            "name":"游侠NETSHOW论坛",
                            "description":"单机游戏|游戏攻略|心得秘籍|游戏补丁|单机游戏下载|游戏汉化"
                        }

                    ]
                }
            ]
        },
        {
            "type": "图片",
            "icon": "fa fa-file-photo-o",
            "tag": [
                {
                    "tagType": "漫画社区",
                    "tagList": [
                        {
                            "homePage": "https://ac.qq.com/",
                            "icon": "https://ac.qq.com/favicon.ico",
                            "name": "腾讯动漫",
                            "description": "国内漫画平台"
                        },
                        {
                            "homePage": "https://www.moehui.com/",
                            "icon": "https://www.moehui.com/favicon.ico",
                            "name": "萌绘",
                            "description": "漫画教程 萌图线稿"
                        },
                        {
                            "homePage": "https://www.huashi6.com/painter/96",
                            "icon": "https://www.huashi6.com/favicon.ico",
                            "name": "触站",
                            "description": "画师加作品，类似国外P站"
                        },
                        {
                            "homePage": "https://www.mihuashi.com/artists",
                            "icon": "https://www.mihuashi.com/favicon.ico",
                            "name": "米画师",
                            "description": "画师加作品，类似国外P站"
                        }
                    ]
                },
                {
                    "tagType": "二次元社区",
                    "tagList": [
                        {
                            "homePage":"https://www.ecylt.top/",
                            "icon":"https://www.ecylt.top/uploads/default/optimized/1X/c3111c9f0edebc10713d3f2429b46797d068a723_2_32x32.jpeg",
                            "name":"E站",
                            "description":"有意思的社区网站"
                        },
                        {
                            "homePage":"https://zh.moegirl.org.cn/Mainpage",
                            "icon":"",
                            "name":"萌娘百科论坛",
                            "description":""
                        },
                        {
                            "homePage":"https://www.2cylt.com/",
                            "icon":"https://www.2cylt.com/favicon.ico",
                            "name":"2次元论坛",
                            "description":""
                        },
                        {
                            "homePage":"https://www.nyabbs.com/",
                            "icon":"https://www.nyabbs.com/favicon.ico",
                            "name":"喵社",
                            "description":""
                        },
                        {
                            "homePage":"https://www.ciyuanjie.cn/",
                            "icon":"https://s2.cyjdm.com/uploads/2020/02/100.png",
                            "name":"次元街",
                            "description":"ACG爱好者分享平台（ciyuanjie.cn）"
                        },
                        {
                            "homePage":"https://dimtown.com/",
                            "icon":"https://cci1.dimtown.com/uploads/2024/01/20240127165948744.png",
                            "name":"次元小镇",
                            "description":"动漫爱好者分享社区"
                        }
                    ]
                },
                {
                    "tagType": "设计",
                    "tagList": [
                        {
                            "homePage": "https://huaban.com/follow",
                            "icon": "https://huaban.com/favicon.ico",
                            "name": "花瓣",
                            "description": "照片、绘画资源网站，可以建立自己的绘画库"
                        }
                    ]
                },
                {
                    "tagType": "搜索图库",
                    "tagList": [
                        {
                            "homePage":"https://image.baidu.com/",
                            "icon":"https://image.baidu.com/favicon.ico",
                            "name":"百度图片",
                            "description":""
                        },
                        {
                            "homePage":"https://pic.sogou.com/",
                            "icon":"https://pic.sogou.com/favicon.ico",
                            "name":"搜狗图片搜索 - 上网从搜狗开始",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "图搜图",
                    "tagList": [
                        {
                            "homePage":"https://picfind.top/",
                            "icon":"https://picfind.top/logo.webp",
                            "name":"ImageSearch",
                            "description":"图片搜图片"
                        }
                    ]
                },
                {
                    "tagType": "绘画练习",
                    "tagList": [
                        {
                            "homePage": "https://line-of-action.com/zh/",
                            "icon": "https://line-of-action.com/favicon-32x32.png",
                            "name": "Line Of Action",
                            "description": "在线模特图网站"
                        },
                        {
                            "homePage": "https://www.posemaniacs.com/zh-Hans",
                            "icon": "https://www.posemaniacs.com/favicon.ico",
                            "name": "Posemaniacs",
                            "description": "人体动作图网站"
                        }

                    ]
                },               
                {
                    "tagType": "图床",
                    "tagList": [
                        {
                            "homePage":"http://imgapi.xl0408.top/index.php",
                            "icon":"https://gitcode.net/favicon.ico",
                            "name":"个人图床",
                            "description":"CSDN gitcode图床，点击后随即图片，项目地址：https://gitcode.net/qq_44112897/images。"
                        },
                        {
                            "homePage":"https://hefollo.com/,https://api.hefollo.com/",
                            "icon":"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2337474F' d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E",
                            "name":"hefollo",
                            "description":"丰富的在线图片资源网站"
                        },
                        {
                            "homePage":"https://www.loliapi.com/",
                            "icon":"https://www.loliapi.com/favicon.ico",
                            "name":"loliapi",
                            "description":"停止服务，原因位置"
                        },
                        {
                            "homePage":"https://api.rainss.cn/randoms.php",
                            "icon":"",
                            "name":"rainss",
                            "description":"雨落凋殇个人博客图床，博客地址：https://rainss.cn/"
                        },
                        {
                            "homePage":"https://api.paugram.com/wallpaper?source=gt",
                            "icon":"",
                            "name":"paugram",
                            "description":"随机卡通图床，工作上慎用，小心社死。"
                        },
                        {
                            "homePage":"https://cdn.seovx.com/",
                            "icon":"https://cdn.seovx.com/favicon.ico",
                            "name":"夏沫博客",
                            "description":"在线美图美女图片API接口"
                        },
                        {
                            "homePage":"https://api.btstu.cn/doc/sjbz.php",
                            "icon":"https://api.btstu.cn/favicon.ico",
                            "name":"搏天api",
                            "description":"网址上层有其他资源"
                        },
                        {
                            "homePage":"https://www.dmoe.cc/",
                            "icon":"https://www.dmoe.cc/favicon.ico",
                            "name":"樱花二次元",
                            "description":"调用接口，结果是下载图片"
                        },
                        {
                            "homePage":"https://img.r10086.com/",
                            "icon":"",
                            "name":"樱道接口",
                            "description":"资源分类不少，网速不行。"
                        }
                    ]
                },
                {
                    "tagType": "静态壁纸",
                    "tagList": [
                        {
                            "homePage": "https://wallroom.io/",
                            "icon": "",
                            "name": "wallroom",
                            "description": "高分辨率壁纸，2K、4K、5K、8K"
                        },
                        {
                            "homePage": "https://wallhaven.cc/",
                            "icon": "",
                            "name": "wallhaven",
                            "description": "高分辨壁纸"
                        },
                        {
                            "homePage":"https://photo.ihansen.org/",
                            "icon":"https://photo.ihansen.org/favicon.ico",
                            "name":"美图集",
                            "description":""
                        },
                        {
                            "homePage":"https://netbian.timeline.ink/home",
                            "icon":"https://netbian.timeline.ink/favicon.ico",
                            "name":"拾光壁纸",
                            "description":"干净、舒适、流畅的壁纸网站"
                        },
                        {
                            "homePage": "http://wallpaperswide.com/",
                            "icon": "http://wallpaperswide.com/favicon.ico",
                            "name": "wallpaperswide",
                            "description": "国外高分辨壁纸"
                        },
                        {
                            "homePage": "https://wall.alphacoders.com/",
                            "icon": "https://wall.alphacoders.com/favicon.ico",
                            "name": "alphacoders",
                            "description": "国外游戏gc壁纸"
                        },
                        {
                            "homePage": "http://www.soutushenqi.com/home",
                            "icon": "https://hbimg.huabanimg.com/f38f3b67cbf6ee517960221a3b1fae77e3865a4c338e-fHk9cF",
                            "name": "搜图神器",
                            "description": "国内需要vip不建议"
                        },
                        {
                            "homePage":"https://pic.netbian.com/",
                            "icon":"https://pic.netbian.com/favicon.ico",
                            "name":"4K壁纸",
                            "description":""
                        },
                        {
                            "homePage":"https://yandex.com/images/",
                            "icon":"https://yandex.com/favicon.ico",
                            "name":"Yandex Images",
                            "description":"国外壁纸搜索网站，包含视频等分类"
                        }
                    ]
                },
                {
                    "tagType": "动态壁纸",
                    "tagList": [
                        {
                            "homePage": "https://mylivewallpapers.com/",
                            "icon": "https://mylivewallpapers.com/wp-content/uploads/fbrfg/favicon-32x32.png",
                            "name": "mylivewallpaper",
                            "description": "国外动态壁纸在线预览网站"
                        },
                        {
                            "homePage": "https://livewallp.com/",
                            "icon": "https://livewallp.com/wp-content/uploads/2020/12/cropped-logo2-01-01-32x32.png",
                            "name": "livewallp",
                            "description": "支持预览动态壁纸网站"
                        }
                    ]
                },
                {
                    "tagType": "漫画图片",
                    "tagList": [
                        {
                            "homePage": "https://anime-pictures.net/?lang=zh_CN",
                            "icon": "https://static-cdn.anime-pictures.net/styles/golova_icon_64.png",
                            "name": "anime",
                            "description": "日本图片免费共享网站"
                        }
                    ]
                },
                {
                    "tagType": "真人",
                    "tagList": [
                        {
                            "homePage": "https://beautyptt.cc/",
                            "icon": "https://beautyptt.cc/images/favicon_beautyptt.jpg",
                            "name": "beautyppt",
                            "description": "真人图片分享网站"
                        },
                        {
                            "homePage": "https://uniform.wingzero.tw/",
                            "icon": "https://uniform.wingzero.tw/favicon.png",
                            "name": "制服地图",
                            "description": "世界学校制服展示"
                        },
                        {
                            "homePage": "https://bbs.fengniao.com/jinghua-101.html",
                            "icon": "https://bbs.fengniao.com/favicon.ico",
                            "name": "蜂鸟论坛",
                            "description": "摄影分享"
                        },
                        {
                            "homePage": "https://portrait.tuchong.com/",
                            "icon": "https://portrait.tuchong.com/favicon.ico",
                            "name": "图虫摄影网",
                            "description": ""
                        }
                    ]
                },
                {
                    "tagType": "P站替代网站",
                    "tagList": [
                        {
                            "homePage": "https://pixivel.moe/",
                            "icon": "https://pixivel.moe/favicon.ico",
                            "name": "pixivel",
                            "description": "为爱发电，有点卡"
                        },
                        {
                            "homePage": "https://pixivic.com/",
                            "icon": "",
                            "name": "pixivic",
                            "description": "简单排行榜"
                        },
                        {
                            "homePage": "https://www.vilipix.com/",
                            "icon": "https://vilipix.oss-cn-beijing.aliyuncs.com/web/logo/ico.png",
                            "name": "vilipix",
                            "description": "有一定功能限制"
                        },
                        {
                            "homePage": "https://pxvr.xyz/",
                            "icon": "",
                            "name": "app",
                            "description": ""
                        },
                        {
                            "homePage": "https://www.minnamoe.com/",
                            "icon": "https://www.minnamoe.com/favicon.ico",
                            "name": "minnamoe",
                            "description": "暂时关停"
                        },
                        {
                            "homePage":"https://pixiv.js.org/ranking",
                            "icon":"https://pixiv.js.org/favicon.ico",
                            "name":"pixivJs",
                            "description":"P站替代网站"
                        }
                    ]
                },
                {
                    "tagType": "在线AI作图工具",
                    "tagList": [
                        {
                            "homePage":"https://aigccafe.net/",
                            "icon":"",
                            "name":"AIGcCafe",
                            "description":"国外"
                        },
                        {
                            "homePage":"https://drawing-prompt.com/en",
                            "icon":"",
                            "name":"绘图提示",
                            "description":"提示图片生成标签，可在线训练。"
                        },
                        {
                            "homePage":"https://www.whee.com/",
                            "icon":"https://www.whee.com/favicon.ico",
                            "name":"WHEE",
                            "description":"国内AI平台支持在线创作"
                        },
                        {
                            "homePage":"https://douchu.ai/warehouse/styleStore",
                            "icon":"",
                            "name":"触手",
                            "description":"国内AI平台平台，支持在线创作和图片下载"
                        },
                        {
                            "homePage":"https://www.esheep.com/",
                            "icon":"https://www.esheep.com/favicon.ico",
                            "name":"eSheep",
                            "description":"国内AI创作平台，支持在线创作。测试中"
                        },
                        {
                            "homePage":"https://www.bimoai.com/",
                            "icon":"https://www.bimoai.com//static/favicon.ico",
                            "name":"笔墨AI",
                            "description":"国内AI平台，支持在线创作和图片下载"
                        },
                        {
                            "homePage":"https://www.xcole.cn/",
                            "icon":"https://www.xcole.cn/favicon.ico",
                            "name":"XCole千言万象",
                            "description":"智能AI写作、AI绘图绘画工具。不支持图片下载"
                        },
                        {
                            "homePage":"https://crypko.ai/cn/",
                            "icon":"",
                            "name":"Crypko",
                            "description":"日本AI 2D角色设计平台"
                        }
                    ]
                }
            ]
        },
        {
            "type": "音乐",
            "icon": "fa fa-music",
            "tag": [
                {
                    "tagType": "在线听",
                    "tagList": [
                        {
                            "homePage": "http://listen1.github.io/listen1/",
                            "icon": "",
                            "name": "Listen 1插件",
                            "description": "浏览器音乐插件"
                        }
                    ]
                },
                {
                    "tagType": "pc音乐软件",
                    "tagList": [
                        {
                            "homePage":"https://github.com/lyswhut/lx-music-desktop",
                            "icon":"https://github.com/favicon.ico",
                            "name":"lx-music-desktop",
                            "description":"落雪音乐播放器， Electron + Vue开发"
                        }
                    ]
                },
                {
                    "tagType": "音乐资源",
                    "tagList": [
                        {
                            "homePage": "https://www.dtshot.com/",
                            "icon": "https://www.dtshot.com/favicon.ico",
                            "name": "无损音乐吧",
                            "description": "无损音乐分享网站"
                        }
                    ]
                },
                {
                    "tagType": "白噪音",
                    "tagList": [
                        {
                            "homePage": "https://neal.fun/ambient-chaos/",
                            "icon": "https://neal.fun/favicons/ambient-chaos.png",
                            "name": "环境混沌",
                            "description": "在线白噪音网站，发送时用"
                        },
                        {
                            "homePage":"https://soundbox.fun/sounds/rain5-coffee30/",
                            "icon":"https://soundbox.fun/favicon.ico",
                            "name":"Sound Box",
                            "description":"可以调节背景音大小的白噪音网站"
                        }
                    ]
                }
            ]
        },
        {
            "type": "书籍",
            "icon": "fa fa-book",
            "tag": [
                {
                    "tagType": "小说",
                    "tagList": [
                        {
                            "homePage": "https://www.qidian.com/",
                            "icon": "https://qdfepccdn.qidian.com/www.qidian.com/favicon/qd_icon.ico",
                            "name": "起点",
                            "description": "国内排行第一小说平台"
                        },
                        {
                            "homePage": "https://www.xxsypro.com/",
                            "icon": "https://xx-web-1252317822.file.myqcloud.com/favicon.ico",
                            "name": "潇湘书院",
                            "description": "女生小说第一平台"
                        },
                        {
                            "homePage": "https://weread.qq.com/",
                            "icon": "https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_32h.png",
                            "name": "腾讯读书",
                            "description": "小说文学阅读平台"
                        },
                        {
                            "homePage":"http://www.zongheng.com/",
                            "icon":"http://www.zongheng.com/favicon.ico",
                            "name":"纵横中文网",
                            "description":""
                        },
                        {
                            "homePage":"https://www.hongxiu.com/",
                            "icon":"https://yuxseocdn.yuewen.com/favicon/hongxiu.ico",
                            "name":"红袖读书",
                            "description":""
                        },
                        {
                            "homePage":"https://www.jjwxc.net/",
                            "icon":"https://www.jjwxc.net/favicon.ico",
                            "name":"晋江文学",
                            "description":""
                        },
                        {
                            "homePage":"https://www.ciweimao.com/",
                            "icon":"https://www.ciweimao.com/favicon.ico",
                            "name":"刺猬猫阅读",
                            "description":""
                        },
                        {
                            "homePage":"https://book.douban.com/",
                            "icon":"https://book.douban.com/favicon.ico",
                            "name":"豆瓣读书",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "传统图书",
                    "tagList": [
                        {
                            "homePage":"https://sobooks.cc/xiaoshuowenxue",
                            "icon":"https://sobooks.cc/favicon.ico",
                            "name":"SoBooks",
                            "description":"小说文学 by 赖瑞和 epub,mobi,azw3格式 "
                        },
                        {
                            "homePage":"http://read.nlc.cn/user/index",
                            "icon":"http://read.nlc.cn//static/style/images/gutu_logo.jpg",
                            "name":"国家图书馆",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "zlibrary",
                    "tagList": [
                        {
                            "homePage":"https://zh.zlib-book.top/",
                            "icon":"https://zh.zlib-book.top/favicon.ico",
                            "name":"Z-Library",
                            "description":"图书资源，下载需要登录，支持在线阅读。"
                        },
                        {
                            "homePage":"https://z-libraryssa.github.io/p/zlibrary.html",
                            "icon":"https://z-libraryssa.github.io/images/favicon-32x32-next.png",
                            "name":"入口博客",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "图书解读",
                    "tagList": [
                        {
                            "homePage":"https://qread.xmsoushu.com/",
                            "icon":"https://qread.xmsoushu.com/favicon.ico",
                            "name":"熊猫速读",
                            "description":"知名图书解读"
                        }
                    ]
                },
                {
                    "tagType": "在线小说",
                    "tagList": [
                        {
                            "homePage":"http://www.soduzw.com/",
                            "icon":"http://www.soduzw.com/favicon.ico",
                            "name":"SoDu小说搜索_新版Sodu_最好的小说搜索引擎_搜读",
                            "description":""
                        },
                        {
                            "homePage":"https://www.owlook.com.cn/",
                            "icon":"https://www.owlook.com.cn/favicon.ico",
                            "name":"owlook",
                            "description":""
                        },
                        {
                            "homePage":"https://xiuting.cc/",
                            "icon":"https://xiuting.cc/favicon.ico",
                            "name":"秀亭",
                            "description":"紧跟实时小说更新"
                        }
                    ]
                },
                {
                    "tagType": "小说下载",
                    "tagList": [
                        {
                            "homePage":"http://www.12z.cn/index.html",
                            "icon":"http://www.12z.cn/favicon.ico",
                            "name":"免费小说网",
                            "description":""
                        },
                        {
                            "homePage":"http://www.bbbiquge.com/",
                            "icon":"http://www.bbbiquge.com/favicon.ico",
                            "name":"新笔趣阁",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "在线古典",
                    "tagList": [
                        {
                            "homePage":"https://ctext.org/zhs",
                            "icon":"https://ctext.org/favicon.ico",
                            "name":"中国哲学书电子化计划",
                            "description":"在线中国古代哲学书库，支持中、英、繁体中文，包含各家经典和医学。"
                        },
                        {
                            "homePage":"https://www.shidianguji.com/",
                            "icon":"",
                            "name":"识典古籍",
                            "description":"在线古代电子书库"
                        },
                        {
                            "homePage":"https://aspoem.com/zh-Hans",
                            "icon":"https://aspoem.com/favicon.ico",
                            "name":"aspoem",
                            "description":"在线古诗阅读"
                        },
                        {
                            "homePage":"https://haitang.app/",
                            "icon":"https://haitang.app/images/favicon.svg",
                            "name":"海棠诗社",
                            "description":"网页版是个圣地。"
                        },
                        {
                            "homePage":"https://www.6mj.com/",
                            "icon":"https://www.6mj.com/favicon.ico",
                            "name":"中国民间故事网",
                            "description":""
                        },
                        {
                            "homePage":"https://aspoem.com/",
                            "icon":"https://aspoem.com/favicon.ico",
                            "name":"Aspoem",
                            "description":"在线古文阅读学习网站"
                        },
                        {
                            "homePage":"https://sou-yun.cn/",
                            "icon":"https://sou-yun.cn/favicon.ico",
                            "name":"搜韵",
                            "description":"搜韵网共收录约 90 万首古今诗词作品，其中近现代及之前的诗词作品约 83 万"
                        },
                        {
                            "homePage":"https://www.chinesepoems.org/",
                            "icon":"https://www.chinesepoems.org/favicon.ico",
                            "name":"唐韵",
                            "description":""
                        },
                        {
                            "homePage":"https://www.nlc.cn/pcab/",
                            "icon":"",
                            "name":"中国古籍保护网",
                            "description":""
                        },
                        {
                            "homePage":"https://larryzhu-dev.github.io/thebookofchanges/",
                            "icon":"https://larryzhu-dev.github.io/yi.svg",
                            "name":"周易",
                            "description":"在线周易卦象总纲网站"
                        }
                    ]
                },
                {
                    "tagType": "网盘图书",
                    "tagList": [
                        {
                            "homePage":"https://ctext.org/zhs",
                            "icon":"https://ctext.org/favicon.ico",
                            "name":"中国哲学书电子化计划",
                            "description":"在线中国古代哲学书库，支持中、英、繁体中文，包含各家经典和医学。"
                        },
                        {
                            "homePage":"https://g79rnb8ep5.feishu.cn/sheets/OvcYslP6Gh7TfutSNi9cKEHenhc",
                            "icon":"https://lf-scm-cn.feishucdn.com/ccm/pc/web/resource/bear/feishu.ico",
                            "name":"飞书云文档",
                            "description":"整理输出各种图书网盘资源"
                        }
                    ]
                },
                {
                    "tagType": "pdf搜书",
                    "tagList": [
                        {
                            "homePage": "https://xmsoushu.com/index.html#/",
                            "icon": "https://xmsoushu.com/favicon.ico",
                            "name": "熊猫搜索",
                            "description": "搜书平台"
                        },
                        {
                            "homePage":"https://www.shuge.org/",
                            "icon":"https://www.shuge.org/favicon.ico",
                            "name":"书格",
                            "description":"包含大量古文、古画和近现代照片。"
                        },
                        {
                            "homePage":"https://www.jiumodiary.com/",
                            "icon":"https://www.jiumodiary.com/favicon.ico",
                            "name":"Jiumo Search 鸠摩搜索",
                            "description":""
                        },
                        {
                            "homePage":"https://sobooks.cc/xiaoshuowenxue",
                            "icon":"https://sobooks.cc/favicon.ico",
                            "name":"SoBooks",
                            "description":"小说文学 by 王小伟 epub,mobi,azw3格式"
                        },
                        {
                            "homePage":"https://mox.moe/",
                            "icon":"https://mox.moe/favicon.ico",
                            "name":"Kox.moe",
                            "description":"国外漫画网站"
                        },
                        {
                            "homePage":"https://zh.annas-archive.li/",
                            "icon":"https://zh.annas-archive.li/favicon.ico",
                            "name":"安娜的档案",
                            "description":""
                        }
                    ]
                }
            ]
        },
        {
            "type": "资源",
            "icon": "fa fa-download",
            "tag": [
                {
                    "tagType": "磁力",
                    "tagList": [
                        {
                            "homePage":"https://anybt.eth.limo/#/search",
                            "icon":"",
                            "name":"AnyBT",
                            "description":""
                        },
                        {
                            "homePage":"https://www.daysou.com/",
                            "icon":"https://www.daysou.com/favicon.ico",
                            "name":"天天搜索",
                            "description":"国内优秀的网盘搜索引擎"
                        },
                        {
                            "homePage":"https://qpp.sokk34.buzz/",
                            "icon":"",
                            "name":"吃力网",
                            "description":"小心广告"
                        },                        
                        {
                            "homePage":"https://btmayi.cc/",
                            "icon":"https://btmayi.cc/favicon.ico",
                            "name":"BT蚂蚁磁力 | 一个懂你的磁力搜索导航网站",
                            "description":""
                        },
                        {
                            "homePage": "https://18mag.net/",
                            "icon": "https://18mag.net/favicon.ico",
                            "name": "无极磁力",
                            "description": "磁力资源"
                        },
                        {
                            "homePage":"https://zhim.cilizhizhu.info/",
                            "icon":"https://zhim.cilizhizhu.info/favicon.ico",
                            "name":"搜磁力",
                            "description":""
                        },
                        {
                            "homePage":"https://lemonzx.top/",
                            "icon":"https://lemonzx.top/favicon.ico",
                            "name":"磁力柠檬",
                            "description":""
                        },
                        {
                            "homePage":"https://skrbtpu.top/",
                            "icon":"https://skrbtpu.top/favicon.ico",
                            "name":"SkrBT - 专业的种子搜索、磁力链接搜索引擎",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "网盘搜索",
                    "tagList": [
                        {
                            "homePage":"https://www.xuebapan.com/",
                            "icon":"https://www.xuebapan.com//static/img/logo.png",
                            "name":"学霸盘",
                            "description":"百度网盘学习资料搜索下载神器"
                        },
                        {
                            "homePage":"https://aliso.cc/",
                            "icon":"https://aliso.cc//static/img/logo.png",
                            "name":"阿里搜",
                            "description":"阿里盘搜索"
                        },
                        {
                            "homePage":"https://www.upyunso.com/",
                            "icon":"https://cdn.tkk78.com/upyunso/web_static/static/img/upso_mlogo.png",
                            "name":"UP云搜",
                            "description":""
                        },
                        {
                            "homePage":"https://yapan.io/",
                            "icon":"https://yapan.io/favicon.ico",
                            "name":"ya盘",
                            "description":""
                        },
                        {
                            "homePage":"https://www.xiaobaipan.com/",
                            "icon":"https://www.xiaobaipan.com/favicon.ico",
                            "name":"小白盘",
                            "description":""
                        },
                        {
                            "homePage":"https://www.pansearch.me/",
                            "icon":"https://www.pansearch.me/favicon.png",
                            "name":"PanSearch",
                            "description":""
                        },
                        {
                            "homePage":"http://www.xgsoso.com/",
                            "icon":"http://www.xgsoso.com/favicon.ico",
                            "name":"西瓜搜搜",
                            "description":""
                        },
                        {
                            "homePage":"https://xiongdipan.com/",
                            "icon":"https://xiongdipan.com/favicon.ico",
                            "name":"兄弟盘",
                            "description":""
                        },
                        {
                            "homePage":"https://www.fastsoso.cn/",
                            "icon":"https://www.fastsoso.cn/favicon.ico",
                            "name":"fastsoso",
                            "description":"百度网盘搜索"
                        },
                        {
                            "homePage":"https://www.wowenda.com/",
                            "icon":"https://www.wowenda.com/favicon.ico",
                            "name":"网盘之家导航",
                            "description":""
                        },
                        {
                            "homePage":"https://panyq.com/",
                            "icon":"https://panyq.com/favicon.ico",
                            "name":"盘友圈",
                            "description":""
                        },
                        {
                            "homePage":"https://www.pikaso.top/",
                            "icon":"https://www.pikaso.top/favicon.ico",
                            "name":"皮卡搜索",
                            "description":""
                        },
                        {
                            "homePage":"https://51vde.com/",
                            "icon":"https://51vde.com/assets/favicon-pvx9yqcm.png",
                            "name":"51影源网",
                            "description":"开放云盘资源分享社区"
                        },
                        {
                            "homePage":"https://wpzy.cc/",
                            "icon":"https://wpzy.cc/assets/favicon-zgzvsicj.png",
                            "name":"AQ网盘资源",
                            "description":""
                        },
                        {
                            "homePage":"http://s.kkkob.com/apps/index.html?id=211229kl,http://kkszn.com/app/index.html?id=test,http://mx771.cn/app/index.html?id=test",
                            "icon":"",
                            "name":"数据搜索",
                            "description":""
                        },
                        {
                            "homePage":"https://www.dashengpan.com/",
                            "icon":"https://www.dashengpan.com/favicon.ico",
                            "name":"大圣盘-激活",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "视频库",
                    "tagList": [
                        {
                            "homePage":"http://www.butailing.com,https://www.9bt0.com/",
                            "icon":"",
                            "name":"不太灵",
                            "description":"高清国内外磁力资源平台"
                        },
                        {
                            "homePage": "https://cupfox.app/",
                            "icon": "https://p0.meituan.net/dpgroup/cd088044f183d2719f3f9fe56d5c34204207.png",
                            "name": "茶杯狐",
                            "description": "资源下载"
                        },
                        {
                            "homePage":"https://www.yinfans.me/",
                            "icon":"https://www.yinfans.me/favicon.ico",
                            "name":"音范丝",
                            "description":"精选4K蓝光原盘下载,顶级收藏"
                        },
                        {
                            "homePage":"https://gaoqing.la/",
                            "icon":"https://gaoqing.la/wp-content/themes/Loostrive/images/favicon.ico",
                            "name":"中国高清网",
                            "description":"高清资源下载"
                        },
                        {
                            "homePage": "https://www.dianyinggou.com/",
                            "icon": "https://www.dianyinggou.com/favicon.ico",
                            "name": "电影狗搜索",
                            "description": "资源下载"
                        },
                        {
                            "homePage": "https://www.mini4k.com/",
                            "icon": "https://www.mini4k.com/themes/white/favicon.ico",
                            "name": "MINI4K迷客电影",
                            "description": "综合视频资源下载平台"
                        }
                    ]
                },
                {
                    "tagType":"日漫资源",
                    "tagList":[
                        {
                            "homePage":"https://share.acgnx.cc/",
                            "icon":"https://share.acgnx.cc/favicon.ico",
                            "name":"末日动漫资源库",
                            "description":"日漫为主，包括视频、音频、游戏、音乐、出版物、特刊等。"
                        },
                        {
                            "homePage":"https://mikanime.tv/",
                            "icon":"https://mikanime.tv/favicon.ico",
                            "name":"密柑计划",
                            "description":"日漫更新订阅网站"
                        },
                        {
                            "homePage":"https://acgrip.art/",
                            "icon":"https://acgrip.art/favicon.ico",
                            "name":"ACG.RIP",
                            "description":""
                        },
                        {
                            "homePage":"https://dmhy.b168.net/",
                            "icon":"https://dmhy.b168.net/favicon.ico",
                            "name":"动漫花园",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType":"BT种子",
                    "tagList":[
                        {
                            "homePage": "https://github.com/XIU2/TrackersListCollection/blob/master/README-ZH.md",
                            "icon": "https://github.com/favicon.ico",
                            "name": "BT种子项目",
                            "description": "介绍BT种子软件安装和最新资源配置"
                        }
                    ]
                },
                {
                    "tagType": "动漫资源",
                    "tagList": [
                        {
                            "homePage": "http://www.comicat.org/",
                            "icon": "https://www.comicat.org/images/favicon/comicat.ico",
                            "name": "漫猫动漫BT下载",
                            "description": "动漫资源下载平台"
                        },
                        {
                            "homePage":"https://www.kisssub.org/",
                            "icon":"",
                            "name":"爱恋动漫BT",
                            "description":""
                        },
                        {
                            "homePage":"https://www.36dm.org/",
                            "icon":"https://www.36dm.org/view/img/favicon.ico",
                            "name":"简单动漫",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "数据资源",
                    "tagList": [
                        {
                            "homePage":"https://metrodb.org/index/beijing.html",
                            "icon":"https://metrodb.org/favicon.ico",
                            "name":"北京地铁数据库",
                            "description":""
                        },
                        {
                            "homePage":"https://www.chanmama.com/douyin/",
                            "icon":"https://www.chanmama.com/favicon.ico",
                            "name":"抖音数据平台",
                            "description":""
                        },
                        {
                            "homePage":"https://xinghan.ctrmui.com/user/index",
                            "icon":"https://xinghan.ctrmui.com/favicon.ico",
                            "name":"星汉app使用排行",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "字幕资源",
                    "tagList": [
                        {
                            "homePage":"https://assrt.net/",
                            "icon":"https://assrt.net/favicon.ico",
                            "name":"射手网",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "盗版软件",
                    "tagList": [
                        {
                            "homePage": "https://rutracker.org/forum/index.php",
                            "icon": "",
                            "name": "rutracker",
                            "description": "俄罗斯盗版资源网站，包含软件、视频、游戏等。"
                        }
                    ]
                },
                {
                    "tagType": "书签",
                    "tagList": [
                        {
                            "homePage": "https://www.bookmarkearth.com/",
                            "icon": "https://www.bookmarkearth.com/media/img/logo/favicon.ico",
                            "name": "书签地球",
                            "description": "大佬书签资源网站"
                        }
                    ]
                },
                {
                    "tagType": "项目",
                    "tagList": [
                        {
                            "homePage":"https://docs.soybeanjs.cn/zh/",
                            "icon":"https://docs.soybeanjs.cn/favicon.ico",
                            "name":"SoybeanAdmin",
                            "description":"清新的中后台模板"
                        },
                        {
                            "homePage":"https://github.com/blossom-editor/blossom,https://www.wangyunf.com/blossom-doc/index",
                            "icon":"https://www.wangyunf.com/blossom-doc/imgs/blossom/favicon.png",
                            "name":"blossom",
                            "description":"java 开发的双向连接笔记软件"
                        },
                        {
                            "homePage":"https://github.com/zyronon/douyin,https://dy.ttentau.top/#/home",
                            "icon":"https://github.com/favicon.ico",
                            "name":"douyin",
                            "description":"仿抖音前端项目"
                        },
                        {
                            "homePage":"https://github.com/outline/outline,https://www.getoutline.com/",
                            "icon":"https://www.getoutline.com/favicon-32.png",
                            "name":"outline",
                            "description":"开源团队知识库软件"
                        },
                        {
                            "homePage":"https://github.com/halo-dev/halo/,https://www.halo.run/",
                            "icon":"https://www.halo.run/themes/theme-official-v2/assets/favicons/favicon-96x96.png",
                            "name":"halo",
                            "description":"java开发的国产博客软件。"
                        },
                        {
                            "homePage":"https://redis.tinycraft.cc/zh/",
                            "icon":"https://redis.tinycraft.cc/images/logo.svg",
                            "name":"TinyRDM",
                            "description":"跨平台Redis工具，使用golang+Wails开发。"
                        },
                        {
                            "homePage":"https://github.com/JoeanAmier/TikTokDownloader",
                            "icon":"https://github.com/favicon.ico",
                            "name":"TikTokDownloader",
                            "description":"视频采集"
                        },
                        {
                            "homePage":"https://github.com/BlackINT3/OpenArk",
                            "icon":"https://github.com/favicon.ico",
                            "name":"OpenArk",
                            "description":"windows平台逆转变成助手，用于病毒发现和安全防护。"
                        },
                        {
                            "homePage":"https://www.kirilv.com/canvas-confetti/,https://github.com/catdad/canvas-confetti",
                            "icon":"https://www.kirilv.com/favicon.ico",
                            "name":"canvas-confetti",
                            "description":"有趣的彩色纸片碎屑动画库。"
                        }
                    ]
                },
                {
                    "tagType": "MMD",
                    "tagList": [
                        {
                            "homePage":"https://www.aplaybox.com/",
                            "icon":"https://www.aplaybox.com/favicon.ico",
                            "name":"模之屋",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "3D素材",
                    "tagList": [
                        {
                            "homePage": "https://sketchfab.com/",
                            "icon": "https://sketchfab.com/favicon.ico",
                            "name": "Sketchfab",
                            "description": "3D资源分享，主要是卡通人物和雕塑，提供在线360度查看"
                        },
                        {
                            "homePage": "https://www.turbosquid.com/",
                            "icon": "https://www.turbosquid.com/favicon.ico",
                            "name": "turbosquid",
                            "description": "国外3D素材售卖网站"
                        },
                        {
                            "homePage": "https://www.thingiverse.com/",
                            "icon": "https://www.thingiverse.com/favicon.ico",
                            "name": "Thingiverse",
                            "description": "国外3D模型打印资源网站"
                        },
                        {
                            "homePage": "https://grabcad.com/",
                            "icon": "https://grabcad.com/favicon.ico",
                            "name": "GrabCAD",
                            "description": "国外工程师资源交流分享网站"
                        },
                        {
                            "homePage": "https://pinshape.com/",
                            "icon": "https://pinshape.com/favicon.ico",
                            "name": "pinshape",
                            "description": "3D打印"
                        },
                        {
                            "homePage": "https://threedscans.com/",
                            "icon": "https://threedscans.com/favicon.ico",
                            "name": "Free 3D scan archive",
                            "description": "3d雕塑资源分享网站"
                        },
                        {
                            "homePage": "https://www.myminifactory.com/",
                            "icon": "https://www.myminifactory.com/favicon.ico",
                            "name": "MyMiniFactory",
                            "description": "国外3D资源网站，所有模型都测试过，"
                        },
                        {
                            "homePage":"https://sketchfab.com/ffishAsia-and-floraZia",
                            "icon":"https://sketchfab.com/favicon.ico",
                            "name":"ffish.asia",
                            "description":"国外免费3D生物模型库，包含动物和植物。"
                        }
                    ]
                },
                {
                    "tagType": "无版权音乐视频",
                    "tagList": [
                        {
                            "homePage":"https://stock.tuchong.com/video",
                            "icon":"https://tuchong.com/favicon.ico",
                            "name":"图虫创意",
                            "description":"抖音旗下音乐视频资源网站，部分可能收费"
                        },
                        {
                            "homePage":"https://pixabay.com/music/",
                            "icon":"https://pixabay.com/favicon.ico",
                            "name":"pixabay",
                            "description":"国外无版权音乐和视频"
                        },

                        {
                            "homePage":"https://openverse.org/",
                            "icon":"",
                            "name":"openverse",
                            "description":"无版权资源"
                        },
                        {
                            "homePage":"https://ncs.io/",
                            "icon":"https://ncs.io/favicon.png?_m=1597301782",
                            "name":"NCS ",
                            "description":"无版权音乐"
                        },
                        {
                            "homePage":"https://dova-s.jp/EN/",
                            "icon":"https://dova-s.jp/_assets/img/favicon.ico",
                            "name":"DOVA-SYNDROME",
                            "description":""
                        },
                        {
                            "homePage":"https://incompetech.com/music/royalty-free/music.html",
                            "icon":"https://incompetech.com/favicon.ico",
                            "name":"incompetech Music",
                            "description":""
                        }
                    ]
                },   
                {
                    "tagType": "服装参考",
                    "tagList": [
                        {
                            "homePage": "https://zm-digicol.dpm.org.cn/",
                            "icon": "https://zm-digicol.dpm.org.cn/favicon.ico",
                            "name": "故宫博物院藏品总目",
                            "description": ""
                        },
                        {
                            "homePage":"https://digicol.dpm.org.cn/",
                            "icon":"https://digicol.dpm.org.cn/favicon.ico",
                            "name":"故宫博物院数字文物库",
                            "description":""
                        },
                        {
                            "homePage": "http://120.25.237.190/hanfu/index.html",
                            "icon": "http://120.25.237.190/favicon.ico",
                            "name": "汉服资料博物馆",
                            "description": ""
                        },
                        {
                            "homePage": "https://m.hanfuhui.com/",
                            "icon": "https://m.hanfuhui.com/favicon.ico",
                            "name": "汉服荟商城",
                            "description": ""
                        },
                        {
                            "homePage": "https://door11.com/",
                            "icon": "https://door11.com/favicon.ico",
                            "name": "DOOR11.COM",
                            "description": "秀场风服饰"
                        },
                        {
                            "homePage": "http://www.vogue.com.cn/",
                            "icon": "http://www.vogue.com.cn/favicon.ico",
                            "name": "VOGUE时尚网",
                            "description": "国内时尚网站"
                        },
                        {
                            "homePage": "http://lvyou168.cn/vam/collections.html",
                            "icon": "http://lvyou168.cn/favicon.ico",
                            "name": "V&A博物馆",
                            "description": ""
                        },
                        {
                            "homePage":"https://artvee.com/",
                            "icon":"https://artvee.com/favicon.ico",
                            "name":"Artvee",
                            "description":"浏览和下载高分辨率的公共领域艺术品"
                        }
                    ]
                }
            ]
        },
        {
            "type": "生活",
            "icon": "fa fa-coffee",
            "tag": [
                {
                    "tagType": "招聘网站",
                    "tagList": [
                        {
                            "homePage":"https://www.lagou.com/jobs/list_%E5%85%A8%E7%BD%91%E6%8B%9B%E8%81%98?city=%E5%8C%97%E4%BA%AC",
                            "icon":"https://www.lagou.com/favicon.ico",
                            "name":"拉钩",
                            "description":""
                        },
                        {
                            "homePage":"https://www.zhipin.com/beijing/?ka=city-sites-101010100",
                            "icon":"https://www.zhipin.com/favicon.ico",
                            "name":"BOSS直聘",
                            "description":""
                        },
                        {
                            "homePage":"https://www.liepin.com/city-bj/",
                            "icon":"https://www.liepin.com/favicon.ico",
                            "name":"北京招聘网",
                            "description":""
                        },
                        {
                            "homePage":"https://www.zhaopin.com/beijing/",
                            "icon":"https://www.zhaopin.com/favicon.ico",
                            "name":"智联",
                            "description":""
                        },
                        {
                            "homePage":"https://www.51job.com/",
                            "icon":"https://www.51job.com/favicon.ico",
                            "name":"前程无忧",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "趣味",
                    "tagList": [
                        {
                            "homePage":"https://music.alang.run/",
                            "icon":"https://music.alang.run/favicon.ico",
                            "name":"一起听歌",
                            "description":""
                        },
                        {
                            "homePage":"https://fakeupdate.net/",
                            "icon":"https://fakeupdate.net/favicon.ico",
                            "name":"假装windows升级",
                            "description":"网页版windows升级视频"
                        },
                        {
                            "homePage":"https://github.com/meethigher/black-wukong-youji/blob/master/%E9%BB%91%E7%A5%9E%E8%AF%9D%E6%82%9F%E7%A9%BA%E5%A6%96%E6%80%AA%E5%B9%B3%E7%94%9F%E5%BD%95.md",
                            "icon":"https://github.com/favicon.ico",
                            "name":"妖怪生平志",
                            "description":"黑神话悟空中妖怪信息"
                        },
                        {
                            "homePage":"https://display.aspiringcode.com:8888/html/17184454966205/",
                            "icon":"",
                            "name":"3d发动机拆解图",
                            "description":"动画加零件拆解"
                        },
                        {
                            "homePage":"https://aether-gazer.amyang.dev/,https://github.com/AmyangXYZ/AetherGazer_Vue",
                            "icon":"https://aether-gazer.amyang.dev/favicon.png",
                            "name":"Aether Gazer",
                            "description":"深空之眼MMD模型展示。"
                        },
                        {
                            "homePage":"https://countrymeters.info/cn",
                            "icon":"https://countrymeters.info/favicon.ico",
                            "name":"人口实时统计",
                            "description":"实时统计当前地球人口数"
                        },
                        {
                            "homePage":"https://neal.fun/deep-sea/",
                            "icon":"https://neal.fun/favicons/deep-sea.png",
                            "name":"海洋动物",
                            "description":"网页展示不同海洋深度的动物"
                        },
                        {
                            "homePage":"https://www.bluemarinefoundation.com/the-sea-we-breathe/",
                            "icon":"https://www.bluemarinefoundation.com/favicon.ico",
                            "name":"深海",
                            "description":"动效逼真绚丽，带你进入海底世界遨游，互动式的体验"
                        },
                        {
                            "homePage":"https://zhuanlan.zhihu.com/p/589582237",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"家庭服务器方案",
                            "description":"从硬件到软件，硬件diy、软路由、低功耗、nas各方面介绍。"
                        },
                        {
                            "homePage":"https://fuun.fun/random",
                            "icon":"https://fuun.fun/favicon.ico",
                            "name":"奇趣网站收藏家",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType": "睡前故事",
                    "tagList": [
                        {
                            "homePage":"https://beddystories.com/zh",
                            "icon":"https://beddystories.com/favicon.ico",
                            "name":"BeddyStories",
                            "description":"儿童睡前故事"
                        }
                    ]
                },
                {
                    "tagType": "电子维修",
                    "tagList": [
                        {
                            "homePage":"https://zh.ifixit.com/",
                            "icon":"https://zh.ifixit.com/favicon.ico",
                            "name":"iFixit",
                            "description":"各类电子产品维修"
                        }
                    ]
                },
                {
                    "tagType": "强身健体",
                    "tagList": [
                        {
                            "homePage":"https://www.zhihu.com/question/524091077/answer/2409904312,https://www.zhihu.com/question/643202058/answer/3587190116",
                            "icon":"https://static.zhihu.com/heifetz/favicon.ico",
                            "name":"年轻人强身健体",
                            "description":""
                        },
                        {
                            "homePage": "https://manateelazycat.github.io/2023/04/06/fitness-essentials/",
                            "icon": "https://manateelazycat.github.io/favicon.ico",
                            "name": "健身要点",
                            "description": "王勇健身总结"
                        },
                        {
                            "homePage":"https://github.com/AnsonZnl/RehabilitationGuide/blob/main/README.md",
                            "icon":"https://github.com/favicon.ico",
                            "name":"RehabilitationGuide",
                            "description":"健身要义，主要包括，八段锦、五禽戏、八部金刚经、站桩。"
                        }
                    ]
                },
                {
                    "tagType": "新闻",
                    "tagList": [
                        {
                            "homePage":"https://www.qq.com/",
                            "icon":"https://mat1.gtimg.com/www/icon/favicon2.ico",
                            "name":"腾讯网",
                            "description":""
                        },
                        {
                            "homePage":"https://www.163.com/",
                            "icon":"https://www.163.com/favicon.ico",
                            "name":"网易",
                            "description":""
                        },
                        {
                            "homePage":"https://www.thepaper.cn/",
                            "icon":"https://www.thepaper.cn/favicon.ico",
                            "name":"澎湃新闻",
                            "description":""
                        },
                        {
                            "homePage":"https://www.huxiu.com/",
                            "icon":"https://www.huxiu.com/favicon.ico",
                            "name":"虎嗅网",
                            "description":"财经新闻网站"
                        },
                        {
                            "homePage":"https://www.toutiao.com/",
                            "icon":"http://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico",
                            "name":"今日头条",
                            "description":""
                        },
                        {
                            "homePage":"https://aeon.co/",
                            "icon":"https://aeon.co/favicon-32x32.png",
                            "name":"aeon",
                            "description":"国外有深度的新闻评论网站"
                        }
                    ]
                },
                {
                    "tagType": "面试",
                    "tagList": [
                        {
                            "homePage": "https://javaguide.cn/",
                            "icon": "https://javaguide.cn/favicon.ico",
                            "name": "javaGuide",
                            "description": "java面试资源"
                        },
                        {
                            "homePage":"https://zhuanlan.zhihu.com/p/64147696/",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"2022面试题",
                            "description":""
                        },
                        {
                            "homePage":"https://www.mujicv.com/",
                            "icon":"https://www.mujicv.com/favicon.ico",
                            "name":"木及简历",
                            "description":"在线简历制作"
                        },
                        {
                            "homePage":"https://leetcode.cn/",
                            "icon":"https://leetcode.cn/favicon.ico",
                            "name":"力扣",
                            "description":""
                        },
                        {
                            "homePage":"https://juejin.cn/post/7375086929404837914",
                            "icon":"https://juejin.cn/favicon.ico",
                            "name":"离职原因",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "社保与学历",
                    "tagList": [
                        {
                            "homePage":"https://fuwu.rsj.beijing.gov.cn/zhrs/sbqycx/sbRights/sbRightsHome",
                            "icon":"http://rsj.beijing.gov.cn/favicon.ico",
                            "name":"北京市社保障局",
                            "description":"北京市人力资源社会保障局官网，微信登录"
                        },
                        {
                            "homePage":"https://gjj.beijing.gov.cn/web/index/grwsywpt/index.html",
                            "icon":"https://gjj.beijing.gov.cn//web/uiFramework/commonResource/zip/bitbug_favicon/bitbug_favicon.ico",
                            "name":"北京公积金查询",
                            "description":""
                        },
                        {
                            "homePage":"https://my.chsi.com.cn/archive/index.jsp",
                            "icon":"https://my.chsi.com.cn/favicon.ico",
                            "name":"学信网",
                            "description":"微信登录"
                        },
                        {
                            "homePage":"https://www.beijing.gov.cn/fuwu/bmfw/bmzt/sfz/blzn/201806/t20180622_1857525.html",
                            "icon":"https://www.beijing.gov.cn/favicon.ico",
                            "name":"北京身份证",
                            "description":"北京异地补办身份证"
                        },
                        {
                            "homePage":"https://si.12333.gov.cn/",
                            "icon":"https://si.12333.gov.cn/favicon.ico",
                            "name":"国家社会保险公共服务平台",
                            "description":"养老退休"
                        },
                        {
                            "homePage":"https://si.12333.gov.cn/157569.jhtml?menuguide=1",
                            "icon":"https://si.12333.gov.cn/favicon.ico",
                            "name":"养老金计算",
                            "description":""
                        },
                        {
                            "homePage":"https://map.beijing.gov.cn/jgjmap/category?categoryId=jsrtjyy",
                            "icon":"",
                            "name":"北京市公安局公安交通管理局",
                            "description":"北京驾照体检中心地图"
                        }

                    ]
                },
                {
                    "tagType": "房屋",
                    "tagList": [
                        {
                            "homePage":"https://luoyang.anjuke.com/market/jianxiqu/",
                            "icon":"https://luoyang.anjuke.com///pages.anjukestatic.com/usersite/touch/img/favicon.ico",
                            "name":"洛阳安居客",
                            "description":"2024涧西房价走势图,涧西二手房价格-"
                        },
                        {
                            "homePage":"https://m.fang.com/fangjia/ly_list_14892/",
                            "icon":"https://m.fang.com/favicon.ico",
                            "name":"洛阳房天下",
                            "description":"洛阳涧西房价走势2024年_涧西二手房价格-"
                        },
                        {
                            "homePage":"https://m.fang.com/esf/rank/xiaoqurankinglist/ly/?",
                            "icon":"https://m.fang.com/favicon.ico",
                            "name":"洛阳人气小区榜",
                            "description":"查看整个洛阳小区格局。"
                        },
                        {
                            "homePage":"https://luoyang.anjuke.com/community/props/sale/1253511/b402-o4",
                            "icon":"https://pages.anjukestatic.com/usersite/touch/img/favicon.ico",
                            "name":"澜京公馆",
                            "description":"只有33层和29层，楼层过高，考虑以后维护，建议选择新标准房。高于11层的房子，未来都是贫民窟。新规：新建住宅的最高层数不得超过18层，建筑高度在6~7层左右，小高层一梯两户。"
                        }

                    ]
                },
                {
                    "tagType": "地图",
                    "tagList": [
                        {
                            "homePage":"https://map.baidu.com/search/",
                            "icon":"https://map.baidu.com/favicon.ico",
                            "name":"百度地图",
                            "description":""
                        },
                        {
                            "homePage":"https://www.amap.com/",
                            "icon":"https://www.amap.com/favicon.ico",
                            "name":"高德地图",
                            "description":""
                        },
                        {
                            "homePage":"https://map.qq.com/",
                            "icon":"https://map.qq.com/favicon.ico",
                            "name":"腾讯地图",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "表白",
                    "tagList": [
                        {
                            "homePage":"https://sun0225sun.github.io/Awesome-Love-Code/,https://github.com/sun0225SUN/Awesome-Love-Code",
                            "icon":"",
                            "name":"Awesome-Love-Code",
                            "description":"表白代码收藏馆~谁说程序猿不懂浪漫❤️，多种语言多种形式表白样式。"
                        }

                    ]
                },
                {
                    "tagType": "医学",
                    "tagList": [
                        {
                            "homePage":"https://www.mvyxws.cn/",
                            "icon":"https://www.mvyxws.cn/favicon.ico",
                            "name":"医学微视",
                            "description":"由中国医药卫生事业发展基金会创办，囊括了我们普通人能接触到的所有疾病。"
                        }

                    ]
                },
                {
                    "tagType": "历史",
                    "tagList": [
                        {
                            "homePage":"https://www.allhistory.com/",
                            "icon":"https://www.allhistory.com/favicon.ico",
                            "name":"全历史",
                            "description":"国内外历史信息网站"
                        }

                    ]
                },
                {
                    "tagType": "电话卡",
                    "tagList": [
                        {
                            "homePage":"http://orafast.com.cn/",
                            "icon":"http://orafast.com.cn/images/favicon.ico",
                            "name":"大王卡",
                            "description":""
                        },
                        {
                            "homePage":"http://mgk.86dk.com/,http://mgk.86dk.com/liuliang/",
                            "icon":"http://mgk.86dk.com/favicon.ico",
                            "name":"移动芒果卡",
                            "description":""
                        },
                        {
                            "homePage":"https://www.mi.com/mimobile",
                            "icon":"https://www.mi.com/favicon.ico",
                            "name":"小米移动电话卡",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "众筹",
                    "tagList": [
                        {
                            "homePage":"https://www.modian.com/",
                            "icon":"https://www.modian.com/favicon.ico",
                            "name":"摩点",
                            "description":""
                        },
                        {
                            "homePage":"https://izhongchou.taobao.com/",
                            "icon":"https://izhongchou.taobao.com/favicon.ico",
                            "name":"造点新货",
                            "description":""
                        },
                        {
                            "homePage":"https://m.mi.com/crowdfunding/past",
                            "icon":"https://m.mi.com/favicon.ico",
                            "name":"小米众筹",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "品读",
                    "tagList": [
                        {
                            "homePage":"https://mp.weixin.qq.com/s/bOnW8gDJ-dXp4KbAjhDw9A",
                            "icon":"https://mp.weixin.qq.com/favicon.ico",
                            "name":"左耳朵耗子的话",
                            "description":"一位离世大佬访谈和博客精练，从技术到人生，内容很有深度，值得不同阶段反复品读。"
                        },
                        {
                            "homePage":"https://manateelazycat.github.io/2018/11/27/money-and-happy/",
                            "icon":"https://manateelazycat.github.io/favicon.ico",
                            "name":"赚钱和快乐",
                            "description":""
                        },
                        {
                            "homePage":"https://www.zhihu.com/question/483321797",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "结婚三年怀孕了，婆婆却不想让我生怎么办?",
                            "description": "知乎高赞回答，文笔好解析到位。"
                        },
                        {
                            "homePage":"https://www.zhihu.com/question/622878648",
                            "icon":"https://static.zhihu.com/heifetz/favicon.ico",
                            "name":"教育孩子",
                            "description":"知乎平台高水平回答教育问题，从不同角度分析论证。"
                        },
                        {
                            "homePage":"https://www.zhihu.com/question/66052044",
                            "icon":"https://static.zhihu.com/heifetz/favicon.ico",
                            "name":"普通人如何跨越阶层",
                            "description":"知乎平台高水平回答教育问题，从不同角度分析论证。"
                        },
                        {
                            "homePage":"https://www.zhihu.com/question/537552336/answer/3358749454",
                            "icon":"https://static.zhihu.com/heifetz/favicon.ico",
                            "name":"如何提升自己",
                            "description":"养成良好习惯、降低内耗，保持财务健康，积极学习成长。"
                        },
                        {
                            "homePage":"https://zhuanlan.zhihu.com/p/655824580",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"爸爸和两个女儿的对话",
                            "description":"通过爸爸和两个女儿的对话，讲述一些简单又深刻的人生哲理。"
                        },
                        {
                            "homePage":"https://mp.weixin.qq.com/s/EulYyzGU5fuA3Lv0wgS8hw",
                            "icon":"https://mp.weixin.qq.com/favicon.ico",
                            "name":"段永平采访",
                            "description":"2025年段永平浙大采访，有很多值得借鉴的观点和人生态度。"
                        },
                        {
                            "homePage":"https://self-consistent-coder.readthedocs.io/zh-cn/latest/preface/,https://github.com/zhangchenchen/self-consistent-coder",
                            "icon":"https://self-consistent-coder.readthedocs.io/favicon.ico",
                            "name":"自洽的程序员",
                            "description":"北大毕业生工作十年后写的关于工作职场焦虑生活未来多方面的反省和输出，焦虑时，多读读。"
                        }

                    ]
                },
                {
                    "tagType": "做饭",
                    "tagList": [
                        {
                            "homePage": "https://github.com/Anduin2017/HowToCook,https://cook.aiurs.co/",
                            "icon": "https://github.com/favicon.ico",
                            "name": "程序员菜谱",
                            "description": "github上程序分享菜谱"
                        }

                    ]
                },
                {
                    "tagType": "百科",
                    "tagList": [
                        {
                            "homePage":"https://www.chongbuluo.com/forum.php?mod=guide&view=hot",
                            "icon":"https://www.chongbuluo.com/favicon.ico",
                            "name":"虫部落",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "出行",
                    "tagList": [
                        {
                            "homePage": "https://www.12306.cn/index/",
                            "icon": "https://www.12306.cn/index/images/favicon.ico",
                            "name": "12306",
                            "description": "购买火车票"
                        }

                    ]
                },
                {
                    "tagType": "DIY",
                    "tagList": [
                        {
                            "homePage": "https://www.instructables.com/",
                            "icon": "https://www.instructables.com/assets/img/siteassets/favicon.ico",
                            "name": "Instructables",
                            "description": "国外DIY教程网站"
                        },
                        {
                            "homePage":"https://jihezn.com/wood/detail/7430473298af4355ace2ae0aa35fdabf/",
                            "icon":"https://jihezn.com/favicon.ico",
                            "name":"几何指南",
                            "description":"木材信息和家具设计。"
                        },
                        {
                            "homePage":"https://www.construct101.com/",
                            "icon":"https://www.construct101.com/favicon.ico",
                            "name":"construct101",
                            "description":"喜欢diy的国外博主网站"
                        }
                    ]
                },
                {
                    "tagType":"高校",
                    "tagList":[
                        {
                            "homePage":"https://laosheng.top/fuwu/yuanxiao",
                            "icon":"",
                            "name":"高等院校三千所 👨‍🎓 助力考生选大学 | Laosheng.top",
                            "description":""
                        }
                    ]
                },
                {
                    "tagType":"合同",
                    "tagList":[
                        {
                            "homePage":"https://cont.12315.cn/",
                            "icon":"https://cont.12315.cn/favicon.ico",
                            "name":"国家市场监督管理总局",
                            "description":"合同示范文本库"
                        }
                    ]
                }
            ]
        },
        {
            "type": "投资",
            "icon": "fa fa-line-chart",
            "tag": [
                {
                    "tagType": "基金",
                    "tagList": [
                        {
                            "homePage": "https://fund.eastmoney.com/",
                            "icon": "https://fund.eastmoney.com/favicon.ico",
                            "name": "天天基金网",
                            "description": "长期A类，短期C类"
                        },
                        {
                            "homePage": "https://fund.eastmoney.com/004237.html",
                            "icon": "https://fund.eastmoney.com/favicon.ico",
                            "name": "中欧新蓝筹混合C",
                            "description": "长期A类，短期C类"
                        }

                    ]
                },
                {
                    "tagType": "股票",
                    "tagList": [
                        {
                            "homePage":"https://www.sse.com.cn/assortment/stock/list/share/",
                            "icon":"https://www.sse.com.cn/favicon.ico",
                            "name":"沪市A股列表",
                            "description":""
                        },
                        {
                            "homePage":"https://www.szse.cn/market/product/stock/list/index.html",
                            "icon":"https://res.szse.cn/common/images/favicon.ico",
                            "name":"深市A股列表",
                            "description":""
                        },
                        {
                            "homePage":"https://www.tgb.cn/blog/7467511",
                            "icon":"https://www.tgb.cn/favicon.ico",
                            "name":"孤沐清风",
                            "description":"学习炒股技术"
                        }

                    ]
                },
                {
                    "tagType": "股票经验",
                    "tagList": [
                        {
                            "homePage":"https://zhuanlan.zhihu.com/p/15090808436",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"牢记量价关系",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "综合论坛",
                    "tagList": [
                        {
                            "homePage": "https://xueqiu.com/",
                            "icon": "https://xueqiu.com/favicon.ico",
                            "name": "雪球论坛",
                            "description": ""
                        },
                        {
                            "homePage":"https://www.eastmoney.com/",
                            "icon":"https://g1.dfcfw.com/g1/special/Apple_ico.png",
                            "name":"东方财富",
                            "description":""
                        },
                        {
                            "homePage":"https://quote.eastmoney.com/zixuan/?from=home",
                            "icon":"https://g1.dfcfw.com/g1/special/Apple_ico.png",
                            "name":"自选东方财富",
                            "description":""
                        },
                        {
                            "homePage":"https://xueqiu.com/u/1247347556",
                            "icon":"https://xueqiu.com/favicon.ico",
                            "name":"大道无形我有型",
                            "description":"段永平雪球账号"
                        },
                        {
                            "homePage":"https://www.55188.com/index.php",
                            "icon":"https://www.55188.com/favicon.ico",
                            "name":"理想股票论坛",
                            "description":""
                        },
                        {
                            "homePage":"https://www.tgb.cn/",
                            "icon":"https://www.tgb.cn/favicon.ico",
                            "name":"淘股吧",
                            "description":"专业投资A股股票炒股论坛交流分享社区"
                        },
                        {
                            "homePage":"http://www.guziyuan.cn/",
                            "icon":"http://www.guziyuan.cn/favicon.ico",
                            "name":"股资源",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "知乎主",
                    "tagList": [
                        {
                            "homePage":"https://www.zhihu.com/people/42-18-46-77-7",
                            "icon":"https://static.zhihu.com/heifetz/favicon.ico",
                            "name":"老陈",
                            "description":""
                        },
                        {
                            "homePage":"https://www.zhihu.com/people/10-64-17-85-40",
                            "icon":"https://static.zhihu.com/heifetz/favicon.ico",
                            "name":"水又三人禾",
                            "description":""
                        },
                        {
                            "homePage": "https://www.zhihu.com/people/shen-chen-7-10",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "阳光下的沈同学",
                            "description": "股票交易"
                        },
                        {
                            "homePage": "https://www.zhihu.com/question/594190060/answer/3120347766",
                            "icon": "https://static.zhihu.com/heifetz/favicon.ico",
                            "name": "男朋友沉迷于股票，整个人都变了，怎么办？",
                            "description": ""
                        }

                    ]
                },
                {
                    "tagType": "投资心得",
                    "tagList": [
                        {
                            "homePage": "https://manateelazycat.github.io/2023/03/17/reading-poor-charlies-almanack",
                            "icon": "https://manateelazycat.github.io/favicon.ico",
                            "name": "读穷查理宝典",
                            "description": ""
                        },
                        {
                            "homePage": "https://manateelazycat.github.io/2021/03/06/reading-economics",
                            "icon": "https://manateelazycat.github.io/favicon.ico",
                            "name": "读薛兆丰经济学讲义",
                            "description": ""
                        }

                    ]
                },
                {
                    "tagType": "数据",
                    "tagList": [
                        {
                            "homePage":"https://www.stats.gov.cn/sj/",
                            "icon":"https://www.stats.gov.cn/favicon.ico",
                            "name":"国家统计局",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "股票教程",
                    "tagList": [
                        {
                            "homePage": "https://www.zhihu.com/people/yydidong/posts",
                            "icon": "https://www.zhihu.com/favicon.ico",
                            "name": "系列股票教程",
                            "description": ""
                        },
                        {
                            "homePage": "https://www.zhihu.com/question/448928154/answer/1818247503",
                            "icon": "https://www.zhihu.com/favicon.ico",
                            "name": "炒股人的一天",
                            "description": ""
                        },
                        {
                            "homePage":"https://www.zhihu.com/question/529185823/answer/3550033479",
                            "icon":"https://www.zhihu.com/favicon.ico",
                            "name":"短线交易",
                            "description":""
                        },
                        {
                            "homePage":"https://zhuanlan.zhihu.com/p/108627613",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"投资新手入门教程",
                            "description":""
                        },
                        {
                            "homePage":"https://www.zhihu.com/question/57199649/answer/3508952723?utm_psn=1793639498996920320",
                            "icon":"https://zhuanlan.zhihu.com/favicon.ico",
                            "name":"如何选股",
                            "description":""
                        }

                    ]
                },
                {
                    "tagType": "采购",
                    "tagList": [
                        {
                            "homePage":"https://re.1688.com/",
                            "icon":"https://re.1688.com/favicon.ico",
                            "name":"1688批发网",
                            "description":""
                        }

                    ]
                }


            ]

        }

    ]
}
