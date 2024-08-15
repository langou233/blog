---
title: 常用VPS脚本合集
pubDate: 2024-08-15
categories: ['VPS']
description: ''
---

收集整理的2024最新的常用VPS脚本工具，方便要使用的时候可以快速的找到，包含VPS测试脚本（一键测评，综合测试，IP质量/解锁，带宽测试，路由追踪，延迟/丢包测试），运维工具包等，DD重装系统脚本，科学工具，其他工具等等，会定期添加修改一些更新或者失效的脚本。
## [linux-1](https://linux.do/t/topic/165688/1#linux-1)Linux一键测评脚本
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=u3cbdce7e&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nlbench.sh 正式版本：
NodeLoc提供给各位用户的主机聚合测评脚本，可一键自动对主机进行Yabs、融合怪、IP质量、流媒体解锁，三网测速，iperf3，回程路由等测评，测评结束后将会保存结果为MarkDown文件。 Github项目地址：[https://github.com/everett7623/nodeloc_vps_test1](https://github.com/everett7623/nodeloc_vps_test)
```
wget -O Nlbench.sh https://raw.githubusercontent.com/everett7623/nodeloc_vps_test/main/Nlbench.sh && chmod +x Nlbench.sh && ./Nlbench.sh
```
## [vps-2](https://linux.do/t/topic/165688/1#vps-2)VPS 综合测试
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=TOUmW&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)融合怪：
```
curl -L https://gitlab.com/spiritysdx/za/-/raw/main/ecs.sh -o ecs.sh && chmod +x ecs.sh && bash ecs.sh
```
或
```
bash <(wget -qO- bash.spiritlhl.net/ecs)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=iyHtM&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)LemonBench：
检查vps基本信息，网络，流媒体解锁，路由等。
```
wget -qO- https://raw.githubusercontent.com/LemonBench/LemonBench/main/LemonBench.sh | bash -s -- --fast
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=B1OqH&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)UnixBench.sh： 秋水逸冰大佬的作品，Unixbench的主要测试项目有：系统调用、读写、进程、图形化测试、2D、3D、管道、运算、C库等系统基准性能提供测试数据。
```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/unixbench.sh && chmod +x unixbench.sh && ./unixbench.sh
```
[upl-image-preview url=[https://s.rmimg.com/2024-07-18/1721314574-592722-image.png](https://s.rmimg.com/2024-07-18/1721314574-592722-image.png)]
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=nlbus&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Bench 网络带宽及硬盘读写速率： 国外部分+国内部分节点）
```
wget -qO- bench.sh | bash
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=rTO1u&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)SuperBench.sh 网络带宽及硬盘读写速率： SuperBench脚本是老鬼（Oldking）大神在基于秋水逸冰（teddysun）脚本bench.sh的基础上，加入了独立服务器通电时间检测、服务器虚拟化架构、TCP拥塞控制等功能。
```
wget -qO- --no-check-certificate https://raw.githubusercontent.com/oooldking/script/master/superbench.sh | bash
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=QJ0ST&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)YABS 性能测试脚本： 脚本比较全面，可用来测试vps多项性能，包括配置信息、磁盘IO测试、网络带宽测试和Geekbench测试。
```
curl -sL yabs.sh | bash
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=J7X52&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Geekbench 5 专测脚本：
```
bash <(curl -sL gb5.top)
```
## [ip-3](https://linux.do/t/topic/165688/1#ip-3)IP 质量/解锁
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=Yl7kh&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)IP 质量检测：
```
bash <(curl -Ls IP.Check.Place)
```
或
```
bash <(wget -qO- bash.spiritlhl.net/ecs-ipcheck)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=GVrur&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)流媒体解锁：
```
bash <(curl -L -s media.ispvps.com)
```
或
```
bash <(curl -L -s check.unlock.media)
```
或
```
bash <(curl -Ls unlock.icmp.ing/scripts/test.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=cnm9T&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)OpenAI 解锁检测：
```
bash <(curl -Ls https://github.com/ludashi2020/OpenAI-Checker/raw/main/openai.sh)
```
## [h-4](https://linux.do/t/topic/165688/1#h-4)带宽测试
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=Y56YR&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Hyperspeed 三网测速：
```
bash <(curl -Lso- https://bench.im/hyperspeed)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=iEZHd&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)综合测速脚本 nws.sh：
```
curl -sL nws.sh | bash
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=PlGOI&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)多功能 自更新 测速脚本： 三网，含多线程，单线程等测速
```
bash <(curl -sL bash.icu/speedtest)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=bIolN&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)DD 磁盘测试 生成5G 文件，顺序
```
dd if=/dev/zero of=5gb bs=1M count=5120
```
生成 5G 文件，随机
```
dd if=/dev/urandom of=5gb bs=1M count=5120
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=DsaTo&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)HTTP 单线程下载测试
##### [h-5](https://linux.do/t/topic/165688/1#h-5)服务端
启动简易 http 服务
```
python3 -m http.server
```
##### [h-6](https://linux.do/t/topic/165688/1#h-6)客户端
直接用浏览器下载或其他工具下载
建议用edge等浏览器
也可以试试IDM下载
替换下方yourip为你的ip地址
```
wget http://yourip:8000/5gb
```
##### [h-7](https://linux.do/t/topic/165688/1#h-7)删除测试文件
服务端删除文件：
```
rm 5gb
```
## [h-8](https://linux.do/t/topic/165688/1#h-8)路由追踪
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=PcEmi&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) AutoTrace 回程路由 ：
```
wget -N --no-check-certificate https://raw.githubusercontent.com/Chennhaoo/Shell_Bash/master/AutoTrace.sh && chmod +x AutoTrace.sh && bash AutoTrace.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=QBCag&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) BestTrace 回程路由：
进入后一键测试，北上广三网
```
wget -qO- git.io/besttrace | bash
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=PHW6X&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) BackTrace 回程路由：
```
curl https://raw.githubusercontent.com/zhanghanyun/backtrace/main/install.sh -sSf | sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=XeHa9&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) NextTrace 回程路由：
```
curl nxtrace.org/nt |bash
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=WTxEC&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) OpenTrace 回程路由：
OpenTrace 是 NextTrace 的跨平台 GUI 界面，带来您熟悉但更强大的用户体验。
[https://github.com/Archeb/opentrace](https://github.com/Archeb/opentrace)
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=AUkUh&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) Pingsx MTR 回程路由：
[https://ping.sx/mtr](https://ping.sx/mtr)
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=Zmxhu&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) 去程路由：
[https://www.itdog.cn/traceroute/](https://www.itdog.cn/traceroute/)
[https://tools.ipip.net/traceroute.php](https://tools.ipip.net/traceroute.php)
## [h-9](https://linux.do/t/topic/165688/1#h-9)延迟/丢包测试
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=oq5EN&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) Google/Facebook/X/Youtube/Netflix/Chatgpt/Github延迟
```
bash <(curl -sL https://nodebench.mereith.com/scripts/curltime.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=SvOJN&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) Ping.pe
全球延迟，丢包
[https://ping.pe1](https://ping.pe/)
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=q6w0i&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) Pingsx Ping
在线Ping，Port，DNS，MTR等测试
[https://ping.sx](https://ping.sx/)
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=Eq4bO&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) Itdog Ping
[https://www.itdog.cn/ping/](https://www.itdog.cn/ping/)
## [h-10](https://linux.do/t/topic/165688/1#h-10)运维工具
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=fqH9a&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)vps_scripts：
```
wget -O vps_scripts.sh https://raw.githubusercontent.com/everett7623/vps_scripts/main/vps_scripts.sh && chmod +x vps_scripts.sh && ./vps_scripts.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=jEpl2&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)科技 lion 一键脚本工具：
```
curl -sS -O https://raw.githubusercontent.com/kejilion/sh/main/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=tCQZ5&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)VPS 一键脚本工具箱：
```
curl -fsSL https://raw.githubusercontent.com/eooce/ssh_tool/main/ssh_tool.sh -o ssh_tool.sh && chmod +x ssh_tool.sh && ./ssh_tool.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=MKLp4&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)BlueSkyXN 综合工具箱：
```
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=zwIiS&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)jcnf 常用脚本工具包：
```
wget -O jcnfbox.sh https://raw.githubusercontent.com/Netflixxp/jcnf-box/main/jcnfbox.sh && chmod +x jcnfbox.sh && clear && ./jcnfbox.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=KZ5fE&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Sm1rkBoy’s 一键脚本：
```
bash <(curl -Ls https://raw.githubusercontent.com/Sm1rkBoy/monitor_config/main/install.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=QWNHU&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)轻量VPS测试集合：
```
bash <(curl -Ls resource.yserver.ink/all.sh) --custom
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=k9N2w&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23) one-click-installation-script 一键修复与安装脚本(各种脚本), 去GitHub寻找需要的 [https://github.com/spiritLHLS/one-click-installation-script](https://github.com/spiritLHLS/one-click-installation-script)
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=aQzeX&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)VPS ToolBox：
```
bash <(curl -Lso- https://sh.vps.dance/toolbox.sh)
```
[upl-image-preview url=[https://s.rmimg.com/2024-08-01/1722479623-886381-image.png](https://s.rmimg.com/2024-08-01/1722479623-886381-image.png)]
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=y089D&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nekoneko - Linux网络优化：
```
bash <(curl -Lso- http://sh.nekoneko.cloud/tools.sh)
```
## [dd-11](https://linux.do/t/topic/165688/1#dd-11)DD重装脚本
系统默认为debian12
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=qFazG&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)leitbogioro大佬的脚本（推荐） ：
```
wget --no-check-certificate -qO InstallNET.sh 'https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh' && chmod a+x InstallNET.sh && bash InstallNET.sh -debian 12 -pwd '密码'
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=WOZ1J&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)beta.gs大佬的脚本 ：
```
bash <(wget --no-check-certificate -qO- 'https://raw.githubusercontent.com/MoeClub/Note/master/InstallNET.sh') -d 12 -v 64 -p 密码 -port 端口 -a -firmware
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=QzJqQ&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)beta.gs：
```
wget --no-check-certificate -O NewReinstall.sh https://raw.githubusercontent.com/fcurrk/reinstall/master/NewReinstall.sh && chmod a+x NewReinstall.sh && bash NewReinstall.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=H4trl&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nekoneko - DD一键脚本：
```
bash <(curl -Lso- http://sh.nekoneko.cloud/DD/AutoReinstall.sh)
```
[upl-image-preview url=[https://s.rmimg.com/2024-08-01/1722479698-389896-image.png](https://s.rmimg.com/2024-08-01/1722479698-389896-image.png)]
## [h-12](https://linux.do/t/topic/165688/1#h-12)科学工具
### [warp-13](https://linux.do/t/topic/165688/1#warp-13)WARP
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=cJa9m&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)WARP 集合（5warp版本集合）： Cloudflare warp脚本 添加IPv4/IPv6网络，
```
bash <(curl -sSL https://gitlab.com/fscarmen/warp_unlock/-/raw/main/unlock.sh)
```
日常维护 warp
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=th7qC&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)FSCARMEN Warp： Cloudflare warp脚本 添加IPv4/IPv6网络
```
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh
```
日常维护 warp
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=hUnHX&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)FSCARMEN WARP-GO： Cloudflare warp脚本 添加IPv4/IPv6网络
```
wget -N https://raw.githubusercontent.com/fscarmen/warp/main/warp-go.sh && bash warp-go.sh
```
日常维护 warp-go
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=QkZbU&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)P3TERX Warp： Cloudflare warp脚本 添加IPv4/IPv6网络
```
bash <(curl -fsSL git.io/warp.sh) menu
```
日常维护 bash warp.sh
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=f4lBj&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)勇哥 Warp： Cloudflare warp脚本 添加IPv4/IPv6网络
```
bash <(curl -Ls https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh)
```
### [bbr-14](https://linux.do/t/topic/165688/1#bbr-14)BBR
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=ECjju&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)BBR 脚本：
```
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p
sysctl net.ipv4.tcp_available_congestion_control
lsmod | grep bbr
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=DeQ72&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Linux-NetSpeed（锐速/bbrplus/bbr 魔改版）：
```
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=ak4w6&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)ylx 大佬的锐速/BBRPLUS/BBR2：
```
wget -O tcpx.sh "https://github.com/ylx2016/Linux-NetSpeed/raw/master/tcpx.sh" && chmod +x tcpx.sh && ./tcpx.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=ETHrO&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nekoneko - BBR一键安装：
```
bash <(curl -Lso- http://sh.nekoneko.cloud/bbr/bbr.sh)
```
### [h-15](https://linux.do/t/topic/165688/1#h-15)常用科学
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=scckY&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Sing-box 全家桶：
```
bash <(wget -qO- https://raw.githubusercontent.com/fscarmen/sing-box/main/sing-box.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=XsJXM&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)勇哥 Sing-box：
```
bash <(curl -Ls https://gitlab.com/rwkgyg/sing-box-yg/raw/main/sb.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=xDo1u&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Mack-a 8合1：
```
wget -P /root -N --no-check-certificate "https://raw.githubusercontent.com/mack-a/v2ray-agent/master/install.sh" && chmod 700 /root/install.sh && /root/install.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=ema4X&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)新版 X-UI：
```
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/master/install.sh)
```
或
```
bash <(wget -qO- https://raw.githubusercontent.com/sing-web/x-ui/main/install_CN.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=uu3r1&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)3X-UI：
```
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=x4nAB&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)勇哥 x-ui：
```
bash <(curl -Ls https://gitlab.com/rwkgyg/x-ui-yg/raw/main/install.sh)
```
### [h-16](https://linux.do/t/topic/165688/1#h-16)中转
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=Crx5C&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Realm 转发： 脚本添加在中转鸡上
```
wget https://raw.githubusercontent.com/Jaydooooooo/Port-forwarding/main/RealmOneKey.sh && chmod +x RealmOneKey.sh && ./RealmOneKey.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=rctkd&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nekoneko - 一键Brook转发：
```
bash <(curl -Lso- http://sh.nekoneko.cloud/brook-pf/brook-pf.sh)
```
### [ipv6-17](https://linux.do/t/topic/165688/1#ipv6-17)IPV6
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=CNNc3&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)IPV6小鸡科学三步曲
dns64
```
cp /etc/resolv.conf{,.bak}; echo -e "nameserver 2a00:1098:2b::1\nnameserver 2a01:4f9:c010:3f02::1\nnameserver 2a01:4f8:c2c:123f::1\nnameserver 2a00:1098:2c::1" > /etc/resolv.conf
```
warp IPv4
```
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh 4
```
argox (xray + argo) 或者 sba( sing-box + argo)
argox (xray + argo)
```
bash <(wget -qO- https://raw.githubusercontent.com/fscarmen/argox/main/argox.sh) -C
```
sba( sing-box + argo)
```
bash <(wget -qO- https://raw.githubusercontent.com/fscarmen/sba/main/sba.sh) -C
```
## [h-18](https://linux.do/t/topic/165688/1#h-18)其他工具
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=enEMR&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)超售测试脚本：
```
wget --no-check-certificate -O memoryCheck.sh https://raw.githubusercontent.com/uselibrary/memoryCheck/main/memoryCheck.sh && chmod +x memoryCheck.sh && bash memoryCheck.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=w9Mfx&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)移除virtio_balloon模块：
```
rmmod virtio_balloon
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=mkedZ&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)内存填充测试： FunctionClub大佬作品，检测VPS真实可分配内存，适用于检测VPS超售情况
```
apt-get update
apt-get install wget build-essential -y
wget https://raw.githubusercontent.com/FunctionClub/Memtester/master/memtester.cpp
gcc -l stdc++ memtester.cpp
./a.out
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=BDI7f&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)spiritlhl 大佬的 zram 内存压缩脚本：
```
curl -L https://raw.githubusercontent.com/spiritLHLS/addzram/main/addzram.sh -o addzram.sh && chmod +x addzram.sh && bash addzram.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=OR0QF&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)moerats 大佬的添加 swap 脚本：
```
wget https://www.moerats.com/usr/shell/swap.sh && bash swap.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=FY3h9&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)fail2ban 服务器 ssh 防爆破：
```
wget https://raw.githubusercontent.com/FunctionClub/Fail2ban/master/fail2ban.sh && bash fail2ban.sh 2>&1 | tee fail2ban.log
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=zUBUM&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)独服硬盘测试： 独立服务器硬盘时间
```
wget -q https://github.com/Aniverse/A/raw/i/a && bash a
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=K2w5U&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)25端口：
```
telnet smtp.aol.com 25
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=u3KhR&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)测试 IPv4 / IPv6 优先：
```
curl ip.p3terx.com
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=rRZEc&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)PagerMaid-Pyro机器人 Docker安装 TG自走机器人(需要VPS)
```
wget https://raw.githubusercontent.com/TeamPGM/PagerMaid-Pyro/development/utils/docker.sh -O docker.sh && chmod +x docker.sh && bash docker.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=ks3jF&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)一键删除平台监控 一键移除大多数云服务器监控 涵盖阿里云、腾讯云、华为云、UCLOUD、甲骨文云、京东云
```
curl -L https://raw.githubusercontent.com/spiritLHLS/one-click-installation-script/main/install_scripts/dlm.sh -o dlm.sh && chmod +x dlm.sh && bash dlm.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=pyoP5&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nekoneko - Gost一键脚本：
```
bash <(curl -Lso- http://sh.nekoneko.cloud/EasyGost/gost.sh)
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=aSYOk&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Nekoneko - Ehco一键脚本：
```
bash <(curl -Lso- http://sh.nekoneko.cloud/ehco.sh/ehco.sh)
```
## [h-19](https://linux.do/t/topic/165688/1#h-19)常用推荐
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=fZXYs&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)哪吒探针 安装：
```
curl -L https://raw.githubusercontent.com/naiba/nezha/master/script/install.sh  -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=P6Qtt&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Alist 一键安装：
```
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=W641s&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)Xiao Alist 一键安装：
```
bash -c "$(curl --insecure -fsSL https://ddsrem.com/xiaoya_install.sh)"
```
![](https://cdn.nlark.com/yuque/0/2024/png/980875/1722485542566-db8083bd-c29c-4cfe-ba0f-252d0eb89158.png#averageHue=%237793ac&clientId=u760ea571-08d1-4&from=paste&height=23&id=hZnW9&originHeight=72&originWidth=72&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u771cd8f0-9e5a-4728-8045-29d4e250733&title=&width=23)一键安装filebrowser平台
端口设置为3030了，其他登陆信息详见提示 filebrowser平台支持下载上传文件到服务器， 批量下载多个文件(自定义压缩格式)，构建文件分享链接，设置分享时长 如果本地有启用IPV6优先级可能绑定到V6去了，使用lsof -i:3030查看绑定情况，切换优先级后再安装就正常了
```
curl -L https://raw.githubusercontent.com/spiritLHLS/one-click-installation-script/main/install_scripts/filebrowser.sh -o filebrowser.sh && chmod +x filebrowser.sh && bash filebrowser.sh
```
