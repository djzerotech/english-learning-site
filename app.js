// app.js — 状态管理 + 交互逻辑 (state + interactions)
// 单页 SPA，通过 state 对象集中管理：当前阶段、当前单元、搜索词、模态框、已掌握集合

/* ---------- Lucide inline SVG icons (offline) ---------- */
const ICONS = {
  backpack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M9 10h6"/><path d="M4 14h16"/></svg>',
  "graduation-cap": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  "book-marked": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v8l-2-1-2 1V2"/><path d="M6 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2"/></svg>',
  "volume-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5"/></svg>',
  "layers": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0l8.58-3.908a1 1 0 0 0 0-1.832z"/><path d="m2.6 11.08 8.57 3.908a2 2 0 0 0 1.66 0l8.58-3.908"/><path d="m2.6 16.08 8.57 3.908a2 2 0 0 0 1.66 0l8.58-3.908"/></svg>',
  "target": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  "book-open": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  "sparkles": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>',
  "quote": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M4 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>',
  "arrow-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  "bookmark": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>',
  "book-x": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="m15 10 4 4"/><path d="m19 10-4 4"/></svg>',
  "shuffle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.7 3.8 1.8l2.3 3.1c.7.9 1.3 1.8 2 2.7.9 1.1 2.3 1.8 3.8 1.8H22"/><path d="m18 14 4 4-4 4"/></svg>',
  "clock": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
};

/* ---------- State ---------- */
const state = {
  stageKey: "elementary",
  unitFilter: "all", // 'all' or unit id
  search: "",
  currentWord: null, // word object for modal
  mastered: loadMastered(),
  page: 1,
  perPage: 30,
  shuffledCache: null,  // 打乱后的词表缓存（初中阶段用）
  shuffleKey: "",       // "stageKey|unitFilter" — 变化时重新打乱
  // 听力练习状态
  listening: {
    questions: [],    // 当前页的题目数组
    currentIdx: 0,    // 当前题目索引 (0-based)
    answers: [],      // 用户选择: -1=未选, 0-3=选项索引
    page: 1,          // 听力练习当前页码
    perPage: 30,      // 每页30组
    generated: false, // 是否已生成题目
  },
  tenseSelectedIdx: 0, // 时态模块中当前选中的时态索引
};

function loadMastered() {
  try { return JSON.parse(localStorage.getItem("el_mastered") || "{}"); }
  catch { return {}; }
}
function saveMastered() {
  localStorage.setItem("el_mastered", JSON.stringify(state.mastered));
}

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function getStage() { return DB.stages[state.stageKey]; }

function diffLabel(d) {
  return ["", "入门", "基础", "进阶", "较难", "挑战"][d] || "进阶";
}

/* Fisher–Yates 洗牌，返回新数组（不改原数组） */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Speech (公共 TTS · Youdao 美式发音) ---------- */
let ttsAudio = null;
let currentPlayingBtn = null;

const audioBlobCache = new Map();
const AUDIO_CACHE_MAX = 150;

/* 检测是否为本地环境（有 TTS 代理服务器） */
const HAS_LOCAL_TTS = location.hostname === "127.0.0.1" || location.hostname === "localhost";

function getAudioUrl(word) {
  if (audioBlobCache.has(word)) return audioBlobCache.get(word);
  if (HAS_LOCAL_TTS) return `/tts?word=${encodeURIComponent(word)}`;
  return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`;
}

async function preloadAudioBatch(wordList) {
  if (HAS_LOCAL_TTS) {
    const queue = wordList.filter(w => w && !audioBlobCache.has(w));
    if (queue.length === 0) return;
    const BATCH_SIZE = 40;
    for (let i = 0; i < queue.length; i += BATCH_SIZE) {
      const batch = queue.slice(i, i + BATCH_SIZE);
      try {
        const resp = await fetch(`/tts-batch?words=${batch.map(encodeURIComponent).join(",")}`);
        if (!resp.ok) continue;
        const data = await resp.json();
        for (const [word, b64] of Object.entries(data)) {
          try {
            const binary = atob(b64);
            const bytes = new Uint8Array(binary.length);
            for (let j = 0; j < binary.length; j++) bytes[j] = binary.charCodeAt(j);
            const blob = new Blob([bytes], { type: "audio/mpeg" });
            if (blob.size > 100) audioBlobCache.set(word, URL.createObjectURL(blob));
          } catch (e) {}
        }
      } catch (e) {}
    }
    if (audioBlobCache.size > AUDIO_CACHE_MAX) {
      const keys = [...audioBlobCache.keys()];
      for (let i = 0; i < keys.length - AUDIO_CACHE_MAX; i++) {
        URL.revokeObjectURL(audioBlobCache.get(keys[i]));
        audioBlobCache.delete(keys[i]);
      }
    }
  } else {
    wordList.filter(w => w && !audioBlobCache.has(w)).slice(0, 20).forEach(w => preloadSingle(w));
  }
}

function preloadSingle(word) {
  if (!word || audioBlobCache.has(word)) return;
  const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`;
  fetch(url)
    .then(r => r.ok ? r.blob() : null)
    .then(blob => { if (blob && blob.size > 100) audioBlobCache.set(word, URL.createObjectURL(blob)); })
    .catch(() => {});
}

