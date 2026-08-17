// mock.js — 单一数据源 (Single source of data)
// K-12 英语学习词汇库：小学阶段 / 初中 / 高中
// 每个单词包含：读音(模拟)、音标、考点、用法、例句

const DB = {
  stages: {
    elementary: {
      key: "elementary",
      label: "小学阶段",
      subtitle: "夯实基础 · 培养语感",
      accent: "#EA580C",
      accentSoft: "#FFEDD5",
      icon: "backpack",
      showAllFilter: true,
      units: ELEMENTARY_DATA.units,
      words: ELEMENTARY_DATA.words,
    },

    middle: {
      key: "middle",
      label: "初中阶段",
      subtitle: "系统进阶 · 中考冲刺",
      accent: "#0891B2",
      accentSoft: "#CFFAFE",
      icon: "graduation-cap",
      showAllFilter: false,
      units: MIDDLE_UNITS,
      words: MIDDLE_WORDS,
    },

    high: {
      key: "high",
      label: "高中阶段",
      subtitle: "深度拓展 · 高考决胜",
      accent: "#4F46E5",
      accentSoft: "#E0E7FF",
      icon: "book-marked",
      units: [
        { id: "h1", label: "必修一 高频核心", count: 3 },
        { id: "h2", label: "必修二-三 进阶", count: 3 },
        { id: "h3", label: "选择性必修 学术词汇", count: 3 },
        { id: "h4", label: "高考 写作高级表达", count: 3 },
      ],
      words: [
        {
          id: "h1", word: "abandon", phonetic: "美 [əˈbændən]", pos: "v.",
          meaning: "放弃；遗弃；抛弃", unit: "h1", difficulty: 4,
          examPoints: [
            "abandon oneself to（沉溺于）—— 完形高频短语",
            "名词 abandonment（抛弃）；过去式/分词均为 abandoned",
            "辨析 abandon / give up / desert：abandon 强调彻底放弃，desert 强调违背责任抛弃",
          ],
          usage: {
            collocations: "abandon sth. / abandon oneself to (despair) / abandon the plan / abandoned car",
            patterns: "abandon + 名词（放弃……）；abandon oneself to + 名词（沉溺于）",
            notes: "abandoned adj. 被遗弃的：an abandoned house。with abandon 尽情地。",
          },
          examples: [
            { en: "They had to abandon the plan due to lack of money.", zh: "由于缺钱，他们不得不放弃这个计划。" },
            { en: "He abandoned himself to despair after the failure.", zh: "失败后他沉溺于绝望之中。" },
          ],
        },
        {
          id: "h2", word: "acknowledge", phonetic: "美 [əkˈnɑːlɪdʒ]", pos: "v.",
          meaning: "承认；答谢；确认收到", unit: "h1", difficulty: 4,
          examPoints: [
            "acknowledge sth. as（承认……为），acknowledge that（承认）",
            "辨析 acknowledge / admit / recognize：acknowledge 偏公开承认事实，admit 偏不情愿承认",
            "派生：acknowledgement n. 承认；感谢",
          ],
          usage: {
            collocations: "acknowledge one's mistake / acknowledge that / acknowledge sb. as / acknowledge receipt of",
            patterns: "acknowledge + 名词 / that 从句；It is generally acknowledged that...（人们公认……）",
            notes: "It is universally acknowledged that...（普遍公认……）—— 写作高级句式。",
          },
          examples: [
            { en: "It is universally acknowledged that education is important.", zh: "人们普遍公认教育很重要。" },
            { en: "He refused to acknowledge his mistake.", zh: "他拒绝承认自己的错误。" },
          ],
        },
        {
          id: "h3", word: "appreciate", phonetic: "美 [əˈpriːʃieɪt]", pos: "v.",
          meaning: "欣赏；感激；理解", unit: "h1", difficulty: 4,
          examPoints: [
            "appreciate + doing（感激做……）不接 to do —— 高频错误点",
            "接事物不接人：appreciate your help（✓）≠ appreciate you（口语可，正式应接 help）",
            "派生：appreciation n. 欣赏/感激；appreciative adj. 感激的",
          ],
          usage: {
            collocations: "appreciate sth. / appreciate doing sth. / show appreciation / be appreciative of",
            patterns: "I would appreciate it if...（如果……我将感激不尽）；appreciate + 动名词",
            notes: "I would appreciate it if you could help me.（如能帮忙将感激不尽）—— 书信常用。",
          },
          examples: [
            { en: "I would appreciate it if you could reply soon.", zh: "如果您能尽快回复，我将感激不尽。" },
            { en: "We deeply appreciate your kindness.", zh: "我们深深感激您的好意。" },
          ],
        },
        {
          id: "h4", word: "comprehensive", phonetic: "美 [ˌkɑːmprɪˈhensɪv]", pos: "adj.",
          meaning: "全面的；综合的；理解的", unit: "h2", difficulty: 4,
          examPoints: [
            "comprehensive evaluation（综合评价），comprehensive school（综合学校）",
            "名词 comprehension（理解力；理解）—— 阅读理解 reading comprehension",
            "辨析 comprehensive / broad / extensive：comprehensive 强调涵盖全面",
          ],
          usage: {
            collocations: "comprehensive understanding / comprehensive evaluation / comprehensive coverage / comprehensive school",
            patterns: "a comprehensive + 名词（全面的……）；beyond one's comprehension 超出理解",
            notes: "reading comprehension 阅读理解（高考题型）。comprehensively adv. 全面地。",
          },
          examples: [
            { en: "We need a comprehensive understanding of the issue.", zh: "我们需要全面理解这个问题。" },
            { en: "The report gives a comprehensive analysis of the market.", zh: "这份报告对市场做了全面分析。" },
          ],
        },
        {
          id: "h5", word: "demonstrate", phonetic: "美 [ˈdemənstreɪt]", pos: "v.",
          meaning: "证明；展示；示范；游行", unit: "h2", difficulty: 4,
          examPoints: [
            "demonstrate sth. to sb.（向某人展示……），demonstrate that（证明）",
            "派生：demonstration n. 示范/游行；demonstrative adj. 感情外露的",
            "辨析 demonstrate / show / prove：demonstrate 偏用证据论证展示",
          ],
          usage: {
            collocations: "demonstrate sth. to sb. / demonstrate that / demonstrate how to / demonstrate one's ability",
            patterns: "demonstrate + 名词 + to + 人；demonstrate + that 从句",
            notes: "名词 demonstration 既有「示范」也有「游行示威」之意，注意语境。",
          },
          examples: [
            { en: "The experiment demonstrates that water is made of hydrogen and oxygen.", zh: "这个实验证明水由氢和氧组成。" },
            { en: "She demonstrated how to use the machine.", zh: "她示范了如何使用这台机器。" },
          ],
        },
        {
          id: "h6", word: "distinguish", phonetic: "美 [dɪˈstɪŋɡwɪʃ]", pos: "v.",
          meaning: "区分；辨别；使出众", unit: "h2", difficulty: 4,
          examPoints: [
            "distinguish A from B（把A和B区分开）= distinguish between A and B —— 高频",
            "派生：distinct adj. 明显的/不同的；distinction n. 差别/区分",
            "distinguished adj. 著名的；杰出的：a distinguished scientist",
          ],
          usage: {
            collocations: "distinguish A from B / distinguish between ... and ... / distinguish oneself / be distinguished for",
            patterns: "distinguish + A + from + B；distinguish between + A + and + B",
            notes: "distinguish oneself 使自己出众。be distinguished for 因……而著名。",
          },
          examples: [
            { en: "It is important to distinguish right from wrong.", zh: "区分对错很重要。" },
            { en: "He distinguished himself as a great leader.", zh: "他作为一位伟大的领袖而出众。" },
          ],
        },
        {
          id: "h7", word: "elaborate", phonetic: "美 [ɪˈlæbərət]（形） 美 [ɪˈlæbəreɪt]（动）", pos: "adj./v.",
          meaning: "精心制作的(形)；详述(动)", unit: "h3", difficulty: 5,
          examPoints: [
            "一词多义+发音变化：形容词 [ɪˈlæbərət]，动词 [ɪˈlæbəreɪt] —— 重点",
            "elaborate on（详细说明）—— 动词搭配必考",
            "派生：elaboration n. 详细阐述",
          ],
          usage: {
            collocations: "elaborate plan / elaborate on sth. / elaborate design / an elaborate explanation",
            patterns: "elaborate on + 名词（详述……）；adj. elaborate + 名词（精心制作的）",
            notes: "Could you elaborate on your idea?（你能详细说明一下你的想法吗？）注意形动词发音不同。",
          },
          examples: [
            { en: "Could you elaborate on your proposal?", zh: "你能详细说明一下你的提案吗？" },
            { en: "They made an elaborate plan for the project.", zh: "他们为这个项目制定了精心周密的计划。" },
          ],
        },
        {
          id: "h8", word: "emphasize", phonetic: "美 [ˈemfəsaɪz]", pos: "v.",
          meaning: "强调；着重", unit: "h3", difficulty: 4,
          examPoints: [
            "英式拼写 emphasise；名词 emphasis（强调），复数 emphases",
            "lay/place emphasis on（强调……）—— 名词短语高频",
            "派生：emphatic adj. 强调的；emphatically adv. 断然地",
          ],
          usage: {
            collocations: "emphasize sth. / lay emphasis on / place emphasis on / put emphasis on",
            patterns: "emphasize + 名词 / that 从句；lay/place/put emphasis on + 名词",
            notes: "The teacher emphasized the importance of reading. 老师强调了阅读的重要性。",
          },
          examples: [
            { en: "The report emphasizes the need for reform.", zh: "报告强调了改革的必要性。" },
            { en: "Our school lays great emphasis on creativity.", zh: "我们学校非常重视创造力。" },
          ],
        },
        {
          id: "h9", word: "fundamental", phonetic: "美 [ˌfʌndəˈmentl]", pos: "adj./n.",
          meaning: "基本的(形)；基本原理(名)", unit: "h3", difficulty: 4,
          examPoints: [
            "be fundamental to（对……至关重要）—— 搭配必考",
            "辨析 fundamental / basic / essential：fundamental 偏根本性的，basic 偏基础入门",
            "名词复数 fundamentals（基本原理）",
          ],
          usage: {
            collocations: "fundamental principle / fundamental difference / be fundamental to / the fundamentals of",
            patterns: "be fundamental to + 名词（对……是根本的）；fundamental + 名词（基本的）",
            notes: "Honesty is fundamental to a good relationship. 诚实是良好关系的根本。",
          },
          examples: [
            { en: "Reading is fundamental to learning.", zh: "阅读对学习至关重要。" },
            { en: "There is a fundamental difference between the two ideas.", zh: "这两种观点之间有根本区别。" },
          ],
        },
        {
          id: "h10", word: "inevitable", phonetic: "美 [ɪnˈevɪtəbl]", pos: "adj.",
          meaning: "不可避免的；必然的", unit: "h4", difficulty: 5,
          examPoints: [
            "派生：inevitably adv. 不可避免地；名词 inevitability",
            "It is inevitable that...（……是不可避免的）—— 写作句式",
            "前缀 in-（不）+ evitable（可避免的）",
          ],
          usage: {
            collocations: "inevitable consequence / inevitable result / it is inevitable that / face the inevitable",
            patterns: "It is inevitable that + 从句；an inevitable + 名词（必然的……）",
            notes: "Change is inevitable. 变化是不可避免的。bend to the inevitable 屈从于必然。",
          },
          examples: [
            { en: "It is inevitable that we will face difficulties in life.", zh: "生活中我们不可避免地会遇到困难。" },
            { en: "The decision was an inevitable consequence of the situation.", zh: "这个决定是局势的必然结果。" },
          ],
        },
        {
          id: "h11", word: "sophisticated", phonetic: "美 [səˈfɪstɪkeɪtɪd]", pos: "adj.",
          meaning: "复杂的；精密的；老练的", unit: "h4", difficulty: 5,
          examPoints: [
            "一词多义：修饰物=复杂的/精密的，修饰人=老练的/有品位的",
            "辨析 sophisticated / complex / complicated：sophisticated 含「先进精密」褒义",
            "派生：sophisticate n. 老练的人；动词 sophisticate",
          ],
          usage: {
            collocations: "sophisticated equipment / sophisticated technology / sophisticated audience / highly sophisticated",
            patterns: "sophisticated + 名词（精密的/老练的……）；be sophisticated about（对……很老练）",
            notes: "a sophisticated system 复杂精密的系统；a sophisticated lady 优雅世故的女士。",
          },
          examples: [
            { en: "This is a highly sophisticated computer system.", zh: "这是一个高度精密的计算机系统。" },
            { en: "She is sophisticated for her age.", zh: "就她的年龄而言，她很老练。" },
          ],
        },
        {
          id: "h12", word: "circumstance", phonetic: "美 [ˈsɜːrkəmstæns]", pos: "n.",
          meaning: "情况；环境；境遇", unit: "h4", difficulty: 4,
          examPoints: [
            "常用复数 circumstances（情况/境遇）",
            "短语 under no circumstances（决不）—— 置于句首引起部分倒装，高考重点",
            "under the circumstances（在这种情况下）",
          ],
          usage: {
            collocations: "under no circumstances / under the circumstances / in/under certain circumstances / due to circumstances",
            patterns: "Under no circumstances + 助动词 + 主语 + 动词（倒装）；under/in + 形容词 + circumstances",
            notes: "Under no circumstances should you give up. 你决不应该放弃。（倒装句）",
          },
          examples: [
            { en: "Under no circumstances should you reveal the password.", zh: "你决不应该泄露密码。" },
            { en: "We must adapt to changing circumstances.", zh: "我们必须适应不断变化的情况。" },
          ],
        },
      ],
    },

    tense: {
      key: "tense",
      label: "时态",
      subtitle: "时态精讲 · 专项突破",
      accent: "#7C3AED",
      accentSoft: "#EDE9FE",
      icon: "clock",
      isTense: true,
      units: [
        { id: "ts_middle", label: "初中阶段", count: 8 },
        { id: "ts_high", label: "高中阶段", count: 6 },
      ],
      words: [], // 时态阶段不使用words数组
    },
  },
};

// 兼容模块导出（无构建环境直接挂在 window 上）
if (typeof window !== "undefined") {
  window.DB = DB;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DB;
}
