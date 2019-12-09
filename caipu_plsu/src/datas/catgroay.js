
// 菜谱分类
const MenuCatgroay = {
	status: 0,
	msg: 'ok',
	result: [
		{
			classid: 1,
			name: '功效',
			parentid: 0,
			list: [
				{
					classid: 2,
					name: '减肥',
					parentid: 1
				},
				{
					classid: 3,
					name: '瘦身',
					parentid: 1
				},
				{
					classid: 4,
					name: '消脂',
					parentid: 1
				},
				{
					classid: 5,
					name: '丰胸',
					parentid: 1
				},
				{
					classid: 6,
					name: '美容',
					parentid: 1
				},
				{
					classid: 7,
					name: '养颜',
					parentid: 1
				},
				{
					classid: 8,
					name: '美白',
					parentid: 1
				},
				{
					classid: 9,
					name: '防晒',
					parentid: 1
				},
				{
					classid: 10,
					name: '排毒',
					parentid: 1
				},
				{
					classid: 11,
					name: '祛痘',
					parentid: 1
				},
				{
					classid: 12,
					name: '祛斑',
					parentid: 1
				},
				{
					classid: 13,
					name: '保湿',
					parentid: 1
				},
				{
					classid: 14,
					name: '补水',
					parentid: 1
				},
				{
					classid: 15,
					name: '通乳',
					parentid: 1
				},
				{
					classid: 16,
					name: '催乳',
					parentid: 1
				},
				{
					classid: 17,
					name: '回奶',
					parentid: 1
				},
				{
					classid: 18,
					name: '下奶',
					parentid: 1
				},
				{
					classid: 19,
					name: '调经',
					parentid: 1
				},
				{
					classid: 20,
					name: '安胎',
					parentid: 1
				},
				{
					classid: 21,
					name: '抗衰老',
					parentid: 1
				},
				{
					classid: 22,
					name: '抗氧化',
					parentid: 1
				},
				{
					classid: 23,
					name: '延缓衰老',
					parentid: 1
				},
				{
					classid: 24,
					name: '补钙',
					parentid: 1
				},
				{
					classid: 25,
					name: '补铁',
					parentid: 1
				},
				{
					classid: 26,
					name: '补锌',
					parentid: 1
				},
				{
					classid: 27,
					name: '补碘',
					parentid: 1
				},
				{
					classid: 28,
					name: '补硒',
					parentid: 1
				},
				{
					classid: 29,
					name: '补虚',
					parentid: 1
				},
				{
					classid: 30,
					name: '降血脂',
					parentid: 1
				},
				{
					classid: 31,
					name: '降血糖',
					parentid: 1
				},
				{
					classid: 32,
					name: '降血压',
					parentid: 1
				},
				{
					classid: 33,
					name: '降低胆固醇',
					parentid: 1
				},
				{
					classid: 34,
					name: '解酒',
					parentid: 1
				},
				{
					classid: 35,
					name: '提神',
					parentid: 1
				},
				{
					classid: 36,
					name: '增高',
					parentid: 1
				},
				{
					classid: 37,
					name: '解暑',
					parentid: 1
				},
				{
					classid: 38,
					name: '清热解暑',
					parentid: 1
				},
				{
					classid: 39,
					name: '清热解毒',
					parentid: 1
				},
				{
					classid: 40,
					name: '去火',
					parentid: 1
				},
				{
					classid: 41,
					name: '清火',
					parentid: 1
				},
				{
					classid: 42,
					name: '下火',
					parentid: 1
				},
				{
					classid: 43,
					name: '清热下火',
					parentid: 1
				},
				{
					classid: 44,
					name: '生津止渴',
					parentid: 1
				},
				{
					classid: 45,
					name: '止泻',
					parentid: 1
				},
				{
					classid: 46,
					name: '增肥',
					parentid: 1
				},
				{
					classid: 47,
					name: '抗过敏',
					parentid: 1
				},
				{
					classid: 48,
					name: '补气',
					parentid: 1
				},
				{
					classid: 49,
					name: '补血',
					parentid: 1
				},
				{
					classid: 50,
					name: '补气血',
					parentid: 1
				},
				{
					classid: 51,
					name: '暖宫',
					parentid: 1
				},
				{
					classid: 52,
					name: '补肝',
					parentid: 1
				},
				{
					classid: 53,
					name: '护肝',
					parentid: 1
				},
				{
					classid: 54,
					name: '养肝护肝',
					parentid: 1
				},
				{
					classid: 55,
					name: '明目',
					parentid: 1
				},
				{
					classid: 56,
					name: '清肝明目',
					parentid: 1
				},
				{
					classid: 57,
					name: '补肾',
					parentid: 1
				},
				{
					classid: 58,
					name: '壮阳',
					parentid: 1
				},
				{
					classid: 59,
					name: '乌发',
					parentid: 1
				},
				{
					classid: 60,
					name: '防脱发',
					parentid: 1
				},
				{
					classid: 61,
					name: '利尿',
					parentid: 1
				},
				{
					classid: 62,
					name: '利水消肿',
					parentid: 1
				},
				{
					classid: 63,
					name: '润肺',
					parentid: 1
				},
				{
					classid: 64,
					name: '清肺',
					parentid: 1
				},
				{
					classid: 65,
					name: '养肺',
					parentid: 1
				},
				{
					classid: 66,
					name: '润肺止咳',
					parentid: 1
				},
				{
					classid: 67,
					name: '止咳',
					parentid: 1
				},
				{
					classid: 68,
					name: '化痰',
					parentid: 1
				},
				{
					classid: 69,
					name: '止咳化痰',
					parentid: 1
				},
				{
					classid: 70,
					name: '清肺化痰',
					parentid: 1
				},
				{
					classid: 71,
					name: '清热利咽',
					parentid: 1
				},
				{
					classid: 72,
					name: '补心',
					parentid: 1
				},
				{
					classid: 73,
					name: '养心',
					parentid: 1
				},
				{
					classid: 74,
					name: '补中益气',
					parentid: 1
				},
				{
					classid: 75,
					name: '安神',
					parentid: 1
				},
				{
					classid: 76,
					name: '助睡眠',
					parentid: 1
				},
				{
					classid: 77,
					name: '宁心安神',
					parentid: 1
				},
				{
					classid: 78,
					name: '健脾',
					parentid: 1
				},
				{
					classid: 79,
					name: '养胃',
					parentid: 1
				},
				{
					classid: 80,
					name: '开胃',
					parentid: 1
				},
				{
					classid: 81,
					name: '健脾胃',
					parentid: 1
				},
				{
					classid: 82,
					name: '调理肠胃',
					parentid: 1
				},
				{
					classid: 83,
					name: '促消化',
					parentid: 1
				},
				{
					classid: 84,
					name: '润肠通便',
					parentid: 1
				},
				{
					classid: 85,
					name: '健脑益智',
					parentid: 1
				},
				{
					classid: 86,
					name: '健脑',
					parentid: 1
				},
				{
					classid: 87,
					name: '益智',
					parentid: 1
				},
				{
					classid: 88,
					name: '强筋健骨',
					parentid: 1
				},
				{
					classid: 89,
					name: '凉血',
					parentid: 1
				},
				{
					classid: 90,
					name: '祛寒',
					parentid: 1
				},
				{
					classid: 91,
					name: '活血化瘀',
					parentid: 1
				},
				{
					classid: 92,
					name: '祛风散寒',
					parentid: 1
				},
				{
					classid: 93,
					name: '抗疲劳',
					parentid: 1
				},
				{
					classid: 94,
					name: '去湿气',
					parentid: 1
				},
				{
					classid: 95,
					name: '抗癌',
					parentid: 1
				},
				{
					classid: 96,
					name: '防癌',
					parentid: 1
				},
				{
					classid: 97,
					name: '增强记忆力',
					parentid: 1
				},
				{
					classid: 98,
					name: '驱虫',
					parentid: 1
				},
				{
					classid: 99,
					name: '止痛',
					parentid: 1
				},
				{
					classid: 100,
					name: '杀菌',
					parentid: 1
				},
				{
					classid: 101,
					name: '抗菌',
					parentid: 1
				},
				{
					classid: 102,
					name: '通窍',
					parentid: 1
				},
				{
					classid: 103,
					name: '滋阴',
					parentid: 1
				},
				{
					classid: 104,
					name: '滋阴润燥',
					parentid: 1
				},
				{
					classid: 105,
					name: '滋阴补肾',
					parentid: 1
				},
				{
					classid: 106,
					name: '滋阴壮阳',
					parentid: 1
				},
				{
					classid: 107,
					name: '滋阴降火',
					parentid: 1
				},
				{
					classid: 108,
					name: '防辐射',
					parentid: 1
				},
				{
					classid: 109,
					name: '提高免疫力',
					parentid: 1
				},
				{
					classid: 110,
					name: '缓解压力',
					parentid: 1
				},
				{
					classid: 111,
					name: '增强免疫力',
					parentid: 1
				},
				{
					classid: 112,
					name: '祛痘美白',
					parentid: 1
				}
			]
		},
		{
			classid: 113,
			name: '人群',
			parentid: 0,
			list: [
				{
					classid: 114,
					name: '孕妇',
					parentid: 113
				},
				{
					classid: 115,
					name: '备孕期',
					parentid: 113
				},
				{
					classid: 116,
					name: '孕早期',
					parentid: 113
				},
				{
					classid: 117,
					name: '孕中期',
					parentid: 113
				},
				{
					classid: 118,
					name: '孕晚期',
					parentid: 113
				},
				{
					classid: 119,
					name: '产妇',
					parentid: 113
				},
				{
					classid: 120,
					name: '坐月子',
					parentid: 113
				},
				{
					classid: 121,
					name: '婴儿',
					parentid: 113
				},
				{
					classid: 122,
					name: '幼儿',
					parentid: 113
				},
				{
					classid: 123,
					name: '宝宝',
					parentid: 113
				},
				{
					classid: 124,
					name: '一岁宝宝',
					parentid: 113
				},
				{
					classid: 125,
					name: '两岁宝宝',
					parentid: 113
				},
				{
					classid: 126,
					name: '三岁宝宝',
					parentid: 113
				},
				{
					classid: 127,
					name: '儿童',
					parentid: 113
				},
				{
					classid: 128,
					name: '青少年',
					parentid: 113
				},
				{
					classid: 129,
					name: '学生',
					parentid: 113
				},
				{
					classid: 130,
					name: '小学生',
					parentid: 113
				},
				{
					classid: 131,
					name: '中学生',
					parentid: 113
				},
				{
					classid: 132,
					name: '考生',
					parentid: 113
				},
				{
					classid: 133,
					name: '白领',
					parentid: 113
				},
				{
					classid: 134,
					name: '中年人',
					parentid: 113
				},
				{
					classid: 135,
					name: '更年期',
					parentid: 113
				},
				{
					classid: 136,
					name: '老年人',
					parentid: 113
				},
				{
					classid: 137,
					name: '司机',
					parentid: 113
				},
				{
					classid: 138,
					name: '运动员',
					parentid: 113
				},
				{
					classid: 139,
					name: '体力劳动者',
					parentid: 113
				},
				{
					classid: 140,
					name: '脑力劳动者',
					parentid: 113
				},
				{
					classid: 141,
					name: '男性养生',
					parentid: 113
				},
				{
					classid: 142,
					name: '女性养生',
					parentid: 113
				},
				{
					classid: 143,
					name: '术后恢复',
					parentid: 113
				}
			]
		},
		{
			classid: 144,
			name: '疾病',
			parentid: 0,
			list: [
				{
					classid: 145,
					name: '糖尿病',
					parentid: 144
				},
				{
					classid: 146,
					name: '高血压',
					parentid: 144
				},
				{
					classid: 147,
					name: '高血脂',
					parentid: 144
				},
				{
					classid: 148,
					name: '冠心病',
					parentid: 144
				},
				{
					classid: 149,
					name: '痛风',
					parentid: 144
				},
				{
					classid: 150,
					name: '动脉硬化',
					parentid: 144
				},
				{
					classid: 151,
					name: '中风',
					parentid: 144
				},
				{
					classid: 152,
					name: '肥胖',
					parentid: 144
				},
				{
					classid: 153,
					name: '宫寒',
					parentid: 144
				},
				{
					classid: 154,
					name: '气虚',
					parentid: 144
				},
				{
					classid: 155,
					name: '痛经',
					parentid: 144
				},
				{
					classid: 156,
					name: '贫血',
					parentid: 144
				},
				{
					classid: 157,
					name: '月经不调',
					parentid: 144
				},
				{
					classid: 158,
					name: '缺铁性贫血',
					parentid: 144
				},
				{
					classid: 159,
					name: '低血糖',
					parentid: 144
				},
				{
					classid: 160,
					name: '内分泌失调',
					parentid: 144
				},
				{
					classid: 161,
					name: '哮喘',
					parentid: 144
				},
				{
					classid: 162,
					name: '咽炎',
					parentid: 144
				},
				{
					classid: 163,
					name: '口腔溃疡',
					parentid: 144
				},
				{
					classid: 164,
					name: '肺热',
					parentid: 144
				},
				{
					classid: 165,
					name: '肺炎',
					parentid: 144
				},
				{
					classid: 166,
					name: '支气管炎',
					parentid: 144
				},
				{
					classid: 167,
					name: '咳嗽',
					parentid: 144
				},
				{
					classid: 168,
					name: '发烧',
					parentid: 144
				},
				{
					classid: 169,
					name: '鼻塞',
					parentid: 144
				},
				{
					classid: 170,
					name: '咽喉炎',
					parentid: 144
				},
				{
					classid: 171,
					name: '过敏',
					parentid: 144
				},
				{
					classid: 172,
					name: '风寒',
					parentid: 144
				},
				{
					classid: 173,
					name: '感冒',
					parentid: 144
				},
				{
					classid: 174,
					name: '小儿咳嗽',
					parentid: 144
				},
				{
					classid: 175,
					name: '腹泻',
					parentid: 144
				},
				{
					classid: 176,
					name: '拉肚子',
					parentid: 144
				},
				{
					classid: 177,
					name: '口臭',
					parentid: 144
				},
				{
					classid: 178,
					name: '牙痛',
					parentid: 144
				},
				{
					classid: 179,
					name: '掉头发',
					parentid: 144
				},
				{
					classid: 180,
					name: '晕车',
					parentid: 144
				},
				{
					classid: 181,
					name: '胃痛',
					parentid: 144
				},
				{
					classid: 182,
					name: '胃寒',
					parentid: 144
				},
				{
					classid: 183,
					name: '胃出血',
					parentid: 144
				},
				{
					classid: 184,
					name: '消化不良',
					parentid: 144
				},
				{
					classid: 185,
					name: '便秘',
					parentid: 144
				},
				{
					classid: 186,
					name: '脂肪肝',
					parentid: 144
				},
				{
					classid: 187,
					name: '尿频',
					parentid: 144
				},
				{
					classid: 188,
					name: '肾虚',
					parentid: 144
				},
				{
					classid: 189,
					name: '阳痿',
					parentid: 144
				},
				{
					classid: 190,
					name: '健忘',
					parentid: 144
				},
				{
					classid: 191,
					name: '失眠',
					parentid: 144
				},
				{
					classid: 192,
					name: '水肿',
					parentid: 144
				},
				{
					classid: 193,
					name: '骨折',
					parentid: 144
				},
				{
					classid: 194,
					name: '脾虚',
					parentid: 144
				},
				{
					classid: 195,
					name: '骨质疏松',
					parentid: 144
				},
				{
					classid: 196,
					name: '骨质增生',
					parentid: 144
				},
				{
					classid: 197,
					name: '肠炎',
					parentid: 144
				},
				{
					classid: 198,
					name: '胆结石',
					parentid: 144
				},
				{
					classid: 199,
					name: '胆囊炎',
					parentid: 144
				},
				{
					classid: 200,
					name: '肺结核',
					parentid: 144
				},
				{
					classid: 201,
					name: '肝炎',
					parentid: 144
				},
				{
					classid: 202,
					name: '过敏性鼻炎',
					parentid: 144
				},
				{
					classid: 203,
					name: '甲亢',
					parentid: 144
				},
				{
					classid: 204,
					name: '偏头痛',
					parentid: 144
				},
				{
					classid: 205,
					name: '前列腺炎',
					parentid: 144
				},
				{
					classid: 206,
					name: '乳腺增生',
					parentid: 144
				},
				{
					classid: 207,
					name: '肾结石',
					parentid: 144
				},
				{
					classid: 208,
					name: '肾炎',
					parentid: 144
				},
				{
					classid: 209,
					name: '胃溃疡',
					parentid: 144
				},
				{
					classid: 210,
					name: '胃炎',
					parentid: 144
				},
				{
					classid: 211,
					name: '痔疮',
					parentid: 144
				},
				{
					classid: 212,
					name: '子宫肌瘤',
					parentid: 144
				}
			]
		},
		{
			classid: 213,
			name: '体质',
			parentid: 0,
			list: [
				{
					classid: 214,
					name: '气虚质',
					parentid: 213
				},
				{
					classid: 215,
					name: '阳虚质',
					parentid: 213
				},
				{
					classid: 216,
					name: '阴虚质',
					parentid: 213
				},
				{
					classid: 217,
					name: '湿热质',
					parentid: 213
				},
				{
					classid: 218,
					name: '痰湿质',
					parentid: 213
				},
				{
					classid: 219,
					name: '血瘀质',
					parentid: 213
				},
				{
					classid: 220,
					name: '特禀质',
					parentid: 213
				},
				{
					classid: 221,
					name: '气郁质',
					parentid: 213
				},
				{
					classid: 222,
					name: '阳盛质',
					parentid: 213
				}
			]
		},
		{
			classid: 223,
			name: '菜系',
			parentid: 0,
			list: [
				{
					classid: 224,
					name: '川菜',
					parentid: 223
				},
				{
					classid: 225,
					name: '湘菜',
					parentid: 223
				},
				{
					classid: 226,
					name: '粤菜',
					parentid: 223
				},
				{
					classid: 227,
					name: '闽菜',
					parentid: 223
				},
				{
					classid: 228,
					name: '浙菜',
					parentid: 223
				},
				{
					classid: 229,
					name: '鲁菜',
					parentid: 223
				},
				{
					classid: 230,
					name: '苏菜',
					parentid: 223
				},
				{
					classid: 231,
					name: '徽菜',
					parentid: 223
				},
				{
					classid: 232,
					name: '京菜',
					parentid: 223
				},
				{
					classid: 233,
					name: '天津菜',
					parentid: 223
				},
				{
					classid: 234,
					name: '上海菜',
					parentid: 223
				},
				{
					classid: 235,
					name: '渝菜',
					parentid: 223
				},
				{
					classid: 236,
					name: '东北菜',
					parentid: 223
				},
				{
					classid: 237,
					name: '清真菜',
					parentid: 223
				},
				{
					classid: 238,
					name: '豫菜',
					parentid: 223
				},
				{
					classid: 239,
					name: '晋菜',
					parentid: 223
				},
				{
					classid: 240,
					name: '赣菜',
					parentid: 223
				},
				{
					classid: 241,
					name: '湖北菜',
					parentid: 223
				},
				{
					classid: 242,
					name: '云南菜',
					parentid: 223
				},
				{
					classid: 243,
					name: '贵州菜',
					parentid: 223
				},
				{
					classid: 244,
					name: '新疆菜',
					parentid: 223
				},
				{
					classid: 245,
					name: '淮扬菜',
					parentid: 223
				},
				{
					classid: 246,
					name: '潮州菜',
					parentid: 223
				},
				{
					classid: 247,
					name: '客家菜',
					parentid: 223
				},
				{
					classid: 248,
					name: '广西菜',
					parentid: 223
				},
				{
					classid: 249,
					name: '西北菜',
					parentid: 223
				},
				{
					classid: 250,
					name: '香港美食',
					parentid: 223
				},
				{
					classid: 251,
					name: '台湾菜',
					parentid: 223
				},
				{
					classid: 252,
					name: '澳门美食',
					parentid: 223
				},
				{
					classid: 253,
					name: '西餐',
					parentid: 223
				},
				{
					classid: 254,
					name: '日本料理',
					parentid: 223
				},
				{
					classid: 255,
					name: '韩国料理',
					parentid: 223
				},
				{
					classid: 256,
					name: '泰国菜',
					parentid: 223
				},
				{
					classid: 257,
					name: '越南菜',
					parentid: 223
				},
				{
					classid: 258,
					name: '意大利菜',
					parentid: 223
				},
				{
					classid: 259,
					name: '墨西哥菜',
					parentid: 223
				},
				{
					classid: 260,
					name: '西班牙菜',
					parentid: 223
				},
				{
					classid: 261,
					name: '法国菜',
					parentid: 223
				},
				{
					classid: 262,
					name: '美国菜',
					parentid: 223
				},
				{
					classid: 263,
					name: '巴西烧烤',
					parentid: 223
				},
				{
					classid: 264,
					name: '东南亚菜',
					parentid: 223
				},
				{
					classid: 265,
					name: '印度菜',
					parentid: 223
				},
				{
					classid: 266,
					name: '伊朗菜',
					parentid: 223
				},
				{
					classid: 267,
					name: '土耳其菜',
					parentid: 223
				},
				{
					classid: 268,
					name: '澳大利亚菜',
					parentid: 223
				}
			]
		},
		{
			classid: 269,
			name: '小吃',
			parentid: 0,
			list: [
				{
					classid: 270,
					name: '北京小吃',
					parentid: 269
				},
				{
					classid: 271,
					name: '上海小吃',
					parentid: 269
				},
				{
					classid: 272,
					name: '天津小吃',
					parentid: 269
				},
				{
					classid: 273,
					name: '四川小吃',
					parentid: 269
				},
				{
					classid: 274,
					name: '成都小吃',
					parentid: 269
				},
				{
					classid: 275,
					name: '南京小吃',
					parentid: 269
				},
				{
					classid: 276,
					name: '浙江小吃',
					parentid: 269
				},
				{
					classid: 277,
					name: '苏州小吃',
					parentid: 269
				},
				{
					classid: 278,
					name: '长沙小吃',
					parentid: 269
				},
				{
					classid: 279,
					name: '湖北小吃',
					parentid: 269
				},
				{
					classid: 280,
					name: '武汉小吃',
					parentid: 269
				},
				{
					classid: 281,
					name: '广东小吃',
					parentid: 269
				},
				{
					classid: 282,
					name: '广州小吃',
					parentid: 269
				},
				{
					classid: 283,
					name: '潮汕小吃',
					parentid: 269
				},
				{
					classid: 284,
					name: '广西小吃',
					parentid: 269
				},
				{
					classid: 285,
					name: '陕西小吃',
					parentid: 269
				},
				{
					classid: 286,
					name: '西安小吃',
					parentid: 269
				},
				{
					classid: 287,
					name: '新疆小吃',
					parentid: 269
				},
				{
					classid: 288,
					name: '开封小吃',
					parentid: 269
				},
				{
					classid: 289,
					name: '云南小吃',
					parentid: 269
				},
				{
					classid: 290,
					name: '贵州小吃',
					parentid: 269
				},
				{
					classid: 291,
					name: '台湾小吃',
					parentid: 269
				},
				{
					classid: 292,
					name: '香港小吃',
					parentid: 269
				},
				{
					classid: 293,
					name: '澳门小吃',
					parentid: 269
				},
				{
					classid: 294,
					name: '河南小吃',
					parentid: 269
				},
				{
					classid: 295,
					name: '青岛小吃',
					parentid: 269
				},
				{
					classid: 296,
					name: '沙县小吃',
					parentid: 269
				},
				{
					classid: 297,
					name: '厦门小吃',
					parentid: 269
				},
				{
					classid: 298,
					name: '山西小吃',
					parentid: 269
				},
				{
					classid: 299,
					name: '重庆小吃',
					parentid: 269
				},
				{
					classid: 300,
					name: '海南小吃',
					parentid: 269
				}
			]
		},
		{
			classid: 301,
			name: '菜品',
			parentid: 0,
			list: [
				{
					classid: 302,
					name: '家常菜',
					parentid: 301
				},
				{
					classid: 303,
					name: '私房菜',
					parentid: 301
				},
				{
					classid: 304,
					name: '快手菜',
					parentid: 301
				},
				{
					classid: 305,
					name: '热菜',
					parentid: 301
				},
				{
					classid: 306,
					name: '凉菜',
					parentid: 301
				},
				{
					classid: 307,
					name: '素菜',
					parentid: 301
				},
				{
					classid: 308,
					name: '蒸菜',
					parentid: 301
				},
				{
					classid: 309,
					name: '创意菜',
					parentid: 301
				},
				{
					classid: 310,
					name: '下饭菜',
					parentid: 301
				},
				{
					classid: 311,
					name: '下酒菜',
					parentid: 301
				},
				{
					classid: 312,
					name: '海鲜',
					parentid: 301
				},
				{
					classid: 313,
					name: '药膳',
					parentid: 301
				},
				{
					classid: 314,
					name: '斋菜',
					parentid: 301
				},
				{
					classid: 315,
					name: '卤菜',
					parentid: 301
				},
				{
					classid: 316,
					name: '腌菜',
					parentid: 301
				},
				{
					classid: 317,
					name: '农家菜',
					parentid: 301
				},
				{
					classid: 318,
					name: '宫廷菜',
					parentid: 301
				},
				{
					classid: 319,
					name: '婴儿辅食',
					parentid: 301
				},
				{
					classid: 320,
					name: '饭',
					parentid: 301
				},
				{
					classid: 321,
					name: '炒饭',
					parentid: 301
				},
				{
					classid: 322,
					name: '盖浇饭',
					parentid: 301
				},
				{
					classid: 323,
					name: '煲仔饭',
					parentid: 301
				},
				{
					classid: 324,
					name: '粥',
					parentid: 301
				},
				{
					classid: 325,
					name: '面食',
					parentid: 301
				},
				{
					classid: 326,
					name: '面',
					parentid: 301
				},
				{
					classid: 327,
					name: '炒面',
					parentid: 301
				},
				{
					classid: 328,
					name: '粉',
					parentid: 301
				},
				{
					classid: 329,
					name: '饼',
					parentid: 301
				},
				{
					classid: 330,
					name: '油酥类面点',
					parentid: 301
				},
				{
					classid: 331,
					name: '糕点',
					parentid: 301
				},
				{
					classid: 332,
					name: '汤圆',
					parentid: 301
				},
				{
					classid: 333,
					name: '馄饨',
					parentid: 301
				},
				{
					classid: 334,
					name: '馒头',
					parentid: 301
				},
				{
					classid: 335,
					name: '饺子',
					parentid: 301
				},
				{
					classid: 336,
					name: '包子',
					parentid: 301
				},
				{
					classid: 337,
					name: '卷子',
					parentid: 301
				},
				{
					classid: 338,
					name: '烘焙',
					parentid: 301
				},
				{
					classid: 339,
					name: '蛋糕',
					parentid: 301
				},
				{
					classid: 340,
					name: '面包',
					parentid: 301
				},
				{
					classid: 341,
					name: '饼干',
					parentid: 301
				},
				{
					classid: 342,
					name: '披萨',
					parentid: 301
				},
				{
					classid: 343,
					name: '派类',
					parentid: 301
				},
				{
					classid: 344,
					name: '挞类',
					parentid: 301
				},
				{
					classid: 345,
					name: '果冻',
					parentid: 301
				},
				{
					classid: 346,
					name: '布丁',
					parentid: 301
				},
				{
					classid: 347,
					name: '冰淇淋',
					parentid: 301
				},
				{
					classid: 348,
					name: '糖果',
					parentid: 301
				},
				{
					classid: 349,
					name: '点心',
					parentid: 301
				},
				{
					classid: 350,
					name: '零食',
					parentid: 301
				},
				{
					classid: 351,
					name: '汤',
					parentid: 301
				},
				{
					classid: 352,
					name: '羹',
					parentid: 301
				},
				{
					classid: 353,
					name: '炖品',
					parentid: 301
				},
				{
					classid: 354,
					name: '甜品',
					parentid: 301
				},
				{
					classid: 355,
					name: '饮品',
					parentid: 301
				},
				{
					classid: 356,
					name: '冰品',
					parentid: 301
				},
				{
					classid: 357,
					name: '糖水',
					parentid: 301
				},
				{
					classid: 358,
					name: '沙拉',
					parentid: 301
				},
				{
					classid: 359,
					name: '茶饮',
					parentid: 301
				},
				{
					classid: 360,
					name: '酒水',
					parentid: 301
				},
				{
					classid: 361,
					name: '花草茶',
					parentid: 301
				},
				{
					classid: 362,
					name: '果汁',
					parentid: 301
				},
				{
					classid: 363,
					name: '小吃',
					parentid: 301
				},
				{
					classid: 364,
					name: '便当',
					parentid: 301
				},
				{
					classid: 365,
					name: '烧烤',
					parentid: 301
				},
				{
					classid: 366,
					name: '串烧',
					parentid: 301
				},
				{
					classid: 367,
					name: '寿司',
					parentid: 301
				},
				{
					classid: 368,
					name: '拼盘',
					parentid: 301
				},
				{
					classid: 369,
					name: '杂烩',
					parentid: 301
				},
				{
					classid: 370,
					name: '酱汁',
					parentid: 301
				},
				{
					classid: 371,
					name: '果酱',
					parentid: 301
				},
				{
					classid: 372,
					name: '火锅',
					parentid: 301
				},
				{
					classid: 373,
					name: '干锅',
					parentid: 301
				},
				{
					classid: 374,
					name: '香锅',
					parentid: 301
				},
				{
					classid: 375,
					name: '佐料',
					parentid: 301
				},
				{
					classid: 376,
					name: '自制调味料',
					parentid: 301
				},
				{
					classid: 377,
					name: '懒人食谱',
					parentid: 301
				},
				{
					classid: 378,
					name: '包子馅',
					parentid: 301
				},
				{
					classid: 379,
					name: '馄饨馅',
					parentid: 301
				},
				{
					classid: 380,
					name: '饺子馅',
					parentid: 301
				},
				{
					classid: 381,
					name: '水饺馅',
					parentid: 301
				},
				{
					classid: 382,
					name: '粽子',
					parentid: 301
				},
				{
					classid: 383,
					name: '月饼',
					parentid: 301
				},
				{
					classid: 384,
					name: '月饼馅',
					parentid: 301
				},
				{
					classid: 385,
					name: '果茶',
					parentid: 301
				},
				{
					classid: 386,
					name: '石锅拌饭',
					parentid: 301
				},
				{
					classid: 387,
					name: '谭家菜',
					parentid: 301
				},
				{
					classid: 388,
					name: '官府菜',
					parentid: 301
				},
				{
					classid: 389,
					name: '孔府菜',
					parentid: 301
				}
			]
		},
		{
			classid: 390,
			name: '口味',
			parentid: 0,
			list: [
				{
					classid: 391,
					name: '酸',
					parentid: 390
				},
				{
					classid: 392,
					name: '甜',
					parentid: 390
				},
				{
					classid: 393,
					name: '苦',
					parentid: 390
				},
				{
					classid: 394,
					name: '辣',
					parentid: 390
				},
				{
					classid: 395,
					name: '咸',
					parentid: 390
				},
				{
					classid: 396,
					name: '爽口',
					parentid: 390
				},
				{
					classid: 397,
					name: '清淡',
					parentid: 390
				},
				{
					classid: 398,
					name: '酸甜',
					parentid: 390
				},
				{
					classid: 399,
					name: '咸甜',
					parentid: 390
				},
				{
					classid: 400,
					name: '香甜',
					parentid: 390
				},
				{
					classid: 401,
					name: '微辣',
					parentid: 390
				},
				{
					classid: 402,
					name: '中辣',
					parentid: 390
				},
				{
					classid: 403,
					name: '超辣',
					parentid: 390
				},
				{
					classid: 404,
					name: '麻辣',
					parentid: 390
				},
				{
					classid: 405,
					name: '酸辣',
					parentid: 390
				},
				{
					classid: 406,
					name: '鲜辣',
					parentid: 390
				},
				{
					classid: 407,
					name: '香辣',
					parentid: 390
				},
				{
					classid: 408,
					name: '咸鲜',
					parentid: 390
				},
				{
					classid: 409,
					name: '椒盐',
					parentid: 390
				},
				{
					classid: 410,
					name: '咸香',
					parentid: 390
				},
				{
					classid: 411,
					name: '原味',
					parentid: 390
				},
				{
					classid: 412,
					name: '鲜香',
					parentid: 390
				},
				{
					classid: 413,
					name: '奶香',
					parentid: 390
				},
				{
					classid: 414,
					name: '葱香',
					parentid: 390
				},
				{
					classid: 415,
					name: '韭香',
					parentid: 390
				},
				{
					classid: 416,
					name: '蒜香',
					parentid: 390
				},
				{
					classid: 417,
					name: '酱香',
					parentid: 390
				},
				{
					classid: 418,
					name: '糟香',
					parentid: 390
				},
				{
					classid: 419,
					name: '五香',
					parentid: 390
				},
				{
					classid: 420,
					name: '蚝香',
					parentid: 390
				},
				{
					classid: 421,
					name: '鱼香',
					parentid: 390
				},
				{
					classid: 422,
					name: '果味',
					parentid: 390
				},
				{
					classid: 423,
					name: '草莓味',
					parentid: 390
				},
				{
					classid: 424,
					name: '香草味',
					parentid: 390
				},
				{
					classid: 425,
					name: '薄荷味',
					parentid: 390
				},
				{
					classid: 426,
					name: '橘子味',
					parentid: 390
				},
				{
					classid: 427,
					name: '番茄味',
					parentid: 390
				},
				{
					classid: 428,
					name: '柠檬味',
					parentid: 390
				},
				{
					classid: 429,
					name: '苹果味',
					parentid: 390
				},
				{
					classid: 430,
					name: '蓝莓味',
					parentid: 390
				},
				{
					classid: 431,
					name: '咖喱味',
					parentid: 390
				},
				{
					classid: 432,
					name: '孜然味',
					parentid: 390
				},
				{
					classid: 433,
					name: '芥末味',
					parentid: 390
				},
				{
					classid: 434,
					name: '黑椒味',
					parentid: 390
				},
				{
					classid: 435,
					name: '姜汁味',
					parentid: 390
				},
				{
					classid: 436,
					name: '茄汁味',
					parentid: 390
				},
				{
					classid: 437,
					name: '烧烤味',
					parentid: 390
				},
				{
					classid: 438,
					name: '红油味',
					parentid: 390
				},
				{
					classid: 439,
					name: '蛋黄味',
					parentid: 390
				},
				{
					classid: 440,
					name: '蟹黄味',
					parentid: 390
				},
				{
					classid: 441,
					name: '糖醋味',
					parentid: 390
				},
				{
					classid: 442,
					name: '泡椒味',
					parentid: 390
				},
				{
					classid: 443,
					name: '怪味',
					parentid: 390
				},
				{
					classid: 444,
					name: '芝士味',
					parentid: 390
				},
				{
					classid: 445,
					name: '抹茶味',
					parentid: 390
				},
				{
					classid: 446,
					name: '芝麻味',
					parentid: 390
				},
				{
					classid: 447,
					name: '巧克力味',
					parentid: 390
				},
				{
					classid: 448,
					name: '糊辣',
					parentid: 390
				},
				{
					classid: 449,
					name: '芒果味',
					parentid: 390
				},
				{
					classid: 450,
					name: '西瓜味',
					parentid: 390
				},
				{
					classid: 451,
					name: '西柚味',
					parentid: 390
				},
				{
					classid: 452,
					name: '水蜜桃味',
					parentid: 390
				}
			]
		},
		{
			classid: 453,
			name: '加工工艺',
			parentid: 0,
			list: [
				{
					classid: 454,
					name: '炒',
					parentid: 453
				},
				{
					classid: 455,
					name: '爆',
					parentid: 453
				},
				{
					classid: 456,
					name: '煲',
					parentid: 453
				},
				{
					classid: 457,
					name: '蒸',
					parentid: 453
				},
				{
					classid: 458,
					name: '烩',
					parentid: 453
				},
				{
					classid: 459,
					name: '涮',
					parentid: 453
				},
				{
					classid: 460,
					name: '炖',
					parentid: 453
				},
				{
					classid: 461,
					name: '焯',
					parentid: 453
				},
				{
					classid: 462,
					name: '熬',
					parentid: 453
				},
				{
					classid: 463,
					name: '煨',
					parentid: 453
				},
				{
					classid: 464,
					name: '煎',
					parentid: 453
				},
				{
					classid: 465,
					name: '焖',
					parentid: 453
				},
				{
					classid: 466,
					name: '烧',
					parentid: 453
				},
				{
					classid: 467,
					name: '溜',
					parentid: 453
				},
				{
					classid: 468,
					name: '熏',
					parentid: 453
				},
				{
					classid: 469,
					name: '腌',
					parentid: 453
				},
				{
					classid: 470,
					name: '炸',
					parentid: 453
				},
				{
					classid: 471,
					name: '烤',
					parentid: 453
				},
				{
					classid: 472,
					name: '拌',
					parentid: 453
				},
				{
					classid: 473,
					name: '汆',
					parentid: 453
				},
				{
					classid: 474,
					name: '煮',
					parentid: 453
				},
				{
					classid: 475,
					name: '烹',
					parentid: 453
				},
				{
					classid: 476,
					name: '煸',
					parentid: 453
				},
				{
					classid: 477,
					name: '烫',
					parentid: 453
				},
				{
					classid: 478,
					name: '酿',
					parentid: 453
				},
				{
					classid: 479,
					name: '酱',
					parentid: 453
				},
				{
					classid: 480,
					name: '卤',
					parentid: 453
				},
				{
					classid: 481,
					name: '泡',
					parentid: 453
				},
				{
					classid: 482,
					name: '冻',
					parentid: 453
				},
				{
					classid: 483,
					name: '贴',
					parentid: 453
				},
				{
					classid: 484,
					name: '卷',
					parentid: 453
				},
				{
					classid: 485,
					name: '扒',
					parentid: 453
				},
				{
					classid: 486,
					name: '焗',
					parentid: 453
				},
				{
					classid: 487,
					name: '烙',
					parentid: 453
				},
				{
					classid: 488,
					name: '灼',
					parentid: 453
				},
				{
					classid: 489,
					name: '炝',
					parentid: 453
				},
				{
					classid: 490,
					name: '滚',
					parentid: 453
				},
				{
					classid: 491,
					name: '浸',
					parentid: 453
				},
				{
					classid: 492,
					name: '干煸',
					parentid: 453
				},
				{
					classid: 493,
					name: '干炒',
					parentid: 453
				},
				{
					classid: 494,
					name: '清炒',
					parentid: 453
				},
				{
					classid: 495,
					name: '滑炒',
					parentid: 453
				},
				{
					classid: 496,
					name: '爆炒',
					parentid: 453
				},
				{
					classid: 497,
					name: '酱爆',
					parentid: 453
				},
				{
					classid: 498,
					name: '葱爆',
					parentid: 453
				},
				{
					classid: 499,
					name: '干煎',
					parentid: 453
				},
				{
					classid: 500,
					name: '红焖',
					parentid: 453
				},
				{
					classid: 501,
					name: '黄焖',
					parentid: 453
				},
				{
					classid: 502,
					name: '葱焖',
					parentid: 453
				},
				{
					classid: 503,
					name: '红烧',
					parentid: 453
				},
				{
					classid: 504,
					name: '酱烧',
					parentid: 453
				},
				{
					classid: 505,
					name: '干烧',
					parentid: 453
				},
				{
					classid: 506,
					name: '葱烧',
					parentid: 453
				},
				{
					classid: 507,
					name: '醋溜',
					parentid: 453
				},
				{
					classid: 508,
					name: '滑溜',
					parentid: 453
				},
				{
					classid: 509,
					name: '铁板',
					parentid: 453
				},
				{
					classid: 510,
					name: '捞汁',
					parentid: 453
				},
				{
					classid: 511,
					name: '拔丝',
					parentid: 453
				},
				{
					classid: 512,
					name: '挂霜',
					parentid: 453
				},
				{
					classid: 513,
					name: '糖渍',
					parentid: 453
				},
				{
					classid: 514,
					name: '压榨',
					parentid: 453
				},
				{
					classid: 515,
					name: '微波',
					parentid: 453
				},
				{
					classid: 516,
					name: '焙',
					parentid: 453
				},
				{
					classid: 517,
					name: '烘',
					parentid: 453
				},
				{
					classid: 518,
					name: '扣',
					parentid: 453
				},
				{
					classid: 519,
					name: '拼',
					parentid: 453
				},
				{
					classid: 520,
					name: '淋',
					parentid: 453
				},
				{
					classid: 521,
					name: '腊',
					parentid: 453
				},
				{
					classid: 522,
					name: '醉',
					parentid: 453
				},
				{
					classid: 523,
					name: '塌',
					parentid: 453
				}
			]
		},
		{
			classid: 524,
			name: '厨房用具',
			parentid: 0,
			list: [
				{
					classid: 525,
					name: '炒锅',
					parentid: 524
				},
				{
					classid: 526,
					name: '平底锅',
					parentid: 524
				},
				{
					classid: 527,
					name: '煎锅',
					parentid: 524
				},
				{
					classid: 528,
					name: '蒸锅',
					parentid: 524
				},
				{
					classid: 529,
					name: '汤锅',
					parentid: 524
				},
				{
					classid: 530,
					name: '奶锅',
					parentid: 524
				},
				{
					classid: 531,
					name: '砂锅',
					parentid: 524
				},
				{
					classid: 532,
					name: '炖锅',
					parentid: 524
				},
				{
					classid: 533,
					name: '电火锅',
					parentid: 524
				},
				{
					classid: 534,
					name: '塔吉锅',
					parentid: 524
				},
				{
					classid: 535,
					name: '高压锅',
					parentid: 524
				},
				{
					classid: 536,
					name: '电压力锅',
					parentid: 524
				},
				{
					classid: 537,
					name: '空气炸锅',
					parentid: 524
				},
				{
					classid: 538,
					name: '电饭煲',
					parentid: 524
				},
				{
					classid: 539,
					name: '炖盅',
					parentid: 524
				},
				{
					classid: 540,
					name: '烤箱',
					parentid: 524
				},
				{
					classid: 541,
					name: '冰箱',
					parentid: 524
				},
				{
					classid: 542,
					name: '微波炉',
					parentid: 524
				},
				{
					classid: 543,
					name: '烧烤炉',
					parentid: 524
				},
				{
					classid: 544,
					name: '多士炉',
					parentid: 524
				},
				{
					classid: 545,
					name: '电饼铛',
					parentid: 524
				},
				{
					classid: 546,
					name: '面包机',
					parentid: 524
				},
				{
					classid: 547,
					name: '面条机',
					parentid: 524
				},
				{
					classid: 548,
					name: '榨汁机',
					parentid: 524
				},
				{
					classid: 549,
					name: '料理机',
					parentid: 524
				},
				{
					classid: 550,
					name: '豆浆机',
					parentid: 524
				},
				{
					classid: 551,
					name: '酸奶机',
					parentid: 524
				},
				{
					classid: 552,
					name: '冰淇淋机',
					parentid: 524
				},
				{
					classid: 553,
					name: '咖啡机',
					parentid: 524
				},
				{
					classid: 554,
					name: '刨冰机',
					parentid: 524
				},
				{
					classid: 555,
					name: '厨师机',
					parentid: 524
				},
				{
					classid: 556,
					name: '爆米花机',
					parentid: 524
				},
				{
					classid: 557,
					name: '华夫饼机',
					parentid: 524
				},
				{
					classid: 558,
					name: '保鲜盒',
					parentid: 524
				},
				{
					classid: 559,
					name: '打蛋器',
					parentid: 524
				},
				{
					classid: 560,
					name: '模具',
					parentid: 524
				}
			]
		},
		{
			classid: 561,
			name: '场景',
			parentid: 0,
			list: [
				{
					classid: 562,
					name: '早餐',
					parentid: 561
				},
				{
					classid: 563,
					name: '午餐',
					parentid: 561
				},
				{
					classid: 564,
					name: '下午茶',
					parentid: 561
				},
				{
					classid: 565,
					name: '晚餐',
					parentid: 561
				},
				{
					classid: 566,
					name: '夜宵',
					parentid: 561
				},
				{
					classid: 567,
					name: '野餐',
					parentid: 561
				},
				{
					classid: 568,
					name: '聚会',
					parentid: 561
				},
				{
					classid: 569,
					name: '踏青',
					parentid: 561
				},
				{
					classid: 570,
					name: '单身',
					parentid: 561
				},
				{
					classid: 571,
					name: '二人世界',
					parentid: 561
				},
				{
					classid: 572,
					name: '宴请',
					parentid: 561
				},
				{
					classid: 573,
					name: '熬夜',
					parentid: 561
				},
				{
					classid: 574,
					name: '春节',
					parentid: 561
				},
				{
					classid: 575,
					name: '情人节',
					parentid: 561
				},
				{
					classid: 576,
					name: '元宵节',
					parentid: 561
				},
				{
					classid: 577,
					name: '二月二',
					parentid: 561
				},
				{
					classid: 578,
					name: '复活节',
					parentid: 561
				},
				{
					classid: 579,
					name: '愚人节',
					parentid: 561
				},
				{
					classid: 580,
					name: '寒食节',
					parentid: 561
				},
				{
					classid: 581,
					name: '清明节',
					parentid: 561
				},
				{
					classid: 582,
					name: '三月三',
					parentid: 561
				},
				{
					classid: 583,
					name: '母亲节',
					parentid: 561
				},
				{
					classid: 584,
					name: '儿童节',
					parentid: 561
				},
				{
					classid: 585,
					name: '端午节',
					parentid: 561
				},
				{
					classid: 586,
					name: '父亲节',
					parentid: 561
				},
				{
					classid: 587,
					name: '六月六',
					parentid: 561
				},
				{
					classid: 588,
					name: '七夕节',
					parentid: 561
				},
				{
					classid: 589,
					name: '中元节',
					parentid: 561
				},
				{
					classid: 590,
					name: '中秋节',
					parentid: 561
				},
				{
					classid: 591,
					name: '重阳节',
					parentid: 561
				},
				{
					classid: 592,
					name: '万圣节',
					parentid: 561
				},
				{
					classid: 593,
					name: '感恩节',
					parentid: 561
				},
				{
					classid: 594,
					name: '圣诞节',
					parentid: 561
				},
				{
					classid: 595,
					name: '腊八节',
					parentid: 561
				},
				{
					classid: 596,
					name: '小年',
					parentid: 561
				},
				{
					classid: 597,
					name: '年夜饭',
					parentid: 561
				},
				{
					classid: 598,
					name: '春季',
					parentid: 561
				},
				{
					classid: 599,
					name: '夏季',
					parentid: 561
				},
				{
					classid: 600,
					name: '秋季',
					parentid: 561
				},
				{
					classid: 601,
					name: '冬季',
					parentid: 561
				},
				{
					classid: 602,
					name: '立春',
					parentid: 561
				},
				{
					classid: 603,
					name: '雨水',
					parentid: 561
				},
				{
					classid: 604,
					name: '惊蛰',
					parentid: 561
				},
				{
					classid: 605,
					name: '春分',
					parentid: 561
				},
				{
					classid: 606,
					name: '清明',
					parentid: 561
				},
				{
					classid: 607,
					name: '谷雨',
					parentid: 561
				},
				{
					classid: 608,
					name: '立夏',
					parentid: 561
				},
				{
					classid: 609,
					name: '小满',
					parentid: 561
				},
				{
					classid: 610,
					name: '芒种',
					parentid: 561
				},
				{
					classid: 611,
					name: '夏至',
					parentid: 561
				},
				{
					classid: 612,
					name: '小暑',
					parentid: 561
				},
				{
					classid: 613,
					name: '大暑',
					parentid: 561
				},
				{
					classid: 614,
					name: '立秋',
					parentid: 561
				},
				{
					classid: 615,
					name: '处暑',
					parentid: 561
				},
				{
					classid: 616,
					name: '白露',
					parentid: 561
				},
				{
					classid: 617,
					name: '秋分',
					parentid: 561
				},
				{
					classid: 618,
					name: '寒露',
					parentid: 561
				},
				{
					classid: 619,
					name: '霜降',
					parentid: 561
				},
				{
					classid: 620,
					name: '立冬',
					parentid: 561
				},
				{
					classid: 621,
					name: '小雪',
					parentid: 561
				},
				{
					classid: 622,
					name: '大雪',
					parentid: 561
				},
				{
					classid: 623,
					name: '冬至',
					parentid: 561
				},
				{
					classid: 624,
					name: '小寒',
					parentid: 561
				},
				{
					classid: 625,
					name: '大寒',
					parentid: 561
				}
			]
		}
	]
}


