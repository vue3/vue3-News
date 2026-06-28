# Vue 3 2025–2026 升级策略

## 1. 当前推荐版本

- **主线稳定版本：Vue 3.5**
  - 生产系统最成熟的版本。
  - 对编译性能、Reactivity、SSR、Custom Elements 进行了可量化优化。
  - 适合已有项目直接升级，并作为长期维护分支的基准。

- **试点与预研版本：Vue 3.6 Beta**
  - 重点关注 `Vapor Mode` 和 `Alien Signals`。
  - 适合性能敏感的 PoC、研究型项目或 `vue3-News` 的趋势专题。
  - 不建议直接用于主干生产环境。

## 2. 升级路径建议

### 2.1 已有项目（稳定生产）

- 目标：优先升级到 `Vue 3.5`，并保持生态依赖同步。
- 核心依赖推荐同步升级：
  - `vite` / `@vitejs/plugin-vue`
  - `vue-tsc` / `typescript`
  - `@vue/compiler-sfc`
  - `@vueuse/core`
  - `pinia` / `vue-router` / `element-plus` / `naive-ui`
  - `@vue/language-tools` / `volar`

### 2.2 试点项目（性能或前沿特性验证）

- 目标：在独立分支或 PoC 中验证 `Vue 3.6 Beta`。
- 重点验证项：
  - `Vapor Mode` 对渲染性能与内存的实际提升。
  - `Alien Signals` 与现有响应式代码的互操作性。
  - 组件复用、插槽、生命周期、SSR 混合模式下的稳定性。

### 2.3 新项目启动

- 建议以 `Vue 3.5` 为默认版本。
- 仅在业务确实需要“未来性能路线”时，将 `3.6 Beta` 作为试验依赖加入预研分支。

## 3. 版本选择原则

- 如果团队目标是“降本、稳态、最小风险”：选择 `Vue 3.5`。
- 如果团队目标是“性能试验、框架趋势研究”：建立 `Vue 3.6 Beta` PoC。
- 如果项目中大量依赖 `TSX/JSX`、`Nuxt`、`Element Plus`：先确认生态兼容后再升级。

## 4. 典型升级检查项

### 4.1 基础依赖同步

- `package.json` 中 Vue 相关依赖版本一致。
- `vite`、`@vitejs/plugin-vue` 兼容所选 Vue 版本。
- `@vue/language-tools` 与 `volar` / `Volar` 自动补全配套升级。

### 4.2 编译与运行时检查

- 运行完整构建、类型检查和单元测试。
- 人工检查控制台 hydration mismatch、警告、编译错误。
- 验证关键页面浏览器行为与服务端渲染结果一致。

### 4.3 配置与代码改造

- `TSConfig` 中处理 TSX：

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "vue",
    "importsNotUsedAsValues": "preserve"
  }
}
```

- 迁移 `v-is` 至 `vue:is`。
- 如果使用 Reactivity Transform，确认是否需要保留 `@vue-macros/webpack`、`vite-plugin-vue-macros`。

## 5. 3.6 Beta 的试点建议

### 5.1 试点原则

- `3.6 Beta` 不是默认升级目标，而是“技术雷达”的试点对象。
- 只在专门分支、单独仓库或 PoC 项目中使用。
- 不与主生产分支同步发布。

### 5.2 试点评估维度

- 渲染性能：`Vapor Mode` 是否对热点页面带来显著帧率或首屏提升。
- 内存占用：是否存在内存抖动、GC 频率上升或对象泄漏。
- 兼容性：`Alien Signals` 是否与第三方状态库、响应式数据源协同。
- 开发体验：是否出现调试、堆栈、错误信息缺失等问题。

### 5.3 试点落地建议

- 采用功能开关式验证：对特定热点组件启用 `Vapor Mode`。
- 记录与对比：性能基准、GC 快照、SSR hydration 成本。
- 细分边界：单页应用、次要页面、纯客户端组件、SSR 页面分别试验。

## 6. 具体升级步骤（生产项目）

1. 备份或开启新分支。
2. 更新 `vue`、`@vue/compiler-sfc`、`@vue/runtime-dom` 等核心依赖。
3. 同步升级 `vite`、`@vitejs/plugin-vue`、`vue-tsc`、`@vue/language-tools`。
4. 执行 `npm install` / `pnpm install`。
5. 修正编译错误与类型错误。
6. 检查 `v-is`、`Reactivity Transform`、`jsxImportSource` 等配置。
7. 运行完整测试和 SSR 对比。
8. 发布灰度或 Canary，观察真实用户数据。

## 7. 回退与风险控制

- 保持旧版本分支，必要时可快速回退。
- 先升级开发环境，再升级测试环境，最后升级生产环境。
- 使用 `package-lock.json` / `pnpm-lock.yaml` 锁定依赖版本，避免跨环境差异。
- 记录“升级前后性能基线”与“关键报错清单”。
