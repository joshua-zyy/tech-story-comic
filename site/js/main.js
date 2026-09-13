/* 漫解技术 — shared scripts: nav state + story spine renderer */

(function () {
  "use strict";

  // Highlight the active nav link by filename.
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target && target.indexOf("http") !== 0 && target === here) a.classList.add("active");
  });

  // Story spine data — single source for index preview and method page.
  var SPINE = [
    { name: "困境与赌注", desc: "角色有具体任务和可见的失败风险", hot: false },
    { name: "尝试", desc: "用已知的办法先试一次", hot: false },
    { name: "暴露局限", desc: "尝试失败或不够——新问题的入口", hot: false },
    { name: "概念登场", desc: "因为故事需要，概念在此刻出现", hot: true },
    { name: "机制展示", desc: "以动作、状态、关系呈现，不是对讲", hot: false },
    { name: "应用", desc: "理解改变行动，角色做出不同选择", hot: false },
    { name: "新约束", desc: "新需求出现，暴露下一个局限", hot: false },
    { name: "解决与验证", desc: "回到开头的问题；处理小变化证明理解", hot: true }
  ];

  function renderSpine(id, withLoop) {
    var el = document.getElementById(id);
    if (!el) return;
    SPINE.forEach(function (step, i) {
      var node = document.createElement("div");
      node.className = "spine-node" + (step.hot ? " hot" : "");
      var num = document.createElement("div");
      num.className = "num";
      num.textContent = String(i + 1).padStart(2, "0") + (step.hot ? " ★" : "");
      var name = document.createElement("div");
      name.className = "name";
      name.textContent = step.name;
      var desc = document.createElement("div");
      desc.className = "desc";
      desc.textContent = step.desc;
      node.append(num, name, desc);
      el.appendChild(node);
    });
    if (withLoop) {
      var loop = document.createElement("div");
      loop.className = "spine-loop";
      loop.innerHTML = "↑ 遇到新约束时，从「概念登场」继续循环 <span class=\"arrow-back\">↺</span> 直到问题解决";
      el.appendChild(loop);
    }
  }

  renderSpine("spine-preview", false);
  renderSpine("spine-full", true);
})();
