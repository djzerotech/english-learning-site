// api.js — API 桩层 (stub layer)
// 所有数据走 mock，但函数签名/延迟/加载态与真实 API 一致，
// 后续只需替换实现即可对接真实后端。见各函数上方 TODO 注释。

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const API = {
  /**
   * 获取某阶段全部词汇
   * TODO: replace with GET /api/stages/:stage/words
   * 返回 { code, data: Word[], total }
   */
  async fetchWords(stageKey) {
    await delay(260);
    const stage = DB.stages[stageKey];
    if (!stage) return { code: 404, data: [], total: 0 };
    return { code: 0, data: stage.words, total: stage.words.length };
  },

  /**
   * 模拟单词发音请求（真实发音由百度翻译 TTS 实现，见 app.js）
   * TODO: replace with audio playback: new Audio(`/audio/${word}.mp3`).play()
   * 返回 { code, played: true }
   */
  async pronounce(word) {
    await delay(50);
    // 桩：仅返回成功标记，实际发音由百度翻译 TTS 播放（见 app.js）
    return { code: 0, played: true, word };
  },

  /**
   * 标记单词为已掌握（持久化到 localStorage）
   * TODO: replace with POST /api/words/:id/master
   */
  async toggleMastered(wordId, mastered) {
    await delay(120);
    return { code: 0, wordId, mastered };
  },
};

if (typeof window !== "undefined") {
  window.API = API;
}
