# tech-story-comic（漫解技术）

把一个技术主题，讲成一个看得懂的故事：角色遇到真实困境，技术概念随剧情需要逐个登场，最终把知识讲清楚、讲生动。

本项目是从 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) 中的 `baoyu-comic` 技能改造而来的独立项目，专注于故事驱动的技术讲解漫画（Agent Skill，适配 Codex 原生生图）。

## 当前状态

**基线阶段**：本仓库当前保存的是未经修改的 `baoyu-comic` 原版内容，作为后续改造的可追溯起点。改名、范围收敛与创作方法改造将在后续提交中进行。

## 来源与致谢

- 原项目：[JimLiu/baoyu-skills · skills/baoyu-comic](https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-comic)
- 基线对应上游提交：`1567581c26ec29f4216c6e6835415bf30343b0e3`（`main` 分支）
- 原技能声明的版本号：`1.117.4`（见 `SKILL.md` frontmatter）
- 本地导入前已与上游逐文件比对：除换行符差异外内容一致（39 个文件）
- 许可证：MIT（见 [LICENSE](./LICENSE)，版权归属 Jim Liu）

后续将进行的改造方向（尚未实施）：

- 专注技术讲解场景，收敛通用漫画功能
- 以“一个主题、一条故事主线、概念递进”的方式组织内容
- 增强技术准确性与图文一致性检查
- 更新技能名称、触发描述与配置路径
