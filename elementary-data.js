// elementary-data.js — 小学阶段单词数据（从人教版小学英语一至六年级单词表导入）
// 共 767 个单词，分为日常生活、天气与自然、饮食与健康、学校生活、其它 五类

const ELEMENTARY_DATA = {
  units: [
    {
        "id": "u1",
        "label": "日常生活",
        "count": 390
    },
    {
        "id": "u2",
        "label": "天气与自然",
        "count": 121
    },
    {
        "id": "u3",
        "label": "饮食与健康",
        "count": 76
    },
    {
        "id": "u4",
        "label": "学校生活",
        "count": 78
    },
    {
        "id": "u5",
        "label": "其它",
        "count": 102
    },
    {
        "id": "u_listen",
        "label": "听力",
        "count": 767
    }
],
  words: [
  {
    "id": "e1",
    "word": "pen",
    "phonetic": "美 [pen]",
    "pos": "",
    "meaning": "钢笔",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["pen pal笔友", "with a pen用钢笔"],
    "usage": {
      "collocations": "a pen; pen pal; with a pen; pen and paper",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e2",
    "word": "pencil",
    "phonetic": "美 ['pensəl]",
    "pos": "",
    "meaning": "铅笔",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["pencil复数pencils", "pencil box铅笔盒"],
    "usage": {
      "collocations": "a pencil; pencil box; pencil sharpener; with a pencil",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e3",
    "word": "pencil-case",
    "phonetic": "美 ['pensəlkeis]",
    "pos": "",
    "meaning": "铅笔盒",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["pencil复数pencils", "pencil box铅笔盒"],
    "usage": {
      "collocations": "a pencil; pencil box; pencil sharpener; with a pencil",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e4",
    "word": "ruler",
    "phonetic": "美 ['ru:lə]",
    "pos": "",
    "meaning": "尺子",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["ruler的拼写和发音", "ruler的基本用法"],
    "usage": {
      "collocations": "a ruler; with a ruler; a long ruler",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e5",
    "word": "eraser",
    "phonetic": "美 [i'reizə]",
    "pos": "",
    "meaning": "橡皮",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["eraser美式用法", "rubber英式用法"],
    "usage": {
      "collocations": "an eraser; with an eraser; a rubber eraser",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e6",
    "word": "crayon",
    "phonetic": "美 ['kreiən]",
    "pos": "",
    "meaning": "蜡笔",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["crayon的拼写和发音", "crayon的基本用法"],
    "usage": {
      "collocations": "a crayon; crayon",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e7",
    "word": "book",
    "phonetic": "美 [buk]",
    "pos": "",
    "meaning": "书",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e8",
    "word": "bag",
    "phonetic": "美 [bæɡ]",
    "pos": "",
    "meaning": "书包",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e9",
    "word": "sharpener",
    "phonetic": "美 ['ʃɑ:pənə]",
    "pos": "",
    "meaning": "卷笔刀",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["sharpener的拼写和发音", "sharpener的基本用法"],
    "usage": {
      "collocations": "a sharpener; sharpener",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e10",
    "word": "school",
    "phonetic": "美 [sku:l]",
    "pos": "",
    "meaning": "学校",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["go to school上学", "at school在学校"],
    "usage": {
      "collocations": "go to school; at school; school day; after school",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e11",
    "word": "head",
    "phonetic": "美 [hed]",
    "pos": "",
    "meaning": "头",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["nod one's head点头", "headache头痛"],
    "usage": {
      "collocations": "nod one's head; shake one's head; a big head; head ache",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e12",
    "word": "face",
    "phonetic": "美 [feis]",
    "pos": "",
    "meaning": "脸",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["face的拼写和发音", "face的基本用法"],
    "usage": {
      "collocations": "wash one's face; a round face; face to face; a smiling face",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e13",
    "word": "nose",
    "phonetic": "美 [nəuz]",
    "pos": "",
    "meaning": "鼻子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["nose的拼写和发音", "nose的基本用法"],
    "usage": {
      "collocations": "a long nose; nose bridge; runny nose; nose job",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e14",
    "word": "mouth",
    "phonetic": "",
    "pos": "",
    "meaning": "]mauθ]嘴",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["mouth的拼写和发音", "mouth的基本用法"],
    "usage": {
      "collocations": "open your mouth; big mouth; mouth water; shut your mouth",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e15",
    "word": "eye",
    "phonetic": "美 [ai]",
    "pos": "",
    "meaning": "眼睛",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["eye复数eyes", "close one's eyes闭眼"],
    "usage": {
      "collocations": "big eyes; close one's eyes; eye disease; eye doctor",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e16",
    "word": "ear",
    "phonetic": "美 [iə]",
    "pos": "",
    "meaning": "耳朵",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["ear的拼写和发音", "ear的基本用法"],
    "usage": {
      "collocations": "big ears; ear phone; listen with ears; ear ache",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e17",
    "word": "arm",
    "phonetic": "美 [ɑ:m]",
    "pos": "",
    "meaning": "胳膊",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["arm的拼写和发音", "arm的基本用法"],
    "usage": {
      "collocations": "a arm; arm",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e18",
    "word": "finger",
    "phonetic": "美 ['fiŋɡə]",
    "pos": "",
    "meaning": "手指",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["hand复数hands", "hand in hand手拉手"],
    "usage": {
      "collocations": "wash hands; by hand; hand in hand; raise your hand",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e19",
    "word": "leg",
    "phonetic": "美 [leɡ]",
    "pos": "",
    "meaning": "腿",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["leg的拼写和发音", "leg的基本用法"],
    "usage": {
      "collocations": "long legs; a broken leg; leg pain; run on legs",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e20",
    "word": "foot",
    "phonetic": "美 [fut]",
    "pos": "",
    "meaning": "脚",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["foot复数feet", "on foot步行"],
    "usage": {
      "collocations": "big feet; on foot; foot ball; wash feet",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e21",
    "word": "body",
    "phonetic": "美 ['bɔdi]",
    "pos": "",
    "meaning": "身体",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["body的拼写和发音", "body的基本用法"],
    "usage": {
      "collocations": "a healthy body; body part; body temperature; strong body",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e22",
    "word": "red",
    "phonetic": "美 [red]",
    "pos": "adj.",
    "meaning": "红色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["red light红灯", "in red穿红色"],
    "usage": {
      "collocations": "red apple; in red; red light; a red flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e23",
    "word": "yellow",
    "phonetic": "美 ['jeləu]",
    "pos": "adj.",
    "meaning": "黄色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["yellow的拼写和发音", "yellow的基本用法"],
    "usage": {
      "collocations": "yellow sun; in yellow; a yellow flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e24",
    "word": "green",
    "phonetic": "美 [ɡri:n]",
    "pos": "adj.",
    "meaning": "绿色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["green light绿灯", "green tea绿茶"],
    "usage": {
      "collocations": "green tree; in green; green light; green tea",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e25",
    "word": "blue",
    "phonetic": "美 [blu:]",
    "pos": "adj.",
    "meaning": "蓝色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["blue sky蓝天", "a blue bird蓝鸟"],
    "usage": {
      "collocations": "blue sky; in blue; a blue bird; blue eyes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e26",
    "word": "purple",
    "phonetic": "美 ['pə:pl]",
    "pos": "adj.",
    "meaning": "紫色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["purple的拼写和发音", "purple的基本用法"],
    "usage": {
      "collocations": "purple flower; in purple; a purple dress",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e27",
    "word": "white",
    "phonetic": "美 [hwait]",
    "pos": "adj.",
    "meaning": "白色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["white snow白雪", "in white穿白色"],
    "usage": {
      "collocations": "white snow; in white; a white cat; white shirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e28",
    "word": "black",
    "phonetic": "美 [blæk]",
    "pos": "adj.",
    "meaning": "黑色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["black board黑板", "black hair黑发"],
    "usage": {
      "collocations": "black cat; in black; black board; black hair",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e29",
    "word": "orange",
    "phonetic": "美 ['ɔrindʒ]",
    "pos": "adj.",
    "meaning": "橙色的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["orange的拼写和发音", "orange的基本用法"],
    "usage": {
      "collocations": "an orange; orange juice; orange tree",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e30",
    "word": "pink",
    "phonetic": "美 [piŋk]",
    "pos": "adj.",
    "meaning": "粉色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["pink的拼写和发音", "pink的基本用法"],
    "usage": {
      "collocations": "pink flower; in pink; a pink dress; pink color",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e31",
    "word": "brown",
    "phonetic": "美 [braun]",
    "pos": "adj.",
    "meaning": "棕色的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["brown的拼写和发音", "brown的基本用法"],
    "usage": {
      "collocations": "brown bear; in brown; a brown bag; brown hair",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e32",
    "word": "cat",
    "phonetic": "美 [kæt]",
    "pos": "",
    "meaning": "猫",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cat的复数是cats", "a cat中的a发/æ/音"],
    "usage": {
      "collocations": "a cute cat; feed the cat; cat food",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e33",
    "word": "dog",
    "phonetic": "美 [dɔɡ, dɔ:ɡ]",
    "pos": "",
    "meaning": "狗",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["dog的复数是dogs", "hot dog热狗是合成词"],
    "usage": {
      "collocations": "a pet dog; walk the dog; dog food; a police dog",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e34",
    "word": "monkey",
    "phonetic": "美 ['mʌŋki]",
    "pos": "",
    "meaning": "猴子",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["monkey的拼写和发音", "monkey的基本用法"],
    "usage": {
      "collocations": "a clever monkey; monkey bar; act like a monkey",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e35",
    "word": "panda",
    "phonetic": "美 ['pændə]",
    "pos": "",
    "meaning": "熊猫",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cat的复数是cats", "a cat中的a发/æ/音"],
    "usage": {
      "collocations": "a cute cat; feed the cat; cat food",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e36",
    "word": "rabbit",
    "phonetic": "美 ['ræbit]",
    "pos": "",
    "meaning": "兔子",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["rabbit的拼写和发音", "rabbit的基本用法"],
    "usage": {
      "collocations": "a white rabbit; rabbit hole; run like a rabbit",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e37",
    "word": "duck",
    "phonetic": "美 [dʌk]",
    "pos": "",
    "meaning": "鸭子",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["duck的拼写和发音", "duck的基本用法"],
    "usage": {
      "collocations": "a duck pond; duckling; ducks swim",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e38",
    "word": "pig",
    "phonetic": "美 [piɡ]",
    "pos": "",
    "meaning": "猪",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["pig复数pigs", "piggy bank存钱罐"],
    "usage": {
      "collocations": "a pig farm; feed pigs; little pig",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e39",
    "word": "bird",
    "phonetic": "美 [bə:d]",
    "pos": "",
    "meaning": "鸟",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["bird复数birds", "early bird早到的人"],
    "usage": {
      "collocations": "a little bird; birds fly; catch a bird; bird nest",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e40",
    "word": "bear",
    "phonetic": "美 [bεə]",
    "pos": "",
    "meaning": "熊",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["bear的拼写和发音", "bear的基本用法"],
    "usage": {
      "collocations": "a big bear; bear hug; polar bear",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e41",
    "word": "elephant",
    "phonetic": "美 ['elifənt]",
    "pos": "",
    "meaning": "大象",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "a big elephant; elephant trunk; elephant tusk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e42",
    "word": "mouse",
    "phonetic": "美 [maus, mauz]",
    "pos": "",
    "meaning": "老鼠",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["mouse的拼写和发音", "mouse的基本用法"],
    "usage": {
      "collocations": "a little mouse; mouse trap; computer mouse",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e43",
    "word": "squirrel",
    "phonetic": "美 ['skwə:rəl]",
    "pos": "",
    "meaning": "松鼠",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["squirrel的拼写和发音", "squirrel的基本用法"],
    "usage": {
      "collocations": "a little mouse; mouse trap; computer mouse",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e44",
    "word": "cake",
    "phonetic": "美 [keik]",
    "pos": "",
    "meaning": "蛋糕",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["cake可数/不可数均可", "a piece of cake小菜一碟/一片蛋糕"],
    "usage": {
      "collocations": "a birthday cake; make a cake; cake shop; a piece of cake",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e45",
    "word": "bread",
    "phonetic": "美 [bred]",
    "pos": "",
    "meaning": "面包",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["bread是不可数名词", "a piece of bread一片面包"],
    "usage": {
      "collocations": "a piece of bread; bread and butter; make bread",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e46",
    "word": "hot",
    "phonetic": "",
    "pos": "",
    "meaning": "dog 热狗",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["dog的复数是dogs", "hot dog热狗是合成词"],
    "usage": {
      "collocations": "a pet dog; walk the dog; dog food; a police dog",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e47",
    "word": "hamburger",
    "phonetic": "美 ['hæmbə:ɡə]",
    "pos": "",
    "meaning": "汉堡包",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["hamburger的拼写和发音", "hamburger的基本用法"],
    "usage": {
      "collocations": "a hamburger; hamburger shop; eat a hamburger",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e48",
    "word": "chicken",
    "phonetic": "美 ['tʃikin]",
    "pos": "",
    "meaning": "鸡肉",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["chicken的拼写和发音", "chicken的基本用法"],
    "usage": {
      "collocations": "eat meat; meat ball; a piece of meat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e49",
    "word": "French",
    "phonetic": "美 [frentʃ]",
    "pos": "",
    "meaning": "Fries 榨薯条",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["French的拼写和发音", "French的基本用法"],
    "usage": {
      "collocations": "French fries; a bag of fries",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e50",
    "word": "Coke",
    "phonetic": "美 [kəuk]",
    "pos": "",
    "meaning": "可乐",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["Coke的拼写和发音", "Coke的基本用法"],
    "usage": {
      "collocations": "a cola; a can of cola; drink cola",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e51",
    "word": "juice",
    "phonetic": "美 [dʒu:s]",
    "pos": "",
    "meaning": "果汁",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["juice的拼写和发音", "juice的基本用法"],
    "usage": {
      "collocations": "a glass of juice; orange juice; apple juice",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e52",
    "word": "milk",
    "phonetic": "美 [milk]",
    "pos": "",
    "meaning": "牛奶",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cow复数cows", "milk a cow挤牛奶"],
    "usage": {
      "collocations": "milk a cow; a cow farm; cow milk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e53",
    "word": "water",
    "phonetic": "美 ['wɔ:tə]",
    "pos": "",
    "meaning": "水",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e54",
    "word": "tea",
    "phonetic": "美 [ti:]",
    "pos": "",
    "meaning": "茶",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["tea的拼写和发音", "tea的基本用法"],
    "usage": {
      "collocations": "a cup of tea; green tea; make tea; tea bag",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e55",
    "word": "coffee",
    "phonetic": "美 ['kɔfi]",
    "pos": "",
    "meaning": "咖啡",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["coffee的拼写和发音", "coffee的基本用法"],
    "usage": {
      "collocations": "a cup of coffee; coffee shop; black coffee",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e56",
    "word": "one",
    "phonetic": "美 [wʌn]",
    "pos": "",
    "meaning": "一",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["one的拼写和发音", "one的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e57",
    "word": "two",
    "phonetic": "美 [tu:]",
    "pos": "",
    "meaning": "二",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["two的拼写和发音", "two的基本用法"],
    "usage": {
      "collocations": "two or three; two times; two days; number two",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e58",
    "word": "three",
    "phonetic": "美 [θri:]",
    "pos": "",
    "meaning": "三",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["three的拼写和发音", "three的基本用法"],
    "usage": {
      "collocations": "three times; three days; three people; number three",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e59",
    "word": "four",
    "phonetic": "美 [fɔ:]",
    "pos": "",
    "meaning": "四",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["four的拼写和发音", "four的基本用法"],
    "usage": {
      "collocations": "four seasons; four times; four days; number four",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e60",
    "word": "five",
    "phonetic": "美 [faiv]",
    "pos": "",
    "meaning": "五",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["five的拼写和发音", "five的基本用法"],
    "usage": {
      "collocations": "five days; five people; five times; number five",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e61",
    "word": "six",
    "phonetic": "美 [siks]",
    "pos": "",
    "meaning": "六",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["six的拼写和发音", "six的基本用法"],
    "usage": {
      "collocations": "six days; six people; six times; number six",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e62",
    "word": "seven",
    "phonetic": "美 ['sevən]",
    "pos": "",
    "meaning": "七",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["seven的拼写和发音", "seven的基本用法"],
    "usage": {
      "collocations": "seven days; seven people; a week has seven days",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e63",
    "word": "eight",
    "phonetic": "美 [eit]",
    "pos": "",
    "meaning": "八",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["eight的拼写和发音", "eight的基本用法"],
    "usage": {
      "collocations": "eight days; eight people; eight times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e64",
    "word": "nine",
    "phonetic": "美 [nain]",
    "pos": "",
    "meaning": "九",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["nine的拼写和发音", "nine的基本用法"],
    "usage": {
      "collocations": "nine days; nine people; nine times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e65",
    "word": "ten",
    "phonetic": "美 [ten]",
    "pos": "",
    "meaning": "十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["ten的拼写和发音", "ten的基本用法"],
    "usage": {
      "collocations": "ten days; ten people; ten times; top ten",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e66",
    "word": "doll",
    "phonetic": "美 [dɔl]",
    "pos": "n.",
    "meaning": "玩具娃娃",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["play with和...玩", "play games玩游戏"],
    "usage": {
      "collocations": "play games; play with; play outside; play time; a play ground",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e67",
    "word": "boat",
    "phonetic": "美 [bəut]",
    "pos": "",
    "meaning": "小船",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a boat; a ship; by boat; take a boat; a small boat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e68",
    "word": "ball",
    "phonetic": "美 [bɔ:l]",
    "pos": "",
    "meaning": "球",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["ball的拼写和发音", "ball的基本用法"],
    "usage": {
      "collocations": "a ball; play ball; ball game; foot ball; basket ball",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e69",
    "word": "kite",
    "phonetic": "美 [kait]",
    "pos": "",
    "meaning": "风筝",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e70",
    "word": "balloon",
    "phonetic": "",
    "pos": "",
    "meaning": "]bə'lu:n] 气球",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["balloon的拼写和发音", "balloon的基本用法"],
    "usage": {
      "collocations": "a ball; play ball; ball game; foot ball; basket ball",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e71",
    "word": "car",
    "phonetic": "美 [kɑ:]",
    "pos": "",
    "meaning": "小汽车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e72",
    "word": "plane",
    "phonetic": "美 [plein]",
    "pos": "",
    "meaning": "飞机",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by plane乘飞机", "a big plane大飞机"],
    "usage": {
      "collocations": "a plane; by plane; take a plane; a big plane",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e73",
    "word": "boy",
    "phonetic": "美 [bɔi]",
    "pos": "",
    "meaning": "男孩",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["a boy一个男孩", "boys and girls孩子们"],
    "usage": {
      "collocations": "a child; children; a good kid; kid's toys",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e74",
    "word": "girl",
    "phonetic": "美 [ɡə:l]",
    "pos": "",
    "meaning": "女孩",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["a girl一个女孩", "a little girl小女孩"],
    "usage": {
      "collocations": "a child; children; a good kid; kid's toys",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e75",
    "word": "teacher",
    "phonetic": "美 ['ti:tʃə]",
    "pos": "",
    "meaning": "教师",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["teacher的拼写和发音", "teacher的基本用法"],
    "usage": {
      "collocations": "a teacher; teacher",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e76",
    "word": "student",
    "phonetic": "美 ['stju:dənt]",
    "pos": "",
    "meaning": "学生",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["student复数students", "a good student好学生"],
    "usage": {
      "collocations": "a student; good student; student card; a new student",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e77",
    "word": "this",
    "phonetic": "美 [ðis, 弱ðəs]",
    "pos": "",
    "meaning": "这个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["this的拼写和发音", "this的基本用法"],
    "usage": {
      "collocations": "a this; this",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e78",
    "word": "my",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "我的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["my的拼写和发音", "my的基本用法"],
    "usage": {
      "collocations": "a my; my",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e79",
    "word": "friend",
    "phonetic": "美 [frend]",
    "pos": "",
    "meaning": "朋友",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["make friends交朋友", "best friend最好的朋友"],
    "usage": {
      "collocations": "a friend; my friend; make friends; best friend; friend ship",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e80",
    "word": "nice",
    "phonetic": "美 [nais]",
    "pos": "adj.",
    "meaning": "好的；愉快的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e81",
    "word": "good morning",
    "phonetic": "美 ['mɔ:niŋ]",
    "pos": "",
    "meaning": "早上好",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "good morning; in the morning; morning exercise; this morning",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e82",
    "word": "good afternoon",
    "phonetic": "美 [,ɑ:ftə:'nu:n]",
    "pos": "",
    "meaning": "下午好",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "good afternoon; in the afternoon; this afternoon; afternoon tea",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e83",
    "word": "meet",
    "phonetic": "美 [mi:t]",
    "pos": "",
    "meaning": "遇见；碰见",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["meet的拼写和发音", "meet的基本用法"],
    "usage": {
      "collocations": "a meet; meet",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e84",
    "word": "goodbye",
    "phonetic": "美 [,ɡud'bai]",
    "pos": "",
    "meaning": "再见",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["goodbye的拼写和发音", "goodbye的基本用法"],
    "usage": {
      "collocations": "a goodbye; goodbye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e85",
    "word": "too",
    "phonetic": "美 [tu:]",
    "pos": "",
    "meaning": "也；太",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["too的拼写和发音", "too的基本用法"],
    "usage": {
      "collocations": "a too; too",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e86",
    "word": "father",
    "phonetic": "美 ['fɑ:ðə]",
    "pos": "",
    "meaning": "父亲；爸爸",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["my dad我的爸爸", "dad's car爸爸的车"],
    "usage": {
      "collocations": "my dad; dad's car; good dad; help dad",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e87",
    "word": "dad",
    "phonetic": "",
    "pos": "",
    "meaning": "爸爸 口语",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["my dad我的爸爸", "dad's car爸爸的车"],
    "usage": {
      "collocations": "my dad; dad's car; good dad; help dad",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e88",
    "word": "mother",
    "phonetic": "美 ['mʌðə]",
    "pos": "",
    "meaning": "母亲；妈妈",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["my mom我的妈妈", "good mom好妈妈"],
    "usage": {
      "collocations": "my mom; mom's bag; good mom; help mom",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e89",
    "word": "mom",
    "phonetic": "",
    "pos": "",
    "meaning": "妈妈 口语",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["my mom我的妈妈", "good mom好妈妈"],
    "usage": {
      "collocations": "my mom; mom's bag; good mom; help mom",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e90",
    "word": "man",
    "phonetic": "美 [mæn]",
    "pos": "n.",
    "meaning": "男人",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["man的拼写和发音", "man的基本用法"],
    "usage": {
      "collocations": "a man; man",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e91",
    "word": "woman",
    "phonetic": "美 ['wumən]",
    "pos": "n.",
    "meaning": "女人",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["woman的拼写和发音", "woman的基本用法"],
    "usage": {
      "collocations": "a woman; woman",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e92",
    "word": "grandmother",
    "phonetic": "美 ['ɡrænd,mʌðə]",
    "pos": "",
    "meaning": "外祖母",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["grandmother的拼写和发音", "grandmother的基本用法"],
    "usage": {
      "collocations": "my mother; mother's day; a good mother",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e93",
    "word": "grandma",
    "phonetic": "美 ['ɡrændmɑ:]",
    "pos": "",
    "meaning": "口语外）祖母",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["grandma的拼写和发音", "grandma的基本用法"],
    "usage": {
      "collocations": "my mother; mother's day; a good mother",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e94",
    "word": "grandfather",
    "phonetic": "美 ['ɡrænd,fɑ:ðə]",
    "pos": "",
    "meaning": "外）祖父",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["grandfather的拼写和发音", "grandfather的基本用法"],
    "usage": {
      "collocations": "my father; father's day; a good father",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e95",
    "word": "grandpa",
    "phonetic": "美 ['ɡrændpɑ:]",
    "pos": "",
    "meaning": "（口语外）祖父",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["grandpa的拼写和发音", "grandpa的基本用法"],
    "usage": {
      "collocations": "my father; father's day; a good father",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e96",
    "word": "sister",
    "phonetic": "美 ['sistə]",
    "pos": "",
    "meaning": "姐妹",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sister的拼写和发音", "sister的基本用法"],
    "usage": {
      "collocations": "my sister; big sister; little sister; sister and brother",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e97",
    "word": "brother",
    "phonetic": "美 ['brʌðə]",
    "pos": "",
    "meaning": "兄妹",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["brother的拼写和发音", "brother的基本用法"],
    "usage": {
      "collocations": "little sister; baby sister; younger sister",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e98",
    "word": "great",
    "phonetic": "美 [ɡreit]",
    "pos": "",
    "meaning": "太好了",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e99",
    "word": "really",
    "phonetic": "美 ['riəli, 'ri:li]",
    "pos": "adv.",
    "meaning": "真地；确切地",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["really的拼写和发音", "really的基本用法"],
    "usage": {
      "collocations": "a really; really",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e100",
    "word": "and",
    "phonetic": "",
    "pos": "",
    "meaning": "ænd, 和；并且",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["and的拼写和发音", "and的基本用法"],
    "usage": {
      "collocations": "a and; and",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e101",
    "word": "how",
    "phonetic": "美 [hau]",
    "pos": "",
    "meaning": "多么；怎么样",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["how的拼写和发音", "how的基本用法"],
    "usage": {
      "collocations": "how many; a lot of; many thanks; many people; too many",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e102",
    "word": "eleven",
    "phonetic": "美 [i'levən]",
    "pos": "",
    "meaning": "十一",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["eleven的拼写和发音", "eleven的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e103",
    "word": "twelve",
    "phonetic": "美 [twelv]",
    "pos": "",
    "meaning": "十二",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["twelve的拼写和发音", "twelve的基本用法"],
    "usage": {
      "collocations": "two or three; two times; two days; number two",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e104",
    "word": "thirteen",
    "phonetic": "",
    "pos": "",
    "meaning": "'θə:'ti:n]十三",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["thirteen的拼写和发音", "thirteen的基本用法"],
    "usage": {
      "collocations": "three times; three days; three people; number three",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e105",
    "word": "fourteen",
    "phonetic": "美 ['fɔ:'ti:n]",
    "pos": "",
    "meaning": "十四",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fourteen的拼写和发音", "fourteen的基本用法"],
    "usage": {
      "collocations": "four seasons; four times; four days; number four",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e106",
    "word": "fifteen",
    "phonetic": "美 ['fifti:n]",
    "pos": "",
    "meaning": "十五",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fifteen的拼写和发音", "fifteen的基本用法"],
    "usage": {
      "collocations": "five days; five people; five times; number five",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e107",
    "word": "sixteen",
    "phonetic": "美 ['siks'ti:n]",
    "pos": "",
    "meaning": "十六",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sixteen的拼写和发音", "sixteen的基本用法"],
    "usage": {
      "collocations": "six days; six people; six times; number six",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e108",
    "word": "seventeen",
    "phonetic": "美 [,sevən'ti:n]",
    "pos": "",
    "meaning": "十七",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["seventeen的拼写和发音", "seventeen的基本用法"],
    "usage": {
      "collocations": "seven days; seven people; a week has seven days",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e109",
    "word": "eighteen",
    "phonetic": "美 ['ei'ti:n]",
    "pos": "",
    "meaning": "十八",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["eighteen的拼写和发音", "eighteen的基本用法"],
    "usage": {
      "collocations": "eight days; eight people; eight times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e110",
    "word": "nineteen",
    "phonetic": "美 [,nain'ti:n]",
    "pos": "",
    "meaning": "十九",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["nineteen的拼写和发音", "nineteen的基本用法"],
    "usage": {
      "collocations": "nine days; nine people; nine times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e111",
    "word": "twenty",
    "phonetic": "美 ['twenti]",
    "pos": "",
    "meaning": "二十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["twenty的拼写和发音", "twenty的基本用法"],
    "usage": {
      "collocations": "two or three; two times; two days; number two",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e112",
    "word": "can",
    "phonetic": "美 [kæn, kən]",
    "pos": "",
    "meaning": "能够；可以",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["can的拼写和发音", "can的基本用法"],
    "usage": {
      "collocations": "a can; can",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e113",
    "word": "look",
    "phonetic": "美 [luk]",
    "pos": "v.",
    "meaning": "at [强æt, 弱ət]看；瞧",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "look at; watch TV; see a film; look for; look like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e114",
    "word": "peach",
    "phonetic": "美 [pi:tʃ]",
    "pos": "",
    "meaning": "桃",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["peach的拼写和发音", "peach的基本用法"],
    "usage": {
      "collocations": "a peach; peach tree; sweet peach",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e115",
    "word": "pear",
    "phonetic": "美 [pεə]",
    "pos": "",
    "meaning": "梨",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["pear的拼写和发音", "pear的基本用法"],
    "usage": {
      "collocations": "a pear; pear tree; sweet pear",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e116",
    "word": "watermelon",
    "phonetic": "美 ['wɔ:təmelən]",
    "pos": "",
    "meaning": "西瓜",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["watermelon的拼写和发音", "watermelon的基本用法"],
    "usage": {
      "collocations": "a watermelon; watermelon juice; sweet watermelon",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e117",
    "word": "apple",
    "phonetic": "美 ['æpl]",
    "pos": "",
    "meaning": "苹果",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["an apple用an不用a", "apple以元音音素开头"],
    "usage": {
      "collocations": "an apple; apple tree; apple juice; apple pie",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e118",
    "word": "banana",
    "phonetic": "美 [bə'nɑ:nə]",
    "pos": "",
    "meaning": "香蕉",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a banana用a", "banana peel香蕉皮"],
    "usage": {
      "collocations": "a banana; banana peel; banana milkshake",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e119",
    "word": "strawberry",
    "phonetic": "美 ['strɔ:bəri]",
    "pos": "",
    "meaning": "草莓",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["strawberry的拼写和发音", "strawberry的基本用法"],
    "usage": {
      "collocations": "a strawberry; strawberry jam; strawberry cake",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e120",
    "word": "grape",
    "phonetic": "美 [ɡreip]",
    "pos": "",
    "meaning": "葡萄",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["grape的拼写和发音", "grape的基本用法"],
    "usage": {
      "collocations": "purple grapes; grape juice; a bunch of grapes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e121",
    "word": "like",
    "phonetic": "美 [laik]",
    "pos": "",
    "meaning": "喜欢",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["like的拼写和发音", "like的基本用法"],
    "usage": {
      "collocations": "a like; like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e122",
    "word": "some",
    "phonetic": "",
    "pos": "",
    "meaning": "[sʌm, 一些；某些",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["some的拼写和发音", "some的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e123",
    "word": "thanks",
    "phonetic": "",
    "pos": "",
    "meaning": "多谢",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["thanks的拼写和发音", "thanks的基本用法"],
    "usage": {
      "collocations": "how many; a lot of; many thanks; many people; too many",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e124",
    "word": "bus",
    "phonetic": "美 [bʌs]",
    "pos": "",
    "meaning": "公共汽车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e125",
    "word": "bike",
    "phonetic": "美 [baik]",
    "pos": "",
    "meaning": "自行车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e126",
    "word": "taxi",
    "phonetic": "美 ['tæksi]",
    "pos": "",
    "meaning": "出租车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e127",
    "word": "jeep",
    "phonetic": "美 [dʒi:p]",
    "pos": "",
    "meaning": "吉普车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e128",
    "word": "desk",
    "phonetic": "美 [desk]",
    "pos": "",
    "meaning": "课桌",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["desk的拼写和发音", "desk的基本用法"],
    "usage": {
      "collocations": "a desk; at the desk; desk lamp; clean the desk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e129",
    "word": "chair",
    "phonetic": "美 [tʃεə]",
    "pos": "",
    "meaning": "椅子",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["chair的拼写和发音", "chair的基本用法"],
    "usage": {
      "collocations": "a chair; sit on a chair; a soft chair",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e130",
    "word": "Walkman",
    "phonetic": "",
    "pos": "v.",
    "meaning": "随身听",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["listen to听...", "listen carefully认真听"],
    "usage": {
      "collocations": "listen to; hear from; hear of; listen carefully",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e131",
    "word": "lamp",
    "phonetic": "美 [læmp]",
    "pos": "",
    "meaning": "台灯",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["turn on the light开灯", "turn off the light关灯"],
    "usage": {
      "collocations": "a lamp; turn on the light; turn off the light; a light bulb",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e132",
    "word": "your",
    "phonetic": "美 [jɔ:, jəu, 弱jə]",
    "pos": "adj.",
    "meaning": "你的；你们的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["your的拼写和发音", "your的基本用法"],
    "usage": {
      "collocations": "a your; your",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e133",
    "word": "zoo",
    "phonetic": "美 [zu:]",
    "pos": "n.",
    "meaning": "动物园",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["zoo的拼写和发音", "zoo的基本用法"],
    "usage": {
      "collocations": "a zoo; go to the zoo; at the zoo; zoo animals",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e134",
    "word": "small",
    "phonetic": "美 [smɔ:l]",
    "pos": "adj.",
    "meaning": "小的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a small bird; very small; too small; small and big",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e135",
    "word": "big",
    "phonetic": "美 [biɡ]",
    "pos": "adj.",
    "meaning": "大的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "a big apple; very big; too big; big and small",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e136",
    "word": "long",
    "phonetic": "美 [lɔŋ, lɔ:ŋ]",
    "pos": "adj.",
    "meaning": "长的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["long的反义词是short", "long hair长发"],
    "usage": {
      "collocations": "long hair; a long ruler; very long; too long; a long time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e137",
    "word": "short",
    "phonetic": "美 [ʃɔ:t]",
    "pos": "adj.",
    "meaning": "短的；矮的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["short的拼写和发音", "short的基本用法"],
    "usage": {
      "collocations": "short hair; a short ruler; very short; too short; a short time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e138",
    "word": "tall",
    "phonetic": "美 [tɔ:l]",
    "pos": "adj.",
    "meaning": "高的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["tall的比较级是taller", "a tall tree一棵高树"],
    "usage": {
      "collocations": "tall and thin; very tall; a tall tree; a tall boy; how tall",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e139",
    "word": "giraffe",
    "phonetic": "美 [dʒi'rɑ:f]",
    "pos": "",
    "meaning": "长颈鹿",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["long的反义词是short", "long hair长发"],
    "usage": {
      "collocations": "a deer park; run like a deer; deer meat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e140",
    "word": "deer",
    "phonetic": "美 [diə]",
    "pos": "",
    "meaning": "鹿",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["deer的拼写和发音", "deer的基本用法"],
    "usage": {
      "collocations": "a deer park; run like a deer; deer meat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e141",
    "word": "room",
    "phonetic": "美 [ru:m]",
    "pos": "",
    "meaning": "房间",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["room的拼写和发音", "room的基本用法"],
    "usage": {
      "collocations": "a room; bed room; bath room; class room; a big room",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e142",
    "word": "Chinese",
    "phonetic": "",
    "pos": "",
    "meaning": "book：语文书",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e143",
    "word": "English",
    "phonetic": "",
    "pos": "",
    "meaning": "book：英语书",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e144",
    "word": "math",
    "phonetic": "",
    "pos": "",
    "meaning": "book 数学书",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e145",
    "word": "schoolbag",
    "phonetic": "美 [sku:lbæg]",
    "pos": "",
    "meaning": "书包",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e146",
    "word": "storybook",
    "phonetic": "美 [stɔ:ribuk]",
    "pos": "v.",
    "meaning": "故事书,小说 fridge [fridʒ] 冰箱",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e147",
    "word": "notebook",
    "phonetic": "美 [nəutbuk]",
    "pos": "",
    "meaning": "笔记簿 table [teibl] 桌子",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["notebook的拼写和发音", "notebook的基本用法"],
    "usage": {
      "collocations": "a table; at the table; a desk; on the table; a dinner table",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e148",
    "word": "colour",
    "phonetic": "美 [kʌlə]",
    "pos": "",
    "meaning": "彩色 they [ðei, ðe] 他[她, 它]们",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["colour的拼写和发音", "colour的基本用法"],
    "usage": {
      "collocations": "a colour; colour",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e149",
    "word": "fat",
    "phonetic": "美 [fæt]",
    "pos": "adj.",
    "meaning": "胖的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fat的拼写和发音", "fat的基本用法"],
    "usage": {
      "collocations": "a fat; fat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e150",
    "word": "sofa",
    "phonetic": "美 [səufə]",
    "pos": "",
    "meaning": "沙发",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sofa的拼写和发音", "sofa的基本用法"],
    "usage": {
      "collocations": "a sofa; sofa",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e151",
    "word": "shelf",
    "phonetic": "美 [ʃelf]",
    "pos": "",
    "meaning": "架子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["shelf的拼写和发音", "shelf的基本用法"],
    "usage": {
      "collocations": "a shelf; shelf",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e152",
    "word": "key",
    "phonetic": "美 [ki:]",
    "pos": "",
    "meaning": "钥匙",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["key的拼写和发音", "key的基本用法"],
    "usage": {
      "collocations": "a key; key ring; house key; car key; the key to",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e153",
    "word": "may",
    "phonetic": "美 [mei]",
    "pos": "",
    "meaning": "可以",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["may的拼写和发音", "may的基本用法"],
    "usage": {
      "collocations": "a may; may",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e154",
    "word": "sure",
    "phonetic": "美 [ʃuə]",
    "pos": "",
    "meaning": "当然",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["sure的拼写和发音", "sure的基本用法"],
    "usage": {
      "collocations": "a sure; sure",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e155",
    "word": "twenty-one",
    "phonetic": "",
    "pos": "",
    "meaning": "二十一",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["twenty-one的拼写和发音", "twenty-one的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e156",
    "word": "thirty",
    "phonetic": "美 [θɜ:ti:]",
    "pos": "",
    "meaning": "三十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["thirty的拼写和发音", "thirty的基本用法"],
    "usage": {
      "collocations": "three times; three days; three people; number three",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e157",
    "word": "forty",
    "phonetic": "美 [fɔ:ti:]",
    "pos": "",
    "meaning": "四十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["forty的拼写和发音", "forty的基本用法"],
    "usage": {
      "collocations": "four seasons; four times; four days; number four",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e158",
    "word": "fifty",
    "phonetic": "美 [fɪfti:，fɪfti]",
    "pos": "",
    "meaning": "五十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fifty的拼写和发音", "fifty的基本用法"],
    "usage": {
      "collocations": "five days; five people; five times; number five",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e159",
    "word": "heavy",
    "phonetic": "美 [hevi]",
    "pos": "adj.",
    "meaning": "重的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["heavy的拼写和发音", "heavy的基本用法"],
    "usage": {
      "collocations": "a heavy; heavy",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e160",
    "word": "sorry",
    "phonetic": "美 [sɔri]",
    "pos": "",
    "meaning": "对不起",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sorry的拼写和发音", "sorry的基本用法"],
    "usage": {
      "collocations": "a sorry; sorry",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e161",
    "word": "thin",
    "phonetic": "美 [θin]",
    "pos": "adj.",
    "meaning": "瘦的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["thin的拼写和发音", "thin的基本用法"],
    "usage": {
      "collocations": "a thin; thin",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e162",
    "word": "strong",
    "phonetic": "美 [strɔŋ]",
    "pos": "adj.",
    "meaning": "强壮的,",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["strong的拼写和发音", "strong的基本用法"],
    "usage": {
      "collocations": "a strong; strong",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e163",
    "word": "quiet",
    "phonetic": "美 [kwaiət]",
    "pos": "adj.",
    "meaning": "安静的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["quiet的拼写和发音", "quiet的基本用法"],
    "usage": {
      "collocations": "a quiet; quiet",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e164",
    "word": "his",
    "phonetic": "美 [hiz, ɪz]",
    "pos": "adj.",
    "meaning": "他的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["his的拼写和发音", "his的基本用法"],
    "usage": {
      "collocations": "a his; his",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e165",
    "word": "photo",
    "phonetic": "美 [fəutəu]",
    "pos": "",
    "meaning": "照片",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["photo的拼写和发音", "photo的基本用法"],
    "usage": {
      "collocations": "a photo; photo",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e166",
    "word": "has",
    "phonetic": "",
    "pos": "",
    "meaning": "[hæz有",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["has的拼写和发音", "has的基本用法"],
    "usage": {
      "collocations": "a has; has",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e167",
    "word": "name",
    "phonetic": "美 [neim]",
    "pos": "",
    "meaning": "名字",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["name的拼写和发音", "name的基本用法"],
    "usage": {
      "collocations": "a name; name",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e168",
    "word": "he",
    "phonetic": "美 [hi:]",
    "pos": "",
    "meaning": "他",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["he的拼写和发音", "he的基本用法"],
    "usage": {
      "collocations": "a he; he",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e169",
    "word": "music",
    "phonetic": "美 [mju:zik]",
    "pos": "",
    "meaning": "音乐",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["music的拼写和发音", "music的基本用法"],
    "usage": {
      "collocations": "listen to music; music class; music teacher; play music",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e170",
    "word": "science",
    "phonetic": "美 [saiəns]",
    "pos": "",
    "meaning": "科学",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["science的拼写和发音", "science的基本用法"],
    "usage": {
      "collocations": "a science; science",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e171",
    "word": "sport",
    "phonetic": "美 [spɔ:t]",
    "pos": "",
    "meaning": "运动",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["do sports做运动", "sports day运动会"],
    "usage": {
      "collocations": "do sports; sports day; sports meeting; a sports car; water sports",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e172",
    "word": "right",
    "phonetic": "美 [rait]",
    "pos": "adj.",
    "meaning": "正确的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["right的拼写和发音", "right的基本用法"],
    "usage": {
      "collocations": "a right; right",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e173",
    "word": "study",
    "phonetic": "美 [stʌdi]",
    "pos": "",
    "meaning": "学习",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["study的拼写和发音", "study的基本用法"],
    "usage": {
      "collocations": "a study; study",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e174",
    "word": "bathroom",
    "phonetic": "美 [bɑ:θrum]",
    "pos": "",
    "meaning": "浴室",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["bathroom的拼写和发音", "bathroom的基本用法"],
    "usage": {
      "collocations": "a bathroom; bathroom",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e175",
    "word": "bedroom",
    "phonetic": "美 [bedru:m, -rʊm]",
    "pos": "",
    "meaning": "卧室",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["bedroom的拼写和发音", "bedroom的基本用法"],
    "usage": {
      "collocations": "a bedroom; bedroom",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e176",
    "word": "kitchen",
    "phonetic": "美 [kitʃin]",
    "pos": "",
    "meaning": "厨房",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["kitchen的拼写和发音", "kitchen的基本用法"],
    "usage": {
      "collocations": "a kitchen; kitchen",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e177",
    "word": "fish",
    "phonetic": "美 [fiʃ]",
    "pos": "",
    "meaning": ". 鱼",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["fish单复数同形", "go fishing去钓鱼"],
    "usage": {
      "collocations": "catch fish; eat fish; fish tank; go fishing",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e178",
    "word": "here",
    "phonetic": "美 [hiə]",
    "pos": "",
    "meaning": "在这里",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["here的拼写和发音", "here的基本用法"],
    "usage": {
      "collocations": "a here; here",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e179",
    "word": "home",
    "phonetic": "美 [həum]",
    "pos": "",
    "meaning": "家",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["home的拼写和发音", "home的基本用法"],
    "usage": {
      "collocations": "a home; home",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e180",
    "word": "phone",
    "phonetic": "美 [fəun]",
    "pos": "",
    "meaning": "电话",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["phone的拼写和发音", "phone的基本用法"],
    "usage": {
      "collocations": "a phone; phone call; make a call; on the phone; phone number",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e181",
    "word": "bed",
    "phonetic": "美 [bed]",
    "pos": "",
    "meaning": "床,",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to bed去睡觉", "in bed在床上"],
    "usage": {
      "collocations": "in bed; go to bed; a big bed; a small bed; bed room; bed time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e182",
    "word": "fridge",
    "phonetic": "美 [fridʒ]",
    "pos": "",
    "meaning": "冰箱",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["fridge的拼写和发音", "fridge的基本用法"],
    "usage": {
      "collocations": "a fridge; in the fridge; open the fridge; a big fridge",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e183",
    "word": "table",
    "phonetic": "美 [teibl]",
    "pos": "",
    "meaning": "桌子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["table的拼写和发音", "table的基本用法"],
    "usage": {
      "collocations": "a table; at the table; a desk; on the table; a dinner table",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e184",
    "word": "they",
    "phonetic": "美 [ðei, ðe]",
    "pos": "",
    "meaning": "他[她, 它]们",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["they的拼写和发音", "they的基本用法"],
    "usage": {
      "collocations": "a they; they",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e185",
    "word": "open",
    "phonetic": "美 [əupən]",
    "pos": "adj.",
    "meaning": "开着的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["open的拼写和发音", "open的基本用法"],
    "usage": {
      "collocations": "open the door; open the window; open the book; open your eyes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e186",
    "word": "please",
    "phonetic": "美 [pli:z]",
    "pos": "",
    "meaning": "请",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["please的拼写和发音", "please的基本用法"],
    "usage": {
      "collocations": "a please; please",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e187",
    "word": "on",
    "phonetic": "美 [ɔn]",
    "pos": "",
    "meaning": "在…上",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["on的拼写和发音", "on的基本用法"],
    "usage": {
      "collocations": "a on; on",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e188",
    "word": "no",
    "phonetic": "美 [nəu]",
    "pos": "",
    "meaning": "不, 不是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["no的拼写和发音", "no的基本用法"],
    "usage": {
      "collocations": "a no; no",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e189",
    "word": "door",
    "phonetic": "美 [dɔ:]",
    "pos": "",
    "meaning": "门",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["open the door开门", "close the door关门"],
    "usage": {
      "collocations": "open the door; close the door; a front door; a back door; door bell",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e190",
    "word": "rice",
    "phonetic": "美 [rais]",
    "pos": "",
    "meaning": "大米",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "a big apple; very big; too big; big and small",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e191",
    "word": "noodle",
    "phonetic": "美 [nu:dl]",
    "pos": "",
    "meaning": "面条",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["noodle的拼写和发音", "noodle的基本用法"],
    "usage": {
      "collocations": "a bowl of noodles; eat noodles; instant noodles",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e192",
    "word": "beef",
    "phonetic": "美 [bi:f]",
    "pos": "",
    "meaning": "牛肉",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cow复数cows", "milk a cow挤牛奶"],
    "usage": {
      "collocations": "milk a cow; a cow farm; cow milk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e193",
    "word": "vegetable",
    "phonetic": "美 [vedʒitəbl]",
    "pos": "",
    "meaning": "蔬菜",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["vegetable的拼写和发音", "vegetable的基本用法"],
    "usage": {
      "collocations": "eat vegetables; green vegetables; fresh vegetables",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e194",
    "word": "soup",
    "phonetic": "美 [su:p]",
    "pos": "",
    "meaning": "汤",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["soup的拼写和发音", "soup的基本用法"],
    "usage": {
      "collocations": "a bowl of soup; chicken soup; tomato soup",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e195",
    "word": "have",
    "phonetic": "美 [hæv, həv, əv, v]",
    "pos": "v.",
    "meaning": "吃",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["eat breakfast吃早餐", "eat up吃光"],
    "usage": {
      "collocations": "eat breakfast; eat up; eat lunch; eat dinner; eat an apple",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e196",
    "word": "dinner",
    "phonetic": "美 [dinə]",
    "pos": "",
    "meaning": "晚餐",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["dinner的拼写和发音", "dinner的基本用法"],
    "usage": {
      "collocations": "a dinner; dinner",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e197",
    "word": "wait",
    "phonetic": "美 [weit]",
    "pos": "",
    "meaning": "等",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["wait的拼写和发音", "wait的基本用法"],
    "usage": {
      "collocations": "a wait; wait",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e198",
    "word": "egg",
    "phonetic": "美 [eɡ]",
    "pos": "",
    "meaning": "蛋",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["egg的拼写和发音", "egg的基本用法"],
    "usage": {
      "collocations": "a egg; egg",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e199",
    "word": "hungry",
    "phonetic": "美 [hʌŋɡri]",
    "pos": "adj.",
    "meaning": "饥饿的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["feel hungry感到饿", "hungry for渴望"],
    "usage": {
      "collocations": "very hungry; hungry for; feel hungry; look hungry; too hungry",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e200",
    "word": "for",
    "phonetic": "美 [fɔ:, fə]",
    "pos": "",
    "meaning": "为，给",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["give me给我", "give up放弃"],
    "usage": {
      "collocations": "give me; give back; give up; give a gift; give a hand",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e201",
    "word": "knife",
    "phonetic": "美 [naif]",
    "pos": "",
    "meaning": "刀",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["knife的拼写和发音", "knife的基本用法"],
    "usage": {
      "collocations": "a knife; knife",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e202",
    "word": "chopstick",
    "phonetic": "美 [tʃɔpstɪk]",
    "pos": "",
    "meaning": "筷子",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["chopstick的拼写和发音", "chopstick的基本用法"],
    "usage": {
      "collocations": "a chopstick; chopstick",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e203",
    "word": "spoon",
    "phonetic": "美 [spu:n]",
    "pos": "",
    "meaning": "勺子",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["spoon的拼写和发音", "spoon的基本用法"],
    "usage": {
      "collocations": "a spoon; spoon",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e204",
    "word": "plate",
    "phonetic": "美 [pleit]",
    "pos": "",
    "meaning": "盘子",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["plate的拼写和发音", "plate的基本用法"],
    "usage": {
      "collocations": "a plate; plate",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e205",
    "word": "fork",
    "phonetic": "美 [fɔ:k]",
    "pos": "",
    "meaning": "叉子",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["fork的拼写和发音", "fork的基本用法"],
    "usage": {
      "collocations": "a fork; fork",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e206",
    "word": "help",
    "phonetic": "美 [help]",
    "pos": "",
    "meaning": "帮助",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["help的拼写和发音", "help的基本用法"],
    "usage": {
      "collocations": "a help; help",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e207",
    "word": "pass",
    "phonetic": "美 [pɑ:s]",
    "pos": "",
    "meaning": "传递",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["pass的拼写和发音", "pass的基本用法"],
    "usage": {
      "collocations": "a pass; pass",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e208",
    "word": "ready",
    "phonetic": "美 [redi]",
    "pos": "",
    "meaning": "准备好了",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e209",
    "word": "try",
    "phonetic": "美 [trai]",
    "pos": "",
    "meaning": "尝试",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["try的拼写和发音", "try的基本用法"],
    "usage": {
      "collocations": "a try; try",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e210",
    "word": "show",
    "phonetic": "美 [ʃəu]",
    "pos": "",
    "meaning": "展示",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["show的拼写和发音", "show的基本用法"],
    "usage": {
      "collocations": "a show; show",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e211",
    "word": "yummy",
    "phonetic": "美 [jʌmi]",
    "pos": "adj.",
    "meaning": "好吃的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["eat breakfast吃早餐", "eat up吃光"],
    "usage": {
      "collocations": "eat breakfast; eat up; eat lunch; eat dinner; eat an apple",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e212",
    "word": "food",
    "phonetic": "美 [fu:d]",
    "pos": "n.",
    "meaning": "食物",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["food的拼写和发音", "food的基本用法"],
    "usage": {
      "collocations": "a food; food",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e213",
    "word": "use",
    "phonetic": "美 [ju:z]",
    "pos": "",
    "meaning": "使用",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["use的拼写和发音", "use的基本用法"],
    "usage": {
      "collocations": "a use; use",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e214",
    "word": "family",
    "phonetic": "美 [fæmili]",
    "pos": "",
    "meaning": "家庭",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["family的拼写和发音", "family的基本用法"],
    "usage": {
      "collocations": "a family; family member; family tree; a big family",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e215",
    "word": "parent",
    "phonetic": "美 [pɛərənt，peərənt]",
    "pos": "",
    "meaning": "父母",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["parent的拼写和发音", "parent的基本用法"],
    "usage": {
      "collocations": "my father; father's day; a good father",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e216",
    "word": "uncle",
    "phonetic": "美 [ʌŋkl]",
    "pos": "",
    "meaning": "舅舅",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["uncle的拼写和发音", "uncle的基本用法"],
    "usage": {
      "collocations": "a uncle; uncle",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e217",
    "word": "aunt",
    "phonetic": "美 [ɑ:nt]",
    "pos": "",
    "meaning": "姑姑",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["aunt的拼写和发音", "aunt的基本用法"],
    "usage": {
      "collocations": "a aunt; aunt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e218",
    "word": "baby",
    "phonetic": "美 [beibi]",
    "pos": "",
    "meaning": "婴儿",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["baby的拼写和发音", "baby的基本用法"],
    "usage": {
      "collocations": "a baby; baby sitter; baby care; a cute baby",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e219",
    "word": "people",
    "phonetic": "美 [pi:pl]",
    "pos": "n.",
    "meaning": "人",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["people的拼写和发音", "people的基本用法"],
    "usage": {
      "collocations": "a people; people",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e220",
    "word": "member",
    "phonetic": "美 [membə]",
    "pos": "",
    "meaning": "成员",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["member的拼写和发音", "member的基本用法"],
    "usage": {
      "collocations": "a member; member",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e221",
    "word": "only",
    "phonetic": "美 [əunli]",
    "pos": "",
    "meaning": "仅仅",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["only的拼写和发音", "only的基本用法"],
    "usage": {
      "collocations": "a only; only",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e222",
    "word": "puppy",
    "phonetic": "美 [pʌpi]",
    "pos": "",
    "meaning": "小狗",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["dog的复数是dogs", "hot dog热狗是合成词"],
    "usage": {
      "collocations": "a pet dog; walk the dog; dog food; a police dog",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e223",
    "word": "gee",
    "phonetic": "美 [dʒi:]",
    "pos": "",
    "meaning": "用以表示惊奇、赞赏等",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["gee的拼写和发音", "gee的基本用法"],
    "usage": {
      "collocations": "a gee; gee",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e224",
    "word": "come",
    "phonetic": "美 [kʌm]",
    "pos": "v.",
    "meaning": "来",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["come in进来", "come from来自"],
    "usage": {
      "collocations": "come in; come back; come from; come on; come here",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e225",
    "word": "who",
    "phonetic": "美 [hu:, hu]",
    "pos": "",
    "meaning": "谁",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["who的拼写和发音", "who的基本用法"],
    "usage": {
      "collocations": "a who; who",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e226",
    "word": "driver",
    "phonetic": "美 [draivə]",
    "pos": "",
    "meaning": "司机",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["driver的拼写和发音", "driver的基本用法"],
    "usage": {
      "collocations": "a driver; bus driver; taxi driver; a good driver",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e227",
    "word": "doctor",
    "phonetic": "美 [dɔktə]",
    "pos": "",
    "meaning": "医生",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["doctor的拼写和发音", "doctor的基本用法"],
    "usage": {
      "collocations": "a doctor; see a doctor; doctor's office; a good doctor",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e228",
    "word": "farmer",
    "phonetic": "美 [fɑ:mə]",
    "pos": "",
    "meaning": "农民",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["farmer的拼写和发音", "farmer的基本用法"],
    "usage": {
      "collocations": "a farmer; farmer's market; a poor farmer",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e229",
    "word": "nurse",
    "phonetic": "美 [nə:s]",
    "pos": "",
    "meaning": "护士",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["nurse的拼写和发音", "nurse的基本用法"],
    "usage": {
      "collocations": "a nurse; a good nurse; nurse room",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e230",
    "word": "young",
    "phonetic": "美 [jʌŋ]",
    "pos": "adj.",
    "meaning": "年轻的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["young的拼写和发音", "young的基本用法"],
    "usage": {
      "collocations": "a year; this year; last year; next year; new year; year book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e231",
    "word": "playground",
    "phonetic": "美 ['pleiɡraund]",
    "pos": "",
    "meaning": "操场",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["playground的拼写和发音", "playground的基本用法"],
    "usage": {
      "collocations": "on the playground; in the playground; playground games",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e232",
    "word": "garden",
    "phonetic": "美 ['ɡɑ:dn]",
    "pos": "",
    "meaning": "花园",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["garden的拼写和发音", "garden的基本用法"],
    "usage": {
      "collocations": "a garden; in the garden; a flower garden; garden party",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e233",
    "word": "office",
    "phonetic": "美 ['ɔfis]",
    "pos": "",
    "meaning": "办公室",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["office的拼写和发音", "office的基本用法"],
    "usage": {
      "collocations": "a office; office",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e234",
    "word": "library",
    "phonetic": "美 ['laibrəri]",
    "pos": "",
    "meaning": "图书馆",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e235",
    "word": "canteen",
    "phonetic": "美 [kæn'ti:n]",
    "pos": "",
    "meaning": "食堂",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["canteen的拼写和发音", "canteen的基本用法"],
    "usage": {
      "collocations": "a canteen; canteen",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e236",
    "word": "first",
    "phonetic": "美 [fə:st]",
    "pos": "",
    "meaning": "第一",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["first的拼写和发音", "first的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e237",
    "word": "floor",
    "phonetic": "美 [flɔ: (r]",
    "pos": "",
    "meaning": "] 层（楼）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["floor的拼写和发音", "floor的基本用法"],
    "usage": {
      "collocations": "a floor; floor",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e238",
    "word": "welcome",
    "phonetic": "美 ['welkəm]",
    "pos": "",
    "meaning": "欢迎",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["welcome的拼写和发音", "welcome的基本用法"],
    "usage": {
      "collocations": "a welcome; welcome",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e239",
    "word": "to",
    "phonetic": "",
    "pos": "",
    "meaning": "给，对",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["give me给我", "give up放弃"],
    "usage": {
      "collocations": "give me; give back; give up; give a gift; give a hand",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e240",
    "word": "our",
    "phonetic": "美 ['auə]",
    "pos": "adj.",
    "meaning": "我们的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["our的拼写和发音", "our的基本用法"],
    "usage": {
      "collocations": "a our; our",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e241",
    "word": "many",
    "phonetic": "美 ['meni]",
    "pos": "adj.",
    "meaning": "许多的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["many的拼写和发音", "many的基本用法"],
    "usage": {
      "collocations": "how many; a lot of; many thanks; many people; too many",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e242",
    "word": "visitor",
    "phonetic": "美 ['vizitə]",
    "pos": "n.",
    "meaning": "客人;参观者",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["visitor的拼写和发音", "visitor的基本用法"],
    "usage": {
      "collocations": "a visitor; visitor",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e243",
    "word": "there",
    "phonetic": "美 [ðεə]",
    "pos": "",
    "meaning": "哪儿;那里",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["there的拼写和发音", "there的基本用法"],
    "usage": {
      "collocations": "a there; there",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e244",
    "word": "class",
    "phonetic": "美 [klɑ:s]",
    "pos": "",
    "meaning": "班级;课程",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["class的拼写和发音", "class的基本用法"],
    "usage": {
      "collocations": "have a class; in class; after class; an English class",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e245",
    "word": "lunch",
    "phonetic": "美 [lʌntʃ]",
    "pos": "",
    "meaning": "午餐",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["lunch的拼写和发音", "lunch的基本用法"],
    "usage": {
      "collocations": "a lunch; lunch",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e246",
    "word": "at",
    "phonetic": "",
    "pos": "",
    "meaning": "在",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["at的拼写和发音", "at的基本用法"],
    "usage": {
      "collocations": "a at; at",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e247",
    "word": "this way",
    "phonetic": "美 [wei]",
    "pos": "",
    "meaning": "这边",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["this way的拼写和发音", "this way的基本用法"],
    "usage": {
      "collocations": "a this way; this way",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e248",
    "word": "beautiful",
    "phonetic": "美 ['bju:tiful]",
    "pos": "adj.",
    "meaning": "美丽的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["beautiful的拼写和发音", "beautiful的基本用法"],
    "usage": {
      "collocations": "beautiful flower; very beautiful; a beautiful girl; beautiful day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e249",
    "word": "computer",
    "phonetic": "美 [kəm'pju:tə]",
    "pos": "",
    "meaning": "计算机",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["computer的拼写和发音", "computer的基本用法"],
    "usage": {
      "collocations": "a computer; computer",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e250",
    "word": "board",
    "phonetic": "美 [bɔ:d]",
    "pos": "v.",
    "meaning": "写字板",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["write a letter写信", "write down写下"],
    "usage": {
      "collocations": "write a letter; write down; write well; write a story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e251",
    "word": "fan",
    "phonetic": "美 [fæn]",
    "pos": "",
    "meaning": "扇子；电扇",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fan的拼写和发音", "fan的基本用法"],
    "usage": {
      "collocations": "electric; turn on the light; a power cut; electric fan",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e252",
    "word": "light",
    "phonetic": "美 ['lait]",
    "pos": "",
    "meaning": "灯",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["turn on the light开灯", "turn off the light关灯"],
    "usage": {
      "collocations": "a lamp; turn on the light; turn off the light; a light bulb",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e253",
    "word": "is",
    "phonetic": "",
    "pos": "",
    "meaning": "是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["is的拼写和发音", "is的基本用法"],
    "usage": {
      "collocations": "a is; is",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e254",
    "word": "that",
    "phonetic": "美 [ðæt]",
    "pos": "",
    "meaning": "那;那个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["that的拼写和发音", "that的基本用法"],
    "usage": {
      "collocations": "a that; that",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e255",
    "word": "art",
    "phonetic": "美 [ɑ:t]",
    "pos": "",
    "meaning": "绘画；艺术；美术",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["art的拼写和发音", "art的基本用法"],
    "usage": {
      "collocations": "art class; art teacher; art room; a piece of art",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e256",
    "word": "art room",
    "phonetic": "美 [ɑ:t]",
    "pos": "",
    "meaning": "[ru:m] 绘画教室",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["art room的拼写和发音", "art room的基本用法"],
    "usage": {
      "collocations": "in the classroom; clean the classroom; a big classroom",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e257",
    "word": "washroom",
    "phonetic": "美 ['wɔʃrum]",
    "pos": "",
    "meaning": "卫生间",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["washroom的拼写和发音", "washroom的基本用法"],
    "usage": {
      "collocations": "a washroom; washroom",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e258",
    "word": "gym",
    "phonetic": "美 [dʒim]",
    "pos": "",
    "meaning": "体育馆",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["gym的拼写和发音", "gym的基本用法"],
    "usage": {
      "collocations": "PE class; PE teacher; have PE; sports day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e259",
    "word": "TV",
    "phonetic": "",
    "pos": "",
    "meaning": "room电视机房",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["watch TV看电视", "TV program电视节目"],
    "usage": {
      "collocations": "watch TV; TV show; TV program; turn on the TV; TV set",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e260",
    "word": "second",
    "phonetic": "美 ['sekənd]",
    "pos": "",
    "meaning": "第二",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["second的拼写和发音", "second的基本用法"],
    "usage": {
      "collocations": "two or three; two times; two days; number two",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e261",
    "word": "cool",
    "phonetic": "美 [ku:]",
    "pos": "adj.",
    "meaning": "订好的;酷的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e262",
    "word": "picture",
    "phonetic": "美 ['piktʃə]",
    "pos": "",
    "meaning": "图画",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["picture的拼写和发音", "picture的基本用法"],
    "usage": {
      "collocations": "draw a picture; draw well; draw a line; draw a flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e263",
    "word": "wall",
    "phonetic": "美 [wɔ:l]",
    "pos": "",
    "meaning": "墙",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["wall的拼写和发音", "wall的基本用法"],
    "usage": {
      "collocations": "a wall; on the wall; wall clock; a picture on the wall",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e264",
    "word": "yes",
    "phonetic": "美 [jes]",
    "pos": "adj.",
    "meaning": "是的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["yes的拼写和发音", "yes的基本用法"],
    "usage": {
      "collocations": "a yes; yes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e265",
    "word": "it",
    "phonetic": "美 [it]",
    "pos": "",
    "meaning": "它",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["it的拼写和发音", "it的基本用法"],
    "usage": {
      "collocations": "a it; it",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e266",
    "word": "music class",
    "phonetic": "美 [klɑ:s]",
    "pos": "",
    "meaning": "音乐课",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["music class的拼写和发音", "music class的基本用法"],
    "usage": {
      "collocations": "have a class; in class; after class; an English class",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e267",
    "word": "breakfast",
    "phonetic": "美 ['brekfəst]",
    "pos": "",
    "meaning": "早餐",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["breakfast的拼写和发音", "breakfast的基本用法"],
    "usage": {
      "collocations": "a breakfast; breakfast",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e268",
    "word": "over",
    "phonetic": "美 ['əuvə]",
    "pos": "",
    "meaning": "结束",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["over的拼写和发音", "over的基本用法"],
    "usage": {
      "collocations": "a over; over",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e269",
    "word": "go",
    "phonetic": "美 [gəu]",
    "pos": "v.",
    "meaning": "去",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "go to school; go home; go shopping; go away; let's go",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e270",
    "word": "go home",
    "phonetic": "美 [həum]",
    "pos": "",
    "meaning": "回家",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go home的拼写和发音", "go home的基本用法"],
    "usage": {
      "collocations": "a go home; go home",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e271",
    "word": "now",
    "phonetic": "美 [nau]",
    "pos": "",
    "meaning": "现在",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["now的拼写和发音", "now的基本用法"],
    "usage": {
      "collocations": "a now; now",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e272",
    "word": "just a minute",
    "phonetic": "美 ['minit]",
    "pos": "",
    "meaning": "再多一会",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["just a minute的拼写和发音", "just a minute的基本用法"],
    "usage": {
      "collocations": "how many; a lot of; many thanks; many people; too many",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e273",
    "word": "kid",
    "phonetic": "美 [kid]",
    "pos": "",
    "meaning": "小孩;孩子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a child; children; a good kid; kid's toys",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e274",
    "word": "run",
    "phonetic": "美 [rʌn]",
    "pos": "v.",
    "meaning": "跑",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["run的现在分词是running", "run away逃跑"],
    "usage": {
      "collocations": "run fast; run after; run away; run to school; a running race",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e275",
    "word": "what",
    "phonetic": "美 [wɔt]",
    "pos": "",
    "meaning": "什么",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["what的拼写和发音", "what的基本用法"],
    "usage": {
      "collocations": "a what; what",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e276",
    "word": "time",
    "phonetic": "美 [taɪm]",
    "pos": "",
    "meaning": "时间",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["time的拼写和发音", "time的基本用法"],
    "usage": {
      "collocations": "a time; time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e277",
    "word": "get",
    "phonetic": "美 [ɡet]",
    "pos": "",
    "meaning": "得到 获得",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["get的拼写和发音", "get的基本用法"],
    "usage": {
      "collocations": "a get; get",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e278",
    "word": "get up",
    "phonetic": "美 [ɡet]",
    "pos": "",
    "meaning": "[ ʌp ] 起床",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to bed去睡觉", "in bed在床上"],
    "usage": {
      "collocations": "in bed; go to bed; a big bed; a small bed; bed room; bed time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e279",
    "word": "go to school",
    "phonetic": "美 [sku:l]",
    "pos": "",
    "meaning": "上学",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["go to school的拼写和发音", "go to school的基本用法"],
    "usage": {
      "collocations": "a go to school; go to school",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e280",
    "word": "hurry",
    "phonetic": "美 ['hʌri]",
    "pos": "",
    "meaning": "抓紧;赶快",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fast的同义词是quick", "fast food快餐"],
    "usage": {
      "collocations": "very fast; fast food; run fast; a fast train; fast and slow",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e281",
    "word": "china",
    "phonetic": "美 ['tʃainə]",
    "pos": "n.",
    "meaning": "n 中国;瓷器",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["china的拼写和发音", "china的基本用法"],
    "usage": {
      "collocations": "in China; China town; a map of China; Chinese food",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e282",
    "word": "England",
    "phonetic": "美 ['iŋglənd]",
    "pos": "",
    "meaning": "n英格兰;英国",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["England的拼写和发音", "England的基本用法"],
    "usage": {
      "collocations": "in England; English man; go to England",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e283",
    "word": "jacket",
    "phonetic": "美 ['dʒækit]",
    "pos": "",
    "meaning": "夹克衫",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["jacket的拼写和发音", "jacket的基本用法"],
    "usage": {
      "collocations": "a shirt; a T-shirt; wear a shirt; a white shirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e284",
    "word": "shirt",
    "phonetic": "美 [ʃə:t]",
    "pos": "",
    "meaning": "衬衫",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["shirt的拼写和发音", "shirt的基本用法"],
    "usage": {
      "collocations": "a shirt; a T-shirt; wear a shirt; a white shirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e285",
    "word": "skirt",
    "phonetic": "美 [skə:t]",
    "pos": "",
    "meaning": "裙子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["skirt的拼写和发音", "skirt的基本用法"],
    "usage": {
      "collocations": "a skirt; a dress; wear a skirt; a long skirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e286",
    "word": "dress",
    "phonetic": "美 [dres]",
    "pos": "",
    "meaning": "连衣裙",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["dress的拼写和发音", "dress的基本用法"],
    "usage": {
      "collocations": "a skirt; a dress; wear a skirt; a long skirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e287",
    "word": "sweater",
    "phonetic": "美 ['swetə]",
    "pos": "",
    "meaning": "毛衣",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sweater的拼写和发音", "sweater的基本用法"],
    "usage": {
      "collocations": "a sweater; wear a sweater; a warm sweater; knit a sweater",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e288",
    "word": "T-shirt",
    "phonetic": "",
    "pos": "",
    "meaning": "T恤衫",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["T-shirt的拼写和发音", "T-shirt的基本用法"],
    "usage": {
      "collocations": "a shirt; a T-shirt; wear a shirt; a white shirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e289",
    "word": "whose",
    "phonetic": "美 [hu:z]",
    "pos": "adj.",
    "meaning": "谁的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["whose的拼写和发音", "whose的基本用法"],
    "usage": {
      "collocations": "a whose; whose",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e290",
    "word": "green beans",
    "phonetic": "美 [gri:n]",
    "pos": "",
    "meaning": "[bi:ns] 绿豆",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["green light绿灯", "green tea绿茶"],
    "usage": {
      "collocations": "green tree; in green; green light; green tea",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e291",
    "word": "not",
    "phonetic": "美 [nɔt]",
    "pos": "adj.",
    "meaning": "不;不是的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["not的拼写和发音", "not的基本用法"],
    "usage": {
      "collocations": "a not; not",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e292",
    "word": "jeans",
    "phonetic": "美 [dʒi:nz]",
    "pos": "",
    "meaning": "牛仔裤",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cow复数cows", "milk a cow挤牛奶"],
    "usage": {
      "collocations": "milk a cow; a cow farm; cow milk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e293",
    "word": "pants",
    "phonetic": "美 [pænts]",
    "pos": "",
    "meaning": "长裤",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["long的反义词是short", "long hair长发"],
    "usage": {
      "collocations": "a pair of pants; long pants; short pants; blue jeans",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e294",
    "word": "parents",
    "phonetic": "美 ['pɛərənts]",
    "pos": "",
    "meaning": "父母亲",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["parents的拼写和发音", "parents的基本用法"],
    "usage": {
      "collocations": "my father; father's day; a good father",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e295",
    "word": "socks",
    "phonetic": "美 [sɔks]",
    "pos": "",
    "meaning": "袜子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["socks的拼写和发音", "socks的基本用法"],
    "usage": {
      "collocations": "a pair of socks; put on socks; warm socks",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e296",
    "word": "shoes",
    "phonetic": "美 [ʃuːz]",
    "pos": "",
    "meaning": "鞋子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["shoes的拼写和发音", "shoes的基本用法"],
    "usage": {
      "collocations": "a pair of shoes; put on shoes; take off shoes; new shoes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e297",
    "word": "shorts",
    "phonetic": "美 [ʃɔ:ts]",
    "pos": "",
    "meaning": "短裤",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["shorts的拼写和发音", "shorts的基本用法"],
    "usage": {
      "collocations": "a pair of pants; long pants; short pants; blue jeans",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e298",
    "word": "these",
    "phonetic": "美 [ði:z]",
    "pos": "",
    "meaning": "这些",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["these的拼写和发音", "these的基本用法"],
    "usage": {
      "collocations": "a these; these",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e299",
    "word": "so",
    "phonetic": "美 ['səu]",
    "pos": "",
    "meaning": "如此；那样",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["so的拼写和发音", "so的基本用法"],
    "usage": {
      "collocations": "a so; so",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e300",
    "word": "those",
    "phonetic": "美 [ðəuz]",
    "pos": "",
    "meaning": "那些",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["those的拼写和发音", "those的基本用法"],
    "usage": {
      "collocations": "a those; those",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e301",
    "word": "but",
    "phonetic": "美 [bʌt]",
    "pos": "",
    "meaning": "但是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["but的拼写和发音", "but的基本用法"],
    "usage": {
      "collocations": "a but; but",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e302",
    "word": "what for",
    "phonetic": "美 [wɔt]",
    "pos": "",
    "meaning": "为什么",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["what for的拼写和发音", "what for的基本用法"],
    "usage": {
      "collocations": "a what for; what for",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e303",
    "word": "neighbour",
    "phonetic": "美 ['neibə]",
    "pos": "",
    "meaning": "邻居",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["neighbour的拼写和发音", "neighbour的基本用法"],
    "usage": {
      "collocations": "a neighbour; neighbour",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e304",
    "word": "warm",
    "phonetic": "美 [wɔ:m]",
    "pos": "adj.",
    "meaning": "暖和的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["warm的拼写和发音", "warm的基本用法"],
    "usage": {
      "collocations": "warm water; warm up; a warm day; warm clothes; spring warm",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e305",
    "word": "cold",
    "phonetic": "美 [kəuld]",
    "pos": "adj.",
    "meaning": "寒冷的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["catch a cold感冒", "cold water冷水"],
    "usage": {
      "collocations": "very cold; cold water; cold weather; a cold day; catch a cold",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e306",
    "word": "weather",
    "phonetic": "美 ['weðə]",
    "pos": "",
    "meaning": "天气",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["weather的拼写和发音", "weather的基本用法"],
    "usage": {
      "collocations": "a weather; weather",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e307",
    "word": "weather report",
    "phonetic": "美 [ri'pɔ:t]",
    "pos": "",
    "meaning": "天气预报",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["weather report的拼写和发音", "weather report的基本用法"],
    "usage": {
      "collocations": "a weather report; weather report",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e308",
    "word": "wear",
    "phonetic": "美 [wεə]",
    "pos": "v.",
    "meaning": "v. 穿",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["wear的拼写和发音", "wear的基本用法"],
    "usage": {
      "collocations": "a wear; wear",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e309",
    "word": "today",
    "phonetic": "美 [tə'dei]",
    "pos": "",
    "meaning": "今天",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["today is...今天是...", "today's news今日新闻"],
    "usage": {
      "collocations": "today; today is; today's news; today and tomorrow",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e310",
    "word": "put",
    "phonetic": "",
    "pos": "",
    "meaning": "on穿上",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["put的拼写和发音", "put的基本用法"],
    "usage": {
      "collocations": "a put; put",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e311",
    "word": "play",
    "phonetic": "美 [plei]",
    "pos": "",
    "meaning": "玩,踢",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["play with和...玩", "play games玩游戏"],
    "usage": {
      "collocations": "kick a ball; kick off; kick the door",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e312",
    "word": "football",
    "phonetic": "美 ['futbɔ:l]",
    "pos": "",
    "meaning": "足球",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["football的拼写和发音", "football的基本用法"],
    "usage": {
      "collocations": "a ball; play ball; ball game; foot ball; basket ball",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e313",
    "word": "rainy",
    "phonetic": "美 ['reini]",
    "pos": "adj.",
    "meaning": "下雨的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["rain y day雨天", "rain coat雨衣"],
    "usage": {
      "collocations": "heavy rain; light rain; rain drop; rain coat; rain y day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e314",
    "word": "rain",
    "phonetic": "美 [rein]",
    "pos": "",
    "meaning": "n雨vi下雨",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["rain y day雨天", "rain coat雨衣"],
    "usage": {
      "collocations": "heavy rain; light rain; rain drop; rain coat; rain y day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e315",
    "word": "snowy",
    "phonetic": "美 ['snəui]",
    "pos": "adj.",
    "meaning": "下雪的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["snow man雪人", "a snowy day下雪天"],
    "usage": {
      "collocations": "white snow; snow man; snow ball; a snowy day; play with snow",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e316",
    "word": "snow",
    "phonetic": "美 [snəu]",
    "pos": "",
    "meaning": "n雪;vi下雪",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["snow man雪人", "a snowy day下雪天"],
    "usage": {
      "collocations": "white snow; snow man; snow ball; a snowy day; play with snow",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e317",
    "word": "windy",
    "phonetic": "美 ['windi]",
    "pos": "adj.",
    "meaning": "有风的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e318",
    "word": "wind",
    "phonetic": "美 [wind]",
    "pos": "",
    "meaning": "n风",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e319",
    "word": "cloudy",
    "phonetic": "美 ['klaudi]",
    "pos": "adj.",
    "meaning": "多云的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cloudy的拼写和发音", "cloudy的基本用法"],
    "usage": {
      "collocations": "a cloud; white clouds; a dark cloud; cloud y sky",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e320",
    "word": "cloud",
    "phonetic": "美 [klaud]",
    "pos": "",
    "meaning": "云",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cloud的拼写和发音", "cloud的基本用法"],
    "usage": {
      "collocations": "a cloud; white clouds; a dark cloud; cloud y sky",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e321",
    "word": "sunny",
    "phonetic": "美 ['sʌni]",
    "pos": "adj.",
    "meaning": "晴朗的",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sunny的拼写和发音", "sunny的基本用法"],
    "usage": {
      "collocations": "a sunny; sunny",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e322",
    "word": "sun",
    "phonetic": "美 [sʌn]",
    "pos": "",
    "meaning": "太阳",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sun flower向日葵", "sun glasses太阳镜"],
    "usage": {
      "collocations": "the sun; sun flower; sun glasses; sun shine; in the sun",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e323",
    "word": "hello",
    "phonetic": "美 [hə'ləu]",
    "pos": "",
    "meaning": "喂，你好(打电话用语)",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["play basketball打篮球", "play the piano弹钢琴"],
    "usage": {
      "collocations": "play ball; play games; play football; play the piano; play with",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e324",
    "word": "hi",
    "phonetic": "美 [hai]",
    "pos": "",
    "meaning": "喂，你",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["hi的拼写和发音", "hi的基本用法"],
    "usage": {
      "collocations": "a hi; hi",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e325",
    "word": "not much",
    "phonetic": "美 [mʌtʃ]",
    "pos": "",
    "meaning": "没什么",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["not much的拼写和发音", "not much的基本用法"],
    "usage": {
      "collocations": "a not much; not much",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e326",
    "word": "New",
    "phonetic": "",
    "pos": "",
    "meaning": "York纽约",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["New的拼写和发音", "New的基本用法"],
    "usage": {
      "collocations": "a New; New",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e327",
    "word": "matter",
    "phonetic": "美 ['mætə]",
    "pos": "",
    "meaning": "事情;麻烦",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["matter的拼写和发音", "matter的基本用法"],
    "usage": {
      "collocations": "a matter; matter",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e328",
    "word": "close",
    "phonetic": "美 [kləuz]",
    "pos": "",
    "meaning": "关；关上",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["close的拼写和发音", "close的基本用法"],
    "usage": {
      "collocations": "close the door; close the window; close the book; turn off",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e329",
    "word": "bye",
    "phonetic": "美 [bai]",
    "pos": "",
    "meaning": "再见(口语)",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["bye的拼写和发音", "bye的基本用法"],
    "usage": {
      "collocations": "a bye; bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e330",
    "word": "colourful",
    "phonetic": "美 ['kʌləful]",
    "pos": "adj.",
    "meaning": "色彩丰富的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["colourful的拼写和发音", "colourful的基本用法"],
    "usage": {
      "collocations": "a colourful; colourful",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e331",
    "word": "pretty",
    "phonetic": "美 ['priti]",
    "pos": "adj.",
    "meaning": "漂亮的;可爱的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["pretty的拼写和发音", "pretty的基本用法"],
    "usage": {
      "collocations": "love you; fall in love; love song; my love; love story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e332",
    "word": "cheap",
    "phonetic": "美 [tʃi:p]",
    "pos": "adj.",
    "meaning": "便宜的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["cheap的拼写和发音", "cheap的基本用法"],
    "usage": {
      "collocations": "a cheap; cheap",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e333",
    "word": "expensive",
    "phonetic": "美 [iks'pensiv]",
    "pos": "adj.",
    "meaning": "昂贵的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["expensive的拼写和发音", "expensive的基本用法"],
    "usage": {
      "collocations": "a expensive; expensive",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e334",
    "word": "sixty",
    "phonetic": "美 ['siksti(:]",
    "pos": "",
    "meaning": "] 六十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sixty的拼写和发音", "sixty的基本用法"],
    "usage": {
      "collocations": "six days; six people; six times; number six",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e335",
    "word": "seventy",
    "phonetic": "美 ['sevənti]",
    "pos": "",
    "meaning": "七十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["seventy的拼写和发音", "seventy的基本用法"],
    "usage": {
      "collocations": "seven days; seven people; a week has seven days",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e336",
    "word": "hundred",
    "phonetic": "美 ['hʌndrəd]",
    "pos": "",
    "meaning": "百",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["hundred的拼写和发音", "hundred的基本用法"],
    "usage": {
      "collocations": "one hundred; hundreds of; a hundred people",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e337",
    "word": "assistant",
    "phonetic": "美 [ə'sistənt]",
    "pos": "",
    "meaning": "售货员",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["assistant的拼写和发音", "assistant的基本用法"],
    "usage": {
      "collocations": "a assistant; assistant",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e338",
    "word": "ninety-nine",
    "phonetic": "美 ['nainti]",
    "pos": "",
    "meaning": "九十九",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["ninety-nine的拼写和发音", "ninety-nine的基本用法"],
    "usage": {
      "collocations": "nine days; nine people; nine times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e339",
    "word": "sneakers",
    "phonetic": "",
    "pos": "",
    "meaning": "['sni:kəz]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["sneakers的拼写和发音", "sneakers的基本用法"],
    "usage": {
      "collocations": "a sneakers; sneakers",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e340",
    "word": "slippers",
    "phonetic": "美 ['slipə]",
    "pos": "",
    "meaning": "拖鞋",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["slippers的拼写和发音", "slippers的基本用法"],
    "usage": {
      "collocations": "a pair of shoes; put on shoes; take off shoes; new shoes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e341",
    "word": "sandals",
    "phonetic": "美 ['sandl]",
    "pos": "",
    "meaning": "凉鞋",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sandals的拼写和发音", "sandals的基本用法"],
    "usage": {
      "collocations": "a pair of shoes; put on shoes; take off shoes; new shoes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e342",
    "word": "boots",
    "phonetic": "美 [bu:ts]",
    "pos": "",
    "meaning": "靴子",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["boots的拼写和发音", "boots的基本用法"],
    "usage": {
      "collocations": "a boots; boots",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e343",
    "word": "want",
    "phonetic": "美 [wɔnt]",
    "pos": "",
    "meaning": "想要",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["want的拼写和发音", "want的基本用法"],
    "usage": {
      "collocations": "a want; want",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e344",
    "word": "pair",
    "phonetic": "美 [pεə]",
    "pos": "",
    "meaning": "一双;一对",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["pair的拼写和发音", "pair的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e345",
    "word": "a",
    "phonetic": "",
    "pos": "",
    "meaning": "pair of一双",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["a的拼写和发音", "a的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e346",
    "word": "for  for",
    "phonetic": "美 [fɔ: (r]",
    "pos": "",
    "meaning": "] [ fɔ(r)] 为 ；给",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["give me给我", "give up放弃"],
    "usage": {
      "collocations": "give me; give back; give up; give a gift; give a hand",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e347",
    "word": "son",
    "phonetic": "美 [sʌn]",
    "pos": "",
    "meaning": "儿子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["son的拼写和发音", "son的基本用法"],
    "usage": {
      "collocations": "a son; son and daughter; their son",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e348",
    "word": "size",
    "phonetic": "美 [saiz]",
    "pos": "",
    "meaning": "尺码",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["size的拼写和发音", "size的基本用法"],
    "usage": {
      "collocations": "a size; size",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e349",
    "word": "all right",
    "phonetic": "美 [ɔ:l]",
    "pos": "adj.",
    "meaning": "[ rait ]好吧；好的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e350",
    "word": "take",
    "phonetic": "美 [teik]",
    "pos": "",
    "meaning": "买",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["buy a book买书", "buy的过去式是bought"],
    "usage": {
      "collocations": "buy a book; buy food; buy a gift; go shopping; buy a ticket",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e351",
    "word": "them",
    "phonetic": "美 [ðem]",
    "pos": "",
    "meaning": "它（他、她）们",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["them的拼写和发音", "them的基本用法"],
    "usage": {
      "collocations": "a them; them",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e352",
    "word": "are",
    "phonetic": "美 [ɑ:(r]",
    "pos": "",
    "meaning": "] 是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["are的拼写和发音", "are的基本用法"],
    "usage": {
      "collocations": "a are; are",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e353",
    "word": "sheep",
    "phonetic": "美 [ʃip]",
    "pos": "",
    "meaning": "绵羊",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sheep单复数同形", "a flock of sheep一群羊"],
    "usage": {
      "collocations": "a little sheep; sheep farm; a flock of sheep",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e354",
    "word": "horse",
    "phonetic": "美 [hɔ:s]",
    "pos": "",
    "meaning": "马",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["horse复数horses", "ride a horse骑马"],
    "usage": {
      "collocations": "ride a horse; a white horse; horse riding",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e355",
    "word": "hen",
    "phonetic": "美 [hen]",
    "pos": "",
    "meaning": "母鸡",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["hen的拼写和发音", "hen的基本用法"],
    "usage": {
      "collocations": "my mother; mother's day; a good mother",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e356",
    "word": "lamb",
    "phonetic": "美 [læm]",
    "pos": "",
    "meaning": "小羊;羔羊",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sheep单复数同形", "a flock of sheep一群羊"],
    "usage": {
      "collocations": "a little sheep; sheep farm; a flock of sheep",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e357",
    "word": "goat",
    "phonetic": "美 [ɡəut]",
    "pos": "",
    "meaning": "山羊",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sheep单复数同形", "a flock of sheep一群羊"],
    "usage": {
      "collocations": "a little sheep; sheep farm; a flock of sheep",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e358",
    "word": "cow",
    "phonetic": "美 [kau]",
    "pos": "",
    "meaning": "奶牛",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["cow复数cows", "milk a cow挤牛奶"],
    "usage": {
      "collocations": "milk a cow; a cow farm; cow milk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e359",
    "word": "farm",
    "phonetic": "美 [fɑ:m]",
    "pos": "n.",
    "meaning": ". n. 农场,农田",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["farm的拼写和发音", "farm的基本用法"],
    "usage": {
      "collocations": "on the farm; a farm house; farm animals; a pig farm",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e360",
    "word": "donkey",
    "phonetic": "美 ['dɔŋki]",
    "pos": "",
    "meaning": "驴子",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["donkey的拼写和发音", "donkey的基本用法"],
    "usage": {
      "collocations": "a donkey; donkey",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e361",
    "word": "tomoto",
    "phonetic": "美 [tə'ma:təu]",
    "pos": "",
    "meaning": "西红柿",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["red light红灯", "in red穿红色"],
    "usage": {
      "collocations": "red apple; in red; red light; a red flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e362",
    "word": "cucumber",
    "phonetic": "美 ['kju:kʌmbə]",
    "pos": "",
    "meaning": "黄瓜",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["cucumber的拼写和发音", "cucumber的基本用法"],
    "usage": {
      "collocations": "yellow sun; in yellow; a yellow flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e363",
    "word": "potato",
    "phonetic": "美 [pə'teitəu]",
    "pos": "",
    "meaning": "土豆",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["potato的拼写和发音", "potato的基本用法"],
    "usage": {
      "collocations": "a potato; potato",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e364",
    "word": "onion",
    "phonetic": "美 ['ʌnjən]",
    "pos": "",
    "meaning": "洋葱",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["onion的拼写和发音", "onion的基本用法"],
    "usage": {
      "collocations": "a onion; onion",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e365",
    "word": "carrot",
    "phonetic": "美 ['kærət]",
    "pos": "",
    "meaning": "胡萝卜",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["carrot的拼写和发音", "carrot的基本用法"],
    "usage": {
      "collocations": "a carrot; carrot",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e366",
    "word": "fresh",
    "phonetic": "美 [freʃ]",
    "pos": "adj.",
    "meaning": "新鲜的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["fresh的拼写和发音", "fresh的基本用法"],
    "usage": {
      "collocations": "a new book; very new; new and old; Happy New Year",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e367",
    "word": "funny",
    "phonetic": "美 ['fʌni]",
    "pos": "adj.",
    "meaning": "滑稽可笑的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["funny的拼写和发音", "funny的基本用法"],
    "usage": {
      "collocations": "laugh at; a big smile; smile at; laugh loudly",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e368",
    "word": "kind",
    "phonetic": "美 [kaind]",
    "pos": "adj.",
    "meaning": "和蔼的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["kind的拼写和发音", "kind的基本用法"],
    "usage": {
      "collocations": "a kind; kind",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e369",
    "word": "old",
    "phonetic": "美 [əuld]",
    "pos": "adj.",
    "meaning": "年老的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["old的拼写和发音", "old的基本用法"],
    "usage": {
      "collocations": "a year; this year; last year; next year; new year; year book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e370",
    "word": "Mr",
    "phonetic": "美 ['mistə]",
    "pos": "",
    "meaning": "先生",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["Mr的拼写和发音", "Mr的基本用法"],
    "usage": {
      "collocations": "a Mr; Mr",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e371",
    "word": "from",
    "phonetic": "美 [frɔm]",
    "pos": "v.",
    "meaning": "从;来自",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["come in进来", "come from来自"],
    "usage": {
      "collocations": "come in; come back; come from; come on; come here",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e372",
    "word": "Canada",
    "phonetic": "美 ['kænədə]",
    "pos": "",
    "meaning": "加拿大",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "take a bus; take away; take back; take care; take off",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e373",
    "word": "know",
    "phonetic": "美 [nəu]",
    "pos": "",
    "meaning": "知道",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["know的拼写和发音", "know的基本用法"],
    "usage": {
      "collocations": "a know; know",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e374",
    "word": "principal",
    "phonetic": "美 ['prinsəpəl]",
    "pos": "",
    "meaning": "校长",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["long的反义词是short", "long hair长发"],
    "usage": {
      "collocations": "long hair; a long ruler; very long; too long; a long time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e375",
    "word": "university",
    "phonetic": "",
    "pos": "",
    "meaning": "tudent大学生",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["student复数students", "a good student好学生"],
    "usage": {
      "collocations": "a student; good student; student card; a new student",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e376",
    "word": "strict",
    "phonetic": "美 [strikt]",
    "pos": "adj.",
    "meaning": "严格的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["strict的拼写和发音", "strict的基本用法"],
    "usage": {
      "collocations": "a strict; strict",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e377",
    "word": "smart",
    "phonetic": "美 [smɑ:t]",
    "pos": "adj.",
    "meaning": "聪明的;巧妙的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["smart的拼写和发音", "smart的基本用法"],
    "usage": {
      "collocations": "a smart; smart",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e378",
    "word": "active",
    "phonetic": "美 ['æktiv]",
    "pos": "adj.",
    "meaning": "积极的;活跃的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["active的拼写和发音", "active的基本用法"],
    "usage": {
      "collocations": "a active; active",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e379",
    "word": "Miss",
    "phonetic": "美 [mis]",
    "pos": "",
    "meaning": "小姐",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "my sister; big sister; little sister; sister and brother",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e380",
    "word": "lady",
    "phonetic": "美 ['leidi]",
    "pos": "n.",
    "meaning": "女士;小姐;夫人",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "my sister; big sister; little sister; sister and brother",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e381",
    "word": "so much",
    "phonetic": "美 [səu]",
    "pos": "",
    "meaning": "[mʌtʃ]很;非常",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["so much的拼写和发音", "so much的基本用法"],
    "usage": {
      "collocations": "a so much; so much",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e382",
    "word": "fun",
    "phonetic": "美 [fʌn]",
    "pos": "",
    "meaning": "有趣;逗笑",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fun的拼写和发音", "fun的基本用法"],
    "usage": {
      "collocations": "laugh at; a big smile; smile at; laugh loudly",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e383",
    "word": "she",
    "phonetic": "美 [ʃi:]",
    "pos": "",
    "meaning": "她",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["she的拼写和发音", "she的基本用法"],
    "usage": {
      "collocations": "a she; she",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e384",
    "word": "her",
    "phonetic": "美 [hə:]",
    "pos": "adj.",
    "meaning": "她的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["her的拼写和发音", "her的基本用法"],
    "usage": {
      "collocations": "a her; her",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e385",
    "word": "very",
    "phonetic": "美 ['veri]",
    "pos": "",
    "meaning": "很;非常",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["very的拼写和发音", "very的基本用法"],
    "usage": {
      "collocations": "a very; very",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e386",
    "word": "Monday",
    "phonetic": "美 [Mon.]",
    "pos": "",
    "meaning": "星期一['mʌndi]",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e387",
    "word": "Tuesday",
    "phonetic": "美 [Tue.]",
    "pos": "",
    "meaning": "星期二['tju:zdi ]",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e388",
    "word": "Wednesday",
    "phonetic": "美 [Wed.]",
    "pos": "",
    "meaning": "星期三['wenzdei]",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e389",
    "word": "Thursday",
    "phonetic": "美 [Thu.]",
    "pos": "",
    "meaning": "星期四['θə:zdi ]",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e390",
    "word": "Friday",
    "phonetic": "美 [Fri.]",
    "pos": "",
    "meaning": "星期五[ 'fraidi ]",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e391",
    "word": "Moral",
    "phonetic": "",
    "pos": "n.",
    "meaning": "Education思想品德课",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["Moral的拼写和发音", "Moral的基本用法"],
    "usage": {
      "collocations": "have a class; in class; after class; an English class",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e392",
    "word": "Social",
    "phonetic": "",
    "pos": "",
    "meaning": "Studies社会课",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["Social的拼写和发音", "Social的基本用法"],
    "usage": {
      "collocations": "have a class; in class; after class; an English class",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e393",
    "word": "waiter",
    "phonetic": "美 ['weitə]",
    "pos": "n.",
    "meaning": "n.侍者,服务员",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["waiter的拼写和发音", "waiter的基本用法"],
    "usage": {
      "collocations": "a waiter; the waiter; waiters",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e394",
    "word": "do",
    "phonetic": "",
    "pos": "v.",
    "meaning": "homework做作业",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["do homework做作业", "homework不可数名词"],
    "usage": {
      "collocations": "do homework; finish homework; a lot of homework",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e395",
    "word": "watch",
    "phonetic": "",
    "pos": "v.",
    "meaning": "TV看电视[ wɔtʃ]['ti:'vi:]",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "look at; watch TV; see a film; look for; look like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e396",
    "word": "read",
    "phonetic": "",
    "pos": "v.",
    "meaning": "books读书[ri:d] [ bu:ks]",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e397",
    "word": "Saturday",
    "phonetic": "美 [Sat.]",
    "pos": "",
    "meaning": "['sætədi]星期六",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e398",
    "word": "Sunday",
    "phonetic": "美 [Sun.]",
    "pos": "",
    "meaning": "[ 'sʌndi ]星期天",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e399",
    "word": "often",
    "phonetic": "美 ['ɔ:fən]",
    "pos": "",
    "meaning": "常常；经常",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["often的拼写和发音", "often的基本用法"],
    "usage": {
      "collocations": "a often; often",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e400",
    "word": "sometimes",
    "phonetic": "美 ['sʌmtaimz]",
    "pos": "",
    "meaning": "有时",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sometimes的拼写和发音", "sometimes的基本用法"],
    "usage": {
      "collocations": "a sometimes; sometimes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e401",
    "word": "usually",
    "phonetic": "",
    "pos": "",
    "meaning": "[ 'ju:ʒʊəli ]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["usually的拼写和发音", "usually的基本用法"],
    "usage": {
      "collocations": "a usually; usually",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e402",
    "word": "what about",
    "phonetic": "美 [wɔt]",
    "pos": "",
    "meaning": "['əbaut]怎么样?",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["what about的拼写和发音", "what about的基本用法"],
    "usage": {
      "collocations": "a what about; what about",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e403",
    "word": "do housework",
    "phonetic": "美 [du:]",
    "pos": "",
    "meaning": "['haʊswə:k]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["do housework的拼写和发音", "do housework的基本用法"],
    "usage": {
      "collocations": "a do housework; do housework",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e404",
    "word": "cabbage",
    "phonetic": "美 ['kæbidʒ]",
    "pos": "",
    "meaning": "洋白菜;卷心菜",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["white snow白雪", "in white穿白色"],
    "usage": {
      "collocations": "white snow; in white; a white cat; white shirt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e405",
    "word": "pork",
    "phonetic": "美 [pɔ:k]",
    "pos": "",
    "meaning": "猪肉",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["pig复数pigs", "piggy bank存钱罐"],
    "usage": {
      "collocations": "a pig farm; feed pigs; little pig",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e406",
    "word": "mutton",
    "phonetic": "美 ['mʌtn]",
    "pos": "",
    "meaning": "羊肉",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sheep单复数同形", "a flock of sheep一群羊"],
    "usage": {
      "collocations": "a little sheep; sheep farm; a flock of sheep",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e407",
    "word": "eggplant",
    "phonetic": "美 ['egplɑ:nt]",
    "pos": "",
    "meaning": "茄子",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["eggplant的拼写和发音", "eggplant的基本用法"],
    "usage": {
      "collocations": "a eggplant; eggplant",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e408",
    "word": "tofu",
    "phonetic": "美 ['təufu:]",
    "pos": "",
    "meaning": "豆腐",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["tofu的拼写和发音", "tofu的基本用法"],
    "usage": {
      "collocations": "a tofu; tofu",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e409",
    "word": "tomato",
    "phonetic": "美 [tə'mɑ:təu]",
    "pos": "",
    "meaning": "西红柿",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["red light红灯", "in red穿红色"],
    "usage": {
      "collocations": "red apple; in red; red light; a red flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e410",
    "word": "we",
    "phonetic": "美 [wi:]",
    "pos": "",
    "meaning": "我们",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["we的拼写和发音", "we的基本用法"],
    "usage": {
      "collocations": "a we; we",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e411",
    "word": "menu",
    "phonetic": "美 ['menju:]",
    "pos": "",
    "meaning": "菜单",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["menu的拼写和发音", "menu的基本用法"],
    "usage": {
      "collocations": "a menu; menu",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e412",
    "word": "sound",
    "phonetic": "美 [saund]",
    "pos": "v.",
    "meaning": "听起来",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["listen to听...", "listen carefully认真听"],
    "usage": {
      "collocations": "listen to; hear from; hear of; listen carefully",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e413",
    "word": "healthy",
    "phonetic": "美 ['helθi]",
    "pos": "adj.",
    "meaning": "健康的;有益健康的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["healthy的拼写和发音", "healthy的基本用法"],
    "usage": {
      "collocations": "a healthy; healthy",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e414",
    "word": "tasty",
    "phonetic": "美 ['teisti]",
    "pos": "adj.",
    "meaning": "好吃的;可口的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["eat breakfast吃早餐", "eat up吃光"],
    "usage": {
      "collocations": "eat breakfast; eat up; eat lunch; eat dinner; eat an apple",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e415",
    "word": "sweet",
    "phonetic": "美 [swi:t]",
    "pos": "adj.",
    "meaning": "甜的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["sweet的拼写和发音", "sweet的基本用法"],
    "usage": {
      "collocations": "a sweet; sweet",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e416",
    "word": "sour",
    "phonetic": "美 ['sauə]",
    "pos": "adj.",
    "meaning": "酸的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["sour的拼写和发音", "sour的基本用法"],
    "usage": {
      "collocations": "a sour; sour",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e417",
    "word": "salty",
    "phonetic": "美 ['sɔ:lti]",
    "pos": "adj.",
    "meaning": "咸的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["salty的拼写和发音", "salty的基本用法"],
    "usage": {
      "collocations": "a salty; salty",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e418",
    "word": "favourite",
    "phonetic": "",
    "pos": "",
    "meaning": "[ 'feivərit]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["favourite的拼写和发音", "favourite的基本用法"],
    "usage": {
      "collocations": "a favourite; favourite",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e419",
    "word": "fruit",
    "phonetic": "美 [fru:t]",
    "pos": "",
    "meaning": "水果",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e420",
    "word": "have to",
    "phonetic": "美 [hæv]",
    "pos": "",
    "meaning": "[ tu: ]不得不",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["have to的拼写和发音", "have to的基本用法"],
    "usage": {
      "collocations": "a have to; have to",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e421",
    "word": "eat",
    "phonetic": "美 [i:t]",
    "pos": "v.",
    "meaning": "吃",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["eat breakfast吃早餐", "eat up吃光"],
    "usage": {
      "collocations": "eat breakfast; eat up; eat lunch; eat dinner; eat an apple",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e422",
    "word": "empty",
    "phonetic": "",
    "pos": "",
    "meaning": "the trash",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["empty的拼写和发音", "empty的基本用法"],
    "usage": {
      "collocations": "a empty; empty",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e423",
    "word": "cook",
    "phonetic": "",
    "pos": "",
    "meaning": "the meals",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["cook的拼写和发音", "cook的基本用法"],
    "usage": {
      "collocations": "a cook; cook",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e424",
    "word": "sweep",
    "phonetic": "",
    "pos": "",
    "meaning": "the floor",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["sweep的拼写和发音", "sweep的基本用法"],
    "usage": {
      "collocations": "a sweep; sweep",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e425",
    "word": "clean",
    "phonetic": "",
    "pos": "",
    "meaning": "the bedroom打扫卧室",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["play basketball打篮球", "play the piano弹钢琴"],
    "usage": {
      "collocations": "play ball; play games; play football; play the piano; play with",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e426",
    "word": "ill",
    "phonetic": "美 [il]",
    "pos": "adj.",
    "meaning": "有病的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["ill的拼写和发音", "ill的基本用法"],
    "usage": {
      "collocations": "a ill; ill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e427",
    "word": "helpful",
    "phonetic": "美 ['helpful]",
    "pos": "adj.",
    "meaning": "有帮助的,有用的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["helpful的拼写和发音", "helpful的基本用法"],
    "usage": {
      "collocations": "a helpful; helpful",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e428",
    "word": "at home",
    "phonetic": "美 [æt]",
    "pos": "",
    "meaning": "[ həum ] 在家里",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["at home的拼写和发音", "at home的基本用法"],
    "usage": {
      "collocations": "a at home; at home",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e429",
    "word": "wash",
    "phonetic": "",
    "pos": "",
    "meaning": "the windows",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["wash的拼写和发音", "wash的基本用法"],
    "usage": {
      "collocations": "a wash; wash",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e430",
    "word": "just do it",
    "phonetic": "美 [dʒʌst]",
    "pos": "",
    "meaning": "[du:] [ it ] v",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["just do it的拼写和发音", "just do it的基本用法"],
    "usage": {
      "collocations": "a just do it; just do it",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e431",
    "word": "make",
    "phonetic": "",
    "pos": "",
    "meaning": "the bed",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["make的拼写和发音", "make的基本用法"],
    "usage": {
      "collocations": "a make; make",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e432",
    "word": "set",
    "phonetic": "",
    "pos": "",
    "meaning": "the table",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["set的拼写和发音", "set的基本用法"],
    "usage": {
      "collocations": "a set; set",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e433",
    "word": "do the dishes",
    "phonetic": "美 ['diʃiz]",
    "pos": "",
    "meaning": "洗碗碟",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["do the dishes的拼写和发音", "do the dishes的基本用法"],
    "usage": {
      "collocations": "wash hands; wash face; wash clothes; wash up; wash dishes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e434",
    "word": "I",
    "phonetic": "",
    "pos": "",
    "meaning": "would like to",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["I的拼写和发音", "I的基本用法"],
    "usage": {
      "collocations": "a I; I",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e435",
    "word": "have a try",
    "phonetic": "美 [hæv]",
    "pos": "",
    "meaning": "[trai ]试一试",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["have a try的拼写和发音", "have a try的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e436",
    "word": "robot",
    "phonetic": "美 ['rəubɔt]",
    "pos": "n.",
    "meaning": "机器人",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["robot的拼写和发音", "robot的基本用法"],
    "usage": {
      "collocations": "a robot; robot",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e437",
    "word": "play chess",
    "phonetic": "美 [plei]",
    "pos": "",
    "meaning": "[ tʃes ]下棋",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["play chess的拼写和发音", "play chess的基本用法"],
    "usage": {
      "collocations": "a play chess; play chess",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e438",
    "word": "curtain",
    "phonetic": "美 ['kə:tn]",
    "pos": "",
    "meaning": "窗帘",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["open the window开窗", "close the window关窗"],
    "usage": {
      "collocations": "a window; open the window; close the window; look out the window",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e439",
    "word": "trash bin",
    "phonetic": "美 [træʃ]",
    "pos": "",
    "meaning": "[bin]垃圾箱",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["trash bin的拼写和发音", "trash bin的基本用法"],
    "usage": {
      "collocations": "a trash bin; trash bin",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e440",
    "word": "closet",
    "phonetic": "美 ['klɔzit]",
    "pos": "",
    "meaning": "壁橱,衣橱",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["closet的拼写和发音", "closet的基本用法"],
    "usage": {
      "collocations": "a closet; closet",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e441",
    "word": "mirror",
    "phonetic": "美 ['mirə]",
    "pos": "",
    "meaning": "镜子",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["mirror的拼写和发音", "mirror的基本用法"],
    "usage": {
      "collocations": "a mirror; look in the mirror; a big mirror",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e442",
    "word": "end table",
    "phonetic": "美 [end]",
    "pos": "",
    "meaning": "['teibl ]床头柜",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["nod one's head点头", "headache头痛"],
    "usage": {
      "collocations": "nod one's head; shake one's head; a big head; head ache",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e443",
    "word": "look at",
    "phonetic": "美 [luk]",
    "pos": "v.",
    "meaning": "[ æt ]看一看",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "look at; watch TV; see a film; look for; look like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e444",
    "word": "own",
    "phonetic": "美 [əun]",
    "pos": "adj.",
    "meaning": "自己的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["own的拼写和发音", "own的基本用法"],
    "usage": {
      "collocations": "a own; own",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e445",
    "word": "flat",
    "phonetic": "美 [flæt]",
    "pos": "",
    "meaning": "公寓",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["flat的拼写和发音", "flat的基本用法"],
    "usage": {
      "collocations": "a flat; flat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e446",
    "word": "third",
    "phonetic": "美 [θə:d]",
    "pos": "adj.",
    "meaning": "第三的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["third的拼写和发音", "third的基本用法"],
    "usage": {
      "collocations": "three times; three days; three people; number three",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e447",
    "word": "living",
    "phonetic": "",
    "pos": "",
    "meaning": "room",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["living的拼写和发音", "living的基本用法"],
    "usage": {
      "collocations": "a living; living",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e448",
    "word": "very much",
    "phonetic": "美 ['veri]",
    "pos": "",
    "meaning": "[mʌtʃ ]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["very much的拼写和发音", "very much的基本用法"],
    "usage": {
      "collocations": "a very much; very much",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e449",
    "word": "in",
    "phonetic": "美 [in]",
    "pos": "",
    "meaning": "在...里面",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["in的拼写和发音", "in的基本用法"],
    "usage": {
      "collocations": "a in; in",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e450",
    "word": "under",
    "phonetic": "美 ['ʌndə]",
    "pos": "",
    "meaning": "在...下面",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["under的拼写和发音", "under的基本用法"],
    "usage": {
      "collocations": "a under; under",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e451",
    "word": "near",
    "phonetic": "美 [niə]",
    "pos": "",
    "meaning": "在…旁边",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["near的拼写和发音", "near的基本用法"],
    "usage": {
      "collocations": "a near; near",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e452",
    "word": "behind",
    "phonetic": "美 [bi:' haind]",
    "pos": "",
    "meaning": "在...后边",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["behind的拼写和发音", "behind的基本用法"],
    "usage": {
      "collocations": "a behind; behind",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e453",
    "word": "in front of",
    "phonetic": "美 [frʌnt]",
    "pos": "",
    "meaning": "[ɔ:f ]在…前面",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["in front of的拼写和发音", "in front of的基本用法"],
    "usage": {
      "collocations": "a in front of; in front of",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e454",
    "word": "clothes",
    "phonetic": "美 [kləuðz]",
    "pos": "",
    "meaning": "衣服",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["clothes的拼写和发音", "clothes的基本用法"],
    "usage": {
      "collocations": "put on clothes; take off clothes; wash clothes; beautiful clothes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e455",
    "word": "work",
    "phonetic": "美 [wə:k]",
    "pos": "",
    "meaning": "工作",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to work去上班", "at work在工作"],
    "usage": {
      "collocations": "a job; go to work; at work; good job; out of work",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e456",
    "word": "tell",
    "phonetic": "美 [tel]",
    "pos": "v.",
    "meaning": "告诉；说",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["speak English说英语", "say hello打招呼"],
    "usage": {
      "collocations": "speak English; say hello; say goodbye; tell a story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e457",
    "word": "sky",
    "phonetic": "美 [skai]",
    "pos": "",
    "meaning": "天空",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sky的拼写和发音", "sky的基本用法"],
    "usage": {
      "collocations": "the sky; in the sky; blue sky; a clear sky; look at the sky",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e458",
    "word": "mountain",
    "phonetic": "美 ['mauntin]",
    "pos": "",
    "meaning": "山；山脉",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["mountain的拼写和发音", "mountain的基本用法"],
    "usage": {
      "collocations": "a mountain; mountain",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e459",
    "word": "river",
    "phonetic": "美 ['rivə]",
    "pos": "",
    "meaning": "河流",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["river的拼写和发音", "river的基本用法"],
    "usage": {
      "collocations": "a river; river",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e460",
    "word": "flower",
    "phonetic": "美 ['flauə]",
    "pos": "",
    "meaning": "花",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["flower的拼写和发音", "flower的基本用法"],
    "usage": {
      "collocations": "a flower; flower garden; pick flowers; a red flower; flower pot",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e461",
    "word": "grass",
    "phonetic": "美 [grɑ:s]",
    "pos": "",
    "meaning": "草",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["grass的拼写和发音", "grass的基本用法"],
    "usage": {
      "collocations": "green grass; on the grass; cut the grass; grass land",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e462",
    "word": "lake",
    "phonetic": "美 [leik]",
    "pos": "",
    "meaning": "湖泊",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["lake的拼写和发音", "lake的基本用法"],
    "usage": {
      "collocations": "a lake; lake",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e463",
    "word": "forest",
    "phonetic": "美 ['fɔrist]",
    "pos": "",
    "meaning": "森林",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["forest的拼写和发音", "forest的基本用法"],
    "usage": {
      "collocations": "a forest; forest",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e464",
    "word": "path",
    "phonetic": "美 [pɑ:θ]",
    "pos": "",
    "meaning": "路；小道",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a small bird; very small; too small; small and big",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e465",
    "word": "park",
    "phonetic": "美 [pɑ:k]",
    "pos": "",
    "meaning": "公园",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["in the park在公园", "go to the park去公园"],
    "usage": {
      "collocations": "in the park; go to the park; a big park; park the car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e466",
    "word": "nature park",
    "phonetic": "美 ['neitʃə]",
    "pos": "",
    "meaning": "[ pɑ:k ]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["nature park的拼写和发音", "nature park的基本用法"],
    "usage": {
      "collocations": "a nature park; nature park",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e467",
    "word": "holiday",
    "phonetic": "美 ['hɔlədi]",
    "pos": "",
    "meaning": "假期",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["holiday的拼写和发音", "holiday的基本用法"],
    "usage": {
      "collocations": "a holiday; summer holiday; winter holiday; on holiday; a short holiday",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e468",
    "word": "village",
    "phonetic": "美 ['vilidʒ]",
    "pos": "",
    "meaning": "乡村；村庄",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["village的拼写和发音", "village的基本用法"],
    "usage": {
      "collocations": "in the country; country side; country life; a country road",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e469",
    "word": "city",
    "phonetic": "美 ['siti]",
    "pos": "",
    "meaning": "城市",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["city的拼写和发音", "city的基本用法"],
    "usage": {
      "collocations": "a big city; in the city; city life; city center",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e470",
    "word": "house",
    "phonetic": "美 [haus]",
    "pos": "",
    "meaning": "房子；住宅",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["house的拼写和发音", "house的基本用法"],
    "usage": {
      "collocations": "a house; house",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e471",
    "word": "bridge",
    "phonetic": "美 [bridʒ]",
    "pos": "",
    "meaning": "桥",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["bridge的拼写和发音", "bridge的基本用法"],
    "usage": {
      "collocations": "a bridge; cross the bridge; a long bridge; under the bridge",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e472",
    "word": "tree",
    "phonetic": "美 [tri:]",
    "pos": "",
    "meaning": "树",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["tree的拼写和发音", "tree的基本用法"],
    "usage": {
      "collocations": "a tree; tree top; under the tree; a big tree; tree house",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e473",
    "word": "road",
    "phonetic": "美 [rəud]",
    "pos": "",
    "meaning": "公路；大道",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "a big apple; very big; too big; big and small",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e474",
    "word": "building",
    "phonetic": "美 ['bildiŋ]",
    "pos": "n.",
    "meaning": "建筑物",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["building的拼写和发音", "building的基本用法"],
    "usage": {
      "collocations": "a building; building",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e475",
    "word": "air",
    "phonetic": "美 [єə]",
    "pos": "",
    "meaning": "空气",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["air的拼写和发音", "air的基本用法"],
    "usage": {
      "collocations": "a air; air",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e476",
    "word": "any",
    "phonetic": "美 ['eni]",
    "pos": "adj.",
    "meaning": "任何的；所有的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["any的拼写和发音", "any的基本用法"],
    "usage": {
      "collocations": "a any; any",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e477",
    "word": "eat dinner",
    "phonetic": "美 ['dinə]",
    "pos": "v.",
    "meaning": "吃晚饭",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["eat breakfast吃早餐", "eat up吃光"],
    "usage": {
      "collocations": "eat breakfast; eat up; eat lunch; eat dinner; eat an apple",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e478",
    "word": "when",
    "phonetic": "",
    "pos": "",
    "meaning": "什么时候[wen ]",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["when的拼写和发音", "when的基本用法"],
    "usage": {
      "collocations": "a when; when",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e479",
    "word": "about",
    "phonetic": "美 ['əbaut]",
    "pos": "",
    "meaning": "关于,大约",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "close the door; close the window; close the book; turn off",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e480",
    "word": "evening",
    "phonetic": "",
    "pos": "",
    "meaning": "夜晚、晚上[ 'i:vniŋ ]",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["evening的拼写和发音", "evening的基本用法"],
    "usage": {
      "collocations": "good evening; in the evening; this evening; evening news; evening dress",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e481",
    "word": "noon",
    "phonetic": "",
    "pos": "",
    "meaning": "中午[ nu:n ]",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["noon的拼写和发音", "noon的基本用法"],
    "usage": {
      "collocations": "a noon; noon",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e482",
    "word": "climbing",
    "phonetic": "",
    "pos": "",
    "meaning": "mountains 爬山",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["climbing的拼写和发音", "climbing的基本用法"],
    "usage": {
      "collocations": "climb up; climb a tree; climb the hill; climb down",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e483",
    "word": "go shopping",
    "phonetic": "美 ['ʃɔpiŋ]",
    "pos": "n.",
    "meaning": "购物;买东西",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["buy a book买书", "buy的过去式是bought"],
    "usage": {
      "collocations": "buy a book; buy food; buy a gift; go shopping; buy a ticket",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e484",
    "word": "play the piano",
    "phonetic": "美 [pi'ænəu]",
    "pos": "",
    "meaning": "弹钢琴",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["play the piano的拼写和发音", "play the piano的基本用法"],
    "usage": {
      "collocations": "a play the piano; play the piano",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e485",
    "word": "visit",
    "phonetic": "",
    "pos": "v.",
    "meaning": "grandparents看望（外祖父母",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "my father; father's day; a good father",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e486",
    "word": "go hiking",
    "phonetic": "美 ['haikiŋ]",
    "pos": "v.",
    "meaning": "去远足",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "go to school; go home; go shopping; go away; let's go",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e487",
    "word": "weekend",
    "phonetic": "美 ['wi:kend]",
    "pos": "",
    "meaning": "周末",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["weekend的拼写和发音", "weekend的基本用法"],
    "usage": {
      "collocations": "a week; this week; last week; next week; week end; mid week",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e488",
    "word": "week",
    "phonetic": "美 [wi:k]",
    "pos": "n.",
    "meaning": "n.一星期;周",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["a week一周七天", "week day工作日"],
    "usage": {
      "collocations": "a star; star light; a bright star; look at the stars",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e489",
    "word": "either",
    "phonetic": "美 ['aiðə]",
    "pos": "",
    "meaning": "也",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["either的拼写和发音", "either的基本用法"],
    "usage": {
      "collocations": "a either; either",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e490",
    "word": "next",
    "phonetic": "美 [nekst]",
    "pos": "",
    "meaning": "下一个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["next的拼写和发音", "next的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e491",
    "word": "spring",
    "phonetic": "美 [spriŋ]",
    "pos": "",
    "meaning": "春天",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["spring的拼写和发音", "spring的基本用法"],
    "usage": {
      "collocations": "in spring; spring time; spring flower; spring holiday",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e492",
    "word": "summer",
    "phonetic": "美 ['sʌmə]",
    "pos": "",
    "meaning": "夏天",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["summer的拼写和发音", "summer的基本用法"],
    "usage": {
      "collocations": "in summer; summer time; summer holiday; summer camp",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e493",
    "word": "fall",
    "phonetic": "美 [fɔ:l]",
    "pos": "",
    "meaning": "秋天",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["fall的拼写和发音", "fall的基本用法"],
    "usage": {
      "collocations": "in autumn; autumn leaves; autumn wind; a cool autumn",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e494",
    "word": "winter",
    "phonetic": "美 ['wintə]",
    "pos": "",
    "meaning": "冬天",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["winter的拼写和发音", "winter的基本用法"],
    "usage": {
      "collocations": "in winter; winter time; winter holiday; a cold winter",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e495",
    "word": "season",
    "phonetic": "美 ['si:zn]",
    "pos": "",
    "meaning": "['si:zən] 季节",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["season的拼写和发音", "season的基本用法"],
    "usage": {
      "collocations": "a season; season",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e496",
    "word": "which",
    "phonetic": "美 [witʃ]",
    "pos": "",
    "meaning": "哪一个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["which的拼写和发音", "which的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e497",
    "word": "best",
    "phonetic": "美 [best]",
    "pos": "",
    "meaning": "最;极",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["best的拼写和发音", "best的基本用法"],
    "usage": {
      "collocations": "a best; best",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e498",
    "word": "always",
    "phonetic": "美 ['ɔ:lweiz]",
    "pos": "",
    "meaning": "总是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["always的拼写和发音", "always的基本用法"],
    "usage": {
      "collocations": "a always; always",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e499",
    "word": "play with",
    "phonetic": "美 [wiθ]",
    "pos": "",
    "meaning": "玩;与…一起玩",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["play with和...玩", "play games玩游戏"],
    "usage": {
      "collocations": "play games; play with; play outside; play time; a play ground",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e500",
    "word": "up",
    "phonetic": "",
    "pos": "",
    "meaning": "[ ʌp ]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["up的拼写和发音", "up的基本用法"],
    "usage": {
      "collocations": "a up; up",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e501",
    "word": "north",
    "phonetic": "美 [nɔ:θ]",
    "pos": "",
    "meaning": "北方；向北方",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["north的拼写和发音", "north的基本用法"],
    "usage": {
      "collocations": "a north; north",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e502",
    "word": "Halloween",
    "phonetic": "",
    "pos": "",
    "meaning": "[ 'hæləu,wi:n ]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["Halloween的拼写和发音", "Halloween的基本用法"],
    "usage": {
      "collocations": "a Halloween; Halloween",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e503",
    "word": "Thanksgiving",
    "phonetic": "美 [θæŋks'giviŋ]",
    "pos": "",
    "meaning": "感恩节",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["Thanksgiving的拼写和发音", "Thanksgiving的基本用法"],
    "usage": {
      "collocations": "a Thanksgiving; Thanksgiving",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e504",
    "word": "swim",
    "phonetic": "美 [swim]",
    "pos": "",
    "meaning": "游泳",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["swim的拼写和发音", "swim的基本用法"],
    "usage": {
      "collocations": "swim well; swim in the pool; go swimming; swim suit",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e505",
    "word": "fly kites",
    "phonetic": "美 [flai]",
    "pos": "",
    "meaning": "放风筝",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e506",
    "word": "skate",
    "phonetic": "美 [skeit]",
    "pos": "",
    "meaning": "滑冰；滑冰鞋",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["skate的拼写和发音", "skate的基本用法"],
    "usage": {
      "collocations": "a pair of shoes; put on shoes; take off shoes; new shoes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e507",
    "word": "plant trees",
    "phonetic": "美 [plɑ:nt]",
    "pos": "",
    "meaning": "[ tri:s ]种树",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["plant trees的拼写和发音", "plant trees的基本用法"],
    "usage": {
      "collocations": "a tree; tree top; under the tree; a big tree; tree house",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e508",
    "word": "why",
    "phonetic": "美 [wai]",
    "pos": "",
    "meaning": "为什么",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["why的拼写和发音", "why的基本用法"],
    "usage": {
      "collocations": "a why; why",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e509",
    "word": "because",
    "phonetic": "美 [bi'kɔz]",
    "pos": "",
    "meaning": "因为",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["because的拼写和发音", "because的基本用法"],
    "usage": {
      "collocations": "a because; because",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e510",
    "word": "sleep",
    "phonetic": "美 [sli:p]",
    "pos": "v.",
    "meaning": "睡觉",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to sleep去睡觉", "sleep well睡得好"],
    "usage": {
      "collocations": "go to sleep; sleep well; sleep late; a good sleep; a sleep over",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e511",
    "word": "January",
    "phonetic": "美 ['dʒænjuəri]",
    "pos": "",
    "meaning": "一月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["January的拼写和发音", "January的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e512",
    "word": "February",
    "phonetic": "美 ['februəri]",
    "pos": "",
    "meaning": "二月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["February的拼写和发音", "February的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e513",
    "word": "March",
    "phonetic": "美 [mɑ:tʃ]",
    "pos": "",
    "meaning": "三月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["March的拼写和发音", "March的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e514",
    "word": "April",
    "phonetic": "美 ['eiprəl]",
    "pos": "",
    "meaning": "四月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["April的拼写和发音", "April的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e515",
    "word": "June",
    "phonetic": "美 [dʒu:n]",
    "pos": "",
    "meaning": "六月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["June的拼写和发音", "June的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e516",
    "word": "July",
    "phonetic": "美 [dʒu:'lai]",
    "pos": "",
    "meaning": "七月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["July的拼写和发音", "July的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e517",
    "word": "August",
    "phonetic": "美 ['ɔ:gəst]",
    "pos": "",
    "meaning": "八月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["August的拼写和发音", "August的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e518",
    "word": "September",
    "phonetic": "美 [səp'tembə]",
    "pos": "",
    "meaning": "九月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["September的拼写和发音", "September的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e519",
    "word": "October",
    "phonetic": "美 [ɔk'təubə]",
    "pos": "",
    "meaning": "十月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["October的拼写和发音", "October的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e520",
    "word": "November",
    "phonetic": "美 [nəu'vembə]",
    "pos": "",
    "meaning": "十一月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["November的拼写和发音", "November的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e521",
    "word": "December",
    "phonetic": "美 [di'sembə]",
    "pos": "",
    "meaning": "十二月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["December的拼写和发音", "December的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e522",
    "word": "chart",
    "phonetic": "美 [tʃɑ:t]",
    "pos": "",
    "meaning": "图表",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["chart的拼写和发音", "chart的基本用法"],
    "usage": {
      "collocations": "a chart; chart",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e523",
    "word": "birthday",
    "phonetic": "美 ['bə:θdei]",
    "pos": "",
    "meaning": "生日",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["birthday的拼写和发音", "birthday的基本用法"],
    "usage": {
      "collocations": "a day; every day; one day; some day; day time; day by day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e524",
    "word": "cousin",
    "phonetic": "",
    "pos": "",
    "meaning": "[kʌzən]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["cousin的拼写和发音", "cousin的基本用法"],
    "usage": {
      "collocations": "a cousin; cousin",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e525",
    "word": "fourth",
    "phonetic": "美 [fɔ:θ]",
    "pos": "",
    "meaning": "第四",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fourth的拼写和发音", "fourth的基本用法"],
    "usage": {
      "collocations": "four seasons; four times; four days; number four",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e526",
    "word": "fifth",
    "phonetic": "美 [fifθ]",
    "pos": "",
    "meaning": "第五",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fifth的拼写和发音", "fifth的基本用法"],
    "usage": {
      "collocations": "five days; five people; five times; number five",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e527",
    "word": "eighth",
    "phonetic": "美 [eiθ]",
    "pos": "",
    "meaning": "第八",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["eighth的拼写和发音", "eighth的基本用法"],
    "usage": {
      "collocations": "eight days; eight people; eight times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e528",
    "word": "ninth",
    "phonetic": "美 [nainθ]",
    "pos": "",
    "meaning": "第九",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["ninth的拼写和发音", "ninth的基本用法"],
    "usage": {
      "collocations": "nine days; nine people; nine times",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e529",
    "word": "twelfth",
    "phonetic": "美 [twelfθ]",
    "pos": "",
    "meaning": "第十二",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["twelfth的拼写和发音", "twelfth的基本用法"],
    "usage": {
      "collocations": "two or three; two times; two days; number two",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e530",
    "word": "twentieth",
    "phonetic": "美 ['twentiθ]",
    "pos": "",
    "meaning": "第二十",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["twentieth的拼写和发音", "twentieth的基本用法"],
    "usage": {
      "collocations": "two or three; two times; two days; number two",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e531",
    "word": "send",
    "phonetic": "美 [send]",
    "pos": "",
    "meaning": "寄；发送",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["send的拼写和发音", "send的基本用法"],
    "usage": {
      "collocations": "a send; send",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e532",
    "word": "e-card",
    "phonetic": "美 [e'kɑ:d]",
    "pos": "",
    "meaning": "电子卡片",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["e-card的拼写和发音", "e-card的基本用法"],
    "usage": {
      "collocations": "electric; turn on the light; a power cut; electric fan",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e533",
    "word": "able",
    "phonetic": "美 ['eibl]",
    "pos": "",
    "meaning": "能",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["able的拼写和发音", "able的基本用法"],
    "usage": {
      "collocations": "a able; able",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e534",
    "word": "everyone",
    "phonetic": "美 ['evriwʌn]",
    "pos": "n.",
    "meaning": "每个人",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["everyone的拼写和发音", "everyone的基本用法"],
    "usage": {
      "collocations": "a everyone; everyone",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e535",
    "word": "then",
    "phonetic": "美 [ðen]",
    "pos": "",
    "meaning": "那么",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["then的拼写和发音", "then的基本用法"],
    "usage": {
      "collocations": "a then; then",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e536",
    "word": "date",
    "phonetic": "美 [deit]",
    "pos": "",
    "meaning": "日期",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["date的拼写和发音", "date的基本用法"],
    "usage": {
      "collocations": "a day; every day; one day; some day; day time; day by day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e537",
    "word": "draw",
    "phonetic": "",
    "pos": "",
    "meaning": "pictures画画",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["draw的拼写和发音", "draw的基本用法"],
    "usage": {
      "collocations": "draw a picture; draw well; draw a line; draw a flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e538",
    "word": "cook dinner",
    "phonetic": "美 [kuk]",
    "pos": "v.",
    "meaning": "['dinə] 做饭",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["cook dinner的拼写和发音", "cook dinner的基本用法"],
    "usage": {
      "collocations": "a cook dinner; cook dinner",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e539",
    "word": "read a book",
    "phonetic": "美 [ri:d]",
    "pos": "v.",
    "meaning": "[buk] 看书",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e540",
    "word": "answer",
    "phonetic": "",
    "pos": "",
    "meaning": "the phone 接电话",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["answer的拼写和发音", "answer的基本用法"],
    "usage": {
      "collocations": "a phone; phone call; make a call; on the phone; phone number",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e541",
    "word": "talk",
    "phonetic": "",
    "pos": "",
    "meaning": "讲话[tɔ:k]",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["talk的拼写和发音", "talk的基本用法"],
    "usage": {
      "collocations": "say a word; have a word; in a word; word by word",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e542",
    "word": "Children's",
    "phonetic": "",
    "pos": "",
    "meaning": "Center儿童活动中心",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["Children's的拼写和发音", "Children's的基本用法"],
    "usage": {
      "collocations": "a Children's; Children's",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e543",
    "word": "see",
    "phonetic": "",
    "pos": "",
    "meaning": "you later 再见",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["see的拼写和发音", "see的基本用法"],
    "usage": {
      "collocations": "a see; see",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e544",
    "word": "listen",
    "phonetic": "",
    "pos": "v.",
    "meaning": "to music听音乐",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["listen to听...", "listen carefully认真听"],
    "usage": {
      "collocations": "listen to music; music class; music teacher; play music",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e545",
    "word": "write",
    "phonetic": "",
    "pos": "v.",
    "meaning": "a letter写信[rait] ['letə]",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["write a letter写信", "write down写下"],
    "usage": {
      "collocations": "write a letter; write down; write well; write a story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e546",
    "word": "speak to",
    "phonetic": "美 [spi:k]",
    "pos": "",
    "meaning": "和…讲话",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["speak to的拼写和发音", "speak to的基本用法"],
    "usage": {
      "collocations": "say a word; have a word; in a word; word by word",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e547",
    "word": "hold on",
    "phonetic": "美 [həuld ɔn]",
    "pos": "",
    "meaning": "等一下",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["hold on的拼写和发音", "hold on的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e548",
    "word": "call",
    "phonetic": "美 [kɔ:l]",
    "pos": "",
    "meaning": "打电话",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["play basketball打篮球", "play the piano弹钢琴"],
    "usage": {
      "collocations": "play ball; play games; play football; play the piano; play with",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e549",
    "word": "fly",
    "phonetic": "美 [flai]",
    "pos": "",
    "meaning": "飞",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["fly的拼写和发音", "fly的基本用法"],
    "usage": {
      "collocations": "fly high; fly a kite; fly away; a flying bird",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e550",
    "word": "jump",
    "phonetic": "美 [dʒʌmp]",
    "pos": "",
    "meaning": "跳",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["jump的拼写和发音", "jump的基本用法"],
    "usage": {
      "collocations": "jump high; jump far; jump rope; long jump; high jump",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e551",
    "word": "walk",
    "phonetic": "美 [wɔ:k]",
    "pos": "v.",
    "meaning": "走",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["walk to school步行上学", "go for a walk散步"],
    "usage": {
      "collocations": "walk to school; walk slowly; walk away; go for a walk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e552",
    "word": "kangaroo",
    "phonetic": "美 [kænɡə'ru:]",
    "pos": "",
    "meaning": "袋鼠",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["kangaroo的拼写和发音", "kangaroo的基本用法"],
    "usage": {
      "collocations": "a little mouse; mouse trap; computer mouse",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e553",
    "word": "truck",
    "phonetic": "美 [trʌk]",
    "pos": "",
    "meaning": "象鼻",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["truck的拼写和发音", "truck的基本用法"],
    "usage": {
      "collocations": "a big elephant; elephant trunk; elephant tusk",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e554",
    "word": "climb",
    "phonetic": "美 [klaim]",
    "pos": "",
    "meaning": "往上爬",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["climb的拼写和发音", "climb的基本用法"],
    "usage": {
      "collocations": "climb up; climb a tree; climb the hill; climb down",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e555",
    "word": "fight",
    "phonetic": "美 [fait]",
    "pos": "",
    "meaning": "打架",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["play basketball打篮球", "play the piano弹钢琴"],
    "usage": {
      "collocations": "play ball; play games; play football; play the piano; play with",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e556",
    "word": "swing",
    "phonetic": "美 [swiŋ]",
    "pos": "",
    "meaning": "荡；荡秋千",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["swing的拼写和发音", "swing的基本用法"],
    "usage": {
      "collocations": "in autumn; autumn leaves; autumn wind; a cool autumn",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e557",
    "word": "drink water",
    "phonetic": "美 [driŋk]",
    "pos": "v.",
    "meaning": "[wɔtə] 喝水",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e558",
    "word": "climber",
    "phonetic": "美 ['klaimə]",
    "pos": "",
    "meaning": "攀登者",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["climber的拼写和发音", "climber的基本用法"],
    "usage": {
      "collocations": "a climber; climber",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e559",
    "word": "take pictures",
    "phonetic": "美 [teik]",
    "pos": "",
    "meaning": "['piktʃəs] 照相",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["take pictures的拼写和发音", "take pictures的基本用法"],
    "usage": {
      "collocations": "a take pictures; take pictures",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e560",
    "word": "pick",
    "phonetic": "",
    "pos": "",
    "meaning": "up leaves采摘树叶",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["pick的拼写和发音", "pick的基本用法"],
    "usage": {
      "collocations": "a tree; tree top; under the tree; a big tree; tree house",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e561",
    "word": "catch",
    "phonetic": "",
    "pos": "",
    "meaning": "butterflies捉蝴蝶",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["catch的拼写和发音", "catch的基本用法"],
    "usage": {
      "collocations": "a butterfly; butterfly wing; catch butterflies",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e562",
    "word": "woods",
    "phonetic": "美 [wʊdz]",
    "pos": "",
    "meaning": "树林",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["woods的拼写和发音", "woods的基本用法"],
    "usage": {
      "collocations": "a tree; tree top; under the tree; a big tree; tree house",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e563",
    "word": "ant",
    "phonetic": "美 [ænt]",
    "pos": "",
    "meaning": "蚂蚁",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["ant的拼写和发音", "ant的基本用法"],
    "usage": {
      "collocations": "an ant hill; ant army; worker ant",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e564",
    "word": "interesting",
    "phonetic": "美 ['intristiŋ]",
    "pos": "adj.",
    "meaning": "有趣的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["interesting的拼写和发音", "interesting的基本用法"],
    "usage": {
      "collocations": "a interesting; interesting",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e565",
    "word": "have a look",
    "phonetic": "美 [hæv]",
    "pos": "v.",
    "meaning": "[luk] 看一看",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "look at; watch TV; see a film; look for; look like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e566",
    "word": "honey",
    "phonetic": "美 ['hʌni]",
    "pos": "",
    "meaning": "蜂蜜",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["honey的拼写和发音", "honey的基本用法"],
    "usage": {
      "collocations": "a bee sting; bee honey; busy bee",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e567",
    "word": "thing",
    "phonetic": "美 [θiŋ]",
    "pos": "n.",
    "meaning": "东西；物",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["thing的拼写和发音", "thing的基本用法"],
    "usage": {
      "collocations": "a thing; thing",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e568",
    "word": "count",
    "phonetic": "",
    "pos": "",
    "meaning": "insects数昆虫",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["count的拼写和发音", "count的基本用法"],
    "usage": {
      "collocations": "a small insect; insect bite; insect world",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e569",
    "word": "collect",
    "phonetic": "",
    "pos": "",
    "meaning": "leaves收集树叶",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["collect的拼写和发音", "collect的基本用法"],
    "usage": {
      "collocations": "a tree; tree top; under the tree; a big tree; tree house",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e570",
    "word": "write a report",
    "phonetic": "美 [rait]",
    "pos": "v.",
    "meaning": "[ri'pɔ:t] 写报告",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["write a letter写信", "write down写下"],
    "usage": {
      "collocations": "write a letter; write down; write well; write a story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e571",
    "word": "him",
    "phonetic": "美 [him]",
    "pos": "",
    "meaning": "他（宾格）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["him的拼写和发音", "him的基本用法"],
    "usage": {
      "collocations": "a him; him",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e572",
    "word": "leave",
    "phonetic": "美 [li:v]",
    "pos": "",
    "meaning": "离开",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["leave的拼写和发音", "leave的基本用法"],
    "usage": {
      "collocations": "open the door; open the window; open the book; open your eyes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e573",
    "word": "us",
    "phonetic": "美 [ʌs]",
    "pos": "",
    "meaning": "我们（宾格）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["us的拼写和发音", "us的基本用法"],
    "usage": {
      "collocations": "a us; us",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e574",
    "word": "over there",
    "phonetic": "美 ['əuvə]",
    "pos": "",
    "meaning": "[ðεə]在那边",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["over there的拼写和发音", "over there的基本用法"],
    "usage": {
      "collocations": "a over there; over there",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e575",
    "word": "by",
    "phonetic": "美 [bai]",
    "pos": "",
    "meaning": "经……；乘",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["by的拼写和发音", "by的基本用法"],
    "usage": {
      "collocations": "a by; by",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e576",
    "word": "train",
    "phonetic": "美 [trein]",
    "pos": "",
    "meaning": "火车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e577",
    "word": "ship",
    "phonetic": "美 [ʃip]",
    "pos": "",
    "meaning": "船；舰",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["ship的拼写和发音", "ship的基本用法"],
    "usage": {
      "collocations": "a boat; a ship; by boat; take a boat; a small boat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e578",
    "word": "subway",
    "phonetic": "美 ['sʌbwei]",
    "pos": "adv.",
    "meaning": "地铁",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["subway的拼写和发音", "subway的基本用法"],
    "usage": {
      "collocations": "the subway; by subway; take the subway; subway station",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e579",
    "word": "traffic",
    "phonetic": "美 ['træfik]",
    "pos": "",
    "meaning": "交通",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["traffic的拼写和发音", "traffic的基本用法"],
    "usage": {
      "collocations": "a traffic; traffic",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e580",
    "word": "traffic light",
    "phonetic": "美 [lait]",
    "pos": "",
    "meaning": "交通灯",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["turn on the light开灯", "turn off the light关灯"],
    "usage": {
      "collocations": "a lamp; turn on the light; turn off the light; a light bulb",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e581",
    "word": "traffic rule",
    "phonetic": "美 [ru:l]",
    "pos": "",
    "meaning": "交通规则",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["traffic rule的拼写和发音", "traffic rule的基本用法"],
    "usage": {
      "collocations": "a traffic rule; traffic rule",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e582",
    "word": "stop",
    "phonetic": "美 [stɔp]",
    "pos": "",
    "meaning": "停；停车站",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["stand up站起来", "stand there站在那里"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e583",
    "word": "remember",
    "phonetic": "美 [ri'membə]",
    "pos": "",
    "meaning": "记住",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["remember的拼写和发音", "remember的基本用法"],
    "usage": {
      "collocations": "a remember; remember",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e584",
    "word": "get to",
    "phonetic": "美 [get]",
    "pos": "",
    "meaning": "[tu:]到达",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["get to的拼写和发音", "get to的基本用法"],
    "usage": {
      "collocations": "a get to; get to",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e585",
    "word": "find",
    "phonetic": "美 [faind]",
    "pos": "",
    "meaning": "寻找；找到",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["find的拼写和发音", "find的基本用法"],
    "usage": {
      "collocations": "a find; find",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e586",
    "word": "difference",
    "phonetic": "美 ['difərəns]",
    "pos": "",
    "meaning": "不同;区别",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["difference的拼写和发音", "difference的基本用法"],
    "usage": {
      "collocations": "a difference; difference",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e587",
    "word": "same",
    "phonetic": "美 [seim]",
    "pos": "adj.",
    "meaning": "相同的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["same的拼写和发音", "same的基本用法"],
    "usage": {
      "collocations": "a same; same",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e588",
    "word": "every",
    "phonetic": "美 ['evri]",
    "pos": "adj.",
    "meaning": "每个;所有的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["every的拼写和发音", "every的基本用法"],
    "usage": {
      "collocations": "a every; every",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e589",
    "word": "country",
    "phonetic": "美 ['kʌntri]",
    "pos": "",
    "meaning": "国家",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["country的拼写和发音", "country的基本用法"],
    "usage": {
      "collocations": "a country; our country; a big country; country side",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e590",
    "word": "mean",
    "phonetic": "美 [mi:n]",
    "pos": "",
    "meaning": "意思是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["mean的拼写和发音", "mean的基本用法"],
    "usage": {
      "collocations": "a mean; mean",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e591",
    "word": "drive",
    "phonetic": "美 [draiv]",
    "pos": "",
    "meaning": "驾驶",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["drive的拼写和发音", "drive的基本用法"],
    "usage": {
      "collocations": "a drive; drive",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e592",
    "word": "side",
    "phonetic": "美 [said]",
    "pos": "",
    "meaning": "边;面;侧;端",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["side的拼写和发音", "side的基本用法"],
    "usage": {
      "collocations": "a side; side",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e593",
    "word": "Australia",
    "phonetic": "美 [ɔ'streiliə]",
    "pos": "",
    "meaning": "澳大利亚",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["big的比较级是bigger", "a big apple一个大苹果"],
    "usage": {
      "collocations": "a big apple; very big; too big; big and small",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e594",
    "word": "however",
    "phonetic": "美 [hau'evə]",
    "pos": "",
    "meaning": "但是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["however的拼写和发音", "however的基本用法"],
    "usage": {
      "collocations": "a however; however",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e595",
    "word": "left",
    "phonetic": "美 [left]",
    "pos": "adj.",
    "meaning": "左边的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["left的拼写和发音", "left的基本用法"],
    "usage": {
      "collocations": "a left; left",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e596",
    "word": "if",
    "phonetic": "美 [if]",
    "pos": "",
    "meaning": "如果",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["if的拼写和发音", "if的基本用法"],
    "usage": {
      "collocations": "a if; if",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e597",
    "word": "must",
    "phonetic": "美 [mʌst]",
    "pos": "",
    "meaning": "必须",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["must的拼写和发音", "must的基本用法"],
    "usage": {
      "collocations": "a must; must",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e598",
    "word": "post office",
    "phonetic": "美 [pəust]",
    "pos": "",
    "meaning": "['ɔ:fis]邮局",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["post office的拼写和发音", "post office的基本用法"],
    "usage": {
      "collocations": "a post office; at the post office; post office box",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e599",
    "word": "hospital",
    "phonetic": "美 ['hɔspitl]",
    "pos": "",
    "meaning": "医院",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["go to the hospital去医院", "in the hospital在医院"],
    "usage": {
      "collocations": "in the hospital; go to the hospital; hospital bed",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e600",
    "word": "cinema",
    "phonetic": "美 ['sinimə]",
    "pos": "",
    "meaning": "电影院",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["cinema的拼写和发音", "cinema的基本用法"],
    "usage": {
      "collocations": "electric; turn on the light; a power cut; electric fan",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e601",
    "word": "bookstore",
    "phonetic": "美 ['bukstɔ:]",
    "pos": "",
    "meaning": "书店",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e602",
    "word": "excuse me",
    "phonetic": "美 [iks'kju:z]",
    "pos": "",
    "meaning": "[mi:]对不起",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["excuse me的拼写和发音", "excuse me的基本用法"],
    "usage": {
      "collocations": "a excuse me; excuse me",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e603",
    "word": "where",
    "phonetic": "美 [hwɛə]",
    "pos": "",
    "meaning": "在哪里；到哪里",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["where的拼写和发音", "where的基本用法"],
    "usage": {
      "collocations": "a where; where",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e604",
    "word": "next to",
    "phonetic": "美 ['nekst]",
    "pos": "",
    "meaning": "[tu:] 与……相邻",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["next to的拼写和发音", "next to的基本用法"],
    "usage": {
      "collocations": "a next to; next to",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e605",
    "word": "far",
    "phonetic": "美 [fɑ:]",
    "pos": "",
    "meaning": "远",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["far的拼写和发音", "far的基本用法"],
    "usage": {
      "collocations": "a far; far",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e606",
    "word": "supermarket",
    "phonetic": "美 [,sju:pə'mɑ:kit]",
    "pos": "",
    "meaning": "超市",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["supermarket的拼写和发音", "supermarket的基本用法"],
    "usage": {
      "collocations": "a supermarket; go to the supermarket; in the supermarket",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e607",
    "word": "bank",
    "phonetic": "美 [bæŋk]",
    "pos": "",
    "meaning": "银行",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["bank的拼写和发音", "bank的基本用法"],
    "usage": {
      "collocations": "a bank; in the bank; bank card; bank account",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e608",
    "word": "after school",
    "phonetic": "美 ['ɑ:ftə]",
    "pos": "",
    "meaning": "[sku:l]放学以后",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["after school的拼写和发音", "after school的基本用法"],
    "usage": {
      "collocations": "a after school; after school",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e609",
    "word": "a pair of",
    "phonetic": "美 [pɛə]",
    "pos": "",
    "meaning": "一双",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["a pair of的拼写和发音", "a pair of的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e610",
    "word": "shoe store",
    "phonetic": "美 [ʃu:]",
    "pos": "",
    "meaning": "[stɔ:] 鞋店",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["shoe store的拼写和发音", "shoe store的基本用法"],
    "usage": {
      "collocations": "a pair of shoes; put on shoes; take off shoes; new shoes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e611",
    "word": "get off",
    "phonetic": "美 [get]",
    "pos": "",
    "meaning": "[ɔ:f]下车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e612",
    "word": "minute",
    "phonetic": "美 ['minit]",
    "pos": "",
    "meaning": "分钟",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["minute的拼写和发音", "minute的基本用法"],
    "usage": {
      "collocations": "a clock; a watch; wall clock; set the clock; what time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e613",
    "word": "south",
    "phonetic": "美 [sauθ]",
    "pos": "",
    "meaning": "南",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["south的拼写和发音", "south的基本用法"],
    "usage": {
      "collocations": "a south; south",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e614",
    "word": "east",
    "phonetic": "美 [i:st]",
    "pos": "",
    "meaning": "东",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["east的拼写和发音", "east的基本用法"],
    "usage": {
      "collocations": "a east; east",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e615",
    "word": "west",
    "phonetic": "美 [west]",
    "pos": "",
    "meaning": "西",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["west的拼写和发音", "west的基本用法"],
    "usage": {
      "collocations": "a west; west",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e616",
    "word": "turn",
    "phonetic": "美 [tə:n]",
    "pos": "",
    "meaning": "转弯",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["turn的拼写和发音", "turn的基本用法"],
    "usage": {
      "collocations": "a turn; turn",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e617",
    "word": "straight",
    "phonetic": "美 [streit]",
    "pos": "adv.",
    "meaning": "成直线地",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["straight的拼写和发音", "straight的基本用法"],
    "usage": {
      "collocations": "a straight; straight",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e618",
    "word": "party",
    "phonetic": "美 ['pɑ:ti]",
    "pos": "",
    "meaning": "聚会；晚会",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["party的拼写和发音", "party的基本用法"],
    "usage": {
      "collocations": "a party; party",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e619",
    "word": "start",
    "phonetic": "美 [stɑ:t]",
    "pos": "",
    "meaning": "开始",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["start的拼写和发音", "start的基本用法"],
    "usage": {
      "collocations": "open the door; open the window; open the book; open your eyes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e620",
    "word": "next week",
    "phonetic": "美 ['nekst]",
    "pos": "",
    "meaning": "[wi:k]下周",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["next week的拼写和发音", "next week的基本用法"],
    "usage": {
      "collocations": "a week; this week; last week; next week; week end; mid week",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e621",
    "word": "tonight",
    "phonetic": "美 [tə'nait]",
    "pos": "",
    "meaning": "今晚",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["tonight的拼写和发音", "tonight的基本用法"],
    "usage": {
      "collocations": "a tonight; tonight",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e622",
    "word": "tomorrow",
    "phonetic": "美 [tə'mɔ:rəu]",
    "pos": "",
    "meaning": "明天",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["tomorrow morning明天早上", "see you tomorrow明天见"],
    "usage": {
      "collocations": "tomorrow; tomorrow morning; tomorrow afternoon; see you tomorrow",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e623",
    "word": "take a trip",
    "phonetic": "美 [teik]",
    "pos": "v.",
    "meaning": "[trip] 去旅行",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "go to school; go home; go shopping; go away; let's go",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e624",
    "word": "theme park",
    "phonetic": "美 [θi:m]",
    "pos": "",
    "meaning": "[pɑ:k]主题公园",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["in the park在公园", "go to the park去公园"],
    "usage": {
      "collocations": "in the park; go to the park; a big park; park the car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e625",
    "word": "the",
    "phonetic": "",
    "pos": "",
    "meaning": "Great Wall长城",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["long的反义词是short", "long hair长发"],
    "usage": {
      "collocations": "long hair; a long ruler; very long; too long; a long time",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e626",
    "word": "busy",
    "phonetic": "美 ['bizi]",
    "pos": "adj.",
    "meaning": "忙碌的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["busy的拼写和发音", "busy的基本用法"],
    "usage": {
      "collocations": "a busy; busy",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e627",
    "word": "together",
    "phonetic": "美 [tə'geðə]",
    "pos": "adv.",
    "meaning": "一起地",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["together的拼写和发音", "together的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e628",
    "word": "comic book",
    "phonetic": "美 ['kɔmik]",
    "pos": "",
    "meaning": "[buk]漫画书",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["read a book读书", "book shelf书架"],
    "usage": {
      "collocations": "a book; read a book; book shelf; a story book",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e629",
    "word": "post card",
    "phonetic": "美 [pəust]",
    "pos": "",
    "meaning": "[kɑ:d] 明信片",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["write a letter写信", "a letter to一封给...的信"],
    "usage": {
      "collocations": "a letter; write a letter; a letter to; post a letter; letter box",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e630",
    "word": "newspaper",
    "phonetic": "美 ['nju:z,peipə]",
    "pos": "",
    "meaning": "报纸",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["newspaper的拼写和发音", "newspaper的基本用法"],
    "usage": {
      "collocations": "a newspaper; newspaper",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e631",
    "word": "magazine",
    "phonetic": "美 [,mægə'zi:n]",
    "pos": "",
    "meaning": "报纸",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["magazine的拼写和发音", "magazine的基本用法"],
    "usage": {
      "collocations": "a magazine; magazine",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e632",
    "word": "dictionary",
    "phonetic": "美 ['dikʃənəri]",
    "pos": "",
    "meaning": "词典;字典",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["dictionary的拼写和发音", "dictionary的基本用法"],
    "usage": {
      "collocations": "a dictionary; dictionary",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e633",
    "word": "buy",
    "phonetic": "美 [bai]",
    "pos": "",
    "meaning": "买",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["buy a book买书", "buy的过去式是bought"],
    "usage": {
      "collocations": "buy a book; buy food; buy a gift; go shopping; buy a ticket",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e634",
    "word": "fruit stand",
    "phonetic": "美 [fru:t]",
    "pos": "",
    "meaning": "[stænd]水果摊",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e635",
    "word": "pet shop",
    "phonetic": "美 [pet]",
    "pos": "n.",
    "meaning": "[ʃɔp]宠物商店",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["go shopping去购物", "a gift shop礼品店"],
    "usage": {
      "collocations": "a shop; a store; shop keeper; go shopping; a gift shop",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e636",
    "word": "need",
    "phonetic": "美 [ni:d]",
    "pos": "",
    "meaning": "需要",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["need的拼写和发音", "need的基本用法"],
    "usage": {
      "collocations": "a need; need",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e637",
    "word": "plant",
    "phonetic": "美 [plɑ:nt]",
    "pos": "n.",
    "meaning": "植物",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["plant的拼写和发音", "plant的基本用法"],
    "usage": {
      "collocations": "a plant; plant",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e638",
    "word": "else",
    "phonetic": "美 [els]",
    "pos": "",
    "meaning": "其他；另外",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["else的拼写和发音", "else的基本用法"],
    "usage": {
      "collocations": "a else; else",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e639",
    "word": "shop",
    "phonetic": "美 [ʃɔp]",
    "pos": "",
    "meaning": "商店",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["go shopping去购物", "a gift shop礼品店"],
    "usage": {
      "collocations": "a shop; a store; shop keeper; go shopping; a gift shop",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e640",
    "word": "hobby",
    "phonetic": "美 ['hɔbi]",
    "pos": "",
    "meaning": "爱好",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e641",
    "word": "ride a bike",
    "phonetic": "美 [raid]",
    "pos": "",
    "meaning": "[baik]骑自行车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e642",
    "word": "riding",
    "phonetic": "美 ['raidiŋ]",
    "pos": "",
    "meaning": "a bike骑自行车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e643",
    "word": "dive",
    "phonetic": "美 [daiv]",
    "pos": "",
    "meaning": "跳水",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e644",
    "word": "diving",
    "phonetic": "美 ['daiviŋ]",
    "pos": "",
    "meaning": "跳水",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e645",
    "word": "make kites",
    "phonetic": "美 [meik]",
    "pos": "",
    "meaning": "[kait]制作风筝",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e646",
    "word": "making kites",
    "phonetic": "美 ['meikiŋ]",
    "pos": "",
    "meaning": "制作风筝",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e647",
    "word": "collecting stamps",
    "phonetic": "美 [kə'lektiŋ]",
    "pos": "",
    "meaning": "集邮",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["collecting stamps的拼写和发音", "collecting stamps的基本用法"],
    "usage": {
      "collocations": "a collecting stamps; collecting stamps",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e648",
    "word": "pen pal",
    "phonetic": "美 [pen]",
    "pos": "",
    "meaning": "[pæl]笔友",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["pen pal的拼写和发音", "pen pal的基本用法"],
    "usage": {
      "collocations": "a pen pal; pen pal",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e649",
    "word": "dear",
    "phonetic": "美 [diə]",
    "pos": "adj.",
    "meaning": "亲爱的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["dear的拼写和发音", "dear的基本用法"],
    "usage": {
      "collocations": "love you; fall in love; love song; my love; love story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e650",
    "word": "twin",
    "phonetic": "美 [twin]",
    "pos": "",
    "meaning": "双胞胎之一",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["twin的拼写和发音", "twin的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e651",
    "word": "something",
    "phonetic": "美 ['sʌmθiŋ]",
    "pos": "n.",
    "meaning": "某事物",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["something的拼写和发音", "something的基本用法"],
    "usage": {
      "collocations": "a something; something",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e652",
    "word": "with",
    "phonetic": "美 [wiθ]",
    "pos": "",
    "meaning": "同……；和……",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["with的拼写和发音", "with的基本用法"],
    "usage": {
      "collocations": "a with; with",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e653",
    "word": "TV reporter",
    "phonetic": "美 [ri'pɔ:tə]",
    "pos": "",
    "meaning": "电视台记者",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["watch TV看电视", "TV program电视节目"],
    "usage": {
      "collocations": "watch TV; TV show; TV program; turn on the TV; TV set",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e654",
    "word": "live",
    "phonetic": "美 [liv]",
    "pos": "",
    "meaning": "居住；住",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["live的拼写和发音", "live的基本用法"],
    "usage": {
      "collocations": "a live; live",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e655",
    "word": "lives",
    "phonetic": "美 [laivz]",
    "pos": "adj.",
    "meaning": ":叶子的复数（life）",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["lives的拼写和发音", "lives的基本用法"],
    "usage": {
      "collocations": "a leaf; green leaves; tree leaves; a falling leaf",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e656",
    "word": "teach",
    "phonetic": "美 [ti:tʃ]",
    "pos": "",
    "meaning": "教",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["teach的拼写和发音", "teach的基本用法"],
    "usage": {
      "collocations": "a teach; teach",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e657",
    "word": "teaches",
    "phonetic": "美 [ti:tʃiz]",
    "pos": "n.",
    "meaning": "教（第三人称单数）",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["teaches的拼写和发音", "teaches的基本用法"],
    "usage": {
      "collocations": "three times; three days; three people; number three",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e658",
    "word": "watches",
    "phonetic": "美 [wɔtʃiz]",
    "pos": "n.",
    "meaning": "看（第三人称单数）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "look at; watch TV; see a film; look for; look like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e659",
    "word": "reads",
    "phonetic": "",
    "pos": "n.",
    "meaning": "读；看（第三人称单数）",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["look at看...", "watch TV看电视", "see a film看电影"],
    "usage": {
      "collocations": "look at; watch TV; see a film; look for; look like",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e660",
    "word": "does",
    "phonetic": "",
    "pos": "",
    "meaning": "[dʌz]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["does的拼写和发音", "does的基本用法"],
    "usage": {
      "collocations": "a does; does",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e661",
    "word": "different",
    "phonetic": "美 ['difərənt]",
    "pos": "adj.",
    "meaning": "不同的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["different的拼写和发音", "different的基本用法"],
    "usage": {
      "collocations": "a different; different",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e662",
    "word": "say",
    "phonetic": "美 [sei]",
    "pos": "v.",
    "meaning": "说；讲",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["speak English说英语", "say hello打招呼"],
    "usage": {
      "collocations": "speak English; say hello; say goodbye; tell a story",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e663",
    "word": "soon",
    "phonetic": "美 [su:n]",
    "pos": "",
    "meaning": "不久",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["soon的拼写和发音", "soon的基本用法"],
    "usage": {
      "collocations": "a soon; soon",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e664",
    "word": "excited",
    "phonetic": "美 [ik'saitid]",
    "pos": "adj.",
    "meaning": "兴奋的激动的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["excited的拼写和发音", "excited的基本用法"],
    "usage": {
      "collocations": "a excited; excited",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e665",
    "word": "singer",
    "phonetic": "美 ['siŋə]",
    "pos": "",
    "meaning": "歌唱家；歌手",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["hand复数hands", "hand in hand手拉手"],
    "usage": {
      "collocations": "wash hands; by hand; hand in hand; raise your hand",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e666",
    "word": "writer",
    "phonetic": "美 ['raitə]",
    "pos": "",
    "meaning": "作家",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["writer的拼写和发音", "writer的基本用法"],
    "usage": {
      "collocations": "a writer; writer",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e667",
    "word": "actor",
    "phonetic": "美 ['æktə]",
    "pos": "",
    "meaning": "男演员",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["actor的拼写和发音", "actor的基本用法"],
    "usage": {
      "collocations": "a actor; actor",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e668",
    "word": "actress",
    "phonetic": "美 ['æktris]",
    "pos": "",
    "meaning": "女演员",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["actress的拼写和发音", "actress的基本用法"],
    "usage": {
      "collocations": "a actress; actress",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e669",
    "word": "artist",
    "phonetic": "美 ['ɑ:tist]",
    "pos": "",
    "meaning": "画家",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["artist的拼写和发音", "artist的基本用法"],
    "usage": {
      "collocations": "draw a picture; draw well; draw a line; draw a flower",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e670",
    "word": "Hong Kong",
    "phonetic": "美 [hɔŋ]",
    "pos": "",
    "meaning": "[kɔŋ]香港",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["Hong Kong的拼写和发音", "Hong Kong的基本用法"],
    "usage": {
      "collocations": "a Hong Kong; Hong Kong",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e671",
    "word": "engineer",
    "phonetic": "美 [,endʒi'niə]",
    "pos": "",
    "meaning": "工程师",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["engineer的拼写和发音", "engineer的基本用法"],
    "usage": {
      "collocations": "a engineer; engineer",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e672",
    "word": "accountant",
    "phonetic": "美 [ə'kauntənt]",
    "pos": "",
    "meaning": "会计",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["accountant的拼写和发音", "accountant的基本用法"],
    "usage": {
      "collocations": "a accountant; accountant",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e673",
    "word": "policeman",
    "phonetic": "美 [pə'li:smən]",
    "pos": "",
    "meaning": "（男）警察",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["policeman的拼写和发音", "policeman的基本用法"],
    "usage": {
      "collocations": "a police man; police car; police station; police dog",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e674",
    "word": "salesperson",
    "phonetic": "美 [,seilz'pə:sən]",
    "pos": "",
    "meaning": "售货员",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["salesperson的拼写和发音", "salesperson的基本用法"],
    "usage": {
      "collocations": "a salesperson; salesperson",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e675",
    "word": "cleaner",
    "phonetic": "美 ['kli:nə]",
    "pos": "n.",
    "meaning": "n. 清洁工",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["cleaner的拼写和发音", "cleaner的基本用法"],
    "usage": {
      "collocations": "a cleaner; the cleaner; cleaners",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e676",
    "word": "company",
    "phonetic": "美 ['kɔmpəni]",
    "pos": "",
    "meaning": "公司",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["company的拼写和发音", "company的基本用法"],
    "usage": {
      "collocations": "a company; company",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e677",
    "word": "factory",
    "phonetic": "美 ['fæktəri]",
    "pos": "",
    "meaning": "工厂",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["factory的拼写和发音", "factory的基本用法"],
    "usage": {
      "collocations": "a factory; factory",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e678",
    "word": "design",
    "phonetic": "美 [di'zain]",
    "pos": "",
    "meaning": "设计",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["design的拼写和发音", "design的基本用法"],
    "usage": {
      "collocations": "a design; design",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e679",
    "word": "tip",
    "phonetic": "美 [tip]",
    "pos": "adj.",
    "meaning": "有用的小建议",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a small bird; very small; too small; small and big",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e680",
    "word": "money",
    "phonetic": "美 ['mʌni]",
    "pos": "",
    "meaning": "钱；金钱",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["a lot of money很多钱", "save money省钱"],
    "usage": {
      "collocations": "a lot of money; make money; save money; spend money; money box",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e681",
    "word": "enjoy",
    "phonetic": "美 [in'dʒɔi]",
    "pos": "",
    "meaning": "从…获得乐趣；享受",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["enjoy的拼写和发音", "enjoy的基本用法"],
    "usage": {
      "collocations": "a enjoy; enjoy",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e682",
    "word": "tourist",
    "phonetic": "美 ['tuərist]",
    "pos": "",
    "meaning": "旅行者；旅游者",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["tourist的拼写和发音", "tourist的基本用法"],
    "usage": {
      "collocations": "swim well; swim in the pool; go swimming; swim suit",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e683",
    "word": "way",
    "phonetic": "美 [wei]",
    "pos": "",
    "meaning": "路；道",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["way的拼写和发音", "way的基本用法"],
    "usage": {
      "collocations": "a road; on the road; road sign; a long road; road side",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e684",
    "word": "motor cycle",
    "phonetic": "美 ['məutə]",
    "pos": "",
    "meaning": "['saikl]摩托车",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["by car乘小汽车", "drive a car开车"],
    "usage": {
      "collocations": "a car; by car; drive a car; a new car; get in a car",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e685",
    "word": "police",
    "phonetic": "美 [pəli:s]",
    "pos": "",
    "meaning": "警方；警察部门",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["open the door开门", "close the door关门"],
    "usage": {
      "collocations": "open the door; close the door; a front door; a back door; door bell",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e686",
    "word": "vapour",
    "phonetic": "美 ['veipə]",
    "pos": "",
    "meaning": "蒸气；水汽",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["water是不可数名词", "a glass of water一杯水"],
    "usage": {
      "collocations": "a glass of water; water the flowers; water bottle; deep water",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e687",
    "word": "stream",
    "phonetic": "美 [stri:m]",
    "pos": "",
    "meaning": "（小）河；（小）溪",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a small bird; very small; too small; small and big",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e688",
    "word": "come from",
    "phonetic": "美 [kʌm]",
    "pos": "",
    "meaning": "[frɔm]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["come from的拼写和发音", "come from的基本用法"],
    "usage": {
      "collocations": "a come from; come from",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e689",
    "word": "shine",
    "phonetic": "美 [ʃain]",
    "pos": "",
    "meaning": "照耀",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["shine的拼写和发音", "shine的基本用法"],
    "usage": {
      "collocations": "a shine; shine",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e690",
    "word": "become",
    "phonetic": "美 [bi'kʌm]",
    "pos": "",
    "meaning": "变成",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["become的拼写和发音", "become的基本用法"],
    "usage": {
      "collocations": "a become; become",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e691",
    "word": "little",
    "phonetic": "美 ['litl]",
    "pos": "adj.",
    "meaning": "小的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["small的反义词是big/large", "a small bird一只小鸟"],
    "usage": {
      "collocations": "a small bird; very small; too small; small and big",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e692",
    "word": "drop",
    "phonetic": "美 [drɔp]",
    "pos": "adj.",
    "meaning": "(液体的)珠；滴",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["drop的拼写和发音", "drop的基本用法"],
    "usage": {
      "collocations": "a drop; drop",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e693",
    "word": "wake up",
    "phonetic": "美 [weik]",
    "pos": "v.",
    "meaning": "[ʌp]醒；醒来",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["come in进来", "come from来自"],
    "usage": {
      "collocations": "come in; come back; come from; come on; come here",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e694",
    "word": "feel",
    "phonetic": "美 ['fi:l]",
    "pos": "",
    "meaning": "感觉到；感受到",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["feel的拼写和发音", "feel的基本用法"],
    "usage": {
      "collocations": "a feel; feel",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e695",
    "word": "think",
    "phonetic": "美 [θiŋk]",
    "pos": "",
    "meaning": "想；思考",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["think的拼写和发音", "think的基本用法"],
    "usage": {
      "collocations": "a think; think",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e696",
    "word": "high",
    "phonetic": "美 [hai]",
    "pos": "adj.",
    "meaning": "高的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["tall的比较级是taller", "a tall tree一棵高树"],
    "usage": {
      "collocations": "tall and thin; very tall; a tall tree; a tall boy; how tall",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e697",
    "word": "other",
    "phonetic": "美 ['ʌðə]",
    "pos": "adj.",
    "meaning": "其他的;另外的;别的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["other的拼写和发音", "other的基本用法"],
    "usage": {
      "collocations": "a other; other",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e698",
    "word": "into",
    "phonetic": "美 ['intu:]",
    "pos": "",
    "meaning": "进入；到……里面",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["into的拼写和发音", "into的基本用法"],
    "usage": {
      "collocations": "a into; into",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e699",
    "word": "come out",
    "phonetic": "美 [kʌm]",
    "pos": "",
    "meaning": "[aut]露出;出现",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["come out的拼写和发音", "come out的基本用法"],
    "usage": {
      "collocations": "a come out; come out",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e700",
    "word": "again",
    "phonetic": "美 [ə'ɡen]",
    "pos": "",
    "meaning": "再一次；又；",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["again的拼写和发音", "again的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e701",
    "word": "seed",
    "phonetic": "美 [si:d]",
    "pos": "",
    "meaning": "种子",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["seed的拼写和发音", "seed的基本用法"],
    "usage": {
      "collocations": "a seed; plant seeds; sun flower seeds; a small seed",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e702",
    "word": "soil",
    "phonetic": "美 [sɔil]",
    "pos": "",
    "meaning": "土壤",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["soil的拼写和发音", "soil的基本用法"],
    "usage": {
      "collocations": "a soil; soil",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e703",
    "word": "sprout",
    "phonetic": "美 [spraut]",
    "pos": "",
    "meaning": "苗;嫩芽",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sprout的拼写和发音", "sprout的基本用法"],
    "usage": {
      "collocations": "a sprout; sprout",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e704",
    "word": "should",
    "phonetic": "美 [ʃud]",
    "pos": "",
    "meaning": "应该",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["should的拼写和发音", "should的基本用法"],
    "usage": {
      "collocations": "a should; should",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e705",
    "word": "easy",
    "phonetic": "美 ['i:zi]",
    "pos": "adj.",
    "meaning": "简单的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["easy的拼写和发音", "easy的基本用法"],
    "usage": {
      "collocations": "a easy; easy",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e706",
    "word": "several",
    "phonetic": "美 ['sevərəl]",
    "pos": "",
    "meaning": "一些（但不多）;几个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["several的拼写和发音", "several的基本用法"],
    "usage": {
      "collocations": "how many; a lot of; many thanks; many people; too many",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e707",
    "word": "day",
    "phonetic": "美 [dei]",
    "pos": "",
    "meaning": "天",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["day的拼写和发音", "day的基本用法"],
    "usage": {
      "collocations": "a day; day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e708",
    "word": "pot",
    "phonetic": "美 [pɔt]",
    "pos": "",
    "meaning": "锅；碗；瓢；盆",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["pot的拼写和发音", "pot的基本用法"],
    "usage": {
      "collocations": "a pot; pot",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e709",
    "word": "lovely",
    "phonetic": "美 ['lʌvli]",
    "pos": "adj.",
    "meaning": "可爱的；美丽的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["lovely的拼写和发音", "lovely的基本用法"],
    "usage": {
      "collocations": "beautiful flower; very beautiful; a beautiful girl; beautiful day",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e710",
    "word": "make sure",
    "phonetic": "美 [meik]",
    "pos": "",
    "meaning": "[suə]",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["make sure的拼写和发音", "make sure的基本用法"],
    "usage": {
      "collocations": "a make sure; make sure",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e711",
    "word": "month",
    "phonetic": "美 [mʌnθ]",
    "pos": "",
    "meaning": "月份；月",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["month的拼写和发音", "month的基本用法"],
    "usage": {
      "collocations": "a month; this month; last month; next month; a busy month",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e712",
    "word": "still",
    "phonetic": "美 [stil]",
    "pos": "",
    "meaning": "仍然；依旧；还是",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["still的拼写和发音", "still的基本用法"],
    "usage": {
      "collocations": "an old book; very old; old and new; an old man",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e713",
    "word": "hardly",
    "phonetic": "美 ['hɑ:dli]",
    "pos": "",
    "meaning": "几乎没有；几乎不",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["hardly的拼写和发音", "hardly的基本用法"],
    "usage": {
      "collocations": "a hardly; hardly",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e714",
    "word": "come on",
    "phonetic": "美 [kʌm]",
    "pos": "n.",
    "meaning": "[ɔn]用于祈使句以鼓励某人做某事，尤指促其加速或努力试一试",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["come on的拼写和发音", "come on的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e715",
    "word": "taller",
    "phonetic": "美 [tɔ:lə]",
    "pos": "adj.",
    "meaning": "更高的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["tall的比较级是taller", "a tall tree一棵高树"],
    "usage": {
      "collocations": "tall and thin; very tall; a tall tree; a tall boy; how tall",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e716",
    "word": "shorter",
    "phonetic": "美 [ʃɔ:tə]",
    "pos": "adj.",
    "meaning": "更矮的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["shorter的拼写和发音", "shorter的基本用法"],
    "usage": {
      "collocations": "a shorter; shorter",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e717",
    "word": "cm",
    "phonetic": "美 [centimeter[sentimitə]",
    "pos": "",
    "meaning": ")厘米",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["cm的拼写和发音", "cm的基本用法"],
    "usage": {
      "collocations": "a cm; cm",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e718",
    "word": "than",
    "phonetic": "美 [ðæn]",
    "pos": "",
    "meaning": "与…相比较",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["than的拼写和发音", "than的基本用法"],
    "usage": {
      "collocations": "a than; than",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e719",
    "word": "tail",
    "phonetic": "美 [teil]",
    "pos": "",
    "meaning": "尾巴",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["tail的拼写和发音", "tail的基本用法"],
    "usage": {
      "collocations": "a tail; tail",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e720",
    "word": "kg",
    "phonetic": "美 [kilogram ['kiləuɡræm]",
    "pos": "",
    "meaning": ")",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["kg的拼写和发音", "kg的基本用法"],
    "usage": {
      "collocations": "a kg; kg",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e721",
    "word": "thinner",
    "phonetic": "美 ['θinə]",
    "pos": "adj.",
    "meaning": "更瘦的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["thinner的拼写和发音", "thinner的基本用法"],
    "usage": {
      "collocations": "a thinner; thinner",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e722",
    "word": "feet",
    "phonetic": "美 [fi:t]",
    "pos": "",
    "meaning": "脚（复数）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["foot复数feet", "on foot步行"],
    "usage": {
      "collocations": "big feet; on foot; foot ball; wash feet",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e723",
    "word": "meter",
    "phonetic": "美 ['mi:tə]",
    "pos": "",
    "meaning": "米",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["meter的拼写和发音", "meter的基本用法"],
    "usage": {
      "collocations": "a meter; meter",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e724",
    "word": "ton",
    "phonetic": "美 [tʌn]",
    "pos": "",
    "meaning": "吨",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["ton的拼写和发音", "ton的基本用法"],
    "usage": {
      "collocations": "a ton; ton",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e725",
    "word": "each",
    "phonetic": "美 [i:tʃ]",
    "pos": "",
    "meaning": "各自；每个",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["each的拼写和发音", "each的基本用法"],
    "usage": {
      "collocations": "a each; each",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e726",
    "word": "squid",
    "phonetic": "美 [skwid]",
    "pos": "",
    "meaning": "鱿鱼",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["fish单复数同形", "go fishing去钓鱼"],
    "usage": {
      "collocations": "catch fish; eat fish; fish tank; go fishing",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e727",
    "word": "lobster",
    "phonetic": "美 ['lɔbstə]",
    "pos": "",
    "meaning": "龙虾",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["lobster的拼写和发音", "lobster的基本用法"],
    "usage": {
      "collocations": "a lobster; lobster",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e728",
    "word": "shark",
    "phonetic": "美 [ʃɑ:k]",
    "pos": "",
    "meaning": "鲨鱼",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["fish单复数同形", "go fishing去钓鱼"],
    "usage": {
      "collocations": "catch fish; eat fish; fish tank; go fishing",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e729",
    "word": "deep",
    "phonetic": "美 [di:p]",
    "pos": "adj.",
    "meaning": "深的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["deep的拼写和发音", "deep的基本用法"],
    "usage": {
      "collocations": "a deep; deep",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e730",
    "word": "seal",
    "phonetic": "美 [si:l]",
    "pos": "",
    "meaning": "海豹",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["seal的拼写和发音", "seal的基本用法"],
    "usage": {
      "collocations": "a seal; seal",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e731",
    "word": "sperm whale",
    "phonetic": "美 [spɜ:m]",
    "pos": "",
    "meaning": "[weil]抹香鲸",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["sperm whale的拼写和发音", "sperm whale的基本用法"],
    "usage": {
      "collocations": "a whale; whale watching; blue whale",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e732",
    "word": "killer whale",
    "phonetic": "美 ['kilə]",
    "pos": "",
    "meaning": "虎鲸",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["killer whale的拼写和发音", "killer whale的基本用法"],
    "usage": {
      "collocations": "a tiger cage; tiger skin; paper tiger",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e733",
    "word": "even",
    "phonetic": "美 ['i:vən]",
    "pos": "",
    "meaning": "甚至",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["even的拼写和发音", "even的基本用法"],
    "usage": {
      "collocations": "a even; even",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e734",
    "word": "have a fever",
    "phonetic": "美 [fi:və]",
    "pos": "",
    "meaning": "发烧",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["have a fever的拼写和发音", "have a fever的基本用法"],
    "usage": {
      "collocations": "a have a fever; have a fever",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e735",
    "word": "hurt",
    "phonetic": "美 [hə:t]",
    "pos": "",
    "meaning": "疼痛",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["hurt的拼写和发音", "hurt的基本用法"],
    "usage": {
      "collocations": "a hurt; hurt",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e736",
    "word": "have a cold",
    "phonetic": "美 [kəuld]",
    "pos": "",
    "meaning": "感冒;伤风",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["wind y day刮风天", "a cold wind寒风"],
    "usage": {
      "collocations": "strong wind; wind y day; a cold wind; wind mill",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e737",
    "word": "have a toothache",
    "phonetic": "美 ['tu:θeik]",
    "pos": "",
    "meaning": "牙疼",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["tooth复数teeth", "brush teeth刷牙"],
    "usage": {
      "collocations": "brush teeth; a tooth ache; a sweet tooth; tooth brush",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e738",
    "word": "have a headache",
    "phonetic": "美 ['hedeik]",
    "pos": "",
    "meaning": "头疼",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["nod one's head点头", "headache头痛"],
    "usage": {
      "collocations": "nod one's head; shake one's head; a big head; head ache",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e739",
    "word": "sore",
    "phonetic": "美 [sɔ:]",
    "pos": "adj.",
    "meaning": "疼的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["sore的拼写和发音", "sore的基本用法"],
    "usage": {
      "collocations": "a sore; sore",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e740",
    "word": "sick",
    "phonetic": "美 [sik]",
    "pos": "adj.",
    "meaning": "不舒服的；有病的",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["sick的拼写和发音", "sick的基本用法"],
    "usage": {
      "collocations": "a sick; sick",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e741",
    "word": "flu",
    "phonetic": "美 [flu:]",
    "pos": "",
    "meaning": "流感",
    "unit": "u3",
    "difficulty": 1,
    "examPoints": ["flu的拼写和发音", "flu的基本用法"],
    "usage": {
      "collocations": "a flu; flu",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e742",
    "word": "angry",
    "phonetic": "美 ['æŋgri]",
    "pos": "adj.",
    "meaning": "生气的；愤怒的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["angry的拼写和发音", "angry的基本用法"],
    "usage": {
      "collocations": "very angry; angry with; angry at; look angry; too angry",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e743",
    "word": "happy",
    "phonetic": "美 ['hæpi]",
    "pos": "adj.",
    "meaning": "高兴的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["tall的比较级是taller", "a tall tree一棵高树"],
    "usage": {
      "collocations": "tall and thin; very tall; a tall tree; a tall boy; how tall",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e744",
    "word": "bored",
    "phonetic": "美 [bɒ:d]",
    "pos": "adj.",
    "meaning": "无聊的；烦人的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["bored的拼写和发音", "bored的基本用法"],
    "usage": {
      "collocations": "a bored; bored",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e745",
    "word": "sad",
    "phonetic": "美 [sæd]",
    "pos": "adj.",
    "meaning": "忧愁的；悲伤的",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["sad的拼写和发音", "sad的基本用法"],
    "usage": {
      "collocations": "a sad; sad",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e746",
    "word": "hear",
    "phonetic": "美 [hiə]",
    "pos": "v.",
    "meaning": "听见；听到",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["listen to听...", "listen carefully认真听"],
    "usage": {
      "collocations": "listen to; hear from; hear of; listen carefully",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e747",
    "word": "a little",
    "phonetic": "美 ['litl]",
    "pos": "",
    "meaning": "有些",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["a little的拼写和发音", "a little的基本用法"],
    "usage": {
      "collocations": "a a little; a little",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e748",
    "word": "goal",
    "phonetic": "美 [gəul]",
    "pos": "",
    "meaning": "得分数",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["goal的拼写和发音", "goal的基本用法"],
    "usage": {
      "collocations": "a good score; get a score; high score; test score",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e749",
    "word": "bounce",
    "phonetic": "美 [bauns]",
    "pos": "",
    "meaning": "反弹",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["bounce的拼写和发音", "bounce的基本用法"],
    "usage": {
      "collocations": "a bounce; bounce",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e750",
    "word": "off",
    "phonetic": "美 [ɒ:f]",
    "pos": "",
    "meaning": "距；离；离开",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["off的拼写和发音", "off的基本用法"],
    "usage": {
      "collocations": "open the door; open the window; open the book; open your eyes",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e751",
    "word": "another",
    "phonetic": "美 [ə'nʌðə]",
    "pos": "",
    "meaning": "另一个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["another的拼写和发音", "another的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e752",
    "word": "guess",
    "phonetic": "美 [ges]",
    "pos": "",
    "meaning": "猜测",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["guess的拼写和发音", "guess的基本用法"],
    "usage": {
      "collocations": "a guess; guess",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e753",
    "word": "win",
    "phonetic": "美 [win]",
    "pos": "v.",
    "meaning": "（过去式won [wʌn]）赢",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "go to school; go home; go shopping; go away; let's go",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e754",
    "word": "laugh at",
    "phonetic": "美 [lɑ:f]",
    "pos": "",
    "meaning": "[ æt ]因…而发笑",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["laugh at的拼写和发音", "laugh at的基本用法"],
    "usage": {
      "collocations": "laugh at; a big smile; smile at; laugh loudly",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e755",
    "word": "last",
    "phonetic": "美 [lɑ:st]",
    "pos": "",
    "meaning": "上一个",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["last的拼写和发音", "last的基本用法"],
    "usage": {
      "collocations": "one by one; one and only; one day; No. 1; one more",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e756",
    "word": "go swimming",
    "phonetic": "美 ['swimiŋ]",
    "pos": "v.",
    "meaning": "去游泳",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "swim well; swim in the pool; go swimming; swim suit",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e757",
    "word": "tongue",
    "phonetic": "",
    "pos": "",
    "meaning": "twister",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["tongue的拼写和发音", "tongue的基本用法"],
    "usage": {
      "collocations": "a tongue; tongue",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e758",
    "word": "return",
    "phonetic": "美 [ri'tə:n]",
    "pos": "",
    "meaning": "送回；归还",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["return的拼写和发音", "return的基本用法"],
    "usage": {
      "collocations": "a return; return",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e759",
    "word": "learn",
    "phonetic": "美 [lə:n]",
    "pos": "",
    "meaning": "学习",
    "unit": "u4",
    "difficulty": 1,
    "examPoints": ["learn的拼写和发音", "learn的基本用法"],
    "usage": {
      "collocations": "a learn; learn",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e760",
    "word": "sing",
    "phonetic": "美 [siŋ]",
    "pos": "",
    "meaning": "唱歌",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["sing a song唱歌", "a pop song流行歌曲"],
    "usage": {
      "collocations": "sing a song; sing well; sing along; sing together",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e761",
    "word": "dance",
    "phonetic": "美 ['dɑ:ns]",
    "pos": "v.",
    "meaning": "跳舞（过去式danced）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "jump high; jump far; jump rope; long jump; high jump",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e762",
    "word": "good",
    "phonetic": "美 [gʊd]",
    "pos": "adj.",
    "meaning": "好的",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["good的比较级是better", "good morning早上好"],
    "usage": {
      "collocations": "very good; good morning; good job; a good idea; good bye",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e763",
    "word": "present",
    "phonetic": "美 [pri'zent]",
    "pos": "n.",
    "meaning": "礼物",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["a birthday gift生日礼物", "give a gift送礼物"],
    "usage": {
      "collocations": "a gift; a present; birthday gift; give a gift; a small gift",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e764",
    "word": "row",
    "phonetic": "美 [rau]",
    "pos": "",
    "meaning": "划（船）",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["row的拼写和发音", "row的基本用法"],
    "usage": {
      "collocations": "a boat; a ship; by boat; take a boat; a small boat",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e765",
    "word": "go skiing",
    "phonetic": "美 ['ski:iŋ]",
    "pos": "v.",
    "meaning": "去滑雪",
    "unit": "u2",
    "difficulty": 1,
    "examPoints": ["go to school去上学", "go home回家"],
    "usage": {
      "collocations": "white snow; snow man; snow ball; a snowy day; play with snow",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e766",
    "word": "relax",
    "phonetic": "美 [ri'læks]",
    "pos": "",
    "meaning": "放松",
    "unit": "u1",
    "difficulty": 1,
    "examPoints": ["relax的拼写和发音", "relax的基本用法"],
    "usage": {
      "collocations": "a relax; relax",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  },
  {
    "id": "e767",
    "word": "prepare",
    "phonetic": "美 [pri'peə]",
    "pos": "",
    "meaning": "准备",
    "unit": "u5",
    "difficulty": 1,
    "examPoints": ["prepare的拼写和发音", "prepare的基本用法"],
    "usage": {
      "collocations": "a prepare; prepare",
      "patterns": "",
      "notes": ""
    },
    "examples": []
  }
]
};
