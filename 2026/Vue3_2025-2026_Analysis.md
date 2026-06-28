# Vue 3 Evolution (2025–2026)

## 概览

2025 年以来，Vue 3 进入了一个“性能与开发体验并重”的快速迭代阶段。官方稳定版本集中在 3.3、3.4、3.5，3.6 进入 beta 预览期，并带来社区热议的 Vapor Mode 和 Alien Signals。

## 关键趋势

1. **编译器与构建性能**
   - Vue 3.4 重写模板解析器，采用基于 `htmlparser2` 的状态机 tokenizer，实现 2x 模板解析速度提升，并显著加快 SFC 构建。
   - SFC 生成源码与 SourceMap 性能优化，使真实项目编译时间更友好。

2. **响应式系统与内存优化**
   - 3.4 的 reactivity refactor 让 computed 依赖变更更精准：只有结果变化时才重新触发 effect，并对 `Array.shift/unshift/splice` 进行单次同步触发。
   - 3.5 深度重构响应式核心，报告最高约 56% 内存使用下降，并修复 SSR 中“挂起 computed”导致的 stale 值与内存问题。
   - 3.5 对大型深度数组跟踪进行了优化，部分场景性能提升可达 10x。

3. **渲染模式与预览特性**
   - 3.6 预览阶段的核心技术方向集中在“Vapor Mode”和“Alien Signals”。
   - Vapor Mode 由社区预览描述为跳过传统虚拟 DOM、直接生成原生 DOM 操作指令，适合高频更新与大规模组件场景。
   - Alien Signals 被定位为响应式系统的下一代底层协议，旨在更高效地跟踪依赖、减小内存、提升信号契合度。
   - 这些特性目前仍处于实验/预览阶段，适合调研和试验，而非直接纳入生产稳定主干。

## 版本亮点

### Vue 3.3（2023-05）

- `script setup` + TypeScript DX 大幅提升
  - 支持导入类型、复杂类型、泛型组件
  - `defineEmits` 更具表现力的类型声明
  - `defineSlots` 类型化插槽声明
  - `defineOptions` 在 `<script setup>` 中声明组件选项
  - `toRef` / `toValue` 强化 getter 与普通值统一处理
- 实验功能：`reactive props destructure`、`defineModel`
- 维护基础设施改进：构建、测试、类型生成速度提升

### Vue 3.4（2023-12）

- **编译器性能**：模板解析器重写，2x 更快
- **Reactivity 更高效**：减少不必要的 effect 触发，尤其是 computed 和数组操作
- `defineModel` 正式稳定，改善 `<script setup>` 中 `v-model` 体验
- 新语法：`v-bind` 同名简写
- 更好的 SSR 开发体验：更清晰的 hydration mismatch 错误
- **移除与破坏兼容**：默认不再全局注册 JSX 命名空间；Reactity Transform 移除；`v-is` 变更为 `vue:is`

### Vue 3.5（2024-09）

- **Reactivity 核心优化**：全面内存下降、deep reactive array 速度提升、SSR stale computed 修复
- **SSR 进阶**：
  - `lazy hydration` for async components
  - `useId()` for stable SSR IDs
  - `data-allow-mismatch` to suppress safe hydration mismatches
- **Custom Elements 改进**：主机元素访问、shadowRoot 配置、nonce 支持、无 Shadow DOM 支持
- `useTemplateRef()`、`Deferred Teleport`、`onWatcherCleanup()` 等实用 API
- `reactive props destructure` 进入默认模式

### Vue 3.6（beta / preview，2025–2026）

- 3.6 目前在 beta 发布阶段，官方 release 页面显示多个 beta 版本（beta.12 至 beta.17）。
- 社区热议核心：Vapor Mode、Alien Signals、性能与类型系统全面提升。
- 重点方向：
  - 逐步共存的渲染模式，允许对热点区块启用 Vapor Mode
  - 信号级响应式模型，兼顾 Vue 响应式与 Web 生态信号实现
  - TypeScript 体验优化，减少 `DefineComponent` 类型复杂度

## 生态与社区信号

- Vue 3.5 稳定版已成为当前主流升级目标；3.6 作为“技术试水和性能路线图”的信号版本。
- 社区文章与大会讨论集中于“Vapor Mode 能否真正替代 VDOM？”和“Alien Signals 是否会带来框架间响应式通用标准？”
- Vue 生态重要项目仍在同步：`vueuse`、`pinia`、`nuxt/framework`、`element-plus` 等，说明生态兼容性与迁移成本是核心考量。
- Vue RFC 仍是核心设计的集中点；稳定特性通常先在 RFC/讨论中出现，再进入实验、最后至正式发布。

## 关键影响点

1. **升级策略**
   - 已在生产中的项目：优先升级到 Vue 3.5，并配套更新 Volar / vue-tsc、Vite、Nuxt 等依赖。
   - 需要更好 TypeScript DX 的项目：3.3 起步，3.4/3.5 通过 `defineModel`、`reactive props destructure` 进一步简化。
   - 追求性能前沿的项目：关注 3.6 beta 的 Vapor / Signals，但先行实验、验证兼容性后再大规模采用。

2. **文档与内容角度**
   - 对 `vue3-News` 这样的项目，当前最佳切入点是：
     - 稳定版本的“编译器 + reactivity + SSR + TS DX”深度解读
     - 3.6 预览的“性能路线图与框架趋势”专题
     - 生态依赖与迁移建议，如 `vueuse` / `pinia` / `nuxt` 的兼容性

3. **风险点**
   - 3.4 的类型与 JSX 变更可能导致 TSX/JSX 代码编译问题；升级前需要检查 `jsxImportSource` 配置。
   - 3.6 Vapor Mode 在跨框架兼容、组件生命周期、插槽等场景仍有稳定性和互操作性风险。

## 结论

从 2025 年起，Vue 3 已从“语法演进”进入“底层性能与渲染模式双线推进”阶段。当前最实用的价值在于：

- 3.3–3.5 的 TypeScript DX、编译器与响应式优化
- 3.5 的 SSR 体验和内存/性能稳定改进
- 3.6 的 Vapor Mode / Alien Signals 提供了未来方向，但仍应将其视为“高级预研与早期试验”而非标准生产路径。

该分析适合用于技术策略报告、产品演进建议，以及为 `vue3-News` 创建“Vue 3 未来趋势”专题素材。
