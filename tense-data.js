// tense-data.js — 英语时态专项学习数据
// 初中阶段8种核心时态 + 高中阶段6种进阶时态

const TENSE_DATA = {
  middle: [
    {
      id: "t1",
      name: "一般现在时",
      nameEn: "Simple Present Tense",
      formula: "主语 + 动词原形 / 第三人称单数(动词+s/es)",
      formulaNeg: "主语 + don't/doesn't + 动词原形",
      formulaQ: "Do/Does + 主语 + 动词原形?",
      usage: [
        "表示经常性或习惯性的动作，常与always, usually, often, sometimes, every day等连用。例：Lily, what do you usually do after school?",
        "表示主语目前的状态或特征。例：He is an interesting teacher.",
        "表示按计划或安排将要发生的事。例：The ship leaves at 2 p.m.",
        "表示正在发生的事，以Here/There开头的倒装句。例：Here comes the school bus!",
        "表示格言、警句、客观事实、普遍真理。例：The sun rises in the east and sets in the west.",
        "用于条件、时间、让步状语从句中代替一般将来时（主将从现）。例：We can't go climbing if it rains tomorrow."
      ],
      keywords: "always, usually, often, sometimes, never, every day/week/month, on Sundays, twice a week, once a month",
      examples: [
        { en: "She usually goes to school by bus.", zh: "她通常坐公交车上学。" },
        { en: "The sun rises in the east.", zh: "太阳从东方升起。" },
        { en: "Here comes the school bus!", zh: "校车来了！" },
        { en: "I will call you as soon as I arrive.", zh: "我一到就给你打电话。" }
      ],
      examPoints: [
        "第三人称单数变化规则：一般加s，以s/x/sh/ch/o结尾加es，辅音字母+y结尾变y为i加es",
        "主将从现：If/When引导的状语从句中用一般现在时表将来",
        "辨析always/usually/often/sometimes/never的频率高低",
        "Here/There开头倒装句用一般现在时表正在进行"
      ],
      commonMistakes: [
        "错误: He don't like apples. 正确: He doesn't like apples.",
        "错误: Does he likes apples? 正确: Does he like apples?",
        "错误: I will call you when I will arrive. 正确: I will call you when I arrive."
      ]
    },
    {
      id: "t2",
      name: "一般过去时",
      nameEn: "Simple Past Tense",
      formula: "主语 + 动词过去式(规则动词加ed，不规则需记忆)",
      formulaNeg: "主语 + didn't + 动词原形",
      formulaQ: "Did + 主语 + 动词原形?",
      usage: [
        "表示过去某个时间发生的动作或状态。例：I visited my grandma last weekend.",
        "表示过去经常发生的动作。例：He used to play football after school.",
        "表示过去连续发生的动作。例：He got up, brushed his teeth and went out."
      ],
      keywords: "yesterday, last week/month/year, ...ago, in 2010, just now, the other day, at that time",
      examples: [
        { en: "I finished my homework two hours ago.", zh: "我两小时前完成了作业。" },
        { en: "She bought a new dress yesterday.", zh: "她昨天买了一条新裙子。" },
        { en: "Did you watch the movie last night?", zh: "你昨晚看电影了吗？" },
        { en: "He didn't go to school because he was sick.", zh: "他没去上学因为他病了。" }
      ],
      examPoints: [
        "规则动词过去式：一般加ed，以e结尾加d，辅音+y变y为i加ed，重读闭音节双写末尾辅音加ed",
        "不规则动词过去式需熟记：go-went, see-saw, buy-bought, take-took, give-gave等",
        "否定句和疑问句中用didn't/did后接动词原形",
        "used to do sth. 表示过去常常做某事（现在不做了）"
      ],
      commonMistakes: [
        "错误: Did he went home? 正确: Did he go home?",
        "错误: He didn't came. 正确: He didn't come.",
        "错误: I stoped the car. 正确: I stopped the car. (双写p)"
      ]
    },
    {
      id: "t3",
      name: "一般将来时",
      nameEn: "Simple Future Tense",
      formula: "主语 + will/shall + 动词原形 / 主语 + be going to + 动词原形",
      formulaNeg: "主语 + won't + 动词原形 / 主语 + be not going to + 动词原形",
      formulaQ: "Will/Shall + 主语 + 动词原形? / Be + 主语 + going to + 动词原形?",
      usage: [
        "will：表示将来的动作或状态，常伴随预测。例：It will rain tomorrow.",
        "be going to：表示已计划好或根据迹象推测即将发生的事。例：I am going to visit my aunt.",
        "shall常用于第一人称疑问句征求意见。例：Shall we go now?",
        "位移动词可用现在进行时表将来：go, come, leave, arrive等。例：The train is leaving in ten minutes."
      ],
      keywords: "tomorrow, next week/month/year, soon, later, in the future, the day after tomorrow, in + 时间段",
      examples: [
        { en: "I will help you with your English.", zh: "我会帮你学英语。" },
        { en: "Look at the clouds! It is going to rain.", zh: "看那些云！要下雨了。" },
        { en: "Shall we go for a walk after dinner?", zh: "晚饭后我们去散步好吗？" },
        { en: "The train is leaving in ten minutes.", zh: "火车十分钟后发车。" }
      ],
      examPoints: [
        "will vs be going to：will偏主观意愿/预测，be going to偏已有计划/客观迹象",
        "shall用于第一人称(I/we)疑问句表建议",
        "in + 时间段表示以后（用一般将来时），after + 时间点表示之后",
        "There be句型的将来时：There will be / There is going to be"
      ],
      commonMistakes: [
        "错误: There will have a meeting. 正确: There will be a meeting.",
        "错误: I will going to school. 正确: I am going to school. / I will go to school.",
        "错误: He will comes. 正确: He will come. (will后接原形)"
      ]
    },
    {
      id: "t4",
      name: "过去将来时",
      nameEn: "Past Future Tense",
      formula: "主语 + would + 动词原形 / 主语 + was/were going to + 动词原形",
      formulaNeg: "主语 + would not (wouldn't) + 动词原形",
      formulaQ: "Would + 主语 + 动词原形?",
      usage: [
        "表示从过去某时看来将要发生的动作或状态。例：He said he would come the next day.",
        "常用于宾语从句中，主句为过去时。例：I thought she would pass the exam.",
        "was/were going to表示过去打算做某事。例：I was going to call you, but I forgot.",
        "was/were about to do when...表示正要做某事这时...。例：She was about to leave when the phone rang."
      ],
      keywords: "the next day, the following week, in two days, soon, later (在过去语境中)",
      examples: [
        { en: "He said he would visit me the next week.", zh: "他说他下周来拜访我。" },
        { en: "I thought it would rain, but it didn't.", zh: "我以为会下雨，但没有。" },
        { en: "She was about to leave when the phone rang.", zh: "她正要离开时电话响了。" },
        { en: "They were going to have a picnic, but it rained.", zh: "他们原打算去野餐，但下雨了。" }
      ],
      examPoints: [
        "过去将来时必须依托于一个过去的语境，通常出现在宾语从句中",
        "would与was/were going to的区别与will和be going to类似",
        "was/were about to do when...句型：正要做某事这时发生了...",
        "时态一致性：主句过去时，从句用过去将来时表将来"
      ],
      commonMistakes: [
        "错误: He said he will come. 正确: He said he would come. (主过从过)",
        "错误: I was about going out. 正确: I was about to go out.",
        "错误: She said she is going to leave. 正确: She said she was going to leave."
      ]
    },
    {
      id: "t5",
      name: "现在进行时",
      nameEn: "Present Continuous Tense",
      formula: "主语 + am/is/are + 动词ing形式",
      formulaNeg: "主语 + am not/isn't/aren't + 动词ing形式",
      formulaQ: "Am/Is/Are + 主语 + 动词ing形式?",
      usage: [
        "表示此时此刻正在进行的动作。例：I am reading a book now.",
        "表示现阶段正在进行但此刻不一定在做的动作。例：She is learning French this term.",
        "位移动词进行时表将来。例：He is coming tomorrow.",
        "与always连用表示反复发生（带有感情色彩）。例：He is always helping others."
      ],
      keywords: "now, right now, at the moment, look!, listen!, at present, these days",
      examples: [
        { en: "Look! The boy is running across the street.", zh: "看！那个男孩正跑着穿过街道。" },
        { en: "What are you doing these days?", zh: "你这些天在做什么？" },
        { en: "My father is always watching TV after dinner.", zh: "我爸爸晚饭后总是看电视。" },
        { en: "They are leaving for Beijing tomorrow.", zh: "他们明天动身去北京。" }
      ],
      examPoints: [
        "动词ing变化规则：一般加ing，以e结尾去e加ing，重读闭音节双写末尾辅音加ing",
        "不用于进行时的动词：know, believe, love, like, hate, have, own等状态动词",
        "always与进行时连用表反复/抱怨：He is always making noise.",
        "辨析一般现在时与现在进行时：前者表习惯/真理，后者表正在发生"
      ],
      commonMistakes: [
        "错误: I am knowing him. 正确: I know him. (know不用于进行时)",
        "错误: He is runing. 正确: He is running. (双写n)",
        "错误: She is writeing a letter. 正确: She is writing a letter. (去e加ing)"
      ]
    },
    {
      id: "t6",
      name: "过去进行时",
      nameEn: "Past Continuous Tense",
      formula: "主语 + was/were + 动词ing形式",
      formulaNeg: "主语 + was not (wasn't)/were not (weren't) + 动词ing形式",
      formulaQ: "Was/Were + 主语 + 动词ing形式?",
      usage: [
        "表示过去某一时刻正在进行的动作。例：I was watching TV at 8 last night.",
        "表示过去某段时间正在进行的动作。例：They were playing football all afternoon.",
        "两个同时进行的过去动作。例：While I was reading, he was listening to music.",
        "过去进行时 + when/while引导的时间状语从句。例：They were talking when the teacher came in."
      ],
      keywords: "at this/that time yesterday, at 8 last night, from 8 to 10 yesterday, while, when",
      examples: [
        { en: "I was doing my homework at 9 o'clock last night.", zh: "昨晚九点我正在做作业。" },
        { en: "What were you doing when the phone rang?", zh: "电话铃响时你在做什么？" },
        { en: "While she was cooking, he was cleaning the room.", zh: "她在做饭时，他在打扫房间。" },
        { en: "They were talking when the teacher came in.", zh: "老师进来时他们正在说话。" }
      ],
      examPoints: [
        "when vs while：when后接短暂性动词（一般过去时），while后接延续性动词（过去进行时）",
        "过去进行时与一般过去时的区别：进行时强调正在进行，一般过去时强调已完成",
        "was用于第一/三人称单数，were用于其他人称",
        "常见句型：sb. was doing sth. when sth. happened (正在做...这时...)"
      ],
      commonMistakes: [
        "错误: I were watching TV. 正确: I was watching TV. (I用was)",
        "错误: While he came in, I was reading. 正确: When he came in, I was reading.",
        "错误: He was read a book. 正确: He was reading a book."
      ]
    },
    {
      id: "t7",
      name: "现在完成时",
      nameEn: "Present Perfect Tense",
      formula: "主语 + have/has + 动词过去分词",
      formulaNeg: "主语 + haven't/hasn't + 动词过去分词",
      formulaQ: "Have/Has + 主语 + 动词过去分词?",
      usage: [
        "表示过去发生的动作对现在造成的影响。例：I have lost my key. (现在没有钥匙)",
        "表示过去开始的动作一直持续到现在。例：He has lived here for 10 years.",
        "表示到目前为止完成的动作。例：I have finished my homework.",
        "经验/经历。例：Have you ever been to Beijing?"
      ],
      keywords: "already, yet, just, ever, never, for + 时间段, since + 时间点, so far, recently, up to now",
      examples: [
        { en: "I have just finished my dinner.", zh: "我刚吃完晚饭。" },
        { en: "She has lived in this city since 2015.", zh: "她从2015年起就住在这座城市。" },
        { en: "Have you ever been to Shanghai?", zh: "你曾经去过上海吗？" },
        { en: "We haven't seen each other for a long time.", zh: "我们很久没见面了。" }
      ],
      examPoints: [
        "have been to vs have gone to：been to去过已回，gone to去了未回",
        "for + 时间段 vs since + 时间点：for 3 years / since 2018",
        "短暂性动词不能与for/since连用：buy-have, borrow-keep, die-be dead, join-be in",
        "already用于肯定句，yet用于否定/疑问句"
      ],
      commonMistakes: [
        "错误: I have bought this book for 3 years. 正确: I have had this book for 3 years. (buy变have)",
        "错误: He has went to the library. 正确: He has gone to the library. (gone不是went)",
        "错误: She has been to the office. She is not here. 正确: She has gone to the office."
      ]
    },
    {
      id: "t8",
      name: "过去完成时",
      nameEn: "Past Perfect Tense",
      formula: "主语 + had + 动词过去分词",
      formulaNeg: "主语 + had not (hadn't) + 动词过去分词",
      formulaQ: "Had + 主语 + 动词过去分词?",
      usage: [
        "表示在过去某一时间或动作之前已经完成的动作（即过去的过去）。例：When I arrived, the train had left.",
        "表示过去某一时刻之前一直延续的动作。例：By the end of last year, he had worked here for 5 years.",
        "常用于宾语从句中，主句为过去时，从句动作先发生。例：He said he had finished the work.",
        "用于hardly...when / no sooner...than句型。例：Hardly had I sat down when the phone rang."
      ],
      keywords: "by the end of last..., before, after, by the time, when, until, already, yet, by then",
      examples: [
        { en: "By the time I got to the station, the train had already left.", zh: "等我到达车站时，火车已经开走了。" },
        { en: "She had finished her homework before dinner.", zh: "她在晚饭前已经完成了作业。" },
        { en: "He said he had been to London twice.", zh: "他说他去过伦敦两次。" },
        { en: "Hardly had I sat down when the phone rang.", zh: "我刚坐下电话就响了。" }
      ],
      examPoints: [
        "过去完成时表示过去的过去，必须有一个过去的时间作参照",
        "by the end of last... 句型必用过去完成时",
        "hardly...when / no sooner...than 句型中，主句用过去完成时且常倒装",
        "在told/said/knew等过去时动词后的宾语从句中，先发生的动作用过去完成时"
      ],
      commonMistakes: [
        "错误: When I arrived, the train left. 正确: When I arrived, the train had left. (火车先开走)",
        "错误: By the time he came, I finished. 正确: By the time he came, I had finished.",
        "错误: Hardly I had sat down when... 正确: Hardly had I sat down when... (倒装)"
      ]
    }
  ],
  high: [
    {
      id: "t9",
      name: "现在完成进行时",
      nameEn: "Present Perfect Continuous Tense",
      formula: "主语 + have/has been + 动词ing形式",
      formulaNeg: "主语 + haven't/hasn't been + 动词ing形式",
      formulaQ: "Have/Has + 主语 + been + 动词ing形式?",
      usage: [
        "表示从过去开始一直持续到现在的动作（可能还要继续）。例：I have been waiting for you for two hours.",
        "强调动作的持续性。例：She has been learning English for 5 years.",
        "表示近期一直在做的事。例：What have you been doing lately?",
        "某些动词不用于进行时（know, love, have等状态动词）"
      ],
      keywords: "for + 时间段, since + 时间点, all morning/day, recently, lately, how long",
      examples: [
        { en: "I have been studying English for three hours.", zh: "我已经学了三个小时英语了。" },
        { en: "She has been working on this project since January.", zh: "她从一月起就一直在做这个项目。" },
        { en: "How long have you been waiting here?", zh: "你在这里等了多久了？" },
        { en: "They have been building the bridge for two years.", zh: "他们建这座桥已经两年了。" }
      ],
      examPoints: [
        "现在完成进行时vs现在完成时：前者强调一直在做，后者强调已完成",
        "需要使用延续性动词，短暂性动词不用进行时",
        "静态动词（know, believe, like, own等）不用完成进行时",
        "常与for/since/how long连用"
      ],
      commonMistakes: [
        "错误: I have been knowing him for years. 正确: I have known him for years. (know不用进行时)",
        "错误: She has been buying this car for a year. 正确: She has had this car for a year.",
        "错误: How long are you waiting? 正确: How long have you been waiting?"
      ]
    },
    {
      id: "t10",
      name: "过去完成进行时",
      nameEn: "Past Perfect Continuous Tense",
      formula: "主语 + had been + 动词ing形式",
      formulaNeg: "主语 + had not (hadn't) been + 动词ing形式",
      formulaQ: "Had + 主语 + been + 动词ing形式?",
      usage: [
        "表示在过去某一时间之前一直持续的动作。例：By 2019, he had been teaching for 20 years.",
        "强调过去某时之前动作的持续性。例：She had been crying before he arrived.",
        "常与for/since引导的时间状语连用，以过去某时为参照",
        "某些静态动词不用此时态"
      ],
      keywords: "for + 时间段, since + 时间点, by the time, by the end of last..., before",
      examples: [
        { en: "By the time he retired, he had been working for 40 years.", zh: "到他退休时，他已经工作了40年。" },
        { en: "She had been waiting for an hour before the bus came.", zh: "在公交车来之前她已经等了一个小时。" },
        { en: "They had been talking for two hours when I joined them.", zh: "我加入时他们已经聊了两个小时了。" },
        { en: "He had been studying French before he moved to Paris.", zh: "他去巴黎前一直在学法语。" }
      ],
      examPoints: [
        "过去完成进行时强调过去的过去一直在持续的动作",
        "与过去完成时的区别：完成进行时强调持续过程，完成时强调结果",
        "需要延续性动词，静态动词不用",
        "常以另一个过去动作或时间为参照点"
      ],
      commonMistakes: [
        "错误: By 2018, he was teaching for 20 years. 正确: By 2018, he had been teaching for 20 years.",
        "错误: She had been knowing the truth. 正确: She had known the truth. (know不用进行时)",
        "错误: He had been bought the book for a year. 正确: He had had the book for a year."
      ]
    },
    {
      id: "t11",
      name: "将来完成时",
      nameEn: "Future Perfect Tense",
      formula: "主语 + will have + 动词过去分词",
      formulaNeg: "主语 + will not (won't) have + 动词过去分词",
      formulaQ: "Will + 主语 + have + 动词过去分词?",
      usage: [
        "表示在将来某一时间之前完成的动作。例：By next year, I will have graduated.",
        "表示到将来某时为止持续的动作。例：By 2030, she will have lived here for 20 years.",
        "常与by + 将来时间点连用",
        "强调在将来某个截止时间之前完成"
      ],
      keywords: "by + 将来时间, by the end of next..., by then, before + 将来时间, by the time + 一般现在时从句",
      examples: [
        { en: "By the end of this year, I will have learned 3000 words.", zh: "到今年底，我将已经学了3000个单词。" },
        { en: "She will have finished the report by 5 PM.", zh: "她将在下午5点前完成报告。" },
        { en: "By next month, they will have been married for 10 years.", zh: "到下个月，他们结婚就满10年了。" },
        { en: "By the time you arrive, I will have cooked dinner.", zh: "等你到的时候，我将已经做好晚饭了。" }
      ],
      examPoints: [
        "将来完成时强调在将来某时之前完成，常搭配by + 将来时间",
        "by the time引导的从句用一般现在时表将来，主句用将来完成时",
        "辨析by + 时间点vs in + 时间段：by后接截止时间，in后接时长",
        "写作高级句式：By the time..., sb. will have done sth."
      ],
      commonMistakes: [
        "错误: By next year, I will graduate. 正确: By next year, I will have graduated.",
        "错误: By the time you come, I will cook dinner. 正确: By the time you come, I will have cooked dinner.",
        "错误: In 2025, he will have worked here. 正确: By 2025, he will have worked here. (用by不用in)"
      ]
    },
    {
      id: "t12",
      name: "将来进行时",
      nameEn: "Future Continuous Tense",
      formula: "主语 + will be + 动词ing形式",
      formulaNeg: "主语 + will not (won't) be + 动词ing形式",
      formulaQ: "Will + 主语 + be + 动词ing形式?",
      usage: [
        "表示在将来某一时刻正在进行的动作。例：At 8 PM tomorrow, I will be watching a movie.",
        "表示按计划将来某时正在做的事。例：This time next week, I will be flying to London.",
        "表示将来自然而然会发生的事。例：I will be seeing him tomorrow at the meeting.",
        "语气委婉地询问对方的计划。例：Will you be using the car tonight?"
      ],
      keywords: "at + 将来时间点, this time tomorrow/next week, at ... tomorrow, in + 时间段",
      examples: [
        { en: "At 10 AM tomorrow, I will be taking an exam.", zh: "明天上午10点，我将在考试。" },
        { en: "This time next week, we will be enjoying our holiday.", zh: "下周这个时候，我们将正在享受假期。" },
        { en: "I will be waiting for you at the gate when you arrive.", zh: "你到的时候我会在门口等你。" },
        { en: "Will you be needing anything else?", zh: "您还需要别的吗？" }
      ],
      examPoints: [
        "将来进行时强调在将来某时正在进行，需要具体的将来时间点",
        "辨析一般将来时vs将来进行时：前者强调将做某事，后者强调将来某时正在做",
        "委婉语气：Will you be using...? 比Will you use...? 更礼貌",
        "常搭配this time tomorrow / at + 时间 + tomorrow等时间状语"
      ],
      commonMistakes: [
        "错误: At 8 PM tomorrow, I will watch TV. 正确: At 8 PM tomorrow, I will be watching TV.",
        "错误: This time next week, I will fly to London. 正确: This time next week, I will be flying to London.",
        "错误: I will be know the answer. 正确: I will know the answer. (know不用进行时)"
      ]
    },
    {
      id: "t13",
      name: "将来完成进行时",
      nameEn: "Future Perfect Continuous Tense",
      formula: "主语 + will have been + 动词ing形式",
      formulaNeg: "主语 + will not have been + 动词ing形式",
      formulaQ: "Will + 主语 + have been + 动词ing形式?",
      usage: [
        "表示在将来某一时间之前一直持续的动作。例：By next June, she will have been teaching for 10 years.",
        "强调动作从过去或将来开始一直持续到将来某一时间点",
        "常与by + 将来时间 + for/since连用"
      ],
      keywords: "by + 将来时间, for + 时间段, since + 时间点, by the time",
      examples: [
        { en: "By next June, she will have been teaching for 10 years.", zh: "到明年六月，她将已经教了10年书。" },
        { en: "By 2030, I will have been living here for 20 years.", zh: "到2030年，我将已经在这里住了20年。" },
        { en: "By the time you retire, you will have been working for 40 years.", zh: "到你退休时，你将已经工作了40年。" }
      ],
      examPoints: [
        "将来完成进行时强调到将来某时为止一直持续的动作",
        "需要延续性动词，静态动词不用",
        "常与by + 将来时间 + for/since连用",
        "与将来完成时的区别：完成进行时强调持续过程，完成时强调结果"
      ],
      commonMistakes: [
        "错误: By next year, I will be studying for 5 years. 正确: By next year, I will have been studying for 5 years.",
        "错误: By 2030, he will have been known her for 20 years. 正确: By 2030, he will have known her for 20 years. (know不用进行时)"
      ]
    },
    {
      id: "t14",
      name: "主谓一致与时态综合",
      nameEn: "Subject-Verb Agreement & Tense Synthesis",
      formula: "主语单复数决定动词形式 + 时态决定动词变化",
      formulaNeg: "根据主语和时态综合判断",
      formulaQ: "综合应用题",
      usage: [
        "就近原则：either...or..., neither...nor..., not only...but also...中谓语与最近主语一致",
        "就远原则：with, along with, as well as, besides等连接时，谓语与前面的主语一致",
        "集体名词family, class, team等作整体看用单数，强调个体用复数",
        "时间/距离/金钱等作整体看用单数：Ten years is a long time."
      ],
      keywords: "either...or, neither...nor, not only...but also, as well as, together with, the number of, a number of",
      examples: [
        { en: "Either you or he is wrong.", zh: "要么你要么他错了。（就近原则）" },
        { en: "The teacher, along with his students, was excited.", zh: "老师和学生们一起很兴奋。（就远原则）" },
        { en: "Ten years is a long time.", zh: "十年是很长的时间。（整体用单数）" },
        { en: "The number of students is increasing.", zh: "学生数量在增加。（the number of用单数）" }
      ],
      examPoints: [
        "either...or/neither...nor/not only...but also遵循就近原则",
        "as well as/with/together with遵循就远原则",
        "the number of + 复数名词 + 单数谓语；a number of + 复数名词 + 复数谓语",
        "集体名词视语境用单数或复数"
      ],
      commonMistakes: [
        "错误: Either you or he are wrong. 正确: Either you or he is wrong. (就近原则)",
        "错误: The teacher, along with his students, were excited. 正确: The teacher, along with his students, was excited. (就远原则)",
        "错误: The number of students are increasing. 正确: The number of students is increasing. (the number of用单数)"
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.TENSE_DATA = TENSE_DATA;
}
