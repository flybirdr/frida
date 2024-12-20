# python
# -*- coding: utf-8 -*-

import frida
import sys

# print(frida.get_local_device())

# # 获取远程usb 连接的设备
rdev = frida.get_usb_device()

# 获取设备信息
# rdev = frida.get_remote_device()
print(rdev)

front_app = rdev.get_frontmost_application()
print("============》》》 正在运行的应用为：", front_app)


# applications = rdev.enumerate_applications()
# for application in applications:
#     print(application)

def on_message(message, data):
    if message['type'] == 'send':
        print("*****[frida hook]***** : {0}".format(message['payload']))
    else:
        print("*****[frida hook]***** : " + str(message))


def get_javascript(filepath):
    code = ''
    with open(filepath, 'r') as file:
        code = code + file.read()
    return code


# 连接远端设备
device = frida.get_usb_device()
print(device)
# 附加到进程

# session = device.attach("中国移动")
# session = device.attach("咪咕快游")
# session = device.attach("咪咕音乐")
# session = device.attach("咪咕视频")
session = device.attach("微信")

# pid = device.spawn(['cmccwm.mobilemusic'])
# pid = device.spawn(['cn.emagsoftware.gamehall'])
# pid = device.spawn(['com.cmcc.cmvideo'])
# session = device.attach(pid)

#("com.kuaishou.nebula")
# 1、直接写入 javascript 代码
# javascript = """
# <javascript code>
# """
# 2、从文件中加载 javascript 脚本代码
javascript = get_javascript("./script.js")
# 基于脚本内容创建运行脚本对象
script = session.create_script(javascript)
script.on('message', on_message)
# 加载脚本并执行
script.load()
# device.resume(pid)
sys.stdin.read()


# process = device.spawn(["com.cmic.sso.myapplication"])
# device.resume(process)

# 启动方式2 spawn 重启APP 可以hook APP启动阶段
# pid = device.spawn(['com.tencent.mobileqq'])
# process = device.attach(pid)
# # 2、从文件中加载 javascript 脚本代码
# javascript = get_javascript("./frida.js")
# # 基于脚本内容创建运行脚本对象
# script = process.create_script(javascript)
# script.on('message', on_message)
# print('[*] Running')
# script.load()
# device.resume(pid)
# sys.stdin.read()
