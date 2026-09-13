/* 漫解技术 — examples gallery: manifest-driven, works on file:// and http(s) */

(function () {
  "use strict";

  var grid = document.getElementById("gallery-grid");
  var empty = document.getElementById("gallery-empty");
  var reader = document.getElementById("reader");
  var galleryView = document.getElementById("gallery-view");
  if (!grid) return;

  var comics = [];
  var current = null;
  var pageIndex = 0;

  function showGallery() {
    if (comics.length === 0) {
      grid.hidden = true;
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    grid.hidden = false;
    grid.innerHTML = "";
    comics.forEach(function (c, i) {
      var card = document.createElement("div");
      card.className = "comic-card";
      var cover = document.createElement("div");
      cover.className = "cover";
      cover.textContent = "📘";
      var meta = document.createElement("div");
      meta.className = "meta";
      var h3 = document.createElement("h3");
      h3.textContent = c.title;
      var topic = document.createElement("div");
      topic.className = "topic";
      topic.textContent = c.topic || "";
      var chips = document.createElement("div");
      chips.className = "chips";
      var style = document.createElement("span");
      style.className = "chip";
      style.textContent = c.style || "ohmsha";
      var count = document.createElement("span");
      count.className = "chip";
      count.textContent = (c.pages ? c.pages.length : 0) + " 页";
      chips.append(style, count);
      if (c.date) {
        var d = document.createElement("span");
        d.className = "chip";
        d.textContent = c.date;
        chips.appendChild(d);
      }
      meta.append(h3, topic, chips);
      card.append(cover, meta);
      card.addEventListener("click", function () { openReader(i); });
      grid.appendChild(card);
    });
  }

  function openReader(index) {
    current = comics[index];
    pageIndex = 0;
    document.getElementById("reader-title").textContent = current.title;
    document.getElementById("reader-goal").textContent = current.learningGoal || "";
    var chain = document.getElementById("reader-chain");
    chain.innerHTML = "";
    (current.conceptChain || []).forEach(function (step) {
      var li = document.createElement("li");
      var b = document.createElement("b");
      b.textContent = step.concept;
      var wn = document.createElement("span");
      wn.className = "wn";
      wn.textContent = "why now: " + (step.whyNow || "");
      li.append(b, wn);
      chain.appendChild(li);
    });
    galleryView.querySelectorAll(".section-head").forEach(function (el) { el.style.display = "none"; });
    grid.hidden = true;
    empty.hidden = true;
    reader.classList.add("open");
    showPage();
    window.scrollTo({ top: 0 });
  }

  function showPage() {
    var pages = current.pages || [];
    if (pages.length === 0) return;
    var p = pages[pageIndex];
    document.getElementById("reader-img").src = p.file;
    document.getElementById("reader-img").alt = p.caption || current.title;
    document.getElementById("reader-pos").textContent = (pageIndex + 1) + " / " + pages.length;
    document.getElementById("reader-caption").textContent = p.caption || "";
    document.getElementById("reader-prev").disabled = pageIndex === 0;
    document.getElementById("reader-next").disabled = pageIndex === pages.length - 1;
  }

  document.getElementById("reader-prev").addEventListener("click", function () {
    if (pageIndex > 0) { pageIndex--; showPage(); }
  });
  document.getElementById("reader-next").addEventListener("click", function () {
    if (pageIndex < (current.pages || []).length - 1) { pageIndex++; showPage(); }
  });
  document.getElementById("reader-back").addEventListener("click", function () {
    reader.classList.remove("open");
    showGallery();
    window.scrollTo({ top: 0 });
  });

  // Load manifest. On file:// fetch may be blocked — degrade to the empty state.
  fetch("data/comics.json")
    .then(function (r) { return r.json(); })
    .then(function (data) { comics = data.comics || []; })
    .catch(function () {
      comics = [];
      if (window.console) console.info("comics.json 未加载（file:// 协议或文件缺失），展示空状态。");
    })
    .finally(showGallery);
})();
