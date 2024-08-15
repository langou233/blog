---
title: VPS常用配置
pubDate: 2024-08-15
categories: ['VPS']
description: ''
---

# 一、系统设置
## 更新软件库
```
apt update -y && apt upgrade -y
```
## 更新、安装必备软件
```
apt install sudo curl wget nano
```
## 校正系统时间
将时区改为改成上海
```
sudo timedatectl set-timezone Asia/Shanghai
```

- 查看当前时区：
```
timedatectl
```

- 列出所有时区：
```
timedatectl list-timezones
```
## 系统参数调优
这个功能通过调整各种系统和网络参数来优化服务器的性能。
**实现方法**：

- **内核参数调整**：例如，增加TCP缓冲区大小、修改系统队列长度等，这些改变有助于提高网络吞吐量和减少延迟。
- **性能优化**：安装和配置`Tuned`和其他系统性能优化工具来自动调整和优化服务器的运行状态。
- **资源限制**：例如，设置文件打开数量的限制，这可以防止某些类型的资源耗尽攻击。

通过这些功能，你的服务器不仅能够更有效地管理资源，还能提高对外部威胁的防护能力，保障系统稳定运行。
```
bash <(wget -qO- https://raw.githubusercontent.com/jerry048/Tune/main/tune.sh) -t
```
# 二、BBR
BBR 是 Google 提出的一种新型拥塞控制算法（Bottleneck Bandwidth and RTT），全称为瓶颈带宽和往返传播时间。
在 Linux 系统中，BBR 主要有以下特点和作用：

- **提高网络性能**：它可以显著提高吞吐量和降低 TCP 连接的延迟，使数据传输更加高效。
- **适应不同网络环境**：适合高延迟、高带宽的网络链路，以及慢速接入网络的用户，能在一定丢包率的网络链路上充分利用带宽，并降低网络链路上的缓冲区占用率从而降低延迟。
- **优化拥塞控制**：BBR 改变了传统基于丢包反馈的拥塞控制机制，通过精确测量往返传播时间（RTT）和瓶颈带宽等参数来更有效地控制数据发送速率，避免了传统算法中因单纯丢包判断拥塞而导致的带宽利用率不高和端到端延迟大等问题。
- **提升网络稳定性**：有助于减少网络拥塞和数据包丢失，提高网络的稳定性和可靠性。

因为我本人是PT玩家，所以接触到了一位大佬自己魔改的BBR版本，也就是BBRx。该版本调整了类似 `startup`（启动阶段）、`drain`（排空阶段）、`probe_bw`（探测带宽阶段）、`probe_rtt`（探测往返时间阶段）等状态下的一些关键参数，如 pacing_gain（发送速率增益）、cwnd_gain（拥塞窗口增益）等，个人来说觉得比原版BBR的效果更好，如果不喜欢的话，可以选择原版BBR进行安装。
## **开启BBRX加速**
```
bash <(wget -qO- https://raw.githubusercontent.com/jerry048/Tune/main/tune.sh) -x
```
**重启 VPS、使内核更新和BBR设置都生效**
```
sudo reboot
```
**确认BBR开启**
**如果你想确认 BBR 是否正确开启，可以使用下面的命令：**
```
lsmod | grep bbr
```
**此时应该返回这样的结果：**
```
tcp_bbrx
tcp_bbr
```
再次重启 VPS
```
sudo reboot
```
如果只有tcp_bbr则再等几分钟reboot
**此时再进行查询：**
```
lsmod | grep bbr
```
**此时应该返回这样的结果：**
```
tcp_bbrx
```
## **开启BBR加速（备选）**
```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```
也是重启VPS生效
# **三、添加SWAP**
在 Linux 系统中，`SWAP`（交换空间）是指一块磁盘空间，用于在物理内存（RAM）不足时，作为临时的扩展内存来使用。当系统的物理内存使用量接近饱和，Linux 内核会将一些不常使用的内存页交换到 `SWAP` 分区中，从而为当前运行的程序腾出更多的物理内存。当这些被交换出去的内存页再次被需要时，它们会被重新换回到物理内存中。`SWAP` 分区的存在可以在一定程度上避免由于物理内存不足导致系统性能严重下降或进程被强制终止的情况。
因此，`SWAP`对于内存小的VPS非常有必要，可以提高我们的运行效率。
**这里我们用脚本来添加。**
```
wget -O swap.sh https://raw.githubusercontent.com/eros520/Script/main/swap.sh && chmod +x swap.sh && clear && ./swap.sh
```
**查看当前内存**
```
free -m
```
# **四、安装Docker、Docker-compose**以及修改配置
## Docker
### Docker安装
#### 非大陆服务器
```
wget -qO- get.docker.com | bash
```
或
```
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```
#### 大陆服务器Docker安装
```
curl -sSL https://get.daocloud.io/docker | sh
```
### 查看Docker版本
```
docker -v
```
### 开机自动启动
```
sudo systemctl enable docker
```
### 卸载Docker
```
sudo apt-get purge docker-ce docker-ce-cli containerd.io
sudo apt-get remove docker docker-engine
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```
## Docker-compose安装
经佬友反馈，Docker从18.06.0-ce 版本就开始自带Docker Compose工具，因此，我们只需要检验是否Docker Compose的版本。
### 查看Docker Compose版本
```
docker compose version
```
## 五、修改SSH端口
修改 SSH 端口通常有以下几个主要原因：