function webSpeechFallback(word) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(word);
  u.lang  = "en-US";
  u.rate  = 0.9;
  u.pitch = 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function speak(word, btnEl) {
  if (!word) return false;

  // 停止上一段音频 + 立即清除上一个按钮的脉冲动画
  if (ttsAudio) {
    ttsAudio.pause();
    ttsAudio.onended = null;
    ttsAudio.onerror = null;
    ttsAudio.ontimeupdate = null;
    ttsAudio = null;
  }
  if (currentPlayingBtn && currentPlayingBtn !== btnEl) {
    currentPlayingBtn.classList.remove("playing");
  }
  currentPlayingBtn = btnEl;

  const stopAnim = () => {
    if (btnEl) btnEl.classList.remove("playing");
    if (currentPlayingBtn === btnEl) currentPlayingBtn = null;
  };

  // 优先使用 blob 缓存（hover 预加载 / 页面预加载已就绪 → 零延迟播放）
  // 无缓存时走服务器 URL（不带 cache-buster，让浏览器 HTTP 缓存生效）
  const cachedBlobUrl = audioBlobCache.get(word);
  const audioUrl = cachedBlobUrl || getAudioUrl(word);
  ttsAudio = new Audio(audioUrl);

  if (!cachedBlobUrl) {
    preloadSingle(word);
  }
  ttsAudio.volume = 1.0;

  let animStopped = false;
  let durationTimer = null;
  let absoluteTimer = null;

  const stopAnimOnce = () => {
    if (animStopped) return;
    animStopped = true;
    if (durationTimer) clearTimeout(durationTimer);
    if (absoluteTimer) clearTimeout(absoluteTimer);
    stopAnim();
  };

  ttsAudio.onended = () => {
    stopAnimOnce();
    ttsAudio = null;
  };
  ttsAudio.onerror = (e) => {
    console.warn("[TTS] audio error for:", word, "error:", e);
    stopAnimOnce();
    ttsAudio = null;
    webSpeechFallback(word);
  };
  ttsAudio.ontimeupdate = () => {
    if (ttsAudio && ttsAudio.duration && ttsAudio.currentTime >= ttsAudio.duration - 0.06) {
      stopAnimOnce();
    }
  };
  ttsAudio.onplaying = () => {
    if (!animStopped && btnEl) btnEl.classList.add("playing");
  };
  ttsAudio.ondurationchange = () => {
    const dur = ttsAudio.duration;
    if (dur && isFinite(dur) && dur > 0 && !durationTimer) {
      durationTimer = setTimeout(stopAnimOnce, (dur + 0.5) * 1000);
    }
  };

  // 绝对上限 8 秒强制停止动画
  absoluteTimer = setTimeout(stopAnimOnce, 8000);

  ttsAudio.play().then(() => {
    if (!animStopped && btnEl) btnEl.classList.add("playing");
  }).catch((err) => {
    console.warn("[TTS] play() rejected for:", word, "error:", err.message);
    stopAnimOnce();
    ttsAudio = null;
    webSpeechFallback(word);
  });

  return true;
}

function pronounce(word, btnEl) {
  if (btnEl) btnEl.classList.add("playing");
  speak(word, btnEl);
}

/* ---------- Render: stage tabs ---------- */
function renderTabs() {
  const wrap = $("#stageTabs");
  wrap.innerHTML = Object.values(DB.stages).map(s => `
    <button class="stage-tab ${s.key === state.stageKey ? "active" : ""}"
            data-stage="${s.key}" aria-selected="${s.key === state.stageKey}">
      ${ICONS[s.icon]}<span>${s.label}</span>
    </button>
  `).join("");
  wrap.querySelectorAll(".stage-tab").forEach(btn => {
    btn.addEventListener("click", () => switchStage(btn.dataset.stage));
  });
}

/* ---------- Render: unit bar ---------- */
function renderSidebar() {
  const stage = getStage();

  // 时态阶段：只显示初中/高中两个Tab
  if (stage.isTense) {
    $("#unitList").innerHTML = stage.units.map(u => `
      <li><button class="unit-item ${state.unitFilter === u.id ? "active" : ""}" data-unit="${u.id}">
        <span>${u.label}</span><span class="unit-count">${u.count}</span>
      </button></li>
    `).join("");
    $("#unitList").querySelectorAll(".unit-item").forEach(btn => {
      btn.addEventListener("click", () => {
        state.unitFilter = btn.dataset.unit;
        state.page = 1;
        state.tenseSelectedIdx = 0;
        renderSidebar();
        renderGrid();
      });
    });
    return;
  }

  const showAll = stage.showAllFilter !== false;

  $("#unitList").innerHTML = `
    ${showAll ? `<li><button class="unit-item ${state.unitFilter === "all" ? "active" : ""}" data-unit="all">
      <span>全部单词</span><span class="unit-count">${stage.words.length}</span>
    </button></li>` : ""}
    ${stage.units.map(u => `
      <li><button class="unit-item ${state.unitFilter === u.id ? "active" : ""}" data-unit="${u.id}">
        <span>${u.label}</span><span class="unit-count">${u.count}</span>
      </button></li>
    `).join("")}
  `;
  $("#unitList").querySelectorAll(".unit-item").forEach(btn => {
    btn.addEventListener("click", () => {
      state.unitFilter = btn.dataset.unit;
      state.page = 1;
      // 切换到听力Tab时重置状态，生成新的随机题目
      if (state.unitFilter === "u_listen") {
        state.listening.generated = false;
        state.listening.page = 1;
        state.listening.currentIdx = 0;
      }
      renderSidebar();
      renderGrid();
    });
  });
}

