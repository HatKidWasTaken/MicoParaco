const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  
if(!message.content.startsWith(prefix)) return;

  let start = Date.now(); message.reply('Pong!').then(message => {
  let diff = (Date.now() - start);
  let API = (client.ws.ping).toFixed(2)

  let embed = new Discord.MessageEmbed()
  .setTitle(`🔔 Pong!`)
  .setColor(0xff2f2f)
  .addField("📶 Ping", `${diff}ms`)
  .addField("💻 API", `${API}ms`)
  message.edit({content: "", embed: embed});
  })


}

module.exports.help = {
    name: "ping",
    alias: "pi"
}
