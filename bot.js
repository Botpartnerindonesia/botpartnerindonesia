const Discord = require("discord.js");

const TOKEN = `${process.env.BOT_TOKEN}`;
const PREFIX = `v-`;

var vulture = new Discord.Client({disableEveryone: true})

vulture.on("ready", async () => {
    console.log(`Logged in as : ${vulture.user.tag}`)
    console.log(`I'm ready!`)
    vulture.user.setActivity(`${PREFIX}help`, {type: "LISTENING"})
    vulture.user.setStatus("online")
    bot.user.setUsername(`Vulture`)
});

vulture.on("message", async autoresponder => {
    if (autoresponder.channel.type === 'dm') return;

    if (autoresponder.author.bot) return;

    if (autoresponder.content.startsWith(PREFIX)) return;

    if (autoresponder.content === `<@${vulture.id}>`) {
        return autoresponder.channel.send(`Hi ${autoresponder.author}, My prefix is : \`${PREFIX}\``)
    }

    if (autoresponder.content === `<@!${vulture.id}>`) {
        return autoresponder.channel.send(`Hi ${autoresponder.author}, My prefix is : \`${PREFIX}\``)
    }
});

vulture.on("message", async message => {
    if (message.channel.type === 'dm') return;

    if (message.author.bot) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ")

    try {

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
        let latency = Date.now() - message.createdTimestamp
        message.channel.send(`:ping_pong: Pong! ${latency}ms`)
        break;

        case "help":
        message.channel.send(`HELP COMMAND NOT AVAIIBLE YET :/`)
        break;
    };

} catch(e) {
    console.error(e)
} finally {
    console.log(`${message.author.tag} is using ${PREFIX}${args[0]} command on ${message.guild}`)
};
});
vulture.login(TOKEN)
