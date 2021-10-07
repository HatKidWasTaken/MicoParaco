const Config = require("./../config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

let prefix = Config.prefix;

module.exports.run = async (client, message, args) => {
  let author = message.author;
  let guild = message.guild;
  let member = message.member;
  let bm = args.join(" ");

if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;

message.delete().catch();
message.channel.send(bm);

}

module.exports.help = {
    name: "say"
}