/* ---------- Listening Quiz ---------- */
function generateListeningQuestions(allWords, count) {
  const shuffled = shuffleArray(allWords);
  const questions = [];
  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const target = shuffled[i];
    // 随机选3个干扰项
    const distractors = shuffleArray(allWords.filter(w => w.id !== target.id)).slice(0, 3);
    const options = shuffleArray([target, ...distractors]);
    questions.push({
      targetWord: target.word,
      correctIdx: options.findIndex(o => o.id === target.id),
      options: options.map(o => ({ word: o.word, meaning: o.meaning || "" })),
    });
  }
  return questions;
}

function renderListening() {
  const stage = getStage();
  const L = state.listening;
  const allWords = stage.words;

  // 隐藏搜索框和打乱按钮
  $(".search-box").style.display = "none";
  $("#shuffleBtn").hidden = true;

  // 更新标题
  $("#stageTitle").innerHTML = `
    <h2>${stage.label} · 听力练习<span class="accent-dot"></span></h2>
    <p>听发音，选出正确的单词</p>
  `;

  // 生成题目（每页30组，进入新页时重新生成）
  const totalPages = Math.ceil(allWords.length / L.perPage);
  if (L.page > totalPages) L.page = 1;

  if (!L.generated || L._lastPage !== L.page) {
    L.questions = generateListeningQuestions(allWords, L.perPage);
    L.currentIdx = 0;
    L.answers = new Array(L.questions.length).fill(-1);
    L.generated = true;
    L._lastPage = L.page;
  }

  const totalQ = L.questions.length;
  const q = L.questions[L.currentIdx];

  if (!q || totalQ === 0) {
    $("#wordGrid").innerHTML = `<div class="empty-state"><h3>暂无听力题目</h3></div>`;
    $("#paginationTop").innerHTML = "";
    $("#paginationBottom").innerHTML = "";
    return;
  }

  const userAns = L.answers[L.currentIdx];
  const hasAns = userAns !== -1;
  const isLast = L.currentIdx === totalQ - 1;

  const grid = $("#wordGrid");
  grid.innerHTML = `
    <div class="listening-quiz">
      <div class="quiz-progress-bar">
        <span class="quiz-counter">第 ${L.currentIdx + 1} / ${totalQ} 题</span>
        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${((L.currentIdx + 1) / totalQ) * 100}%"></div>
        </div>
      </div>
      <div class="quiz-speaker-area">
        <button class="quiz-pronounce-btn" id="quizSpeakBtn" title="点击播放发音（可重复点击）">
          <span class="quiz-speaker-icon">${ICONS["volume-2"]}</span>
          <span class="quiz-speaker-text">点击播放发音</span>
        </button>
        <p class="quiz-hint">听单词发音，从下方选项中选出你听到的单词</p>
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => {
          let cls = "quiz-option";
          if (hasAns) {
            if (i === q.correctIdx) cls += " correct";
            else if (i === userAns) cls += " incorrect";
          }
          return `
            <button class="${cls}" data-idx="${i}">
              <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
              <div class="opt-content">
                <span class="opt-word">${opt.word}</span>
                ${hasAns && opt.meaning ? `<span class="opt-meaning">${opt.meaning}</span>` : ""}
              </div>
              ${hasAns && i === q.correctIdx ? `<span class="opt-check">${ICONS["check-circle"]}</span>` : ""}
              ${hasAns && i === userAns && i !== q.correctIdx ? `<span class="opt-x">${ICONS["x"]}</span>` : ""}
            </button>
          `;
        }).join("")}
      </div>
      <div class="quiz-actions">
        ${hasAns ? `
          <div class="quiz-result ${userAns === q.correctIdx ? "correct" : "incorrect"}">
            ${userAns === q.correctIdx
              ? `<span class="result-icon">${ICONS["check-circle"]}</span> 回答正确！`
              : `<span class="result-icon">${ICONS["x"]}</span> 正确答案：${q.options[q.correctIdx].word}${q.options[q.correctIdx].meaning ? `（${q.options[q.correctIdx].meaning}）` : ""}`}
          </div>
          <div class="quiz-nav-btns">
            <button class="quiz-nav-btn prev" id="quizPrevBtn" ${L.currentIdx === 0 ? "disabled" : ""}>
              上一题
            </button>
            <button class="quiz-nav-btn next" id="quizNextBtn" ${isLast ? "disabled" : ""}>
              ${isLast ? "已是最后一题" : "下一题"}
            </button>
          </div>
        ` : `
          <p class="quiz-pending-hint">选择一个选项查看答案</p>
        `}
      </div>
    </div>
  `;

  // 绑定事件
  bindListeningEvents(q);
  // 渲染分页器
  renderListeningPagination(totalPages, allWords.length);
}

function bindListeningEvents(q) {
  const L = state.listening;

  // 发音按钮
  const speakBtn = $("#quizSpeakBtn");
  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      pronounce(q.targetWord, speakBtn);
    });
  }

  // 选项按钮 — 点击即出答案，可随意切换
  $$(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      L.answers[L.currentIdx] = parseInt(btn.dataset.idx);
      renderListening(); // 选中后立即显示结果
    });
  });

  // 上一题
  const prevBtn = $("#quizPrevBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (L.currentIdx > 0) {
        L.currentIdx--;
        renderListening();
      }
    });
  }

  // 下一题
  const nextBtn = $("#quizNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (L.currentIdx < L.questions.length - 1) {
        L.currentIdx++;
        renderListening();
      }
    });
  }
}

