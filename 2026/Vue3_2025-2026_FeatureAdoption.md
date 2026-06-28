# Vue 3 2025–2026 特性采纳建议

## 1. 编译器与构建

### 1.1 推荐版本与收益

- 3.4+ 提供更快的模板解析器和 SFC 编译性能。
- 适合大型项目减少冷启动编译时间，增强本地开发效率。
- 建议与 `vite`、`@vitejs/plugin-vue`、`vue-tsc` 同步升级。

### 1.2 关键落地点

- `script setup` 继续作为首选语法。
- `defineOptions` 可用于声明组件选项。
- `defineSlots`、`defineEmits` 仍是类型化插槽与事件的首选方式。

### 1.3 关注点

- `TSX` 项目要确认 `jsxImportSource: 'vue'`。
- `@vue/compiler-sfc` 版本必须与 `vue` 匹配。
- `vite` 插件与 `vue-tsc` 版本要确保兼容 `3.5` 或 `3.6 Beta`。

## 2. 响应式与性能

### 2.1 3.4/3.5 的核心优化

- `computed` 触发更精准：只有结果真正变化时才重新通知依赖。
- 对数组操作（例如 `shift`、`unshift`、`splice`）的依赖触发做了更细粒度优化。
- 深度数组跟踪性能显著提升，适合大数据结构场景。

### 2.2 关键 API

- `toRef()` / `toValue()`
  - 用于将 props、refs、普通值统一处理。
  - 例如：
    ```ts
    const count = toValue(props.count);
    const fooRef = toRef(props, "foo");
    ```
- `reactive props destructure`
  - 3.5 后该模式默认支持。
  - 例如：
    ```ts
    const { title } = toRefs(props);
    ```
- `defineModel()`
  - 3.4 之后逐步纳入标准写法。
  - 推荐用于多个 `v-model` 绑定的组件。

### 2.3 采纳建议

- 生产项目：优先使用标准响应式 API，避免过度依赖实验性语法。
- 新代码：可逐步引入 `toRef` / `toValue`，提升类型一致性。
- 数组/列表密集型逻辑：重点验证 3.5 对比 3.4 的性能差异。

## 3. SSR 与 hydration

### 3.1 重点能力

- `useId()`：解决 SSR/CSR ID 不一致问题。
- `lazy hydration`：对异步组件场景进行延迟 hydration，减少首屏阻塞。
- `data-allow-mismatch`：在可接受差异的区域减少无谓警告。

### 3.2 推荐实践

- SSR 页面使用 `useId()` 为必须一致的 DOM 标识生成稳定 ID。
- 对于非关键内容和广告位，采用 `data-allow-mismatch` 以降低 hydration 阈值。
- 异步组件如动态列表、入口位组件可先试用 `lazy hydration`。

### 3.3 新 API

- `useTemplateRef()`：方便获取模板 ref，减少手动 `ref` 绑定。
- `Deferred Teleport`：提升跨层级内容渲染的可控性。
- `onWatcherCleanup()`：用于清理 watcher 相关资源。

## 4. TSX / JSX 兼容性

### 4.1 3.4 的变化

- 3.4 取消默认全局 `JSX` 命名空间。
- TSX 项目必须明确指定 `jsxImportSource: 'vue'`，否则会出现类型缺失。

### 4.2 配置示例

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "vue",
    "importsNotUsedAsValues": "preserve"
  }
}
```

### 4.3 生态配套

- 同步升级 `@vue/language-tools` / `volar`。
- 检查 `tsconfig`、`vite.config` 中的 `jsx` 和 `jsxFactory` 配置。

## 5. Custom Elements 与 Web Components

### 5.1 3.5 改进点

- 更好支持 Shadow DOM 配置和 `nonce`。
- 增加主机元素访问能力。
- 提供无 Shadow DOM 模式。

### 5.2 采纳建议

- 需要浏览器原生组件交互的项目，可以将 `Vue Custom Element` 与 3.5 结合使用。
- 注意 `customElements.define()` 的注册时机与 `hydrate` 模式兼容。

## 6. 3.6 Beta 预研特性

### 6.1 Vapor Mode

- 目标：跳过传统 VDOM，直接生成更轻量的 DOM 操作指令。
- 适合：高频更新热点组件、大规模重复渲染区域。
- 目前状态：试验阶段，需重点观察跨组件、插槽、SSR 兼容性。

### 6.2 Alien Signals

- 目标：构建更通用、更高效的信号响应式协议。
- 作用：减少内存占用、提高依赖跟踪效率。
- 试验策略：按模块逐步引入，观察与现有 Pinia、VueUse、第三方信号库的互通。

### 6.3 试点建议

- 将 `Vapor Mode` 仅用于性能热点验证。
- 在 `vue3-News` 内容中保留“预览篇”与“稳定篇”分开叙述。
- 避免将 3.6 Beta 作为默认推荐版本。

## 7. 特性采纳矩阵

- 立即采用：`3.5` 的 `useId()`、`lazy hydration`、`data-allow-mismatch`、`Deferred Teleport`、`defineModel`。
- 逐步验证：`Vapor Mode`、`Alien Signals`、Custom Elements 细节、TSX 新配置。
- 观望/预研：`3.6 Beta` 全局切换、Reactivity Transform 替代、未来 Vue 4 渲染模型。