// 按分类查询菜谱
const MenuList = {
	"status": 0,
	"msg": "ok",
	"result": {
		"total": 154,
		"num": 10,
		"list": [
			{
			"id": 52260,
			"classid": 563,
			"name": "糖醋排骨",
			"peoplenum": "1-2人",
			"preparetime": "30分钟-1小时",
			"cookingtime": "30分钟-1小时",
			"content": "时间过的可真快，一转眼就快到中秋节了，难怪老说光阴似箭一点都不错，年纪大了就觉得时间过的飞快，小时候盼个过年过节的盼得脖子都长长了还没盼来个节日，现在倒好再一晃都快到春节了，希望时间过慢点儿，再慢点儿，今天这道糖醋排骨就是为中秋节提前热身的，这道糖醋排骨，用了东北人常用炒糖色的方法来给排骨上色，最后成菜色泽好看，味道芳香，看上去就食欲大动。闻起来香气浓郁，尝起来甜酸可口，着实是搭配米饭滴绝佳首选噢~",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113938_51081.jpg",
			"tag": "家常菜,糖醋味,午餐,宴请,炒锅",
			"material": [{
				"mname": "姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "生抽",
				"type": 0,
				"amount": "1勺"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "大料",
				"type": 0,
				"amount": "1个"
			}, {
				"mname": "香醋",
				"type": 0,
				"amount": "3勺"
			}, {
				"mname": "白糖",
				"type": 0,
				"amount": "2勺"
			}, {
				"mname": "冰糖",
				"type": 0,
				"amount": "30g"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "排骨",
				"type": 1,
				"amount": "800g"
			}],
			"process": [{
				"pcontent": "排骨用清水浸泡半小时，泡出血水，捞出后冲洗干净。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123652_42058.jpg"
			}, {
				"pcontent": "将排骨放入冷水锅中，煮开后中火煮5分钟，撇去浮沫，捞出排骨，用温水冲洗干净。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123652_42438.jpg"
			}, {
				"pcontent": "炒锅中倒入少许油，放入3大勺白糖，中火，不停翻炒，炒至油糖完全融合，颜色越来越深，表面冒出些油烟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123652_64969.jpg"
			}, {
				"pcontent": "立即倒入排骨，翻炒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123652_44748.jpg"
			}, {
				"pcontent": "调入香醋2勺、生抽1勺、姜、大料、",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_85960.jpg"
			}, {
				"pcontent": "添入开水，水量没过排骨即可。大火煮开，撇去浮沫，盖上锅盖，小火慢炖35分钟",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_81341.jpg"
			}, {
				"pcontent": "35分钟后打开锅盖，转大火，再放入2小勺糖、少许盐提鲜味，大火收汁，不时翻炒以免糊锅，待汤汁收浓出锅前再放入1勺醋提味，盛出装盘即可。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_15794.jpg"
			}]
		}, {
			"id": 52261,
			"classid": 563,
			"name": "油爆河虾",
			"peoplenum": "3-4人",
			"preparetime": "10分钟内",
			"cookingtime": "10分钟内",
			"content": "老妈的拿手小菜，销魂河虾圆舞曲：油爆河虾<br \/><br \/>销魂河虾的自述：我是一只销魂的河虾，昂首挺姿，享受众虾捧虾的待遇。<br \/>我营养丰富，且其肉质松软，易消化，对身体虚弱以及病后需要调养的人是极好的食物。<br \/>我能很好的保护心血管系统，减少血液中胆固醇含量，防止动脉硬化，有利于预防高血压及心肌梗死；<br \/>我富含磷、钙、对小儿、孕妇尤有补益功效；<br \/><br \/><br \/>日本大阪大学的科学家最近发现，虾体内的虾青素有助于消除因时差反应而产生的“时差症”。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113939_31411.jpg",
			"tag": "夏季,世界杯,午餐,咸香",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "葱姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "黄酒",
				"type": 0,
				"amount": "15ml"
			}, {
				"mname": "生抽",
				"type": 0,
				"amount": "10ml"
			}, {
				"mname": "水",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "新鲜小河虾",
				"type": 1,
				"amount": "300g"
			}],
			"process": [{
				"pcontent": "新鲜小河虾冲洗干净，（剪须脚，这步可以省略，看你心情啦哈）",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_48157.jpg"
			}, {
				"pcontent": "起油锅，放入少量油，下葱姜煸炒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_30031.jpg"
			}, {
				"pcontent": "倒入河虾，大火快速翻炒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_31684.jpg"
			}, {
				"pcontent": "加入约15ml黄酒快速翻炒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123653_31933.jpg"
			}, {
				"pcontent": "加入10ml生抽翻炒均匀",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123654_95550.jpg"
			}, {
				"pcontent": "加入小勺盐调味",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123654_75620.jpg"
			}, {
				"pcontent": "加入少量水煮一会，出锅",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123654_22044.jpg"
			}]
		}, {
			"id": 52262,
			"classid": 563,
			"name": "酱香狮子头",
			"peoplenum": "3-4人",
			"preparetime": "10分钟内",
			"cookingtime": "10-20分钟",
			"content": "这是我第二次做狮子头，因为买回来一罐马蹄准备做马蹄糕的，由于做马蹄糕无需太多的马蹄，所以，就想到用少许的马蹄拌入猪肉末里做肉球再红烧，不就是我们经常提到的“狮子头”了吗？还好，烧出来的“酱香狮子头”还不错，马蹄的清甜爽口真的给这款肉球添加了不少的分数！",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113939_60504.jpg",
			"tag": "浙菜,清明节,健脾开胃,午餐",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "老抽",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "生粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "胡椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "猪肉末",
				"type": 1,
				"amount": "350g"
			}, {
				"mname": "马蹄",
				"type": 1,
				"amount": "130g"
			}],
			"process": [{
				"pcontent": "将生粉，盐，胡椒粉放入猪肉末里拌均匀。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123657_46884.jpg"
			}, {
				"pcontent": "拌均匀的猪肉末。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123657_57983.jpg"
			}, {
				"pcontent": "准备罐装马蹄。（只用三分之一）",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123657_88631.jpg"
			}, {
				"pcontent": "将马蹄取出清洗干净之后切碎放入拌均匀味道的猪肉末里。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123657_51764.jpg"
			}, {
				"pcontent": "用猪肉末和马蹄拌均匀的食材。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123658_81574.jpg"
			}, {
				"pcontent": "戴上一次性的手套将食材搓成自己喜欢大小的肉球。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123658_63483.jpg"
			}, {
				"pcontent": "锅里烧开水将肉球放入煮熟定型然后捞起再放入另外的瓦锅里加入适量的水，按自己喜欢的酱色添加老抽，鸡精少许的盐然后将狮子头放入中火慢烧。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123658_42079.jpg"
			}, {
				"pcontent": "烧至收汁，狮子头完全的吸收酱汁成酱红色即可。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123658_25274.jpg"
			}, {
				"pcontent": "出锅前用适量的生粉兑水倒入剩下的酱汁里勾芡淋上狮子头即可。这款“酱香狮子头”色泽酱红，口感带有马蹄的清爽，食而不腻。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123658_83327.jpg"
			}]
		}, {
			"id": 52263,
			"classid": 563,
			"name": "农家小炒肉",
			"peoplenum": "3-4人",
			"preparetime": "10-20分钟",
			"cookingtime": "10分钟内",
			"content": "农家小炒肉可是湘菜的经典家常菜，香辣开胃，但是各家的做法不一定相同。我家的这道菜会选用去皮的五花肉，搭配杭椒来炒，肉质鲜嫩而不腻，青椒也不会辣得过分，绝对的米饭杀手！",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113939_73972.jpg",
			"tag": "下饭菜,午餐,家常菜,湘菜,炒锅",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "酱油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "青椒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "大蒜子",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蚝油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "五花肉",
				"type": 1,
				"amount": "300g"
			}],
			"process": [{
				"pcontent": "准备食材",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_97981.jpg"
			}, {
				"pcontent": "大蒜子切片，青椒去籽切滚刀片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_42458.jpg"
			}, {
				"pcontent": "沸水中放入少许油盐，下青椒焯",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_91493.jpg"
			}, {
				"pcontent": "捞出沥干",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_12448.jpg"
			}, {
				"pcontent": "五花肉去皮切片，也可带皮，看个人喜好",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_30734.jpg"
			}, {
				"pcontent": "放酱油食盐腌20分钟",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_14121.jpg"
			}, {
				"pcontent": "热油锅爆香蒜片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_72712.jpg"
			}, {
				"pcontent": "下肉片炒至稍熟，盛出",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_37223.jpg"
			}, {
				"pcontent": "留余油翻炒辣椒，放盐",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123659_19702.jpg"
			}, {
				"pcontent": "放入肉片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123700_69935.jpg"
			}, {
				"pcontent": "放少许蚝油",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123700_78996.jpg"
			}, {
				"pcontent": "翻炒至肉片出油",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123700_65213.jpg"
			}, {
				"pcontent": "起锅即可",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123700_39052.jpg"
			}]
		}, {
			"id": 52264,
			"classid": 563,
			"name": "五香肉末茄子",
			"peoplenum": "1-2人",
			"preparetime": "10-20分钟",
			"cookingtime": "10-20分钟",
			"content": "前几天做的肉酱我一直放去冰箱极冻室里面，一直怕坏了。毕竟自己做的没有加防腐剂的东西，今天就全部拿来用掉了，很喜欢吃茄子，但是没有油又不好吃。油太多了吃了又不健康，这样做既好吃又健康。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113940_55718.jpg",
			"tag": "下饭菜,夏季,午餐,炒锅",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "朝天椒",
				"type": 0,
				"amount": "4个"
			}, {
				"mname": "葱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "五香肉酱",
				"type": 0,
				"amount": "3勺"
			}, {
				"mname": "大蒜",
				"type": 0,
				"amount": "2瓣"
			}, {
				"mname": "茄子",
				"type": 1,
				"amount": "半根"
			}],
			"process": [{
				"pcontent": "茄子半根（如果茄子短就用一根，这个太长了，我切了一半）",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123700_71323.jpg"
			}, {
				"pcontent": "对半切开。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123700_36449.jpg"
			}, {
				"pcontent": "把里面的肉切竖刀。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123701_46448.jpg"
			}, {
				"pcontent": "再切横刀，形成很多田字格。用盐均匀的抹在茄子肉上面防止变色，（因为要拍照，所以茄子有点氧化变色了，动作要快）",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123701_47225.jpg"
			}, {
				"pcontent": "葱蒜辣椒切好。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123701_91755.jpg"
			}, {
				"pcontent": "坐锅烧热下少量油。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123701_70708.jpg"
			}, {
				"pcontent": "腌制过的茄子放不粘锅里小火煎。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123701_17082.jpg"
			}, {
				"pcontent": "稍微煎一下就翻面煎后面。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123701_25982.jpg"
			}, {
				"pcontent": "然后以此类推两面反复煎。最后煎到茄子发软。呈金黄色。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123702_58968.jpg"
			}, {
				"pcontent": "捞出放盘子里。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123702_14119.jpg"
			}, {
				"pcontent": "撒上蒜末、",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123702_45805.jpg"
			}, {
				"pcontent": "坐锅烧热把五香肉酱炒撒一下。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123702_47889.jpg"
			}, {
				"pcontent": "均匀的抹上茄子上面。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123703_15002.jpg"
			}, {
				"pcontent": "最后撒上葱和辣椒即可。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123703_43770.jpg"
			}, {
				"pcontent": "非常的香啊O(∩_∩)O哈哈~",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123703_33541.jpg"
			}]
		}, {
			"id": 52265,
			"classid": 563,
			"name": "辣椒爆猪耳",
			"peoplenum": "1-2人",
			"preparetime": "10分钟内",
			"cookingtime": "10分钟内",
			"content": "猪耳朵含有蛋白质、脂肪、碳水化合物、维生素及钙、磷、铁等，具有补虚损、健脾胃的功效，适用于气血虚损、身体瘦弱者食用。 <br \/>猪耳朵很有营养，并且口感非常好，尤其是当凉菜吃的“卤猪耳”，吃到嘴里是又柔韧又脆，味道鲜香不腻，且富含胶质。<br \/>这道菜就是用卤猪耳加入辣椒酱爆炒，简单快捷微辣开胃，是非常不错的一道快手菜。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113940_86932.jpg",
			"tag": "增强抵抗力,懒人食谱,健脾开胃,家常菜,午餐",
			"material": [{
				"mname": "姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蒜瓣",
				"type": 0,
				"amount": "3个"
			}, {
				"mname": "葱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "香菜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "白糖",
				"type": 0,
				"amount": "1g"
			}, {
				"mname": "生抽",
				"type": 0,
				"amount": "10ml"
			}, {
				"mname": "辣椒酱",
				"type": 0,
				"amount": "25g"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "青椒",
				"type": 1,
				"amount": "3个"
			}, {
				"mname": "卤猪耳",
				"type": 1,
				"amount": "250g"
			}],
			"process": [{
				"pcontent": "准备好所有的食材。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123704_46714.jpg"
			}, {
				"pcontent": "猪耳朵切条，青椒切丝，葱姜蒜切碎。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123704_82721.jpg"
			}, {
				"pcontent": "炒锅倒油爆香葱姜蒜，再放入辣椒酱爆香。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123704_40784.jpg"
			}, {
				"pcontent": "倒入猪耳爆炒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123704_41637.jpg"
			}, {
				"pcontent": "加入少许生抽。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123704_90931.jpg"
			}, {
				"pcontent": "在加少许白糖盐。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123704_28616.jpg"
			}, {
				"pcontent": "加入青椒丝翻炒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123705_62177.jpg"
			}, {
				"pcontent": "再放入香菜。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123705_98564.jpg"
			}, {
				"pcontent": "翻炒均匀关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123706_53839.jpg"
			}]
		}, {
			"id": 52266,
			"classid": 563,
			"name": "红烧鲫鱼",
			"peoplenum": "3-4人",
			"preparetime": "10分钟内",
			"cookingtime": "30分钟-1小时",
			"content": "出国十年也就有十年没有做这道菜了，今天试试手还是以前那个味，久违的味道———家乡的味道，妈妈的味道。<br \/>过去在家的时候，出生江南的妈妈就爱吃鲫鱼，无论是红烧，还是煮奶白鱼汤。我也就是那时跟妈妈学会了这道菜。<br \/>妈妈烧鱼很简单只用葱姜蒜、盐、糖、酱油和一点醋，说醋可以软化小刺，我今天没有用，只因老公对醋过敏，家里就没有买，我也就“不吃醋”了。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113940_13380.jpg",
			"tag": "家常菜,午餐,宴请,红烧",
			"material": [{
				"mname": "葱",
				"type": 0,
				"amount": "1根"
			}, {
				"mname": "姜",
				"type": 0,
				"amount": "4片"
			}, {
				"mname": "蒜头",
				"type": 0,
				"amount": "1个"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "白砂糖",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "酱油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "鲫鱼",
				"type": 1,
				"amount": "1条"
			}],
			"process": [{
				"pcontent": "鲫鱼清洗干净，并备好大蒜子，小葱和生姜片。注：鲫鱼肚子里的黑膜一定要去除干净。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123706_85329.jpg"
			}, {
				"pcontent": "可以在鲫鱼背上划上几刀，用点盐抺一下。注：不要划的太深，容易破相。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123706_86249.jpg"
			}, {
				"pcontent": "用生姜片将锅擦几下，然后倒油。注：这样鱼皮不易破。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123706_42367.jpg"
			}, {
				"pcontent": "油温热，下鱼，用中火将两面煎黄。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123707_43683.jpg"
			}, {
				"pcontent": "加入适量的酱油、糖和水。注：盐要小心，因前面已经用了盐。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123707_70530.jpg"
			}, {
				"pcontent": "将大蒜子，小葱和生姜片入锅。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123707_65714.jpg"
			}, {
				"pcontent": "加水，盖上锅盖，中火煮。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123707_51367.jpg"
			}, {
				"pcontent": "煮到汤水差不多收干就好了。喜欢用鱼汤泡饭就多留点汁。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123707_98658.jpg"
			}]
		}, {
			"id": 52267,
			"classid": 563,
			"name": "糖醋里脊",
			"peoplenum": "1-2人",
			"preparetime": "10分钟内",
			"cookingtime": "30分钟-1小时",
			"content": "糖醋里脊外焦里嫩，酸甜适中，汁不多不少刚刚好，开胃又下饭。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113941_75755.jpg",
			"tag": "午餐,炒锅,糖醋味,聚会",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "番茄酱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "淀粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "芝麻",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "醋",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "胡椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "里脊",
				"type": 1,
				"amount": "1块"
			}, {
				"mname": "芹菜",
				"type": 1,
				"amount": "250g"
			}],
			"process": [{
				"pcontent": "原料备用。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_59394.jpg"
			}, {
				"pcontent": "芹菜茎，斜切成小段。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_82952.jpg"
			}, {
				"pcontent": "焯水时，加入适量的盐，滴入几滴油。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_63075.jpg"
			}, {
				"pcontent": "焯好的芹菜段，摆盘。用芹菜叶做出花朵的枝叶。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_28453.jpg"
			}, {
				"pcontent": "里脊肉切成相同长度的丝。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_21484.jpg"
			}, {
				"pcontent": "切好的里脊丝，用盐，胡椒（白胡椒最好），姜汁，抓匀腌渍十分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_65155.jpg"
			}, {
				"pcontent": "腌渍好的里脊丝，加入蛋清，用干淀粉拌均匀。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123708_50487.jpg"
			}, {
				"pcontent": "油锅八成热油时，迅速炸定型。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123709_62082.jpg"
			}, {
				"pcontent": "捞出来，复炸一次。里脊肉不要炸时间长。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123709_38152.jpg"
			}, {
				"pcontent": "锅里放番茄酱，白糖，少量醋，半碗水，一起熬滚以后，煮一分钟，洒入一把芝麻。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123709_81839.jpg"
			}, {
				"pcontent": "迅速的倒入炸好的肉丝，搅拌一下，使肉丝都均匀的粘上酱汁。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123709_29395.jpg"
			}, {
				"pcontent": "摆盘做出花朵造型即可。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123709_67838.jpg"
			}]
		}, {
			"id": 52268,
			"classid": 563,
			"name": "水煮牛肉",
			"peoplenum": "1-2人",
			"preparetime": "30分钟-1小时",
			"cookingtime": "30分钟-1小时",
			"content": "水煮菜作为传统的四川菜式， 为全国人们熟悉， “水煮肉片”简言之就是：豆瓣酱汤煮肉再浇热油，因肉片未经划油，以水煮熟故名“水煮肉片”。水煮的特色是“麻、辣、鲜、烫”， 由于吃起来肉嫩菜鲜；而且加入其中的配菜即可根据各人的喜爱，也可随着季节选择一些时令的蔬菜，吸收过汤汁的蔬菜麻辣味浓，汁厚，是非常好的下饭菜， 所以很多人喜欢甚至迷恋上这种做法",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113941_98886.jpg",
			"tag": "川菜,香辣,下饭菜,午餐",
			"material": [{
				"mname": "生粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "鸡蛋液",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蚝油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "花椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "辣椒面",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "豆瓣酱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "平菇",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "牛里脊肉",
				"type": 1,
				"amount": "200g"
			}],
			"process": [{
				"pcontent": "将牛里脊肉切片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123709_87799.jpg"
			}, {
				"pcontent": "放入碗中，放入适量生粉、食盐，鸡蛋液、搅拌均匀，腌制10分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_89771.jpg"
			}, {
				"pcontent": "平菇洗净沥干",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_21531.jpg"
			}, {
				"pcontent": "锅里下油",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_78018.jpg"
			}, {
				"pcontent": "加入适量的豆瓣酱，炒出红油，加入适量清水，放入白糖，综合味道",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_53316.jpg"
			}, {
				"pcontent": "水煮开后，将腌制好的肉片，逐片下入锅中",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_77137.jpg"
			}, {
				"pcontent": "煮至肉片变白后，下入平菇煮熟",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_56674.jpg"
			}, {
				"pcontent": "将煮好的肉片倒入容器里，将辣椒粉，花椒粉、大蒜撒在肉片上。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123710_42062.jpg"
			}, {
				"pcontent": "取锅烧热油，浇在肉上撒入的香葱碎，一碗椒香四溢的水煮肉片即制作完成。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123711_68440.jpg"
			}]
		}, {
			"id": 52269,
			"classid": 563,
			"name": "大盘鸡",
			"peoplenum": "3-4人",
			"preparetime": "30分钟-1小时",
			"cookingtime": "30分钟-1小时",
			"content": "从舌尖2“相逢”中得知新疆的大盘鸡。红烧鸡中加入土豆、青红椒一起烧，相当实惠的一大盘。客人先吃鸡喝酒，等到酒喝好了，鸡吃的差不多的时候，再来一份皮带面，与汤汁拌拌，真得是酒足饭饱，吃得爽！<br \/><br \/>今日将冻鸡腿取出，突然灵机一动，何不尝试一下各种食品相逢的大盘鸡呢？俺没有土鸡就用鸡腿代替，老公，老妈还有自己都不能吃辣椒就不放，美味也不是一成不变的，你说呢？何为正宗，符合你的口味就是最好的！美食在传播的过程中总是不断加了新的元素。你对美食的理解，你对品尝美食人的爱，天天都是520。<br \/><br \/>第一次学做，感觉味道真得叫好！鸡、土豆、青红椒和各种香料，还有那筋道的面相互融入吸收，浓烈鲜美，不怪传遍了中国大江南北！",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/113941_98141.jpg",
			"tag": "家常菜,新疆菜,午餐,母亲节",
			"material": [{
				"mname": "青椒",
				"type": 0,
				"amount": "100g"
			}, {
				"mname": "红椒",
				"type": 0,
				"amount": "100g"
			}, {
				"mname": "白砂糖",
				"type": 0,
				"amount": "半汤勺"
			}, {
				"mname": "西红柿",
				"type": 0,
				"amount": "1个"
			}, {
				"mname": "老抽",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "桂皮",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "花椒",
				"type": 0,
				"amount": "10粒"
			}, {
				"mname": "八角",
				"type": 0,
				"amount": "1个"
			}, {
				"mname": "大蒜",
				"type": 0,
				"amount": "1个"
			}, {
				"mname": "姜",
				"type": 0,
				"amount": "1小块"
			}, {
				"mname": "小葱",
				"type": 0,
				"amount": "1棵"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "1汤勺"
			}, {
				"mname": "小麦面粉",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "土豆",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "鸡",
				"type": 1,
				"amount": "700g"
			}],
			"process": [{
				"pcontent": "首先将面用冷水和好，醒上15分钟左右。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123711_92369.jpg"
			}, {
				"pcontent": "然后揉光滑，搓成长条，沾抺上油，蒙上保鲜膜，继续醒，至少30分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123711_96634.jpg"
			}, {
				"pcontent": "鸡处理干净，剁大块。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123711_38589.jpg"
			}, {
				"pcontent": "上干锅，中火炒干鸡块的水分，炒出油，然后盛出，洗去污沬备用。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123714_77940.jpg"
			}, {
				"pcontent": "锅里放一汤勺子油，半汤勺子糖。注：加一汤匙清水，糖更容易溶化。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123714_15261.jpg"
			}, {
				"pcontent": "小火熬到糖融化，变成棕黄色，下洗去污沬的鸡块。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123714_39396.jpg"
			}, {
				"pcontent": "翻炒到鸡块裹上糖色，加入香料：葱姜蒜、八角、桂皮、花椒。<br \/>\n注：有的新疆人说他们是不用八角和桂皮的，我烧鸡也不用，我这也是跟电视学的，你自己定吧。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_23924.jpg"
			}, {
				"pcontent": "炒出香味后加老抽上色。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_40878.jpg"
			}, {
				"pcontent": "放入西红柿翻炒圴，然后放入土豆、加盐调味，并加入适量的水。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_48660.jpg"
			}, {
				"pcontent": "盖锅炖10分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_70563.jpg"
			}, {
				"pcontent": "水烧的差不多的时候，鸡肉已烂，将切块的青红椒入锅。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_16727.jpg"
			}, {
				"pcontent": "翻炒几下就可出锅。注意一定要留汁，方便拌面。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_45126.jpg"
			}, {
				"pcontent": "将醒好的面用手捏扁，拉成长条，下入滚水锅中煮熟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_39330.jpg"
			}, {
				"pcontent": "将锅里煮好的面捞入盘中。<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160807\/123715_95584.jpg"
			}]
		}]
	}
}

