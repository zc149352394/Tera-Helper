const DefaultSettings = {
	"autoHpPot": true,
	"autoMpPot": true,

	"autoServant": true,
	"servantUseAt": 50,

	"autoLoot": true,
	"lootDelay": 50,
	"filterMode": 1,
	"lootMode": 1,
	"ignoreItem": true,
	"autoUse": false,

	"distance": 20,
	"fovValue": 71,
	"camShake": true,

	"dungeon": true,
	"flyMore": true,

	"enchantChance": true,
	"evolutionChance": true,

	"instantEnchant": true,
	"instantEvolution": true,
	"instantRepair": true,
	"instantSoulbind": true,
	"instantMerge": true,
	"instantDismantle": true,

	"restDungeon": true,
	"lootingMethod" : true,

	"autoRevive": false,
	"instantRevive": false,

	"falling": true,
	"afker": true,
	"noCancelMote": true,

	"backstab": true,
	"skipMovie": true,
	"viewUserInfo": true,

	"noLockYou": true,
	"noActionScript": true,
	"noSocialAnimation": true,
	"noScreenEffect": true,

	"vanguard": true,
	"guildQuest": true,

	"archerTrap": true,

	"retaliate": true,
	"damageNumber": true,
	"damageNumberMe": true,
	"healNumber": true,
	"healNumberMe": true,
	"mpNumber": true,
	"mpNumberMe": true,

	"collectBall": true,
	"deadAnimation": true,
	"noArtisanIcon": true,

	"hideNPC": true,
	"tipNPC": true,
	"deadMark": true,

	"fakeBossGage": true,

	"tipGather": false,
	"gatherCategory": 0,

	"logItemId": false,
	"logNPC": false,
	"logReputation": false,

	"hideTank": false,
	"hideDps": false,
	"hideHeal": false,
	"onlyMembers": false
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings)
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings)
            return MigrateSettings(from_ver + 1, to_ver, settings)
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {})
                for (let option in oldsettings) {
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break
        }
        return settings
    }
}
