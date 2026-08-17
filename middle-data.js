// middle-data.js — 初中阶段词库数据（从源页面导入）
// 全部单词(初中单词表 1690) + 中考高频词(659) + 高频词(362) + 中考易混辨析(146)

const MIDDLE_UNITS = [
  {
    "id": "m1",
    "label": "全部单词",
    "count": 1690
  },
  {
    "id": "m2",
    "label": "中考高频词",
    "count": 659
  },
  {
    "id": "m3",
    "label": "高频词",
    "count": 362
  },
  {
    "id": "m4",
    "label": "中考易混辨析",
    "count": 146
  }
];

const MIDDLE_WORDS = [
  {
    "id": "mw1",
    "word": "a",
    "phonetic": "美 [ə; eɪ]",
    "pos": "art.",
    "meaning": "一个(只/支…)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw2",
    "word": "ability",
    "phonetic": "美 [əˈbɪləti]",
    "pos": "n.",
    "meaning": "能力;才能",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "ability to do sth; able (adj.)"
    ],
    "usage": {
      "collocations": "have the ability to do 有能力做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw3",
    "word": "able",
    "phonetic": "美 [ˈeɪbəl]",
    "pos": "adj.",
    "meaning": "能够;有能力的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "able → ability (n.); be able to = can"
    ],
    "usage": {
      "collocations": "be able to do sth 能够做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw4",
    "word": "about",
    "phonetic": "美 [əˈbaʊt]",
    "pos": "prep./adv.",
    "meaning": "关于;大约",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "be about to do 即将做某事（不与时间状语连用）"
    ],
    "usage": {
      "collocations": "talk about 谈论; think about 考虑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw5",
    "word": "above",
    "phonetic": "美 [əˈbʌv]",
    "pos": "prep./adv.",
    "meaning": "在…上方;以上",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "above (在上方不接触) vs. on (在上方接触) vs. over (正上方)"
    ],
    "usage": {
      "collocations": "above all 首先;最重要的是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw6",
    "word": "abroad",
    "phonetic": "美 [əˈbrɔːd]",
    "pos": "adv.",
    "meaning": "到国外;在国外",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "abroad 是副词，前面不加 to/in/at"
    ],
    "usage": {
      "collocations": "go abroad 出国; at home and abroad 国内外",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw7",
    "word": "absent",
    "phonetic": "美 [ˈæbsənt]",
    "pos": "adj.",
    "meaning": "缺席的;不在的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "absent from (不是 in); 名词 absence"
    ],
    "usage": {
      "collocations": "be absent from 缺席…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw8",
    "word": "accept",
    "phonetic": "美 [əkˈsept]",
    "pos": "v.",
    "meaning": "接受;认可",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "accept (主观接受) vs. receive (客观收到)"
    ],
    "usage": {
      "collocations": "accept an invitation 接受邀请",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw9",
    "word": "accident",
    "phonetic": "美 [ˈæksɪdənt]",
    "pos": "n.",
    "meaning": "事故;意外",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "by accident = accidentally; accidental (adj.)"
    ],
    "usage": {
      "collocations": "by accident 意外地; traffic accident 交通事故",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw10",
    "word": "according",
    "phonetic": "美 [əˈkɔːrdɪŋ]",
    "pos": "adv.",
    "meaning": "根据;按照",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "according to 后接名词/代词，不接从句"
    ],
    "usage": {
      "collocations": "according to 根据…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw11",
    "word": "achieve",
    "phonetic": "美 [əˈtʃiːv]",
    "pos": "v.",
    "meaning": "实现;达到",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "辨析 achieve vs. reach vs. accomplish; 名词 achievement"
    ],
    "usage": {
      "collocations": "achieve success 取得成功; achieve a goal 实现目标",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw12",
    "word": "across",
    "phonetic": "美 [əˈkrɔːs]",
    "pos": "prep./adv.",
    "meaning": "穿过;横过",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "across (表面穿过) vs. through (内部穿过)"
    ],
    "usage": {
      "collocations": "go across 穿过; across from 在…对面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw13",
    "word": "act",
    "phonetic": "美 [ækt]",
    "pos": "v./n.",
    "meaning": "行动;表演",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "名词 action; 形容词 active; 名词 actor/actress"
    ],
    "usage": {
      "collocations": "act as 充当; take action 采取行动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw14",
    "word": "action",
    "phonetic": "美 [ˈækʃən]",
    "pos": "n.",
    "meaning": "行动",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "take action 采取行动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw15",
    "word": "active",
    "phonetic": "美 [ˈæktɪv]",
    "pos": "adj.",
    "meaning": "积极的;活跃的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "active → activity (n.); 反义词 inactive"
    ],
    "usage": {
      "collocations": "take an active part in 积极参加",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw16",
    "word": "activity",
    "phonetic": "美 [ækˈtɪvəti]",
    "pos": "n.",
    "meaning": "活动",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "outdoor activities 户外活动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw17",
    "word": "actor",
    "phonetic": "美 [ˈæktər]",
    "pos": "n.",
    "meaning": "演员(男)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw18",
    "word": "actress",
    "phonetic": "美 [ˈæktrəs]",
    "pos": "n.",
    "meaning": "演员(女)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw19",
    "word": "actually",
    "phonetic": "美 [ˈæktʃuəli]",
    "pos": "adv.",
    "meaning": "实际上;事实上",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw20",
    "word": "add",
    "phonetic": "美 [æd]",
    "pos": "v.",
    "meaning": "添加;增加",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "addition (n.); additional (adj.)"
    ],
    "usage": {
      "collocations": "add A to B 把A加到B; add up 合计",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw21",
    "word": "address",
    "phonetic": "美 [ˈædres]",
    "pos": "n./v.",
    "meaning": "地址;演说",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw22",
    "word": "admire",
    "phonetic": "美 [ədˈmaɪər]",
    "pos": "v.",
    "meaning": "钦佩;欣赏",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "admire sb for sth 因某事钦佩某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw23",
    "word": "admit",
    "phonetic": "美 [ədˈmɪt]",
    "pos": "v.",
    "meaning": "承认;准许进入",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do; 过去式 admitted"
    ],
    "usage": {
      "collocations": "admit doing sth 承认做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw24",
    "word": "advantage",
    "phonetic": "美 [ədˈvæntɪdʒ]",
    "pos": "n.",
    "meaning": "优势;有利条件",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "反义词 disadvantage; advantageous (adj.)"
    ],
    "usage": {
      "collocations": "take advantage of 利用; have an advantage over 优于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw25",
    "word": "advice",
    "phonetic": "美 [ədˈvaɪs]",
    "pos": "n.",
    "meaning": "建议(不可数)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "advice (n.不可数) vs. advise (v.); 搭配: advice on/about"
    ],
    "usage": {
      "collocations": "give advice 给建议; a piece of advice 一条建议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw26",
    "word": "advise",
    "phonetic": "美 [ədˈvaɪz]",
    "pos": "v.",
    "meaning": "建议",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "advise doing sth; advise that sb (should) do"
    ],
    "usage": {
      "collocations": "advise sb to do sth 建议某人做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw27",
    "word": "afford",
    "phonetic": "美 [əˈfɔːrd]",
    "pos": "v.",
    "meaning": "负担得起",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "常与 can/could/be able to 连用; 后接 to do"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw28",
    "word": "afraid",
    "phonetic": "美 [əˈfreɪd]",
    "pos": "adj.",
    "meaning": "害怕的;担心的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be afraid of 害怕; be afraid to do 不敢做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw29",
    "word": "after",
    "phonetic": "美 [ˈæftər]",
    "pos": "prep./conj.",
    "meaning": "在…之后",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "after + doing; after + 从句(一般现在表将来)"
    ],
    "usage": {
      "collocations": "after all 毕竟; look after 照顾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw30",
    "word": "afternoon",
    "phonetic": "美 [ˌæftərˈnuːn]",
    "pos": "n.",
    "meaning": "下午",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "in the afternoon 在下午",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw31",
    "word": "again",
    "phonetic": "美 [əˈɡen]",
    "pos": "adv.",
    "meaning": "再一次",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "again and again 反复地; once again 再一次",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw32",
    "word": "against",
    "phonetic": "美 [əˈɡenst]",
    "pos": "prep.",
    "meaning": "反对;靠着",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "against 是介词，不是动词"
    ],
    "usage": {
      "collocations": "be against 反对; fight against 与…斗争",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw33",
    "word": "age",
    "phonetic": "美 [eɪdʒ]",
    "pos": "n.",
    "meaning": "年龄;时代",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "at the age of 在…岁时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw34",
    "word": "ago",
    "phonetic": "美 [əˈɡoʊ]",
    "pos": "adv.",
    "meaning": "以前",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ago 用于一般过去时; before 用于过去完成时"
    ],
    "usage": {
      "collocations": "three days ago 三天前",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw35",
    "word": "agree",
    "phonetic": "美 [əˈɡriː]",
    "pos": "v.",
    "meaning": "同意",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "agree on 就…达成一致; 名词 agreement"
    ],
    "usage": {
      "collocations": "agree with sb 同意某人; agree to do 同意做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw36",
    "word": "ahead",
    "phonetic": "美 [əˈhed]",
    "pos": "adv.",
    "meaning": "在前面;向前",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go ahead 继续; ahead of 在…前面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw37",
    "word": "aim",
    "phonetic": "美 [eɪm]",
    "pos": "n./v.",
    "meaning": "目标;瞄准",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "aim to do 旨在做; aim at 瞄准",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw38",
    "word": "air",
    "phonetic": "美 [er]",
    "pos": "n.",
    "meaning": "空气;空中",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "by air 乘飞机; in the open air 在户外",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw39",
    "word": "airport",
    "phonetic": "美 [ˈerpɔːrt]",
    "pos": "n.",
    "meaning": "机场",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw40",
    "word": "alive",
    "phonetic": "美 [əˈlaɪv]",
    "pos": "adj.",
    "meaning": "活着的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "alive 作表语/后置定语; living 可作前置定语"
    ],
    "usage": {
      "collocations": "stay alive 活着",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw41",
    "word": "all",
    "phonetic": "美 [ɔːl]",
    "pos": "adj./adv./pron.",
    "meaning": "所有的;全部的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "all + 复数名词 = 所有; all of + 限定词 + 名词"
    ],
    "usage": {
      "collocations": "all day 整天; not at all 一点也不",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw42",
    "word": "allow",
    "phonetic": "美 [əˈlaʊ]",
    "pos": "v.",
    "meaning": "允许",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "allow doing vs. allow sb to do; 被动语态常考"
    ],
    "usage": {
      "collocations": "allow sb to do 允许某人做; be allowed to 被允许",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw43",
    "word": "almost",
    "phonetic": "美 [ˈɔːlmoʊst]",
    "pos": "adv.",
    "meaning": "几乎;差不多",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw44",
    "word": "alone",
    "phonetic": "美 [əˈloʊn]",
    "pos": "adj./adv.",
    "meaning": "独自的;单独的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "alone (客观独自) vs. lonely (主观孤独)"
    ],
    "usage": {
      "collocations": "leave sb alone 不打扰某人; live alone 独居",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw45",
    "word": "along",
    "phonetic": "美 [əˈlɔːŋ]",
    "pos": "prep./adv.",
    "meaning": "沿着;向前",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "along with 连同…一起; get along with 与…相处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw46",
    "word": "aloud",
    "phonetic": "美 [əˈlaʊd]",
    "pos": "adv.",
    "meaning": "大声地",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "aloud vs. loud vs. loudly 区别"
    ],
    "usage": {
      "collocations": "read aloud 大声朗读",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw47",
    "word": "already",
    "phonetic": "美 [ɔːlˈredi]",
    "pos": "adv.",
    "meaning": "已经",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "already 用于肯定句; yet 用于否定/疑问句"
    ],
    "usage": {
      "collocations": "have already done 已经做了",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw48",
    "word": "also",
    "phonetic": "美 [ˈɔːlsoʊ]",
    "pos": "adv.",
    "meaning": "也",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "also (句中) vs. too (句末) vs. either (否定句末)"
    ],
    "usage": {
      "collocations": "not only…but also… 不但…而且…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw49",
    "word": "although",
    "phonetic": "美 [ɔːlˈðoʊ]",
    "pos": "conj.",
    "meaning": "虽然;尽管",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "although/though 不能与 but 连用(中英文差异)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw50",
    "word": "always",
    "phonetic": "美 [ˈɔːlweɪz]",
    "pos": "adv.",
    "meaning": "总是",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "always 与现在完成时连用表示\"一直\"; He has always been kind."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw51",
    "word": "amazing",
    "phonetic": "美 [əˈmeɪzɪŋ]",
    "pos": "adj.",
    "meaning": "令人惊奇的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "amazing (令人惊奇的) vs. amazed (感到惊奇的)"
    ],
    "usage": {
      "collocations": "an amazing view 令人惊叹的景色",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw52",
    "word": "among",
    "phonetic": "美 [əˈmʌŋ]",
    "pos": "prep.",
    "meaning": "在…之中(三者+）",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "among (三者或以上) vs. between (两者之间)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw53",
    "word": "ancient",
    "phonetic": "美 [ˈeɪnʃənt]",
    "pos": "adj.",
    "meaning": "古代的;古老的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "ancient history 古代史",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw54",
    "word": "and",
    "phonetic": "美 [ænd; ənd]",
    "pos": "conj.",
    "meaning": "和;与;又",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "祈使句 + and = 如果…就; 如: Hurry up, and you'll catch the bus."
    ],
    "usage": {
      "collocations": "and so on 等等",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw55",
    "word": "angry",
    "phonetic": "美 [ˈæŋɡri]",
    "pos": "adj.",
    "meaning": "生气的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be angry with sb 生某人气; be angry at sth 因某事生气",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw56",
    "word": "animal",
    "phonetic": "美 [ˈænɪməl]",
    "pos": "n.",
    "meaning": "动物",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw57",
    "word": "another",
    "phonetic": "美 [əˈnʌðər]",
    "pos": "adj./pron.",
    "meaning": "另一个;再一个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "another + 单数名词; another + 数词 + 复数名词"
    ],
    "usage": {
      "collocations": "one another 互相; another two days 再两天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw58",
    "word": "answer",
    "phonetic": "美 [ˈænsər]",
    "pos": "n./v.",
    "meaning": "回答;答案",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "answer to (不是 of)"
    ],
    "usage": {
      "collocations": "answer the question 回答问题; the answer to …的答案",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw59",
    "word": "any",
    "phonetic": "美 [ˈeni]",
    "pos": "adj./pron.",
    "meaning": "任何的;一些",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "any 用于否定/疑问句; some 用于肯定句"
    ],
    "usage": {
      "collocations": "any more 再; any other 任何其他的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw60",
    "word": "anybody",
    "phonetic": "美 [ˈeniˌbɑːdi]",
    "pos": "pron.",
    "meaning": "任何人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw61",
    "word": "anyone",
    "phonetic": "美 [ˈeniwʌn]",
    "pos": "pron.",
    "meaning": "任何人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw62",
    "word": "anything",
    "phonetic": "美 [ˈeniθɪŋ]",
    "pos": "pron.",
    "meaning": "任何事物",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "anything else 其他任何东西",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw63",
    "word": "anyway",
    "phonetic": "美 [ˈeniweɪ]",
    "pos": "adv.",
    "meaning": "无论如何",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw64",
    "word": "anywhere",
    "phonetic": "美 [ˈeniwer]",
    "pos": "adv.",
    "meaning": "任何地方",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw65",
    "word": "appear",
    "phonetic": "美 [əˈpɪr]",
    "pos": "v.",
    "meaning": "出现;显得",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "appear (出现) vs. disappear (消失); 名词 appearance"
    ],
    "usage": {
      "collocations": "appear to be 似乎是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw66",
    "word": "apple",
    "phonetic": "美 [ˈæpəl]",
    "pos": "n.",
    "meaning": "苹果",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw67",
    "word": "April",
    "phonetic": "美 [ˈeɪprəl]",
    "pos": "n.",
    "meaning": "四月",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw68",
    "word": "area",
    "phonetic": "美 [ˈeriə]",
    "pos": "n.",
    "meaning": "地区;面积;领域",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw69",
    "word": "arm",
    "phonetic": "美 [ɑːrm]",
    "pos": "n.",
    "meaning": "手臂",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "arm in arm 臂挽臂地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw70",
    "word": "army",
    "phonetic": "美 [ˈɑːrmi]",
    "pos": "n.",
    "meaning": "军队",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw71",
    "word": "around",
    "phonetic": "美 [əˈraʊnd]",
    "pos": "prep./adv.",
    "meaning": "在周围;大约",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "look around 环顾四周; around the world 全世界",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw72",
    "word": "arrive",
    "phonetic": "美 [əˈraɪv]",
    "pos": "v.",
    "meaning": "到达",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "arrive at/in = get to = reach (及物); 名词 arrival"
    ],
    "usage": {
      "collocations": "arrive at (小地方); arrive in (大地方)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw73",
    "word": "art",
    "phonetic": "美 [ɑːrt]",
    "pos": "n.",
    "meaning": "艺术;美术",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "work of art 艺术品",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw74",
    "word": "article",
    "phonetic": "美 [ˈɑːrtɪkəl]",
    "pos": "n.",
    "meaning": "文章;冠词;物品",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw75",
    "word": "artist",
    "phonetic": "美 [ˈɑːrtɪst]",
    "pos": "n.",
    "meaning": "艺术家",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw76",
    "word": "as",
    "phonetic": "美 [æz; əz]",
    "pos": "prep./conj.",
    "meaning": "作为;因为;当…时",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "as soon as (一…就…); as + adj./adv. + as; 主将从现"
    ],
    "usage": {
      "collocations": "as…as 和…一样; as for 至于; as if 好像",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw77",
    "word": "ask",
    "phonetic": "美 [æsk]",
    "pos": "v.",
    "meaning": "问;请求",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ask sb for help; ask about 询问关于"
    ],
    "usage": {
      "collocations": "ask for 请求; ask sb to do 请某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw78",
    "word": "asleep",
    "phonetic": "美 [əˈsliːp]",
    "pos": "adj.",
    "meaning": "睡着的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "asleep 只作表语; sleeping 可作定语 (a sleeping baby)"
    ],
    "usage": {
      "collocations": "fall asleep 入睡",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw79",
    "word": "at",
    "phonetic": "美 [æt; ət]",
    "pos": "prep.",
    "meaning": "在(时间/地点)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "at (小地点/时间点) vs. in (大地点/时间段) vs. on (具体某天/表面)"
    ],
    "usage": {
      "collocations": "at first 起初; at once 立刻; at last 终于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw80",
    "word": "attend",
    "phonetic": "美 [əˈtend]",
    "pos": "v.",
    "meaning": "参加;出席",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "attend a meeting 参加会议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw81",
    "word": "attention",
    "phonetic": "美 [əˈtenʃən]",
    "pos": "n.",
    "meaning": "注意;关注",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "pay attention to doing (to是介词)"
    ],
    "usage": {
      "collocations": "pay attention to 注意…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw82",
    "word": "August",
    "phonetic": "美 [ˈɔːɡəst]",
    "pos": "n.",
    "meaning": "八月",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw83",
    "word": "aunt",
    "phonetic": "美 [ænt]",
    "pos": "n.",
    "meaning": "阿姨;姑姑;伯母",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw84",
    "word": "autumn",
    "phonetic": "美 [ˈɔːtəm]",
    "pos": "n.",
    "meaning": "秋天",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw85",
    "word": "avoid",
    "phonetic": "美 [əˈvɔɪd]",
    "pos": "v.",
    "meaning": "避免",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do！中考高频陷阱题"
    ],
    "usage": {
      "collocations": "avoid doing sth 避免做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw86",
    "word": "awake",
    "phonetic": "美 [əˈweɪk]",
    "pos": "adj./v.",
    "meaning": "醒着的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw87",
    "word": "away",
    "phonetic": "美 [əˈweɪ]",
    "pos": "adv.",
    "meaning": "离开;远离",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "go away 走开; right away 立刻; far away 远",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw88",
    "word": "awful",
    "phonetic": "美 [ˈɔːfəl]",
    "pos": "adj.",
    "meaning": "糟糕的;可怕的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw89",
    "word": "baby",
    "phonetic": "美 [ˈbeɪbi]",
    "pos": "n.",
    "meaning": "婴儿",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw90",
    "word": "back",
    "phonetic": "美 [bæk]",
    "pos": "n./adj./adv.",
    "meaning": "后面的;向后",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "come back 回来; give back 归还; at the back of 在…后面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw91",
    "word": "background",
    "phonetic": "美 [ˈbækɡraʊnd]",
    "pos": "n.",
    "meaning": "背景",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw92",
    "word": "bad",
    "phonetic": "美 [bæd]",
    "pos": "adj.",
    "meaning": "坏的;糟糕的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "bad → worse → worst"
    ],
    "usage": {
      "collocations": "be bad for 对…有害",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw93",
    "word": "badly",
    "phonetic": "美 [ˈbædli]",
    "pos": "adv.",
    "meaning": "严重地;恶劣地",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "badly → worse → worst"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw94",
    "word": "bag",
    "phonetic": "美 [bæɡ]",
    "pos": "n.",
    "meaning": "包;袋",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw95",
    "word": "ball",
    "phonetic": "美 [bɔːl]",
    "pos": "n.",
    "meaning": "球",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw96",
    "word": "balloon",
    "phonetic": "美 [bəˈluːn]",
    "pos": "n.",
    "meaning": "气球",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw97",
    "word": "bamboo",
    "phonetic": "美 [ˌbæmˈbuː]",
    "pos": "n.",
    "meaning": "竹子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw98",
    "word": "banana",
    "phonetic": "美 [bəˈnænə]",
    "pos": "n.",
    "meaning": "香蕉",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw99",
    "word": "bank",
    "phonetic": "美 [bæŋk]",
    "pos": "n.",
    "meaning": "银行;河岸",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw100",
    "word": "base",
    "phonetic": "美 [beɪs]",
    "pos": "n./v.",
    "meaning": "基础;基地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "base (n.) → basic (adj.); be based on 基于"
    ],
    "usage": {
      "collocations": "be based on 以…为基础",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw101",
    "word": "basic",
    "phonetic": "美 [ˈbeɪsɪk]",
    "pos": "adj.",
    "meaning": "基本的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw102",
    "word": "basket",
    "phonetic": "美 [ˈbæskɪt]",
    "pos": "n.",
    "meaning": "篮子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw103",
    "word": "basketball",
    "phonetic": "美 [ˈbæskɪtbɔːl]",
    "pos": "n.",
    "meaning": "篮球",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "play basketball 打篮球",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw104",
    "word": "bath",
    "phonetic": "美 [bæθ]",
    "pos": "n.",
    "meaning": "洗澡;浴缸",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "take a bath 洗澡",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw105",
    "word": "bathroom",
    "phonetic": "美 [ˈbæθruːm]",
    "pos": "n.",
    "meaning": "浴室;卫生间",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw106",
    "word": "beach",
    "phonetic": "美 [biːtʃ]",
    "pos": "n.",
    "meaning": "海滩",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw107",
    "word": "bean",
    "phonetic": "美 [biːn]",
    "pos": "n.",
    "meaning": "豆子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw108",
    "word": "bear",
    "phonetic": "美 [ber]",
    "pos": "n./v.",
    "meaning": "熊;忍受",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "bear → bore → born; bear doing/to do 忍受做某事"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw109",
    "word": "beat",
    "phonetic": "美 [biːt]",
    "pos": "v./n.",
    "meaning": "打败;敲打;跳动",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "beat → beat → beaten; beat (比赛打败) vs. win (赢得比赛/奖品)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw110",
    "word": "beautiful",
    "phonetic": "美 [ˈbjuːtɪfəl]",
    "pos": "adj.",
    "meaning": "美丽的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "beautiful → beauty (n.); beautifully (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw111",
    "word": "because",
    "phonetic": "美 [bɪˈkɔːz]",
    "pos": "conj.",
    "meaning": "因为",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "because of + n./doing; because + 从句"
    ],
    "usage": {
      "collocations": "because of 因为(后接名词)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw112",
    "word": "become",
    "phonetic": "美 [bɪˈkʌm]",
    "pos": "v.",
    "meaning": "变成;成为",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "become → became → become; become + adj./n."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw113",
    "word": "bed",
    "phonetic": "美 [bed]",
    "pos": "n.",
    "meaning": "床",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "go to bed 上床睡觉; make the bed 铺床",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw114",
    "word": "bedroom",
    "phonetic": "美 [ˈbedruːm]",
    "pos": "n.",
    "meaning": "卧室",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw115",
    "word": "beef",
    "phonetic": "美 [biːf]",
    "pos": "n.",
    "meaning": "牛肉",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw116",
    "word": "before",
    "phonetic": "美 [bɪˈfɔːr]",
    "pos": "prep./conj./adv.",
    "meaning": "在…之前",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "before + doing; 主将从现: before 从句用一般现在表将来"
    ],
    "usage": {
      "collocations": "the day before yesterday 前天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw117",
    "word": "begin",
    "phonetic": "美 [bɪˈɡɪn]",
    "pos": "v.",
    "meaning": "开始",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "begin → began → begun; 名词 beginning"
    ],
    "usage": {
      "collocations": "begin to do/doing 开始做; to begin with 首先",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw118",
    "word": "behave",
    "phonetic": "美 [bɪˈheɪv]",
    "pos": "v.",
    "meaning": "行为;表现",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "名词 behavior"
    ],
    "usage": {
      "collocations": "behave well 表现好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw119",
    "word": "behind",
    "phonetic": "美 [bɪˈhaɪnd]",
    "pos": "prep./adv.",
    "meaning": "在…后面",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "fall behind 落后; leave behind 留下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw120",
    "word": "believe",
    "phonetic": "美 [bɪˈliːv]",
    "pos": "v.",
    "meaning": "相信;认为",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "believe vs. believe in; 名词 belief"
    ],
    "usage": {
      "collocations": "believe in 信任; It is believed that 人们认为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw121",
    "word": "bell",
    "phonetic": "美 [bel]",
    "pos": "n.",
    "meaning": "铃;钟",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw122",
    "word": "belong",
    "phonetic": "美 [bɪˈlɔːŋ]",
    "pos": "v.",
    "meaning": "属于",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "belong to 不用于进行时/被动语态"
    ],
    "usage": {
      "collocations": "belong to 属于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw123",
    "word": "below",
    "phonetic": "美 [bɪˈloʊ]",
    "pos": "prep./adv.",
    "meaning": "在…下面",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "below (低于某水平) vs. under (正下方接触/不接触)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw124",
    "word": "beside",
    "phonetic": "美 [bɪˈsaɪd]",
    "pos": "prep.",
    "meaning": "在…旁边",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "beside (在旁边) vs. besides (除…之外还)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw125",
    "word": "besides",
    "phonetic": "美 [bɪˈsaɪdz]",
    "pos": "prep./adv.",
    "meaning": "除…之外(还)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "besides = in addition to; except (除…之外不包括)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw126",
    "word": "best",
    "phonetic": "美 [best]",
    "pos": "adj./adv.",
    "meaning": "最好的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "good/well → better → best"
    ],
    "usage": {
      "collocations": "do one's best 尽力; best wishes 最好的祝愿",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw127",
    "word": "better",
    "phonetic": "美 [ˈbetər]",
    "pos": "adj./adv.",
    "meaning": "更好的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "had better + 动词原形 (不是 to do); had better not do"
    ],
    "usage": {
      "collocations": "had better do 最好做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw128",
    "word": "between",
    "phonetic": "美 [bɪˈtwiːn]",
    "pos": "prep.",
    "meaning": "在…之间(两者)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "between (两者) vs. among (三者+)"
    ],
    "usage": {
      "collocations": "between A and B 在A和B之间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw129",
    "word": "big",
    "phonetic": "美 [bɪɡ]",
    "pos": "adj.",
    "meaning": "大的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "big → bigger → biggest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw130",
    "word": "bike",
    "phonetic": "美 [baɪk]",
    "pos": "n.",
    "meaning": "自行车",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "ride a bike 骑自行车; by bike 骑自行车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw131",
    "word": "bill",
    "phonetic": "美 [bɪl]",
    "pos": "n.",
    "meaning": "账单;法案;钞票",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw132",
    "word": "bird",
    "phonetic": "美 [bɜːrd]",
    "pos": "n.",
    "meaning": "鸟",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw133",
    "word": "birth",
    "phonetic": "美 [bɜːrθ]",
    "pos": "n.",
    "meaning": "出生",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "give birth to 生(孩子); date of birth 出生日期",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw134",
    "word": "birthday",
    "phonetic": "美 [ˈbɜːrθdeɪ]",
    "pos": "n.",
    "meaning": "生日",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "birthday party 生日派对",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw135",
    "word": "biscuit",
    "phonetic": "美 [ˈbɪskɪt]",
    "pos": "n.",
    "meaning": "饼干",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw136",
    "word": "bit",
    "phonetic": "美 [bɪt]",
    "pos": "n.",
    "meaning": "一点;少量",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "a bit + adj.; a bit of + 不可数名词"
    ],
    "usage": {
      "collocations": "a bit of 一点; bit by bit 逐渐地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw137",
    "word": "black",
    "phonetic": "美 [blæk]",
    "pos": "adj./n.",
    "meaning": "黑色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw138",
    "word": "blackboard",
    "phonetic": "美 [ˈblækbɔːrd]",
    "pos": "n.",
    "meaning": "黑板",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw139",
    "word": "blind",
    "phonetic": "美 [blaɪnd]",
    "pos": "adj.",
    "meaning": "失明的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go blind 失明",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw140",
    "word": "block",
    "phonetic": "美 [blɑːk]",
    "pos": "n./v.",
    "meaning": "街区;块;阻碍",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw141",
    "word": "blood",
    "phonetic": "美 [blʌd]",
    "pos": "n.",
    "meaning": "血液",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw142",
    "word": "blow",
    "phonetic": "美 [bloʊ]",
    "pos": "v.",
    "meaning": "吹;刮",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "blow → blew → blown"
    ],
    "usage": {
      "collocations": "blow out 吹灭",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw143",
    "word": "blue",
    "phonetic": "美 [bluː]",
    "pos": "adj./n.",
    "meaning": "蓝色的;忧郁的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "feel blue 感到忧郁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw144",
    "word": "board",
    "phonetic": "美 [bɔːrd]",
    "pos": "n./v.",
    "meaning": "板;董事会;上(车/船)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on board 在船上/飞机上; boarding school 寄宿学校",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw145",
    "word": "boat",
    "phonetic": "美 [boʊt]",
    "pos": "n.",
    "meaning": "小船",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "by boat 乘船; go boating 去划船",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw146",
    "word": "body",
    "phonetic": "美 [ˈbɑːdi]",
    "pos": "n.",
    "meaning": "身体",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw147",
    "word": "book",
    "phonetic": "美 [bʊk]",
    "pos": "n./v.",
    "meaning": "书;预订",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "book a ticket 订票",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw148",
    "word": "bored",
    "phonetic": "美 [bɔːrd]",
    "pos": "adj.",
    "meaning": "感到无聊的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "bored (人感到无聊) vs. boring (事物令人无聊)"
    ],
    "usage": {
      "collocations": "be bored with 对…感到无聊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw149",
    "word": "boring",
    "phonetic": "美 [ˈbɔːrɪŋ]",
    "pos": "adj.",
    "meaning": "令人无聊的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw150",
    "word": "born",
    "phonetic": "美 [bɔːrn]",
    "pos": "adj.",
    "meaning": "出生的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "be born 出生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw151",
    "word": "borrow",
    "phonetic": "美 [ˈbɑːroʊ]",
    "pos": "v.",
    "meaning": "借入",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "borrow (借入) vs. lend (借出); keep (借多久)"
    ],
    "usage": {
      "collocations": "borrow sth from sb 向某人借某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw152",
    "word": "boss",
    "phonetic": "美 [bɔːs]",
    "pos": "n.",
    "meaning": "老板",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw153",
    "word": "both",
    "phonetic": "美 [boʊθ]",
    "pos": "adj./pron.",
    "meaning": "两者都",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "both 用于两者; all 用于三者+; both…and 谓语用复数"
    ],
    "usage": {
      "collocations": "both A and B A和B都",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw154",
    "word": "bottle",
    "phonetic": "美 [ˈbɑːtəl]",
    "pos": "n.",
    "meaning": "瓶子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a bottle of 一瓶…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw155",
    "word": "bottom",
    "phonetic": "美 [ˈbɑːtəm]",
    "pos": "n.",
    "meaning": "底部",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "bottom (底部) vs. top (顶部)"
    ],
    "usage": {
      "collocations": "at the bottom of 在…底部",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw156",
    "word": "bowl",
    "phonetic": "美 [boʊl]",
    "pos": "n.",
    "meaning": "碗",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a bowl of 一碗…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw157",
    "word": "box",
    "phonetic": "美 [bɑːks]",
    "pos": "n.",
    "meaning": "盒子;箱子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw158",
    "word": "boy",
    "phonetic": "美 [bɔɪ]",
    "pos": "n.",
    "meaning": "男孩",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw159",
    "word": "brain",
    "phonetic": "美 [breɪn]",
    "pos": "n.",
    "meaning": "大脑;智力",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw160",
    "word": "brave",
    "phonetic": "美 [breɪv]",
    "pos": "adj.",
    "meaning": "勇敢的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "名词 bravery"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw161",
    "word": "bread",
    "phonetic": "美 [bred]",
    "pos": "n.",
    "meaning": "面包",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a piece of bread 一片面包",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw162",
    "word": "break",
    "phonetic": "美 [breɪk]",
    "pos": "v./n.",
    "meaning": "打破;折断;休息",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "break → broke → broken"
    ],
    "usage": {
      "collocations": "break down 出故障; break into 闯入; have a break 休息",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw163",
    "word": "breakfast",
    "phonetic": "美 [ˈbrekfəst]",
    "pos": "n.",
    "meaning": "早餐",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "have breakfast 吃早餐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw164",
    "word": "breath",
    "phonetic": "美 [breθ]",
    "pos": "n.",
    "meaning": "呼吸;气息",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "breath (n.) vs. breathe (v.)"
    ],
    "usage": {
      "collocations": "take a deep breath 深呼吸; out of breath 气喘吁吁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw165",
    "word": "breathe",
    "phonetic": "美 [briːð]",
    "pos": "v.",
    "meaning": "呼吸",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw166",
    "word": "bridge",
    "phonetic": "美 [brɪdʒ]",
    "pos": "n.",
    "meaning": "桥",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw167",
    "word": "bright",
    "phonetic": "美 [braɪt]",
    "pos": "adj.",
    "meaning": "明亮的;聪明的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw168",
    "word": "bring",
    "phonetic": "美 [brɪŋ]",
    "pos": "v.",
    "meaning": "带来",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "bring → brought → brought; bring (带来) vs. take (带走)"
    ],
    "usage": {
      "collocations": "bring up 抚养; bring about 带来;引起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw169",
    "word": "brother",
    "phonetic": "美 [ˈbrʌðər]",
    "pos": "n.",
    "meaning": "兄弟",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw170",
    "word": "brown",
    "phonetic": "美 [braʊn]",
    "pos": "adj./n.",
    "meaning": "棕色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw171",
    "word": "brush",
    "phonetic": "美 [brʌʃ]",
    "pos": "n./v.",
    "meaning": "刷子;刷",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "brush teeth 刷牙",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw172",
    "word": "build",
    "phonetic": "美 [bɪld]",
    "pos": "v.",
    "meaning": "建造",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "build → built → built; 名词 building"
    ],
    "usage": {
      "collocations": "build up 建立;增强",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw173",
    "word": "building",
    "phonetic": "美 [ˈbɪldɪŋ]",
    "pos": "n.",
    "meaning": "建筑物",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw174",
    "word": "burn",
    "phonetic": "美 [bɜːrn]",
    "pos": "v.",
    "meaning": "燃烧;烧伤",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "burn → burned/burnt → burned/burnt"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw175",
    "word": "bus",
    "phonetic": "美 [bʌs]",
    "pos": "n.",
    "meaning": "公共汽车",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "by bus 乘公交; bus stop 公交站",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw176",
    "word": "business",
    "phonetic": "美 [ˈbɪznəs]",
    "pos": "n.",
    "meaning": "生意;商业",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "on business 出差; do business 做生意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw177",
    "word": "busy",
    "phonetic": "美 [ˈbɪzi]",
    "pos": "adj.",
    "meaning": "忙碌的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "be busy with sth 忙于某事; be busy doing 忙于做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw178",
    "word": "but",
    "phonetic": "美 [bʌt; bət]",
    "pos": "conj./prep.",
    "meaning": "但是",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "but 不与 although 连用"
    ],
    "usage": {
      "collocations": "not…but… 不是…而是…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw179",
    "word": "butter",
    "phonetic": "美 [ˈbʌtər]",
    "pos": "n.",
    "meaning": "黄油",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw180",
    "word": "buy",
    "phonetic": "美 [baɪ]",
    "pos": "v.",
    "meaning": "买",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "buy → bought → bought; buy sb sth = buy sth for sb"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw181",
    "word": "by",
    "phonetic": "美 [baɪ]",
    "pos": "prep./adv.",
    "meaning": "通过;由;在…旁",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "by + doing 通过做; by + 交通工具; by + 时间 = 到…为止"
    ],
    "usage": {
      "collocations": "by the way 顺便说; by oneself 独自; by chance 偶然",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw182",
    "word": "cake",
    "phonetic": "美 [keɪk]",
    "pos": "n.",
    "meaning": "蛋糕",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw183",
    "word": "calendar",
    "phonetic": "美 [ˈkælɪndər]",
    "pos": "n.",
    "meaning": "日历",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw184",
    "word": "call",
    "phonetic": "美 [kɔːl]",
    "pos": "v./n.",
    "meaning": "打电话;称呼",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "call sb = phone sb = ring sb up"
    ],
    "usage": {
      "collocations": "call on 拜访(人); call up 打电话; call off 取消",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw185",
    "word": "calm",
    "phonetic": "美 [kɑːm]",
    "pos": "adj./v.",
    "meaning": "冷静的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "calm down 冷静下来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw186",
    "word": "camera",
    "phonetic": "美 [ˈkæmərə]",
    "pos": "n.",
    "meaning": "相机",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw187",
    "word": "camp",
    "phonetic": "美 [kæmp]",
    "pos": "n./v.",
    "meaning": "营地;露营",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "summer camp 夏令营; go camping 去露营",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw188",
    "word": "can",
    "phonetic": "美 [kæn]",
    "pos": "modal./n.",
    "meaning": "能;可以;罐头",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "can → could; can't (不能) vs. mustn't (禁止)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw189",
    "word": "cancel",
    "phonetic": "美 [ˈkænsəl]",
    "pos": "v.",
    "meaning": "取消",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "过去式 cancelled(英)/canceled(美)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw190",
    "word": "candle",
    "phonetic": "美 [ˈkændəl]",
    "pos": "n.",
    "meaning": "蜡烛",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw191",
    "word": "candy",
    "phonetic": "美 [ˈkændi]",
    "pos": "n.",
    "meaning": "糖果",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw192",
    "word": "cap",
    "phonetic": "美 [kæp]",
    "pos": "n.",
    "meaning": "帽子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw193",
    "word": "capital",
    "phonetic": "美 [ˈkæpɪtəl]",
    "pos": "n.",
    "meaning": "首都;大写字母;资本",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw194",
    "word": "car",
    "phonetic": "美 [kɑːr]",
    "pos": "n.",
    "meaning": "汽车",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "by car 开车; get into/out of a car 上/下小汽车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw195",
    "word": "card",
    "phonetic": "美 [kɑːrd]",
    "pos": "n.",
    "meaning": "卡片",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "ID card 身份证; birthday card 生日卡",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw196",
    "word": "care",
    "phonetic": "美 [ker]",
    "pos": "n./v.",
    "meaning": "关心;照顾;小心",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "careful (adj.); careless (adj.); carefully (adv.)"
    ],
    "usage": {
      "collocations": "take care of 照顾; care about 关心; care for 喜欢;照顾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw197",
    "word": "careful",
    "phonetic": "美 [ˈkerfəl]",
    "pos": "adj.",
    "meaning": "小心的;仔细的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be careful with 小心…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw198",
    "word": "careless",
    "phonetic": "美 [ˈkerləs]",
    "pos": "adj.",
    "meaning": "粗心的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw199",
    "word": "carrot",
    "phonetic": "美 [ˈkærət]",
    "pos": "n.",
    "meaning": "胡萝卜",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw200",
    "word": "carry",
    "phonetic": "美 [ˈkæri]",
    "pos": "v.",
    "meaning": "搬运;携带",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "carry → carried → carried"
    ],
    "usage": {
      "collocations": "carry on 继续; carry out 执行;实施",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw201",
    "word": "cartoon",
    "phonetic": "美 [kɑːrˈtuːn]",
    "pos": "n.",
    "meaning": "卡通;动画片",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw202",
    "word": "case",
    "phonetic": "美 [keɪs]",
    "pos": "n.",
    "meaning": "情况;案例;箱子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "in case + 从句 (以防); in case of + 名词"
    ],
    "usage": {
      "collocations": "in case 以防万一; in any case 无论如何",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw203",
    "word": "cat",
    "phonetic": "美 [kæt]",
    "pos": "n.",
    "meaning": "猫",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw204",
    "word": "catch",
    "phonetic": "美 [kætʃ]",
    "pos": "v.",
    "meaning": "抓住;赶上;染上",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "catch → caught → caught; catch sb doing 抓住某人做某事"
    ],
    "usage": {
      "collocations": "catch up with 赶上; catch a cold 感冒; catch fire 着火",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw205",
    "word": "cause",
    "phonetic": "美 [kɔːz]",
    "pos": "n./v.",
    "meaning": "原因;导致",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "cause (导致) vs. reason (原因) vs. excuse (借口)"
    ],
    "usage": {
      "collocations": "cause sb to do 导致某人做; the cause of …的原因",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw206",
    "word": "celebrate",
    "phonetic": "美 [ˈselɪbreɪt]",
    "pos": "v.",
    "meaning": "庆祝",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "名词 celebration; congratulate (祝贺人) vs. celebrate (庆祝事)"
    ],
    "usage": {
      "collocations": "celebrate a festival 庆祝节日",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw207",
    "word": "center",
    "phonetic": "美 [ˈsentər]",
    "pos": "n.",
    "meaning": "中心",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "美式 center / 英式 centre"
    ],
    "usage": {
      "collocations": "in the center of 在…中心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw208",
    "word": "central",
    "phonetic": "美 [ˈsentrəl]",
    "pos": "adj.",
    "meaning": "中心的;中央的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw209",
    "word": "century",
    "phonetic": "美 [ˈsentʃəri]",
    "pos": "n.",
    "meaning": "世纪;百年",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "the 21st century 21世纪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw210",
    "word": "certain",
    "phonetic": "美 [ˈsɜːrtən]",
    "pos": "adj.",
    "meaning": "确定的;某个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "certain → certainly (adv.); a certain + n. = 某个"
    ],
    "usage": {
      "collocations": "be certain to do 一定会做; for certain 确定地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw211",
    "word": "certainly",
    "phonetic": "美 [ˈsɜːrtənli]",
    "pos": "adv.",
    "meaning": "当然;确定地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw212",
    "word": "chair",
    "phonetic": "美 [tʃer]",
    "pos": "n.",
    "meaning": "椅子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw213",
    "word": "chalk",
    "phonetic": "美 [tʃɔːk]",
    "pos": "n.",
    "meaning": "粉笔",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw214",
    "word": "challenge",
    "phonetic": "美 [ˈtʃælɪndʒ]",
    "pos": "n./v.",
    "meaning": "挑战",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "challenging (adj.) 有挑战性的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw215",
    "word": "chance",
    "phonetic": "美 [tʃæns]",
    "pos": "n.",
    "meaning": "机会;可能性",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "chance of doing / to do 做某事的机会"
    ],
    "usage": {
      "collocations": "by chance 偶然; take a chance 冒险一试",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw216",
    "word": "change",
    "phonetic": "美 [tʃeɪndʒ]",
    "pos": "v./n.",
    "meaning": "改变;变化;零钱",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "changeable (adj.) 易变的"
    ],
    "usage": {
      "collocations": "change one's mind 改变主意; change into 变成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw217",
    "word": "character",
    "phonetic": "美 [ˈkærəktər]",
    "pos": "n.",
    "meaning": "性格;角色;汉字",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw218",
    "word": "chat",
    "phonetic": "美 [tʃæt]",
    "pos": "v./n.",
    "meaning": "聊天",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "过去式 chatted"
    ],
    "usage": {
      "collocations": "chat with sb 与某人聊天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw219",
    "word": "cheap",
    "phonetic": "美 [tʃiːp]",
    "pos": "adj.",
    "meaning": "便宜的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "反义词 expensive/dear"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw220",
    "word": "cheat",
    "phonetic": "美 [tʃiːt]",
    "pos": "v.",
    "meaning": "欺骗;作弊",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "cheat in the exam 考试作弊; cheat sb out of sth 骗取某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw221",
    "word": "check",
    "phonetic": "美 [tʃek]",
    "pos": "v./n.",
    "meaning": "检查;核对",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "check in 登记入住; check out 退房;检查",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw222",
    "word": "cheer",
    "phonetic": "美 [tʃɪr]",
    "pos": "v./n.",
    "meaning": "欢呼;加油",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "cheer up 振作起来; cheer for 为…加油",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw223",
    "word": "chemistry",
    "phonetic": "美 [ˈkemɪstri]",
    "pos": "n.",
    "meaning": "化学",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw224",
    "word": "chess",
    "phonetic": "美 [tʃes]",
    "pos": "n.",
    "meaning": "国际象棋",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "play chess 下棋",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw225",
    "word": "chicken",
    "phonetic": "美 [ˈtʃɪkɪn]",
    "pos": "n.",
    "meaning": "鸡肉;小鸡",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw226",
    "word": "child",
    "phonetic": "美 [tʃaɪld]",
    "pos": "n.",
    "meaning": "孩子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "child → children (复数); childhood (n.) 童年"
    ],
    "usage": {
      "collocations": "children's Day 儿童节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw227",
    "word": "China",
    "phonetic": "美 [ˈtʃaɪnə]",
    "pos": "n.",
    "meaning": "中国",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "大写 C; Chinese (adj./n.) 中国的/中国人/中文"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw228",
    "word": "Chinese",
    "phonetic": "美 [ˌtʃaɪˈniːz]",
    "pos": "n./adj.",
    "meaning": "中国人;中文",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw229",
    "word": "chocolate",
    "phonetic": "美 [ˈtʃɔːklət]",
    "pos": "n.",
    "meaning": "巧克力",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw230",
    "word": "choice",
    "phonetic": "美 [tʃɔɪs]",
    "pos": "n.",
    "meaning": "选择",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "choice (n.) ← choose (v.)"
    ],
    "usage": {
      "collocations": "make a choice 做选择; have no choice but to do 别无选择",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw231",
    "word": "choose",
    "phonetic": "美 [tʃuːz]",
    "pos": "v.",
    "meaning": "选择",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "choose → chose → chosen"
    ],
    "usage": {
      "collocations": "choose to do 选择做; choose from 从…中选择",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw232",
    "word": "chopsticks",
    "phonetic": "美 [ˈtʃɑːpstɪks]",
    "pos": "n.",
    "meaning": "筷子",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw233",
    "word": "Christmas",
    "phonetic": "美 [ˈkrɪsməs]",
    "pos": "n.",
    "meaning": "圣诞节",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "Merry Christmas 圣诞快乐; on Christmas Day 在圣诞节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw234",
    "word": "cinema",
    "phonetic": "美 [ˈsɪnəmə]",
    "pos": "n.",
    "meaning": "电影院",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go to the cinema 去电影院",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw235",
    "word": "circle",
    "phonetic": "美 [ˈsɜːrkəl]",
    "pos": "n./v.",
    "meaning": "圆圈;环绕",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw236",
    "word": "city",
    "phonetic": "美 [ˈsɪti]",
    "pos": "n.",
    "meaning": "城市",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "city → cities (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw237",
    "word": "class",
    "phonetic": "美 [klæs]",
    "pos": "n.",
    "meaning": "班级;课;等级",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "classmate (n.) 同学; classroom (n.) 教室"
    ],
    "usage": {
      "collocations": "after class 下课后; have a class 上课",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw238",
    "word": "classmate",
    "phonetic": "美 [ˈklæsmeɪt]",
    "pos": "n.",
    "meaning": "同学",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw239",
    "word": "classroom",
    "phonetic": "美 [ˈklæsruːm]",
    "pos": "n.",
    "meaning": "教室",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw240",
    "word": "clean",
    "phonetic": "美 [kliːn]",
    "pos": "adj./v.",
    "meaning": "清洁的;打扫",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "cleaner (n.) 清洁工; cleaning (n.) 打扫"
    ],
    "usage": {
      "collocations": "clean up 清理干净",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw241",
    "word": "clear",
    "phonetic": "美 [klɪr]",
    "pos": "adj./v.",
    "meaning": "清晰的;清除",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "clearly (adv.) 清楚地"
    ],
    "usage": {
      "collocations": "clear up 清理;放晴",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw242",
    "word": "clever",
    "phonetic": "美 [ˈklevər]",
    "pos": "adj.",
    "meaning": "聪明的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be clever at 擅长…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw243",
    "word": "climb",
    "phonetic": "美 [klaɪm]",
    "pos": "v./n.",
    "meaning": "爬;攀登",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "字母 b 不发音"
    ],
    "usage": {
      "collocations": "climb a mountain 爬山",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw244",
    "word": "clock",
    "phonetic": "美 [klɑːk]",
    "pos": "n.",
    "meaning": "时钟",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "around the clock 昼夜不停地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw245",
    "word": "clone",
    "phonetic": "美 [kloʊn]",
    "pos": "v./n.",
    "meaning": "克隆",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw246",
    "word": "close",
    "phonetic": "美 [kloʊz(关); kloʊs(近)]",
    "pos": "v./adj.",
    "meaning": "关闭;接近的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "close (关) vs. closed (adj. 关着的); 辨析 close vs. shut"
    ],
    "usage": {
      "collocations": "close down 关闭; be close to 靠近",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw247",
    "word": "clothes",
    "phonetic": "美 [kloʊðz]",
    "pos": "n.",
    "meaning": "衣服",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "clothes 复数，不能与数字连用; cloth (布) vs. clothing (总称)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw248",
    "word": "cloud",
    "phonetic": "美 [klaʊd]",
    "pos": "n.",
    "meaning": "云",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "cloudy (adj.) 多云的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw249",
    "word": "cloudy",
    "phonetic": "美 [ˈklaʊdi]",
    "pos": "adj.",
    "meaning": "多云的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw250",
    "word": "club",
    "phonetic": "美 [klʌb]",
    "pos": "n.",
    "meaning": "俱乐部",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "join a club 加入俱乐部",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw251",
    "word": "coach",
    "phonetic": "美 [koʊtʃ]",
    "pos": "n./v.",
    "meaning": "教练;长途客车",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw252",
    "word": "coal",
    "phonetic": "美 [koʊl]",
    "pos": "n.",
    "meaning": "煤",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw253",
    "word": "coast",
    "phonetic": "美 [koʊst]",
    "pos": "n.",
    "meaning": "海岸",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on the coast 在海岸上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw254",
    "word": "coat",
    "phonetic": "美 [koʊt]",
    "pos": "n.",
    "meaning": "外套",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw255",
    "word": "coffee",
    "phonetic": "美 [ˈkɔːfi]",
    "pos": "n.",
    "meaning": "咖啡",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a cup of coffee 一杯咖啡",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw256",
    "word": "coin",
    "phonetic": "美 [kɔɪn]",
    "pos": "n.",
    "meaning": "硬币",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw257",
    "word": "cold",
    "phonetic": "美 [koʊld]",
    "pos": "adj./n.",
    "meaning": "寒冷的;感冒",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "catch a cold 感冒; have a cold 感冒",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw258",
    "word": "collect",
    "phonetic": "美 [kəˈlekt]",
    "pos": "v.",
    "meaning": "收集",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "名词 collection; 形容词 collective"
    ],
    "usage": {
      "collocations": "collect stamps 集邮",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw259",
    "word": "college",
    "phonetic": "美 [ˈkɑːlɪdʒ]",
    "pos": "n.",
    "meaning": "学院;大学",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go to college 上大学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw260",
    "word": "color",
    "phonetic": "美 [ˈkʌlər]",
    "pos": "n.",
    "meaning": "颜色",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "美式 color / 英式 colour; colorful (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw261",
    "word": "come",
    "phonetic": "美 [kʌm]",
    "pos": "v.",
    "meaning": "来",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "come → came → come"
    ],
    "usage": {
      "collocations": "come true 实现; come up with 想出; come across 偶然遇到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw262",
    "word": "comfortable",
    "phonetic": "美 [ˈkʌmfərtəbəl]",
    "pos": "adj.",
    "meaning": "舒适的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw263",
    "word": "common",
    "phonetic": "美 [ˈkɑːmən]",
    "pos": "adj.",
    "meaning": "普通的;共同的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in common 共同的; common sense 常识",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw264",
    "word": "communicate",
    "phonetic": "美 [kəˈmjuːnɪkeɪt]",
    "pos": "v.",
    "meaning": "交流;沟通",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "communication (n.); 搭配介词 with"
    ],
    "usage": {
      "collocations": "communicate with sb 与某人交流",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw265",
    "word": "community",
    "phonetic": "美 [kəˈmjuːnəti]",
    "pos": "n.",
    "meaning": "社区;团体",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw266",
    "word": "company",
    "phonetic": "美 [ˈkʌmpəni]",
    "pos": "n.",
    "meaning": "公司;陪伴",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "keep sb company 陪伴某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw267",
    "word": "compare",
    "phonetic": "美 [kəmˈper]",
    "pos": "v.",
    "meaning": "比较",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "compare with (同类) vs. compare to (比喻)"
    ],
    "usage": {
      "collocations": "compare A with B 比较A和B; compared to/with 与…相比",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw268",
    "word": "compete",
    "phonetic": "美 [kəmˈpiːt]",
    "pos": "v.",
    "meaning": "竞争;比赛",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "competition (n.); competitor (n.) 竞争者"
    ],
    "usage": {
      "collocations": "compete with/against 与…竞争; compete for 为…竞争",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw269",
    "word": "complete",
    "phonetic": "美 [kəmˈpliːt]",
    "pos": "v./adj.",
    "meaning": "完成;完整的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "completely (adv.) 完全地"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw270",
    "word": "computer",
    "phonetic": "美 [kəmˈpjuːtər]",
    "pos": "n.",
    "meaning": "电脑",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "play computer games 玩电脑游戏",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw271",
    "word": "concert",
    "phonetic": "美 [ˈkɑːnsərt]",
    "pos": "n.",
    "meaning": "音乐会",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go to a concert 去听音乐会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw272",
    "word": "condition",
    "phonetic": "美 [kənˈdɪʃən]",
    "pos": "n.",
    "meaning": "条件;状况",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "on condition that 条件是; in good condition 状况良好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw273",
    "word": "connect",
    "phonetic": "美 [kəˈnekt]",
    "pos": "v.",
    "meaning": "连接",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "connection (n.); 搭配 with/to"
    ],
    "usage": {
      "collocations": "connect A with B 连接A和B",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw274",
    "word": "consider",
    "phonetic": "美 [kənˈsɪdər]",
    "pos": "v.",
    "meaning": "考虑;认为",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "后接 doing 不接 to do！"
    ],
    "usage": {
      "collocations": "consider doing 考虑做; consider sb as 把某人看作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw275",
    "word": "continue",
    "phonetic": "美 [kənˈtɪnjuː]",
    "pos": "v.",
    "meaning": "继续",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "continuous (adj.) 连续的"
    ],
    "usage": {
      "collocations": "continue to do/doing 继续做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw276",
    "word": "control",
    "phonetic": "美 [kənˈtroʊl]",
    "pos": "v./n.",
    "meaning": "控制",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "过去式 controlled"
    ],
    "usage": {
      "collocations": "out of control 失控; under control 在控制之下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw277",
    "word": "conversation",
    "phonetic": "美 [ˌkɑːnvərˈseɪʃən]",
    "pos": "n.",
    "meaning": "对话;交谈",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "have a conversation with sb 与某人交谈",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw278",
    "word": "cook",
    "phonetic": "美 [kʊk]",
    "pos": "v./n.",
    "meaning": "烹饪;厨师",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "cook (n.厨师) vs. cooker (n.炊具)"
    ],
    "usage": {
      "collocations": "do some cooking 做饭",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw279",
    "word": "cool",
    "phonetic": "美 [kuːl]",
    "pos": "adj.",
    "meaning": "凉爽的;酷的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "cool down 冷静下来;降温",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw280",
    "word": "copy",
    "phonetic": "美 [ˈkɑːpi]",
    "pos": "v./n.",
    "meaning": "复制;抄写;副本",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "copy → copied → copied (y→i+ed)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw281",
    "word": "corn",
    "phonetic": "美 [kɔːrn]",
    "pos": "n.",
    "meaning": "玉米",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw282",
    "word": "corner",
    "phonetic": "美 [ˈkɔːrnər]",
    "pos": "n.",
    "meaning": "角落",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "at the corner of 在…角落; around the corner 在拐角处;即将来临",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw283",
    "word": "correct",
    "phonetic": "美 [kəˈrekt]",
    "pos": "adj./v.",
    "meaning": "正确的;纠正",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "correctly (adv.); incorrect (反义词)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw284",
    "word": "cost",
    "phonetic": "美 [kɔːst]",
    "pos": "v./n.",
    "meaning": "花费;成本",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "cost → cost → cost; 主语是物: sth costs sb money"
    ],
    "usage": {
      "collocations": "cost of living 生活成本",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw285",
    "word": "cotton",
    "phonetic": "美 [ˈkɑːtən]",
    "pos": "n./adj.",
    "meaning": "棉花;棉的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw286",
    "word": "cough",
    "phonetic": "美 [kɔːf]",
    "pos": "v./n.",
    "meaning": "咳嗽",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw287",
    "word": "could",
    "phonetic": "美 [kʊd]",
    "pos": "modal.",
    "meaning": "能;可以(can过去式)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "could (过去能力/委婉请求); couldn't help doing 忍不住做"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw288",
    "word": "count",
    "phonetic": "美 [kaʊnt]",
    "pos": "v.",
    "meaning": "数数;重要",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "count on 依靠;指望; count down 倒计时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw289",
    "word": "country",
    "phonetic": "美 [ˈkʌntri]",
    "pos": "n.",
    "meaning": "国家;乡村",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "country → countries (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw290",
    "word": "countryside",
    "phonetic": "美 [ˈkʌntrisaɪd]",
    "pos": "n.",
    "meaning": "乡村;农村",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw291",
    "word": "couple",
    "phonetic": "美 [ˈkʌpəl]",
    "pos": "n.",
    "meaning": "一对;夫妇",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "a couple of + 复数名词"
    ],
    "usage": {
      "collocations": "a couple of 几个;一对",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw292",
    "word": "courage",
    "phonetic": "美 [ˈkɜːrɪdʒ]",
    "pos": "n.",
    "meaning": "勇气",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "encourage (v.) 鼓励; courageous (adj.) 勇敢的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw293",
    "word": "course",
    "phonetic": "美 [kɔːrs]",
    "pos": "n.",
    "meaning": "课程;路线;过程",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "of course 当然; in the course of 在…过程中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw294",
    "word": "cousin",
    "phonetic": "美 [ˈkʌzən]",
    "pos": "n.",
    "meaning": "堂(表)兄弟姐妹",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw295",
    "word": "cover",
    "phonetic": "美 [ˈkʌvər]",
    "pos": "v./n.",
    "meaning": "覆盖;封面",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "cover…with 用…覆盖; be covered with 被…覆盖",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw296",
    "word": "cow",
    "phonetic": "美 [kaʊ]",
    "pos": "n.",
    "meaning": "奶牛",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw297",
    "word": "create",
    "phonetic": "美 [kriˈeɪt]",
    "pos": "v.",
    "meaning": "创造;创建",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "creative (adj.); creation (n.); creator (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw298",
    "word": "cross",
    "phonetic": "美 [krɔːs]",
    "pos": "v./n.",
    "meaning": "穿过;十字架",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "across (prep.) 与 cross (v.) 的区别"
    ],
    "usage": {
      "collocations": "cross the road 过马路",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw299",
    "word": "crowd",
    "phonetic": "美 [kraʊd]",
    "pos": "n./v.",
    "meaning": "人群;拥挤",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "crowded (adj.) 拥挤的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw300",
    "word": "cry",
    "phonetic": "美 [kraɪ]",
    "pos": "v./n.",
    "meaning": "哭;喊叫",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "cry → cried → cried (y→i+ed)"
    ],
    "usage": {
      "collocations": "cry for help 呼救",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw301",
    "word": "culture",
    "phonetic": "美 [ˈkʌltʃər]",
    "pos": "n.",
    "meaning": "文化",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "cultural (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw302",
    "word": "cup",
    "phonetic": "美 [kʌp]",
    "pos": "n.",
    "meaning": "杯子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a cup of 一杯…; World Cup 世界杯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw303",
    "word": "custom",
    "phonetic": "美 [ˈkʌstəm]",
    "pos": "n.",
    "meaning": "风俗;习惯",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "customer (n.) 顾客"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw304",
    "word": "cut",
    "phonetic": "美 [kʌt]",
    "pos": "v./n.",
    "meaning": "切;割;削减",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "cut → cut → cut"
    ],
    "usage": {
      "collocations": "cut down 砍倒;削减; cut off 切断; cut up 切碎",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw305",
    "word": "cute",
    "phonetic": "美 [kjuːt]",
    "pos": "adj.",
    "meaning": "可爱的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw306",
    "word": "cycle",
    "phonetic": "美 [ˈsaɪkəl]",
    "pos": "n./v.",
    "meaning": "循环;骑自行车",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "recycle (v.) 回收利用"
    ],
    "usage": {
      "collocations": "go cycling 去骑行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw307",
    "word": "dad",
    "phonetic": "美 [dæd]",
    "pos": "n.",
    "meaning": "爸爸",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw308",
    "word": "daily",
    "phonetic": "美 [ˈdeɪli]",
    "pos": "adj./adv.",
    "meaning": "每日的;日常的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw309",
    "word": "dance",
    "phonetic": "美 [dæns]",
    "pos": "v./n.",
    "meaning": "跳舞",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go dancing 去跳舞",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw310",
    "word": "danger",
    "phonetic": "美 [ˈdeɪndʒər]",
    "pos": "n.",
    "meaning": "危险",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "dangerous (adj.) 危险的(对别人); in danger (自己处于危险)"
    ],
    "usage": {
      "collocations": "in danger 处于危险中; out of danger 脱离危险",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw311",
    "word": "dangerous",
    "phonetic": "美 [ˈdeɪndʒərəs]",
    "pos": "adj.",
    "meaning": "危险的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw312",
    "word": "dark",
    "phonetic": "美 [dɑːrk]",
    "pos": "adj./n.",
    "meaning": "黑暗的;深色的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "darkness (n.)"
    ],
    "usage": {
      "collocations": "in the dark 在黑暗中; dark blue 深蓝色",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw313",
    "word": "date",
    "phonetic": "美 [deɪt]",
    "pos": "n.",
    "meaning": "日期;约会",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "out of date 过时的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw314",
    "word": "daughter",
    "phonetic": "美 [ˈdɔːtər]",
    "pos": "n.",
    "meaning": "女儿",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw315",
    "word": "day",
    "phonetic": "美 [deɪ]",
    "pos": "n.",
    "meaning": "白天;一天",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "day after day (日复一日); day by day (一天天地)"
    ],
    "usage": {
      "collocations": "day and night 日夜; one day 有一天; the other day 前几天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw316",
    "word": "dead",
    "phonetic": "美 [ded]",
    "pos": "adj.",
    "meaning": "死的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "dead (adj.) vs. die (v.) vs. death (n.) vs. dying (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw317",
    "word": "deaf",
    "phonetic": "美 [def]",
    "pos": "adj.",
    "meaning": "聋的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw318",
    "word": "deal",
    "phonetic": "美 [diːl]",
    "pos": "v./n.",
    "meaning": "处理;交易",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "deal → dealt → dealt"
    ],
    "usage": {
      "collocations": "deal with 处理; a great deal of 大量",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw319",
    "word": "dear",
    "phonetic": "美 [dɪr]",
    "pos": "adj.",
    "meaning": "亲爱的;昂贵的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "dear (亲爱的/昂贵) vs. deer (鹿)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw320",
    "word": "death",
    "phonetic": "美 [deθ]",
    "pos": "n.",
    "meaning": "死亡",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw321",
    "word": "December",
    "phonetic": "美 [dɪˈsembər]",
    "pos": "n.",
    "meaning": "十二月",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw322",
    "word": "decide",
    "phonetic": "美 [dɪˈsaɪd]",
    "pos": "v.",
    "meaning": "决定",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "名词 decision; decide on sth 决定某事物"
    ],
    "usage": {
      "collocations": "decide to do sth 决定做某事; make a decision 做决定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw323",
    "word": "decision",
    "phonetic": "美 [dɪˈsɪʒən]",
    "pos": "n.",
    "meaning": "决定",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw324",
    "word": "deep",
    "phonetic": "美 [diːp]",
    "pos": "adj./adv.",
    "meaning": "深的;深奥的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "deeply (adv.) 深深地; depth (n.) 深度"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw325",
    "word": "degree",
    "phonetic": "美 [dɪˈɡriː]",
    "pos": "n.",
    "meaning": "程度;学位;度",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "to some degree 在某种程度上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw326",
    "word": "delicious",
    "phonetic": "美 [dɪˈlɪʃəs]",
    "pos": "adj.",
    "meaning": "美味的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw327",
    "word": "dentist",
    "phonetic": "美 [ˈdentɪst]",
    "pos": "n.",
    "meaning": "牙医",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw328",
    "word": "depend",
    "phonetic": "美 [dɪˈpend]",
    "pos": "v.",
    "meaning": "依赖;取决于",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "dependent (adj.); independence (n. 独立)"
    ],
    "usage": {
      "collocations": "depend on 依赖;取决于; It depends 看情况",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw329",
    "word": "describe",
    "phonetic": "美 [dɪˈskraɪb]",
    "pos": "v.",
    "meaning": "描述",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "description (n.)"
    ],
    "usage": {
      "collocations": "describe…as 把…描述为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw330",
    "word": "desert",
    "phonetic": "美 [ˈdezərt(沙); dɪˈzɜːrt(弃)]",
    "pos": "n./v.",
    "meaning": "沙漠;抛弃",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw331",
    "word": "design",
    "phonetic": "美 [dɪˈzaɪn]",
    "pos": "v./n.",
    "meaning": "设计",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "designer (n.) 设计师"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw332",
    "word": "desk",
    "phonetic": "美 [desk]",
    "pos": "n.",
    "meaning": "书桌",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw333",
    "word": "develop",
    "phonetic": "美 [dɪˈveləp]",
    "pos": "v.",
    "meaning": "发展;培养",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "developed (发达) vs. developing (发展中); development (n.)"
    ],
    "usage": {
      "collocations": "develop a habit 养成习惯; developing countries 发展中国家",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw334",
    "word": "dialogue",
    "phonetic": "美 [ˈdaɪəlɔːɡ]",
    "pos": "n.",
    "meaning": "对话",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw335",
    "word": "diary",
    "phonetic": "美 [ˈdaɪəri]",
    "pos": "n.",
    "meaning": "日记",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "diary → diaries (复数)"
    ],
    "usage": {
      "collocations": "keep a diary 记日记",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw336",
    "word": "dictionary",
    "phonetic": "美 [ˈdɪkʃəneri]",
    "pos": "n.",
    "meaning": "字典",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "look up…in the dictionary 查字典",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw337",
    "word": "die",
    "phonetic": "美 [daɪ]",
    "pos": "v.",
    "meaning": "死去",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "die → died → died; 现在分词 dying"
    ],
    "usage": {
      "collocations": "die of 死于(内因); die from 死于(外因); die out 灭绝",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw338",
    "word": "difference",
    "phonetic": "美 [ˈdɪfərəns]",
    "pos": "n.",
    "meaning": "差异",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "different (adj.) → difference (n.)"
    ],
    "usage": {
      "collocations": "make a difference 有影响; tell the difference 分辨差异",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw339",
    "word": "different",
    "phonetic": "美 [ˈdɪfərənt]",
    "pos": "adj.",
    "meaning": "不同的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "be different from (不是 than 也不是 with)"
    ],
    "usage": {
      "collocations": "be different from 与…不同",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw340",
    "word": "difficult",
    "phonetic": "美 [ˈdɪfɪkəlt]",
    "pos": "adj.",
    "meaning": "困难的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "difficult → difficulty (n.); 同义词 hard"
    ],
    "usage": {
      "collocations": "It is difficult (for sb) to do",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw341",
    "word": "difficulty",
    "phonetic": "美 [ˈdɪfɪkəlti]",
    "pos": "n.",
    "meaning": "困难",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "have difficulty (in) doing 做某事有困难",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw342",
    "word": "dig",
    "phonetic": "美 [dɪɡ]",
    "pos": "v.",
    "meaning": "挖",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "dig → dug → dug"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw343",
    "word": "dinner",
    "phonetic": "美 [ˈdɪnər]",
    "pos": "n.",
    "meaning": "正餐;晚餐",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have dinner 吃饭",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw344",
    "word": "direct",
    "phonetic": "美 [dɪˈrekt]",
    "pos": "adj./v.",
    "meaning": "直接的;指导",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "directly (adv.); direction (n.); director (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw345",
    "word": "direction",
    "phonetic": "美 [dɪˈrekʃən]",
    "pos": "n.",
    "meaning": "方向;说明",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "in the direction of 朝…方向; ask for directions 问路",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw346",
    "word": "dirty",
    "phonetic": "美 [ˈdɜːrti]",
    "pos": "adj.",
    "meaning": "脏的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "dirty → dirtier → dirtiest; dirt (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw347",
    "word": "discover",
    "phonetic": "美 [dɪˈskʌvər]",
    "pos": "v.",
    "meaning": "发现",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "discover (发现已有) vs. invent (发明新); discovery (n.)"
    ],
    "usage": {
      "collocations": "make a discovery 做出发现",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw348",
    "word": "discovery",
    "phonetic": "美 [dɪˈskʌvəri]",
    "pos": "n.",
    "meaning": "发现",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw349",
    "word": "discuss",
    "phonetic": "美 [dɪˈskʌs]",
    "pos": "v.",
    "meaning": "讨论",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "discuss 是及物动词，不加 about; discussion (n.)"
    ],
    "usage": {
      "collocations": "discuss sth with sb 与某人讨论",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw350",
    "word": "discussion",
    "phonetic": "美 [dɪˈskʌʃən]",
    "pos": "n.",
    "meaning": "讨论",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw351",
    "word": "disease",
    "phonetic": "美 [dɪˈziːz]",
    "pos": "n.",
    "meaning": "疾病",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw352",
    "word": "dish",
    "phonetic": "美 [dɪʃ]",
    "pos": "n.",
    "meaning": "盘子;菜肴",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw353",
    "word": "dismiss",
    "phonetic": "美 [dɪsˈmɪs]",
    "pos": "v.",
    "meaning": "解散;解雇",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw354",
    "word": "display",
    "phonetic": "美 [dɪˈspleɪ]",
    "pos": "v./n.",
    "meaning": "展示;陈列",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on display 展出",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw355",
    "word": "distance",
    "phonetic": "美 [ˈdɪstəns]",
    "pos": "n.",
    "meaning": "距离",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "distant (adj.) 遥远的"
    ],
    "usage": {
      "collocations": "in the distance 在远处; keep a distance 保持距离",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw356",
    "word": "divide",
    "phonetic": "美 [dɪˈvaɪd]",
    "pos": "v.",
    "meaning": "分开;除以",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "divide (分成若干份) vs. separate (分离)"
    ],
    "usage": {
      "collocations": "divide…into 把…分成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw357",
    "word": "do",
    "phonetic": "美 [duː]",
    "pos": "v./aux.",
    "meaning": "做",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "do → did → done; 助动词强调/否定/疑问"
    ],
    "usage": {
      "collocations": "do one's best 尽力; do with 处理; do without 没有…也行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw358",
    "word": "doctor",
    "phonetic": "美 [ˈdɑːktər]",
    "pos": "n.",
    "meaning": "医生;博士",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "see a doctor 看病",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw359",
    "word": "dog",
    "phonetic": "美 [dɔːɡ]",
    "pos": "n.",
    "meaning": "狗",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw360",
    "word": "dollar",
    "phonetic": "美 [ˈdɑːlər]",
    "pos": "n.",
    "meaning": "美元",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw361",
    "word": "donate",
    "phonetic": "美 [ˈdoʊneɪt]",
    "pos": "v.",
    "meaning": "捐赠",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "donation (n.)"
    ],
    "usage": {
      "collocations": "donate…to 把…捐给",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw362",
    "word": "door",
    "phonetic": "美 [dɔːr]",
    "pos": "n.",
    "meaning": "门",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw363",
    "word": "double",
    "phonetic": "美 [ˈdʌbəl]",
    "pos": "adj./v.",
    "meaning": "双倍的;两倍的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw364",
    "word": "doubt",
    "phonetic": "美 [daʊt]",
    "pos": "n./v.",
    "meaning": "怀疑",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "doubtful (adj.); doubtless (adv.)"
    ],
    "usage": {
      "collocations": "without doubt 毫无疑问; there is no doubt that 毫无疑问",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw365",
    "word": "down",
    "phonetic": "美 [daʊn]",
    "pos": "prep./adv.",
    "meaning": "向下",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "download (v.) 下载; downstairs (adv.) 楼下"
    ],
    "usage": {
      "collocations": "sit down 坐下; break down 出故障; calm down 冷静",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw366",
    "word": "dozen",
    "phonetic": "美 [ˈdʌzən]",
    "pos": "n.",
    "meaning": "一打;十二个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "dozen 与具体数字连用不加 s: two dozen eggs"
    ],
    "usage": {
      "collocations": "dozens of 几十个",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw367",
    "word": "draw",
    "phonetic": "美 [drɔː]",
    "pos": "v.",
    "meaning": "画;拉",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "draw → drew → drawn; drawer (n.) 抽屉; drawing (n.) 绘画"
    ],
    "usage": {
      "collocations": "draw a picture 画画; draw attention 吸引注意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw368",
    "word": "dream",
    "phonetic": "美 [driːm]",
    "pos": "n./v.",
    "meaning": "梦;梦想",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "dream → dreamed/dreamt → dreamed/dreamt"
    ],
    "usage": {
      "collocations": "dream of/about 梦想; come true 实现",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw369",
    "word": "dress",
    "phonetic": "美 [dres]",
    "pos": "n./v.",
    "meaning": "连衣裙;穿衣",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "dress sb 给某人穿; dress oneself 自己穿衣服"
    ],
    "usage": {
      "collocations": "dress up 打扮; get dressed 穿好衣服",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw370",
    "word": "drink",
    "phonetic": "美 [drɪŋk]",
    "pos": "v./n.",
    "meaning": "喝;饮料",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "drink → drank → drunk"
    ],
    "usage": {
      "collocations": "drink water 喝水; soft drink 软饮料",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw371",
    "word": "drive",
    "phonetic": "美 [draɪv]",
    "pos": "v.",
    "meaning": "驾驶;驱赶",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "drive → drove → driven; driver (n.) 司机"
    ],
    "usage": {
      "collocations": "drive sb crazy 把某人逼疯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw372",
    "word": "driver",
    "phonetic": "美 [ˈdraɪvər]",
    "pos": "n.",
    "meaning": "司机",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw373",
    "word": "drop",
    "phonetic": "美 [drɑːp]",
    "pos": "v./n.",
    "meaning": "滴;落下;放弃",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "过去式 dropped (双写 p)"
    ],
    "usage": {
      "collocations": "drop by 顺便拜访; drop out 退出;辍学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw374",
    "word": "dry",
    "phonetic": "美 [draɪ]",
    "pos": "adj./v.",
    "meaning": "干燥的;弄干",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "dry → drier → driest; dryer (n.) 烘干机"
    ],
    "usage": {
      "collocations": "dry up 干涸",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw375",
    "word": "duck",
    "phonetic": "美 [dʌk]",
    "pos": "n.",
    "meaning": "鸭子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw376",
    "word": "dumpling",
    "phonetic": "美 [ˈdʌmplɪŋ]",
    "pos": "n.",
    "meaning": "饺子",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw377",
    "word": "during",
    "phonetic": "美 [ˈdʊrɪŋ]",
    "pos": "prep.",
    "meaning": "在…期间",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "during + 时间段名词 (在…期间)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw378",
    "word": "duty",
    "phonetic": "美 [ˈduːti]",
    "pos": "n.",
    "meaning": "职责;义务",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "on duty 值班; It's one's duty to do 做…是某人的职责",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw379",
    "word": "each",
    "phonetic": "美 [iːtʃ]",
    "pos": "adj./pron.",
    "meaning": "每个;各自",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "each (强调个体) vs. every (强调整体)"
    ],
    "usage": {
      "collocations": "each other 互相",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw380",
    "word": "ear",
    "phonetic": "美 [ɪr]",
    "pos": "n.",
    "meaning": "耳朵",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw381",
    "word": "early",
    "phonetic": "美 [ˈɜːrli]",
    "pos": "adj./adv.",
    "meaning": "早的;提早的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "early → earlier → earliest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw382",
    "word": "earth",
    "phonetic": "美 [ɜːrθ]",
    "pos": "n.",
    "meaning": "地球;泥土",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on earth 究竟;到底 (用于疑问词后加强语气)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw383",
    "word": "earthquake",
    "phonetic": "美 [ˈɜːrθkweɪk]",
    "pos": "n.",
    "meaning": "地震",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw384",
    "word": "east",
    "phonetic": "美 [iːst]",
    "pos": "n./adj./adv.",
    "meaning": "东方;东方的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "eastern (adj.) 东方的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw385",
    "word": "easy",
    "phonetic": "美 [ˈiːzi]",
    "pos": "adj.",
    "meaning": "容易的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "easy → easier → easiest; easily (adv.)"
    ],
    "usage": {
      "collocations": "take it easy 别紧张",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw386",
    "word": "eat",
    "phonetic": "美 [iːt]",
    "pos": "v.",
    "meaning": "吃",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "eat → ate → eaten"
    ],
    "usage": {
      "collocations": "eat up 吃完",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw387",
    "word": "education",
    "phonetic": "美 [ˌedʒuˈkeɪʃən]",
    "pos": "n.",
    "meaning": "教育",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "educational (adj.); educate (v.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw388",
    "word": "effect",
    "phonetic": "美 [ɪˈfekt]",
    "pos": "n.",
    "meaning": "影响;效果",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "effect (n.影响) vs. affect (v.影响) vs. effort (n.努力)"
    ],
    "usage": {
      "collocations": "have an effect on 对…有影响; side effect 副作用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw389",
    "word": "effort",
    "phonetic": "美 [ˈefərt]",
    "pos": "n.",
    "meaning": "努力",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "make an effort to do 努力做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw390",
    "word": "egg",
    "phonetic": "美 [eɡ]",
    "pos": "n.",
    "meaning": "鸡蛋",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw391",
    "word": "eight",
    "phonetic": "美 [eɪt]",
    "pos": "num.",
    "meaning": "八",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "eighth (第8); eighteen (18); eighty (80)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw392",
    "word": "eighteen",
    "phonetic": "美 [ˌeɪˈtiːn]",
    "pos": "num.",
    "meaning": "十八",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw393",
    "word": "eighth",
    "phonetic": "美 [eɪtθ]",
    "pos": "num.",
    "meaning": "第八",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw394",
    "word": "eighty",
    "phonetic": "美 [ˈeɪti]",
    "pos": "num.",
    "meaning": "八十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw395",
    "word": "either",
    "phonetic": "美 [ˈiːðər]",
    "pos": "adj./pron./adv.",
    "meaning": "两者中的任一个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "either…or 谓语就近一致; either 也 (否定句末)"
    ],
    "usage": {
      "collocations": "either…or… 要么…要么…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw396",
    "word": "elder",
    "phonetic": "美 [ˈeldər]",
    "pos": "adj.",
    "meaning": "年长的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "elder (仅用于家人长幼) vs. older (可用于比较级)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw397",
    "word": "electric",
    "phonetic": "美 [ɪˈlektrɪk]",
    "pos": "adj.",
    "meaning": "电的;电动的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "electric (用电的) vs. electronic (电子的); electricity (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw398",
    "word": "elephant",
    "phonetic": "美 [ˈelɪfənt]",
    "pos": "n.",
    "meaning": "大象",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw399",
    "word": "eleven",
    "phonetic": "美 [ɪˈlevən]",
    "pos": "num.",
    "meaning": "十一",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "eleventh (第11)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw400",
    "word": "else",
    "phonetic": "美 [els]",
    "pos": "adv./adj.",
    "meaning": "其他的;另外",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "else 放在疑问词/不定代词之后"
    ],
    "usage": {
      "collocations": "anything else 其他东西; or else 否则",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw401",
    "word": "email",
    "phonetic": "美 [ˈiːmeɪl]",
    "pos": "n./v.",
    "meaning": "电子邮件",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw402",
    "word": "empty",
    "phonetic": "美 [ˈempti]",
    "pos": "adj./v.",
    "meaning": "空的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "empty → emptier → emptiest; 反义词 full"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw403",
    "word": "encourage",
    "phonetic": "美 [ɪnˈkɜːrɪdʒ]",
    "pos": "v.",
    "meaning": "鼓励",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "名词 encouragement; 反义词 discourage"
    ],
    "usage": {
      "collocations": "encourage sb to do 鼓励某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw404",
    "word": "end",
    "phonetic": "美 [end]",
    "pos": "n./v.",
    "meaning": "结束;末端",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "at the end of (时间/空间末端) vs. by the end of (到…末为止)"
    ],
    "usage": {
      "collocations": "in the end 最后; at the end of 在…末尾; come to an end 结束",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw405",
    "word": "enemy",
    "phonetic": "美 [ˈenəmi]",
    "pos": "n.",
    "meaning": "敌人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw406",
    "word": "energy",
    "phonetic": "美 [ˈenərdʒi]",
    "pos": "n.",
    "meaning": "能量;精力",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "energetic (adj.) 精力充沛的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw407",
    "word": "engineer",
    "phonetic": "美 [ˌendʒɪˈnɪr]",
    "pos": "n.",
    "meaning": "工程师",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "engine (n.) 发动机; engineering (n.) 工程学"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw408",
    "word": "England",
    "phonetic": "美 [ˈɪŋɡlənd]",
    "pos": "n.",
    "meaning": "英格兰;英国",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "English (adj./n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw409",
    "word": "English",
    "phonetic": "美 [ˈɪŋɡlɪʃ]",
    "pos": "n./adj.",
    "meaning": "英语;英国人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in English 用英语; English-speaking 说英语的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw410",
    "word": "enjoy",
    "phonetic": "美 [ɪnˈdʒɔɪ]",
    "pos": "v.",
    "meaning": "享受;喜欢",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do！enjoyable (adj.)"
    ],
    "usage": {
      "collocations": "enjoy doing 喜欢做; enjoy oneself 玩得开心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw411",
    "word": "enough",
    "phonetic": "美 [ɪˈnʌf]",
    "pos": "adj./adv.",
    "meaning": "足够的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "位于名词前、形容词/副词后: big enough, enough money"
    ],
    "usage": {
      "collocations": "enough + n.; adj./adv. + enough",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw412",
    "word": "enter",
    "phonetic": "美 [ˈentər]",
    "pos": "v.",
    "meaning": "进入",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "enter = go into/come into; 是及物动词，不加 into"
    ],
    "usage": {
      "collocations": "enter the room 进入房间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw413",
    "word": "environment",
    "phonetic": "美 [ɪnˈvaɪrənmənt]",
    "pos": "n.",
    "meaning": "环境",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "environmental (adj.) 环境的"
    ],
    "usage": {
      "collocations": "protect the environment 保护环境",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw414",
    "word": "eraser",
    "phonetic": "美 [ɪˈreɪsər]",
    "pos": "n.",
    "meaning": "橡皮",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw415",
    "word": "especially",
    "phonetic": "美 [ɪˈspeʃəli]",
    "pos": "adv.",
    "meaning": "尤其;特别",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "especially (强调程度) vs. specially (强调目的)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw416",
    "word": "Europe",
    "phonetic": "美 [ˈjʊrəp]",
    "pos": "n.",
    "meaning": "欧洲",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "European (adj./n.) 欧洲的/欧洲人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw417",
    "word": "even",
    "phonetic": "美 [ˈiːvən]",
    "pos": "adv.",
    "meaning": "甚至;更加",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "even + 比较级 = 更加: even better"
    ],
    "usage": {
      "collocations": "even if/though 即使; even so 即便如此",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw418",
    "word": "evening",
    "phonetic": "美 [ˈiːvnɪŋ]",
    "pos": "n.",
    "meaning": "傍晚;晚上",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in the evening 在晚上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw419",
    "word": "event",
    "phonetic": "美 [ɪˈvent]",
    "pos": "n.",
    "meaning": "事件;大事",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw420",
    "word": "ever",
    "phonetic": "美 [ˈevər]",
    "pos": "adv.",
    "meaning": "曾经",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ever (曾经) vs. never (从不); 用于疑问/否定/条件/比较句"
    ],
    "usage": {
      "collocations": "ever since 自从; for ever 永远",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw421",
    "word": "every",
    "phonetic": "美 [ˈevri]",
    "pos": "adj.",
    "meaning": "每个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "every + 单数名词; every one of + 复数名词 (谓语单数)"
    ],
    "usage": {
      "collocations": "every day 每天; every other day 每隔一天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw422",
    "word": "everybody",
    "phonetic": "美 [ˈevriˌbɑːdi]",
    "pos": "pron.",
    "meaning": "每个人",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "谓语用单数"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw423",
    "word": "everyday",
    "phonetic": "美 [ˈevrideɪ]",
    "pos": "adj.",
    "meaning": "日常的(adj.)",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "everyday (adj.日常的) vs. every day (adv.每天)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw424",
    "word": "everyone",
    "phonetic": "美 [ˈevriwʌn]",
    "pos": "pron.",
    "meaning": "每个人",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw425",
    "word": "everything",
    "phonetic": "美 [ˈevriθɪŋ]",
    "pos": "pron.",
    "meaning": "一切",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw426",
    "word": "everywhere",
    "phonetic": "美 [ˈevriwer]",
    "pos": "adv.",
    "meaning": "到处",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw427",
    "word": "exactly",
    "phonetic": "美 [ɪɡˈzæktli]",
    "pos": "adv.",
    "meaning": "恰好;精确地",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "exact (adj.) → exactly (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw428",
    "word": "exam",
    "phonetic": "美 [ɪɡˈzæm]",
    "pos": "n.",
    "meaning": "考试",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "take an exam 参加考试; pass/fail an exam 考试通过/失败",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw429",
    "word": "examine",
    "phonetic": "美 [ɪɡˈzæmɪn]",
    "pos": "v.",
    "meaning": "检查;考试",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw430",
    "word": "example",
    "phonetic": "美 [ɪɡˈzæmpəl]",
    "pos": "n.",
    "meaning": "例子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "for example 例如; set an example 树立榜样",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw431",
    "word": "excellent",
    "phonetic": "美 [ˈeksələnt]",
    "pos": "adj.",
    "meaning": "优秀的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw432",
    "word": "except",
    "phonetic": "美 [ɪkˈsept]",
    "pos": "prep.",
    "meaning": "除…之外",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "except (排除在外) vs. besides (包含在内)"
    ],
    "usage": {
      "collocations": "except for 除…之外(整体中细节除外)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw433",
    "word": "excite",
    "phonetic": "美 [ɪkˈsaɪt]",
    "pos": "v.",
    "meaning": "使兴奋",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "excited (人感到兴奋) vs. exciting (事令人兴奋); excitement (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw434",
    "word": "excuse",
    "phonetic": "美 [ɪkˈskjuːs(n.); ɪkˈskjuːz(v.)]",
    "pos": "n./v.",
    "meaning": "原谅;借口",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "excuse me 打扰一下; excuse for …的借口",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw435",
    "word": "exercise",
    "phonetic": "美 [ˈeksərsaɪz]",
    "pos": "n./v.",
    "meaning": "锻炼;练习",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "exercise 作\"锻炼\"不可数; 作\"练习/操\"可数"
    ],
    "usage": {
      "collocations": "take exercise 锻炼; do exercises 做练习",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw436",
    "word": "expect",
    "phonetic": "美 [ɪkˈspekt]",
    "pos": "v.",
    "meaning": "期望;预计",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "expect + to do; expectation (n.)"
    ],
    "usage": {
      "collocations": "expect to do 期望做; expect sb to do 期望某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw437",
    "word": "expensive",
    "phonetic": "美 [ɪkˈspensɪv]",
    "pos": "adj.",
    "meaning": "昂贵的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "反义词 cheap"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw438",
    "word": "experience",
    "phonetic": "美 [ɪkˈspɪriəns]",
    "pos": "n./v.",
    "meaning": "经验;经历",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "\"经验\"不可数; \"经历\"可数: an unforgettable experience"
    ],
    "usage": {
      "collocations": "work experience 工作经验",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw439",
    "word": "explain",
    "phonetic": "美 [ɪkˈspleɪn]",
    "pos": "v.",
    "meaning": "解释",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "explain to sb sth (❌) → explain sth to sb (✓)"
    ],
    "usage": {
      "collocations": "explain sth to sb 向某人解释",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw440",
    "word": "express",
    "phonetic": "美 [ɪkˈspres]",
    "pos": "v.",
    "meaning": "表达",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "expression (n.)"
    ],
    "usage": {
      "collocations": "express oneself 表达自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw441",
    "word": "eye",
    "phonetic": "美 [aɪ]",
    "pos": "n.",
    "meaning": "眼睛",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "keep an eye on 留意;关注",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw442",
    "word": "face",
    "phonetic": "美 [feɪs]",
    "pos": "n./v.",
    "meaning": "脸;面对",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "face to face 面对面; make a face 做鬼脸",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw443",
    "word": "fact",
    "phonetic": "美 [fækt]",
    "pos": "n.",
    "meaning": "事实",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in fact 事实上; as a matter of fact 事实上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw444",
    "word": "factory",
    "phonetic": "美 [ˈfæktəri]",
    "pos": "n.",
    "meaning": "工厂",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "factory → factories (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw445",
    "word": "fail",
    "phonetic": "美 [feɪl]",
    "pos": "v.",
    "meaning": "失败;未能",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "failure (n.); 反义词 succeed"
    ],
    "usage": {
      "collocations": "fail to do 未能做; fail (in) an exam 考试不及格",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw446",
    "word": "fair",
    "phonetic": "美 [fer]",
    "pos": "adj./n.",
    "meaning": "公平的;集市",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fairly (adv.); unfair (反义词); fairness (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw447",
    "word": "fall",
    "phonetic": "美 [fɔːl]",
    "pos": "v./n.",
    "meaning": "落下;摔倒;秋天",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fall → fell → fallen"
    ],
    "usage": {
      "collocations": "fall asleep 入睡; fall behind 落后; fall in love with 爱上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw448",
    "word": "false",
    "phonetic": "美 [fɔːls]",
    "pos": "adj.",
    "meaning": "错误的;假的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "反义词 true"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw449",
    "word": "family",
    "phonetic": "美 [ˈfæməli]",
    "pos": "n.",
    "meaning": "家庭;家人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "family 作\"家人\"时谓语用复数; family → families"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw450",
    "word": "famous",
    "phonetic": "美 [ˈfeɪməs]",
    "pos": "adj.",
    "meaning": "著名的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be famous for 因…而著名; be famous as 作为…而著名",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw451",
    "word": "fan",
    "phonetic": "美 [fæn]",
    "pos": "n.",
    "meaning": "风扇;迷;粉丝",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw452",
    "word": "fantastic",
    "phonetic": "美 [fænˈtæstɪk]",
    "pos": "adj.",
    "meaning": "极好的;奇异的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw453",
    "word": "far",
    "phonetic": "美 [fɑːr]",
    "pos": "adj./adv.",
    "meaning": "远的;遥远地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "far → farther/further → farthest/furthest"
    ],
    "usage": {
      "collocations": "far away 遥远; so far 到目前为止; as far as 据…;远至",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw454",
    "word": "farm",
    "phonetic": "美 [fɑːrm]",
    "pos": "n.",
    "meaning": "农场",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "farmer (n.) 农民; farming (n.) 农业"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw455",
    "word": "farmer",
    "phonetic": "美 [ˈfɑːrmər]",
    "pos": "n.",
    "meaning": "农民",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw456",
    "word": "fast",
    "phonetic": "美 [fæst]",
    "pos": "adj./adv.",
    "meaning": "快的;快地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw457",
    "word": "fat",
    "phonetic": "美 [fæt]",
    "pos": "adj./n.",
    "meaning": "胖的;脂肪",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fat → fatter → fattest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw458",
    "word": "father",
    "phonetic": "美 [ˈfɑːðər]",
    "pos": "n.",
    "meaning": "父亲",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw459",
    "word": "favorite",
    "phonetic": "美 [ˈfeɪvərɪt]",
    "pos": "adj./n.",
    "meaning": "最喜爱的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw460",
    "word": "fear",
    "phonetic": "美 [fɪr]",
    "pos": "n./v.",
    "meaning": "害怕;恐惧",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fearful (adj.)"
    ],
    "usage": {
      "collocations": "for fear of 以免; in fear of 害怕",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw461",
    "word": "February",
    "phonetic": "美 [ˈfebrueri]",
    "pos": "n.",
    "meaning": "二月",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw462",
    "word": "feed",
    "phonetic": "美 [fiːd]",
    "pos": "v.",
    "meaning": "喂养",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "feed → fed → fed"
    ],
    "usage": {
      "collocations": "feed on 以…为食",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw463",
    "word": "feel",
    "phonetic": "美 [fiːl]",
    "pos": "v.",
    "meaning": "感觉;摸起来",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "feel → felt → felt; feeling (n.)"
    ],
    "usage": {
      "collocations": "feel like doing 想要做; feel at home 感觉自在",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw464",
    "word": "feeling",
    "phonetic": "美 [ˈfiːlɪŋ]",
    "pos": "n.",
    "meaning": "感觉;感情",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw465",
    "word": "festival",
    "phonetic": "美 [ˈfestɪvəl]",
    "pos": "n.",
    "meaning": "节日",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "Spring Festival 春节; Mid-Autumn Festival 中秋节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw466",
    "word": "fetch",
    "phonetic": "美 [fetʃ]",
    "pos": "v.",
    "meaning": "去拿来",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "fetch = go and bring back; 辨析 bring vs. take vs. fetch"
    ],
    "usage": {
      "collocations": "fetch sb sth 给某人拿来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw467",
    "word": "fever",
    "phonetic": "美 [ˈfiːvər]",
    "pos": "n.",
    "meaning": "发烧",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have a fever 发烧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw468",
    "word": "few",
    "phonetic": "美 [fjuː]",
    "pos": "adj./pron.",
    "meaning": "很少的(可数)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "few (几乎没有) vs. a few (有几个); 修饰可数名词复数"
    ],
    "usage": {
      "collocations": "a few 几个; quite a few 相当多",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw469",
    "word": "field",
    "phonetic": "美 [fiːld]",
    "pos": "n.",
    "meaning": "田地;领域;田野",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw470",
    "word": "fifteen",
    "phonetic": "美 [ˌfɪfˈtiːn]",
    "pos": "num.",
    "meaning": "十五",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "fifteenth (第15); fifty (50)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw471",
    "word": "fifth",
    "phonetic": "美 [fɪfθ]",
    "pos": "num.",
    "meaning": "第五",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw472",
    "word": "fifty",
    "phonetic": "美 [ˈfɪfti]",
    "pos": "num.",
    "meaning": "五十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw473",
    "word": "fight",
    "phonetic": "美 [faɪt]",
    "pos": "v./n.",
    "meaning": "打架;战斗",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "fight → fought → fought"
    ],
    "usage": {
      "collocations": "fight against 与…斗争; fight for 为…而战",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw474",
    "word": "fill",
    "phonetic": "美 [fɪl]",
    "pos": "v.",
    "meaning": "装满;填满",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fill in 填写; fill out 填写(表格)"
    ],
    "usage": {
      "collocations": "fill A with B 用B装满A; be filled with = be full of 充满",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw475",
    "word": "film",
    "phonetic": "美 [fɪlm]",
    "pos": "n.",
    "meaning": "电影;胶卷",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw476",
    "word": "final",
    "phonetic": "美 [ˈfaɪnəl]",
    "pos": "adj./n.",
    "meaning": "最终的;决赛",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "finally (adv.) = at last = in the end"
    ],
    "usage": {
      "collocations": "the final exam 期末考试",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw477",
    "word": "find",
    "phonetic": "美 [faɪnd]",
    "pos": "v.",
    "meaning": "找到;发现",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "find → found → found; find (找到) vs. look for (寻找)"
    ],
    "usage": {
      "collocations": "find out 查明;弄清楚",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw478",
    "word": "fine",
    "phonetic": "美 [faɪn]",
    "pos": "adj./n./v.",
    "meaning": "好的;晴朗的;罚款",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw479",
    "word": "finger",
    "phonetic": "美 [ˈfɪŋɡər]",
    "pos": "n.",
    "meaning": "手指",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw480",
    "word": "finish",
    "phonetic": "美 [ˈfɪnɪʃ]",
    "pos": "v.",
    "meaning": "完成",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do！"
    ],
    "usage": {
      "collocations": "finish doing 做完某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw481",
    "word": "fire",
    "phonetic": "美 [faɪər]",
    "pos": "n./v.",
    "meaning": "火;火灾;开火",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fireman/firefighter (n.) 消防员"
    ],
    "usage": {
      "collocations": "catch fire 着火; on fire 起火; set fire to 放火",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw482",
    "word": "first",
    "phonetic": "美 [fɜːrst]",
    "pos": "num./adj./adv.",
    "meaning": "第一;首先",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "first → firstly (adv.); at first (起初) vs. first (首先)"
    ],
    "usage": {
      "collocations": "first of all 首先; at first 起初",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw483",
    "word": "fish",
    "phonetic": "美 [fɪʃ]",
    "pos": "n./v.",
    "meaning": "鱼;鱼肉;钓鱼",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fish 复数: fish (同种) / fishes (多种)"
    ],
    "usage": {
      "collocations": "go fishing 去钓鱼",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw484",
    "word": "fit",
    "phonetic": "美 [fɪt]",
    "pos": "v./adj.",
    "meaning": "适合;合身;健康的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "过去式 fitted/fit"
    ],
    "usage": {
      "collocations": "keep fit 保持健康; fit in with 适应",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw485",
    "word": "five",
    "phonetic": "美 [faɪv]",
    "pos": "num.",
    "meaning": "五",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fifth (第5)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw486",
    "word": "fix",
    "phonetic": "美 [fɪks]",
    "pos": "v.",
    "meaning": "修理;固定",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fixed (adj.) 固定的"
    ],
    "usage": {
      "collocations": "fix up 修理; fix on 确定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw487",
    "word": "flag",
    "phonetic": "美 [flæɡ]",
    "pos": "n.",
    "meaning": "旗子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw488",
    "word": "flat",
    "phonetic": "美 [flæt]",
    "pos": "n./adj.",
    "meaning": "公寓;平坦的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a flat tire 漏气的轮胎",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw489",
    "word": "flight",
    "phonetic": "美 [flaɪt]",
    "pos": "n.",
    "meaning": "航班;飞行",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw490",
    "word": "floor",
    "phonetic": "美 [flɔːr]",
    "pos": "n.",
    "meaning": "地板;楼层",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "on the + 序数词 + floor 在第几层"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw491",
    "word": "flower",
    "phonetic": "美 [ˈflaʊər]",
    "pos": "n.",
    "meaning": "花",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "辨析 flour (面粉) 同音 /ˈflaʊər/"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw492",
    "word": "flu",
    "phonetic": "美 [fluː]",
    "pos": "n.",
    "meaning": "流感",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "have the flu 得流感",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw493",
    "word": "fly",
    "phonetic": "美 [flaɪ]",
    "pos": "v./n.",
    "meaning": "飞;苍蝇",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fly → flew → flown; flight (n.) 飞行"
    ],
    "usage": {
      "collocations": "fly a kite 放风筝",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw494",
    "word": "follow",
    "phonetic": "美 [ˈfɑːloʊ]",
    "pos": "v.",
    "meaning": "跟随;遵守",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "following (adj.) 以下的"
    ],
    "usage": {
      "collocations": "follow the rules 遵守规则; as follows 如下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw495",
    "word": "food",
    "phonetic": "美 [fuːd]",
    "pos": "n.",
    "meaning": "食物",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "fast food 快餐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw496",
    "word": "foot",
    "phonetic": "美 [fʊt]",
    "pos": "n.",
    "meaning": "脚;英尺",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "foot → feet (复数); football (n.) 足球"
    ],
    "usage": {
      "collocations": "on foot 步行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw497",
    "word": "football",
    "phonetic": "美 [ˈfʊtbɔːl]",
    "pos": "n.",
    "meaning": "足球",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "play football 踢足球",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw498",
    "word": "for",
    "phonetic": "美 [fɔːr; fər]",
    "pos": "prep./conj.",
    "meaning": "为了;给;因为;达",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "for + 时间段 (持续多久); for + doing (表用途)"
    ],
    "usage": {
      "collocations": "for example 例如; for sure 肯定; look for 寻找",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw499",
    "word": "force",
    "phonetic": "美 [fɔːrs]",
    "pos": "n./v.",
    "meaning": "力量;迫使",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "force sb to do 强迫某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw500",
    "word": "foreign",
    "phonetic": "美 [ˈfɔːrən]",
    "pos": "adj.",
    "meaning": "外国的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "foreigner (n.) 外国人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw501",
    "word": "forest",
    "phonetic": "美 [ˈfɔːrɪst]",
    "pos": "n.",
    "meaning": "森林",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw502",
    "word": "forget",
    "phonetic": "美 [fərˈɡet]",
    "pos": "v.",
    "meaning": "忘记",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "forget → forgot → forgotten; 中考必考辨析！"
    ],
    "usage": {
      "collocations": "forget to do 忘记去做; forget doing 忘记做过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw503",
    "word": "fork",
    "phonetic": "美 [fɔːrk]",
    "pos": "n.",
    "meaning": "叉子;岔路口",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw504",
    "word": "form",
    "phonetic": "美 [fɔːrm]",
    "pos": "n./v.",
    "meaning": "形式;表格;形成",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "formal (adj.) 正式的; informal (反义)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw505",
    "word": "forty",
    "phonetic": "美 [ˈfɔːrti]",
    "pos": "num.",
    "meaning": "四十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "注意拼写: forty 不是 fourty"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw506",
    "word": "forward",
    "phonetic": "美 [ˈfɔːrwərd]",
    "pos": "adv.",
    "meaning": "向前",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "look forward to + doing (to是介词)"
    ],
    "usage": {
      "collocations": "look forward to 期待",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw507",
    "word": "four",
    "phonetic": "美 [fɔːr]",
    "pos": "num.",
    "meaning": "四",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "fourth (第4); fourteen (14); forty (40)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw508",
    "word": "fourteen",
    "phonetic": "美 [ˌfɔːrˈtiːn]",
    "pos": "num.",
    "meaning": "十四",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw509",
    "word": "fourth",
    "phonetic": "美 [fɔːrθ]",
    "pos": "num.",
    "meaning": "第四",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw510",
    "word": "France",
    "phonetic": "美 [fræns]",
    "pos": "n.",
    "meaning": "法国",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "French (adj./n.) 法国的/法语/法国人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw511",
    "word": "free",
    "phonetic": "美 [friː]",
    "pos": "adj.",
    "meaning": "自由的;免费的;空闲的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "freedom (n.) 自由"
    ],
    "usage": {
      "collocations": "for free 免费; set free 释放",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw512",
    "word": "freeze",
    "phonetic": "美 [friːz]",
    "pos": "v.",
    "meaning": "冻结;结冰",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "freeze → froze → frozen; freezing (adj.) 极冷的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw513",
    "word": "French",
    "phonetic": "美 [frentʃ]",
    "pos": "n./adj.",
    "meaning": "法语;法国的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw514",
    "word": "fresh",
    "phonetic": "美 [freʃ]",
    "pos": "adj.",
    "meaning": "新鲜的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "fresh air 新鲜空气",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw515",
    "word": "Friday",
    "phonetic": "美 [ˈfraɪdeɪ]",
    "pos": "n.",
    "meaning": "星期五",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw516",
    "word": "friend",
    "phonetic": "美 [frend]",
    "pos": "n.",
    "meaning": "朋友",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "friendly (adj.) 友好的; friendship (n.) 友谊"
    ],
    "usage": {
      "collocations": "make friends with 与…交朋友",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw517",
    "word": "friendly",
    "phonetic": "美 [ˈfrendli]",
    "pos": "adj.",
    "meaning": "友好的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw518",
    "word": "friendship",
    "phonetic": "美 [ˈfrendʃɪp]",
    "pos": "n.",
    "meaning": "友谊",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw519",
    "word": "frighten",
    "phonetic": "美 [ˈfraɪtən]",
    "pos": "v.",
    "meaning": "使害怕",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "frightened (人害怕) vs. frightening (事物吓人)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw520",
    "word": "from",
    "phonetic": "美 [frʌm; frəm]",
    "pos": "prep.",
    "meaning": "从;来自;由于",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "from…to… 从…到…"
    ],
    "usage": {
      "collocations": "from now on 从现在起; be from 来自",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw521",
    "word": "front",
    "phonetic": "美 [frʌnt]",
    "pos": "n./adj.",
    "meaning": "前面;正面的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in front of 在…前面(外部); in the front of 在…前部(内部)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw522",
    "word": "fruit",
    "phonetic": "美 [fruːt]",
    "pos": "n.",
    "meaning": "水果",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "fruit 通常不可数; fruits 指多种水果"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw523",
    "word": "full",
    "phonetic": "美 [fʊl]",
    "pos": "adj.",
    "meaning": "满的;饱的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "be full of 充满; in full 全部地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw524",
    "word": "fun",
    "phonetic": "美 [fʌn]",
    "pos": "n./adj.",
    "meaning": "乐趣;有趣的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "funny (adj.) 滑稽的; 辨析 fun vs. funny"
    ],
    "usage": {
      "collocations": "have fun 玩得开心; make fun of 取笑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw525",
    "word": "funny",
    "phonetic": "美 [ˈfʌni]",
    "pos": "adj.",
    "meaning": "滑稽的;有趣的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw526",
    "word": "future",
    "phonetic": "美 [ˈfjuːtʃər]",
    "pos": "n./adj.",
    "meaning": "将来;未来的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "in future (从今往后) vs. in the future (在未来某个时间)"
    ],
    "usage": {
      "collocations": "in the future 在未来; in future 今后",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw527",
    "word": "game",
    "phonetic": "美 [ɡeɪm]",
    "pos": "n.",
    "meaning": "游戏;比赛",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "play games 玩游戏; Olympic Games 奥运会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw528",
    "word": "garden",
    "phonetic": "美 [ˈɡɑːrdən]",
    "pos": "n.",
    "meaning": "花园",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw529",
    "word": "gate",
    "phonetic": "美 [ɡeɪt]",
    "pos": "n.",
    "meaning": "大门",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw530",
    "word": "general",
    "phonetic": "美 [ˈdʒenərəl]",
    "pos": "adj./n.",
    "meaning": "一般的;将军",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in general 一般来说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw531",
    "word": "gentleman",
    "phonetic": "美 [ˈdʒentəlmən]",
    "pos": "n.",
    "meaning": "绅士;先生",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "gentleman → gentlemen (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw532",
    "word": "geography",
    "phonetic": "美 [dʒiˈɑːɡrəfi]",
    "pos": "n.",
    "meaning": "地理",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw533",
    "word": "German",
    "phonetic": "美 [ˈdʒɜːrmən]",
    "pos": "n./adj.",
    "meaning": "德国人;德语的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "Germany (n.德国); German (adj./n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw534",
    "word": "Germany",
    "phonetic": "美 [ˈdʒɜːrməni]",
    "pos": "n.",
    "meaning": "德国",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw535",
    "word": "get",
    "phonetic": "美 [ɡet]",
    "pos": "v.",
    "meaning": "得到;变得;到达",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "get → got → gotten/got; 大量短语搭配"
    ],
    "usage": {
      "collocations": "get up 起床; get on 上车; get off 下车; get along with 相处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw536",
    "word": "gift",
    "phonetic": "美 [ɡɪft]",
    "pos": "n.",
    "meaning": "礼物;天赋",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "have a gift for 有…天赋",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw537",
    "word": "girl",
    "phonetic": "美 [ɡɜːrl]",
    "pos": "n.",
    "meaning": "女孩",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw538",
    "word": "give",
    "phonetic": "美 [ɡɪv]",
    "pos": "v.",
    "meaning": "给;给予",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "give → gave → given; give sb sth = give sth to sb"
    ],
    "usage": {
      "collocations": "give up 放弃; give away 赠送; give out 分发;用尽",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw539",
    "word": "glad",
    "phonetic": "美 [ɡlæd]",
    "pos": "adj.",
    "meaning": "高兴的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "be glad to do 很高兴做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw540",
    "word": "glass",
    "phonetic": "美 [ɡlæs]",
    "pos": "n.",
    "meaning": "玻璃;玻璃杯;眼镜",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a glass of 一杯; glasses 眼镜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw541",
    "word": "glove",
    "phonetic": "美 [ɡlʌv]",
    "pos": "n.",
    "meaning": "手套",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw542",
    "word": "go",
    "phonetic": "美 [ɡoʊ]",
    "pos": "v.",
    "meaning": "去;走;变得",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "go → went → gone; go + doing (go shopping)"
    ],
    "usage": {
      "collocations": "go on 继续; go over 复习; go through 经历; go out 出去",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw543",
    "word": "goal",
    "phonetic": "美 [ɡoʊl]",
    "pos": "n.",
    "meaning": "目标;球门",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "achieve a goal 实现目标",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw544",
    "word": "god",
    "phonetic": "美 [ɡɑːd]",
    "pos": "n.",
    "meaning": "神;上帝",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "God bless you 上帝保佑你",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw545",
    "word": "gold",
    "phonetic": "美 [ɡoʊld]",
    "pos": "n./adj.",
    "meaning": "金子;金色的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "golden (adj.) 金色的;黄金般的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw546",
    "word": "good",
    "phonetic": "美 [ɡʊd]",
    "pos": "adj.",
    "meaning": "好的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "good → better → best"
    ],
    "usage": {
      "collocations": "be good at 擅长; be good for 对…有益; do good to 对…有好处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw547",
    "word": "goodbye",
    "phonetic": "美 [ˌɡʊdˈbaɪ]",
    "pos": "interj.",
    "meaning": "再见",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw548",
    "word": "government",
    "phonetic": "美 [ˈɡʌvərnmənt]",
    "pos": "n.",
    "meaning": "政府",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw549",
    "word": "grade",
    "phonetic": "美 [ɡreɪd]",
    "pos": "n.",
    "meaning": "年级;等级;成绩",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw550",
    "word": "grammar",
    "phonetic": "美 [ˈɡræmər]",
    "pos": "n.",
    "meaning": "语法",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw551",
    "word": "granddaughter",
    "phonetic": "美 [ˈɡrænˌdɔːtər]",
    "pos": "n.",
    "meaning": "孙女;外孙女",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw552",
    "word": "grandfather",
    "phonetic": "美 [ˈɡrænˌfɑːðər]",
    "pos": "n.",
    "meaning": "爷爷;外公",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw553",
    "word": "grandmother",
    "phonetic": "美 [ˈɡrænˌmʌðər]",
    "pos": "n.",
    "meaning": "奶奶;外婆",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw554",
    "word": "grandson",
    "phonetic": "美 [ˈɡrænˌsʌn]",
    "pos": "n.",
    "meaning": "孙子;外孙",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw555",
    "word": "grape",
    "phonetic": "美 [ɡreɪp]",
    "pos": "n.",
    "meaning": "葡萄",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw556",
    "word": "grass",
    "phonetic": "美 [ɡræs]",
    "pos": "n.",
    "meaning": "草;草地",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw557",
    "word": "great",
    "phonetic": "美 [ɡreɪt]",
    "pos": "adj.",
    "meaning": "伟大的;极好的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a great deal of 大量; a great many 许多",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw558",
    "word": "green",
    "phonetic": "美 [ɡriːn]",
    "pos": "adj./n.",
    "meaning": "绿色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw559",
    "word": "greet",
    "phonetic": "美 [ɡriːt]",
    "pos": "v.",
    "meaning": "问候;迎接",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "greeting (n.) 问候"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw560",
    "word": "ground",
    "phonetic": "美 [ɡraʊnd]",
    "pos": "n.",
    "meaning": "地面;根据;理由",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on the ground 在地面上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw561",
    "word": "group",
    "phonetic": "美 [ɡruːp]",
    "pos": "n.",
    "meaning": "组;群;团体",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a group of 一组;一群",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw562",
    "word": "grow",
    "phonetic": "美 [ɡroʊ]",
    "pos": "v.",
    "meaning": "生长;种植;变得",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "grow → grew → grown; growth (n.)"
    ],
    "usage": {
      "collocations": "grow up 长大; grow into 成长为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw563",
    "word": "guard",
    "phonetic": "美 [ɡɑːrd]",
    "pos": "n./v.",
    "meaning": "守卫;警卫",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw564",
    "word": "guess",
    "phonetic": "美 [ɡes]",
    "pos": "v./n.",
    "meaning": "猜测",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw565",
    "word": "guest",
    "phonetic": "美 [ɡest]",
    "pos": "n.",
    "meaning": "客人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw566",
    "word": "guide",
    "phonetic": "美 [ɡaɪd]",
    "pos": "n./v.",
    "meaning": "向导;指导",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "guidance (n.) 指导"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw567",
    "word": "gun",
    "phonetic": "美 [ɡʌn]",
    "pos": "n.",
    "meaning": "枪",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw568",
    "word": "gym",
    "phonetic": "美 [dʒɪm]",
    "pos": "n.",
    "meaning": "体育馆;健身房",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw569",
    "word": "habit",
    "phonetic": "美 [ˈhæbɪt]",
    "pos": "n.",
    "meaning": "习惯",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "get into the habit of 养成…习惯; break a habit 改掉习惯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw570",
    "word": "hair",
    "phonetic": "美 [her]",
    "pos": "n.",
    "meaning": "头发",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw571",
    "word": "half",
    "phonetic": "美 [hæf]",
    "pos": "n./adj.",
    "meaning": "一半",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "half → halves (复数)"
    ],
    "usage": {
      "collocations": "half an hour 半小时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw572",
    "word": "hall",
    "phonetic": "美 [hɔːl]",
    "pos": "n.",
    "meaning": "大厅;走廊",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw573",
    "word": "ham",
    "phonetic": "美 [hæm]",
    "pos": "n.",
    "meaning": "火腿",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw574",
    "word": "hamburger",
    "phonetic": "美 [ˈhæmbɜːrɡər]",
    "pos": "n.",
    "meaning": "汉堡包",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw575",
    "word": "hand",
    "phonetic": "美 [hænd]",
    "pos": "n./v.",
    "meaning": "手;递",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "hand in 上交; hand out 分发; hand over 移交; give sb a hand 帮某人一把",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw576",
    "word": "handsome",
    "phonetic": "美 [ˈhænsəm]",
    "pos": "adj.",
    "meaning": "英俊的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw577",
    "word": "hang",
    "phonetic": "美 [hæŋ]",
    "pos": "v.",
    "meaning": "悬挂;吊死",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hang → hung → hung (悬挂); hang → hanged → hanged (绞死)"
    ],
    "usage": {
      "collocations": "hang out 闲逛; hang up 挂断电话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw578",
    "word": "happen",
    "phonetic": "美 [ˈhæpən]",
    "pos": "v.",
    "meaning": "发生;碰巧",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "happen 不用于被动语态: sth happens"
    ],
    "usage": {
      "collocations": "happen to do 碰巧做; What happened? 发生了什么？",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw579",
    "word": "happy",
    "phonetic": "美 [ˈhæpi]",
    "pos": "adj.",
    "meaning": "快乐的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "happy → happier → happiest; happiness (n.); happily (adv.)"
    ],
    "usage": {
      "collocations": "be happy with 对…满意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw580",
    "word": "hard",
    "phonetic": "美 [hɑːrd]",
    "pos": "adj./adv.",
    "meaning": "难的;硬的;努力地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hardly (adv.) 几乎不 ≠ hard (adv.)"
    ],
    "usage": {
      "collocations": "work hard 努力工作; hard-working 勤奋的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw581",
    "word": "hardly",
    "phonetic": "美 [ˈhɑːrdli]",
    "pos": "adv.",
    "meaning": "几乎不",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "hardly 是否定副词; hardly…when = no sooner…than"
    ],
    "usage": {
      "collocations": "hardly ever 几乎从不; hardly…when 刚…就",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw582",
    "word": "harm",
    "phonetic": "美 [hɑːrm]",
    "pos": "n./v.",
    "meaning": "伤害;损害",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "harmful (adj.) 有害的; harmless (adj.) 无害的"
    ],
    "usage": {
      "collocations": "do harm to 对…有害",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw583",
    "word": "hat",
    "phonetic": "美 [hæt]",
    "pos": "n.",
    "meaning": "帽子(有边的)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hat (有边帽) vs. cap (有檐帽)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw584",
    "word": "hate",
    "phonetic": "美 [heɪt]",
    "pos": "v.",
    "meaning": "讨厌;憎恨",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hate → hatred (n.) 仇恨"
    ],
    "usage": {
      "collocations": "hate to do/doing 讨厌做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw585",
    "word": "have",
    "phonetic": "美 [hæv]",
    "pos": "v./aux.",
    "meaning": "有;吃;喝;让",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "have → had → had; have sth done 让某事被做; have sb do 让某人做"
    ],
    "usage": {
      "collocations": "have to 不得不; have…done 让…被做; have a good time 玩得开心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw586",
    "word": "he",
    "phonetic": "美 [hiː]",
    "pos": "pron.",
    "meaning": "他",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "he → him → his → his → himself"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw587",
    "word": "head",
    "phonetic": "美 [hed]",
    "pos": "n./v.",
    "meaning": "头;头部;领导",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "head for 前往; at the head of 在…的前头",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw588",
    "word": "headache",
    "phonetic": "美 [ˈhedeɪk]",
    "pos": "n.",
    "meaning": "头痛",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "have a headache 头痛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw589",
    "word": "health",
    "phonetic": "美 [helθ]",
    "pos": "n.",
    "meaning": "健康",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "healthy (adj.); 反义词 unhealthy"
    ],
    "usage": {
      "collocations": "in good health 健康状况良好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw590",
    "word": "healthy",
    "phonetic": "美 [ˈhelθi]",
    "pos": "adj.",
    "meaning": "健康的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "keep healthy 保持健康",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw591",
    "word": "hear",
    "phonetic": "美 [hɪr]",
    "pos": "v.",
    "meaning": "听见",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hear → heard → heard; hear (听见结果) vs. listen (听动作)"
    ],
    "usage": {
      "collocations": "hear from 收到…来信; hear of/about 听说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw592",
    "word": "heart",
    "phonetic": "美 [hɑːrt]",
    "pos": "n.",
    "meaning": "心脏;内心",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "heart (n.心脏) vs. mind (n.头脑)"
    ],
    "usage": {
      "collocations": "learn by heart 记住; lose heart 失去信心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw593",
    "word": "heat",
    "phonetic": "美 [hiːt]",
    "pos": "n./v.",
    "meaning": "热;加热",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hot (adj.); heat (n./v.); heater (n.) 加热器"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw594",
    "word": "heavy",
    "phonetic": "美 [ˈhevi]",
    "pos": "adj.",
    "meaning": "重的;大的(雨雪)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "heavy → heavier → heaviest; heavily (adv.)"
    ],
    "usage": {
      "collocations": "heavy rain 大雨",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw595",
    "word": "height",
    "phonetic": "美 [haɪt]",
    "pos": "n.",
    "meaning": "高度;身高",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "high (adj.) → height (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw596",
    "word": "hello",
    "phonetic": "美 [həˈloʊ]",
    "pos": "interj.",
    "meaning": "你好",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "say hello to 向…问好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw597",
    "word": "help",
    "phonetic": "美 [help]",
    "pos": "v./n.",
    "meaning": "帮助",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "help sb (to) do 帮助某人做; help oneself to 请自便; can't help doing 忍不住做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw598",
    "word": "helpful",
    "phonetic": "美 [ˈhelpfəl]",
    "pos": "adj.",
    "meaning": "有帮助的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw599",
    "word": "hen",
    "phonetic": "美 [hen]",
    "pos": "n.",
    "meaning": "母鸡",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw600",
    "word": "her",
    "phonetic": "美 [hɜːr; hər]",
    "pos": "pron.",
    "meaning": "她的;她(宾格)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw601",
    "word": "here",
    "phonetic": "美 [hɪr]",
    "pos": "adv.",
    "meaning": "这里",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "here and there 到处; Here you are. 给你。",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw602",
    "word": "hero",
    "phonetic": "美 [ˈhɪroʊ]",
    "pos": "n.",
    "meaning": "英雄;男主角",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hero → heroes (复数加es)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw603",
    "word": "hers",
    "phonetic": "美 [hɜːrz]",
    "pos": "pron.",
    "meaning": "她的(名物代)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw604",
    "word": "herself",
    "phonetic": "美 [hɜːrˈself]",
    "pos": "pron.",
    "meaning": "她自己",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "by herself 她自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw605",
    "word": "hi",
    "phonetic": "美 [haɪ]",
    "pos": "interj.",
    "meaning": "嗨",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw606",
    "word": "hide",
    "phonetic": "美 [haɪd]",
    "pos": "v.",
    "meaning": "隐藏",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hide → hid → hidden"
    ],
    "usage": {
      "collocations": "hide from 躲避",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw607",
    "word": "high",
    "phonetic": "美 [haɪ]",
    "pos": "adj./adv.",
    "meaning": "高的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "high → higher → highest; height (n.) 高度"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw608",
    "word": "hill",
    "phonetic": "美 [hɪl]",
    "pos": "n.",
    "meaning": "小山",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw609",
    "word": "him",
    "phonetic": "美 [hɪm]",
    "pos": "pron.",
    "meaning": "他(宾格)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw610",
    "word": "himself",
    "phonetic": "美 [hɪmˈself]",
    "pos": "pron.",
    "meaning": "他自己",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "by himself 他自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw611",
    "word": "his",
    "phonetic": "美 [hɪz]",
    "pos": "pron.",
    "meaning": "他的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw612",
    "word": "history",
    "phonetic": "美 [ˈhɪstəri]",
    "pos": "n.",
    "meaning": "历史",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "historical (adj.) 历史(上)的; historic (adj.) 有历史意义的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw613",
    "word": "hit",
    "phonetic": "美 [hɪt]",
    "pos": "v./n.",
    "meaning": "打;击;碰撞",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hit → hit → hit"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw614",
    "word": "hobby",
    "phonetic": "美 [ˈhɑːbi]",
    "pos": "n.",
    "meaning": "爱好",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "hobby → hobbies (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw615",
    "word": "hold",
    "phonetic": "美 [hoʊld]",
    "pos": "v.",
    "meaning": "抓住;举行;容纳",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hold → held → held"
    ],
    "usage": {
      "collocations": "hold on 等一下;坚持; hold a meeting 开会; hold back 阻止",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw616",
    "word": "hole",
    "phonetic": "美 [hoʊl]",
    "pos": "n.",
    "meaning": "洞;孔",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw617",
    "word": "holiday",
    "phonetic": "美 [ˈhɑːlədeɪ]",
    "pos": "n.",
    "meaning": "假日;假期",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on holiday 在度假; take a holiday 休假",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw618",
    "word": "home",
    "phonetic": "美 [hoʊm]",
    "pos": "n./adv.",
    "meaning": "家;家乡",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "at home 在家; go home 回家; hometown 家乡",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw619",
    "word": "hometown",
    "phonetic": "美 [ˈhoʊmtaʊn]",
    "pos": "n.",
    "meaning": "家乡",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw620",
    "word": "homework",
    "phonetic": "美 [ˈhoʊmwɜːrk]",
    "pos": "n.",
    "meaning": "家庭作业",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "do one's homework 做作业",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw621",
    "word": "honest",
    "phonetic": "美 [ˈɑːnɪst]",
    "pos": "adj.",
    "meaning": "诚实的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "字母 h 不发音; honesty (n.) 诚实"
    ],
    "usage": {
      "collocations": "to be honest 说实话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw622",
    "word": "honor",
    "phonetic": "美 [ˈɑːnər]",
    "pos": "n./v.",
    "meaning": "荣誉;荣耀",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in honor of 为纪念…;为庆祝…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw623",
    "word": "hope",
    "phonetic": "美 [hoʊp]",
    "pos": "v./n.",
    "meaning": "希望",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hope to do (✓); hope sb to do (❌); wish sb to do (✓)"
    ],
    "usage": {
      "collocations": "hope to do 希望做; in the hope of 怀着…的希望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw624",
    "word": "horse",
    "phonetic": "美 [hɔːrs]",
    "pos": "n.",
    "meaning": "马",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw625",
    "word": "hospital",
    "phonetic": "美 [ˈhɑːspɪtəl]",
    "pos": "n.",
    "meaning": "医院",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "in hospital 住院; in the hospital 在医院里(工作/探病等)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw626",
    "word": "hot",
    "phonetic": "美 [hɑːt]",
    "pos": "adj.",
    "meaning": "热的;辣的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hot → hotter → hottest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw627",
    "word": "hotel",
    "phonetic": "美 [hoʊˈtel]",
    "pos": "n.",
    "meaning": "旅馆;酒店",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw628",
    "word": "hour",
    "phonetic": "美 [aʊər]",
    "pos": "n.",
    "meaning": "小时",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "字母 h 不发音; hour → hourly (adj./adv.)"
    ],
    "usage": {
      "collocations": "an hour 一小时; rush hour 高峰时间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw629",
    "word": "house",
    "phonetic": "美 [haʊs]",
    "pos": "n.",
    "meaning": "房子;住宅",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw630",
    "word": "housework",
    "phonetic": "美 [ˈhaʊswɜːrk]",
    "pos": "n.",
    "meaning": "家务",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "do housework 做家务",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw631",
    "word": "how",
    "phonetic": "美 [haʊ]",
    "pos": "adv.",
    "meaning": "怎样;多么",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "how + adj./adv. 构成特殊疑问句; how to do 如何做"
    ],
    "usage": {
      "collocations": "how about …怎么样; how come 怎么会; how far 多远; how long 多久/多长",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw632",
    "word": "however",
    "phonetic": "美 [ˌhaʊˈevər]",
    "pos": "adv./conj.",
    "meaning": "然而;无论如何",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "however (然而) vs. but (但是)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw633",
    "word": "huge",
    "phonetic": "美 [hjuːdʒ]",
    "pos": "adj.",
    "meaning": "巨大的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw634",
    "word": "human",
    "phonetic": "美 [ˈhjuːmən]",
    "pos": "n./adj.",
    "meaning": "人;人类的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "human being 人类",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw635",
    "word": "humorous",
    "phonetic": "美 [ˈhjuːmərəs]",
    "pos": "adj.",
    "meaning": "幽默的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "humor (n.) → humorous (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw636",
    "word": "hundred",
    "phonetic": "美 [ˈhʌndrəd]",
    "pos": "num.",
    "meaning": "百",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "hundred 与具体数字连用不加 s: two hundred"
    ],
    "usage": {
      "collocations": "hundreds of 成百上千的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw637",
    "word": "hungry",
    "phonetic": "美 [ˈhʌŋɡri]",
    "pos": "adj.",
    "meaning": "饥饿的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "hungry → hungrier → hungriest; hunger (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw638",
    "word": "hurry",
    "phonetic": "美 [ˈhɜːri]",
    "pos": "v./n.",
    "meaning": "匆忙;赶紧",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "hurry → hurried → hurried"
    ],
    "usage": {
      "collocations": "hurry up 赶快; in a hurry 匆忙地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw639",
    "word": "hurt",
    "phonetic": "美 [hɜːrt]",
    "pos": "v./adj.",
    "meaning": "伤害;疼痛",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "hurt → hurt → hurt"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw640",
    "word": "husband",
    "phonetic": "美 [ˈhʌzbənd]",
    "pos": "n.",
    "meaning": "丈夫",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw641",
    "word": "I",
    "phonetic": "美 [aɪ]",
    "pos": "pron.",
    "meaning": "我",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw642",
    "word": "ice",
    "phonetic": "美 [aɪs]",
    "pos": "n.",
    "meaning": "冰",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw643",
    "word": "ice-cream",
    "phonetic": "美 [ˈaɪskriːm]",
    "pos": "n.",
    "meaning": "冰激凌",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw644",
    "word": "idea",
    "phonetic": "美 [aɪˈdiːə]",
    "pos": "n.",
    "meaning": "主意;想法",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "have no idea = don't know"
    ],
    "usage": {
      "collocations": "have an idea 有个主意; have no idea 不知道",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw645",
    "word": "if",
    "phonetic": "美 [ɪf]",
    "pos": "conj.",
    "meaning": "如果;是否",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "if 引导条件状语从句用主将从现; if vs. whether (是否)"
    ],
    "usage": {
      "collocations": "if possible 如果可能; even if 即使",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw646",
    "word": "ill",
    "phonetic": "美 [ɪl]",
    "pos": "adj.",
    "meaning": "生病的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ill → worse → worst; illness (n.) 疾病"
    ],
    "usage": {
      "collocations": "fall ill 生病",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw647",
    "word": "illness",
    "phonetic": "美 [ˈɪlnəs]",
    "pos": "n.",
    "meaning": "疾病",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw648",
    "word": "imagine",
    "phonetic": "美 [ɪˈmædʒɪn]",
    "pos": "v.",
    "meaning": "想象",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do！imagination (n.); imaginary (adj.)"
    ],
    "usage": {
      "collocations": "imagine doing 想象做; I can imagine 我能想象",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw649",
    "word": "immediately",
    "phonetic": "美 [ɪˈmiːdiətli]",
    "pos": "adv.",
    "meaning": "立即;马上",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw650",
    "word": "important",
    "phonetic": "美 [ɪmˈpɔːrtənt]",
    "pos": "adj.",
    "meaning": "重要的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "importance (n.) 重要性"
    ],
    "usage": {
      "collocations": "It is important (for sb) to do",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw651",
    "word": "impossible",
    "phonetic": "美 [ɪmˈpɑːsəbəl]",
    "pos": "adj.",
    "meaning": "不可能的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "反义词 possible"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw652",
    "word": "improve",
    "phonetic": "美 [ɪmˈpruːv]",
    "pos": "v.",
    "meaning": "提高;改善",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "improvement (n.)"
    ],
    "usage": {
      "collocations": "improve oneself 自我提升",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw653",
    "word": "in",
    "phonetic": "美 [ɪn]",
    "pos": "prep./adv.",
    "meaning": "在…里面;在…方面;用",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "in + 大地点/年月季节/时间段(表将来); in + 语言/颜色"
    ],
    "usage": {
      "collocations": "in fact 事实上; in time 及时; in English 用英语",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw654",
    "word": "include",
    "phonetic": "美 [ɪnˈkluːd]",
    "pos": "v.",
    "meaning": "包括",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "including (prep.); 反义词 exclude"
    ],
    "usage": {
      "collocations": "be included in 被包含在…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw655",
    "word": "increase",
    "phonetic": "美 [ɪnˈkriːs]",
    "pos": "v./n.",
    "meaning": "增加;增长",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "反义词 decrease"
    ],
    "usage": {
      "collocations": "increase by 增加了; increase to 增加到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw656",
    "word": "industry",
    "phonetic": "美 [ˈɪndəstri]",
    "pos": "n.",
    "meaning": "工业;行业",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "industrial (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw657",
    "word": "influence",
    "phonetic": "美 [ˈɪnfluəns]",
    "pos": "n./v.",
    "meaning": "影响",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "influence (n.) vs. affect (v.) vs. effect (n.)"
    ],
    "usage": {
      "collocations": "have an influence on 对…有影响",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw658",
    "word": "information",
    "phonetic": "美 [ˌɪnfərˈmeɪʃən]",
    "pos": "n.",
    "meaning": "信息;资料(不可数)",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "information 不可数，不能用 an information"
    ],
    "usage": {
      "collocations": "a piece of information 一条信息",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw659",
    "word": "inside",
    "phonetic": "美 [ˌɪnˈsaɪd]",
    "pos": "prep./adv./n.",
    "meaning": "在里面;内部的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw660",
    "word": "insist",
    "phonetic": "美 [ɪnˈsɪst]",
    "pos": "v.",
    "meaning": "坚持",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "insist on; insist that sb (should) do 虚拟语气"
    ],
    "usage": {
      "collocations": "insist on doing 坚持做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw661",
    "word": "instead",
    "phonetic": "美 [ɪnˈsted]",
    "pos": "adv.",
    "meaning": "代替;反而",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "instead of + n./doing"
    ],
    "usage": {
      "collocations": "instead of 代替;而不是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw662",
    "word": "instruction",
    "phonetic": "美 [ɪnˈstrʌkʃən]",
    "pos": "n.",
    "meaning": "指示;说明",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "follow the instructions 按照说明",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw663",
    "word": "interest",
    "phonetic": "美 [ˈɪntrəst]",
    "pos": "n./v.",
    "meaning": "兴趣;利息",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "interested (人感兴趣) vs. interesting (事物有趣)"
    ],
    "usage": {
      "collocations": "take an interest in 对…感兴趣; a place of interest 名胜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw664",
    "word": "interesting",
    "phonetic": "美 [ˈɪntrəstɪŋ]",
    "pos": "adj.",
    "meaning": "有趣的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw665",
    "word": "international",
    "phonetic": "美 [ˌɪntərˈnæʃənəl]",
    "pos": "adj.",
    "meaning": "国际的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw666",
    "word": "Internet",
    "phonetic": "美 [ˈɪntərnet]",
    "pos": "n.",
    "meaning": "互联网",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "on the Internet 在网上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw667",
    "word": "interview",
    "phonetic": "美 [ˈɪntərvjuː]",
    "pos": "n./v.",
    "meaning": "面试;采访",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "interviewer (面试官) vs. interviewee (被面试者)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw668",
    "word": "into",
    "phonetic": "美 [ˈɪntuː]",
    "pos": "prep.",
    "meaning": "进入;到…里面",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "into (动态进入) vs. in (静态在里面)"
    ],
    "usage": {
      "collocations": "translate into 翻译成; change into 变成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw669",
    "word": "introduce",
    "phonetic": "美 [ˌɪntrəˈduːs]",
    "pos": "v.",
    "meaning": "介绍;引入",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "introduction (n.); 搭配介词 to，不是 with"
    ],
    "usage": {
      "collocations": "introduce A to B 把A介绍给B; introduce oneself 自我介绍",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw670",
    "word": "invent",
    "phonetic": "美 [ɪnˈvent]",
    "pos": "v.",
    "meaning": "发明",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "invent (发明新物) vs. discover (发现已有); invention (n.); inventor (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw671",
    "word": "invitation",
    "phonetic": "美 [ˌɪnvɪˈteɪʃən]",
    "pos": "n.",
    "meaning": "邀请;请柬",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw672",
    "word": "invite",
    "phonetic": "美 [ɪnˈvaɪt]",
    "pos": "v.",
    "meaning": "邀请",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "invite sb to do 邀请某人做; invite sb to a party 邀请某人参加派对",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw673",
    "word": "island",
    "phonetic": "美 [ˈaɪlənd]",
    "pos": "n.",
    "meaning": "岛屿",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "字母 s 不发音"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw674",
    "word": "it",
    "phonetic": "美 [ɪt]",
    "pos": "pron.",
    "meaning": "它",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "it → it → its → its → itself; 形式主语/宾语"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw675",
    "word": "its",
    "phonetic": "美 [ɪts]",
    "pos": "pron.",
    "meaning": "它的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw676",
    "word": "itself",
    "phonetic": "美 [ɪtˈself]",
    "pos": "pron.",
    "meaning": "它自己",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "by itself 它自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw677",
    "word": "jacket",
    "phonetic": "美 [ˈdʒækɪt]",
    "pos": "n.",
    "meaning": "夹克;短上衣",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw678",
    "word": "January",
    "phonetic": "美 [ˈdʒænjueri]",
    "pos": "n.",
    "meaning": "一月",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw679",
    "word": "Japan",
    "phonetic": "美 [dʒəˈpæn]",
    "pos": "n.",
    "meaning": "日本",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "Japanese (adj./n.) 日本的/日语/日本人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw680",
    "word": "jeans",
    "phonetic": "美 [dʒiːnz]",
    "pos": "n.",
    "meaning": "牛仔裤",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "jeans 常用复数，a pair of jeans"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw681",
    "word": "job",
    "phonetic": "美 [dʒɑːb]",
    "pos": "n.",
    "meaning": "工作;职业",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "job (可数) vs. work (不可数)"
    ],
    "usage": {
      "collocations": "get a job 找工作; on the job 在职",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw682",
    "word": "join",
    "phonetic": "美 [dʒɔɪn]",
    "pos": "v.",
    "meaning": "参加;加入;连接",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "join (加入组织/人群) vs. take part in (参加活动)"
    ],
    "usage": {
      "collocations": "join in 参加(活动); join the army 参军",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw683",
    "word": "joke",
    "phonetic": "美 [dʒoʊk]",
    "pos": "n./v.",
    "meaning": "笑话;开玩笑",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "play a joke on sb 开某人玩笑; tell a joke 讲笑话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw684",
    "word": "journey",
    "phonetic": "美 [ˈdʒɜːrni]",
    "pos": "n.",
    "meaning": "旅行;旅程",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "journey → journeys (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw685",
    "word": "joy",
    "phonetic": "美 [dʒɔɪ]",
    "pos": "n.",
    "meaning": "快乐;乐趣",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "joyful (adj.); enjoy (v.) 享受"
    ],
    "usage": {
      "collocations": "to one's joy 令某人高兴的是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw686",
    "word": "juice",
    "phonetic": "美 [dʒuːs]",
    "pos": "n.",
    "meaning": "果汁",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "orange juice 橙汁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw687",
    "word": "July",
    "phonetic": "美 [dʒʊˈlaɪ]",
    "pos": "n.",
    "meaning": "七月",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw688",
    "word": "jump",
    "phonetic": "美 [dʒʌmp]",
    "pos": "v./n.",
    "meaning": "跳",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "jump into 跳入; high jump 跳高; long jump 跳远",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw689",
    "word": "June",
    "phonetic": "美 [dʒuːn]",
    "pos": "n.",
    "meaning": "六月",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw690",
    "word": "just",
    "phonetic": "美 [dʒʌst]",
    "pos": "adv./adj.",
    "meaning": "刚刚;恰好;仅仅",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "just now (刚才,过去时); just (刚刚,完成时)"
    ],
    "usage": {
      "collocations": "just now 刚才; just as 正当; just then 就在那时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw691",
    "word": "keep",
    "phonetic": "美 [kiːp]",
    "pos": "v.",
    "meaning": "保持;保存;饲养",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "keep → kept → kept; keep + adj. 保持…状态"
    ],
    "usage": {
      "collocations": "keep doing 一直做; keep sb from doing 阻止某人做; keep up with 跟上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw692",
    "word": "key",
    "phonetic": "美 [kiː]",
    "pos": "n./adj.",
    "meaning": "钥匙;关键;键",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "the key to (不是 of)"
    ],
    "usage": {
      "collocations": "the key to …的关键/答案",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw693",
    "word": "keyboard",
    "phonetic": "美 [ˈkiːbɔːrd]",
    "pos": "n.",
    "meaning": "键盘",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw694",
    "word": "kick",
    "phonetic": "美 [kɪk]",
    "pos": "v./n.",
    "meaning": "踢",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "kick off 踢开;开始",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw695",
    "word": "kid",
    "phonetic": "美 [kɪd]",
    "pos": "n./v.",
    "meaning": "小孩;开玩笑",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "no kidding 别开玩笑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw696",
    "word": "kill",
    "phonetic": "美 [kɪl]",
    "pos": "v.",
    "meaning": "杀死",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "kill time 消磨时间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw697",
    "word": "kilo",
    "phonetic": "美 [ˈkiːloʊ]",
    "pos": "n.",
    "meaning": "千克;公里",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "= kilogram / kilometer"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw698",
    "word": "kilometer",
    "phonetic": "美 [kɪˈlɑːmɪtər]",
    "pos": "n.",
    "meaning": "千米;公里",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw699",
    "word": "kind",
    "phonetic": "美 [kaɪnd]",
    "pos": "n./adj.",
    "meaning": "种类;善良的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "kindness (n.) 善良"
    ],
    "usage": {
      "collocations": "a kind of 一种; all kinds of 各种各样的; be kind to 对…友好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw700",
    "word": "king",
    "phonetic": "美 [kɪŋ]",
    "pos": "n.",
    "meaning": "国王",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw701",
    "word": "kiss",
    "phonetic": "美 [kɪs]",
    "pos": "v./n.",
    "meaning": "亲吻",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw702",
    "word": "kitchen",
    "phonetic": "美 [ˈkɪtʃɪn]",
    "pos": "n.",
    "meaning": "厨房",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw703",
    "word": "kite",
    "phonetic": "美 [kaɪt]",
    "pos": "n.",
    "meaning": "风筝",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "fly a kite 放风筝",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw704",
    "word": "knee",
    "phonetic": "美 [niː]",
    "pos": "n.",
    "meaning": "膝盖",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "字母 k 不发音"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw705",
    "word": "knife",
    "phonetic": "美 [naɪf]",
    "pos": "n.",
    "meaning": "刀",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "knife → knives (复数); 字母 k 不发音"
    ],
    "usage": {
      "collocations": "knife and fork 刀叉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw706",
    "word": "knock",
    "phonetic": "美 [nɑːk]",
    "pos": "v./n.",
    "meaning": "敲;撞",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "字母 k 不发音"
    ],
    "usage": {
      "collocations": "knock at/on the door 敲门; knock into 撞上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw707",
    "word": "know",
    "phonetic": "美 [noʊ]",
    "pos": "v.",
    "meaning": "知道;认识",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "know → knew → known; knowledge (n.) 知识"
    ],
    "usage": {
      "collocations": "know about 了解; be known as 作为…而闻名; be known for 因…而闻名",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw708",
    "word": "knowledge",
    "phonetic": "美 [ˈnɑːlɪdʒ]",
    "pos": "n.",
    "meaning": "知识",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "a knowledge of …的知识; to one's knowledge 据某人所知",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw709",
    "word": "lab",
    "phonetic": "美 [læb]",
    "pos": "n.",
    "meaning": "实验室",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "= laboratory"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw710",
    "word": "lady",
    "phonetic": "美 [ˈleɪdi]",
    "pos": "n.",
    "meaning": "女士;夫人",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lady → ladies (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw711",
    "word": "lake",
    "phonetic": "美 [leɪk]",
    "pos": "n.",
    "meaning": "湖",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw712",
    "word": "lamp",
    "phonetic": "美 [læmp]",
    "pos": "n.",
    "meaning": "灯",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw713",
    "word": "land",
    "phonetic": "美 [lænd]",
    "pos": "n./v.",
    "meaning": "陆地;着陆;土地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw714",
    "word": "language",
    "phonetic": "美 [ˈlæŋɡwɪdʒ]",
    "pos": "n.",
    "meaning": "语言",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "mother language 母语; foreign language 外语",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw715",
    "word": "large",
    "phonetic": "美 [lɑːrdʒ]",
    "pos": "adj.",
    "meaning": "大的;大量的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a large number of 大量的(可数); at large 总的来说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw716",
    "word": "last",
    "phonetic": "美 [læst]",
    "pos": "adj./adv./v.",
    "meaning": "最后的;上一个;持续",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "at last 终于; last year 去年; last for 持续…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw717",
    "word": "late",
    "phonetic": "美 [leɪt]",
    "pos": "adj./adv.",
    "meaning": "迟的;晚的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "late → later → latest; lately (adv.) 最近"
    ],
    "usage": {
      "collocations": "be late for 迟到; better late than never 迟做总比不做好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw718",
    "word": "later",
    "phonetic": "美 [ˈleɪtər]",
    "pos": "adv.",
    "meaning": "后来;以后",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "later on 后来; sooner or later 迟早",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw719",
    "word": "laugh",
    "phonetic": "美 [læf]",
    "pos": "v./n.",
    "meaning": "笑",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "laughter (n.) 笑声"
    ],
    "usage": {
      "collocations": "laugh at 嘲笑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw720",
    "word": "law",
    "phonetic": "美 [lɔː]",
    "pos": "n.",
    "meaning": "法律",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lawyer (n.) 律师"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw721",
    "word": "lay",
    "phonetic": "美 [leɪ]",
    "pos": "v.",
    "meaning": "放下;下蛋",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lay → laid → laid; 辨析 lay (放) vs. lie (躺/说谎)"
    ],
    "usage": {
      "collocations": "lay out 布置;安排",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw722",
    "word": "lazy",
    "phonetic": "美 [ˈleɪzi]",
    "pos": "adj.",
    "meaning": "懒惰的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lazy → lazier → laziest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw723",
    "word": "lead",
    "phonetic": "美 [liːd(领导); led(铅)]",
    "pos": "v./n.",
    "meaning": "领导;带领;铅",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lead → led → led; leader (n.) 领导者"
    ],
    "usage": {
      "collocations": "lead to 导致;通向",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw724",
    "word": "leader",
    "phonetic": "美 [ˈliːdər]",
    "pos": "n.",
    "meaning": "领导者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw725",
    "word": "leaf",
    "phonetic": "美 [liːf]",
    "pos": "n.",
    "meaning": "叶子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "leaf → leaves (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw726",
    "word": "learn",
    "phonetic": "美 [lɜːrn]",
    "pos": "v.",
    "meaning": "学习;学会",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "learn → learned/learnt → learned/learnt; learner (n.)"
    ],
    "usage": {
      "collocations": "learn from 向…学习; learn about 了解",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw727",
    "word": "least",
    "phonetic": "美 [liːst]",
    "pos": "adj./adv.",
    "meaning": "最少的;最不",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "little → less → least"
    ],
    "usage": {
      "collocations": "at least 至少",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw728",
    "word": "leave",
    "phonetic": "美 [liːv]",
    "pos": "v./n.",
    "meaning": "离开;留下;请假",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "leave → left → left"
    ],
    "usage": {
      "collocations": "leave for 前往; leave behind 留下; ask for leave 请假",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw729",
    "word": "left",
    "phonetic": "美 [left]",
    "pos": "adj./adv./n.",
    "meaning": "左边的;留下的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "on the left 在左边; turn left 左转",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw730",
    "word": "leg",
    "phonetic": "美 [leɡ]",
    "pos": "n.",
    "meaning": "腿",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw731",
    "word": "lemon",
    "phonetic": "美 [ˈlemən]",
    "pos": "n.",
    "meaning": "柠檬",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw732",
    "word": "lend",
    "phonetic": "美 [lend]",
    "pos": "v.",
    "meaning": "借出",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lend → lent → lent; lend (借出) vs. borrow (借入)"
    ],
    "usage": {
      "collocations": "lend sb sth = lend sth to sb 借给某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw733",
    "word": "lesson",
    "phonetic": "美 [ˈlesən]",
    "pos": "n.",
    "meaning": "课;教训",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have a lesson 上课; learn a lesson 吸取教训",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw734",
    "word": "let",
    "phonetic": "美 [let]",
    "pos": "v.",
    "meaning": "让;允许",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "let → let → let; let sb do (不带to的不定式)"
    ],
    "usage": {
      "collocations": "let sb do 让某人做; let out 放出; let down 使失望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw735",
    "word": "letter",
    "phonetic": "美 [ˈletər]",
    "pos": "n.",
    "meaning": "信;字母",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "write a letter 写信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw736",
    "word": "level",
    "phonetic": "美 [ˈlevəl]",
    "pos": "n./adj.",
    "meaning": "水平;级别",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw737",
    "word": "library",
    "phonetic": "美 [ˈlaɪbreri]",
    "pos": "n.",
    "meaning": "图书馆",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "library → libraries (复数); librarian (n.) 图书管理员"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw738",
    "word": "lie",
    "phonetic": "美 [laɪ]",
    "pos": "v.",
    "meaning": "躺;位于;说谎",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lie → lay → lain (躺); lie → lied → lied (说谎)"
    ],
    "usage": {
      "collocations": "lie down 躺下; tell a lie 说谎",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw739",
    "word": "life",
    "phonetic": "美 [laɪf]",
    "pos": "n.",
    "meaning": "生命;生活",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "life → lives (复数); live (v.) 生活/居住"
    ],
    "usage": {
      "collocations": "all one's life 终生; way of life 生活方式",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw740",
    "word": "lift",
    "phonetic": "美 [lɪft]",
    "pos": "v./n.",
    "meaning": "举起;电梯;搭车",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "give sb a lift 让某人搭车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw741",
    "word": "light",
    "phonetic": "美 [laɪt]",
    "pos": "n./adj./v.",
    "meaning": "光;灯;轻的;点燃",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "light → lit/lighted → lit/lighted"
    ],
    "usage": {
      "collocations": "traffic light 交通灯; light up 点亮",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw742",
    "word": "like",
    "phonetic": "美 [laɪk]",
    "pos": "v./prep.",
    "meaning": "喜欢;像",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "like doing (习惯) vs. like to do (具体); dislike (v.)"
    ],
    "usage": {
      "collocations": "look like 看起来像; feel like doing 想要做; would like to do 想要做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw743",
    "word": "line",
    "phonetic": "美 [laɪn]",
    "pos": "n./v.",
    "meaning": "线;行;排队",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "wait in line 排队等候; on line 在线",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw744",
    "word": "lion",
    "phonetic": "美 [ˈlaɪən]",
    "pos": "n.",
    "meaning": "狮子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw745",
    "word": "list",
    "phonetic": "美 [lɪst]",
    "pos": "n./v.",
    "meaning": "列表;列出",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "make a list 列清单; shopping list 购物清单",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw746",
    "word": "listen",
    "phonetic": "美 [ˈlɪsən]",
    "pos": "v.",
    "meaning": "听",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "listen to + 宾语; 不及物动词"
    ],
    "usage": {
      "collocations": "listen to 听…; listen carefully 仔细听",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw747",
    "word": "litter",
    "phonetic": "美 [ˈlɪtər]",
    "pos": "n./v.",
    "meaning": "垃圾;乱扔",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "no littering 禁止乱扔垃圾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw748",
    "word": "little",
    "phonetic": "美 [ˈlɪtəl]",
    "pos": "adj./adv.",
    "meaning": "小的;少的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "little → less → least; little (几乎没有) vs. a little (有一点)"
    ],
    "usage": {
      "collocations": "a little 一点; a little bit 一点点",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw749",
    "word": "live",
    "phonetic": "美 [lɪv(动); laɪv(形)]",
    "pos": "v./adj.",
    "meaning": "居住;生活;直播的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "life (n.) → live (v.) → alive/living (adj.)"
    ],
    "usage": {
      "collocations": "live on 以…为生; live a…life 过…的生活",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw750",
    "word": "lively",
    "phonetic": "美 [ˈlaɪvli]",
    "pos": "adj.",
    "meaning": "活泼的;生动的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw751",
    "word": "local",
    "phonetic": "美 [ˈloʊkəl]",
    "pos": "adj.",
    "meaning": "当地的;本地的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "local government 地方政府",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw752",
    "word": "lock",
    "phonetic": "美 [lɑːk]",
    "pos": "n./v.",
    "meaning": "锁;锁上",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "反义词 unlock"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw753",
    "word": "London",
    "phonetic": "美 [ˈlʌndən]",
    "pos": "n.",
    "meaning": "伦敦",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw754",
    "word": "lonely",
    "phonetic": "美 [ˈloʊnli]",
    "pos": "adj.",
    "meaning": "孤独的;偏僻的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "lonely (主观孤独) vs. alone (客观独自)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw755",
    "word": "long",
    "phonetic": "美 [lɔːŋ]",
    "pos": "adj./adv./v.",
    "meaning": "长的;长久地;渴望",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "long → longer → longest; length (n.) 长度"
    ],
    "usage": {
      "collocations": "long before 很久以前; no longer 不再; long for 渴望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw756",
    "word": "look",
    "phonetic": "美 [lʊk]",
    "pos": "v./n.",
    "meaning": "看;看起来",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "look forward to + doing (to是介词)"
    ],
    "usage": {
      "collocations": "look after 照顾; look for 寻找; look forward to 期待; look up 查阅",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw757",
    "word": "lose",
    "phonetic": "美 [luːz]",
    "pos": "v.",
    "meaning": "丢失;输掉",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lose → lost → lost; loss (n.)"
    ],
    "usage": {
      "collocations": "lose one's way 迷路; lose weight 减肥; lose heart 失去信心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw758",
    "word": "lot",
    "phonetic": "美 [lɑːt]",
    "pos": "n.",
    "meaning": "许多;一块地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a lot of/lots of 许多; parking lot 停车场",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw759",
    "word": "loud",
    "phonetic": "美 [laʊd]",
    "pos": "adj./adv.",
    "meaning": "大声的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "loudly (adv.) vs. aloud (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw760",
    "word": "love",
    "phonetic": "美 [lʌv]",
    "pos": "v./n.",
    "meaning": "爱;喜爱",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lovely (adj.) 可爱的; loving (adj.) 充满爱的"
    ],
    "usage": {
      "collocations": "fall in love with 爱上; would love to do 很愿意做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw761",
    "word": "lovely",
    "phonetic": "美 [ˈlʌvli]",
    "pos": "adj.",
    "meaning": "可爱的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw762",
    "word": "low",
    "phonetic": "美 [loʊ]",
    "pos": "adj./adv.",
    "meaning": "低的;低声地",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lower (v.) 降低; below (prep.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw763",
    "word": "luck",
    "phonetic": "美 [lʌk]",
    "pos": "n.",
    "meaning": "运气",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "lucky (adj.); luckily (adv.); unlucky (反义词)"
    ],
    "usage": {
      "collocations": "good luck 好运; bad luck 倒霉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw764",
    "word": "lucky",
    "phonetic": "美 [ˈlʌki]",
    "pos": "adj.",
    "meaning": "幸运的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw765",
    "word": "lunch",
    "phonetic": "美 [lʌntʃ]",
    "pos": "n.",
    "meaning": "午餐",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have lunch 吃午餐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw766",
    "word": "machine",
    "phonetic": "美 [məˈʃiːn]",
    "pos": "n.",
    "meaning": "机器",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw767",
    "word": "mad",
    "phonetic": "美 [mæd]",
    "pos": "adj.",
    "meaning": "疯狂的;生气的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "mad → madder → maddest"
    ],
    "usage": {
      "collocations": "be mad at 对…生气; go mad 发疯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw768",
    "word": "magazine",
    "phonetic": "美 [ˈmæɡəziːn]",
    "pos": "n.",
    "meaning": "杂志",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw769",
    "word": "magic",
    "phonetic": "美 [ˈmædʒɪk]",
    "pos": "n./adj.",
    "meaning": "魔法;神奇的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "magical (adj.); magician (n.) 魔术师"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw770",
    "word": "mail",
    "phonetic": "美 [meɪl]",
    "pos": "n./v.",
    "meaning": "邮件;邮寄",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "e-mail 电子邮件",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw771",
    "word": "main",
    "phonetic": "美 [meɪn]",
    "pos": "adj.",
    "meaning": "主要的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "mainly (adv.) 主要地"
    ],
    "usage": {
      "collocations": "main idea 主旨; main course 主菜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw772",
    "word": "make",
    "phonetic": "美 [meɪk]",
    "pos": "v.",
    "meaning": "做;制造;使",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "make → made → made; make sb do (不带to); be made to do (被动要带to)"
    ],
    "usage": {
      "collocations": "make up 组成;编造; make sure 确保; make progress 取得进步; make a decision 做决定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw773",
    "word": "man",
    "phonetic": "美 [mæn]",
    "pos": "n.",
    "meaning": "男人;人类",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "man → men (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw774",
    "word": "manage",
    "phonetic": "美 [ˈmænɪdʒ]",
    "pos": "v.",
    "meaning": "管理;设法做到",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "manage to do (成功了) vs. try to do (尝试); manager (n.)"
    ],
    "usage": {
      "collocations": "manage to do 设法做成; manage time 管理时间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw775",
    "word": "manager",
    "phonetic": "美 [ˈmænɪdʒər]",
    "pos": "n.",
    "meaning": "经理",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw776",
    "word": "many",
    "phonetic": "美 [ˈmeni]",
    "pos": "adj./pron.",
    "meaning": "许多(可数)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "many → more → most; 修饰可数名词复数"
    ],
    "usage": {
      "collocations": "a great many 许多; as many as 多达",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw777",
    "word": "map",
    "phonetic": "美 [mæp]",
    "pos": "n.",
    "meaning": "地图",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw778",
    "word": "March",
    "phonetic": "美 [mɑːrtʃ]",
    "pos": "n.",
    "meaning": "三月",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw779",
    "word": "mark",
    "phonetic": "美 [mɑːrk]",
    "pos": "n./v.",
    "meaning": "标记;分数;批改",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw780",
    "word": "market",
    "phonetic": "美 [ˈmɑːrkɪt]",
    "pos": "n.",
    "meaning": "市场",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "supermarket 超市; on the market 上市",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw781",
    "word": "marry",
    "phonetic": "美 [ˈmæri]",
    "pos": "v.",
    "meaning": "结婚;娶;嫁",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "marry sb (❌ marry with sb); be/get married to sb"
    ],
    "usage": {
      "collocations": "marry sb 与某人结婚; get married 结婚",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw782",
    "word": "master",
    "phonetic": "美 [ˈmæstər]",
    "pos": "n./v.",
    "meaning": "主人;大师;掌握",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw783",
    "word": "match",
    "phonetic": "美 [mætʃ]",
    "pos": "n./v.",
    "meaning": "比赛;火柴;匹配",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have a match 比赛; match A with B 匹配",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw784",
    "word": "material",
    "phonetic": "美 [məˈtɪriəl]",
    "pos": "n./adj.",
    "meaning": "材料;物质的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw785",
    "word": "math",
    "phonetic": "美 [mæθ]",
    "pos": "n.",
    "meaning": "数学",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "= maths; mathematics (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw786",
    "word": "matter",
    "phonetic": "美 [ˈmætər]",
    "pos": "n./v.",
    "meaning": "事情;问题;要紧",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "as a matter of fact 事实上; no matter 无论; no matter what 无论什么",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw787",
    "word": "may",
    "phonetic": "美 [meɪ]",
    "pos": "modal.",
    "meaning": "可以;可能",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "may → might; May I…? 表请求"
    ],
    "usage": {
      "collocations": "may be 可能是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw788",
    "word": "May",
    "phonetic": "美 [meɪ]",
    "pos": "n.",
    "meaning": "五月",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw789",
    "word": "maybe",
    "phonetic": "美 [ˈmeɪbi]",
    "pos": "adv.",
    "meaning": "也许;可能",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "maybe (adv.) vs. may be (情态动词+be)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw790",
    "word": "me",
    "phonetic": "美 [miː]",
    "pos": "pron.",
    "meaning": "我(宾格)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw791",
    "word": "meal",
    "phonetic": "美 [miːl]",
    "pos": "n.",
    "meaning": "一餐;一顿饭",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw792",
    "word": "mean",
    "phonetic": "美 [miːn]",
    "pos": "v./adj.",
    "meaning": "意思是;意味着;刻薄的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "mean → meant → meant; meaning (n.); means (n.) 方法"
    ],
    "usage": {
      "collocations": "mean doing 意味着做; mean to do 打算做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw793",
    "word": "meaning",
    "phonetic": "美 [ˈmiːnɪŋ]",
    "pos": "n.",
    "meaning": "意义;意思",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw794",
    "word": "meat",
    "phonetic": "美 [miːt]",
    "pos": "n.",
    "meaning": "肉",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 meet"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw795",
    "word": "medical",
    "phonetic": "美 [ˈmedɪkəl]",
    "pos": "adj.",
    "meaning": "医学的;医疗的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "medicine (n.) 药;医学"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw796",
    "word": "medicine",
    "phonetic": "美 [ˈmedɪsɪn]",
    "pos": "n.",
    "meaning": "药;医学",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "take medicine 吃药",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw797",
    "word": "medium",
    "phonetic": "美 [ˈmiːdiəm]",
    "pos": "adj./n.,",
    "meaning": "中等的;媒介",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw798",
    "word": "meet",
    "phonetic": "美 [miːt]",
    "pos": "v.",
    "meaning": "遇见;会面;满足",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "meet → met → met; meeting (n.) 会议"
    ],
    "usage": {
      "collocations": "meet with 偶然遇到; meet one's needs 满足需求",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw799",
    "word": "meeting",
    "phonetic": "美 [ˈmiːtɪŋ]",
    "pos": "n.",
    "meaning": "会议",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have a meeting 开会; attend a meeting 参加会议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw800",
    "word": "member",
    "phonetic": "美 [ˈmembər]",
    "pos": "n.",
    "meaning": "成员",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a member of …的成员",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw801",
    "word": "memory",
    "phonetic": "美 [ˈmeməri]",
    "pos": "n.",
    "meaning": "记忆;记忆力",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "memory → memories (复数); memorize (v.) 记忆"
    ],
    "usage": {
      "collocations": "in memory of 为纪念",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw802",
    "word": "mention",
    "phonetic": "美 [ˈmenʃən]",
    "pos": "v.",
    "meaning": "提到;说起",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do"
    ],
    "usage": {
      "collocations": "mention doing 提到做; not to mention 更不用说; Don't mention it 不客气",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw803",
    "word": "menu",
    "phonetic": "美 [ˈmenjuː]",
    "pos": "n.",
    "meaning": "菜单",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw804",
    "word": "mess",
    "phonetic": "美 [mes]",
    "pos": "n.",
    "meaning": "混乱;脏乱",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "make a mess 搞得一团糟; in a mess 乱七八糟",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw805",
    "word": "message",
    "phonetic": "美 [ˈmesɪdʒ]",
    "pos": "n.",
    "meaning": "消息;信息",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "leave a message 留言; take a message 捎口信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw806",
    "word": "method",
    "phonetic": "美 [ˈmeθəd]",
    "pos": "n.",
    "meaning": "方法",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw807",
    "word": "middle",
    "phonetic": "美 [ˈmɪdəl]",
    "pos": "adj./n.",
    "meaning": "中间的;中部",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in the middle of 在…中间; middle school 中学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw808",
    "word": "might",
    "phonetic": "美 [maɪt]",
    "pos": "modal.",
    "meaning": "可能(may过去式)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw809",
    "word": "mile",
    "phonetic": "美 [maɪl]",
    "pos": "n.",
    "meaning": "英里",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw810",
    "word": "milk",
    "phonetic": "美 [mɪlk]",
    "pos": "n.",
    "meaning": "牛奶",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw811",
    "word": "mind",
    "phonetic": "美 [maɪnd]",
    "pos": "v./n.",
    "meaning": "介意;头脑;思想",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "mind doing (❌ mind to do); Would you mind …? 回答注意"
    ],
    "usage": {
      "collocations": "mind doing 介意做; make up one's mind 下定决心; never mind 没关系",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw812",
    "word": "mine",
    "phonetic": "美 [maɪn]",
    "pos": "pron./n.",
    "meaning": "我的(名物代);矿",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw813",
    "word": "minute",
    "phonetic": "美 [ˈmɪnɪt]",
    "pos": "n.",
    "meaning": "分钟;片刻",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in a minute 一会儿; just a minute 等一下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw814",
    "word": "mirror",
    "phonetic": "美 [ˈmɪrər]",
    "pos": "n.",
    "meaning": "镜子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw815",
    "word": "miss",
    "phonetic": "美 [mɪs]",
    "pos": "v./n.",
    "meaning": "想念;错过;小姐",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "miss doing (怀念/错过做); missing (adj.) 失踪的"
    ],
    "usage": {
      "collocations": "miss doing 错过做某事; miss the bus 错过公交",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw816",
    "word": "mistake",
    "phonetic": "美 [mɪˈsteɪk]",
    "pos": "n./v.",
    "meaning": "错误",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "mistake → mistook → mistaken"
    ],
    "usage": {
      "collocations": "make a mistake 犯错误; by mistake 错误地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw817",
    "word": "mix",
    "phonetic": "美 [mɪks]",
    "pos": "v.",
    "meaning": "混合",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "mixture (n.) 混合物"
    ],
    "usage": {
      "collocations": "mix up 混淆; mix A with B 混合A和B",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw818",
    "word": "model",
    "phonetic": "美 [ˈmɑːdəl]",
    "pos": "n.",
    "meaning": "模型;模特;模范",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw819",
    "word": "modern",
    "phonetic": "美 [ˈmɑːdərn]",
    "pos": "adj.",
    "meaning": "现代的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw820",
    "word": "mom",
    "phonetic": "美 [mɑːm]",
    "pos": "n.",
    "meaning": "妈妈",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw821",
    "word": "moment",
    "phonetic": "美 [ˈmoʊmənt]",
    "pos": "n.",
    "meaning": "时刻;片刻",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "at the moment 此刻; for a moment 一会儿; in a moment 马上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw822",
    "word": "Monday",
    "phonetic": "美 [ˈmʌndeɪ]",
    "pos": "n.",
    "meaning": "星期一",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw823",
    "word": "money",
    "phonetic": "美 [ˈmʌni]",
    "pos": "n.",
    "meaning": "钱",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "money 不可数"
    ],
    "usage": {
      "collocations": "make money 赚钱; pocket money 零花钱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw824",
    "word": "monkey",
    "phonetic": "美 [ˈmʌŋki]",
    "pos": "n.",
    "meaning": "猴子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw825",
    "word": "month",
    "phonetic": "美 [mʌnθ]",
    "pos": "n.",
    "meaning": "月份",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "this month 这个月; monthly (adj./adv.)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw826",
    "word": "moon",
    "phonetic": "美 [muːn]",
    "pos": "n.",
    "meaning": "月亮",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw827",
    "word": "more",
    "phonetic": "美 [mɔːr]",
    "pos": "adj./adv./pron.",
    "meaning": "更多的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "many/much → more → most"
    ],
    "usage": {
      "collocations": "more and more 越来越; more or less 或多或少; once more 再一次",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw828",
    "word": "morning",
    "phonetic": "美 [ˈmɔːrnɪŋ]",
    "pos": "n.",
    "meaning": "早晨;上午",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in the morning 在早晨/上午; good morning 早上好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw829",
    "word": "most",
    "phonetic": "美 [moʊst]",
    "pos": "adj./adv./pron.",
    "meaning": "最多的;大多数",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "a most + adj. = very (非常，非最高级)"
    ],
    "usage": {
      "collocations": "at most 最多; most of 大多数",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw830",
    "word": "mother",
    "phonetic": "美 [ˈmʌðər]",
    "pos": "n.",
    "meaning": "母亲",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw831",
    "word": "mountain",
    "phonetic": "美 [ˈmaʊntən]",
    "pos": "n.",
    "meaning": "山",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "climb a mountain 爬山",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw832",
    "word": "mouse",
    "phonetic": "美 [maʊs]",
    "pos": "n.",
    "meaning": "老鼠;鼠标",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "mouse → mice (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw833",
    "word": "mouth",
    "phonetic": "美 [maʊθ]",
    "pos": "n.",
    "meaning": "嘴",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw834",
    "word": "move",
    "phonetic": "美 [muːv]",
    "pos": "v.",
    "meaning": "移动;搬家;感动",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "movement (n.) 运动; moving (adj.) 感人的; moved (adj.) 感动的"
    ],
    "usage": {
      "collocations": "move on 继续前进; move in 搬进来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw835",
    "word": "movie",
    "phonetic": "美 [ˈmuːvi]",
    "pos": "n.",
    "meaning": "电影",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go to the movies 去看电影",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw836",
    "word": "much",
    "phonetic": "美 [mʌtʃ]",
    "pos": "adj./adv.",
    "meaning": "许多;非常",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "much → more → most; 修饰不可数名词/比较级"
    ],
    "usage": {
      "collocations": "too much 太多; as much as 多达; how much 多少(不可数)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw837",
    "word": "murder",
    "phonetic": "美 [ˈmɜːrdər]",
    "pos": "v./n.",
    "meaning": "谋杀",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw838",
    "word": "museum",
    "phonetic": "美 [mjuːˈziːəm]",
    "pos": "n.",
    "meaning": "博物馆",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw839",
    "word": "music",
    "phonetic": "美 [ˈmjuːzɪk]",
    "pos": "n.",
    "meaning": "音乐",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "musical (adj.); musician (n.) 音乐家"
    ],
    "usage": {
      "collocations": "listen to music 听音乐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw840",
    "word": "must",
    "phonetic": "美 [mʌst]",
    "pos": "modal.",
    "meaning": "必须;一定",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "must (主观必须) vs. have to (客观不得不); mustn't 禁止"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw841",
    "word": "my",
    "phonetic": "美 [maɪ]",
    "pos": "pron.",
    "meaning": "我的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "my → mine (名物代) → myself (反身代词)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw842",
    "word": "myself",
    "phonetic": "美 [maɪˈself]",
    "pos": "pron.",
    "meaning": "我自己",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "by myself 我自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw843",
    "word": "name",
    "phonetic": "美 [neɪm]",
    "pos": "n./v.",
    "meaning": "名字;命名",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "be named after 以…命名; first name 名; family name 姓",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw844",
    "word": "national",
    "phonetic": "美 [ˈnæʃənəl]",
    "pos": "adj.",
    "meaning": "国家的;民族的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "nation (n.); international (adj.)"
    ],
    "usage": {
      "collocations": "National Day 国庆节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw845",
    "word": "natural",
    "phonetic": "美 [ˈnætʃərəl]",
    "pos": "adj.",
    "meaning": "自然的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "nature (n.) 自然"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw846",
    "word": "nature",
    "phonetic": "美 [ˈneɪtʃər]",
    "pos": "n.",
    "meaning": "大自然;本性",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in nature 在自然界; by nature 天生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw847",
    "word": "near",
    "phonetic": "美 [nɪr]",
    "pos": "adj./prep./adv.",
    "meaning": "近的;在…附近",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "nearly (adv.) 几乎"
    ],
    "usage": {
      "collocations": "be near to 靠近; in the near future 在不久的将来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw848",
    "word": "nearly",
    "phonetic": "美 [ˈnɪrli]",
    "pos": "adv.",
    "meaning": "几乎;差不多",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "nearly = almost (nearly 不用于否定词后: not nearly)"
    ],
    "usage": {
      "collocations": "not nearly 远非;远远不",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw849",
    "word": "necessary",
    "phonetic": "美 [ˈnesəseri]",
    "pos": "adj.",
    "meaning": "必要的;必须的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "It is necessary (for sb) to do",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw850",
    "word": "neck",
    "phonetic": "美 [nek]",
    "pos": "n.",
    "meaning": "脖子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw851",
    "word": "need",
    "phonetic": "美 [niːd]",
    "pos": "v./n./modal.",
    "meaning": "需要",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "need doing = need to be done (主动表被动); needn't 不必"
    ],
    "usage": {
      "collocations": "need to do 需要做; need doing 需要被做; in need 在危难中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw852",
    "word": "neighbor",
    "phonetic": "美 [ˈneɪbər]",
    "pos": "n.",
    "meaning": "邻居",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "neighborhood (n.) 社区;附近"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw853",
    "word": "neither",
    "phonetic": "美 [ˈniːðər]",
    "pos": "adj./pron./adv.",
    "meaning": "两者都不",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "neither…nor 谓语就近一致; neither + 单数名词"
    ],
    "usage": {
      "collocations": "neither…nor… 既不…也不…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw854",
    "word": "nervous",
    "phonetic": "美 [ˈnɜːrvəs]",
    "pos": "adj.",
    "meaning": "紧张的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be nervous about 对…感到紧张",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw855",
    "word": "never",
    "phonetic": "美 [ˈnevər]",
    "pos": "adv.",
    "meaning": "从不;决不",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "never 位于句首要倒装: Never have I seen…"
    ],
    "usage": {
      "collocations": "never mind 没关系; Better late than never 迟做总比不做好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw856",
    "word": "new",
    "phonetic": "美 [nuː]",
    "pos": "adj.",
    "meaning": "新的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "news (n.) 新闻(不可数); renew (v.) 更新"
    ],
    "usage": {
      "collocations": "new to 对…陌生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw857",
    "word": "news",
    "phonetic": "美 [nuːz]",
    "pos": "n.",
    "meaning": "新闻;消息(不可数)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "news 不可数; newspaper (n.) 报纸"
    ],
    "usage": {
      "collocations": "a piece of news 一条新闻; latest news 最新消息",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw858",
    "word": "newspaper",
    "phonetic": "美 [ˈnuːzpeɪpər]",
    "pos": "n.",
    "meaning": "报纸",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw859",
    "word": "next",
    "phonetic": "美 [nekst]",
    "pos": "adj./adv.",
    "meaning": "下一个的;紧接着",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "next week (将来) 不加 the"
    ],
    "usage": {
      "collocations": "next to 紧挨着; next time 下次; next week 下周",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw860",
    "word": "nice",
    "phonetic": "美 [naɪs]",
    "pos": "adj.",
    "meaning": "好的;友好的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "be nice to sb 对某人好; nice to meet you 很高兴见到你",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw861",
    "word": "night",
    "phonetic": "美 [naɪt]",
    "pos": "n.",
    "meaning": "夜晚",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "同音 knight"
    ],
    "usage": {
      "collocations": "at night 在夜间; day and night 日日夜夜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw862",
    "word": "nine",
    "phonetic": "美 [naɪn]",
    "pos": "num.",
    "meaning": "九",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ninth (第9); nineteen (19); ninety (90)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw863",
    "word": "nineteen",
    "phonetic": "美 [ˌnaɪnˈtiːn]",
    "pos": "num.",
    "meaning": "十九",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw864",
    "word": "ninety",
    "phonetic": "美 [ˈnaɪnti]",
    "pos": "num.",
    "meaning": "九十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw865",
    "word": "ninth",
    "phonetic": "美 [naɪnθ]",
    "pos": "num.",
    "meaning": "第九",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw866",
    "word": "no",
    "phonetic": "美 [noʊ]",
    "pos": "adv./adj.",
    "meaning": "不;没有",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "no longer 不再; no doubt 毫无疑问; no wonder 难怪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw867",
    "word": "nobody",
    "phonetic": "美 [ˈnoʊbɑːdi]",
    "pos": "pron.",
    "meaning": "没有人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "谓语用单数"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw868",
    "word": "nod",
    "phonetic": "美 [nɑːd]",
    "pos": "v./n.",
    "meaning": "点头",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "过去式 nodded"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw869",
    "word": "noise",
    "phonetic": "美 [nɔɪz]",
    "pos": "n.",
    "meaning": "噪音",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "noisy (adj.) 吵闹的; sound (声音通称) vs. voice (嗓音) vs. noise (噪音)"
    ],
    "usage": {
      "collocations": "make noise 制造噪音",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw870",
    "word": "noisy",
    "phonetic": "美 [ˈnɔɪzi]",
    "pos": "adj.",
    "meaning": "吵闹的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw871",
    "word": "none",
    "phonetic": "美 [nʌn]",
    "pos": "pron.",
    "meaning": "一个也没有",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "none of + 复数名词 谓语可单可复; none (三者+) vs. neither (两者)"
    ],
    "usage": {
      "collocations": "none of 没有一个",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw872",
    "word": "noodle",
    "phonetic": "美 [ˈnuːdəl]",
    "pos": "n.",
    "meaning": "面条",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a bowl of noodles 一碗面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw873",
    "word": "noon",
    "phonetic": "美 [nuːn]",
    "pos": "n.",
    "meaning": "中午",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "at noon 在中午",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw874",
    "word": "nor",
    "phonetic": "美 [nɔːr]",
    "pos": "conj.",
    "meaning": "也不",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "neither…nor 谓语就近一致"
    ],
    "usage": {
      "collocations": "neither…nor… 既不…也不…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw875",
    "word": "normal",
    "phonetic": "美 [ˈnɔːrməl]",
    "pos": "adj.",
    "meaning": "正常的;一般的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "normally (adv.); abnormal (反义词)"
    ],
    "usage": {
      "collocations": "return to normal 恢复正常",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw876",
    "word": "north",
    "phonetic": "美 [nɔːrθ]",
    "pos": "n./adj./adv.",
    "meaning": "北方",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "northern (adj.) 北方的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw877",
    "word": "nose",
    "phonetic": "美 [noʊz]",
    "pos": "n.",
    "meaning": "鼻子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw878",
    "word": "not",
    "phonetic": "美 [nɑːt]",
    "pos": "adv.",
    "meaning": "不;没有",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "not at all 一点也不; not only…but also 不但…而且; not…any more 不再",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw879",
    "word": "note",
    "phonetic": "美 [noʊt]",
    "pos": "n./v.",
    "meaning": "笔记;注释;注意",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "take notes 做笔记; note down 记下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw880",
    "word": "notebook",
    "phonetic": "美 [ˈnoʊtbʊk]",
    "pos": "n.",
    "meaning": "笔记本",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw881",
    "word": "nothing",
    "phonetic": "美 [ˈnʌθɪŋ]",
    "pos": "pron.",
    "meaning": "没有什么",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have nothing to do with 与…无关; nothing but 只有;只不过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw882",
    "word": "notice",
    "phonetic": "美 [ˈnoʊtɪs]",
    "pos": "v./n.",
    "meaning": "注意到;通知",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "notice sb do (全过程) vs. notice sb doing (正在做)"
    ],
    "usage": {
      "collocations": "take notice of 注意到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw883",
    "word": "novel",
    "phonetic": "美 [ˈnɑːvəl]",
    "pos": "n.",
    "meaning": "小说",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw884",
    "word": "November",
    "phonetic": "美 [noʊˈvembər]",
    "pos": "n.",
    "meaning": "十一月",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw885",
    "word": "now",
    "phonetic": "美 [naʊ]",
    "pos": "adv.",
    "meaning": "现在;目前",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "now that = since 既然"
    ],
    "usage": {
      "collocations": "right now 立刻; from now on 从现在起; now that 既然",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw886",
    "word": "number",
    "phonetic": "美 [ˈnʌmbər]",
    "pos": "n.",
    "meaning": "数字;号码;数量",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a number of 许多(谓语复数); the number of …的数量(谓语单数)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw887",
    "word": "nurse",
    "phonetic": "美 [nɜːrs]",
    "pos": "n.",
    "meaning": "护士",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw888",
    "word": "object",
    "phonetic": "美 [ˈɑːbdʒɪkt(n.); əbˈdʒekt(v.)]",
    "pos": "n./v.",
    "meaning": "物体;目标;反对",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw889",
    "word": "ocean",
    "phonetic": "美 [ˈoʊʃən]",
    "pos": "n.",
    "meaning": "海洋",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw890",
    "word": "o'clock",
    "phonetic": "美 [əˈklɑːk]",
    "pos": "adv.",
    "meaning": "…点钟",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw891",
    "word": "October",
    "phonetic": "美 [ɑːkˈtoʊbər]",
    "pos": "n.",
    "meaning": "十月",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw892",
    "word": "of",
    "phonetic": "美 [ʌv; əv]",
    "pos": "prep.",
    "meaning": "…的;属于",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "所有格: N of N; 固定搭配中的介词"
    ],
    "usage": {
      "collocations": "of course 当然; a lot of 许多; be afraid of 害怕",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw893",
    "word": "off",
    "phonetic": "美 [ɔːf]",
    "pos": "prep./adv.",
    "meaning": "离开;关掉;从…落下",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "off (副词，表离开/断开); 辨析 off vs. of"
    ],
    "usage": {
      "collocations": "turn off 关掉; take off 脱下;起飞; get off 下车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw894",
    "word": "offer",
    "phonetic": "美 [ˈɔːfər]",
    "pos": "v./n.",
    "meaning": "提供;主动提出",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "offer sb sth = offer sth to sb"
    ],
    "usage": {
      "collocations": "offer to do 主动提出做; offer sb sth 提供某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw895",
    "word": "office",
    "phonetic": "美 [ˈɔːfɪs]",
    "pos": "n.",
    "meaning": "办公室",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "officer (n.) 官员; official (adj.) 官方的"
    ],
    "usage": {
      "collocations": "post office 邮局",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw896",
    "word": "often",
    "phonetic": "美 [ˈɔːfən]",
    "pos": "adv.",
    "meaning": "经常",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "often 中的 t 不发音; 频率副词位置: be后实前"
    ],
    "usage": {
      "collocations": "more often than not 往往;多半",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw897",
    "word": "oil",
    "phonetic": "美 [ɔɪl]",
    "pos": "n.",
    "meaning": "油;石油",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw898",
    "word": "OK",
    "phonetic": "美 [ˌoʊˈkeɪ]",
    "pos": "adj./adv./interj.",
    "meaning": "好的;行",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw899",
    "word": "old",
    "phonetic": "美 [oʊld]",
    "pos": "adj.",
    "meaning": "老的;旧的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "old → older/elder → oldest/eldest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw900",
    "word": "Olympic",
    "phonetic": "美 [əˈlɪmpɪk]",
    "pos": "adj.",
    "meaning": "奥林匹克的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "the Olympic Games 奥运会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw901",
    "word": "on",
    "phonetic": "美 [ɑːn]",
    "pos": "prep./adv.",
    "meaning": "在…上;关于;进行中",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "on (具体某天/表面接触/关于); go on doing 继续做"
    ],
    "usage": {
      "collocations": "on foot 步行; on time 准时; on show 展出; on/off 开关",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw902",
    "word": "once",
    "phonetic": "美 [wʌns]",
    "pos": "adv./conj.",
    "meaning": "一次;一旦;曾经",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "once 引导从句用主将从现: Once you start, you'll like it."
    ],
    "usage": {
      "collocations": "once again 再一次; at once 立刻; once upon a time 从前",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw903",
    "word": "one",
    "phonetic": "美 [wʌn]",
    "pos": "num./pron.",
    "meaning": "一;一个;某个",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "one → ones (复数代词)"
    ],
    "usage": {
      "collocations": "one by one 逐个地; one another 互相; one day 有一天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw904",
    "word": "online",
    "phonetic": "美 [ˌɑːnˈlaɪn]",
    "pos": "adj./adv.",
    "meaning": "在线的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw905",
    "word": "only",
    "phonetic": "美 [ˈoʊnli]",
    "pos": "adv./adj.",
    "meaning": "只有;唯一的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "only + 状语位于句首要倒装: Only then did I realize."
    ],
    "usage": {
      "collocations": "not only…but also 不但…而且; if only 要是…就好了",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw906",
    "word": "open",
    "phonetic": "美 [ˈoʊpən]",
    "pos": "adj./v.",
    "meaning": "开着的;打开",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "opening (n.) 开口;开幕式; opened (adj.已开的)"
    ],
    "usage": {
      "collocations": "open up 打开;开放; in the open air 在户外",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw907",
    "word": "operation",
    "phonetic": "美 [ˌɑːpəˈreɪʃən]",
    "pos": "n.",
    "meaning": "手术;操作;运营",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "operate (v.)"
    ],
    "usage": {
      "collocations": "have an operation 做手术",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw908",
    "word": "opinion",
    "phonetic": "美 [əˈpɪnjən]",
    "pos": "n.",
    "meaning": "意见;看法",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in one's opinion 在某人看来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw909",
    "word": "opposite",
    "phonetic": "美 [ˈɑːpəzɪt]",
    "pos": "adj./prep./n.",
    "meaning": "对面的;相反的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "the opposite of …的反义词/对立面"
    ],
    "usage": {
      "collocations": "be opposite to 在…对面/相反",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw910",
    "word": "or",
    "phonetic": "美 [ɔːr; ər]",
    "pos": "conj.",
    "meaning": "或者;否则",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "祈使句 + or = 否则 (表否定的条件)"
    ],
    "usage": {
      "collocations": "either…or… 要么…要么; or so 大约; or else 否则",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw911",
    "word": "orange",
    "phonetic": "美 [ˈɔːrɪndʒ]",
    "pos": "n./adj.",
    "meaning": "橙子;橙色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw912",
    "word": "order",
    "phonetic": "美 [ˈɔːrdər]",
    "pos": "n./v.",
    "meaning": "顺序;订单;命令;点菜",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "in order that + 从句 = so that"
    ],
    "usage": {
      "collocations": "in order to do 为了做; out of order 出故障; place an order 下单",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw913",
    "word": "organize",
    "phonetic": "美 [ˈɔːrɡənaɪz]",
    "pos": "v.",
    "meaning": "组织",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "organization (n.)"
    ],
    "usage": {
      "collocations": "organize an activity 组织活动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw914",
    "word": "other",
    "phonetic": "美 [ˈʌðər]",
    "pos": "adj./pron.",
    "meaning": "其他的;另外的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "each other 互相; one after another 一个接一个; the other day 前几天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw915",
    "word": "our",
    "phonetic": "美 [aʊər; ɑːr]",
    "pos": "pron.",
    "meaning": "我们的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "our → ours (名物代) → ourselves (反身代词)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw916",
    "word": "ours",
    "phonetic": "美 [aʊərz; ɑːrz]",
    "pos": "pron.",
    "meaning": "我们的(名物代)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw917",
    "word": "ourselves",
    "phonetic": "美 [aʊərˈselvz]",
    "pos": "pron.",
    "meaning": "我们自己",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "by ourselves 我们自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw918",
    "word": "out",
    "phonetic": "美 [aʊt]",
    "pos": "adv./prep.",
    "meaning": "在外面;出去",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "out of + 名词 表\"没有/用完/离开\": out of control"
    ],
    "usage": {
      "collocations": "out of 从…出来;由于;缺乏; find out 查明; work out 解决;计算出",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw919",
    "word": "outside",
    "phonetic": "美 [ˌaʊtˈsaɪd]",
    "pos": "adv./prep./adj.",
    "meaning": "在外面;外部的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw920",
    "word": "over",
    "phonetic": "美 [ˈoʊvər]",
    "pos": "prep./adv.",
    "meaning": "在…上方;超过;结束;遍及",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "over (正上方不接触) vs. above (上方不特定); 表\"超过\" = more than"
    ],
    "usage": {
      "collocations": "over and over again 一再地; all over the world 全世界; go over 复习",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw921",
    "word": "own",
    "phonetic": "美 [oʊn]",
    "pos": "adj./v.",
    "meaning": "自己的;拥有",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "owner (n.) 所有者"
    ],
    "usage": {
      "collocations": "of one's own 某人自己的; on one's own 独自",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw922",
    "word": "owner",
    "phonetic": "美 [ˈoʊnər]",
    "pos": "n.",
    "meaning": "主人;所有者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw923",
    "word": "Pacific",
    "phonetic": "美 [pəˈsɪfɪk]",
    "pos": "n./adj.",
    "meaning": "太平洋",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw924",
    "word": "pack",
    "phonetic": "美 [pæk]",
    "pos": "v./n.",
    "meaning": "打包;包裹;一群",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "pack up 打包; a pack of 一包/一群",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw925",
    "word": "page",
    "phonetic": "美 [peɪdʒ]",
    "pos": "n.",
    "meaning": "页",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "turn to page 翻到第…页",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw926",
    "word": "paint",
    "phonetic": "美 [peɪnt]",
    "pos": "n./v.",
    "meaning": "油漆;绘画",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "painter (n.) 画家; painting (n.) 绘画"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw927",
    "word": "pair",
    "phonetic": "美 [per]",
    "pos": "n.",
    "meaning": "一双;一对",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "a pair of + 复数名词 谓语单数"
    ],
    "usage": {
      "collocations": "a pair of 一双/一对; in pairs 成对地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw928",
    "word": "palace",
    "phonetic": "美 [ˈpælɪs]",
    "pos": "n.",
    "meaning": "宫殿",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "the Summer Palace 颐和园",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw929",
    "word": "pale",
    "phonetic": "美 [peɪl]",
    "pos": "adj.",
    "meaning": "苍白的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw930",
    "word": "pancake",
    "phonetic": "美 [ˈpænkeɪk]",
    "pos": "n.",
    "meaning": "薄饼",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw931",
    "word": "panda",
    "phonetic": "美 [ˈpændə]",
    "pos": "n.",
    "meaning": "熊猫",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw932",
    "word": "paper",
    "phonetic": "美 [ˈpeɪpər]",
    "pos": "n.",
    "meaning": "纸;报纸;论文",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a piece of paper 一张纸; paper cutting 剪纸",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw933",
    "word": "pardon",
    "phonetic": "美 [ˈpɑːrdən]",
    "pos": "v./n.",
    "meaning": "原谅;再说一遍",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "beg one's pardon 请求原谅; Pardon me? 请再说一遍？",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw934",
    "word": "parent",
    "phonetic": "美 [ˈperənt]",
    "pos": "n.",
    "meaning": "父母",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw935",
    "word": "park",
    "phonetic": "美 [pɑːrk]",
    "pos": "n./v.",
    "meaning": "公园;停车",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "parking lot 停车场",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw936",
    "word": "part",
    "phonetic": "美 [pɑːrt]",
    "pos": "n./v.",
    "meaning": "部分;角色;分别",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "partly (adv.) 部分地; partial (adj.)"
    ],
    "usage": {
      "collocations": "take part in 参加; play a part in 在…中起作用; part with 放弃",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw937",
    "word": "party",
    "phonetic": "美 [ˈpɑːrti]",
    "pos": "n.",
    "meaning": "聚会;政党;一方",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have a party 开派对; birthday party 生日派对",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw938",
    "word": "pass",
    "phonetic": "美 [pæs]",
    "pos": "v.",
    "meaning": "通过;传递;及格",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "pass → passed → passed; past (prep./adj./n.)"
    ],
    "usage": {
      "collocations": "pass by 经过; pass away 去世; pass on 传递; pass the exam 通过考试",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw939",
    "word": "passage",
    "phonetic": "美 [ˈpæsɪdʒ]",
    "pos": "n.",
    "meaning": "文章;通道;走廊",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "read the passage 读文章",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw940",
    "word": "passenger",
    "phonetic": "美 [ˈpæsɪndʒər]",
    "pos": "n.",
    "meaning": "乘客",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw941",
    "word": "past",
    "phonetic": "美 [pæst]",
    "pos": "adj./prep./n.",
    "meaning": "过去的;经过",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "past (prep./adj./n.) vs. pass (v.)"
    ],
    "usage": {
      "collocations": "in the past 在过去; go past 走过; past tense 过去时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw942",
    "word": "patient",
    "phonetic": "美 [ˈpeɪʃənt]",
    "pos": "n./adj.",
    "meaning": "病人;有耐心的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "patience (n.) 耐心"
    ],
    "usage": {
      "collocations": "be patient with 对…有耐心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw943",
    "word": "pay",
    "phonetic": "美 [peɪ]",
    "pos": "v./n.",
    "meaning": "支付;付款",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "pay → paid → paid; pay sb for sth"
    ],
    "usage": {
      "collocations": "pay for 为…付款; pay attention to 注意; pay back 偿还",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw944",
    "word": "peace",
    "phonetic": "美 [piːs]",
    "pos": "n.",
    "meaning": "和平;安宁",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "peaceful (adj.) 和平的;同音 piece"
    ],
    "usage": {
      "collocations": "in peace 和平地; world peace 世界和平",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw945",
    "word": "pear",
    "phonetic": "美 [per]",
    "pos": "n.",
    "meaning": "梨",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw946",
    "word": "pen",
    "phonetic": "美 [pen]",
    "pos": "n.",
    "meaning": "钢笔",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "pen pal 笔友",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw947",
    "word": "pencil",
    "phonetic": "美 [ˈpensəl]",
    "pos": "n.",
    "meaning": "铅笔",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw948",
    "word": "people",
    "phonetic": "美 [ˈpiːpəl]",
    "pos": "n.",
    "meaning": "人;人们;民族",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "people 表\"人们\"谓语复数; a people 一个民族"
    ],
    "usage": {
      "collocations": "people of all ages 各年龄段的人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw949",
    "word": "perfect",
    "phonetic": "美 [ˈpɜːrfɪkt]",
    "pos": "adj.",
    "meaning": "完美的;极好的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "perfectly (adv.); perfection (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw950",
    "word": "perhaps",
    "phonetic": "美 [pərˈhæps]",
    "pos": "adv.",
    "meaning": "也许;可能",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw951",
    "word": "period",
    "phonetic": "美 [ˈpɪriəd]",
    "pos": "n.",
    "meaning": "时期;期间;句号",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw952",
    "word": "person",
    "phonetic": "美 [ˈpɜːrsən]",
    "pos": "n.",
    "meaning": "人;人称",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "personal (adj.) 个人的; personality (n.) 个性"
    ],
    "usage": {
      "collocations": "in person 亲自",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw953",
    "word": "personal",
    "phonetic": "美 [ˈpɜːrsənəl]",
    "pos": "adj.",
    "meaning": "个人的;私人的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw954",
    "word": "pet",
    "phonetic": "美 [pet]",
    "pos": "n.",
    "meaning": "宠物",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw955",
    "word": "phone",
    "phonetic": "美 [foʊn]",
    "pos": "n./v.",
    "meaning": "电话;打电话",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "phone number 电话号码; answer the phone 接电话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw956",
    "word": "photo",
    "phonetic": "美 [ˈfoʊtoʊ]",
    "pos": "n.",
    "meaning": "照片",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "photo → photos (复数); = photograph"
    ],
    "usage": {
      "collocations": "take a photo 拍照",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw957",
    "word": "physics",
    "phonetic": "美 [ˈfɪzɪks]",
    "pos": "n.",
    "meaning": "物理",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "physical (adj.) 身体的;物理的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw958",
    "word": "piano",
    "phonetic": "美 [piˈænoʊ]",
    "pos": "n.",
    "meaning": "钢琴",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "乐器前加 the; pianist (n.) 钢琴家"
    ],
    "usage": {
      "collocations": "play the piano 弹钢琴",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw959",
    "word": "pick",
    "phonetic": "美 [pɪk]",
    "pos": "v.",
    "meaning": "挑选;摘;捡起",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "pick up 多义常考: 捡起/接人/学会/接收信号"
    ],
    "usage": {
      "collocations": "pick up 捡起;接(人);学到; pick out 挑选出",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw960",
    "word": "picnic",
    "phonetic": "美 [ˈpɪknɪk]",
    "pos": "n./v.",
    "meaning": "野餐",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "过去式 picnicked"
    ],
    "usage": {
      "collocations": "go on a picnic 去野餐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw961",
    "word": "picture",
    "phonetic": "美 [ˈpɪktʃər]",
    "pos": "n./v.",
    "meaning": "图片;照片;想象",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "take a picture 拍照",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw962",
    "word": "pie",
    "phonetic": "美 [paɪ]",
    "pos": "n.",
    "meaning": "馅饼",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw963",
    "word": "piece",
    "phonetic": "美 [piːs]",
    "pos": "n.",
    "meaning": "一块/片/段/条",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "a piece of + 不可数名词; 同音 peace"
    ],
    "usage": {
      "collocations": "a piece of 一块/片",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw964",
    "word": "pig",
    "phonetic": "美 [pɪɡ]",
    "pos": "n.",
    "meaning": "猪",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw965",
    "word": "pilot",
    "phonetic": "美 [ˈpaɪlət]",
    "pos": "n.",
    "meaning": "飞行员",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw966",
    "word": "pink",
    "phonetic": "美 [pɪŋk]",
    "pos": "adj./n.",
    "meaning": "粉红色的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw967",
    "word": "pioneer",
    "phonetic": "美 [ˌpaɪəˈnɪr]",
    "pos": "n.",
    "meaning": "先锋;先驱",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "Young Pioneer 少先队员",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw968",
    "word": "pity",
    "phonetic": "美 [ˈpɪti]",
    "pos": "n.",
    "meaning": "遗憾;可惜;同情",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "What a pity! 真遗憾！; take pity on 同情",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw969",
    "word": "place",
    "phonetic": "美 [pleɪs]",
    "pos": "n./v.",
    "meaning": "地方;放置",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "take place (happen) vs. take the place of (replace)"
    ],
    "usage": {
      "collocations": "take place 发生(不及物); in place of 代替; take one's place 就座",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw970",
    "word": "plan",
    "phonetic": "美 [plæn]",
    "pos": "n./v.",
    "meaning": "计划;打算",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "过去式 planned (双写 n)"
    ],
    "usage": {
      "collocations": "plan to do 计划做; make a plan 做计划",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw971",
    "word": "plane",
    "phonetic": "美 [pleɪn]",
    "pos": "n.",
    "meaning": "飞机",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "by plane 乘飞机",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw972",
    "word": "planet",
    "phonetic": "美 [ˈplænɪt]",
    "pos": "n.",
    "meaning": "行星",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw973",
    "word": "plant",
    "phonetic": "美 [plænt]",
    "pos": "n./v.",
    "meaning": "植物;种植",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw974",
    "word": "plastic",
    "phonetic": "美 [ˈplæstɪk]",
    "pos": "n./adj.",
    "meaning": "塑料;塑料的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "plastic bags 塑料袋",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw975",
    "word": "play",
    "phonetic": "美 [pleɪ]",
    "pos": "v./n.",
    "meaning": "玩;演奏;扮演;戏剧",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "play + 球类/棋类 (不加the); play + the + 乐器"
    ],
    "usage": {
      "collocations": "play with 与…玩耍; play a role in 在…中起作用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw976",
    "word": "player",
    "phonetic": "美 [ˈpleɪər]",
    "pos": "n.",
    "meaning": "运动员;演奏者;播放器",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw977",
    "word": "playground",
    "phonetic": "美 [ˈpleɪɡraʊnd]",
    "pos": "n.",
    "meaning": "操场",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw978",
    "word": "pleasant",
    "phonetic": "美 [ˈplezənt]",
    "pos": "adj.",
    "meaning": "令人愉快的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "pleasant (事物令人愉快) vs. pleased (人感到愉快)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw979",
    "word": "please",
    "phonetic": "美 [pliːz]",
    "pos": "adv./v.",
    "meaning": "请;使高兴",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pleased (adj.) 高兴的; pleasure (n.) 愉快; with pleasure 乐意效劳"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw980",
    "word": "pleasure",
    "phonetic": "美 [ˈpleʒər]",
    "pos": "n.",
    "meaning": "愉快;乐趣",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "with pleasure 乐意效劳; It's a pleasure 不客气",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw981",
    "word": "plenty",
    "phonetic": "美 [ˈplenti]",
    "pos": "pron./n.",
    "meaning": "大量;充足",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "plenty of + 可数/不可数名词"
    ],
    "usage": {
      "collocations": "plenty of 大量的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw982",
    "word": "pocket",
    "phonetic": "美 [ˈpɑːkɪt]",
    "pos": "n.",
    "meaning": "口袋",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "pocket money 零花钱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw983",
    "word": "poem",
    "phonetic": "美 [ˈpoʊəm]",
    "pos": "n.",
    "meaning": "诗",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "poet (n.) 诗人; poetry (n.) 诗歌(总称)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw984",
    "word": "point",
    "phonetic": "美 [pɔɪnt]",
    "pos": "n./v.",
    "meaning": "点;指向;得分;观点",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "point of view 观点; there is no point in doing 做…无意义"
    ],
    "usage": {
      "collocations": "point out 指出; point to/at 指向; turning point 转折点; to the point 切题",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw985",
    "word": "police",
    "phonetic": "美 [pəˈliːs]",
    "pos": "n.",
    "meaning": "警察(总称)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "police 谓语用复数; policeman/policewoman"
    ],
    "usage": {
      "collocations": "police station 警察局; call the police 报警",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw986",
    "word": "polite",
    "phonetic": "美 [pəˈlaɪt]",
    "pos": "adj.",
    "meaning": "有礼貌的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "impolite (反义词); politeness (n.)"
    ],
    "usage": {
      "collocations": "be polite to 对…有礼貌",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw987",
    "word": "pollute",
    "phonetic": "美 [pəˈluːt]",
    "pos": "v.",
    "meaning": "污染",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pollution (n.) 污染"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw988",
    "word": "pollution",
    "phonetic": "美 [pəˈluːʃən]",
    "pos": "n.",
    "meaning": "污染",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw989",
    "word": "pool",
    "phonetic": "美 [puːl]",
    "pos": "n.",
    "meaning": "水池;游泳池",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "swimming pool 游泳池",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw990",
    "word": "poor",
    "phonetic": "美 [pɔːr]",
    "pos": "adj.",
    "meaning": "贫穷的;可怜的;差的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "poverty (n.) 贫穷"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw991",
    "word": "pop",
    "phonetic": "美 [pɑːp]",
    "pos": "n./adj.",
    "meaning": "流行音乐;爆裂声",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "pop music 流行音乐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw992",
    "word": "popular",
    "phonetic": "美 [ˈpɑːpjələr]",
    "pos": "adj.",
    "meaning": "流行的;受欢迎的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "popularity (n.) 流行;受欢迎"
    ],
    "usage": {
      "collocations": "be popular with 受…欢迎",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw993",
    "word": "population",
    "phonetic": "美 [ˌpɑːpjuˈleɪʃən]",
    "pos": "n.",
    "meaning": "人口;人口数量",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "population 作主语谓语单数; 提问人口用 what"
    ],
    "usage": {
      "collocations": "a population of …的人口; the population of China 中国的人口",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw994",
    "word": "pork",
    "phonetic": "美 [pɔːrk]",
    "pos": "n.",
    "meaning": "猪肉",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw995",
    "word": "possible",
    "phonetic": "美 [ˈpɑːsəbəl]",
    "pos": "adj.",
    "meaning": "可能的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "possibly (adv.); impossible (反义); possibility (n.)"
    ],
    "usage": {
      "collocations": "as…as possible 尽可能…; if possible 如果可能",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw996",
    "word": "post",
    "phonetic": "美 [poʊst]",
    "pos": "v./n.",
    "meaning": "邮寄;岗位;帖子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "post office 邮局; post a letter 寄信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw997",
    "word": "potato",
    "phonetic": "美 [pəˈteɪtoʊ]",
    "pos": "n.",
    "meaning": "土豆;马铃薯",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "potato → potatoes (复数+es)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw998",
    "word": "pound",
    "phonetic": "美 [paʊnd]",
    "pos": "n.",
    "meaning": "磅;英镑",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw999",
    "word": "practice",
    "phonetic": "美 [ˈpræktɪs]",
    "pos": "n./v.",
    "meaning": "练习;实践",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "practice doing (不接 to do); 美式名词/动词都用 practice; 英式 practise (v.)"
    ],
    "usage": {
      "collocations": "practice doing 练习做; put into practice 付诸实践",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1000",
    "word": "praise",
    "phonetic": "美 [preɪz]",
    "pos": "v./n.",
    "meaning": "表扬;赞美",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "praise sb for 因…表扬某人; in praise of 赞美",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1001",
    "word": "prefer",
    "phonetic": "美 [prɪˈfɜːr]",
    "pos": "v.",
    "meaning": "更喜欢",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "prefer doing to doing; 过去式 preferred (双写r)"
    ],
    "usage": {
      "collocations": "prefer A to B 比起B更喜欢A; prefer to do rather than do 宁愿做…而不愿做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1002",
    "word": "prepare",
    "phonetic": "美 [prɪˈper]",
    "pos": "v.",
    "meaning": "准备",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "preparation (n.)"
    ],
    "usage": {
      "collocations": "prepare for 为…做准备; be prepared for 准备好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1003",
    "word": "present",
    "phonetic": "美 [ˈprezənt(n./adj.); prɪˈzent(v.)]",
    "pos": "n./adj./v.",
    "meaning": "现在的;礼物;呈现",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "presence (n.) 出席;在场"
    ],
    "usage": {
      "collocations": "at present 目前; for the present 暂时; present sb with sth 赠送",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1004",
    "word": "president",
    "phonetic": "美 [ˈprezɪdənt]",
    "pos": "n.",
    "meaning": "总统;主席;校长",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1005",
    "word": "press",
    "phonetic": "美 [pres]",
    "pos": "v./n.",
    "meaning": "按;压;出版社",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pressure (n.) 压力"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1006",
    "word": "pretend",
    "phonetic": "美 [prɪˈtend]",
    "pos": "v.",
    "meaning": "假装",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "pretend to do 假装做; pretend that 假装…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1007",
    "word": "pretty",
    "phonetic": "美 [ˈprɪti]",
    "pos": "adj./adv.",
    "meaning": "漂亮的;相当",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "pretty good 相当好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1008",
    "word": "prevent",
    "phonetic": "美 [prɪˈvent]",
    "pos": "v.",
    "meaning": "阻止;预防",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "prevent/stop/keep sb from doing 辨析"
    ],
    "usage": {
      "collocations": "prevent sb from doing 阻止某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1009",
    "word": "price",
    "phonetic": "美 [praɪs]",
    "pos": "n.",
    "meaning": "价格;代价",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "price 提问用 what; 修饰用 high/low (不是 expensive/cheap)"
    ],
    "usage": {
      "collocations": "at a high price 以高价; at any price 不惜任何代价",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1010",
    "word": "pride",
    "phonetic": "美 [praɪd]",
    "pos": "n.",
    "meaning": "骄傲;自豪",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pride (n.) → proud (adj.)"
    ],
    "usage": {
      "collocations": "take pride in 以…为傲",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1011",
    "word": "primary",
    "phonetic": "美 [ˈpraɪmeri]",
    "pos": "adj.",
    "meaning": "初级的;首要的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "primary school 小学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1012",
    "word": "print",
    "phonetic": "美 [prɪnt]",
    "pos": "v./n.",
    "meaning": "打印;印刷",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "printer (n.) 打印机"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1013",
    "word": "prison",
    "phonetic": "美 [ˈprɪzən]",
    "pos": "n.",
    "meaning": "监狱",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in prison 坐牢(服刑); put sb in prison 把某人送进监狱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1014",
    "word": "private",
    "phonetic": "美 [ˈpraɪvət]",
    "pos": "adj.",
    "meaning": "私人的;私立的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in private 私下地; private school 私立学校",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1015",
    "word": "prize",
    "phonetic": "美 [praɪz]",
    "pos": "n.",
    "meaning": "奖品;奖金",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "win a prize 获奖; Nobel Prize 诺贝尔奖",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1016",
    "word": "probably",
    "phonetic": "美 [ˈprɑːbəbli]",
    "pos": "adv.",
    "meaning": "大概;很可能",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "probable (adj.) → probably (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1017",
    "word": "problem",
    "phonetic": "美 [ˈprɑːbləm]",
    "pos": "n.",
    "meaning": "问题;难题",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "problem (待解决/客观) vs. question (待回答/主观)"
    ],
    "usage": {
      "collocations": "solve a problem 解决问题; no problem 没问题",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1018",
    "word": "produce",
    "phonetic": "美 [prəˈduːs]",
    "pos": "v.",
    "meaning": "生产;制造;产生",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "product (n.) 产品; production (n.) 生产"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1019",
    "word": "product",
    "phonetic": "美 [ˈprɑːdʌkt]",
    "pos": "n.",
    "meaning": "产品",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1020",
    "word": "program",
    "phonetic": "美 [ˈproʊɡræm]",
    "pos": "n.",
    "meaning": "节目;程序;计划",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "美式 program / 英式 programme"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1021",
    "word": "progress",
    "phonetic": "美 [ˈprɑːɡres]",
    "pos": "n./v.",
    "meaning": "进步;进展",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "progress 不可数"
    ],
    "usage": {
      "collocations": "make progress 取得进步",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1022",
    "word": "project",
    "phonetic": "美 [ˈprɑːdʒekt]",
    "pos": "n.",
    "meaning": "项目;工程;计划",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1023",
    "word": "promise",
    "phonetic": "美 [ˈprɑːmɪs]",
    "pos": "v./n.",
    "meaning": "承诺;诺言",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "promise to do 承诺做; keep a promise 信守承诺; break a promise 违背承诺",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1024",
    "word": "pronounce",
    "phonetic": "美 [prəˈnaʊns]",
    "pos": "v.",
    "meaning": "发音;读",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "pronunciation (n.) 发音 (注意拼写)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1025",
    "word": "pronunciation",
    "phonetic": "美 [prəˌnʌnsiˈeɪʃən]",
    "pos": "n.",
    "meaning": "发音",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "注意拼写: pronun- (不是 pronoun-); pronounce (v.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1026",
    "word": "proper",
    "phonetic": "美 [ˈprɑːpər]",
    "pos": "adj.",
    "meaning": "恰当的;合适的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "properly (adv.) 恰当地"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1027",
    "word": "protect",
    "phonetic": "美 [prəˈtekt]",
    "pos": "v.",
    "meaning": "保护",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "protection (n.)"
    ],
    "usage": {
      "collocations": "protect sb from sth 保护某人免受…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1028",
    "word": "proud",
    "phonetic": "美 [praʊd]",
    "pos": "adj.",
    "meaning": "自豪的;骄傲的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pride (n.) → proud (adj.)"
    ],
    "usage": {
      "collocations": "be proud of 为…感到自豪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1029",
    "word": "prove",
    "phonetic": "美 [pruːv]",
    "pos": "v.",
    "meaning": "证明;证明是",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "prove → proved → proved/proven; proof (n.) 证据"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1030",
    "word": "provide",
    "phonetic": "美 [prəˈvaɪd]",
    "pos": "v.",
    "meaning": "提供",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "offer vs. provide vs. supply 辨析"
    ],
    "usage": {
      "collocations": "provide sb with sth = provide sth for sb 提供某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1031",
    "word": "public",
    "phonetic": "美 [ˈpʌblɪk]",
    "pos": "adj./n.",
    "meaning": "公共的;公众",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in public 公开地; public transport 公共交通",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1032",
    "word": "pull",
    "phonetic": "美 [pʊl]",
    "pos": "v./n.",
    "meaning": "拉;拖",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "pull (向自己拉) vs. push (推)"
    ],
    "usage": {
      "collocations": "pull down 拆毁; pull out 拔出; pull over 靠边停车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1033",
    "word": "punish",
    "phonetic": "美 [ˈpʌnɪʃ]",
    "pos": "v.",
    "meaning": "惩罚",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "punishment (n.)"
    ],
    "usage": {
      "collocations": "punish sb for 因…惩罚某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1034",
    "word": "pupil",
    "phonetic": "美 [ˈpjuːpəl]",
    "pos": "n.",
    "meaning": "小学生;学生",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pupil (中小学生) vs. student (学生通称)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1035",
    "word": "purple",
    "phonetic": "美 [ˈpɜːrpəl]",
    "pos": "adj./n.",
    "meaning": "紫色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1036",
    "word": "purpose",
    "phonetic": "美 [ˈpɜːrpəs]",
    "pos": "n.",
    "meaning": "目的;意图",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on purpose 故意地; for the purpose of 为了…的目的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1037",
    "word": "push",
    "phonetic": "美 [pʊʃ]",
    "pos": "v./n.",
    "meaning": "推;推动",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "push forward 推进; push sb to do 催促某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1038",
    "word": "put",
    "phonetic": "美 [pʊt]",
    "pos": "v.",
    "meaning": "放;摆放",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "put → put → put; 大量短语搭配"
    ],
    "usage": {
      "collocations": "put on 穿上;上演; put off 推迟; put up 搭建;张贴; put out 熄灭",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1039",
    "word": "quarter",
    "phonetic": "美 [ˈkwɔːrtər]",
    "pos": "n.",
    "meaning": "四分之一;一刻钟;季度",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "a quarter past/to …点过/差一刻",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1040",
    "word": "queen",
    "phonetic": "美 [kwiːn]",
    "pos": "n.",
    "meaning": "女王;王后",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1041",
    "word": "question",
    "phonetic": "美 [ˈkwestʃən]",
    "pos": "n./v.",
    "meaning": "问题;疑问",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "question (待回答) vs. problem (待解决)"
    ],
    "usage": {
      "collocations": "ask a question 问问题; out of the question 不可能的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1042",
    "word": "quick",
    "phonetic": "美 [kwɪk]",
    "pos": "adj.",
    "meaning": "快的;迅速的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "quickly (adv.) 快速地"
    ],
    "usage": {
      "collocations": "be quick 快点",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1043",
    "word": "quiet",
    "phonetic": "美 [ˈkwaɪət]",
    "pos": "adj.",
    "meaning": "安静的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "quietly (adv.); quite (adv.) 相当 — 拼写易混淆"
    ],
    "usage": {
      "collocations": "keep quiet 保持安静",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1044",
    "word": "quite",
    "phonetic": "美 [kwaɪt]",
    "pos": "adv.",
    "meaning": "相当;很;完全",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "quite vs. quiet 拼写辨析"
    ],
    "usage": {
      "collocations": "quite a lot 相当多; quite a few 相当多; not quite 不完全",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1045",
    "word": "quiz",
    "phonetic": "美 [kwɪz]",
    "pos": "n.",
    "meaning": "测试;小测验",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "quiz → quizzes (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1046",
    "word": "rabbit",
    "phonetic": "美 [ˈræbɪt]",
    "pos": "n.",
    "meaning": "兔子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1047",
    "word": "race",
    "phonetic": "美 [reɪs]",
    "pos": "n./v.",
    "meaning": "赛跑;种族",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "racist (n./adj.) 种族主义者"
    ],
    "usage": {
      "collocations": "relay race 接力赛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1048",
    "word": "radio",
    "phonetic": "美 [ˈreɪdioʊ]",
    "pos": "n.",
    "meaning": "收音机",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on the radio 在广播中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1049",
    "word": "railway",
    "phonetic": "美 [ˈreɪlweɪ]",
    "pos": "n.",
    "meaning": "铁路",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "railway station 火车站",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1050",
    "word": "rain",
    "phonetic": "美 [reɪn]",
    "pos": "n./v.",
    "meaning": "雨;下雨",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "rainy (adj.) 下雨的"
    ],
    "usage": {
      "collocations": "heavy rain 大雨; rain cats and dogs 倾盆大雨",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1051",
    "word": "raise",
    "phonetic": "美 [reɪz]",
    "pos": "v.",
    "meaning": "举起;提高;筹集",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "raise (vt.举起/养育) vs. rise (vi.上升)"
    ],
    "usage": {
      "collocations": "raise money 筹款; raise one's hand 举手",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1052",
    "word": "rapid",
    "phonetic": "美 [ˈræpɪd]",
    "pos": "adj.",
    "meaning": "快速的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "rapidly (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1053",
    "word": "rather",
    "phonetic": "美 [ˈræðər]",
    "pos": "adv.",
    "meaning": "相当;宁愿",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "would rather do than do; rather than + doing 而不是"
    ],
    "usage": {
      "collocations": "rather than 而不是; would rather do 宁愿做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1054",
    "word": "reach",
    "phonetic": "美 [riːtʃ]",
    "pos": "v.",
    "meaning": "到达;够到;伸手",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "reach = arrive at/in = get to; reach 是及物动词"
    ],
    "usage": {
      "collocations": "reach out 伸出; reach an agreement 达成协议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1055",
    "word": "read",
    "phonetic": "美 [riːd]",
    "pos": "v.",
    "meaning": "阅读;读",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "read → read /red/ → read /red/"
    ],
    "usage": {
      "collocations": "read aloud 大声读; read through 通读",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1056",
    "word": "ready",
    "phonetic": "美 [ˈredi]",
    "pos": "adj.",
    "meaning": "准备好的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "readily (adv.) 乐意地;容易地"
    ],
    "usage": {
      "collocations": "be ready for 为…做好准备; get ready 准备好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1057",
    "word": "real",
    "phonetic": "美 [ˈriːəl]",
    "pos": "adj.",
    "meaning": "真实的;真正的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "really (adv.) 真正地; reality (n.) 现实; realize (v.) 意识到"
    ],
    "usage": {
      "collocations": "in real life 在现实生活中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1058",
    "word": "realize",
    "phonetic": "美 [ˈriːəlaɪz]",
    "pos": "v.",
    "meaning": "意识到;实现",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "realize + that 从句"
    ],
    "usage": {
      "collocations": "realize the importance 意识到重要性; realize a dream 实现梦想",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1059",
    "word": "really",
    "phonetic": "美 [ˈriːəli]",
    "pos": "adv.",
    "meaning": "真正地;确实",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "not really 不完全是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1060",
    "word": "reason",
    "phonetic": "美 [ˈriːzən]",
    "pos": "n.",
    "meaning": "原因;理由",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "the reason why … is that … 原因是…"
    ],
    "usage": {
      "collocations": "the reason for …的原因; for this reason 为此",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1061",
    "word": "receive",
    "phonetic": "美 [rɪˈsiːv]",
    "pos": "v.",
    "meaning": "收到",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "receive (客观收到) vs. accept (主观接受)"
    ],
    "usage": {
      "collocations": "receive a letter 收到信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1062",
    "word": "recent",
    "phonetic": "美 [ˈriːsənt]",
    "pos": "adj.",
    "meaning": "最近的;近来的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "recently (adv.) 最近"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1063",
    "word": "record",
    "phonetic": "美 [rɪˈkɔːrd(v.); ˈrekərd(n.)]",
    "pos": "v./n.",
    "meaning": "记录;唱片",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "set a record 创纪录; keep a record 做记录",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1064",
    "word": "recycle",
    "phonetic": "美 [ˌriːˈsaɪkəl]",
    "pos": "v.",
    "meaning": "回收利用",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1065",
    "word": "red",
    "phonetic": "美 [red]",
    "pos": "adj./n.",
    "meaning": "红色的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in red 穿着红色衣服; red wine 红葡萄酒",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1066",
    "word": "refuse",
    "phonetic": "美 [rɪˈfjuːz]",
    "pos": "v.",
    "meaning": "拒绝",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "后接 to do 不接 doing！refusal (n.)"
    ],
    "usage": {
      "collocations": "refuse to do 拒绝做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1067",
    "word": "regard",
    "phonetic": "美 [rɪˈɡɑːrd]",
    "pos": "v./n.",
    "meaning": "看待;认为;关于",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "regarding (prep.) 关于"
    ],
    "usage": {
      "collocations": "regard…as 把…看作; in/with regard to 关于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1068",
    "word": "regret",
    "phonetic": "美 [rɪˈɡret]",
    "pos": "v./n.",
    "meaning": "后悔;遗憾",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "中考必考辨析！过去式 regretted"
    ],
    "usage": {
      "collocations": "regret to do 遗憾要做; regret doing 后悔做过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1069",
    "word": "relation",
    "phonetic": "美 [rɪˈleɪʃən]",
    "pos": "n.",
    "meaning": "关系;联系",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "relationship (n.)"
    ],
    "usage": {
      "collocations": "have a good relation with 与…关系好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1070",
    "word": "relax",
    "phonetic": "美 [rɪˈlæks]",
    "pos": "v.",
    "meaning": "放松;休息",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "relaxed (人放松) vs. relaxing (事物令人放松)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1071",
    "word": "remain",
    "phonetic": "美 [rɪˈmeɪn]",
    "pos": "v.",
    "meaning": "保持;剩余",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "remain + adj. 作系动词"
    ],
    "usage": {
      "collocations": "remain silent 保持沉默; remain to be done 有待被做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1072",
    "word": "remember",
    "phonetic": "美 [rɪˈmembər]",
    "pos": "v.",
    "meaning": "记住;记得",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "remember to do vs. remember doing 中考必考！"
    ],
    "usage": {
      "collocations": "remember to do 记得去做; remember doing 记得做过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1073",
    "word": "remind",
    "phonetic": "美 [rɪˈmaɪnd]",
    "pos": "v.",
    "meaning": "提醒;使想起",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "remind sb of sth 提醒某人某事; remind sb to do 提醒某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1074",
    "word": "repair",
    "phonetic": "美 [rɪˈper]",
    "pos": "v./n.",
    "meaning": "修理;修复",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "under repair 在修理中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1075",
    "word": "repeat",
    "phonetic": "美 [rɪˈpiːt]",
    "pos": "v.",
    "meaning": "重复",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "repetition (n.) 重复"
    ],
    "usage": {
      "collocations": "repeat after me 跟我读",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1076",
    "word": "reply",
    "phonetic": "美 [rɪˈplaɪ]",
    "pos": "v./n.",
    "meaning": "回复;回答",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "reply → replied → replied"
    ],
    "usage": {
      "collocations": "reply to 回复; in reply to 作为对…的回复",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1077",
    "word": "report",
    "phonetic": "美 [rɪˈpɔːrt]",
    "pos": "n./v.",
    "meaning": "报告;报道",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "reporter (n.) 记者"
    ],
    "usage": {
      "collocations": "report to 向…报告; It is reported that 据报道",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1078",
    "word": "require",
    "phonetic": "美 [rɪˈkwaɪər]",
    "pos": "v.",
    "meaning": "需要;要求",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "require doing = require to be done; requirement (n.)"
    ],
    "usage": {
      "collocations": "require doing 需要被做; require sb to do 要求某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1079",
    "word": "research",
    "phonetic": "美 [rɪˈsɜːrtʃ]",
    "pos": "n./v.",
    "meaning": "研究;调查",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "do research on 对…做研究",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1080",
    "word": "respect",
    "phonetic": "美 [rɪˈspekt]",
    "pos": "v./n.",
    "meaning": "尊重;尊敬",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "show respect for 对…表示尊重",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1081",
    "word": "responsible",
    "phonetic": "美 [rɪˈspɑːnsəbəl]",
    "pos": "adj.",
    "meaning": "负责的;有责任的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "responsibility (n.) 责任"
    ],
    "usage": {
      "collocations": "be responsible for 对…负责",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1082",
    "word": "rest",
    "phonetic": "美 [rest]",
    "pos": "n./v.",
    "meaning": "休息;剩余部分",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "rest (休息) vs. the rest (其余)"
    ],
    "usage": {
      "collocations": "have a rest 休息一下; the rest of 其余的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1083",
    "word": "restaurant",
    "phonetic": "美 [ˈrestərɑːnt]",
    "pos": "n.",
    "meaning": "餐厅;饭店",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1084",
    "word": "result",
    "phonetic": "美 [rɪˈzʌlt]",
    "pos": "n.",
    "meaning": "结果;后果",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "result in (导致) vs. result from (由…引起)"
    ],
    "usage": {
      "collocations": "as a result 结果; as a result of 由于…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1085",
    "word": "return",
    "phonetic": "美 [rɪˈtɜːrn]",
    "pos": "v./n.",
    "meaning": "返回;归还",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "return to 回到; in return 作为回报; return sth to sb 归还",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1086",
    "word": "review",
    "phonetic": "美 [rɪˈvjuː]",
    "pos": "v./n.",
    "meaning": "复习;回顾;评论",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "review lessons 复习功课",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1087",
    "word": "rice",
    "phonetic": "美 [raɪs]",
    "pos": "n.",
    "meaning": "米饭;大米",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "rice 不可数; 同音 rise"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1088",
    "word": "rich",
    "phonetic": "美 [rɪtʃ]",
    "pos": "adj.",
    "meaning": "富有的;丰富的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "反义词 poor"
    ],
    "usage": {
      "collocations": "be rich in 在…方面丰富",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1089",
    "word": "ride",
    "phonetic": "美 [raɪd]",
    "pos": "v./n.",
    "meaning": "骑;乘",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ride → rode → ridden"
    ],
    "usage": {
      "collocations": "ride a bike 骑自行车; give sb a ride 让某人搭车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1090",
    "word": "right",
    "phonetic": "美 [raɪt]",
    "pos": "adj./adv./n.",
    "meaning": "正确的;右边的;权利",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "right → rightly (adv.); 同音 write"
    ],
    "usage": {
      "collocations": "right now 立刻; right away 立刻; on the right 在右边; human rights 人权",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1091",
    "word": "ring",
    "phonetic": "美 [rɪŋ]",
    "pos": "n./v.",
    "meaning": "铃声;戒指;打电话",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ring → rang → rung"
    ],
    "usage": {
      "collocations": "ring up 打电话; ring a bell 听起来熟悉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1092",
    "word": "rise",
    "phonetic": "美 [raɪz]",
    "pos": "v./n.",
    "meaning": "上升;升起;起床",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "rise → rose → risen; rise (vi.不及物) vs. raise (vt.及物)"
    ],
    "usage": {
      "collocations": "give rise to 引起;导致",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1093",
    "word": "risk",
    "phonetic": "美 [rɪsk]",
    "pos": "n./v.",
    "meaning": "风险;冒险",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "risk doing 冒险做某事"
    ],
    "usage": {
      "collocations": "take a risk 冒险; at risk 有风险",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1094",
    "word": "river",
    "phonetic": "美 [ˈrɪvər]",
    "pos": "n.",
    "meaning": "河流",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1095",
    "word": "road",
    "phonetic": "美 [roʊd]",
    "pos": "n.",
    "meaning": "道路",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 rode (ride过去式)"
    ],
    "usage": {
      "collocations": "on the road 在路上; cross the road 过马路",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1096",
    "word": "robot",
    "phonetic": "美 [ˈroʊbɑːt]",
    "pos": "n.",
    "meaning": "机器人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1097",
    "word": "rock",
    "phonetic": "美 [rɑːk]",
    "pos": "n./v.",
    "meaning": "岩石;摇滚乐;摇晃",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1098",
    "word": "role",
    "phonetic": "美 [roʊl]",
    "pos": "n.",
    "meaning": "角色;作用",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "play a role in 在…中起作用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1099",
    "word": "room",
    "phonetic": "美 [ruːm]",
    "pos": "n.",
    "meaning": "房间;空间",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "make room for 为…腾出空间; living room 客厅",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1100",
    "word": "rope",
    "phonetic": "美 [roʊp]",
    "pos": "n.",
    "meaning": "绳子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1101",
    "word": "rose",
    "phonetic": "美 [roʊz]",
    "pos": "n.",
    "meaning": "玫瑰花",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1102",
    "word": "round",
    "phonetic": "美 [raʊnd]",
    "pos": "adj./prep./n.",
    "meaning": "圆的;围绕;一圈",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "all year round 一年到头; look round 环顾四周; come round 顺便来访",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1103",
    "word": "row",
    "phonetic": "美 [roʊ]",
    "pos": "n./v.",
    "meaning": "行;排;划船",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in a row 成一行;连续地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1104",
    "word": "rubbish",
    "phonetic": "美 [ˈrʌbɪʃ]",
    "pos": "n.",
    "meaning": "垃圾;废话",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1105",
    "word": "rule",
    "phonetic": "美 [ruːl]",
    "pos": "n./v.",
    "meaning": "规则;统治",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "break the rule 违反规则; as a rule 通常",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1106",
    "word": "ruler",
    "phonetic": "美 [ˈruːlər]",
    "pos": "n.",
    "meaning": "尺子;统治者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1107",
    "word": "run",
    "phonetic": "美 [rʌn]",
    "pos": "v.",
    "meaning": "跑;经营;流淌",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "run → ran → run; runner (n.) 跑步者"
    ],
    "usage": {
      "collocations": "run out of 用完;耗尽; run after 追赶; run away 逃跑; run into 偶然遇到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1108",
    "word": "rush",
    "phonetic": "美 [rʌʃ]",
    "pos": "v./n.",
    "meaning": "冲;匆忙;高峰期",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "rush hour 高峰时间; rush to do 匆忙做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1109",
    "word": "Russia",
    "phonetic": "美 [ˈrʌʃə]",
    "pos": "n.",
    "meaning": "俄罗斯",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "Russian (adj./n.) 俄罗斯的/俄语/俄罗斯人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1110",
    "word": "sad",
    "phonetic": "美 [sæd]",
    "pos": "adj.",
    "meaning": "难过的;悲伤的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sad → sadder → saddest; sadness (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1111",
    "word": "safe",
    "phonetic": "美 [seɪf]",
    "pos": "adj./n.",
    "meaning": "安全的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "safety (n.) 安全; safely (adv.)"
    ],
    "usage": {
      "collocations": "keep safe 保持安全; safe and sound 安然无恙",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1112",
    "word": "safety",
    "phonetic": "美 [ˈseɪfti]",
    "pos": "n.",
    "meaning": "安全",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "safety first 安全第一",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1113",
    "word": "sail",
    "phonetic": "美 [seɪl]",
    "pos": "v./n.",
    "meaning": "航行;帆",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sailor (n.) 水手;同音 sale"
    ],
    "usage": {
      "collocations": "go sailing 去航行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1114",
    "word": "salad",
    "phonetic": "美 [ˈsæləd]",
    "pos": "n.",
    "meaning": "沙拉",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1115",
    "word": "sale",
    "phonetic": "美 [seɪl]",
    "pos": "n.",
    "meaning": "销售;出售",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 sail; sell (v.) → sale (n.)"
    ],
    "usage": {
      "collocations": "on sale 出售;打折; for sale 待售",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1116",
    "word": "salt",
    "phonetic": "美 [sɔːlt]",
    "pos": "n.",
    "meaning": "盐",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "salty (adj.) 咸的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1117",
    "word": "same",
    "phonetic": "美 [seɪm]",
    "pos": "adj./pron.",
    "meaning": "相同的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "same 前面必须加 the"
    ],
    "usage": {
      "collocations": "the same as 和…相同; at the same time 同时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1118",
    "word": "sand",
    "phonetic": "美 [sænd]",
    "pos": "n.",
    "meaning": "沙子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sandy (adj.) 沙的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1119",
    "word": "sandwich",
    "phonetic": "美 [ˈsændwɪtʃ]",
    "pos": "n.",
    "meaning": "三明治",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "sandwich → sandwiches (复数+es)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1120",
    "word": "satisfy",
    "phonetic": "美 [ˈsætɪsfaɪ]",
    "pos": "v.",
    "meaning": "使满意;满足",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "satisfaction (n.)"
    ],
    "usage": {
      "collocations": "be satisfied with 对…满意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1121",
    "word": "Saturday",
    "phonetic": "美 [ˈsætərdeɪ]",
    "pos": "n.",
    "meaning": "星期六",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1122",
    "word": "save",
    "phonetic": "美 [seɪv]",
    "pos": "v.",
    "meaning": "救;节省;保存",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "safe (adj.) → save (v.)"
    ],
    "usage": {
      "collocations": "save money 省钱; save one's life 救某人的命",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1123",
    "word": "say",
    "phonetic": "美 [seɪ]",
    "pos": "v.",
    "meaning": "说;讲",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "say → said /sed/ → said; say vs. tell vs. speak vs. talk"
    ],
    "usage": {
      "collocations": "say hello to 向…问好; that is to say 也就是说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1124",
    "word": "scared",
    "phonetic": "美 [skerd]",
    "pos": "adj.",
    "meaning": "害怕的;恐惧的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "scared (人害怕) vs. scary (事物吓人)"
    ],
    "usage": {
      "collocations": "be scared of 害怕…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1125",
    "word": "scarf",
    "phonetic": "美 [skɑːrf]",
    "pos": "n.",
    "meaning": "围巾",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "scarf → scarves/scarfs (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1126",
    "word": "school",
    "phonetic": "美 [skuːl]",
    "pos": "n.",
    "meaning": "学校",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "go to school 上学; after school 放学后",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1127",
    "word": "schoolbag",
    "phonetic": "美 [ˈskuːlbæɡ]",
    "pos": "n.",
    "meaning": "书包",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1128",
    "word": "science",
    "phonetic": "美 [ˈsaɪəns]",
    "pos": "n.",
    "meaning": "科学",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "scientist (n.) 科学家; scientific (adj.)"
    ],
    "usage": {
      "collocations": "science fiction 科幻小说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1129",
    "word": "scientist",
    "phonetic": "美 [ˈsaɪəntɪst]",
    "pos": "n.",
    "meaning": "科学家",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1130",
    "word": "score",
    "phonetic": "美 [skɔːr]",
    "pos": "n./v.",
    "meaning": "分数;得分;二十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "get a high score 得高分; scores of 许多",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1131",
    "word": "screen",
    "phonetic": "美 [skriːn]",
    "pos": "n.",
    "meaning": "屏幕;屏风",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1132",
    "word": "sea",
    "phonetic": "美 [siː]",
    "pos": "n.",
    "meaning": "海;海洋",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 see"
    ],
    "usage": {
      "collocations": "go to sea 去航海; by sea 乘船; at sea 在海上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1133",
    "word": "search",
    "phonetic": "美 [sɜːrtʃ]",
    "pos": "v./n.",
    "meaning": "搜索;搜寻",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "search for 搜索; in search of 寻找",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1134",
    "word": "season",
    "phonetic": "美 [ˈsiːzən]",
    "pos": "n.",
    "meaning": "季节",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "four seasons 四季",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1135",
    "word": "seat",
    "phonetic": "美 [siːt]",
    "pos": "n.",
    "meaning": "座位",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "seat (n.座位) vs. sit (v.坐)"
    ],
    "usage": {
      "collocations": "take a seat 坐下; be seated 就座",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1136",
    "word": "second",
    "phonetic": "美 [ˈsekənd]",
    "pos": "num./n.",
    "meaning": "第二;秒",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "wait a second 等一下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1137",
    "word": "secret",
    "phonetic": "美 [ˈsiːkrɪt]",
    "pos": "n./adj.",
    "meaning": "秘密;秘诀",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "secretary (n.) 秘书"
    ],
    "usage": {
      "collocations": "keep a secret 保守秘密; the secret to/of …的秘诀",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1138",
    "word": "see",
    "phonetic": "美 [siː]",
    "pos": "v.",
    "meaning": "看见;明白;会见",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "see → saw → seen; see sb do (全过程) vs. see sb doing (正在)"
    ],
    "usage": {
      "collocations": "see a doctor 看医生; see off 送行; see to 处理;负责",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1139",
    "word": "seem",
    "phonetic": "美 [siːm]",
    "pos": "v.",
    "meaning": "似乎;好像",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "seem + adj./to do/that 从句; seem like + n."
    ],
    "usage": {
      "collocations": "seem to do 似乎做; It seems that … 似乎…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1140",
    "word": "seldom",
    "phonetic": "美 [ˈseldəm]",
    "pos": "adv.",
    "meaning": "很少;不常",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "seldom 是否定副词，位于句首要倒装"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1141",
    "word": "sell",
    "phonetic": "美 [sel]",
    "pos": "v.",
    "meaning": "卖;销售",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sell → sold → sold; sale (n.)"
    ],
    "usage": {
      "collocations": "sell out 卖光; sell well 畅销",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1142",
    "word": "send",
    "phonetic": "美 [send]",
    "pos": "v.",
    "meaning": "发送;邮寄;派遣",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "send → sent → sent"
    ],
    "usage": {
      "collocations": "send for 派人去请; send out 发送;发出; send up 发射",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1143",
    "word": "sense",
    "phonetic": "美 [sens]",
    "pos": "n./v.",
    "meaning": "感觉;意义;意识",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "sensible (adj.) 明智的; sensitive (adj.) 敏感的"
    ],
    "usage": {
      "collocations": "common sense 常识; make sense 有道理; in a sense 在某种意义上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1144",
    "word": "sentence",
    "phonetic": "美 [ˈsentəns]",
    "pos": "n./v.",
    "meaning": "句子;判决;判刑",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "make a sentence 造句",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1145",
    "word": "separate",
    "phonetic": "美 [ˈsepəreɪt(v.); ˈseprət(adj.)]",
    "pos": "v./adj.",
    "meaning": "分开;分离;单独的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "separate (分开在一起的东西) vs. divide (分成份)"
    ],
    "usage": {
      "collocations": "separate A from B 把A和B分开",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1146",
    "word": "September",
    "phonetic": "美 [sepˈtembər]",
    "pos": "n.",
    "meaning": "九月",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1147",
    "word": "serious",
    "phonetic": "美 [ˈsɪriəs]",
    "pos": "adj.",
    "meaning": "严肃的;严重的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "seriously (adv.)"
    ],
    "usage": {
      "collocations": "take…seriously 认真对待",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1148",
    "word": "serve",
    "phonetic": "美 [sɜːrv]",
    "pos": "v.",
    "meaning": "服务;提供;招待",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "service (n.) 服务"
    ],
    "usage": {
      "collocations": "serve as 充当;作为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1149",
    "word": "service",
    "phonetic": "美 [ˈsɜːrvɪs]",
    "pos": "n.",
    "meaning": "服务",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1150",
    "word": "set",
    "phonetic": "美 [set]",
    "pos": "v./n.",
    "meaning": "放置;设定;一套;落下",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "set → set → set; 大量短语搭配"
    ],
    "usage": {
      "collocations": "set up 建立; set off 出发;引爆; set out 出发;开始; set down 写下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1151",
    "word": "seven",
    "phonetic": "美 [ˈsevən]",
    "pos": "num.",
    "meaning": "七",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "seventh (第7); seventeen (17); seventy (70)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1152",
    "word": "seventeen",
    "phonetic": "美 [ˌsevənˈtiːn]",
    "pos": "num.",
    "meaning": "十七",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1153",
    "word": "seventh",
    "phonetic": "美 [ˈsevənθ]",
    "pos": "num.",
    "meaning": "第七",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1154",
    "word": "seventy",
    "phonetic": "美 [ˈsevənti]",
    "pos": "num.",
    "meaning": "七十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1155",
    "word": "several",
    "phonetic": "美 [ˈsevərəl]",
    "pos": "adj./pron.",
    "meaning": "几个;数个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "several + 复数名词"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1156",
    "word": "shake",
    "phonetic": "美 [ʃeɪk]",
    "pos": "v./n.",
    "meaning": "摇动;握手;颤抖",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "shake → shook → shaken"
    ],
    "usage": {
      "collocations": "shake hands with 与…握手; shake one's head 摇头",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1157",
    "word": "shall",
    "phonetic": "美 [ʃæl]",
    "pos": "modal.",
    "meaning": "将;会;应该",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "shall 用于第一人称表将来(较正式); Shall I/we…? 征求意见"
    ],
    "usage": {
      "collocations": "Shall we…? 我们…好吗？",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1158",
    "word": "shame",
    "phonetic": "美 [ʃeɪm]",
    "pos": "n.",
    "meaning": "羞耻;遗憾",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "What a shame! 真遗憾！; to one's shame 令某人羞愧的是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1159",
    "word": "shape",
    "phonetic": "美 [ʃeɪp]",
    "pos": "n./v.",
    "meaning": "形状;身材;塑形",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in good shape 状态良好; stay in shape 保持身材",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1160",
    "word": "share",
    "phonetic": "美 [ʃer]",
    "pos": "v./n.",
    "meaning": "分享;共用;份额",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "share…with sb 与某人分享; share in 分担",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1161",
    "word": "she",
    "phonetic": "美 [ʃiː]",
    "pos": "pron.",
    "meaning": "她",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "she → her → her → hers → herself"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1162",
    "word": "sheep",
    "phonetic": "美 [ʃiːp]",
    "pos": "n.",
    "meaning": "绵羊",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "sheep 单复数同形"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1163",
    "word": "shelf",
    "phonetic": "美 [ʃelf]",
    "pos": "n.",
    "meaning": "架子;书架",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "shelf → shelves (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1164",
    "word": "shine",
    "phonetic": "美 [ʃaɪn]",
    "pos": "v.",
    "meaning": "照耀;发光",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "shine → shone/shined → shone/shined"
    ],
    "usage": {
      "collocations": "shine brightly 灿烂地照耀",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1165",
    "word": "ship",
    "phonetic": "美 [ʃɪp]",
    "pos": "n./v.",
    "meaning": "船;轮船;运送",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "by ship 乘船; spaceship 宇宙飞船",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1166",
    "word": "shirt",
    "phonetic": "美 [ʃɜːrt]",
    "pos": "n.",
    "meaning": "衬衫",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1167",
    "word": "shock",
    "phonetic": "美 [ʃɑːk]",
    "pos": "n./v.",
    "meaning": "震惊;冲击",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "shocked (人震惊) vs. shocking (事令人震惊)"
    ],
    "usage": {
      "collocations": "be shocked at 对…感到震惊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1168",
    "word": "shoe",
    "phonetic": "美 [ʃuː]",
    "pos": "n.",
    "meaning": "鞋子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a pair of shoes 一双鞋",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1169",
    "word": "shop",
    "phonetic": "美 [ʃɑːp]",
    "pos": "n./v.",
    "meaning": "商店;购物",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "过去式 shopped (双写p)"
    ],
    "usage": {
      "collocations": "go shopping 去购物; shop assistant 店员",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1170",
    "word": "short",
    "phonetic": "美 [ʃɔːrt]",
    "pos": "adj.",
    "meaning": "短的;矮的;短缺的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "shorten (v.) 缩短; shorts (n.) 短裤"
    ],
    "usage": {
      "collocations": "in short 简而言之; be short of 短缺; for short 简称",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1171",
    "word": "should",
    "phonetic": "美 [ʃʊd]",
    "pos": "modal.",
    "meaning": "应该;竟然",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "should = ought to; should have done 虚拟语气"
    ],
    "usage": {
      "collocations": "should have done 本该做(而没做)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1172",
    "word": "shoulder",
    "phonetic": "美 [ˈʃoʊldər]",
    "pos": "n.",
    "meaning": "肩膀",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "shoulder to shoulder 肩并肩",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1173",
    "word": "shout",
    "phonetic": "美 [ʃaʊt]",
    "pos": "v./n.",
    "meaning": "喊叫;呼喊",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "shout at 对…大喊(不友好); shout to 朝…喊(让听见)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1174",
    "word": "show",
    "phonetic": "美 [ʃoʊ]",
    "pos": "v./n.",
    "meaning": "展示;表明;演出",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "show → showed → shown/showed"
    ],
    "usage": {
      "collocations": "show off 炫耀; show up 出现;露面; show sb around 带某人参观",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1175",
    "word": "shower",
    "phonetic": "美 [ˈʃaʊər]",
    "pos": "n.",
    "meaning": "淋浴;阵雨",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "take a shower 淋浴",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1176",
    "word": "shut",
    "phonetic": "美 [ʃʌt]",
    "pos": "v.",
    "meaning": "关闭;关上",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "shut → shut → shut"
    ],
    "usage": {
      "collocations": "shut up 闭嘴; shut down 关闭;停工",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1177",
    "word": "shy",
    "phonetic": "美 [ʃaɪ]",
    "pos": "adj.",
    "meaning": "害羞的;腼腆的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "shy → shier/shyer → shiest/shyest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1178",
    "word": "sick",
    "phonetic": "美 [sɪk]",
    "pos": "adj.",
    "meaning": "生病的;恶心的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sickness (n.) 疾病"
    ],
    "usage": {
      "collocations": "be sick of 厌倦; feel sick 感到恶心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1179",
    "word": "side",
    "phonetic": "美 [saɪd]",
    "pos": "n.",
    "meaning": "旁边;侧面;一方",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "side by side 肩并肩; on the other side 在另一边; take sides 偏袒",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1180",
    "word": "sight",
    "phonetic": "美 [saɪt]",
    "pos": "n.",
    "meaning": "视力;景象;看见",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "同音 cite/site; sightseeing (n.) 观光"
    ],
    "usage": {
      "collocations": "at first sight 乍一看; catch sight of 看见; lose sight of 看不见;忽略",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1181",
    "word": "sign",
    "phonetic": "美 [saɪn]",
    "pos": "n./v.",
    "meaning": "标志;符号;签名",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "sign up for 报名参加; traffic sign 交通标志",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1182",
    "word": "silence",
    "phonetic": "美 [ˈsaɪləns]",
    "pos": "n.",
    "meaning": "沉默;寂静",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "silent (adj.)"
    ],
    "usage": {
      "collocations": "in silence 沉默地; keep silence 保持安静",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1183",
    "word": "silent",
    "phonetic": "美 [ˈsaɪlənt]",
    "pos": "adj.",
    "meaning": "沉默的;安静的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "keep silent 保持沉默",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1184",
    "word": "silly",
    "phonetic": "美 [ˈsɪli]",
    "pos": "adj.",
    "meaning": "愚蠢的;傻的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1185",
    "word": "silver",
    "phonetic": "美 [ˈsɪlvər]",
    "pos": "n./adj.",
    "meaning": "银;银色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1186",
    "word": "similar",
    "phonetic": "美 [ˈsɪmɪlər]",
    "pos": "adj.",
    "meaning": "相似的;类似的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "be similar to; similarity (n.)"
    ],
    "usage": {
      "collocations": "be similar to 与…相似",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1187",
    "word": "simple",
    "phonetic": "美 [ˈsɪmpəl]",
    "pos": "adj.",
    "meaning": "简单的;简朴的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "simply (adv.) 简单地/仅仅; simplify (v.) 简化"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1188",
    "word": "since",
    "phonetic": "美 [sɪns]",
    "pos": "prep./conj./adv.",
    "meaning": "自从;因为;既然",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "since + 时间点 用于现在完成时; since = now that 既然"
    ],
    "usage": {
      "collocations": "ever since 自从; since then 从那时起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1189",
    "word": "sing",
    "phonetic": "美 [sɪŋ]",
    "pos": "v.",
    "meaning": "唱歌",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sing → sang → sung; singer (n.) 歌手"
    ],
    "usage": {
      "collocations": "sing a song 唱歌",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1190",
    "word": "single",
    "phonetic": "美 [ˈsɪŋɡəl]",
    "pos": "adj.",
    "meaning": "单一的;单身的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1191",
    "word": "sir",
    "phonetic": "美 [sɜːr]",
    "pos": "n.",
    "meaning": "先生(尊称)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1192",
    "word": "sister",
    "phonetic": "美 [ˈsɪstər]",
    "pos": "n.",
    "meaning": "姐妹",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1193",
    "word": "sit",
    "phonetic": "美 [sɪt]",
    "pos": "v.",
    "meaning": "坐",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sit → sat → sat; seat (n.座位) vs. sit (v.坐)"
    ],
    "usage": {
      "collocations": "sit down 坐下; sit up 坐直;熬夜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1194",
    "word": "situation",
    "phonetic": "美 [ˌsɪtʃuˈeɪʃən]",
    "pos": "n.",
    "meaning": "情况;形势",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1195",
    "word": "six",
    "phonetic": "美 [sɪks]",
    "pos": "num.",
    "meaning": "六",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sixth (第6); sixteen (16); sixty (60)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1196",
    "word": "sixteen",
    "phonetic": "美 [ˌsɪkˈstiːn]",
    "pos": "num.",
    "meaning": "十六",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1197",
    "word": "sixth",
    "phonetic": "美 [sɪksθ]",
    "pos": "num.",
    "meaning": "第六",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1198",
    "word": "sixty",
    "phonetic": "美 [ˈsɪksti]",
    "pos": "num.",
    "meaning": "六十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1199",
    "word": "size",
    "phonetic": "美 [saɪz]",
    "pos": "n.",
    "meaning": "大小;尺寸",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in size 在大小上; what size 什么尺寸",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1200",
    "word": "skate",
    "phonetic": "美 [skeɪt]",
    "pos": "v./n.",
    "meaning": "滑冰;溜冰鞋",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "skating rink 溜冰场"
    ],
    "usage": {
      "collocations": "go skating 去滑冰",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1201",
    "word": "skill",
    "phonetic": "美 [skɪl]",
    "pos": "n.",
    "meaning": "技能;技巧",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "skilled (adj.) 熟练的; skillful (adj.) 灵巧的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1202",
    "word": "skirt",
    "phonetic": "美 [skɜːrt]",
    "pos": "n.",
    "meaning": "裙子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1203",
    "word": "sky",
    "phonetic": "美 [skaɪ]",
    "pos": "n.",
    "meaning": "天空",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in the sky 在空中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1204",
    "word": "sleep",
    "phonetic": "美 [sliːp]",
    "pos": "v./n.",
    "meaning": "睡觉",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "sleep → slept → slept; sleepy (adj.) 困倦的; asleep (adj.) 睡着的"
    ],
    "usage": {
      "collocations": "go to sleep 入睡; fall asleep 入睡; sleep well 睡得好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1205",
    "word": "slow",
    "phonetic": "美 [sloʊ]",
    "pos": "adj./adv.",
    "meaning": "慢的;缓慢的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "slowly (adv.) 慢慢地"
    ],
    "usage": {
      "collocations": "slow down 减速;慢下来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1206",
    "word": "small",
    "phonetic": "美 [smɔːl]",
    "pos": "adj.",
    "meaning": "小的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "small → smaller → smallest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1207",
    "word": "smart",
    "phonetic": "美 [smɑːrt]",
    "pos": "adj.",
    "meaning": "聪明的;时髦的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1208",
    "word": "smell",
    "phonetic": "美 [smel]",
    "pos": "v./n.",
    "meaning": "闻;气味;闻起来",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "smell → smelled/smelt; smell + adj. (系动词)"
    ],
    "usage": {
      "collocations": "smell good 闻起来好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1209",
    "word": "smile",
    "phonetic": "美 [smaɪl]",
    "pos": "v./n.",
    "meaning": "微笑",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "smile at 对…微笑; with a smile 微笑着",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1210",
    "word": "smoke",
    "phonetic": "美 [smoʊk]",
    "pos": "n./v.",
    "meaning": "烟;吸烟",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "smoker (n.) 吸烟者; smoky (adj.)"
    ],
    "usage": {
      "collocations": "give up smoking 戒烟; no smoking 禁止吸烟",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1211",
    "word": "snake",
    "phonetic": "美 [sneɪk]",
    "pos": "n.",
    "meaning": "蛇",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1212",
    "word": "snow",
    "phonetic": "美 [snoʊ]",
    "pos": "n./v.",
    "meaning": "雪;下雪",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "snowy (adj.) 下雪的; snowman (n.) 雪人"
    ],
    "usage": {
      "collocations": "heavy snow 大雪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1213",
    "word": "so",
    "phonetic": "美 [soʊ]",
    "pos": "conj./adv.",
    "meaning": "因此;如此;那么",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "so + adj./adv. that 从句; so as to do 为了做"
    ],
    "usage": {
      "collocations": "so that 以便; so…that 如此…以至于; and so on 等等",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1214",
    "word": "soap",
    "phonetic": "美 [soʊp]",
    "pos": "n.",
    "meaning": "肥皂",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1215",
    "word": "soccer",
    "phonetic": "美 [ˈsɑːkər]",
    "pos": "n.",
    "meaning": "足球(美式)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "play soccer 踢足球",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1216",
    "word": "social",
    "phonetic": "美 [ˈsoʊʃəl]",
    "pos": "adj.",
    "meaning": "社会的;社交的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "society (n.) 社会"
    ],
    "usage": {
      "collocations": "social media 社交媒体",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1217",
    "word": "society",
    "phonetic": "美 [səˈsaɪəti]",
    "pos": "n.",
    "meaning": "社会;社团",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1218",
    "word": "sock",
    "phonetic": "美 [sɑːk]",
    "pos": "n.",
    "meaning": "短袜",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a pair of socks 一双袜子",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1219",
    "word": "sofa",
    "phonetic": "美 [ˈsoʊfə]",
    "pos": "n.",
    "meaning": "沙发",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1220",
    "word": "soft",
    "phonetic": "美 [sɔːft]",
    "pos": "adj.",
    "meaning": "柔软的;温和的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "softly (adv.); soften (v.) 使变软"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1221",
    "word": "soldier",
    "phonetic": "美 [ˈsoʊldʒər]",
    "pos": "n.",
    "meaning": "士兵",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1222",
    "word": "solve",
    "phonetic": "美 [sɑːlv]",
    "pos": "v.",
    "meaning": "解决",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "solution (n.) 解决方案"
    ],
    "usage": {
      "collocations": "solve the problem 解决问题",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1223",
    "word": "some",
    "phonetic": "美 [sʌm; səm]",
    "pos": "adj./pron.",
    "meaning": "一些;某个",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "some day (将来)某一天; some…others… 一些…另一些…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1224",
    "word": "somebody",
    "phonetic": "美 [ˈsʌmbɑːdi]",
    "pos": "pron.",
    "meaning": "某人",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1225",
    "word": "someone",
    "phonetic": "美 [ˈsʌmwʌn]",
    "pos": "pron.",
    "meaning": "某人",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1226",
    "word": "something",
    "phonetic": "美 [ˈsʌmθɪŋ]",
    "pos": "pron.",
    "meaning": "某事;某物",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "something else 其他东西; have something to do with 与…有关",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1227",
    "word": "sometimes",
    "phonetic": "美 [ˈsʌmtaɪmz]",
    "pos": "adv.",
    "meaning": "有时",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "sometimes (有时) vs. sometime (某时) vs. some time (一段时间)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1228",
    "word": "somewhere",
    "phonetic": "美 [ˈsʌmwer]",
    "pos": "adv.",
    "meaning": "某处;在某处",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1229",
    "word": "son",
    "phonetic": "美 [sʌn]",
    "pos": "n.",
    "meaning": "儿子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 sun"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1230",
    "word": "song",
    "phonetic": "美 [sɔːŋ]",
    "pos": "n.",
    "meaning": "歌曲",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "sing a song 唱歌",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1231",
    "word": "soon",
    "phonetic": "美 [suːn]",
    "pos": "adv.",
    "meaning": "不久;很快",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "as soon as 从句用主将从现"
    ],
    "usage": {
      "collocations": "as soon as 一…就; sooner or later 迟早; as soon as possible 尽快",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1232",
    "word": "sorry",
    "phonetic": "美 [ˈsɑːri]",
    "pos": "adj.",
    "meaning": "抱歉的;遗憾的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be sorry for 为…感到抱歉; I'm sorry 对不起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1233",
    "word": "sound",
    "phonetic": "美 [saʊnd]",
    "pos": "n./v.",
    "meaning": "声音;听起来",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "sound (声音通称) vs. voice (嗓音) vs. noise (噪音)"
    ],
    "usage": {
      "collocations": "sound like 听起来像; sound + adj. 听起来…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1234",
    "word": "soup",
    "phonetic": "美 [suːp]",
    "pos": "n.",
    "meaning": "汤",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a bowl of soup 一碗汤",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1235",
    "word": "sour",
    "phonetic": "美 [saʊər]",
    "pos": "adj.",
    "meaning": "酸的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1236",
    "word": "south",
    "phonetic": "美 [saʊθ]",
    "pos": "n./adj./adv.",
    "meaning": "南方;南方的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "southern (adj.) 南方的 /ˈsʌðərn/"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1237",
    "word": "space",
    "phonetic": "美 [speɪs]",
    "pos": "n.",
    "meaning": "空间;太空",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in space 在太空中; parking space 停车位",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1238",
    "word": "speak",
    "phonetic": "美 [spiːk]",
    "pos": "v.",
    "meaning": "说;讲(语言)",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "speak → spoke → spoken; speech (n.) 演讲"
    ],
    "usage": {
      "collocations": "speak to/with sb 与某人说话; speak English 讲英语; speak of 谈到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1239",
    "word": "speaker",
    "phonetic": "美 [ˈspiːkər]",
    "pos": "n.",
    "meaning": "说话者;扬声器",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1240",
    "word": "special",
    "phonetic": "美 [ˈspeʃəl]",
    "pos": "adj.",
    "meaning": "特别的;专门的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "specially (adv.) 专门地; specialist (n.) 专家"
    ],
    "usage": {
      "collocations": "special offer 特价优惠",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1241",
    "word": "speech",
    "phonetic": "美 [spiːtʃ]",
    "pos": "n.",
    "meaning": "演讲;说话能力",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "give a speech 发表演讲",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1242",
    "word": "speed",
    "phonetic": "美 [spiːd]",
    "pos": "n./v.",
    "meaning": "速度;加速",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "speed → sped/speeded → sped/speeded"
    ],
    "usage": {
      "collocations": "at high speed 高速; speed up 加速",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1243",
    "word": "spell",
    "phonetic": "美 [spel]",
    "pos": "v.",
    "meaning": "拼写",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "spell → spelled/spelt; spelling (n.) 拼写"
    ],
    "usage": {
      "collocations": "spell the word 拼单词",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1244",
    "word": "spend",
    "phonetic": "美 [spend]",
    "pos": "v.",
    "meaning": "花费;度过",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "spend → spent → spent; 主语是人: sb spends time/money on/(in) doing"
    ],
    "usage": {
      "collocations": "spend time/money on sth 在…上花时间/钱; spend…(in) doing 花…做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1245",
    "word": "spirit",
    "phonetic": "美 [ˈspɪrɪt]",
    "pos": "n.",
    "meaning": "精神;灵魂",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "spiritual (adj.) 精神的"
    ],
    "usage": {
      "collocations": "team spirit 团队精神; in high spirits 情绪高昂",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1246",
    "word": "spoon",
    "phonetic": "美 [spuːn]",
    "pos": "n.",
    "meaning": "勺子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1247",
    "word": "sport",
    "phonetic": "美 [spɔːrt]",
    "pos": "n.",
    "meaning": "运动",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "do sports 做运动; sports meeting 运动会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1248",
    "word": "spread",
    "phonetic": "美 [spred]",
    "pos": "v.",
    "meaning": "传播;展开;蔓延",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "spread → spread → spread"
    ],
    "usage": {
      "collocations": "spread out 展开; spread around 四处传播",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1249",
    "word": "spring",
    "phonetic": "美 [sprɪŋ]",
    "pos": "n.",
    "meaning": "春天;泉水;弹簧",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "spring → sprang → sprung"
    ],
    "usage": {
      "collocations": "Spring Festival 春节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1250",
    "word": "square",
    "phonetic": "美 [skwer]",
    "pos": "n./adj.",
    "meaning": "广场;正方形;平方",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "Tian'anmen Square 天安门广场",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1251",
    "word": "stamp",
    "phonetic": "美 [stæmp]",
    "pos": "n./v.",
    "meaning": "邮票;印章;跺脚",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1252",
    "word": "stand",
    "phonetic": "美 [stænd]",
    "pos": "v.",
    "meaning": "站立;忍受",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "stand → stood → stood; stand + doing 忍受做"
    ],
    "usage": {
      "collocations": "stand up 起立; stand for 代表; can't stand 无法忍受",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1253",
    "word": "standard",
    "phonetic": "美 [ˈstændərd]",
    "pos": "n./adj.",
    "meaning": "标准;水平",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "living standard 生活水平",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1254",
    "word": "star",
    "phonetic": "美 [stɑːr]",
    "pos": "n.",
    "meaning": "星星;明星",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1255",
    "word": "start",
    "phonetic": "美 [stɑːrt]",
    "pos": "v./n.",
    "meaning": "开始;出发;启动",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "start with = begin with; start off 开始"
    ],
    "usage": {
      "collocations": "start to do/doing 开始做; to start with 首先",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1256",
    "word": "state",
    "phonetic": "美 [steɪt]",
    "pos": "n./v.",
    "meaning": "状态;国家;州;陈述",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "statement (n.) 声明"
    ],
    "usage": {
      "collocations": "in a…state 处于…状态; the United States 美国",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1257",
    "word": "station",
    "phonetic": "美 [ˈsteɪʃən]",
    "pos": "n.",
    "meaning": "车站;站",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "bus station 公交站; railway station 火车站",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1258",
    "word": "stay",
    "phonetic": "美 [steɪ]",
    "pos": "v./n.",
    "meaning": "停留;保持;待",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "stay up 熬夜; stay at home 待在家; stay in touch 保持联系",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1259",
    "word": "steal",
    "phonetic": "美 [stiːl]",
    "pos": "v.",
    "meaning": "偷;窃取",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "steal → stole → stolen; 同音 steel"
    ],
    "usage": {
      "collocations": "steal sth from sb 偷某人的东西",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1260",
    "word": "step",
    "phonetic": "美 [step]",
    "pos": "n./v.",
    "meaning": "步骤;脚步;台阶",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "step by step 逐步地; take steps 采取措施; step forward 向前走",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1261",
    "word": "stick",
    "phonetic": "美 [stɪk]",
    "pos": "n./v.",
    "meaning": "木棍;粘贴;坚持",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "stick → stuck → stuck; stick to + n./doing"
    ],
    "usage": {
      "collocations": "stick to 坚持; stick with 紧跟; stick out 伸出;显眼",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1262",
    "word": "still",
    "phonetic": "美 [stɪl]",
    "pos": "adv./adj.",
    "meaning": "仍然;还;静止的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "still better 更好; keep still 保持不动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1263",
    "word": "stomach",
    "phonetic": "美 [ˈstʌmək]",
    "pos": "n.",
    "meaning": "胃;肚子",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have a stomachache 胃痛/肚子痛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1264",
    "word": "stone",
    "phonetic": "美 [stoʊn]",
    "pos": "n.",
    "meaning": "石头;宝石",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1265",
    "word": "stop",
    "phonetic": "美 [stɑːp]",
    "pos": "v./n.",
    "meaning": "停止;阻止;车站",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "stop doing vs. stop to do 中考必考！过去式 stopped (双写p)"
    ],
    "usage": {
      "collocations": "stop doing 停止做(正在做的事); stop to do 停下来去做(另一件事); stop sb from doing 阻止某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1266",
    "word": "store",
    "phonetic": "美 [stɔːr]",
    "pos": "n./v.",
    "meaning": "商店;储存",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "department store 百货商店",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1267",
    "word": "storm",
    "phonetic": "美 [stɔːrm]",
    "pos": "n.",
    "meaning": "暴风雨",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "stormy (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1268",
    "word": "story",
    "phonetic": "美 [ˈstɔːri]",
    "pos": "n.",
    "meaning": "故事",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "story → stories (复数)"
    ],
    "usage": {
      "collocations": "tell a story 讲故事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1269",
    "word": "straight",
    "phonetic": "美 [streɪt]",
    "pos": "adj./adv.",
    "meaning": "直的;直接地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "go straight 直走; straight away 立刻",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1270",
    "word": "strange",
    "phonetic": "美 [streɪndʒ]",
    "pos": "adj.",
    "meaning": "奇怪的;陌生的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "stranger (n.) 陌生人"
    ],
    "usage": {
      "collocations": "be strange to 对…陌生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1271",
    "word": "strawberry",
    "phonetic": "美 [ˈstrɔːberi]",
    "pos": "n.",
    "meaning": "草莓",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "strawberry → strawberries (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1272",
    "word": "stream",
    "phonetic": "美 [striːm]",
    "pos": "n.",
    "meaning": "溪流;小河",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1273",
    "word": "street",
    "phonetic": "美 [striːt]",
    "pos": "n.",
    "meaning": "街道",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1274",
    "word": "strict",
    "phonetic": "美 [strɪkt]",
    "pos": "adj.",
    "meaning": "严格的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be strict with sb 对某人严格; be strict about sth 对某事严格",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1275",
    "word": "strong",
    "phonetic": "美 [strɔːŋ]",
    "pos": "adj.",
    "meaning": "强壮的;坚固的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "strong → stronger → strongest; strength (n.) 力量"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1276",
    "word": "student",
    "phonetic": "美 [ˈstuːdənt]",
    "pos": "n.",
    "meaning": "学生",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1277",
    "word": "study",
    "phonetic": "美 [ˈstʌdi]",
    "pos": "v./n.",
    "meaning": "学习;研究;书房",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "study → studied → studied"
    ],
    "usage": {
      "collocations": "study hard 努力学习",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1278",
    "word": "stupid",
    "phonetic": "美 [ˈstuːpɪd]",
    "pos": "adj.",
    "meaning": "愚蠢的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1279",
    "word": "subject",
    "phonetic": "美 [ˈsʌbdʒɪkt]",
    "pos": "n.",
    "meaning": "科目;主题;主语",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1280",
    "word": "succeed",
    "phonetic": "美 [səkˈsiːd]",
    "pos": "v.",
    "meaning": "成功",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "succeed (v.) → success (n.) → successful (adj.)"
    ],
    "usage": {
      "collocations": "succeed in doing 成功做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1281",
    "word": "success",
    "phonetic": "美 [səkˈses]",
    "pos": "n.",
    "meaning": "成功",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "achieve success 获得成功; a great success 一个巨大成功",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1282",
    "word": "successful",
    "phonetic": "美 [səkˈsesfəl]",
    "pos": "adj.",
    "meaning": "成功的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1283",
    "word": "such",
    "phonetic": "美 [sʌtʃ]",
    "pos": "adj./pron.",
    "meaning": "这样的;如此的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "such + (a/an) + n. + that vs. so + adj./adv. + that"
    ],
    "usage": {
      "collocations": "such as 例如; such…that 如此…以至于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1284",
    "word": "sudden",
    "phonetic": "美 [ˈsʌdən]",
    "pos": "adj.",
    "meaning": "突然的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "suddenly (adv.) 突然地"
    ],
    "usage": {
      "collocations": "all of a sudden 突然",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1285",
    "word": "sugar",
    "phonetic": "美 [ˈʃʊɡər]",
    "pos": "n.",
    "meaning": "糖",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1286",
    "word": "suggest",
    "phonetic": "美 [səɡˈdʒest]",
    "pos": "v.",
    "meaning": "建议;暗示",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "suggest doing ❗不接 to do！suggestion (n.)"
    ],
    "usage": {
      "collocations": "suggest doing 建议做; suggest that sb (should) do 虚拟语气",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1287",
    "word": "summer",
    "phonetic": "美 [ˈsʌmər]",
    "pos": "n.",
    "meaning": "夏天",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "summer holiday 暑假; in summer 在夏天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1288",
    "word": "sun",
    "phonetic": "美 [sʌn]",
    "pos": "n.",
    "meaning": "太阳",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "sunny (adj.) 晴朗的; 同音 son"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1289",
    "word": "Sunday",
    "phonetic": "美 [ˈsʌndeɪ]",
    "pos": "n.",
    "meaning": "星期日",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1290",
    "word": "sunny",
    "phonetic": "美 [ˈsʌni]",
    "pos": "adj.",
    "meaning": "晴朗的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1291",
    "word": "super",
    "phonetic": "美 [ˈsuːpər]",
    "pos": "adj.",
    "meaning": "超级的;极好的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "super market 超市",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1292",
    "word": "supermarket",
    "phonetic": "美 [ˈsuːpərˌmɑːrkɪt]",
    "pos": "n.",
    "meaning": "超市",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1293",
    "word": "supper",
    "phonetic": "美 [ˈsʌpər]",
    "pos": "n.",
    "meaning": "晚餐",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "have supper 吃晚餐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1294",
    "word": "supply",
    "phonetic": "美 [səˈplaɪ]",
    "pos": "v./n.",
    "meaning": "供应;提供",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "supply sb with sth = supply sth to sb 提供某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1295",
    "word": "support",
    "phonetic": "美 [səˈpɔːrt]",
    "pos": "v./n.",
    "meaning": "支持;支撑",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "support sb in doing 支持某人做; in support of 支持",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1296",
    "word": "suppose",
    "phonetic": "美 [səˈpoʊz]",
    "pos": "v.",
    "meaning": "认为;假定",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "be supposed to = should"
    ],
    "usage": {
      "collocations": "be supposed to do 应该做; I suppose so 我想是吧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1297",
    "word": "sure",
    "phonetic": "美 [ʃʊr]",
    "pos": "adj.",
    "meaning": "确信的;肯定的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "surely (adv.) 确实;当然"
    ],
    "usage": {
      "collocations": "make sure 确保; be sure to do 一定要做; for sure 肯定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1298",
    "word": "surface",
    "phonetic": "美 [ˈsɜːrfɪs]",
    "pos": "n.",
    "meaning": "表面",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on the surface 在表面上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1299",
    "word": "surprise",
    "phonetic": "美 [sərˈpraɪz]",
    "pos": "n./v.",
    "meaning": "惊喜;惊奇",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "surprised (人惊讶) vs. surprising (事令人惊讶)"
    ],
    "usage": {
      "collocations": "to one's surprise 令某人惊奇的是; in surprise 吃惊地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1300",
    "word": "surround",
    "phonetic": "美 [səˈraʊnd]",
    "pos": "v.",
    "meaning": "包围;围绕",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "surrounding (adj.) 周围的"
    ],
    "usage": {
      "collocations": "be surrounded by/with 被…包围",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1301",
    "word": "sweater",
    "phonetic": "美 [ˈswetər]",
    "pos": "n.",
    "meaning": "毛衣",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1302",
    "word": "sweet",
    "phonetic": "美 [swiːt]",
    "pos": "adj./n.",
    "meaning": "甜的;糖果",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1303",
    "word": "swim",
    "phonetic": "美 [swɪm]",
    "pos": "v./n.",
    "meaning": "游泳",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "swim → swam → swum; swimmer (n.) 游泳者; 过去式 swimming (双写m)"
    ],
    "usage": {
      "collocations": "go swimming 去游泳; swim across 游过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1304",
    "word": "swing",
    "phonetic": "美 [swɪŋ]",
    "pos": "v./n.",
    "meaning": "摇摆;荡秋千",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "swing → swung → swung"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1305",
    "word": "symbol",
    "phonetic": "美 [ˈsɪmbəl]",
    "pos": "n.",
    "meaning": "象征;符号",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1306",
    "word": "table",
    "phonetic": "美 [ˈteɪbəl]",
    "pos": "n.",
    "meaning": "桌子;表格",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "at the table 在桌旁; table tennis 乒乓球",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1307",
    "word": "tail",
    "phonetic": "美 [teɪl]",
    "pos": "n.",
    "meaning": "尾巴",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 tale (故事)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1308",
    "word": "take",
    "phonetic": "美 [teɪk]",
    "pos": "v.",
    "meaning": "拿;带;花费;乘坐",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "take → took → taken; It takes sb + time + to do 花费时间"
    ],
    "usage": {
      "collocations": "take off 脱下;起飞; take care of 照顾; take part in 参加; take place 发生; take it easy 别紧张",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1309",
    "word": "tale",
    "phonetic": "美 [teɪl]",
    "pos": "n.",
    "meaning": "故事;传说",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "fairy tale 童话; tell a tale 讲故事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1310",
    "word": "talk",
    "phonetic": "美 [tɔːk]",
    "pos": "v./n.",
    "meaning": "谈话;交谈",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "talk about 谈论; talk to/with sb 与某人交谈; give a talk 做报告",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1311",
    "word": "tall",
    "phonetic": "美 [tɔːl]",
    "pos": "adj.",
    "meaning": "高的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "tall (细长高，如人/树) vs. high (宽泛的高，如山/温度)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1312",
    "word": "tape",
    "phonetic": "美 [teɪp]",
    "pos": "n.",
    "meaning": "磁带;胶带",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1313",
    "word": "task",
    "phonetic": "美 [tæsk]",
    "pos": "n.",
    "meaning": "任务;工作",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "finish a task 完成任务",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1314",
    "word": "taste",
    "phonetic": "美 [teɪst]",
    "pos": "v./n.",
    "meaning": "尝;味道;品味",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "taste 作系动词 + adj.; tasty (adj.) 美味的"
    ],
    "usage": {
      "collocations": "taste + adj. 尝起来…; have a taste for 喜欢",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1315",
    "word": "taxi",
    "phonetic": "美 [ˈtæksi]",
    "pos": "n.",
    "meaning": "出租车",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "take a taxi 乘出租车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1316",
    "word": "tea",
    "phonetic": "美 [tiː]",
    "pos": "n.",
    "meaning": "茶;茶叶",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "a cup of tea 一杯茶; make tea 泡茶",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1317",
    "word": "teach",
    "phonetic": "美 [tiːtʃ]",
    "pos": "v.",
    "meaning": "教;教授",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "teach → taught → taught; teacher (n.) 教师"
    ],
    "usage": {
      "collocations": "teach sb sth 教某人某事; teach sb to do 教某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1318",
    "word": "teacher",
    "phonetic": "美 [ˈtiːtʃər]",
    "pos": "n.",
    "meaning": "教师",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1319",
    "word": "team",
    "phonetic": "美 [tiːm]",
    "pos": "n.",
    "meaning": "队;团队",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "teamwork 团队合作; on the team 在队里",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1320",
    "word": "technology",
    "phonetic": "美 [tekˈnɑːlədʒi]",
    "pos": "n.",
    "meaning": "技术;科技",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "technological (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1321",
    "word": "teenager",
    "phonetic": "美 [ˈtiːneɪdʒər]",
    "pos": "n.",
    "meaning": "青少年",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1322",
    "word": "telephone",
    "phonetic": "美 [ˈtelɪfoʊn]",
    "pos": "n./v.",
    "meaning": "电话",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "answer the telephone 接电话; by telephone 通过电话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1323",
    "word": "television",
    "phonetic": "美 [ˈtelɪvɪʒən]",
    "pos": "n.",
    "meaning": "电视",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "= TV"
    ],
    "usage": {
      "collocations": "watch television 看电视",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1324",
    "word": "tell",
    "phonetic": "美 [tel]",
    "pos": "v.",
    "meaning": "告诉;讲;辨别",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "tell → told → told; tell sb (not) to do"
    ],
    "usage": {
      "collocations": "tell a story 讲故事; tell sb to do 叫某人做; tell the difference 分辨差异",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1325",
    "word": "temperature",
    "phonetic": "美 [ˈtempərətʃər]",
    "pos": "n.",
    "meaning": "温度;体温",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "take one's temperature 量体温; high temperature 高温",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1326",
    "word": "ten",
    "phonetic": "美 [ten]",
    "pos": "num.",
    "meaning": "十",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "tenth (第10)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1327",
    "word": "tent",
    "phonetic": "美 [tent]",
    "pos": "n.",
    "meaning": "帐篷",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1328",
    "word": "tenth",
    "phonetic": "美 [tenθ]",
    "pos": "num.",
    "meaning": "第十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1329",
    "word": "term",
    "phonetic": "美 [tɜːrm]",
    "pos": "n.",
    "meaning": "学期;术语;条件",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "this term 这学期; in terms of 就…而言",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1330",
    "word": "terrible",
    "phonetic": "美 [ˈterəbəl]",
    "pos": "adj.",
    "meaning": "可怕的;糟糕的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "terribly (adv.) 非常;可怕地"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1331",
    "word": "test",
    "phonetic": "美 [test]",
    "pos": "n./v.",
    "meaning": "测试;考试;检验",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "take a test 参加测试; pass a test 通过考试",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1332",
    "word": "text",
    "phonetic": "美 [tekst]",
    "pos": "n.",
    "meaning": "文本;课文;短信",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "text message 短信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1333",
    "word": "than",
    "phonetic": "美 [ðæn; ðən]",
    "pos": "conj./prep.",
    "meaning": "比",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "比较级 + than"
    ],
    "usage": {
      "collocations": "more than 超过; rather than 而不是; no more than 仅仅",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1334",
    "word": "thank",
    "phonetic": "美 [θæŋk]",
    "pos": "v./n.",
    "meaning": "感谢",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "thankful (adj.) 感激的; Thanksgiving 感恩节"
    ],
    "usage": {
      "collocations": "thank you/thanks 谢谢; thanks to 多亏;由于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1335",
    "word": "that",
    "phonetic": "美 [ðæt]",
    "pos": "pron./conj./adj.",
    "meaning": "那;那个",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "that is to say 也就是说; so that 以便; that's why 那就是为什么",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1336",
    "word": "the",
    "phonetic": "美 [ðə; ði]",
    "pos": "art.",
    "meaning": "这(些);那(些)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "定冠词 the 的用法繁多: 特指/唯一/上文提过/乐器等"
    ],
    "usage": {
      "collocations": "the more…the more 越…越…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1337",
    "word": "theater",
    "phonetic": "美 [ˈθiːətər]",
    "pos": "n.",
    "meaning": "剧院;戏院",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1338",
    "word": "their",
    "phonetic": "美 [ðer]",
    "pos": "pron.",
    "meaning": "他们的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "their → theirs (名物代) → themselves (反身代词)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1339",
    "word": "them",
    "phonetic": "美 [ðem; ðəm]",
    "pos": "pron.",
    "meaning": "他们(宾格)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1340",
    "word": "themselves",
    "phonetic": "美 [ðəmˈselvz]",
    "pos": "pron.",
    "meaning": "他们自己",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "by themselves 他们自己; enjoy themselves 玩得开心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1341",
    "word": "then",
    "phonetic": "美 [ðen]",
    "pos": "adv.",
    "meaning": "然后;那么;当时",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "since then 从那时起; from then on 从那时起; now and then 偶尔",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1342",
    "word": "there",
    "phonetic": "美 [ðer]",
    "pos": "adv.",
    "meaning": "那里;在那里",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "there be 句型就近一致; 同音 their"
    ],
    "usage": {
      "collocations": "there be 有(存在); over there 在那边; here and there 到处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1343",
    "word": "these",
    "phonetic": "美 [ðiːz]",
    "pos": "pron./adj.",
    "meaning": "这些",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "this → these (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1344",
    "word": "they",
    "phonetic": "美 [ðeɪ]",
    "pos": "pron.",
    "meaning": "他们;它们",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1345",
    "word": "thick",
    "phonetic": "美 [θɪk]",
    "pos": "adj.",
    "meaning": "厚的;浓的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "反义词 thin"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1346",
    "word": "thin",
    "phonetic": "美 [θɪn]",
    "pos": "adj.",
    "meaning": "薄的;瘦的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "thin → thinner → thinnest (双写n)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1347",
    "word": "thing",
    "phonetic": "美 [θɪŋ]",
    "pos": "n.",
    "meaning": "东西;事情",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "all things considered 综上所述; for one thing 一方面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1348",
    "word": "think",
    "phonetic": "美 [θɪŋk]",
    "pos": "v.",
    "meaning": "想;认为;思考",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "think → thought → thought; thought (n.) 思想"
    ],
    "usage": {
      "collocations": "think about 考虑; think of 想起;认为; think over 仔细考虑; think up 想出",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1349",
    "word": "third",
    "phonetic": "美 [θɜːrd]",
    "pos": "num.",
    "meaning": "第三",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1350",
    "word": "thirsty",
    "phonetic": "美 [ˈθɜːrsti]",
    "pos": "adj.",
    "meaning": "口渴的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "thirst (n.) 渴"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1351",
    "word": "thirteen",
    "phonetic": "美 [ˌθɜːrˈtiːn]",
    "pos": "num.",
    "meaning": "十三",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1352",
    "word": "thirty",
    "phonetic": "美 [ˈθɜːrti]",
    "pos": "num.",
    "meaning": "三十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1353",
    "word": "this",
    "phonetic": "美 [ðɪs]",
    "pos": "pron./adj.",
    "meaning": "这;这个",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "this → these (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1354",
    "word": "those",
    "phonetic": "美 [ðoʊz]",
    "pos": "pron./adj.",
    "meaning": "那些",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "that → those (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1355",
    "word": "though",
    "phonetic": "美 [ðoʊ]",
    "pos": "conj./adv.",
    "meaning": "虽然;尽管;然而",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "though 不与 but 连用; though 可放句末表\"然而\""
    ],
    "usage": {
      "collocations": "even though 即使; as though 好像",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1356",
    "word": "thought",
    "phonetic": "美 [θɔːt]",
    "pos": "n.",
    "meaning": "想法;思想;思考",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "deep in thought 陷入沉思; on second thought 再三考虑后",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1357",
    "word": "thousand",
    "phonetic": "美 [ˈθaʊzənd]",
    "pos": "num.",
    "meaning": "千",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "thousand 与具体数字连用不加 s: two thousand"
    ],
    "usage": {
      "collocations": "thousands of 成千上万的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1358",
    "word": "three",
    "phonetic": "美 [θriː]",
    "pos": "num.",
    "meaning": "三",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "third (第3); thirteen (13); thirty (30)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1359",
    "word": "through",
    "phonetic": "美 [θruː]",
    "pos": "prep./adv.",
    "meaning": "穿过;通过;经由",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "through (内部穿过) vs. across (表面穿过)"
    ],
    "usage": {
      "collocations": "look through 浏览; go through 经历; through and through 完全地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1360",
    "word": "throw",
    "phonetic": "美 [θroʊ]",
    "pos": "v.",
    "meaning": "扔;投;抛",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "throw → threw → thrown"
    ],
    "usage": {
      "collocations": "throw away 扔掉; throw out 扔出; throw up 呕吐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1361",
    "word": "Thursday",
    "phonetic": "美 [ˈθɜːrzdeɪ]",
    "pos": "n.",
    "meaning": "星期四",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1362",
    "word": "ticket",
    "phonetic": "美 [ˈtɪkɪt]",
    "pos": "n.",
    "meaning": "票;入场券",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "buy a ticket 买票; train ticket 火车票",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1363",
    "word": "tidy",
    "phonetic": "美 [ˈtaɪdi]",
    "pos": "adj./v.",
    "meaning": "整洁的;整理",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "tidy → tidier → tidiest"
    ],
    "usage": {
      "collocations": "tidy up 整理; keep tidy 保持整洁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1364",
    "word": "tie",
    "phonetic": "美 [taɪ]",
    "pos": "n./v.",
    "meaning": "领带;系;平局",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "tie up 捆绑; tie…to 把…系到; necktie 领带",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1365",
    "word": "tiger",
    "phonetic": "美 [ˈtaɪɡər]",
    "pos": "n.",
    "meaning": "老虎",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1366",
    "word": "till",
    "phonetic": "美 [tɪl]",
    "pos": "prep./conj.",
    "meaning": "直到…为止",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "= until; till 不用于句首; 与延续性动词连用"
    ],
    "usage": {
      "collocations": "not…till/until 直到…才; from morning till night 从早到晚",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1367",
    "word": "time",
    "phonetic": "美 [taɪm]",
    "pos": "n.",
    "meaning": "时间;次数;倍",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "It's time (for sb) to do; three times 三次/三倍"
    ],
    "usage": {
      "collocations": "in time 及时; on time 按时; at times 有时; from time to time 偶尔; take one's time 慢慢来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1368",
    "word": "tiny",
    "phonetic": "美 [ˈtaɪni]",
    "pos": "adj.",
    "meaning": "极小的;微小的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "tiny → tinier → tiniest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1369",
    "word": "tired",
    "phonetic": "美 [taɪərd]",
    "pos": "adj.",
    "meaning": "疲劳的;累的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "tired (人累) vs. tiring (事令人累)"
    ],
    "usage": {
      "collocations": "be tired of 厌倦; be tired from 因…而疲劳",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1370",
    "word": "title",
    "phonetic": "美 [ˈtaɪtəl]",
    "pos": "n.",
    "meaning": "标题;头衔",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1371",
    "word": "to",
    "phonetic": "美 [tuː; tə]",
    "pos": "prep./infinitive marker",
    "meaning": "到;向;为了(不定式)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "to (介词 + doing) vs. to (不定式 + do)"
    ],
    "usage": {
      "collocations": "to be honest 说实话; to one's surprise 令人惊讶; look forward to 期待",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1372",
    "word": "today",
    "phonetic": "美 [təˈdeɪ]",
    "pos": "n./adv.",
    "meaning": "今天;如今",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "today's newspaper 今天的报纸",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1373",
    "word": "together",
    "phonetic": "美 [təˈɡeðər]",
    "pos": "adv.",
    "meaning": "一起;共同",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "together with 连同…一起; get together 聚在一起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1374",
    "word": "toilet",
    "phonetic": "美 [ˈtɔɪlɪt]",
    "pos": "n.",
    "meaning": "厕所;卫生间",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1375",
    "word": "tomato",
    "phonetic": "美 [təˈmeɪtoʊ]",
    "pos": "n.",
    "meaning": "西红柿",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "tomato → tomatoes (复数+es)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1376",
    "word": "tomorrow",
    "phonetic": "美 [təˈmɔːroʊ]",
    "pos": "n./adv.",
    "meaning": "明天",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "the day after tomorrow 后天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1377",
    "word": "ton",
    "phonetic": "美 [tʌn]",
    "pos": "n.",
    "meaning": "吨;大量",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "tons of 大量的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1378",
    "word": "tonight",
    "phonetic": "美 [təˈnaɪt]",
    "pos": "n./adv.",
    "meaning": "今晚",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1379",
    "word": "too",
    "phonetic": "美 [tuː]",
    "pos": "adv.",
    "meaning": "也;太;过于",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "too…to do (太…而不能); too + adj./adv. + (for sb) to do"
    ],
    "usage": {
      "collocations": "too…to 太…而不能; me too 我也是; too much 太多(不可数)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1380",
    "word": "tool",
    "phonetic": "美 [tuːl]",
    "pos": "n.",
    "meaning": "工具",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1381",
    "word": "tooth",
    "phonetic": "美 [tuːθ]",
    "pos": "n.",
    "meaning": "牙齿",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "tooth → teeth (复数)"
    ],
    "usage": {
      "collocations": "brush one's teeth 刷牙; toothache 牙痛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1382",
    "word": "top",
    "phonetic": "美 [tɑːp]",
    "pos": "n./adj.",
    "meaning": "顶部;最高的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "on top of 在…顶上; at the top of 在…顶部; from top to bottom 从头到尾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1383",
    "word": "total",
    "phonetic": "美 [ˈtoʊtəl]",
    "pos": "adj./n./v.",
    "meaning": "总的;总数;合计",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "totally (adv.) 完全地"
    ],
    "usage": {
      "collocations": "in total 总共; total up 合计",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1384",
    "word": "touch",
    "phonetic": "美 [tʌtʃ]",
    "pos": "v./n.",
    "meaning": "触摸;接触;感动",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "keep in touch 保持联系; get in touch with 与…取得联系; touch on 提及",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1385",
    "word": "tour",
    "phonetic": "美 [tʊr]",
    "pos": "n./v.",
    "meaning": "旅游;参观",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "tourist (n.) 游客; tourism (n.) 旅游业"
    ],
    "usage": {
      "collocations": "go on a tour 去旅游; tour guide 导游",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1386",
    "word": "tourist",
    "phonetic": "美 [ˈtʊrɪst]",
    "pos": "n.",
    "meaning": "游客",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1387",
    "word": "toward(s)",
    "phonetic": "美 [təˈwɔːrd(z)]",
    "pos": "prep.",
    "meaning": "朝向;对于",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "walk toward 走向; attitude toward 对…的态度",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1388",
    "word": "tower",
    "phonetic": "美 [ˈtaʊər]",
    "pos": "n.",
    "meaning": "塔;高楼",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1389",
    "word": "town",
    "phonetic": "美 [taʊn]",
    "pos": "n.",
    "meaning": "城镇;镇",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in town 在城里; home town 家乡",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1390",
    "word": "toy",
    "phonetic": "美 [tɔɪ]",
    "pos": "n.",
    "meaning": "玩具",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1391",
    "word": "trade",
    "phonetic": "美 [treɪd]",
    "pos": "n./v.",
    "meaning": "贸易;行业;交易",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "international trade 国际贸易; trade with 与…交易",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1392",
    "word": "tradition",
    "phonetic": "美 [trəˈdɪʃən]",
    "pos": "n.",
    "meaning": "传统",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "traditional (adj.) 传统的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1393",
    "word": "traffic",
    "phonetic": "美 [ˈtræfɪk]",
    "pos": "n.",
    "meaning": "交通;车流量",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "traffic jam 交通堵塞; traffic lights 交通灯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1394",
    "word": "train",
    "phonetic": "美 [treɪn]",
    "pos": "n./v.",
    "meaning": "火车;训练;培训",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "training (n.) 训练; trainer (n.) 教练"
    ],
    "usage": {
      "collocations": "by train 乘火车; train for 为…训练",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1395",
    "word": "training",
    "phonetic": "美 [ˈtreɪnɪŋ]",
    "pos": "n.",
    "meaning": "训练;培训",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1396",
    "word": "translate",
    "phonetic": "美 [trænsˈleɪt]",
    "pos": "v.",
    "meaning": "翻译",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "搭配 into 不是 to！translation (n.); translator (n.)"
    ],
    "usage": {
      "collocations": "translate A into B 把A翻译成B",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1397",
    "word": "travel",
    "phonetic": "美 [ˈtrævəl]",
    "pos": "v./n.",
    "meaning": "旅行;行进",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "过去式 traveled/travelled"
    ],
    "usage": {
      "collocations": "go traveling 去旅行; travel around 周游",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1398",
    "word": "treasure",
    "phonetic": "美 [ˈtreʒər]",
    "pos": "n./v.",
    "meaning": "财富;珍宝;珍视",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1399",
    "word": "treat",
    "phonetic": "美 [triːt]",
    "pos": "v./n.",
    "meaning": "对待;治疗;款待",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "treatment (n.) 治疗;对待"
    ],
    "usage": {
      "collocations": "treat sb as 把某人当作; treat sb to 请某人吃",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1400",
    "word": "tree",
    "phonetic": "美 [triː]",
    "pos": "n.",
    "meaning": "树",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1401",
    "word": "trip",
    "phonetic": "美 [trɪp]",
    "pos": "n.",
    "meaning": "旅行;行程",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "trip (短途) vs. journey (长途) vs. travel (泛指)"
    ],
    "usage": {
      "collocations": "go on a trip 去旅行; school trip 学校旅行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1402",
    "word": "trouble",
    "phonetic": "美 [ˈtrʌbəl]",
    "pos": "n./v.",
    "meaning": "麻烦;困难;烦恼",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in trouble 处于困境; have trouble (in) doing 做…有困难; get into trouble 惹麻烦",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1403",
    "word": "truck",
    "phonetic": "美 [trʌk]",
    "pos": "n.",
    "meaning": "卡车",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1404",
    "word": "true",
    "phonetic": "美 [truː]",
    "pos": "adj.",
    "meaning": "真实的;真正的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "truly (adv.) 真正地; truth (n.) 真相"
    ],
    "usage": {
      "collocations": "come true 实现; true love 真爱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1405",
    "word": "trust",
    "phonetic": "美 [trʌst]",
    "pos": "v./n.",
    "meaning": "信任;相信",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "trust sb to do 相信某人会做; trust in 信任",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1406",
    "word": "truth",
    "phonetic": "美 [truːθ]",
    "pos": "n.",
    "meaning": "真相;事实",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "tell the truth 说实话; in truth 事实上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1407",
    "word": "try",
    "phonetic": "美 [traɪ]",
    "pos": "v./n.",
    "meaning": "尝试;努力;审判",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "try to do (努力做) vs. try doing (尝试做); try → tried → tried"
    ],
    "usage": {
      "collocations": "try on 试穿; try out 试验; try one's best 尽最大努力; try to do 努力做; try doing 尝试做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1408",
    "word": "Tuesday",
    "phonetic": "美 [ˈtuːzdeɪ]",
    "pos": "n.",
    "meaning": "星期二",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1409",
    "word": "turn",
    "phonetic": "美 [tɜːrn]",
    "pos": "v./n.",
    "meaning": "转动;变成;轮流",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "turn + adj. 变成; in turn 轮流;反过来"
    ],
    "usage": {
      "collocations": "turn on 打开; turn off 关掉; turn up 调大;出现; turn down 调小;拒绝; turn into 变成; take turns 轮流",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1410",
    "word": "twelfth",
    "phonetic": "美 [twelfθ]",
    "pos": "num.",
    "meaning": "第十二",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1411",
    "word": "twelve",
    "phonetic": "美 [twelv]",
    "pos": "num.",
    "meaning": "十二",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1412",
    "word": "twentieth",
    "phonetic": "美 [ˈtwentiəθ]",
    "pos": "num.",
    "meaning": "第二十",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1413",
    "word": "twenty",
    "phonetic": "美 [ˈtwenti]",
    "pos": "num.",
    "meaning": "二十",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1414",
    "word": "twice",
    "phonetic": "美 [twaɪs]",
    "pos": "adv.",
    "meaning": "两次;两倍",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "think twice 三思; twice a week 一周两次",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1415",
    "word": "two",
    "phonetic": "美 [tuː]",
    "pos": "num.",
    "meaning": "二",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "second (第2); twelfth (第12); twentieth (第20)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1416",
    "word": "type",
    "phonetic": "美 [taɪp]",
    "pos": "n./v.",
    "meaning": "类型;打字",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1417",
    "word": "ugly",
    "phonetic": "美 [ˈʌɡli]",
    "pos": "adj.",
    "meaning": "丑陋的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ugly → uglier → ugliest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1418",
    "word": "umbrella",
    "phonetic": "美 [ʌmˈbrelə]",
    "pos": "n.",
    "meaning": "雨伞",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1419",
    "word": "uncle",
    "phonetic": "美 [ˈʌŋkəl]",
    "pos": "n.",
    "meaning": "叔叔;伯伯;舅舅",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1420",
    "word": "under",
    "phonetic": "美 [ˈʌndər]",
    "pos": "prep./adv.",
    "meaning": "在…下面;低于",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "under (正下方) vs. below (低于某一水平)"
    ],
    "usage": {
      "collocations": "under control 在控制中; under way 在进行中; under repair 在修理中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1421",
    "word": "understand",
    "phonetic": "美 [ˌʌndərˈstænd]",
    "pos": "v.",
    "meaning": "理解;明白",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "understand → understood → understood; understanding (n.)"
    ],
    "usage": {
      "collocations": "make oneself understood 让人理解自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1422",
    "word": "university",
    "phonetic": "美 [ˌjuːnɪˈvɜːrsəti]",
    "pos": "n.",
    "meaning": "大学",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "university → universities (复数)"
    ],
    "usage": {
      "collocations": "go to university 上大学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1423",
    "word": "unless",
    "phonetic": "美 [ənˈles]",
    "pos": "conj.",
    "meaning": "除非;如果不",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "unless = if…not; 从句用一般现在表将来"
    ],
    "usage": {
      "collocations": "not…unless 除非…才; unless otherwise stated 除非另有说明",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1424",
    "word": "until",
    "phonetic": "美 [ənˈtɪl]",
    "pos": "prep./conj.",
    "meaning": "直到…为止",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "until 用于句首; till vs. until; 与延续性动词连用"
    ],
    "usage": {
      "collocations": "not…until 直到…才",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1425",
    "word": "up",
    "phonetic": "美 [ʌp]",
    "pos": "adv./prep.",
    "meaning": "向上;起来;完毕",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "get up 起床; give up 放弃; pick up 捡起; put up 搭建; cheer up 振作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1426",
    "word": "upon",
    "phonetic": "美 [əˈpɑːn]",
    "pos": "prep.",
    "meaning": "在…上面;一…就",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "upon 比 on 更正式; upon doing 一…就"
    ],
    "usage": {
      "collocations": "once upon a time 从前; depend upon 依赖",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1427",
    "word": "us",
    "phonetic": "美 [ʌs; əs]",
    "pos": "pron.",
    "meaning": "我们(宾格)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1428",
    "word": "use",
    "phonetic": "美 [juːz(v.); juːs(n.)]",
    "pos": "v./n.",
    "meaning": "使用;用途",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "be used to doing 习惯做; used to do 过去常做; be used to do 被用来做"
    ],
    "usage": {
      "collocations": "make use of 利用; use up 用完; be used to do 被用来做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1429",
    "word": "used",
    "phonetic": "美 [juːzd]",
    "pos": "adj.",
    "meaning": "习惯于;用过的;二手的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "used to do 过去常做; be/get used to doing 习惯做; a used car 二手车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1430",
    "word": "useful",
    "phonetic": "美 [ˈjuːsfəl]",
    "pos": "adj.",
    "meaning": "有用的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "反义词 useless"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1431",
    "word": "usual",
    "phonetic": "美 [ˈjuːʒuəl]",
    "pos": "adj.",
    "meaning": "通常的;平常的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "usually (adv.) 通常"
    ],
    "usage": {
      "collocations": "as usual 像往常一样; than usual 比平常",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1432",
    "word": "usually",
    "phonetic": "美 [ˈjuːʒuəli]",
    "pos": "adv.",
    "meaning": "通常",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "频率副词: be后实前"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1433",
    "word": "vacation",
    "phonetic": "美 [veɪˈkeɪʃən]",
    "pos": "n.",
    "meaning": "假期;休假",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "= holiday (英)"
    ],
    "usage": {
      "collocations": "on vacation 在度假; summer vacation 暑假",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1434",
    "word": "value",
    "phonetic": "美 [ˈvæljuː]",
    "pos": "n./v.",
    "meaning": "价值;重视;价值观",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "valuable (有价值的) vs. valueless (无价值的) vs. invaluable (无价的)"
    ],
    "usage": {
      "collocations": "the value of …的价值; value friendship 珍视友谊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1435",
    "word": "vegetable",
    "phonetic": "美 [ˈvedʒtəbəl]",
    "pos": "n.",
    "meaning": "蔬菜",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1436",
    "word": "very",
    "phonetic": "美 [ˈveri]",
    "pos": "adv./adj.",
    "meaning": "非常;很;正是",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "very much 非常; very good 很好; the very same 正是那个",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1437",
    "word": "victory",
    "phonetic": "美 [ˈvɪktəri]",
    "pos": "n.",
    "meaning": "胜利",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "victory → victories (复数); victorious (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1438",
    "word": "video",
    "phonetic": "美 [ˈvɪdioʊ]",
    "pos": "n.",
    "meaning": "录像;视频",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "video game 电子游戏",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1439",
    "word": "view",
    "phonetic": "美 [vjuː]",
    "pos": "n.",
    "meaning": "视野;观点;看法",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in one's view 在某人看来; point of view 观点; in view of 鉴于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1440",
    "word": "village",
    "phonetic": "美 [ˈvɪlɪdʒ]",
    "pos": "n.",
    "meaning": "村庄",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "villager (n.) 村民"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1441",
    "word": "violin",
    "phonetic": "美 [ˌvaɪəˈlɪn]",
    "pos": "n.",
    "meaning": "小提琴",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "violinist (n.) 小提琴家"
    ],
    "usage": {
      "collocations": "play the violin 拉小提琴",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1442",
    "word": "visit",
    "phonetic": "美 [ˈvɪzɪt]",
    "pos": "v./n.",
    "meaning": "参观;访问;拜访",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "visitor (n.) 游客;参观者"
    ],
    "usage": {
      "collocations": "pay a visit to 拜访; visit a museum 参观博物馆",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1443",
    "word": "visitor",
    "phonetic": "美 [ˈvɪzɪtər]",
    "pos": "n.",
    "meaning": "游客;参观者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1444",
    "word": "voice",
    "phonetic": "美 [vɔɪs]",
    "pos": "n.",
    "meaning": "嗓音;声音",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "voice (嗓音) vs. sound (声音通称) vs. noise (噪音)"
    ],
    "usage": {
      "collocations": "in a low voice 低声地; voice mail 语音信箱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1445",
    "word": "volleyball",
    "phonetic": "美 [ˈvɑːlibɔːl]",
    "pos": "n.",
    "meaning": "排球",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "play volleyball 打排球",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1446",
    "word": "volunteer",
    "phonetic": "美 [ˌvɑːlənˈtɪr]",
    "pos": "n./v.",
    "meaning": "志愿者;自愿做",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "voluntary (adj.) 自愿的"
    ],
    "usage": {
      "collocations": "volunteer to do 自愿做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1447",
    "word": "wait",
    "phonetic": "美 [weɪt]",
    "pos": "v.",
    "meaning": "等待;等候",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "waiter (n.) 男服务员; waitress (n.) 女服务员"
    ],
    "usage": {
      "collocations": "wait for 等候; wait to do 等着做; can't wait to do 迫不及待做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1448",
    "word": "wake",
    "phonetic": "美 [weɪk]",
    "pos": "v.",
    "meaning": "醒;醒来;弄醒",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wake → woke → woken; awake (adj.) 醒着的"
    ],
    "usage": {
      "collocations": "wake up 醒来;叫醒",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1449",
    "word": "walk",
    "phonetic": "美 [wɔːk]",
    "pos": "v./n.",
    "meaning": "走;步行;散步",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "go for a walk 去散步; walk away 走开; walk up to 走近",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1450",
    "word": "wall",
    "phonetic": "美 [wɔːl]",
    "pos": "n.",
    "meaning": "墙;墙壁",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "on the wall 在墙上; the Great Wall 长城",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1451",
    "word": "want",
    "phonetic": "美 [wɑːnt]",
    "pos": "v.",
    "meaning": "想要;需要",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "want to do 想做; want sb to do 想要某人做; want doing = need doing 需要被做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1452",
    "word": "war",
    "phonetic": "美 [wɔːr]",
    "pos": "n.",
    "meaning": "战争",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 wore (wear过去式)"
    ],
    "usage": {
      "collocations": "world war 世界大战",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1453",
    "word": "warm",
    "phonetic": "美 [wɔːrm]",
    "pos": "adj.",
    "meaning": "温暖的;热情的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "warmth (n.) 温暖"
    ],
    "usage": {
      "collocations": "warm up 热身;变暖",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1454",
    "word": "warn",
    "phonetic": "美 [wɔːrn]",
    "pos": "v.",
    "meaning": "警告;提醒",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "warn sb of/about sth 警告某人某事; warn sb not to do 警告某人不做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1455",
    "word": "wash",
    "phonetic": "美 [wɑːʃ]",
    "pos": "v./n.",
    "meaning": "洗;洗涤",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "wash up 洗餐具; wash away 冲走; do the washing 洗衣服",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1456",
    "word": "waste",
    "phonetic": "美 [weɪst]",
    "pos": "v./n.",
    "meaning": "浪费;废物",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "waste time (in) doing 浪费时间做; a waste of 浪费…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1457",
    "word": "watch",
    "phonetic": "美 [wɑːtʃ]",
    "pos": "n./v.",
    "meaning": "手表;观看;注视",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "watch sb do (全过程) vs. watch sb doing (正在做)"
    ],
    "usage": {
      "collocations": "watch TV 看电视; watch out 当心; keep a close watch on 密切注意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1458",
    "word": "water",
    "phonetic": "美 [ˈwɔːtər]",
    "pos": "n./v.",
    "meaning": "水;浇水",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "by water 经水路; underwater 水下的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1459",
    "word": "watermelon",
    "phonetic": "美 [ˈwɔːtərmelən]",
    "pos": "n.",
    "meaning": "西瓜",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1460",
    "word": "way",
    "phonetic": "美 [weɪ]",
    "pos": "n.",
    "meaning": "路;方法;方式;方面",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "the way to do/of doing; way of life 生活方式"
    ],
    "usage": {
      "collocations": "in this way 用这种方法; by the way 顺便说; on the way to 在去…的路上; in a way 在某种程度上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1461",
    "word": "we",
    "phonetic": "美 [wiː]",
    "pos": "pron.",
    "meaning": "我们",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "we → us → our → ours → ourselves"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1462",
    "word": "weak",
    "phonetic": "美 [wiːk]",
    "pos": "adj.",
    "meaning": "弱的;虚弱的;淡的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "weakness (n.) 弱点; weaken (v.) 变弱;同音 week"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1463",
    "word": "wealth",
    "phonetic": "美 [welθ]",
    "pos": "n.",
    "meaning": "财富;富有",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "wealthy (adj.) 富有的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1464",
    "word": "wear",
    "phonetic": "美 [wer]",
    "pos": "v.",
    "meaning": "穿戴;磨损;面带",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wear → wore → worn; 状态动词 vs. put on (动作); 同音 where"
    ],
    "usage": {
      "collocations": "wear out 穿破;耗尽; wear glasses 戴眼镜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1465",
    "word": "weather",
    "phonetic": "美 [ˈweðər]",
    "pos": "n.",
    "meaning": "天气",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "weather vs. whether (是否) 同音辨析"
    ],
    "usage": {
      "collocations": "weather report/forecast 天气预报",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1466",
    "word": "website",
    "phonetic": "美 [ˈwebsaɪt]",
    "pos": "n.",
    "meaning": "网站",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1467",
    "word": "Wednesday",
    "phonetic": "美 [ˈwenzdeɪ]",
    "pos": "n.",
    "meaning": "星期三",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "字母 d 不发音"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1468",
    "word": "week",
    "phonetic": "美 [wiːk]",
    "pos": "n.",
    "meaning": "周;星期",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "同音 weak"
    ],
    "usage": {
      "collocations": "every week 每周; weekend 周末",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1469",
    "word": "weekday",
    "phonetic": "美 [ˈwiːkdeɪ]",
    "pos": "n.",
    "meaning": "工作日",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "on weekdays 在工作日",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1470",
    "word": "weekend",
    "phonetic": "美 [ˈwiːkend]",
    "pos": "n.",
    "meaning": "周末",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "at/on the weekend 在周末",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1471",
    "word": "weigh",
    "phonetic": "美 [weɪ]",
    "pos": "v.",
    "meaning": "称重量;重…",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "weight (n.) 重量"
    ],
    "usage": {
      "collocations": "weigh oneself 称体重",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1472",
    "word": "weight",
    "phonetic": "美 [weɪt]",
    "pos": "n.",
    "meaning": "重量;体重",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "同音 wait"
    ],
    "usage": {
      "collocations": "lose weight 减肥; put on weight 增重",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1473",
    "word": "welcome",
    "phonetic": "美 [ˈwelkəm]",
    "pos": "adj./v./n.",
    "meaning": "欢迎;受欢迎的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "You're welcome 不客气; welcome to 欢迎来到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1474",
    "word": "well",
    "phonetic": "美 [wel]",
    "pos": "adv./adj./n.",
    "meaning": "好地;健康的;井",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "well (adv.) → better → best"
    ],
    "usage": {
      "collocations": "as well 也; as well as 以及; do well in 在…做得好; well-known 著名的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1475",
    "word": "west",
    "phonetic": "美 [west]",
    "pos": "n./adj./adv.",
    "meaning": "西方;西方的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "western (adj.) 西方的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1476",
    "word": "wet",
    "phonetic": "美 [wet]",
    "pos": "adj.",
    "meaning": "湿的;潮湿的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wet → wetter → wettest"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1477",
    "word": "what",
    "phonetic": "美 [wɑːt]",
    "pos": "pron./adj.",
    "meaning": "什么",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "what about …怎么样; what for 为什么; what if 如果…会怎样",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1478",
    "word": "wheat",
    "phonetic": "美 [wiːt]",
    "pos": "n.",
    "meaning": "小麦",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1479",
    "word": "wheel",
    "phonetic": "美 [wiːl]",
    "pos": "n.",
    "meaning": "轮子;方向盘",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1480",
    "word": "when",
    "phonetic": "美 [wen]",
    "pos": "adv./conj.",
    "meaning": "什么时候;当…时",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "when 引导从句用主将从现"
    ],
    "usage": {
      "collocations": "when it comes to 当提到…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1481",
    "word": "whenever",
    "phonetic": "美 [wenˈevər]",
    "pos": "conj./adv.",
    "meaning": "无论何时;每当",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1482",
    "word": "where",
    "phonetic": "美 [wer]",
    "pos": "adv./conj.",
    "meaning": "哪里;在哪里",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "同音 wear"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1483",
    "word": "whether",
    "phonetic": "美 [ˈweðər]",
    "pos": "conj.",
    "meaning": "是否",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "whether 可与 or not 连用; if 不能; 同音 weather"
    ],
    "usage": {
      "collocations": "whether…or 无论是…还是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1484",
    "word": "which",
    "phonetic": "美 [wɪtʃ]",
    "pos": "pron./adj.",
    "meaning": "哪个;哪一个",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in which case 在那种情况下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1485",
    "word": "while",
    "phonetic": "美 [waɪl]",
    "pos": "conj./n.",
    "meaning": "当…时;而;一会儿",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "while + 持续性动词; when + 瞬间/持续性动词"
    ],
    "usage": {
      "collocations": "after a while 过了一会儿; once in a while 偶尔",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1486",
    "word": "white",
    "phonetic": "美 [waɪt]",
    "pos": "adj./n.",
    "meaning": "白色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1487",
    "word": "who",
    "phonetic": "美 [huː]",
    "pos": "pron.",
    "meaning": "谁",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1488",
    "word": "whole",
    "phonetic": "美 [hoʊl]",
    "pos": "adj./n.",
    "meaning": "整个的;全部的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "whole 放在限定词后: the whole class; 同音 hole"
    ],
    "usage": {
      "collocations": "as a whole 总体上; on the whole 总的来说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1489",
    "word": "whom",
    "phonetic": "美 [huːm]",
    "pos": "pron.",
    "meaning": "谁(宾格)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "whom 用于介词后: to whom; 口语中常用 who 代替"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1490",
    "word": "whose",
    "phonetic": "美 [huːz]",
    "pos": "pron.",
    "meaning": "谁的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1491",
    "word": "why",
    "phonetic": "美 [waɪ]",
    "pos": "adv.",
    "meaning": "为什么",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "why not + 动词原形 (表建议)"
    ],
    "usage": {
      "collocations": "why not do 为什么不做; That's why … 那就是为什么…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1492",
    "word": "wide",
    "phonetic": "美 [waɪd]",
    "pos": "adj./adv.",
    "meaning": "宽的;广泛的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "widely (adv.) 广泛地; width (n.) 宽度"
    ],
    "usage": {
      "collocations": "wide open 大开; far and wide 到处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1493",
    "word": "wife",
    "phonetic": "美 [waɪf]",
    "pos": "n.",
    "meaning": "妻子",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wife → wives (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1494",
    "word": "wild",
    "phonetic": "美 [waɪld]",
    "pos": "adj.",
    "meaning": "野生的;疯狂的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in the wild 在野外; be wild about 对…狂热",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1495",
    "word": "will",
    "phonetic": "美 [wɪl]",
    "pos": "modal./n.",
    "meaning": "将;愿意;意志",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "will → would; 一般将来时 will + 动词原形"
    ],
    "usage": {
      "collocations": "will do 将要做; will power 意志力; at will 随意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1496",
    "word": "win",
    "phonetic": "美 [wɪn]",
    "pos": "v.",
    "meaning": "赢得;获胜",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "win → won → won; win (赢得比赛/奖品) vs. beat (打败对手)"
    ],
    "usage": {
      "collocations": "win a prize 获奖; win over 说服;争取",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1497",
    "word": "wind",
    "phonetic": "美 [wɪnd]",
    "pos": "n.",
    "meaning": "风",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "windy (adj.) 有风的; wind /waɪnd/ (v.) 缠绕"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1498",
    "word": "window",
    "phonetic": "美 [ˈwɪndoʊ]",
    "pos": "n.",
    "meaning": "窗户",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1499",
    "word": "wine",
    "phonetic": "美 [waɪn]",
    "pos": "n.",
    "meaning": "葡萄酒",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1500",
    "word": "winter",
    "phonetic": "美 [ˈwɪntər]",
    "pos": "n.",
    "meaning": "冬天",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "in winter 在冬天; winter holiday 寒假",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1501",
    "word": "wise",
    "phonetic": "美 [waɪz]",
    "pos": "adj.",
    "meaning": "明智的;聪明的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wisely (adv.); wisdom (n.) 智慧"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1502",
    "word": "wish",
    "phonetic": "美 [wɪʃ]",
    "pos": "v./n.",
    "meaning": "希望;祝愿;愿望",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wish + 虚拟语气 (与事实相反): wish I were…"
    ],
    "usage": {
      "collocations": "wish to do 希望做; wish sb to do 希望某人做; make a wish 许愿; Best wishes! 祝福你！",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1503",
    "word": "with",
    "phonetic": "美 [wɪð; wɪθ]",
    "pos": "prep.",
    "meaning": "和;用;带有;随着",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "大量固定搭配; with + n. + 宾补 (with the door open)"
    ],
    "usage": {
      "collocations": "with the help of 在…帮助下; with pleasure 乐意效劳; agree with 同意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1504",
    "word": "without",
    "phonetic": "美 [wɪˈðaʊt]",
    "pos": "prep.",
    "meaning": "没有;不;无",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "without + n./doing; 同义 lacking"
    ],
    "usage": {
      "collocations": "without doubt 毫无疑问; do without 没有…也行; without doing 没有做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1505",
    "word": "woman",
    "phonetic": "美 [ˈwʊmən]",
    "pos": "n.",
    "meaning": "女人;妇女",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "woman → women /ˈwɪmɪn/ (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1506",
    "word": "wonder",
    "phonetic": "美 [ˈwʌndər]",
    "pos": "v./n.",
    "meaning": "想知道;奇迹;惊奇",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "wonderful (adj.) 精彩的; wonder + 疑问词 + to do"
    ],
    "usage": {
      "collocations": "wonder if/whether 想知道是否; no wonder 难怪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1507",
    "word": "wonderful",
    "phonetic": "美 [ˈwʌndərfəl]",
    "pos": "adj.",
    "meaning": "精彩的;极好的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1508",
    "word": "wood",
    "phonetic": "美 [wʊd]",
    "pos": "n.",
    "meaning": "木头;木材;树林",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "wooden (adj.) 木制的; 同音 would"
    ],
    "usage": {
      "collocations": "in the woods 在树林里",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1509",
    "word": "word",
    "phonetic": "美 [wɜːrd]",
    "pos": "n.",
    "meaning": "单词;词;话语",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "in a word 总之; in other words 换句话说; have a word with 与…说话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1510",
    "word": "work",
    "phonetic": "美 [wɜːrk]",
    "pos": "v./n.",
    "meaning": "工作;运转;作品",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "work (不可数) vs. job (可数); works (作品/工厂)"
    ],
    "usage": {
      "collocations": "work out 解决;计算出;锻炼; work on 从事于; at work 在工作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1511",
    "word": "worker",
    "phonetic": "美 [ˈwɜːrkər]",
    "pos": "n.",
    "meaning": "工人;工作者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1512",
    "word": "world",
    "phonetic": "美 [wɜːrld]",
    "pos": "n.",
    "meaning": "世界",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "all over the world 全世界; in the world 在世界上;到底",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1513",
    "word": "worried",
    "phonetic": "美 [ˈwɜːrid]",
    "pos": "adj.",
    "meaning": "担心的;焦虑的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "be worried about 担心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1514",
    "word": "worry",
    "phonetic": "美 [ˈwɜːri]",
    "pos": "v./n.",
    "meaning": "担心;烦恼",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "worry → worried → worried; worrying (adj.) 令人担心的"
    ],
    "usage": {
      "collocations": "worry about 担心; Don't worry 别担心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1515",
    "word": "worth",
    "phonetic": "美 [wɜːrθ]",
    "pos": "adj./n.",
    "meaning": "值得的;价值",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "worth doing (主动表被动); worthy of being done"
    ],
    "usage": {
      "collocations": "be worth doing 值得做; be worth it 值得",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1516",
    "word": "would",
    "phonetic": "美 [wʊd]",
    "pos": "modal.",
    "meaning": "将会;愿意;过去常常",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "would (will过去式/委婉); would like = want; 同音 wood"
    ],
    "usage": {
      "collocations": "would like to do 想要做; would rather do 宁愿做; would you please…? 请您…好吗？",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1517",
    "word": "write",
    "phonetic": "美 [raɪt]",
    "pos": "v.",
    "meaning": "写;写作",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "write → wrote → written; writer (n.) 作家; 同音 right"
    ],
    "usage": {
      "collocations": "write down 写下; write to sb 给某人写信; write back 回信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1518",
    "word": "wrong",
    "phonetic": "美 [rɔːŋ]",
    "pos": "adj./adv.",
    "meaning": "错误的;有毛病的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "字母 w 不发音; wrongly (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1519",
    "word": "yard",
    "phonetic": "美 [jɑːrd]",
    "pos": "n.",
    "meaning": "院子;码(长度单位)",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1520",
    "word": "year",
    "phonetic": "美 [jɪr]",
    "pos": "n.",
    "meaning": "年;岁",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "all year round 全年; year after year 年复一年; this year 今年",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1521",
    "word": "yellow",
    "phonetic": "美 [ˈjeloʊ]",
    "pos": "adj./n.",
    "meaning": "黄色的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1522",
    "word": "yes",
    "phonetic": "美 [jes]",
    "pos": "adv./interj.",
    "meaning": "是的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1523",
    "word": "yesterday",
    "phonetic": "美 [ˈjestərdeɪ]",
    "pos": "n./adv.",
    "meaning": "昨天",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "the day before yesterday 前天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1524",
    "word": "yet",
    "phonetic": "美 [jet]",
    "pos": "adv./conj.",
    "meaning": "还;已经(疑问/否定);然而",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "yet 用于否定/疑问句末; yet (conj.) = but"
    ],
    "usage": {
      "collocations": "not yet 还没有; have yet to do 还没有做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1525",
    "word": "you",
    "phonetic": "美 [juː]",
    "pos": "pron.",
    "meaning": "你;你们",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "you → you → your → yours → yourself/yourselves"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1526",
    "word": "young",
    "phonetic": "美 [jʌŋ]",
    "pos": "adj.",
    "meaning": "年轻的;幼小的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "young → younger → youngest; youth (n.) 青春/年轻人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1527",
    "word": "your",
    "phonetic": "美 [jʊr; jɔːr]",
    "pos": "pron.",
    "meaning": "你的;你们的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "your → yours (名物代) → yourself (反身代词)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1528",
    "word": "yours",
    "phonetic": "美 [jʊrz; jɔːrz]",
    "pos": "pron.",
    "meaning": "你的(名物代);你们的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1529",
    "word": "yourself",
    "phonetic": "美 [jʊrˈself]",
    "pos": "pron.",
    "meaning": "你自己",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "help yourself 请自便; by yourself 你自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1530",
    "word": "yourselves",
    "phonetic": "美 [jʊrˈselvz]",
    "pos": "pron.",
    "meaning": "你们自己",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "help yourselves 请自便(对多人); enjoy yourselves 玩得开心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1531",
    "word": "zero",
    "phonetic": "美 [ˈzɪroʊ]",
    "pos": "num./n.",
    "meaning": "零",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "zero → zeros/zeroes (复数)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1532",
    "word": "zoo",
    "phonetic": "美 [zuː]",
    "pos": "n.",
    "meaning": "动物园",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "go to the zoo 去动物园",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1533",
    "word": "zone",
    "phonetic": "美 [zoʊn]",
    "pos": "n.",
    "meaning": "区域;地带",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "time zone 时区; comfort zone 舒适区",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1534",
    "word": "zebra",
    "phonetic": "美 [ˈziːbrə]",
    "pos": "n.",
    "meaning": "斑马",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1535",
    "word": "affect",
    "phonetic": "美 [əˈfekt]",
    "pos": "vt.",
    "meaning": "影响;感动;(疾病)侵袭",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "affect (v. 影响) vs. effect (n. 效果); have an effect on = affect"
    ],
    "usage": {
      "collocations": "be affected by 受…影响; affect sb deeply 深深影响某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1536",
    "word": "agreement",
    "phonetic": "美 [əˈɡriːmənt]",
    "pos": "n.",
    "meaning": "协定;协议;同意",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "agree (v.) → agreement (n.); 反义词 disagreement"
    ],
    "usage": {
      "collocations": "reach an agreement 达成协议; sign an agreement 签署协议; in agreement with 与…一致",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1537",
    "word": "ambulance",
    "phonetic": "美 [ˈæmbjələns]",
    "pos": "n.",
    "meaning": "救护车",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "call an ambulance 叫救护车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1538",
    "word": "amount",
    "phonetic": "美 [əˈmaʊnt]",
    "pos": "n.",
    "meaning": "总数;数量;总和",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "amount of + 不可数名词; number of + 可数名词"
    ],
    "usage": {
      "collocations": "a large amount of 大量的(+不可数名词); amount to 总计为;等同于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1539",
    "word": "appearance",
    "phonetic": "美 [əˈpɪrəns]",
    "pos": "n.",
    "meaning": "外貌;外观;出现;露面",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "appear (v.) → appearance (n.) → apparent (adj.)"
    ],
    "usage": {
      "collocations": "judge by appearance 以貌取人; make an appearance 露面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1540",
    "word": "application",
    "phonetic": "美 [ˌæplɪˈkeɪʃən]",
    "pos": "n.",
    "meaning": "请求;申请;应用;施用",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "apply (v.) → application (n.) → applicant (n. 申请人)"
    ],
    "usage": {
      "collocations": "application form 申请表; job application 求职申请",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1541",
    "word": "ashamed",
    "phonetic": "美 [əˈʃeɪmd]",
    "pos": "adj.",
    "meaning": "羞愧的;惭愧的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "ashamed (羞愧的，人作主语) vs. shameful (可耻的，物作主语)"
    ],
    "usage": {
      "collocations": "be ashamed of 为…感到羞愧; feel ashamed 感到惭愧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1542",
    "word": "athletic",
    "phonetic": "美 [æθˈletɪk]",
    "pos": "adj.",
    "meaning": "运动的;竞技的;健壮的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "athlete (n.) 运动员; athletics (n.) 体育运动"
    ],
    "usage": {
      "collocations": "athletic ability 运动能力; athletic meeting 运动会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1543",
    "word": "average",
    "phonetic": "美 [ˈævərɪdʒ]",
    "pos": "n./adj.",
    "meaning": "平均数;平均的;普通的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "average (平均的) vs. ordinary (普通的)"
    ],
    "usage": {
      "collocations": "on average 平均; above/below average 高于/低于平均水平",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1544",
    "word": "backward",
    "phonetic": "美 [ˈbækwərd]",
    "pos": "adj./adv.",
    "meaning": "向后的;反向的;相反地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "backward (向后) ↔ forward (向前); backwards (adv.)"
    ],
    "usage": {
      "collocations": "backward and forward 来回地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1545",
    "word": "battle",
    "phonetic": "美 [ˈbætəl]",
    "pos": "n./vi.",
    "meaning": "战役;斗争;作战",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "battle (战役) vs. war (战争)"
    ],
    "usage": {
      "collocations": "in battle 在战斗中; fight a battle 打一场仗",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1546",
    "word": "benefit",
    "phonetic": "美 [ˈbenɪfɪt]",
    "pos": "n./vt./vi.",
    "meaning": "利益;好处;有益于;受益",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "benefit → beneficial (adj.) 有益的; 反义词 harm"
    ],
    "usage": {
      "collocations": "benefit from 从…中受益; for the benefit of 为了…的利益",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1547",
    "word": "blame",
    "phonetic": "美 [bleɪm]",
    "pos": "vt./n.",
    "meaning": "责备;把…归咎于;责任",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "blame 用主动表被动: be to blame"
    ],
    "usage": {
      "collocations": "blame sb for sth 因某事责备某人; be to blame 应受责备; take the blame 承担责任",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1548",
    "word": "bomb",
    "phonetic": "美 [bɑːm]",
    "pos": "v./n.",
    "meaning": "轰炸;炸弹",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "bomb → bomber (n. 轰炸机)"
    ],
    "usage": {
      "collocations": "drop a bomb 投炸弹; time bomb 定时炸弹",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1549",
    "word": "bother",
    "phonetic": "美 [ˈbɑːðər]",
    "pos": "v.",
    "meaning": "打扰;烦恼;费心",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "bother (v.) → bothersome (adj.)"
    ],
    "usage": {
      "collocations": "bother to do 费心去做; bother sb with sth 用某事打扰某人; don't bother 别费心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1550",
    "word": "bully",
    "phonetic": "美 [ˈbʊli]",
    "pos": "n./v.",
    "meaning": "欺负;欺凌者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "bullying (n.) 欺凌行为"
    ],
    "usage": {
      "collocations": "bully sb into doing 胁迫某人做; school bully 校园欺凌",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1551",
    "word": "cage",
    "phonetic": "美 [keɪdʒ]",
    "pos": "n.",
    "meaning": "笼;鸟笼;囚笼",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "bird cage 鸟笼; put in a cage 关进笼子",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1552",
    "word": "cancer",
    "phonetic": "美 [ˈkænsər]",
    "pos": "n.",
    "meaning": "癌;癌症",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "lung cancer 肺癌; cancer patient 癌症患者",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1553",
    "word": "casual",
    "phonetic": "美 [ˈkæʒuəl]",
    "pos": "adj.",
    "meaning": "偶然的;随便的;非正式的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "casual → casually (adv.) → casualness (n.)"
    ],
    "usage": {
      "collocations": "casual clothes 便装; casual meeting 偶然相遇",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1554",
    "word": "celebration",
    "phonetic": "美 [ˌselɪˈbreɪʃən]",
    "pos": "n.",
    "meaning": "庆祝;祝贺;庆典",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "celebrate (v.) → celebration (n.)"
    ],
    "usage": {
      "collocations": "in celebration of 为庆祝…; hold a celebration 举行庆祝活动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1555",
    "word": "chain",
    "phonetic": "美 [tʃeɪn]",
    "pos": "n.",
    "meaning": "链;链条;项圈;连锁",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "food chain 食物链; chain store 连锁店",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1556",
    "word": "command",
    "phonetic": "美 [kəˈmænd]",
    "pos": "vt./n.",
    "meaning": "命令;指挥;控制;掌握",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "command → commander (n.) 指挥官"
    ],
    "usage": {
      "collocations": "have a good command of 精通; take command of 指挥",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1557",
    "word": "communication",
    "phonetic": "美 [kəˌmjuːnɪˈkeɪʃən]",
    "pos": "n.",
    "meaning": "交流;通讯;传达",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "means of communication 通讯方式; communication skills 沟通技巧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1558",
    "word": "complain",
    "phonetic": "美 [kəmˈpleɪn]",
    "pos": "v.",
    "meaning": "抱怨;投诉;发牢骚",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "complain → complaint (n.)"
    ],
    "usage": {
      "collocations": "complain about/of 抱怨…; complain to sb 向某人投诉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1559",
    "word": "complaint",
    "phonetic": "美 [kəmˈpleɪnt]",
    "pos": "n.",
    "meaning": "抱怨;投诉;控告",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "make a complaint 投诉; letter of complaint 投诉信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1560",
    "word": "concentrate",
    "phonetic": "美 [ˈkɑːnsəntreɪt]",
    "pos": "vi./vt./n.",
    "meaning": "集中;浓缩;全神贯注;浓缩液",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "concentrate → concentration (n.)"
    ],
    "usage": {
      "collocations": "concentrate on 集中精力于; concentrate one's attention on 把注意力集中在",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1561",
    "word": "confidence",
    "phonetic": "美 [ˈkɑːnfɪdəns]",
    "pos": "n.",
    "meaning": "信心;信任;把握",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "have confidence in 对…有信心; build confidence 建立信心; lack of confidence 缺乏信心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1562",
    "word": "confident",
    "phonetic": "美 [ˈkɑːnfɪdənt]",
    "pos": "adj.",
    "meaning": "自信的;确信的;有信心的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "confident → confidence (n.) → confidently (adv.); 反义词 unconfident"
    ],
    "usage": {
      "collocations": "be confident of/about 对…有信心; feel confident 感到自信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1563",
    "word": "confuse",
    "phonetic": "美 [kənˈfjuːz]",
    "pos": "vt.",
    "meaning": "使混乱;使困惑;混淆",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "confuse → confused (人困惑) → confusing (物令人困惑) → confusion (n.)"
    ],
    "usage": {
      "collocations": "confuse A with B 把A和B混淆; be confused about 对…困惑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1564",
    "word": "contact",
    "phonetic": "美 [ˈkɑːntækt]",
    "pos": "n./v.",
    "meaning": "接触;联系;联络",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "contact 作动词直接加宾语，不用 with"
    ],
    "usage": {
      "collocations": "keep in contact with 与…保持联系; lose contact 失去联系; contact sb 联系某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1565",
    "word": "contain",
    "phonetic": "美 [kənˈteɪn]",
    "pos": "vt.",
    "meaning": "包含;容纳;控制;含有",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "contain (包含全部) vs. include (包含部分)"
    ],
    "usage": {
      "collocations": "contain oneself 克制自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1566",
    "word": "countless",
    "phonetic": "美 [ˈkaʊntləs]",
    "pos": "adj.",
    "meaning": "无数的;数不尽的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "count (v.) → countless (adj.); 近义词 numerous"
    ],
    "usage": {
      "collocations": "countless times 无数次",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1567",
    "word": "crash",
    "phonetic": "美 [kræʃ]",
    "pos": "vi./n.",
    "meaning": "碰撞;坠落;崩溃",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "crash (碰撞) vs. crush (压碎)"
    ],
    "usage": {
      "collocations": "car crash 车祸; crash into 撞上; crash course 速成班",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1568",
    "word": "crossing",
    "phonetic": "美 [ˈkrɔːsɪŋ]",
    "pos": "n.",
    "meaning": "十字路口;人行横道;交叉口",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "cross (v./n.) → crossing (n.)"
    ],
    "usage": {
      "collocations": "pedestrian crossing 人行横道; at the crossing 在十字路口",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1569",
    "word": "curious",
    "phonetic": "美 [ˈkjʊriəs]",
    "pos": "adj.",
    "meaning": "好奇的;有求知欲的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "curious → curiosity (n.) → curiously (adv.)"
    ],
    "usage": {
      "collocations": "be curious about 对…好奇; be curious to do 很想做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1570",
    "word": "damage",
    "phonetic": "美 [ˈdæmɪdʒ]",
    "pos": "vi./vt./n.",
    "meaning": "损害;损毁;伤害",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "damage (部分损坏可修复) vs. destroy (彻底毁坏) vs. ruin (毁坏)"
    ],
    "usage": {
      "collocations": "do damage to 对…造成损害; suffer damage 遭受损害",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1571",
    "word": "dare",
    "phonetic": "美 [der]",
    "pos": "vt./aux.v.",
    "meaning": "敢;竟敢;胆敢",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "dare 作情态动词常用于否定和疑问; don't dare / dare not"
    ],
    "usage": {
      "collocations": "dare to do/do 敢做; How dare you! 你竟敢!",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1572",
    "word": "description",
    "phonetic": "美 [dɪˈskrɪpʃən]",
    "pos": "n.",
    "meaning": "描述;形容;说明",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "give a description of 描述; beyond description 难以形容",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1573",
    "word": "deserve",
    "phonetic": "美 [dɪˈzɜːrv]",
    "pos": "vi./vt.",
    "meaning": "应受;应得;值得",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "deserve + doing = deserve + to be done (主动表被动)"
    ],
    "usage": {
      "collocations": "deserve to do 值得做; deserve doing/to be done 值得被做; You deserve it! 你应得的!",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1574",
    "word": "desire",
    "phonetic": "美 [dɪˈzaɪər]",
    "pos": "n./vt.",
    "meaning": "欲望;要求;想要;渴望",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "desire → desirable (adj.) → desirous (adj.)"
    ],
    "usage": {
      "collocations": "have a desire to do 渴望做; desire to do 渴望做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1575",
    "word": "destroy",
    "phonetic": "美 [dɪˈstrɔɪ]",
    "pos": "vt.",
    "meaning": "毁坏;摧毁;消灭",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "destroy (彻底毁坏) vs. damage (部分损坏)"
    ],
    "usage": {
      "collocations": "destroy the environment 破坏环境; be completely destroyed 被彻底摧毁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1576",
    "word": "diet",
    "phonetic": "美 [ˈdaɪət]",
    "pos": "n.",
    "meaning": "饮食;食物;节食",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "go on a diet 节食; balanced diet 均衡饮食",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1577",
    "word": "directly",
    "phonetic": "美 [dɪˈrektli]",
    "pos": "adv.",
    "meaning": "直接地;立即;正好",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "direct (adj.) → directly (adv.) → indirect (反)"
    ],
    "usage": {
      "collocations": "directly opposite 正对面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1578",
    "word": "disabled",
    "phonetic": "美 [dɪsˈeɪbəld]",
    "pos": "adj.",
    "meaning": "残废的;有缺陷的;残疾的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "disable (v.) → disabled (adj.) → disability (n.)"
    ],
    "usage": {
      "collocations": "disabled people 残疾人; physically disabled 身体残疾的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1579",
    "word": "disappear",
    "phonetic": "美 [ˌdɪsəˈpɪr]",
    "pos": "v.",
    "meaning": "消失;失踪;不复存在",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "dis- (否定前缀) + appear; 反义词 appear; disappearance (n.)"
    ],
    "usage": {
      "collocations": "disappear from 从…消失; disappear into 消失在…中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1580",
    "word": "disappoint",
    "phonetic": "美 [ˌdɪsəˈpɔɪnt]",
    "pos": "v.",
    "meaning": "使…失望;辜负",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "disappoint → disappointed (adj. 人) → disappointing (adj. 物) → disappointment (n.)"
    ],
    "usage": {
      "collocations": "disappoint sb 使某人失望; be disappointed at/with 对…失望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1581",
    "word": "disorder",
    "phonetic": "美 [dɪsˈɔːrdər]",
    "pos": "n.",
    "meaning": "混乱;骚乱;失调",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "dis- + order; 反义词 order"
    ],
    "usage": {
      "collocations": "in disorder 混乱地; mental disorder 精神失常",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1582",
    "word": "educate",
    "phonetic": "美 [ˈedʒukeɪt]",
    "pos": "vt./vi.",
    "meaning": "教育;培养;训练",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "educate → education (n.) → educator (n.) → educated (adj.)"
    ],
    "usage": {
      "collocations": "educate sb about sth 教育某人某事; educate oneself 自学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1583",
    "word": "emotionally",
    "phonetic": "美 [ɪˈmoʊʃənəli]",
    "pos": "adv.",
    "meaning": "在情绪上;感情上",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "emotion (n.) → emotional (adj.) → emotionally (adv.)"
    ],
    "usage": {
      "collocations": "emotionally stable 情绪稳定的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1584",
    "word": "erase",
    "phonetic": "美 [ɪˈreɪs]",
    "pos": "vt.",
    "meaning": "抹去;擦除;消除",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "erase → eraser (n.) 橡皮"
    ],
    "usage": {
      "collocations": "erase the memory 抹去记忆; erase mistakes 擦除错误",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1585",
    "word": "escape",
    "phonetic": "美 [ɪˈskeɪp]",
    "pos": "vt./vi./n.",
    "meaning": "逃避;避免;溜走;逃脱",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "escape + doing (不是 to do)"
    ],
    "usage": {
      "collocations": "escape from 从…逃脱; escape doing 避免做; narrow escape 九死一生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1586",
    "word": "exit",
    "phonetic": "美 [ˈeksɪt]",
    "pos": "n./vi.",
    "meaning": "出口;退场;退出;离去",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "exit (出口) ↔ entrance (入口)"
    ],
    "usage": {
      "collocations": "emergency exit 紧急出口; exit the room 离开房间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1587",
    "word": "experienced",
    "phonetic": "美 [ɪkˈspɪriənst]",
    "pos": "adj.",
    "meaning": "经验丰富的;有阅历的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "experienced (有经验的) ↔ inexperienced (没经验的)"
    ],
    "usage": {
      "collocations": "be experienced in 在…方面经验丰富",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1588",
    "word": "experiment",
    "phonetic": "美 [ɪkˈsperɪmənt]",
    "pos": "n.",
    "meaning": "实验;试验;尝试",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "experiment → experimental (adj.)"
    ],
    "usage": {
      "collocations": "do/conduct an experiment 做实验; experiment with 用…做实验",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1589",
    "word": "expert",
    "phonetic": "美 [ˈekspɜːrt]",
    "pos": "n./adj.",
    "meaning": "专家;内行的;熟练的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "an expert in/on …方面的专家; expert advice 专家建议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1590",
    "word": "explanation",
    "phonetic": "美 [ˌekspləˈneɪʃən]",
    "pos": "n.",
    "meaning": "解释;说明;辩解",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "give an explanation 给一个解释; in explanation of 为解释",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1591",
    "word": "exploration",
    "phonetic": "美 [ˌekspləˈreɪʃən]",
    "pos": "n.",
    "meaning": "探索;探险;探究",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "explore (v.) → exploration (n.) → explorer (n.)"
    ],
    "usage": {
      "collocations": "space exploration 太空探索",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1592",
    "word": "explorer",
    "phonetic": "美 [ɪkˈsplɔːrər]",
    "pos": "n.",
    "meaning": "探测者;探险家",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "a famous explorer 著名探险家",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1593",
    "word": "expression",
    "phonetic": "美 [ɪkˈspreʃən]",
    "pos": "n.",
    "meaning": "词句;表达;表情;神色",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "facial expression 面部表情; freedom of expression 言论自由",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1594",
    "word": "extremely",
    "phonetic": "美 [ɪkˈstriːmli]",
    "pos": "adv.",
    "meaning": "极其;非常;极端地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "extreme (adj.) → extremely (adv.); 近义词 very/terribly"
    ],
    "usage": {
      "collocations": "extremely important 极其重要; extremely difficult 极其困难",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1595",
    "word": "fake",
    "phonetic": "美 [feɪk]",
    "pos": "n./adj.",
    "meaning": "假货;赝品;假的;伪造的",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "fake news 假新闻; fake smile 假笑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1596",
    "word": "fireworks",
    "phonetic": "美 [ˈfaɪərwɜːrks]",
    "pos": "n.",
    "meaning": "爆竹;烟花(复数)",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "set off fireworks 放烟花; fireworks display 烟花表演",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1597",
    "word": "formal",
    "phonetic": "美 [ˈfɔːrməl]",
    "pos": "adj.",
    "meaning": "正式的;拘谨的;有条理的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "formal ↔ informal; formality (n.)"
    ],
    "usage": {
      "collocations": "formal education 正规教育; formal dress 礼服",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1598",
    "word": "freedom",
    "phonetic": "美 [ˈfriːdəm]",
    "pos": "n.",
    "meaning": "自由;自主",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "free (adj.) → freedom (n.)"
    ],
    "usage": {
      "collocations": "freedom of speech 言论自由; fight for freedom 为自由而战",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1599",
    "word": "fridge",
    "phonetic": "美 [frɪdʒ]",
    "pos": "n.",
    "meaning": "电冰箱",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "fridge = refrigerator (缩写)"
    ],
    "usage": {
      "collocations": "in the fridge 在冰箱里",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1600",
    "word": "frightened",
    "phonetic": "美 [ˈfraɪtənd]",
    "pos": "adj.",
    "meaning": "害怕的;受惊的;受恐吓的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "frightened (人) vs. frightening (物); = scared/afraid"
    ],
    "usage": {
      "collocations": "be frightened of 害怕; be frightened to death 吓得要死",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1601",
    "word": "gather",
    "phonetic": "美 [ˈɡæðər]",
    "pos": "vt./vi.",
    "meaning": "收集;聚集;收割;推测",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "gather (聚集) vs. collect (收集)"
    ],
    "usage": {
      "collocations": "gather information 收集信息; gather together 聚集在一起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1602",
    "word": "generous",
    "phonetic": "美 [ˈdʒenərəs]",
    "pos": "adj.",
    "meaning": "慷慨的;大方的;宽宏大量的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "generous → generosity (n.) → generously (adv.)"
    ],
    "usage": {
      "collocations": "be generous with 在…方面大方; be generous to sb 对某人慷慨",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1603",
    "word": "gradually",
    "phonetic": "美 [ˈɡrædʒuəli]",
    "pos": "adv.",
    "meaning": "逐渐地;逐步地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "gradual (adj.) → gradually (adv.)"
    ],
    "usage": {
      "collocations": "gradually increase 逐渐增加",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1604",
    "word": "handout",
    "phonetic": "美 [ˈhændaʊt]",
    "pos": "n.",
    "meaning": "分发;讲义;施舍物",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "hand out (动词短语) vs. handout (名词)"
    ],
    "usage": {
      "collocations": "give out handouts 发讲义",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1605",
    "word": "handy",
    "phonetic": "美 [ˈhændi]",
    "pos": "adj.",
    "meaning": "手边的;便利的;容易取得的;灵巧的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "handy → handier → handiest"
    ],
    "usage": {
      "collocations": "come in handy 派上用场; be handy with 善于使用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1606",
    "word": "headphone",
    "phonetic": "美 [ˈhedfoʊn]",
    "pos": "n.",
    "meaning": "耳机(常用复数 headphones)",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "put on headphones 戴上耳机; wireless headphones 无线耳机",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1607",
    "word": "highway",
    "phonetic": "美 [ˈhaɪweɪ]",
    "pos": "n.",
    "meaning": "高速公路;公路",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "highway (高速公路) vs. freeway (免费高速) vs. expressway"
    ],
    "usage": {
      "collocations": "on the highway 在高速公路上; highway system 公路系统",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1608",
    "word": "honesty",
    "phonetic": "美 [ˈɑːnɪsti]",
    "pos": "n.",
    "meaning": "诚实;正直",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "honest (adj.) → honesty (n.); 反义词 dishonesty"
    ],
    "usage": {
      "collocations": "Honesty is the best policy. 诚实为上策。",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1609",
    "word": "inexpensive",
    "phonetic": "美 [ˌɪnɪkˈspensɪv]",
    "pos": "adj.",
    "meaning": "廉价的;便宜的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "in- + expensive; 近义词 cheap; 反义词 expensive"
    ],
    "usage": {
      "collocations": "an inexpensive meal 便宜的一餐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1610",
    "word": "infer",
    "phonetic": "美 [ɪnˈfɜːr]",
    "pos": "vt./vi.",
    "meaning": "推断;推论;暗示",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "infer → inference (n.)"
    ],
    "usage": {
      "collocations": "infer from 从…推断; infer that… 推断…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1611",
    "word": "injury",
    "phonetic": "美 [ˈɪndʒəri]",
    "pos": "n.",
    "meaning": "损害;伤害;受伤处",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "injure (v.) → injury (n.) → injured (adj.)"
    ],
    "usage": {
      "collocations": "suffer an injury 受伤; do sb an injury 伤害某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1612",
    "word": "intellectual",
    "phonetic": "美 [ˌɪntəˈlektʃuəl]",
    "pos": "n./adj.",
    "meaning": "知识分子;智力的;理智的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "intellect (n.) → intellectual (adj.)"
    ],
    "usage": {
      "collocations": "intellectual property 知识产权; intellectual ability 智力",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1613",
    "word": "item",
    "phonetic": "美 [ˈaɪtəm]",
    "pos": "n.",
    "meaning": "项目;条款;一件物品",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "item by item 逐条; an item of news 一条新闻",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1614",
    "word": "judge",
    "phonetic": "美 [dʒʌdʒ]",
    "pos": "v./n.",
    "meaning": "判断;评判;法官;裁判",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "judge → judgment (n.)"
    ],
    "usage": {
      "collocations": "judge by/from 根据…判断; judging from 从…来看; Don't judge a book by its cover. 不要以貌取人。",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1615",
    "word": "laptop",
    "phonetic": "美 [ˈlæptɑːp]",
    "pos": "n.",
    "meaning": "手提式个人电脑;笔记本电脑",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "laptop vs. desktop (台式机)"
    ],
    "usage": {
      "collocations": "laptop computer 笔记本电脑; on my laptop 在我的笔记本上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1616",
    "word": "latest",
    "phonetic": "美 [ˈleɪtɪst]",
    "pos": "adj.",
    "meaning": "最近的;最新的;最晚的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "late → later → latest; latest (最晚/最新)"
    ],
    "usage": {
      "collocations": "at the latest 最迟; the latest news 最新消息; the latest fashion 最新时尚",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1617",
    "word": "leading",
    "phonetic": "美 [ˈliːdɪŋ]",
    "pos": "adj.",
    "meaning": "最主要的;第一的;领先的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "lead (v.) → leading (adj.) → leader (n.)"
    ],
    "usage": {
      "collocations": "leading role 主角; leading position 领先地位",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1618",
    "word": "limit",
    "phonetic": "美 [ˈlɪmɪt]",
    "pos": "n./vt.",
    "meaning": "限度;限制;界线;限定",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "limit → limited (adj.) → limitation (n.)"
    ],
    "usage": {
      "collocations": "speed limit 限速; time limit 时间限制; limit…to… 把…限制在…; within limits 在一定范围内",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1619",
    "word": "location",
    "phonetic": "美 [loʊˈkeɪʃən]",
    "pos": "n.",
    "meaning": "位置;场所;地点",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "locate (v.) → location (n.)"
    ],
    "usage": {
      "collocations": "on location 外景拍摄; exact location 确切位置",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1620",
    "word": "lower",
    "phonetic": "美 [ˈloʊər]",
    "pos": "v./adj.",
    "meaning": "低下;降低;较低的;下层的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "low → lower → lowest; lower (降低) vs. reduce (减少)"
    ],
    "usage": {
      "collocations": "lower one's voice 放低声音; lower the price 降价",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1621",
    "word": "major",
    "phonetic": "美 [ˈmeɪdʒər]",
    "pos": "adj./n./vi.",
    "meaning": "主要的;多数的;专业;主修",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "major → majority (n.); major (主要的) ↔ minor (次要的)"
    ],
    "usage": {
      "collocations": "major in 主修; a major problem 主要问题; the majority of 大多数",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1622",
    "word": "measure",
    "phonetic": "美 [ˈmeʒər]",
    "pos": "vt./n.",
    "meaning": "测量;衡量;措施;尺寸",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "measure → measurement (n.); 复数 measures = 措施"
    ],
    "usage": {
      "collocations": "take measures 采取措施; measure up to 符合;达到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1623",
    "word": "mental",
    "phonetic": "美 [ˈmentəl]",
    "pos": "adj./n.",
    "meaning": "精神的;脑力的;精神病患者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "mental (精神的) ↔ physical (身体的)"
    ],
    "usage": {
      "collocations": "mental health 心理健康; mental illness 精神疾病",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1624",
    "word": "mop",
    "phonetic": "美 [mɑːp]",
    "pos": "v./n.",
    "meaning": "拖(地板);拖把",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "mop the floor 拖地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1625",
    "word": "native",
    "phonetic": "美 [ˈneɪtɪv]",
    "pos": "adj./n.",
    "meaning": "本国的;本土的;本地人;土著",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "native language 母语; native speaker 母语者; be native to 原产于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1626",
    "word": "naturally",
    "phonetic": "美 [ˈnætʃərəli]",
    "pos": "adv.",
    "meaning": "自然地;天然地;当然地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "natural (adj.) → naturally (adv.)"
    ],
    "usage": {
      "collocations": "come naturally 自然而然; Naturally! 当然!",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1627",
    "word": "nervousness",
    "phonetic": "美 [ˈnɜːrvəsnəs]",
    "pos": "n.",
    "meaning": "神经过敏;紧张;不安",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "show signs of nervousness 表现出紧张",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1628",
    "word": "nut",
    "phonetic": "美 [nʌt]",
    "pos": "n.",
    "meaning": "坚果;螺帽",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "nutritious (adj.) 有营养的; nutrition (n.) 营养"
    ],
    "usage": {
      "collocations": "nut and bolt 螺母和螺栓; go nuts 发疯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1629",
    "word": "obstacle",
    "phonetic": "美 [ˈɑːbstəkəl]",
    "pos": "n.",
    "meaning": "障碍;障碍物;绊脚石",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "近义词 barrier"
    ],
    "usage": {
      "collocations": "overcome an obstacle 克服障碍; obstacle to …的障碍",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1630",
    "word": "overdo",
    "phonetic": "美 [ˌoʊvərˈduː]",
    "pos": "v.",
    "meaning": "把…做得过度;过量",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "over- (过度) + do; overdo → overdid → overdone"
    ],
    "usage": {
      "collocations": "overdo it 做得过度; Don't overdo it. 别过度。",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1631",
    "word": "overdone",
    "phonetic": "美 [ˌoʊvərˈdʌn]",
    "pos": "adj.",
    "meaning": "煮得太久的;做得过分的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "overdone meat 煮过头的肉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1632",
    "word": "peacefully",
    "phonetic": "美 [ˈpiːsfəli]",
    "pos": "adv.",
    "meaning": "和平地;和谐地;安宁地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "peace (n.) → peaceful (adj.) → peacefully (adv.)"
    ],
    "usage": {
      "collocations": "live peacefully 和平生活; die peacefully 安详去世",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1633",
    "word": "perform",
    "phonetic": "美 [pərˈfɔːrm]",
    "pos": "vt./vi.",
    "meaning": "执行;演出;表演;表现",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "perform → performance (n.) → performer (n.)"
    ],
    "usage": {
      "collocations": "perform an operation 进行手术/操作; perform well 表现好; perform on stage 登台表演",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1634",
    "word": "photography",
    "phonetic": "美 [fəˈtɑːɡrəfi]",
    "pos": "n.",
    "meaning": "摄影;照相;摄影术",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "photo (n.) → photograph (n.) → photography (n.) → photographer (n.)"
    ],
    "usage": {
      "collocations": "a photography exhibition 摄影展",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1635",
    "word": "physically",
    "phonetic": "美 [ˈfɪzɪkli]",
    "pos": "adv.",
    "meaning": "体格上;身体上;物质上",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "physical (adj.) → physically (adv.)"
    ],
    "usage": {
      "collocations": "physically fit 身体健康; physically impossible 实际上不可能",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1636",
    "word": "pleased",
    "phonetic": "美 [pliːzd]",
    "pos": "adj.",
    "meaning": "高兴的;喜欢的;满意的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "pleased (人) vs. pleasing/pleasant (物)"
    ],
    "usage": {
      "collocations": "be pleased to do 很高兴做; be pleased with 对…满意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1637",
    "word": "pleasing",
    "phonetic": "美 [ˈpliːzɪŋ]",
    "pos": "adj.",
    "meaning": "令人愉快的;讨人喜欢的;合意的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "a pleasing result 令人满意的结果",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1638",
    "word": "poison",
    "phonetic": "美 [ˈpɔɪzən]",
    "pos": "n./vt.",
    "meaning": "毒药;毒害;投毒;毒死",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "poison → poisonous (adj.)"
    ],
    "usage": {
      "collocations": "poison gas 毒气; food poisoning 食物中毒",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1639",
    "word": "powder",
    "phonetic": "美 [ˈpaʊdər]",
    "pos": "n.",
    "meaning": "粉末;火药;香粉",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "milk powder 奶粉; washing powder 洗衣粉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1640",
    "word": "power",
    "phonetic": "美 [ˈpaʊər]",
    "pos": "n.",
    "meaning": "力量;权力;能力;电力",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "power → powerful (adj.) → powerless (adj.)"
    ],
    "usage": {
      "collocations": "come to power 上台执政; power station 发电站; in power 执政的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1641",
    "word": "powerful",
    "phonetic": "美 [ˈpaʊərfəl]",
    "pos": "adj.",
    "meaning": "强有力的;强大的;有权力的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "powerful ↔ powerless"
    ],
    "usage": {
      "collocations": "a powerful nation 强国; a powerful speech 有力的演讲",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1642",
    "word": "predict",
    "phonetic": "美 [prɪˈdɪkt]",
    "pos": "vt./vi.",
    "meaning": "预报;预言;预知;作出预言",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "predict → prediction (n.) → predictable (adj.)"
    ],
    "usage": {
      "collocations": "predict the future 预测未来; It is predicted that… 据预测…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1643",
    "word": "pressure",
    "phonetic": "美 [ˈpreʃər]",
    "pos": "v./n.",
    "meaning": "向…施加压力;压力;压强",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "press (v.) → pressure (n.)"
    ],
    "usage": {
      "collocations": "under pressure 在压力下; blood pressure 血压; put pressure on 对…施加压力",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1644",
    "word": "producer",
    "phonetic": "美 [prəˈduːsər]",
    "pos": "n.",
    "meaning": "生产者;制造者;制片人",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "film producer 电影制片人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1645",
    "word": "production",
    "phonetic": "美 [prəˈdʌkʃən]",
    "pos": "n.",
    "meaning": "产品;产量;生产;制作",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "mass production 大规模生产; go into production 投产",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1646",
    "word": "prompt",
    "phonetic": "美 [prɑːmpt]",
    "pos": "n./adj./vt.",
    "meaning": "提示;迅速的;敏捷的;促使",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "prompt → promptly (adv.)"
    ],
    "usage": {
      "collocations": "prompt sb to do 促使某人做; prompt reply 迅速回复",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1647",
    "word": "rainforest",
    "phonetic": "美 [ˈreɪnfɔːrɪst]",
    "pos": "n.",
    "meaning": "雨林;热带雨林",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "tropical rainforest 热带雨林; Amazon rainforest 亚马逊雨林",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1648",
    "word": "rate",
    "phonetic": "美 [reɪt]",
    "pos": "n./vt.",
    "meaning": "比率;速度;价格;评价;估价",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "at a rate of 以…的速度/比率; birth rate 出生率; exchange rate 汇率; rate…as 把…评为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1649",
    "word": "reaction",
    "phonetic": "美 [riˈækʃən]",
    "pos": "n.",
    "meaning": "反应;感应;反作用;回应",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "react (v.) → reaction (n.)"
    ],
    "usage": {
      "collocations": "in reaction to 对…的反应; chain reaction 连锁反应; allergic reaction 过敏反应",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1650",
    "word": "recognize",
    "phonetic": "美 [ˈrekəɡnaɪz]",
    "pos": "vt./vi.",
    "meaning": "承认;认出;识别;认可",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "recognize (美) = recognise (英); recognition (n.)"
    ],
    "usage": {
      "collocations": "recognize sb/sth as 承认…是; be recognized as 被公认为; recognize the importance of 认识到…的重要性",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1651",
    "word": "reduce",
    "phonetic": "美 [rɪˈduːs]",
    "pos": "vt./vi.",
    "meaning": "减少;降低;缩小",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "reduce → reduction (n.); reduce (减少) ↔ increase"
    ],
    "usage": {
      "collocations": "reduce to 减少到; reduce by 减少了; reduce pollution 减少污染",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1652",
    "word": "reference",
    "phonetic": "美 [ˈrefərəns]",
    "pos": "n.",
    "meaning": "参考;证明人;推荐信;提及",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "refer (v.) → reference (n.)"
    ],
    "usage": {
      "collocations": "in reference to 关于; reference book 参考书; for reference 供参考",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1653",
    "word": "regularly",
    "phonetic": "美 [ˈreɡjələrli]",
    "pos": "adv.",
    "meaning": "规则地;常规地;定期地;经常",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "regular (adj.) → regularly (adv.); 反义词 irregularly"
    ],
    "usage": {
      "collocations": "exercise regularly 经常锻炼",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1654",
    "word": "relatively",
    "phonetic": "美 [ˈrelətɪvli]",
    "pos": "adv.",
    "meaning": "相对地;比较地;相当地",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "relative (adj.) → relatively (adv.)"
    ],
    "usage": {
      "collocations": "relatively speaking 相对而言",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1655",
    "word": "relaxation",
    "phonetic": "美 [ˌriːlækˈseɪʃən]",
    "pos": "n.",
    "meaning": "松弛;松懈;消遣;放松",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "relax (v.) → relaxation (n.)"
    ],
    "usage": {
      "collocations": "a form of relaxation 一种放松方式",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1656",
    "word": "relaxed",
    "phonetic": "美 [rɪˈlækst]",
    "pos": "adj.",
    "meaning": "放松的;悠闲的;轻松的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "relaxed (人感到放松) vs. relaxing (物令人放松)"
    ],
    "usage": {
      "collocations": "feel relaxed 感到放松; a relaxed atmosphere 轻松的氛围",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1657",
    "word": "renew",
    "phonetic": "美 [rɪˈnuː]",
    "pos": "vt./vi.",
    "meaning": "使更新;续借;续期;重新开始",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "re- (再) + new; renewable (adj.)"
    ],
    "usage": {
      "collocations": "renew a book 续借书; renew a contract 续签合同; renew energy 恢复精力",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1658",
    "word": "requirement",
    "phonetic": "美 [rɪˈkwaɪərmənt]",
    "pos": "n.",
    "meaning": "需要;要求;必要条件",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "require (v.) → requirement (n.)"
    ],
    "usage": {
      "collocations": "meet the requirements 满足要求; requirement for …的要求",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1659",
    "word": "rescue",
    "phonetic": "美 [ˈreskjuː]",
    "pos": "vt./n.",
    "meaning": "援救;营救;解救",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "rescue → rescuer (n.)"
    ],
    "usage": {
      "collocations": "rescue sb from 从…救出某人; come to sb's rescue 来救某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1660",
    "word": "respond",
    "phonetic": "美 [rɪˈspɑːnd]",
    "pos": "v.",
    "meaning": "回应;反应;回答;响应",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "respond → response (n.) → responsible (adj.)"
    ],
    "usage": {
      "collocations": "respond to 回应;对…作出反应; respond with 以…回应",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1661",
    "word": "reuse",
    "phonetic": "美 [ˌriːˈjuːz]",
    "pos": "n./vt.",
    "meaning": "重新使用;再用;重复利用",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "re- (再) + use"
    ],
    "usage": {
      "collocations": "reuse water 再利用水; reduce, reuse, recycle 减量, 再利用, 回收",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1662",
    "word": "reward",
    "phonetic": "美 [rɪˈwɔːrd]",
    "pos": "n./vt.",
    "meaning": "报答;报酬;酬金;奖赏",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "reward (回报) vs. award (奖品)"
    ],
    "usage": {
      "collocations": "as a reward for 作为对…的奖赏; reward sb with sth 用某物奖励某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1663",
    "word": "ruin",
    "phonetic": "美 [ˈruːɪn]",
    "pos": "n./vt./vi.",
    "meaning": "毁坏;灭亡;废墟;毁灭;堕落",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "ruin (彻底毁坏) vs. damage (部分损坏)"
    ],
    "usage": {
      "collocations": "in ruins 成为废墟; ruin one's life 毁掉某人的生活",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1664",
    "word": "satellite",
    "phonetic": "美 [ˈsætəlaɪt]",
    "pos": "n.",
    "meaning": "卫星;人造卫星",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "satellite TV 卫星电视; communications satellite 通讯卫星; satellite image 卫星图像",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1665",
    "word": "scare",
    "phonetic": "美 [sker]",
    "pos": "v.",
    "meaning": "恐吓;使…害怕;受惊吓",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "scare = frighten; scared = frightened = afraid"
    ],
    "usage": {
      "collocations": "scare sb away/off 吓跑某人; be scared of 害怕; scare story 恐怖故事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1666",
    "word": "scientific",
    "phonetic": "美 [ˌsaɪənˈtɪfɪk]",
    "pos": "adj.",
    "meaning": "科学的;科学上的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "science (n.) → scientific (adj.) → scientist (n.)"
    ],
    "usage": {
      "collocations": "scientific research 科学研究; scientific method 科学方法",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1667",
    "word": "seed",
    "phonetic": "美 [siːd]",
    "pos": "n.",
    "meaning": "种子;籽;萌芽",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "sow seeds 播种; plant seeds 种下种子",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1668",
    "word": "select",
    "phonetic": "美 [sɪˈlekt]",
    "pos": "vt./adj./n.",
    "meaning": "挑选;选拔;精选的;极好的;被挑选者",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "select → selection (n.) → selective (adj.)"
    ],
    "usage": {
      "collocations": "select from 从…中挑选; be selected as 被选为; selected works 选集",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1669",
    "word": "separation",
    "phonetic": "美 [ˌsepəˈreɪʃən]",
    "pos": "n.",
    "meaning": "分离;分开;离别;分居",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "separation from 与…分离",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1670",
    "word": "sickness",
    "phonetic": "美 [ˈsɪknəs]",
    "pos": "n.",
    "meaning": "疾病;恶心;呕吐感",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "sick (adj.) → sickness (n.)"
    ],
    "usage": {
      "collocations": "morning sickness 晨吐; motion sickness 晕动症",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1671",
    "word": "signal",
    "phonetic": "美 [ˈsɪɡnəl]",
    "pos": "n.",
    "meaning": "信号;暗号;标志",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "traffic signal 交通信号; send a signal 发出信号; signal to sb 向某人发信号",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1672",
    "word": "skim",
    "phonetic": "美 [skɪm]",
    "pos": "v.",
    "meaning": "略读;浏览;从…表面飞掠过",
    "unit": "m1",
    "difficulty": 1,
    "examPoints": [
      "skim (略读) vs. scan (扫读) vs. skip (跳读)"
    ],
    "usage": {
      "collocations": "skim through 浏览; skim over the water 掠过水面; skim milk 脱脂牛奶",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1673",
    "word": "solution",
    "phonetic": "美 [səˈluːʃən]",
    "pos": "n.",
    "meaning": "解决;解答;溶液",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "a solution to …的解决方案; find a solution 找到解决方法",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1674",
    "word": "strategy",
    "phonetic": "美 [ˈstrætədʒi]",
    "pos": "n.",
    "meaning": "策略;战略;计谋",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "strategy → strategic (adj.)"
    ],
    "usage": {
      "collocations": "learning strategy 学习策略; marketing strategy 营销策略",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1675",
    "word": "stressful",
    "phonetic": "美 [ˈstresfəl]",
    "pos": "adj.",
    "meaning": "有压力的;紧张的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "stress (n./v.) → stressful (adj.)"
    ],
    "usage": {
      "collocations": "a stressful job 压力大的工作; stressful situation 紧张情境",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1676",
    "word": "structure",
    "phonetic": "美 [ˈstrʌktʃər]",
    "pos": "n./vt.",
    "meaning": "结构;建筑物;建造;组织",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "structure → structural (adj.)"
    ],
    "usage": {
      "collocations": "social structure 社会结构; sentence structure 句子结构",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1677",
    "word": "suffer",
    "phonetic": "美 [ˈsʌfər]",
    "pos": "v.",
    "meaning": "遭受;忍受;受苦;患…病",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "suffer → suffering (n.)"
    ],
    "usage": {
      "collocations": "suffer from 遭受;患…病; suffer pain 忍受痛苦; suffer losses 遭受损失",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1678",
    "word": "system",
    "phonetic": "美 [ˈsɪstəm]",
    "pos": "n.",
    "meaning": "系统;制度;体制",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "system → systematic (adj.)"
    ],
    "usage": {
      "collocations": "education system 教育制度; digestive system 消化系统; solar system 太阳系",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1679",
    "word": "talent",
    "phonetic": "美 [ˈtælənt]",
    "pos": "n.",
    "meaning": "天才;才能;天赋;人才",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "talent → talented (adj.) 有天赋的"
    ],
    "usage": {
      "collocations": "have a talent for 有…的天赋; talent show 才艺表演",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1680",
    "word": "telegram",
    "phonetic": "美 [ˈtelɪɡræm]",
    "pos": "n.",
    "meaning": "电报",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "tele- (远) + gram (写)"
    ],
    "usage": {
      "collocations": "send a telegram 发电报",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1681",
    "word": "theory",
    "phonetic": "美 [ˈθɪri]",
    "pos": "n.",
    "meaning": "理论;学说;原理",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "theory → theoretical (adj.); theory (理论) ↔ practice (实践)"
    ],
    "usage": {
      "collocations": "in theory 理论上; theory of relativity 相对论",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1682",
    "word": "thumb",
    "phonetic": "美 [θʌm]",
    "pos": "n.",
    "meaning": "大拇指",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "thumbs up 竖起大拇指(赞); rule of thumb 经验法则",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1683",
    "word": "traditional",
    "phonetic": "美 [trəˈdɪʃənəl]",
    "pos": "adj.",
    "meaning": "传统的;惯例的",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "tradition (n.) → traditional (adj.) → traditionally (adv.)"
    ],
    "usage": {
      "collocations": "traditional culture 传统文化; traditional Chinese medicine 中医",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1684",
    "word": "underground",
    "phonetic": "美 [ˈʌndərɡraʊnd]",
    "pos": "adj./adv./n.",
    "meaning": "地下的;秘密的;地铁",
    "unit": "m1",
    "difficulty": 4,
    "examPoints": [
      "underground (英) = subway (美)"
    ],
    "usage": {
      "collocations": "underground railway 地铁; go underground 转入地下",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1685",
    "word": "underlined",
    "phonetic": "美 [ˌʌndərˈlaɪnd]",
    "pos": "adj.",
    "meaning": "画下线的;强调的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "underline (v.) → underlined (adj.)"
    ],
    "usage": {
      "collocations": "underline the key words 在关键词下划线",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1686",
    "word": "unexpected",
    "phonetic": "美 [ˌʌnɪkˈspektɪd]",
    "pos": "adj.",
    "meaning": "意外的;出乎意料的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "un- + expected; expected (adj.) → unexpected (adj.)"
    ],
    "usage": {
      "collocations": "unexpected news 意外消息; an unexpected visitor 不速之客",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1687",
    "word": "universal",
    "phonetic": "美 [ˌjuːnɪˈvɜːrsəl]",
    "pos": "adj.",
    "meaning": "宇宙的;普遍的;通用的",
    "unit": "m1",
    "difficulty": 3,
    "examPoints": [
      "universe (n.) → universal (adj.)"
    ],
    "usage": {
      "collocations": "universal language 通用语言; universal truth 普遍真理",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1688",
    "word": "unlit",
    "phonetic": "美 [ʌnˈlɪt]",
    "pos": "adj.",
    "meaning": "未点燃的;无灯光的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "un- + lit"
    ],
    "usage": {
      "collocations": "an unlit room 没开灯的房间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1689",
    "word": "unusual",
    "phonetic": "美 [ʌnˈjuːʒuəl]",
    "pos": "adj.",
    "meaning": "不平常的;独特的;异常的",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [
      "un- + usual; 反义词 usual; unusual → unusually (adv.)"
    ],
    "usage": {
      "collocations": "It is unusual for sb to do 某人做某事不寻常; nothing unusual 没什么异常",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mw1690",
    "word": "vehicle",
    "phonetic": "美 [ˈviːɪkəl]",
    "pos": "n.",
    "meaning": "车辆;交通工具;媒介",
    "unit": "m1",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "motor vehicle 机动车; space vehicle 航天器",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz1",
    "word": "reason",
    "phonetic": "美 [ˈriːzən]",
    "pos": "n.",
    "meaning": "原因",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reason + for; 辨析: reason vs cause(reason=理由, cause=起因)"
    ],
    "usage": {
      "collocations": "the reason for... ...的原因; give a reason 给出理由",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz2",
    "word": "consider",
    "phonetic": "美 [kənˈsɪdər]",
    "pos": "v.",
    "meaning": "仔细考虑；认为",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "后接 doing 不接 to do! consider sb to be 也常见"
    ],
    "usage": {
      "collocations": "consider doing sth 考虑做某事; consider...as... 把...视为...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz3",
    "word": "proud",
    "phonetic": "美 [praʊd]",
    "pos": "adj.",
    "meaning": "自豪的；得意的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "proud (adj.) -> pride (n.); be proud to do 自豪地做"
    ],
    "usage": {
      "collocations": "be proud of 为...感到自豪; take pride in 以...为荣",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz4",
    "word": "scare",
    "phonetic": "美 [sker]",
    "pos": "v.",
    "meaning": "惊吓；害怕 n.恐慌；惊吓",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "scared (adj.) 害怕的; scary (adj.) 令人害怕的"
    ],
    "usage": {
      "collocations": "scare sb away/off 吓跑; be scared of 害怕",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz5",
    "word": "harbor",
    "phonetic": "美 [ˈhɑːbər]",
    "pos": "n.",
    "meaning": "海港",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "harbour (英) = harbor (美); 也可作动词\"隐藏\""
    ],
    "usage": {
      "collocations": "Pearl Harbor 珍珠港; harbor a dream 怀着梦想",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz6",
    "word": "electric",
    "phonetic": "美 [ɪˈlektrɪk]",
    "pos": "adj.",
    "meaning": "电的 n.电",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "辨析: electric(用电的) vs electronic(电子的) vs electrical(与电相关的)"
    ],
    "usage": {
      "collocations": "electric car 电动汽车; electric shock 电击",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz7",
    "word": "necessary",
    "phonetic": "美 [ˈnesəsəri]",
    "pos": "adj.",
    "meaning": "必要的；必然的 n.必需品",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "necessary -> necessity (n.); unnecessarily (adv.)"
    ],
    "usage": {
      "collocations": "It is necessary to do... 做...是必要的; if necessary 如果必要的话",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz8",
    "word": "space",
    "phonetic": "美 [speɪs]",
    "pos": "n.",
    "meaning": "空间；太空；空隙",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "space 作\"太空\"不可数; 作\"空间/空隙\"可数"
    ],
    "usage": {
      "collocations": "in space 在太空; personal space 个人空间; parking space 停车位",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz9",
    "word": "vacation",
    "phonetic": "美 [veɪˈkeɪʃn]",
    "pos": "n.",
    "meaning": "假期",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "= holiday (英); take a vacation 休假"
    ],
    "usage": {
      "collocations": "on vacation 在度假; summer vacation 暑假",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz10",
    "word": "complain",
    "phonetic": "美 [kəmˈpleɪn]",
    "pos": "v.",
    "meaning": "抱怨；控诉",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "complain + about/of; complaint (n.) 投诉"
    ],
    "usage": {
      "collocations": "complain about/of 抱怨...; complain to sb 向某人投诉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz11",
    "word": "finish",
    "phonetic": "美 [ˈfɪnɪʃ]",
    "pos": "v.",
    "meaning": "完成；结束 n.结尾, 结局",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do! finished (adj.) 完成的"
    ],
    "usage": {
      "collocations": "finish doing sth 做完某事; finish with... 用完...; finish off 彻底完成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz12",
    "word": "tourist",
    "phonetic": "美 [ˈtʊrɪst]",
    "pos": "n.",
    "meaning": "旅行者,观光者",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "tourist -> tour (n./v.) -> tourism (n.) 旅游业"
    ],
    "usage": {
      "collocations": "tourist attraction 旅游景点; tourist guide 导游",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz13",
    "word": "active",
    "phonetic": "美 [ˈæktɪv]",
    "pos": "adj.",
    "meaning": "活跃的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "active -> activity (n.); 反义词 inactive"
    ],
    "usage": {
      "collocations": "take an active part in 积极参加; be active in 在...方面活跃",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz14",
    "word": "foreign",
    "phonetic": "美 [ˈfɑːrən]",
    "pos": "adj.",
    "meaning": "外国的；外交的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "foreigner (n.); 注意拼写: fore + ign"
    ],
    "usage": {
      "collocations": "foreign language 外语; foreign country 外国; foreigner 外国人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz15",
    "word": "beach",
    "phonetic": "美 [biːtʃ]",
    "pos": "n.",
    "meaning": "海滩 v.上岸",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "beach (n.) 海滩"
    ],
    "usage": {
      "collocations": "on the beach 在沙滩上; go to the beach 去海边",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz16",
    "word": "task",
    "phonetic": "美 [tɑːsk]",
    "pos": "n.",
    "meaning": "任务",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "task = job/work; 可数名词"
    ],
    "usage": {
      "collocations": "finish a task 完成任务; a difficult task 艰巨的任务",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz17",
    "word": "message",
    "phonetic": "美 [ˈmesɪdʒ]",
    "pos": "n.",
    "meaning": "信息",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "message (n.) 信息; messenger (n.) 信使"
    ],
    "usage": {
      "collocations": "leave a message 留言; send a message 发送消息; text message 短信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz18",
    "word": "promise",
    "phonetic": "美 [ˈprɑːmɪs]",
    "pos": "n.",
    "meaning": "/v.许诺；允诺",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "promising (adj.) 有前途的"
    ],
    "usage": {
      "collocations": "promise to do 承诺做; make a promise 许下诺言; keep/break a promise 遵守/违背诺言; promise sb sth 答应某人某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz19",
    "word": "subject",
    "phonetic": "美 [ˈsʌbdʒɪkt]",
    "pos": "n.",
    "meaning": "学科；主题；主语",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "subject (n.科目/主题) 可数"
    ],
    "usage": {
      "collocations": "school subject 学校科目; subject to 受…支配",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz20",
    "word": "size",
    "phonetic": "美 [saɪz]",
    "pos": "n.",
    "meaning": "大小；尺码 v.确定…的尺寸",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "size (n.); 问尺寸: What size do you wear?"
    ],
    "usage": {
      "collocations": "what size 什么尺寸; medium size 中号",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz21",
    "word": "hate",
    "phonetic": "美 [heɪt]",
    "pos": "v.",
    "meaning": "讨厌；憎恨 n.厌恶；所憎恨的人（或事物）",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hatred (n.) 憎恨; hateful (adj.)"
    ],
    "usage": {
      "collocations": "hate doing/to do 讨厌做; hate it when... 讨厌当...的时候; hate sb to do 讨厌某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz22",
    "word": "soil",
    "phonetic": "美 [sɔɪl]",
    "pos": "n.",
    "meaning": "土壤；国土",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "soil (n.土壤) 不可数"
    ],
    "usage": {
      "collocations": "rich soil 肥沃的土壤; soil pollution 土壤污染",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz23",
    "word": "heavy",
    "phonetic": "美 [ˈhevi]",
    "pos": "adj.",
    "meaning": "沉重的；巨大的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "heavy 修饰雨/雪/交通/吸烟等; heavily (adv.)"
    ],
    "usage": {
      "collocations": "heavy rain 大雨; heavy traffic 拥堵的交通; heavy smoker 重度吸烟者",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz24",
    "word": "society",
    "phonetic": "美 [səˈsaɪəti]",
    "pos": "n.",
    "meaning": "社会；社团",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "social (adj.) 社会的; socialist (adj.) 社会主义的"
    ],
    "usage": {
      "collocations": "in society 在社会中; modern society 现代社会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz25",
    "word": "prove",
    "phonetic": "美 [pruːv]",
    "pos": "v.",
    "meaning": "证明；检查",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "proof (n.) 证据; proven (adj.)"
    ],
    "usage": {
      "collocations": "prove to be 证明是; prove + adj. 证明是...; prove sb right/wrong 证明某人对/错; prove oneself 证明自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz26",
    "word": "escape",
    "phonetic": "美 [ɪˈskeɪp]",
    "pos": "v.",
    "meaning": "逃跑；摆脱 n.逃脱；",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "escape + from/doing; 注意搭配"
    ],
    "usage": {
      "collocations": "escape from 从…逃跑; narrow escape 九死一生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz27",
    "word": "throw",
    "phonetic": "美 [θroʊ]",
    "pos": "v.",
    "meaning": "投, 扔",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "throw -> threw -> thrown"
    ],
    "usage": {
      "collocations": "throw away 扔掉; throw up 呕吐; throw...at... 朝...扔; throw oneself into 全身心投入",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz28",
    "word": "harvest",
    "phonetic": "美 [ˈhɑːvɪst]",
    "pos": "n.",
    "meaning": "收割,收获",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "harvest (n./v.); 可作及物动词: harvest crops"
    ],
    "usage": {
      "collocations": "a good harvest 丰收; harvest time 收获季节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz29",
    "word": "organization",
    "phonetic": "美 [ˌɔːɡənaɪˈzeɪʃn]",
    "pos": "n.",
    "meaning": "组织,团体",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "organize (v.) → organization (n.); 美式z 英式s"
    ],
    "usage": {
      "collocations": "World Health Organization 世界卫生组织; non-profit organization 非营利组织",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz30",
    "word": "tap",
    "phonetic": "美 [tæp]",
    "pos": "v.",
    "meaning": "轻敲 n.水龙头；轻拍",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "tap (水龙头) = faucet (美)"
    ],
    "usage": {
      "collocations": "tap water 自来水; turn on/off the tap 开/关水龙头",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz31",
    "word": "theatre",
    "phonetic": "美 [ˈθɪrtə]",
    "pos": "n.",
    "meaning": "剧场；电影院",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "theatre (英) = theater (美)"
    ],
    "usage": {
      "collocations": "go to the theatre 去剧院; movie theatre 电影院",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz32",
    "word": "height",
    "phonetic": "美 [haɪt]",
    "pos": "n.",
    "meaning": "高度；身高",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "height (n.) ← high (adj.); 注意拼写: hei + ght"
    ],
    "usage": {
      "collocations": "medium height 中等身高; the height of …的高度",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz33",
    "word": "system",
    "phonetic": "美 [ˈsɪstəm]",
    "pos": "n.",
    "meaning": "（思想或理论）体系制度；系统",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "system (n.) 系统; systematic (adj.)"
    ],
    "usage": {
      "collocations": "education system 教育系统; solar system 太阳系; operating system 操作系统",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz34",
    "word": "bright",
    "phonetic": "美 [braɪt]",
    "pos": "adj.",
    "meaning": "明亮的；聪明的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "brightly (adv.); brightness (n.)"
    ],
    "usage": {
      "collocations": "bright future 光明的未来; bright color 鲜艳的颜色; bright idea 好主意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz35",
    "word": "habitat",
    "phonetic": "美 [ˈhæbɪtæt]",
    "pos": "n.",
    "meaning": "栖息地；产地",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "habitat (n.栖息地); inhabit (v.居住)"
    ],
    "usage": {
      "collocations": "natural habitat 自然栖息地; in one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz36",
    "word": "shame",
    "phonetic": "美 [ʃeɪm]",
    "pos": "n.",
    "meaning": "羞耻,",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "shame → ashamed (adj.感到羞耻的); shameful (adj.可耻的)"
    ],
    "usage": {
      "collocations": "What a shame! 真遗憾！; It",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz37",
    "word": "argue",
    "phonetic": "美 [ˈɑːɡjuː]",
    "pos": "v.",
    "meaning": "争论；辩论",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "argue → argument (n.争论); 注意argument拼写(无e)"
    ],
    "usage": {
      "collocations": "argue with sb about sth 与某人争论某事; argue for/against 赞成/反对",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz38",
    "word": "lie",
    "phonetic": "美 [laɪ]",
    "pos": "v.",
    "meaning": "说谎；躺下；位于 n.谎言",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "lying; 辨析: lie(躺) - lay - lain; lie(说谎) - lied - lied; lay(放置) - laid - laid"
    ],
    "usage": {
      "collocations": "lie down 躺下; lie in 在于; tell a lie 说谎; lie to sb 对某人说谎",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz39",
    "word": "weather",
    "phonetic": "美 [ˈweðə]",
    "pos": "n.",
    "meaning": "天气；气象",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "weather (n.天气) 不可数; 辨析: weather vs. climate"
    ],
    "usage": {
      "collocations": "weather forecast 天气预报; bad weather 坏天气; weather report 天气报告",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz40",
    "word": "excuse",
    "phonetic": "美 [ɪkˈskjuːs]",
    "pos": "n.",
    "meaning": "借口；理由 v.原谅",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "excuse (n.借口 / v.原谅)"
    ],
    "usage": {
      "collocations": "excuse me 打扰一下; excuse for …的借口; make an excuse 找借口",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz41",
    "word": "character",
    "phonetic": "美 [ˈkærəktər]",
    "pos": "n.",
    "meaning": "性格；特点；角色",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "character (n.角色/性格/汉字); characteristic (adj.典型的)"
    ],
    "usage": {
      "collocations": "main character 主角; Chinese character 汉字; good character 好品格",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz42",
    "word": "wear",
    "phonetic": "美 [wer]",
    "pos": "v.",
    "meaning": "穿着,戴着 n.穿,戴",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "wear -> wore -> worn; 辨析: wear(穿着状态) vs put on(穿上动作)"
    ],
    "usage": {
      "collocations": "wear out 穿破/使筋疲力尽; wear off 逐渐消失; wear...on... 把...戴在...上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz43",
    "word": "earth",
    "phonetic": "美 [ɜːrθ]",
    "pos": "n.",
    "meaning": "地球；泥土；陆地",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz44",
    "word": "master",
    "phonetic": "美 [ˈmɑːstər]",
    "pos": "n.",
    "meaning": "主人；大师；硕士 v.掌握；控制",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "master (v.掌握; n.大师/硕士); masterpiece (n.杰作)"
    ],
    "usage": {
      "collocations": "master a skill 掌握一门技能; master degree 硕士学位",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz45",
    "word": "return",
    "phonetic": "美 [rɪˈtɜːrn]",
    "pos": "v.",
    "meaning": "返回；报答 n.返回；归还",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "return 不能和 back 连用! return back X -> return V"
    ],
    "usage": {
      "collocations": "return to 回到; return...to... 归还...给...; in return 作为回报",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz46",
    "word": "circle",
    "phonetic": "美 [ˈsɜːrkl]",
    "pos": "n.",
    "meaning": "循环；圆；圈子 v.画圈",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "circle (n.圆 v.环绕); circular (adj.圆形的)"
    ],
    "usage": {
      "collocations": "in a circle 围成圈; perfect circle 完美的圆; circle the answer 圈出答案",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz47",
    "word": "example",
    "phonetic": "美 [ɪgˈzɑː  mpəl]",
    "pos": "n.",
    "meaning": "例子；榜样v. 举例",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz48",
    "word": "company",
    "phonetic": "美 [ˈkʌmpəni]",
    "pos": "n.",
    "meaning": "公司 v.陪伴",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz49",
    "word": "shout",
    "phonetic": "美 [ʃaʊt]",
    "pos": "v.",
    "meaning": "大声说；喊叫 n.呼喊；喊叫声",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "shout at (带有怒气的喊) vs. shout to (为了让对方听到)"
    ],
    "usage": {
      "collocations": "shout at sb 冲某人喊叫; shout for help 大声呼救",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz50",
    "word": "serve",
    "phonetic": "美 [sɜːrv]",
    "pos": "v.",
    "meaning": "服务；招待",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "service (n.) 服务; servant (n.) 仆人"
    ],
    "usage": {
      "collocations": "serve as 充当/担任; serve sb 为某人服务; serve food 上菜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz51",
    "word": "expensive",
    "phonetic": "美 [ɪkˈspensɪv]",
    "pos": "adj.",
    "meaning": "昂贵的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "expensive = dear = costly; 反义词 cheap; expense (n.)"
    ],
    "usage": {
      "collocations": "very expensive 非常贵; the most expensive 最贵的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz52",
    "word": "cheer",
    "phonetic": "美 [tʃɪr]",
    "pos": "n.",
    "meaning": "欢呼声；欢乐的气氛 v.欢呼；鼓励",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz53",
    "word": "inform",
    "phonetic": "美 [ɪnˈfɔːm]",
    "pos": "v.",
    "meaning": "通知,通告",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "inform → information (n.不可数); informer (n.告密者)"
    ],
    "usage": {
      "collocations": "inform sb of/about sth 通知某人某事; keep sb informed 让某人及时了解",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz54",
    "word": "develop",
    "phonetic": "美 [dɪˈveləp]",
    "pos": "v.",
    "meaning": "发展；开发；冲洗",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "development (n.)"
    ],
    "usage": {
      "collocations": "develop into 发展成; develop a habit 养成习惯; developing country 发展中国家; developed country 发达国家",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz55",
    "word": "relax",
    "phonetic": "美 [rɪˈlæks]",
    "pos": "v.",
    "meaning": "放松；休息",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "relaxation (n.); relaxed (adj.) 感到放松的"
    ],
    "usage": {
      "collocations": "relax oneself 放松自己; relax at home 在家放松; a relaxing holiday 放松的假期",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz56",
    "word": "brave",
    "phonetic": "美 [breɪv]",
    "pos": "adj.",
    "meaning": "勇敢的；崭新的 v.勇敢面对",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "brave → bravery (n.勇敢); bravely (adv.)"
    ],
    "usage": {
      "collocations": "brave enough 足够勇敢; brave the weather 不畏天气",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz57",
    "word": "vegetable",
    "phonetic": "美 [ˈvedʒtəbl]",
    "pos": "n.",
    "meaning": "蔬菜；植物人",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "vegetable (n.蔬菜) 可数; vegetarian (n.素食者)"
    ],
    "usage": {
      "collocations": "green vegetables 绿色蔬菜; vegetable soup 蔬菜汤; fruit and vegetables 果蔬",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz58",
    "word": "belief",
    "phonetic": "美 [bɪˈliːf]",
    "pos": "n.",
    "meaning": "相信；信仰；信赖",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "belief (n.) ← believe (v.); 注意拼写: be + lief"
    ],
    "usage": {
      "collocations": "religious belief 宗教信仰; It is my belief that… 我相信…; beyond belief 难以置信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz59",
    "word": "style",
    "phonetic": "美 [staɪl]",
    "pos": "n.",
    "meaning": "方式；款式",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "style → stylish (adj.时尚的)"
    ],
    "usage": {
      "collocations": "life style 生活方式; in style 流行; out of style 过时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz60",
    "word": "cost",
    "phonetic": "美 [kɑːst]",
    "pos": "n.",
    "meaning": "费用 v.需付费",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "cost -> cost -> cost; 主语是物! 辨析: cost/spend/take/pay"
    ],
    "usage": {
      "collocations": "cost sb sth 花费某人某物; at the cost of 以...为代价; cost of living 生活成本",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz61",
    "word": "correct",
    "phonetic": "美 [kəˈrekt]",
    "pos": "adj.",
    "meaning": "正确的 v.改正",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "correct = right; 反义词 incorrect; correction (n.)"
    ],
    "usage": {
      "collocations": "correct answer 正确答案; correct a mistake 改正错误",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz62",
    "word": "exam",
    "phonetic": "美 [ɪgˈzæm]",
    "pos": "n.",
    "meaning": "考试",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz63",
    "word": "coast",
    "phonetic": "美 [koʊst]",
    "pos": "n.",
    "meaning": "海岸,海滨",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz64",
    "word": "brain",
    "phonetic": "美 [breɪn]",
    "pos": "n.",
    "meaning": "大脑；智力；聪明的人",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "brain (n.大脑/头脑); brainy (adj.聪明的)"
    ],
    "usage": {
      "collocations": "use your brain 动动脑子; brain damage 脑损伤; brain storm 头脑风暴",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz65",
    "word": "warn",
    "phonetic": "美 [wɔːrn]",
    "pos": "v.",
    "meaning": "提醒注意；警告",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "warn → warning (n.警告)"
    ],
    "usage": {
      "collocations": "warn sb of/about sth 警告某人某事; warn sb not to do 警告某人不要做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz66",
    "word": "intelligence",
    "phonetic": "美 [ɪnˈtelɪdʒəns]",
    "pos": "n.",
    "meaning": "智力 v.高兴；使快乐",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "intelligent (adj.聪明的); 不可数名词"
    ],
    "usage": {
      "collocations": "artificial intelligence (AI) 人工智能; high intelligence 高智商",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz67",
    "word": "admire",
    "phonetic": "美 [ədˈmaɪər]",
    "pos": "v.",
    "meaning": "钦佩；赞美",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz68",
    "word": "energy",
    "phonetic": "美 [ˈenədʒi]",
    "pos": "n.",
    "meaning": "精力；能源",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "energy (n.能量/精力); energetic (adj.精力充沛的)"
    ],
    "usage": {
      "collocations": "save energy 节约能源; full of energy 充满活力; solar energy 太阳能",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz69",
    "word": "accident",
    "phonetic": "美 [ˈæksədənt]",
    "pos": "n.",
    "meaning": "事故；意外",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz70",
    "word": "aboard",
    "phonetic": "美 [əˈbɔːd]",
    "pos": "adv.",
    "meaning": "在(船、飞机、公共汽车、火车等)上;",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "aboard = on board; 是副词/介词"
    ],
    "usage": {
      "collocations": "go aboard 上船/飞机; Welcome aboard! 欢迎登机！",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz71",
    "word": "million",
    "phonetic": "美 [ˈmɪljən]",
    "pos": "n.",
    "meaning": "一百万；大量",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "million 前有数字不加s: 5 million; millions of 加s"
    ],
    "usage": {
      "collocations": "millions of 数百万的; one million 一百万",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz72",
    "word": "silly",
    "phonetic": "美 [ˈsɪli]",
    "pos": "adj.",
    "meaning": "愚蠢的 n.傻瓜",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "silly = foolish = stupid; silliness (n.)"
    ],
    "usage": {
      "collocations": "Don",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz73",
    "word": "stop",
    "phonetic": "美 [stɑːp]",
    "pos": "v.",
    "meaning": "停止；阻止 n.公交车站",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "stop -> stopped (双写p); 辨析: stop doing vs to do 必考!"
    ],
    "usage": {
      "collocations": "stop doing 停止做; stop to do 停下来去做; stop sb (from) doing 阻止某人做; bus stop 公交站",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz74",
    "word": "line",
    "phonetic": "美 [laɪn]",
    "pos": "n.",
    "meaning": "线；排 v.沿…排成行",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "line (n.线/行/队伍); online (adj.在线的)"
    ],
    "usage": {
      "collocations": "in line 排队; bottom line 底线; line up 排队",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz75",
    "word": "exercise",
    "phonetic": "美 [ˈeksəsaɪz]",
    "pos": "n.",
    "meaning": "练习；运动 v.锻炼",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz76",
    "word": "receive",
    "phonetic": "美 [rɪˈsiːv]",
    "pos": "v.",
    "meaning": "收到；接待",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "辨析: receive(客观收到) vs accept(主观接受)"
    ],
    "usage": {
      "collocations": "receive...from... 从...收到...; receive a letter 收到信; receive education 接受教育",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz77",
    "word": "toilet",
    "phonetic": "美 [ˈtɔɪlət]",
    "pos": "n.",
    "meaning": "厕所",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "toilet = restroom (美) = washroom"
    ],
    "usage": {
      "collocations": "go to the toilet 上厕所; toilet paper 卫生纸",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz78",
    "word": "race",
    "phonetic": "美 [reɪs]",
    "pos": "n.",
    "meaning": "赛跑,速度竞赛；竞争",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "race → racial (adj.种族的); racing (n.竞赛)"
    ],
    "usage": {
      "collocations": "relay race 接力赛; race against time 争分夺秒; race car 赛车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz79",
    "word": "science",
    "phonetic": "美 [ˈsaɪəns]",
    "pos": "n.",
    "meaning": "科学；理科",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "science → scientist (n.科学家); scientific (adj.)"
    ],
    "usage": {
      "collocations": "science and technology 科技; science fiction 科幻小说; science lab 科学实验室",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz80",
    "word": "tire",
    "phonetic": "美 [ˈtaɪər]",
    "pos": "v.",
    "meaning": "使疲劳,疲倦 n.轮胎",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "tire (v.使疲惫); tired (adj.疲惫的); tiring (adj.令人疲惫的)"
    ],
    "usage": {
      "collocations": "tire sb out 使某人筋疲力尽; be tired of 对…感到厌倦",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz81",
    "word": "credit",
    "phonetic": "美 [ˈkredɪt]",
    "pos": "n.",
    "meaning": "信用；信誉",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "credit → credible (adj.可信的)"
    ],
    "usage": {
      "collocations": "credit card 信用卡; give sb credit 赞扬某人; to one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz82",
    "word": "magic",
    "phonetic": "美 [ˈmædʒɪk]",
    "pos": "n.",
    "meaning": "魔法；巫术 adj.有魔力的；神奇的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "magic → magical (adj.神奇的); magician (n.魔术师)"
    ],
    "usage": {
      "collocations": "magic show 魔术表演; magic power 魔力; do magic 变魔术",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz83",
    "word": "attract",
    "phonetic": "美 [əˈtrækt]",
    "pos": "v.",
    "meaning": "吸引；引起",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "attract → attraction (n.吸引力); attractive (adj.有吸引力的)"
    ],
    "usage": {
      "collocations": "attract attention 吸引注意; attract sb to 吸引某人到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz84",
    "word": "behavior",
    "phonetic": "美 [bɪˈheɪvjər]",
    "pos": "n.",
    "meaning": "行为；态度；表现方式",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "behave (v.) → behavior (n.); 行为不可数"
    ],
    "usage": {
      "collocations": "good/bad behavior 好/坏行为; be on one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz85",
    "word": "teenage",
    "phonetic": "美 [ˈtiːneɪdʒ]",
    "pos": "adj.",
    "meaning": "青少年的；十几岁的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "teenage (adj.) → teenager (n.青少年)"
    ],
    "usage": {
      "collocations": "teenage years 青少年时期; teenage boy 青少年男孩",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz86",
    "word": "various",
    "phonetic": "美 [ˈveriəs]",
    "pos": "adj.",
    "meaning": "各种各样的；多姿多彩的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "various = different kinds of; variety (n.多样性)"
    ],
    "usage": {
      "collocations": "various reasons 各种原因; various kinds of 各种各样的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz87",
    "word": "obey",
    "phonetic": "美 [oʊˈbeɪ]",
    "pos": "v.",
    "meaning": "服从；遵守",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "obey → obedient (adj.顺从的); 反义词 disobey"
    ],
    "usage": {
      "collocations": "obey the rules 遵守规则; obey the law 守法; obey orders 服从命令",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz88",
    "word": "square",
    "phonetic": "美 [skwer]",
    "pos": "n.",
    "meaning": "广场；平方；正方形 adj.平方的；正方的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "square → squarely (adv.直接地)"
    ],
    "usage": {
      "collocations": "Tian",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz89",
    "word": "catch",
    "phonetic": "美 [kætʃ]",
    "pos": "v.",
    "meaning": "抓住；赶上；听清楚",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "catch -> caught -> caught; catch + sb + doing"
    ],
    "usage": {
      "collocations": "catch up with 赶上; catch a cold 感冒; catch sb doing 撞见某人在做; catch fire 着火",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz90",
    "word": "allow",
    "phonetic": "美 [əˈlaʊ]",
    "pos": "v.",
    "meaning": "允许；准许",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "allow + doing / sb + to do; 被动语态常考"
    ],
    "usage": {
      "collocations": "allow doing sth 允许做某事; allow sb to do sth 允许某人做某事; be allowed to do 被允许做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz91",
    "word": "repair",
    "phonetic": "美 [rɪˈper]",
    "pos": "v.",
    "meaning": "修复,恢复；修理",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "repair = fix = mend; reparable (adj.可修复的)"
    ],
    "usage": {
      "collocations": "under repair 在维修中; repair a car 修车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz92",
    "word": "ahead",
    "phonetic": "美 [əˈhed]",
    "pos": "adj.",
    "meaning": "向前；在前的；领先 adv.向前地；领先地",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz93",
    "word": "hang",
    "phonetic": "美 [hæŋ]",
    "pos": "v.",
    "meaning": "悬,挂；垂下",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hang -> hung -> hung (悬挂); hanged -> hanged (绞死)"
    ],
    "usage": {
      "collocations": "hang out 闲逛; hang up 挂断电话; hang on 等一下; hang...on... 把...挂在...上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz94",
    "word": "download",
    "phonetic": "美 [ˌdaʊnˈloʊd]",
    "pos": "v.",
    "meaning": "下载",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "download → upload (反义词)"
    ],
    "usage": {
      "collocations": "download files 下载文件; free download 免费下载",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz95",
    "word": "dish",
    "phonetic": "美 [dɪʃ]",
    "pos": "n.",
    "meaning": "碗；盘,一道菜",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "dish (n.盘子/菜肴); dishy (adj.八卦的-非正式)"
    ],
    "usage": {
      "collocations": "do the dishes 洗碗; a dish of 一盘…; main dish 主菜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz96",
    "word": "insist",
    "phonetic": "美 [ɪnˈsɪst]",
    "pos": "v.",
    "meaning": "坚决要求；坚持",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "后接 on doing! insist that + 虚拟语气(should do)!"
    ],
    "usage": {
      "collocations": "insist on doing 坚持做; insist that sb (should) do 坚持要求某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz97",
    "word": "terrible",
    "phonetic": "美 [ˈterəbl]",
    "pos": "adj.",
    "meaning": "可怕的；糟糕的 adv.很；非常",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "terrible → terribly (adv.非常); terror (n.恐惧)"
    ],
    "usage": {
      "collocations": "terrible weather 糟糕的天气; feel terrible 感觉很糟",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz98",
    "word": "earthquake",
    "phonetic": "美 [ˈɜːrθkweɪk]",
    "pos": "n.",
    "meaning": "地震",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "earthquake = quake; earth + quake"
    ],
    "usage": {
      "collocations": "a big earthquake 大地震; earthquake hit/struck 地震袭击",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz99",
    "word": "explain",
    "phonetic": "美 [ɪkˈspleɪn]",
    "pos": "v.",
    "meaning": "解释；说明",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "explain to sb sth X -> explain sth to sb V; explanation (n.)"
    ],
    "usage": {
      "collocations": "explain sth to sb 向某人解释某事; explain oneself 解释自己的行为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz100",
    "word": "hometown",
    "phonetic": "美 [ˈhoʊmtaʊn]",
    "pos": "n.",
    "meaning": "家乡；故乡",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "hometown = home town; home + town"
    ],
    "usage": {
      "collocations": "go back to hometown 回家乡; hometown food 家乡菜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz101",
    "word": "together",
    "phonetic": "美 [təˈɡeðər]",
    "pos": "adv.",
    "meaning": "一起；总共",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "together → altogether (adv.总共)"
    ],
    "usage": {
      "collocations": "get together 聚在一起; work together 一起工作; together with 与…一起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz102",
    "word": "attend",
    "phonetic": "美 [əˈtend]",
    "pos": "v.",
    "meaning": "出席；上（大学等）；照顾",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz103",
    "word": "suppose",
    "phonetic": "美 [səˈpoʊz]",
    "pos": "v.",
    "meaning": "假定；猜想；推测",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "supposedly (adv.)"
    ],
    "usage": {
      "collocations": "be supposed to do 应该做; I suppose so 我想是的; suppose/supposing that... 假设...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz104",
    "word": "cause",
    "phonetic": "美 [ kɑːz]",
    "pos": "v.",
    "meaning": "引起 n.原因",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "辨析: cause(起因) vs reason(理由); because of + 名词"
    ],
    "usage": {
      "collocations": "cause of ...的原因; cause sb to do 导致某人做; cause and effect 因果",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz105",
    "word": "depend",
    "phonetic": "美 [dɪˈpend]",
    "pos": "v.",
    "meaning": "依靠；信任",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "dependent (adj.); independent (反); dependence (n.)"
    ],
    "usage": {
      "collocations": "depend on 依赖/取决于; It depends. 视情况而定; depend on sb to do 依赖某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz106",
    "word": "blame",
    "phonetic": "美 [bleɪm]",
    "pos": "v.",
    "meaning": "责备 n.责备；责任",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "blame sb for doing; 被动: be blamed for"
    ],
    "usage": {
      "collocations": "blame sb for sth 因某事责备某人; be to blame 应受责备; take the blame 承担责任",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz107",
    "word": "type",
    "phonetic": "美 [taɪp]",
    "pos": "n.",
    "meaning": "类型；特征 v.打字",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "type → typical (adj.典型的); typist (n.打字员)"
    ],
    "usage": {
      "collocations": "type of 类型; blood type 血型; type a letter 打一封信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz108",
    "word": "hobby",
    "phonetic": "美 [ˈhɑːbi]",
    "pos": "n.",
    "meaning": "嗜好；业余爱好",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "hobby → hobbies (复数); hobby (n.爱好)可数"
    ],
    "usage": {
      "collocations": "have a hobby 有爱好; one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz109",
    "word": "accord",
    "phonetic": "美 [əˈkɔːd]",
    "pos": "v.",
    "meaning": "赋予；授予 n.协议；条约",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "accord → according to (prep.根据); accordance (n.)"
    ],
    "usage": {
      "collocations": "of one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz110",
    "word": "heat",
    "phonetic": "美 [hiːt]",
    "pos": "n.",
    "meaning": "热；温度 v.加热；（使）变暖",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "heat → hot (adj.); heater (n.加热器); heating (n.供暖)"
    ],
    "usage": {
      "collocations": "heat up 加热; in the heat of 在…最激烈时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz111",
    "word": "satisfy",
    "phonetic": "美 [ˈsætɪsfaɪ]",
    "pos": "v.",
    "meaning": "使满意；使确信",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "satisfy → satisfaction (n.); satisfactory (adj.)"
    ],
    "usage": {
      "collocations": "satisfy one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz112",
    "word": "ability",
    "phonetic": "美 [əˈbɪləti]",
    "pos": "n.",
    "meaning": "能力；才智",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz113",
    "word": "college",
    "phonetic": "美 [ˈkɑːlɪdʒ]",
    "pos": "n.",
    "meaning": "学院；大学",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz114",
    "word": "include",
    "phonetic": "美 [ɪnˈkluːd]",
    "pos": "v.",
    "meaning": "包含，包括",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "including (prep.) 包括; included (adj.) 包括在内的"
    ],
    "usage": {
      "collocations": "include doing sth 包括做某事; be included in 被包含在",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz115",
    "word": "publish",
    "phonetic": "美 [ˈpʌblɪʃ]",
    "pos": "v.",
    "meaning": "出版；发表",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "publish → publisher (n.出版商); publication (n.)"
    ],
    "usage": {
      "collocations": "publish a book 出版书籍; get published 被出版",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz116",
    "word": "infer",
    "phonetic": "美 [ɪnˈfɜːr]",
    "pos": "v.",
    "meaning": "推断,推论",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "infer → inference (n.推断); 过去式inferred"
    ],
    "usage": {
      "collocations": "infer from 从…推断; infer that… 推断出…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz117",
    "word": "discuss",
    "phonetic": "美 [dɪˈskʌs]",
    "pos": "v.",
    "meaning": "讨论,论述",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "discuss about X -> discuss sth V; discussion (n.)"
    ],
    "usage": {
      "collocations": "discuss sth with sb 与某人讨论某事; discuss doing sth 讨论做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz118",
    "word": "yard",
    "phonetic": "美 [jɑːrd]",
    "pos": "n.",
    "meaning": "院子；码",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "yard (n.院子) = garden (英); yard (码-长度单位)"
    ],
    "usage": {
      "collocations": "school yard 校园; front/back yard 前/后院",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz119",
    "word": "province",
    "phonetic": "美 [ˈprɑːvɪns]",
    "pos": "n.",
    "meaning": "省；领域",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "province (n.省) → provincial (adj.省的)"
    ],
    "usage": {
      "collocations": "in the province of 在…省; Guangdong Province 广东省",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz120",
    "word": "arrangement",
    "phonetic": "美 [əˈreɪndʒmənt]",
    "pos": "n.",
    "meaning": "安排,筹备；约定",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "arrange (v.) → arrangement (n.); 常用复数"
    ],
    "usage": {
      "collocations": "make arrangements for 为…做安排; travel arrangements 旅行安排",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz121",
    "word": "capital",
    "phonetic": "美 [ˈkæpɪtl]",
    "pos": "n.",
    "meaning": "首都；省会；大写字母；资本 adj.大写的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "capital (n.首都/资本/大写字母)"
    ],
    "usage": {
      "collocations": "capital city 首都; capital letter 大写字母; investment capital 投资资本",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz122",
    "word": "order",
    "phonetic": "美 [ˈɔːdər]",
    "pos": "v.",
    "meaning": "命令；订购 n.顺序,条理",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "orderly (adj.) 有序的; disorder (n.) 混乱"
    ],
    "usage": {
      "collocations": "in order to do 为了做; in order that... 为了...; order sb to do 命令某人做; out of order 出故障",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz123",
    "word": "website",
    "phonetic": "美 [ˈwebsaɪt]",
    "pos": "n.",
    "meaning": "网站",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "website (n.网站); web + site"
    ],
    "usage": {
      "collocations": "official website 官方网站; visit a website 访问网站",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz124",
    "word": "station",
    "phonetic": "美 [ˈsteɪʃn]",
    "pos": "n.",
    "meaning": "火车站；长途汽车站",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "station (n.站/局/台)"
    ],
    "usage": {
      "collocations": "bus/train station 汽车/火车站; police station 警察局; radio station 广播电台",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz125",
    "word": "surf",
    "phonetic": "美 [sɜːrf]",
    "pos": "v.",
    "meaning": "冲浪；浏览 n.海浪",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "surf → surfer (n.冲浪者); surfing (n.冲浪运动)"
    ],
    "usage": {
      "collocations": "surf the Internet 上网; go surfing 去冲浪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz126",
    "word": "challenge",
    "phonetic": "美 [ˈtʃælɪndʒ]",
    "pos": "n.",
    "meaning": "挑战；质疑 v.向（某人）挑战；质疑",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "challenge → challenging (adj.有挑战性的)"
    ],
    "usage": {
      "collocations": "face a challenge 面对挑战; accept a challenge 接受挑战; challenge sb to do 挑战某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz127",
    "word": "candle",
    "phonetic": "美 [ˈkændl]",
    "pos": "n.",
    "meaning": "蜡烛",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "candle (n.蜡烛)"
    ],
    "usage": {
      "collocations": "light a candle 点蜡烛; candle light 烛光; burn the candle at both ends 过度劳累",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz128",
    "word": "flight",
    "phonetic": "美 [flaɪt]",
    "pos": "n.",
    "meaning": "飞行；班机",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "flight (n.航班/飞行/一段楼梯)"
    ],
    "usage": {
      "collocations": "take a flight 乘航班; flight attendant 空乘; flight of stairs 一段楼梯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz129",
    "word": "date",
    "phonetic": "美 [deɪt]",
    "pos": "n.",
    "meaning": "日期；约会 v.和…约会",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz130",
    "word": "fight",
    "phonetic": "美 [faɪt]",
    "pos": "v.",
    "meaning": "打仗；打架",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "fight -> fought -> fought; fighter (n.)"
    ],
    "usage": {
      "collocations": "fight against/with 与...斗争; fight for 为...而斗争; fight back 回击; have a fight 打架",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz131",
    "word": "simple",
    "phonetic": "美 [ˈsɪmpl]",
    "pos": "adj.",
    "meaning": "简单的；单纯的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "simple → simply (adv.); simplicity (n.)"
    ],
    "usage": {
      "collocations": "simple life 简单生活; simple question 简单问题; It",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz132",
    "word": "place",
    "phonetic": "美 [pleɪs]",
    "pos": "n.",
    "meaning": "位置；地位 v.放置；安顿",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "take place 无被动! 辨析: take place vs happen"
    ],
    "usage": {
      "collocations": "take place 发生/举行; in place 在适当位置; in the first place 首先; place of interest 名胜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz133",
    "word": "operate",
    "phonetic": "美 [ˈɑːpəreɪt]",
    "pos": "v.",
    "meaning": "运转；动手术",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "operation (n.); operator (n.)"
    ],
    "usage": {
      "collocations": "operate on sb 给某人做手术; operate a machine 操作机器; operate a business 经营企业",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz134",
    "word": "depress",
    "phonetic": "美 [dɪˈpres]",
    "pos": "v.",
    "meaning": "使沮丧, 使丧气",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "depress → depressed (adj.沮丧的); depression (n.)"
    ],
    "usage": {
      "collocations": "feel depressed 感到沮丧; depress the button 按下按钮",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz135",
    "word": "jungle",
    "phonetic": "美 [ˈdʒʌŋɡl]",
    "pos": "n.",
    "meaning": "（热带）丛林",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "jungle (n.丛林)"
    ],
    "usage": {
      "collocations": "in the jungle 在丛林中; concrete jungle 水泥丛林(城市); jungle law 丛林法则",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz136",
    "word": "fill",
    "phonetic": "美 [fɪl]",
    "pos": "v.",
    "meaning": "(使)充满；填补；满足",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "full (adj.) 满的"
    ],
    "usage": {
      "collocations": "fill...with... 用...装满...; be filled with 充满; fill in/out 填写(表格); fill up 装满",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz137",
    "word": "please",
    "phonetic": "美 [pliːz]",
    "pos": "adv.",
    "meaning": "请 v.使满意, 使愉快；喜欢",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "pleased (adj.) 满意的; pleasant (adj.) 令人愉快的"
    ],
    "usage": {
      "collocations": "please do... 请做...; as you please 随你便; please oneself 随自己的意; be pleased with 对...满意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz138",
    "word": "likely",
    "phonetic": "美 [ˈlaɪkli]",
    "pos": "adj.",
    "meaning": "很可能的 adv.很可能；或许",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "likely = probable; 反义词 unlikely; likelihood (n.)"
    ],
    "usage": {
      "collocations": "be likely to do 可能做; most likely 很可能; It is likely that… 很可能…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz139",
    "word": "smoke",
    "phonetic": "美 [smoʊk]",
    "pos": "n.",
    "meaning": "烟 v.吸烟；冒烟",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "smoke → smoker (n.吸烟者); smoking (n.吸烟)"
    ],
    "usage": {
      "collocations": "give up smoking 戒烟; no smoking 禁止吸烟; smoke detector 烟雾探测器",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz140",
    "word": "delicious",
    "phonetic": "美 [dɪˈlɪʃəs]",
    "pos": "adj.",
    "meaning": "美味的；令人愉快的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "delicious = tasty = yummy; deliciously (adv.)"
    ],
    "usage": {
      "collocations": "taste delicious 尝起来美味; delicious food 美味的食物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz141",
    "word": "trouble",
    "phonetic": "美 [ˈtrʌbl]",
    "pos": "v.",
    "meaning": "/n.麻烦,烦恼",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "trouble → troublesome (adj.令人烦恼的)"
    ],
    "usage": {
      "collocations": "in trouble 处于困境中; have trouble (in) doing 做某事有困难; get into trouble 惹麻烦",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz142",
    "word": "conditional",
    "phonetic": "美 [kənˈdɪʃənəl]",
    "pos": "adj.",
    "meaning": "有条件的",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "conditional (adj.) ← condition (n.条件)"
    ],
    "usage": {
      "collocations": "conditional sentence 条件句; be conditional on 以…为条件",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz143",
    "word": "spread",
    "phonetic": "美 [spred]",
    "pos": "n.",
    "meaning": "/v.传播；扩展",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "spread -> spread -> spread"
    ],
    "usage": {
      "collocations": "spread out 展开; spread to 传播到; spread...on... 把...涂在...上; spread the word 传播消息",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz144",
    "word": "death",
    "phonetic": "美 [deθ]",
    "pos": "n.",
    "meaning": "死；死亡",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "death → dead (adj.) → die (v.)"
    ],
    "usage": {
      "collocations": "death penalty 死刑; die a natural death 自然死亡; to death 到极点",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz145",
    "word": "desperate",
    "phonetic": "美 [ˈdespərət]",
    "pos": "adj.",
    "meaning": "不顾一切的；绝望的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "desperate → desperately (adv.); desperation (n.)"
    ],
    "usage": {
      "collocations": "be desperate for 非常渴望; be desperate to do 拼命想做; desperate measures 非常手段",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz146",
    "word": "coach",
    "phonetic": "美 [koʊtʃ]",
    "pos": "n.",
    "meaning": "教练；长途公车 v.训练；指导",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "coach (n.教练/长途汽车 v.训练)"
    ],
    "usage": {
      "collocations": "basketball coach 篮球教练; coach sb to do 训练某人做; by coach 乘长途汽车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz147",
    "word": "national",
    "phonetic": "美 [ˈnæʃnəl]",
    "pos": "adj.",
    "meaning": "国家的；民族的 n.国民",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "nation (n.) 国家 -> national (adj.) -> nationality (n.) 国籍"
    ],
    "usage": {
      "collocations": "National Day 国庆节; national flag 国旗; national park 国家公园",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz148",
    "word": "act",
    "phonetic": "美 [ækt]",
    "pos": "n.",
    "meaning": "行动；一幕 v.行动；表演",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "act → action (n.); active (adj.); actor/actress (n.)"
    ],
    "usage": {
      "collocations": "act as 充当;扮演; take action 采取行动; act out 表演出来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz149",
    "word": "apply",
    "phonetic": "美 [əˈplaɪ]",
    "pos": "v.",
    "meaning": "申请；应用",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "apply → application (n.); applicant (n.申请人)"
    ],
    "usage": {
      "collocations": "apply for 申请; apply to 适用于; apply oneself to 专心于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz150",
    "word": "avoid",
    "phonetic": "美 [əˈvɔɪd]",
    "pos": "v.",
    "meaning": "避免；回避",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "后接 doing 不接 to do! avoidable (adj.) 可避免的"
    ],
    "usage": {
      "collocations": "avoid doing sth 避免做某事; avoid sb/sth 回避某人/某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz151",
    "word": "experiment",
    "phonetic": "美 [ɪkˈsperɪmənt]",
    "pos": "n.",
    "meaning": "实验；尝试 v.尝试；进行实验",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "experiment (n./v.); experimental (adj.实验性的)"
    ],
    "usage": {
      "collocations": "do/perform an experiment 做实验; experiment with 试验…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz152",
    "word": "fantastic",
    "phonetic": "美 [fænˈtæstɪk]",
    "pos": "adj.",
    "meaning": "极好的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "fantastic = wonderful = great"
    ],
    "usage": {
      "collocations": "a fantastic view 绝美的景色; have a fantastic time 玩得很开心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz153",
    "word": "burn",
    "phonetic": "美 [bɜːrn]",
    "pos": "v.",
    "meaning": "燃烧；发烫 n.烧伤；烫伤",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "burn -> burned/burnt; burning (adj.)"
    ],
    "usage": {
      "collocations": "burn down 烧毁; burn up 烧尽/使发怒; burn...to the ground 把...烧成平地; burn out 烧尽",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz154",
    "word": "smell",
    "phonetic": "美 [smel]",
    "pos": "v.",
    "meaning": "嗅,闻 n.气味；嗅觉",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "smell -> smelled/smelt; 感官动词 + 形容词!"
    ],
    "usage": {
      "collocations": "smell like 闻起来像; smell good/bad 闻起来好/差; smell of 有...的气味",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz155",
    "word": "bottom",
    "phonetic": "美 [ˈbɑːtəm]",
    "pos": "n.",
    "meaning": "底部；末端 adj.底部的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz156",
    "word": "study",
    "phonetic": "美 [ˈstʌdi]",
    "pos": "v.",
    "meaning": "研究；学习 n.书房；研究；学习",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "study -> studied; student (n.)"
    ],
    "usage": {
      "collocations": "study for 为...而学习; study hard 努力学习; make a study of 研究...; study abroad 留学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz157",
    "word": "polite",
    "phonetic": "美 [pəˈlaɪt]",
    "pos": "adj.",
    "meaning": "有礼貌的；客套的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "polite → politely (adv.); politeness (n.); 反义词 impolite/rude"
    ],
    "usage": {
      "collocations": "be polite to sb 对某人有礼貌; It",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz158",
    "word": "recent",
    "phonetic": "美 [ˈriːsənt]",
    "pos": "adj.",
    "meaning": "近来的；新近的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "recently (adv.) = lately; 常用于现在完成时"
    ],
    "usage": {
      "collocations": "in recent years 近年来; a recent study 最近的研究",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz159",
    "word": "cancer",
    "phonetic": "美 [ˈkænsər]",
    "pos": "n.",
    "meaning": "癌症；（社会）毒瘤",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "cancer (n.癌症) 可作可数/不可数"
    ],
    "usage": {
      "collocations": "lung cancer 肺癌; die of cancer 死于癌症",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz160",
    "word": "bow",
    "phonetic": "美 [baʊ]",
    "pos": "v.",
    "meaning": "鞠躬；点头 n.马",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "bow (n./v.鞠躬) 发音 /baʊ/; bow (n.弓) 发音 /boʊ/"
    ],
    "usage": {
      "collocations": "bow to sb 向某人鞠躬; take a bow 鞠躬致谢; bow tie 蝴蝶领结",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz161",
    "word": "spirit",
    "phonetic": "美 [ˈspɪrət]",
    "pos": "n.",
    "meaning": "精神；心灵",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "spirit → spiritual (adj.精神的)"
    ],
    "usage": {
      "collocations": "team spirit 团队精神; in high spirits 情绪高涨; the Holy Spirit 圣灵",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz162",
    "word": "collect",
    "phonetic": "美 [kəˈlekt]",
    "pos": "v.",
    "meaning": "收集",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "collection (n.); collector (n.)"
    ],
    "usage": {
      "collocations": "collect stamps/coins 集邮/硬币; collect information 收集信息; collect sb 接某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz163",
    "word": "improve",
    "phonetic": "美 [ɪmˈpruːv]",
    "pos": "v.",
    "meaning": "改善；增加",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "improvement (n.); 可及物也可不及物"
    ],
    "usage": {
      "collocations": "improve oneself 提升自己; improve on/upon 改进; improve the situation 改善情况",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz164",
    "word": "break",
    "phonetic": "美 [breɪk]",
    "pos": "v.",
    "meaning": "弄坏；违犯；打断 n.休息",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "break -> broke -> broken; 中考高频短语辨析!"
    ],
    "usage": {
      "collocations": "break down 出故障; break into 闯入; break out 爆发; break up 分手/解散",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz165",
    "word": "talent",
    "phonetic": "美 [ˈtælənt]",
    "pos": "n.",
    "meaning": "才能；天才",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "talent → talented (adj.有天赋的); talent (n.)可数/不可数"
    ],
    "usage": {
      "collocations": "have a talent for 有…的天赋; talent show 才艺秀",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz166",
    "word": "die",
    "phonetic": "美 [daɪ]",
    "pos": "v.",
    "meaning": "死；消失",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "die -> died -> died; dying; dead (adj.); death (n.)"
    ],
    "usage": {
      "collocations": "die of 死于(内因); die from 死于(外因); die out 灭绝; be dying to do 渴望做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz167",
    "word": "marry",
    "phonetic": "美 [ˈmæri]",
    "pos": "v.",
    "meaning": "结婚；嫁；娶",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "marry 及物不加 with! marriage (n.); married (adj.)"
    ],
    "usage": {
      "collocations": "marry sb 与某人结婚; get married to sb 与某人结婚; be married to sb 与某人结婚(状态)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz168",
    "word": "humorous",
    "phonetic": "美 [ˈhjuːmərəs]",
    "pos": "adj.",
    "meaning": "滑稽有趣的；有幽默感的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "humorous → humor (n.幽默); humorist (n.幽默作家)"
    ],
    "usage": {
      "collocations": "a humorous person 幽默的人; humorous story 幽默故事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz169",
    "word": "cartoon",
    "phonetic": "美 [kɑːˈtuːn]",
    "pos": "n.",
    "meaning": "动画片；漫画",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "cartoon (n.卡通/动画片)"
    ],
    "usage": {
      "collocations": "cartoon character 卡通人物; watch cartoons 看动画片",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz170",
    "word": "honor",
    "phonetic": "美 [ˈɑːnər]",
    "pos": "n.",
    "meaning": "荣誉 v.给…以荣誉,尊敬",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "honor (美) = honour (英); honorable (adj.)"
    ],
    "usage": {
      "collocations": "in honor of 为了纪念/庆祝; It",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz171",
    "word": "hole",
    "phonetic": "美 [hoʊl]",
    "pos": "n.",
    "meaning": "洞；裂口 v.打洞",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hole (n.洞)"
    ],
    "usage": {
      "collocations": "dig a hole 挖洞; black hole 黑洞; hole in one 一杆进洞",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz172",
    "word": "burden",
    "phonetic": "美 [ˈbɜːrdn]",
    "pos": "n.",
    "meaning": "（义务,责任等的）重担；负担",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "burden (n./v.); burdensome (adj.沉重的)"
    ],
    "usage": {
      "collocations": "heavy burden 沉重的负担; financial burden 经济负担; burden sb with sth 使某人担负",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz173",
    "word": "impress",
    "phonetic": "美 [ɪmˈpres]",
    "pos": "v.",
    "meaning": "给…留下深刻的印象；使钦佩",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "impress → impression (n.); impressive (adj.令人印象深刻的)"
    ],
    "usage": {
      "collocations": "impress sb with sth 以…给某人留下印象; be impressed by 被…打动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz174",
    "word": "celebrate",
    "phonetic": "美 [ˈseləbreɪt]",
    "pos": "v.",
    "meaning": "庆祝；赞美",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz175",
    "word": "skate",
    "phonetic": "美 [skeɪt]",
    "pos": "v.",
    "meaning": "滑冰",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "skate → skater (n.滑冰者); skating (n.)"
    ],
    "usage": {
      "collocations": "go skating 去滑冰; ice skating 溜冰; skate on thin ice 冒险(习语)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz176",
    "word": "opposite",
    "phonetic": "美 [ˈɑːpəzɪt]",
    "pos": "prep.",
    "meaning": "在…的对面",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "opposite → opposition (n.反对)"
    ],
    "usage": {
      "collocations": "the opposite of …的反面; opposite direction 相反方向; on the opposite side 在对面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz177",
    "word": "contact",
    "phonetic": "美 [ˈkɑːntækt]",
    "pos": "n.",
    "meaning": "/v.联系；接触",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "contact (n./v.); contact sb directly 直接联系某人"
    ],
    "usage": {
      "collocations": "keep in contact with 与…保持联系; contact lens 隐形眼镜; eye contact 眼神交流",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz178",
    "word": "underline",
    "phonetic": "美 [ˌʌndəˈlaɪn]",
    "pos": "v.",
    "meaning": "在…下划线；强调",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "underline = under + line"
    ],
    "usage": {
      "collocations": "underline the key words 划出关键词; underline the importance 强调重要性",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz179",
    "word": "bet",
    "phonetic": "美 [bet]",
    "pos": "n.",
    "meaning": "/v. 打赌",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "bet → bet → bet"
    ],
    "usage": {
      "collocations": "make a bet 打赌; I bet… 我打赌…; you bet! 当然！",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz180",
    "word": "case",
    "phonetic": "美 [keɪs]",
    "pos": "n.",
    "meaning": "情况；实例；箱",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz181",
    "word": "agree",
    "phonetic": "美 [əˈgriː]",
    "pos": "v.",
    "meaning": "同意",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "agreement (n.); disagree (反); 注意介词搭配!"
    ],
    "usage": {
      "collocations": "agree with sb 同意某人; agree to do 同意做; agree on 就...达成一致; agree to sth 同意某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz182",
    "word": "head",
    "phonetic": "美 [hed]",
    "pos": "n.",
    "meaning": "头部；adj.领袖首要的 v.前进",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "head → heading (n.标题); ahead (adv.在前面)"
    ],
    "usage": {
      "collocations": "head for 前往; head teacher 校长; shake one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz183",
    "word": "doubt",
    "phonetic": "美 [daʊt]",
    "pos": "n.",
    "meaning": "疑惑 v.怀疑",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "doubtful (adj.); no doubt = undoubtedly"
    ],
    "usage": {
      "collocations": "without doubt 毫无疑问; there is no doubt that... 毫无疑问...; in doubt 不确定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz184",
    "word": "festival",
    "phonetic": "美 [ˈfestɪvəl]",
    "pos": "n.",
    "meaning": "节日",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz185",
    "word": "environment",
    "phonetic": "美 [ɪnˈvaɪrənmənt]",
    "pos": "n.",
    "meaning": "环境；外界",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz186",
    "word": "exchange",
    "phonetic": "美 [ɪksˈtʃeɪndʒ]",
    "pos": "n.",
    "meaning": "/v.交换；兑换",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "exchange → exchangeable (adj.可交换的)"
    ],
    "usage": {
      "collocations": "exchange student 交换生; exchange rate 汇率; exchange A for B 用A换B",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz187",
    "word": "monitor",
    "phonetic": "美 [ˈmɑːnɪtər]",
    "pos": "n.",
    "meaning": "班长 v.监视；监督",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "作\"班长\"可数; 作\"监视器\"可数"
    ],
    "usage": {
      "collocations": "class monitor 班长; monitor screen 监视器屏幕",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz188",
    "word": "journey",
    "phonetic": "美 [ˈdʒɜːrni]",
    "pos": "n.",
    "meaning": "旅行；行程 v.旅行",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "journey (n.旅程) = trip; 辨析 journey vs. travel vs. trip"
    ],
    "usage": {
      "collocations": "go on a journey 去旅行; safe journey 一路平安; life",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz189",
    "word": "appear",
    "phonetic": "美 [əˈpɪr]",
    "pos": "v.",
    "meaning": "显得；似乎；出现",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz190",
    "word": "angry",
    "phonetic": "美 [ˈæŋgri]",
    "pos": "adj.",
    "meaning": "生气的；愤怒的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz191",
    "word": "title",
    "phonetic": "美 [ˈtaɪtl]",
    "pos": "n.",
    "meaning": "标题 v.加标题于",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "title (n.标题/头衔); entitle (v.给…权利/命名)"
    ],
    "usage": {
      "collocations": "the title of …的标题; win the title 赢得冠军/头衔",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz192",
    "word": "remind",
    "phonetic": "美 [rɪˈmaɪnd]",
    "pos": "v.",
    "meaning": "使想起，使记起；提醒",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "remind + sb + of / to do; reminder (n.)"
    ],
    "usage": {
      "collocations": "remind sb of sth 提醒某人某事; remind sb to do 提醒某人做; remind sb that...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz193",
    "word": "dry",
    "phonetic": "美 [draɪ]",
    "pos": "adj.",
    "meaning": "干的；枯燥乏味的 v.使变干；弄干",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz194",
    "word": "amount",
    "phonetic": "美 [əˈmaʊnt]",
    "pos": "n.",
    "meaning": "数量；总数 v.总计；合计",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "amount of + 不可数; number of + 可数"
    ],
    "usage": {
      "collocations": "a large amount of 大量的(不可数); the total amount 总量",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz195",
    "word": "skin",
    "phonetic": "美 [skɪn]",
    "pos": "n.",
    "meaning": "皮肤",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "skin → skinny (adj.极瘦的)"
    ],
    "usage": {
      "collocations": "skin care 护肤; skin color 肤色; have thick/thin skin 脸皮厚/薄(习语)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz196",
    "word": "print",
    "phonetic": "美 [prɪnt]",
    "pos": "v.",
    "meaning": "打印 n.印刷；印记",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "printer (n.); printing (n.)"
    ],
    "usage": {
      "collocations": "print out 打印出来; in print 已出版; out of print 绝版; print...on... 在...上印...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz197",
    "word": "season",
    "phonetic": "美 [ˈsiːzn]",
    "pos": "n.",
    "meaning": "季节；季",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "season → seasonal (adj.季节性的)"
    ],
    "usage": {
      "collocations": "dry/rainy season 旱/雨季; in season 当季; out of season 不当季",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz198",
    "word": "balance",
    "phonetic": "美 [ˈbæləns]",
    "pos": "n.",
    "meaning": "平衡；均势",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "balance → balanced (adj.均衡的)"
    ],
    "usage": {
      "collocations": "keep/lose balance 保持/失去平衡; a sense of balance 平衡感; balance A with B 平衡A和B",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz199",
    "word": "dining",
    "phonetic": "美 [dainiŋ]",
    "pos": "v.",
    "meaning": "进餐；用餐（dine 的现在分词）n.吃饭，进餐；宴会",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "dine (v.进餐) → dining; 注意dining拼写(无double n)"
    ],
    "usage": {
      "collocations": "dining room 餐厅; dining table 餐桌; fine dining 精致餐饮",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz200",
    "word": "purpose",
    "phonetic": "美 [ˈpɜːrpəs]",
    "pos": "n.",
    "meaning": "目的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "purposefully (adv.) 有目的地"
    ],
    "usage": {
      "collocations": "on purpose 故意地; the purpose of ...的目的; for the purpose of 为了...目的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz201",
    "word": "speech",
    "phonetic": "美 [spiːtʃ]",
    "pos": "n.",
    "meaning": "演讲；讲话",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "speech → speak (v.); speechless (adj.说不出话的)"
    ],
    "usage": {
      "collocations": "give a speech 发表演讲; freedom of speech 言论自由; speech contest 演讲比赛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz202",
    "word": "point",
    "phonetic": "美 [pɔɪnt]",
    "pos": "n.",
    "meaning": "要点；得分 v.指向",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "pointless (adj.); pointer (n.)"
    ],
    "usage": {
      "collocations": "point out 指出; point at/to 指着/指向; point of view 观点; there is no point in doing 做...无意义",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz203",
    "word": "invent",
    "phonetic": "美 [ɪnˈvent]",
    "pos": "v.",
    "meaning": "发明；创造",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "inventor (n.) 发明家; invention (n.) 发明"
    ],
    "usage": {
      "collocations": "invent a story 编造故事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz204",
    "word": "scene",
    "phonetic": "美 [siːn]",
    "pos": "n.",
    "meaning": "现场；场面；景色",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "scene → scenery (n.风景-不可数)"
    ],
    "usage": {
      "collocations": "crime scene 犯罪现场; on the scene 在现场; behind the scenes 幕后",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz205",
    "word": "contest",
    "phonetic": "美 [ˈkɑːntest]",
    "pos": "v.",
    "meaning": "竞争；争辩 n.比赛",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "contest → contestant (n.参赛者)"
    ],
    "usage": {
      "collocations": "speech contest 演讲比赛; enter a contest 参加比赛; win a contest 赢得比赛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz206",
    "word": "stamp",
    "phonetic": "美 [stæmp]",
    "pos": "n.",
    "meaning": "邮票 v.盖章；重踩",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "stamp (n.邮票/印章 v.跺脚)"
    ],
    "usage": {
      "collocations": "postage stamp 邮票; rubber stamp 橡皮图章; stamp collection 集邮",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz207",
    "word": "engineer",
    "phonetic": "美 [ˌendʒɪˈnɪr]",
    "pos": "n.",
    "meaning": "工程师 v.策划；设计",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "engineer (n.) → engineering (n.工程学); engine (n.引擎)"
    ],
    "usage": {
      "collocations": "software engineer 软件工程师; civil engineer 土木工程师",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz208",
    "word": "conversation",
    "phonetic": "美 [ˌkɑːnvəˈseɪʃn]",
    "pos": "n.",
    "meaning": "(非正式)谈话；交谈",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "= talk/dialogue; conversational (adj.)"
    ],
    "usage": {
      "collocations": "have a conversation with 与...交谈; make conversation 找话题闲聊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz209",
    "word": "attitude",
    "phonetic": "美 [ˈætɪtjuːd]",
    "pos": "n.",
    "meaning": "态度；看法",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "attitude → attitudinal (adj.态度的)"
    ],
    "usage": {
      "collocations": "positive attitude 积极态度; attitude to/towards 对…的态度",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz210",
    "word": "against",
    "phonetic": "美 [əˈɡenst]",
    "pos": "prep.",
    "meaning": "反对；违反；依靠",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz211",
    "word": "mountain",
    "phonetic": "美 [ˈmaʊntən]",
    "pos": "n.",
    "meaning": "高山,山脉",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "mountain → mountainous (adj.多山的)"
    ],
    "usage": {
      "collocations": "climb a mountain 爬山; mountain range 山脉; mountain climbing 登山",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz212",
    "word": "internet",
    "phonetic": "美 [ˈɪntənet]",
    "pos": "n.",
    "meaning": "互联网",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "Internet (专有名词，首字母大写); 常加the"
    ],
    "usage": {
      "collocations": "surf the Internet 上网; Internet access 网络接入; on the Internet 在网上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz213",
    "word": "lesson",
    "phonetic": "美 [ˈlesn]",
    "pos": "n.",
    "meaning": "一节课；经验,教训",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "lesson (n.课/教训)"
    ],
    "usage": {
      "collocations": "have a lesson 上课; learn a lesson 吸取教训; give sb a lesson 给某人一个教训",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz214",
    "word": "review",
    "phonetic": "美 [rɪˈvjuː]",
    "pos": "v.",
    "meaning": "复习；复查 n.评述；复习",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reviewer (n.)"
    ],
    "usage": {
      "collocations": "review...for... 为...复习...; do a review 做复习; review lessons 复习功课; under review 在审查中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz215",
    "word": "entertainment",
    "phonetic": "美 [ˌentəˈteɪnmənt]",
    "pos": "n.",
    "meaning": "娱乐,文娱节目",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "entertain (v.) → entertainment (n.); entertaining (adj.有趣的)"
    ],
    "usage": {
      "collocations": "entertainment industry 娱乐业; for entertainment 为了娱乐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz216",
    "word": "skill",
    "phonetic": "美 [skɪl]",
    "pos": "n.",
    "meaning": "技巧；本领",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "skill → skillful (adj.熟练的); skilled (adj.有技能的)"
    ],
    "usage": {
      "collocations": "communication skill 沟通技巧; basic skill 基本技能; have the skill to do 有技能做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz217",
    "word": "ancient",
    "phonetic": "美 [ˈeɪnʃənt]",
    "pos": "adj.",
    "meaning": "古代的；古老的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz218",
    "word": "taste",
    "phonetic": "美 [teɪst]",
    "pos": "v.",
    "meaning": "尝起来 n.味道,口味",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "taste → tasty (adj.美味的); tasteless (adj.无味的)"
    ],
    "usage": {
      "collocations": "have a taste of 尝一尝; taste delicious 尝起来美味; good taste 好品味",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz219",
    "word": "disaster",
    "phonetic": "美 [dɪˈzɑːstər]",
    "pos": "n.",
    "meaning": "灾难；灾祸",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "disaster → disastrous (adj.灾难性的)"
    ],
    "usage": {
      "collocations": "natural disaster 自然灾害; disaster area 灾区; disaster relief 救灾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz220",
    "word": "disappear",
    "phonetic": "美 [ˌdɪsəˈpɪr]",
    "pos": "v.",
    "meaning": "消失；失踪",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "disappear → disappearance (n.); 反义词appear"
    ],
    "usage": {
      "collocations": "disappear from sight 从视野中消失; disappear into 消失在…中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz221",
    "word": "eagle",
    "phonetic": "美 [ˈiːɡl]",
    "pos": "n.",
    "meaning": "鹰；雕",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "eagle (n.鹰); eaglet (n.小鹰)"
    ],
    "usage": {
      "collocations": "bald eagle 白头鹰; eagle eye 鹰眼/锐利的目光",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz222",
    "word": "abroad",
    "phonetic": "美 [əˈbrɔːd]",
    "pos": "adv.",
    "meaning": "在国外；到海外 adj.往国外的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz223",
    "word": "temperature",
    "phonetic": "美 [ˈtemprətʃər]",
    "pos": "n.",
    "meaning": "气温；体温",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "temperature → temperate (adj.温和的)"
    ],
    "usage": {
      "collocations": "high/low temperature 高/低温; take one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz224",
    "word": "move",
    "phonetic": "美 [muːv]",
    "pos": "v.",
    "meaning": "移动；感动 n.行动；搬迁",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "movement (n.); moving (adj.) 感人的; moved (adj.) 感动的"
    ],
    "usage": {
      "collocations": "move to 搬到; move on 继续前进; be moved to tears 感动得流泪; move away 搬走",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz225",
    "word": "disable",
    "phonetic": "美 [dɪsˈeɪbl]",
    "pos": "v.",
    "meaning": "使失去能力；使残废",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "disable → disabled (adj.); disability (n.残疾)"
    ],
    "usage": {
      "collocations": "disable a function 禁用功能; the disabled 残疾人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz226",
    "word": "experience",
    "phonetic": "美 [ɪkˈspɪriəns]",
    "pos": "n.",
    "meaning": "经验；经历 v.经历；体验",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "作\"经验\"不可数; 作\"经历\"可数; experienced (adj.) 有经验的"
    ],
    "usage": {
      "collocations": "work/life experience 工作/生活经验; have experience in 在...方面有经验; an unforgettable experience 难忘的经历",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz227",
    "word": "famous",
    "phonetic": "美 [ˈfeɪməs]",
    "pos": "adj.",
    "meaning": "著名的,出名的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz228",
    "word": "afraid",
    "phonetic": "美 [əˈfreɪd]",
    "pos": "adj.",
    "meaning": "害怕的；恐惧的；抱歉的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "afraid 只作表语,不作定语; I am afraid so/not 恐怕是/不是"
    ],
    "usage": {
      "collocations": "be afraid of (doing) sth 害怕(做)某事; be afraid to do 不敢做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz229",
    "word": "activity",
    "phonetic": "美 [ækˈtɪvɪti]",
    "pos": "n.",
    "meaning": "活动；活跃",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz230",
    "word": "danger",
    "phonetic": "美 [ˈdeɪndʒə]",
    "pos": "n.",
    "meaning": "危险；危险物；威胁",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "dangerous (adj.危险的-对别人); endangered (adj.濒危的)"
    ],
    "usage": {
      "collocations": "in danger 处于危险中; out of danger 脱离危险; danger zone 危险区",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz231",
    "word": "university",
    "phonetic": "美 [ˌjuːnɪˈvɜːrsəti]",
    "pos": "n.",
    "meaning": "（综合性）大学",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "university → universal (adj.普遍的)"
    ],
    "usage": {
      "collocations": "go to university 上大学; university student 大学生; Peking University 北京大学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz232",
    "word": "monster",
    "phonetic": "美 [ˈmɑːnstər]",
    "pos": "n.",
    "meaning": "怪物,怪兽；庞然大物",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "monster → monstrous (adj.巨大的/可怕的)"
    ],
    "usage": {
      "collocations": "sea monster 海怪; monster truck 怪兽卡车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz233",
    "word": "underground",
    "phonetic": "美 [ˌʌndəˈɡraʊnd]",
    "pos": "n.",
    "meaning": "地铁 adj.地下的；秘密的 adv.在底下",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "underground = subway (美) = tube (英)"
    ],
    "usage": {
      "collocations": "underground station 地铁站; go underground 转入地下; underground passage 地下通道",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz234",
    "word": "injury",
    "phonetic": "美 [ˈɪndʒəri]",
    "pos": "n.",
    "meaning": "伤害,受伤处",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "injure (v.) → injury (n.); injured (adj.受伤的)"
    ],
    "usage": {
      "collocations": "suffer an injury 受伤; sports injury 运动损伤; minor injury 轻伤",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz235",
    "word": "match",
    "phonetic": "美 [mætʃ]",
    "pos": "v.",
    "meaning": "使相配 n.比赛；火柴",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "match → matching (adj.相配的); matchless (adj.无可匹敌的)"
    ],
    "usage": {
      "collocations": "football match 足球比赛; match A with B 把A与B匹配; a perfect match 绝配",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz236",
    "word": "spend",
    "phonetic": "美 [spend]",
    "pos": "v.",
    "meaning": "渡过；花费 n.预算",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "spend -> spent -> spent; 主语是人! cost/take/pay 辨析常考"
    ],
    "usage": {
      "collocations": "spend time/money on sth 花时间/钱在某事上; spend...(in) doing 花...做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz237",
    "word": "pollute",
    "phonetic": "美 [pəˈluːt]",
    "pos": "n.",
    "meaning": "污染；弄脏",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "pollution (n.); pollutant (n.)"
    ],
    "usage": {
      "collocations": "pollute the environment 污染环境; be polluted by 被...污染; pollute air/water 污染空气/水",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz238",
    "word": "direct",
    "phonetic": "美 [dəˈrekt]",
    "pos": "adj.",
    "meaning": "直接的；笔直的 v.导演；指路",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "direct → directly (adv.); director (n.导演/主管); direction (n.)"
    ],
    "usage": {
      "collocations": "direct flight 直飞航班; direct sb to do 指示某人做; in the direct direction 在直接方向",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz239",
    "word": "remain",
    "phonetic": "美 [rɪˈmeɪn]",
    "pos": "v.",
    "meaning": "仍然是；剩余,遗留",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "remain 作\"保持\"= stay; remaining (adj.) 剩余的"
    ],
    "usage": {
      "collocations": "remain + adj./n. 保持...; remain to be done 有待被做; remain silent 保持沉默",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz240",
    "word": "note",
    "phonetic": "美 [noʊt]",
    "pos": "n.",
    "meaning": "笔记；纸币",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "notable (adj.); notice (v./n.)"
    ],
    "usage": {
      "collocations": "take notes 做笔记; note down 记下; of note 重要的; leave a note 留便条; note that... 注意...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz241",
    "word": "pay",
    "phonetic": "美 [peɪ]",
    "pos": "v.",
    "meaning": "付费；付代价",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "pay -> paid -> paid; payment (n.); 主语是人!"
    ],
    "usage": {
      "collocations": "pay for 为...付钱; pay off 还清/得到回报; pay back 偿还/报复; pay attention to 注意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz242",
    "word": "community",
    "phonetic": "美 [kəˈmjuːnəti]",
    "pos": "n.",
    "meaning": "社区；团体；社团",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "community (n.社区/团体)"
    ],
    "usage": {
      "collocations": "community service 社区服务; international community 国际社会; community center 社区中心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz243",
    "word": "truth",
    "phonetic": "美 [truːθ]",
    "pos": "n.",
    "meaning": "真相，真理",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "truth → true (adj.); truthful (adj.诚实的)"
    ],
    "usage": {
      "collocations": "tell the truth 说实话; the truth is that… 事实是…; in truth 事实上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz244",
    "word": "group",
    "phonetic": "美 [gruːp]",
    "pos": "n.",
    "meaning": "组；团队；群",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "group (n./v.); grouping (n.分组)"
    ],
    "usage": {
      "collocations": "a group of 一组/一群; work in groups 小组合作; age group 年龄段",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz245",
    "word": "excellent",
    "phonetic": "美 [ˈeksələnt]",
    "pos": "adj.",
    "meaning": "卓越的；极好的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "excellent = wonderful = outstanding; excellence (n.)"
    ],
    "usage": {
      "collocations": "excellent job 出色的工作; excellent quality 优质; be excellent at 擅长",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz246",
    "word": "create",
    "phonetic": "美 [kriˈeɪt]",
    "pos": "v.",
    "meaning": "创造；创作；产生",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "creation (n.); creative (adj.); creator (n.)"
    ],
    "usage": {
      "collocations": "create...from... 从...创造; create a new world 创造新世界; create opportunities 创造机会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz247",
    "word": "disease",
    "phonetic": "美 [dɪˈziːz]",
    "pos": "n.",
    "meaning": "病；弊病",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "辨析: disease(具体的病) vs illness(生病的状态)"
    ],
    "usage": {
      "collocations": "heart disease 心脏病; suffer from a disease 患病; infectious disease 传染病",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz248",
    "word": "supply",
    "phonetic": "美 [səˈplaɪ]",
    "pos": "",
    "meaning": "供应量；补给 v.供应，供给",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "supplier (n.)"
    ],
    "usage": {
      "collocations": "supply sb with sth = supply sth to sb 提供某人某物; supply and demand 供求; in short supply 供应不足",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz249",
    "word": "apologize",
    "phonetic": "美 [əˈpɑːlədʒaɪz]",
    "pos": "v.",
    "meaning": "道歉",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "apologize → apology (n.); apologetic (adj.道歉的)"
    ],
    "usage": {
      "collocations": "apologize to sb for sth 因某事向某人道歉; make an apology 道歉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz250",
    "word": "culture",
    "phonetic": "美 [ˈkʌltʃə]",
    "pos": "n.",
    "meaning": "文化；文明",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "culture → cultural (adj.文化的)"
    ],
    "usage": {
      "collocations": "traditional culture 传统文化; culture shock 文化冲击; pop culture 流行文化",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz251",
    "word": "enjoy",
    "phonetic": "美 [ɪnˈdʒɔɪ]",
    "pos": "v.",
    "meaning": "喜欢；享受；玩得痛快",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "joy (n.) 快乐; enjoyable (adj.) 令人愉快的"
    ],
    "usage": {
      "collocations": "enjoy doing 喜欢做; enjoy oneself 玩得开心; enjoy good health 享有健康",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz252",
    "word": "protect",
    "phonetic": "美 [prəˈtekt]",
    "pos": "v.",
    "meaning": "保护",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "protection (n.); protective (adj.)"
    ],
    "usage": {
      "collocations": "protect...from/against... 保护...免受...; protect the environment 保护环境",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz253",
    "word": "main",
    "phonetic": "美 [meɪn]",
    "pos": "adj.",
    "meaning": "主要的；最重要的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "main → mainly (adv.主要地)"
    ],
    "usage": {
      "collocations": "main reason 主要原因; main course 主菜; main idea 主旨",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz254",
    "word": "hear",
    "phonetic": "美 [hɪr]",
    "pos": "v.",
    "meaning": "听到；听说",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hear -> heard -> heard; hearing (n.) 听力"
    ],
    "usage": {
      "collocations": "hear from 收到...的来信; hear of/about 听说; hear sb do/doing 听到某人做了/正在做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz255",
    "word": "alive",
    "phonetic": "美 [əˈlaɪv]",
    "pos": "adj.",
    "meaning": "活着的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz256",
    "word": "result",
    "phonetic": "美 [rɪˈzʌlt]",
    "pos": "n.",
    "meaning": "结果,后果 v.造成,导致",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "result in (导致) vs. result from (源于)"
    ],
    "usage": {
      "collocations": "as a result 结果; result in 导致; result from 由…引起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz257",
    "word": "average",
    "phonetic": "美 [ˈævərɪdʒ]",
    "pos": "n.",
    "meaning": "平均；平均数 adj.平均的；普通的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "average (n./adj./v.); averagely (adv.)"
    ],
    "usage": {
      "collocations": "on average 平均; above/below average 高于/低于平均水平",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz258",
    "word": "saying",
    "phonetic": "美 [ˈseɪɪŋ]",
    "pos": "n.",
    "meaning": "话；谚语",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "saying = proverb; say (v.) → saying (n.)"
    ],
    "usage": {
      "collocations": "as the saying goes 俗话说; old saying 老话/谚语",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz259",
    "word": "write",
    "phonetic": "美 [raɪt]",
    "pos": "v.",
    "meaning": "书写；写作；写信",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "write -> wrote -> written; writer (n.); writing (n.)"
    ],
    "usage": {
      "collocations": "write down 写下; write to sb 给某人写信; write about 写关于...; write back 回信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz260",
    "word": "camp",
    "phonetic": "美 [kæmp]",
    "pos": "n.",
    "meaning": "营地；度假营；阵营 v.宿营；野营",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz261",
    "word": "upset",
    "phonetic": "美 [ˌʌpˈset]",
    "pos": "v.",
    "meaning": "使烦恼；打乱 adj.难过的；失望的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "upset → upset → upset; upsetting (adj.)"
    ],
    "usage": {
      "collocations": "feel upset 感到难过; upset the plan 打乱计划; stomach upset 胃不舒服",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz262",
    "word": "craze",
    "phonetic": "美 [kreɪz]",
    "pos": "adj.",
    "meaning": "疯狂的；生气的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "craze → crazy (adj.疯狂的)"
    ],
    "usage": {
      "collocations": "fashion craze 时尚热潮; dance craze 舞蹈热",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz263",
    "word": "special",
    "phonetic": "美 [ˈspeʃəl]",
    "pos": "adj.",
    "meaning": "特别的；专用的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "special → specially (adv.); specialist (n.专家)"
    ],
    "usage": {
      "collocations": "special offer 特价; special needs 特殊需求; special occasion 特殊场合",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz264",
    "word": "design",
    "phonetic": "美 [dɪˈzaɪn]",
    "pos": "n.",
    "meaning": "设计；安排 v.设计；计划",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "design → designer (n.设计师); design (n./v.)"
    ],
    "usage": {
      "collocations": "design a plan 设计方案; fashion design 时装设计; by design 故意地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz265",
    "word": "happen",
    "phonetic": "美 [ˈhæpən]",
    "pos": "v.",
    "meaning": "发生；碰巧",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "happening (n.) 事件; happen 不及物,无被动!"
    ],
    "usage": {
      "collocations": "happen to do 碰巧做; happen to sb 发生在某人身上; as it happens 碰巧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz266",
    "word": "adult",
    "phonetic": "美 [ˈædʌlt]",
    "pos": "n.",
    "meaning": "成年人 adj.成年的；成熟的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "adult → adulthood (n.成年)"
    ],
    "usage": {
      "collocations": "adult education 成人教育; young adult 年轻人; adult content 成人内容",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz267",
    "word": "sting",
    "phonetic": "美 [stɪŋ]",
    "pos": "v.",
    "meaning": "叮；敲诈 n.刺；叮伤",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "sting → stung → stung"
    ],
    "usage": {
      "collocations": "bee sting 蜜蜂蜇; sting operation 钓鱼执法",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz268",
    "word": "belt",
    "phonetic": "美 [belt]",
    "pos": "n.",
    "meaning": "带；腰带 v.用带子系住",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "belt (n.皮带/地带)"
    ],
    "usage": {
      "collocations": "seat belt 安全带; black belt 黑带; tighten one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz269",
    "word": "chocolate",
    "phonetic": "美 [ˈtʃɑːklət]",
    "pos": "n.",
    "meaning": "巧克力；巧克力色",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "chocolate (n.) 不可数; chocolates (复数) 巧克力糖"
    ],
    "usage": {
      "collocations": "a bar of chocolate 一块巧克力; chocolate cake 巧克力蛋糕; hot chocolate 热巧克力",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz270",
    "word": "through",
    "phonetic": "美 [θruː]",
    "pos": "prep.",
    "meaning": "穿过",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "through (穿过内部) vs. across (穿过表面)"
    ],
    "usage": {
      "collocations": "go through 经历; look through 浏览; get through 完成;接通",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz271",
    "word": "advice",
    "phonetic": "美 [ədˈvaɪs]",
    "pos": "n.",
    "meaning": "劝告；忠告；建议",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz272",
    "word": "hardly",
    "phonetic": "美 [ˈhɑːrdli]",
    "pos": "adv.",
    "meaning": "几乎不；几乎没有",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "hardly 是否定副词; 不与not连用; hardly = almost not"
    ],
    "usage": {
      "collocations": "hardly ever 几乎从不; hardly…when 刚…就…; can hardly wait 迫不及待",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz273",
    "word": "tie",
    "phonetic": "美 [taɪ]",
    "pos": "n.",
    "meaning": "领带；绳子 v.系；连接",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "tie -> tied -> tied; tie 作名词\"领带/平局\""
    ],
    "usage": {
      "collocations": "tie...to... 把...系在...; tie up 捆好; tie in with 与...一致; tie a tie 打领带",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz274",
    "word": "breath",
    "phonetic": "美 [breθ]",
    "pos": "n.",
    "meaning": "呼吸",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz275",
    "word": "post",
    "phonetic": "美 [poʊst]",
    "pos": "n.",
    "meaning": "邮件；岗位 v.邮递；公布",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "也可作\"职位\": apply for a post"
    ],
    "usage": {
      "collocations": "post office 邮局; post a letter 寄信; post on social media 发布到社交媒体",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz276",
    "word": "medicine",
    "phonetic": "美 [ˈmedsn]",
    "pos": "n.",
    "meaning": "药；医学",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "medicine → medical (adj.); medication (n.)"
    ],
    "usage": {
      "collocations": "take medicine 吃药; traditional Chinese medicine 中医; medicine for …的药",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz277",
    "word": "refer",
    "phonetic": "美 [rɪˈfɜːr]",
    "pos": "v.",
    "meaning": "提到；参考",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reference (n.) 参考; refer to doing!"
    ],
    "usage": {
      "collocations": "refer to 指的是/参考/提及; refer...to... 把...提交给...; refer to...as... 把...称为...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz278",
    "word": "blind",
    "phonetic": "美 [blaɪnd]",
    "pos": "adj.",
    "meaning": "盲目的；瞎的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz279",
    "word": "process",
    "phonetic": "美 [ˈproʊses]",
    "pos": "n.",
    "meaning": "过程 v.加工",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "process → procession (n.行列); processor (n.处理器)"
    ],
    "usage": {
      "collocations": "in the process of 在…过程中; learning process 学习过程; process information 处理信息",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz280",
    "word": "addict",
    "phonetic": "美 [ˈædɪkt]",
    "pos": "v.",
    "meaning": "使沉溺；使上瘾 n.有瘾的人；入迷的人",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "addict → addiction (n.); addictive (adj.上瘾的)"
    ],
    "usage": {
      "collocations": "be addicted to 沉迷于; drug addict 吸毒者; Internet addict 网瘾者",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz281",
    "word": "president",
    "phonetic": "美 [ˈprezɪdənt]",
    "pos": "n.",
    "meaning": "总统；主席",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "president → presidential (adj.总统的)"
    ],
    "usage": {
      "collocations": "vice president 副总统/副总裁; former president 前总统",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz282",
    "word": "silence",
    "phonetic": "美 [ˈsaɪləns]",
    "pos": "n.",
    "meaning": "寂静；沉默",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "silent (adj.); silently (adv.)"
    ],
    "usage": {
      "collocations": "in silence 沉默地; break the silence 打破沉默; keep silence 保持安静",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz283",
    "word": "mad",
    "phonetic": "美 [mæd]",
    "pos": "adj.",
    "meaning": "疯狂的；着迷的 n.狂怒",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "mad = angry (英) = crazy (美); madness (n.)"
    ],
    "usage": {
      "collocations": "be mad at/with sb 对某人生气; go mad 发疯; be mad about 对…着迷",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz284",
    "word": "mouse",
    "phonetic": "美 [maʊs]",
    "pos": "n.",
    "meaning": "老鼠；鼠标",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "mouse → mice (复数)"
    ],
    "usage": {
      "collocations": "computer mouse 电脑鼠标; as quiet as a mouse 非常安静(习语)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz285",
    "word": "strength",
    "phonetic": "美 [streŋθ]",
    "pos": "n.",
    "meaning": "力量；力气；优势；优点",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "strength → strong (adj.); strengthen (v.加强)"
    ],
    "usage": {
      "collocations": "strengths and weaknesses 优点和缺点; physical strength 体力; build up strength 增强力量",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz286",
    "word": "concentrate",
    "phonetic": "美 [ˈkɑːnsntreɪt]",
    "pos": "v.",
    "meaning": "集中（注意力）",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "concentrate → concentration (n.); 搭配 on + n./doing"
    ],
    "usage": {
      "collocations": "concentrate on 集中注意力于; concentrate one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz287",
    "word": "similar",
    "phonetic": "美 [ˈsɪmələr]",
    "pos": "adj.",
    "meaning": "相似的 n.类似物",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "similar → similarity (n.); similarly (adv.); 搭配 to 不是 with"
    ],
    "usage": {
      "collocations": "be similar to 与…相似; in a similar way 以相似的方式",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz288",
    "word": "during",
    "phonetic": "美 [ˈdjʊrɪŋ]",
    "pos": "prep.",
    "meaning": "在…期间",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "during + 名词 (在…期间); 不是连词，不接从句"
    ],
    "usage": {
      "collocations": "during the day 在白天; during the summer 在夏天; during the meeting 在会议期间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz289",
    "word": "forest",
    "phonetic": "美 [ˈfɑːrəst]",
    "pos": "n.",
    "meaning": "森林；丛林",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "forest → forestry (n.林业); 辨析 forest vs. woods"
    ],
    "usage": {
      "collocations": "rain forest 雨林; go through the forest 穿过森林; forest fire 森林火灾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz290",
    "word": "hunt",
    "phonetic": "美 [hʌnt]",
    "pos": "n.",
    "meaning": "/v.打猎；搜寻",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hunt → hunter (n.猎人); hunting (n.狩猎)"
    ],
    "usage": {
      "collocations": "hunt for 寻找; go hunting 去打猎; job hunting 找工作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz291",
    "word": "couple",
    "phonetic": "美 [ˈkʌpl]",
    "pos": "n.",
    "meaning": "一对；两个人",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz292",
    "word": "digital",
    "phonetic": "美 [ˈdɪdʒɪtl]",
    "pos": "adj.",
    "meaning": "数码的, 数字式的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "digital (adj.) ← digit (n.数字)"
    ],
    "usage": {
      "collocations": "digital camera 数码相机; digital age 数字时代; digital technology 数字技术",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz293",
    "word": "value",
    "phonetic": "美 [ˈvælju:]",
    "pos": "n.",
    "meaning": "价值；面额 v.估价,评价",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "valuable (adj.); valueless vs invaluable"
    ],
    "usage": {
      "collocations": "be of great value 很有价值; value...highly 高度重视...; good value for money 物有所值",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz294",
    "word": "event",
    "phonetic": "美 [ɪˈvent]",
    "pos": "n.",
    "meaning": "大事件；（体育运动的）比赛项目",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "event → eventual (adj.最终的); eventually (adv.)"
    ],
    "usage": {
      "collocations": "sports event 体育赛事; in any event 无论如何; important event 重要事件",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz295",
    "word": "decorate",
    "phonetic": "美 [ˈdekəreɪt]",
    "pos": "v.",
    "meaning": "装饰,布置",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "decorate → decoration (n.); decorative (adj.)"
    ],
    "usage": {
      "collocations": "decorate…with 用…装饰; be decorated with 被…装饰",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz296",
    "word": "refuse",
    "phonetic": "美 [rɪˈfjuːz]",
    "pos": "v.",
    "meaning": "拒绝",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "refusal (n.); refuse + to do (不接 doing!)"
    ],
    "usage": {
      "collocations": "refuse to do 拒绝做; refuse sb sth 拒绝某人某事; refuse to accept 拒绝接受",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz297",
    "word": "chat",
    "phonetic": "美 [tʃæt]",
    "pos": "v.",
    "meaning": "/n.聊天；闲谈",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz298",
    "word": "honest",
    "phonetic": "美 [ˈɑːnɪst]",
    "pos": "adj.",
    "meaning": "诚实的；老实的；真诚的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "honest → honesty (n.); honestly (adv.); dishonest (反)"
    ],
    "usage": {
      "collocations": "to be honest 说实话; an honest answer 诚实的回答",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz299",
    "word": "language",
    "phonetic": "美 [ˈlæŋɡwɪdʒ]",
    "pos": "n.",
    "meaning": "语言",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "language (n.语言)"
    ],
    "usage": {
      "collocations": "first language 母语; body language 肢体语言; foreign language 外语",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz300",
    "word": "stay",
    "phonetic": "美 [steɪ]",
    "pos": "v.",
    "meaning": "停留；保持；暂住 n.停留；逗留",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "stay 可作系动词 + adj."
    ],
    "usage": {
      "collocations": "stay up 熬夜; stay away from 远离; stay calm 保持冷静; stay in touch 保持联系",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz301",
    "word": "continue",
    "phonetic": "美 [kənˈtɪnjuː]",
    "pos": "v.",
    "meaning": "持续；继续做",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "continue + to do / doing 均可; continuous (adj.)"
    ],
    "usage": {
      "collocations": "continue to do/doing 继续做; to be continued 待续",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz302",
    "word": "host",
    "phonetic": "美 [hoʊst]",
    "pos": "n.",
    "meaning": "主人；主持人 v.主持；当主人招待",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "host → hostess (n.女主人); hospitality (n.好客)"
    ],
    "usage": {
      "collocations": "host family 寄宿家庭; host the Olympics 主办奥运会; TV host 电视主持人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz303",
    "word": "ocean",
    "phonetic": "美 [ˈoʊʃn]",
    "pos": "n.",
    "meaning": "海洋",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "ocean → oceanic (adj.海洋的)"
    ],
    "usage": {
      "collocations": "Pacific Ocean 太平洋; ocean pollution 海洋污染; an ocean of 大量的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz304",
    "word": "destroy",
    "phonetic": "美 [dɪˈstrɔɪ]",
    "pos": "v.",
    "meaning": "破坏；毁坏",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "destroy → destruction (n.); destructive (adj.)"
    ],
    "usage": {
      "collocations": "destroy the environment 破坏环境; destroy one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz305",
    "word": "health",
    "phonetic": "美 [helθ]",
    "pos": "n.",
    "meaning": "健康；医疗",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "health → healthy (adj.); healthful (adj.有益健康的)"
    ],
    "usage": {
      "collocations": "in good/poor health 身体好/差; health problem 健康问题; health care 医疗保健",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz306",
    "word": "plenty",
    "phonetic": "美 [ˈplenti]",
    "pos": "pron.",
    "meaning": "大量；众多 adv.大量；非常 n.富足；充裕",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "plenty of + 可数复数/不可数 = a lot of; plentiful (adj.)"
    ],
    "usage": {
      "collocations": "plenty of 大量的; plenty more 还有很多",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz307",
    "word": "comedy",
    "phonetic": "美 [ˈkɑːmədi]",
    "pos": "n.",
    "meaning": "喜剧",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "comedy → comic (adj.); comedian (n.喜剧演员)"
    ],
    "usage": {
      "collocations": "romantic comedy 爱情喜剧; comedy show 喜剧节目",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz308",
    "word": "switch",
    "phonetic": "美 [swɪtʃ]",
    "pos": "n.",
    "meaning": "（电路的）开关 v.（使）改变,转变",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "switch (v./n.); 英语开关用switch，不直接用open/close"
    ],
    "usage": {
      "collocations": "switch on/off 打开/关闭; switch to 切换到; light switch 电灯开关",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz309",
    "word": "expect",
    "phonetic": "美 [ɪkˈspekt]",
    "pos": "v.",
    "meaning": "预期；期望",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "expectation (n.); unexpected (adj.) 意外的"
    ],
    "usage": {
      "collocations": "expect to do sth 期望做某事; expect sb to do 期望某人做; be expected to do 被期望做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz310",
    "word": "enough",
    "phonetic": "美 [ɪˈnʌf]",
    "pos": "adv.",
    "meaning": "足够 adj. 充足的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "enough 修饰形容词/副词放后面; 修饰名词放前面!"
    ],
    "usage": {
      "collocations": "adj./adv. + enough to do 足够...去做; enough + n. 足够的...; good enough 足够好",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz311",
    "word": "way",
    "phonetic": "美 [weɪ]",
    "pos": "n.",
    "meaning": "方法；道路",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "way → ways (复数); way of doing / to do"
    ],
    "usage": {
      "collocations": "by the way 顺便说一下; in a way 在某种程度上; no way 没门; on the way 在路上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz312",
    "word": "graduate",
    "phonetic": "美 [ˈɡrædʒuət]",
    "pos": "v.",
    "meaning": "毕业,获得（学位）n.毕业生",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "graduate → graduation (n.)"
    ],
    "usage": {
      "collocations": "graduate from 从…毕业; graduate school 研究生院; college graduate 大学毕业生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz313",
    "word": "volunteer",
    "phonetic": "美 [ˌvɑːlənˈtɪr]",
    "pos": "n.",
    "meaning": "志愿者；义勇兵 v.自愿做",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "volunteer → voluntary (adj.自愿的)"
    ],
    "usage": {
      "collocations": "volunteer to do 志愿做; volunteer work 志愿工作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz314",
    "word": "poison",
    "phonetic": "美 [ˈpɔɪzn]",
    "pos": "n.",
    "meaning": "毒药 v.毒害",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "poison → poisonous (adj.有毒的)"
    ],
    "usage": {
      "collocations": "food poison 食物中毒; poison gas 毒气; be poisoned by 被…毒害",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz315",
    "word": "compare",
    "phonetic": "美 [kəmˈper]",
    "pos": "v.",
    "meaning": "相比；比较 n.比较",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "comparison (n.); comparative (adj.)"
    ],
    "usage": {
      "collocations": "compare...with... 把...与...比较; compare...to... 把...比作...; compared with/to 与...相比",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz316",
    "word": "paint",
    "phonetic": "美 [peɪnt]",
    "pos": "v.",
    "meaning": "绘画；上油漆 n.油漆；颜料",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "paint → painter (n.画家); painting (n.绘画)"
    ],
    "usage": {
      "collocations": "paint a picture 画一幅画; wet paint 油漆未干; paint the wall 粉刷墙壁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz317",
    "word": "material",
    "phonetic": "美 [məˈtɪriəl]",
    "pos": "n.",
    "meaning": "材料；原料 adj.物质的,重要的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "material (n.) → materialistic (adj.物质的)"
    ],
    "usage": {
      "collocations": "raw material 原材料; teaching material 教材; material world 物质世界",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz318",
    "word": "judge",
    "phonetic": "美 [dʒʌdʒ]",
    "pos": "v.",
    "meaning": "判断,断定 n.法官",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "judgment (n.); judge (n.) 法官/裁判"
    ],
    "usage": {
      "collocations": "judge...by... 根据...判断...; judging from/by 根据...判断; as far as I can judge 据我判断",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz319",
    "word": "transport",
    "phonetic": "美 [ˈtrænspɔːt]",
    "pos": "n.",
    "meaning": "运输 v.运输",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "transport (英) = transportation (美)"
    ],
    "usage": {
      "collocations": "public transport 公共交通; transport system 交通系统",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz320",
    "word": "technology",
    "phonetic": "美 [tekˈnɑːlədʒi]",
    "pos": "n.",
    "meaning": "科技,工业技术",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "technical (adj.); technique (n.) 技术/技巧"
    ],
    "usage": {
      "collocations": "information technology (IT) 信息技术; high technology 高科技",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz321",
    "word": "serious",
    "phonetic": "美 [ˈsɪriəs]",
    "pos": "adj.",
    "meaning": "严重的；严肃的；认真的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "serious → seriously (adv.); seriousness (n.)"
    ],
    "usage": {
      "collocations": "serious problem 严重问题; be serious about 认真对待; seriously ill 重病",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz322",
    "word": "manage",
    "phonetic": "美 [ˈmænɪdʒ]",
    "pos": "v.",
    "meaning": "管理；控制",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "辨析: manage to do(成功做到) vs try to do(努力去做); manager (n.)"
    ],
    "usage": {
      "collocations": "manage to do sth 设法做成某事; manage a company 管理公司",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz323",
    "word": "reflect",
    "phonetic": "美 [rɪˈflekt]",
    "pos": "v.",
    "meaning": "反映；反射；表明",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reflect → reflection (n.); reflective (adj.)"
    ],
    "usage": {
      "collocations": "reflect on 反思; reflect light 反射光线; be reflected in 反映在",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz324",
    "word": "ceremony",
    "phonetic": "美 [ˈserəməni]",
    "pos": "n.",
    "meaning": "典礼,仪式",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "ceremony → ceremonial (adj.仪式的)"
    ],
    "usage": {
      "collocations": "opening ceremony 开幕式; wedding ceremony 婚礼; graduation ceremony 毕业典礼",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz325",
    "word": "prepare",
    "phonetic": "美 [prɪˈper]",
    "pos": "v.",
    "meaning": "准备",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "preparation (n.)"
    ],
    "usage": {
      "collocations": "prepare for 为...做准备; prepare to do 准备做; be prepared for 为...做好准备; prepare sb for 让某人为...做准备",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz326",
    "word": "strange",
    "phonetic": "美 [streɪndʒ]",
    "pos": "adj.",
    "meaning": "奇怪的；陌生的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "strange → stranger (n.陌生人); strangely (adv.)"
    ],
    "usage": {
      "collocations": "strange thing 奇怪的事; feel strange 感觉奇怪; strange to say 说来奇怪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz327",
    "word": "exhibition",
    "phonetic": "美 [ˌeksɪˈbɪʃn]",
    "pos": "n.",
    "meaning": "展览；展览品；表演,表现",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "exhibit (v.) → exhibition (n.)"
    ],
    "usage": {
      "collocations": "art exhibition 艺术展; on exhibition 在展出; exhibition hall 展厅",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz328",
    "word": "project",
    "phonetic": "美 [ˈprɑːdʒekt]",
    "pos": "n.",
    "meaning": "计划；工程；项目",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "project → projection (n.预测); projector (n.投影仪)"
    ],
    "usage": {
      "collocations": "school project 学校项目; work on a project 做项目; project plan 项目计划",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz329",
    "word": "choice",
    "phonetic": "美 [tʃɔɪs]",
    "pos": "n.",
    "meaning": "选择；供选择的范围 adj.优选的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz330",
    "word": "member",
    "phonetic": "美 [ˈmembə]",
    "pos": "n.",
    "meaning": "成员；会员",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "membership (n.) 会员资格"
    ],
    "usage": {
      "collocations": "a member of ...的成员; family member 家庭成员; team member 队员",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz331",
    "word": "background",
    "phonetic": "美 [ˈbækɡraʊnd]",
    "pos": "n.",
    "meaning": "背景",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "background = back + ground"
    ],
    "usage": {
      "collocations": "family background 家庭背景; background music 背景音乐; background knowledge 背景知识",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz332",
    "word": "dragon",
    "phonetic": "美 [ˈdrægən]",
    "pos": "n.",
    "meaning": "龙",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "dragon (n.龙)"
    ],
    "usage": {
      "collocations": "Chinese dragon 中国龙; dragon boat 龙舟; Dragon Boat Festival 端午节",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz333",
    "word": "trust",
    "phonetic": "美 [trʌst]",
    "pos": "v.",
    "meaning": "信任；希望 n.信任；委托",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "trust → trustworthy (adj.值得信赖的); trustee (n.受托人)"
    ],
    "usage": {
      "collocations": "trust sb to do 信任某人做; mutual trust 相互信任; trust in 信任",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz334",
    "word": "bath",
    "phonetic": "美 [bɑːθ]",
    "pos": "n.",
    "meaning": "沐浴 v.洗澡",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz335",
    "word": "knowledge",
    "phonetic": "美 [ˈnɑːlɪdʒ]",
    "pos": "n.",
    "meaning": "知识；学问",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "knowledge (n.知识) 不可数; knowledgeable (adj.博学的)"
    ],
    "usage": {
      "collocations": "knowledge about 关于…的知识; common knowledge 常识; gain knowledge 获取知识",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz336",
    "word": "joke",
    "phonetic": "美 [dʒoʊk]",
    "pos": "n.",
    "meaning": "笑话；玩笑 v.开玩笑",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "joke → joker (n.爱开玩笑的人); joking (adj.)"
    ],
    "usage": {
      "collocations": "tell a joke 讲笑话; play a joke on sb 开某人玩笑; practical joke 恶作剧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz337",
    "word": "crowd",
    "phonetic": "美 [kraʊd]",
    "pos": "n.",
    "meaning": "人群；观众 v.拥挤；挤满",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "crowd → crowded (adj.拥挤的)"
    ],
    "usage": {
      "collocations": "a crowd of 一群…; crowd into 涌入; crowd around 围在…周围",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz338",
    "word": "anxious",
    "phonetic": "美 [ˈæŋkʃəs]",
    "pos": "adj.",
    "meaning": "焦虑的,忧虑的；渴望的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "anxious → anxiety (n.焦虑); anxiously (adv.)"
    ],
    "usage": {
      "collocations": "be anxious about 为…焦虑; be anxious to do 渴望做; anxious wait 焦急的等待",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz339",
    "word": "temple",
    "phonetic": "美 [ˈtempəl]",
    "pos": "n.",
    "meaning": "庙宇，寺院",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "temple (n.寺庙/太阳穴)"
    ],
    "usage": {
      "collocations": "Buddhist temple 佛寺; temple fair 庙会",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz340",
    "word": "pretend",
    "phonetic": "美 [prɪˈtend]",
    "pos": "v.",
    "meaning": "假装；装扮 adj.假装的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "后接 to do, 不接 doing!"
    ],
    "usage": {
      "collocations": "pretend to do sth 假装做某事; pretend to be doing 假装正在做; pretend that... 假装...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz341",
    "word": "career",
    "phonetic": "美 [kəˈrɪr]",
    "pos": "n.",
    "meaning": "职业,事业；生涯",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "career (n.职业/生涯)"
    ],
    "usage": {
      "collocations": "career development 职业发展; career choice 职业选择; pursue a career 追求事业",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz342",
    "word": "speed",
    "phonetic": "美 [spiːd]",
    "pos": "n.",
    "meaning": "速度 v.加速",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "speed → speedy (adj.快速的); 过去式 sped"
    ],
    "usage": {
      "collocations": "at high speed 高速; speed limit 限速; speed up 加速",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz343",
    "word": "rule",
    "phonetic": "美 [ruːl]",
    "pos": "n.",
    "meaning": "规则 v.统治；规定",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "ruler (n.) 尺子/统治者"
    ],
    "usage": {
      "collocations": "follow the rules 遵守规则; break the rules 违反规则; as a rule 通常; rule out 排除; make it a rule to do 养成做...的习惯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz344",
    "word": "shape",
    "phonetic": "美 [ʃeɪp]",
    "pos": "n.",
    "meaning": "形状；外形 v.使成为…形状",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "shape → shapely (adj.匀称的)"
    ],
    "usage": {
      "collocations": "in good shape 状态好/身材好; get into shape 健身; take shape 成形",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz345",
    "word": "roommate",
    "phonetic": "美 [ˈruːmmeɪt]",
    "pos": "n.",
    "meaning": "室友",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "roommate = room + mate"
    ],
    "usage": {
      "collocations": "college roommate 大学室友; get along with one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz346",
    "word": "confident",
    "phonetic": "美 [ˈkɑːnfɪdənt]",
    "pos": "adj.",
    "meaning": "自信的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "confident → confidence (n.); confidently (adv.)"
    ],
    "usage": {
      "collocations": "be confident about/of 对…有信心; feel confident 感到自信; confident smile 自信的微笑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz347",
    "word": "team",
    "phonetic": "美 [tiːm]",
    "pos": "n.",
    "meaning": "队；组 v.使合作",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "team → teammate (n.队友)"
    ],
    "usage": {
      "collocations": "team member 队员; teamwork 团队合作; team spirit 团队精神",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz348",
    "word": "condition",
    "phonetic": "美 [kənˈdɪʃn]",
    "pos": "n.",
    "meaning": "状况, 状态；环境,条件",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz349",
    "word": "international",
    "phonetic": "美 [ˌɪntərˈnæʃnə]",
    "pos": "adj.",
    "meaning": "国际的",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "national (adj.) 国家的 -> international (adj.) 国际的"
    ],
    "usage": {
      "collocations": "international trade 国际贸易; international airport 国际机场",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz350",
    "word": "suffer",
    "phonetic": "美 [ˈsʌfər]",
    "pos": "v.",
    "meaning": "(因疾病,痛苦,悲伤等)受苦；遭受",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "suffering (n.) 痛苦; sufferer (n.) 受苦者"
    ],
    "usage": {
      "collocations": "suffer from 遭受...(痛苦/疾病); suffer a loss 遭受损失; suffer pain 承受痛苦",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz351",
    "word": "term",
    "phonetic": "美 [tɜːrm]",
    "pos": "n.",
    "meaning": "学期；术语",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "term (n.学期/术语/条件)"
    ],
    "usage": {
      "collocations": "in the long/short term 长/短期内; come to terms with 接受/妥协; school term 学期",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz352",
    "word": "believe",
    "phonetic": "美 [bɪˈliːv]",
    "pos": "v.",
    "meaning": "相信；认为；信任",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "belief (n.); believable (adj.); 辨析: believe vs believe in"
    ],
    "usage": {
      "collocations": "believe in 相信/信任; believe sb 相信某人说的话; It is believed that... 人们相信...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz353",
    "word": "show",
    "phonetic": "美 [ʃoʊ]",
    "pos": "v.",
    "meaning": "表明；演示 n.演出；展览会",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "show -> showed -> shown; show 也作名词\"表演/节目\""
    ],
    "usage": {
      "collocations": "show sb around 带某人参观; show off 炫耀; show up 出现; on show 展出; show sb sth 给某人看某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz354",
    "word": "opinion",
    "phonetic": "美 [əˈpɪnjən]",
    "pos": "n.",
    "meaning": "意见；主张",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "opinion (n.意见) 可数; opinionated (adj.固执己见的)"
    ],
    "usage": {
      "collocations": "in one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz355",
    "word": "represent",
    "phonetic": "美 [ˌreprɪˈzent]",
    "pos": "v.",
    "meaning": "代表；展示",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "represent → representative (n.代表 adj.典型的)"
    ],
    "usage": {
      "collocations": "represent sb/sth 代表; be represented by 由…代表",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz356",
    "word": "stress",
    "phonetic": "美 [stres]",
    "pos": "n.",
    "meaning": "压力；重音 v.强调",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "stressful (adj.) 压力大的; stressed (adj.) 感到有压力的"
    ],
    "usage": {
      "collocations": "under stress 在压力下; lay/put stress on 强调; stress the importance of 强调...的重要性",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz357",
    "word": "symbol",
    "phonetic": "美 [ˈsɪmbəl]",
    "pos": "n.",
    "meaning": "象征；符号；标志",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "symbol → symbolic (adj.象征性的); symbolize (v.象征)"
    ],
    "usage": {
      "collocations": "symbol of …的象征; status symbol 身份象征; chemical symbol 化学符号",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz358",
    "word": "daily",
    "phonetic": "美 [ˈdeɪli]",
    "pos": "adj.",
    "meaning": "日常的；按日的 n.日报",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "daily = every day; 可作adj./adv./n."
    ],
    "usage": {
      "collocations": "daily life 日常生活; daily newspaper 日报; on a daily basis 每天",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz359",
    "word": "nervous",
    "phonetic": "美 [ˈnɜːrvəs]",
    "pos": "adj.",
    "meaning": "紧张的，焦虑的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "nervous → nerve (n.神经); nervously (adv.)"
    ],
    "usage": {
      "collocations": "feel nervous 感到紧张; nervous system 神经系统; be nervous about 为…紧张",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz360",
    "word": "area",
    "phonetic": "美 [ˈeriə]",
    "pos": "n.",
    "meaning": "地区，面积",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "= region/zone; 辨析: area(泛指区域) vs district(行政区)"
    ],
    "usage": {
      "collocations": "in the area of 在...领域; living area 生活区域; rural/urban area 农村/城市地区",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz361",
    "word": "responsible",
    "phonetic": "美 [rɪˈspɑːnsəbl]",
    "pos": "adj.",
    "meaning": "有责任心的；承担责任的",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "responsible → responsibility (n.); responsibly (adv.)"
    ],
    "usage": {
      "collocations": "be responsible for 对…负责; responsible person 有责任心的人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz362",
    "word": "side",
    "phonetic": "美 [saɪd]",
    "pos": "n.",
    "meaning": "侧面；边缘；旁边 v.支持某人",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "side → sideways (adv.向侧面地)"
    ],
    "usage": {
      "collocations": "on the side of 在…一边; side by side 肩并肩; side effect 副作用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz363",
    "word": "planet",
    "phonetic": "美 [ˈplænɪt]",
    "pos": "n.",
    "meaning": "行星；地球",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "planet → planetary (adj.行星的)"
    ],
    "usage": {
      "collocations": "planet Earth 地球; on the planet 在星球上; save the planet 拯救地球",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz364",
    "word": "percent",
    "phonetic": "美 [pəˈsent]",
    "pos": "n.",
    "meaning": "百分比；百分率 adj.百分之…的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "percent 无复数; \"30% of the water is...\"; percentage (n.)"
    ],
    "usage": {
      "collocations": "...percent of... 百分之...的...; a high/low percent 高/低百分比",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz365",
    "word": "search",
    "phonetic": "美 [sɜːrtʃ]",
    "pos": "n.",
    "meaning": "搜寻；调查 v.搜寻, 调查",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "search 作名词: do a search"
    ],
    "usage": {
      "collocations": "search for 搜寻; search...for... 搜查...找...; in search of 寻找; search through 翻找",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz366",
    "word": "associate",
    "phonetic": "美 [əˈsoʊʃieɪt]",
    "pos": "v.",
    "meaning": "联系；（与…）混在一起",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "associate → association (n.); associated (adj.)"
    ],
    "usage": {
      "collocations": "associate…with… 把…与…联系起来; associate with sb 与某人交往",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz367",
    "word": "wise",
    "phonetic": "美 [waɪz]",
    "pos": "adj.",
    "meaning": "明智的；博学的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "wise → wisdom (n.智慧); wisely (adv.)"
    ],
    "usage": {
      "collocations": "a wise decision 明智的决定; be wise to do 做…是明智的; wise man 智者",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz368",
    "word": "touch",
    "phonetic": "美 [tʌtʃ]",
    "pos": "v.",
    "meaning": "触碰；感动；轻打 n.触摸",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "touch 短语中考高频! touching (adj.) 感人的"
    ],
    "usage": {
      "collocations": "keep in touch with 与...保持联系; get in touch with 与...取得联系; lose touch with 与...失去联系; be touched by 被...感动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz369",
    "word": "resume",
    "phonetic": "美 [ˈrezjumeɪ//rɪˈzjuːm]",
    "pos": "n.",
    "meaning": "简历,履历 v.重新开始",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "作\"简历\"读 /ˈrezjumeɪ/; 作\"继续\"读 /rɪˈzjuːm/"
    ],
    "usage": {
      "collocations": "resume doing sth 继续做某事; send a resume 投简历",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz370",
    "word": "novel",
    "phonetic": "美 [ˈnɑːvəl]",
    "pos": "n.",
    "meaning": "小说",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "novel (n.小说 adj.新奇的) → novelist (n.小说家)"
    ],
    "usage": {
      "collocations": "historical novel 历史小说; novel idea 新奇的想法",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz371",
    "word": "dirty",
    "phonetic": "美 [ˈdɜːrti]",
    "pos": "adj.",
    "meaning": "肮脏的；卑鄙的 v.弄脏；使变脏",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "dirty → dirt (n.泥土); dirtiness (n.)"
    ],
    "usage": {
      "collocations": "get dirty 变脏; dirty clothes 脏衣服; dirty trick 卑鄙的手段",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz372",
    "word": "heart",
    "phonetic": "美 [hɑːrt]",
    "pos": "n.",
    "meaning": "心脏；心；胸怀",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "heart (n.心脏/内心); hearty (adj.热情的)"
    ],
    "usage": {
      "collocations": "heart disease 心脏病; break one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz373",
    "word": "arm",
    "phonetic": "美 [ɑːrm]",
    "pos": "n.",
    "meaning": "手臂；袖子 v.武装",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz374",
    "word": "between",
    "phonetic": "美 [bɪˈtwiːn]",
    "pos": "prep.",
    "meaning": "在…之间",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz375",
    "word": "classical",
    "phonetic": "美 [ˈklæsɪkl]",
    "pos": "adj.",
    "meaning": "古典的,经典的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "classical (古典的) vs. classic (经典的)"
    ],
    "usage": {
      "collocations": "classical music 古典音乐; classical style 古典风格",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz376",
    "word": "convenience",
    "phonetic": "美 [kənˈviːniəns]",
    "pos": "n.",
    "meaning": "便所；厕所",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "convenience → convenient (adj.); conveniently (adv.)"
    ],
    "usage": {
      "collocations": "at one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz377",
    "word": "relationship",
    "phonetic": "美 [rɪˈleɪʃnʃɪp]",
    "pos": "n.",
    "meaning": "关系,联系",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "relation (n.) → relationship (n.关系)"
    ],
    "usage": {
      "collocations": "have a relationship with 与…有关系; build a relationship 建立关系",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz378",
    "word": "drug",
    "phonetic": "美 [drʌɡ]",
    "pos": "n.",
    "meaning": "药；毒品",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "drug → druggist (n.药剂师)"
    ],
    "usage": {
      "collocations": "take drugs 吸毒; drug store 药店; drug abuse 药物滥用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz379",
    "word": "except",
    "phonetic": "美 [ɪkˈsept]",
    "pos": "prep.",
    "meaning": "除…之外",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz380",
    "word": "report",
    "phonetic": "美 [rɪˈpɔːt]",
    "pos": "n.",
    "meaning": "报告；报道；成绩单 v.报告",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reporter (n.) 记者; report + doing"
    ],
    "usage": {
      "collocations": "report to 向...报告; report on 就...做报告; It is reported that... 据报道...; report doing 报告做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz381",
    "word": "smart",
    "phonetic": "美 [smɑːrt]",
    "pos": "adj.",
    "meaning": "聪明的；整洁而漂亮的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "smart = clever/bright = intelligent"
    ],
    "usage": {
      "collocations": "smart phone 智能手机; look smart 看起来很精神; smart decision 明智的决定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz382",
    "word": "respect",
    "phonetic": "美 [rɪˈspekt]",
    "pos": "n.",
    "meaning": "尊敬 v.尊敬",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "respectful (adj.); respectable (adj.)"
    ],
    "usage": {
      "collocations": "show respect for 对...表示尊重; respect sb for 因...尊重某人; with respect to 关于; in this respect 在这方面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz383",
    "word": "guide",
    "phonetic": "美 [ɡaɪd]",
    "pos": "n.",
    "meaning": "指南；导游 v.指引,指导",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "guidance (n.); guidebook (n.)"
    ],
    "usage": {
      "collocations": "guide sb to do 指导某人做; guide sb through 引导某人通过; a tour guide 导游; a guide to ...的指南",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz384",
    "word": "suggest",
    "phonetic": "美 [səˈdʒest]",
    "pos": "v.",
    "meaning": "建议；提议；暗示",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "后接 doing! suggest that + 虚拟语气(should do); suggestion (n.)"
    ],
    "usage": {
      "collocations": "suggest doing sth 建议做某事; suggest that sb (should) do 建议某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz385",
    "word": "certain",
    "phonetic": "美 [ˈsɜːrtn]",
    "pos": "adj.",
    "meaning": "确实的；确定的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz386",
    "word": "wild",
    "phonetic": "美 [waɪld]",
    "pos": "adj.",
    "meaning": "野生的；荒凉的 n.荒野",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "wild → wildly (adv.); wilderness (n.荒野)"
    ],
    "usage": {
      "collocations": "wild animal 野生动物; go wild 发狂; in the wild 在野外",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz387",
    "word": "awful",
    "phonetic": "美 [ˈɔːfl]",
    "pos": "adj.",
    "meaning": "很坏的；极讨厌的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "awful = terrible; awfully (adv.)"
    ],
    "usage": {
      "collocations": "feel awful 感觉很糟; awful weather 糟糕的天气; an awful lot 非常多",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz388",
    "word": "dream",
    "phonetic": "美 [driː m]",
    "pos": "v.",
    "meaning": "梦想, 做梦 n.梦, 梦想",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz389",
    "word": "sound",
    "phonetic": "美 [saʊnd]",
    "pos": "v.",
    "meaning": "听起来 n.声音",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "sound 作系动词 + adj.; 辨析: sound/noise/voice"
    ],
    "usage": {
      "collocations": "sound like 听起来像; sound + adj. 听起来...; sound advice 合理的建议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz390",
    "word": "describe",
    "phonetic": "美 [dɪˈskraɪb]",
    "pos": "v.",
    "meaning": "描述；形容",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "description (n.); descriptive (adj.)"
    ],
    "usage": {
      "collocations": "describe...as... 把...描述为...; describe...to sb 向某人描述...; describe doing 描述做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz391",
    "word": "survey",
    "phonetic": "美 [ˈsɜːrveɪ//sɜːrˈveɪ]",
    "pos": "n.",
    "meaning": "调查；勘测 v.调查；勘测",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "作名词重音在前; 作动词重音在后"
    ],
    "usage": {
      "collocations": "make/do a survey 做调查; survey report 调查报告",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz392",
    "word": "knock",
    "phonetic": "美 [nɑːk]",
    "pos": "v.",
    "meaning": "敲击；互撞 n.敲门声；敲击声",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "knocker (n.) 门环; 常考 knock at the door"
    ],
    "usage": {
      "collocations": "knock at/on 敲(门); knock down 撞倒; knock over 打翻; knock off 下班/停止; knock out 击倒",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz393",
    "word": "wealthy",
    "phonetic": "美 [ˈwelθi]",
    "pos": "adj.",
    "meaning": "富有的 n.富人",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "= rich; wealth (n.) 财富"
    ],
    "usage": {
      "collocations": "the wealthy 富人; wealthy family 富裕家庭",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz394",
    "word": "form",
    "phonetic": "美 [fɔːm]",
    "pos": "n.",
    "meaning": "表格；形式 v.形式；建立",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "formal (adj.) 正式的; informal (反)"
    ],
    "usage": {
      "collocations": "in the form of 以...的形式; form a habit 养成习惯; take the form of 采取...形式",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz395",
    "word": "different",
    "phonetic": "美 [ˈdɪfrənt]",
    "pos": "adj.",
    "meaning": "不同的,有区别的；各种的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz396",
    "word": "private",
    "phonetic": "美 [ˈpraɪvət]",
    "pos": "adj.",
    "meaning": "私有的,私人的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "private → privacy (n.隐私); privately (adv.)"
    ],
    "usage": {
      "collocations": "private life 私生活; in private 私下地; private school 私立学校",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz397",
    "word": "actually",
    "phonetic": "美 [ˈæktʃuəli]",
    "pos": "adv.",
    "meaning": "事实上；竟然",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "actually = in fact; actual (adj.)"
    ],
    "usage": {
      "collocations": "actually, I mean... 实际上，我的意思是…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz398",
    "word": "lazy",
    "phonetic": "美 [ˈleɪzi]",
    "pos": "adj.",
    "meaning": "懒惰的；马虎的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "lazy → laziness (n.); lazily (adv.)"
    ],
    "usage": {
      "collocations": "lazy afternoon 慵懒的下午; too lazy to do 懒得做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz399",
    "word": "use",
    "phonetic": "美 [juːz]",
    "pos": "v.",
    "meaning": "使用,利用 n.使用",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "used to do vs be used to doing 中考必考! useful (adj.); useless (反)"
    ],
    "usage": {
      "collocations": "use...to do 用...来做; make use of 利用; used to do 过去常常做; be used to doing 习惯于做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz400",
    "word": "close",
    "phonetic": "美 [kloʊs]",
    "pos": "adj.",
    "meaning": "亲密的；亲近的 v.关闭；靠近",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "closed (adj.) 关着的; closely (adv.) 紧密地"
    ],
    "usage": {
      "collocations": "close down 关闭; close to 靠近; a close friend 亲密朋友; bring...to a close 结束...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz401",
    "word": "cure",
    "phonetic": "美 [kjʊr]",
    "pos": "v.",
    "meaning": "治愈 n.治疗",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "cure → curable (adj.可治愈的); incurable (adj.不可治愈的)"
    ],
    "usage": {
      "collocations": "cure sb of 治愈某人的…病; cure for …的治疗方法; miracle cure 奇迹般的治愈",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz402",
    "word": "gift",
    "phonetic": "美 [gɪft]",
    "pos": "n.",
    "meaning": "礼物；天赋",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "gift → gifted (adj.有天赋的)"
    ],
    "usage": {
      "collocations": "birthday gift 生日礼物; have a gift for 有…的天赋; gift shop 礼品店",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz403",
    "word": "blood",
    "phonetic": "美 [blʌd]",
    "pos": "n.",
    "meaning": "血；血统",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "blood → bloody (adj.血腥的); bleed (v.流血)"
    ],
    "usage": {
      "collocations": "blood type 血型; blood pressure 血压; donate blood 献血",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz404",
    "word": "sort",
    "phonetic": "美 [sɔːt]",
    "pos": "n.",
    "meaning": "种类；方式 v.将…分类",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "= kind/type"
    ],
    "usage": {
      "collocations": "sort of 有点; sort out 整理/解决; all sorts of 各种各样的; sort...into... 把...分类",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz405",
    "word": "plastic",
    "phonetic": "美 [ˈplæstɪk]",
    "pos": "n.",
    "meaning": "塑料 adj.塑料的；整形的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "plastic (n./adj.)"
    ],
    "usage": {
      "collocations": "plastic bag 塑料袋; plastic surgery 整形手术; plastic waste 塑料垃圾",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz406",
    "word": "important",
    "phonetic": "美 [ɪmˈpɔːtənt]",
    "pos": "adj.",
    "meaning": "重要的,有巨大价值的；有地位的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "important → importance (n.); importantly (adv.)"
    ],
    "usage": {
      "collocations": "It is important to do 做…很重要; play an important role 起重要作用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz407",
    "word": "hide",
    "phonetic": "美 [haɪd]",
    "pos": "v.",
    "meaning": "藏；隐瞒 n.藏身处",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hide -> hid -> hidden; hiding (n.)"
    ],
    "usage": {
      "collocations": "hide...from... 把...藏起来不让...发现; hide behind 藏在...后面; hide away 藏起来; hide and seek 捉迷藏",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz408",
    "word": "afford",
    "phonetic": "美 [əˈfɔːd]",
    "pos": "v.",
    "meaning": "买得起",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz409",
    "word": "belong",
    "phonetic": "美 [bɪˈlɑːŋ]",
    "pos": "v.",
    "meaning": "属于",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "belong to 不用被动! belongings (n.) 财物"
    ],
    "usage": {
      "collocations": "belong to 属于 (无被动/无进行时)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz410",
    "word": "illness",
    "phonetic": "美 [ˈɪlnəs]",
    "pos": "n.",
    "meaning": "病；疾病",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "illness (n.) = sickness; ill (adj.)"
    ],
    "usage": {
      "collocations": "mental illness 精神疾病; serious illness 重病; recover from illness 病愈",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz411",
    "word": "profession",
    "phonetic": "美 [prəˈfeʃn]",
    "pos": "n.",
    "meaning": "职业；同行",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "profession → professional (adj.); professor (n.教授)"
    ],
    "usage": {
      "collocations": "teaching profession 教师职业; by profession 就职业来说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz412",
    "word": "deal",
    "phonetic": "美 [diːl]",
    "pos": "v.",
    "meaning": "处理 n.大量；协议",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "deal -> dealt -> dealt; a great deal of + 不可数名词!"
    ],
    "usage": {
      "collocations": "deal with 处理; a great deal of 大量(接不可数名词); make a deal 做交易",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz413",
    "word": "discover",
    "phonetic": "美 [dɪˈskʌvər]",
    "pos": "v.",
    "meaning": "发现；查明",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "discovery (n.); 辨析: discover(发现已有的) vs invent(创造新的)"
    ],
    "usage": {
      "collocations": "discover that... 发现...; discover how to do 发现如何做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz414",
    "word": "bored",
    "phonetic": "美 [bɔːrd]",
    "pos": "adj.",
    "meaning": "厌倦的；烦闷的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz415",
    "word": "chemistry",
    "phonetic": "美 [ˈkemɪstri]",
    "pos": "n.",
    "meaning": "化学；化学性质",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "chemistry → chemical (adj./n.); chemist (n.化学家)"
    ],
    "usage": {
      "collocations": "chemistry lab 化学实验室; physical chemistry 物理化学; chemistry between two people 两人间的化学反应",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz416",
    "word": "reach",
    "phonetic": "美 [riːtʃ]",
    "pos": "v.",
    "meaning": "到达；伸手；够得着",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reach 及物,直接加宾语; = arrive at/in = get to"
    ],
    "usage": {
      "collocations": "reach for 伸手去拿; reach an agreement 达成协议; out of reach 够不着; within reach 在够得着范围内",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz417",
    "word": "basic",
    "phonetic": "美 [ˈbeɪsɪk]",
    "pos": "adj.",
    "meaning": "基本的；初级的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "basic → base (n.); basically (adv.)"
    ],
    "usage": {
      "collocations": "basic knowledge 基础知识; basic salary 基本工资; basically speaking 基本上说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz418",
    "word": "popular",
    "phonetic": "美 [ˈpɑːpjələr]",
    "pos": "adj.",
    "meaning": "受欢迎的；普遍的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "popular → popularity (n.); popularly (adv.)"
    ],
    "usage": {
      "collocations": "be popular with 受…欢迎; popular music 流行音乐; It is popular to do 做…很流行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz419",
    "word": "deliver",
    "phonetic": "美 [dɪˈlɪvər]",
    "pos": "v.",
    "meaning": "递送,传送；发布",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "deliver → delivery (n.); deliverer (n.送货人)"
    ],
    "usage": {
      "collocations": "deliver a speech 发表演讲; deliver goods 送货; deliver a baby 接生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz420",
    "word": "degree",
    "phonetic": "美 [dɪˈɡriː]",
    "pos": "n.",
    "meaning": "（湿度、角度）度数；程度；学历",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz421",
    "word": "trade",
    "phonetic": "美 [treɪd]",
    "pos": "n.",
    "meaning": "贸易；行业 v.做生意",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "trade → trader (n.商人); trading (n.交易)"
    ],
    "usage": {
      "collocations": "international trade 国际贸易; trade fair 交易会; trade A for B 用A换B",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz422",
    "word": "strong",
    "phonetic": "美 [strɑːŋ]",
    "pos": "adj.",
    "meaning": "强壮的；强烈的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "strong → strength (n.); strongly (adv.)"
    ],
    "usage": {
      "collocations": "strong wind 强风; strong tea 浓茶; be strong in 在…方面强势",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz423",
    "word": "expert",
    "phonetic": "美 [ˈekspɜːrt]",
    "pos": "n.",
    "meaning": "专家；能手 adj.熟练的；内行的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "expert = specialist; expertise (n.专长)"
    ],
    "usage": {
      "collocations": "an expert in/on …方面的专家; expert advice 专家建议; expert at doing 擅长做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz424",
    "word": "straight",
    "phonetic": "美 [streɪt]",
    "pos": "adv.",
    "meaning": "笔直地；径直；直截了当地 adj.直的；直率的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "straight → straighten (v.弄直); straightforward (adj.坦率的)"
    ],
    "usage": {
      "collocations": "go straight 直走; straight line 直线; straight A student 全A学生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz425",
    "word": "spare",
    "phonetic": "美 [sper]",
    "pos": "adj.",
    "meaning": "闲置的；备用的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "spare → sparely (adv.少量地)"
    ],
    "usage": {
      "collocations": "in one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz426",
    "word": "imagine",
    "phonetic": "美 [ɪˈmædʒɪn]",
    "pos": "v.",
    "meaning": "想象；认为",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "后接 doing! imagination (n.); imaginary (adj.) 虚构的"
    ],
    "usage": {
      "collocations": "imagine doing 想象做; imagine sb doing 想象某人在做; imagine that... 想象...; can you imagine? 你能想象吗?",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz427",
    "word": "amusement",
    "phonetic": "美 [əˈmjuːzmənt]",
    "pos": "n.",
    "meaning": "娱乐（活动）,乐趣",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "amuse (v.) → amusement (n.); amusing (adj.)"
    ],
    "usage": {
      "collocations": "amusement park 游乐园; to one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz428",
    "word": "proper",
    "phonetic": "美 [ˈprɑːpər]",
    "pos": "adj.",
    "meaning": "恰当的；正确的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "proper → properly (adv.); improper (反)"
    ],
    "usage": {
      "collocations": "proper way 正确的方式; proper noun 专有名词; do the proper thing 做该做的事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz429",
    "word": "soft",
    "phonetic": "美 [sɑːft]",
    "pos": "adj.",
    "meaning": "软的；温柔的 n.柔性",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "soft → soften (v.变软); softly (adv.)"
    ],
    "usage": {
      "collocations": "soft drink 软饮料; soft voice 柔和的声音; soft pillow 柔软的枕头",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz430",
    "word": "desert",
    "phonetic": "美 [ˈdezət]",
    "pos": "n.",
    "meaning": "沙漠 v.抛弃",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "desert (n.沙漠 v.遗弃); 注意发音区别: /ˈdezərt/ (n.) vs. /dɪˈzɜːrt/ (v.)"
    ],
    "usage": {
      "collocations": "desert island 荒岛; desert area 沙漠地区; desert one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz431",
    "word": "thankful",
    "phonetic": "美 [ˈθæŋkfl]",
    "pos": "adj.",
    "meaning": "感谢的；欣慰的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "thankful = grateful; thankfully (adv.)"
    ],
    "usage": {
      "collocations": "be thankful for 对…心存感激; be thankful to sb for sth 因某事感激某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz432",
    "word": "champion",
    "phonetic": "美 [ˈtʃæmpiən]",
    "pos": "n.",
    "meaning": "冠军 v.为…而斗争",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "champion → championship (n.锦标赛)"
    ],
    "usage": {
      "collocations": "world champion 世界冠军; champion team 冠军队伍; champion of …的捍卫者",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz433",
    "word": "birth",
    "phonetic": "美 [bɜːrθ]",
    "pos": "n.",
    "meaning": "出生；分娩；诞生",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz434",
    "word": "otherwise",
    "phonetic": "美 [ˈʌðəwaɪz]",
    "pos": "adv.",
    "meaning": "否则；除此之外",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "otherwise = or else = or"
    ],
    "usage": {
      "collocations": "otherwise, we will… 否则我们会…; unless otherwise stated 除非另有说明",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz435",
    "word": "memory",
    "phonetic": "美 [ˈmeməri]",
    "pos": "n.",
    "meaning": "记忆力；记忆",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "memory → memorize (v.记住); memorable (adj.难忘的)"
    ],
    "usage": {
      "collocations": "in memory of 为了纪念; have a good memory 记性好; childhood memory 童年回忆",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz436",
    "word": "bridge",
    "phonetic": "美 [brɪdʒ]",
    "pos": "n.",
    "meaning": "桥；纽带；桥牌 v.造桥",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "bridge (n./v.)"
    ],
    "usage": {
      "collocations": "cross the bridge 过桥; build bridges 建立联系(习语); bridge the gap 弥合差距",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz437",
    "word": "customer",
    "phonetic": "美 [ˈkʌstəmər]",
    "pos": "n.",
    "meaning": "顾客",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "customer (n.顾客) vs. consumer (n.消费者)"
    ],
    "usage": {
      "collocations": "customer service 客服; regular customer 常客; customer satisfaction 顾客满意度",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz438",
    "word": "dig",
    "phonetic": "美 [dɪɡ]",
    "pos": "v.",
    "meaning": "挖；掘（地)",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "dig → dug → dug; digger (n.挖掘机)"
    ],
    "usage": {
      "collocations": "dig a hole 挖洞; dig up 挖掘出; dig into 探究",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz439",
    "word": "hope",
    "phonetic": "美 [hoʊp]",
    "pos": "v.",
    "meaning": "希望,期望 n.希望",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hopeful (adj.); hopeless (adj.); 辨析: hope vs wish"
    ],
    "usage": {
      "collocations": "hope to do 希望做; hope that... 希望...; in the hope of 抱着...的希望; lose hope 失去希望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz440",
    "word": "perform",
    "phonetic": "美 [pəˈfɔːm]",
    "pos": "v.",
    "meaning": "执行；演出运转",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "performance (n.); performer (n.)"
    ],
    "usage": {
      "collocations": "perform an operation 做手术; perform well 表现好; perform a task 执行任务; perform on stage 上台表演",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz441",
    "word": "disappoint",
    "phonetic": "美 [ˌdɪsəˈpɔɪnt]",
    "pos": "v.",
    "meaning": "使失望",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "disappoint → disappointment (n.); disappointing (adj.令人失望的)"
    ],
    "usage": {
      "collocations": "disappoint sb 让某人失望; be disappointed with 对…失望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz442",
    "word": "calm",
    "phonetic": "美 [kɑːm]",
    "pos": "adj.",
    "meaning": "镇静的；沉着的 v.使平静；使镇静",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz443",
    "word": "meanwhile",
    "phonetic": "美 [ˈmiːnwaɪl]",
    "pos": "adv.",
    "meaning": "与此同时；其间",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "meanwhile = at the same time; 常用于句首"
    ],
    "usage": {
      "collocations": "meanwhile, … 与此同时,…; in the meanwhile 在此期间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz444",
    "word": "charge",
    "phonetic": "美 [tʃɑːdʒ]",
    "pos": "v.",
    "meaning": "充电；控诉 n.责任；费用",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "charge (n./v.); charger (n.充电器)"
    ],
    "usage": {
      "collocations": "in charge of 负责; free of charge 免费; take charge of 掌管; charge the battery 充电",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz445",
    "word": "damage",
    "phonetic": "美 [ˈdæmɪdʒ]",
    "pos": "v.",
    "meaning": "/n. 损害；损毁",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "damage (n./v.) 不可数; damaging (adj.)"
    ],
    "usage": {
      "collocations": "cause damage to 对…造成损害; serious damage 严重损害; pay for the damage 赔偿损失",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz446",
    "word": "join",
    "phonetic": "美 [dʒɔɪn]",
    "pos": "v.",
    "meaning": "参加；连接",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "join 参加(组织/团体); take part in 参加(活动)"
    ],
    "usage": {
      "collocations": "join in 参加(活动); join the army/party 参军/入党; join...to... 把...连接到...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz447",
    "word": "cash",
    "phonetic": "美 [kæʃ]",
    "pos": "n.",
    "meaning": "现金",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "cash (n.现金 v.兑现); cashier (n.收银员)"
    ],
    "usage": {
      "collocations": "pay in cash 现金支付; cash machine 取款机; cash flow 现金流",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz448",
    "word": "instead",
    "phonetic": "美 [ɪnˈsted]",
    "pos": "adv.",
    "meaning": "代替；反而",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "instead 是副词; instead of + n./doing"
    ],
    "usage": {
      "collocations": "instead of 代替;而不是; do sth instead 反而做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz449",
    "word": "connect",
    "phonetic": "美 [kəˈnekt]",
    "pos": "v.",
    "meaning": "连接,连结；联合",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "connection (n.) 联系; disconnect (反) 断开"
    ],
    "usage": {
      "collocations": "connect...with/to... 把...与...连接; be connected with 与...有关",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz450",
    "word": "law",
    "phonetic": "美 [lɔː]",
    "pos": "n.",
    "meaning": "法律；法学；法则",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "law → lawyer (n.律师); lawful (adj.合法的)"
    ],
    "usage": {
      "collocations": "by law 依法; break the law 违法; law and order 法律与秩序",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz451",
    "word": "lay",
    "phonetic": "美 [leɪ]",
    "pos": "v.",
    "meaning": "下蛋；放置",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "lay -> laid -> laid; 辨析: lay(及物,放置) vs lie(不及物,躺)"
    ],
    "usage": {
      "collocations": "lay down 放下/规定; lay out 布置; lay the table 摆餐具; lay eggs 下蛋",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz452",
    "word": "machine",
    "phonetic": "美 [məˈʃiːn]",
    "pos": "n.",
    "meaning": "机械,机器 v.用机器制造",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "machine → machinery (n.机械-总称); mechanic (n.技工)"
    ],
    "usage": {
      "collocations": "washing machine 洗衣机; vending machine 自动售货机; machine gun 机枪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz453",
    "word": "peace",
    "phonetic": "美 [piːs]",
    "pos": "n.",
    "meaning": "和平；平静",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "peace → peaceful (adj.); peacefully (adv.)"
    ],
    "usage": {
      "collocations": "in peace 和平地; world peace 世界和平; peace of mind 内心的平静",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz454",
    "word": "beside",
    "phonetic": "美 [bɪˈsaɪd]",
    "pos": "prep.",
    "meaning": "在…旁边",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "beside (在…旁边) vs. besides (除…之外还)"
    ],
    "usage": {
      "collocations": "beside the point 离题; be beside oneself with 因…发狂",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz455",
    "word": "prefer",
    "phonetic": "美 [prɪˈfɜːr]",
    "pos": "v.",
    "meaning": "喜欢…多于…",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "preference (n.); preferable (adj.); 后接 doing!"
    ],
    "usage": {
      "collocations": "prefer to do/doing 更喜欢做; prefer...to... 比起...更喜欢...; prefer to do rather than do 宁愿做而不愿做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz456",
    "word": "comfortable",
    "phonetic": "美 [ˈkʌmftəbl]",
    "pos": "adj.",
    "meaning": "舒适的",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "comfortable → comfort (n./v.); comfortably (adv.)"
    ],
    "usage": {
      "collocations": "feel comfortable 感觉舒服; make oneself comfortable 请自便",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz457",
    "word": "distance",
    "phonetic": "美 [ˈdɪstəns]",
    "pos": "n.",
    "meaning": "距离；远方",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz458",
    "word": "differ",
    "phonetic": "美 [ˈdɪfər]",
    "pos": "v.",
    "meaning": "使…不同",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "differ → different (adj.); difference (n.)"
    ],
    "usage": {
      "collocations": "differ from 与…不同; differ in 在…方面不同; beg to differ 恕不同意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz459",
    "word": "bush",
    "phonetic": "美 [bʊʃ]",
    "pos": "n.",
    "meaning": "灌木丛",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "bush → bushy (adj.浓密的)"
    ],
    "usage": {
      "collocations": "in the bush 在灌木丛中; beat around the bush 拐弯抹角(习语)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz460",
    "word": "count",
    "phonetic": "美 [kaʊnt]",
    "pos": "v.",
    "meaning": "数数；视为 n.计数；总数",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "countable (adj.); countless (adj.) 无数的"
    ],
    "usage": {
      "collocations": "count on 依靠; count down 倒计时; count...in 把...算在内; count up 加起来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz461",
    "word": "cheat",
    "phonetic": "美 [tʃiːt]",
    "pos": "v.",
    "meaning": "欺骗；作弊 n.作弊；骗子",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz462",
    "word": "invite",
    "phonetic": "美 [ɪnˈvaɪt]",
    "pos": "v.",
    "meaning": "邀请；请求 n.邀请；请柬",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "invitation (n.)"
    ],
    "usage": {
      "collocations": "invite sb to do 邀请某人做; invite sb to... 邀请某人去...; be invited to 被邀请",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz463",
    "word": "article",
    "phonetic": "美 [ˈɑːtɪkl]",
    "pos": "n.",
    "meaning": "文章；物品；冠词",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "article (n.文章/物品/冠词)"
    ],
    "usage": {
      "collocations": "news article 新闻文章; article of clothing 一件衣服; definite article 定冠词",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz464",
    "word": "effort",
    "phonetic": "美 [ˈefət]",
    "pos": "n.",
    "meaning": "努力,尽力,费力的事",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz465",
    "word": "travel",
    "phonetic": "美 [ˈtrævl]",
    "pos": "v.",
    "meaning": "旅行 n.旅行；游历",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "travel -> travelled/traveled; traveller (n.)"
    ],
    "usage": {
      "collocations": "travel to 去...旅行; travel around 四处旅行; travel agency 旅行社; travel light 轻装旅行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz466",
    "word": "information",
    "phonetic": "美 [ˌɪnfəˈmeɪʃn]",
    "pos": "n.",
    "meaning": "消息；通知；情报,资料",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "information (n.) 不可数！informative (adj.)"
    ],
    "usage": {
      "collocations": "a piece of information 一条信息; information desk 问询处; personal information 个人信息",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz467",
    "word": "aid",
    "phonetic": "美 [eɪd]",
    "pos": "v.",
    "meaning": "/n.帮助,援助",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "aid = help; 常用作名词"
    ],
    "usage": {
      "collocations": "first aid 急救; with the aid of 在…帮助下; come to one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz468",
    "word": "equip",
    "phonetic": "美 [ɪˈkwɪp]",
    "pos": "v.",
    "meaning": "装备,配备；提供",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "equip → equipment (n.设备-不可数); 过去式 equipped"
    ],
    "usage": {
      "collocations": "equip sb with sth 给某人配备某物; be equipped with 配备有; be well equipped 装备精良",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz469",
    "word": "retire",
    "phonetic": "美 [rɪˈtaɪər]",
    "pos": "v.",
    "meaning": "退休；（因伤）退出（比赛等）",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "retire → retirement (n.); retired (adj.退休的)"
    ],
    "usage": {
      "collocations": "retire from 从…退休; retire at 60 在60岁退休; retired life 退休生活",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz470",
    "word": "prize",
    "phonetic": "美 [praɪz]",
    "pos": "n.",
    "meaning": "奖品；奖赏",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "prize (n.奖); 辨析 prize vs. award vs. reward"
    ],
    "usage": {
      "collocations": "win a prize 获奖; Nobel Prize 诺贝尔奖; prize-giving ceremony 颁奖典礼",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz471",
    "word": "train",
    "phonetic": "美 [treɪn]",
    "pos": "n.",
    "meaning": "火车 v.培训,训练",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "train → training (n.训练); trainee (n.受训者)"
    ],
    "usage": {
      "collocations": "train station 火车站; by train 乘火车; train sb to do 训练某人做; train of thought 思路",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz472",
    "word": "share",
    "phonetic": "美 [ʃer]",
    "pos": "v.",
    "meaning": "分享；分担",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "share 作动词 + with; 作名词\"份额\""
    ],
    "usage": {
      "collocations": "share...with... 与...分享...; share in 分担",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz473",
    "word": "available",
    "phonetic": "美 [əˈveɪləbl]",
    "pos": "adj.",
    "meaning": "可获得的,可用的；有空的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "常作表语/后置定语; availability (n.)"
    ],
    "usage": {
      "collocations": "be available to 对...可用; be available for 可用于...; make sth available 使...可用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz474",
    "word": "increase",
    "phonetic": "美 [ɪnˈkriːs]",
    "pos": "v.",
    "meaning": "增加；加大 n.增长；提高",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "decrease (反); increasingly (adv.) 日益"
    ],
    "usage": {
      "collocations": "increase by 增加了(幅度); increase to 增加到; on the increase 在增长中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz475",
    "word": "possible",
    "phonetic": "美 [ˈpɑːsəbl]",
    "pos": "adj.",
    "meaning": "可能的；合理的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "possibly (adv.); impossible (反); possibility (n.)"
    ],
    "usage": {
      "collocations": "as...as possible 尽可能...; if possible 如果可能的话; make it possible 使...成为可能",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz476",
    "word": "magazine",
    "phonetic": "美 [ˌmæɡəˈziːn]",
    "pos": "n.",
    "meaning": "杂志；期刊",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "magazine (n.杂志)"
    ],
    "usage": {
      "collocations": "fashion magazine 时尚杂志; magazine article 杂志文章; subscribe to a magazine 订阅杂志",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz477",
    "word": "patience",
    "phonetic": "美 [ˈpeɪʃns]",
    "pos": "n.",
    "meaning": "耐心；毅力",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "patience (n.) ← patient (adj.耐心的)"
    ],
    "usage": {
      "collocations": "have patience 有耐心; lose patience 失去耐心; patience is a virtue 耐心是美德",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz478",
    "word": "present",
    "phonetic": "美 [ˈpreznt]",
    "pos": "adj.",
    "meaning": "当前的；出席的 n.礼物；目前",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz479",
    "word": "communicate",
    "phonetic": "美 [kəˈmjuːnəkeɪt]",
    "pos": "v.",
    "meaning": "（与某人）交流；传达",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz480",
    "word": "solve",
    "phonetic": "美 [sɑːlv]",
    "pos": "v.",
    "meaning": "解决,处理",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "solve → solution (n.); solvable (adj.)"
    ],
    "usage": {
      "collocations": "solve a problem 解决问题; solve the mystery 解开谜团",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz481",
    "word": "risk",
    "phonetic": "美 [rɪsk]",
    "pos": "n.",
    "meaning": "危险；风险 v.冒险做",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "后接 doing! risky (adj.)"
    ],
    "usage": {
      "collocations": "at the risk of 冒着...的风险; take a risk 冒险; risk doing 冒险做; run the risk of 冒着...的危险",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz482",
    "word": "interest",
    "phonetic": "美 [ˈɪntrəst]",
    "pos": "n.",
    "meaning": "兴趣 v.使感兴趣",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "interested (adj.); interesting (adj.); 辨析常考!"
    ],
    "usage": {
      "collocations": "have/take an interest in 对...感兴趣; be of interest 有趣的; places of interest 名胜; in the interest of 为了...的利益",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz483",
    "word": "plant",
    "phonetic": "美 [plænt]",
    "pos": "n.",
    "meaning": "植物 v.种植；安放",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "plant → planter (n.种植者); plantation (n.种植园)"
    ],
    "usage": {
      "collocations": "grow a plant 种植植物; power plant 发电厂; plant a tree 植树",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz484",
    "word": "competition",
    "phonetic": "美 [ˌkɑːmpəˈtɪʃən]",
    "pos": "n.",
    "meaning": "竞争；比赛",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "compete (v.) → competition (n.); competitive (adj.)"
    ],
    "usage": {
      "collocations": "enter a competition 参加比赛; fierce competition 激烈的竞争; in competition with 与…竞争",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz485",
    "word": "legend",
    "phonetic": "美 [ˈledʒənd]",
    "pos": "n.",
    "meaning": "传说；传奇",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "legend → legendary (adj.传奇的)"
    ],
    "usage": {
      "collocations": "living legend 在世传奇; according to legend 据传说; a legend has it that 传说…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz486",
    "word": "sorrow",
    "phonetic": "美 [ˈsɑːroʊ]",
    "pos": "n.",
    "meaning": "悲伤 v.感到（或表示）悲伤",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "sorrow → sorrowful (adj.); sorry (adj.)"
    ],
    "usage": {
      "collocations": "deep sorrow 深深的悲伤; to one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz487",
    "word": "joy",
    "phonetic": "美 [dʒɔɪ]",
    "pos": "n.",
    "meaning": "欢乐；高兴",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "joy → joyful (adj.); enjoy (v.)"
    ],
    "usage": {
      "collocations": "to one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz488",
    "word": "sweep",
    "phonetic": "美 [swiːp]",
    "pos": "v.",
    "meaning": "扫除,打扫",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "sweep → swept → swept; sweeper (n.清洁工)"
    ],
    "usage": {
      "collocations": "sweep the floor 扫地; sweep away 扫走; sweep across 横扫",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz489",
    "word": "award",
    "phonetic": "美 [əˈwɔːd]",
    "pos": "v.",
    "meaning": "授予 n.奖品",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "award → awardee (n.获奖者)"
    ],
    "usage": {
      "collocations": "win an award 获奖; award ceremony 颁奖典礼; award sb sth 授予某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz490",
    "word": "habit",
    "phonetic": "美 [ˈhæbɪt]",
    "pos": "n.",
    "meaning": "习惯",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "habit → habitual (adj.习惯性的)"
    ],
    "usage": {
      "collocations": "form/develop a habit 养成习惯; break a habit 改掉习惯; eating habit 饮食习惯",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz491",
    "word": "hurry",
    "phonetic": "美 [ˈhʌri]",
    "pos": "v.",
    "meaning": "匆忙；催促 n.匆忙；赶快",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "hurried (adj.); hurriedly (adv.)"
    ],
    "usage": {
      "collocations": "hurry up 快点; in a hurry 匆忙地; hurry to do 匆忙做; hurry through 匆匆完成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz492",
    "word": "produce",
    "phonetic": "美 [prəˈdjuːs]",
    "pos": "v.",
    "meaning": "生产；创作；引起 n.产品",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "product (n.) 产品; production (n.) 生产; producer (n.) 生产者"
    ],
    "usage": {
      "collocations": "produce goods 生产商品; produce a report 制作报告",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz493",
    "word": "smooth",
    "phonetic": "美 [smuːð]",
    "pos": "adj.",
    "meaning": "光滑的；顺利的 v.使光滑",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "smooth → smoothly (adv.); smoothness (n.)"
    ],
    "usage": {
      "collocations": "smooth road 平坦的道路; smooth skin 光滑的皮肤; smooth away difficulties 排除困难",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz494",
    "word": "yet",
    "phonetic": "美 [jet]",
    "pos": "adv.",
    "meaning": "还；已经 conj. 然而；但是",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "yet (用于完成时否定/疑问); yet = still (在肯定句中)"
    ],
    "usage": {
      "collocations": "not…yet 还没有…; have yet to do 还没做; and yet 然而",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz495",
    "word": "human",
    "phonetic": "美 [ˈhjuːmən]",
    "pos": "n.",
    "meaning": "人 adj.人本性的；有人情味的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "human → humanity (n.); humane (adj.人道的)"
    ],
    "usage": {
      "collocations": "human being 人类; human right 人权; human nature 人性; human body 人体",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz496",
    "word": "power",
    "phonetic": "美 [ˈpaʊə]",
    "pos": "n.",
    "meaning": "动力；力量",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "power → powerful (adj.); powerless (adj.)"
    ],
    "usage": {
      "collocations": "come to power 上台执政; power station 发电站; have the power to do 有权力/能力做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz497",
    "word": "sick",
    "phonetic": "美 [sɪk]",
    "pos": "adj.",
    "meaning": "生病的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "sick (美:生病; 英:恶心); ill (英:生病) → sickness (n.)"
    ],
    "usage": {
      "collocations": "feel sick 感觉恶心/不舒服; sick leave 病假; be sick of 厌恶",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz498",
    "word": "manner",
    "phonetic": "美 [ˈmænər]",
    "pos": "n.",
    "meaning": "方法；礼貌；礼仪",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "manner (方式)单数; manners (礼貌)复数; 辨析: manner vs. way"
    ],
    "usage": {
      "collocations": "good/bad manners 有/没礼貌; table manners 餐桌礼仪; in a…manner 以…方式",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz499",
    "word": "traffic",
    "phonetic": "美 [ˈtræfɪk]",
    "pos": "n.",
    "meaning": "交通；贸易；运输",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "traffic (n.) 不可数"
    ],
    "usage": {
      "collocations": "heavy traffic 交通拥堵; traffic jam 堵车; traffic light 交通灯; traffic accident 交通事故",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz500",
    "word": "public",
    "phonetic": "美 [ˈpʌblɪk]",
    "pos": "adj.",
    "meaning": "公开的；大众的 n.百姓",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "public → publicly (adv.); publicity (n.宣传)"
    ],
    "usage": {
      "collocations": "in public 公开地; public transport 公共交通; the general public 公众",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz501",
    "word": "annoy",
    "phonetic": "美 [əˈnɔɪ]",
    "pos": "v.",
    "meaning": "打扰,干扰；使烦恼",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "annoy → annoyance (n.); annoying (adj.)"
    ],
    "usage": {
      "collocations": "annoy sb 惹恼某人; be annoyed with/at 对…感到恼怒; annoying noise 烦人的噪音",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz502",
    "word": "positive",
    "phonetic": "美 [ˈpɑːzətɪv]",
    "pos": "adj.",
    "meaning": "自信的；积极乐观的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "positive → positively (adv.); 反义词 negative"
    ],
    "usage": {
      "collocations": "positive attitude 积极态度; positive effect 积极影响; positive answer 肯定的回答",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz503",
    "word": "composition",
    "phonetic": "美 [ˌkɑːmpəˈzɪʃn]",
    "pos": "n.",
    "meaning": "作文；（音乐、艺术、诗歌）作品",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "compose (v.) → composition (n.)"
    ],
    "usage": {
      "collocations": "write a composition 写作文; chemical composition 化学成分; musical composition 音乐作品",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz504",
    "word": "conclusion",
    "phonetic": "美 [kənˈkluːʒn]",
    "pos": "n.",
    "meaning": "结论,推论；结果",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "conclude (v.) → conclusion (n.); conclusive (adj.)"
    ],
    "usage": {
      "collocations": "in conclusion 总之; draw a conclusion 得出结论; come to a conclusion 得出结论",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz505",
    "word": "beat",
    "phonetic": "美 [biːt]",
    "pos": "v.",
    "meaning": "打败；敲打；有规律地作响",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "beat -> beat -> beaten; 辨析: beat(打败对手) vs win(赢得比赛)"
    ],
    "usage": {
      "collocations": "beat sb 打败某人; beat down 打倒/还价; beat up 痛打",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz506",
    "word": "income",
    "phonetic": "美 [ˈɪnkʌm]",
    "pos": "n.",
    "meaning": "收入；所得",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "income (n.) 不可数/可数"
    ],
    "usage": {
      "collocations": "monthly income 月收入; income tax 所得税; source of income 收入来源",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz507",
    "word": "tolerance",
    "phonetic": "美 [ˈtɑːlərəns]",
    "pos": "n.",
    "meaning": "容忍；宽容",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "tolerate (v.) → tolerance (n.); tolerant (adj.)"
    ],
    "usage": {
      "collocations": "show tolerance 表现出宽容; zero tolerance 零容忍; tolerance for/of 对…的容忍",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz508",
    "word": "leave",
    "phonetic": "美 [liːv]",
    "pos": "v.",
    "meaning": "离开；忘了带；留下 n.假期",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "leave -> left -> left; leave 可作使役动词: leave sb doing"
    ],
    "usage": {
      "collocations": "leave for 前往; leave...behind 留下; leave out 省略; leave a message 留言; leave sb alone 让某人独处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz509",
    "word": "appreciate",
    "phonetic": "美 [əˈpriːʃieɪt]",
    "pos": "v.",
    "meaning": "欣赏；重视；感激",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "appreciate → appreciation (n.); appreciative (adj.)"
    ],
    "usage": {
      "collocations": "appreciate doing sth 感激做某事; I",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz510",
    "word": "strict",
    "phonetic": "美 [strɪkt]",
    "pos": "adj.",
    "meaning": "严格的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "strict → strictly (adv.); strictness (n.)"
    ],
    "usage": {
      "collocations": "be strict with sb 对某人严格; be strict about/in 在…方面严格; strictly speaking 严格来说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz511",
    "word": "translate",
    "phonetic": "美 [trænsˈleɪt]",
    "pos": "v.",
    "meaning": "翻译；转变",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "translation (n.) 翻译; translator (n.) 译者"
    ],
    "usage": {
      "collocations": "translate...into... 把...翻译成...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz512",
    "word": "add",
    "phonetic": "美 [æd]",
    "pos": "v.",
    "meaning": "增加；计算…总和",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "add → addition (n.); additional (adj.额外的)"
    ],
    "usage": {
      "collocations": "add A to B 把A加到B上; add up 合计; add up to 总计达; add to 增加",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz513",
    "word": "board",
    "phonetic": "美 [bɔːd]",
    "pos": "n.",
    "meaning": "板,木板 v.上船（或火车、飞机、公共汽车）",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "board (n.板/董事会 v.登机/船)"
    ],
    "usage": {
      "collocations": "on board 在船上/飞机上; notice board 布告栏; board of directors 董事会; board a plane 登机",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz514",
    "word": "concert",
    "phonetic": "美 [ˈkɑːnsət]",
    "pos": "n.",
    "meaning": "音乐会；演奏会",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "concert → concerto (n.协奏曲)"
    ],
    "usage": {
      "collocations": "go to a concert 去听音乐会; give a concert 举办音乐会; in concert 一致地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz515",
    "word": "poem",
    "phonetic": "美 [ˈpoʊ.əm]",
    "pos": "n.",
    "meaning": "诗",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "poem → poet (n.诗人); poetry (n.诗歌-总称)"
    ],
    "usage": {
      "collocations": "write a poem 写诗; recite a poem 背诵诗歌; collection of poems 诗集",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz516",
    "word": "work",
    "phonetic": "美 [wɜːrk]",
    "pos": "v.",
    "meaning": "工作 n.作品；著作",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "worker (n.); hard-working (adj.); work 不可数!"
    ],
    "usage": {
      "collocations": "work out 计算出/锻炼; work on 致力于; work for 为...工作; at work 在工作; out of work 失业",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz517",
    "word": "though",
    "phonetic": "美 [ðoʊ]",
    "pos": "conj.",
    "meaning": "虽然；尽管；然而",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "though = although; 不能与but连用！可放在句末(口语)"
    ],
    "usage": {
      "collocations": "even though 即使; as though 好像; though…still… 虽然…但是…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz518",
    "word": "young",
    "phonetic": "美 [jʌŋ]",
    "pos": "adj.",
    "meaning": "年轻的 n.年轻人",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "young → youth (n.青春/年轻人)"
    ],
    "usage": {
      "collocations": "young people 年轻人; the young 年轻人(总称); young at heart 心态年轻",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz519",
    "word": "address",
    "phonetic": "美 [əˈdres]",
    "pos": "n.",
    "meaning": "地址；演讲 v.演说",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "address (n.地址 v.演说/处理/称呼)"
    ],
    "usage": {
      "collocations": "home address 家庭地址; email address 邮箱地址; address a problem 处理问题; address sb as 称呼某人为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz520",
    "word": "benefit",
    "phonetic": "美 [ˈbenɪfɪt]",
    "pos": "n.",
    "meaning": "优势；益处 v.使受益",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "benefit → beneficial (adj.有益的)"
    ],
    "usage": {
      "collocations": "benefit from 从…中获益; for the benefit of 为了…的利益; health benefit 健康益处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz521",
    "word": "interview",
    "phonetic": "美 [ˈɪntəvjuː]",
    "pos": "v.",
    "meaning": "采访；面试会见；n.面试；采访",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "interview → interviewer (n.面试官); interviewee (n.被面试者)"
    ],
    "usage": {
      "collocations": "job interview 求职面试; have an interview with 与…面谈; TV interview 电视采访",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz522",
    "word": "waste",
    "phonetic": "美 [weɪst]",
    "pos": "n.",
    "meaning": "浪费；废品 adj.废弃的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "waste...on... 在...上浪费; wasteful (adj.)"
    ],
    "usage": {
      "collocations": "waste time/money (in) doing 浪费时间/金钱做; waste of time 浪费时间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz523",
    "word": "above",
    "phonetic": "美 [əˈbʌv]",
    "pos": "prep.",
    "meaning": "在…上面 adv.在上面 adj.上述的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "above (在上方不接触) vs. on (接触) vs. over (正上方)"
    ],
    "usage": {
      "collocations": "above all 首先; above average 高于平均水平; the above mentioned 上述的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz524",
    "word": "beyond",
    "phonetic": "美 [bɪˈjɑːnd]",
    "pos": "prep.",
    "meaning": "超过, 越多 adv.在远处",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "beyond (prep.超出/在…那边)"
    ],
    "usage": {
      "collocations": "beyond belief 难以置信; beyond one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz525",
    "word": "blow",
    "phonetic": "美 [bloʊ]",
    "pos": "v.",
    "meaning": "吹；刮动；吹奏",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "blow -> blew -> blown"
    ],
    "usage": {
      "collocations": "blow out 吹灭; blow up 爆炸/充气; blow away 吹走; blow off 吹掉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz526",
    "word": "research",
    "phonetic": "美 [rɪˈsɜːrtʃ]",
    "pos": "v.",
    "meaning": "研究,调查",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "research 不可数, 不说 a research; researcher (n.)"
    ],
    "usage": {
      "collocations": "do research on 对...进行研究; research into 研究",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz527",
    "word": "double",
    "phonetic": "美 [ˈdʌbl]",
    "pos": "adj.",
    "meaning": "两倍的,双重的 n 两倍,双份",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "double → doubly (adv.加倍地)"
    ],
    "usage": {
      "collocations": "double room 双人房; double check 仔细检查; double in size 翻倍",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz528",
    "word": "curious",
    "phonetic": "美 [ˈkjʊriəs]",
    "pos": "adj.",
    "meaning": "好奇的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "curious → curiosity (n.好奇心); curiously (adv.)"
    ],
    "usage": {
      "collocations": "be curious about 对…好奇; curious to know 想知道",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz529",
    "word": "complete",
    "phonetic": "美 [kəmˈpliːt]",
    "pos": "adj.",
    "meaning": "完整 v.完成",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "completely (adv.) 完全地; completion (n.)"
    ],
    "usage": {
      "collocations": "complete doing sth 完成做某事; a complete surprise 完全出乎意料",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz530",
    "word": "amaze",
    "phonetic": "美 [əˈmeɪz]",
    "pos": "v.",
    "meaning": "使惊奇；使惊愕",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "amaze → amazing (adj.令人惊奇的); amazement (n.)"
    ],
    "usage": {
      "collocations": "amaze sb 使某人惊奇; be amazed at/by 对…感到惊奇",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz531",
    "word": "level",
    "phonetic": "美 [ˈlevl]",
    "pos": "n.",
    "meaning": "等级；水平 adj.水平的；水准的；平静的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "level (n./adj./v.)"
    ],
    "usage": {
      "collocations": "sea level 海平面; high/low level 高/低水平; level up 升级; on the level 诚实",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz532",
    "word": "require",
    "phonetic": "美 [rɪˈkwaɪə]",
    "pos": "v.",
    "meaning": "要求；需求；命令",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "requirement (n.); 后接 doing 表被动!"
    ],
    "usage": {
      "collocations": "require doing = require to be done 需要被做; require sb to do 要求某人做; require that sb (should) do",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz533",
    "word": "restaurant",
    "phonetic": "美 [ˈrestrɑːnt]",
    "pos": "n.",
    "meaning": "餐馆",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "restaurant (n.餐厅); 拼写注意: restau + rant"
    ],
    "usage": {
      "collocations": "go to a restaurant 去饭馆; fast food restaurant 快餐店; restaurant chain 连锁餐厅",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz534",
    "word": "method",
    "phonetic": "美 [ˈmeθəd]",
    "pos": "n.",
    "meaning": "方法；条理",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "method = way; methodology (n.方法论)"
    ],
    "usage": {
      "collocations": "teaching method 教学方法; scientific method 科学方法; method of doing 做…的方法",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz535",
    "word": "cheap",
    "phonetic": "美 [tʃiːp]",
    "pos": "adj.",
    "meaning": "便宜的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "cheap → cheaply (adv.); 反义词 expensive"
    ],
    "usage": {
      "collocations": "cheap price 便宜的价格; cheap and cheerful 物美价廉",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz536",
    "word": "astronaut",
    "phonetic": "美 [ˈæstrənɔːt]",
    "pos": "n.",
    "meaning": "宇航员,太空人",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "astronaut (n.宇航员); astronomy (n.天文学)"
    ],
    "usage": {
      "collocations": "become an astronaut 成为宇航员; astronaut suit 宇航服",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz537",
    "word": "price",
    "phonetic": "美 [praɪs]",
    "pos": "n.",
    "meaning": "价格；代价",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "price → priceless (adj.无价的); pricy (adj.昂贵的)"
    ],
    "usage": {
      "collocations": "at a high/low price 以高/低价; price tag 价签; pay the price 付出代价",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz538",
    "word": "bank",
    "phonetic": "美 [bæŋk]",
    "pos": "n.",
    "meaning": "银行；岸 v.把（钱）存入银行；开账户",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "bank (n.银行/河岸 v.存款/依赖)"
    ],
    "usage": {
      "collocations": "bank account 银行账户; river bank 河岸; bank on 依赖",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz539",
    "word": "progress",
    "phonetic": "美 [ˈproʊgres]",
    "pos": "n.",
    "meaning": "进步；前进",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "progress 不可数! progressive (adj.) 进步的"
    ],
    "usage": {
      "collocations": "make progress 取得进步; in progress 在进行中; progress report 进度报告",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz540",
    "word": "reduce",
    "phonetic": "美 [rɪˈdjuːs]",
    "pos": "v.",
    "meaning": "减少；降低",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reduction (n.)"
    ],
    "usage": {
      "collocations": "reduce...to... 把...减少到; reduce...by... 减少了...; reduce pollution 减少污染; reduce speed 减速",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz541",
    "word": "structure",
    "phonetic": "美 [ˈstrʌktʃər]",
    "pos": "n.",
    "meaning": "结构；构造",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "structure → structural (adj.); structurally (adv.)"
    ],
    "usage": {
      "collocations": "social structure 社会结构; sentence structure 句子结构; steel structure 钢结构",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz542",
    "word": "club",
    "phonetic": "美 [klʌb]",
    "pos": "n.",
    "meaning": "俱乐部",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "club (n.俱乐部/球杆)"
    ],
    "usage": {
      "collocations": "join a club 加入俱乐部; night club 夜总会; football club 足球俱乐部; golf club 高尔夫球杆",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz543",
    "word": "deadline",
    "phonetic": "美 [ˈdedlaɪn]",
    "pos": "n.",
    "meaning": "截止期限",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "deadline (n.截止日期) = dead + line"
    ],
    "usage": {
      "collocations": "meet a deadline 按时完成; miss a deadline 错过截止日期; set a deadline 设定期限",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz544",
    "word": "artist",
    "phonetic": "美 [ˈɑːtɪst]",
    "pos": "n.",
    "meaning": "艺术家；画家",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "artist → artistic (adj.艺术的); artistry (n.艺术才能)"
    ],
    "usage": {
      "collocations": "famous artist 著名艺术家; make-up artist 化妆师; creative artist 有创造力的艺术家",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz545",
    "word": "sunshine",
    "phonetic": "美 [ˈsʌnʃaɪn]",
    "pos": "n.",
    "meaning": "阳光",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "sunshine = sunlight; sun + shine"
    ],
    "usage": {
      "collocations": "in the sunshine 在阳光下; a ray of sunshine 一线阳光; bring sunshine to 给…带来欢乐",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz546",
    "word": "brush",
    "phonetic": "美 [brʌʃ]",
    "pos": "n.",
    "meaning": "刷子；灌木丛 v.刷净",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "brush (n./v.)"
    ],
    "usage": {
      "collocations": "brush teeth 刷牙; brush hair 梳头; paint brush 画笔; brush up on 温习",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz547",
    "word": "store",
    "phonetic": "美 [stɔːr]",
    "pos": "v.",
    "meaning": "储存,贮藏 n.商店,店铺",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "storage (n.)"
    ],
    "usage": {
      "collocations": "store up 储存; store...in... 把...存放在...; department store 百货商店; in store 储存着/即将发生",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz548",
    "word": "harmful",
    "phonetic": "美 [ˈhɑːmfl]",
    "pos": "adj.",
    "meaning": "有害的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "harm (n./v.) → harmful (adj.); harmless (adj.无害的)"
    ],
    "usage": {
      "collocations": "be harmful to 对…有害; harmful effect 有害影响; harmful substance 有害物质",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz549",
    "word": "among",
    "phonetic": "美 [əˈmʌŋ]",
    "pos": "prep.",
    "meaning": "在…中",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "among + 三者以上; between + 两者"
    ],
    "usage": {
      "collocations": "among friends 在朋友中间; among the best 最好的之一; among other things 除其他之外",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz550",
    "word": "congratulation",
    "phonetic": "美 [kənˌɡrætʃuˈleɪʃn]",
    "pos": "n.",
    "meaning": "祝贺,贺词",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "congratulate (v.) → congratulation (n.常用复数)"
    ],
    "usage": {
      "collocations": "congratulations on 祝贺…; offer congratulations 表示祝贺",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz551",
    "word": "wide",
    "phonetic": "美 [waɪd]",
    "pos": "adj.",
    "meaning": "广泛的；宽的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "wide → widely (adv.); width (n.宽度); widen (v.加宽)"
    ],
    "usage": {
      "collocations": "wide open 大开的; wide range 广泛的范围; far and wide 到处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz552",
    "word": "alone",
    "phonetic": "美 [əˈloʊn]",
    "pos": "adj.",
    "meaning": "独自；寂寞 adv.独自",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz553",
    "word": "soldier",
    "phonetic": "美 [ˈsoʊldʒər]",
    "pos": "n.",
    "meaning": "军人",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "soldier (n.士兵)"
    ],
    "usage": {
      "collocations": "brave soldier 勇敢的士兵; toy soldier 玩具兵; soldier on 坚持下去",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz554",
    "word": "hand",
    "phonetic": "美 [hænd]",
    "pos": "n.",
    "meaning": "手；帮助；手工 v.递；分发；提交",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "hand → handy (adj.便利的); handful (n.一把)"
    ],
    "usage": {
      "collocations": "hand in 上交; hand out 分发; give sb a hand 帮助某人; on the other hand 另一方面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz555",
    "word": "spell",
    "phonetic": "美 [spel]",
    "pos": "v.",
    "meaning": "拼写",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "spell → spelt/spelled; spelling (n.拼写)"
    ],
    "usage": {
      "collocations": "spell a word 拼单词; how to spell 怎么拼写; spell out 详细说明",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz556",
    "word": "relative",
    "phonetic": "美 [ˈrelətɪv]",
    "pos": "n.",
    "meaning": "亲戚；相关物 adj.相对的；有关系的",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "relative → relatively (adv.); relativity (n.相对性)"
    ],
    "usage": {
      "collocations": "close relative 近亲; relative to 与…相关; relative clause 关系从句",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz557",
    "word": "control",
    "phonetic": "美 [kənˈtroʊl]",
    "pos": "v.",
    "meaning": "指挥；控制",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "controllable (adj.); controller (n.) 控制器"
    ],
    "usage": {
      "collocations": "in control of 控制; out of control 失控; under control 在控制之下; take control of 掌控",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz558",
    "word": "aim",
    "phonetic": "美 [eɪm]",
    "pos": "n.",
    "meaning": "目标,目的 v.目的是",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz559",
    "word": "rescue",
    "phonetic": "美 [ˈreskjuː]",
    "pos": "v.",
    "meaning": "营救 n.获救,救援",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "rescue → rescuer (n.救援者)"
    ],
    "usage": {
      "collocations": "rescue sb from 从…中救出某人; come to one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz560",
    "word": "asleep",
    "phonetic": "美 [əˈsliːp]",
    "pos": "adj.",
    "meaning": "睡着的 adv.熟睡",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz561",
    "word": "reply",
    "phonetic": "美 [rɪˈplaɪ]",
    "pos": "n.",
    "meaning": "/v.回答,答复",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "reply to sb/sth; 辨析: reply(正式) vs answer(通用)"
    ],
    "usage": {
      "collocations": "reply to 回复; in reply to 作为对...的回复; make no reply 不回答",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz562",
    "word": "cute",
    "phonetic": "美 [kjuːt]",
    "pos": "adj.",
    "meaning": "可爱的；漂亮的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "cute = lovely = adorable"
    ],
    "usage": {
      "collocations": "cute baby 可爱的宝宝; cute idea 好主意; cute outfit 可爱的装扮",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz563",
    "word": "check",
    "phonetic": "美 [tʃek]",
    "pos": "n.",
    "meaning": "/v.检查",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "check (n.) 支票/检查; checker (n.)"
    ],
    "usage": {
      "collocations": "check in 登记/报到; check out 退房/检查; check up on 检查; check...for... 检查...是否有...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz564",
    "word": "stomach",
    "phonetic": "美 [ˈstʌmək]",
    "pos": "n.",
    "meaning": "胃；腹部",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "stomach → stomachic (adj.胃的)"
    ],
    "usage": {
      "collocations": "stomach ache 胃疼; on an empty stomach 空腹; have a strong stomach 胆子大",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz565",
    "word": "bring",
    "phonetic": "美 [brɪŋ]",
    "pos": "v.",
    "meaning": "带来；引起，促使",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "bring -> brought -> brought; 辨析: bring(带来) vs take(带走)"
    ],
    "usage": {
      "collocations": "bring up 抚养/提出; bring about 引起; bring back 带回; bring in 引入",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz566",
    "word": "fail",
    "phonetic": "美 [feɪl]",
    "pos": "v.",
    "meaning": "失败；未做 n.不及格",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "failure (n.) 失败; failing (prep.) 如果没有"
    ],
    "usage": {
      "collocations": "fail to do sth 未能做某事; fail (in) the exam 考试不及格; without fail 必定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz567",
    "word": "another",
    "phonetic": "美 [əˈnʌðə]",
    "pos": "adj.",
    "meaning": "另一个的；再一个的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz568",
    "word": "notice",
    "phonetic": "美 [ˈnoʊtɪs]",
    "pos": "n.",
    "meaning": "通知；公告牌 v.注意到",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "noticeable (adj.); 感官动词 + sb + do/doing"
    ],
    "usage": {
      "collocations": "notice sb do/doing 注意到某人做/正在做; take notice of 注意到; without notice 不事先通知",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz569",
    "word": "mind",
    "phonetic": "美 [maɪnd]",
    "pos": "v.",
    "meaning": "介意 n.头脑；聪明人",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "mind → mindful (adj.留意的); mindless (adj.盲目的)"
    ],
    "usage": {
      "collocations": "make up one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz570",
    "word": "instructor",
    "phonetic": "美 [ɪnˈstrʌktər]",
    "pos": "n.",
    "meaning": "指导者；讲师",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "instruct (v.) → instructor (n.); instruction (n.)"
    ],
    "usage": {
      "collocations": "driving instructor 驾校教练; fitness instructor 健身教练; course instructor 课程讲师",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz571",
    "word": "common",
    "phonetic": "美 [ˈkɑːmən]",
    "pos": "adj.",
    "meaning": "常见的；普通的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "commonly (adv.); 辨析: common(常见的) vs ordinary(平凡的)"
    ],
    "usage": {
      "collocations": "in common 共同的; common sense 常识; have...in common 有共同之处",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz572",
    "word": "educate",
    "phonetic": "美 [ˈedjʊkeɪt]",
    "pos": "v.",
    "meaning": "教育；训练；培养",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "education (n.); educational (adj.)"
    ],
    "usage": {
      "collocations": "educate sb about/on 教育某人关于...; be well educated 受过良好教育; educate oneself 自学",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz573",
    "word": "probably",
    "phonetic": "美 [ˈprɑːbəbli]",
    "pos": "adv.",
    "meaning": "很可能；大概",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "= likely/possibly; probable (adj.)"
    ],
    "usage": {
      "collocations": "will probably... 可能会...; most probably 很可能",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz574",
    "word": "calendar",
    "phonetic": "美 [ˈkælɪndər]",
    "pos": "n.",
    "meaning": "日历,日程表",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "calendar (n.日历)"
    ],
    "usage": {
      "collocations": "solar calendar 阳历; lunar calendar 阴历; calendar year 日历年; wall calendar 挂历",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz575",
    "word": "display",
    "phonetic": "美 [dɪˈspleɪ]",
    "pos": "n.",
    "meaning": "/v.陈列,展览",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz576",
    "word": "chance",
    "phonetic": "美 [tʃæns]",
    "pos": "n.",
    "meaning": "机会；碰巧",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz577",
    "word": "museum",
    "phonetic": "美 [mjuːˈziəm]",
    "pos": "n.",
    "meaning": "博物馆；展览馆",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "museum (n.博物馆)"
    ],
    "usage": {
      "collocations": "art museum 美术馆; museum of history 历史博物馆; visit a museum 参观博物馆",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz578",
    "word": "course",
    "phonetic": "美 [kɔːs]",
    "pos": "n.",
    "meaning": "课程；过程；航线",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz579",
    "word": "church",
    "phonetic": "美 [tʃɜːrtʃ]",
    "pos": "n.",
    "meaning": "教堂；礼拜（仪式）",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "church → churchgoer (n.常去做礼拜的人)"
    ],
    "usage": {
      "collocations": "go to church 去教堂做礼拜; church wedding 教堂婚礼; at church 在教堂",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz580",
    "word": "encourage",
    "phonetic": "美 [ɪnˈkʌrɪdʒ]",
    "pos": "v.",
    "meaning": "鼓励；支持",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "encouragement (n.); discourage (反) 使泄气"
    ],
    "usage": {
      "collocations": "encourage sb to do sth 鼓励某人做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz581",
    "word": "enter",
    "phonetic": "美 [ˈentər]",
    "pos": "v.",
    "meaning": "进来；开始从事",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "entrance (n.) 入口; entry (n.) 进入"
    ],
    "usage": {
      "collocations": "enter...into... 把...输入...; enter a room 进房间; enter a competition 参加比赛",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz582",
    "word": "last",
    "phonetic": "美 [lɑːst]",
    "pos": "adj.",
    "meaning": "最后的 v.持续 adv. 上一次；最后",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "last → lasting (adj.持久的); lastly (adv.)"
    ],
    "usage": {
      "collocations": "last but not least 最后但同样重要的; at last 终于; last for… 持续…时间; last year 去年",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz583",
    "word": "sentence",
    "phonetic": "美 [ˈsentəns]",
    "pos": "n.",
    "meaning": "句子；判决 v.判刑",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "sentence (n.句子/判决 v.判决)"
    ],
    "usage": {
      "collocations": "make a sentence 造句; death sentence 死刑; sentence structure 句子结构",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz584",
    "word": "tower",
    "phonetic": "美 [ˈtaʊə]",
    "pos": "n.",
    "meaning": "塔；高楼 v.高耸；屹立；超越",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "tower (n.塔 v.高耸)"
    ],
    "usage": {
      "collocations": "Eiffel Tower 埃菲尔铁塔; tower over 高出; water tower 水塔",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz585",
    "word": "center",
    "phonetic": "美 [ˈsentər]",
    "pos": "n.",
    "meaning": "中心；中心区 v.把…放在中央",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "美式 center; 英式 centre → central (adj.)"
    ],
    "usage": {
      "collocations": "in the center of 在…中心; shopping center 购物中心; center on 集中于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz586",
    "word": "stick",
    "phonetic": "美 [stɪk]",
    "pos": "v.",
    "meaning": "粘贴；坚持 n.枝条；棍",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "stick -> stuck -> stuck; sticky (adj.)"
    ],
    "usage": {
      "collocations": "stick to 坚持; stick out 伸出/显眼; stick...into... 把...插入...; stick with 继续使用/和...在一起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz587",
    "word": "sport",
    "phonetic": "美 [spɔːt]",
    "pos": "n.",
    "meaning": "体育活动",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "sport → sportsman (n.运动员); sporting (adj.体育的)"
    ],
    "usage": {
      "collocations": "do sport 做运动; sport event 体育赛事; sports meeting 运动会; sport car 跑车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz588",
    "word": "sightseeing",
    "phonetic": "美 [ˈsaɪtsiːɪŋ]",
    "pos": "n.",
    "meaning": "观光；游览",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "sightseeing (n.观光) = sight + seeing"
    ],
    "usage": {
      "collocations": "go sightseeing 去观光; sightseeing tour 观光旅游; sightseeing bus 观光巴士",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz589",
    "word": "influence",
    "phonetic": "美 [ˈɪnfluəns]",
    "pos": "n.",
    "meaning": "影响；控制力 v.影响；对…起作用",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "= affect/impact; influential (adj.) 有影响力的"
    ],
    "usage": {
      "collocations": "have an influence on 对...有影响; under the influence of 在...影响下; influence sb to do 影响某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz590",
    "word": "land",
    "phonetic": "美 [lænd]",
    "pos": "n.",
    "meaning": "陆地；国家 v.降落",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "land → landing (n.着陆); landlord (n.地主/房东)"
    ],
    "usage": {
      "collocations": "land on 着陆; farming land 农田; by land 走陆路; foreign land 异国",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz591",
    "word": "climate",
    "phonetic": "美 [ˈklaɪmət]",
    "pos": "n.",
    "meaning": "气候",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "climate → climatic (adj.气候的)"
    ],
    "usage": {
      "collocations": "climate change 气候变化; warm climate 温暖气候; political climate 政治气候",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz592",
    "word": "succeed",
    "phonetic": "美 [səkˈsiːd]",
    "pos": "v.",
    "meaning": "成功；继承",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "success (n.); successful (adj.); successfully (adv.)"
    ],
    "usage": {
      "collocations": "succeed in doing 成功做某事; succeed to 继承",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz593",
    "word": "position",
    "phonetic": "美 [pəˈzɪʃən]",
    "pos": "n.",
    "meaning": "位置；地位 v.放置",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "position (n.位置/职位/姿势); position 比 job 更正式"
    ],
    "usage": {
      "collocations": "in a position to do 有能力做; apply for a position 申请职位; starting position 起始位置",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz594",
    "word": "treat",
    "phonetic": "美 [triːt]",
    "pos": "v.",
    "meaning": "对待；处理；治疗；款待",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "treat → treatment (n.); treaty (n.条约)"
    ],
    "usage": {
      "collocations": "treat sb to sth 请某人吃/做某事; treat…as… 把…当作…; medical treatment 医疗",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz595",
    "word": "traditional",
    "phonetic": "美 [trəˈdɪʃənl]",
    "pos": "adj.",
    "meaning": "传统的,习俗的",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "tradition (n.) → traditional (adj.); traditionally (adv.)"
    ],
    "usage": {
      "collocations": "traditional festival 传统节日; traditional culture 传统文化; traditional way 传统方式",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz596",
    "word": "knife",
    "phonetic": "美 [naɪf]",
    "pos": "n.",
    "meaning": "刀",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "knife → knives (复数)"
    ],
    "usage": {
      "collocations": "knife and fork 刀叉; sharpen a knife 磨刀; knife attack 持刀袭击",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz597",
    "word": "affect",
    "phonetic": "美 [əˈfekt]",
    "pos": "v.",
    "meaning": "影响；（感情上）深深打动",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "affect (v.影响/感动) vs. effect (n.影响); affection (n.喜爱)"
    ],
    "usage": {
      "collocations": "affect one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz598",
    "word": "excite",
    "phonetic": "美 [ɪkˈsaɪt]",
    "pos": "v.",
    "meaning": "使兴奋；使激动",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "excite → excited (adj.兴奋的-人); exciting (adj.令人兴奋的-物)"
    ],
    "usage": {
      "collocations": "excite sb 使某人兴奋; be excited about/at 对…感到兴奋",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz599",
    "word": "battery",
    "phonetic": "美 [ˈbætəri]",
    "pos": "n.",
    "meaning": "电池；一群；殴打",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "battery → batteries (复数)"
    ],
    "usage": {
      "collocations": "phone battery 手机电池; battery life 电池寿命; recharge the battery 充电; flat battery 没电的电池",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz600",
    "word": "colour",
    "phonetic": "美 [ˈkʌlər]",
    "pos": "n.",
    "meaning": "颜色；颜料 v.染色",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "colour (英) = color (美) → colourful (adj.)"
    ],
    "usage": {
      "collocations": "favourite colour 最喜欢的颜色; change colour 变色; colour TV 彩色电视",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz601",
    "word": "ski",
    "phonetic": "美 [skiː]",
    "pos": "n.",
    "meaning": "滑雪板 v.滑雪",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "ski → skier (n.滑雪者); skiing (n.滑雪运动)"
    ],
    "usage": {
      "collocations": "go skiing 去滑雪; ski resort 滑雪度假村; water skiing 滑水; ski jump 跳台滑雪",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz602",
    "word": "borrow",
    "phonetic": "美 [ˈbɑːroʊ]",
    "pos": "v.",
    "meaning": "借；引用",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "辨析: borrow(借入) vs lend(借出); keep(借多久)"
    ],
    "usage": {
      "collocations": "borrow...from... 从...借...; borrow money 借钱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz603",
    "word": "provide",
    "phonetic": "美 [prəˈvaɪd]",
    "pos": "v.",
    "meaning": "提供,给予",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "provision (n.); provider (n.); 注意介词搭配!"
    ],
    "usage": {
      "collocations": "provide sb with sth = provide sth for sb 提供某人某物; provide for 供养",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz604",
    "word": "across",
    "phonetic": "美 [əˈkrɑːs]",
    "pos": "adv.",
    "meaning": "横过；在对面 prep.从…一边到另一边",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz605",
    "word": "audience",
    "phonetic": "美 [ˈɔːdiəns]",
    "pos": "n.",
    "meaning": "观众；听众；读者",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "audience (n.观众/听众) 集合名词; 谓语可单可复"
    ],
    "usage": {
      "collocations": "target audience 目标观众; large audience 大量观众; in the audience 在观众中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz606",
    "word": "visit",
    "phonetic": "美 [ˈvɪzɪt]",
    "pos": "n.",
    "meaning": "/v.访问,拜访,参观",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "visitor (n.); visit 及物,直接加宾语"
    ],
    "usage": {
      "collocations": "pay a visit to 拜访; visit a place 参观某地; on a visit to 在访问...中; visitor 游客",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz607",
    "word": "while",
    "phonetic": "美 [waɪl]",
    "pos": "conj.",
    "meaning": "当…的时候；然而 n.一段时间；一会儿",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "while (conj.当…时/然而; n.一段时间)"
    ],
    "usage": {
      "collocations": "for a while 一会儿; after a while 过了一会儿; once in a while 偶尔",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz608",
    "word": "climb",
    "phonetic": "美 [klaɪm]",
    "pos": "v.",
    "meaning": "攀登；上升 n.攀登",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz609",
    "word": "busy",
    "phonetic": "美 [ˈbɪzi]",
    "pos": "adj.",
    "meaning": "忙碌的；v.忙着做某事占线的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "busy → busily (adv.); business (n.生意)"
    ],
    "usage": {
      "collocations": "be busy with sth 忙于某事; be busy (in) doing 忙于做; busy signal 占线信号",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz610",
    "word": "leader",
    "phonetic": "美 [ˈliːdər]",
    "pos": "n.",
    "meaning": "领导者；指挥者",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "lead (v.) → leader (n.); leadership (n.)"
    ],
    "usage": {
      "collocations": "team leader 队长; born leader 天生的领导者; leadership skills 领导力",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz611",
    "word": "practice",
    "phonetic": "美 [ˈpræktɪs]",
    "pos": "v.",
    "meaning": "/n. 实践；练习",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "后接 doing! practice (美) = practise (英; v.)"
    ],
    "usage": {
      "collocations": "practice doing sth 练习做某事; put...into practice 付诸实践; in practice 在实践中; common practice 惯例",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz612",
    "word": "build",
    "phonetic": "美 [bɪld]",
    "pos": "v.",
    "meaning": "建造；逐渐增强 n.体形, 身材",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "build -> built -> built; building (n.); builder (n.)"
    ],
    "usage": {
      "collocations": "build up 建立/增强; build a bridge 建桥; build confidence 建立信心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz613",
    "word": "thought",
    "phonetic": "美 [θɔːt]",
    "pos": "n.",
    "meaning": "看法；思想",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "thought → thoughtful (adj.深思的); thoughtless (adj.欠考虑的)"
    ],
    "usage": {
      "collocations": "deep thought 深思; on second thought 再一想; food for thought 引人深思的事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz614",
    "word": "command",
    "phonetic": "美 [kəˈmɑːnd]",
    "pos": "v.",
    "meaning": "命令；指挥 n.命令",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "command → commander (n.指挥官)"
    ],
    "usage": {
      "collocations": "take command of 指挥; under one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz615",
    "word": "natural",
    "phonetic": "美 [ˈnætʃərəl]",
    "pos": "adj.",
    "meaning": "自然地；合理的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "nature (n.) 自然; naturally (adv.)"
    ],
    "usage": {
      "collocations": "natural resources 自然资源; natural disaster 自然灾害; it is natural to do 做...是自然的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz616",
    "word": "program",
    "phonetic": "美 [ˈproʊgræm]",
    "pos": "n.",
    "meaning": "计划；节目；程序 v.计划",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "program (美) = programme (英) → programmer (n.程序员)"
    ],
    "usage": {
      "collocations": "TV program 电视节目; computer program 计算机程序; training program 培训项目",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz617",
    "word": "praise",
    "phonetic": "美 [preɪz]",
    "pos": "v.",
    "meaning": "赞扬,称赞 n.赞美",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "praise 不可数; 辨析: praise(赞扬) vs prize(奖品)"
    ],
    "usage": {
      "collocations": "praise sb for (doing) sth 因...表扬某人; in praise of 赞美; sing high praise for 高度赞扬",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz618",
    "word": "state",
    "phonetic": "美 [steɪt]",
    "pos": "n.",
    "meaning": "状态；国家；州 v.陈述；公布",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "state → statement (n.陈述); statesman (n.政治家)"
    ],
    "usage": {
      "collocations": "in a good/bad state 处于好/坏状态; state of mind 心态; the United States 美国",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz619",
    "word": "prevent",
    "phonetic": "美 [prɪˈvent]",
    "pos": "v.",
    "meaning": "阻止；阻碍",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "= stop/keep sb from doing; prevention (n.)"
    ],
    "usage": {
      "collocations": "prevent sb (from) doing sth 阻止某人做某事",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz620",
    "word": "set",
    "phonetic": "美 [set]",
    "pos": "v.",
    "meaning": "放置，安置 n.一套；一副",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "set -> set -> set; setting (n.) 环境/设置"
    ],
    "usage": {
      "collocations": "set up 建立; set off 出发/引爆; set out 出发/开始做; set aside 留出; a set of 一套",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz621",
    "word": "goal",
    "phonetic": "美 [goʊl]",
    "pos": "n.",
    "meaning": "目标；进球得分",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "goal → goalkeeper (n.守门员); goalless (adj.)"
    ],
    "usage": {
      "collocations": "achieve/reach a goal 实现目标; set a goal 设定目标; score a goal 进球; life goal 人生目标",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz622",
    "word": "score",
    "phonetic": "美 [skɔːr]",
    "pos": "n.",
    "meaning": "分数,得分 v.得分",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "score (n./v.)"
    ],
    "usage": {
      "collocations": "high/low score 高/低分; keep score 记分; score a goal 进球得分; final score 最终比分",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz623",
    "word": "seed",
    "phonetic": "美 [siːd]",
    "pos": "n.",
    "meaning": "种子；种子选手 v.结籽",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "seed → seedling (n.幼苗); seedy (adj.破旧的)"
    ],
    "usage": {
      "collocations": "plant a seed 播种; seed of doubt 怀疑的种子; go to seed 结籽/退化",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz624",
    "word": "either",
    "phonetic": "美 [ˈaɪðə]",
    "pos": "pron.",
    "meaning": "任何一个 adv.也（否定句中）",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz625",
    "word": "band",
    "phonetic": "美 [bænd]",
    "pos": "n.",
    "meaning": "乐队；带子",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "band (n.乐队/带子/波段)"
    ],
    "usage": {
      "collocations": "music band 乐队; rubber band 橡皮筋; a band of 一帮/一群; broad band 宽带",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz626",
    "word": "butterfly",
    "phonetic": "美 [ˈbʌtəflaɪ]",
    "pos": "n.",
    "meaning": "蝴蝶；蝶泳",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "butterfly → butterflies (复数); butter + fly"
    ],
    "usage": {
      "collocations": "butterfly effect 蝴蝶效应; have butterflies in one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz627",
    "word": "population",
    "phonetic": "美 [ˌpɑːpjəˈleɪʃən]",
    "pos": "n.",
    "meaning": "人口；居民",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "population 作主语,谓语用单数; \"What is the population of...?\""
    ],
    "usage": {
      "collocations": "the population of ...的人口; have a population of 有...人口; population growth 人口增长",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz628",
    "word": "digest",
    "phonetic": "美 [daɪˈdʒest]",
    "pos": "v.",
    "meaning": "消化,吸收",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "digest → digestion (n.); digestive (adj.)"
    ],
    "usage": {
      "collocations": "digest food 消化食物; digest information 理解信息; be hard to digest 难消化/难理解",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz629",
    "word": "detail",
    "phonetic": "美 [ˈdiːteɪl]",
    "pos": "n.",
    "meaning": "细节；琐事；详情",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "detail → detailed (adj.详细的)"
    ],
    "usage": {
      "collocations": "in detail 详细地; minor detail 小细节; detail-oriented 注重细节的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz630",
    "word": "government",
    "phonetic": "美 [ˈɡʌvənmənt]",
    "pos": "n.",
    "meaning": "政府；政体",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "govern (v.) → government (n.); governor (n.州长)"
    ],
    "usage": {
      "collocations": "local government 地方政府; government official 政府官员; run the government 管理政府",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz631",
    "word": "painful",
    "phonetic": "美 [ˈpeɪnfl]",
    "pos": "adj.",
    "meaning": "令人疼痛的；令人痛苦的",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "pain (n.) → painful (adj.); painless (adj.无痛的)"
    ],
    "usage": {
      "collocations": "painful experience 痛苦的经历; painful memory 痛苦的回忆; It is painful to do 做…很痛苦",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz632",
    "word": "able",
    "phonetic": "美 [ˈeɪbəl]",
    "pos": "adj.",
    "meaning": "能做到…的；可以…的",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz633",
    "word": "farm",
    "phonetic": "美 [fɑːrm]",
    "pos": "n.",
    "meaning": "农场；v.农田耕种",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "farm → farmer (n.农民); farming (n.农业)"
    ],
    "usage": {
      "collocations": "on the farm 在农场; farm animals 农场动物; work on a farm 在农场工作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz634",
    "word": "resource",
    "phonetic": "美 [rɪˈsɔːs]",
    "pos": "n.",
    "meaning": "资源,财力；资料",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "resource → resourceful (adj.足智多谋的)"
    ],
    "usage": {
      "collocations": "natural resources 自然资源; human resources 人力资源; educational resources 教育资源",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz635",
    "word": "divide",
    "phonetic": "美 [dɪˈvaɪd]",
    "pos": "v.",
    "meaning": "(使) 分开，分散，分割，分成…; 分配; 分享; 分担; 把(时间、精力等)分别用于;n. 不同; 差异; 分歧;",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "division (n.); 辨析: divide vs separate"
    ],
    "usage": {
      "collocations": "divide...into... 把...分成; divide...by... ...除以...; divide up 分配",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz636",
    "word": "grade",
    "phonetic": "美 [greɪd]",
    "pos": "n.",
    "meaning": "年级；级别",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "grade (n.等级/年级/分数 v.评分)"
    ],
    "usage": {
      "collocations": "get a good grade 取得好成绩; grade A A级; in the first grade 在一年级",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz637",
    "word": "idea",
    "phonetic": "美 [aɪˈdɪr]",
    "pos": "n.",
    "meaning": "主意；计划；意见",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "idea → ideal (adj.理想的 n.理想)"
    ],
    "usage": {
      "collocations": "have no idea 不知道; good idea 好主意; the main idea 主旨; bright idea 好点子",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz638",
    "word": "choose",
    "phonetic": "美 [tʃuːz]",
    "pos": "v.",
    "meaning": "选择, 挑选",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "choose -> chose -> chosen; choice (n.) 选择"
    ],
    "usage": {
      "collocations": "choose to do 选择做; choose...from... 从...中选择; choose between A and B 在A和B之间选择",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz639",
    "word": "dare",
    "phonetic": "美 [der]",
    "pos": "v.",
    "meaning": "挑战；不惧；胆敢",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "dare 可作情态动词(无to)或实义动词(有to)"
    ],
    "usage": {
      "collocations": "dare (to) do 敢做; How dare you! 你好大的胆子!; I dare say 我敢说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz640",
    "word": "century",
    "phonetic": "美 [ˈsentʃəri]",
    "pos": "n.",
    "meaning": "世纪；百年",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz641",
    "word": "regard",
    "phonetic": "美 [rɪˈɡɑːd]",
    "pos": "v.",
    "meaning": "考虑；看待；把…看作",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "regard → regardless (adv.不管怎样); regarding (prep.关于)"
    ],
    "usage": {
      "collocations": "regard…as… 把…视为…; with/in regard to 关于; give one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz642",
    "word": "confuse",
    "phonetic": "美 [kənˈfjuːz]",
    "pos": "v.",
    "meaning": "使混乱；使困惑",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "confuse → confusion (n.); confusing (adj.令人困惑的); confused (adj.感到困惑的)"
    ],
    "usage": {
      "collocations": "confuse A with B 把A与B混淆; get confused 搞糊涂",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz643",
    "word": "uniform",
    "phonetic": "美 [ˈjuːnɪfɔːm]",
    "pos": "n.",
    "meaning": "制服；校服",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "uniform → uniformity (n.统一性)"
    ],
    "usage": {
      "collocations": "school uniform 校服; wear a uniform 穿制服; in uniform 穿着制服",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz644",
    "word": "embarrass",
    "phonetic": "美 [ɪmˈbærəs]",
    "pos": "v.",
    "meaning": "使尴尬,使窘迫；使陷入困境",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "embarrass → embarrassment (n.); embarrassing (adj.)"
    ],
    "usage": {
      "collocations": "embarrass sb 使某人尴尬; be embarrassed about/at 对…感到尴尬",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz645",
    "word": "discourage",
    "phonetic": "美 [dɪsˈkʌrɪdʒ]",
    "pos": "v.",
    "meaning": "使气馁,使沮丧",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "discourage → discouragement (n.); 反义词 encourage"
    ],
    "usage": {
      "collocations": "discourage sb from doing 阻止某人做; don",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz646",
    "word": "grow",
    "phonetic": "美 [groʊ]",
    "pos": "v.",
    "meaning": "种植；增加；生长",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "grow -> grew -> grown; growth (n.); growing (adj.) 增长的"
    ],
    "usage": {
      "collocations": "grow up 长大; grow into 长成; grow old 变老; grow vegetables 种蔬菜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz647",
    "word": "introduce",
    "phonetic": "美 [ˌɪntrəˈdjuːs]",
    "pos": "v.",
    "meaning": "把…介绍（给）",
    "unit": "m2",
    "difficulty": 3,
    "examPoints": [
      "introduction (n.); 注意拼写: intro + duce"
    ],
    "usage": {
      "collocations": "introduce sb to sb 介绍某人给某人; introduce oneself 自我介绍; introduce...into... 把...引入...",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz648",
    "word": "spring",
    "phonetic": "美 [sprɪŋ]",
    "pos": "n.",
    "meaning": "春天；弹簧；泉水",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "spring (n.春天/泉/弹簧 v.跳)"
    ],
    "usage": {
      "collocations": "Spring Festival 春节; hot spring 温泉; spring up 涌现; spring into action 迅速行动",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz649",
    "word": "step",
    "phonetic": "美 [step]",
    "pos": "n.",
    "meaning": "步骤；台阶 v.踩,走",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "step → stepladder (n.活梯)"
    ],
    "usage": {
      "collocations": "step by step 一步一步地; take steps to do 采取措施做; watch one",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz650",
    "word": "field",
    "phonetic": "美 [fiːld]",
    "pos": "n.",
    "meaning": "田地；领域",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "field (n.领域/田野/场地)"
    ],
    "usage": {
      "collocations": "in the field of 在…领域; football field 足球场; field trip 实地考察; field work 田野调查",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz651",
    "word": "survive",
    "phonetic": "美 [səˈvaɪv]",
    "pos": "v.",
    "meaning": "幸存；存活",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "survive → survival (n.); survivor (n.幸存者)"
    ],
    "usage": {
      "collocations": "survive on 靠…生存; survive an accident 在事故中幸存; survival skills 生存技能",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz652",
    "word": "record",
    "phonetic": "美 [ˈrekɔːd/ /riˈkɔːd]",
    "pos": "n.",
    "meaning": "记录；唱片 v.记录；录制",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "recorder (n.) 录音机; recording (n.) 录音"
    ],
    "usage": {
      "collocations": "keep a record 保持记录; break a record 打破纪录; set a record 创纪录; record...on... 把...记录在...上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz653",
    "word": "bury",
    "phonetic": "美 [ˈberi]",
    "pos": "v.",
    "meaning": "埋葬",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "bury → burial (n.埋葬)"
    ],
    "usage": {
      "collocations": "bury oneself in 埋头于; be buried in 专注于; bury the hatchet 言归于好(习语)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz654",
    "word": "neighbourhood",
    "phonetic": "美 [ˈneɪbəhʊd]",
    "pos": "n.",
    "meaning": "居民区；街区",
    "unit": "m2",
    "difficulty": 4,
    "examPoints": [
      "neighbour (英) = neighbor (美) → neighbourhood (n.)"
    ],
    "usage": {
      "collocations": "in the neighbourhood 在附近; neighbourhood watch 邻里守望",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz655",
    "word": "person",
    "phonetic": "美 [ˈpɜːrsən]",
    "pos": "n.",
    "meaning": "个人；人员",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "person → personal (adj.); personality (n.个性)"
    ],
    "usage": {
      "collocations": "in person 亲自; a kind person 善良的人; first person 第一人称",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz656",
    "word": "aloud",
    "phonetic": "美 [əˈlaʊd]",
    "pos": "adv.",
    "meaning": "出声地；大声",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "aloud = out loud; 辨析 aloud vs. loud vs. loudly"
    ],
    "usage": {
      "collocations": "read aloud 朗读; think aloud 自言自语; cry aloud 大声哭喊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz657",
    "word": "list",
    "phonetic": "美 [lɪst]",
    "pos": "n.",
    "meaning": "清单；目录 v.列…清单",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "list → listing (n.列表)"
    ],
    "usage": {
      "collocations": "make a list 列清单; shopping list 购物清单; on the list 在名单上; waiting list 等候名单",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz658",
    "word": "decide",
    "phonetic": "美 [dɪˈsaɪd]",
    "pos": "v.",
    "meaning": "决定；判决；断定",
    "unit": "m2",
    "difficulty": 2,
    "examPoints": [
      "decision (n.) 决定; decisive (adj.) 果断的"
    ],
    "usage": {
      "collocations": "decide to do 决定做; decide on 就...做决定; make a decision 做决定",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mz660",
    "word": "care",
    "phonetic": "美 [ker]",
    "pos": "v.",
    "meaning": "关心；照顾；担心 n.照顾；小心",
    "unit": "m2",
    "difficulty": 1,
    "examPoints": [
      "careful (adj.); careless (adj.); carefully (adv.)"
    ],
    "usage": {
      "collocations": "care about 关心/在乎; care for 照顾/喜欢; take care of 照顾; take care! 保重!",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh1",
    "word": "a bit (of)",
    "phonetic": "",
    "pos": "",
    "meaning": "有一点，一会儿",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "辨析：a bit修饰形容词/副词（a bit tired）；a bit of + 不可数名词（a bit of water）；not a bit = 一点也不"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh2",
    "word": "a few",
    "phonetic": "",
    "pos": "",
    "meaning": "一些，少量",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "辨析：a few + 可数名词复数（肯定）；few + 可数名词（否定，几乎没有）。quite a few = 相当多"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh3",
    "word": "a great deal",
    "phonetic": "",
    "pos": "",
    "meaning": "大量，许多",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= a great deal of + 不可数名词 = a lot of。也可作副词用：thanks a great deal"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh4",
    "word": "a good/great many",
    "phonetic": "",
    "pos": "",
    "meaning": "大量，许多",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= a great many + 可数名词复数 = very many。a good many books"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh5",
    "word": "a kind of",
    "phonetic": "",
    "pos": "",
    "meaning": "一种，一类",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= a sort/type of 一种。区别：kind of = 有点（副词）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh6",
    "word": "a little",
    "phonetic": "",
    "pos": "",
    "meaning": "一点，少许",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "辨析：a little + 不可数名词（肯定）；little + 不可数名词（否定）。a little = a bit（副词）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh7",
    "word": "a lot of",
    "phonetic": "",
    "pos": "",
    "meaning": "许多，大量",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= lots of + 可数/不可数名词。同义替换：many/much, a great number of, plenty of"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh8",
    "word": "a number of",
    "phonetic": "",
    "pos": "",
    "meaning": "一些，许多",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "+ 可数名词复数（谓语用复数）= many。对比：the number of（谓语用单数）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh9",
    "word": "a pair of",
    "phonetic": "",
    "pos": "",
    "meaning": "一双，一副",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "+ 复数名词（shoes/glasses/trousers），谓语用单数：A pair of shoes is..."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh10",
    "word": "a piece of",
    "phonetic": "",
    "pos": "",
    "meaning": "一块，一张，一根，一片",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "+ 不可数名词（advice/news/paper/bread）。two pieces of..."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh11",
    "word": "above all",
    "phonetic": "",
    "pos": "",
    "meaning": "首先，首要",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= most importantly。写作常用：Above all, we should protect the environment."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh12",
    "word": "according to",
    "phonetic": "",
    "pos": "",
    "meaning": "根据，按照",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= as stated by。后接名词/代词，不能接从句（用as代替）：according to the report"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh13",
    "word": "add up to",
    "phonetic": "",
    "pos": "",
    "meaning": "合计达……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= amount to = total。add up = 加起来（代词放中间：add them up）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh14",
    "word": "after all",
    "phonetic": "",
    "pos": "",
    "meaning": "毕竟，终究",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= in spite of everything。位于句首或句末：After all, he is still a child."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh15",
    "word": "after class",
    "phonetic": "",
    "pos": "",
    "meaning": "课后",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh16",
    "word": "again and again",
    "phonetic": "",
    "pos": "",
    "meaning": "反复地，再三地",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= repeatedly = over and over。= time and again"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh17",
    "word": "agree to do sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "同意做某事",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh18",
    "word": "agree with sb.",
    "phonetic": "",
    "pos": "",
    "meaning": "同意某人的看法",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh19",
    "word": "ahead of",
    "phonetic": "",
    "pos": "",
    "meaning": "在……之前",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh20",
    "word": "all in all",
    "phonetic": "",
    "pos": "",
    "meaning": "总的来说，总计",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= in general = on the whole。总而言之，写作总结用"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh21",
    "word": "all kinds of",
    "phonetic": "",
    "pos": "",
    "meaning": "各种各样的",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= various kinds of = a variety of。后接可数复数或不可数名词"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh22",
    "word": "all over",
    "phonetic": "",
    "pos": "",
    "meaning": "到处，遍及，结束",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= everywhere。遍及：all over the world/country"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh23",
    "word": "all right",
    "phonetic": "",
    "pos": "",
    "meaning": "行了，好吧，（病）好了",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= OK/fine。That's all right = 没关系（回应感谢或道歉）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh24",
    "word": "all the best",
    "phonetic": "",
    "pos": "",
    "meaning": "一切顺利，万事如意",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= best wishes。祝你一切顺利（信末祝福语）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh25",
    "word": "answer for",
    "phonetic": "",
    "pos": "",
    "meaning": "对……负责",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= be responsible for = take responsibility for。对…负责"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh26",
    "word": "apart from",
    "phonetic": "",
    "pos": "",
    "meaning": "除去，除了",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= besides/except for。= aside from。Apart from English, he speaks French.（除…外还）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh27",
    "word": "arrive at (in) a place",
    "phonetic": "",
    "pos": "",
    "meaning": "到达某地",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh28",
    "word": "as a matter of fact",
    "phonetic": "",
    "pos": "",
    "meaning": "事实上，其实",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= in fact = actually。用于引出与上文相反或补充的信息"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh29",
    "word": "as a result",
    "phonetic": "",
    "pos": "",
    "meaning": "（作为）结果",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= therefore = consequently。用于结果；as a result of = because of（后接原因）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh30",
    "word": "as...as",
    "phonetic": "",
    "pos": "",
    "meaning": "像，如同",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh31",
    "word": "as soon as",
    "phonetic": "",
    "pos": "",
    "meaning": "一……就……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= the moment = immediately。一…就…。主将从现"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh32",
    "word": "as far as",
    "phonetic": "",
    "pos": "",
    "meaning": "（表示程度，范围）就……；尽……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "as far as I know 据我所知；as far as I'm concerned 就我而言。as far as + 距离"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh33",
    "word": "as if",
    "phonetic": "",
    "pos": "",
    "meaning": "好像，仿佛",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh34",
    "word": "as long as",
    "phonetic": "",
    "pos": "",
    "meaning": "只要",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= so long as = on condition that 只要。= provided that"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh35",
    "word": "as though",
    "phonetic": "",
    "pos": "",
    "meaning": "好像，仿佛",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh36",
    "word": "as usual",
    "phonetic": "",
    "pos": "",
    "meaning": "通常，平常地",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= as always。照常：He came late as usual."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh37",
    "word": "as well",
    "phonetic": "",
    "pos": "",
    "meaning": "也，还有",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= too = also。句末用。as well as = not only...but also"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh38",
    "word": "as well as",
    "phonetic": "",
    "pos": "",
    "meaning": "除……之外（也）",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= in addition to。除了…也。A as well as B（强调A，谓语与A一致）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh39",
    "word": "belong to",
    "phonetic": "",
    "pos": "",
    "meaning": "属于",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "属于，无被动语态和进行时：This book belongs to me. ✓ This book is belonged to me. ✗"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh40",
    "word": "be proud of",
    "phonetic": "",
    "pos": "",
    "meaning": "骄傲，自豪",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= take pride in。辨析：be proud of = 以…为骄傲；be proud about = 傲慢的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh41",
    "word": "be strict with",
    "phonetic": "",
    "pos": "",
    "meaning": "对……严格要求",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "对某人严格：be strict with sb。be strict in/about sth = 对某事严格"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh42",
    "word": "both...and",
    "phonetic": "",
    "pos": "",
    "meaning": "两个都，既……又……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "…和…都。连接并列主语时谓语用复数：Both Tom and Jerry are..."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh43",
    "word": "break away from",
    "phonetic": "",
    "pos": "",
    "meaning": "脱离……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh44",
    "word": "break down",
    "phonetic": "",
    "pos": "",
    "meaning": "损坏；（把化合物等）分解，（汽车）抛锚",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "(机器)出故障；(谈判)破裂；(身体)垮掉。break down the door 把门砸开"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh45",
    "word": "break in",
    "phonetic": "",
    "pos": "",
    "meaning": "闯入，强行进入，插嘴，打断",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "闯入；打断；插话。break into + 宾语 = break in（不及物）。break in on sb"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh46",
    "word": "break off",
    "phonetic": "",
    "pos": "",
    "meaning": "打断；折断",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "中断；折断；突然停止。break off the relationship 断绝关系"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh47",
    "word": "break out",
    "phonetic": "",
    "pos": "",
    "meaning": "（战争、火灾等）突然发生，爆发",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "(战争/火灾)爆发。无被动：A fire broke out. ✓ A fire was broken out. ✗"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh48",
    "word": "break up",
    "phonetic": "",
    "pos": "",
    "meaning": "分解；分裂",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "分解；分手；散开；（学校）放假。break up with sb 与某人分手"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh49",
    "word": "bring in",
    "phonetic": "",
    "pos": "",
    "meaning": "引来，引进，吸收",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= introduce。引进；带来收入（bring in money）。引入（新规定）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh50",
    "word": "bring on",
    "phonetic": "",
    "pos": "",
    "meaning": "引起，导致，使前进",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh51",
    "word": "bring up",
    "phonetic": "",
    "pos": "",
    "meaning": "教育，培养",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "抚养；提出（话题）；呕吐。bring up children = raise children"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh52",
    "word": "build up",
    "phonetic": "",
    "pos": "",
    "meaning": "逐步建立",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh53",
    "word": "by accident",
    "phonetic": "",
    "pos": "",
    "meaning": "偶然",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= by chance = accidentally。反义词：on purpose = deliberately"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh54",
    "word": "by air (bus, train, ship)",
    "phonetic": "",
    "pos": "",
    "meaning": "乘飞机（公共汽车，火车，轮船）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh55",
    "word": "by and by",
    "phonetic": "",
    "pos": "",
    "meaning": "不久以后，逐渐地",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= before long = soon。不久以后"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh56",
    "word": "by day",
    "phonetic": "",
    "pos": "",
    "meaning": "日间，在白天",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= during the day。在白天。对比：by the day 按日计算"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh57",
    "word": "by the way",
    "phonetic": "",
    "pos": "",
    "meaning": "顺便说",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= incidentally。顺便说一下（口语转换话题用）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh58",
    "word": "call for",
    "phonetic": "",
    "pos": "",
    "meaning": "提倡，号召，需要",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= need/require。需要：The situation calls for immediate action.；接某人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh59",
    "word": "call in",
    "phonetic": "",
    "pos": "",
    "meaning": "召来，召集",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= summon。叫来；请来。call in a doctor"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh60",
    "word": "call on",
    "phonetic": "",
    "pos": "",
    "meaning": "拜访，访问",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "拜访某人；号召（call on sb to do sth）。call at + 地点"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh61",
    "word": "call up",
    "phonetic": "",
    "pos": "",
    "meaning": "号召，打电话",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= ring up。打电话；使回忆起。call up memories"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh62",
    "word": "care for",
    "phonetic": "",
    "pos": "",
    "meaning": "喜欢；照顾（病人）",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "照顾（= look after / take care of）；喜欢（= like, 用于疑问/否定）：Would you care for tea?"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh63",
    "word": "carry off",
    "phonetic": "",
    "pos": "",
    "meaning": "携走，夺走",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "带走；夺走；赢得（奖项）。carry off the first prize"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh64",
    "word": "carry on",
    "phonetic": "",
    "pos": "",
    "meaning": "继续下去；继续开展",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= continue = go on。继续进行。carry on with sth"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh65",
    "word": "carry out",
    "phonetic": "",
    "pos": "",
    "meaning": "开展，执行",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= perform = execute。执行（计划/任务）。carry out an experiment"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh66",
    "word": "catch up with",
    "phonetic": "",
    "pos": "",
    "meaning": "赶上（或超过）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= keep up with。追上，赶上。catch up with sb"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh67",
    "word": "change into",
    "phonetic": "",
    "pos": "",
    "meaning": "转换成，把……变成",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "变成；换成（衣服）。change A into B 把A变成B"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh68",
    "word": "check in",
    "phonetic": "",
    "pos": "",
    "meaning": "报到，登记",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "办理入住/登机手续。check-in counter 登机柜台"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh69",
    "word": "check out",
    "phonetic": "",
    "pos": "",
    "meaning": "查明；结账",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "结账退房；检查。checkout time 退房时间"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh70",
    "word": "clear up",
    "phonetic": "",
    "pos": "",
    "meaning": "整理，收拾，（天气）放晴",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "整理；放晴；解决。clear up the misunderstanding"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh71",
    "word": "come about",
    "phonetic": "",
    "pos": "",
    "meaning": "发生，产生",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh72",
    "word": "come across",
    "phonetic": "",
    "pos": "",
    "meaning": "（偶然）遇见（或发现）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= run across = encounter。偶然遇见/发现"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh73",
    "word": "come back",
    "phonetic": "",
    "pos": "",
    "meaning": "回来，想起来",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "回来（= return）；再度流行（= come back into fashion）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh74",
    "word": "come down",
    "phonetic": "",
    "pos": "",
    "meaning": "落，下来",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "下来；（价格等）下降。come down with flu 患上流感"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh75",
    "word": "come from",
    "phonetic": "",
    "pos": "",
    "meaning": "出生（于），来自",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= be from。来自。Where do you come from?"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh76",
    "word": "come in",
    "phonetic": "",
    "pos": "",
    "meaning": "进入，进来",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "进来。come in handy 派上用场"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh77",
    "word": "come off",
    "phonetic": "",
    "pos": "",
    "meaning": "从……离开，脱落",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh78",
    "word": "come on",
    "phonetic": "",
    "pos": "",
    "meaning": "来吧，赶快",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "加油；快点；来吧（鼓励）。Come on!"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh79",
    "word": "come out",
    "phonetic": "",
    "pos": "",
    "meaning": "出来，（书等）出版，发行",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "出版；出来；（花）开放；（真相）大白。come out first 获第一名"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh80",
    "word": "come to",
    "phonetic": "",
    "pos": "",
    "meaning": "共计，达到",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "总计（= amount to）；苏醒（= come to oneself）。come to a decision 做出决定"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh81",
    "word": "come true",
    "phonetic": "",
    "pos": "",
    "meaning": "变为现实，成为事实",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "实现（梦想等）。无被动：My dream came true. ✓ My dream was come true. ✗"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh82",
    "word": "come up",
    "phonetic": "",
    "pos": "",
    "meaning": "上来，上升，抬头",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "上来；被提出；发生。come up with = think of 想出"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh83",
    "word": "come up with",
    "phonetic": "",
    "pos": "",
    "meaning": "追上，赶上；想出（主意）；找出（答案）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= think of = put forward。想出/提出（办法、主意）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh84",
    "word": "compare to",
    "phonetic": "",
    "pos": "",
    "meaning": "与……相比",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= liken to 把…比作。compare A to B (比喻)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh85",
    "word": "compare with",
    "phonetic": "",
    "pos": "",
    "meaning": "与……相比",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= contrast with 与…比较。compare A with B (比较异同)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh86",
    "word": "congratulate...on",
    "phonetic": "",
    "pos": "",
    "meaning": "祝贺……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh87",
    "word": "connect to",
    "phonetic": "",
    "pos": "",
    "meaning": "连接，相连",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh88",
    "word": "connect with",
    "phonetic": "",
    "pos": "",
    "meaning": "与……相连",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "与…连接/联系。connect A with/to B。be connected with 与…有关"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh89",
    "word": "cut down",
    "phonetic": "",
    "pos": "",
    "meaning": "砍倒",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "砍倒；削减（cut down on expenses 削减开支）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh90",
    "word": "cut off",
    "phonetic": "",
    "pos": "",
    "meaning": "切断",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "切断（电源/供水）；中断。cut off the electricity"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh91",
    "word": "cut up",
    "phonetic": "",
    "pos": "",
    "meaning": "齐根割掉，切碎",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "切碎；使伤心。cut up vegetables"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh92",
    "word": "day and night",
    "phonetic": "",
    "pos": "",
    "meaning": "日日夜夜",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= all the time。日日夜夜，夜以继日"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh93",
    "word": "do one's best",
    "phonetic": "",
    "pos": "",
    "meaning": "尽最大的努力",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh94",
    "word": "deal with",
    "phonetic": "",
    "pos": "",
    "meaning": "处理，对付",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= handle = cope with。处理/应对。比较：do with 与…有关"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh95",
    "word": "depend on (upon)",
    "phonetic": "",
    "pos": "",
    "meaning": "依靠，相信，信赖",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh96",
    "word": "die out",
    "phonetic": "",
    "pos": "",
    "meaning": "消失，灭亡",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "灭绝；消失。die out = become extinct"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh97",
    "word": "different from",
    "phonetic": "",
    "pos": "",
    "meaning": "与……不同",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "与…不同 (= different to/than)。be different from ≈ differ from"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh98",
    "word": "divide up",
    "phonetic": "",
    "pos": "",
    "meaning": "分配",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh99",
    "word": "divide...into...",
    "phonetic": "",
    "pos": "",
    "meaning": "把…分成……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh100",
    "word": "do some cleaning (shopping)",
    "phonetic": "",
    "pos": "",
    "meaning": "做扫除（买东西）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh101",
    "word": "dozens of",
    "phonetic": "",
    "pos": "",
    "meaning": "几十",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= scores of = many。几十个。two dozen eggs ✓（确切数不加s和of）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh102",
    "word": "drop in",
    "phonetic": "",
    "pos": "",
    "meaning": "顺便走访（某人）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= call in。顺便拜访。drop in on sb / drop in at a place"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh103",
    "word": "due to",
    "phonetic": "",
    "pos": "",
    "meaning": "由于，因为",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh104",
    "word": "each other",
    "phonetic": "",
    "pos": "",
    "meaning": "相互",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= one another。互相。each other's 彼此的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh105",
    "word": "earn one's living",
    "phonetic": "",
    "pos": "",
    "meaning": "谋生",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh106",
    "word": "either...or",
    "phonetic": "",
    "pos": "",
    "meaning": "或者……或者……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "要么…要么…（就近原则）：Either you or he is wrong."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh107",
    "word": "enjoy oneself",
    "phonetic": "",
    "pos": "",
    "meaning": "过得愉快",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= have a good time = have fun。玩得开心"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh108",
    "word": "even if",
    "phonetic": "",
    "pos": "",
    "meaning": "即使，尽管",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= even though。即使，尽管。引导让步状语从句"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh109",
    "word": "even though",
    "phonetic": "",
    "pos": "",
    "meaning": "即使，尽管",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh110",
    "word": "ever since",
    "phonetic": "",
    "pos": "",
    "meaning": "自那时起直到现在",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= from then on。从那时起一直（用于完成时）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh111",
    "word": "face to face",
    "phonetic": "",
    "pos": "",
    "meaning": "面对面",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "面对面地。比较：face-to-face (形容词，加连字符)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh112",
    "word": "fall asleep",
    "phonetic": "",
    "pos": "",
    "meaning": "入睡",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= go to sleep。入睡。比较：sleepy 困的；asleep 睡着的"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh113",
    "word": "fall ill",
    "phonetic": "",
    "pos": "",
    "meaning": "患病，病倒",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh114",
    "word": "far away",
    "phonetic": "",
    "pos": "",
    "meaning": "遥远的",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= distant。遥远的。far away from = 离…很远"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh115",
    "word": "far from",
    "phonetic": "",
    "pos": "",
    "meaning": "远离",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= not at all。远远不。Far from it! 远非如此！"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh116",
    "word": "feel like doing",
    "phonetic": "",
    "pos": "",
    "meaning": "想要……，感觉要……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh117",
    "word": "figure out",
    "phonetic": "",
    "pos": "",
    "meaning": "理解，想明白",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= work out = understand。弄明白；计算出"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh118",
    "word": "fill ... with",
    "phonetic": "",
    "pos": "",
    "meaning": "用……填充",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh119",
    "word": "fill in",
    "phonetic": "",
    "pos": "",
    "meaning": "填充",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "填写（= fill out）。fill in the blanks 填空"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh120",
    "word": "find out",
    "phonetic": "",
    "pos": "",
    "meaning": "查明，发现，了解",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= discover。查明；发现（真相）。比较：find 找到（东西）；find out 查明（事实）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh121",
    "word": "first of all",
    "phonetic": "",
    "pos": "",
    "meaning": "首先",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= to begin with。首先。= at first = in the beginning"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh122",
    "word": "for ever",
    "phonetic": "",
    "pos": "",
    "meaning": "永远",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= forever = for good。永远"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh123",
    "word": "for example",
    "phonetic": "",
    "pos": "",
    "meaning": "例如",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= for instance = such as。例如。后加句子/例子"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh124",
    "word": "from now on",
    "phonetic": "",
    "pos": "",
    "meaning": "从今以后，今后",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= from this moment on。从现在起（将来时/祈使句）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh125",
    "word": "from then on",
    "phonetic": "",
    "pos": "",
    "meaning": "从那时起",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "从那时起（过去时）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh126",
    "word": "from... to",
    "phonetic": "",
    "pos": "",
    "meaning": "从……到……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh127",
    "word": "from time to time",
    "phonetic": "",
    "pos": "",
    "meaning": "不时，偶尔",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= sometimes = now and then = occasionally。不时，偶尔"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh128",
    "word": "get along with",
    "phonetic": "",
    "pos": "",
    "meaning": "与……相处",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= get on with。与…相处；进展。How are you getting along with...?"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh129",
    "word": "get away",
    "phonetic": "",
    "pos": "",
    "meaning": "逃；离",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= escape。逃脱；离开。get away from = 摆脱"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh130",
    "word": "get back",
    "phonetic": "",
    "pos": "",
    "meaning": "返回；回来；回家",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "回来；取回。get back to sb 再联系某人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh131",
    "word": "get close (to)",
    "phonetic": "",
    "pos": "",
    "meaning": "接近",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh132",
    "word": "get down",
    "phonetic": "",
    "pos": "",
    "meaning": "降下",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "下来；写下（get down to doing 开始认真做）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh133",
    "word": "get down to",
    "phonetic": "",
    "pos": "",
    "meaning": "开始认真（做某事）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh134",
    "word": "get in",
    "phonetic": "",
    "pos": "",
    "meaning": "进入，收获，达到",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "进入；到达；收获。get in the way 挡路"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh135",
    "word": "get off",
    "phonetic": "",
    "pos": "",
    "meaning": "脱下（衣服等）；下车",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "下车（bus/train/plane）；脱下。反义词：get on"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh136",
    "word": "get on",
    "phonetic": "",
    "pos": "",
    "meaning": "上车；过活",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "上车（bus/train/plane）；穿上；进展。get on well with = get along with"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh137",
    "word": "get on with sb.",
    "phonetic": "",
    "pos": "",
    "meaning": "与……相处",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh138",
    "word": "get through",
    "phonetic": "",
    "pos": "",
    "meaning": "通过，拨通（电话）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "通过（考试）；接通电话；完成。get through the exam"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh139",
    "word": "get together",
    "phonetic": "",
    "pos": "",
    "meaning": "聚会，联欢",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= gather。聚会；收集。get-together (n.) 聚会"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh140",
    "word": "get up",
    "phonetic": "",
    "pos": "",
    "meaning": "起床",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "起床（= rise）；站起来。get up early"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh141",
    "word": "give away",
    "phonetic": "",
    "pos": "",
    "meaning": "分发",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "赠送；泄露（秘密）；give oneself away 暴露身份"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh142",
    "word": "give back",
    "phonetic": "",
    "pos": "",
    "meaning": "归还；送回",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= return。归还。give back to sb = return to sb"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh143",
    "word": "give in",
    "phonetic": "",
    "pos": "",
    "meaning": "屈服，让步",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= yield = surrender。屈服/让步。give in to sb/sth"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh144",
    "word": "give out",
    "phonetic": "",
    "pos": "",
    "meaning": "分发",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "分发（= hand out）；用尽（= run out）；发出"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh145",
    "word": "give up",
    "phonetic": "",
    "pos": "",
    "meaning": "放弃",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= quit。放弃。give up doing sth（放弃做某事）= stop doing"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh146",
    "word": "go ahead",
    "phonetic": "",
    "pos": "",
    "meaning": "走在前面，领先；干吧，干下去",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "开始；继续；请吧（口语）。Go ahead!"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh147",
    "word": "go away",
    "phonetic": "",
    "pos": "",
    "meaning": "走开，离去",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "走开；离开。= leave。Go away! 走开！"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh148",
    "word": "go by",
    "phonetic": "",
    "pos": "",
    "meaning": "走过；经过；过去",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "(时间)流逝；经过。as time goes by 随着时间的推移"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh149",
    "word": "go fishing (shopping, skating)",
    "phonetic": "",
    "pos": "",
    "meaning": "（去）钓鱼（买东西，滑冰）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh150",
    "word": "go for",
    "phonetic": "",
    "pos": "",
    "meaning": "主张",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= choose。选择；适用于（= apply to）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh151",
    "word": "go for a walk",
    "phonetic": "",
    "pos": "",
    "meaning": "散步",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh152",
    "word": "go in for",
    "phonetic": "",
    "pos": "",
    "meaning": "参加，喜欢",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= take part in。参加；喜欢。go in for sports"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh153",
    "word": "go off",
    "phonetic": "",
    "pos": "",
    "meaning": "走开",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "(闹钟)响起；离开；爆炸（= explode）；变质（食物）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh154",
    "word": "go on",
    "phonetic": "",
    "pos": "",
    "meaning": "继续",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "继续。go on doing 继续做；go on to do 接着做另一件事；go on with"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh155",
    "word": "go on doing...",
    "phonetic": "",
    "pos": "",
    "meaning": "继续干某事，不停地干某事",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh156",
    "word": "go on with",
    "phonetic": "",
    "pos": "",
    "meaning": "继续",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh157",
    "word": "go out",
    "phonetic": "",
    "pos": "",
    "meaning": "出去，熄灭",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "外出；熄火；(灯)熄灭。go out for a walk"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh158",
    "word": "go over",
    "phonetic": "",
    "pos": "",
    "meaning": "仔细检查，复习",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= review/repeat。复习；仔细检查。go over the lesson"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh159",
    "word": "go through",
    "phonetic": "",
    "pos": "",
    "meaning": "浏览；翻阅，通过",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "经历（困难）；仔细检查；通过。go through the papers"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh160",
    "word": "grow up",
    "phonetic": "",
    "pos": "",
    "meaning": "长大成人，成长",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= become an adult。成长，长大。grown-up (n./adj.) 成人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh161",
    "word": "had better (do)",
    "phonetic": "",
    "pos": "",
    "meaning": "最好（做）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh162",
    "word": "hand in",
    "phonetic": "",
    "pos": "",
    "meaning": "上交；交纳",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= submit = turn in。上交。hand in homework"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh163",
    "word": "hand out",
    "phonetic": "",
    "pos": "",
    "meaning": "分发",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= distribute = give out。分发。handout (n.) 讲义"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh164",
    "word": "have a cold",
    "phonetic": "",
    "pos": "",
    "meaning": "患感冒",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= catch a cold。患感冒。have a bad cold 重感冒"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh165",
    "word": "hang on",
    "phonetic": "",
    "pos": "",
    "meaning": "（打电话时）不挂断，等待片刻",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh166",
    "word": "hang up",
    "phonetic": "",
    "pos": "",
    "meaning": "挂断电话",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh167",
    "word": "have a gift for",
    "phonetic": "",
    "pos": "",
    "meaning": "对……有天赋",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh168",
    "word": "have a good time",
    "phonetic": "",
    "pos": "",
    "meaning": "玩得高兴，过得愉快",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= enjoy oneself = have fun。玩得开心"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh169",
    "word": "have classes",
    "phonetic": "",
    "pos": "",
    "meaning": "上课",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh170",
    "word": "have fun with",
    "phonetic": "",
    "pos": "",
    "meaning": "玩得高兴",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh171",
    "word": "have got to",
    "phonetic": "",
    "pos": "",
    "meaning": "不得不；必须",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= have to = must。不得不。haven't got to do = don't have to do"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh172",
    "word": "have to",
    "phonetic": "",
    "pos": "",
    "meaning": "不得不；必须",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= must。不得不（客观需要）。must 主观；have to 客观"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh173",
    "word": "hear of",
    "phonetic": "",
    "pos": "",
    "meaning": "听说，知道",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= know about。听说。常用于否定/疑问：I've never heard of him."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh174",
    "word": "hear from",
    "phonetic": "",
    "pos": "",
    "meaning": "收到……的来信",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= receive a letter from。收到…的来信。hear of/about = 听说"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh175",
    "word": "help oneself to",
    "phonetic": "",
    "pos": "",
    "meaning": "请随便吃点",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= take freely。自取/随便吃。Help yourself to some fish."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh176",
    "word": "help sb. with sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "帮助某人做某事",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh177",
    "word": "help...out",
    "phonetic": "",
    "pos": "",
    "meaning": "帮助某人解决困难",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh178",
    "word": "hold on",
    "phonetic": "",
    "pos": "",
    "meaning": "等一等（别挂电话）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= wait。等一下（电话用语）；坚持。hold on to = 抓住不放"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh179",
    "word": "hold one's breath",
    "phonetic": "",
    "pos": "",
    "meaning": "不出气，屏住呼吸",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh180",
    "word": "hold out",
    "phonetic": "",
    "pos": "",
    "meaning": "伸出；坚持，维持",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= last。坚持；伸出（手）；维持。hold out the hand"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh181",
    "word": "hold up",
    "phonetic": "",
    "pos": "",
    "meaning": "阻挡，使停顿",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= delay。阻挡；举起。hold up the traffic 阻碍交通"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh182",
    "word": "hundreds of",
    "phonetic": "",
    "pos": "",
    "meaning": "几百，成百上千",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= many。数以百计的。hundred of years ✓ / two hundred ✓ (不加s)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh183",
    "word": "hurry up",
    "phonetic": "",
    "pos": "",
    "meaning": "赶快，快点",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= be quick。快点。hurry sb up 催促某人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh184",
    "word": "in a hurry",
    "phonetic": "",
    "pos": "",
    "meaning": "匆忙，很快地",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= hurriedly。匆忙地。be in a hurry to do 急着做某事"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh185",
    "word": "in all",
    "phonetic": "",
    "pos": "",
    "meaning": "总之",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= altogether = in total。总共，合计"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh186",
    "word": "in a word",
    "phonetic": "",
    "pos": "",
    "meaning": "简言之，总之",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= in short = in brief。总之，一句话"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh187",
    "word": "in common",
    "phonetic": "",
    "pos": "",
    "meaning": "共同，共有",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh188",
    "word": "in debt",
    "phonetic": "",
    "pos": "",
    "meaning": "欠债",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh189",
    "word": "in danger",
    "phonetic": "",
    "pos": "",
    "meaning": "处在危险状态",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh190",
    "word": "in fact",
    "phonetic": "",
    "pos": "",
    "meaning": "事实上，实际上",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= actually = as a matter of fact。事实上"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh191",
    "word": "in front of",
    "phonetic": "",
    "pos": "",
    "meaning": "在……前面",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "在…前面（外部）。比较：in the front of 在…前部（内部）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh192",
    "word": "in need of",
    "phonetic": "",
    "pos": "",
    "meaning": "需要，缺少",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= needing。需要。A friend in need is a friend indeed. 患难见真情"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh193",
    "word": "in order",
    "phonetic": "",
    "pos": "",
    "meaning": "按顺序",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= in sequence。按顺序。out of order 出故障"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh194",
    "word": "in order that",
    "phonetic": "",
    "pos": "",
    "meaning": "为了",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh195",
    "word": "in order to",
    "phonetic": "",
    "pos": "",
    "meaning": "为了",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= so as to。为了。in order that + 从句（目的状语）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh196",
    "word": "in other words",
    "phonetic": "",
    "pos": "",
    "meaning": "换句话说",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= that is to say。换句话说"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh197",
    "word": "in peace",
    "phonetic": "",
    "pos": "",
    "meaning": "安静，宁静",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= peacefully。和平地，安静地。Rest in peace. 安息"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh198",
    "word": "in public",
    "phonetic": "",
    "pos": "",
    "meaning": "当众；公开",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= publicly。当众，公开地。反义词：in private"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh199",
    "word": "in surprise",
    "phonetic": "",
    "pos": "",
    "meaning": "吃惊，惊讶",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= surprisedly。吃惊地。to one's surprise 令某人惊讶的是"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh200",
    "word": "in the end",
    "phonetic": "",
    "pos": "",
    "meaning": "最后，终于",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= finally = at last。最后，终于。比较：at the end of 在…末尾"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh201",
    "word": "in time",
    "phonetic": "",
    "pos": "",
    "meaning": "及时，来得及",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= early enough。及时。比较：on time 准时"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh202",
    "word": "instead of",
    "phonetic": "",
    "pos": "",
    "meaning": "代替，而不是",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= rather than。代替；而不是。后接名词/代词/V-ing"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh203",
    "word": "join in",
    "phonetic": "",
    "pos": "",
    "meaning": "参加，加入",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= take part in = participate in。参加（活动）。join sb in doing"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh204",
    "word": "join up",
    "phonetic": "",
    "pos": "",
    "meaning": "联合起来，联结起来",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh205",
    "word": "just now",
    "phonetic": "",
    "pos": "",
    "meaning": "现在，刚才",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= a moment ago。刚才（用于过去时）。也 = right now（此刻）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh206",
    "word": "keep back",
    "phonetic": "",
    "pos": "",
    "meaning": "留下",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh207",
    "word": "keep doing sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "继续做某事",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh208",
    "word": "keep off",
    "phonetic": "",
    "pos": "",
    "meaning": "勿踏；勿踩",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= stay away from。不接近；避开。Keep off the grass!"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh209",
    "word": "keep on",
    "phonetic": "",
    "pos": "",
    "meaning": "继续（进行）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= continue。继续。keep on doing 反复做某事"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh210",
    "word": "keep one's word",
    "phonetic": "",
    "pos": "",
    "meaning": "守信",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh211",
    "word": "keep up",
    "phonetic": "",
    "pos": "",
    "meaning": "保持；维持；继续",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= maintain。保持；继续。keep up with sb = catch up with"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh212",
    "word": "knock at",
    "phonetic": "",
    "pos": "",
    "meaning": "敲",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh213",
    "word": "knock into sb.",
    "phonetic": "",
    "pos": "",
    "meaning": "撞上",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh214",
    "word": "laugh at",
    "phonetic": "",
    "pos": "",
    "meaning": "嘲笑",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= make fun of。嘲笑。Don't laugh at others."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh215",
    "word": "lead to",
    "phonetic": "",
    "pos": "",
    "meaning": "导致，导向",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= cause = result in = bring about。导致；通向。lead to + n./V-ing"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh216",
    "word": "let in",
    "phonetic": "",
    "pos": "",
    "meaning": "让……进来，放进",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "让…进来。let sb in。let out 放出；泄露"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh217",
    "word": "let out",
    "phonetic": "",
    "pos": "",
    "meaning": "放掉，泄露",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "放出；发出（声音）；泄露。let out a cry 发出一声叫喊"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh218",
    "word": "live on",
    "phonetic": "",
    "pos": "",
    "meaning": "以……为主食，靠……为生",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= feed on。以…为主食；靠…生活。live on rice/wages"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh219",
    "word": "look after",
    "phonetic": "",
    "pos": "",
    "meaning": "照顾",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= take care of = care for。照顾。look after oneself 自理"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh220",
    "word": "look ahead",
    "phonetic": "",
    "pos": "",
    "meaning": "向前看，展望未来",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= plan ahead。向前看；展望未来"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh221",
    "word": "look down upon",
    "phonetic": "",
    "pos": "",
    "meaning": "看不起，轻视",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh222",
    "word": "look for",
    "phonetic": "",
    "pos": "",
    "meaning": "寻找",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= search for = seek。寻找。辨析：find 找到（结果）；look for 寻找（过程）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh223",
    "word": "look forward to",
    "phonetic": "",
    "pos": "",
    "meaning": "盼望",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= expect。期待（+ V-ing）：look forward to hearing from you"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh224",
    "word": "look into",
    "phonetic": "",
    "pos": "",
    "meaning": "向……里面看去；调查",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= investigate。调查；向里看。look into the matter"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh225",
    "word": "look out",
    "phonetic": "",
    "pos": "",
    "meaning": "留神，当心",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= watch out = be careful。当心。look out for = 留心寻找"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh226",
    "word": "look through",
    "phonetic": "",
    "pos": "",
    "meaning": "看穿，浏览",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "浏览；透过…看。look through the newspaper"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh227",
    "word": "look up",
    "phonetic": "",
    "pos": "",
    "meaning": "查找",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "查阅（字典）；向上看。look up to = respect"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh228",
    "word": "lots of",
    "phonetic": "",
    "pos": "",
    "meaning": "许多，大量",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= a lot of。许多（可数/不可数均可）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh229",
    "word": "make a face",
    "phonetic": "",
    "pos": "",
    "meaning": "做鬼脸，做苦脸",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= make faces。做鬼脸。= pull a face"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh230",
    "word": "make friends with",
    "phonetic": "",
    "pos": "",
    "meaning": "与……交朋友",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= become friends with。与…交朋友。make friends (复数) ✓"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh231",
    "word": "make up",
    "phonetic": "",
    "pos": "",
    "meaning": "和解，化装",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "编造（故事）；化妆；弥补（make up for）；组成"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh232",
    "word": "make up of",
    "phonetic": "",
    "pos": "",
    "meaning": "由……组成，构成",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh233",
    "word": "make up one's mind",
    "phonetic": "",
    "pos": "",
    "meaning": "下决心",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh234",
    "word": "millions of",
    "phonetic": "",
    "pos": "",
    "meaning": "成百万上千万，数以百万计",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= countless = innumerable。数以百万计的。two million ✓（确切数不加s）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh235",
    "word": "more or less",
    "phonetic": "",
    "pos": "",
    "meaning": "或多或少",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= approximately = about。或多或少；大约"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh236",
    "word": "neither...nor",
    "phonetic": "",
    "pos": "",
    "meaning": "既不，也不……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "既不…也不…。就近原则：Neither he nor I am wrong."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh237",
    "word": "next to",
    "phonetic": "",
    "pos": "",
    "meaning": "紧接着，相邻，次于",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= beside = by。紧挨着。= almost：next to impossible 几乎不可能"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh238",
    "word": "no doubt",
    "phonetic": "",
    "pos": "",
    "meaning": "无疑地",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= undoubtedly。毫无疑问。There is no doubt that..."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh239",
    "word": "no longer",
    "phonetic": "",
    "pos": "",
    "meaning": "不再",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= not...any longer = not...any more。不再。no longer 用于句中"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh240",
    "word": "not any more",
    "phonetic": "",
    "pos": "",
    "meaning": "不再",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh241",
    "word": "not at all",
    "phonetic": "",
    "pos": "",
    "meaning": "一点也不，绝非",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= not in the least。一点也不；不用谢。= You're welcome."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh242",
    "word": "not only ... but also",
    "phonetic": "",
    "pos": "",
    "meaning": "不仅……而且……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh243",
    "word": "not so...as",
    "phonetic": "",
    "pos": "",
    "meaning": "不像，不如",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= not as...as。不如…。not so tall as = shorter than"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh244",
    "word": "not till/until",
    "phonetic": "",
    "pos": "",
    "meaning": "直到……才",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh245",
    "word": "now and then",
    "phonetic": "",
    "pos": "",
    "meaning": "不时，偶尔",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= from time to time = occasionally。不时，时而"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh246",
    "word": "now that",
    "phonetic": "",
    "pos": "",
    "meaning": "既然",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= since = because。既然。Now that you are here, let's start."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh247",
    "word": "of course",
    "phonetic": "",
    "pos": "",
    "meaning": "当然",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= certainly = surely。当然（= by all means）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh248",
    "word": "on (the, an) average",
    "phonetic": "",
    "pos": "",
    "meaning": "平均，按平均数计算",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh249",
    "word": "on duty",
    "phonetic": "",
    "pos": "",
    "meaning": "值日，值班",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= working。值班；值日。反义词：off duty 下班"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh250",
    "word": "on foot",
    "phonetic": "",
    "pos": "",
    "meaning": "走路，步行",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= walking。步行。go to school on foot"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh251",
    "word": "on show",
    "phonetic": "",
    "pos": "",
    "meaning": "展出，在上演（放映）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= on display = on exhibition。展览；展出"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh252",
    "word": "on time",
    "phonetic": "",
    "pos": "",
    "meaning": "准时",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh253",
    "word": "on/over the radio",
    "phonetic": "",
    "pos": "",
    "meaning": "通过收音机",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh254",
    "word": "once again",
    "phonetic": "",
    "pos": "",
    "meaning": "再一次",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= once more。再一次。= one more time"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh255",
    "word": "once more",
    "phonetic": "",
    "pos": "",
    "meaning": "再一次",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh256",
    "word": "once upon a time",
    "phonetic": "",
    "pos": "",
    "meaning": "从前，很久以前",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= long long ago。从前（故事开头）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh257",
    "word": "one after another",
    "phonetic": "",
    "pos": "",
    "meaning": "一个接一个",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= one by one = in turn。一个接一个地"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh258",
    "word": "open up",
    "phonetic": "",
    "pos": "",
    "meaning": "开启；开创；开辟",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= unfold。展开；打开；开拓。open up new markets"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh259",
    "word": "or else",
    "phonetic": "",
    "pos": "",
    "meaning": "否则，要不然",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= otherwise。否则。Hurry up, or else you'll be late."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh260",
    "word": "ought to",
    "phonetic": "",
    "pos": "",
    "meaning": "应该",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= should。应该。ought to do sth"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh261",
    "word": "out of breath",
    "phonetic": "",
    "pos": "",
    "meaning": "上气不接下气",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh262",
    "word": "out of order",
    "phonetic": "",
    "pos": "",
    "meaning": "运转不正常，出毛病",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= broken。出故障。The machine is out of order."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh263",
    "word": "out of work",
    "phonetic": "",
    "pos": "",
    "meaning": "失业",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= unemployed = jobless。失业。= out of a job"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh264",
    "word": "over and over again",
    "phonetic": "",
    "pos": "",
    "meaning": "反复，多次重复",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh265",
    "word": "pass by",
    "phonetic": "",
    "pos": "",
    "meaning": "经过",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= go by。经过；时间流逝。passer-by (n.) 过路人"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh266",
    "word": "pay attention to",
    "phonetic": "",
    "pos": "",
    "meaning": "注意",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= take notice of。注意（+ n./V-ing）：pay attention to listening"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh267",
    "word": "pay back",
    "phonetic": "",
    "pos": "",
    "meaning": "偿还（借款等）",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= repay。偿还；报复。pay sb back"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh268",
    "word": "pay for",
    "phonetic": "",
    "pos": "",
    "meaning": "付款",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= buy。付款；为…付出代价。pay for the meal"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh269",
    "word": "pay off",
    "phonetic": "",
    "pos": "",
    "meaning": "偿清（欠款等）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "还清（债务）；取得成功。pay off the debt"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh270",
    "word": "persuade sb. to do",
    "phonetic": "",
    "pos": "",
    "meaning": "说服",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh271",
    "word": "pick out",
    "phonetic": "",
    "pos": "",
    "meaning": "选出",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= select = choose。挑选；辨认出。pick out the best one"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh272",
    "word": "pick up",
    "phonetic": "",
    "pos": "",
    "meaning": "拾起，捡起，接收；开车去接……",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "捡起；接人；学会（语言）；接收（信号）；好转"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh273",
    "word": "point out",
    "phonetic": "",
    "pos": "",
    "meaning": "指出",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= indicate = show。指出。point out the mistake"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh274",
    "word": "point to",
    "phonetic": "",
    "pos": "",
    "meaning": "指向",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "指向（远距离）= point toward。point at = 指向（近距离/不礼貌）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh275",
    "word": "prevent ... from",
    "phonetic": "",
    "pos": "",
    "meaning": "妨碍，防止，预防",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh276",
    "word": "put away",
    "phonetic": "",
    "pos": "",
    "meaning": "储存",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= store。收拾起来；放好。put away the toys"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh277",
    "word": "put down",
    "phonetic": "",
    "pos": "",
    "meaning": "记下",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= set down。放下；写下（= write down）。镇压"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh278",
    "word": "put off",
    "phonetic": "",
    "pos": "",
    "meaning": "推迟",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= postpone = delay。推迟。put off doing sth"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh279",
    "word": "put on",
    "phonetic": "",
    "pos": "",
    "meaning": "穿，戴上，上演",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "穿上（衣服）；上演（表演）；增加（体重）。反义词：take off"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh280",
    "word": "put on a performance",
    "phonetic": "",
    "pos": "",
    "meaning": "演出",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh281",
    "word": "put on weight",
    "phonetic": "",
    "pos": "",
    "meaning": "发福，增加体重",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh282",
    "word": "put out",
    "phonetic": "",
    "pos": "",
    "meaning": "扑灭，关熄",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= extinguish。熄灭（火）；出版；伸出。put out the fire"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh283",
    "word": "put up",
    "phonetic": "",
    "pos": "",
    "meaning": "挂起，举起，贴（广告等）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "举起；张贴；搭建；住宿。put up with 容忍"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh284",
    "word": "put up with",
    "phonetic": "",
    "pos": "",
    "meaning": "忍受",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= tolerate = bear = stand。容忍。can't put up with"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh285",
    "word": "rather than",
    "phonetic": "",
    "pos": "",
    "meaning": "而不，非",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh286",
    "word": "refer to",
    "phonetic": "",
    "pos": "",
    "meaning": "提到，涉及，有关",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh287",
    "word": "regard... as",
    "phonetic": "",
    "pos": "",
    "meaning": "把……看作",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh288",
    "word": "ring back",
    "phonetic": "",
    "pos": "",
    "meaning": "回电话",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= call back。回电话。= return sb's call"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh289",
    "word": "ring off",
    "phonetic": "",
    "pos": "",
    "meaning": "挂断电话，停止讲话",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= hang up。挂断电话。ring off the telephone"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh290",
    "word": "ring up",
    "phonetic": "",
    "pos": "",
    "meaning": "打电话给",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= call up = phone。打电话给。ring sb up"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh291",
    "word": "right away",
    "phonetic": "",
    "pos": "",
    "meaning": "立即，马上",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh292",
    "word": "right now",
    "phonetic": "",
    "pos": "",
    "meaning": "立即，马上",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= at this moment。立刻；此刻。= immediately"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh293",
    "word": "run away",
    "phonetic": "",
    "pos": "",
    "meaning": "逃跑，失控",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= escape = flee。逃跑。run away from home 离家出走"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh294",
    "word": "run out of",
    "phonetic": "",
    "pos": "",
    "meaning": "用完",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= use up。用完（以人作主语）：I ran out of money."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh295",
    "word": "save one's life",
    "phonetic": "",
    "pos": "",
    "meaning": "挽救某人生命",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh296",
    "word": "scores of",
    "phonetic": "",
    "pos": "",
    "meaning": "许多，大量",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh297",
    "word": "see...off",
    "phonetic": "",
    "pos": "",
    "meaning": "为某人送行",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= say goodbye to。为…送行。see sb off at the airport"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh298",
    "word": "sell out",
    "phonetic": "",
    "pos": "",
    "meaning": "卖完，出卖",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= be sold out。卖完/售罄。无被动：The tickets sold out quickly."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh299",
    "word": "send for",
    "phonetic": "",
    "pos": "",
    "meaning": "派人去叫（请）",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= call for。派人去请/叫。send for a doctor"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh300",
    "word": "send out",
    "phonetic": "",
    "pos": "",
    "meaning": "发出，派遣",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh301",
    "word": "send up",
    "phonetic": "",
    "pos": "",
    "meaning": "发出，射出",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= launch。发射。send up a rocket"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh302",
    "word": "sentence...to death",
    "phonetic": "",
    "pos": "",
    "meaning": "判处死刑",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh303",
    "word": "separate...from...",
    "phonetic": "",
    "pos": "",
    "meaning": "分开",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh304",
    "word": "set down",
    "phonetic": "",
    "pos": "",
    "meaning": "放下",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= put down = write down。记下，写下"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh305",
    "word": "set free",
    "phonetic": "",
    "pos": "",
    "meaning": "释放，解放",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= release = liberate。释放。set the bird free"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh306",
    "word": "set off",
    "phonetic": "",
    "pos": "",
    "meaning": "动身，起程；使爆发",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= start/begin。出发（= set out）；引爆。set off for = head for"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh307",
    "word": "set out",
    "phonetic": "",
    "pos": "",
    "meaning": "出发；开始",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= set off。出发；开始。set out to do = set about doing"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh308",
    "word": "set up",
    "phonetic": "",
    "pos": "",
    "meaning": "建立，创立",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= establish = found。建立；设立。set up a company"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh309",
    "word": "settle down",
    "phonetic": "",
    "pos": "",
    "meaning": "定居，平静下来",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= calm down。定居；平静下来。settle down to doing 开始专心做"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh310",
    "word": "show off",
    "phonetic": "",
    "pos": "",
    "meaning": "炫耀",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= display = exhibit。炫耀。show off one's talent"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh311",
    "word": "side by side",
    "phonetic": "",
    "pos": "",
    "meaning": "肩并肩，一起",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= shoulder to shoulder = together。并排；一起"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh312",
    "word": "so as to",
    "phonetic": "",
    "pos": "",
    "meaning": "以便，为的是",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= in order to。为了。= so that...can..."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh313",
    "word": "so far",
    "phonetic": "",
    "pos": "",
    "meaning": "到目前为止",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= up to now = until now。到目前为止（用于现在完成时）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh314",
    "word": "so far as",
    "phonetic": "",
    "pos": "",
    "meaning": "（表示程度，范围）就……，尽……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh315",
    "word": "so long as",
    "phonetic": "",
    "pos": "",
    "meaning": "只要",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= as long as。只要。= provided that"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh316",
    "word": "so...that",
    "phonetic": "",
    "pos": "",
    "meaning": "太……以至于……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "如此…以至于（结果状语从句）。so + adj/adv + that；such + n + that"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh317",
    "word": "sooner or later",
    "phonetic": "",
    "pos": "",
    "meaning": "迟早，早晚",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= eventually。迟早。Sooner or later you'll understand."
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh318",
    "word": "speed up",
    "phonetic": "",
    "pos": "",
    "meaning": "加快速度",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= accelerate。加速。反义词：slow down"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh319",
    "word": "spend...on",
    "phonetic": "",
    "pos": "",
    "meaning": "在……花钱",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh320",
    "word": "stand for",
    "phonetic": "",
    "pos": "",
    "meaning": "代表，象征",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= represent = mean。代表；支持。stand for justice"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh321",
    "word": "stick to",
    "phonetic": "",
    "pos": "",
    "meaning": "坚持",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= keep to = insist on。坚持（原则/计划）。stick to one's dream"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh322",
    "word": "stop doing sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "停止做某事",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh323",
    "word": "stop to do sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "停下来做某事",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh324",
    "word": "struggle against",
    "phonetic": "",
    "pos": "",
    "meaning": "同……作斗争",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh325",
    "word": "such as",
    "phonetic": "",
    "pos": "",
    "meaning": "例如",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= for example = including。例如（后接名词/V-ing）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh326",
    "word": "take away",
    "phonetic": "",
    "pos": "",
    "meaning": "拿走",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= remove。拿走；带走。takeaway (n.) 外卖"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh327",
    "word": "take it easy",
    "phonetic": "",
    "pos": "",
    "meaning": "别着急，别紧张",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= relax = calm down。别紧张；放轻松"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh328",
    "word": "take off",
    "phonetic": "",
    "pos": "",
    "meaning": "脱下，起飞",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "脱下；起飞；休假。反义词：put on（穿上）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh329",
    "word": "take one's time",
    "phonetic": "",
    "pos": "",
    "meaning": "从容，慢慢行动",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh330",
    "word": "take out",
    "phonetic": "",
    "pos": "",
    "meaning": "取出",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= remove。取出；带…出去。take out the rubbish 倒垃圾"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh331",
    "word": "take place",
    "phonetic": "",
    "pos": "",
    "meaning": "发生",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= happen = occur。发生（无被动）。take place of = replace 代替"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh332",
    "word": "take sb. in the arms",
    "phonetic": "",
    "pos": "",
    "meaning": "搂抱",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh333",
    "word": "take the place of",
    "phonetic": "",
    "pos": "",
    "meaning": "取代，代替",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= replace = substitute for。代替。take sb's place"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh334",
    "word": "take up",
    "phonetic": "",
    "pos": "",
    "meaning": "占去，占据（时间、地位等）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "开始从事（业余爱好）；占据（时间/空间）。take up too much room"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh335",
    "word": "talk about",
    "phonetic": "",
    "pos": "",
    "meaning": "谈论，议论",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= discuss = mention。谈论。talk of = speak of 谈到"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh336",
    "word": "talk of",
    "phonetic": "",
    "pos": "",
    "meaning": "谈论，议论",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= mention = speak of。谈到，说起"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh337",
    "word": "the day after tomorrow",
    "phonetic": "",
    "pos": "",
    "meaning": "后天",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= in two days。后天。比较：the day before yesterday 前天"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh338",
    "word": "the day before yesterday",
    "phonetic": "",
    "pos": "",
    "meaning": "前天",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh339",
    "word": "the more...the more...",
    "phonetic": "",
    "pos": "",
    "meaning": "越……就越……",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh340",
    "word": "the other day",
    "phonetic": "",
    "pos": "",
    "meaning": "前几天，某日",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh341",
    "word": "think about",
    "phonetic": "",
    "pos": "",
    "meaning": "考虑（是否去做）",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= consider。思考；考虑。think about the problem"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh342",
    "word": "think of",
    "phonetic": "",
    "pos": "",
    "meaning": "想起，考虑；认为，看法",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= consider = come up with。想到；认为。think highly of = 高度评价"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh343",
    "word": "thousands of",
    "phonetic": "",
    "pos": "",
    "meaning": "成千上万，几千",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= a great many。数以千计的。two thousand ✓"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh344",
    "word": "throw away",
    "phonetic": "",
    "pos": "",
    "meaning": "扔掉",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= discard。扔掉；浪费。throw away the chance"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh345",
    "word": "too...to",
    "phonetic": "",
    "pos": "",
    "meaning": "太……以至于不……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh346",
    "word": "try on",
    "phonetic": "",
    "pos": "",
    "meaning": "试穿，试试看",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "试穿；试试。try on the coat → try it on（代词放中间）"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh347",
    "word": "try out",
    "phonetic": "",
    "pos": "",
    "meaning": "试验",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= test = experiment。试用；试验。try out new ideas"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh348",
    "word": "turn down",
    "phonetic": "",
    "pos": "",
    "meaning": "关小，调低",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "关小（音量）；拒绝。反义词：turn up 开大"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh349",
    "word": "turn off",
    "phonetic": "",
    "pos": "",
    "meaning": "关掉（水、电、电视、收音机等）",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "关掉（电器/灯/水龙头）。反义词：turn on"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh350",
    "word": "turn on",
    "phonetic": "",
    "pos": "",
    "meaning": "打开（水、电视、收音机、灯、煤气等）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "打开（电器/灯）。反义词：turn off"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh351",
    "word": "turn over",
    "phonetic": "",
    "pos": "",
    "meaning": "翻动，犁翻（土地）",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "翻过来；翻身。turn over a new leaf 改过自新"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh352",
    "word": "turn up",
    "phonetic": "",
    "pos": "",
    "meaning": "到达，来到；开大（声音）",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "开大（音量）；出现（= show up）。反义词：turn down"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh353",
    "word": "up and down",
    "phonetic": "",
    "pos": "",
    "meaning": "上下，来回",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= back and forth。上上下下；来来回回"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh354",
    "word": "used to sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "习惯于",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh355",
    "word": "used to do sth.",
    "phonetic": "",
    "pos": "",
    "meaning": "过去常常",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "固定搭配，需整体记忆。常见于阅读理解和完形填空。"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh356",
    "word": "wait for",
    "phonetic": "",
    "pos": "",
    "meaning": "等候，等待",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= await。等待。can't wait to do 迫不及待"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh357",
    "word": "wake up",
    "phonetic": "",
    "pos": "",
    "meaning": "醒来",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "醒来；叫醒。wake sb up = wake up sb"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh358",
    "word": "work out",
    "phonetic": "",
    "pos": "",
    "meaning": "算出，解决",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= figure out = solve。算出；制定；锻炼。work out the problem"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh359",
    "word": "worry about",
    "phonetic": "",
    "pos": "",
    "meaning": "担心，烦恼",
    "unit": "m3",
    "difficulty": 4,
    "examPoints": [
      "= be anxious about = be concerned about。担心。= be worried about"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh360",
    "word": "wrap up",
    "phonetic": "",
    "pos": "",
    "meaning": "包好，伪装",
    "unit": "m3",
    "difficulty": 2,
    "examPoints": [
      "= cover。包好；穿暖和。wrap up the gift"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh361",
    "word": "write down",
    "phonetic": "",
    "pos": "",
    "meaning": "写下，记下",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= put down = take down = note down。写下，记下"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mh362",
    "word": "write to",
    "phonetic": "",
    "pos": "",
    "meaning": "写信给……",
    "unit": "m3",
    "difficulty": 3,
    "examPoints": [
      "= write a letter to。写信给。write to sb = write sb a letter"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc1",
    "word": "above",
    "phonetic": "美 [əˈbʌv]",
    "pos": "prep./adv.",
    "meaning": "在…上方;以上",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "above (在上方不接触) vs. on (在上方接触) vs. over (正上方)"
    ],
    "usage": {
      "collocations": "above all 首先;最重要的是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc2",
    "word": "accept",
    "phonetic": "美 [əkˈsept]",
    "pos": "v.",
    "meaning": "接受;认可",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "accept (主观接受) vs. receive (客观收到)"
    ],
    "usage": {
      "collocations": "accept an invitation 接受邀请",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc3",
    "word": "achieve",
    "phonetic": "美 [əˈtʃiːv]",
    "pos": "v.",
    "meaning": "实现;达到",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "辨析 achieve vs. reach vs. accomplish; 名词 achievement"
    ],
    "usage": {
      "collocations": "achieve success 取得成功; achieve a goal 实现目标",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc4",
    "word": "across",
    "phonetic": "美 [əˈkrɔːs]",
    "pos": "prep./adv.",
    "meaning": "穿过;横过",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "across (表面穿过) vs. through (内部穿过)"
    ],
    "usage": {
      "collocations": "go across 穿过; across from 在…对面",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc5",
    "word": "advice",
    "phonetic": "美 [ədˈvaɪs]",
    "pos": "n.",
    "meaning": "建议(不可数)",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "advice (n.不可数) vs. advise (v.); 搭配: advice on/about"
    ],
    "usage": {
      "collocations": "give advice 给建议; a piece of advice 一条建议",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc6",
    "word": "allow",
    "phonetic": "美 [əˈlaʊ]",
    "pos": "v.",
    "meaning": "允许",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "allow doing vs. allow sb to do; 被动语态常考"
    ],
    "usage": {
      "collocations": "allow sb to do 允许某人做; be allowed to 被允许",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc7",
    "word": "alone",
    "phonetic": "美 [əˈloʊn]",
    "pos": "adj./adv.",
    "meaning": "独自的;单独的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "alone (客观独自) vs. lonely (主观孤独)"
    ],
    "usage": {
      "collocations": "leave sb alone 不打扰某人; live alone 独居",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc8",
    "word": "aloud",
    "phonetic": "美 [əˈlaʊd]",
    "pos": "adv.",
    "meaning": "大声地",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "aloud vs. loud vs. loudly 区别"
    ],
    "usage": {
      "collocations": "read aloud 大声朗读",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc9",
    "word": "also",
    "phonetic": "美 [ˈɔːlsoʊ]",
    "pos": "adv.",
    "meaning": "也",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "also (句中) vs. too (句末) vs. either (否定句末)"
    ],
    "usage": {
      "collocations": "not only…but also… 不但…而且…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc10",
    "word": "amazing",
    "phonetic": "美 [əˈmeɪzɪŋ]",
    "pos": "adj.",
    "meaning": "令人惊奇的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "amazing (令人惊奇的) vs. amazed (感到惊奇的)"
    ],
    "usage": {
      "collocations": "an amazing view 令人惊叹的景色",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc11",
    "word": "among",
    "phonetic": "美 [əˈmʌŋ]",
    "pos": "prep.",
    "meaning": "在…之中(三者+）",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "among (三者或以上) vs. between (两者之间)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc12",
    "word": "appear",
    "phonetic": "美 [əˈpɪr]",
    "pos": "v.",
    "meaning": "出现;显得",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "appear (出现) vs. disappear (消失); 名词 appearance"
    ],
    "usage": {
      "collocations": "appear to be 似乎是",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc13",
    "word": "at",
    "phonetic": "美 [æt; ət]",
    "pos": "prep.",
    "meaning": "在(时间/地点)",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "at (小地点/时间点) vs. in (大地点/时间段) vs. on (具体某天/表面)"
    ],
    "usage": {
      "collocations": "at first 起初; at once 立刻; at last 终于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc14",
    "word": "beat",
    "phonetic": "美 [biːt]",
    "pos": "v./n.",
    "meaning": "打败;敲打;跳动",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "beat → beat → beaten; beat (比赛打败) vs. win (赢得比赛/奖品)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc15",
    "word": "believe",
    "phonetic": "美 [bɪˈliːv]",
    "pos": "v.",
    "meaning": "相信;认为",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "believe vs. believe in; 名词 belief"
    ],
    "usage": {
      "collocations": "believe in 信任; It is believed that 人们认为",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc16",
    "word": "below",
    "phonetic": "美 [bɪˈloʊ]",
    "pos": "prep./adv.",
    "meaning": "在…下面",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "below (低于某水平) vs. under (正下方接触/不接触)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc17",
    "word": "beside",
    "phonetic": "美 [bɪˈsaɪd]",
    "pos": "prep.",
    "meaning": "在…旁边",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "beside (在旁边) vs. besides (除…之外还)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc18",
    "word": "between",
    "phonetic": "美 [bɪˈtwiːn]",
    "pos": "prep.",
    "meaning": "在…之间(两者)",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "between (两者) vs. among (三者+)"
    ],
    "usage": {
      "collocations": "between A and B 在A和B之间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc19",
    "word": "bored",
    "phonetic": "美 [bɔːrd]",
    "pos": "adj.",
    "meaning": "感到无聊的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "bored (人感到无聊) vs. boring (事物令人无聊)"
    ],
    "usage": {
      "collocations": "be bored with 对…感到无聊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc20",
    "word": "borrow",
    "phonetic": "美 [ˈbɑːroʊ]",
    "pos": "v.",
    "meaning": "借入",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "borrow (借入) vs. lend (借出); keep (借多久)"
    ],
    "usage": {
      "collocations": "borrow sth from sb 向某人借某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc21",
    "word": "bottom",
    "phonetic": "美 [ˈbɑːtəm]",
    "pos": "n.",
    "meaning": "底部",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "bottom (底部) vs. top (顶部)"
    ],
    "usage": {
      "collocations": "at the bottom of 在…底部",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc22",
    "word": "breath",
    "phonetic": "美 [breθ]",
    "pos": "n.",
    "meaning": "呼吸;气息",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "breath (n.) vs. breathe (v.)"
    ],
    "usage": {
      "collocations": "take a deep breath 深呼吸; out of breath 气喘吁吁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc23",
    "word": "bring",
    "phonetic": "美 [brɪŋ]",
    "pos": "v.",
    "meaning": "带来",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "bring → brought → brought; bring (带来) vs. take (带走)"
    ],
    "usage": {
      "collocations": "bring up 抚养; bring about 带来;引起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc24",
    "word": "can",
    "phonetic": "美 [kæn]",
    "pos": "modal./n.",
    "meaning": "能;可以;罐头",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "can → could; can't (不能) vs. mustn't (禁止)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc25",
    "word": "cause",
    "phonetic": "美 [kɔːz]",
    "pos": "n./v.",
    "meaning": "原因;导致",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "cause (导致) vs. reason (原因) vs. excuse (借口)"
    ],
    "usage": {
      "collocations": "cause sb to do 导致某人做; the cause of …的原因",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc26",
    "word": "celebrate",
    "phonetic": "美 [ˈselɪbreɪt]",
    "pos": "v.",
    "meaning": "庆祝",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "名词 celebration; congratulate (祝贺人) vs. celebrate (庆祝事)"
    ],
    "usage": {
      "collocations": "celebrate a festival 庆祝节日",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc27",
    "word": "close",
    "phonetic": "美 [kloʊz(关); kloʊs(近)]",
    "pos": "v./adj.",
    "meaning": "关闭;接近的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "close (关) vs. closed (adj. 关着的); 辨析 close vs. shut"
    ],
    "usage": {
      "collocations": "close down 关闭; be close to 靠近",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc28",
    "word": "clothes",
    "phonetic": "美 [kloʊðz]",
    "pos": "n.",
    "meaning": "衣服",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "clothes 复数，不能与数字连用; cloth (布) vs. clothing (总称)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc29",
    "word": "compare",
    "phonetic": "美 [kəmˈper]",
    "pos": "v.",
    "meaning": "比较",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "compare with (同类) vs. compare to (比喻)"
    ],
    "usage": {
      "collocations": "compare A with B 比较A和B; compared to/with 与…相比",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc30",
    "word": "cook",
    "phonetic": "美 [kʊk]",
    "pos": "v./n.",
    "meaning": "烹饪;厨师",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "cook (n.厨师) vs. cooker (n.炊具)"
    ],
    "usage": {
      "collocations": "do some cooking 做饭",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc31",
    "word": "cross",
    "phonetic": "美 [krɔːs]",
    "pos": "v./n.",
    "meaning": "穿过;十字架",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "across (prep.) 与 cross (v.) 的区别"
    ],
    "usage": {
      "collocations": "cross the road 过马路",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc32",
    "word": "dead",
    "phonetic": "美 [ded]",
    "pos": "adj.",
    "meaning": "死的",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "dead (adj.) vs. die (v.) vs. death (n.) vs. dying (adj.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc33",
    "word": "dear",
    "phonetic": "美 [dɪr]",
    "pos": "adj.",
    "meaning": "亲爱的;昂贵的",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "dear (亲爱的/昂贵) vs. deer (鹿)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc34",
    "word": "develop",
    "phonetic": "美 [dɪˈveləp]",
    "pos": "v.",
    "meaning": "发展;培养",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "developed (发达) vs. developing (发展中); development (n.)"
    ],
    "usage": {
      "collocations": "develop a habit 养成习惯; developing countries 发展中国家",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc35",
    "word": "discover",
    "phonetic": "美 [dɪˈskʌvər]",
    "pos": "v.",
    "meaning": "发现",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "discover (发现已有) vs. invent (发明新); discovery (n.)"
    ],
    "usage": {
      "collocations": "make a discovery 做出发现",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc36",
    "word": "divide",
    "phonetic": "美 [dɪˈvaɪd]",
    "pos": "v.",
    "meaning": "分开;除以",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "divide (分成若干份) vs. separate (分离)"
    ],
    "usage": {
      "collocations": "divide…into 把…分成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc37",
    "word": "each",
    "phonetic": "美 [iːtʃ]",
    "pos": "adj./pron.",
    "meaning": "每个;各自",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "each (强调个体) vs. every (强调整体)"
    ],
    "usage": {
      "collocations": "each other 互相",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc38",
    "word": "effect",
    "phonetic": "美 [ɪˈfekt]",
    "pos": "n.",
    "meaning": "影响;效果",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "effect (n.影响) vs. affect (v.影响) vs. effort (n.努力)"
    ],
    "usage": {
      "collocations": "have an effect on 对…有影响; side effect 副作用",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc39",
    "word": "elder",
    "phonetic": "美 [ˈeldər]",
    "pos": "adj.",
    "meaning": "年长的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "elder (仅用于家人长幼) vs. older (可用于比较级)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc40",
    "word": "electric",
    "phonetic": "美 [ɪˈlektrɪk]",
    "pos": "adj.",
    "meaning": "电的;电动的",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "electric (用电的) vs. electronic (电子的); electricity (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc41",
    "word": "end",
    "phonetic": "美 [end]",
    "pos": "n./v.",
    "meaning": "结束;末端",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "at the end of (时间/空间末端) vs. by the end of (到…末为止)"
    ],
    "usage": {
      "collocations": "in the end 最后; at the end of 在…末尾; come to an end 结束",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc42",
    "word": "especially",
    "phonetic": "美 [ɪˈspeʃəli]",
    "pos": "adv.",
    "meaning": "尤其;特别",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "especially (强调程度) vs. specially (强调目的)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc43",
    "word": "ever",
    "phonetic": "美 [ˈevər]",
    "pos": "adv.",
    "meaning": "曾经",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "ever (曾经) vs. never (从不); 用于疑问/否定/条件/比较句"
    ],
    "usage": {
      "collocations": "ever since 自从; for ever 永远",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc44",
    "word": "everyday",
    "phonetic": "美 [ˈevrideɪ]",
    "pos": "adj.",
    "meaning": "日常的(adj.)",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "everyday (adj.日常的) vs. every day (adv.每天)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc45",
    "word": "except",
    "phonetic": "美 [ɪkˈsept]",
    "pos": "prep.",
    "meaning": "除…之外",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "except (排除在外) vs. besides (包含在内)"
    ],
    "usage": {
      "collocations": "except for 除…之外(整体中细节除外)",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc46",
    "word": "excite",
    "phonetic": "美 [ɪkˈsaɪt]",
    "pos": "v.",
    "meaning": "使兴奋",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "excited (人感到兴奋) vs. exciting (事令人兴奋); excitement (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc47",
    "word": "fetch",
    "phonetic": "美 [fetʃ]",
    "pos": "v.",
    "meaning": "去拿来",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "fetch = go and bring back; 辨析 bring vs. take vs. fetch"
    ],
    "usage": {
      "collocations": "fetch sb sth 给某人拿来",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc48",
    "word": "few",
    "phonetic": "美 [fjuː]",
    "pos": "adj./pron.",
    "meaning": "很少的(可数)",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "few (几乎没有) vs. a few (有几个); 修饰可数名词复数"
    ],
    "usage": {
      "collocations": "a few 几个; quite a few 相当多",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc49",
    "word": "find",
    "phonetic": "美 [faɪnd]",
    "pos": "v.",
    "meaning": "找到;发现",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "find → found → found; find (找到) vs. look for (寻找)"
    ],
    "usage": {
      "collocations": "find out 查明;弄清楚",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc50",
    "word": "first",
    "phonetic": "美 [fɜːrst]",
    "pos": "num./adj./adv.",
    "meaning": "第一;首先",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "first → firstly (adv.); at first (起初) vs. first (首先)"
    ],
    "usage": {
      "collocations": "first of all 首先; at first 起初",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc51",
    "word": "flower",
    "phonetic": "美 [ˈflaʊər]",
    "pos": "n.",
    "meaning": "花",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "辨析 flour (面粉) 同音 /ˈflaʊər/"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc52",
    "word": "forget",
    "phonetic": "美 [fərˈɡet]",
    "pos": "v.",
    "meaning": "忘记",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "forget → forgot → forgotten; 中考必考辨析！"
    ],
    "usage": {
      "collocations": "forget to do 忘记去做; forget doing 忘记做过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc53",
    "word": "frighten",
    "phonetic": "美 [ˈfraɪtən]",
    "pos": "v.",
    "meaning": "使害怕",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "frightened (人害怕) vs. frightening (事物吓人)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc54",
    "word": "fun",
    "phonetic": "美 [fʌn]",
    "pos": "n./adj.",
    "meaning": "乐趣;有趣的",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "funny (adj.) 滑稽的; 辨析 fun vs. funny"
    ],
    "usage": {
      "collocations": "have fun 玩得开心; make fun of 取笑",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc55",
    "word": "future",
    "phonetic": "美 [ˈfjuːtʃər]",
    "pos": "n./adj.",
    "meaning": "将来;未来的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "in future (从今往后) vs. in the future (在未来某个时间)"
    ],
    "usage": {
      "collocations": "in the future 在未来; in future 今后",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc56",
    "word": "hat",
    "phonetic": "美 [hæt]",
    "pos": "n.",
    "meaning": "帽子(有边的)",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "hat (有边帽) vs. cap (有檐帽)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc57",
    "word": "hear",
    "phonetic": "美 [hɪr]",
    "pos": "v.",
    "meaning": "听见",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "hear → heard → heard; hear (听见结果) vs. listen (听动作)"
    ],
    "usage": {
      "collocations": "hear from 收到…来信; hear of/about 听说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc58",
    "word": "heart",
    "phonetic": "美 [hɑːrt]",
    "pos": "n.",
    "meaning": "心脏;内心",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "heart (n.心脏) vs. mind (n.头脑)"
    ],
    "usage": {
      "collocations": "learn by heart 记住; lose heart 失去信心",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc59",
    "word": "however",
    "phonetic": "美 [ˌhaʊˈevər]",
    "pos": "adv./conj.",
    "meaning": "然而;无论如何",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "however (然而) vs. but (但是)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc60",
    "word": "if",
    "phonetic": "美 [ɪf]",
    "pos": "conj.",
    "meaning": "如果;是否",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "if 引导条件状语从句用主将从现; if vs. whether (是否)"
    ],
    "usage": {
      "collocations": "if possible 如果可能; even if 即使",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc61",
    "word": "influence",
    "phonetic": "美 [ˈɪnfluəns]",
    "pos": "n./v.",
    "meaning": "影响",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "influence (n.) vs. affect (v.) vs. effect (n.)"
    ],
    "usage": {
      "collocations": "have an influence on 对…有影响",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc62",
    "word": "interest",
    "phonetic": "美 [ˈɪntrəst]",
    "pos": "n./v.",
    "meaning": "兴趣;利息",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "interested (人感兴趣) vs. interesting (事物有趣)"
    ],
    "usage": {
      "collocations": "take an interest in 对…感兴趣; a place of interest 名胜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc63",
    "word": "interview",
    "phonetic": "美 [ˈɪntərvjuː]",
    "pos": "n./v.",
    "meaning": "面试;采访",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "interviewer (面试官) vs. interviewee (被面试者)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc64",
    "word": "into",
    "phonetic": "美 [ˈɪntuː]",
    "pos": "prep.",
    "meaning": "进入;到…里面",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "into (动态进入) vs. in (静态在里面)"
    ],
    "usage": {
      "collocations": "translate into 翻译成; change into 变成",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc65",
    "word": "invent",
    "phonetic": "美 [ɪnˈvent]",
    "pos": "v.",
    "meaning": "发明",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "invent (发明新物) vs. discover (发现已有); invention (n.); inventor (n.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc66",
    "word": "job",
    "phonetic": "美 [dʒɑːb]",
    "pos": "n.",
    "meaning": "工作;职业",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "job (可数) vs. work (不可数)"
    ],
    "usage": {
      "collocations": "get a job 找工作; on the job 在职",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc67",
    "word": "join",
    "phonetic": "美 [dʒɔɪn]",
    "pos": "v.",
    "meaning": "参加;加入;连接",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "join (加入组织/人群) vs. take part in (参加活动)"
    ],
    "usage": {
      "collocations": "join in 参加(活动); join the army 参军",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc68",
    "word": "lay",
    "phonetic": "美 [leɪ]",
    "pos": "v.",
    "meaning": "放下;下蛋",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "lay → laid → laid; 辨析 lay (放) vs. lie (躺/说谎)"
    ],
    "usage": {
      "collocations": "lay out 布置;安排",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc69",
    "word": "lend",
    "phonetic": "美 [lend]",
    "pos": "v.",
    "meaning": "借出",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "lend → lent → lent; lend (借出) vs. borrow (借入)"
    ],
    "usage": {
      "collocations": "lend sb sth = lend sth to sb 借给某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc70",
    "word": "like",
    "phonetic": "美 [laɪk]",
    "pos": "v./prep.",
    "meaning": "喜欢;像",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "like doing (习惯) vs. like to do (具体); dislike (v.)"
    ],
    "usage": {
      "collocations": "look like 看起来像; feel like doing 想要做; would like to do 想要做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc71",
    "word": "little",
    "phonetic": "美 [ˈlɪtəl]",
    "pos": "adj./adv.",
    "meaning": "小的;少的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "little → less → least; little (几乎没有) vs. a little (有一点)"
    ],
    "usage": {
      "collocations": "a little 一点; a little bit 一点点",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc72",
    "word": "lonely",
    "phonetic": "美 [ˈloʊnli]",
    "pos": "adj.",
    "meaning": "孤独的;偏僻的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "lonely (主观孤独) vs. alone (客观独自)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc73",
    "word": "loud",
    "phonetic": "美 [laʊd]",
    "pos": "adj./adv.",
    "meaning": "大声的",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "loudly (adv.) vs. aloud (adv.)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc74",
    "word": "manage",
    "phonetic": "美 [ˈmænɪdʒ]",
    "pos": "v.",
    "meaning": "管理;设法做到",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "manage to do (成功了) vs. try to do (尝试); manager (n.)"
    ],
    "usage": {
      "collocations": "manage to do 设法做成; manage time 管理时间",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc75",
    "word": "maybe",
    "phonetic": "美 [ˈmeɪbi]",
    "pos": "adv.",
    "meaning": "也许;可能",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "maybe (adv.) vs. may be (情态动词+be)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc76",
    "word": "must",
    "phonetic": "美 [mʌst]",
    "pos": "modal.",
    "meaning": "必须;一定",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "must (主观必须) vs. have to (客观不得不); mustn't 禁止"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc77",
    "word": "noise",
    "phonetic": "美 [nɔɪz]",
    "pos": "n.",
    "meaning": "噪音",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "noisy (adj.) 吵闹的; sound (声音通称) vs. voice (嗓音) vs. noise (噪音)"
    ],
    "usage": {
      "collocations": "make noise 制造噪音",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc78",
    "word": "none",
    "phonetic": "美 [nʌn]",
    "pos": "pron.",
    "meaning": "一个也没有",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "none of + 复数名词 谓语可单可复; none (三者+) vs. neither (两者)"
    ],
    "usage": {
      "collocations": "none of 没有一个",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc79",
    "word": "notice",
    "phonetic": "美 [ˈnoʊtɪs]",
    "pos": "v./n.",
    "meaning": "注意到;通知",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "notice sb do (全过程) vs. notice sb doing (正在做)"
    ],
    "usage": {
      "collocations": "take notice of 注意到",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc80",
    "word": "off",
    "phonetic": "美 [ɔːf]",
    "pos": "prep./adv.",
    "meaning": "离开;关掉;从…落下",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "off (副词，表离开/断开); 辨析 off vs. of"
    ],
    "usage": {
      "collocations": "turn off 关掉; take off 脱下;起飞; get off 下车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc81",
    "word": "over",
    "phonetic": "美 [ˈoʊvər]",
    "pos": "prep./adv.",
    "meaning": "在…上方;超过;结束;遍及",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "over (正上方不接触) vs. above (上方不特定); 表\"超过\" = more than"
    ],
    "usage": {
      "collocations": "over and over again 一再地; all over the world 全世界; go over 复习",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc82",
    "word": "past",
    "phonetic": "美 [pæst]",
    "pos": "adj./prep./n.",
    "meaning": "过去的;经过",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "past (prep./adj./n.) vs. pass (v.)"
    ],
    "usage": {
      "collocations": "in the past 在过去; go past 走过; past tense 过去时",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc83",
    "word": "place",
    "phonetic": "美 [pleɪs]",
    "pos": "n./v.",
    "meaning": "地方;放置",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "take place (happen) vs. take the place of (replace)"
    ],
    "usage": {
      "collocations": "take place 发生(不及物); in place of 代替; take one's place 就座",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc84",
    "word": "pleasant",
    "phonetic": "美 [ˈplezənt]",
    "pos": "adj.",
    "meaning": "令人愉快的",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "pleasant (事物令人愉快) vs. pleased (人感到愉快)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc85",
    "word": "prevent",
    "phonetic": "美 [prɪˈvent]",
    "pos": "v.",
    "meaning": "阻止;预防",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "prevent/stop/keep sb from doing 辨析"
    ],
    "usage": {
      "collocations": "prevent sb from doing 阻止某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc86",
    "word": "problem",
    "phonetic": "美 [ˈprɑːbləm]",
    "pos": "n.",
    "meaning": "问题;难题",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "problem (待解决/客观) vs. question (待回答/主观)"
    ],
    "usage": {
      "collocations": "solve a problem 解决问题; no problem 没问题",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc87",
    "word": "provide",
    "phonetic": "美 [prəˈvaɪd]",
    "pos": "v.",
    "meaning": "提供",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "offer vs. provide vs. supply 辨析"
    ],
    "usage": {
      "collocations": "provide sb with sth = provide sth for sb 提供某人某物",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc88",
    "word": "pull",
    "phonetic": "美 [pʊl]",
    "pos": "v./n.",
    "meaning": "拉;拖",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "pull (向自己拉) vs. push (推)"
    ],
    "usage": {
      "collocations": "pull down 拆毁; pull out 拔出; pull over 靠边停车",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc89",
    "word": "pupil",
    "phonetic": "美 [ˈpjuːpəl]",
    "pos": "n.",
    "meaning": "小学生;学生",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "pupil (中小学生) vs. student (学生通称)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc90",
    "word": "question",
    "phonetic": "美 [ˈkwestʃən]",
    "pos": "n./v.",
    "meaning": "问题;疑问",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "question (待回答) vs. problem (待解决)"
    ],
    "usage": {
      "collocations": "ask a question 问问题; out of the question 不可能的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc91",
    "word": "quiet",
    "phonetic": "美 [ˈkwaɪət]",
    "pos": "adj.",
    "meaning": "安静的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "quietly (adv.); quite (adv.) 相当 — 拼写易混淆"
    ],
    "usage": {
      "collocations": "keep quiet 保持安静",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc92",
    "word": "quite",
    "phonetic": "美 [kwaɪt]",
    "pos": "adv.",
    "meaning": "相当;很;完全",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "quite vs. quiet 拼写辨析"
    ],
    "usage": {
      "collocations": "quite a lot 相当多; quite a few 相当多; not quite 不完全",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc93",
    "word": "raise",
    "phonetic": "美 [reɪz]",
    "pos": "v.",
    "meaning": "举起;提高;筹集",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "raise (vt.举起/养育) vs. rise (vi.上升)"
    ],
    "usage": {
      "collocations": "raise money 筹款; raise one's hand 举手",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc94",
    "word": "receive",
    "phonetic": "美 [rɪˈsiːv]",
    "pos": "v.",
    "meaning": "收到",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "receive (客观收到) vs. accept (主观接受)"
    ],
    "usage": {
      "collocations": "receive a letter 收到信",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc95",
    "word": "regret",
    "phonetic": "美 [rɪˈɡret]",
    "pos": "v./n.",
    "meaning": "后悔;遗憾",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "中考必考辨析！过去式 regretted"
    ],
    "usage": {
      "collocations": "regret to do 遗憾要做; regret doing 后悔做过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc96",
    "word": "relax",
    "phonetic": "美 [rɪˈlæks]",
    "pos": "v.",
    "meaning": "放松;休息",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "relaxed (人放松) vs. relaxing (事物令人放松)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc97",
    "word": "remember",
    "phonetic": "美 [rɪˈmembər]",
    "pos": "v.",
    "meaning": "记住;记得",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "remember to do vs. remember doing 中考必考！"
    ],
    "usage": {
      "collocations": "remember to do 记得去做; remember doing 记得做过",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc98",
    "word": "rest",
    "phonetic": "美 [rest]",
    "pos": "n./v.",
    "meaning": "休息;剩余部分",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "rest (休息) vs. the rest (其余)"
    ],
    "usage": {
      "collocations": "have a rest 休息一下; the rest of 其余的",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc99",
    "word": "result",
    "phonetic": "美 [rɪˈzʌlt]",
    "pos": "n.",
    "meaning": "结果;后果",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "result in (导致) vs. result from (由…引起)"
    ],
    "usage": {
      "collocations": "as a result 结果; as a result of 由于…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc100",
    "word": "rise",
    "phonetic": "美 [raɪz]",
    "pos": "v./n.",
    "meaning": "上升;升起;起床",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "rise → rose → risen; rise (vi.不及物) vs. raise (vt.及物)"
    ],
    "usage": {
      "collocations": "give rise to 引起;导致",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc101",
    "word": "say",
    "phonetic": "美 [seɪ]",
    "pos": "v.",
    "meaning": "说;讲",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "say → said /sed/ → said; say vs. tell vs. speak vs. talk"
    ],
    "usage": {
      "collocations": "say hello to 向…问好; that is to say 也就是说",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc102",
    "word": "scared",
    "phonetic": "美 [skerd]",
    "pos": "adj.",
    "meaning": "害怕的;恐惧的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "scared (人害怕) vs. scary (事物吓人)"
    ],
    "usage": {
      "collocations": "be scared of 害怕…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc103",
    "word": "seat",
    "phonetic": "美 [siːt]",
    "pos": "n.",
    "meaning": "座位",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "seat (n.座位) vs. sit (v.坐)"
    ],
    "usage": {
      "collocations": "take a seat 坐下; be seated 就座",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc104",
    "word": "see",
    "phonetic": "美 [siː]",
    "pos": "v.",
    "meaning": "看见;明白;会见",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "see → saw → seen; see sb do (全过程) vs. see sb doing (正在)"
    ],
    "usage": {
      "collocations": "see a doctor 看医生; see off 送行; see to 处理;负责",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc105",
    "word": "separate",
    "phonetic": "美 [ˈsepəreɪt(v.); ˈseprət(adj.)]",
    "pos": "v./adj.",
    "meaning": "分开;分离;单独的",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "separate (分开在一起的东西) vs. divide (分成份)"
    ],
    "usage": {
      "collocations": "separate A from B 把A和B分开",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc106",
    "word": "shock",
    "phonetic": "美 [ʃɑːk]",
    "pos": "n./v.",
    "meaning": "震惊;冲击",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "shocked (人震惊) vs. shocking (事令人震惊)"
    ],
    "usage": {
      "collocations": "be shocked at 对…感到震惊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc107",
    "word": "sit",
    "phonetic": "美 [sɪt]",
    "pos": "v.",
    "meaning": "坐",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "sit → sat → sat; seat (n.座位) vs. sit (v.坐)"
    ],
    "usage": {
      "collocations": "sit down 坐下; sit up 坐直;熬夜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc108",
    "word": "sometimes",
    "phonetic": "美 [ˈsʌmtaɪmz]",
    "pos": "adv.",
    "meaning": "有时",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "sometimes (有时) vs. sometime (某时) vs. some time (一段时间)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc109",
    "word": "sound",
    "phonetic": "美 [saʊnd]",
    "pos": "n./v.",
    "meaning": "声音;听起来",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "sound (声音通称) vs. voice (嗓音) vs. noise (噪音)"
    ],
    "usage": {
      "collocations": "sound like 听起来像; sound + adj. 听起来…",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc110",
    "word": "stop",
    "phonetic": "美 [stɑːp]",
    "pos": "v./n.",
    "meaning": "停止;阻止;车站",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "stop doing vs. stop to do 中考必考！过去式 stopped (双写p)"
    ],
    "usage": {
      "collocations": "stop doing 停止做(正在做的事); stop to do 停下来去做(另一件事); stop sb from doing 阻止某人做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc111",
    "word": "such",
    "phonetic": "美 [sʌtʃ]",
    "pos": "adj./pron.",
    "meaning": "这样的;如此的",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "such + (a/an) + n. + that vs. so + adj./adv. + that"
    ],
    "usage": {
      "collocations": "such as 例如; such…that 如此…以至于",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc112",
    "word": "surprise",
    "phonetic": "美 [sərˈpraɪz]",
    "pos": "n./v.",
    "meaning": "惊喜;惊奇",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "surprised (人惊讶) vs. surprising (事令人惊讶)"
    ],
    "usage": {
      "collocations": "to one's surprise 令某人惊奇的是; in surprise 吃惊地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc113",
    "word": "tall",
    "phonetic": "美 [tɔːl]",
    "pos": "adj.",
    "meaning": "高的",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "tall (细长高，如人/树) vs. high (宽泛的高，如山/温度)"
    ],
    "usage": {
      "collocations": "",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc114",
    "word": "through",
    "phonetic": "美 [θruː]",
    "pos": "prep./adv.",
    "meaning": "穿过;通过;经由",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "through (内部穿过) vs. across (表面穿过)"
    ],
    "usage": {
      "collocations": "look through 浏览; go through 经历; through and through 完全地",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc115",
    "word": "tired",
    "phonetic": "美 [taɪərd]",
    "pos": "adj.",
    "meaning": "疲劳的;累的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "tired (人累) vs. tiring (事令人累)"
    ],
    "usage": {
      "collocations": "be tired of 厌倦; be tired from 因…而疲劳",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc116",
    "word": "to",
    "phonetic": "美 [tuː; tə]",
    "pos": "prep./infinitive marker",
    "meaning": "到;向;为了(不定式)",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "to (介词 + doing) vs. to (不定式 + do)"
    ],
    "usage": {
      "collocations": "to be honest 说实话; to one's surprise 令人惊讶; look forward to 期待",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc117",
    "word": "trip",
    "phonetic": "美 [trɪp]",
    "pos": "n.",
    "meaning": "旅行;行程",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "trip (短途) vs. journey (长途) vs. travel (泛指)"
    ],
    "usage": {
      "collocations": "go on a trip 去旅行; school trip 学校旅行",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc118",
    "word": "try",
    "phonetic": "美 [traɪ]",
    "pos": "v./n.",
    "meaning": "尝试;努力;审判",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "try to do (努力做) vs. try doing (尝试做); try → tried → tried"
    ],
    "usage": {
      "collocations": "try on 试穿; try out 试验; try one's best 尽最大努力; try to do 努力做; try doing 尝试做",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc119",
    "word": "under",
    "phonetic": "美 [ˈʌndər]",
    "pos": "prep./adv.",
    "meaning": "在…下面;低于",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "under (正下方) vs. below (低于某一水平)"
    ],
    "usage": {
      "collocations": "under control 在控制中; under way 在进行中; under repair 在修理中",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc120",
    "word": "until",
    "phonetic": "美 [ənˈtɪl]",
    "pos": "prep./conj.",
    "meaning": "直到…为止",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "until 用于句首; till vs. until; 与延续性动词连用"
    ],
    "usage": {
      "collocations": "not…until 直到…才",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc121",
    "word": "value",
    "phonetic": "美 [ˈvæljuː]",
    "pos": "n./v.",
    "meaning": "价值;重视;价值观",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "valuable (有价值的) vs. valueless (无价值的) vs. invaluable (无价的)"
    ],
    "usage": {
      "collocations": "the value of …的价值; value friendship 珍视友谊",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc122",
    "word": "voice",
    "phonetic": "美 [vɔɪs]",
    "pos": "n.",
    "meaning": "嗓音;声音",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "voice (嗓音) vs. sound (声音通称) vs. noise (噪音)"
    ],
    "usage": {
      "collocations": "in a low voice 低声地; voice mail 语音信箱",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc123",
    "word": "watch",
    "phonetic": "美 [wɑːtʃ]",
    "pos": "n./v.",
    "meaning": "手表;观看;注视",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "watch sb do (全过程) vs. watch sb doing (正在做)"
    ],
    "usage": {
      "collocations": "watch TV 看电视; watch out 当心; keep a close watch on 密切注意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc124",
    "word": "wear",
    "phonetic": "美 [wer]",
    "pos": "v.",
    "meaning": "穿戴;磨损;面带",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "wear → wore → worn; 状态动词 vs. put on (动作); 同音 where"
    ],
    "usage": {
      "collocations": "wear out 穿破;耗尽; wear glasses 戴眼镜",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc125",
    "word": "weather",
    "phonetic": "美 [ˈweðər]",
    "pos": "n.",
    "meaning": "天气",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "weather vs. whether (是否) 同音辨析"
    ],
    "usage": {
      "collocations": "weather report/forecast 天气预报",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc126",
    "word": "win",
    "phonetic": "美 [wɪn]",
    "pos": "v.",
    "meaning": "赢得;获胜",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "win → won → won; win (赢得比赛/奖品) vs. beat (打败对手)"
    ],
    "usage": {
      "collocations": "win a prize 获奖; win over 说服;争取",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc127",
    "word": "work",
    "phonetic": "美 [wɜːrk]",
    "pos": "v./n.",
    "meaning": "工作;运转;作品",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "work (不可数) vs. job (可数); works (作品/工厂)"
    ],
    "usage": {
      "collocations": "work out 解决;计算出;锻炼; work on 从事于; at work 在工作",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc128",
    "word": "affect",
    "phonetic": "美 [əˈfekt]",
    "pos": "vt.",
    "meaning": "影响;感动;(疾病)侵袭",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "affect (v. 影响) vs. effect (n. 效果); have an effect on = affect"
    ],
    "usage": {
      "collocations": "be affected by 受…影响; affect sb deeply 深深影响某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc129",
    "word": "ashamed",
    "phonetic": "美 [əˈʃeɪmd]",
    "pos": "adj.",
    "meaning": "羞愧的;惭愧的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "ashamed (羞愧的，人作主语) vs. shameful (可耻的，物作主语)"
    ],
    "usage": {
      "collocations": "be ashamed of 为…感到羞愧; feel ashamed 感到惭愧",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc130",
    "word": "average",
    "phonetic": "美 [ˈævərɪdʒ]",
    "pos": "n./adj.",
    "meaning": "平均数;平均的;普通的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "average (平均的) vs. ordinary (普通的)"
    ],
    "usage": {
      "collocations": "on average 平均; above/below average 高于/低于平均水平",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc131",
    "word": "battle",
    "phonetic": "美 [ˈbætəl]",
    "pos": "n./vi.",
    "meaning": "战役;斗争;作战",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "battle (战役) vs. war (战争)"
    ],
    "usage": {
      "collocations": "in battle 在战斗中; fight a battle 打一场仗",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc132",
    "word": "contain",
    "phonetic": "美 [kənˈteɪn]",
    "pos": "vt.",
    "meaning": "包含;容纳;控制;含有",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "contain (包含全部) vs. include (包含部分)"
    ],
    "usage": {
      "collocations": "contain oneself 克制自己",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc133",
    "word": "crash",
    "phonetic": "美 [kræʃ]",
    "pos": "vi./n.",
    "meaning": "碰撞;坠落;崩溃",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "crash (碰撞) vs. crush (压碎)"
    ],
    "usage": {
      "collocations": "car crash 车祸; crash into 撞上; crash course 速成班",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc134",
    "word": "damage",
    "phonetic": "美 [ˈdæmɪdʒ]",
    "pos": "vi./vt./n.",
    "meaning": "损害;损毁;伤害",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "damage (部分损坏可修复) vs. destroy (彻底毁坏) vs. ruin (毁坏)"
    ],
    "usage": {
      "collocations": "do damage to 对…造成损害; suffer damage 遭受损害",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc135",
    "word": "destroy",
    "phonetic": "美 [dɪˈstrɔɪ]",
    "pos": "vt.",
    "meaning": "毁坏;摧毁;消灭",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "destroy (彻底毁坏) vs. damage (部分损坏)"
    ],
    "usage": {
      "collocations": "destroy the environment 破坏环境; be completely destroyed 被彻底摧毁",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc136",
    "word": "frightened",
    "phonetic": "美 [ˈfraɪtənd]",
    "pos": "adj.",
    "meaning": "害怕的;受惊的;受恐吓的",
    "unit": "m4",
    "difficulty": 3,
    "examPoints": [
      "frightened (人) vs. frightening (物); = scared/afraid"
    ],
    "usage": {
      "collocations": "be frightened of 害怕; be frightened to death 吓得要死",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc137",
    "word": "gather",
    "phonetic": "美 [ˈɡæðər]",
    "pos": "vt./vi.",
    "meaning": "收集;聚集;收割;推测",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "gather (聚集) vs. collect (收集)"
    ],
    "usage": {
      "collocations": "gather information 收集信息; gather together 聚集在一起",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc138",
    "word": "handout",
    "phonetic": "美 [ˈhændaʊt]",
    "pos": "n.",
    "meaning": "分发;讲义;施舍物",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "hand out (动词短语) vs. handout (名词)"
    ],
    "usage": {
      "collocations": "give out handouts 发讲义",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc139",
    "word": "highway",
    "phonetic": "美 [ˈhaɪweɪ]",
    "pos": "n.",
    "meaning": "高速公路;公路",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "highway (高速公路) vs. freeway (免费高速) vs. expressway"
    ],
    "usage": {
      "collocations": "on the highway 在高速公路上; highway system 公路系统",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc140",
    "word": "laptop",
    "phonetic": "美 [ˈlæptɑːp]",
    "pos": "n.",
    "meaning": "手提式个人电脑;笔记本电脑",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "laptop vs. desktop (台式机)"
    ],
    "usage": {
      "collocations": "laptop computer 笔记本电脑; on my laptop 在我的笔记本上",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc141",
    "word": "lower",
    "phonetic": "美 [ˈloʊər]",
    "pos": "v./adj.",
    "meaning": "低下;降低;较低的;下层的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "low → lower → lowest; lower (降低) vs. reduce (减少)"
    ],
    "usage": {
      "collocations": "lower one's voice 放低声音; lower the price 降价",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc142",
    "word": "pleased",
    "phonetic": "美 [pliːzd]",
    "pos": "adj.",
    "meaning": "高兴的;喜欢的;满意的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "pleased (人) vs. pleasing/pleasant (物)"
    ],
    "usage": {
      "collocations": "be pleased to do 很高兴做; be pleased with 对…满意",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc143",
    "word": "relaxed",
    "phonetic": "美 [rɪˈlækst]",
    "pos": "adj.",
    "meaning": "放松的;悠闲的;轻松的",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "relaxed (人感到放松) vs. relaxing (物令人放松)"
    ],
    "usage": {
      "collocations": "feel relaxed 感到放松; a relaxed atmosphere 轻松的氛围",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc144",
    "word": "reward",
    "phonetic": "美 [rɪˈwɔːrd]",
    "pos": "n./vt.",
    "meaning": "报答;报酬;酬金;奖赏",
    "unit": "m4",
    "difficulty": 2,
    "examPoints": [
      "reward (回报) vs. award (奖品)"
    ],
    "usage": {
      "collocations": "as a reward for 作为对…的奖赏; reward sb with sth 用某物奖励某人",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc145",
    "word": "ruin",
    "phonetic": "美 [ˈruːɪn]",
    "pos": "n./vt./vi.",
    "meaning": "毁坏;灭亡;废墟;毁灭;堕落",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "ruin (彻底毁坏) vs. damage (部分损坏)"
    ],
    "usage": {
      "collocations": "in ruins 成为废墟; ruin one's life 毁掉某人的生活",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "mc146",
    "word": "skim",
    "phonetic": "美 [skɪm]",
    "pos": "v.",
    "meaning": "略读;浏览;从…表面飞掠过",
    "unit": "m4",
    "difficulty": 1,
    "examPoints": [
      "skim (略读) vs. scan (扫读) vs. skip (跳读)"
    ],
    "usage": {
      "collocations": "skim through 浏览; skim over the water 掠过水面; skim milk 脱脂牛奶",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  }
];

if (typeof window !== "undefined") {
  window.MIDDLE_UNITS = MIDDLE_UNITS;
  window.MIDDLE_WORDS = MIDDLE_WORDS;
}