// 关键字查询菜谱
const QueryMenuByStr = {
	"status": 0,
	"msg": "ok",
	"result": {
		"total": 771,
		"num": 10,
		"list": [
			{
			"id": 8,
			"classid": 2,
			"name": "醋溜白菜",
			"peoplenum": "1-2人",
			"preparetime": "10-20分钟",
			"cookingtime": "10-20分钟",
			"content": "醋溜白菜，是北方人经常吃的一道菜，尤其是在多年前的冬天。那时，没有大棚菜，冬天，家家每天佐餐的基本上都是冬储大白菜，聪明的家庭主妇总是想方设法将这单调的菜变成多种菜式，于是，醋溜白菜被频繁的端上餐桌。<br \/>美食不分贵贱，用最平凡的原料、最简单的调料和最普通的手法做出美味的菜肴来才是美食的真谛。 <br \/>这次，我做的醋溜白菜，近似鲁菜的做法，使个这道菜酸甜浓郁、开胃下饭、老少咸宜。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115138_46688.jpg",
			"tag": "减肥,家常菜,排毒,补钙",
			"material": [{
				"mname": "淀粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "糖",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "酱油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "醋",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蒜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "葱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "干红椒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "花椒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "白菜",
				"type": 1,
				"amount": "380g"
			}],
			"process": [{
				"pcontent": "准备食材。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162550_84583.jpg"
			}, {
				"pcontent": "将白菜斜刀片成薄片。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162551_90620.jpg"
			}, {
				"pcontent": "片切好的白菜帮与菜叶分别入好。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162551_20925.jpg"
			}, {
				"pcontent": "盐、糖、生抽、醋淀粉加少许水调匀备用。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162552_23125.jpg"
			}, {
				"pcontent": "锅中油烧热，先入花椒炒香后捞出。再加入干红椒段略炒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162552_57046.jpg"
			}, {
				"pcontent": "加入葱姜蒜煸炒香，然后入白菜帮翻炒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162553_89090.jpg"
			}, {
				"pcontent": "炒至菜帮变软时，加入白菜叶。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162553_40445.jpg"
			}, {
				"pcontent": "快速翻炒至菜软，勾入碗汁",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162554_92210.jpg"
			}, {
				"pcontent": "使汤汁均匀的包裹在菜帮上即可",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162554_29522.jpg"
			}]
		}, {
			"id": 96,
			"classid": 2,
			"name": "醋熘白菜",
			"peoplenum": "1-2人",
			"preparetime": "10分钟内",
			"cookingtime": "10分钟内",
			"content": "大白菜是过去物资匮乏年代冬天里的当家菜，虽然现在冬天蔬菜品种一点也不少了，但是人们一到冬天就不自觉的习惯性的要储存几颗，至少下雪刮大风出不去门的话家里有菜也不着急没得吃。我家离早市非常近，所以我不储存，但是我家冬天也不少吃白菜，无论炒着吃做包子饺子馅儿都很爱吃，尤其我家老公更是说每天吃炖白菜也不会腻烦，嘿嘿。一般我把白菜分三部分吃，最外面的几片留起来做馅儿吃，然后里面的部分叶子做汤，帮子就做醋熘白菜或者炒白菜丝，一点不浪费吧，哈哈。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115155_93501.jpg",
			"tag": "下饭菜,减肥,开胃,补钙",
			"material": [{
				"mname": "陈醋",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "玉米淀粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "彩椒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蒜末",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "生抽",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "葱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "姜片",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "白菜帮",
				"type": 1,
				"amount": "400g"
			}],
			"process": [{
				"pcontent": "首先将白菜帮子洗干净控干水分",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162854_43280.jpg"
			}, {
				"pcontent": "然后用刀斜着改刀，将白菜帮子片成片（这样的切法可以令切好的白菜块的表面积增大，受热更均匀更容易入味）",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162854_13628.jpg"
			}, {
				"pcontent": "切好以后是不规则状",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162854_98253.jpg"
			}, {
				"pcontent": "将半个彩椒也斜切成不规则状",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162854_46109.jpg"
			}, {
				"pcontent": "葱姜切片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162854_66126.jpg"
			}, {
				"pcontent": "取一个小碗加入玉米淀粉，然后加适量生抽",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162855_44038.jpg"
			}, {
				"pcontent": "加入适量陈醋",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162855_75289.jpg"
			}, {
				"pcontent": "加入适量冷水搅和均匀以后加入蒜末",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162855_74923.jpg"
			}, {
				"pcontent": "炒锅烧热以后加入玉米油，然后下葱姜片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162856_55796.jpg"
			}, {
				"pcontent": "葱姜片出香味以后下入切好的白菜",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162856_69029.jpg"
			}, {
				"pcontent": "加入适量盐",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162857_71202.jpg"
			}, {
				"pcontent": "煸炒到白菜叶子变软了就加入切好的彩椒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162857_75780.jpg"
			}, {
				"pcontent": "翻炒几下就加入勾兑好的淀粉水",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162857_23628.jpg"
			}, {
				"pcontent": "翻炒均匀出锅",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162858_85758.jpg"
			}, {
				"pcontent": "装入盘中开吃",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162858_46062.jpg"
			}]
		}, {
			"id": 215,
			"classid": 3,
			"name": "开水白菜",
			"peoplenum": "1-2人",
			"preparetime": "10分钟内",
			"cookingtime": "10-20分钟",
			"content": "开水白菜是四川传统名菜，原系川菜名厨黄敬临在清宫御膳房时创制。后来黄敬临将此菜制法带回四川，广为流传。30多年前，川菜大师罗国荣调来北京饭店掌厨，又将“开水白菜”的烹调技术带回北京，从而成为北京饭店高档筵席上的一味佳肴。<br \/>千万别以为“开水”就是“白开水”， 开水白菜名说开水，实则是巧用清汤，其关键在于吊汤，汤要味浓而清，清如开水一般，成菜乍看如清水泡着几棵白菜心，一星油花也不见，但吃在嘴里，清鲜淡雅，香味浓醇，汤味浓厚，不油不腻，却清香爽口。<br \/>因为汤清澈见底，视之如开水，故名之“开水白菜”。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115218_38602.jpg",
			"tag": "健脾,家常菜,排毒,瘦身",
			"material": [{
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "鸡精",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "料酒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "胡椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "淀粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "娃娃菜",
				"type": 1,
				"amount": "2棵"
			}, {
				"mname": "高汤",
				"type": 1,
				"amount": "300g"
			}],
			"process": [{
				"pcontent": "娃娃菜",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164456_10469.jpg"
			}, {
				"pcontent": "高汤",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164456_59998.jpg"
			}, {
				"pcontent": "娃娃菜去老叶，洗净，切开<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164456_13716.jpg"
			}, {
				"pcontent": "放在沸水中焯至刚断生（保持原色），立即捞入冷开水中过凉<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164456_80795.jpg"
			}, {
				"pcontent": "炒锅置旺火上，放入清汤",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164457_64415.jpg"
			}, {
				"pcontent": "加绍酒、味精",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164457_55357.jpg"
			}, {
				"pcontent": "胡椒粉、盐烧沸后，",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164458_73053.jpg"
			}, {
				"pcontent": "撇去浮沫，勾芡",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164458_15657.jpg"
			}, {
				"pcontent": "轻轻倒入盛菜心的碗内即成",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/164459_73987.jpg"
			}]
		}, {
			"id": 449,
			"classid": 3,
			"name": "冬笋丝炒咸白菜",
			"peoplenum": "3-4人",
			"preparetime": "10分钟内",
			"cookingtime": "10分钟内",
			"content": "哥哥腌制的咸白菜，没有等到变色我就嚷嚷要吃了，哥哥就给了一点，叫我先拿着吃，等几天再去拿，喜欢自家腌制的咸白菜，买的好咸受不了，咸白菜配冬笋和红萝卜一起烹制的，真的好鲜美，有了它，早上会多喝一碗粥呢。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115314_95935.jpg",
			"tag": "冬季,炒,私房菜,减肥,瘦身,肥胖",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "胡萝卜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "老干妈油辣椒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "鸡精",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "冬笋",
				"type": 1,
				"amount": "500g"
			}, {
				"mname": "咸白菜",
				"type": 1,
				"amount": "300g"
			}],
			"process": [{
				"pcontent": "冬笋去壳切开",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174208_85228.jpg"
			}, {
				"pcontent": "放入冷水锅里大火烧开后捞起",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174203_57315.jpg"
			}, {
				"pcontent": "切成丝",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174221_86907.jpg"
			}, {
				"pcontent": "咸白菜洗净后拧干水分",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174222_33299.jpg"
			}, {
				"pcontent": "切丝",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174222_28275.jpg"
			}, {
				"pcontent": "胡萝卜去皮洗净后切丝",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174222_46889.jpg"
			}, {
				"pcontent": "锅内油温7分热",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174223_67381.jpg"
			}, {
				"pcontent": "先倒入咸白菜煸炒出香味后盛起",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174223_11013.jpg"
			}, {
				"pcontent": "再起油锅，油温7分热倒入冬笋丝和胡萝卜丝煸炒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174223_47496.jpg"
			}, {
				"pcontent": "加入一克盐煸炒让其入味",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174224_12785.jpg"
			}, {
				"pcontent": "加入适量的开水大火2分钟",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174224_97113.jpg"
			}, {
				"pcontent": "之后打开倒入咸白菜煸炒均匀，加入老干妈油辣椒，煸炒均匀",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174224_55373.jpg"
			}, {
				"pcontent": "加入鸡精调味后出锅",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/174225_36358.jpg"
			}]
		}, {
			"id": 526,
			"classid": 3,
			"name": "香菇冬笋炒白菜梗",
			"peoplenum": "1-2人",
			"preparetime": "10-20分钟",
			"cookingtime": "10-20分钟",
			"content": "一天，突然想把白菜的菜叶与菜梗分别做汤和炒蔬菜，白菜叶直接放入肉汤煮，白菜梗做了一道炒蔬，拿出前一天留下的香菇与冬笋，再泡些黑木耳，一道制作非常简单，吃口却是鲜美爽脆的香菇冬笋炒白菜梗出炉了，其实这道菜也是因为我懒得去买菜而凑合出来的。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115334_89013.jpg",
			"tag": "冬季,家常菜,晚餐,炒锅,瘦身",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "半小勺"
			}, {
				"mname": "蚝油",
				"type": 0,
				"amount": "1小勺"
			}, {
				"mname": "白砂糖",
				"type": 0,
				"amount": "少许"
			}, {
				"mname": "黑木耳",
				"type": 0,
				"amount": "少许"
			}, {
				"mname": "白菜",
				"type": 1,
				"amount": "500g"
			}, {
				"mname": "香菇",
				"type": 1,
				"amount": "6朵"
			}, {
				"mname": "冬笋",
				"type": 1,
				"amount": "1个"
			}],
			"process": [{
				"pcontent": "白菜、香菇、冬笋、泡好的黑木耳",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175451_97236.jpg"
			}, {
				"pcontent": "白菜洗净，切去菜叶，将白菜梗切块",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175453_15957.jpg"
			}, {
				"pcontent": "冬笋去壳，入锅内用水煮，水开后再煮5分钟，取出冷却后切片，香菇洗净切片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175453_53546.jpg"
			}, {
				"pcontent": "起油锅，放入香菇片煸炒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175454_17643.jpg"
			}, {
				"pcontent": "放入泡好洗净的黑木耳煸炒一会儿",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175454_29267.jpg"
			}, {
				"pcontent": "放入冬笋片翻炒一会儿",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175455_70433.jpg"
			}, {
				"pcontent": "放入白菜梗翻炒一下",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175455_51375.jpg"
			}, {
				"pcontent": "倒入1小勺蚝油，半小勺盐，少许糖，拌匀",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175456_18115.jpg"
			}, {
				"pcontent": "倒入少许热水，煮5分钟，开大火收下汁水<br \/>\n",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175456_98873.jpg"
			}, {
				"pcontent": "起锅装盘",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/175457_65138.jpg"
			}]
		}, {
			"id": 631,
			"classid": 4,
			"name": "腊肠炒金针蘑白菜",
			"peoplenum": "1-2人",
			"preparetime": "10-20分钟",
			"cookingtime": "10分钟内",
			"content": "金针菇中含锌量比较高，有促进儿童智力发育和健脑的作用，在许多国家被誉为“益智菇”和“增智菇”。（来源于网络）",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115357_80702.jpg",
			"tag": "家常菜,通乳,排毒,特禀质,骨质疏松,咸香,10分钟内,炒,动脉硬化,孕妇,青少年,老人,白领,便秘,健忘,晚餐,冬季,营养,增强抵抗力,消脂,补钙,提高免疫力,全菜系,1-2人,益智,待客菜,健脑益智,健脑,催乳,下奶,增强记忆力,炒锅,抗过敏",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "料酒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "薄盐生抽",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "醋",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蚝油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "白菜",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "金针菇",
				"type": 1,
				"amount": "50g"
			}, {
				"mname": "腊肠",
				"type": 1,
				"amount": "1根 "
			}],
			"process": [{
				"pcontent": "葱，蒜，腊肠切片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180138_91759.jpg"
			}, {
				"pcontent": "白菜洗净控水，切片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180138_44979.jpg"
			}, {
				"pcontent": "金针蘑头洗净控水",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180138_32168.jpg"
			}, {
				"pcontent": "锅中放油，炒香葱蒜",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180139_54168.jpg"
			}, {
				"pcontent": "放腊肠炒，炒到腊肠出油",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180139_78515.jpg"
			}, {
				"pcontent": "放白菜，加点花椒粉",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180139_26076.jpg"
			}, {
				"pcontent": "加醋",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180145_11449.jpg"
			}, {
				"pcontent": "加料酒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180145_31739.jpg"
			}, {
				"pcontent": "加生抽",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180146_16511.jpg"
			}, {
				"pcontent": "加蚝油",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180146_51810.jpg"
			}, {
				"pcontent": "最后放金针蘑菇头快炒",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/180147_33043.jpg"
			}]
		}, {
			"id": 732,
			"classid": 5,
			"name": "大白菜黄豆煲猪蹄",
			"peoplenum": "1-2人",
			"preparetime": "10-20分钟",
			"cookingtime": "1-2小时",
			"content": "冬季养生滋补，一般都会用煲汤来补身。<br \/>各种营养食材根据其特有的效果在一起煲汤，给我们的身体增加营补给。<br \/>我家每天中午都会煲汤，根据季节的变换换着花样。<br \/>猪蹄汤既营养又滋补，而且不会油腻，是我家大小都爱的，这道汤适合冬季滋补，加入一些黄豆和冬季当家菜大白菜，可补充身体的蛋白质和钙质，即滋补又能美容。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115416_65189.jpg",
			"tag": "汤,丰胸,催乳,通乳,下奶,乳腺增生,内分泌失调",
			"material": [{
				"mname": "姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "大料",
				"type": 0,
				"amount": "2个"
			}, {
				"mname": "鸡精",
				"type": 0,
				"amount": "少许"
			}, {
				"mname": "胡椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "料酒",
				"type": 0,
				"amount": "20ml"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "葱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "黄豆",
				"type": 1,
				"amount": "40g"
			}, {
				"mname": "大白菜",
				"type": 1,
				"amount": "2片"
			}, {
				"mname": "猪蹄",
				"type": 1,
				"amount": "1个"
			}],
			"process": [{
				"pcontent": "黄豆提前浸泡一夜。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085740_44870.jpg"
			}, {
				"pcontent": "猪蹄洗净切块冷水焯烫。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085740_29643.jpg"
			}, {
				"pcontent": "焯烫过的猪蹄放入砂锅加入葱姜大料和清水。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085740_23741.jpg"
			}, {
				"pcontent": "在加入料酒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085741_16336.jpg"
			}, {
				"pcontent": "加入浸泡好的黄豆。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085741_68488.jpg"
			}, {
				"pcontent": "大火煮开小火慢慢煲制1个小时。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085741_93402.jpg"
			}, {
				"pcontent": "炒锅倒少许油把大白菜炒至至软关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085741_55994.jpg"
			}, {
				"pcontent": "然后把大白菜放入砂锅。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085741_66889.jpg"
			}, {
				"pcontent": "加入盐，胡椒粉继续煮上15分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085742_81161.jpg"
			}, {
				"pcontent": "最后撒少许蒜苗花关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/085742_83569.jpg"
			}]
		}, {
			"id": 817,
			"classid": 6,
			"name": "大白菜三丝豆腐汤",
			"peoplenum": "3-4人",
			"preparetime": "10分钟内",
			"cookingtime": "10-20分钟",
			"content": "冬季是大白菜的盛产季节，也是咱们冬季餐桌少不了的蔬菜。<br \/>大白菜，味道鲜美，营养丰富，素有“菜中之王”的美称，为广大群众所喜爱。<br \/>正如俗语说的：“肉中就数猪肉美，菜里唯有白菜鲜。”<br \/>还有一句俗话叫：白菜豆腐保平安，可见其营养价值。<br \/>冬季女性很多人都会有手脚冰凉，怕冷等症，那就多吃点白菜烧豆腐，通过获取充足的维生素B2，减少体内热量的快速的流失，从而提高机体的抗寒能力。<br \/>这款家常白菜豆腐汤最适合女性朋友冬季食用，可缓解手脚冰凉滋补暖身。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115435_59666.jpg",
			"tag": "增强抵抗力,孕中期,汤,美容,补钙",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "胡椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "鸡精",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蒜苗",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "豆腐",
				"type": 1,
				"amount": "100g"
			}, {
				"mname": "大白菜",
				"type": 1,
				"amount": "100g"
			}, {
				"mname": "香菇",
				"type": 1,
				"amount": "4朵"
			}, {
				"mname": "胡萝卜",
				"type": 1,
				"amount": "50g"
			}],
			"process": [{
				"pcontent": "准备好所有的食材。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090204_16141.jpg"
			}, {
				"pcontent": "豆腐切条用淡盐水浸泡5分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090205_19690.jpg"
			}, {
				"pcontent": "香菇，大白菜，胡萝卜非别洗净切丝。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090206_90309.jpg"
			}, {
				"pcontent": "炒锅倒油爆香葱花",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090207_91115.jpg"
			}, {
				"pcontent": "倒入白菜，香菇，胡萝卜翻炒片刻关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090207_54390.jpg"
			}, {
				"pcontent": "砂锅加入适量的清水，放入炒过的食材。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090208_95895.jpg"
			}, {
				"pcontent": "煮上5分钟加入盐。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090209_85455.jpg"
			}, {
				"pcontent": "加入胡椒粉调味。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090211_26965.jpg"
			}, {
				"pcontent": "然后再放入豆腐继续煮上2分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090211_40865.jpg"
			}, {
				"pcontent": "加入鸡精。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090212_25110.jpg"
			}, {
				"pcontent": "加入蒜苗花关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090213_93002.jpg"
			}]
		}, {
			"id": 836,
			"classid": 6,
			"name": "白菜豆腐汤",
			"peoplenum": "1-2人",
			"preparetime": "10分钟内",
			"cookingtime": "10-20分钟",
			"content": "不知道 坐在办公室的你<br \/>是否<br \/>还记的当初的梦<br \/>是否<br \/>还记的大草原的天空 <br \/>还记的大草原的草<br \/><br \/>做个独立女子<br \/>不管是生活<br \/>或是经济<br \/>都要好好爱自己",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115437_57683.jpg",
			"tag": "美容,痰湿质,冬季,增强抵抗力,年菜,健脾养胃,立冬,小寒",
			"material": [{
				"mname": "黑胡椒粉",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "红辣椒",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "蒜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "大葱",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "土豆",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "洋葱",
				"type": 1,
				"amount": "100g"
			}, {
				"mname": "豆腐",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "五花肉",
				"type": 1,
				"amount": "200g"
			}, {
				"mname": "辣白菜",
				"type": 1,
				"amount": "300g"
			}],
			"process": [{
				"pcontent": "葱切段,蒜切末,姜切末,小红辣椒切段,洋葱切丝,土豆切片",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090325_50773.jpg"
			}, {
				"pcontent": "辣白菜用刀切段成小块",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090326_65543.jpg"
			}, {
				"pcontent": "锅底摸少许油,放入五花肉,听到嗞嗞啦啦的声音,将五花肉烤出点油来,倒入一点料酒爆香",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090326_60253.jpg"
			}, {
				"pcontent": "加入姜末,蒜末和洋葱丝,煸炒至姜蒜金黄,洋葱丝变软为止",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090327_18003.jpg"
			}, {
				"pcontent": "加入辣白菜,土豆片,和葱段",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090327_84829.jpg"
			}, {
				"pcontent": "倒入水,没过所以材质为宜,加入盐,生抽,辣椒粉,辣白菜汤汁,以及少量的糖和黑胡椒粉调味",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090327_42286.jpg"
			}, {
				"pcontent": "加入豆腐,撒小红辣椒段",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090327_85854.jpg"
			}, {
				"pcontent": "大火烧开,配米饭,即食",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090328_77602.jpg"
			}]
		}, {
			"id": 878,
			"classid": 6,
			"name": "白菜豆腐鱼头汤",
			"peoplenum": "3-4人",
			"preparetime": "10-20分钟",
			"cookingtime": "30分钟-1小时",
			"content": "大白菜是冬季餐桌上的常客，有“冬日白菜美如笋”之美誉，白菜中含有丰富的维生素C、E，在空气特别干燥的秋冬季，多吃白菜可以起到护肤和养颜效果。<br \/>而且大白菜含有丰富的钙，对不喜欢喝牛奶的人可以通过食用足量的大白菜来获得很多的钙。<br \/>鲢鱼头富含胶质蛋白，脂肪和热量都很低，食之有健脾补气、温中暖胃、美容润肤之效；<br \/>豆腐的蛋白质和钙含量丰富，有清热润燥、生津解毒、降低血脂的作用。<br \/>将鲢鱼头和嫩豆腐，白菜炖煮成汤饮用，而且借助鱼肉中维生素D可使钙的吸收提高很多倍。<br \/>此款汤适合冬季食用，暖身健脑，健脾补气，温中暖胃，使人皮肤润泽细腻，而且还是补充钙制得营养汤羹。<br \/>是老少皆宜的滋补养生汤。",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115444_31321.jpg",
			"tag": "下奶,增强抵抗力,汤,美容,补钙,通乳",
			"material": [{
				"mname": "油",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "盐",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "葱姜",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "白酒",
				"type": 0,
				"amount": "5ml"
			}, {
				"mname": "胡椒粉",
				"type": 0,
				"amount": "3g"
			}, {
				"mname": "蒜苗",
				"type": 0,
				"amount": "适量"
			}, {
				"mname": "鲢鱼头",
				"type": 1,
				"amount": "1个"
			}, {
				"mname": "大白菜",
				"type": 1,
				"amount": "100g"
			}, {
				"mname": "豆腐",
				"type": 1,
				"amount": "200g"
			}],
			"process": [{
				"pcontent": "鱼头洗净。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090708_51277.jpg"
			}, {
				"pcontent": "豆腐切片用淡盐水浸泡5分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090708_48169.jpg"
			}, {
				"pcontent": "汤煲中加入适量的水，葱姜烧开。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090708_46504.jpg"
			}, {
				"pcontent": "鱼头两面煎至微黄。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090708_49762.jpg"
			}, {
				"pcontent": "然后把鱼头放入汤煲中。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090708_17034.jpg"
			}, {
				"pcontent": "加入白酒。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090709_15108.jpg"
			}, {
				"pcontent": "加盖大火煮至。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090709_16786.jpg"
			}, {
				"pcontent": "大白菜切条放入锅中炒至变软关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090709_45543.jpg"
			}, {
				"pcontent": "鱼头汤变奶白加入炒过的大白菜。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090710_65664.jpg"
			}, {
				"pcontent": "再加入豆腐煮上8-10分钟。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090710_66329.jpg"
			}, {
				"pcontent": "加入盐。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090710_55241.jpg"
			}, {
				"pcontent": "加入胡椒粉调味。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090710_92648.jpg"
			}, {
				"pcontent": "最后加适量的蒜苗关火。",
				"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160720\/090711_25557.jpg"
			}]
		}]
	}
}

