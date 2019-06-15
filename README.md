
![](https://github.com/vue3/vue3-News/raw/master/asset/vue3-news-back.png)

<p align="center">
  <img src="https://img.shields.io/badge/language-HTML--CSS--JavaScript-green.svg">
  <img src="https://img.shields.io/badge/vue-3+-3eaf7c.svg">
  <img src="https://img.shields.io/badge/vueCLI-3+-orange.svg">
  <img src="https://img.shields.io/badge/vue3-UI-ff69b4.svg">
  <img src="https://img.shields.io/badge/license-MIT-ccc.svg">
</p>

# 集 Vue3+ & Vue-CLI3+ 开发生态圈和填坑姿态 


__关于旧版本__

Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。

__Node 版本要求__

Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

### 不要叫我达芬奇

* [Vue CLI 3 项目构建基础](http://blog.poetries.top/2019/06/01/vue-cli3/)  
* [你了解vue3.0响应式数据怎么实现吗？](https://juejin.im/post/5cf8b51ae51d45590a445b0d)  
* [模拟 vue3.0 rfcs `createComponent` api 中的`props`类型推导](https://segmentfault.com/a/1190000019457171)  
* [Vue-cli 3.5.1 + Webstorm 使用手机访问演示页面](https://segmentfault.com/a/1190000018531202)  
* [用vue3公开的思路从0实现最简化的vue](https://juejin.im/post/5cbc7a06f265da03587bfad0)  
* [在 WebStorm 中，配置能够识别 Vue CLI 3 创建的项目的别名 alias @](https://juejin.im/post/5c9477ad6fb9a070ce31b050)  
* [配置一个vue3.0项目](https://juejin.im/post/5cc18abdf265da039e1ff5fb)  
* [快速上手最新的 Vue CLI 3](https://segmentfault.com/a/1190000018989241)  

### 十一月，天寒之时必封初冬

#### 1、[Vue CLI 3搭建vue+vuex 最全分析](https://yq.aliyun.com/articles/646152)
> 介绍 Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统。有三个组件： CLI：@vue/cli 全局安装的 npm 包，提供了终端里的vue命令（如：vue create 、vue serve 、vue ui 等命令） CLI 服务：@vue/cli-service是一个开发环境依赖。

#### 2、[Vue.js 2 vs Vue.js 3的实现](https://www.cnblogs.com/wwhhq/p/8196251.html)  
> vue.js核心团队已经讨论过将在Vue3实现的变化。虽然API不会改变，但是数据响应机制（译者注：对数据改变的监听和通知）发生了变化。这意味着什么呢，同时它对你意味着什么呢？

#### 3、[vue3.0快速创建项目](https://blog.csdn.net/xuqipeter/article/details/80452271)  
> vue3.0使用了cli3快捷搭建的技巧和配搭

#### 4、[Vue.js 3.0 PPT（附部分中文翻译）](https://juejin.im/post/5bed9c31e51d4516f64d528a)  
> Evan You 刚刚发布了最新的 Vue 3 和他在 Vue Toronto 的演讲内容：

#### 5、[vue3.0初体验有哪些实用新功能](https://www.jianshu.com/p/0d78ff9fe6ed)  
> 关于项目创建，除了命令创建3.x还增加了图形化界面创建以及管理vue项目
在创建新项目时还可以混合选用多种集成

#### 6、[Vue 3.0 的生命周期](https://www.cnblogs.com/weihengblog/p/9241136.html)
> ue 3.0 的生命周期多了哪些东西和其中又改变了什么

#### 7、[Vue-cli 3.0初体验](http://www.imooc.com/article/79631)
> 如今上Vue官网一看，脚手架都早已出3.0版了。唉，果然干这行一天不学习都感觉要落伍……

#### 8、[重磅！Vue CLI 3.0正式发布，带来多项重大更新](https://baijiahao.baidu.com/s?id=1608931885589870861)
> 近日，Vue 的作者尤雨溪在 Medium 上宣布正式发布 Vue CLI 3.0，它也将为很多开发者带来期待已久的新特性。

#### 9、[译文：Vue.js 3.0 开发计划](https://www.toutiao.com/a6611073486846689795/)
> 在上周的 Vue.js 伦敦会议上我简短地透露了下个版本的 Vue 的新特性。这篇文章讲深入地阐述 

#### 10、[Vue 下个版本的计划。Vue CLI 2&3 下的项目优化实践：CDN + Gzip + Prerender](https://www.toutiao.com/a6613157936636101127/)
> 这些优化方案适用于 Vue CLI 2 和 Vue CLI 3 , 文章主要基于 Vue CLI 2 进行介绍，关于如何在 Vue CLI 3 中进行相关的 webpack 调整，我已经放在了 vue-cli3-optimization 这个仓库下，并配有详细的注释，且额外添加方便 Sass 使用的 loader，使用 Sass 时无需再在每个需要引入变量和 mixin 的地方，每次都很麻烦的 @import。下面将详细介绍这些优化方案的实践方式和效果。

#### 11、[Vue CLI 3发布：精简配置，增加图形界面，还有这些新功能](https://www.toutiao.com/a6589191783790412301/)
> 不同的项目往往有不同的需求，所以webpack这种高可配的打包工具才会火起来，但同时也被骂太复杂了。所以很多人就想简化或者封装配置，例如facebook/create-react-app将所有的配置脚本封装为NPM软件包。

#### 12、[专访Vue作者尤雨溪：Vue CLI 3.0重构的原因](https://www.toutiao.com/a6598367147800396295/)
> 上个月，Vue CLI 3.0 正式发布，为很多开发者带来期待已久的新特性，尤雨溪也说 Vue CLI 3.0 经历了重构，旨在尽可能减少现代前端工具在配置上的烦恼，并尽可能在工具链中加入最佳实践，让其成为 Vue 应用程序的默认实践。为了获取更多细节，InfoQ 采访了尤雨溪，以下是对采访内容的整理。

#### 13、[重磅！尤雨溪发布Vue 3.0开发路线](https://www.toutiao.com/a6607650510172324365/)
> 在上周的 Vue.js 伦敦大会上，尤雨溪简要介绍了 Vue 下一个主要版本要发布的内容，9 月 30 日，尤雨溪在 medium 个人博客上发布了 Vue 3.0 的开发路线，全文如下


