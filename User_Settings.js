module.exports = {
	opcodes: {
		366226: { // TW-92.03
			"C_SELECT_CHANNEL": 45065,
			"C_REQUEST_START_GUILD_QUEST": 51648,
			"C_REQUEST_FINISH_GUILD_QUEST": 46735,
			"C_TRY_NPC_INTERACTION": 52014,
			"S_CANT_FLY_ANYMORE": 40937,
			"S_UPDATE_SERVANT_INFO": 49088,
			"C_FIELD_EVENT_BAN": 36471,
			"C_REGISTER_REPAIR_ITEM": 45312,
			"C_START_REPAIR_ITEM": 57907,
			"C_REQUEST_REPAIR_ITEM": 23782,
			
			"S_UPDATE_GUILD_QUEST_STATUS": 25232,
		},
		376012: { // TW-100.02
			"C_SELECT_CHANNEL": 62335,
			"C_REQUEST_START_GUILD_QUEST": 30633,
			"C_REQUEST_FINISH_GUILD_QUEST": 41778,
			"C_TRY_NPC_INTERACTION": 32410,
			"S_CANT_FLY_ANYMORE": 58792,
			"S_UPDATE_SERVANT_INFO": 64247,
			"C_FIELD_EVENT_BAN": 54893,
			"C_REGISTER_REPAIR_ITEM": 29131,
			"C_START_REPAIR_ITEM": 40841,
			"C_REQUEST_REPAIR_ITEM": 50559
		},
		381092: { // TW-105.02
			"C_SELECT_CHANNEL": 27357,
			"C_REQUEST_START_GUILD_QUEST": 56905,
			"C_REQUEST_FINISH_GUILD_QUEST": 25565,
			"C_TRY_NPC_INTERACTION": null,
			"S_CANT_FLY_ANYMORE": 41711,
			"S_UPDATE_SERVANT_INFO": null,
			"C_FIELD_EVENT_BAN": null,
			"C_REGISTER_REPAIR_ITEM": null,
			"C_START_REPAIR_ITEM": null,
			"C_REQUEST_REPAIR_ITEM": null,
		},
		382688: { // TW-107.02
			"C_SELECT_CHANNEL": 62335,
			"C_REQUEST_START_GUILD_QUEST": 30633,
			"C_REQUEST_FINISH_GUILD_QUEST": 41778,
			"C_TRY_NPC_INTERACTION": null,
			"S_CANT_FLY_ANYMORE": 50238,
			"S_UPDATE_SERVANT_INFO": null,
			"C_FIELD_EVENT_BAN": null,
			"C_REGISTER_REPAIR_ITEM": null,
			"C_START_REPAIR_ITEM": null,
			"C_REQUEST_REPAIR_ITEM": null,
		},
		383529: { // TW-108.02
			"C_SELECT_CHANNEL": 62335,
			"C_REQUEST_START_GUILD_QUEST": 30633,
			"C_REQUEST_FINISH_GUILD_QUEST": 41778,
			"C_TRY_NPC_INTERACTION": null,
			"S_CANT_FLY_ANYMORE": 50238,
			"S_UPDATE_SERVANT_INFO": null,
			"C_FIELD_EVENT_BAN": null,
			"C_REGISTER_REPAIR_ITEM": null,
			"C_START_REPAIR_ITEM": null,
			"C_REQUEST_REPAIR_ITEM": null,
		},
		384752: { // TW-109.02
			"C_SELECT_CHANNEL": 62335, // 4+12
			"C_REQUEST_START_GUILD_QUEST": 30633, // 4+4
			"C_REQUEST_FINISH_GUILD_QUEST": 41778, // 4+4
			"C_TRY_NPC_INTERACTION": 22694, // 4+20
			"S_CANT_FLY_ANYMORE": 50238, // 4+0
			"S_UPDATE_SERVANT_INFO": 32106, // 4+123
			"C_FIELD_EVENT_BAN": null,
			"C_REGISTER_REPAIR_ITEM": null,
			"C_START_REPAIR_ITEM": null,
			"C_REQUEST_REPAIR_ITEM": null,
		}
	},
	
	ignoreAbnormality: [
		48732, // 刨冰
		48734, // 醉意 I
		48735, // 醉意 II
		48736, // 醉意 III
		48737, // 醉意 IV
		48738, // 醉意 V
		
		70251, // 利卡諾勒啤酒
		70252, // 覆盆子酒
		70253, // 天蓮花酒
		70254, // 萊納式黑啤酒
		70255, // 塔克式蜂蜜南瓜酒
		
		476806, // 時空崩壞!
		
		630201, // 飛行計量條恢復
		630202, // 飛行計量條恢復
		630411, // 風之精髓
		630511, // 火之精髓
		631002, // 電能
		631003, // 電能超負荷
		631201, // 飛行計量條恢復
		631202, // 飛行計量條恢復
		
		776017, // 暗黑力量
		
		806001, // 殭屍爆血效果
		806002, // 解除殭屍爆血效果
		811061, // 老舊的透明變身藥水
		821101, // 憐憫
		
		905656, // 惡魔的微笑
		905657, // 太陽之光
		
		7102001, // 魔力爆發
		
		45000011, // 奮進
		45000012, // 奮進低落
		
		47660800, // 暗黑 I
		47660900, // 閃光
		47661000, // 暗黑 II
		47662300, // 暗黑 I
		
		999001011 // 矇眼: 為了進行破西瓜遊戲遮住眼睛
	],
	
	ignoreQuest: [
		10005, 10006, 10007, 10008, 10009, 10010,
		
		10005001, // 貪婪的阿嵐夏討伐
		10005003, // 貪婪的阿嵐夏
		10006001, // 憤怒的卡魯古斯討伐
		10006003, // 憤怒的卡魯古斯
		10007001, // 虐殺的煞布拉尼惡討伐
		10007003, // 虐殺的煞布拉尼惡
		
		10008001, // 貪婪的阿嵐夏討伐
		10008003, // 貪婪的阿嵐夏
		10009001, // 憤怒的卡魯古斯討伐
		10009003, // 憤怒的卡魯古斯
		10010001, // 虐殺的煞布拉尼惡討伐
		10010003  // 虐殺的煞布拉尼惡
	],
	
	archerTraps: [
		150720, // 爆炸陷阱 VII
		90920,  // 蜘蛛网陷阱 IX
		100520, // 昏厥陷阱 V
		
		251020, // 爆发陷阱箭矢 X
	//  240220, // 蜘蛛网陷阱箭矢 II
		230320  // 麻痹陷阱箭矢 III
	],
	
	dungeonTP: [
		{Zone: 9070, loc: {x:-130559, y: -53523, z:  4434}, w: -0.5, name: "吹牛王"},
		{Zone: 3012, loc: {x:-130617, y:-114086, z:   252}, w:  0.5, name: "训练所"},
	//  {Zone: 9126, loc: {x:-130613, y:-114008, z:   252}, w:  0.5, name: "养成所"},
		{Zone: 9032, loc: {x:  28197, y: 179190, z: -1673}, w: -0.5, name: "单人试炼 黄金迷宫(尾王)"},
		{Zone: 9031, loc: {x:  72480, y: 134330, z:  -500}, w:  0.5, name: "单人试炼 阿卡莎(尾王)"},
		{Zone: 3016, loc: {x: -99606, y:  58812, z:  8024}, w:  0.5, name: "单人试炼 莉莉丝"},
		{Zone: 9713, loc: {x: -99606, y:  58812, z:  8024}, w:  0.5, name: "奇丽安森林(尾王)"},
		{Zone: 9714, loc: {x: -10644, y:  -7847, z: -9855}, w: -0.5, name: "付费专用空间(已重置副本)"},
		{Zone: 9716, loc: {x:  49504, y: 129121, z:  3722}, w: -0.5, name: "飞艇下级 - 尾王"},
		{Zone: 9916, loc: {x:  49502, y: 128693, z:  3713}, w: -0.5, name: "飞艇上级 - 尾王)"},
	//  {Zone: 9777, loc: {x:-112673, y: -34856, z:   470}, w:  0.5, name: "古代地下水道 - 尾王"},
	//  {Zone: 9781, loc: {x:  39419, y:-113077, z: 17212}, w: 0.25, name: "贝里克下级 - 尾王"},
		{Zone: 9739, loc: {x:  53847, y: -92865, z:  1378}, w:  0.7, name: "革命团-2王"},
		{Zone: 3024, loc: {x:  50559, y: 161412, z:  1890}, w:  0.5, name: "阿勒卡夫孵化場(单人)"},
		{Zone: 3025, loc: {x:  50559, y: 161412, z:  1890}, w:  0.5, name: "阿勒卡夫孵化場(组队)"}
	],
	
	servantFood: [
		206046, // 普通飼料
		206047, // 優質飼料
		206048  // 高級飼料
	],
	servantGift: [
		206049, // 小狗雕像
		206050, // 豬雕像
		206051  // 波波利雕像
	],
	
	retaliate: [
		131000, //  0.Warrior   起身攻擊 X
		111000, //  1.Lancer    起身攻擊 X
		101000, //  2.Slayer    起身攻擊 X
		131000, //  3.Berserker 起身攻擊 X
		141000, //  4.Sorcerer  起身攻擊 X
		141000, //  5.Archer    起身攻擊 X
		251000, //  6.Priest    起身攻擊 X
		211000, //  7.Mystic    起身攻擊 X
		140300, //  8.Reaper    起身攻擊 III
		201000, //  9.Gunner    起身火箭 X
		121000, // 10.Brawler   起身攻擊 X
		101000, // 11.Ninja     起身攻擊 X
		186000  // 12.Valkyrie  起身攻擊 X
	],
	
	backstabs: {
		0: { // Warrior 双刀
			22: true // Backstab 後擒術
		},
		1: { // Lacner 枪骑
			9: true, // Leash 捕獲
			23: true // Master's Leash 連鎖捕獲
		},
		2: { // Slayer
			6: true // Backstab 後擒術
		},
		10: { // Brawler 拳师
			// Known Issue: Using Meat Grinder on a target in-range 
			// but not knocked up will still consume the cooldown.
			20: true // Meat Grinder 空中連擊
		},
		11: { // Ninja 忍者
			7: true // Decoy 後方移動術
		},
		12: { // Valkyrie 月光
			20: true // Backstab 月光煉
		}
	},
	
	gatherInfo: [
		{id:   1, category: 1, msg: '坚韧的杂草'},
		
		{id:   2, category: 2, msg: '野生玉米'},
		{id:   3 ,category: 2, msg: '野生红葡萄'},
		{id:   4, category: 2, msg: '黄蘑菇'},
		{id:   5, category: 2, msg: '老南瓜'},
		{id:   6, category: 2, msg: '苹果树'},
		
		{id: 101, category: 3, msg: '岩石'},
		
		{id: 102, category: 4, msg: '钴矿石'},
		{id: 103, category: 4, msg: '硒矿石'},
		{id: 104, category: 4, msg: '水晶矿石'},
		{id: 105, category: 4, msg: '秘银矿石'},
		{id: 106, category: 4, msg: '碣矿石'},
		
		{id: 201, category: 5, msg: '无色结晶'},
		
		{id: 202, category: 6, msg: '赤色结晶'},
		{id: 203, category: 6, msg: '绿色结晶'},
		{id: 204, category: 6, msg: '青色结晶'},
		{id: 205, category: 6, msg: '白色结晶'},
		{id: 206, category: 6, msg: '被污染的花'}
	],
	
	balls: [
		{Zone: 630, id: 2000, name: "風之精髓"},
		{Zone: 630, id: 3000, name: "風之精髓"},
		{Zone: 630, id: 3002, name: "風之精髓"},
		
		{Zone: 631, id: 4001, name: "電能精髓"}
	],
	hideNPCs: [
	//  {Zone: 444, id: 2201, name: "火神守護兵"},
		
		{Zone: 630, id: 2001, name: "火之精髓"},
		{Zone: 630, id: 3001, name: "火之精髓"},
		{Zone: 630, id: 3003, name: "火之精髓"},
		
		{Zone: 630, id: 2100, name: "風之沙漠幽靈"},
		{Zone: 630, id: 2101, name: "風之沙漠幽靈"},
		{Zone: 630, id: 2102, name: "風之沙漠幽靈"},
		
		{Zone: 631, id: 1001, name: "電能生成裝置"},
		{Zone: 631, id: 1002, name: "電能生成裝置"},
		
		{Zone: 459, id: 2003, name: "恶灵岛下级 1号门"},
		{Zone: 459, id:  200, name: "恶灵岛下级 2号门"},
		{Zone: 459, id:  210, name: "恶灵岛下级 2号门"},
		{Zone: 459, id:  211, name: "恶灵岛下级 3号门"},
		
		{Zone: 759, id: 2003, name: "恶灵岛上级 1号门"},
		{Zone: 759, id:  200, name: "恶灵岛上级 2号门"},
		{Zone: 759, id:  210, name: "恶灵岛上级 2号门"},
		{Zone: 759, id:  211, name: "恶灵岛上级 3号门"},
		
		{Zone: 950, id: 3018, name: "龙本P3-后方封路火墙"},
		
		{Zone: 1023, id: 12345, name: "後方移動術 I"},
		
		{Zone: 1023, id: 10235016, name: "精靈召喚：守護精靈 III"},
		{Zone: 1023, id: 10235017, name: "精靈召喚：守護精靈 III"},
		{Zone: 1023, id: 10236013, name: "精靈召喚：生命精靈 XIII"},
		{Zone: 1023, id: 10236014, name: "精靈召喚：生命精靈 XIII"},
		{Zone: 1023, id: 10237014, name: "召喚精靈：閃電精靈 XII"},
		{Zone: 1023, id: 10237015, name: "召喚精靈：閃電精靈 XII"},
		{Zone: 1023, id: 10238007, name: "召喚精靈：破壞精靈 VII"},
		{Zone: 1023, id: 10238008, name: "召喚精靈：破壞精靈 VII"},
		
		{Zone: 1023, id: 10239003, name: "召喚元素王"},
		
		{Zone: 1023, id: 30303007, name: "機器人出擊 VII"},
		{Zone: 1023, id: 30301004, name: "設置哨兵塔 IV"}
	],
	tipNPCs: [
/* ==== 刻印BOSS ======================================================================================== */
		{Zone:   4, id: 5011, logTime: true, type: "刻印BOSS", name: "爆炎(暴风喀纳什)"},
		{Zone:  10, id:   99, logTime: true, type: "刻印BOSS", name: "蛇岛(莎夏拉克)"},
		{Zone:  38, id:   35, logTime: true, type: "刻印BOSS", name: "古代(溃斯格连)"},
		{Zone:  57, id:   33, logTime: true, type: "刻印BOSS", name: "孵化(卡恰斯坦)"},
		{Zone:  52, id: 9050, logTime: true, type: "刻印BOSS", name: "蜥蜴(史内格斗司)"},
		{Zone:  51, id: 7011, logTime: true, type: "刻印BOSS", name: "蜘蛛(拉其奴亚)"},
/* ==== 世界BOSS ======================================================================================== */
		{Zone:  26, id: 5001, logTime: true, type: "世界BOSS", name: "奥勒昙(生命溪谷)"},
		{Zone:  39, id:  501, logTime: true, type: "世界BOSS", name: "哈迦叻(拓荒村莊)"},
		{Zone:  51, id: 4001, logTime: true, type: "世界BOSS", name: "盖洛司(希望村莊)"},
/* ==== 公会BOSS ======================================================================================== */
		{Zone:  29, id: 2001, type: "公会BOSS", quest: `@GuildQuest:10005001`, name: "貪婪的阿嵐夏(古代森林)"},
		{Zone:  34, id: 2002, type: "公会BOSS", quest: `@GuildQuest:10005002`, name: "憤怒的卡魯古斯(寒冰凍原)"},
		{Zone:  34, id: 2003, type: "公会BOSS", quest: `@GuildQuest:10005003`, name: "憤怒的煞布拉尼惡(寒冰凍原)"},
		// {Zone: 152, id: 2001, type: "公会BOSS", name: "貪婪的阿嵐夏(貝利卡: 戰亂時代)152-2001"},
		// {Zone: 152, id: 2002, type: "公会BOSS", name: "憤怒的卡魯古斯(貝利卡: 戰亂時代)152-2002"},
		// {Zone: 152, id: 2003, type: "公会BOSS", name: "虐殺的煞布拉尼惡(貝利卡: 戰亂時代)152-2003"},
		// {Zone: 152, id: 7001, type: "公会BOSS", name: "貪婪的阿嵐夏(貝利卡: 戰亂時代)152-7001"},
		// {Zone: 152, id: 7002, type: "公会BOSS", name: "憤怒的卡魯古斯(貝利卡: 戰亂時代)152-7002"},
		// {Zone: 152, id: 7003, type: "公会BOSS", name: "虐殺的煞布拉尼惡(貝利卡: 戰亂時代)152-7003"},
/* ==== 活动 ============================================================================================ */
		{Zone: 1023, id:     7000, name: "次元門"},
		{Zone: 1023, id:     7001, name: "次元門"},
	//  {Zone: 1023, id:     8000, name: "流浪西奴斯"},
		{Zone: 1023, id:     3000, name: "(活動)杜利溫的幻影"},
		{Zone: 1023, id: 20150805, name: "(活動)杜利溫的幻影"},
		{Zone: 1023, id: 88888888, name: "(活動)寶物箱"},
		{Zone: 1023, id: 88888889, name: "(活動)寶物箱"},
		{Zone: 1023, id:   160341, name: "(活動)聖誕老人"},
		{Zone: 1023, id: 99999997, name: "(活動)貪心鬼聖誕老人"},
		{Zone: 1023, id: 99999998, name: "(活動)小氣鬼聖誕老人"},
		{Zone: 1023, id: 99999991, name: "(活動)偷蛋賊西奴斯"},
		{Zone: 1023, id: 99999992, name: "(活動)偷蛋賊西奴斯"},
		{Zone: 1023, id: 99999999, name: "(活動)偷蛋賊西奴斯"},
		{Zone: 1023, id:   200030, name: "扭曲的次元暗影"},
		{Zone: 1023, id:   200031, name: "扭曲的次元惡夢"},
		{Zone: 1023, id:   200032, name: "扭曲的次元夢魘"},
		{Zone: 1023, id:   200033, name: "扭曲的次元魔神"},
		{Zone: 1023, id:   200034, name: "扭曲的次元魔神"},
		{Zone: 1023, id:   240035, name: "阿勒坤进攻先遣队(侦查队员)"},
		{Zone: 1023, id:   240036, name: "阿勒坤进攻先遣队(侦查队长)"},
/* ==== 亚伦南部 ======================================================================================== */
		{Zone:    2, id: 1271, name: "[阿卡尼亞領地]阿勒坤(西部砍伐區)"},
		{Zone:    3, id: 1271, name: "[阿卡尼亞領地]阿勒坤(遺忘森林)"},
		{Zone:    5, id: 1271, name: "[阿卡尼亞領地]阿勒坤(候季安保護區)"},
		{Zone:    6, id: 1271, name: "[阿卡尼亞領地]阿勒坤(咆哮侵略地)"},
		{Zone:    7, id: 1271, name: "[阿卡尼亞領地]阿勒坤(永恆盆地)"},
		{Zone:    4, id: 1271, name: "[東部領地]依托羅(爆炎山脈)"},
		{Zone:    9, id: 1271, name: "[東部領地]依托羅(貪婪溪谷)"},
		{Zone:   10, id: 1271, name: "[東部領地]依托羅(蛇之島)"},
		{Zone:   11, id: 1271, name: "[東部領地]依托羅(荒涼海岸)"},
		{Zone:   12, id: 1271, name: "[東部領地]依托羅(絕望之島)"},
		{Zone:   15, id: 1271, name: "[波波利亞領地]波雷塔(狂氣丘陵)"},
		{Zone:   16, id: 1271, name: "[波波利亞領地]波雷塔(凡貝爾丘陵)"},
		{Zone:   17, id: 1271, name: "[波波利亞領地]波雷塔(帕拉諾峽谷)"},
		{Zone:   23, id: 1271, name: "[波波利亞領地]波雷塔(月之湖)"},
		{Zone:   18, id: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(遺忘巨人之都)"},
		{Zone:   19, id: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(利卡諾勒曠野)"},
		{Zone:   21, id: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(蜥蜴王巢穴)"},
		{Zone:   24, id: 1271, name: "[比亞阿鳥雷溫領地]菲亞圖(黃金之路)"},
/* ==== 夏拉南部 ======================================================================================== */
		{Zone:   26, id: 1271, name: "[艾賽尼亞領地]艾沙特(生命溪谷)"},
		{Zone:   27, id: 1271, name: "[艾賽尼亞領地]艾沙特(艾賽尼亞丘陵地)"},
		{Zone:   28, id: 1271, name: "[艾賽尼亞領地]艾沙特(汙染森林)"},
		{Zone:   29, id: 1271, name: "[艾賽尼亞領地]艾沙特(古代森林)"},
		{Zone:   30, id: 1271, name: "[倍里達斯特別地區]貝勒沙(太陽庭院)"},
		{Zone:   31, id: 1271, name: "[威斯多尼亞領地]斯托蘭(冰凍海岸)"},
		{Zone:   32, id: 1271, name: "[威斯多尼亞領地]斯托蘭(暴君高原)"},
		{Zone:   34, id: 1271, name: "[威斯多尼亞領地]斯托蘭(寒冰凍原)"},
		{Zone:   35, id: 1271, name: "[比亞艾雷尼溫領地]巴亞斯(古龍峽谷)"},
		{Zone:   36, id: 1271, name: "[比亞艾雷尼溫領地]巴亞斯(驅逐者溪谷)"},
		{Zone:   38, id: 1271, name: "[比亞艾雷尼溫領地]巴亞斯(古代戰爭廢墟)"},
		{Zone:   40, id: 1271, name: "[潘諾尼亞領地]潘奈巴(隔離區)"},
		{Zone:   41, id: 1271, name: "[潘諾尼亞領地]潘奈巴(野蠻溪谷)"},
/* ==== 夏拉北部 ======================================================================================== */
		{Zone:   45, id: 1271, name: "[洛斯堤里奇亞領]洛堤卡(青空溪谷)"},
		{Zone:   47, id: 1271, name: "[洛斯堤里奇亞領]洛堤卡(堤勒凱伊森林)"},
		{Zone:   48, id: 1271, name: "[黑坎特別地區]海勒昆(卡諾比亞前線)"},
		{Zone:   49, id: 1271, name: "[洛斯卡伊阿納領地]洛卡農(卡勒古內雅)"},
		{Zone:   50, id: 1271, name: "[洛斯卡伊阿納領地]洛卡農(阿勒古內雅)"},
		{Zone:   51, id: 1271, name: "[洛斯阿爾卡笛亞領地]洛亞昆(阿爾卡笛亞峽谷)"},
		{Zone:   52, id: 1271, name: "[洛斯阿爾卡笛亞領地]洛亞昆(遺忘者雪原)"},
		{Zone:   54, id: 1271, name: "[希巴尼亞領地]希爾貝塔(妖精森林)"},
		{Zone:   55, id: 1271, name: "[希巴尼亞領地]希爾貝塔(暗影森林)"},
		{Zone:   56, id: 1271, name: "[希巴尼亞領地]希爾貝塔(黑暗森林)"},
		{Zone:   57, id: 1271, name: "[希巴尼亞領地]希爾貝塔(阿梅納夸特拉)"},
/* ===== 亚伦北部 ======================================================================================= */
		{Zone:  172, id: 1271, name: "[巴拉卡尼亞領地]巴雷谷(原始之地)"},
		{Zone:  181, id: 1271, name: "[巴拉卡尼亞領地]巴雷谷(古代巴拉卡遺跡)"},
		{Zone:  182, id: 1271, name: "[巴拉卡尼亞領地]巴雷谷(巴拉卡尼亞丘陵地)"},
		{Zone:  183, id: 1278, name: "[巴拉卡尼亞領地]巴雷谷(伊露卡近郊)"},
		{Zone:  191, id: 1271, name: "[巴拉卡尼亞領地]巴雷谷(帝國之地)"},
/* ==== 保護領地 ======================================================================================== */
		{Zone:   13, id: 1271, name: "[巴其溫保護領地]巴勒圖(黎明庭園)"},
/* ==== 直辖領地 ======================================================================================== */
		{Zone:   63, id: 1278, name: "[直辖领地]貝拉昆(貝利卡近郊)"},
		{Zone:   72, id: 1278, name: "[直辖领地]阿爾魯瑪(爾雷曼西亞近郊)"},
		{Zone:   84, id: 1278, name: "[直辖领地]凱依德拉(凱亞多勒近郊)"},
/* ==== 神秘商店 ======================================================================================== */
		{Zone:   63, id: 1271, name: "神秘商店(貝利卡-1)"},
		{Zone:   63, id: 1279, name: "神秘商店(貝利卡-2)"},
		{Zone:   72, id: 1271, name: "神秘商店(爾雷曼西亞)"},
		{Zone:   84, id: 1271, name: "神秘商店(凱亞多勒)"},
		{Zone:  183, id: 1271, name: "神秘商店(伊露卡)"},
/* ==== 交付哥布林 ====================================================================================== */
		{Zone:   63, id: 1276, logTime: true, type: "交付", name: "1-交付哥布林(貝)_1276"},
		{Zone:   63, id: 1284, logTime: true, type: "交付", name: "1-交付哥布林(貝)_1284"},
		{Zone:   84, id: 1276, logTime: true, type: "交付", name: "2-交付哥布林(凱)"},
		{Zone:   72, id: 1276, logTime: true, type: "交付", name: "3-交付哥布林(爾)"},
		{Zone:  183, id: 1276, logTime: true, type: "交付", name: "4-交付哥布林(伊)"},
/* ==== 空岛稀有 ======================================================================================== */
		{Zone: 2020, id: 1100, name: "空岛(兵营/高階-中)-高龍追擊者"},
		{Zone: 2020, id: 1101, name: "空岛(兵营/高階-下)-高龍戰術支援家"},
		{Zone: 2020, id: 1102, name: "空岛(兵营/高階-上)-高龍制壓者"},
		{Zone: 2020, id: 1200, name: "空岛(卢地/精銳-下)-那伽神官"},
		{Zone: 2020, id: 1201, name: "空岛(卢地/精銳-上)-那伽騎士"},
		{Zone: 2020, id: 1202, name: "空岛(卢地/精銳-中)-那伽執行官"},
		{Zone: 2020, id: 1300, name: "空岛(猴子)-馬努克"},
		{Zone: 2020, id: 1400, name: "空岛(蜘蛛)-埃席爾洛普"},
		{Zone: 2020, id: 1500, name: "空岛(蜥蜴)-傑梅西斯"},
		{Zone: 2020, id: 1600, name: "空岛(螃蟹)-紅色苔蘚螃蟹"},
		{Zone: 2020, id: 1601, name: "空岛(蚂蚁)-獨眼食腐獸"},
		{Zone: 2020, id: 1700, name: "空岛(肥虫)-佩奇斯"}
	],
	
	GageInfo: {
		id:              0n,
		huntingZoneId:    0,
		templateId:       0,
		target:          0n,
		unk1:             0,
		unk2:         false,
		curHp: 16000000000n,
		maxHp: 16000000000n,
		unk3: true // always 1?
	},
	
	classToItem: {
		// 阿勒坤祭司的精髓
		1:  602172, // 枪骑
		10: 602172, // 拳师
		6:  602174, // 祭师
		7:  602174, // 元素
		// 貝利卡宴會紀念幣
		0:  88704, // 双刀
		2:  88704, // 大剑
		3:  88704, // 斧头
		4:  88704, // 魔导
		5:  88704, // 弓箭
		8:  88704, // 飞镰
		9:  88704, // 魔工
		11: 88704, // 忍者
		12: 88704  // 月光
	},
	
	filterLoot: [
		7214, // 复活卷轴
		8000, // 恢复晶球
		8001, // HP恢复晶球
		8002, // MP恢复晶球
		8003, // 闪亮的MP恢复晶球
		8004, // 强力的抵抗晶球
		8005, // 强力恢复晶球
		8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, // 恢复精气晶球 I-XV
		8023, // 魔力精气晶球
		8025, // 增幅的晶球
		
		206883, // 時空精髓
		221212, // 上锁的箱子
		
		89768, // 初階平衡武器強化石
		89769, // 中階平衡武器強化石
		89770, // 高階平衡武器強化石
		
		89771, // 初階平衡防具強化石
		89772, // 中階平衡防具強化石
		89773, // 高階平衡防具強化石
		
		// 98598, // 老舊的補給品
		// 98599, // 恶魔的脚爪
		// 98600, // 龍的骨頭
		
		98683, // 加工的礦物
		98697, // 亞斯蘭的腳爪
		
		98666, // 技能鍛鍊卷軸 I
		98667, // 技能屬性開放卷軸 I
		98668, // 技能鍛鍊卷軸 II
		98669, // 技能屬性開放卷軸 II
		98670, // 技能鍛鍊卷軸 III
		
		98850, // 技能鍛鍊經驗值書籍 (小型)
		98851, // 技能鍛鍊經驗值書籍 (中型)
		98852, // 技能鍛鍊經驗值書籍 (大型)
		98853, // 技能鍛鍊經驗值書籍 (超大型)
		
		602172, // 阿勒坤祭司的精髓
		602174, // 阿勒坤祭司的精髓
		
		209901, // 技能鍛鍊經驗值書籍 I
		209902, // 技能鍛鍊經驗值書籍 II
		209903, // 技能鍛鍊經驗值書籍 III
		209904, // 技能鍛鍊經驗值書籍 IV
		
		6335, // 爆炎長槍
		6336, // 解放之石
		98551, // 大地之石
		98552, // 暴風之石
		
		70093 // 男子氣概藥水
	],
	ignoreItems: [
		88892, // 生鏽的金屬雙劍
		88893, // 生鏽的金屬長槍
		88894, // 生鏽的金屬巨劍
		88895, // 生鏽的金屬戰斧
		88896, // 生鏽的金屬法環
		88897, // 生鏽的金屬之弓
		88898, // 生鏽的金屬權杖
		88899, // 生鏽的金屬魔棒
		88900, // 生鏽的金屬飛劍
		88901, // 生鏽的金屬魔工炮
		88902, // 生鏽的金屬拳甲
		88903, // 生鏽的金屬手裏劍
		88904, // 生鏽的金屬月光刀
		88905, // 生鏽的憤怒雙劍
		88906, // 生鏽的憤怒長槍
		88907, // 生鏽的憤怒巨劍
		88908, // 生鏽的憤怒戰斧
		88909, // 生鏽的憤怒法環
		88910, // 生鏽的憤怒之弓
		88911, // 生鏽的憤怒權杖
		88912, // 生鏽的憤怒魔棒
		88913, // 生鏽的憤怒飛劍
		88914, // 生鏽的憤怒魔工炮
		88915, // 生鏽的憤怒拳甲
		88916, // 生鏽的憤怒手裏劍
		88917, // 生鏽的憤怒月光刀
		
		88931, // 生鏽的金屬重甲
		88932, // 生鏽的金屬輕甲
		88933, // 生鏽的金屬布甲
		88934, // 生鏽的金屬重甲手套
		88935, // 生鏽的金屬輕甲手套
		88936, // 生鏽的金屬布甲手套
		88937, // 生鏽的金屬重甲鞋子
		88938, // 生鏽的金屬輕甲鞋子
		88939, // 生鏽的金屬布甲鞋子
		88940, // 生鏽的憤怒重甲
		88941, // 生鏽的憤怒輕甲
		88942, // 生鏽的憤怒布甲
		88943, // 生鏽的憤怒重甲手套
		88944, // 生鏽的憤怒輕甲手套
		88945, // 生鏽的憤怒布甲手套
		88946, // 生鏽的憤怒重甲鞋子
		88947, // 生鏽的憤怒輕甲鞋子
		88948, // 生鏽的憤怒布甲鞋子
		
		89000, // 賽蓮的遺物 I
		89001, // 賽蓮的遺物 II
		89002, // 賽蓮的遺物 III
		89003, // 賽蓮的遺物 IV
		89004, // 賽蓮的遺物 V
		89010, // 伊斯蓮的遺物 I
		89011, // 伊斯蓮的遺物 II
		89012, // 伊斯蓮的遺物 III
		89013, // 伊斯蓮的遺物 IV
		89014, // 伊斯蓮的遺物 V
		89100, // 茱拉斯的聖物 I
		89101, // 茱拉斯的聖物 II
		89102, // 茱拉斯的聖物 III
		89103, // 茱拉斯的聖物 IV
		89104, // 茱拉斯的聖物 V
		89110, // 基德的聖物 I
		89111, // 基德的聖物 II
		89112, // 基德的聖物 III
		89113, // 基德的聖物 IV
		89114, // 基德的聖物 V
		
		9372, // 懲罰的綢緞內衣 [稀有]	0	0	icon_equipments.underwear01_f_tex
		9373, // 和諧的綢緞內衣 [稀有]	0	0	icon_equipments.underwear01_f_tex
		9374, // 森嚴的綢緞內衣 [稀有]	0	0	icon_equipments.underwear01_f_tex
		9375, // 懲罰的馬勒夏黑色蕾絲內衣	0	0	icon_equipments.pc_event_31_f_a_tex
		9376, // 和諧的馬勒夏黑色蕾絲內衣	0	0	icon_equipments.pc_event_31_f_a_tex
		9377, // 森嚴的馬勒夏黑色蕾絲內衣	0	0	icon_equipments.pc_event_31_f_a_tex
		9381, // 懲罰的若隱若現黑色&黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		9382, // 和諧的若隱若現黑色&黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		9383, // 森嚴的若隱若現黑色&黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		9384, // 懲罰的若隱若現白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		9385, // 和諧的若隱若現白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		9386, // 森嚴的若隱若現白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		
		97911, // [S][傳說]堅強的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97912, // [S][傳說]生命的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97913, // [S][傳說]尖銳的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97914, // [S][傳說]守護的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97915, // [S][傳說]流動的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97916, // [S][傳說]堅強的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97917, // [S][傳說]生命的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97918, // [S][傳說]尖銳的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97919, // [S][傳說]守護的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97920, // [S][傳說]流動的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97921, // [S][傳說]堅強的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97922, // [S][傳說]生命的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97923, // [S][傳說]尖銳的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97924, // [S][傳說]守護的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97925, // [S][傳說]流動的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97926, // [S][傳說]堅強的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97927, // [S][傳說]生命的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97928, // [S][傳說]尖銳的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97929, // [S][傳說]守護的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97930, // [S][傳說]流動的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97931, // [S][傳說]堅強的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97932, // [S][傳說]生命的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97933, // [S][傳說]尖銳的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97934, // [S][傳說]守護的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97935, // [S][傳說]流動的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97936, // [S][傳說]堅強的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97937, // [S][傳說]生命的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97938, // [S][傳說]尖銳的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97939, // [S][傳說]守護的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97940, // [S][傳說]流動的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97941, // [S][傳說]堅強的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97942, // [S][傳說]生命的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97943, // [S][傳說]尖銳的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97944, // [S][傳說]守護的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97945, // [S][傳說]流動的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97946, // [S][傳說]堅強的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97947, // [S][傳說]生命的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97948, // [S][傳說]尖銳的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97949, // [S][傳說]守護的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97950, // [S][傳說]流動的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97951, // [S][傳說]堅強的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97952, // [S][傳說]生命的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97953, // [S][傳說]尖銳的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97954, // [S][傳說]守護的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97955, // [S][傳說]流動的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97956, // [S][傳說]堅強的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97957, // [S][傳說]生命的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97958, // [S][傳說]尖銳的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97959, // [S][傳說]守護的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97960, // [S][傳說]流動的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97961, // [S][傳說]堅強的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97962, // [S][傳說]生命的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97963, // [S][傳說]尖銳的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97964, // [S][傳說]守護的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97965, // [S][傳說]流動的若隱若現的黑色絲綢內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97966, // [S][傳說]堅強的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97967, // [S][傳說]生命的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97968, // [S][傳說]尖銳的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97969, // [S][傳說]守護的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97970, // [S][傳說]流動的若隱若現的白色&金色絲綢內衣	0	0	icon_equipments.pc_event_45_f_b_tex
		97971, // 堅強的傳說3 內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97972, // 生命的傳說3 內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97973, // 尖銳的傳說3 內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97974, // 守護的傳說3 內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		97975, // 流動的傳說3 內衣	0	0	icon_equipments.pc_event_45_f_a_tex
		
		99437, // 堅強的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99438, // 生命的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99439, // 尖銳的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99440, // 守護的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99441, // 流動的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99462, // 堅強的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99463, // 生命的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99464, // 尖銳的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99465, // 守護的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99466, // 流動的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99467, // 堅強的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99468, // 生命的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99469, // 尖銳的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99470, // 守護的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99471, // 流動的2017版 白色內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_a_tex
		99472, // 堅強的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99473, // 生命的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99474, // 尖銳的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99475, // 守護的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99476, // 流動的2017版 粉紅內衣 Ⅳ [傳說]  	0	0	icon_equipments.pc_event_57_f_b_tex
		99497, // 堅強的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99498, // 生命的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99499, // 尖銳的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99500, // 守護的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99501, // 流動的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99502, // 堅強的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99503, // 生命的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99504, // 尖銳的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99505, // 守護的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		99506, // 流動的2017版 粉紅內衣 Ⅳ [傳說] 	0	0	icon_equipments.pc_event_57_f_b_tex
		
		//98106, // [物理增幅]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98107, // [魔法增幅]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		98108, // [物理抵抗]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		98109, // [魔法抵抗]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98110, // [物理暴擊]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98111, // [魔法暴擊]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98136, // [物理增幅]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98137, // [魔法增幅]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		98138, // [物理抵抗]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		98139, // [魔法抵抗]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98140, // [物理暴擊]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98141, // [魔法暴擊]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98142, // [物理增幅]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98143, // [魔法增幅]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		98144, // [物理抵抗]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		98145, // [魔法抵抗]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98146, // [物理暴擊]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		//98147, // [魔法暴擊]2019淺色絲綢內衣	0	0	icon_equipments.pc_event_45_f_c_tex
		
		//98148, // [高階][物理增幅]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98149, // [高階][魔法增幅]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		98150, // [高階][物理抵抗]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		98151, // [高階][魔法抵抗]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98152, // [高階][物理暴擊]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98153, // [高階][魔法暴擊]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98178, // [高階][物理增幅]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98179, // [高階][魔法增幅]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		98180, // [高階][物理抵抗]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		98181, // [高階][魔法抵抗]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98182, // [高階][物理暴擊]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98183, // [高階][魔法暴擊]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98184, // [高階][物理增幅]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98185, // [高階][魔法增幅]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		98186, // [高階][物理抵抗]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		98187, // [高階][魔法抵抗]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98188, // [高階][物理暴擊]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		//98189, // [高階][魔法暴擊]2019深色絲綢內衣	0	0	icon_equipments.pc_event_45_f_d_tex
		
		136007, // 堅強的灰色連身內衣 [高級]
		136008, // 生命的灰色連身內衣 [高級]
		136009, // 尖銳的灰色連身內衣 [高級]
		136010, // 守護的灰色連身內衣 [高級]
		136011, // 流動的灰色連身內衣 [高級]
		136012, // 堅強的灰色連身內衣 [稀有]
		136013, // 生命的灰色連身內衣 [稀有]
		136014, // 尖銳的灰色連身內衣 [稀有]
		136015, // 守護的灰色連身內衣 [稀有]
		136016, // 流動的灰色連身內衣 [稀有]
		136017, // 堅強的灰色連身內衣 [傳說]
		136018, // 生命的灰色連身內衣 [傳說]
		136019, // 尖銳的灰色連身內衣 [傳說]
		136020, // 守護的灰色連身內衣 [傳說]
		136021, // 流動的灰色連身內衣 [傳說]
		136022, // 梅勒目修蒙綢緞內衣 [一般]
		136023, // 梅勒目修蒙綢緞內衣 [一般]
		136024, // 梅勒目修蒙綢緞內衣 [一般]
		136025, // 梅勒目修蒙綢緞內衣 [一般]
		136026, // 梅勒目修蒙綢緞內衣 [一般]
		136027, // 堅強的梅勒目修蒙綢緞內衣 [高級]
		136028, // 生命的梅勒目修蒙綢緞內衣 [高級]
		136029, // 尖銳的梅勒目修蒙綢緞內衣 [高級]
		136030, // 守護的梅勒目修蒙綢緞內衣 [高級]
		136031, // 流動的梅勒目修蒙綢緞內衣 [高級]
		136032, // 堅強的梅勒目修蒙綢緞內衣 [稀有]
		136033, // 生命的梅勒目修蒙綢緞內衣 [稀有]
		136034, // 尖銳的梅勒目修蒙綢緞內衣 [稀有]
		136035, // 守護的梅勒目修蒙綢緞內衣 [稀有]
		136036, // 流動的梅勒目修蒙綢緞內衣 [稀有]
		136037, // 堅強的梅勒目修蒙綢緞內衣 [傳說]
		136038, // 生命的梅勒目修蒙綢緞內衣 [傳說]
		136039, // 尖銳的梅勒目修蒙綢緞內衣 [傳說]
		136040, // 守護的梅勒目修蒙綢緞內衣 [傳說]
		136041, // 流動的梅勒目修蒙綢緞內衣 [傳說]
		
		146033, // 堅強的灰色連身內衣 [傳說]	0	0	icon_equipments.underwear00_f_tex
		146034, // 生命的灰色連身內衣 [傳說]	0	0	icon_equipments.underwear00_f_tex
		146035, // 尖銳的灰色連身內衣 [傳說]	0	0	icon_equipments.underwear00_f_tex
		146036, // 守護的灰色連身內衣 [傳說]	0	0	icon_equipments.underwear00_f_tex
		146037, // 流動的灰色連身內衣 [傳說]	0	0	icon_equipments.underwear00_f_tex
		146038, // 馬勒夏白色蕾絲內衣 (一般)	0	0	icon_equipments.pc_event_31_f_b_tex
		146039, // 堅強的馬勒夏白色蕾絲內衣 (高級)	0	0	icon_equipments.pc_event_31_f_b_tex
		146040, // 生命的馬勒夏白色蕾絲內衣 (高級)	0	0	icon_equipments.pc_event_31_f_b_tex
		146041, // 尖銳的馬勒夏白色蕾絲內衣 (高級)	0	0	icon_equipments.pc_event_31_f_b_tex
		146042, // 守護的馬勒夏白色蕾絲內衣 (高級)	0	0	icon_equipments.pc_event_31_f_b_tex
		146043, // 流動的馬勒夏白色蕾絲內衣 (高級)	0	0	icon_equipments.pc_event_31_f_b_tex
		146044, // 堅強的馬勒夏白色蕾絲內衣 (稀有)	0	0	icon_equipments.pc_event_31_f_b_tex
		146045, // 生命的馬勒夏白色蕾絲內衣 (稀有)	0	0	icon_equipments.pc_event_31_f_b_tex
		146046, // 尖銳的馬勒夏白色蕾絲內衣 (稀有)	0	0	icon_equipments.pc_event_31_f_b_tex
		146047, // 守護的馬勒夏白色蕾絲內衣 (稀有)	0	0	icon_equipments.pc_event_31_f_b_tex
		146048, // 流動的馬勒夏白色蕾絲內衣 (稀有)	0	0	icon_equipments.pc_event_31_f_b_tex
		146049, // 堅強的馬勒夏白色蕾絲內衣 (傳說)	0	0	icon_equipments.pc_event_31_f_b_tex
		146050, // 生命的馬勒夏白色蕾絲內衣 (傳說)	0	0	icon_equipments.pc_event_31_f_b_tex
		146051, // 尖銳的馬勒夏白色蕾絲內衣 (傳說)	0	0	icon_equipments.pc_event_31_f_b_tex
		146052, // 守護的馬勒夏白色蕾絲內衣 (傳說)	0	0	icon_equipments.pc_event_31_f_b_tex
		146053, // 流動的馬勒夏白色蕾絲內衣 (傳說)	0	0	icon_equipments.pc_event_31_f_b_tex
		146054, // 馬勒夏黑色蕾絲內衣 (一般)	0	0	icon_equipments.pc_event_31_f_a_tex
		146055, // 堅強的馬勒夏黑色蕾絲內衣(高級)	0	0	icon_equipments.pc_event_31_f_a_tex
		146056, // 生命的馬勒夏黑色蕾絲內衣(高級)	0	0	icon_equipments.pc_event_31_f_a_tex
		146057, // 尖銳的馬勒夏黑色蕾絲內衣(高級)	0	0	icon_equipments.pc_event_31_f_a_tex
		146058, // 守護的馬勒夏黑色蕾絲內衣(高級)	0	0	icon_equipments.pc_event_31_f_a_tex
		146059, // 流動的馬勒夏黑色蕾絲內衣(高級)	0	0	icon_equipments.pc_event_31_f_a_tex
		146060, // 堅強的馬勒夏黑色蕾絲內衣(稀有)	0	0	icon_equipments.pc_event_31_f_a_tex
		146061, // 生命的馬勒夏黑色蕾絲內衣(稀有)	0	0	icon_equipments.pc_event_31_f_a_tex
		146062, // 尖銳的馬勒夏黑色蕾絲內衣(稀有)	0	0	icon_equipments.pc_event_31_f_a_tex
		146063, // 守護的馬勒夏黑色蕾絲內衣(稀有)	0	0	icon_equipments.pc_event_31_f_a_tex
		146064, // 流動的馬勒夏黑色蕾絲內衣(稀有)	0	0	icon_equipments.pc_event_31_f_a_tex
		146065, // 堅強的馬勒夏黑色蕾絲內衣(傳說)	0	0	icon_equipments.pc_event_31_f_a_tex
		146066, // 生命的馬勒夏黑色蕾絲內衣(傳說)	0	0	icon_equipments.pc_event_31_f_a_tex
		146067, // 尖銳的馬勒夏黑色蕾絲內衣(傳說)	0	0	icon_equipments.pc_event_31_f_a_tex
		146068, // 守護的馬勒夏黑色蕾絲內衣(傳說)	0	0	icon_equipments.pc_event_31_f_a_tex
		146069, // 流動的馬勒夏黑色蕾絲內衣(傳說)	0	0	icon_equipments.pc_event_31_f_a_tex
		
		// 202018, // 堅強的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		// 202043, // 堅強的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		// 202048, // 堅強的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		// 202019, // 生命的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		// 202044, // 生命的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		// 202049, // 生命的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202020, // 尖銳的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202045, // 尖銳的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202050, // 尖銳的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202021, // 守護的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202046, // 守護的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202051, // 守護的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202022, // 流動的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202047, // 流動的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		202052, // 流動的2018夏季黑喵內衣	0	0	icon_equipments.pc_event_67_f_a_tex
		
		// 202053, // 堅強的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		// 202078, // 堅強的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		// 202083, // 堅強的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		// 202054, // 生命的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		// 202079, // 生命的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		// 202084, // 生命的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202055, // 尖銳的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202080, // 尖銳的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202085, // 尖銳的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202056, // 守護的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202081, // 守護的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202086, // 守護的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202057, // 流動的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202082, // 流動的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		202087, // 流動的2018夏季花喵內衣	0	0	icon_equipments.pc_event_67_f_b_tex
		
		
		209601, // 技能鍛鍊初階經驗值獲得 I [小型]
		209602, // 技能鍛鍊初階經驗值獲得 I [中型]
		209603, // 技能鍛鍊初階經驗值獲得 II [小型]
		209604, // 技能鍛鍊初階經驗值獲得 II [中型]
		209605, // 技能鍛鍊初階經驗值獲得 III [小型]
		209606, // 技能鍛鍊初階經驗值獲得 III [中型]
		209607, // 技能鍛鍊初階經驗值獲得 IV [小型]
		209608, // 技能鍛鍊初階經驗值獲得 IV [中型]
		209609, // 技能鍛鍊初階經驗值獲得 V [小型]
		209610, // 技能鍛鍊初階經驗值獲得 V [中型]
		209611, // 技能鍛鍊初階經驗值獲得 VI [小型]
		209612, // 技能鍛鍊初階經驗值獲得 VI [中型]
		209613, // 技能鍛鍊初階經驗值獲得 VII [小型]
		209614, // 技能鍛鍊初階經驗值獲得 VII [中型]
		209615, // 技能鍛鍊初階經驗值獲得 VIII [小型]
		209616, // 技能鍛鍊初階經驗值獲得 VIII [中型]
		209617, // 技能鍛鍊初階經驗值獲得 IX [小型]
		209618, // 技能鍛鍊初階經驗值獲得 IX [中型]
		209651, // 技能鍛鍊中階經驗值獲得 I [小型]
		209652, // 技能鍛鍊中階經驗值獲得 I [中型]
		209653, // 技能鍛鍊中階經驗值獲得 II [小型]
		209654, // 技能鍛鍊中階經驗值獲得 II [中型]
		209655, // 技能鍛鍊中階經驗值獲得 III [小型]
		209656, // 技能鍛鍊中階經驗值獲得 III [中型]
		209657, // 技能鍛鍊中階經驗值獲得 IV [小型]
		209658, // 技能鍛鍊中階經驗值獲得 IV [中型]
		209659, // 技能鍛鍊中階經驗值獲得 V [小型]
		209660, // 技能鍛鍊中階經驗值獲得 V [中型]
		209661, // 技能鍛鍊中階經驗值獲得 VI [小型]
		209662, // 技能鍛鍊中階經驗值獲得 VI [中型]
		209663, // 技能鍛鍊中階經驗值獲得 VII [小型]
		209664, // 技能鍛鍊中階經驗值獲得 VII [中型]
		209665, // 技能鍛鍊中階經驗值獲得 VIII [小型]
		209666, // 技能鍛鍊中階經驗值獲得 VIII [中型]
		209667, // 技能鍛鍊中階經驗值獲得 IX [小型]
		209668, // 技能鍛鍊中階經驗值獲得 IX [中型]
		209701, // 技能鍛鍊高階經驗值獲得 I [小型]
		209702, // 技能鍛鍊高階經驗值獲得 I [中型]
		209703, // 技能鍛鍊高階經驗值獲得 II [小型]
		209704, // 技能鍛鍊高階經驗值獲得 II [中型]
		209705, // 技能鍛鍊高階經驗值獲得 III [小型]
		209706, // 技能鍛鍊高階經驗值獲得 III [中型]
		209707, // 技能鍛鍊高階經驗值獲得 IV [小型]
		209708, // 技能鍛鍊高階經驗值獲得 IV [中型]
		209709, // 技能鍛鍊高階經驗值獲得 V [小型]
		209710, // 技能鍛鍊高階經驗值獲得 V [中型]
		209711, // 技能鍛鍊高階經驗值獲得 VI [小型]
		209712, // 技能鍛鍊高階經驗值獲得 VI [中型]
		209713, // 技能鍛鍊高階經驗值獲得 VII [小型]
		209714, // 技能鍛鍊高階經驗值獲得 VII [中型]
		209715, // 技能鍛鍊高階經驗值獲得 VIII [小型]
		209716, // 技能鍛鍊高階經驗值獲得 VIII [中型]
		209717, // 技能鍛鍊高階經驗值獲得 IX [小型]
		209718  // 技能鍛鍊高階經驗值獲得 IX [中型]
	],
	autoUseItems: [
		35000, // 鬥志紋章 - 旋風擊	0	0	icon_crest.crestpointattack_tex
		35001, // 集中紋章 - 迴避攻擊	0	0	icon_crest.crestevasionattack_tex
		35002, // 特質紋章 - 旋風擊	0	0	icon_crest.crestpointattack_tex
		35003, // 集中紋章 - 緊急迴避	0	0	icon_crest.cresttumbling_tex
		35004, // 決心紋章 - 鋼鐵決心	0	0	icon_crest.crestironwillb_tex
		35005, // 特質紋章 - 鬥志一擊	0	0	icon_crest.crestaggravatingstrike_tex
		35006, // 精神紋章 - 連續攻擊	0	0	icon_crest.crestcomboattack_tex
		35007, // 集中紋章 - 影分身	0	0	icon_crest.crestdecoy_tex
		35008, // 連續 鬥志紋章 - 鬥志一擊	0	0	icon_crest.crestaggravatingstrike_tex
		35009, // 連續 鬥志紋章 - 突進砍擊	0	0	icon_crest.crestrushingslash_tex
		35010, // 保護紋章 - 迴避攻擊	0	0	icon_crest.crestevasionattack_tex
		35011, // 集中紋章 - 後擒術	0	0	icon_crest.crestbackattack_tex
		35012, // 鬥志紋章 - 強襲砍擊	0	0	icon_crest.cresthardslash_tex
		35013, // 時間紋章 - 強襲砍擊	0	0	icon_crest.cresthardslash_tex
		35014, // 集中紋章 - 反擊震懾	0	0	icon_crest.crestreversalturningattack_tex
		35015, // 鬥志紋章 - 疾風劈擊	0	0	icon_crest.crestraker_tex
		35016, // 時間紋章 - 後擒術	0	0	icon_crest.crestbackattack_tex
		35017, // 神速紋章 - 向下劈擊	0	0	icon_crest.crestdownblowattack_tex
		35018, // 決心紋章 - 猛毒一擊	0	0	icon_crest.crestpoisonblowattack_tex
		35019, // 忍耐紋章 - 無雙亂舞：劈擊	0	0	icon_crest.crestdualslash_tex
		35020, // 鬥志紋章 - 破烈	0	0	icon_crest.crestrupture_tex
		35021, // 體力紋章 - 雙劍防禦	0	0	icon_crest.cresttwinswordsdefence_tex
		35022, // 野獸紋章 - 變換影子	0	0	icon_crest.crestshadowchange_tex
		35023, // 神速紋章 - 緊急迴避	0	0	icon_crest.cresttumbling_tex
		35024, // 野獸紋章 - 挑撥亂舞	0	0	icon_crest.crestnanmu_tex
		35025, // 鬥志紋章 - 旋風砍擊	0	0	icon_crest.stormcut_tex
		35026, // 連續 鬥志紋章 (旋風擊) - 強襲砍擊	0	0	icon_crest.cresthardslash_tex
		35027, // 減速紋章 - 特質連打	0	0	icon_crest.cresttenaciousattack_tex
		35028, // 集中紋章 - 後擒術	0	0	icon_crest.crestbackattack_tex
		35029, // 集中紋章 - 緊急迴避	0	0	icon_crest.cresttumbling_tex
		35030, // 決心紋章 - 鋼鐵決心	0	0	icon_crest.crestironwillb_tex
		35031, // 連續 鬥志紋章 [鬥志一擊] - 突進砍擊	0	0	icon_crest.crestrushingslash_tex
		35032, // 必殺紋章 - 疾風劈擊	0	0	icon_crest.crestraker_tex
		35033, // 鬥志紋章 - 疾風劈擊	0	0	icon_crest.crestraker_tex
		35034, // 時間紋章 - 必殺意志	0	0	icon_crest.crestdeadlywill_tex
		35200, // 必殺紋章 - 疾風劈擊	0	0	icon_crest.crestraker_tex
		35650, // 時間紋章 - 盾牌打擊	0	0	icon_crest.crestshieldstrike_tex
		35651, // 集中紋章 - 盾牌打擊	0	0	icon_crest.crestshieldstrike_tex
		35652, // 集中紋章 - 捕獲	0	0	icon_crest.cresthookthrow_tex
		35653, // 野獸紋章 - 連續攻擊	0	0	icon_crest.crestcomboattack_tex
		35654, // 精神紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35655, // 決心紋章 - 衝擊猛打	0	0	icon_crest.crestshockblow_tex
		35656, // 精神紋章 - 猛烈突進	0	0	icon_crest.crestscrewthough_tex
		35657, // 集中紋章 - 信賴光環	0	0	icon_crest.crestinspiringroar_tex
		35658, // 慵懶紋章 - 憤怒誘發	0	0	icon_crest.crestprovokerage_tex
		35659, // 減速紋章 - 捕獲	0	0	icon_crest.cresthookthrow_tex
		35660, // 野獸紋章 - 捕獲	0	0	icon_crest.cresthookthrow_tex
		35661, // 神速紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35662, // 保護紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35663, // 必殺紋章 - 猛烈突進	0	0	icon_crest.crestscrewthough_tex
		35664, // 野獸紋章 - 衝擊猛打	0	0	icon_crest.crestshockblow_tex
		35665, // 時間紋章 - 叉槍鎖鏈	0	0	icon_crest.crestharpoonshot_tex
		35666, // 精神紋章 - 連續攻擊	0	0	icon_crest.crestcomboattack_tex
		35667, // 野獸紋章 - 反擊突刺	0	0	icon_crest.crestriposte_tex
		35668, // 野獸紋章 - 盾牌連打	0	0	icon_crest.crestshieldattack_tex
		35669, // 減速紋章 - 跳躍攻擊	0	0	icon_crest.crestleaprampage_tex
		35670, // 鬥志紋章 - 壓倒	0	0	icon_crest.crestoverhelm_tex
		35671, // 集中紋章 - 退避	0	0	icon_crest.crestbackstep_tex
		35672, // 意志紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35673, // 意志紋章 - 反擊突刺	0	0	icon_crest.crestriposte_tex
		35674, // 意志紋章 - 犧牲意志	0	0	icon_crest.crestrejuvenation_tex
		35675, // 意志紋章 - 盾牌防禦	0	0	icon_crest.crestdefence_tex
		35676, // 野獸紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35677, // 鬥志紋章 - 猛烈突進	0	0	icon_crest.crestscrewthough_tex
		35678, // 鬥志紋章 - 跳躍攻擊	0	0	icon_crest.crestleaprampage_tex
		35679, // 時間紋章 - 粉碎防具	0	0	icon_crest.crestarmorbreak_tex
		35680, // 集中紋章 - 進擊突刺	0	0	icon_crest.crestadvancingcharge_tex
		35681, // 精神紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35682, // 神速紋章 - 挑撥咆哮	0	0	icon_crest.crestroar_tex
		35683, // 野獸紋章 - 反擊突刺	0	0	icon_crest.crestriposte_tex
		35684, // 野獸紋章 - 盾牌連打	0	0	icon_crest.crestshieldattack_tex
		35685, // 鬥志紋章 - 壓倒	0	0	icon_crest.crestoverhelm_tex
		35686, // 集中紋章 - 退避	0	0	icon_crest.crestbackstep_tex
		35687, // 野獸紋章 - 前線維持	0	0	icon_crest.crestholdtheline_tex
		35850, // 集中紋章 - 叉槍鎖鏈	0	0	icon_crest.crestharpoonshot_tex
		36300, // 機會紋章 - 一刀兩斷	0	0	icon_crest.crestcuttingslash_tex
		36301, // 鬥志紋章 - 重擊斬	0	0	icon_crest.cresthandyslash_tex
		36302, // 鬥志紋章 - 刀背打擊	0	0	icon_crest.crestflatblade_tex
		36303, // 特質紋章 - 一刀兩斷	0	0	icon_crest.crestcuttingslash_tex
		36304, // 神速紋章 - 連續攻擊	0	0	icon_crest.crestcomboattack_tex
		36305, // 集中紋章 - 神經劈擊	0	0	icon_crest.crestveinslash_tex
		36306, // 平衡紋章 - 執念	0	0	icon_crest.cresttenacity_tex
		36307, // 集中紋章 - 執念	0	0	icon_crest.cresttenacity_tex
		36308, // 連續 神速紋章 - 後擒術	0	0	icon_crest.crestturnaroundattack_tex
		36309, // 必殺紋章 - 迴旋砍擊	0	0	icon_crest.crestsworddance_tex
		36310, // 連續 鬥志紋章 - 緊急迴避	0	0	icon_crest.cresttumbling_tex
		36311, // 必殺紋章 - 要害攻擊	0	0	icon_crest.creststingerblade_tex
		36312, // 必殺紋章 - 重擊斬	0	0	icon_crest.cresthandyslash_tex
		36313, // 鬥志紋章 - 迴旋砍擊	0	0	icon_crest.crestsworddance_tex
		36314, // 神速紋章 - 後退踢擊	0	0	icon_crest.crestretreatingkick_tex
		36315, // 鬥志紋章 - 瞬閃	0	0	icon_crest.crestcuthead_tex
		36316, // 鬥志紋章 - 憤怒一擊	0	0	icon_crest.crestragingstrike_tex
		36317, // 集中紋章 - 後擒術	0	0	icon_crest.crestturnaroundattack_tex
		36318, // 減速紋章 - 真空三段斬	0	0	icon_crest.cresttripleslash_tex
		36319, // 連續 鬥志紋章 - 跳躍奮進	0	0	icon_crest.crestadvancingleap_tex
		36320, // 活力紋章 - 緊急迴避	0	0	icon_crest.cresttumbling_tex
		36321, // 鬥志紋章 - 要害攻擊	0	0	icon_crest.creststingerblade_tex
		36322, // 鬥志紋章 - 憤怒一擊	0	0	icon_crest.crestragingstrike_tex
		36323, // 連續 神速紋章 (要害攻擊) - 後退踢擊	0	0	icon_crest.crestretreatingkick_tex
		36324, // 機會紋章 - 一刀兩段	0	0	icon_crest.crestcuttingslash_tex
		36325, // 鬥志紋章 - 重擊斬	0	0	icon_crest.cresthandyslash_tex
		36326, // 必殺紋章 - 迴旋砍擊	0	0	icon_crest.crestsworddance_tex
		36327, // 必殺紋章 - 重擊斬	0	0	icon_crest.cresthandyslash_tex
		36328, // 必殺紋章 - 瞬閃	0	0	icon_crest.crestcuthead_tex
		36329, // 鬥志紋章 - 瞬閃	0	0	icon_crest.crestcuthead_tex
		36330, // 鬥志紋章 - 下顎粉碎	0	0	icon_crest.crestjawbreaker_tex
		36331, // 連續 鬥志紋章 (一刀兩段) - 下顎粉碎	0	0	icon_crest.crestjawbreaker_tex
		36500, // 必殺紋章 - 瞬閃	0	0	icon_crest.crestcuthead_tex
		36950, // 必殺紋章 - 聚力之擊	0	0	icon_crest.crestblastslash_tex
		36951, // 鬥志紋章 - 聚力之擊	0	0	icon_crest.crestblastslash_tex
		36952, // 神速紋章 - 打擊大地	0	0	icon_crest.crestbash_tex
		36953, // 特質紋章 - 聚力之擊	0	0	icon_crest.crestblastslash_tex
		36954, // 神速紋章 - 漩渦	0	0	icon_crest.crestwhirlwind_tex
		36955, // 鬥志紋章 - 打擊大地	0	0	icon_crest.crestbash_tex
		36956, // 平衡紋章 - 氣合	0	0	icon_crest.cresttenacity_tex
		36957, // 連續神速紋章 [龍捲風] - 強襲攻擊 	0	0	icon_crest.crestassaultattack_tex
		36958, // 連續 神速紋章 - 殺氣爆發	0	0	icon_crest.crestmurderousvent_tex
		36959, // 保護紋章 - 氣合	0	0	icon_crest.cresttenacity_tex
		36960, // 機會紋章 - 疾走	0	0	icon_crest.crestdash_tex
		36961, // 必殺紋章 - 向下劈擊	0	0	icon_crest.crestdownblowattack_tex
		36962, // 特質紋章 - 氣合	0	0	icon_crest.cresttenacity_tex
		36963, // 精神紋章 - 氣合	0	0	icon_crest.cresttenacity_tex
		36964, // 鬥志紋章 - 起身攻擊	0	0	icon_crest.crestrisingattack_tex
		36965, // 必殺紋章 - 肋骨粉碎	0	0	icon_crest.crestribbreaker_tex
		36966, // 精神紋章 - 武器防禦	0	0	icon_crest.crestweapondefence_tex
		36967, // 必殺紋章 - 漩渦	0	0	icon_crest.crestwhirlwind_tex
		36968, // 神速紋章 - 聚力之擊	0	0	icon_crest.crestblastslash_tex
		36969, // 機會紋章 - 震懾	0	0	icon_crest.crestturnback_tex
		36970, // 體力紋章 - 狂暴化	0	0	icon_crest.crestberserk_tex
		36971, // 時間紋章 - 狂暴化	0	0	icon_crest.crestberserk_tex
		36972, // 鬥志紋章 - 全神一擊	0	0	icon_crest.crestsoulstrike_tex
		36973, // 鬥志紋章 - 聚力之擊	0	0	icon_crest.crestblastslash_tex
		36974, // 神速紋章 - 漩渦	0	0	icon_crest.crestwhirlwind_tex
		36975, // 鬥志紋章 - 打擊大地	0	0	icon_crest.crestbash_tex
		36976, // 鬥志紋章 - 肋骨粉碎	0	0	icon_crest.crestribbreaker_tex
		36977, // 必殺紋章 - 漩渦	0	0	icon_crest.crestwhirlwind_tex
		36978, // 集中紋章 - 火花狂戰士 	0	0	icon_crest.crestselfbuff_tex
		36979, // 連續 神速紋章 (聚力之擊) - 前進橫劈	0	0	icon_crest.crestsideslash_tex
		36980, // 集中紋章 - 強襲攻擊	0	0	icon_crest.crestassaultattack_tex
		36981, // 活力紋章 - 強襲攻擊	0	0	icon_crest.crestassaultattack_tex
		37150, // 鬥志紋章 - 肋骨粉碎	0	0	icon_crest.crestribbreaker_tex
		37600, // 時間紋章 - 魔力強化	0	0	icon_skills.cr5_strengthenmana
		37601, // 神速紋章 - 隕石墜落	0	0	icon_crest.cresthellfire_tex
		37602, // 集中紋章 - 隕石墜落	0	0	icon_crest.cresthellfire_tex
		37603, // 連續 鬥志紋章 - 雷電刻印	0	0	icon_crest.crestshocktrap_tex
		37604, // 必殺紋章 - 破滅光彈	0	0	icon_crest.crestlightofruin_tex
		37605, // 貫通紋章 - 睡眠之風	0	0	icon_crest.crestsleepwind_tex
		37606, // 集中紋章 - 神經衰弱	0	0	icon_crest.crestneurasthenia_tex
		37607, // 精神紋章 - 雷電刻印	0	0	icon_crest.crestshocktrap_tex
		37608, // 追蹤紋章 - 束縛詛咒	0	0	icon_crest.crestcurseofshackle_tex
		37609, // 助力紋章 - 火焰柱	0	0	icon_crest.crestauraburn_tex
		37610, // 集中紋章 - 污染詛咒	0	0	icon_crest.crestdisease_tex
		37611, // 阻斷紋章 - 燃燒氣息	0	0	icon_crest.crestburningbreath_tex
		37612, // 決心紋章 - 魔力盾牌	0	0	icon_crest.crestmanashield_tex
		37613, // 必殺紋章 - 爆裂球	0	0	icon_crest.crestblastball_tex
		37614, // 體力紋章 - 爆裂球	0	0	icon_crest.crestblastball_tex
		37615, // 集中紋章 - 岩石化	0	0	icon_crest.creststoneshape_tex
		37616, // 時間紋章 - 魔力盾牌	0	0	icon_crest.crestmanashield_tex
		37617, // 精神紋章 - 隕石墜落	0	0	icon_crest.cresthellfire_tex
		37618, // 體力紋章 - 退避	0	0	icon_crest.crestbackstep_tex
		37619, // 減速紋章 - 污染詛咒	0	0	icon_crest.crestdisease_tex
		37620, // 神速紋章 - 追蹤業火	0	0	icon_crest.cresttrackinginferno_tex
		37621, // 集中紋章 - 破滅光彈	0	0	icon_crest.crestlightofruin_tex
		37622, // 鬥志紋章 - 火焰柱	0	0	icon_crest.crestauraburn_tex
		37623, // 時間紋章 - 燃燒氣息	0	0	icon_crest.crestburningbreath_tex
		37624, // 連續 神速紋章 (雷電刻印) - 結冰大地	0	0	icon_crest.crestfreezingtheearth_tex
		37625, // 機會紋章 - 打雷重擊	0	0	icon_crest.cr5_lightningstruck
		37626, // 連續 神速紋章 (爆裂球) - 結冰大地	0	0	icon_crest.crestfreezingtheearth_tex
		37627, // 時間紋章 - 魔力強化	0	0	icon_skills.cr5_strengthenmana
		37628, // 追蹤紋章 - 束縛詛咒	0	0	icon_crest.crestcurseofshackle_tex
		37629, // 必殺紋章 - 爆裂球	0	0	icon_crest.crestblastball_tex
		37630, // 集中紋章 - 石化	0	0	icon_crest.creststoneshape_tex
		37631, // 必殺紋章 - 魔力爆發	0	0	icon_crest.crestmanaburst_tex
		37800, // 集中紋章 - 岩石化	0	0	icon_crest.creststoneshape_tex
		38250, // 鬥志紋章 - 穿透射擊	0	0	icon_crest.crestthrougharrow_tex
		38251, // 熟練紋章 - 穿透射擊	0	0	icon_crest.crestthrougharrow_tex
		38252, // 熟練紋章 - 集中射擊	0	0	icon_crest.crestchargearrow_tex
		38253, // 集中紋章 - 退避	0	0	icon_crest.crestbackstep_tex
		38254, // 命中紋章 - 穿透射擊	0	0	icon_crest.crestthrougharrow_tex
		38255, // 時間紋章 - 蜘蛛網陷阱	0	0	icon_crest.crestwebtrap_tex
		38256, // 連續 神速紋章 - 多重射擊	0	0	icon_crest.crestarrowshower_tex
		38257, // 連續 神速紋章 - 多重射擊	0	0	icon_crest.crestarrowshower_tex
		38258, // 機會紋章 - 多重射擊	0	0	icon_crest.crestarrowshower_tex
		38259, // 特質紋章 - 裝死	0	0	icon_crest.crestfeigndeath_tex
		38260, // 特質紋章 - 集中射擊	0	0	icon_crest.crestchargearrow_tex
		38261, // 鬥志紋章 - 集中射擊	0	0	icon_crest.crestchargearrow_tex
		38262, // 體力紋章 - 迴旋踢	0	0	icon_crest.crestturningkick_tex
		38263, // 時間紋章 - 迴旋踢	0	0	icon_crest.crestturningkick_tex
		38264, // 慵懶紋章 - 脫離攻擊	0	0	icon_crest.crestescapingattack_tex
		38265, // 集中紋章 - 麻痺陷阱箭矢	0	0	icon_crest.crestparalysistraparrow_tex
		38266, // 必殺紋章 - 雷龍一擊	0	0	icon_crest.crestthunderdrake_tex
		38267, // 鬥志紋章 - 爆發陷阱箭矢	0	0	icon_crest.crestexplosiontraparrow_tex
		38268, // 集中紋章 - 脫離攻擊	0	0	icon_crest.crestescapingattack_tex
		38269, // 集中紋章 - 牽制射擊	0	0	icon_crest.crestcontaningshot_tex
		38270, // 鬥志紋章 - 速射	0	0	icon_crest.crestrapidshot_tex
		38271, // 神速紋章 - 箭雨	0	0	icon_crest.crestarrowfall_tex
		38272, // 命中紋章 - 集中射擊	0	0	icon_crest.crestchargearrow_tex
		38273, // 時間紋章 - 昏厥陷阱	0	0	icon_crest.crestparalysistrap_tex
		38274, // 活力紋章 - 蜘蛛網箭矢	0	0	icon_crest.crestspiderarrow_tex
		38275, // 集中紋章 - 連射	0	0	icon_crest.cr_chain_arrow
		38276, // 鬥志紋章 - 箭雨	0	0	icon_crest.crestarrowfall_tex
		38277, // 命中紋章 - 穿透射擊	0	0	icon_crest.crestthrougharrow_tex
		38278, // 機會紋章 - 多重射擊	0	0	icon_crest.crestarrowshower_tex
		38279, // 必殺紋章 - 集中射擊	0	0	icon_crest.crestchargearrow_tex
		38280, // 必殺紋章 - 雷龍一擊	0	0	icon_crest.crestthunderdrake_tex
		38281, // 鬥志紋章 - 爆發陷阱箭矢	0	0	icon_crest.crestexplosiontraparrow_tex
		38282, // 神速紋章 - 雷龍一擊	0	0	icon_crest.crestthunderdrake_tex
		38283, // 鬥志紋章 - 雷龍一擊	0	0	icon_crest.crestthunderdrake_tex
		38450, // 集中紋章 - 麻痺陷阱箭矢	0	0	icon_crest.crestparalysistraparrow_tex
		38451, // 集中紋章 - 蜘蛛陷阱箭矢	0	0	icon_crest.crestwebtraparrow_tex
		38452, // 鬥志紋章 - 爆發陷阱箭矢	0	0	icon_crest.crestexplosiontraparrow_tex
		38900, // 集中紋章 - 瞬間移動	0	0	icon_crest.crestshortteleport_tex
		38901, // 追蹤紋章 - 淨化彈	0	0	icon_crest.crestpurifyshot_tex
		38902, // 助力紋章 - 轉生祝福	0	0	icon_crest.crestautoresurrect_tex
		38903, // 集中紋章 - 精靈召喚：生命精靈	0	0	icon_crest.crestsummonspiritofheal_tex
		38904, // 時間紋章 - 閃光彈	0	0	icon_crest.crestflashball_tex
		38905, // 命中紋章 - 恢復彈	0	0	icon_crest.cresthealshot_tex
		38906, // 連續 精神紋章 - 痛苦咒縛	0	0	icon_crest.crestpainfulshackle_tex
		38907, // 時間紋章 - 召喚精靈：閃電精靈	0	0	icon_crest.crestsummonspiritofrange_tex
		38908, // 精神紋章 - 流沙束縛	0	0	icon_crest.crestshackleofquicksand_tex
		38909, // 體力紋章 - 閃光彈	0	0	icon_crest.crestflashball_tex
		38910, // 機會紋章 - 起身攻擊	0	0	icon_crest.crestrisingattack_tex
		38911, // 平衡紋章 - 起身攻擊	0	0	icon_crest.crestrisingattack_tex
		38912, // 命中紋章 - 轉生祝福	0	0	icon_crest.crestautoresurrect_tex
		38913, // 集中紋章 - 流沙束縛	0	0	icon_crest.crestshackleofquicksand_tex
		38914, // 協力紋章 - 精靈召喚：守護精靈	0	0	icon_crest.crestsummonspiritofaggro_tex
		38915, // 救援紋章 - 靈氣召喚：庇護	0	0	icon_crest.crestenergiesofprotection_tex
		38916, // 神速紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		38917, // 集中紋章 - 轉生祝福	0	0	icon_crest.crestautoresurrect_tex
		38918, // 特質紋章 - 恢復精氣晶球	0	0	icon_crest.cresthprefresher_tex
		38919, // 時間紋章 - 生命精靈	0	0	icon_crest.crestsummonspiritofheal_tex
		38920, // 追蹤紋章 - 轉生祝福	0	0	icon_crest.crestautoresurrect_tex
		38921, // 鬥志紋章 - 懲罰帳幕	0	0	icon_crest.crestpunishingshield_tex
		38922, // 保護紋章 - 精氣吸收	0	0	icon_crest.crestsuckhp_tex
		38923, // 集中紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		38924, // 鬥志紋章 - 精靈召喚：守護精靈	0	0	icon_crest.crestsummonspiritofaggro_tex
		38925, // 集中紋章 - 瞬間移動	0	0	icon_crest.crestshortteleport_tex
		38926, // 命中紋章 - 恢復彈	0	0	icon_crest.cresthealshot_tex
		38927, // 機會紋章 - 起身攻擊	0	0	icon_crest.crestrisingattack_tex
		38928, // 協力紋章 - 精靈召喚：守護精靈	0	0	icon_crest.crestsummonspiritofaggro_tex
		38929, // 救援紋章 - 靈氣召喚：保護	0	0	icon_crest.crestenergiesofprotection_tex
		38930, // 弱化紋章 - 痛苦咒縛	0	0	icon_crest.crestpainfulshackle_tex
		38931, // 時間紋章 - 疫病長槍	0	0	icon_crest.crestplague_tex
		38932, // 集中紋章 - 守護盔甲	0	0	icon_crest.crestarmorofprotection_tex
		38933, // 集中紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		38934, // 連續鬥志紋章 (審判之手) - 魔力再生、全神卷軸	0	0	icon_crest.crestmanarejuvenation_tex
		38935, // 機會紋章 - 懲罰之手	0	0	icon_crest.crestpunishingtouch_tex
		38936, // 弱化紋章 - 連鎖天罰	0	0	icon_crest.crestdivineretribution_tex
		38937, // 連續 鬥志紋章 [懲罰之手] - 審判之手	0	0	icon_crest.crestdamagedeal_tex
		38938, // 集中紋章 - 乏力預言	0	0	icon_crest.crestprophecyoflethargy_tex
		38939, // 集中紋章 - 束縛烙印	0	0	icon_crest.crestsanctuary_tex
		38940, // 精神紋章 - 魔力再生、全神卷軸	0	0	icon_crest.crestmanarejuvenation_tex
		38941, // 靈魂紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		38942, // 範圍紋章 - 救援之手、全神援手	0	0	icon_crest.cresthelpinghand_tex
		38943, // 集中紋章 - 神之氣息	0	0	icon_crest.crestgodbreath_tex
		38944, // 連續 鬥志紋章 (飛劍重擊斬) - 飛劍劈擊	0	0	icon_crest.crestchainsmash_tex
		38945, // 鬥志紋章 - 飛劍最後的一擊	0	0	icon_crest.crestchainblow_tex
		38946, // 必殺紋章 - 飛劍最後的一擊	0	0	icon_crest.crestchainblow_tex
		38947, // 集中紋章 - 飛劍迴旋刀刃	0	0	icon_crest.crestchainblade_tex
		38948, // 集中紋章 - 飛劍向上揮擊	0	0	icon_crest.crestchainuppercut_tex
		38949, // 連續 鬥志紋章 (飛劍迴旋刀刃) - 飛劍向上揮擊	0	0	icon_crest.crestchainuppercut_tex
		38950, // 活力紋章 - 瞬間跳躍	0	0	icon_crest.crestinstantleap_tex
		38951, // 鬥志紋章 - 飛劍迴旋刀刃	0	0	icon_crest.crestchainblade_tex
		38952, // 連續 鬥志紋章 [飛劍重擊斬] - 飛劍揮舞	0	0	icon_crest.crestchainbrandish_tex
		38953, // 必殺紋章 - 飛劍重擊斬	0	0	icon_crest.crestchainsuperblow_tex
		38954, // 集中紋章 - 撕咬擊	0	0	icon_crest.cresthideindarkness_tex
		38955, // 時間紋章 - 撕咬擊	0	0	icon_crest.cresthideindarkness_tex
		38956, // 鬥志紋章 - 揮舞/推功	0	0	icon_crest.crestgunbrandish_tex
		38957, // 活力紋章 - 火箭騰飛	0	0	icon_crest.crestrocketjump_tex
		38958, // 集中紋章 - 裝填魔力	0	0	icon_crest.crestreload_tex
		38959, // 鬥志紋章 - 設置哨兵塔	0	0	icon_crest.crestsummonsentrytower_tex
		38960, // 集中紋章 - 命令：自爆	0	0	icon_crest.crestcommand_selfdestruct_tex
		38961, // 連續鬥志紋章 (發射散彈) - 滾動：裝填散彈	0	0	icon_crest.crestambushrolling_tex
		38962, // 必殺紋章 - 發射爆擊彈	0	0	icon_crest.crestmortarshot_tex
		38963, // 鬥志紋章 - 發射散彈	0	0	icon_crest.crestbuckshot_tex
		38964, // 命中紋章 - 發射速射炮	0	0	icon_crest.crestgatlingshot_tex
		38965, // 必殺紋章 - 發射秘傳導彈	0	0	icon_crest.crestaimedshot_tex
		38966, // 鬥志紋章 - 殲滅之光	0	0	icon_crest.crestflashcannon_tex
		38967, // 集中紋章 - 前滾翻: 裝填散彈	0	0	icon_crest.crestambushrolling_tex
		39100, // 精神紋章 - 靈氣召喚：庇護	0	0	icon_crest.crestenergiesofprotection_tex
		39550, // 救援紋章 - 治癒祈禱	0	0	icon_crest.cresthealingpray_tex
		39551, // 連續 鬥志紋章 - 審判之手	0	0	icon_crest.crestdamagedeal_tex
		39552, // 精神紋章 - 魔力恢復	0	0	icon_crest.crestmpcharge_tex
		39553, // 連續 鬥志紋章 - 連鎖天罰	0	0	icon_crest.crestdivineretribution_tex
		39554, // 體力紋章 - 亞倫的祝福	0	0	icon_crest.crestattackup_tex
		39555, // 集中紋章 - 再生之風	0	0	icon_crest.cresthealingwind_tex
		39556, // 集中紋章 - 乏力預言	0	0	icon_crest.crestprophecyoflethargy_tex
		39557, // 精神紋章 - 再生聖域	0	0	icon_crest.crestsanctuaryofregeneration_tex
		39558, // 精神紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		39559, // 集中紋章 - 束縛烙印	0	0	icon_crest.crestsanctuary_tex
		39560, // 救援紋章 - 守護盔甲	0	0	icon_crest.crestarmorofprotection_tex
		39561, // 精神紋章 - 魔力再生、全神卷軸	0	0	icon_crest.crestmanarejuvenation_tex
		39562, // 自由紋章 - 治癒之光	0	0	icon_crest.cresthealinglightlockon_tex
		39563, // 平衡紋章 - 守護者聖域	0	0	icon_crest.crestguardianaura_tex
		39564, // 時間紋章 - 覺醒	0	0	icon_crest.crestrecovery_tex
		39565, // 救援紋章 - 治癒翅膀	0	0	icon_crest.crestcurewing_tex
		39566, // 決心紋章 - 亞倫的祝福	0	0	icon_crest.crestattackup_tex
		39567, // 神速紋章 - 魔力恢復	0	0	icon_crest.crestmpcharge_tex
		39568, // 精神紋章 -  再生之風	0	0	icon_crest.cresthealingwind_tex
		39569, // 靈魂紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		39570, // 集中紋章 - 前線維持	0	0	icon_crest.crestholdtheline_tex
		39571, // 時間紋章 - 前線維持	0	0	icon_crest.crestholdtheline_tex
		39572, // 鬥志紋章 - 下顎粉碎	0	0	icon_crest.crestjawbreaker_tex
		39573, // 連續 鬥志紋章 - 下顎粉碎	0	0	icon_crest.crestjawbreaker_tex
		39574, // 精神紋章 - 執念	0	0	icon_crest.cresttenacity_tex
		39575, // 神速紋章 - 魔力爆發	0	0	icon_crest.crestmanaburst_tex
		39576, // 集中紋章 - 空間扭曲	0	0	icon_crest.crestdistortionfield_tex
		39577, // 時間紋章 - 空間扭曲	0	0	icon_crest.crestdistortionfield_tex
		39578, // 鬥志紋章 - 雷龍一擊	0	0	icon_crest.crestthunderdrake_tex
		39579, // 神速紋章 - 雷龍一擊	0	0	icon_crest.crestthunderdrake_tex
		39580, // 集中紋章 - 執念	0	0	icon_crest.cresttenacity_tex
		39581, // 精神紋章 - 執念	0	0	icon_crest.cresttenacity_tex
		39582, // 平衡紋章 - 執念	0	0	icon_crest.cresttenacity_tex
		39583, // 精神紋章 - 救援之手、救援之手	0	0	icon_crest.cresthelpinghand_tex
		39584, // 靈魂紋章 - 復活	0	0	icon_crest.crestresurrect_tex
		39585, // 時間紋章 - 痛苦咒縛	0	0	icon_crest.crestpainfulshackle_tex
		39586, // 集中紋章 - 撕咬擊	0	0	icon_crest.cresthideindarkness_tex
		39587, // 集中紋章 - 束縛詛咒	0	0	icon_crest.crestbindingblade_tex
		39588, // 集中紋章 - 必殺意志	0	0	icon_crest.crestdeadlywill_tex
		39589, // 鬥志紋章 - 連續攻擊	0	0	icon_crest.crestbindingblade_tex
		39590, // 集中紋章 - 火花狂戰士	0	0	icon_crest.crestselfbuff_tex
		39591, // 神速紋章 - 前進橫劈	0	0	icon_crest.crestsideslash_tex
		39592, // 必殺紋章 - 剛氣飛揚	0	0	icon_crest.crestthrowaxe_tex
		39593, // 野獸紋章 - 前線維持	0	0	icon_crest.crestholdtheline_tex
		39594, // 集中紋章 - 下顎粉碎	0	0	icon_crest.crestjawbreaker_tex
		39595, // 集中紋章 - 魔力盾牌	0	0	icon_crest.crestmanaburst_tex
		39596, // 精神紋章 - 救援之手、救援之手	0	0	icon_crest.cresthelpinghand_tex
		39597, // 集中紋章 - 神之氣息	0	0	icon_crest.crestgodbreath_tex
		39598, // 集中紋章 - 神秘晶球	0	0	icon_crest.crestmysticorb_tex
		39599, // 必殺紋章 - 飛劍重擊斬	0	0	icon_crest.crestchainsuperblow_tex
		39600, // 精神紋章 - 暗黑爆炸	0	0	icon_crest.crestdarkexplosion_tex
		39601, // 連續 鬥志紋章 - 飛劍揮舞	0	0	icon_crest.crestchainbrandish_tex
		39602, // 鬥志紋章 - 飛劍迴旋刀刃	0	0	icon_crest.crestchainblade_tex
		39603, // 集中紋章 - 飛劍強擊	0	0	icon_crest.crestchainstrike_tex
		39604, // 必殺紋章 - 發射爆擊彈	0	0	icon_crest.crestmortarshot_tex
		39605, // 鬥志紋章 - 發射散彈	0	0	icon_crest.crestbuckshot_tex
		39606, // 鬥志紋章 - 揮舞/推功	0	0	icon_crest.crestgunbrandish_tex
		39607, // 精神紋章 - 發射速射炮	0	0	icon_crest.crestgatlingshot_tex
		39608, // 命中紋章 - 發射速射炮	0	0	icon_crest.crestgatlingshot_tex
		39609, // 鬥志紋章 - 發射秘傳衝擊彈	0	0	icon_crest.crestarcaneshockshot01_tex
		39610, // 助力紋章 - 發射秘傳衝擊彈	0	0	icon_crest.crestarcaneshockshot01_tex
		39611, // 必殺紋章 - 發射秘傳導彈	0	0	icon_crest.crestaimedshot_tex
		39612, // 鬥志紋章 - 投擲秘傳手榴彈	0	0	icon_crest.crestarcanegrenadethrow_tex
		39613, // 集中紋章 - 火箭騰飛	0	0	icon_crest.crestrocketjump_tex
		39614, // 魔攻用臨時紋章data	0	0	icon_crest.crestflashcannon_tex
		39615, // 魔攻用臨時紋章data	0	0	icon_crest.crestreload_tex
		39616, // 集中紋章 - 殲滅之光	0	0	icon_crest.crestflashcannon_tex
		39617, // 精神紋章 - 裝填魔力	0	0	icon_crest.crestreload_tex
		39618, // 集中紋章 - 設置哨兵塔	0	0	icon_crest.crestsummonsentrytower_tex
		39619, // 鬥志紋章 - 殲滅之光	0	0	icon_crest.crestflashcannon_tex
		39620, // 集中紋章 - 前滾翻: 裝填散彈	0	0	icon_crest.crestambushrolling_tex
		39621, // 集中紋章 - 命令：電荷逆流	0	0	icon_crest.crestcommand_counterflow_tex
		39750, // 集中紋章 - 治癒翅膀	0	0	icon_crest.crestcurewing_tex
		39751, // 集中紋章 - 復活庇護	0	0	icon_crest.crestselfpreresurrection_tex
		39752, // 鬥志紋章 - 連打	0	0	icon_crest.crestcomboattack01_tex
		39753, // 集中紋章 - 迴旋踢	0	0	icon_crest.crestupperkick_tex
		39754, // 集中紋章 - 飛凰怒天	0	0	icon_crest.crestdragonrisingblow_tex
		39755, // 精神紋章 - 地面強打	0	0	icon_crest.crestpoundonground_tex
		39756, // 必殺紋章 - 地面強打	0	0	icon_crest.crestpoundonground_tex
		39757, // 鬥志紋章 - 地面強打	0	0	icon_crest.crestpoundonground_tex
		39758, // 鬥志紋章 - 衝擊波	0	0	icon_crest.crestblowattack_tex
		39759, // 必殺紋章 - 衝擊波	0	0	icon_crest.crestblowattack_tex
		39760, // 機會紋章 - 昇天拳	0	0	icon_crest.crestrisingblow_tex
		39761, // 精神紋章 - 昇天拳	0	0	icon_crest.crestrisingblow_tex
		39762, // 鬥志紋章 - 狂暴連打	0	0	icon_crest.crestrapidattack_tex
		39763, // 必殺紋章 - 狂暴連打	0	0	icon_crest.crestrapidattack_tex
		39764, // 精神紋章 - 狂暴連打	0	0	icon_crest.crestrapidattack_tex
		39765, // 集中紋章 - 反擊	0	0	icon_crest.crestcounterattack2_tex
		39766, // 慵懶紋章 - 憤怒誘發	0	0	icon_crest.crestenrage_tex
		39767, // 鬥志紋章 - 昇天拳	0	0	icon_crest.crestrisingblow_tex
		39768, // 鬥志紋章 - 強打	0	0	icon_crest.crestsmashattack02_tex
		39769, // 鬥志紋章 - 反擊	0	0	icon_crest.crestcounterattack2_tex
		39770, // 鬥志紋章 - 憤怒亂打	0	0	icon_crest.crestdashattack_tex
		39771, // 特質紋章- 憤怒亂打	0	0	icon_crest.crestdashattack_tex
		39772, // 鬥志紋章 - 空中連擊	0	0	icon_crest.crestcatchair_tex
		39773, // 集中紋章 - 瞬閃	0	0	icon_crest.crestinstancerush_tex
		39774, // 必殺紋章 - 強打	0	0	icon_crest.crestsmashattack02_tex
		39775, // 連續 鬥志紋章 - 迴旋踢	0	0	icon_crest.crestupperkick_tex
		39776, // 必殺紋章 - 地面強打	0	0	icon_crest.crestpoundonground_tex
		39777, // 必殺紋章 - 衝擊波	0	0	icon_crest.crestblowattack_tex
		39778, // 必殺紋章 - 上踢	0	0	icon_crest.crestkick2_tex
		39779, // 鬥志紋章 - 連續攻擊	0	0	icon_crest.cr12_meleecombo
		39780, // 助力紋章 - 標槍連射	0	0	icon_crest.cr12_rapidshot
		39781, // 集中紋章 - 火焰彈投擲	0	0	icon_crest.cr12_flamebomb
		39782, // 鬥志紋章 - 快速砍擊	0	0	icon_crest.cr12_rapidslash
		39783, // 機會紋章 - 後方移動術	0	0	icon_crest.cr12_catchback
		39784, // 必殺紋章 - 爆炎術	0	0	icon_crest.cr12_flamestrike
		39785, // 連續鬥志紋章 - 三角砍擊	0	0	icon_crest.cr12_airstepstrike
		39786, // 必殺紋章 - 三角砍擊	0	0	icon_crest.cr12_airstepstrike
		39787, // 鬥志紋章 - 扭轉砍擊	0	0	icon_crest.cr12_rotateslash
		39788, // 連續鬥志紋章 - 二段砍擊	0	0	icon_crest.cr12_twinslash
		39789, // 必殺紋章 - 二段砍擊	0	0	icon_crest.cr12_twinslash
		39790, // 助力紋章 - 火焰術	0	0	icon_crest.cr12_flamebreath
		39791, // 特質紋章 -展開手裏劍	0	0	icon_crest.cr12_rotateshurikenshot
		39792, // 鬥志紋章 - 旋風手裏劍投擲	0	0	icon_crest.cr12_tornadoshot
		39793, // 集中紋章 - 擊中胸口	0	0	icon_crest.cr12_evadestingshot
		39794, // 集中紋章 - 標槍連射	0	0	icon_crest.cr12_rapidshot
		39795, // 集中紋章 - 快速砍擊	0	0	icon_crest.cr12_rapidslash
		39796, // 鬥志紋章 - 爆炎術	0	0	icon_crest.cr12_flamestrike
		39797, // 集中紋章 - 迴避煙幕術	0	0	icon_crest.cr12_smokebomb
		39798, // 集中紋章 - 扭轉砍擊	0	0	icon_crest.cr12_rotateslash
		39799, // 神速紋章 - 查克拉恢復術	0	0	icon_crest.cr12_chakracharge
		39800, // 鬥志紋章 - 擊中胸口	0	0	icon_crest.cr12_evadestingshot
		39801, // 神速紋章 - 連續攻擊	0	0	icon_crest.cr12_meleecombo
		39802, // 必殺紋章 - 爆炎術	0	0	icon_crest.cr12_flamestrike
		39803, // 必殺紋章 - 二段砍擊	0	0	icon_crest.cr12_twinslash
		39804, // 鬥志紋章 - 火焰術	0	0	icon_crest.cr12_flamebreath
		39805, // 集中紋章 - 迴避啟動	0	0	icon_crest.cr12_dash
		39806, // [傳說]機會紋章 - 一刀兩斷	0	0	icon_crest.crestcuttingslash_tex
		39807, // [傳說]必殺紋章 - 全神一擊	0	0	icon_crest.crestsoulstrike_tex
		39808, // [傳說]必殺紋章 - 昇天拳	0	0	icon_crest.crestrisingblow_tex
		39809, // [傳說]機會紋章 - 無雙亂舞 : 劈擊	0	0	icon_crest.crestdualslash_tex
		39810, // [傳說]必殺紋章 - 壓倒	0	0	icon_crest.crestoverhelm_tex
		39811, // [傳說]機會紋章 - 治癒翅膀	0	0	icon_crest.crestcurewing_tex
		39812, // [傳說]機會紋章 - 生命精靈	0	0	icon_crest.crestsummonspiritofheal_tex
		39813, // [傳說]機會紋章 - 飛劍重擊斬	0	0	icon_crest.crestchainsuperblow_tex
		39814, // [傳說]鬥志紋章 - 迴避煙幕術	0	0	icon_crest.cr12_smokebomb
		39815, // [傳說]神速紋章 - 發射一般炸彈	0	0	icon_crest.crestcannonshot_tex
		39816, // [傳說]鬥志紋章 - 月光爆	0	0	icon_crest.crest_throwglave_tex
		39817, // [傳說]機會紋章 - 打雷重擊	0	0	icon_crest.cr5_lightningstruck
		39818, // [傳說]必殺紋章 - 穿透射擊	0	0	icon_crest.crestthrougharrow_tex
		39819, // 鬥志紋章 - 二劍劍舞	0	0	icon_crest.crest_doublesworddance_tex
		39820, // 鬥志紋章 - 正義跳躍	0	0	icon_crest.crest_justiceleap_tex
		39821, // 鬥志紋章 - 三斬	0	0	icon_crest.crest_slidingslash_tex
		39822, // 鬥志紋章 - 野獸的突進	0	0	icon_crest.crest_ragerush_tex
		39823, // 鬥志紋章 - 冰槍	0	0	icon_crest.crest_icespear_tex
		39824, // 鬥志紋章 - 風之步伐	0	0	icon_crest.crest_windwalk_tex
		39825, // 範圍紋章 - 魔力爆發	0	0	icon_crest.crest_marbleexplosion_tex
		39826, // 神速紋章 - 魔力再生、全神卷軸	0	0	icon_crest.crest_spirit2_tex
		39827, // 鬥志紋章 - 飛劍逆收割	0	0	icon_crest.crest_reversewithdraw_tex
		39828, // 鬥志紋章 - 神秘光線	0	0	icon_crest.crest_arcanebeam_tex
		39829, // 鬥志紋章 - 原值暴擊	0	0	icon_crest.crest_oneinchpunch_tex
		39830, // 鬥志紋章 - 機動攻擊術	0	0	icon_crest.crest_chakraemission_tex
		39831, // 鬥志紋章 - 半月斬	0	0	icon_crest.crest_halfmoon_tex

		98850, // 技能鍛鍊經驗值書籍 (小型)
		98851, // 技能鍛鍊經驗值書籍 (中型)
		98852, // 技能鍛鍊經驗值書籍 (大型)
		98853  // 技能鍛鍊經驗值書籍 (超大型)
	],
	
	potions: [
	/*  id:     // 药品 itemID编号
		hp:     // true: 回血药品 fals: 回蓝药品
		use_at: // 触发自动喝药的 百分量 */
		
		{id: 6560, category: "mp", use_at: 80}, // 低级MP恢复药水
		{id: 6561, category: "mp", use_at: 70}, // 中级MP恢复药水
		{id: 6562, category: "mp", use_at: 50}, // 高级MP恢复药水
		{id: 6563, category: "mp", use_at: 30}, // 最高级MP恢复药水
		
		{id: 6550, category: "hp", use_at: 65}, // 低级HP恢复药水
		{id: 6551, category: "hp", use_at: 60}, // 中级HP恢复药水
		{id: 6552, category: "hp", use_at: 55}, // 高级HP恢复药水
		{id: 6553, category: "hp", use_at: 50}, // 最高级HP恢复药水
		
		{id:     28, category: "hp", use_at: 40}, // 凯亚的号角喇叭 100%
		{id: 221225, category: "hp", use_at: 40}, // 凯亚的号角喇叭 100%
		
		{id:    114, category: "hp", use_at: 50}, // 聯盟補給品：急速恢復藥水
		
		// {id:    111, category: "hp", use_at: 30}, // 持续性恢复药水 75%
		// {id: 193027, category: "hp", use_at: 20}  // HP恢復藥水 75%
	]
}