function renderListeningPagination(totalPages, totalWords) {
  const containers = [$("#paginationTop"), $("#paginationBottom")];
  const cur = state.listening.page;
  const perPage = state.listening.perPage;
  const rangeStart = (cur - 1) * perPage + 1;
  const rangeEnd = Math.min(cur * perPage, totalWords);

  if (totalPages <= 1) {
    containers.forEach(p => {
      if (p) p.innerHTML = `<span class="page-info">共 ${totalWords} 组听力题</span>`;
    });
    return;
  }

  let btns = "";
  btns += `<button class="page-btn ${cur === 1 ? "disabled" : ""}" data-page="${cur - 1}" ${cur === 1 ? "disabled" : ""}>‹</button>`;
  const win = 2;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= cur - win && i <= cur + win)) {
      btns += `<button class="page-btn ${i === cur ? "active" : ""}" data-page="${i}">${i}</button>`;
    } else if (i === cur - win - 1 || i === cur + win + 1) {
      btns += `<span class="page-ellipsis">…</span>`;
    }
  }
  btns += `<button class="page-btn ${cur === totalPages ? "disabled" : ""}" data-page="${cur + 1}" ${cur === totalPages ? "disabled" : ""}>›</button>`;

  const html = `
    <div class="pagination-bar">
      <span class="page-range">${rangeStart}-${rangeEnd} / ${totalWords} 组</span>
      <div class="page-btns">${btns}</div>
      <div class="page-jump">
        <input type="number" class="pageJumpInput" min="1" max="${totalPages}" value="${cur}" aria-label="跳转页码">
        <button class="pageJumpBtn">跳转</button>
      </div>
    </div>`;

  containers.forEach(p => {
    if (!p) return;
    p.innerHTML = html;
    p.querySelectorAll(".page-btn:not(.disabled)").forEach(btn => {
      btn.addEventListener("click", () => {
        state.listening.page = parseInt(btn.dataset.page);
        state.listening.generated = false;
        renderListening();
        $("#wordGrid").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    const jumpBtn = p.querySelector(".pageJumpBtn");
    const jumpInput = p.querySelector(".pageJumpInput");
    if (jumpBtn && jumpInput) {
      const doJump = () => {
        const val = parseInt(jumpInput.value);
        if (val >= 1 && val <= totalPages && val !== cur) {
          state.listening.page = val;
          state.listening.generated = false;
          renderListening();
          $("#wordGrid").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      jumpBtn.addEventListener("click", doJump);
      jumpInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") doJump();
      });
    }
  });
}

/* ---------- Render: word grid (with pagination) ---------- */
function renderGrid() {
  const stage = getStage();

  // 时态阶段
  if (stage.isTense) {
    renderTense();
    return;
  }

  // 听力练习模式
  if (state.unitFilter === "u_listen") {
    renderListening();
    return;
  }

  // 恢复搜索框显示（从听力模式切回时）
  $(".search-box").style.display = "";

  // 缓存打乱后的词表：仅在阶段或分类切换时重新打乱，翻页/搜索时保持稳定
  const cacheKey = state.stageKey + "|" + state.unitFilter;
  if (state.shuffleKey !== cacheKey) {
    let baseWords = stage.words;
    if (state.unitFilter !== "all") {
      baseWords = baseWords.filter(w => w.unit === state.unitFilter);
    }
    // 初中阶段打乱字母顺序，避免 a→b→c… 排列
    state.shuffledCache = (state.stageKey === "middle")
      ? shuffleArray(baseWords)
      : baseWords;
    state.shuffleKey = cacheKey;
  }

  let words = state.shuffledCache;

  if (state.search.trim()) {
    const q = state.search.trim().toLowerCase();
    words = words.filter(w =>
      w.word.toLowerCase().includes(q) ||
      w.meaning.includes(q) ||
      (w.phonetic || "").toLowerCase().includes(q)
    );
  }

  $("#stageTitle").innerHTML = `
    <h2>${stage.label}<span class="accent-dot"></span></h2>
    <p>${stage.subtitle}</p>
  `;

  const grid = $("#wordGrid");
  if (!words.length) {
    grid.innerHTML = `
      <div class="empty-state">
        ${ICONS["book-x"]}
        <h3>没有找到匹配的单词</h3>
        <p>试试其他关键词或切换单元</p>
      </div>`;
    $("#paginationTop").innerHTML = "";
    $("#paginationBottom").innerHTML = "";
    return;
  }

  // pagination
  const totalPages = Math.ceil(words.length / state.perPage);
  if (state.page > totalPages) state.page = 1;
  const start = (state.page - 1) * state.perPage;
  const pageWords = words.slice(start, start + state.perPage);

  grid.innerHTML = pageWords.map((w, i) => {
    const isM = !!state.mastered[w.id];
    const delay = Math.min(i * 0.03, 0.6);
    return `
    <article class="word-card" data-id="${w.id}" style="animation-delay:${delay}s">
      <div class="card-detail-hint">${ICONS["arrow-right"]}</div>
      <div class="card-top">
        <button class="pronounce-btn" data-pron="${w.word}" aria-label="朗读 ${w.word}">
          ${ICONS["volume-2"]}
        </button>
        <div class="card-word-info">
          <div class="card-word">${w.word}</div>
          <div class="card-phonetic">${w.phonetic || "—"}</div>
        </div>
        ${w.pos ? `<span class="card-pos">${w.pos}</span>` : ""}
      </div>
      <div class="card-meaning-row">
        <div class="card-meaning">${w.meaning}</div>
        <div class="card-tags">
          ${isM ? `<span class="tag mastered">${ICONS["check"]}已掌握</span>` : ""}
          <span class="tag diff">${diffLabel(w.difficulty)}</span>
        </div>
      </div>
      ${(w.usage && w.usage.collocations) || (w.examPoints && w.examPoints.length) ? `
      <div class="card-extra">
        ${w.usage && w.usage.collocations ? `
        <div class="extra-row">
          <span class="extra-icon">📎</span>
          <span class="extra-label">短语搭配:</span>
          <span class="extra-content">${w.usage.collocations}</span>
        </div>` : ""}
        ${w.examPoints && w.examPoints.length ? `
        <div class="extra-row">
          <span class="extra-icon">📌</span>
          <span class="extra-label">考点:</span>
          <span class="extra-content">${w.examPoints.join("; ")}</span>
        </div>` : ""}
      </div>` : ""}
    </article>`;
  }).join("");

  // card click → open modal
  grid.querySelectorAll(".word-card").forEach(card => {
    // hover → 预加载该单词音频（用户 hover 后再点击，音频已就绪）
    card.addEventListener("mouseenter", () => {
      const w = words.find(x => x.id === card.dataset.id);
      if (w) preloadSingle(w.word);
    });
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-pron]")) return;
      const w = words.find(x => x.id === card.dataset.id);
      if (w) openModal(w);
    });
  });
  // pronounce buttons
  grid.querySelectorAll("[data-pron]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      pronounce(btn.dataset.pron, btn);
    });
  });

  // pagination controls
  renderPagination(totalPages, words.length);

  // 预加载当前页单词音频（低并发 2，不阻塞用户点击请求）
  preloadAudioBatch(pageWords.map(w => w.word));
}

