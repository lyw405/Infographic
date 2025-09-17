## 开发说明

### 项目结构

```md
packages/
├── infographic-jsx/ - jsx 语法底层实现
│ ├── components - 原语组件
│ ├── jsx-runtime.ts - jsx 运行时
│ ├── renderer.ts - SVG 渲染器
│ └── layout.ts - 布局
├── infographic/ - 信息图生成、导出等核心功能
│ ├── generator - 模版组件定义（包含基本组件 components, 数据项 items, 布局 layouts, 结构 structures）
│ ├── renderer - 渲染器
│ └── resource - 资源管理
└── dev/ - 开发调试
```

### 安装依赖

> 使用 pnpm 安装依赖

```bash
pnpm install
```

### 开发调试

> 目前信息图语法组装逻辑暂未实现，因此需要安装如下逻辑手动组装

1. 开发组件：

开发参考 `infographic/generator` 下的实现，按照需求开发数据项、布局、结构等组件

将组件导出

2. 组装组件

在 `dev/src/main.tsx` 中引入组件，组装成信息图模版

### 可用组件

> 组件统一从 `@antv/infographic` 中导入

1. 原语组件

- Defs: 定义渐变、滤镜等
- Ellipse: 椭圆
- Group: 组合
- Path: 路径
- Rect: 矩形
- Text: 文字

2. 信息图组件

- BtnAdd: 添加按钮
- BtnRemove: 删除按钮
- BtnsGroup: 按钮组
- Illus: 插图
- ItemDesc: 数据项描述
- ItemLabel: 数据项标签
- ItemIcon: 数据项图标
- ItemsGroup: 数据项组
- Title: 标题

3. 布局组件

- FlexLayout: 弹性盒子布局

### 现有设计实现

#### 数据项 Item

- DoneList: 左侧为勾选图标，右侧为数据项描述，支持水平翻转布局
- SimpleItem: 包含图标、标题、描述的数据项（与现有 AntV 模版数据项一致），支持上下左右位置放置布局

#### 结构 Structure

> 结构中需要考虑按钮的放置

- ListColumn: 单列纵向排布
