const DEFAULT_HOOK_SETTINGS = {order: 0, filter: {fake: null, silenced: null, modified: null}}

const fs = require('fs')
const path = require("path")
const Vec3 = require('tera-vec3')
const Notifier = require('node-notifier')
const UI = require('tera-mod-ui').Settings

if (!fs.existsSync(path.join(__dirname, 'data'))) {
	fs.mkdirSync(path.join(__dirname, 'data'));
}
function saveJsonData(pathToFile, data) {
	fs.writeFileSync(path.join(__dirname, pathToFile), JSON.stringify(data, null, "\t"));
}
function reloadFile(fileName) {
	delete require.cache[require.resolve(fileName)]
	return require(fileName)
}

function getTime(thisTime) {
	var Time = new Date(thisTime)
	return	add_0(Time.getMonth()+1) + "/" + add_0(Time.getDate()) + " " +
			add_0(Time.getHours())   + ":" + add_0(Time.getMinutes())
}
function add_0(i) {
	if (i < 10) i = "0" + i
	return i
}

module.exports = function TeraHelper(mod) {
	let tipMarkers = new Map()
	let Set = reloadFile('./User_Settings.js')
	const Ver = mod.majorPatchVersion
	// 增加自定义映射码 add_Opcode
	const proVer = mod.clientInterface.info.protocolVersion
	for (var code in Set.opcodes[proVer]) {
		mod.dispatch.addOpcode(code, Set.opcodes[proVer][code])
	}
	// Settings UI
	let ui = null
	if (global.TeraProxy.GUIMode) {
		ui = new UI(mod, require('./settings/structure'), mod.settings, { height: 530 })
		ui.on('update', settings => {
			mod.settings = settings
			mod.send('S_DUNGEON_CAMERA_SET', 1, {
				enabled: true,
				default: mod.settings.distance * 25,
				max: mod.settings.distance * 25
			})
			mod.send('S_STEER_DEBUG_COMMAND', 1, {
				command: `fov ${mod.settings.fovValue}`
			})
		})
	}
	
	mod.game.initialize('me')
	mod.game.initialize('me.abnormalities')
	mod.game.initialize('inventory')
	mod.game.inventory.on('update', () => {
		mod.game.inventory.bagItems.forEach(item => {
			if (mod.settings.autoUse && Set.autoUseItems.includes(item.id)) UseItem(item.id)
		})
	})
	
	// 镜头抖动
	mod.clientInterface.configureCameraShake(!mod.settings.camShake)
	// Cmd-Slash
	mod.command.add("set", {
		$none() { ui.show() },
		reload() {
			Set = reloadFile('./User_Settings.js')
			mod.command.message(`Reload: User_Settings.js`)
		}
	})
	mod.command.add("work", (arg, logInfo) => {
		mod.manager.loadNetwork(arg, logInfo = true)
		mod.command.message(`运行插件 ${arg}`)
	})
	mod.command.add("unwork", (arg, logInfo) => {
		mod.manager.unloadNetwork(arg, logInfo = true)
		mod.command.message(`停止插件 ${arg}`)
	})
	mod.command.add("load", (arg, logInfo) => {
		mod.manager.load(arg, logInfo = true)
		mod.command.message(`加载插件 ${arg}`)
	})
	mod.command.add("unload", (arg, logInfo) => {
		mod.manager.unload(arg, logInfo = true)
		mod.command.message(`卸载插件 ${arg}`)
	})
	mod.command.add("reload", (arg, logInfo) => {
		mod.manager.reload(arg, logInfo = true)
		mod.command.message(`重载插件 ${arg}`)
	})
	mod.command.add("abn", () => {
		Object.values(mod.game.me.abnormalities).forEach(obj => {
			mod.log(`${obj.data.name} (ID: ${obj.id})`)
			obj.data.effects.forEach(effect => {
				mod.log(`${obj.data.name} - Type ${effect.type}, Method ${effect.method}, Value ${effect.value}`)
			})
		})
	})
	mod.command.add("gameme", () => {
		// mod.log(mod.game.me)
		mod.log("[gameId] "        +mod.game.me.gameId)
		mod.log("[templateId] "    +mod.game.me.templateId)
		mod.log("[serverId] "      +mod.game.me.serverId)
		mod.log("[playerId] "      +mod.game.me.playerId)
		mod.log("[name] "          +mod.game.me.name)
		mod.log("[level] "         +mod.game.me.level)
		mod.log("[class] "         +mod.game.me.class +`\t`+ (mod.game.me.templateId - 10101) % 100)
		mod.log("[race] "          +mod.game.me.race  +`\t`+ Math.floor((mod.game.me.templateId - 10101) / 100))
		mod.log("[gender] "        +mod.game.me.gender)
		mod.log("[zone] "          +mod.game.me.zone)
		mod.log("[alive] "         +mod.game.me.alive)
		mod.log("[mounted] "       +mod.game.me.mounted)
		mod.log("[mountId] "       +mod.game.me.mountId)
		mod.log("[status] "        +mod.game.me.status)
		mod.log("[inCombat] "      +mod.game.me.inCombat)
		mod.log("[onPegasus] "     +mod.game.me.onPegasus)
		mod.log("[inOpenWorld] "   +mod.game.me.inOpenWorld)
		mod.log("[inBattleground] "+mod.game.me.inBattleground)
		mod.log("[inDungeon] "     +mod.game.me.inDungeon)
		mod.log("[inCivilUnrest] " +mod.game.me.inCivilUnrest)
		mod.log("[isLeader] "      +mod.game.me.isLeader)
	})
	mod.command.add("info", () => {
		// mod.log(mod.clientInterface.info)
		mod.log('[pid] '              +mod.clientInterface.info.pid)
		mod.log('[arch] '             +mod.clientInterface.info.arch)
		mod.log('[publisher] '        +mod.clientInterface.info.publisher)
		mod.log('[platform] '         +mod.clientInterface.info.platform)
		mod.log('[environment] '      +mod.clientInterface.info.environment)
		mod.log('[language] '         +mod.clientInterface.info.language)
		mod.log('[path] '             +mod.clientInterface.info.path)
		mod.log('[majorPatchVersion] '+mod.clientInterface.info.majorPatchVersion)
		mod.log('[minorPatchVersion] '+mod.clientInterface.info.minorPatchVersion)
		mod.log('[protocolVersion] '  +mod.clientInterface.info.protocolVersion)
	})
	mod.command.add("pro", () => {
		mod.log('[protocol]\r')
		mod.log(mod.clientInterface.info.protocol)
	})
	mod.command.add("sys", () => {
		mod.log('[sysmsg]\r')
		mod.log(mod.clientInterface.info.sysmsg)
	})
	mod.command.add("b", () => {
		mod.send('S_NPC_MENU_SELECT', 1, { type: 28 })
		mod.command.message(`交易所`)
	})
	mod.command.add("d", () => {
		mod.send('C_LEAVE_PARTY', 1, {})
		mod.command.message(`退出组队`)
	})
	mod.command.add("e", () => {
		mod.send('C_DISMISS_PARTY', 1, {})
		mod.command.message(`解散组队`)
	})
	mod.command.add("r", () => {
		mod.send('C_RESET_ALL_DUNGEON', 1, {})
		mod.command.message(`重置副本`)
	})
	mod.command.add("q", () => {
		mod.send('C_RETURN_TO_LOBBY', 1, {})
		mod.command.message(`登出角色`)
	})
	// 刷新 显示范围
	let visibleRange // = 1800
	mod.hookOnce('C_SET_VISIBLE_RANGE', 1, e => {
		if (visibleRange != 1) visibleRange = e.range // 显示范围 - 系统初始值
	})
	mod.command.add("re", () => {
		mod.send('C_SET_VISIBLE_RANGE', 1, { range: 1 })
		mod.setTimeout(() => {
			mod.send('C_SET_VISIBLE_RANGE', 1, { range: visibleRange })
		}, 1000)
	})
	// 切换 分流线路
	mod.command.add("c", (arg) => {
		if (arg && !isNaN(arg)) {
			selectChannel(Number(arg))
		} else {
			selectChannel(mod.game.me.channel + 1)
		}
	})
	mod.hook('S_CURRENT_CHANNEL', 2, e => {
		mod.game.me.channel = e.channel
	})
	function selectChannel(select) {
		if (select == mod.game.me.channel) return
		select--
		mod.trySend('C_SELECT_CHANNEL', 1, {
			unk: 1,
			zone: mod.game.me.zone,
			channel: select
		})
	}
	// Teleport
	let aBook = {}
	try {
		aBook = require('./data/book.json')
	} catch (_) {
		aBook = {}
		saveJsonData(path.join('data', 'book.json'), aBook)
	}
	mod.command.add("tp", (arg1, arg2, arg3, arg4) => {
		switch (arg1) {
			case "r":
			case "reload":
				aBook = require('./data/book.json')
				break
			case "load":
				mod.command.message("x:"+arg2+" y:"+arg3+" z:"+arg4)
				Move(Number(arg2), Number(arg3), Number(arg4))
				break
			case "s":
			case "保存":
				if (arg2) {
					aBook[arg2] = {
						zone: mod.game.me.zone,
						x: mod.game.me.loc.x,
						y: mod.game.me.loc.y,
						z: mod.game.me.loc.z,
						w: mod.game.me.w
					}
					saveJsonData(path.join('data', 'book.json'), aBook)
					mod.command.message("保存坐标 " + arg2)
				}
				break
			case "l":
			case "读取":
				if (arg2) {
					if (!aBook[arg2]) {
						mod.command.message("未找到坐标 " + arg2)
					} else if (aBook[arg2].zone != mod.game.me.zone) {
						mod.command.message("未存在坐标 " + aBook[arg2].zone + " 区域内")
					} else {
						mod.command.message("读取坐标 " + arg2)
						Move(aBook[arg2].x, aBook[arg2].y, aBook[arg2].z, aBook[arg2].w)
					}
				}
				break
			case "d":
			case "删除":
				if (arg2) {
					if (!aBook[arg2]) {
						mod.command.message("未找到坐标 " + arg2 + " 进行删除")
					} else {
						delete aBook[arg2]
						saveJsonData(`book.json`, aBook)
						mod.command.message("删除坐标 " + arg2)
					}
				}
				break
			default:
				mod.command.message(
					"当前坐标信息: "
					+ "\n\t - [地区] "  + mod.game.me.zone
					+ "\n\t - [loc.x] " + Math.round(mod.game.me.loc.x)
					+ "\n\t - [loc.y] " + Math.round(mod.game.me.loc.y)
					+ "\n\t - [loc.z] " + Math.round(mod.game.me.loc.z)
					+ "\n\t - [w] "     + Math.round(mod.game.me.w)
				)
				break
		}
	})
	function Move(x, y, z, w) {
		mod.send('S_INSTANT_MOVE', 3, {
			gameId: mod.game.me.gameId,
			loc: new Vec3(x, y, z),
			w: w
		})
	}
	// logTime
	let logTime = {}
	try {
		logTime = require('./data/logtime.json')
	} catch (_) {
		logTime = {
				"刻印BOSS": {
				"爆炎(暴风喀纳什)": {
					"Zone": 4,
					"id": 5011,
					"time": null
				},
				"蛇岛(莎夏拉克)": {
					"Zone": 10,
					"id": 99,
					"time": null
				},
				"古代(溃斯格连)": {
					"Zone": 38,
					"id": 35,
					"time": null
				},
				"孵化(卡恰斯坦)": {
					"Zone": 57,
					"id": 33,
					"time": null
				},
				"蜥蜴(史内格斗司)": {
					"Zone": 52,
					"id": 9050,
					"time": null
				},
				"蜘蛛(拉其奴亚)": {
					"Zone": 51,
					"id": 7011,
					"time": null
				}
			},
			"交付": {
				"1-交付哥布林(貝)_1276": {
					"Zone": 63,
					"id": 1276,
					"time": null
				},
				"2-交付哥布林(凱)": {
					"Zone": 84,
					"id": 1276,
					"time": null
				},
				"3-交付哥布林(爾)": {
					"Zone": 72,
					"id": 1276,
					"time": null
				},
				"4-交付哥布林(伊)": {
					"Zone": 183,
					"id": 1276,
					"time": null
				}
			},
			"世界BOSS": {
				"奧勒曇(生命溪谷)": {
					"Zone": 26,
					"id": 5001,
					"time": null
				},
				"哈迦叻(拓荒村莊)": {
					"Zone": 39,
					"id": 501,
					"time": null
				},
				"盖洛司(希望村莊)": {
					"Zone": 51,
					"id": 4001,
					"time": null
				}
			}
		}
		saveJsonData(path.join('data', 'logtime.json'), logTime)
	}
	mod.command.add("time", () => {
		for (let type in logTime) {
			for (let name in logTime[type]) {
				mod.command.message(getTime(logTime[type][name].time)+` [`+type+`] `+name)
			}
		}
	})
	// 登入角色
	mod.game.on('enter_game', () => { // 'S_LOGIN'
		mod.game.me.job = (mod.game.me.templateId-10101)%100
	})
	// 返回角色
	mod.game.on('leave_game', () => { // 'S_RETURN_TO_LOBBY'
		RemoveAllMarkers(tipMarkers)
		stopLoot()
		mod.game.me.job = -1
	})
	// 进入-加载画面
	mod.game.on('enter_loading_screen', () => { // 'S_LOGIN' 'S_LOAD_TOPO'
		RemoveAllMarkers(tipMarkers)
		stopLoot()
	})
	// 完成-加载画面
	mod.game.on('leave_loading_screen', () => { // 'S_SPAWN_ME'
		mod.send('S_REMOVE_EFFECT', 1, {
			gameId: mod.game.me.gameId,
			name: "FX_L_HotFix_150825.PS.L_15082501_PS"
		})
		mod.setTimeout(() => {
			mod.send('S_DUNGEON_CAMERA_SET', 1, {
				enabled: true,
				default: mod.settings.distance * 25,
				max: mod.settings.distance * 25
			})
		}, 2000)
	})
	// 切换地区
	mod.game.me.on('change_zone', (zone, quick) => { // 'S_LOAD_TOPO'
		// VIP优惠专用空间-副本(奇丽安森林)
		if (zone==9714) mod.send('C_RESET_ALL_DUNGEON', 1, {}) // 重置副本
		// 艾索杜勒-原野
		if (zone==2000) {
			mod.send('S_ABNORMALITY_BEGIN', (Ver<107?4 : 5), {
				target: mod.game.me.gameId,
				source: mod.game.me.gameId,
				id: 30010000, // 阿勒卡夫的力量
				duration: 0x7FFFFFFF, // INT_MAX
				stacks: 1
			})
		} else {
			mod.send('S_ABNORMALITY_END', 1, {
				target: mod.game.me.gameId,
				id: 30010000
			})
		}
	})
	// 进入战斗
	mod.game.me.on('enter_combat', () => {
		notifierMsg(`您正在遭受攻击!!!`, `战斗通知`, '13.png')
	})
	// 重置副本
	mod.hook('S_VOTE_RESET_ALL_DUNGEON', 1, e => {
		notifierMsg(`投票事件!!`, `重置副本`, '02.png')
		if (!mod.settings.restDungeon || mod.game.me.isLeader) return
		mod.send('C_VOTE_RESET_ALL_DUNGEON', 1, { accept: true })
		mod.command.message("同意-重置副本")
	})
	// 自动接受 道具分配
	mod.hook('S_PARTY_LOOTING_METHOD_VOTE', 1, e => {
		notifierMsg(`投票事件!!`, `分配变更`, '02.png')
		if (!mod.settings.lootingMethod || e.isLeader) return
		mod.send('C_PARTY_LOOTING_METHOD_VOTE', 1, { accept: true })
		mod.command.message("同意-道具分配")
	})
	// 密语消息
	mod.hook('S_WHISPER', (Ver<108?3 : 4), e => {
		notifierMsg(`好友 ${e.name} 悄悄对你说:\n${e.message.replace(/<[^>]+>/g, '')}`, `私信通知`, '08.png')
	})
	// 匹配副本
	mod.hook('S_FIN_INTER_PARTY_MATCH', 1, e => {
		notifierMsg(`Zone: ${e.zone}, 副本配对-成功!`, `匹配通知`, '07.png')
	})
	// 匹配战场
	mod.hook('S_BATTLE_FIELD_ENTRANCE_INFO', 1, e => {
		notifierMsg(`ID: ${e.id} Zone: ${e.zone}, 战场配对-成功!`, `匹配通知`, '06.png')
	})
	// 招募申请
	mod.hook('S_OTHER_USER_APPLY_PARTY', (Ver<109?1 : 2), e => {
		notifierMsg(`<${e.name}>\n申请加入你的[招募队伍].` , `招募申请`, 'group_add.png')
	})
	// 组队邀请
	mod.hook('S_BEGIN_THROUGH_ARBITER_CONTRACT', (Ver<109? 1 : 2), e => {
		notifierMsg(`<${e.sender}>\n邀请你进入[组队].` , `组队通知`, 'group.png')
		// e.response = 1
		// e.recipient = e.sender
		// mod.send('C_REPLY_THROUGH_ARBITER_CONTRACT', 1, e)
		// mod.command.message("接受 [" + e.sender + "] 的组队邀请")
	})
	// 组队召唤
	mod.hook('S_ASK_TELEPORT', 1, e => {
		notifierMsg(`<${e.name}>\n想要[召唤]你到身边.` , `召唤请求`, '14.png')
	})
	// 其他通知
	mod.hook('S_REQUEST_CONTRACT', (Ver<108?1 : 2), e => {
		if (mod.game.me.name == e.senderName) return
		switch(e.type) {
			case 3:
				notifierMsg(`<${e.senderName}>\n请求与你[交易].`, `其他通知-交易`, '05.png')
				break
			case 11:
				notifierMsg(`<${e.senderName}>\n申请与你[决斗].`, `其他通知-决斗`, '04.png')
				break
			case 56:
				notifierMsg(`<${e.senderName}>\n想要[召唤]你到身边.`, `其他通知-召唤`, '01.png')
				break
		}
	})
	// 查询物品ID
	mod.hook('S_SHOW_ITEM_TOOLTIP', (Ver<106?14 : Ver<107?15 : Ver<109?16 : 17), e => {
		if (mod.settings.logItemId) mod.command.message("[SHOW_ITEM_TOOLTIP] " + e.id)
	})
	mod.hook('C_REQUEST_NONDB_ITEM_INFO', 2, e => {
		if (mod.settings.logItemId) mod.command.message("[REQUEST_NONDB_ITEM_INFO] " + e.item)
	})
	// 阻止 返回大厅 AFKer
	let stopMoving = Date.now()
	mod.hook('C_PLAYER_LOCATION', 5, e => {
		mod.game.me.w    = e.w
		mod.game.me.loc  = e.loc
		mod.game.me.dest = e.dest
		if ([0, 1, 5, 6].includes(e.type)) stopMoving = Date.now()
		if ([2, 10].includes(e.type) && mod.settings.falling) return false // 禁用高空坠落伤害 no-fall-damage
	})
	mod.hook('C_RETURN_TO_LOBBY', 1, e => {
		if (Date.now() > (stopMoving+60*60*1000) && mod.settings.afker) return false
	})
	// 阻止 返回领地 AFKer
	mod.tryHook('C_FIELD_EVENT_BAN', 1, e => {
		if (mod.settings.afker) return false
	})
	// 装备 强化概率
	mod.hook('S_REGISTER_ENCHANT_ITEM', (Ver<95?3 : Ver<108?4 : 5), e => {
		if (!mod.settings.enchantChance) return
		e.hideSuccessChance = false
		return true
	})
	// 装备 升级概率
	mod.hook('S_REGISTER_EVOLUTION_ITEM', 3, e => {
		if (!mod.settings.evolutionChance) return
		e.hideSuccessChance = false
		return true
	})
	// 瞬间强化 Instant-Enchant
	let enchanting = null
	mod.hook('C_REGISTER_ENCHANT_ITEM', 1, e => { enchanting = e })
	mod.hook('C_START_ENCHANT', 1, e => {
		if (!mod.settings.instantEnchant || !enchanting || e.contract != enchanting.contract) return
		mod.send('C_REQUEST_ENCHANT', 1, enchanting)
		return false
	})
	mod.hook('C_REQUEST_ENCHANT', 1, () => {
		if (mod.settings.instantEnchant) return false
	})
	// 瞬间升级 Instant-Upgrade
	let upgrading = null
	mod.hook('C_REGISTER_EVOLUTION_ITEM', 1, e => { upgrading = e })
	mod.hook('C_START_EVOLUTION', 1, e => {
		if (!mod.settings.instantEvolution || !upgrading || e.contract != upgrading.contract) return
		mod.send('C_REQUEST_EVOLUTION', 1, upgrading)
		return false
	})
	mod.hook('C_REQUEST_EVOLUTION', 1, () => {
		if (mod.settings.instantEvolution) return false
	})
	// 瞬间维修 Instant-Repair
	mod.dispatch.addDefinition('C_REGISTER_REPAIR_ITEM', 1, [ // 数据包总长度 4+16
		['contract', 'uint32'],
		['dbid',     'uint64'],
		['id',       'int32']
	])
	mod.dispatch.addDefinition('C_START_REPAIR_ITEM', 1, [ // 数据包总长度 4+4
		['contract', 'uint32']
	])
	mod.dispatch.addDefinition('C_REQUEST_REPAIR_ITEM', 1, [ // 数据包总长度 4+16
		['contract', 'uint32'],
		['dbid',     'uint64'],
		['id',       'int32']
	])
	let repairing = null
	mod.tryHook('C_REGISTER_REPAIR_ITEM', 1, e => { repairing = e })
	mod.tryHook('C_START_REPAIR_ITEM', 1, e => {
		if (!mod.settings.instantRepair || !repairing || e.contract != repairing.contract) return
		mod.trySend('C_REQUEST_REPAIR_ITEM', 1, repairing)
		return false
	})
	mod.tryHook('C_REQUEST_REPAIR_ITEM', 1, () => {
		if (mod.settings.instantRepair) return false
	})
	// 瞬间绑定 Instant-Soulbind
	mod.hook('C_BIND_ITEM_BEGIN_PROGRESS', 1, e => {
		if (!mod.settings.instantSoulbind) return
		mod.send('C_BIND_ITEM_EXECUTE', 1, { contractId: e.contractId })
		process.nextTick(() => {
			mod.send('S_CANCEL_CONTRACT', 1, { type: 32, id: e.contractId })
		})
	})
	mod.hook('C_BIND_ITEM_EXECUTE', 1, () => false)
	// 瞬间合并 Instant-Merge
	mod.hook('S_REQUEST_CONTRACT', (Ver<108?1 : 2), e => {
		if (!mod.settings.instantMerge || !mod.game.me.is(e.senderId) || e.type != 33) return
		mod.send('C_MERGE_ITEM_EXECUTE', 1, { contractId: e.id })
		process.nextTick(() => {
			mod.send('S_CANCEL_CONTRACT', 1, { type: 33, id: e.id })
		})
	})
	mod.hook('C_MERGE_ITEM_EXECUTE', 1, () => false)
	// 瞬间分解 Instant-Dismantle
	mod.hook('C_RQ_START_SOCIAL_ON_PROGRESS_DECOMPOSITION', 1, e => {
		if (!mod.settings.instantDismantle) return
		mod.send('C_RQ_COMMIT_DECOMPOSITION_CONTRACT', 1, { contract: e.contract })
		return false
	})
	mod.hook('C_RQ_COMMIT_DECOMPOSITION_CONTRACT', 1, () => false)
	// 瞬间复活 Instant-Revive
	mod.hook('S_CREATURE_LIFE', 3, e => {
		if (!mod.settings.instantRevive || !mod.game.me.is(e.gameId)) return
		if (!e.alive) {
			mod.send('S_ACTION_STAGE', 9, {
				gameId: e.gameId,
				templateId: 11006, // 弓箭手
				speed: 1,
				projectileSpeed: 1,
				stage: 1,
				id: 9999999,
				effectScale: 1,
				dest: e.loc,
				loc: e.loc,
				skill: {
					reserved: 0,
					npc: false,
					type: 1,
					huntingZoneId: 0,
					id: 70300 // 裝死
				}
			})
			mod.send('S_INSTANT_MOVE', 3, {
				gameId: mod.game.me.gameId,
				loc: e.loc,
				w: mod.game.me.w
			})
			return false
		} else {
			mod.send('S_ACTION_END', 5, {
				gameId: mod.game.me.gameId,
				templateId: 11006, // 弓箭手
				type: 25,
				id: 9999999,
				loc: e.loc,
				skill: {
					reserved: 0,
					npc: false,
					type: 1,
					huntingZoneId: 0,
					id: 70300 // 裝死
				}
			})
		}
	})
	// User-Effect
	mod.hook('S_USER_EFFECT', 1, e => {
		if (!mod.game.me.is(e.target) || !e.circle!=3) return
		if (e.operation==1) {
			mod.send('S_PLAY_EFFECT', 1, {
				gameId: mod.game.me.gameId,
				id: 915082501
			})
		}
		if (e.operation==2) {
			mod.send('S_REMOVE_EFFECT', 1, {
				gameId: mod.game.me.gameId,
				name: "FX_L_HotFix_150825.PS.L_15082501_PS"
			})
		}
	})
	// 查看装备 Inspect
	mod.hook('S_ANSWER_INTERACTIVE', (Ver<103?2 : 3), e => {
		if (!mod.settings.viewUserInfo) return
		mod.send('C_REQUEST_USER_PAPERDOLL_INFO', 3, { zoom: false, name: e.name })
	})
	// 跳过动画 Sutscene-Skip
	mod.hook('S_PLAY_MOVIE', 1, e => {
		if (!mod.settings.skipMovie) return
		mod.send('C_END_MOVIE', 1, { movie: e.movie, unk: true })
		return false
	})
	// No-Cancel-Mote 元素HP/MP晶球蓄力技能 不会取消施法
	mod.hook('C_CANCEL_SKILL', 3, e => {
		if (!mod.settings.noCancelMote || mod.game.me.job!=7) return
		if ([18, 22].includes(Math.floor(e.skill.id/10000))) return false
	})
	// No-More-Wasted-Backstabs
	mod.hook('C_START_TARGETED_SKILL', 7, e => {
		if (!mod.settings.backstab || e.targets[0].gameId!=0n) return
		if (!Set.backstabs[mod.game.me.job]) return
		if (!Set.backstabs[mod.game.me.job][Math.floor(e.skill.id / 10000)]) return
		Object.assign(e.skill, {type: 0, npc: false, huntingZoneId: 0, reserved: 0})
		mod.send('S_CANNOT_START_SKILL', 4, { skill: e.skill })
		return false
	})
	// 移除 被锁定绿字 No-Lockon-You
	mod.hook('S_LOCKON_YOU', 1, () => {
		if (mod.settings.noLockYou) return false
	})
	// 移除 镜头缩放 / 传送门动画
	mod.hook('S_START_ACTION_SCRIPT', 3, () => {
		if (mod.settings.noActionScript) return false
	})
	// 移除 闲置动作
	mod.hook('S_SOCIAL', 1, e => {
		if (mod.settings.noSocialAnimation && [31, 32, 33].includes(e.animation)) return false
	})
	// 移除 屏幕扭曲 No-More-Screen-Effects
	mod.hook('S_ABNORMALITY_BEGIN', (Ver<107?4 : 5), e => {
		if (!mod.settings.noScreenEffect || !mod.game.me.is(e.target)) return
		var abnormality = mod.game.data.abnormalities.get(e.id)
		if (abnormality && abnormality.effects.some(effect => effect.type == 244)) return false
	})
	// 自动 领取红利
	mod.hook('S_COMPLETE_EVENT_MATCHING_QUEST', 1, e => {
		if (!mod.settings.vanguard || mod.game.me.inBattleground) return
		mod.send('C_COMPLETE_DAILY_EVENT', 1, { id:e.id }) // 领取奖励
		mod.send('C_COMPLETE_EXTRA_EVENT', 1, { type: 1 }) // 每日红利
		mod.send('C_COMPLETE_EXTRA_EVENT', 1, { type: 0 }) // 每周红利
		return false
	})
	// 工会 接领任务
	mod.hook('S_UPDATE_GUILD_QUEST_STATUS', 1, e => {
		if (!mod.settings.guildQuest || e.unk1!=2) return // 提交-完成任务
		mod.setTimeout(() => { mod.trySend('C_REQUEST_FINISH_GUILD_QUEST', 1, { quest: e.quest }) }, 1000)
		
		if (Set.ignoreQuest.includes(e.questId)) return // 重新-接受任务
		mod.setTimeout(() => { mod.trySend('C_REQUEST_START_GUILD_QUEST', 1, { questId: e.quest }) }, 3000)
	})
	// 显示 弓箭陷阱
	mod.hook('S_SPAWN_PROJECTILE', (Ver<105?5 : 6), e => {
		if (!mod.settings.archerTrap || mod.game.me.is(e.gameId) || !Set.archerTraps.includes(e.skill.id)) return
		e.gameId = mod.game.me.gameId
		return true
	})
	// 传送尾王
	mod.hook('S_SPAWN_ME', 3, e => {
		if (!mod.settings.dungeon) return
		Set.dungeonTP.forEach(obj => {
			if (obj.Zone != mod.game.me.zone) return
			e.loc = obj.loc
			e.w = obj.w * Math.PI
		})
		return true
	})
	// 无限 飞行能量 Fly-More
	let outOfEnergy = false
	mod.tryHook('S_CANT_FLY_ANYMORE', 1, () => {
		if (mod.settings.flyMore) return false
	})
	mod.hook('S_PLAYER_CHANGE_FLIGHT_ENERGY', 1, e => {
		if (!mod.settings.flyMore) return
		outOfEnergy = e.energy === 0
		return false
	})
	mod.hook('C_PLAYER_FLYING_LOCATION', 4, e => {
		if (!mod.settings.flyMore || !outOfEnergy || e.type==7 || e.type==8) return
		e.type = 7
		e.dest.z = Math.min(e.loc.z, e.dest.z)
		return true
	})
	// 自动 喂养宠物 / 跟班
	let servantInfo = null
	mod.hook('S_REQUEST_SPAWN_SERVANT', 4, e => {
		if (!servantInfo && mod.game.me.is(e.ownerId) && e.spawnType==0) servantInfo = e
	})
	mod.hook('S_REQUEST_DESPAWN_SERVANT', 1, e => {
		if (servantInfo && e.gameId==servantInfo.gameId && e.despawnType==0) servantInfo = null
	})
	mod.dispatch.addDefinition('S_UPDATE_SERVANT_INFO', 0, [
		// 数据包总长度 4+123
		['unk1', 'int32'],
		['numAbility', 'uint16'],
		['unk2', 'int32'],
		['dbid',       'uint64'],
		['type',       'uint32'],
		['id',         'uint32'],
		['grade',      'uint32'],
		['unk3', 'int32'],
		['energy',     'uint32'],
		['energyMax',  'uint32'],
		['fellowship', 'uint32']
		// ...['unknow4', 'byte[77]']
	])
	mod.tryHook('S_UPDATE_SERVANT_INFO', 0, e => {
		if (!mod.settings.autoServant || !servantInfo || e.dbid!=servantInfo.dbid || e.id!=servantInfo.id) return
		if (e.energy/e.energyMax < mod.settings.servantUseAt/100) {
			UseItem(e.type ? Set.servantGift : Set.servantFood)
		}
	})
	// 记录声望点数
	mod.hook('S_AVAILABLE_EVENT_MATCHING_LIST', 2, e => {
		mod.game.me.reputation = e.vanguardCredits
	})
	mod.hook('S_SEND_CHANGE_REPUTATION_POINT', 1, e => {
		if (e.id == 609) mod.game.me.reputation += e.amount
		if (!mod.settings.logReputation) return
		mod.command.message(`巴其温侦察队声望点数: ` + mod.game.me.reputation)
	})
	mod.hook('S_POINT_STORE_SELL_LIST', 1, e => {
		if (e.button == 609) mod.game.me.reputation = e.tokens
	})
	
	mod.hook('S_EACH_SKILL_RESULT', 14, e => {
		if (mod.settings.fakeBossGage && e.target==Set.GageInfo.id && e.type==1) {
			Set.GageInfo.curHp -= e.value
			UpdateGaga()
		}
		// 起身反击
		if (mod.settings.retaliate && e.reaction.skill.id==((mod.game.me.templateId*100)+2)) {
			mod.setTimeout(() => {
				mod.send('C_START_SKILL', 7, {
					skill: {
						reserved: 0,
						npc: false,
						type: 1,
						huntingZoneId: 0,
						id: Set.retaliate[mod.game.me.job]
					},
					w:      mod.game.me.w,
					loc:    mod.game.me.loc,
					dest:   mod.game.me.dest,
					unk:    true,
					moving: false,
					cont:   false,
					target: 0,
					unk2:   false
				})
			}, 200)
		}
		// 移除 屏显数字
		if (mod.game.me.is(e.target)) {
			if (e.type == 1 && !mod.settings.damageNumberMe) e.type = 0 // 掉血伤害
			if (e.type == 2 && !mod.settings.healNumberMe) e.type = 0 // 治疗自己
			if (e.type == 3 && !mod.settings.mpNumberMe) e.type = 0 // 回蓝自己
		} else {
			if (e.type == 1 && !mod.settings.damageNumber) e.type = 0 // 输出伤害
			if (e.type == 2 && !mod.settings.healNumber) e.type = 0 // 治疗队员
			if (e.type == 3 && !mod.settings.mpNumber) e.type = 0 // 回蓝队员
		}
		
		return true
	})
	
	// 标记采集物
	mod.hook('S_SPAWN_COLLECTION', 4, e => {
		if (!mod.settings.tipGather) return
		Set.gatherInfo.forEach(obj => {
			if (obj.id!=e.id || obj.category!=mod.settings.gatherCategory) return
			tipMarkers.set(e.gameId*100n, e.loc)
			MakeMarker(e.gameId*100n, e.loc)
			mod.send('S_CUSTOM_STYLE_SYSTEM_MESSAGE', 1, {
				style: 44,
				message: obj.msg
			})
		})
	})
	mod.hook('S_DESPAWN_COLLECTION', 2, e => {
		if (tipMarkers.has(e.gameId*100n)) RemoveMarker(e.gameId*100n)
	})
	
	mod.dispatch.addDefinition('C_TRY_NPC_INTERACTION', 0, [ // 数据包总长度 4+20
		['target', 'uint64'],
		['loc', 'vec3']
	])
	// NPC-Creature
	mod.hook('S_SPAWN_NPC', (Ver<101?11 : 12), e => {
		if (mod.settings.logNPC && e.huntingZoneId!=1023) {
			mod.queryData('/StrSheet_Creature/HuntingZone@id=?/String@templateId=?', [e.huntingZoneId, e.templateId]).then(result => {
				if (result && result.attributes && result.attributes.name) {
					mod.command.message(`Spawned NPC | ${e.huntingZoneId}_${e.templateId} | "${result.attributes.name}" | ${e.shapeId}`)
				}
			})
		}
		// 触碰 風之精髓 / 電能精髓
		if (mod.settings.collectBall) {
			Set.balls.forEach(obj => {
				if (obj.Zone!=e.huntingZoneId || obj.id!=e.templateId) return
				mod.trySend('C_TRY_NPC_INTERACTION', 0, { target: e.gameId, loc: e.loc })
			})
		}
		// 屏蔽NPC
		if (mod.settings.hideNPC && Set.hideNPCs.find(obj => obj.Zone==e.huntingZoneId && obj.id==e.templateId)) return false
		// 标记NPC
		if (mod.settings.tipNPC) {
			Set.tipNPCs.forEach(obj => {
				if (obj.Zone!=e.huntingZoneId || obj.id!=e.templateId) return
				
				TipMessage(`分流-${mod.game.me.channel} ${obj.name}`, 25)
				tipMarkers.set(e.gameId*100n, e.loc)
				MakeMarker(e.gameId*100n, e.loc)
				if (obj.type) notifierMsg(`${obj.name}`, `${obj.type}`)
				
				if (!obj.logTime) return
				if (!logTime[obj.type]) logTime[obj.type] = {}
				logTime[obj.type][obj.name] = {
					Zone: obj.Zone,
					id: obj.id,
					time: Date.now()
				}
				saveJsonData(path.join('data', 'logtime.json'), logTime)
			})
		}
		// 伪造BOSS血条
		if (mod.settings.fakeBossGage && e.walkSpeed == 240) {
			if (e.huntingZoneId==26 && e.templateId==5001) { // Ortan-奥勒昙
				e.shapeId = 303730
				e.huntingZoneId = 994 // 阿爾法賽伊洛斯研究基地
				e.templateId = 1000   // 被洗腦的凱依普奇波
				fakeGage(e)
				return true
			}
			if (e.huntingZoneId==39 && e.templateId== 501) { // Hazard-哈迦叻
				e.shapeId = 303740
				e.huntingZoneId = 777 // 古代的下水道
				e.templateId = 77730  // 凱勒奇溫
				fakeGage(e)
				return true
			}
			if (e.huntingZoneId==51 && e.templateId==4001) { // Cerrus-盖洛司
				e.shapeId = 303750
				e.huntingZoneId = 828 // 守護者村莊 828-5000 829-5001
				e.templateId = 5000   // 阿勒坤暴食者
				fakeGage(e)
				return true
			}
		}
	})
	function fakeGage(e) {
		Set.GageInfo.id = e.gameId
		Set.GageInfo.curHp = Set.GageInfo.maxHp
		correctGage(e.hpLevel)
	}
	mod.hook('S_NPC_STATUS', 2, e => {
		if (!mod.settings.fakeGage || e.gameId!=Set.GageInfo.id) return
		correctGage(e.hpLevel)
		UpdateGaga()
	})
	function correctGage(stage) {
		var boss_hp_stage = BigInt(20 * (1 + stage))
		if (Set.GageInfo.curHp * 100n / Set.GageInfo.maxHp > boss_hp_stage) {
			Set.GageInfo.curHp = Set.GageInfo.maxHp * boss_hp_stage / 100n
			UpdateGaga()
			mod.command.message(`修正BOSS血量为 <font color="#E69F00">${boss_hp_stage}</font>%`)
		}
	}
	function UpdateGaga() {
		mod.send('S_BOSS_GAGE_INFO', 3, Set.GageInfo)
	}
	mod.hook('S_NPC_LOCATION', 3, e => {
		
	})
	mod.hook('S_DESPAWN_NPC', 3, e => {
		if (e.gameId == Set.GageInfo.id) Set.GageInfo.id = 0n
		
		if (tipMarkers.has(e.gameId*100n)) RemoveMarker(e.gameId*100n)
		// 移除 尸体灰烬
		if (mod.settings.deadAnimation && e.type==5) {
			e.type = 1
			return true
		}
	})
	// 世界王
	mod.hook('S_SYSTEM_MESSAGE', 1, e => {
		var msg = mod.parseSystemMessage(e.message)
		if (msg.id == 'SMT_CANT_USE_ITEM_COOLTIME') return false
		
		if (msg.id == 'SMT_FIELDBOSS_APPEAR') { // 领地王/商人 登场
			getNpcInfo(msg.tokens.npcName)
		// tokens: { regionName: '@rgn:213', npcName: '@creature:26#5001' }
		// tokens: { regionName: '@rgn:219', npcName: '@creature:51#4001' }
		// tokens: { regionName: '@rgn:214', npcName: '@creature:39#501' }
		}
		if (msg.id == 'SMT_FIELDBOSS_DIE_GUILD') {}
		if (msg.id == 'SMT_FIELDBOSS_DIE_NOGUILD') {}
		// tokens: { guildName: '龍吟虎嘯丶', userName: '无人之岛', npcname: '@creature:26#5001'}
		// tokens: { guildName: '龍吟虎嘯丶', userName: '无人之岛', npcname: '@creature:39#501' }
		// tokens: { guildName: '龍吟虎嘯丶', userName: '无人之岛', npcname: '@creature:51#4001'}
		
		if (msg.id == 'SMT_WORLDSPAWN_NOTIFY_SPAWN') { // 公会王 登场
			getNpcInfo(msg.tokens.npcName)
		// tokens: { regionName: '@rgn:218', npcName: '@creature:84#1278' }
		}
		if (msg.id == 'SMT_WORLDSPAWN_NOTIFY_DESPAWN') {}
	})
	function getNpcInfo(str) {
		var npcInfo = str.match(/\d+/g)
		Set.tipNPCs.forEach(obj => {
			if (obj.Zone!=parseInt(npcInfo[0]) || obj.id!=parseInt(npcInfo[1]) || !obj.type) return
			TipMessage(`${obj.type} - ${obj.name}`, 213)
			notifierMsg(`${obj.name}`, `${obj.type}`)
			
			if (!logTime[obj.type]) logTime[obj.type] = {}
			logTime[obj.type][obj.name] = {
				Zone: obj.Zone,
				id: obj.id,
				time: Date.now()
			}
			saveJsonData(path.join('data', 'logtime.json'), logTime)
		})
	}
	// 公会王
	mod.hook('S_NOTIFY_GUILD_QUEST_URGENT', 1, e => {
		Set.tipNPCs.forEach(obj => {
			if (!obj.quest || obj.quest!=e.quest) return
			TipMessage(`${e.type?'已刷新':'公会王'} - ${obj.name}`, 25)
			notifierMsg(`${obj.name}`, `${obj.type}`)
		})
	})
	
	// Party-Members
	mod.hook('S_CHANGE_PARTY_MANAGER', 2, e => {
		mod.game.me.isLeader = (mod.game.me.playerId == e.playerId)
	})
	let partyMembers = []
	mod.hook('S_PARTY_MEMBER_LIST', (Ver<100?7 : Ver<106?8 : 9), e => {
		partyMembers = e.members
		mod.game.me.isLeader = (mod.game.me.playerId == e.leaderPlayerId)
	})
	mod.hook('S_PARTY_MEMBER_STAT_UPDATE', (Ver<108? 3 : 4), e => {
		if (tipMarkers.has(e.playerId) && e.alive) RemoveMarker(e.playerId)
	})
	mod.hook('S_BAN_PARTY_MEMBER', 1, e => {
		partyMembers = partyMembers.filter(p => p.playerId != e.playerId)
		if (tipMarkers.has(e.playerId)) RemoveMarker(e.playerId)
	})
	mod.hook('S_LOGOUT_PARTY_MEMBER', 1, e => {
		partyMembers = partyMembers.filter(p => p.playerId != e.playerId)
		if (tipMarkers.has(e.playerId)) RemoveMarker(e.playerId)
	})
	mod.hook('S_LEAVE_PARTY_MEMBER', 2, e => {
		partyMembers = partyMembers.filter(p => p.playerId != e.playerId)
		if (tipMarkers.has(e.playerId)) RemoveMarker(e.playerId)
	})
	mod.hook('S_LEAVE_PARTY', 1, e => {
		partyMembers = []
		RemoveAllMarkers(tipMarkers)
	})
	
	// User-Player
	mod.dispatch.addDefinition('S_PARTY_INFO', 2, [
		['gameId',  'uint64'],
		['partyId', 'uint64'],
		['raid',    'bool']
	])
	mod.hook('S_SPAWN_USER', (Ver<93?15 : Ver<105?16 : 17), e => {
		// 尸体标记
		if (mod.settings.deadMark) {
			partyMembers.forEach(member => {
				if (member.playerId != e.playerId || e.alive) return
				MakeMarker(member.playerId, e.loc, Set.classToItem[member.class])
				tipMarkers.set(member.playerId, e.loc)
			})
		}
		// 按职业 隐藏玩家
		if (mod.settings.hideTank && [  1,                10         ].includes((e.templateId-10101)%100)) return false
		if (mod.settings.hideDps  && [0,  2,3,4,5,    8,9   ,11,12,13].includes((e.templateId-10101)%100)) return false
		if (mod.settings.hideHeal && [            6,7                ].includes((e.templateId-10101)%100)) return false
		if (mod.settings.onlyMembers && !partyMembers.find(p => p.playerId == e.playerId)) return false
		// 移除 碰撞体积
		mod.setInterval(() => {
			partyMembers.forEach(members => {
				mod.send('S_PARTY_INFO', 2, {
					gameId: members.gameId,
					partyId: 0,
					raid: true
				})
			})
		}, 1500)
		// 移除 工匠图标
		if (mod.settings.noArtisanIcon) {
			e.icons = []
			return true
		}
	})
	// 尸体标记
	mod.hook('S_DEAD_LOCATION', 2, e => {
		if (mod.settings.deadMark) {
			partyMembers.forEach(member => {
				if (member.gameId != e.gameId || mod.game.me.is(e.gameId)) return
				MakeMarker(member.playerId, e.loc, Set.classToItem[member.class])
				tipMarkers.set(member.playerId, e.loc)
			})
		}
		
		if (!mod.game.me.is(e.gameId)) return
		// 自动喝药水
		if (!useHpPot._destroyed) mod.clearInterval(useHpPot)
		if (!useMpPot._destroyed) mod.clearInterval(useMpPot)
		// 自动金币复活
		if (mod.settings.autoRevive) mod.setTimeout(() => { mod.send('C_REVIVE_NOW', 2, { type: 6, id: 4294967295 }) }, 1000)
	})
	mod.hook('S_DESPAWN_USER', 3, e => {
		partyMembers.forEach(member => {
			if (member.gameId != e.gameId) return
			RemoveMarker(member.playerId)
		})
	})
	function MakeMarker(id, loc, item) {
		loc.z = loc.z-80,
		mod.send('S_SPAWN_DROPITEM', (Ver<99?8 : 9), {
			gameId: id,
			loc: loc,
			item: item?item:88704,
			amount: 1
		})
	}
	function RemoveMarker(id) {
		tipMarkers.delete(id)
		mod.send('S_DESPAWN_DROPITEM', 4, {
			gameId: id
		})
	}
	function RemoveAllMarkers(array) {
		array.forEach((value, keys) => { RemoveMarker(keys) })
		array.clear()
	}
	mod.command.add("cl", () => {
		RemoveAllMarkers(tipMarkers)
	})
	
	// 自动拾取-过滤拾取
	let dropItems = new Map()
	let loop = { _destroyed: true }
	mod.command.add("loot", (arg) => {
		if (arg) {
			var linkItemId = getItemIdChatLink(arg)
			if (linkItemId) {
				if (Set.filterLoot.includes(linkItemId)) {
					Set.filterLoot.splice(Set.filterLoot.indexOf(linkItemId), 1)
					mod.command.message("恢复拾取 - " + linkItemId + getItemIdName(linkItemId))
				} else {
					Set.filterLoot.push(linkItemId)
					mod.command.message("添加过滤 - " + linkItemId + getItemIdName(linkItemId))
				}
			} else {
				mod.command.message("无效的参数!!")
			}
		} else {
			mod.command.message("参数错误!!")
		}
	})
	mod.hook('S_SPAWN_DROPITEM', (Ver<99?8 : 9), e => {
		if (!e.owners.includes(mod.game.me.playerId)) return
		
		if (mod.settings.ignoreItem && Set.ignoreItems.includes(e.item)) return false
		if (mod.settings.filterMode==0 && Set.filterLoot.includes(e.item)) return
		if (e.item>=89333 && e.item<=89508) return
		
		dropItems.set(e.gameId, e.loc)
		if (mod.settings.autoLoot && loop._destroyed && mod.settings.lootMode==0) {
			loop = mod.setInterval(startLoot, mod.settings.lootDelay)
		}
	})
	mod.hook('S_DESPAWN_DROPITEM', 4, e => {
		dropItems.delete(e.gameId)
		if (dropItems.size == 0) stopLoot()
	})
	mod.hook('C_TRY_LOOT_DROPITEM', 4, e => {
		if (mod.settings.autoLoot && loop._destroyed && mod.settings.lootMode==1) {
			loop = mod.setInterval(startLoot, mod.settings.lootDelay)
		}
	})
	function startLoot() {
		for (var item of dropItems) {
			if (mod.game.me.loc && getDistance(mod.game.me.loc, item[1]) < 100) {
				mod.send('C_TRY_LOOT_DROPITEM', 4, { gameId: item[0] })
				continue
			}
		}
	}
	function stopLoot() {
		if (!loop._destroyed) mod.clearInterval(loop)
		dropItems.clear()
	}
	function getItemIdChatLink(chatLink) {
		var id = chatLink.match(/#(\d*)@/)
		if (id) {
			return parseInt(id[1])
		} else if (!isNaN(parseInt(chatLink))) {
			return parseInt(chatLink)
		} else {
			return null
		}
	}
	function getItemIdName(itemId) {
		if (mod.game.inventory.find(itemId)) {
			return (" | " + mod.game.inventory.find(itemId).data.name)
		} else {
			return "自定义-"
		}
	}
	function getDistance(locA, locB) {
		return Math.sqrt(Math.pow((locA.x - locB.x), 2) + Math.pow((locA.y - locB.y), 2))
	}
	
	// 自动喝药水
	let hpPotList = Set.potions.filter(function (p) { return p.category == "hp" })
	let mpPotList = Set.potions.filter(function (p) { return p.category == "mp" })
	hpPotList.sort(function (a, b) { return parseFloat(b.use_at) - parseFloat(a.use_at) })
	mpPotList.sort(function (a, b) { return parseFloat(b.use_at) - parseFloat(a.use_at) })
	
	let useHpPot = { _destroyed: true }
	mod.hook('S_CREATURE_CHANGE_HP', 6, e => {
		if (!mod.settings.autoHpPot || !mod.game.me.is(e.target) || !mod.game.me.alive) return
		mod.game.me.hp = Math.round(Number(e.curHp) / Number(e.maxHp) * 100)
		
		if (!useHpPot._destroyed) return
		if (mod.game.me.hp<hpPotList[0].use_at) {
			raiseHp()
			useHpPot = mod.setInterval(raiseHp, 1000)
		} else {
			mod.clearInterval(useHpPot)
		}
	})
	function raiseHp() {
		if (mod.game.me.mounted || mod.game.me.inBattleground) return
		hpPotList.forEach(item => {
			if (mod.game.me.hp<item.use_at && mod.game.inventory.findInBag(item.id)) UseItem(item.id)
		})
	}
	let useMpPot = { _destroyed: true }
	mod.hook('S_PLAYER_CHANGE_MP', 1, e => {
		if (!mod.settings.autoMpPot || !mod.game.me.is(e.target) || !mod.game.me.alive) return
		mod.game.me.mp = Math.round(Number(e.curHp) / Number(e.maxHp) * 100)
		
		if (!useMpPot._destroyed) return
		if (mod.game.me.mp<mpPotList[0].use_at) {
			raiseMp()
			useMpPot = mod.setInterval(raiseMp, 1000)
		} else {
			mod.clearInterval(useMpPot)
		}
	})
	function raiseMp() {
		if (mod.game.me.mounted || mod.game.me.inBattleground) return
		mpPotList.forEach(item => {
			if (mod.game.me.mp<item.use_at && mod.game.inventory.findInBag(item.id)) UseItem(item.id)
		})
	}
	
	function UseItem(itemId) {
		var itemData = mod.game.inventory.find(itemId)
		if (!itemData || mod.game.me.mounted) return
		mod.command.message(`尝试使用 ${itemData.id} - ${itemData.data.name}`)
		mod.send('C_USE_ITEM', 3, {
			gameId: mod.game.me.gameId,
			id: itemData.id,
			dbid: itemData.dbid?itemData.dbid:0,
			target: 0,
			amount: 1,
			dest: {x: 0, y: 0, z: 0},
			loc:  {x: 0, y: 0, z: 0},
			w: 0,
			unk1: 0,
			unk2: 0,
			unk3: 0,
			unk4: true
		})
	}
	function TipMessage(msg, num) {
		mod.send('S_CHAT', (Ver<108?3 : 4), {
			channel: num?num:21,
			name: 'TIP',
			message: msg
		})
	}
	async function notifierMsg(msg, title = 'Tera Notification', icon='tera.png') {
		mod.clientInterface.flashWindow()
		
		if (Ver<100 || await mod.clientInterface.hasFocus()) return
		Notifier.notify({
			title: title,
			message: msg,
			icon: path.join(__dirname, 'icons', icon)
			// actions: ['OK', 'Cancel'],
		})
	}
	
	this.destructor = () => {
		if (ui) { ui.close(), ui = null }
		mod.clearAllTimeouts()
		mod.clearAllIntervals()
	}
}
