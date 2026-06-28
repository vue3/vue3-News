# Vue 3 2025–2026 阅读与研究清单

## 官方文档与发布

1. Vue 3.3 Announcement
   - 链接：https://blog.vuejs.org/posts/vue-3-3
   - 重点：`<script setup>` TypeScript DX、宏增强、`defineModel`、`defineSlots`、`defineOptions`、`toValue`。

2. Vue 3.4 Announcement
   - 链接：https://blog.vuejs.org/posts/vue-3-4
   - 重点：2x 模板解析器、SFC 构建性能、Reactivity 优化、`defineModel` 稳定、`v-bind` 同名简写、hydration mismatch 改进、删除全局 JSX 命名空间。

3. Vue 3.5 Announcement
   - 链接：https://blog.vuejs.org/posts/vue-3-5
   - 重点：Reactivity 性能与内存优化、SSR 新能力（lazy hydration、useId、data-allow-mismatch）、Custom Elements、`useTemplateRef()`、`Deferred Teleport`。

4. Vue Core Releases Overview
   - 链接：https://github.com/vuejs/core/releases
   - 重点：跟踪 3.5 稳定和 3.6 beta 发布节奏，了解当前 release 状态。

5. Vue Core CHANGELOG
   - 链接：https://github.com/vuejs/core/blob/main/CHANGELOG.md
   - 重点：查看每个版本更细粒度的变更、bug 修复和兼容提示。

6. Vue RFC Repository
   - 链接：https://github.com/vuejs/rfcs
   - 重点：监督重大设计决策、正在讨论的实验特性和未来架构趋势。

## 社区与趋势文章

1. Vue 3.6 性能革命：Vapor Mode + Alien Signals
   - 链接：https://juejin.cn/post/7485998798654767114
   - 重点：社区对 3.6 性能路线、Vapor 渲染模式、Alien Signals 响应式升级的深度解读。

2. 尤雨溪剧透 Vue 3.6
   - 链接：https://juejin.cn/post/7478576823612047396
   - 重点：大会预览视角，下一个版本的性能、类型系统和渲染模式趋势。

3. Vue 3.6 预览：Vapor Mode 性能炸裂
   - 链接：https://juejin.cn/post/7471246544843702308
   - 重点：Vapor Mode 具体性能指标与演进路径。

4. Vapor Mode 正式落地
   - 链接：https://juejin.cn/post/7646719989278539817
   - 重点：从实验到生产可用的实践观察，适合评估稳定性与可迁移性。

5. Vue 的下一个十年：编译、信号与 AI
   - 链接：https://juejin.cn/post/7648520470531539007
   - 重点：宏观趋势分析，帮助判断 Vue 未来发展方向。

6. Signals 正在重塑开发习惯
   - 链接：https://juejin.cn/post/7628623424596394019
   - 重点：响应式信号模型对前端编程模式的影响，适合架构和团队讨论。

7. Vue 4.0 前瞻：分层渲染终极答案
   - 链接：https://juejin.cn/post/7647004002824142890
   - 重点：未来版本趋势与 Vapor Mode 之后的进一步演进。

## 版本监控与活跃源

- GitHub Issues: `vuejs/core/issues?q=vapor`
  - 重要 PR：`fix(runtime-vapor): pair vdom interop update hooks`、`perf(compiler-vapor): cache child context analysis`、`fix(runtime-vapor): pause tracking when invoking function refs`
- GitHub Releases: 关注 `v3.6.0-beta.*`
- Vue 生态库：`nuxt/framework`、`antfu/vueuse`、`element-plus` 等仓库近期对 Vue 3.5/3.6 特性兼容性的动态说明。

## 研究策略建议

- 先以官方 3.3/3.4/3.5 博客与 changelog 作为“稳定特性”知识基准。
- 以 3.6 Beta 与社区文章作为“趋势性研判”补充，特别关注 Vapor Mode、Signals 与未来渲染设计。
- 结合 RFC 与 issue 轨迹判断哪些实验功能有望进入正式版本，哪些还可能继续调整。
- 对于 `vue3-News`，建议建立“稳定发布 -> 未来预览 -> 生态兼容”三条内容线。