// 菜谱详情
const MenuDetail = {
	"status": 0,
	"msg": "ok",
	"result": {
		"id": 5,
		"classid": 2,
		"name": "翡翠彩蔬卷",
		"peoplenum": "1-2人",
		"preparetime": "10分钟内",
		"cookingtime": "10分钟内",
		"content": "春天是为夏天做准备的刮油季，为了夏天能够美美的穿上漂亮的花裙子，让我们一起来狠狠的刮油吧。<br \/>这个色彩缤纷的彩蔬卷，低热量，高营养，是一道秀色可餐的减肥餐~",
		"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/115138_19423.jpg",
		"tag": "减肥,咸香,宴请,抗氧化,抗衰老,私房菜,聚会",
		"material": [{
			"mname": "盐",
			"type": 0,
			"amount": "1勺"
		}, {
			"mname": "鲍汁",
			"type": 0,
			"amount": "1茶勺"
		}, {
			"mname": "糖",
			"type": 0,
			"amount": "适量"
		}, {
			"mname": "水淀粉",
			"type": 0,
			"amount": "1勺"
		}, {
			"mname": "大白菜",
			"type": 1,
			"amount": "3片"
		}, {
			"mname": "菠菜",
			"type": 1,
			"amount": "30g"
		}, {
			"mname": "红萝卜",
			"type": 1,
			"amount": "50g"
		}, {
			"mname": "彩椒",
			"type": 1,
			"amount": "50g"
		}],
		"process": [{
			"pcontent": "彩椒，红萝卜切丝",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_72503.jpg"
		}, {
			"pcontent": "白菜和菠菜飞水",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_29860.jpg"
		}, {
			"pcontent": "将蔬菜丝码在白菜叶上",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_92740.jpg"
		}, {
			"pcontent": "卷成卷",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_38394.jpg"
		}, {
			"pcontent": "切成段",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_26158.jpg"
		}, {
			"pcontent": "锅中放少许水，加入盐，鲍汁（蚝油），水淀粉，煮至汤汁粘稠",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_40907.jpg"
		}, {
			"pcontent": "浇在彩蔬卷上即可",
			"pic": "http:\/\/api.jisuapi.com\/recipe\/upload\/20160719\/162546_40860.jpg"
		}]
	}
}