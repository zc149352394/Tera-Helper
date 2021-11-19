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
			"C_START_REPAIR_ITEM": null,
			"C_REQUEST_REPAIR_ITEM": null
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
	//  {Zone: 9781, loc: {x:  39419, y:-113077, z: 17212}, w:  0.5, name: "贝里克下级 - 尾王"},
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
		
		// 89768, // 初階平衡武器強化石
		// 89769, // 中階平衡武器強化石
		// 89770, // 高階平衡武器強化石
		
		// 89771, // 初階平衡防具強化石
		// 89772, // 中階平衡防具強化石
		// 89773, // 高階平衡防具強化石
		
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
		209904  // 技能鍛鍊經驗值書籍 IV
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
		98850, // 技能鍛鍊經驗值書籍 (小型)
		98851, // 技能鍛鍊經驗值書籍 (中型)
		98852, // 技能鍛鍊經驗值書籍 (大型)
		98853  // 技能鍛鍊經驗值書籍 (超大型)
	],
	
	potions: [
	/*  id:     // 药品 itemID编号
		hp:     // true: 回血药品 fals: 回蓝药品
		use_at: // 触发自动喝药的 百分量 */
		
	//  {id: 6550, category: true, use_at: 65}, // 低级HP恢复药水
	//  {id: 6551, category: true, use_at: 60}, // 中级HP恢复药水
	//  {id: 6552, category: true, use_at: 55}, // 高级HP恢复药水
	//  {id: 6553, category: true, use_at: 50}, // 最高级HP恢复药水
		
		{id: 6560, category: "mp", use_at: 80}, // 低级MP恢复药水
		{id: 6561, category: "mp", use_at: 70}, // 中级MP恢复药水
		{id: 6562, category: "mp", use_at: 50}, // 高级MP恢复药水
		{id: 6563, category: "mp", use_at: 30}, // 最高级MP恢复药水
		
		{id:     28, category: "hp", use_at: 40}, // 凯亚的号角喇叭 100%
		{id: 221225, category: "hp", use_at: 40}, // 凯亚的号角喇叭 100%
		{id:    111, category: "hp", use_at: 30}, // 持续性恢复药水 75%
		{id: 193027, category: "hp", use_at: 20}  // HP恢復藥水 75%
	]
}