/* ---------- Pagination (renders to both top & bottom) ---------- */
function renderPagination(totalPages, totalWords) {
  const containers = [$("#paginationTop"), $("#paginationBottom")];
  const cur = state.page;
  const perPage = state.perPage;
  const rangeStart = (cur - 1) * perPage + 1;
  const rangeEnd = Math.min(cur * perPage, totalWords);

  if (totalPages <= 1) {
    containers.forEach(p => {
      if (p) p.innerHTML = `<span class="page-info">共 ${totalWords} 个单词</span>`;
    });
    return;
  }

  let btns = "";
  // prev
  btns += `<button class="page-btn ${cur === 1 ? "disabled" : ""}" data-page="${cur - 1}" ${cur === 1 ? "disabled" : ""}>‹</button>`;
  // page numbers (show window around current)
  const win = 2;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= cur - win && i <= cur + win)) {
      btns += `<button class="page-btn ${i === cur ? "active" : ""}" data-page="${i}">${i}</button>`;
    } else if (i === cur - win - 1 || i === cur + win + 1) {
      btns += `<span class="page-ellipsis">…</span>`;
    }
  }
  // next
  btns += `<button class="page-btn ${cur === totalPages ? "disabled" : ""}" data-page="${cur + 1}" ${cur === totalPages ? "disabled" : ""}>›</button>`;

  const html = `
    <div class="pagination-bar">
      <span class="page-range">${rangeStart}-${rangeEnd} / ${totalWords}</span>
      <div class="page-btns">${btns}</div>
      <div class="page-jump">
        <input type="number" class="pageJumpInput" min="1" max="${totalPages}" value="${cur}" aria-label="跳转页码">
        <button class="pageJumpBtn">跳转</button>
      </div>
    </div>`;

  // Render to both containers and bind events independently
  containers.forEach((p, idx) => {
    if (!p) return;
    p.innerHTML = html;

    // page button clicks
    p.querySelectorAll(".page-btn:not(.disabled)").forEach(btn => {
      btn.addEventListener("click", () => {
        state.page = parseInt(btn.dataset.page);
        renderGrid();
        $("#wordGrid").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // jump button + input
    const jumpBtn = p.querySelector(".pageJumpBtn");
    const jumpInput = p.querySelector(".pageJumpInput");
    if (jumpBtn && jumpInput) {
      const doJump = () => {
        const val = parseInt(jumpInput.value);
        if (val >= 1 && val <= totalPages && val !== cur) {
          state.page = val;
          renderGrid();
          $("#wordGrid").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      jumpBtn.addEventListener("click", doJump);
      jumpInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") doJump();
      });
    }
  });
}

/* ---------- Modal ---------- */
function openModal(w) {
  state.currentWord = w;
  preloadSingle(w.word); // 确保弹窗内朗读也零延迟
  const stage = getStage();
  const isM = !!state.mastered[w.id];

  $("#modal").innerHTML = `
    <div class="modal-hero">
      <button class="modal-close" id="modalClose" aria-label="关闭">${ICONS["x"]}</button>
      <div class="modal-word-row">
        <span class="modal-word">${w.word}</span>
        ${w.pos ? `<span class="modal-pos">${w.pos}</span>` : ""}
      </div>
      <div class="modal-phonetic-row">
        <button class="modal-pronounce" id="modalPron" aria-label="朗读">${ICONS["volume-2"]}</button>
        <span class="modal-phonetic">${w.phonetic || ""}</span>
      </div>
      <div class="modal-meaning">${w.meaning}</div>
    </div>
    <div class="modal-body">
      ${w.examPoints && w.examPoints.length ? `
      <div class="modal-section">
        <div class="sec-head">${ICONS["target"]}<h4>考点解析</h4><span class="sec-badge">${w.examPoints.length} 项</span></div>
        <div class="exam-list">
          ${w.examPoints.map((p, i) => `
            <div class="exam-item">
              <span class="exam-num">${i + 1}</span>
              <span>${p}</span>
            </div>
          `).join("")}
        </div>
      </div>` : ""}
      ${(w.usage && (w.usage.collocations || w.usage.patterns || w.usage.notes)) ? `
      <div class="modal-section">
        <div class="sec-head">${ICONS["book-open"]}<h4>用法详解</h4></div>
        <div class="usage-block">
          ${w.usage.collocations ? `
          <div class="usage-row">
            <div class="usage-label">常用搭配</div>
            <div class="usage-val mono">${w.usage.collocations}</div>
          </div>` : ""}
          ${w.usage.patterns ? `
          <div class="usage-row">
            <div class="usage-label">句型结构</div>
            <div class="usage-val">${w.usage.patterns}</div>
          </div>` : ""}
          ${w.usage.notes ? `
          <div class="usage-row">
            <div class="usage-label">学习要点</div>
            <div class="usage-val">${w.usage.notes}</div>
          </div>` : ""}
        </div>
      </div>` : ""}
      ${(w.examples && w.examples.length) ? `
      <div class="modal-section">
        <div class="sec-head">${ICONS["quote"]}<h4>例句</h4></div>
        <div class="ex-list">
          ${w.examples.map(ex => `
            <div class="ex-item">
              <div class="ex-en">${ex.en}</div>
              <div class="ex-zh">${ex.zh}</div>
            </div>
          `).join("")}
        </div>
      </div>` : ""}
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" id="btnClose">${ICONS["x"]}<span>关闭</span></button>
      <button class="btn btn-primary ${isM ? "mastered" : ""}" id="btnMaster">
        ${isM ? ICONS["check-circle"] + "<span>已掌握</span>" : ICONS["bookmark"] + "<span>标记已掌握</span>"}
      </button>
    </div>
  `;

  $("#backdrop").classList.add("open");
  document.body.style.overflow = "hidden";

  $("#modalClose").addEventListener("click", closeModal);
  $("#btnClose").addEventListener("click", closeModal);
  $("#modalPron").addEventListener("click", () => pronounce(w.word, $("#modalPron")));
  $("#btnMaster").addEventListener("click", () => toggleMastered(w.id));
}

function closeModal() {
  $("#backdrop").classList.remove("open");
  document.body.style.overflow = "";
  state.currentWord = null;
}

function toggleMastered(wordId) {
  const wasM = !!state.mastered[wordId];
  if (wasM) delete state.mastered[wordId];
  else state.mastered[wordId] = true;
  saveMastered();

  if (state.currentWord && state.currentWord.id === wordId) {
    openModal(state.currentWord); // re-render modal foot
  }
  renderSidebar();
  renderGrid();
  showToast(wasM ? "已取消标记" : "太棒了！已标记为掌握");
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg) {
  const t = $("#toast");
  t.innerHTML = `${ICONS["check-circle"]}<span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- Tense Stage ---------- */
const TENSE_ICONS = {
  t1: "📅", t2: "⏮️", t3: "⏭️", t4: "🔄",
  t5: "🏃", t6: "🏃‍♂️", t7: "✅", t8: "⏪",
  t9: "⏳", t10: "⌛", t11: "🔮", t12: "📈", t13: "📊", t14: "🎯",
};

function renderTense() {
  const stage = getStage();
  const isMiddle = state.unitFilter === "ts_middle";
  const tenseList = isMiddle ? TENSE_DATA.middle : TENSE_DATA.high;
  const stageLabel = isMiddle ? "初中阶段" : "高中阶段";

  if (state.tenseSelectedIdx >= tenseList.length) state.tenseSelectedIdx = 0;

  // 隐藏搜索框和打乱按钮
  $(".search-box").style.display = "none";
  $("#shuffleBtn").hidden = true;
  // 隐藏分页器
  $("#paginationTop").innerHTML = "";
  $("#paginationBottom").innerHTML = "";

  // 更新标题
  $("#stageTitle").innerHTML = `
    <h2>时态专项 · ${stageLabel}<span class="accent-dot"></span></h2>
    <p>${stage.subtitle}</p>
  `;

  const grid = $("#wordGrid");

  // 时态选择tab栏
  const tenseTabBar = `
    <div class="tense-selector-bar">
      ${tenseList.map((t, idx) => `
        <button class="tense-selector-tab${idx === state.tenseSelectedIdx ? " active" : ""}" data-tense-idx="${idx}">
          <span class="tense-selector-icon">${TENSE_ICONS[t.id] || "📝"}</span>
          <span class="tense-selector-name">${t.name}</span>
        </button>
      `).join("")}
    </div>
  `;

  // 只渲染选中的时态卡片
  const t = tenseList[state.tenseSelectedIdx];
  const idx = state.tenseSelectedIdx;
  const tenseCard = `
    <div class="tense-container">
      <div class="tense-card" data-tense-id="${t.id}">
        <div class="tense-card-header">
          <div class="tense-number">${idx + 1}</div>
          <div class="tense-title-area">
            <h3 class="tense-name">${t.name}</h3>
            <span class="tense-name-en">${t.nameEn}</span>
          </div>
          <button class="tense-pronounce-btn" data-word="${t.nameEn.split(" ")[0]}" title="播放时态名称">
            <span class="tense-speaker-icon">${ICONS["volume-2"]}</span>
          </button>
        </div>

        <div class="tense-section">
          <div class="tense-section-title">📐 句型结构</div>
          <div class="tense-formula-box">
            <div class="tense-formula-row">
              <span class="formula-label">肯定句</span>
              <span class="formula-text">${t.formula}</span>
            </div>
            <div class="tense-formula-row">
              <span class="formula-label">否定句</span>
              <span class="formula-text">${t.formulaNeg}</span>
            </div>
            <div class="tense-formula-row">
              <span class="formula-label">疑问句</span>
              <span class="formula-text">${t.formulaQ}</span>
            </div>
          </div>
        </div>

        <div class="tense-section">
          <div class="tense-section-title">📌 用法要点</div>
          <ul class="tense-usage-list">
            ${t.usage.map(u => `<li>${u}</li>`).join("")}
          </ul>
        </div>

        <div class="tense-section">
          <div class="tense-section-title">🔑 标志词</div>
          <div class="tense-keywords">${t.keywords}</div>
        </div>

        <div class="tense-section">
          <div class="tense-section-title">📝 例句</div>
          <div class="tense-examples">
            ${t.examples.map(ex => `
              <div class="tense-example">
                <div class="example-en">
                  <button class="example-speak-btn" data-word="${ex.en.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/).slice(0, 8).join(" ")}" title="播放">
                    <span class="example-speak-icon">${ICONS["volume-2"]}</span>
                  </button>
                  <span class="example-text">${ex.en}</span>
                </div>
                <div class="example-zh">${ex.zh}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="tense-section tense-exam">
          <div class="tense-section-title">⚠️ 考点聚焦</div>
          <ul class="tense-exam-list">
            ${t.examPoints.map(e => `<li>${e}</li>`).join("")}
          </ul>
        </div>

        <div class="tense-section tense-mistakes">
          <div class="tense-section-title">❌ 易错点</div>
          <ul class="tense-mistakes-list">
            ${t.commonMistakes.map(m => `<li>${m}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  grid.innerHTML = tenseTabBar + tenseCard;

  // 绑定时态tab切换
  grid.querySelectorAll(".tense-selector-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      state.tenseSelectedIdx = parseInt(tab.dataset.tenseIdx);
      // 同步练习题tab
      if (typeof tenseQuizState !== "undefined") {
        const newTense = tenseList[state.tenseSelectedIdx];
        if (newTense && TENSE_QUIZ_DATA[newTense.id]) {
          tenseQuizState.currentTab = newTense.id;
          tenseQuizState.answers = {};
        }
      }
      renderTense();
      // 滚动到顶部
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // 绑定发音按钮
  grid.querySelectorAll(".tense-pronounce-btn, .example-speak-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const word = btn.dataset.word;
      if (word) pronounce(word, btn);
    });
  });

  // 初中阶段渲染练习题（只显示当前选中时态的练习题）
  if (isMiddle && typeof TENSE_QUIZ_DATA !== "undefined") {
    // 同步练习题状态为当前选中的时态
    const currentTense = tenseList[state.tenseSelectedIdx];
    if (currentTense && TENSE_QUIZ_DATA[currentTense.id]) {
      tenseQuizState.currentTab = currentTense.id;
    }
    renderTenseQuizSection(grid);
  }
}

/* ---------- Tense Quiz ---------- */
const tenseQuizState = {
  currentTab: null,
  answers: {}
};

function renderTenseQuizSection(grid) {
  const quizIds = Object.keys(TENSE_QUIZ_DATA);
  if (!tenseQuizState.currentTab) tenseQuizState.currentTab = quizIds[0];

  const quiz = TENSE_QUIZ_DATA[tenseQuizState.currentTab];
  if (!quiz) return;

  const tenseInfo = TENSE_DATA.middle.find(t => t.id === tenseQuizState.currentTab);
  const tenseName = tenseInfo ? tenseInfo.name : "";

  const quizSection = document.createElement("div");
  quizSection.className = "tense-quiz-section";
  quizSection.innerHTML = `
    <div class="tense-quiz-header">
      <h3 class="tense-quiz-title">📝 ${tenseName} 专项练习</h3>
      <p class="tense-quiz-subtitle">点击选项即时出答案，每题附带详细解析</p>
    </div>
    <div class="tense-quiz-content" id="tenseQuizContent"></div>
  `;

  grid.appendChild(quizSection);
  renderTenseQuizQuestions();
}

function renderTenseQuizQuestions() {
  const container = $("#tenseQuizContent");
  if (!container) return;

  const quizId = tenseQuizState.currentTab;
  const quiz = TENSE_QUIZ_DATA[quizId];
  if (!quiz) return;

  const total = quiz.questions.length;
  const answeredCount = Object.keys(tenseQuizState.answers).length;
  const correctCount = Object.values(tenseQuizState.answers).filter(a => a.correct).length;

  let html = `
    <div class="tense-quiz-intro">${quiz.intro}</div>
    <div class="tense-quiz-progress">
      <div class="tense-quiz-progress-bar">
        <div class="tense-quiz-progress-fill" style="width:${total ? (answeredCount / total * 100) : 0}%"></div>
      </div>
      <span class="tense-quiz-progress-text">已答 ${answeredCount}/${total} · 正确 ${correctCount}</span>
    </div>
  `;

  quiz.questions.forEach((q, i) => {
    const ans = tenseQuizState.answers[i];
    let cardClass = "";
    if (ans) cardClass = ans.correct ? "correct" : "wrong";

    html += `
      <div class="tense-quiz-card ${cardClass}" id="tq-${i}">
        <div class="tense-quiz-q-header">
          <span class="tense-quiz-q-num">${i + 1}</span>
          <span class="tense-quiz-q-text">${q.q}</span>
        </div>
        <div class="tense-quiz-options">
          ${q.options.map((opt, oi) => {
            let optClass = "";
            if (ans) {
              if (oi === q.answer) optClass += " correct";
              else if (oi === ans.selected && !ans.correct) optClass += " wrong";
            }
            return `<button class="tense-quiz-option ${optClass}" data-q="${i}" data-o="${oi}">
              <span class="tense-quiz-option-letter">${String.fromCharCode(65 + oi)}</span>
              <span class="tense-quiz-option-text">${opt}</span>
            </button>`;
          }).join("")}
        </div>
        ${ans ? `
          <div class="tense-quiz-result ${ans.correct ? "correct" : "wrong"}">
            ${ans.correct ? "✅ 回答正确！" : "❌ 回答错误，正确答案是 " + String.fromCharCode(65 + q.answer)}
          </div>
          <div class="tense-quiz-explanation">
            <span class="tense-quiz-explain-icon">💡</span>
            <span class="tense-quiz-explain-text">${q.explain}</span>
            <button class="tense-quiz-speak-btn" data-explain="${q.explain.replace(/"/g, "&quot;")}" title="听语音讲解">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
            </button>
          </div>
        ` : ""}
      </div>
    `;
  });

  container.innerHTML = html;

  // 绑定选项点击（所有选项均可点击，支持随意切换）
  container.querySelectorAll(".tense-quiz-option").forEach(opt => {
    opt.addEventListener("click", () => {
      const qIdx = parseInt(opt.dataset.q);
      const oIdx = parseInt(opt.dataset.o);
      checkTenseQuizAnswer(quiz, qIdx, oIdx);
    });
  });

  // 绑定语音讲解按钮
  container.querySelectorAll(".tense-quiz-speak-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const explain = btn.dataset.explain.replace(/&quot;/g, '"');
      const cleanText = explain.replace(/<[^>]+>/g, "").replace(/["']/g, "");
      if (cleanText) pronounce(cleanText, btn);
    });
  });
}

