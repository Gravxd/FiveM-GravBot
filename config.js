

module.exports = {

    // bot system essentials
    "token": "ODAyNzE4OTE5NDI4Mjc2MjI1.YAzUQA.BgBHpek47Khafamw0rAHkqhlwyI",
    "embedColor": "#47ffbf",
    "prefix": "+",
    
    //commands 
    "searchCMD": "search",
    "lookupCMD": "lookup",
    "playtimeCMD": "playtime",
    "modlogsCMD": "modlogs",
    "aboutCMD": "about",
    "helpCMD": "help",
    "setupCMD": "setup",
    




    // whitelist system
    "enableWhitelistedChannels": "Yes", // If you want anyone to be able to use the commands in any channel, set to 'No'

    "whitelisted_bypass_roles": [ // these roles can bypass a non-whitelisted channel
        "795755304771649537", // you can use // owner for example to label your roles :)
        "795729552303063071"
    ],
    "whitelisted_channels": [ // If enableWhitelistedChannels is set to 'yes' then these will be the list of channels that commands can work without being
    // on the list of bypass roles
        "742798585808027730", // bot commands main discord
        "783432848941514752", // bot commands raf discord
        "807978201895796736" // staff cmds raf
    ],
    

    

// everything below is optional and is not needed for the core functions of the bot
// it is simply a status bot merged into this bot for convenience


    "enableLiveStatus": "No", // 'Yes' for enable, 'No' to disable
    //fivem server details (only needed if live status is enabled)
    // discord server details  (only needed if live status is enabled)
    "guildID": "742798585086607401", // id of the discord server 
    "channelID": "790630359678451742", // id of the channel for the status
    "messageID": "808498920253816833", // use the setup command to get this
    "serverName": "Lucaas Flight Simulator", // name for the title of the embed
    "refreshTime": "15", // the amount of seconds it takes the bot to refresh the status. Recommended: 15 minimum
}