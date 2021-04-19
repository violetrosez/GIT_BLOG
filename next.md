- http 的 get 和 post 区别

- 缓存策略

- https 的握手过程

- http2 的特点

- - 二进制传输
  - Header 压缩，顺便吹了一下哈夫曼编码
  - 多路复用
  - 服务器推送

- weak-Set、weak-Map 和 Set、Map 区别

- mvvm 模型和 mvc 模型区别

- 如何实现一个 mvvm 模型

- - 数据劫持 + 发布订阅

- 为何你用 mobx 重构了 saga，说说两者之间的区别

- - 简单说了一下 mobx 的实现原理

- 说说 vnode 的了解

- - vnode 是作为数据和视图的一种映射关系
  - vue 和 react 的 diff 算法有相同和有不同，相同是都是用同层比较，不同是 vue使用双指针比较，react 是用 key 集合级比较

- 讲讲 webpack 的性能优化

- - 体积：讲了一下 tree-shaking 了解
  - 打包速度：cache-loader、dll、多线程

- 有写过 plugin

- - 没有，但是了解他的原理，讲了一下大概有哪些 compiler 钩子

- 了解 webpack-dev-server 的 HMR 实现原理吗

- 手写一下防抖和节流

### **2 面**

- 你做过直播，能介绍一下 webRTC 或者现在使用直播方案吗

- - 虽然我是使用声网的 SDK，但是大概了解过一般直播的直播方案
  - 讲了一下 NAT、STUN、RTP、SDP 的基本概论
  - 然后两个信令服务器，一个是声网用来控制进房间媒体流的 socket，一个是业务逻辑的 socket

- 编码方面有了解过吗，能解释一下码率吗

- 对于 P 帧、I 帧、B 帧有了解过

- - I 帧：关键帧。可以单独解码成一幅完整的图像。
  - P 帧：参考帧。解码时依赖于前面已解码的数据
  - B 帧：前后参考帧 B 帧后面的 P 帧要优先于它进行解码，然后才能将 B 帧解码

- RGB 和 YUV 区别

- 有了解过哪些直播协议

- - httpflv 传输方式：http 流，格式：flv，连续流
  - rtmp 传输方式：tcp 流，格式：flv，连续流
  - hls 传输方式：http，格式：TS 文件，移动端兼容但 PC 不兼容
  - dash 这个不太常见只知道传送方式是 http

- flv 和 mp4 区别有了解过吗

- - 他们都是属于容器，区别在于文件头信息
  - flv 是属于流式文件是可以边传边解的，不需要通过索引分包，但是 mp4 是需要依赖索引表

- MediaSource 规范有了解过

- - 没怎么了解，但是还是扯了一下不同码率视频切换是怎么做的

然后还问了一下别的东西，但是我不是很懂就不知清楚了，感觉这一轮面试好奇怪。前端基本没面，反而音视频处理问了很多。

### **3 面**

- webSocket 和 ajax 的区别

- xss、csrf 有了解过吗，如何防范

- 有了解过 React 的 fiber

- - fiber 诞生的背景，为何 react 有时间切片而 vue 不需要

- 能简单介绍一下 react 执行过程吗

- - performUnitOfWork
  - beginWork
  - completeUnitOfWork

1. jsx 经过 babel 转变成 render 函数
2. create update
3. enqueueUpdate
4. scheduleWork 更新 expiration time
5. requestWork
6. workLoop大循环
7. Effect List
8. commit

能介绍一下 hook 吗

- 比起 hoc，hook 的复用性高
- useState、useEffect、useRef 用法
- 优化 usecallback、useMemo

情景题，做一个直播弹幕

- 字幕的速度，大小
- requestAnimationFarme 和 setTimeout 区别
- 弹幕节流问题
- socket 和轮询优缺点，弹幕池的设计
- 如何避免弹幕碰撞（这个我答得不好，后来搜索一下有一个飞机场算法）