1. **增强安全性**：SSH 服务默认使用的 22 端口是攻击者经常扫描和尝试攻击的目标。通过将端口修改为一个不常见的数值，可以减少自动攻击和暴力破解的风险，因为攻击者通常会首先针对常见的默认端口进行攻击。

例如，如果攻击者使用自动化工具扫描大量服务器，这些工具可能主要集中在 22 端口。而修改了端口后，就降低了被这类工具轻易发现和攻击的可能性。

1. **减少误连接和非法访问尝试**：一些网络环境中可能存在大量的随机连接请求或非法访问尝试，针对默认的 22 端口。更改端口可以减少这类无意义的连接请求。

假设您的服务器处于一个公共网络环境中，经常会收到大量的随机连接尝试，其中很多是针对常见端口的。修改 SSH 端口可以减少这类不必要的干扰。
**将默认的22端口修改为55520**（暗戳戳地表白）[@wanwan](https://linux.do/u/wanwan)
```
sudo sed -i 's/^#\?Port 22.*/Port 55520/g' /etc/ssh/sshd_config
```
**重启sshd服务**
```
sudo systemctl restart sshd
```
## 六、密钥登录
**一键生成你的密钥**
```
wget -O key.sh https://raw.githubusercontent.com/eros520/Script/main/key.sh && chmod +x key.sh && clear && ./key.sh
```
**！！！注意：请牢记你生成的密钥，否则会有无法连接SSH的后果。！！！**
## 七、安装fail2ban
**安装fail2ban**
```
apt install fail2ban
```
**配置fail2ban**
fail2ban的配置文件通常位于 `/etc/fail2ban/` 目录下，fail2ban的.conf配置文件都是可以被.local覆盖，所以配置方式建议是添加.local文件，不修改原来的配置文件。
```
nano /etc/fail2ban/jail.local
```
配置文件如下：
```
[DEFAULT]
#忽略的IP列表,不受设置限制（白名单）
ignoreip = 127.0.0.1

#允许ipv6
allowipv6 = auto

#日志修改检测机制（gamin、polling和auto这三种）
backend = systemd

#针对各服务的检查配置，如设置bantime、findtime、maxretry和全局冲突，服务优先级大于全局设置

[sshd]

#是否激活此项（true/false）
enabled = true

#过滤规则filter的名字，对应filter.d目录下的sshd.conf
filter = sshd

#ssh端口
port = ssh

#动作的相关参数
action = iptables[name=SSH, port=ssh, protocol=tcp]

#检测的系统的登陆日志文件
logpath = /var/log/secure

#屏蔽时间，单位：秒
bantime = 86400

#这个时间段内超过规定次数会被ban掉
findtime = 86400

#最大尝试次数
maxretry = 3
```
Ctrl+S保存并退出
**设置开机自动启动fail2ban**
```
sudo systemctl enable fail2ban
```
**重新启动fail2ban**
```
sudo systemctl restart fail2ban
```
**查看fail2ban的状态**
```
sudo systemctl status fail2ban
```
**查看所有可用jail的状态**
```
fail2ban-client status
```
