# tech-story-comic（漫解技术）

把一个技术主题，讲成一个看得懂的故事：角色遇到真实困境，技术概念随剧情需要逐个登场，最终把知识讲清楚、讲生动。

本项目是从 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) 中的 `baoyu-comic` 技能改造而来的独立项目，专注于故事驱动的技术讲解漫画（Agent Skill，适配 Codex 原生生图）。

## 当前状态

**改造进行中**：首次提交保存了未修改的 `baoyu-comic 1.117.4` 原版内容作为可追溯基线；其后的提交完成第一轮改造：

- 更名为 `tech-story-comic`（漫解技术），触发描述聚焦技术讲解漫画场景；
- 生图后端聚焦 Codex 原生 `imagegen`，移除 Cursor / `codex exec` / `baoyu-image-gen` 等备用路线；
- 偏好配置路径改为 `.tech-story-comic/`，移除后端选择偏好项；
- `ohmsha` 教学预设保留全部风格规则，默认角色换成本项目原创角色（小满、奇普、乱码精、艾达），并声明第三方角色版权责任由使用者承担。

下一步（尚未实施）：围绕“一个主题、一条故事主线、概念递进”重写内容分析与分镜方法，并加入技术准确性与图文一致性检查。

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
