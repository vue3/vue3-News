# Vue 3 2025–2026 兼容风险与落地风险控制

## 1. 破坏性变更与兼容点

### 1.1 3.4 破坏性变化

- `v-is` 的旧写法在 3.4 中已移除，必须使用 `vue:is`。
- Reactivity Transform 不再内置，需要继续使用时依赖 `@vue-macros` 或类似插件。
- 默认情况下不再全局注册 `JSX` 命名空间，TSX/JSX 项目需要手动配置。

### 1.2 3.5 兼容风险

- SSR 相关新特性需要与现有 hydration 代码共同验证，错误使用可能造成页面闪烁或 content mismatch。
- `data-allow-mismatch` 可以减少警告，但如果误用可能掩盖真实渲染差异。
- Custom Elements 与 Shadow DOM 配置的边界条件仍需要测试。

### 1.3 3.6 Beta 风险

- `Vapor Mode` 在组件生命周期、插槽和跨渲染边界上的兼容性仍在调整。
- `Alien Signals` 可能与现有 reactivity 插件、第三方状态库出现互操作差异。
- Beta 版本可能出现非兼容 bug、类型系统回退或行为修复。

## 2. 生态兼容风险

### 2.1 关键依赖矩阵

- Nuxt
- Pinia
- VueUse
- Element Plus / Naive UI / Ant Design Vue
- Vite / @vitejs/plugin-vue
- Volar / @vue/language-tools
- ESLint + eslint-plugin-vue

### 2.2 依赖升级原则

- 先升级核心框架，再升级生态库。
- 依赖锁定：`package-lock.json` / `pnpm-lock.yaml` 应稳定位于相同 Vue 版本组合。
- 对于大型项目，可通过 `npm ls` / `pnpm why` 检查版本冲突。

### 2.3 常见兼容问题

- `Pinia` 插件或持久化方案对 `Alien Signals` 的支持未知。
- `Nuxt` 的 SSR / hydration 流程可能在 `Vapor Mode` 下出现新问题。
- UI 组件库在 `3.6 Beta` 下的兼容性需要单独验证。

## 3. 风险控制策略

### 3.1 升级前风险评估

- 建立升级风险清单：编译、SSR、TSX、第三方依赖、测试覆盖。
- 区分“核心路径”与“非核心路径”：关键功能优先验证。
- 评估是否需要采用“灰度发布”与“Canary 版本”。

### 3.2 测试策略

- 必须包含：单元测试、集成测试、端到端测试、SSR 对比测试。
- 增加 `hydration mismatch` 监控，记录 `data-allow-mismatch` 区域行为。
- 对 `Vapor Mode` 试点，比较性能基线、内存快照、页面渲染时间。

### 3.3 回退方案

- 保留旧版本分支和锁文件。
- 逐步回退：先回退有风险的生态库，再回退核心 Vue 版本。
- 如果出现无法预测的兼容问题，优先回退 `3.6 Beta` 至 `3.5`，而不是回退整个 `3.x` 体系。

## 4. 常见高风险场景

### 4.1 组件库和 UI 框架

- 组件库通常对内部渲染机制敏感，`Vapor Mode` 与 `Alien Signals` 可能带来边界 bug。
- 升级前确认组件库是否已发布兼容公告或修复补丁。

### 4.2 SSR 与 hydration 匹配

- 任何服务端渲染项目都应重点验证 `useId()`、`lazy hydration` 和 `data-allow-mismatch`。
- 预防失败策略：在升级后对关键页面进行“SSR 结果快照”比对。

### 4.3 TSX / JSX 代码库

- `jsxImportSource` 配置缺失会直接导致类型错误或语法检查失败。
- 需要检查 `vite`、`tsconfig`、`eslint` 三处配置是否一致。

### 4.4 Reactivity Transform 依赖

- 如果使用 Reactivity Transform，升级 3.4 及以上版本时要确认是否继续保留 `@vue-macros/vite-plugin` 等。
- 建议逐步迁移到标准 `ref`/`reactive`/`toRef` API，避免长期依赖实验性语法。

## 5. 具体兼容检查清单

- [ ] `vue`、`@vue/compiler-sfc` 版本一致。
- [ ] `vite` 与 `@vitejs/plugin-vue` 兼容目标版本。
- [ ] `@vue/language-tools` / `volar` 是否已升级。
- [ ] `TSX` 项目是否配置 `jsxImportSource`。
- [ ] `v-is` 是否已迁移为 `vue:is`。
- [ ] 如果使用 `Reactivity Transform`，是否有插件支持。
- [ ] SSR hydration 匹配区域是否已评估 `data-allow-mismatch`。
- [ ] 组件库与 UI 依赖是否存在兼容公告。
- [ ] 是否建立 `3.6 Beta` 试点分支并区分稳定发布路线。

## 6. 风险总结

- **稳定生产**：推荐 `Vue 3.5`，不建议将 `3.6 Beta` 作为默认生产版本。
- **性能预研**：`Vapor Mode` 和 `Alien Signals` 是重要趋势，但仍然属于“高级试验”级别。
- **升级节奏**：先做小步验证，再做整体升级；避免一次性更改太多依赖。
