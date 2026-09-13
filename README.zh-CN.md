# tech-story-comic（漫解技术）

**把技术知识，讲成一个看得懂的故事。** 角色遇到具体的问题，每个概念都因为故事需要而登场。

[English README](./README.md)

`tech-story-comic` 是一个面向 Codex（使用其原生生图能力）的 Agent Skill，用于创作故事驱动的技术讲解漫画——多页、角色一致、台词逐字上图。

## 功能

- **问题驱动的故事线**：漫画从一个具体的困境出发（截止时间、出故障的系统），而不是知识目录；概念逐个登场，每个概念都回应上一步暴露的局限。
- **机制展示而非复述**：每个概念都以动作呈现（状态变化、空间关系、可见后果），绝不出现两个角色站着对讲；误解会被演出来并被可见地纠正。
- **内建技术准确性**：分析阶段将关键论断绑定来源；简化写明边界；比喻记录"映射什么、不能读成什么"。
- **逐字文字契约**：台词、命令、数字、标签在逐页提示词中被精确指定，成图呈现的是写定的文字，不是模型即兴的符号。
- **角色一致性**：先生成角色参考图，逐页传入；默认角色为本项目原创（小满、奇普、乱码精、艾达）；用户可以指定任何角色，包括知名角色。
- **灵活的视觉体系**：6 种画风 × 7 种氛围 × 7 种版式，另有 5 个带特殊规则的预设（技术主题默认推荐 `ohmsha` 教学漫画预设）。
- **渐进式生产**：可只生成分镜、只生成提示词、只生成图片；可单独重生成指定页面；最终合并为 PDF。

## 工作流

```
偏好加载 → 主题分析 → 方案确认 → 分镜 + 角色
→ [大纲审阅] → 逐页提示词 → [提示词审阅]
→ 角色参考图 → 逐页生图（分批） → PDF → 完成报告
```

主题分析产出**概念递进链**：学习目标 → 具体困境 → 有序概念列表（每个概念都有"为什么是现在"的登场理由），外加范围边界、误解清单和来源绑定论断。分镜遵循故事脊：困境 → 尝试 → 暴露局限 → 概念登场 → 机制展示 → 应用 → 新约束 → … → 解决 + 理解验证。

## Skill 结构

```
tech-story-comic/
├── SKILL.md                    # 入口：触发词、生图后端规则、批量策略、工作流总览、偏好
├── references/
│   ├── analysis-framework.md   # 主题 → 困境 → 概念链、来源绑定
│   ├── storyboard-template.md  # 故事脊、每页故事层、图文一致性契约
│   ├── character-template.md   # 角色定义格式
│   ├── base-prompt.md          # 页面渲染基础提示词（文字/准确性规则）
│   ├── workflow.md             # 完整分步工作流与审阅门
│   ├── auto-selection.md       # 内容信号 → 风格/预设推荐
│   ├── partial-workflows.md    # --storyboard-only / --prompts-only / --images-only / --regenerate
│   ├── ohmsha-guide.md         # 教学预设细则
│   ├── art-styles/             # ligne-claire、manga、realistic、ink-brush、chalk、minimalist
│   ├── tones/                  # neutral、warm、dramatic、romantic、energetic、vintage、action
│   ├── layouts/                # standard、cinematic、dense、splash、mixed、webtoon、four-panel
│   ├── presets/                # ohmsha、wuxia、shoujo、concept-story、four-panel
│   └── config/                 # 首次设置、偏好 schema、水印指南
└── scripts/
    └── merge-to-pdf.ts         # 页面合并为 PDF（bun 或 npx）
```

## 安装

将本仓库克隆或复制到 Codex 的 skills 目录：

```bash
# 项目级（仅当前项目）
<你的项目>/.codex/skills/tech-story-comic

# 用户级（所有项目）
~/.codex/skills/tech-story-comic
```

下一轮对话即可使用。

**环境要求**：带内置 `imagegen` 的 Codex 运行环境（唯一支持的生图后端）；`bun` 或 `npx`（仅 PDF 合并步骤需要）。

## 使用

用自然语言直接提需求：

```
把 Redis 分布式锁做成 8 页技术讲解漫画，面向准备秋招的 Java 学生
```

```
Create an 8-page comic explaining how TLS handshakes work, for beginners
```

部分执行与改页：

```
/tech-story-comic content.md --storyboard-only
/tech-story-comic comic/my-topic/ --regenerate 3,5
```

## 产物

```
<你的项目>/comic/{topic-slug}/
├── analysis.md          # 学习目标、困境、概念链
├── storyboard.md        # 每页故事层 + 台词计划
├── characters/          # 角色设定 + 参考图
├── prompts/NN-page-*.md # 逐页提示词（可复现记录）
├── NN-page-*.png        # 成页
└── {topic-slug}.pdf     # 最终漫画
```

## 配置

首次使用会询问少量默认项（水印、画风/氛围偏好、语言），保存到 `.tech-story-comic/EXTEND.md`（项目级）或 `~/.tech-story-comic/EXTEND.md`（用户级）。完整 schema 见 `references/config/preferences-schema.md`。

## 来源、致谢与许可

本项目基于 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-comic) 中的 `baoyu-comic` 技能改造（MIT）。原版权声明与 MIT 许可证已按要求保留——见 [LICENSE](./LICENSE)。