function checkTenseQuizAnswer(quiz, qIdx, selectedIdx) {
  const q = quiz.questions[qIdx];
  const correct = selectedIdx === q.answer;
  tenseQuizState.answers[qIdx] = { selected: selectedIdx, correct: correct };
  renderTenseQuizQuestions();
  setTimeout(() => {
    const card = $("#tq-" + qIdx);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 50);
}

/* ---------- Stage switch ---------- */
function switchStage(key) {
  if (!DB.stages[key]) return;
  state.stageKey = key;
  const stage = DB.stages[key];
  // 时态阶段默认选中第一个Tab
  if (stage.isTense) {
    state.unitFilter = stage.units[0].id;
  } else {
    state.unitFilter = (stage.showAllFilter !== false) ? "all" : stage.units[0].id;
  }
  state.search = "";
  state.page = 1;
  state.tenseSelectedIdx = 0;
  $("#searchInput").value = "";
  document.body.dataset.stage = key;
  // 重置听力状态
  state.listening.generated = false;
  state.listening.page = 1;
  state.listening.currentIdx = 0;
  // 恢复搜索框显示
  $(".search-box").style.display = "";
  // 打乱按钮仅在初中阶段显示
  $("#shuffleBtn").hidden = (key !== "middle");
  renderTabs();
  renderSidebar();
  renderGrid();
}

/* ---------- Init ---------- */
function init() {
  document.body.dataset.stage = state.stageKey;
  // 注入静态图标
  $("#shuffleIcon").innerHTML = ICONS["shuffle"];
  $("#shuffleBtn").hidden = (state.stageKey !== "middle");
  renderTabs();
  renderSidebar();
  renderGrid();

  $("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    state.page = 1;
    renderGrid();
  });

  // 打乱顺序按钮
  $("#shuffleBtn").addEventListener("click", () => {
    state.shuffleKey = ""; // 强制重新打乱
    state.page = 1;
    renderGrid();
    showToast("已重新打乱顺序");
  });

  // close modal on backdrop click
  $("#backdrop").addEventListener("click", (e) => {
    if (e.target === $("#backdrop")) closeModal();
  });
  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
