# tech-story-comic（漫解技术）

**把技术知识，讲成一个看得懂的故事。** 角色遇到具体的问题，每个概念都因为故事需要而登场。

[English README](./README.md)

`tech-story-comic` 是一个面向 Codex（使用其原生生图能力）的 Agent Skill，用于创作故事驱动的技术讲解漫画。本项目是从 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) 中的 `baoyu-comic` 技能改造而来的独立项目。

## 当前状态

改造进行中。首次提交保存了未修改的 `baoyu-comic 1.117.4` 原版基线；其后提交完成两轮改造：

**第一轮：改名与范围收敛**

- 更名为 `tech-story-comic`（漫解技术），描述聚焦技术讲解漫画场景。
- 生图后端聚焦 Codex 原生 `imagegen`，移除 Cursor / `codex exec` / `baoyu-image-gen` 等备用路线；不可用时明确报错。
- 偏好配置路径改为 `.tech-story-comic/` 与 `~/.tech-story-comic/`。
- `ohmsha` 教学预设保留全部风格规则；默认角色换成本项目原创角色（小满、奇普、乱码精、艾达），并声明第三方角色版权责任由使用者承担。

**第二轮：故事驱动创作方法**

一个主题、一条问题驱动的故事主线、概念随剧情需要登场：

- `references/analysis-framework.md`：学习目标（机制层）→ 具体困境 → 概念递进链（每个概念必须回答"为什么是现在"）；范围边界、误解清单、来源绑定与简化边界；页数预算按概念数估算——装不下就砍范围，不稀释页面。
- `references/storyboard-template.md`：故事脊（困境 → 尝试 → 暴露局限 → 概念登场 → 机制展示 → 应用 → 新约束 → … → 解决 + 理解验证）；每页故事层字段（Story Beat / Concept Job / 机制可视化 / 误解拍）；台词计划作为逐字上图的 image contract；比喻边界；五条图文一致性硬约束。
- `references/base-prompt.md`：传记式"历史准确性"替换为"技术与视觉准确性"（台词逐字、数字公式不得即兴、比喻有边界）。

已用同一主题、相同页数完成与原版方法的脚本级对照；下一步是在 Codex 中进行生图实测。

## 来源与致谢

- 原项目：[JimLiu/baoyu-skills · skills/baoyu-comic](https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-comic)
- 基线对应上游提交：`1567581c26ec29f4216c6e6835415bf30343b0e3`（`main` 分支）
- 基线时上游技能版本：`1.117.4`（见 `SKILL.md` frontmatter）
- 基线已与上游逐文件比对：除换行符外完全一致（39 个文件）
- 许可证：MIT（见 [LICENSE](./LICENSE)）；版权归属原作者（Jim Liu），已按要求保留
